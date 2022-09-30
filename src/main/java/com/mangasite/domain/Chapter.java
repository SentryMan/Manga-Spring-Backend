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
    List<List<String>> images) {}
