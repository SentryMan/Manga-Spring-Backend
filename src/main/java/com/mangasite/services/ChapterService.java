package com.mangasite.services;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import org.springframework.stereotype.Service;
import com.mangasite.domain.Chapter;
import com.mangasite.domain.Manga;
import com.mangasite.domain.MangaChapters;
import com.mangasite.domain.requests.ChapterChangeRequest;
import com.mangasite.domain.requests.PageChangeRequest;
import com.mangasite.helper.SavedData;
import com.mangasite.repos.ChapterRepo;
import com.mangasite.repos.MangaRepo;
import lombok.RequiredArgsConstructor;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.function.TupleUtils;
import reactor.util.function.Tuple2;
import reactor.util.function.Tuples;

/**
 * Service Class That Returns Manga Chapters and Sets Missing IDs in a pinch
 *
 * @author Josiah
 */
@Service
@RequiredArgsConstructor
public class ChapterService {

  private final ChapterRepo repo;
  private final MangaRepo mangaRepo;
  private final SavedData savedData;

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

  public Mono<Tuple2<Manga, MangaChapters>> addChapter(ChapterChangeRequest request) {

    return mangaRepo
        .getByRealID(request.getMangaId())
        .zipWith(
            repo.getByRealID(request.getMangaId()),
            (m, c) -> {
              System.out.println("Updating " + m.getT() + "\n RealID: " + m.getRealID());
              final var chapter = new Chapter();
              chapter.setChapterIndex("Chapter " + request.getChapterIndex());

              chapter.setImages(List.of(List.of(1, request.getFirstPageURL(), "", "")));
              c.getImages().add(chapter);
              c.getImages().sort(Comparator.comparing(Chapter::getChapterIndex).reversed());
              System.out.println(
                  "Before change : " + m.getInfo().getChapters().size() + " chapters");
              m.setLd(request.getUpdateDate());
              final List<List<String>> chapters = m.getInfo().getChapters();
              chapters.add(
                  List.of(
                      request.getChapterIndex(),
                      "" + request.getUpdateDate(),
                      request.getChapterName(),
                      ""));
              chapters.sort(Comparator.comparing(l -> l.get(0)));
              Collections.reverse(chapters);
              System.out.println(
                  "After change : " + m.getInfo().getChapters().size() + " chapters");
              return Tuples.of(m, c);
            })
        .flatMap(TupleUtils.function((m, c) -> mangaRepo.save(m).zipWith(repo.save(c))));
  }

  public Mono<String> updatePageLink(PageChangeRequest request) {

    return repo.getByRealID(request.getMangaId())
        .map(
            c -> {
              if (request.isNewPage()) {

                final List<List<Object>> pages =
                    c.getImages()
                        .stream()
                        .filter(p -> p.getChapterIndex().equals(request.getChapterIndex()))
                        .map(Chapter::getImages)
                        .findAny()
                        .get();
                pages.add(List.of(request.getPageIndex(), request.getPageURL(), "", ""));
                pages.sort(Comparator.comparingInt(l -> (int) l.get(0)));

                Collections.reverse(pages);

              } else {
                c.getImages()
                    .stream()
                    .filter(p -> p.getChapterIndex().equals(request.getChapterIndex()))
                    .map(Chapter::getImages)
                    .flatMap(List::stream)
                    .filter(i -> i.get(0) == request.getPageIndex())
                    .forEach(i -> i.set(1, request.getPageURL()));
              }
              return c;
            })
        .flatMap(repo::save)
        .map(
            c ->
                "Updated/Added Chapter "
                    + request.getChapterIndex()
                    + " Page "
                    + request.getPageIndex()
                    + " of manga: "
                    + c.getMangaName()
                    + " With Image URL: "
                    + request.getPageURL())
        .doOnNext(System.out::println);
  }

  /**
   * This method adds numerical IDs to Chapters <br>
   * Use in the event that there are missing IDs in the database
   */
  public void addID() {
    System.out.println("Here We go");
    repo.findAll()
        .doOnComplete(() -> System.out.println("All Chapters have IDs"))
        .flatMap(
            chapterData ->
                Flux.fromIterable(savedData.getSavedList())
                    .filter(
                        m ->
                            chapterData.getMangaName().equals(m.getT())
                                    && chapterData.getRealID() == null
                                || chapterData.getMangaName().equals(m.getT())
                                    && chapterData.getRealID() == 0)
                    .flatMap(
                        manga -> {
                          System.out.println("Adding ID to " + chapterData.getMangaName());
                          chapterData.setRealID(manga.getRealID());
                          return repo.save(chapterData);
                        }))
        .subscribe();
  }
}
