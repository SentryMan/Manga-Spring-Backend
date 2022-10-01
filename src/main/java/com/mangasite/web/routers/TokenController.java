package com.mangasite.web.routers;

import com.mangasite.services.ChapterService;
import com.mangasite.services.ConnectService;
import com.mangasite.services.TokenService;

import io.avaje.http.api.Controller;
import io.avaje.http.api.Get;
import io.avaje.http.api.Path;
import io.javalin.http.Context;

@Path("api")
@Controller
public class TokenController {
  private final ChapterService chapterService;

  public TokenController(ChapterService chapterService) {
    this.chapterService = chapterService;
  }

  @Get("/getToken")
  public void getToken(Context ctx) {
    ctx.result(TokenService.getToken(ctx));
  }

  @Get("/chapter/update/{id}")
  public void updateClients(int id, Context ctx) {
    ctx.status(202);
    chapterService.getByID(id).flatMap(ConnectService::fireAndForgetChapterUpdate).subscribe();
  }
}
