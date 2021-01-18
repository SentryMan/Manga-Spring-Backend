package com.collabera.models;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Document(collection = "Chapters")
public class MangaChapters {

  @Id private BigInteger id;
  private Integer RealID;
  private String mangaName;
  private List<Chapter> images;

  public MangaChapters(String mangaName, int realID, List<Chapter> pageList) {
    this.mangaName = mangaName;
    images = pageList;
    this.RealID = realID;
  }

  public MangaChapters(String mangaName, int realID, String index, String firstPageURL) {

    final Chapter pages = new Chapter();
    pages.setChapterIndex("Chapter " + index);
    final List<List<Object>> image =
        Arrays.asList(new ArrayList<>(Arrays.asList(0, firstPageURL, "", "")));
    pages.setImages(image);
    this.mangaName = mangaName;
    images = Arrays.asList(pages);
    this.RealID = realID;
  }
}
