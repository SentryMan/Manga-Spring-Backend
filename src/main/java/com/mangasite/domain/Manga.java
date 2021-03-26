package com.mangasite.domain;

import java.math.BigInteger;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import com.mangasite.domain.requests.MangaChangeRequest;

/**
 * A class that represents a single manga <br>
 * <br>
 * a = alias <br>
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

  @Id private BigInteger id;
  private int realID;
  private String a;
  private List<String> c;
  private Integer h;
  private String im;
  private Integer ld;
  private Integer s;
  private String t;
  private MangaInfo info;

  @PersistenceConstructor
  public Manga(
      int realID,
      String a,
      List<String> c,
      Integer h,
      String im,
      Integer ld,
      Integer s,
      String t,
      MangaInfo info) {
    this.realID = realID;
    this.a = a;
    this.c = c;
    this.h = h;
    this.im = im;
    this.ld = ld;
    this.s = s;
    this.t = t;
    this.info = info;
  }

  public Manga(MangaChangeRequest request) {
    a = request.getAlias();
    c = request.getGenre();
    h = request.getHits();
    im = request.getCoverImageURL();
    ld = request.getUpdateDateint();
    s = request.getCompleteStatus();
    t = request.getTitle();
    info = new MangaInfo();
    info.setArtist(request.getArtist());
    info.setAuthor(request.getAuthor());

    final List<List<String>> list =
        List.of(
            List.of(
                request.getFirstChapterIndex(),
                "" + request.getUpdateDateint(),
                request.getFirstChapterName(),
                ""));

    info.setChapters(list);
    info.setDescription(request.getDescription());
    info.setReleased(request.getReleaseDate());
  }

  public int getRealID() {
    return realID;
  }

  public void setRealID(int realID) {
    this.realID = realID;
  }

  public String getA() {
    return a;
  }

  public void setA(String a) {
    this.a = a;
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

  public Integer getLd() {
    return ld;
  }

  public void setLd(Integer ld) {
    this.ld = ld;
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

  public BigInteger getId() {
    return id;
  }

  public void setId(BigInteger id) {
    this.id = id;
  }
}
