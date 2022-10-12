package com.mangasite.repo;

import com.mangasite.domain.MangaChapters;
import com.mongodb.reactivestreams.client.MongoCollection;

import jakarta.inject.Inject;
import jakarta.inject.Singleton;

@Singleton
public class ChapterRepo extends Repository<MangaChapters> {
  @Inject
  public ChapterRepo(MongoCollection<MangaChapters> coll) {
    super(coll);
  }
}
