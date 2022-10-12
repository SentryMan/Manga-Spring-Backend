package com.mangasite.domain;

import java.util.List;

public record Chapter(
    String chapterIndex,
    /**
     * [0] is page number <br>
     * [1] is the image url <br>
     */
    List<List<String>> images) {}
