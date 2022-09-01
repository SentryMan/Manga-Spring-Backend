package com.mangasite.domain;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public record Chapter(
    String chapterIndex,
    /**
     * [0] is page number <br>
     * [1] is the image url <br>
     * [2] is x resolution <br>
     * [3] is y resolution
     */
    List<List<Object>> images) {

  public String getChapterIndex() {
    return chapterIndex;
  }

  public String getChapterIndexNum() {
    return chapterIndex.replace("Chapter ", "");
  }

  public List<List<Object>> getImages() {
    return images;
  }
}
