package com.mangasite.record;

public record PageChangeRequest (
      Integer mangaId,
      String mangaName,
      String chapterIndex,
      String chapterName,
      Integer pageIndex,
      String pageURL,
      boolean usingAutoIncrement){}