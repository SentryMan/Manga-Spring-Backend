package com.mangasite.domain;

import java.util.List;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class MangaInfo {

  private String artist;
  private String author;
  private List<List<String>> chapters;
  // [
  //   [0] <-- chapter's number
  //   [1] <-- chapter's date
  //   [2] <-- chapter's title
  //   [3] <-- chapter's id
  //   ],
  private String description;
  private Integer released;

  @PersistenceConstructor
  public MangaInfo(
      String artist,
      String author,
      List<List<String>> chapters,
      String description,
      Integer released) {
    this.artist = artist;
    this.author = author;
    this.chapters = chapters;
    this.description = description;
    this.released = released;
  }

  public MangaInfo() {}

  public String getArtist() {
    return artist;
  }

  public String getAuthor() {
    return author;
  }

  public List<List<String>> getChapters() {
    return chapters;
  }

  public String getDescription() {
    return description;
  }

  public Integer getReleased() {
    return released;
  }

  public void setArtist(String artist) {
    this.artist = artist;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public void setChapters(List<List<String>> chapters) {
    this.chapters = chapters;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setReleased(Integer released) {
    this.released = released;
  }
}
