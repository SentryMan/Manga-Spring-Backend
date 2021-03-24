package com.mangasite.domain.requests;

public class ChapterChangeRequest {
  private Integer mangaId;
  private String chapterIndex;
  private String chapterName;
  private Integer updateDate;
  private String firstPageURL;

  public ChapterChangeRequest() {}

  public ChapterChangeRequest(
      Integer mangaId,
      String chapterIndex,
      String chapterName,
      Integer updateDate,
      String firstPageURL) {
    this.mangaId = mangaId;
    this.chapterIndex = chapterIndex;
    this.chapterName = chapterName;
    this.updateDate = updateDate;
    this.firstPageURL = firstPageURL;
  }

  public Integer getMangaId() {
    return mangaId;
  }

  public String getChapterIndex() {
    return chapterIndex;
  }

  public String getChapterName() {
    return chapterName;
  }

  public Integer getUpdateDate() {
    return updateDate;
  }

  public String getFirstPageURL() {
    return firstPageURL;
  }

  public void setMangaId(Integer mangaId) {
    this.mangaId = mangaId;
  }

  public void setChapterIndex(String chapterIndex) {
    this.chapterIndex = chapterIndex;
  }

  public void setChapterName(String chapterName) {
    this.chapterName = chapterName;
  }

  public void setUpdateDate(Integer updateDate) {
    this.updateDate = updateDate;
  }

  public void setFirstPageURL(String firstPageURL) {
    this.firstPageURL = firstPageURL;
  }
}
