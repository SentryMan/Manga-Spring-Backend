package com.mangasite.domain;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Chapters")
public record MangaChapters(@Id Integer id, String mangaName, List<Chapter> chapters) {}
