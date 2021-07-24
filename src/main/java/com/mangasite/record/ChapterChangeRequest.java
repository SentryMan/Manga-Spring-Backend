package com.mangasite.record;

public record ChapterChangeRequest(
      Integer mangaId,
      String chapterIndex,
      String chapterName,
      Integer updateDate,
      String firstPageURL) {
}
