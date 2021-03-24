package com.mangasite.domain;

import java.util.List;

public class Chapter {

  private String chapterIndex;
  /**
   * [0] is page number <br>
   * [1] is the image url <br>
   * [2] is x resolution <br>
   * [3] is y resolution
   */
  private List<List<Object>> images;

  public String getChapterIndex() {
    return chapterIndex;
  }

  public void setChapterIndex(String chapterIndex) {
    this.chapterIndex = chapterIndex;
  }

  public List<List<Object>> getImages() {
    return images;
  }

  public void setImages(List<List<Object>> images) {
    this.images = images;
  }
}
