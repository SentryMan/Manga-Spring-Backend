package com.mangasite.controllers;

import com.mangasite.security.AppRole;
import com.mangasite.security.Roles;
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

  @Roles(AppRole.ANYONE)
  @Get("/getToken")
  public void getToken(Context ctx) {
    ctx.status(200).result(TokenService.getToken(ctx));
  }

  @Roles(AppRole.ADMIN)
  @Get("/chapter/update/{id}")
  public void updateClients(int id, Context ctx) {
    ctx.status(202);
    chapterService.getByID(id).flatMap(ConnectService::fireAndForgetChapterUpdate).subscribe();
  }
}
