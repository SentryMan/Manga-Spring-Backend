package com.mangasite.domain;

import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Chapter {

  private String chapterIndex;
  /**
   * [0] is page number <br>
   * [1] is the image url <br>
   * [2] is x resolution <br>
   * [3] is y resolution
   */
  private List<List<Object>> images;
}
