package com.mangasite.domain;

import java.math.BigInteger;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.PersistenceConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Chapters")
public class MangaChapters {

  @Id private BigInteger id;
  private Integer RealID;
  private String mangaName;
  private List<Chapter> chapters;

  @PersistenceConstructor
  public MangaChapters(int RealID, String mangaName, List<Chapter> chapters) {

    this.RealID = RealID;
    this.mangaName = mangaName;
    this.chapters = chapters;
  }

  public MangaChapters() {}

  public MangaChapters(String mangaName, int realID, String index, String firstPageURL) {

    final var chapter = new Chapter();
    chapter.setChapterIndex("Chapter " + index);
    final List<List<Object>> imageList = List.of(List.of(0, firstPageURL));
    chapter.setImages(imageList);
    this.mangaName = mangaName;
    chapters = List.of(chapter);
    this.RealID = realID;
  }

  public BigInteger getId() {
    return id;
  }

  public void setId(BigInteger id) {
    this.id = id;
  }

  public Integer getRealID() {
    return RealID;
  }

  public void setRealID(Integer realID) {
    RealID = realID;
  }

  public String getMangaName() {
    return mangaName;
  }

  public void setMangaName(String mangaName) {
    this.mangaName = mangaName;
  }

  public List<Chapter> getChapters() {
    return chapters;
  }

  public void setChapters(List<Chapter> chapters) {
    this.chapters = chapters;
  }
}
