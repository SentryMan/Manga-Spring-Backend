package com.mangasite.domain;

import java.math.BigInteger;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.mangasite.domain.requests.MangaChangeRequest;
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
@Document(collection = "Manga")
public class Manga {

  @Id private BigInteger ID;
  private int RealID;
  private String a;
  private List<String> c;
  private Integer h;
  private String im;
  private Integer ld;
  private Integer s;
  private String t;
  private MangaInfo info;

  public Manga(MangaChangeRequest request) {
    a = request.getAlias();
    c = request.getGenre();
    h = request.getHits();
    im = request.getCoverImageURL();
    ld = request.getUpdateDateint();
    s = request.getCompleteStatus();
    t = request.getTitle();
    info = new MangaInfo();
    info.setArtist(request.getArtist());
    info.setAuthor(request.getAuthor());

    final List<List<String>> list =
        List.of(
            List.of(
                request.getFirstChapterIndex(),
                "" + request.getUpdateDateint(),
                request.getFirstChapterName(),
                ""));

    info.setChapters(list);
    info.setDescription(request.getDescription());
    info.setReleased(request.getReleaseDate());
  }
}
