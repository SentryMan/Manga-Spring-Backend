package com.mangasite.domain.requests;

public class PageChangeRequest {
  private Integer mangaId;
  private String mangaName;
  private String chapterIndex;
  private String chapterName = "";
  private Integer pageIndex = 0;
  private String pageURL;
  private boolean usingAutoIncrement;

  public PageChangeRequest() {}

  public String getChapterIndex() {
    return "Chapter " + chapterIndex;
  }

  public String getChapterName() {
    return chapterName;
  }

  public Integer getMangaId() {
    return mangaId;
  }

  public Integer getPageIndex() {
    return pageIndex - 1;
  }

  public String getPageURL() {
    return pageURL;
  }

  public boolean isUsingAutoIncrement() {
    return usingAutoIncrement;
  }

  public void setChapterIndex(String chapterIndex) {
    this.chapterIndex = chapterIndex;
  }

  public void setChapterName(String name) {
    chapterName = name;
  }

  public void setMangaId(Integer mangaId) {
    this.mangaId = mangaId;
  }

  public void setPageURL(String pageURL) {
    this.pageURL = pageURL;
  }

  public void setUsingAutoIncrement(boolean usingAutoIncrement) {
    this.usingAutoIncrement = usingAutoIncrement;
  }

  public void setPageIndex(int pageindex) {
    pageIndex = pageindex;
  }

  public String getMangaName() {
    return mangaName;
  }

  public void setMangaName(String mangaName) {
    this.mangaName = mangaName;
  }
}
