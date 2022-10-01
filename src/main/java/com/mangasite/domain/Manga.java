package com.mangasite.domain;

import java.util.List;

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
public class Manga {

  private Integer id;
  private String t;
  private List<String> c;
  private Integer h;
  private String im;
  private long ld;
  private Integer s;
  private MangaInfo info;

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
