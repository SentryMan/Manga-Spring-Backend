package com.mangasite.domain.requests;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PageChangeRequest {
  private Integer mangaId;
  private String chapterIndex;
  private Integer pageIndex = 0;
  private String pageURL;
  private boolean newPage;

  public String getChapterIndex() {
    return "Chapter " + chapterIndex;
  }

  public Integer getPageIndex() {
    return pageIndex - 1;
  }
}
