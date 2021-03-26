package com.mangasite.domain.requests;

import java.util.List;

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
public class MangaChangeRequest {

  private String alias;
  private List<String> genre;
  private Integer hits;
  private String coverImageURL;
  private Integer updateDateint;
  private Integer completeStatus;
  private String title;
  private String artist;
  private String author;
  private String description;
  private Integer releaseDate;
  private String firstChapterName;
  private String firstChapterIndex;
  private String firstPageURL;

  public MangaChangeRequest() {}

  public String getAlias() {
    return alias;
  }

  public List<String> getGenre() {
    return genre;
  }

  public Integer getHits() {
    return hits;
  }

  public String getCoverImageURL() {
    return coverImageURL;
  }

  public Integer getUpdateDateint() {
    return updateDateint;
  }

  public Integer getCompleteStatus() {
    return completeStatus;
  }

  public String getTitle() {
    return title;
  }

  public String getArtist() {
    return artist;
  }

  public String getAuthor() {
    return author;
  }

  public String getDescription() {
    return description;
  }

  public Integer getReleaseDate() {
    return releaseDate;
  }

  public String getFirstChapterName() {
    return firstChapterName;
  }

  public String getFirstChapterIndex() {
    return firstChapterIndex;
  }

  public String getFirstPageURL() {
    return firstPageURL;
  }

  public void setAlias(String alias) {
    this.alias = alias;
  }

  public void setGenre(List<String> genre) {
    this.genre = genre;
  }

  public void setHits(Integer hits) {
    this.hits = hits;
  }

  public void setCoverImageURL(String coverImageURL) {
    this.coverImageURL = coverImageURL;
  }

  public void setUpdateDateint(Integer updateDateint) {
    this.updateDateint = updateDateint;
  }

  public void setCompleteStatus(Integer completeStatus) {
    this.completeStatus = completeStatus;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setArtist(String artist) {
    this.artist = artist;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setReleaseDate(Integer releaseDate) {
    this.releaseDate = releaseDate;
  }

  public void setFirstChapterName(String firstChapterName) {
    this.firstChapterName = firstChapterName;
  }

  public void setFirstChapterIndex(String firstChapterIndex) {
    this.firstChapterIndex = firstChapterIndex;
  }

  public void setFirstPageURL(String firstPageURL) {
    this.firstPageURL = firstPageURL;
  }
}
