package com.mangasite.domain.requests;

import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * A class that represents a single manga <br>
 * <br>
 * a = alias <br>
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
@Data
@NoArgsConstructor
public class MangaChangeRequest {

  private String alias;
  private List<String> genre;
  private Integer hits;
  private String coverImageURL;
  private Integer updateDateint;
  private Integer completeStatus;
  private String title;
  private String artist;
  private String author;
  private String description;
  private Integer releaseDate;
  private String firstChapterName;
  private String firstChapterIndex;
  private String firstPageURL;
}
