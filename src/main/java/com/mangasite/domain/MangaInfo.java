package com.mangasite.domain;

import java.io.Serializable;
import java.util.List;

public class MangaInfo implements Serializable {

  private static final long serialVersionUID = 1L;

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

  public static long getSerialversionuid() {
    return serialVersionUID;
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
