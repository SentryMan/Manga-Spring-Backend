(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\m0use\OneDrive\Documents\GitHub\Manga-Spring-FrontEnd\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0zBU":
    /*!***************************************************!*\
      !*** ./src/app/Components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function zBU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-webstorage-service */
      "SX+u");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Services_manga_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Services/manga-list-service */
      "m4Aj");
      /* harmony import */


      var _Services_manga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Services/manga.service */
      "VlvX");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-device-detector */
      "9YtQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../SubComponents/spinner/spinner.component */
      "Vxzm");
      /* harmony import */


      var _popular_manga_popular_manga_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./popular-manga/popular-manga.component */
      "EwtE");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../Directives/ImageDirective */
      "nv7p");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function HomeComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading Site...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("wedge", true)("isMobile", ctx_r0.isMobile);
        }
      }

      function HomeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " POPULAR MANGA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-popular-manga");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_2_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_2_tr_17_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r9.mangaService.setPageIndex(undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var manga_r8 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r3.getImage(manga_r8.im), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-page/", manga_r8.realID, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](manga_r8.t);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/manga-reader/", manga_r8.realID, "/", manga_r8.info.chapters[0][0], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", manga_r8.info.chapters[0][0], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Last updated ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 7, manga_r8.ld * 1000, "MM-dd-yyyy"), "");
        }
      }

      function HomeComponent_div_2_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Continue Reading");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r4.currentlyReading.im, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/manga-reader/", ctx_r4.currentlyReading.realID, "/", ctx_r4.currentlyReadingChapter.replace("Chapter ", ""), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.currentlyReading.t);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/manga-reader/", ctx_r4.currentlyReading.realID, "/", ctx_r4.currentlyReadingChapter.replace("Chapter ", ""), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.currentlyReadingChapter);
        }
      }

      function HomeComponent_div_2_div_43_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var genre_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-list/", genre_r11, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](genre_r11);
        }
      }

      function HomeComponent_div_2_div_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_2_div_43_a_1_Template, 3, 2, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.showGenre || i_r12 < 6);
        }
      }

      function HomeComponent_div_2_button_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_2_button_44_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r15.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_2_button_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_div_2_button_45_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r17.show();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function HomeComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " LATEST MANGA");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Chapter");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, HomeComponent_div_2_tr_17_Template, 14, 10, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " ANNOUNCEMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Hey Everyone,");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "small", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "If you find any bugs or misplaced chapters send us a email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Here");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, HomeComponent_div_2_div_36_Template, 18, 7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " BROWSE BY GENRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, HomeComponent_div_2_div_43_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, HomeComponent_div_2_button_44_Template, 2, 0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, HomeComponent_div_2_button_45_Template, 2, 0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.latestManga);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r2.anouncement, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.currentlyReading && ctx_r2.currentlyReadingChapter);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.genres);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.showGenre);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.showGenre);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(listService, mangaService, title, deviceService, storage) {
          _classCallCheck(this, HomeComponent);

          this.listService = listService;
          this.mangaService = mangaService;
          this.latestManga = [];
          this.showGenre = false; // tslint:disable-next-line:max-line-length

          this.anouncement = "Welcome to Manga-Spring! This site was built to showcase technical expertise in full-stack development. The coolest thing about this site is that it uses the RSocket network protocol to send/recieve data";
          this.genres = ["Action", "Adventure", "Comedy", "Comic", "Drama", "Demons", "Doujinshi", "Ecchi", "Fantasy", "Harem", "Historical", "Horror", "Josei", "Martial Arts", "Magic", "Mature", "Mecha", "Mystery", "Psychological", "Romance", "Seinen", "School Life", "Shoujo", "Sci-fi", "Shounen", "Supernatural", "Sports", "Tragedy"];
          title.setTitle("MangaSpring");
          this.isMobile = deviceService.isMobile();
          this.currentlyReading = storage.get("Manga");
          this.currentlyReadingChapter = mangaService.chapterIndex;
        }

        _createClass(HomeComponent, [{
          key: "getLatest",
          value: function getLatest() {
            // this.latestManga = this.latestManga.filter(item => item.ld > new Date(Date.now()).getTime() / 1000 - 604800 && !item.c.includes("Adult"));
            this.sortByTime(); //set size later

            this.latestManga.length = 6;
          }
        }, {
          key: "show",
          value: function show() {
            this.showGenre = !this.showGenre;
          }
        }, {
          key: "setChapter",
          value: function setChapter(manga, chapter) {
            this.mangaService.setManga(manga);
            this.mangaService.setChapterIndex(chapter);
          }
        }, {
          key: "sortByTime",
          value: function sortByTime() {
            return this.latestManga.sort(function (a, b) {
              return b.ld - a.ld;
            });
          }
        }, {
          key: "getImage",
          value: function getImage(url) {
            if (url.startsWith("http")) {
              return url;
            } else {
              return "/image/" + url;
            }
          }
        }, {
          key: "updateList",
          value: function updateList(manga) {
            if (!this.latestManga.find(function (m) {
              return m.realID === manga.realID;
            })) this.latestManga.push(manga);else {
              for (var i = 0; i < this.latestManga.length; i++) {
                if (this.latestManga[i].realID === manga.realID) this.latestManga[i] = manga;
              }
            }
            this.getLatest();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //fix when we get a lot of manga
            if (this.listService.mangaList) {
              this.latestManga = this.listService.mangaList.slice();
              this.getLatest();
              this.listService.recentSubject.subscribe(function (list) {
                _this.latestManga = list;

                _this.getLatest();

                _this.listService.recent = list;
              });
            } else if (!this.listService.mangaList && this.listService.recent) {
              this.latestManga = this.listService.recent;
              this.getLatest();
            } else {
              this.listService.mangaSubject.subscribe(function (list) {
                _this.latestManga = list.slice();

                _this.getLatest();
              });
            }

            this.listService.changeSubject.subscribe(function (m) {
              return _this.updateList(m);
            });
            window.scroll(0, 0);
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_2__["MangaListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_manga_service__WEBPACK_IMPORTED_MODULE_3__["MangaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 3,
        consts: [["class", "container justify-content-center", "style", "text-align: center;", 4, "ngIf"], ["class", "container favorites", 4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container", "justify-content-center", 2, "text-align", "center"], [3, "wedge", "isMobile"], [1, "container", "favorites"], [1, "fas", "fa-fire"], [1, "row", "container"], [1, "container"], [1, "row"], [1, "col-lg-6", "favorites2"], [1, "fas", "fa-clock"], [1, "table", "table-bordered", "table-hover"], [1, "thead-dark", "text-center"], ["scope", "col"], ["scope", "col", 1, "hidecol"], [4, "ngFor", "ngForOf"], [1, "col-lg-6", "message"], [1, "card", "announcement"], [1, "card-header"], [1, "fas", "fa-exclamation-triangle"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-footer"], [1, "text-muted"], ["href", "mailto:someone@example.com?Subject=Report", "target", "_top"], [1, "card", "top-rated"], ["src", "../../assets/imageedit_11_3620823692.png", 1, "logo"], [1, "card-body", "row"], ["class", "col-sm-4", 4, "ngFor", "ngForOf"], ["class", "btn btn-success showMore", 3, "click", 4, "ngIf"], [1, "text-center", "align-middle"], ["alt", "Card image cap", 1, "img", "card-img-top", 3, "src"], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "card-text", 3, "routerLink", "click"], [1, "hidecol", "text-muted", "text-center", "align-middle"], [1, "col-lg-10", "favorites2"], [1, "fas", "fa-book-reader"], [1, "col-sm-4"], ["routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], [1, "btn", "btn-success", "showMore", 3, "click"], [1, "fas", "fa-angle-down"], [1, "fas", "fa-angle-up"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeComponent_div_0_Template, 4, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 6, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 46, 6, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.latestManga.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.latestManga.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.latestManga.length !== 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _popular_manga_popular_manga_component__WEBPACK_IMPORTED_MODULE_8__["PopularMangaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_9__["ImagePreloadDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [".favorites[_ngcontent-%COMP%] {\r\n  margin-top: 2%;\r\n  margin-bottom: 3%;\r\n  background-color: white;\r\n  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.favorites2[_ngcontent-%COMP%] {\r\n  margin-top: 2%;\r\n  margin-bottom: 3%;\r\n  background-color: white;\r\n  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.message[_ngcontent-%COMP%] {\r\n  margin-top: 2%;\r\n  margin-bottom: 3%;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: rgb(245, 245, 245);\r\n}\r\n\r\n.announcement[_ngcontent-%COMP%] {\r\n  margin-bottom: 5%;\r\n  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.top-rated[_ngcontent-%COMP%] {\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 9%;\r\n}\r\n\r\nth[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.img-alert[_ngcontent-%COMP%] {\r\n  width: 7%;\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .hidecol[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.showMore[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 2%;\r\n}\r\n\r\n.fa-fire[_ngcontent-%COMP%] {\r\n  color: red;\r\n}\r\n\r\n.fa-exclamation-triangle[_ngcontent-%COMP%] {\r\n  color: rgb(221, 192, 29);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBR3ZCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBR3ZCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFHakIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUdqQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvcml0ZXMge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLmZhdm9yaXRlczIge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbn1cclxuXHJcbi5hbm5vdW5jZW1lbnQge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG5cclxuLnRvcC1yYXRlZCB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggOXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggOXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICB3aWR0aDogOSU7XHJcbn1cclxuXHJcbnRoIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4uaW1nLWFsZXJ0IHtcclxuICB3aWR0aDogNyU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuaGlkZWNvbCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnNob3dNb3JlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLmZhLWZpcmUge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mYS1leGNsYW1hdGlvbi10cmlhbmdsZSB7XHJcbiAgY29sb3I6IHJnYigyMjEsIDE5MiwgMjkpO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "3gGP":
    /*!*********************************************!*\
      !*** ./src/app/Services/rsocket-service.ts ***!
      \*********************************************/

    /*! exports provided: RSocketService */

    /***/
    function gGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RSocketService", function () {
        return RSocketService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-webstorage-service */
      "SX+u");
      /* harmony import */


      var rsocket_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rsocket-core */
      "9Erv");
      /* harmony import */


      var rsocket_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rsocket_core__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _RSocketUtil_RSocketClientResponder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../RSocketUtil/RSocketClientResponder */
      "TDrE");
      /* harmony import */


      var _RSocketUtil_RSocketConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../RSocketUtil/RSocketConfig */
      "Vn/V");
      /* harmony import */


      var _RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../RSocketUtil/RsocketUtils */
      "ipHg");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-device-detector */
      "9YtQ");

      var RSocketService = /*#__PURE__*/function () {
        function RSocketService(http, deviceService, storage) {
          var _this2 = this;

          _classCallCheck(this, RSocketService);

          this.socketReady = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.changeStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.mangaListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.latestSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.popularSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.connectFailed = false;
          this.connected = false;
          this.currentMangaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          var id = storage.get("uniqueId");

          if (!id) {
            id = deviceService.os + "-Manga-Spring-" + Math.floor(Math.random() * Math.floor(1000));
            storage.set("uniqueId", id);
          }

          var responder = new _RSocketUtil_RSocketClientResponder__WEBPACK_IMPORTED_MODULE_5__["RSocketClientResponder"](this.currentMangaSubject, deviceService.getDeviceInfo());
          var tokenRequest = http.get("/api/getToken", {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Content-Type", "text/plain"),
            responseType: "text"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retryWhen"])(function (errors) {
            return errors.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(10));
          }));

          var tokenConsumer = function tokenConsumer(token) {
            _this2.connectRSocket(new _RSocketUtil_RSocketConfig__WEBPACK_IMPORTED_MODULE_6__["RSocketConfig"](id, token, responder).rsocketConfig);

            _this2.subscribe2RSocket();
          };

          tokenRequest.subscribe(tokenConsumer);
          setInterval(function () {
            if (_this2.connectFailed) {
              _this2.connectFailed = false;
              console.log("Attempting Reconnect");
              tokenRequest.subscribe(tokenConsumer);
            }
          }, 3000);
        }

        _createClass(RSocketService, [{
          key: "connectRSocket",
          value: function connectRSocket(rsocketConfig) {
            var _this3 = this;

            new rsocket_core__WEBPACK_IMPORTED_MODULE_2__["RSocketClient"](rsocketConfig).connect().subscribe({
              onComplete: function onComplete(s) {
                return _this3.publishConnectEvent(s);
              },
              onError: function onError(err) {
                console.log("Failed to Connect to RSocket", err);
                _this3.connectFailed = true;
                _this3.connected = false;
              }
            });
          }
        }, {
          key: "subscribe2RSocket",
          value: function subscribe2RSocket() {
            var _this4 = this;

            this.socketReady.subscribe(function (rsocket) {
              if (!_this4.connected) {
                _this4.connected = true;
                console.log("🚀🚀🚀 RSocket Connection is: CONNECTED 🚀🚀🚀");

                _this4.getManga(rsocket).subscribe(_this4.mangaListSubject);

                _this4.getPopular(rsocket).subscribe(_this4.popularSubject);

                _this4.getLatest(rsocket).subscribe(_this4.latestSubject);

                _this4.watchDBChanges(rsocket).subscribe(_this4.changeStream);
              }
            });
          } //get All manga

        }, {
          key: "getManga",
          value: function getManga(socket) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
              socket.requestStream(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["routedPayload"])("get-mangas")).map(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["extractPayloadData"]).subscribe(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["flowableSignal2RXJS"])(subscriber));
            });
          }
        }, {
          key: "getMangaByID",
          value: function getMangaByID(id) {
            var _this5 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
              _this5.rsocket.requestResponse(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["routedPayload"])("get-manga-" + id)).map(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["extractPayloadData"]).subscribe(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["singleSignal2RXJS"])(subscriber));
            });
          }
        }, {
          key: "getPopular",
          value: function getPopular(socket) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
              socket.requestStream(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["routedPayload"])("popular-manga")).map(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["extractPayloadData"]).subscribe(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["flowableSignal2RXJS"])(subscriber, 5));
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])());
          }
        }, {
          key: "getLatest",
          value: function getLatest(socket) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
              socket.requestStream(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["routedPayload"])("latest-manga")).map(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["extractPayloadData"]).subscribe(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["flowableSignal2RXJS"])(subscriber));
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["toArray"])());
          }
        }, {
          key: "getChapters",
          value: function getChapters(id) {
            var _this6 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
              _this6.rsocket.requestResponse(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["routedPayload"])("get-chapters-" + id)).map(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["extractPayloadData"]).subscribe(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["singleSignal2RXJS"])(subscriber));
            });
          }
        }, {
          key: "watchDBChanges",
          value: function watchDBChanges(socket) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (subscriber) {
              socket.requestStream(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["routedPayload"])("mongo-change-stream")).map(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["extractPayloadData"]).subscribe(Object(_RSocketUtil_RsocketUtils__WEBPACK_IMPORTED_MODULE_7__["flowableSignal2RXJS"])(subscriber));
            });
          }
        }, {
          key: "publishConnectEvent",
          value: function publishConnectEvent(sock) {
            var _this7 = this;

            sock.connectionStatus().subscribe(function (status) {
              if (status.kind !== "CONNECTED") {
                console.log("RSocket Connection is: " + status.kind);
                _this7.connected = false;
                _this7.rsocket = undefined;

                if (status.kind === "ERROR") {
                  _this7.connectFailed = true;
                }
              } else {
                _this7.rsocket = sock;

                _this7.socketReady.next(sock);
              }
            });
          }
        }]);

        return RSocketService;
      }();

      RSocketService.ɵfac = function RSocketService_Factory(t) {
        return new (t || RSocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]));
      };

      RSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
        token: RSocketService,
        factory: RSocketService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "4Fiy":
    /*!********************************************!*\
      !*** ./src/app/Services/reader-service.ts ***!
      \********************************************/

    /*! exports provided: ReaderService */

    /***/
    function Fiy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReaderService", function () {
        return ReaderService;
      }); // Not Meant to be Injected


      var ReaderService = /*#__PURE__*/function () {
        function ReaderService(reader, service, rsocketService, listService, route, router, title) {
          _classCallCheck(this, ReaderService);

          this.reader = reader;
          this.service = service;
          this.rsocketService = rsocketService;
          this.listService = listService;
          this.route = route;
          this.router = router;
          this.title = title;
        } // goes to next page


        _createClass(ReaderService, [{
          key: "nextPage",
          value: function nextPage(i) {
            this.reader.firstPage = false; // if it's not in vertical mode, proceed to next page by setting thier hidden status

            if (i + 1 < this.reader.display.length && !this.reader.verticalView) {
              this.reader.display[i][4] = false;
              this.reader.display[++i][4] = true;
              this.reader.currentPage = i;
              window.scroll(0, 0);
              this.service.setPageIndex(i);
            } // this will make the last page in vertical clickable
            else if (i + 1 >= this.reader.Index.images.length - 1) {
                this.nextChapter();
                window.scroll(0, 0);
              } // this will check if at end of manga


            if (this.service.chapterIndex == this.reader.chapters.chapters[0].chapterIndex && this.reader.display[this.reader.display.length - 1][0] === this.reader.display[i][0]) {
              this.reader.finalPage = true;
            }
          } // goes to previous page

        }, {
          key: "lastPage",
          value: function lastPage(i) {
            this.reader.finalPage = false;

            if (i != 0) {
              this.reader.display[i][4] = false;
              this.reader.display[--i][4] = true;
              this.reader.currentPage = i;
              this.service.setPageIndex(i);
            } else if (i == 0) {
              this.lastChapter();
            }

            if (this.reader.display.length !== 0 && this.service.chapterIndex == this.reader.chapters.chapters[this.reader.chapters.chapters.length - 1].chapterIndex && this.reader.display[0][0] === this.reader.display[i][0]) {
              this.reader.firstPage = true;
            }

            window.scroll(0, 0);
          } // jumps to page

        }, {
          key: "jump",
          value: function jump(index) {
            this.reader.display.forEach(function (element) {
              return element[4] = false;
            });
            this.reader.display[index][4] = true;
            this.reader.currentPage = index;
            this.service.setPageIndex(index); // check if first page

            if (this.reader.display[0][0] === this.reader.display[index][0] && this.service.chapterIndex == this.reader.chapters.chapters[this.reader.chapters.chapters.length - 1].chapterIndex) {
              this.reader.firstPage = true;
            } else {
              this.reader.firstPage = false;
            } // check if last page


            if (this.reader.display[this.reader.display.length - 1][0] === this.reader.display[index][0] && this.service.chapterIndex == this.reader.chapters.chapters[0].chapterIndex) {
              this.reader.finalPage = true;
            } else {
              this.reader.finalPage = false;
            }
          } // jumps to chapter

        }, {
          key: "jumpChapter",
          value: function jumpChapter(chapter) {
            this.service.setChapterIndex("Chapter " + chapter);
            clearInterval(this.reader.interval);
            this.reader.display = [];
            this.service.setPageIndex(undefined);
            this.reader.finalPage = false;
            this.router.navigate(["manga-reader/", this.reader.list[0].realID, chapter, 1]);
          } // goes to next chapter

        }, {
          key: "nextChapter",
          value: function nextChapter() {
            this.reader.firstChapter = false;

            for (var i = this.reader.chapters.chapters.length - 1; i >= 0; i--) {
              if (this.reader.chapters.chapters[i].chapterIndex === this.service.chapterIndex && i - 1 >= 0) {
                this.service.setChapterIndex(this.reader.chapters.chapters[i - 1].chapterIndex);
                this.reader.display = [];
                clearInterval(this.reader.interval);
                this.service.setPageIndex(undefined);
                this.router.navigate(["manga-reader/", this.reader.list[0].realID, parseFloat(this.reader.chapters.chapters[i - 1].chapterIndex.substring(8)), 1]);
                break;
              }
            }
          } // goes to previous chapter

        }, {
          key: "lastChapter",
          value: function lastChapter() {
            this.reader.currentPageLoaded = false;
            this.reader.finalChapter = false;

            for (var i = this.reader.chapters.chapters.length - 1; i >= 0; i--) {
              if (this.reader.chapters.chapters[i].chapterIndex === this.service.chapterIndex) {
                this.service.setChapterIndex(this.reader.chapters.chapters[i + 1].chapterIndex);
                this.reader.display = [];
                clearInterval(this.reader.interval);
                this.service.setPageIndex(undefined);
                this.router.navigate(["manga-reader/", this.reader.list[0].realID, parseFloat(this.reader.chapters.chapters[i + 1].chapterIndex.substring(8)), //@ts-ignore
                this.reader.chapters.chapters[i + 1].images[0][0] + 1]);
                break;
              }
            }
          } // gets all chapters from API

        }, {
          key: "getChapter",
          value: function getChapter(params) {
            var _this8 = this;

            // this checks if the service has the right manga
            if (this.service.Manga && this.service.Manga.realID === parseFloat(params.get("manga"))) {
              this.reader.list[0] = this.service.Manga; // this.reader checks whether the manga page has a pending request

              if (!this.service.sendingRequest) {
                this.service.getChapter(this.service.Manga.realID).subscribe(function (chapters) {
                  _this8.service.chapters = chapters;
                  _this8.service.sendingRequest = false;

                  _this8.reader.setup(params);

                  _this8.title.setTitle(_this8.reader.list[0].t + ": Chapter " + _this8.reader.chapterIndex);
                });
              } // else wait for request
              else {
                  this.service.chapterSubject.subscribe(function (chapters) {
                    _this8.service.chapters = chapters;

                    _this8.reader.setup(params);

                    _this8.title.setTitle(_this8.reader.list[0].t + ": Chapter " + _this8.reader.chapterIndex);

                    _this8.service.sendingRequest = false;
                  });
                }
            } // else wrong manga
            else {
                this.rsocketService.getMangaByID(params.get("manga")).subscribe(function (manga) {
                  _this8.reader.list[0] = manga;

                  _this8.service.setManga(manga);

                  _this8.service.getChapter(_this8.service.Manga.realID).subscribe(function (chapters) {
                    _this8.service.chapters = chapters;
                    _this8.service.sendingRequest = false;

                    _this8.reader.setup(params);

                    _this8.title.setTitle(_this8.reader.list[0].t + ": Chapter " + _this8.reader.chapterIndex);
                  });
                });
              }
          } // sets the current chapter

        }, {
          key: "setChapter",
          value: function setChapter(params) {
            var filtered = this.reader.chapters.chapters.filter(function (chapter) {
              return chapter.chapterIndex === "Chapter " + params.get("index");
            });
            this.reader.Index = filtered[0];
            this.service.setChapterIndex("Chapter " + params.get("index"));
            this.populateDisplay(); // check if first page

            if (this.service.chapterIndex == this.reader.chapters.chapters[this.reader.chapters.chapters.length - 1].chapterIndex) {
              this.reader.firstChapter = true;
              this.reader.firstPage = true;
            } else {
              this.reader.firstChapter = false;
              this.reader.firstPage = false;
            } // check if final chapter


            if (this.service.chapterIndex == this.reader.chapters.chapters[0].chapterIndex) {
              this.reader.finalChapter = true;
            } else {
              this.reader.finalChapter = false;
            }
          } // uses interval to add pages to the display

        }, {
          key: "populateDisplay",
          value: function populateDisplay() {
            var _this9 = this;

            var i = 0;
            var array = this.reader.Index.images.slice().reverse();
            this.reader.interval = setInterval(function () {
              if (i === array.length) {
                return;
              }

              _this9.reader.display.push(array[i]);

              _this9.reader.display[i][5] = false;

              if (i === _this9.reader.currentPage) {
                _this9.reader.display[i][4] = true;
              } else {
                _this9.reader.display[i][4] = false;
              }

              i++;
            }, 0);
          }
        }]);

        return ReaderService;
      }();
      /***/

    },

    /***/
    "7arH":
    /*!**********************************!*\
      !*** ./src/app/truncate.pipe.ts ***!
      \**********************************/

    /*! exports provided: TruncatePipe */

    /***/
    function arH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TruncatePipe", function () {
        return TruncatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TruncatePipe = /*#__PURE__*/function () {
        function TruncatePipe() {
          _classCallCheck(this, TruncatePipe);
        }

        _createClass(TruncatePipe, [{
          key: "transform",
          value: function transform(value) {
            var limit = (arguments.length <= 1 ? 0 : arguments.length - 1) > 0 ? parseInt(arguments.length <= 1 ? undefined : arguments[1], 10) : 20;
            var trail = (arguments.length <= 1 ? 0 : arguments.length - 1) > 1 ? arguments.length <= 2 ? undefined : arguments[2] : '...';
            return value.length > limit ? value.substring(0, limit) + trail : value;
          }
        }]);

        return TruncatePipe;
      }();

      TruncatePipe.ɵfac = function TruncatePipe_Factory(t) {
        return new (t || TruncatePipe)();
      };

      TruncatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "truncate",
        type: TruncatePipe,
        pure: true
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Dvm+":
    /*!********************************************************************************!*\
      !*** ./src/app/Components/SubComponents/navbar/register/register.component.ts ***!
      \********************************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function Dvm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../Directives/ImageDirective */
      "nv7p");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent() {
          _classCallCheck(this, RegisterComponent);
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)();
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 15,
        vars: 0,
        consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["src", "https://www.b-cube.in/wp-content/uploads/2014/05/aditya-300x177.jpg", "id", "icon", "alt", "User Icon"], ["type", "text", "id", "login", "name", "login", "placeholder", "username", 1, "fadeIn", "second"], ["type", "text", "id", "login", "name", "login", "placeholder", "email", 1, "fadeIn", "second"], ["type", "text", "id", "password", "name", "login", "placeholder", "password", 1, "fadeIn", "third"], ["type", "text", "id", "password", "name", "login", "placeholder", "re-enterpassword", 1, "fadeIn", "third"], ["type", "submit", "value", "Sign Up", 1, "fadeIn", "fourth"], ["id", "formFooter"], ["href", "#", 1, "underlineHover"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manga Paradise");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Go to the Site");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_1__["ImagePreloadDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
        styles: ["html[_ngcontent-%COMP%] {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\n#formFooter[_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active[_ngcontent-%COMP%] {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n\r\n\r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n  background-color: #39ace7;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n\r\n\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n  width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    color:#60a0ff;\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n  width:30%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFVBQVU7O0FBRVY7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFJQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCO0FBQzlCOztBQUlBLFNBQVM7O0FBRVQ7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBS0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUEsZUFBZTs7QUFFZix1Q0FBdUM7O0FBQ3ZDO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFVixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFFVixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFVixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFFVixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtFQUNFLFNBQVM7RUFDVCxrQ0FBa0M7RUFFbEMsMEJBQTBCOztFQUUxQixvQ0FBb0M7RUFFcEMsNEJBQTRCOztFQUU1Qiw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQjtBQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogQkFTSUMgKi9cclxuXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzkyYmFkZDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcblxyXG5cclxuLyogU1RSVUNUVVJFICovXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6MDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG59XHJcblxyXG4uZmFkZUluLmZpcnN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uc2Vjb25kIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5mYWRlSW4udGhpcmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG5cclxuLmZhZGVJbi5mb3VydGgge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBjb2xvcjojNjBhMGZmO1xyXG59XHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2ljb24ge1xyXG4gIHdpZHRoOjMwJTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "EwtE":
    /*!**************************************************************************!*\
      !*** ./src/app/Components/home/popular-manga/popular-manga.component.ts ***!
      \**************************************************************************/

    /*! exports provided: PopularMangaComponent */

    /***/
    function EwtE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopularMangaComponent", function () {
        return PopularMangaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Services/manga-list-service */
      "m4Aj");
      /* harmony import */


      var src_app_Services_rsocket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Services/rsocket-service */
      "3gGP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../Directives/ImageDirective */
      "nv7p");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../SubComponents/spinner/spinner.component */
      "Vxzm");

      function PopularMangaComponent_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "notWeird": a0
        };
      };

      function PopularMangaComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopularMangaComponent_div_1_div_3_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function PopularMangaComponent_div_1_Template_img_load_4_listener() {
            var manga_r1 = ctx.$implicit;
            return manga_r1.info.imageLoaded = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var manga_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, !ctx_r0.wierdSize));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !manga_r1.info.imageLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.getImage(manga_r1.im), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !manga_r1.info.imageLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-page/", manga_r1.realID, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](manga_r1.t);
        }
      }

      var PopularMangaComponent = /*#__PURE__*/function () {
        function PopularMangaComponent(service, rsocketservice) {
          _classCallCheck(this, PopularMangaComponent);

          this.service = service;
          this.rsocketservice = rsocketservice;
          this.getScreenSize();
        }

        _createClass(PopularMangaComponent, [{
          key: "getImage",
          value: function getImage(url) {
            if (url.startsWith("http")) {
              return url;
            } else {
              return "/image/" + url;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            if (this.service.popular) {
              this.favorites = this.service.popular;
            } else {
              this.rsocketservice.popularSubject.subscribe(function (apiResponse) {
                _this10.favorites = apiResponse;
                _this10.service.popular = apiResponse;
              });
            }
          }
        }, {
          key: "getScreenSize",
          value: function getScreenSize(event) {
            if (window.innerWidth > 767 && window.innerWidth < 993) this.wierdSize = true;else this.wierdSize = false;
          }
        }]);

        return PopularMangaComponent;
      }();

      PopularMangaComponent.ɵfac = function PopularMangaComponent_Factory(t) {
        return new (t || PopularMangaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_1__["MangaListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_rsocket_service__WEBPACK_IMPORTED_MODULE_2__["RSocketService"]));
      };

      PopularMangaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PopularMangaComponent,
        selectors: [["app-popular-manga"]],
        hostBindings: function PopularMangaComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PopularMangaComponent_resize_HostBindingHandler($event) {
              return ctx.getScreenSize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 2,
        vars: 1,
        consts: [[1, "row"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "card-deck", 3, "ngClass"], [1, "card"], [4, "ngIf"], ["alt", "Card image cap", 1, "img", "card-img-top", 3, "hidden", "src", "load"], [1, "card-body"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [1, "card-title"]],
        template: function PopularMangaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopularMangaComponent_div_1_Template, 9, 8, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.favorites);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_4__["ImagePreloadDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]],
        styles: [".card[_ngcontent-%COMP%] {\r\n  padding: 2%;\r\n  margin: 2%;\r\n  max-height: 20%;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n  height: 70%;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%]:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  background-color: rgb(245, 245, 245);\r\n}\r\n\r\n.notWeird[_ngcontent-%COMP%]{\r\n   margin: 2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVsYXItbWFuZ2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtHQUNHLFVBQVU7QUFDYiIsImZpbGUiOiJwb3B1bGFyLW1hbmdhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgbWFyZ2luOiAyJTtcclxuICBtYXgtaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGhlaWdodDogNzAlO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxufVxyXG5cclxuLm5vdFdlaXJke1xyXG4gICBtYXJnaW46IDIlO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Components_SubComponents_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Components/SubComponents/navbar/navbar.component */
      "gZGi");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Components_SubComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Components/SubComponents/footer/footer.component */
      "bAwK");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "Manga Spring";
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [[1, "main-container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_Components_SubComponents_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _Components_SubComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: [".main-container[_ngcontent-%COMP%] {\r\n  min-height: 100vh;\r\n  overflow: hidden;\r\n  display: block;\r\n  position: relative;\r\n  padding-bottom: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "TDrE":
    /*!*******************************************************!*\
      !*** ./src/app/RSocketUtil/RSocketClientResponder.ts ***!
      \*******************************************************/

    /*! exports provided: RSocketClientResponder */

    /***/
    function TDrE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RSocketClientResponder", function () {
        return RSocketClientResponder;
      });
      /* harmony import */


      var rsocket_flowable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rsocket-flowable */
      "2Z6J");
      /* harmony import */


      var rsocket_flowable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rsocket_flowable__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _RsocketUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./RsocketUtils */
      "ipHg");

      function logRequest(type, payload) {
        console.log("Responder response to ".concat(type, ", data: ").concat(payload.data || "null"));
      }

      function make(data) {
        return {
          data: data,
          metadata: ""
        };
      }

      var RSocketClientResponder = /*#__PURE__*/function () {
        function RSocketClientResponder(mangaSubject, deviceInfo) {
          _classCallCheck(this, RSocketClientResponder);

          this.deviceInfo = deviceInfo;
          this.mangaSubject = mangaSubject;
        }

        _createClass(RSocketClientResponder, [{
          key: "metadataPush",
          value: function metadataPush(payload) {
            return rsocket_flowable__WEBPACK_IMPORTED_MODULE_0__["Single"].error(new Error("not implemented"));
          }
        }, {
          key: "fireAndForget",
          value: function fireAndForget(payload) {
            logRequest("fire-and-forget", payload);
          }
        }, {
          key: "requestResponse",
          value: function requestResponse(payload) {
            console.log("request-response Request from server", payload.metadata);
            return rsocket_flowable__WEBPACK_IMPORTED_MODULE_0__["Single"].of(make(this.deviceInfo));
          }
        }, {
          key: "requestStream",
          value: function requestStream(payload) {
            console.log("request-stream Request from server", payload.metadata);
            return new rsocket_flowable__WEBPACK_IMPORTED_MODULE_0__["Flowable"](Object(_RsocketUtils__WEBPACK_IMPORTED_MODULE_2__["rxjs2Flowable"])(this.mangaSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["bufferCount"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (arr) {
              return arr[arr.length - 1];
            }))));
          }
        }, {
          key: "requestChannel",
          value: function requestChannel(payloads) {
            return rsocket_flowable__WEBPACK_IMPORTED_MODULE_0__["Flowable"].just(make("client channel response"));
          }
        }]);

        return RSocketClientResponder;
      }();
      /***/

    },

    /***/
    "VlvX":
    /*!*******************************************!*\
      !*** ./src/app/Services/manga.service.ts ***!
      \*******************************************/

    /*! exports provided: MangaService */

    /***/
    function VlvX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MangaService", function () {
        return MangaService;
      });
      /* harmony import */


      var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-webstorage-service */
      "SX+u");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rsocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./rsocket-service */
      "3gGP");
      /* harmony import */


      var _manga_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./manga-list-service */
      "m4Aj");

      var MangaService = /*#__PURE__*/function () {
        function MangaService(storage, rsocketService, listService) {
          var _this11 = this;

          _classCallCheck(this, MangaService);

          this.storage = storage;
          this.rsocketService = rsocketService;
          this.chapterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.updateSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // gets manga and chapterindex from session

          var storageManga = storage.get("Manga");
          var storageCIndex = storage.get("CIndex");
          var storagePIndex = storage.get("PIndex");

          if (storageManga) {
            this.Manga = storageManga; //ensure data in session isn't stale

            listService.mangaSubject.subscribe(function (list) {
              var mangaFromService = list.find(function (m) {
                return m.realID === _this11.Manga.realID;
              });

              _this11.setManga(mangaFromService);

              _this11.updateSubject.next(mangaFromService);
            });
          }

          if (storageCIndex) {
            this.setChapterIndex(storageCIndex);
          }

          if (storagePIndex) {
            this.setPageIndex(storagePIndex);
          } //Update set Manga on Change Stream


          listService.changeSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500)).subscribe(function (m) {
            var existsInList = listService.mangaList.find(function (m) {
              return m.realID === _this11.Manga.realID;
            });

            if (existsInList) {
              _this11.setManga(m);

              _this11.updateSubject.next(m);
            }
          });
        } // sets current manga


        _createClass(MangaService, [{
          key: "setManga",
          value: function setManga(manga) {
            this.Manga = manga;
          } // sets current manga

        }, {
          key: "saveManga2Local",
          value: function saveManga2Local() {
            this.storage.set("Manga", this.Manga);
          }
        }, {
          key: "setMangaForReader",
          value: function setMangaForReader(manga) {
            this.Manga = manga;
            this.saveManga2Local();
          }
        }, {
          key: "setMangaFromPage",
          value: function setMangaFromPage(manga) {
            var _this12 = this;

            this.Manga = manga;
            this.chapterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.getChapter(manga.realID).subscribe(this.chapterSubject);
            this.chapterSubject.subscribe(function (chapters) {
              _this12.chapters = chapters;
              _this12.sendingRequest = false;
            });
          }
        }, {
          key: "setChapterIndex",
          value: function setChapterIndex(index) {
            this.chapterIndex = index;
            this.storage.set("CIndex", this.chapterIndex);
            this.rsocketService.currentMangaSubject.next(this.Manga.t + " " + index);
          }
        }, {
          key: "setPageIndex",
          value: function setPageIndex(index) {
            this.pageIndex = index;
            this.storage.set("PIndex", this.pageIndex);
          }
        }, {
          key: "getManga",
          value: function getManga(id) {
            var _this13 = this;

            var sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();

            if (this.rsocketService.rsocket !== undefined) {
              this.rsocketService.getMangaByID(id).subscribe(sub);
            } else {
              this.rsocketService.socketReady.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (b) {
                return _this13.rsocketService.getMangaByID(id).subscribe(sub);
              });
            }

            return sub;
          }
        }, {
          key: "getChapter",
          value: function getChapter(id) {
            var _this14 = this;

            var sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            this.sendingRequest = true;

            if (this.rsocketService.rsocket !== undefined) {
              this.rsocketService.getChapters(id).subscribe(sub);
            } else {
              this.rsocketService.socketReady.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (b) {
                return _this14.rsocketService.getChapters(id).subscribe(sub);
              });
            }

            sub.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (c) {
              return c.mangaName;
            })).subscribe(function (n) {
              return _this14.rsocketService.currentMangaSubject.next(n);
            });
            return sub;
          }
        }, {
          key: "saveToStorage",
          value: function saveToStorage() {
            this.storage.set("Manga", this.Manga);
            this.storage.set("CIndex", this.chapterIndex);
            this.storage.set("PIndex", this.pageIndex);
          }
        }]);

        return MangaService;
      }();

      MangaService.ɵfac = function MangaService_Factory(t) {
        return new (t || MangaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_rsocket_service__WEBPACK_IMPORTED_MODULE_4__["RSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_manga_list_service__WEBPACK_IMPORTED_MODULE_5__["MangaListService"]));
      };

      MangaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: MangaService,
        factory: MangaService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "Vn/V":
    /*!**********************************************!*\
      !*** ./src/app/RSocketUtil/RSocketConfig.ts ***!
      \**********************************************/

    /*! exports provided: RSocketConfig */

    /***/
    function VnV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RSocketConfig", function () {
        return RSocketConfig;
      });
      /* harmony import */


      var rsocket_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rsocket-core */
      "9Erv");
      /* harmony import */


      var rsocket_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rsocket_core__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rsocket_websocket_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rsocket-websocket-client */
      "4MIV");
      /* harmony import */


      var rsocket_websocket_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rsocket_websocket_client__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _JSONBufferSerializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./JSONBufferSerializer */
      "l1VO");

      var RSocketConfig = function RSocketConfig(id, jwt, responder) {
        _classCallCheck(this, RSocketConfig);

        // const rsocketUrl = "ws://localhost:8080/rsocket";
        var rsocketUrl = "wss://manga-spring.herokuapp.com/rsocket";
        var transport = new rsocket_websocket_client__WEBPACK_IMPORTED_MODULE_1___default.a({
          url: rsocketUrl
        }, rsocket_core__WEBPACK_IMPORTED_MODULE_0__["BufferEncoders"]);
        var connectionConfig = {
          keepAlive: 20000,
          lifetime: 180000,
          dataMimeType: rsocket_core__WEBPACK_IMPORTED_MODULE_0__["APPLICATION_JSON"].string,
          metadataMimeType: rsocket_core__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_RSOCKET_COMPOSITE_METADATA"].string,
          //setup payload
          payload: {
            data: id,
            metadata: Object(rsocket_core__WEBPACK_IMPORTED_MODULE_0__["encodeCompositeMetadata"])([[rsocket_core__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_RSOCKET_AUTHENTICATION"], Object(rsocket_core__WEBPACK_IMPORTED_MODULE_0__["encodeBearerAuthMetadata"])(jwt)]])
          }
        };
        this.rsocketConfig = {
          serializers: _JSONBufferSerializer__WEBPACK_IMPORTED_MODULE_2__["JSONBufferSerializers"],
          setup: connectionConfig,
          responder: responder,
          transport: transport
        };
      };
      /***/

    },

    /***/
    "Vxzm":
    /*!***********************************************************************!*\
      !*** ./src/app/Components/SubComponents/spinner/spinner.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function Vxzm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SpinnerComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SpinnerComponent_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SpinnerComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SpinnerComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "filter", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "feGaussianBlur", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "feColorMatrix", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "feComposite", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "linearGradient", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "stop", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "linearGradient", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "circle", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SpinnerComponent = function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);

        this.wedge = false;
        this.rainbow = false;
        this.drip = false;
        this.isMobile = false;
      };

      SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) {
        return new (t || SpinnerComponent)();
      };

      SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SpinnerComponent,
        selectors: [["app-spinner"]],
        inputs: {
          wedge: "wedge",
          rainbow: "rainbow",
          drip: "drip",
          isMobile: "isMobile"
        },
        decls: 4,
        vars: 4,
        consts: [["class", "loader", 4, "ngIf"], ["class", "wrapper", 4, "ngIf"], ["class", "container row justify-content-center", 4, "ngIf"], ["class", "container", "style", "text-align:center;", 4, "ngIf"], [1, "loader"], [1, "wrapper"], [1, "spinner"], [1, "container", "row", "justify-content-center"], [1, "loadingio-spinner-wedges-v3ub56f6x8p"], [1, "ldio-lneahrv1l9r"], [1, "container", 2, "text-align", "center"], [1, "gegga"], ["id", "gegga"], ["in", "SourceGraphic", "stdDeviation", "7", "result", "blur"], ["in", "blur", "mode", "matrix", "values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 20 -10", "result", "inreGegga"], ["in", "SourceGraphic", "in2", "inreGegga", "operator", "atop"], ["width", "200", "height", "200", "viewBox", "0 0 200 200", 1, "snurra"], ["id", "linj\xE4rGradient"], ["offset", "0", 1, "stopp1"], ["offset", "1", 1, "stopp2"], ["y2", "160", "x2", "160", "y1", "40", "x1", "40", "gradientUnits", "userSpaceOnUse", "id", "gradient", 0, "xlink", "href", "#linj\xE4rGradient"], ["d", "m 164,100 c 0,-35.346224 -28.65378,-64 -64,-64 -35.346224,0 -64,28.653776 -64,64 0,35.34622 28.653776,64 64,64 35.34622,0 64,-26.21502 64,-64 0,-37.784981 -26.92058,-64 -64,-64 -37.079421,0 -65.267479,26.922736 -64,64 1.267479,37.07726 26.703171,65.05317 64,64 37.29683,-1.05317 64,-64 64,-64", 1, "halvan"], ["cx", "100", "cy", "100", "r", "64", 1, "strecken"]],
        template: function SpinnerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SpinnerComponent_section_1_Template, 9, 0, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_2_Template, 12, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerComponent_div_3_Template, 15, 0, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.wedge && !ctx.rainbow && !ctx.drip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rainbow);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wedge && !ctx.isMobile);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.drip || ctx.isMobile);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".loader[_ngcontent-%COMP%] {\r\n  font-size: 10px;\r\n  margin: 50px auto;\r\n  text-indent: -9999em;\r\n  width: 11em;\r\n  height: 11em;\r\n  border-radius: 50%;\r\n  background: #097d02;\r\n  background: linear-gradient(to right, #097d02 10%, rgba(9, 125, 2, 0) 42%);\r\n  position: relative;\r\n  -webkit-animation: load3 1.4s infinite linear;\r\n  animation: load3 1.4s infinite linear;\r\n  transform: translateZ(0);\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]:before {\r\n  width: 50%;\r\n  height: 50%;\r\n  background: #097d02;\r\n  border-radius: 100% 0 0 0;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  content: \"\";\r\n}\r\n\r\n.loader[_ngcontent-%COMP%]:after {\r\n  background: #ffffff;\r\n  width: 75%;\r\n  height: 75%;\r\n  border-radius: 50%;\r\n  content: \"\";\r\n  margin: auto;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n\r\n@-webkit-keyframes load3 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes load3 {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\nsection.wrapper[_ngcontent-%COMP%] {\r\n  padding: 40px 0;\r\n}\r\n\r\nsection.wrapper.dark[_ngcontent-%COMP%] {\r\n  background: #313134;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%] {\r\n  -webkit-animation: rotate 10s infinite linear;\r\n  animation: rotate 10s infinite linear;\r\n  position: relative;\r\n  display: block;\r\n  margin: auto;\r\n  width: 142px;\r\n  height: 142px;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  -webkit-animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);\r\n  animation: rotate 3s infinite cubic-bezier(0.09, 0.6, 0.8, 0.03);\r\n  transform-origin: 50% 100% 0;\r\n  position: absolute;\r\n  display: inline-block;\r\n  top: 50%;\r\n  left: 50%;\r\n  border: solid 6px transparent;\r\n  border-bottom: none;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(1) {\r\n  -webkit-animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);\r\n  animation-timing-function: cubic-bezier(0.09, 0.3, 0.12, 0.03);\r\n  width: 44px;\r\n  height: 22px;\r\n  margin-top: -22px;\r\n  margin-left: -22px;\r\n  border-color: #2172b8;\r\n  border-top-left-radius: 36px;\r\n  border-top-right-radius: 36px;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\r\n  -webkit-animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);\r\n  animation-timing-function: cubic-bezier(0.09, 0.6, 0.24, 0.03);\r\n  width: 58px;\r\n  height: 29px;\r\n  margin-top: -29px;\r\n  margin-left: -29px;\r\n  border-color: #18a39b;\r\n  border-top-left-radius: 42px;\r\n  border-top-right-radius: 42px;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\r\n  -webkit-animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);\r\n  animation-timing-function: cubic-bezier(0.09, 0.9, 0.36, 0.03);\r\n  width: 72px;\r\n  height: 36px;\r\n  margin-top: -36px;\r\n  margin-left: -36px;\r\n  border-color: #82c545;\r\n  border-top-left-radius: 48px;\r\n  border-top-right-radius: 48px;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\r\n  -webkit-animation-timing-function: cubic-bezier(0.09, 1.2, 0.48, 0.03);\r\n  animation-timing-function: cubic-bezier(0.09, 1.2, 0.48, 0.03);\r\n  width: 86px;\r\n  height: 43px;\r\n  margin-top: -43px;\r\n  margin-left: -43px;\r\n  border-color: #f8b739;\r\n  border-top-left-radius: 54px;\r\n  border-top-right-radius: 54px;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\r\n  -webkit-animation-timing-function: cubic-bezier(0.09, 1.5, 0.6, 0.03);\r\n  animation-timing-function: cubic-bezier(0.09, 1.5, 0.6, 0.03);\r\n  width: 100px;\r\n  height: 50px;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  border-color: #f06045;\r\n  border-top-left-radius: 60px;\r\n  border-top-right-radius: 60px;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\r\n  -webkit-animation-timing-function: cubic-bezier(0.09, 1.8, 0.72, 0.03);\r\n  animation-timing-function: cubic-bezier(0.09, 1.8, 0.72, 0.03);\r\n  width: 114px;\r\n  height: 57px;\r\n  margin-top: -57px;\r\n  margin-left: -57px;\r\n  border-color: #ed2861;\r\n  border-top-left-radius: 66px;\r\n  border-top-right-radius: 66px;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(7) {\r\n  -webkit-animation-timing-function: cubic-bezier(0.09, 2.1, 0.84, 0.03);\r\n  animation-timing-function: cubic-bezier(0.09, 2.1, 0.84, 0.03);\r\n  width: 128px;\r\n  height: 64px;\r\n  margin-top: -64px;\r\n  margin-left: -64px;\r\n  border-color: #c12680;\r\n  border-top-left-radius: 72px;\r\n  border-top-right-radius: 72px;\r\n}\r\n\r\ndiv.spinner[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(8) {\r\n  -webkit-animation-timing-function: cubic-bezier(0.09, 2.4, 0.96, 0.03);\r\n  animation-timing-function: cubic-bezier(0.09, 2.4, 0.96, 0.03);\r\n  width: 142px;\r\n  height: 71px;\r\n  margin-top: -71px;\r\n  margin-left: -71px;\r\n  border-color: #5d3191;\r\n  border-top-left-radius: 78px;\r\n  border-top-right-radius: 78px;\r\n}\r\n\r\n@-webkit-keyframes rotate {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes rotate {\r\n  to {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes ldio-lneahrv1l9r {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes ldio-lneahrv1l9r {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  transform-origin: 166.5px 166.5px;\r\n  -webkit-animation: ldio-lneahrv1l9r 2.2222222222222223s linear infinite;\r\n          animation: ldio-lneahrv1l9r 2.2222222222222223s linear infinite;\r\n  opacity: 0.8;\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 49.95px;\r\n  top: 49.95px;\r\n  width: 116.55px;\r\n  height: 116.55px;\r\n  border-radius: 116.55px 0 0 0;\r\n  transform-origin: 166.5px 166.5px;\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\r\n  -webkit-animation-duration: 0.5555555555555556s;\r\n          animation-duration: 0.5555555555555556s;\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1)    > div[_ngcontent-%COMP%] {\r\n  background: #5f2a62;\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\r\n  -webkit-animation-duration: 0.7407407407407407s;\r\n          animation-duration: 0.7407407407407407s;\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2)    > div[_ngcontent-%COMP%] {\r\n  background: #a976c3;\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\r\n  -webkit-animation-duration: 1.1111111111111112s;\r\n          animation-duration: 1.1111111111111112s;\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3)    > div[_ngcontent-%COMP%] {\r\n  background: #a0de59;\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\r\n  -webkit-animation-duration: 2.2222222222222223s;\r\n          animation-duration: 2.2222222222222223s;\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4)    > div[_ngcontent-%COMP%] {\r\n  background: #466b5a;\r\n  transform: rotate(0deg);\r\n}\r\n\r\n.loadingio-spinner-wedges-v3ub56f6x8p[_ngcontent-%COMP%] {\r\n  width: 333px;\r\n  height: 333px;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  background: none;\r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  transform: translateZ(0) scale(1);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transform-origin: 0 0; \r\n}\r\n\r\n.ldio-lneahrv1l9r[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  box-sizing: content-box;\r\n}\r\n\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.gegga[_ngcontent-%COMP%] {\r\n  width: 0;\r\n}\r\n\r\n.snurra[_ngcontent-%COMP%] {\r\n  filter: url(#gegga);\r\n}\r\n\r\n.stopp1[_ngcontent-%COMP%] {\r\n  stop-color: #008080;\r\n}\r\n\r\n.stopp2[_ngcontent-%COMP%] {\r\n  stop-color: #ff8000;\r\n}\r\n\r\n.halvan[_ngcontent-%COMP%] {\r\n  -webkit-animation: Snurra1 10s infinite linear;\r\n          animation: Snurra1 10s infinite linear;\r\n  stroke-dasharray: 180 800;\r\n  fill: none;\r\n  stroke: url(#gradient);\r\n  stroke-width: 23;\r\n  stroke-linecap: round;\r\n}\r\n\r\n.strecken[_ngcontent-%COMP%] {\r\n  -webkit-animation: Snurra1 3s infinite linear;\r\n          animation: Snurra1 3s infinite linear;\r\n  stroke-dasharray: 26 54;\r\n  fill: none;\r\n  stroke: url(#gradient);\r\n  stroke-width: 23;\r\n  stroke-linecap: round;\r\n}\r\n\r\n.skugga[_ngcontent-%COMP%] {\r\n  filter: blur(5px);\r\n  opacity: 0.3;\r\n  position: absolute;\r\n  transform: translate(3px, 3px);\r\n}\r\n\r\n@-webkit-keyframes Snurra1 {\r\n  0% {\r\n    stroke-dashoffset: 0;\r\n  }\r\n  100% {\r\n    stroke-dashoffset: -403px;\r\n  }\r\n}\r\n\r\n@keyframes Snurra1 {\r\n  0% {\r\n    stroke-dashoffset: 0;\r\n  }\r\n  100% {\r\n    stroke-dashoffset: -403px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7O0FBRXBCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBU25CLDBFQUEwRTtFQUMxRSxrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLHFDQUFxQztFQUdyQyx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztBQUNiOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFDQTtFQUNFO0lBRUUsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFFRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFDQTtFQUNFO0lBRUUsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFFRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUVFLDZDQUE2QztFQUM3QyxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUVFLHdFQUF3RTtFQUN4RSxnRUFBZ0U7RUFHaEUsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsUUFBUTtFQUNSLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBRUUsc0VBQXNFO0VBQ3RFLDhEQUE4RDtFQUM5RCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFFRSxzRUFBc0U7RUFDdEUsOERBQThEO0VBQzlELFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUVFLHNFQUFzRTtFQUN0RSw4REFBOEQ7RUFDOUQsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUNBO0VBRUUsc0VBQXNFO0VBQ3RFLDhEQUE4RDtFQUM5RCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFFRSxxRUFBcUU7RUFDckUsNkRBQTZEO0VBQzdELFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFDQTtFQUVFLHNFQUFzRTtFQUN0RSw4REFBOEQ7RUFDOUQsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9COztBQUNBO0VBRUUsc0VBQXNFO0VBQ3RFLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFFRSxzRUFBc0U7RUFDdEUsOERBQThEO0VBQzlELFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFRQTtFQUNFO0lBRUUseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUlFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsdUVBQStEO1VBQS9ELCtEQUErRDtFQUMvRCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixpQ0FBaUM7QUFDbkM7O0FBQ0E7RUFDRSwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLCtDQUF1QztVQUF2Qyx1Q0FBdUM7QUFDekM7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6Qzs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSwrQ0FBdUM7VUFBdkMsdUNBQXVDO0FBQ3pDOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBRSxtQkFBbUI7QUFDNUM7O0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSw2Q0FBcUM7VUFBckMscUNBQXFDO0VBQ3JDLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR2VuZXJpYyBzcGlubmVyICovXHJcblxyXG4ubG9hZGVyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgd2lkdGg6IDExZW07XHJcbiAgaGVpZ2h0OiAxMWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjMDk3ZDAyO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICMwOTdkMDIgMTAlLCByZ2JhKDksIDEyNSwgMiwgMCkgNDIlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgIGxlZnQsXHJcbiAgICAjMDk3ZDAyIDEwJSxcclxuICAgIHJnYmEoOSwgMTI1LCAyLCAwKSA0MiVcclxuICApO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDk3ZDAyIDEwJSwgcmdiYSg5LCAxMjUsIDIsIDApIDQyJSk7XHJcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDk3ZDAyIDEwJSwgcmdiYSg5LCAxMjUsIDIsIDApIDQyJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDk3ZDAyIDEwJSwgcmdiYSg5LCAxMjUsIDIsIDApIDQyJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkMyAxLjRzIGluZmluaXRlIGxpbmVhcjtcclxuICBhbmltYXRpb246IGxvYWQzIDEuNHMgaW5maW5pdGUgbGluZWFyO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG59XHJcbi5sb2FkZXI6YmVmb3JlIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIGJhY2tncm91bmQ6ICMwOTdkMDI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG4ubG9hZGVyOmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQzIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsb2FkMyB7XHJcbiAgMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiByYWluYm93IHNwaW5uZXIgY3NzICovXHJcbioge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuc2VjdGlvbi53cmFwcGVyIHtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbn1cclxuc2VjdGlvbi53cmFwcGVyLmRhcmsge1xyXG4gIGJhY2tncm91bmQ6ICMzMTMxMzQ7XHJcbn1cclxuXHJcbmRpdi5zcGlubmVyIHtcclxuICAtbW96LWFuaW1hdGlvbjogcm90YXRlIDEwcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAxMHMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDEwcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMTQycHg7XHJcbiAgaGVpZ2h0OiAxNDJweDtcclxufVxyXG5kaXYuc3Bpbm5lciBpIHtcclxuICAtbW96LWFuaW1hdGlvbjogcm90YXRlIDNzIGluZmluaXRlIGN1YmljLWJlemllcigwLjA5LCAwLjYsIDAuOCwgMC4wMyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAzcyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4wOSwgMC42LCAwLjgsIDAuMDMpO1xyXG4gIGFuaW1hdGlvbjogcm90YXRlIDNzIGluZmluaXRlIGN1YmljLWJlemllcigwLjA5LCAwLjYsIDAuOCwgMC4wMyk7XHJcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJSAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCUgMDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJSAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGJvcmRlcjogc29saWQgNnB4IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbn1cclxuZGl2LnNwaW5uZXIgaTpudGgtY2hpbGQoMSkge1xyXG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDksIDAuMywgMC4xMiwgMC4wMyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMC4zLCAwLjEyLCAwLjAzKTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMC4zLCAwLjEyLCAwLjAzKTtcclxuICB3aWR0aDogNDRweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luLXRvcDogLTIycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0yMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzIxNzJiODtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzNnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNnB4O1xyXG59XHJcbmRpdi5zcGlubmVyIGk6bnRoLWNoaWxkKDIpIHtcclxuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAwLjYsIDAuMjQsIDAuMDMpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDksIDAuNiwgMC4yNCwgMC4wMyk7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDksIDAuNiwgMC4yNCwgMC4wMyk7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiAyOXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yOXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjlweDtcclxuICBib3JkZXItY29sb3I6ICMxOGEzOWI7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDJweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNDJweDtcclxufVxyXG5kaXYuc3Bpbm5lciBpOm50aC1jaGlsZCgzKSB7XHJcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMC45LCAwLjM2LCAwLjAzKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAwLjksIDAuMzYsIDAuMDMpO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAwLjksIDAuMzYsIDAuMDMpO1xyXG4gIHdpZHRoOiA3MnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBtYXJnaW4tdG9wOiAtMzZweDtcclxuICBtYXJnaW4tbGVmdDogLTM2cHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjODJjNTQ1O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDQ4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQ4cHg7XHJcbn1cclxuZGl2LnNwaW5uZXIgaTpudGgtY2hpbGQoNCkge1xyXG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDksIDEuMiwgMC40OCwgMC4wMyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMS4yLCAwLjQ4LCAwLjAzKTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMS4yLCAwLjQ4LCAwLjAzKTtcclxuICB3aWR0aDogODZweDtcclxuICBoZWlnaHQ6IDQzcHg7XHJcbiAgbWFyZ2luLXRvcDogLTQzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC00M3B4O1xyXG4gIGJvcmRlci1jb2xvcjogI2Y4YjczOTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1NHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1NHB4O1xyXG59XHJcbmRpdi5zcGlubmVyIGk6bnRoLWNoaWxkKDUpIHtcclxuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAxLjUsIDAuNiwgMC4wMyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMS41LCAwLjYsIDAuMDMpO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAxLjUsIDAuNiwgMC4wMyk7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjA2MDQ1O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDYwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDYwcHg7XHJcbn1cclxuZGl2LnNwaW5uZXIgaTpudGgtY2hpbGQoNikge1xyXG4gIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDksIDEuOCwgMC43MiwgMC4wMyk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMS44LCAwLjcyLCAwLjAzKTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMS44LCAwLjcyLCAwLjAzKTtcclxuICB3aWR0aDogMTE0cHg7XHJcbiAgaGVpZ2h0OiA1N3B4O1xyXG4gIG1hcmdpbi10b3A6IC01N3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNTdweDtcclxuICBib3JkZXItY29sb3I6ICNlZDI4NjE7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNjZweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNjZweDtcclxufVxyXG5kaXYuc3Bpbm5lciBpOm50aC1jaGlsZCg3KSB7XHJcbiAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4wOSwgMi4xLCAwLjg0LCAwLjAzKTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAyLjEsIDAuODQsIDAuMDMpO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAyLjEsIDAuODQsIDAuMDMpO1xyXG4gIHdpZHRoOiAxMjhweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWFyZ2luLXRvcDogLTY0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC02NHB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2MxMjY4MDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3MnB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA3MnB4O1xyXG59XHJcbmRpdi5zcGlubmVyIGk6bnRoLWNoaWxkKDgpIHtcclxuICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjA5LCAyLjQsIDAuOTYsIDAuMDMpO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDksIDIuNCwgMC45NiwgMC4wMyk7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMDksIDIuNCwgMC45NiwgMC4wMyk7XHJcbiAgd2lkdGg6IDE0MnB4O1xyXG4gIGhlaWdodDogNzFweDtcclxuICBtYXJnaW4tdG9wOiAtNzFweDtcclxuICBtYXJnaW4tbGVmdDogLTcxcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNWQzMTkxO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDc4cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDc4cHg7XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyByb3RhdGUge1xyXG4gIHRvIHtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRlIHtcclxuICB0byB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBXZWRnZSBzcGlubmVyIENTUyovXHJcbkBrZXlmcmFtZXMgbGRpby1sbmVhaHJ2MWw5ciB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuLmxkaW8tbG5lYWhydjFsOXIgPiBkaXYgPiBkaXYge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDE2Ni41cHggMTY2LjVweDtcclxuICBhbmltYXRpb246IGxkaW8tbG5lYWhydjFsOXIgMi4yMjIyMjIyMjIyMjIyMjIzcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5sZGlvLWxuZWFocnYxbDlyID4gZGl2ID4gZGl2ID4gZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNDkuOTVweDtcclxuICB0b3A6IDQ5Ljk1cHg7XHJcbiAgd2lkdGg6IDExNi41NXB4O1xyXG4gIGhlaWdodDogMTE2LjU1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTE2LjU1cHggMCAwIDA7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTY2LjVweCAxNjYuNXB4O1xyXG59XHJcbi5sZGlvLWxuZWFocnYxbDlyID4gZGl2IGRpdjpudGgtY2hpbGQoMSkge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41NTU1NTU1NTU1NTU1NTU2cztcclxufVxyXG4ubGRpby1sbmVhaHJ2MWw5ciA+IGRpdiBkaXY6bnRoLWNoaWxkKDEpID4gZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjNWYyYTYyO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcbi5sZGlvLWxuZWFocnYxbDlyID4gZGl2IGRpdjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC43NDA3NDA3NDA3NDA3NDA3cztcclxufVxyXG4ubGRpby1sbmVhaHJ2MWw5ciA+IGRpdiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjYTk3NmMzO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcbi5sZGlvLWxuZWFocnYxbDlyID4gZGl2IGRpdjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMS4xMTExMTExMTExMTExMTEycztcclxufVxyXG4ubGRpby1sbmVhaHJ2MWw5ciA+IGRpdiBkaXY6bnRoLWNoaWxkKDMpID4gZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjYTBkZTU5O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcbi5sZGlvLWxuZWFocnYxbDlyID4gZGl2IGRpdjpudGgtY2hpbGQoNCkge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMi4yMjIyMjIyMjIyMjIyMjIzcztcclxufVxyXG4ubGRpby1sbmVhaHJ2MWw5ciA+IGRpdiBkaXY6bnRoLWNoaWxkKDQpID4gZGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjNDY2YjVhO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcbi5sb2FkaW5naW8tc3Bpbm5lci13ZWRnZXMtdjN1YjU2ZjZ4OHAge1xyXG4gIHdpZHRoOiAzMzNweDtcclxuICBoZWlnaHQ6IDMzM3B4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLmxkaW8tbG5lYWhydjFsOXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IC8qIHNlZSBub3RlIGFib3ZlICovXHJcbn1cclxuLmxkaW8tbG5lYWhydjFsOXIgZGl2IHtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuLyogRHJpcCBzcGlubmVyICovXHJcbmJvZHkge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmdlZ2dhIHtcclxuICB3aWR0aDogMDtcclxufVxyXG4uc251cnJhIHtcclxuICBmaWx0ZXI6IHVybCgjZ2VnZ2EpO1xyXG59XHJcbi5zdG9wcDEge1xyXG4gIHN0b3AtY29sb3I6ICMwMDgwODA7XHJcbn1cclxuLnN0b3BwMiB7XHJcbiAgc3RvcC1jb2xvcjogI2ZmODAwMDtcclxufVxyXG4uaGFsdmFuIHtcclxuICBhbmltYXRpb246IFNudXJyYTEgMTBzIGluZmluaXRlIGxpbmVhcjtcclxuICBzdHJva2UtZGFzaGFycmF5OiAxODAgODAwO1xyXG4gIGZpbGw6IG5vbmU7XHJcbiAgc3Ryb2tlOiB1cmwoI2dyYWRpZW50KTtcclxuICBzdHJva2Utd2lkdGg6IDIzO1xyXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxufVxyXG4uc3RyZWNrZW4ge1xyXG4gIGFuaW1hdGlvbjogU251cnJhMSAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjYgNTQ7XHJcbiAgZmlsbDogbm9uZTtcclxuICBzdHJva2U6IHVybCgjZ3JhZGllbnQpO1xyXG4gIHN0cm9rZS13aWR0aDogMjM7XHJcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG59XHJcbi5za3VnZ2Ege1xyXG4gIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gIG9wYWNpdHk6IDAuMztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAzcHgpO1xyXG59XHJcbkBrZXlmcmFtZXMgU251cnJhMSB7XHJcbiAgMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC00MDNweDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "VyY4":
    /*!*******************************************************!*\
      !*** ./src/app/Components/reader/reader.component.ts ***!
      \*******************************************************/

    /*! exports provided: ReaderComponent */

    /***/
    function VyY4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReaderComponent", function () {
        return ReaderComponent;
      });
      /* harmony import */


      var _Services_reader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../Services/reader-service */
      "4Fiy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Services_manga_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../Services/manga.service */
      "VlvX");
      /* harmony import */


      var _Services_manga_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Services/manga-list-service */
      "m4Aj");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _Services_rsocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Services/rsocket-service */
      "3gGP");
      /* harmony import */


      var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-device-detector */
      "9YtQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../SubComponents/spinner/spinner.component */
      "Vxzm");
      /* harmony import */


      var _Directives_VarDirective__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../Directives/VarDirective */
      "eHqZ");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../Directives/ImageDirective */
      "nv7p");

      function ReaderComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("drip", true);
        }
      }

      function ReaderComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rainbow", true);
        }
      }

      function ReaderComponent_div_3_div_1_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_3_div_1_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r13.readerService.lastChapter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_3_div_1_button_7_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
        }
      }

      function ReaderComponent_div_3_div_1_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_3_div_1_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r16.resizeImages(100);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReaderComponent_div_3_div_1_button_7_i_1_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See Full Size Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r7.expandImage);
        }
      }

      function ReaderComponent_div_3_div_1_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_3_div_1_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r18.resizeImages(60);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See 60% Size Images (Default)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_3_div_1_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_3_div_1_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r20.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Light Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_3_div_1_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_3_div_1_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r22.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Dark Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_3_div_1_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_3_div_1_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var chapter_r24 = ctx.$implicit;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r26.readerService.jumpChapter(chapter_r24[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", chapter_r24[0], " ");
        }
      }

      function ReaderComponent_div_3_div_1_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_3_div_1_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r28.readerService.nextChapter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReaderComponent_div_3_div_1_button_2_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ReaderComponent_div_3_div_1_button_7_Template, 3, 1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ReaderComponent_div_3_div_1_button_8_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_3_div_1_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r30.changeView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Change View");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ReaderComponent_div_3_div_1_button_12_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ReaderComponent_div_3_div_1_button_13_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ReaderComponent_div_3_div_1_button_18_Template, 2, 1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ReaderComponent_div_3_div_1_button_19_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.firstChapter);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.isMobile && !ctx_r5.expandImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.isMobile && ctx_r5.expandImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", ctx_r5.chapterIndex, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.list[0].info.chapters.slice().reverse());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.finalChapter);
        }
      }

      function ReaderComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReaderComponent_div_3_div_1_Template, 20, 8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.verticalView);
        }
      }

      function ReaderComponent_div_4_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 28);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
        }
      }

      function ReaderComponent_div_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReaderComponent_div_4_div_1_div_1_Template, 1, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.disableSpinner() || false);
        }
      }

      function ReaderComponent_div_4_div_2_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r48.readerService.lastPage(i_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_2_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);

            var chapter_r51 = ctx.$implicit;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r53.readerService.jumpChapter(chapter_r51[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r51 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", chapter_r51[0], " ");
        }
      }

      function ReaderComponent_div_4_div_2_button_11_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
        }
      }

      function ReaderComponent_div_4_div_2_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r56.resizeImages(100);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReaderComponent_div_4_div_2_button_11_i_1_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See Full Size Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r42.expandImage);
        }
      }

      function ReaderComponent_div_4_div_2_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r58.resizeImages(60);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See 60% Size Images (Default)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_2_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r61);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r60.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Light Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_2_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r63);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r62.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Dark Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_2_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r67);

            var i_r65 = ctx.index;

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r66.readerService.jump(i_r65);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pages_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pages_r64[0] + 1);
        }
      }

      function ReaderComponent_div_4_div_2_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r70);

            var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r68.readerService.nextPage(i_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReaderComponent_div_4_div_2_button_2_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ReaderComponent_div_4_div_2_button_6_Template, 2, 1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ReaderComponent_div_4_div_2_button_11_Template, 3, 1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ReaderComponent_div_4_div_2_button_12_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_2_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r71.changeView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Change View");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ReaderComponent_div_4_div_2_button_16_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ReaderComponent_div_4_div_2_button_17_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ReaderComponent_div_4_div_2_button_22_Template, 2, 1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ReaderComponent_div_4_div_2_button_23_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.firstPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", ctx_r35.chapterIndex, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r35.list[0].info.chapters.slice().reverse());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.isMobile && !ctx_r35.expandImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.isMobile && ctx_r35.expandImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r35.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Page ", ctx_r35.currentPage + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r35.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r35.finalPage);
        }
      }

      function ReaderComponent_div_4_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("rainbow", true);
        }
      }

      function ReaderComponent_div_4_div_4_img_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function ReaderComponent_div_4_div_4_img_1_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);

            var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r76.display[i_r33][5] = true;
          })("click", function ReaderComponent_div_4_div_4_img_1_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);

            var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r79.readerService.nextPage(i_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pages_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r74.imageSize, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", pages_r32[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ReaderComponent_div_4_div_4_img_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function ReaderComponent_div_4_div_4_img_2_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

            var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r82.display[i_r33][5] = true;
          })("click", function ReaderComponent_div_4_div_4_img_2_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

            var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r85.readerService.nextPage(i_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pages_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", pages_r32[1], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function ReaderComponent_div_4_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReaderComponent_div_4_div_4_img_1_Template, 1, 3, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReaderComponent_div_4_div_4_img_2_Template, 1, 1, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var conditions_r73 = ctx.ngVar;

          var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx_r37.display[i_r33][5]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r37.isMobile && conditions_r73.isCurrentPage || !ctx_r37.isMobile && conditions_r73.isPreloadable);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r37.isMobile && conditions_r73.isCurrentPage || ctx_r37.isMobile && conditions_r73.isPreloadable);
        }
      }

      function ReaderComponent_div_4_div_5_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99);

            var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r97.readerService.lastPage(i_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_5_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r103);

            var chapter_r100 = ctx.$implicit;

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r102.readerService.jumpChapter(chapter_r100[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r100 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", chapter_r100[0], " ");
        }
      }

      function ReaderComponent_div_4_div_5_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r105);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r104.resizeImages(100);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See Full Size Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_5_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r107);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r106.resizeImages(60);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See 60% Size Images (Default)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_5_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r109);

            var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r108.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Light Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_5_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r110.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Dark Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_5_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r115);

            var i_r113 = ctx.index;

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r114.readerService.jump(i_r113);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pages_r112 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pages_r112[0] + 1);
        }
      }

      function ReaderComponent_div_4_div_5_button_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_button_23_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r118);

            var i_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r116.readerService.nextPage(i_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_4_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReaderComponent_div_4_div_5_button_2_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ReaderComponent_div_4_div_5_button_6_Template, 2, 1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ReaderComponent_div_4_div_5_button_11_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ReaderComponent_div_4_div_5_button_12_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_4_div_5_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r120);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r119.changeView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Change View");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ReaderComponent_div_4_div_5_button_16_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ReaderComponent_div_4_div_5_button_17_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ReaderComponent_div_4_div_5_button_22_Template, 2, 1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ReaderComponent_div_4_div_5_button_23_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r38.firstPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", ctx_r38.chapterIndex, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r38.list[0].info.chapters.slice().reverse());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r38.isMobile && !ctx_r38.expandImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r38.isMobile && ctx_r38.expandImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r38.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Page ", ctx_r38.currentPage + 1, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r38.display);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r38.finalPage);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          isCurrentPage: a0,
          isPreloadable: a1
        };
      };

      function ReaderComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReaderComponent_div_4_div_1_Template, 2, 2, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReaderComponent_div_4_div_2_Template, 24, 10, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReaderComponent_div_4_div_3_Template, 2, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ReaderComponent_div_4_div_4_Template, 3, 3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ReaderComponent_div_4_div_5_Template, 24, 10, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pages_r32 = ctx.$implicit;
          var i_r33 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !pages_r32[4] && !ctx_r3.verticalView);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", pages_r32[4] && !ctx_r3.verticalView);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.verticalView);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.display[i_r33][5]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngVar", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx_r3.display[i_r33][4] || ctx_r3.verticalView, ctx_r3.currentPage + 2 > i_r33 && ctx_r3.currentPage - 1 < i_r33));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.verticalView);
        }
      }

      function ReaderComponent_div_5_div_2_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_5_div_2_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r130);

            var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r129.readerService.lastChapter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_5_div_2_button_7_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 22);
        }
      }

      function ReaderComponent_div_5_div_2_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_5_div_2_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r133);

            var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r132.resizeImages(100);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReaderComponent_div_5_div_2_button_7_i_1_Template, 1, 0, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See Full Size Images");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r123.expandImage);
        }
      }

      function ReaderComponent_div_5_div_2_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_5_div_2_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r135);

            var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r134.resizeImages(60);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " See 60% Size Images (Default)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_5_div_2_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_5_div_2_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r137);

            var ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r136.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Light Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_5_div_2_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_5_div_2_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r139);

            var ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r138.darkMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Dark Mode ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_5_div_2_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_5_div_2_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r143);

            var chapter_r140 = ctx.$implicit;

            var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r142.readerService.jumpChapter(chapter_r140[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r140 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", chapter_r140[0], " ");
        }
      }

      function ReaderComponent_div_5_div_2_button_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_5_div_2_button_19_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r145);

            var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r144.readerService.nextChapter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function ReaderComponent_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReaderComponent_div_5_div_2_button_2_Template, 2, 0, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ReaderComponent_div_5_div_2_button_7_Template, 3, 1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ReaderComponent_div_5_div_2_button_8_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReaderComponent_div_5_div_2_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r147);

            var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r146.changeView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Change View");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ReaderComponent_div_5_div_2_button_12_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ReaderComponent_div_5_div_2_button_13_Template, 3, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ReaderComponent_div_5_div_2_button_18_Template, 2, 1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ReaderComponent_div_5_div_2_button_19_Template, 2, 0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r121.firstChapter);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r121.isMobile && !ctx_r121.expandImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r121.isMobile && ctx_r121.expandImage);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r121.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r121.dark);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Chapter ", ctx_r121.chapterIndex, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r121.list[0].info.chapters.slice().reverse());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r121.finalChapter);
        }
      }

      function ReaderComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReaderComponent_div_5_div_2_Template, 20, 8, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.verticalView);
        }
      } // tslint:disable: triple-equals
      // tslint:disable: align
      // tslint:disable: one-line
      // tslint:disable: no-trailing-whitespace
      // tslint:disable: quotemark
      // tslint:disable: max-line-length
      // tslint:disable: radix


      var ReaderComponent = /*#__PURE__*/function () {
        function ReaderComponent(service, listService, route, element, router, title, rsocketService, deviceService) {
          _classCallCheck(this, ReaderComponent);

          this.service = service;
          this.listService = listService;
          this.route = route;
          this.element = element;
          this.router = router;
          this.title = title;
          this.list = [];
          this.imageSize = 60;
          this.verticalView = false;
          this.dark = false;
          this.display = [];
          this.currentPage = 0;
          this.firstChapter = false;
          this.finalPage = false;
          this.finalChapter = false;
          this.loadedImage = false;
          this.currentPageLoaded = false;
          this.expandImage = false;
          this.isMobile = deviceService.isMobile();
          this.darkMode(); // If on phone, the pages will be displayed vertically

          if (this.isMobile) {
            this.verticalView = !this.verticalView;
          }

          this.readerService = new _Services_reader_service__WEBPACK_IMPORTED_MODULE_0__["ReaderService"](this, service, rsocketService, listService, route, router, title);
        }

        _createClass(ReaderComponent, [{
          key: "changeView",
          value: function changeView() {
            this.verticalView = !this.verticalView;
          }
        }, {
          key: "resizeImages",
          value: function resizeImages(size) {
            this.imageSize = size;
            this.expandImage = !this.expandImage;
          }
        }, {
          key: "darkMode",
          value: function darkMode() {
            this.dark = !this.dark;

            if (this.dark) {
              this.element.nativeElement.ownerDocument.body.style.backgroundColor = "black";
            } else {
              this.element.nativeElement.ownerDocument.body.style.backgroundColor = "white";
            }
          }
        }, {
          key: "disableSpinner",
          value: function disableSpinner() {
            this.currentPageLoaded = true;
            return null;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.route.paramMap.subscribe(function (params) {
              _this15.display = [];
              clearInterval(_this15.interval); // tslint:disable: radix

              if (isNaN(parseInt(params.get("manga"))) || isNaN(parseInt(params.get("index")))) {
                _this15.router.navigate(["**"]);
              } // if manga exists in session


              if (_this15.service.Manga && parseFloat(params.get("manga")) === _this15.service.Manga.realID) {
                _this15.list[0] = _this15.service.Manga;

                _this15.setup(params);

                _this15.title.setTitle(_this15.list[0].t + ": Chapter " + _this15.chapterIndex);
              } // if the mangalist is loaded
              else if (_this15.listService.mangaList) {
                  _this15.list = _this15.listService.mangaList.filter(function (item) {
                    return item.realID == parseInt(params.get("manga"));
                  });

                  _this15.setup(params);

                  _this15.title.setTitle(_this15.list[0].t + ": Chapter " + _this15.chapterIndex);
                } // check if this is part of the latest manga
                else if (!_this15.listService.mangaList && _this15.checkLatest(params)) {
                    _this15.list = _this15.listService.recent.slice().filter(function (item) {
                      return item.realID == parseInt(params.get("manga"));
                    });

                    _this15.setup(params);

                    _this15.title.setTitle(_this15.list[0].t + ": Chapter " + _this15.chapterIndex);
                  } else {
                    // this will run if it's part of the latest manga
                    _this15.listService.recentSubject.subscribe(function (latest) {
                      if (!_this15.list) {
                        _this15.list = latest.filter(function (item) {
                          return item.realID == parseInt(params.get("manga"));
                        });

                        if (_this15.list.length != 0) {
                          _this15.setup(params);

                          _this15.title.setTitle(_this15.list[0].t + ": Chapter " + _this15.chapterIndex);
                        }
                      }
                    }); // this will run in all other cases


                    _this15.listService.mangaSubject.subscribe(function (manga) {
                      if (_this15.list.length == 0) {
                        _this15.list = manga.filter(function (item) {
                          return item.realID == parseInt(params.get("manga"));
                        });

                        _this15.setup(params);

                        _this15.title.setTitle(_this15.list[0].t + ": Chapter " + _this15.chapterIndex);
                      }
                    }); // this will load the manga's info straight from the database if the above two functions fail


                    _this15.loadFromDatabase(params);
                  }
            });
          } // setup variables based on the route

        }, {
          key: "setup",
          value: function setup(params) {
            //saves manga 2 local storage for later reading
            this.service.saveManga2Local();
            this.chapterIndex = params.get("index"); // if chapterlist is in the service

            if (this.service.chapters && this.list[0].t === this.service.chapters.mangaName) {
              this.chapters = this.service.chapters;
              this.readerService.setChapter(params);
            } else {
              this.service.setManga(this.list[0]);
              this.readerService.getChapter(params);
            } // sets page


            if (this.service.pageIndex != undefined) {
              this.currentPage = this.service.pageIndex;
            } else if (parseInt(params.get("page")) > 0) {
              this.currentPage = parseInt(params.get("page")) - 1;
            } else {
              this.currentPage = 0;
            }
          } // checks whether manga is part of the latest manga

        }, {
          key: "checkLatest",
          value: function checkLatest(params) {
            try {
              return params.get("manga") === this.listService.recent.find(function (manga) {
                return manga.realID.toString() === params.get("manga");
              }).realID.toString();
            } catch (error) {
              return false;
            }
          } // this will load the manga from the database if the site doesn't currently have it

        }, {
          key: "loadFromDatabase",
          value: function loadFromDatabase(params) {
            var _this16 = this;

            setTimeout(function () {
              // this checks if the service has a manga stored
              if (_this16.list.length === 0) {
                _this16.readerService.getChapter(params);
              }
            }, 3000);
          }
        }, {
          key: "keyEvent",
          value: function keyEvent(event) {
            if (this.service.search) {//won't do anything because we're in the searchbar
            } else if ((event.keyCode === 39 || event.keyCode === 32 || event.keyCode === 68) && !this.verticalView) {
              this.readerService.nextPage(this.currentPage);
              event.preventDefault();
            } else if ((event.keyCode === 37 || event.keyCode === 65) && !this.verticalView) {
              this.readerService.lastPage(this.currentPage);
              event.preventDefault();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            //reset dark theme
            this.element.nativeElement.ownerDocument.body.style.backgroundColor = "white"; //clear pageindex from session

            this.service.setPageIndex(undefined);
          }
        }]);

        return ReaderComponent;
      }();

      ReaderComponent.ɵfac = function ReaderComponent_Factory(t) {
        return new (t || ReaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_manga_service__WEBPACK_IMPORTED_MODULE_2__["MangaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_3__["MangaListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_rsocket_service__WEBPACK_IMPORTED_MODULE_6__["RSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]));
      };

      ReaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ReaderComponent,
        selectors: [["app-reader"]],
        hostBindings: function ReaderComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ReaderComponent_keydown_HostBindingHandler($event) {
              return ctx.keyEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 6,
        vars: 5,
        consts: [[1, "container"], [4, "ngIf"], [3, "hidden", 4, "ngFor", "ngForOf"], [3, "drip"], [3, "rainbow"], ["class", " text-center align-middle row justify-content-center topBtn flex-wrap", 4, "ngIf"], [1, "text-center", "align-middle", "row", "justify-content-center", "topBtn", "flex-wrap"], ["role", "group", 1, "dropdown", "btn-group"], ["type", "button", "class", "btn btn-dark", 3, "click", 4, "ngIf"], [1, "dropdown", "btn-group"], ["type", "button", "id", "dropdownButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-warning", "btn-sm", "dropdown-toggle"], [1, "fas", "fa-cog"], ["aria-labelledby", "dropdownButton", 1, "dropdown-menu", "scrollable-menu"], ["class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-arrow-alt-circle-right"], ["type", "button", "id", "dropdownButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["class", "dropdown-item", 3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "fas", "fa-arrow-left"], ["class", "fas fa-expand-arrows-alt", 4, "ngIf"], [1, "fas", "fa-expand-arrows-alt"], [1, "fas", "fa-compress-arrows-alt"], [1, "fas", "fa-sun"], [1, "fas", "fa-moon"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-arrow-right"], [3, "hidden"], [3, "hidden", 4, "ngIf"], ["class", "container row justify-content-center topBtn flex-wrap", 4, "ngIf"], ["class", "container-fluid justify-content: center", 3, "hidden", 4, "ngVar"], ["class", "container row justify-content-center Bbtn flex-wrap", 4, "ngIf"], [1, "container", "row", "justify-content-center", "topBtn", "flex-wrap"], [1, "fas", "fa-arrow-alt-circle-down"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-info", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu", "scrollable-menu"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "dropdown-item", 3, "click"], [1, "container-fluid", "justify-content:", "center", 3, "hidden"], ["class", "img-fluid", 3, "width", "src", "load", "click", 4, "ngIf"], ["class", "img-fluid mobile", 3, "src", "load", "click", 4, "ngIf"], [1, "img-fluid", 3, "src", "load", "click"], [1, "img-fluid", "mobile", 3, "src", "load", "click"], [1, "container", "row", "justify-content-center", "Bbtn", "flex-wrap"], [1, "container", "justify-content-center", "Bbtn", "flex-wrap"], ["class", " row justify-content-center Bbtn flex-wrap", 4, "ngIf"], [1, "row", "justify-content-center", "Bbtn", "flex-wrap"]],
        template: function ReaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReaderComponent_div_1_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ReaderComponent_div_2_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ReaderComponent_div_3_Template, 2, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ReaderComponent_div_4_Template, 6, 9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ReaderComponent_div_5_Template, 3, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.display.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.verticalView && ctx.display.length !== 0 && !ctx.currentPageLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.display.length !== 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.display);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.display.length !== 0);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_9__["SpinnerComponent"], _Directives_VarDirective__WEBPACK_IMPORTED_MODULE_10__["VarDirective"], _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_11__["ImagePreloadDirective"]],
        styles: [".scrollable-menu[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  max-height: 400px;\r\n  overflow-x: hidden;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  border-radius: 0%;\r\n}\r\n\r\n.topBtn[_ngcontent-%COMP%] {\r\n  margin-top: 2%;\r\n  margin-bottom: 1%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.Bbtn[_ngcontent-%COMP%] {\r\n  margin-top: 1%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.mobile[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .btn[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoicmVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsYWJsZS1tZW51IHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCU7XHJcbn1cclxuXHJcbi50b3BCdG4ge1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLkJidG4ge1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLm1vYmlsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./Components/home/home.component */
      "0zBU");
      /* harmony import */


      var _Components_home_popular_manga_popular_manga_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./Components/home/popular-manga/popular-manga.component */
      "EwtE");
      /* harmony import */


      var _Components_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./Components/manga-list/manga-list.component */
      "fLN3");
      /* harmony import */


      var _Components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./Components/manga-page/manga-page.component */
      "yBHn");
      /* harmony import */


      var _Components_reader_reader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./Components/reader/reader.component */
      "VyY4");
      /* harmony import */


      var _Components_SubComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./Components/SubComponents/footer/footer.component */
      "bAwK");
      /* harmony import */


      var _Components_SubComponents_navbar_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./Components/SubComponents/navbar/login/login.component */
      "nhLo");
      /* harmony import */


      var _Components_SubComponents_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./Components/SubComponents/navbar/navbar.component */
      "gZGi");
      /* harmony import */


      var _Components_SubComponents_navbar_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./Components/SubComponents/navbar/register/register.component */
      "Dvm+");
      /* harmony import */


      var _Components_SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./Components/SubComponents/spinner/spinner.component */
      "Vxzm");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./Directives/ImageDirective */
      "nv7p");
      /* harmony import */


      var _Directives_VarDirective__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./Directives/VarDirective */
      "eHqZ");
      /* harmony import */


      var _Interceptors_Auth_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./Interceptors/Auth.interceptor */
      "hh57");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "rQPh");
      /* harmony import */


      var _truncate_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./truncate.pipe */
      "7arH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
          useClass: _Interceptors_Auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _Components_SubComponents_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"], _Components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _Components_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_11__["MangaListComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__["PageNotFoundComponent"], _Components_SubComponents_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _Components_home_popular_manga_popular_manga_component__WEBPACK_IMPORTED_MODULE_10__["PopularMangaComponent"], _Components_SubComponents_navbar_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _Components_SubComponents_navbar_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _Components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_12__["MangaPageComponent"], _Components_reader_reader_component__WEBPACK_IMPORTED_MODULE_13__["ReaderComponent"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_23__["TruncatePipe"], _Components_SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"], _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_19__["ImagePreloadDirective"], _Directives_VarDirective__WEBPACK_IMPORTED_MODULE_20__["VarDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]]
        });
      })();
      /***/

    },

    /***/
    "bAwK":
    /*!*********************************************************************!*\
      !*** ./src/app/Components/SubComponents/footer/footer.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function bAwK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 24,
        vars: 0,
        consts: [[1, "section", "footer-classic", "context-dark", "bg-image", "bg-dark", 2, "background", "#2d3246"], [1, "container"], [1, "row", "row-30"], [1, "col"], [1, "pr-xl-4"], [1, "rights", "text-center", "align-middle"], [1, "copyright-year"], [1, "text-center", "align-middle"], ["href", "https://www.designevo.com/logo-maker/", "title", "Free Online Logo Maker"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Copyright ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xA9\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "MangaSpring");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ".\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Logo made by ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "DesignEvo free logo creator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".context-dark[_ngcontent-%COMP%], .bg-gray-dark[_ngcontent-%COMP%], .bg-primary[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.footer-classic[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .footer-classic[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .footer-classic[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n  color: #ffffff;\r\n}\r\n\r\n.section[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVzs7QUFFYiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZXh0LWRhcmssIC5iZy1ncmF5LWRhcmssIC5iZy1wcmltYXJ5IHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4uZm9vdGVyLWNsYXNzaWMgYSwgLmZvb3Rlci1jbGFzc2ljIGE6Zm9jdXMsIC5mb290ZXItY2xhc3NpYyBhOmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "eHqZ":
    /*!********************************************!*\
      !*** ./src/app/Directives/VarDirective.ts ***!
      \********************************************/

    /*! exports provided: VarDirective */

    /***/
    function eHqZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VarDirective", function () {
        return VarDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VarDirective = /*#__PURE__*/function () {
        function VarDirective(vcRef, templateRef) {
          _classCallCheck(this, VarDirective);

          this.vcRef = vcRef;
          this.templateRef = templateRef;
          this.context = {};
        }

        _createClass(VarDirective, [{
          key: "ngVar",
          set: function set(context) {
            this.context.$implicit = this.context.ngVar = context;
            this.updateView();
          }
        }, {
          key: "updateView",
          value: function updateView() {
            this.vcRef.clear();
            this.vcRef.createEmbeddedView(this.templateRef, this.context);
          }
        }]);

        return VarDirective;
      }();

      VarDirective.ɵfac = function VarDirective_Factory(t) {
        return new (t || VarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
      };

      VarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: VarDirective,
        selectors: [["", "ngVar", ""]],
        inputs: {
          ngVar: "ngVar"
        }
      });
      /***/
    },

    /***/
    "fLN3":
    /*!***************************************************************!*\
      !*** ./src/app/Components/manga-list/manga-list.component.ts ***!
      \***************************************************************/

    /*! exports provided: MangaListComponent */

    /***/
    function fLN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MangaListComponent", function () {
        return MangaListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Services_manga_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../Services/manga-list-service */
      "m4Aj");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-device-detector */
      "9YtQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-pagination */
      "oOf3");
      /* harmony import */


      var _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../SubComponents/spinner/spinner.component */
      "Vxzm");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../Directives/ImageDirective */
      "nv7p");
      /* harmony import */


      var _truncate_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../truncate.pipe */
      "7arH");

      function MangaListComponent_div_0_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_div_0_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var letter_r8 = ctx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.filter(letter_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var letter_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](letter_r8);
        }
      }

      function MangaListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MangaListComponent_div_0_div_2_Template, 3, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.alphabet);
        }
      }

      function MangaListComponent_div_1_div_5_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_div_1_div_5_div_3_Template_input_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var genre_r14 = ctx.$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r15.addToList(genre_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var genre_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r14, "");
        }
      }

      function MangaListComponent_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Genre:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MangaListComponent_div_1_div_5_div_3_Template, 5, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Status:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_div_1_div_5_Template_input_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.setStatus(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ongoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_div_1_div_5_Template_input_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r19.setStatus(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Completed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_div_1_div_5_Template_input_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.setStatus(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_div_1_div_5_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

            return ctx_r21.sendInfo(_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.genres);
        }
      }

      function MangaListComponent_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-controls", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MangaListComponent_div_1_div_6_Template_pagination_controls_pageChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            ctx_r22.p = $event;
            return ctx_r22.resetSpinner();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MangaListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_div_1_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            ctx_r24.expand();
            return ctx_r24.setStatus(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MangaListComponent_div_1_div_5_Template, 22, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MangaListComponent_div_1_div_6_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.service.IsLoaded);
        }
      }

      function MangaListComponent_div_2_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MangaListComponent_div_2_div_2_img_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function MangaListComponent_div_2_div_2_img_4_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var manga_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return manga_r27.info.imageLoaded = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var manga_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r29.getImage(manga_r27.im), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !manga_r27.info.imageLoaded);
        }
      }

      var _c0 = function _c0() {
        return [26, "..."];
      };

      function MangaListComponent_div_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MangaListComponent_div_2_div_2_div_3_Template, 2, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MangaListComponent_div_2_div_2_img_4_Template, 1, 2, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "truncate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var manga_r27 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !manga_r27.info.imageLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", manga_r27.im);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-page/", manga_r27.realID, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 4, manga_r27.t, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0)));
        }
      }

      var _c1 = function _c1(a1) {
        return {
          itemsPerPage: 6,
          currentPage: a1
        };
      };

      function MangaListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MangaListComponent_div_2_div_2_Template, 10, 8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r2.list, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r2.p)));
        }
      }

      function MangaListComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination-controls", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MangaListComponent_div_3_Template_pagination_controls_pageChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r34.p = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MangaListComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Getting Manga...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Read something from the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Homepage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " while you wait.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wedge", true)("isMobile", ctx_r4.isMobile);
        }
      }

      function MangaListComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Could Not Find Manga");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_ng_template_5_Template_button_click_3_listener() {
            var modal_r36 = ctx.$implicit;
            return modal_r36.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "No such manga with the selected filters exists\u2026");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaListComponent_ng_template_5_Template_button_click_10_listener() {
            var modal_r36 = ctx.$implicit;
            return modal_r36.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MangaListComponent = /*#__PURE__*/function () {
        function MangaListComponent(service, title, route, modalService, deviceService) {
          _classCallCheck(this, MangaListComponent);

          this.service = service;
          this.route = route;
          this.modalService = modalService;
          this.alphabet = ["All", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"];
          this.genres = ["Action", "Adult", "Adventure", "Comic", "Comedy", "Drama", "Demons", "Doujinshi", "Ecchi", "Fantasy", "Harem", "Historical", "Horror", "Josei", "Martial Arts", "Magic", "Mature", "Mecha", "Mystery", "Psychological", "Romance", "Seinen", "School Life", "Shoujo", "Sci-fi", "Shounen", "Supernatural", "Sports", "Tragedy"];
          this.genreArray = [];
          this.show = false;
          this.status = 0;
          this.toggle = false;
          this.isMobile = deviceService.isMobile();
          title.setTitle("MangaList");
          window.scroll(0, 0);
        } // expands the filter options


        _createClass(MangaListComponent, [{
          key: "expand",
          value: function expand() {
            this.show = !this.show;
          } // filters the manga depending on which button letter the user clicks

        }, {
          key: "filter",
          value: function filter(letter) {
            if (letter === "All") {
              this.mangaList = this.service.mangaList;
              this.list = this.mangaList;
              this.p = 0;
            } else if (letter === "#") {
              var filtered = this.mangaList.filter(function (manga) {
                return manga.t.startsWith("0") || manga.t.startsWith("1") || manga.t.startsWith("2") || manga.t.startsWith("3") || manga.t.startsWith("4") || manga.t.startsWith("5") || manga.t.startsWith("6") || manga.t.startsWith("7") || manga.t.startsWith("8") || manga.t.startsWith("9");
              });
              this.list = filtered.sort(function (a, b) {
                return a.a.localeCompare(b.a);
              });
              this.p = 0;
            } else {
              var _filtered = this.mangaList.filter(function (manga) {
                return manga.t.startsWith(letter);
              });

              this.list = _filtered.sort(function (a, b) {
                return a.a.localeCompare(b.a);
              });
              this.p = 0;
            }
          } // Adds genres from the filter selection

        }, {
          key: "addToList",
          value: function addToList(genre) {
            if (!this.genreArray.find(function (item) {
              return item === genre;
            })) {
              this.genreArray.push(genre);
            } else {
              for (var i = 0; i < this.genreArray.length; i++) {
                if (this.genreArray[i] === genre) {
                  this.genreArray.splice(i, 1);
                }
              }
            }
          }
        }, {
          key: "setStatus",
          value: function setStatus(n) {
            this.status = n;
          } // Sends genreArray to filter multiple genres selected

        }, {
          key: "sendInfo",
          value: function sendInfo(content) {
            var _this17 = this;

            this.list = this.service.mangaList;

            if (this.status === 1) {
              this.list = this.list.filter(function (manga) {
                return _this17.genreArray.every(function (value) {
                  return manga.c.indexOf(value) >= 0;
                }) && manga.s === 1;
              });
            } else if (this.status === 2) {
              this.list = this.list.filter(function (manga) {
                return _this17.genreArray.every(function (value) {
                  return manga.c.indexOf(value) >= 0;
                }) && manga.s === 2;
              });
            } else if (this.status === 0) {
              this.list = this.list.filter(function (manga) {
                return _this17.genreArray.every(function (value) {
                  return manga.c.indexOf(value) >= 0;
                });
              });
            }

            if (this.list.length === 0) {
              this.list = this.service.mangaList; //open modal

              this.modalService.open(content, {
                centered: true
              });
            }

            this.p = 0;
          } // filters list by (one) genre, author, and artist depending on the condition(from home page)

        }, {
          key: "filterByGenre",
          value: function filterByGenre(genre) {
            // checks for genre
            this.list = this.list.filter(function (item) {
              return item.c.find(function (gen) {
                return gen === genre;
              });
            }); // checks for author

            if (this.list.length === 0) {
              this.list = this.mangaList.filter(function (item) {
                return item.info.author === genre;
              });
            } // checks for artist


            if (this.list.length === 0) {
              this.list = this.mangaList.filter(function (item) {
                return item.info.artist === genre;
              });
            }

            if (this.list.length === 0) {
              this.list = this.service.mangaList;
              window.alert("No such mangas with the selected genre exists");
            }
          } // renders the images

        }, {
          key: "getImage",
          value: function getImage(url) {
            if (url.startsWith("http")) {
              return url;
            } else {
              return "/image/" + url;
            }
          }
        }, {
          key: "resetSpinner",
          value: function resetSpinner() {
            this.list.forEach(function (manga) {
              return manga.info.imageLoaded = false;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.route.paramMap.subscribe(function (params) {
              if (_this18.service.mangaList) {
                _this18.mangaList = _this18.service.mangaList.sort(function (a, b) {
                  return b.h - a.h;
                }).reverse();
                _this18.list = _this18.mangaList;

                _this18.resetSpinner();

                if (params.get("genre") != null) {
                  _this18.filterByGenre(params.get("genre"));
                }
              }

              _this18.service.mangaSubject.subscribe(function (list) {
                _this18.mangaList = list.sort(function (a, b) {
                  return b.h - a.h;
                }).reverse();
                _this18.list = _this18.mangaList;

                _this18.resetSpinner();

                if (params.get("genre") != null) {
                  _this18.filterByGenre(params.get("genre"));
                }
              });
            });
          }
        }]);

        return MangaListComponent;
      }();

      MangaListComponent.ɵfac = function MangaListComponent_Factory(t) {
        return new (t || MangaListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_1__["MangaListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]));
      };

      MangaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MangaListComponent,
        selectors: [["app-manga-list"]],
        decls: 7,
        vars: 5,
        consts: [["class", "container con", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["class", "container con2", 4, "ngIf"], ["class", "container justify-content-center", 4, "ngIf"], ["content", ""], [1, "container", "con"], [1, "btn-toolbar", "justify-content-center", "align-items-center"], ["class", "btn-group btn-group-sm button", 4, "ngFor", "ngForOf"], [1, "btn-group", "btn-group-sm", "button"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "container"], [1, "row", "justify-content-center", "filter"], ["type", "button", 1, "btn", "btn-secondary", "justify-content-center", 3, "click"], [1, "fas", "fa-filter"], ["class", "wrapper", 4, "ngIf"], ["class", "row justify-content-center", 4, "ngIf"], [1, "wrapper"], ["class", "form-check-inline", 4, "ngFor", "ngForOf"], [1, "form-check"], [1, "form-check-label"], ["name", "radio", "type", "radio", 1, "form-check-input", 3, "click"], [1, "row", "justify-content-center"], [1, "btn", "btn-success", 3, "click"], [1, "far", "fa-paper-plane"], [1, "form-check-inline"], [1, "checkbox-inline", "items"], ["type", "checkbox", 3, "click"], [3, "pageChange"], [1, "container", "con2"], [1, "row"], ["class", "col-md-2 col-6", 4, "ngFor", "ngForOf"], [1, "col-md-2", "col-6"], [1, "card-deck"], [1, "card"], [4, "ngIf"], ["class", "img card-img-top", "alt", "Card image cap", 3, "hidden", "src", "load", 4, "ngIf"], ["routerLinkActive", "router-link-active", 1, "card-body", "align-middle", "text-center", 3, "routerLink"], [1, "align-middle", "text-center", "card-title"], ["alt", "Card image cap", 1, "img", "card-img-top", 3, "hidden", "src", "load"], [1, "container", "justify-content-center"], [3, "wedge", "isMobile"], ["routerLink", "/home", "routerLinkActive", "router-link-active"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]],
        template: function MangaListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MangaListComponent_div_0_Template, 3, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaListComponent_div_1_Template, 7, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MangaListComponent_div_2_Template, 4, 6, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MangaListComponent_div_3_Template, 3, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MangaListComponent_div_4_Template, 9, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MangaListComponent_ng_template_5_Template, 12, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.IsLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.IsLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.IsLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service.IsLoaded);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.IsLoaded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"], _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_9__["ImagePreloadDirective"]],
        pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _truncate_pipe__WEBPACK_IMPORTED_MODULE_10__["TruncatePipe"]],
        styles: [".con2[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  margin: 1%;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin: 2%;\r\n  height: 20%;\r\n  max-height: 326px;\r\n}\r\n\r\n.con[_ngcontent-%COMP%] {\r\n  margin-top: 4%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  margin-right: 0.8%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  margin-top: 3%;\r\n  margin-bottom: 2%;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n  min-height: 10%;\r\n}\r\n\r\n@media (max-width: 763px) and (min-width: 440px) {\r\n  .card-deck[_ngcontent-%COMP%] {\r\n    margin: 5%;\r\n  }\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  white-space: pre-line;\r\n}\r\n\r\n.form-check[_ngcontent-%COMP%] {\r\n  margin: 0.1%;\r\n  min-width: 25%;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n  margin-bottom: 2%;\r\n}\r\n\r\nh5[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmdhLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUd2QiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJtYW5nYS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggOXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggOXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIG1hcmdpbjogMiU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbiAgbWF4LWhlaWdodDogMzI2cHg7XHJcbn1cclxuXHJcbi5jb24ge1xyXG4gIG1hcmdpbi10b3A6IDQlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuOCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBtaW4taGVpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjNweCkgYW5kIChtaW4td2lkdGg6IDQ0MHB4KSB7XHJcbiAgLmNhcmQtZGVjayB7XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjayB7XHJcbiAgbWFyZ2luOiAwLjElO1xyXG4gIG1pbi13aWR0aDogMjUlO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuaDUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "gZGi":
    /*!*********************************************************************!*\
      !*** ./src/app/Components/SubComponents/navbar/navbar.component.ts ***!
      \*********************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function gZGi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/login.component */
      "nhLo");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register/register.component */
      "Dvm+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/manga-list-service */
      "m4Aj");
      /* harmony import */


      var src_app_Services_rsocket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/rsocket-service */
      "3gGP");
      /* harmony import */


      var src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/Services/manga.service */
      "VlvX");
      /* harmony import */


      var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-device-detector */
      "9YtQ");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../Directives/ImageDirective */
      "nv7p");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _truncate_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../truncate.pipe */
      "7arH");

      var _c0 = function _c0() {
        return [17, "..."];
      };

      function NavbarComponent_form_14_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_form_14_ul_3_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

            var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r6.setChapter(item_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "truncate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-page/", item_r2.realID, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 2, item_r2.t, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0)));
        }
      }

      function NavbarComponent_form_14_ul_3_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavbarComponent_form_14_ul_3_li_2_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);

            var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r10.setChapter(item_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "truncate");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-page/", item_r2.realID, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r5.getImage(item_r2.im), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 3, item_r2.t, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0)), "");
        }
      }

      function NavbarComponent_form_14_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavbarComponent_form_14_ul_3_li_1_Template, 4, 6, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavbarComponent_form_14_ul_3_li_2_Template, 4, 7, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r2.im === null && ctx_r1.showlist && i_r3 < 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r2.im != null && ctx_r1.showlist && i_r3 < 10);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "col-sm": a0
        };
      };

      var _c2 = function _c2() {
        return {
          standalone: true
        };
      };

      function NavbarComponent_form_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function NavbarComponent_form_14_Template_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r14.name = $event;
          })("keyup", function NavbarComponent_form_14_Template_input_keyup_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r16.search(ctx_r16.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavbarComponent_form_14_ul_3_Template, 3, 2, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c1, ctx_r0.scrWidth > 991));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.name)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tempList);
        }
      }

      var _c3 = function _c3() {
        return ["/"];
      };

      var _c4 = function _c4(a0) {
        return {
          row: a0
        };
      };

      var _c5 = function _c5() {
        return ["/home"];
      };

      var _c6 = function _c6() {
        return ["/manga-list"];
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(dialog, service, rsocket, mangaService, deviceService) {
          _classCallCheck(this, NavbarComponent);

          this.dialog = dialog;
          this.service = service;
          this.rsocket = rsocket;
          this.mangaService = mangaService;
          this.isMobile = deviceService.isMobile();
          this.getScreenSize();
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            if (this.service.mangaList) {
              this.list = this.service.mangaList.slice();
            } else {
              this.service.mangaSubject.subscribe(function (manga) {
                _this19.list = manga.filter(function (item) {
                  return item.realID != -2;
                });
              });
            }
          }
        }, {
          key: "getScreenSize",
          value: function getScreenSize(event) {
            this.scrHeight = window.innerHeight;
            this.scrWidth = window.innerWidth;
          } // when mouse hovers enters navbar it disables the keyboard scroll in reader

        }, {
          key: "inSearch",
          value: function inSearch() {
            this.mangaService.search = true;
          } // when mouse hovers outside of navbar it disables the list

        }, {
          key: "closeList",
          value: function closeList() {
            this.showlist = false;
            this.mangaService.search = false;
          }
        }, {
          key: "saveToStorage",
          value: function saveToStorage(event) {
            this.mangaService.saveToStorage();
          } // sends the chapter to the service so that manga-page can display the data

        }, {
          key: "setChapter",
          value: function setChapter(manga) {
            this.mangaService.setManga(manga);
            this.showlist = false;
            this.name = "";
          } // A temp variable takes the list to display the data being filtered

        }, {
          key: "search",
          value: function search(n) {
            if (n.length > 1) {
              n = n.toUpperCase();
              this.showlist = true;
              this.tempList = this.list.sort(function (a, b) {
                return a.a.localeCompare(b.a);
              });
              this.tempList = this.tempList.filter(function (manga) {
                return manga.t.toUpperCase().startsWith(n);
              });
            } else {
              this.showlist = false;
            }
          } // handles the images

        }, {
          key: "getImage",
          value: function getImage(url) {
            if (url.startsWith("http")) {
              return url;
            } else {
              return "/image/" + url;
            }
          } // dialog buttons operations

        }, {
          key: "openDialog",
          value: function openDialog() {
            this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]);
          }
        }, {
          key: "openLogin",
          value: function openLogin() {
            this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]);
          }
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_4__["MangaListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Services_rsocket_service__WEBPACK_IMPORTED_MODULE_5__["RSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_6__["MangaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorService"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function NavbarComponent_resize_HostBindingHandler($event) {
              return ctx.getScreenSize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"])("mouseenter", function NavbarComponent_mouseenter_HostBindingHandler() {
              return ctx.inSearch();
            })("mouseleave", function NavbarComponent_mouseleave_HostBindingHandler() {
              return ctx.closeList();
            })("beforeunload", function NavbarComponent_beforeunload_HostBindingHandler($event) {
              return ctx.saveToStorage($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
          }
        },
        decls: 15,
        vars: 10,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLinkActive", "router-link-active", 1, "navbar-brand", 3, "routerLink"], ["src", "../../assets/imageedit_11_3620823692.png", 1, "logo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 3, "ngClass"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLinkActive", "router-link-active", 1, "nav-link", 3, "routerLink"], ["class", "form-inline my-2 my-lg-0 ", 3, "ngClass", 4, "ngIf"], [1, "form-inline", "my-2", "my-lg-0", 3, "ngClass"], ["type", "text", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], [1, "search-container"], ["class", "list-group", 4, "ngFor", "ngForOf"], [1, "list-group"], ["class", "list-group-item", "routerLinkActive", "router-link-active", 3, "routerLink", "click", 4, "ngIf"], ["routerLinkActive", "router-link-active", 1, "list-group-item", 3, "routerLink", "click"], ["src", "../../../assets/noimage.jpeg", "alt", "Card image cap", 1, "img", "card-img-top"], ["alt", "Card image cap", 1, "img", "card-img-top", 3, "src"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " MangaSpring");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "List");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NavbarComponent_form_14_Template, 4, 7, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c4, ctx.scrWidth > 991));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c5));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c6));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.service.IsLoaded);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkActive"], _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_10__["ImagePreloadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
        pipes: [_truncate_pipe__WEBPACK_IMPORTED_MODULE_13__["TruncatePipe"]],
        styles: [".navbar[_ngcontent-%COMP%] {\r\n  box-shadow: 0 8px 6px -6px #999;\r\n}\r\n\r\n.search-container[_ngcontent-%COMP%] {\r\n  z-index: 100;\r\n  position: absolute;\r\n  top: 100%;\r\n}\r\n\r\n.list-group[_ngcontent-%COMP%]:hover {\r\n  color:skyblue;\r\n}\r\n\r\n.list-group-item[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n  width: 11%;\r\n}\r\n\r\n.searchdiv[_ngcontent-%COMP%]{\r\n  float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjOTk5O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA4cHggNnB4IC02cHggIzk5OTtcclxuICBib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjOTk5O1xyXG59XHJcblxyXG4uc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbn1cclxuXHJcbi5saXN0LWdyb3VwOmhvdmVyIHtcclxuICBjb2xvcjpza3libHVlO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHdpZHRoOiAxMSU7XHJcbn1cclxuXHJcbi5zZWFyY2hkaXZ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "hh57":
    /*!**************************************************!*\
      !*** ./src/app/Interceptors/Auth.interceptor.ts ***!
      \**************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function hh57(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor() {
          _classCallCheck(this, AuthInterceptor);
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            request = request.clone({
              setHeaders: {
                Authorization: "Basic " + btoa("SpringRsocketBackendUserName:SpringRsocketBackendSecretUserPassword")
              }
            });
            return next.handle(request);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)();
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /***/
    },

    /***/
    "ipHg":
    /*!*********************************************!*\
      !*** ./src/app/RSocketUtil/RsocketUtils.ts ***!
      \*********************************************/

    /*! exports provided: routedPayload, basicPayload, extractPayloadData, singleSignal2RXJS, flowableSignal2RXJS, rxjs2Flowable */

    /***/
    function ipHg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routedPayload", function () {
        return routedPayload;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "basicPayload", function () {
        return basicPayload;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "extractPayloadData", function () {
        return extractPayloadData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "singleSignal2RXJS", function () {
        return singleSignal2RXJS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flowableSignal2RXJS", function () {
        return flowableSignal2RXJS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "rxjs2Flowable", function () {
        return rxjs2Flowable;
      });
      /* harmony import */


      var rsocket_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rsocket-core */
      "9Erv");
      /* harmony import */


      var rsocket_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rsocket_core__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      function routedPayload(route) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return {
          data: data,
          metadata: Object(rsocket_core__WEBPACK_IMPORTED_MODULE_0__["encodeCompositeMetadata"])([[rsocket_core__WEBPACK_IMPORTED_MODULE_0__["MESSAGE_RSOCKET_ROUTING"], Object(rsocket_core__WEBPACK_IMPORTED_MODULE_0__["encodeRoute"])(route)]])
        };
      }

      function basicPayload(data) {
        return {
          data: data,
          metadata: null
        };
      }

      var extractPayloadData = function extractPayloadData(p) {
        return p.data;
      };

      function singleSignal2RXJS(subscriber) {
        return {
          onComplete: function onComplete(n) {
            subscriber.next(n);
            subscriber.complete();
          },
          onError: function onError(e) {
            return subscriber.error(e);
          }
        };
      }

      function flowableSignal2RXJS(subscriber) {
        var requestN = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;
        return {
          onNext: function onNext(n) {
            return subscriber.next(n);
          },
          onComplete: function onComplete() {
            return subscriber.complete();
          },
          onError: function onError(e) {
            return subscriber.error(e);
          },
          onSubscribe: function onSubscribe(s) {
            return s.request(requestN);
          }
        };
      }

      function rxjs2Flowable(observabl) {
        return function (subscriber) {
          subscriber.onSubscribe({
            request: function request(n) {
              observabl.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(n)).subscribe(function (s) {
                return subscriber.onNext(basicPayload(s));
              });
            },
            cancel: function cancel() {
              return console.log("Cancelled Server Request");
            }
          });
        };
      }
      /***/

    },

    /***/
    "l1VO":
    /*!*****************************************************!*\
      !*** ./src/app/RSocketUtil/JSONBufferSerializer.ts ***!
      \*****************************************************/

    /*! exports provided: JSONBufferSerializer, JSONCompositeMetadataSerializer, JSONBufferSerializers */

    /***/
    function l1VO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JSONBufferSerializer", function () {
        return JSONBufferSerializer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JSONCompositeMetadataSerializer", function () {
        return JSONCompositeMetadataSerializer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JSONBufferSerializers", function () {
        return JSONBufferSerializers;
      });
      /* harmony import */


      var rsocket_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rsocket-core */
      "9Erv");
      /* harmony import */


      var rsocket_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rsocket_core__WEBPACK_IMPORTED_MODULE_0__);
      /**  Serializer that serializes data to Buffer and deserializes to JSON
       */


      var JSONBufferSerializer = {
        deserialize: rsocket_core__WEBPACK_IMPORTED_MODULE_0__["JsonSerializer"].deserialize,
        serialize: function serialize(data) {
          if (Buffer.isBuffer(data) || data == null) {
            return data;
          } else return Buffer.from(JSON.stringify(data));
        }
      };
      /**  Serializer that serializes metadata to Buffer and deserializes to JSON
       *  If incoming metadata contains multiple objects will deserialize and return an array of objects
       *  If incoming metadata doesn't return any JSON will return
       */

      var JSONCompositeMetadataSerializer = {
        deserialize: function deserialize(metadata) {
          var str;

          if (metadata == null) {
            return null;
          } else if (typeof metadata === "string") {
            str = metadata;
          } else if (Buffer.isBuffer(metadata)) {
            var buffer = metadata;
            str = buffer.toString("utf8");
          } else {
            var _buffer = Buffer.from(metadata);

            str = _buffer.toString("utf8");
          }

          if (str.includes("application/json")) {
            var objArray = [];
            var jsonStrArr = str.split("application/json");

            for (var i = 1; i < jsonStrArr.length; i++) {
              var unformattedJsonstr = jsonStrArr[i];
              var jsonstr = unformattedJsonstr.substring(unformattedJsonstr.indexOf("{"), unformattedJsonstr.lastIndexOf("}") + 1);
              objArray.push(JSON.parse(jsonstr));
            }

            if (objArray.length > 1) return objArray;else return objArray[0];
          } else return metadata;
        },
        serialize: function serialize(metadata) {
          if (Buffer.isBuffer(metadata) || metadata == null) {
            return metadata;
          } else return Buffer.from(JSON.stringify(metadata));
        }
      };
      var JSONBufferSerializers = {
        data: JSONBufferSerializer,
        metadata: JSONCompositeMetadataSerializer
      };
      /***/
    },

    /***/
    "m4Aj":
    /*!************************************************!*\
      !*** ./src/app/Services/manga-list-service.ts ***!
      \************************************************/

    /*! exports provided: MangaListService */

    /***/
    function m4Aj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MangaListService", function () {
        return MangaListService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rsocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./rsocket-service */
      "3gGP");

      var MangaListService = /*#__PURE__*/function () {
        function MangaListService(rsocketService) {
          var _this20 = this;

          _classCallCheck(this, MangaListService);

          this.IsLoaded = false; // subjects allow for multicasted observables

          this.mangaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.recentSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
          this.changeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); //multicast manga values to the rest of application

          rsocketService.mangaListSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["toArray"])()).subscribe(this.mangaSubject);
          rsocketService.latestSubject.subscribe(this.recentSubject);
          rsocketService.popularSubject.subscribe(function (p) {
            return _this20.popular = p;
          });
          this.recentSubject.subscribe(function (r) {
            return _this20.recent = r;
          });
          this.mangaSubject.subscribe(function (list) {
            _this20.mangaList = list;
            _this20.IsLoaded = true; //subscribe to rsocket change stream for real-time updates

            rsocketService.changeStream.subscribe(_this20.changeSubject);

            _this20.changeSubject.subscribe(function (m) {
              return _this20.changeStreamEventHandler(m);
            });
          });
        } //Handle Changed manga


        _createClass(MangaListService, [{
          key: "changeStreamEventHandler",
          value: function changeStreamEventHandler(manga) {
            console.log(manga.t + " Was Updated");
            this.updateArray(this.mangaList, manga);
            this.updateArray(this.popular, manga);
            this.updateArray(this.recent, manga);
          }
        }, {
          key: "updateArray",
          value: function updateArray(arr, manga) {
            var exists = !arr.find(function (m) {
              return m.realID === manga.realID;
            }); //if manga was just inserted into table

            if (exists && arr != this.popular) {
              arr.push(manga);
            } //else find manga in array and replace
            else {
                for (var i = 0; i < arr.length; i++) {
                  if (arr[i].realID === manga.realID) arr[i] = manga;
                }
              }
          }
        }]);

        return MangaListService;
      }();

      MangaListService.ɵfac = function MangaListService_Factory(t) {
        return new (t || MangaListService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_rsocket_service__WEBPACK_IMPORTED_MODULE_3__["RSocketService"]));
      };

      MangaListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: MangaListService,
        factory: MangaListService.ɵfac,
        providedIn: "root"
      });
      /***/
    },

    /***/
    "nhLo":
    /*!**************************************************************************!*\
      !*** ./src/app/Components/SubComponents/navbar/login/login.component.ts ***!
      \**************************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function nhLo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../Directives/ImageDirective */
      "nv7p");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent() {
          _classCallCheck(this, LoginComponent);
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)();
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 13,
        vars: 0,
        consts: [[1, "wrapper", "fadeInDown"], ["id", "formContent"], [1, "fadeIn", "first"], ["src", "https://www.b-cube.in/wp-content/uploads/2014/05/aditya-300x177.jpg", "id", "icon", "alt", "User Icon"], ["type", "text", "id", "login", "name", "login", "placeholder", "username", 1, "fadeIn", "second"], ["type", "text", "id", "password", "name", "login", "placeholder", "password", 1, "fadeIn", "third"], ["type", "submit", "value", "Log In", 1, "fadeIn", "fourth"], ["id", "formFooter"], ["href", "#", 1, "underlineHover"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Manga Paradise");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Go to the Site");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_1__["ImagePreloadDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
        styles: ["html[_ngcontent-%COMP%] {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px;\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n}\r\n\r\n#formContent[_ngcontent-%COMP%] {\r\n  border-radius: 10px 10px 10px 10px;\r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  position: relative;\r\n  padding: 0px;\r\n  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  text-align: center;\r\n}\r\n\r\n#formFooter[_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  border-radius: 0 0 10px 10px;\r\n}\r\n\r\n\r\n\r\nh2.inactive[_ngcontent-%COMP%] {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active[_ngcontent-%COMP%] {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n\r\n\r\ninput[type=button][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%], input[type=reset][_ngcontent-%COMP%]  {\r\n  background-color: #56baed;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 13px;\r\n  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:hover, input[type=submit][_ngcontent-%COMP%]:hover, input[type=reset][_ngcontent-%COMP%]:hover  {\r\n  background-color: #39ace7;\r\n}\r\n\r\ninput[type=button][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:active, input[type=reset][_ngcontent-%COMP%]:active  {\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%] {\r\n  background-color: #f6f6f6;\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.fadeInDown[_ngcontent-%COMP%] {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn[_ngcontent-%COMP%] {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n\r\n.fadeIn.first[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth[_ngcontent-%COMP%] {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n\r\n\r\n\r\n.underlineHover[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #56baed;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover[_ngcontent-%COMP%]:hover:after{\r\n  width: 100%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    color:#60a0ff;\r\n}\r\n\r\n\r\n\r\n*[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n#icon[_ngcontent-%COMP%] {\r\n  width:30%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFVBQVU7O0FBRVY7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFJQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBRUUsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsWUFBWTtFQUVaLHlDQUF5QztFQUN6QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixrQkFBa0I7RUFFbEIsNEJBQTRCO0FBQzlCOztBQUlBLFNBQVM7O0FBRVQ7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFJQSxtQkFBbUI7O0FBRW5CO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixlQUFlO0VBRWYsOENBQThDO0VBRTlDLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFLMUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBS0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBSUEsZUFBZTs7QUFFZix1Q0FBdUM7O0FBQ3ZDO0VBQ0Usa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGlDQUFpQztFQUNqQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFVixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFFVixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFVixtQ0FBbUM7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFFVixlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtFQUNFLFNBQVM7RUFDVCxrQ0FBa0M7RUFFbEMsMEJBQTBCOztFQUUxQixvQ0FBb0M7RUFFcEMsNEJBQTRCOztFQUU1Qiw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMkJBQTJCO0VBRTNCLG1CQUFtQjtBQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0VBQ0UsY0FBYztFQUNkLE9BQU87RUFDUCxhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogQkFTSUMgKi9cclxuXHJcbmh0bWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzkyYmFkZDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogNDBweCA4cHggMTBweCA4cHg7XHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcblxyXG5cclxuLyogU1RSVUNUVVJFICovXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4jZm9ybUNvbnRlbnQge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2Zvcm1Gb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTZiYWVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBtYXJnaW46IDVweCAyMHB4IDQwcHggMjBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06aG92ZXIsIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciwgaW5wdXRbdHlwZT1yZXNldF06aG92ZXIgIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlhY2U3O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZlLCBpbnB1dFt0eXBlPXN1Ym1pdF06YWN0aXZlLCBpbnB1dFt0eXBlPXJlc2V0XTphY3RpdmUgIHtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW46IDVweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEFOSU1BVElPTlMgKi9cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4tZG93biBBbmltYXRpb24gKi9cclxuLmZhZGVJbkRvd24ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTowOyB9IHRvIHsgb3BhY2l0eToxOyB9IH1cclxuXHJcbi5mYWRlSW4ge1xyXG4gIG9wYWNpdHk6MDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIC1tb3otYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcbiAgYW5pbWF0aW9uOmZhZGVJbiBlYXNlLWluIDE7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICAtbW96LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuXHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG59XHJcblxyXG4uZmFkZUluLmZpcnN0IHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uc2Vjb25kIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbn1cclxuXHJcbi5mYWRlSW4udGhpcmQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcclxufVxyXG5cclxuLmZhZGVJbi5mb3VydGgge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuLnVuZGVybGluZUhvdmVyOmFmdGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTEwcHg7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlciB7XHJcbiAgY29sb3I6ICMwZDBkMGQ7XHJcbn1cclxuXHJcbi51bmRlcmxpbmVIb3Zlcjpob3ZlcjphZnRlcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuaDF7XHJcbiAgICBjb2xvcjojNjBhMGZmO1xyXG59XHJcblxyXG4vKiBPVEhFUlMgKi9cclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuI2ljb24ge1xyXG4gIHdpZHRoOjMwJTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "nv7p":
    /*!**********************************************!*\
      !*** ./src/app/Directives/ImageDirective.ts ***!
      \**********************************************/

    /*! exports provided: ImagePreloadDirective */

    /***/
    function nv7p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePreloadDirective", function () {
        return ImagePreloadDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ImagePreloadDirective = /*#__PURE__*/function () {
        function ImagePreloadDirective() {
          _classCallCheck(this, ImagePreloadDirective);
        }

        _createClass(ImagePreloadDirective, [{
          key: "updateUrl",
          value: function updateUrl() {
            this.src = "../../../assets/noimage.jpeg";
          }
        }, {
          key: "load",
          value: function load() {
            this.className = "image-loaded";
          }
        }]);

        return ImagePreloadDirective;
      }();

      ImagePreloadDirective.ɵfac = function ImagePreloadDirective_Factory(t) {
        return new (t || ImagePreloadDirective)();
      };

      ImagePreloadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ImagePreloadDirective,
        selectors: [["img"]],
        hostVars: 3,
        hostBindings: function ImagePreloadDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImagePreloadDirective_error_HostBindingHandler() {
              return ctx.updateUrl();
            })("load", function ImagePreloadDirective_load_HostBindingHandler() {
              return ctx.load();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
          }
        },
        inputs: {
          src: "src"
        }
      });
      /***/
    },

    /***/
    "rQPh":
    /*!************************************************************!*\
      !*** ./src/app/page-not-found/page-not-found.component.ts ***!
      \************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function rQPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Directives/ImageDirective */
      "nv7p");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 1,
        vars: 0,
        consts: [["src", "../../assets/404.png", 1, "img-responsive", "img-fluid"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
          }
        },
        directives: [_Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_1__["ImagePreloadDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./Components/home/home.component */
      "0zBU");
      /* harmony import */


      var _Components_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Components/manga-list/manga-list.component */
      "fLN3");
      /* harmony import */


      var _Components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Components/manga-page/manga-page.component */
      "yBHn");
      /* harmony import */


      var _Components_reader_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./Components/reader/reader.component */
      "VyY4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
      }, {
        path: "manga-reader/:manga/:index",
        redirectTo: "/manga-reader/:manga/:index/1",
        pathMatch: "full"
      }, {
        path: "manga-reader/:manga",
        redirectTo: "/manga-page/:manga",
        pathMatch: "full"
      }, {
        path: "home",
        component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
      }, {
        path: "manga-list",
        component: _Components_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_2__["MangaListComponent"]
      }, {
        path: "manga-list/:genre",
        component: _Components_manga_list_manga_list_component__WEBPACK_IMPORTED_MODULE_2__["MangaListComponent"]
      }, {
        path: "manga-page/:realID",
        component: _Components_manga_page_manga_page_component__WEBPACK_IMPORTED_MODULE_3__["MangaPageComponent"]
      }, {
        path: "manga-reader/:manga/:index/:page",
        component: _Components_reader_reader_component__WEBPACK_IMPORTED_MODULE_4__["ReaderComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "yBHn":
    /*!***************************************************************!*\
      !*** ./src/app/Components/manga-page/manga-page.component.ts ***!
      \***************************************************************/

    /*! exports provided: MangaPageComponent */

    /***/
    function yBHn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MangaPageComponent", function () {
        return MangaPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/Services/manga.service */
      "VlvX");
      /* harmony import */


      var src_app_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Services/manga-list-service */
      "m4Aj");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-device-detector */
      "9YtQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../Directives/ImageDirective */
      "nv7p");
      /* harmony import */


      var _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../SubComponents/spinner/spinner.component */
      "Vxzm");

      function MangaPageComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wedge", true)("isMobile", ctx_r0.isMobile);
        }
      }

      function MangaPageComponent_p_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ongoing | ", ctx_r1.manga.info.chapters.length, " Chapters");
        }
      }

      function MangaPageComponent_p_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Completed | ", ctx_r2.manga.info.chapters.length, " Chapters");
        }
      }

      function MangaPageComponent_h4_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var genre_r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-list/", genre_r11, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r11);
        }
      }

      function MangaPageComponent_h3_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " CHAPTERS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MangaPageComponent_h3_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " CHAPTERS | JUMP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MangaPageComponent_button_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_button_45_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var item_r12 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.jumpToChapter(item_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r6.showChapter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.jumpDisplay(item_r12));
        }
      }

      function MangaPageComponent_div_47_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Chapter ", chapter_r15[0], "");
        }
      }

      function MangaPageComponent_div_47_div_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Chapter ", chapter_r15[2], "");
        }
      }

      function MangaPageComponent_div_47_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Chapter ", chapter_r15[0], ": ", chapter_r15[2], "");
        }
      }

      function MangaPageComponent_div_47_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_div_47_div_1_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r25.service.setPageIndex(undefined);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MangaPageComponent_div_47_div_1_span_2_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MangaPageComponent_div_47_div_1_span_3_Template, 2, 1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MangaPageComponent_div_47_div_1_span_4_Template, 2, 2, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "chapter ", chapter_r15[0], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/manga-reader/", ctx_r17.manga.realID, "/", chapter_r15[0], "/0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !chapter_r15[2] && chapter_r15[2] != chapter_r15[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chapter_r15[2] == chapter_r15[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", chapter_r15[2] && chapter_r15[2] != chapter_r15[0]);
        }
      }

      function MangaPageComponent_div_47_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function MangaPageComponent_div_47_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaPageComponent_div_47_div_2_div_1_Template, 1, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var chapter_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.checkIndex(chapter_r15[0]));
        }
      }

      function MangaPageComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaPageComponent_div_47_div_1_Template, 5, 6, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MangaPageComponent_div_47_div_2_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r16 = ctx.index;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.showChapter || i_r16 < 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.showChapter);
        }
      }

      function MangaPageComponent_button_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_button_49_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.showMore();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MangaPageComponent_button_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_button_50_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.showMore();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MangaPageComponent_div_57_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MangaPageComponent_div_57_img_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function MangaPageComponent_div_57_img_2_Template_img_load_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r34.info.imageLoaded = true;
          })("error", function MangaPageComponent_div_57_img_2_Template_img_error_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

            var item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            return item_r34.info.imageLoaded = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r34.im, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !item_r34.info.imageLoaded);
        }
      }

      function MangaPageComponent_div_57_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-page/", item_r34.realID, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34.t);
        }
      }

      function MangaPageComponent_div_57_p_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ongoing | ", item_r34.info.chapters.length, " Chapters");
        }
      }

      function MangaPageComponent_div_57_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Completed | ", item_r34.info.chapters.length, " Chapters");
        }
      }

      function MangaPageComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MangaPageComponent_div_57_div_1_Template, 2, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MangaPageComponent_div_57_img_2_Template, 1, 2, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MangaPageComponent_div_57_a_4_Template, 3, 2, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MangaPageComponent_div_57_p_6_Template, 4, 1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MangaPageComponent_div_57_p_7_Template, 4, 1, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r34 = ctx.$implicit;
          var i_r35 = ctx.index;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34 !== undefined && !item_r34.info.imageLoaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34 !== undefined && ctx_r10.manga.realID != item_r34.realID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34 !== undefined && ctx_r10.manga.realID != item_r34.realID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34 !== undefined && i_r35 < 5 && ctx_r10.manga.realID != item_r34.realID && item_r34.s == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r34 !== undefined && i_r35 < 5 && ctx_r10.manga.realID != item_r34.realID && item_r34.s == 2);
        }
      }

      var MangaPageComponent = /*#__PURE__*/function () {
        function MangaPageComponent(service, mangaListService, title, route, router, deviceService) {
          _classCallCheck(this, MangaPageComponent);

          this.service = service;
          this.mangaListService = mangaListService;
          this.title = title;
          this.route = route;
          this.router = router;
          this.list = [];
          this.relatedManga = [];
          this.genres = [];
          this.location = [];
          this.showChapter = false;
          this.showSpinner = true;
          window.scroll(0, 0);
          this.isMobile = deviceService.isMobile();
        }

        _createClass(MangaPageComponent, [{
          key: "fixString",
          value: function fixString() {
            this.manga.info.description = this.manga.info.description.split("&#039;").join("'");
            this.manga.info.description = this.manga.info.description.split("&quot;").join("'");
            this.manga.info.description = this.manga.info.description.split("&amp;").join("'");
            this.manga.info.description = this.manga.info.description.split("&nbsp;").join("'");
          }
        }, {
          key: "showMore",
          value: function showMore() {
            this.showChapter = !this.showChapter;
          }
        }, {
          key: "startReading",
          value: function startReading() {
            this.service.setPageIndex(undefined);
            this.router.navigate(["manga-reader/", this.manga.realID, this.manga.info.chapters[this.manga.info.chapters.length - 1][0], 1]);
          } // renders a list of 5 mangas that are related to the current genre

        }, {
          key: "relatedMangas",
          value: function relatedMangas() {
            var _this21 = this;

            var filter = function filter(m) {
              var i = 0;

              _this21.genres.forEach(function (g) {
                if (m.c.includes(g)) i++;
              });

              return i >= 2;
            };

            if (this.mangaListService.mangaList) {
              this.relatedManga = this.mangaListService.mangaList.slice().filter(function (manga) {
                return _this21.manga.realID !== manga.realID;
              });
              this.shuffle(this.relatedManga); // Until Our Numbers are up, this logic must be disabled

              this.relatedManga = this.relatedManga.filter(filter);
              if (this.relatedManga.length > 3) this.relatedManga.length = 3;
            } else {
              this.mangaListService.mangaSubject.subscribe(function (l) {
                _this21.relatedManga = l.slice().filter(function (manga) {
                  return _this21.manga.realID !== manga.realID;
                });

                _this21.shuffle(_this21.relatedManga); // Until Our Numbers are up, this logic must be disabled


                _this21.relatedManga = _this21.relatedManga.filter(filter);
                if (_this21.relatedManga.length > 3) _this21.relatedManga.length = 3;
              });
            }
          } // gets image from api

        }, {
          key: "getImage",
          value: function getImage(url) {
            if (url.startsWith("http")) {
              return url;
            } else {
              return "/image/" + url;
            }
          } // filter function that handles the manga

        }, {
          key: "filter",
          value: function filter(params) {
            // tslint:disable-next-line:radix
            this.list = this.list.filter(function (manga) {
              return manga.realID === parseInt(params.get("realID"));
            });

            if (this.list[0] == null || isNaN(parseInt(params.get("realID")))) {
              this.router.navigate(["**"]);
            }

            this.title.setTitle(this.list[0].t);
            this.manga = this.list[0];
            this.fixString();
            this.service.setManga(this.list[0]);
            this.genres = this.manga.c;
            this.manga.info.numOfChapters = this.manga.info.chapters.length;
            this.chapters = this.manga.info.chapters;
          } // Pushes every 50 element into an array

        }, {
          key: "checkIndex",
          value: function checkIndex(i) {
            i = parseFloat(i);

            if (i % 50 === 0 && i !== 0) {
              if (this.location.find(function (num) {
                return num === i;
              })) {
                return;
              } else {
                this.location.push(parseFloat(i));
              }
            }
          }
        }, {
          key: "jumpToChapter",
          value: function jumpToChapter(chapter) {
            if (chapter - 50 > 1) {
              var x = document.getElementById("chapter " + (chapter - 50));
              x.scrollIntoView();
            } else {
              var _x = document.getElementById("chapter " + this.chapters[this.chapters.length - 1][0]);

              _x.scrollIntoView();
            }
          }
        }, {
          key: "jumpDisplay",
          value: function jumpDisplay(item) {
            if (item - 50 > 1) {
              return item - 50;
            } else {
              return this.chapters[this.chapters.length - 1][0];
            }
          } // shuffles an array

        }, {
          key: "shuffle",
          value: function shuffle(array) {
            // tslint:disable-next-line:one-variable-per-declaration
            var currentIndex = array.length,
                temporaryValue,
                randomIndex; // While there remain elements to shuffle...

            while (0 !== currentIndex) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1; // And swap it with the current element.

              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
            }

            return array;
          }
        }, {
          key: "IsLatest",
          value: function IsLatest(params) {
            try {
              return params.get("realID") === this.mangaListService.recent.find(function (manga) {
                return manga.realID.toString() === params.get("realID");
              }).realID.toString();
            } catch (error) {
              return false;
            }
          }
        }, {
          key: "IsPopular",
          value: function IsPopular(params) {
            try {
              return params.get("realID") === this.mangaListService.popular.find(function (manga) {
                return manga.realID.toString() === params.get("realID");
              }).realID.toString();
            } catch (error) {
              return false;
            }
          }
        }, {
          key: "loadFromDatabase",
          value: function loadFromDatabase(params) {
            var _this22 = this;

            setTimeout(function () {
              if (_this22.list.length === 0) {
                if (_this22.service.Manga && _this22.service.Manga.realID === parseFloat(params.get("realID"))) {
                  _this22.list[0] = _this22.service.Manga;

                  _this22.filter(params);

                  _this22.relatedMangas();
                } else {
                  _this22.service.getManga(params.get("realID")).subscribe(function (manga) {
                    _this22.list[0] = manga;

                    _this22.service.setMangaFromPage(manga);

                    _this22.filter(params);

                    _this22.relatedMangas();
                  });
                }
              }
            }, 1000);
          }
        }, {
          key: "resetSpinner",
          value: function resetSpinner() {
            this.list.forEach(function (manga) {
              return manga.info.imageLoaded = false;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this23 = this;

            this.route.paramMap.subscribe(function (params) {
              _this23.resetSpinner();

              window.scroll(0, 0); // if manga is in manga service

              if (_this23.service.Manga && parseFloat(params.get("realID")) === _this23.service.Manga.realID) {
                _this23.list[0] = _this23.service.Manga;

                _this23.filter(params);

                _this23.relatedMangas(); // if any manga are in the api service

              } else if (_this23.mangaListService.mangaList) {
                _this23.list = _this23.mangaListService.mangaList.slice();

                _this23.filter(params);

                _this23.service.setMangaFromPage(_this23.list[0]);

                _this23.relatedMangas(); // if in popular manga

              } else if (!_this23.mangaListService.mangaList && _this23.IsPopular(params)) {
                _this23.list = _this23.mangaListService.popular.slice();

                _this23.filter(params);

                _this23.relatedMangas(); // if in latest manga

              } else if (!_this23.mangaListService.mangaList && _this23.IsLatest(params)) {
                _this23.list = _this23.mangaListService.recent.slice();

                _this23.filter(params);

                _this23.service.setMangaFromPage(_this23.list[0]);

                _this23.relatedMangas();
              } else {
                // this will load the manga's info straight from the database if the next functions fail
                _this23.loadFromDatabase(params); // this will run if it's part of the latest manga


                _this23.mangaListService.recentSubject.subscribe(function (latest) {
                  if (!_this23.list) {
                    _this23.list = latest.filter(function (item) {
                      return item.realID == parseInt(params.get("realID"));
                    });

                    if (_this23.list.length != 0) {
                      _this23.filter(params);

                      _this23.service.setMangaFromPage(_this23.list[0]);

                      _this23.relatedMangas();
                    }
                  }
                });

                _this23.mangaListService.mangaSubject.subscribe(function (manga) {
                  if (!_this23.list) {
                    _this23.list = manga.slice();

                    _this23.filter(params);

                    _this23.service.setMangaFromPage(_this23.list[0]);

                    _this23.relatedMangas();
                  }
                });
              }

              _this23.service.updateSubject.subscribe(function (m) {
                if (_this23.manga.realID === m.realID) {
                  _this23.manga = m;
                  _this23.list[0] = m;

                  _this23.filter(params);
                }
              });
            });
          }
        }]);

        return MangaPageComponent;
      }();

      MangaPageComponent.ɵfac = function MangaPageComponent_Factory(t) {
        return new (t || MangaPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_manga_service__WEBPACK_IMPORTED_MODULE_1__["MangaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_manga_list_service__WEBPACK_IMPORTED_MODULE_2__["MangaListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_5__["DeviceDetectorService"]));
      };

      MangaPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MangaPageComponent,
        selectors: [["app-manga-page"]],
        decls: 58,
        vars: 24,
        consts: [["class", "container justify-content-center", 4, "ngIf"], [1, "container", 3, "hidden"], [1, "container", "page"], [1, "row"], [1, "image-fluid", "rounded", "cover", 3, "src", "load"], [1, "col"], [1, "title"], ["routerLinkActive", "router-link-active", 3, "routerLink"], [4, "ngIf"], [1, "btn", "btn-success", "read", 3, "click"], [1, "fas", "fa-book-open"], [1, "title2"], [1, "row", "genre"], ["class", "genre", 4, "ngFor", "ngForOf"], [1, "description", 3, "innerHTML"], [1, "lastUpdate"], [1, "published"], [1, "container", "page2"], [1, "col-lg-6"], [1, "card", "mangaChapters"], [1, "card-header"], ["class", "btn btn-info jump", 3, "hidden", "click", 4, "ngFor", "ngForOf"], [1, "card-body"], ["class", "card-title", 4, "ngFor", "ngForOf"], ["class", "btn btn-success showMore", 3, "click", 4, "ngIf"], [1, "card", "related"], ["src", "../../assets/imageedit_11_3620823692.png", 1, "logo"], ["class", "card-body text-center align-middle", 4, "ngFor", "ngForOf"], [1, "container", "justify-content-center"], [3, "wedge", "isMobile"], [1, "genre"], [3, "routerLink"], [1, "badge", "badge-primary"], [1, "fas", "fa-book"], [1, "btn", "btn-info", "jump", 3, "hidden", "click"], [1, "card-title"], [3, "id", 4, "ngIf"], [3, "id"], ["routerLinkActive", "router-link-active", 3, "routerLink", "click"], [1, "btn", "btn-success", "showMore", 3, "click"], [1, "fas", "fa-angle-down"], [1, "fas", "fa-angle-up"], [1, "card-body", "text-center", "align-middle"], ["class", "relatedImg card-img-top", "alt", "Card image cap", 3, "hidden", "src", "load", "error", 4, "ngIf"], ["class", "card-title", "routerLinkActive", "router-link-active", 3, "routerLink", 4, "ngIf"], ["alt", "Card image cap", 1, "relatedImg", "card-img-top", 3, "hidden", "src", "load", "error"], ["routerLinkActive", "router-link-active", 1, "card-title", 3, "routerLink"]],
        template: function MangaPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MangaPageComponent_div_0_Template, 2, 2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function MangaPageComponent_Template_img_load_4_listener() {
              return ctx.showSpinner = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Author: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Artist: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MangaPageComponent_p_16_Template, 4, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MangaPageComponent_p_17_Template, 4, 1, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MangaPageComponent_Template_button_click_18_listener() {
              return ctx.startReading();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Start Reading");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MangaPageComponent_h4_27_Template, 4, 2, "h4", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Other Facts");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MangaPageComponent_h3_43_Template, 3, 0, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, MangaPageComponent_h3_44_Template, 2, 0, "h3", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MangaPageComponent_button_45_Template, 2, 2, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MangaPageComponent_div_47_Template, 3, 2, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MangaPageComponent_button_49_Template, 2, 0, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MangaPageComponent_button_50_Template, 2, 0, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " SIMILAR MANGA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, MangaPageComponent_div_57_Template, 8, 5, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSpinner);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.showSpinner);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.manga.im, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.manga.t, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-list/", ctx.manga.info.author, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.manga.info.author);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/manga-list/", ctx.manga.info.artist, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.manga.info.artist);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manga.s == 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.manga.s == 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.manga.info.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last Update: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 21, ctx.manga.ld * 1000, "MM-dd-yyyy"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Published year: ", ctx.manga.info.released, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showChapter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showChapter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.location);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chapters);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showChapter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showChapter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relatedManga);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _Directives_ImageDirective__WEBPACK_IMPORTED_MODULE_7__["ImagePreloadDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _SubComponents_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [".page[_ngcontent-%COMP%] {\r\n  margin: 2%;\r\n  background-color: white;\r\n  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n.cover[_ngcontent-%COMP%] {\r\n  max-width: 40%;\r\n}\r\n@media only screen and (max-width: 562px) {\r\n  .cover[_ngcontent-%COMP%] {\r\n    max-width: 100%; \r\n    -o-object-fit: scale-down; \r\n       object-fit: scale-down;\r\n  }\r\n}\r\n.page2[_ngcontent-%COMP%] {\r\n  margin: 2%;\r\n}\r\n.genre[_ngcontent-%COMP%] {\r\n  margin: 1%;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  margin-top: 2%;\r\n}\r\n.title2[_ngcontent-%COMP%] {\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  margin: 1%;\r\n}\r\n.description[_ngcontent-%COMP%] {\r\n  margin: 1%;\r\n}\r\n.jump[_ngcontent-%COMP%] {\r\n  border-radius: 0%;\r\n  margin: 0.5%;\r\n}\r\n.lastUpdate[_ngcontent-%COMP%] {\r\n  margin: 1%;\r\n}\r\n.published[_ngcontent-%COMP%] {\r\n  margin: 1%;\r\n}\r\n.related[_ngcontent-%COMP%] {\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n.read[_ngcontent-%COMP%] {\r\n  margin-bottom: 2%;\r\n}\r\n.relatedImg[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  height: auto;\r\n}\r\n.mangaChapters[_ngcontent-%COMP%] {\r\n  margin-top: 3%;\r\n  margin-bottom: 3%;\r\n  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n.showMore[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.logo[_ngcontent-%COMP%] {\r\n  width: 9%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmdhLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVix1QkFBdUI7RUFHdkIsK0NBQStDO0FBQ2pEO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZix5QkFBc0I7T0FBdEIsc0JBQXNCO0VBQ3hCO0FBQ0Y7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSw0REFBNEQ7RUFDNUQsY0FBYztBQUNoQjtBQUVBO0VBQ0UsNERBQTREO0VBQzVELFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUdqQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUdqQiwrQ0FBK0M7QUFDakQ7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6Im1hbmdhLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlIHtcclxuICBtYXJnaW46IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxufVxyXG4uY292ZXIge1xyXG4gIG1heC13aWR0aDogNDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MnB4KSB7XHJcbiAgLmNvdmVyIHtcclxuICAgIG1heC13aWR0aDogMTAwJTsgXHJcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UyIHtcclxuICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uZ2VucmUge1xyXG4gIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbi50aXRsZTIge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNlZ29lIFVJXCIsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLmp1bXAge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAlO1xyXG4gIG1hcmdpbjogMC41JTtcclxufVxyXG5cclxuLmxhc3RVcGRhdGUge1xyXG4gIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi5wdWJsaXNoZWQge1xyXG4gIG1hcmdpbjogMSU7XHJcbn1cclxuXHJcbi5yZWxhdGVkIHtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggOXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA5cHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbn1cclxuXHJcbi5yZWFkIHtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnJlbGF0ZWRJbWcge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubWFuZ2FDaGFwdGVycyB7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDlweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggOXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggOXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG59XHJcblxyXG4uc2hvd01vcmUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDklO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map