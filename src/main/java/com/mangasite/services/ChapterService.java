package com.mangasite.services;

import static java.util.Collections.reverse;
import static java.util.Collections.singleton;
import static java.util.Comparator.comparingDouble;
import static java.util.Comparator.comparingInt;
import static reactor.core.publisher.Mono.just;
import static reactor.function.TupleUtils.function;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

import com.mangasite.domain.Chapter;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.record.ChapterChangeRequest;
import com.mangasite.record.PageChangeRequest;
import com.mangasite.repo.ChapterRepo;
import com.mangasite.repo.MangaRepo;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.util.function.Tuple2;
import reactor.util.function.Tuples;

/**
 * Service Class That Returns Manga Chapters and Sets Missing IDs in a pinch
 *
 * @author Josiah
 */
@Service
public class ChapterService {

  private final ChapterRepo repo;
  private final MangaRepo mangaRepo;

  public ChapterService(ChapterRepo repo, MangaRepo mangaRepo) {
    this.repo = repo;
    this.mangaRepo = mangaRepo;
  }

  /**
   * Returns a Mono<Chapter> that contains the Chapter with the given name
   *
   * @param ChapterID the numerical ID of the chapter
   */
  public Mono<MangaChapters> getByID(int ChapterID) {

    return repo.getByRealID(ChapterID);
  }

  /** Returns a single Mono<Chapter> that contains the Chapter with the given name */
  public Mono<MangaChapters> getOne(String name) {

    return repo.getByMangaName(name);
  }

  /**
   * Adds Chapters to a specific Manga
   *
   * @param requestList list of chapter requests to execute
   */
  public Mono<Tuple2<Manga, MangaChapters>> addChapter(List<ChapterChangeRequest> requestList) {

    return mangaRepo
        .getByRealID(requestList.get(0).mangaId())
        .zipWith(
            repo.getByRealID(requestList.get(0).mangaId()),
            (m, c) -> {
              System.out.println("Updating " + m.getT() + "\nRealID: " + m.getRealID());
              System.out.println(
                  "Before change : " + m.getInfo().getChapters().size() + " chapters");
              requestList.forEach(processChapterRequests(m, c));
              System.out.println(
                  "After change : " + m.getInfo().getChapters().size() + " chapters");
              return Tuples.of(m, c);
            })
        .flatMap(function((m, c) -> mangaRepo.save(m).zipWith(repo.save(c))));
  }

  /**
   * Adds Pages to a Chapter
   *
   * @param requestList list of page requests to execute
   */
  public Flux<Tuple2<PageChangeRequest, String>> updatePageLink(
      int id, List<PageChangeRequest> requestList) {

    return repo.getByRealID(id)
        // if Chapter Doesn't exist, create in table
        .flatMap(chapterExistsFunc(requestList))
        .doOnNext(c -> requestList.forEach(processPageRequests(c)))
        .flatMap(repo::save)
        .map(MangaChapters::getMangaName)
        .map(n -> requestList.stream().map(r -> Tuples.of(r, n)))
        .flatMapMany(Flux::fromStream);
  }

  /**
   * Consumer that appends new chapters
   *
   * @param manga the current manga that's being modified
   * @param mangaChapters the chapter object being modified
   */
  private Consumer<ChapterChangeRequest> processChapterRequests(
      Manga manga, MangaChapters mangaChapters) {

    return request -> {
      final var chapter = new Chapter();
      chapter.setChapterIndex("Chapter " + request.chapterIndex());
      chapter.setImages(List.of(List.of(0, request.firstPageURL(), "", "")));

      final var images = mangaChapters.getChapters();
      images.add(chapter);

      if (request.updateDate() > manga.getLd()) manga.setLd(request.updateDate());
      final var mangaInfoChapters = manga.getInfo().getChapters();
      mangaInfoChapters.add(
          List.of(request.chapterIndex(), "" + request.updateDate(), request.chapterName(), ""));

      images.sort(comparingDouble(chap -> Double.parseDouble(chap.getChapterIndex().substring(8))));
      mangaInfoChapters.sort(comparingDouble(l -> Double.parseDouble(l.get(0))));
      reverse(images);
      reverse(mangaInfoChapters);
      System.out.println(chapter.getChapterIndex() + " Added");
    };
  }

