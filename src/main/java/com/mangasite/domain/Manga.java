package com.mangasite.domain;

import java.util.List;

/**
 * A class that represents a single manga <br>
 * <br>
 * c = categories(genre) <br>
 * h = hits <br>
 * i = infoSourceUrl <br>
 * im = image source <br>
 * ld = last update <br>
 * s = completion status <br>
 * t = title <br>
 * info = more detailed info
 *
 * @author Josiah
 */
public record Manga(
    Integer id,
    String t,
    List<String> c,
    Integer h,
    String im,
    long ld,
    Integer s,
    MangaInfo info) {}
