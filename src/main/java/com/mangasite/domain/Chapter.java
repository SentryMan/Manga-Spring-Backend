package com.mangasite.domain;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public record Chapter(
    String chapterIndex,
    /**
     * [0] is page number <br>
     * [1] is the image url <br>
     */
    List<String[]> images) {

  public String getChapterIndex() {
    return chapterIndex;
  }

  public String getChapterIndexNum() {
    return chapterIndex.replace("Chapter ", "");
  }

  public List<String[]> getImages() {
    return images;
  }
}
