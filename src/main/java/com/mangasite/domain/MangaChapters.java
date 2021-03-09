package com.mangasite.domain;

import java.math.BigInteger;
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
  private List<Chapter> chapters;

  public MangaChapters(String mangaName, int realID, List<Chapter> pageList) {
    this.mangaName = mangaName;
    chapters = pageList;
    this.RealID = realID;
  }

  public MangaChapters(String mangaName, int realID, String index, String firstPageURL) {

    final var chapter = new Chapter();
    chapter.setChapterIndex("Chapter " + index);
    final List<List<Object>> imageList = List.of(List.of(0, firstPageURL));
    chapter.setImages(imageList);
    this.mangaName = mangaName;
    chapters = List.of(chapter);
    this.RealID = realID;
  }
}
