package com.mangasite.domain;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mangasite.record.MangaChangeRequest;

/**
 * A class that represents a single manga <br>
 * <br>
 * c = categories(genre) <br>
 * h = hits <br>
 * i = infoSourceUrl <br>
 * im = image source <br>
 * ld = last update <br>
 * s = completion status <br>
 * t = title <br>
 * info = more detailed info
 *
 * @author Josiah
 */
@Document(collection = "Manga")
public class Manga {

  @Id private Integer id;
  private String t;
  private List<String> c;
  private Integer h;
  private String im;
  private long ld;
  private Integer s;
  private MangaInfo info;

  @PersistenceConstructor
  public Manga(List<String> c, Integer h, String im, long ld, Integer s, String t, MangaInfo info) {
    this.c = c;
    this.h = h;
    this.im = im;
    this.ld = ld;
    this.s = s;
    this.t = t;
    this.info = info;
  }

  public Manga(MangaChangeRequest request) {
    c = request.genre();
    h = request.hits();
    im = request.coverImageURL();
    s = request.completeStatus();
    t = request.title();
    info = new MangaInfo();
    info.setArtist(request.artist());
    info.setAuthor(request.author());

    ld =
        request.updateDateStr() != null
            ? LocalDate.parse(request.updateDateStr())
                .atStartOfDay(ZoneId.systemDefault())
                .toEpochSecond()
            : request.updateDateint();

    final List<List<String>> list =
        List.of(
            List.of(
                request.firstChapterIndex(),
                "" + request.updateDateint(),
                request.firstChapterName(),
                ""));

    info.setChapters(list);
    info.setDescription(request.description());
    info.setReleased(request.releaseDate());
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public List<String> getC() {
    return c;
  }

  public void setC(List<String> c) {
    this.c = c;
  }

  public Integer getH() {
    return h;
  }

  public void setH(Integer h) {
    this.h = h;
  }

  public String getIm() {
    return im;
  }

  public void setIm(String im) {
    this.im = im;
  }

  public long getLd() {
    return ld;
  }

  public void setLd(long l) {
    ld = l;
  }

  public Integer getS() {
    return s;
  }

  public void setS(Integer s) {
    this.s = s;
  }

  public String getT() {
    return t;
  }

  public void setT(String t) {
    this.t = t;
  }

  public MangaInfo getInfo() {
    return info;
  }

  public void setInfo(MangaInfo info) {
    this.info = info;
  }

  @Override
  public String toString() {
    return "Manga [id=" + id + ", h=" + h + ", t=" + t + "]";
  }
}
