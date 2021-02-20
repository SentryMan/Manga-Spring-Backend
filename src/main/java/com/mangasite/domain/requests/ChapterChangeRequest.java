package com.mangasite.domain.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChapterChangeRequest {
  private Integer mangaId;
  private String chapterIndex;
  private String chapterName;
  private Integer updateDate;
  private String firstPageURL;
}
