package com.mangasite.domain;

import java.util.List;

public record MangaChapters(Integer id, String mangaName, List<Chapter> chapters) {}
