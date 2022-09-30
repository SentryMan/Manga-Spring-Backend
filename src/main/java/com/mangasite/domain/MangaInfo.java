package com.mangasite.domain;

import java.util.List;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public record MangaInfo(
    String artist,
    String author,
    // [
    //   [0] <-- chapter's number
    //   [1] <-- chapter's date
    //   [2] <-- chapter's title
    //   [3] <-- chapter's id
    //   ],
    List<List<String>> chapters,
    String description,
    Integer released) {}
