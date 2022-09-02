package com.mangasite.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Chapters")
public class MangaChapters {

  @Id private Integer id;
  private String mangaName;
  private List<Chapter> chapters;

  @PersistenceConstructor
  public MangaChapters(String mangaName, List<Chapter> chapters) {

    this.mangaName = mangaName;
    this.chapters = chapters;
  }

  public MangaChapters(int id, String mangaName, String index, String firstPageURL) {

    this.id = id;
    final var chapter = new Chapter("Chapter " + index, List.of(List.of(0, firstPageURL)));
    this.mangaName = mangaName;
    chapters = List.of(chapter);
  }

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
