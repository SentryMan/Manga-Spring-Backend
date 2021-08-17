package com.mangasite.record;

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
public record MangaChangeRequest(
	      List<String> genre,
	      Integer hits,
	      String coverImageURL,
	      Integer updateDateint,
	      String updateDateStr,
	      Integer completeStatus,
	      String title,
	      String artist,
	      String author,
	      String description,
	      Integer releaseDate,
	      String firstChapterName,
	      String firstChapterIndex,
	      String firstPageURL) {}
