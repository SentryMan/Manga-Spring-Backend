package com.mangasite.domain;

import java.util.List;

public class MangaChapters {

  private Integer id;
  private String mangaName;
  private List<Chapter> chapters;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getMangaName() {
    return mangaName;
  }

  public void setMangaName(String mangaName) {
    this.mangaName = mangaName;
  }

  public List<Chapter> getChapters() {
    return chapters;
  }

  public void setChapters(List<Chapter> chapters) {
    this.chapters = chapters;
  }

  @Override
  public String toString() {
    return "MangaChapters [id=" + id + ", mangaName=" + mangaName + "]";
  }
}
