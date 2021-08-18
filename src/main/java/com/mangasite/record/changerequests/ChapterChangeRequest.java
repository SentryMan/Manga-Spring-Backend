package com.mangasite.record.changerequests;

public record ChapterChangeRequest(
      Integer mangaId,
      String chapterIndex,
      String chapterName,
      Integer updateDate,
      String firstPageURL) {
}
