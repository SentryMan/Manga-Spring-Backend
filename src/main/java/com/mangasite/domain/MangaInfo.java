package com.mangasite.domain;

import java.io.Serializable;
import java.util.List;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MangaInfo implements Serializable {

  private static final long serialVersionUID = 1L;

  private String artist;
  private String author;
  private List<List<String>> chapters;
  // [
  //   [0] <-- chapter's number
  //   [1] <-- chapter's date
  //   [2] <-- chapter's title
  //   [3] <-- chapter's id
  //   ],
  private Double created;
  private String description;
  private Integer released;
}
