package com.mangasite.domain;

import java.util.List;
import org.springframework.data.annotation.PersistenceConstructor;

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
  private Double created;
  private String description;
  private Integer released;

  public MangaInfo() {}

  @PersistenceConstructor
  public MangaInfo(
      String artist,
      String author,
      List<List<String>> chapters,
      Double created,
      String description,
      Integer released) {
    this.artist = artist;
    this.author = author;
    this.chapters = chapters;
    this.created = created;
    this.description = description;
    this.released = released;
  }

  public String getArtist() {
    return artist;
  }

  public String getAuthor() {
    return author;
  }

  public List<List<String>> getChapters() {
    return chapters;
  }

  public Double getCreated() {
    return created;
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

  public void setCreated(Double created) {
    this.created = created;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setReleased(Integer released) {
    this.released = released;
  }
}
