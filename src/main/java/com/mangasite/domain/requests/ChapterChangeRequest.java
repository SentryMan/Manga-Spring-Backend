package com.mangasite.domain.requests;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChapterChangeRequest {
  private Integer mangaId;
  private String chapterIndex;
  private String chapterName;
  private Integer updateDate;
  private String firstPageURL;
}