  /**
   * Consumer that appends/updates pages to a chapter
   *
   * @param mangaChapters the chapter object being modified
   */
  private Consumer<PageChangeRequest> processPageRequests(MangaChapters chapters) {

    return r -> {
      chapters
          .getChapters()
          .stream()
          .filter(p -> p.getChapterIndex().equals(r.chapterIndex()))
          .map(Chapter::getImages)
          .flatMap(List::stream)
          .filter(i -> i.get(0) == r.pageIndex())
          .findFirst()
          .ifPresentOrElse(
              page -> page.set(1, r.pageURL()),
              () ->
                  chapters
                      .getChapters()
                      .stream()
                      .filter(p -> p.getChapterIndex().equals(r.chapterIndex()))
                      .map(Chapter::getImages)
                      .forEach(
                          pages -> {
                            pages.add(List.of(r.pageIndex(), r.pageURL(), "", ""));
                            pages.sort(comparingInt(l -> (int) l.get(0)));
                            reverse(pages);
                          }));
    };
  }

  /**
   * Function to add new chapter if a pageRequest is for a non-existent chapter
   *
   * @param request List of page requests to check
   */
  private Function<MangaChapters, Mono<MangaChapters>> chapterExistsFunc(
      List<PageChangeRequest> request) {
    return c -> {
      final var existingChapterIndice = new ArrayList<Double>();

      c.getChapters()
          .stream()
          .map(Chapter::getChapterIndex)
          .map(s -> s.replace("Chapter ", ""))
          .mapToDouble(Double::parseDouble)
          .forEach(existingChapterIndice::add);

      final Predicate<PageChangeRequest> indexExistsTest =
          r ->
              !existingChapterIndice.contains(
                  Double.parseDouble(r.chapterIndex().replace("Chapter ", "")));

      final var chaptersDontExist = request.stream().anyMatch(indexExistsTest);
      if (chaptersDontExist) {
        final var chapterRequests =
            request
                .stream()
                .filter(indexExistsTest)
                .filter(distinctByKey(PageChangeRequest::chapterIndex))
                .map(
                    r ->
                        new ChapterChangeRequest(
                            r.mangaId(),
                            r.chapterIndex().replace("Chapter ", ""),
                            r.chapterName(),
                            0,
                            ""))
                .toList();

        return addChapter(chapterRequests).then(repo.getByRealID(c.getRealID()));
      }
      return just(c);
    };
  }

  public static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
    final Set<Object> seen = ConcurrentHashMap.newKeySet();
    return t -> seen.add(keyExtractor.apply(t));
  }

  /**
   * This method Deletes Duplicate Chapters for a specific Manga
   *
   * @return
   */
  public void deleteDuplicateChapters(Optional<Integer> idParam) {

    idParam.ifPresentOrElse(
        id -> {
          repo.getByRealID(id)
              .flatMap(this::removeChapterDups)
              .mergeWith(mangaRepo.getByRealID(id).flatMap(this::removeMangaDups))
              .distinct()
              .subscribe(System.out::println);
        },
        () -> {
          final var mangaFixFlux = mangaRepo.findAll().flatMap(this::removeMangaDups);

          repo.findAll()
              .flatMap(this::removeChapterDups)
              .mergeWith(mangaFixFlux)
              .distinct()
              .subscribe(System.out::println);
        });
  }

  Mono<String> removeMangaDups(Manga manga) {

    final var nameSet = new HashSet<String>();
    final var name = manga.getT();
    final var removedFlag = manga.getInfo().getChapters().removeIf(c -> !nameSet.add(c.get(0)));
    manga.getInfo().getChapters().removeAll(singleton(null));
    return removedFlag
        ? mangaRepo.save(manga).map(c -> "Removed duplicates from " + name)
        : just(name + " Had No Duplicate Chapters");
  }

  Mono<String> removeChapterDups(MangaChapters chapter) {
    final var nameSet = new HashSet<String>();
    final var name = chapter.getMangaName();
    final var removedFlag = chapter.getChapters().removeIf(c -> !nameSet.add(c.getChapterIndex()));
    chapter.getChapters().removeAll(singleton(null));
    return removedFlag
        ? repo.save(chapter).map(c -> "Removed duplicates from " + name)
        : just(name + " Had No Duplicate Chapters");
  }
}
