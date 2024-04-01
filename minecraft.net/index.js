sessionStorage.getItem("experimentStorage") ||
  sessionStorage.setItem("experimentStorage", "{}"),
  (window.experimentStorage = window.experimentStorage || {}),
  (window.experimentStorage.registeredExtensions =
    window.experimentStorage.registeredExtensions || []),
  (window.experimentStorage.expRequire =
    window.experimentStorage.expRequire ||
    function (e, t, a, o) {
      var i = 0,
        n = 0,
        r = function (r, l) {
          var d = {
            function: r[0],
            callback: r[1],
            failback: r[2],
            interval: r[3] || 50,
            retry: r[4] || 25,
            attempts: r[5] || 0,
          };
          "function" != typeof window[d.function]
            ? d.retry > d.attempts
              ? (d.attempts++, s(d, l))
              : (n++,
                "function" == typeof d.failback
                  ? d.failback()
                  : o && console.log(d.function + " failed to load"))
            : (i++,
              "function" == typeof d.callback
                ? d.callback()
                : o && console.log(d.function + " successfully loaded")),
            i === e.length && "function" == typeof t
              ? t()
              : i + n === e.length && "function" == typeof a && a();
        },
        s = function (t, a) {
          (e[a] = [
            t.function,
            t.callback,
            t.failback,
            t.interval,
            t.retry,
            t.attempts,
          ]),
            setTimeout(r, t.interval, e[a], a);
        };
      e.forEach(r);
    }),
  (window.experimentStorage.expDefine =
    window.experimentStorage.expDefine ||
    function (e, t) {
      window.experimentStorage.expRequire([["jQuery"]], function () {
        (window[e] = t), window[e]();
      });
    }),
  (window.staticExperimentConfig = function (e) {
    var t = e || null;
    return {
      lookup: function (e) {
        if (-1 !== window.experimentStorage.registeredExtensions.indexOf(e))
          return window.experimentStorage["exp_" + e];
      },
      register: function (e) {
        -1 === window.experimentStorage.registeredExtensions.indexOf(e)
          ? (window.experimentStorage.registeredExtensions.push(e),
            (window.experimentStorage["exp_" + e] = t))
          : console.log("Experiment: Duplicate utilities defined");
      },
      extend: function (e) {
        -1 !== window.experimentStorage.registeredExtensions.indexOf(e) && t
          ? window.jQuery &&
            $.extend(!0, window.experimentStorage["exp_" + e], t)
          : console.log(
              "Experiment: Cannot extend utility object. Base object not found or extension not passed.",
            );
      },
    };
  }),
  window.experimentStorage.expDefine("experimentBase_1205774", function (e) {
    var t = "1205774",
      a = JSON.parse(sessionStorage.getItem("experimentStorage")),
      o = (a[t] = a[t] || {});
    (a[t] = o),
      (window.experimentStorage["exp_" + t] = {
        storage: o,
      }),
      sessionStorage.setItem("experimentStorage", JSON.stringify(a)),
      window
        .staticExperimentConfig({
          get: function (e) {
            return "utils" === e
              ? window.staticExperimentConfig().lookup(t).utility
              : "fn" === e
                ? window.staticExperimentConfig().lookup(t).fn
                : void 0;
          },
          data: {},
          utility: {
            object: {
              value: function (e, t) {
                return t.split(".").reduce(function (e, t) {
                  var a = t.split(/\[["']?(\d*\w+)["']?\]*/gi);
                  if (a.length > 1) {
                    var o = e;
                    return (
                      a.forEach(function (e) {
                        e.length && o && (o = o[e]);
                      }),
                      o
                    );
                  }
                  return e && "undefined" !== e[t] ? e[t] : void 0;
                }, e);
              },
            },
            url: {
              locale: function () {
                var e = window.location.pathname
                    .toLowerCase()
                    .match(/^\/(..-..)\/?/i),
                  t = null;
                return (
                  e && (t = e[1].split("-")),
                  {
                    lang: t[0],
                    region: t[1],
                    construct: t[0] + "-" + t[1],
                  }
                );
              },
            },
            wait: {
              forElement: function (e, t) {
                return new Promise((a, o) => {
                  let i = e,
                    n = 0,
                    r = setInterval(function () {
                      n <= 25
                        ? document.querySelectorAll(i).length
                          ? (clearInterval(r), a(t || !0))
                          : n++
                        : (clearInterval(r), o(!1));
                    }, 100);
                });
              },
              until: function (e, t) {
                return new Promise((a, o) => {
                  let i,
                    n = 0,
                    r = setInterval(function () {
                      try {
                        i = e();
                      } catch (e) {
                        i = !1;
                      }
                      n < 50 && !1 === i
                        ? n++
                        : (clearInterval(r), i ? a(t || !0) : o(!1));
                    }, 100);
                });
              },
            },
          },
        })
        .register(t),
      window
        .staticExperimentConfig({
          utility: {
            sessionStorage: {
              get: function (e) {
                return e ? o[e] : o;
              },
              set: function (e, i) {
                (o[e] = i),
                  (a[t] = o),
                  (window.experimentStorage["exp_" + t].storage = o),
                  sessionStorage.setItem(
                    "experimentStorage",
                    JSON.stringify(a),
                  );
              },
            },
            expStore: {
              get: function (e) {
                var a = window.experimentStorage["exp_" + t].data;
                return e ? a[e] : a;
              },
              set: function (e, a) {
                var o = window.experimentStorage["exp_" + t].data;
                o[e] ? $.extend(!0, o[e], a) : (o[e] = a);
              },
            },
          },
        })
        .extend(t),
      window
        .staticExperimentConfig({
          experimentBase: function (e) {
            let a = e && e.classList ? e.classList : "";
            !e || !e.variationId || parseFloat(e.variationId);
            let o = window.staticExperimentConfig().lookup(t),
              i = o ? o.get("utils") : {};
            !o || o.fn;
            let n = e ? e.localizedContent : {},
              r = document.getElementsByTagName("html")[0];
            (r.className += (r.className ? " " : "") + a),
              (n = $.extend(!0, n, {})),
              window
                .staticExperimentConfig({
                  utility: {
                    localization: {
                      getLocString: function (e) {
                        var t = i.url.locale(),
                          a = t.lang + "-" + t.region,
                          o = n,
                          r = o && o.config ? o.config : null,
                          s = null,
                          l = null,
                          d = function (t) {
                            return e && e.length
                              ? e.replace("{0}", t && t.locale ? t.locale : a)
                              : "";
                          };
                        if (
                          ((s = d()),
                          !(l = i.object.value(o, s)) &&
                            r &&
                            r.fallback &&
                            ((s = d({
                              locale: r.fallback.locale
                                ? r.fallback.locale
                                : "en-us",
                              productId: r.fallback.productId
                                ? r.fallback.productId
                                : null,
                            })),
                            (l = i.object.value(o, s))),
                          r && r.replacements)
                        )
                          var p = r.replacements,
                            c = null;
                        return (
                          "object" == typeof l && r && r.replacements
                            ? ((l.replacementHelper = function (e) {
                                var t = n.replacementConfig;
                                return (
                                  null != t &&
                                    "object" == typeof p &&
                                    void 0 !== e &&
                                    Object.keys(t).forEach(function (a) {
                                      (c = new RegExp(
                                        a
                                          .replace("{", "\\{")
                                          .replace("}", "\\}"),
                                        "g",
                                      )),
                                        (e = e.replace(c, t[a]));
                                    }),
                                  e
                                );
                              }),
                              (n.replacementConfig = p),
                              (l.replacementConfig = p))
                            : "string" == typeof l &&
                              r &&
                              r.replacements &&
                              Object.keys(p).forEach(function (e) {
                                (c = new RegExp(
                                  e.replace("{", "\\{").replace("}", "\\}"),
                                  "g",
                                )),
                                  (l = l.replace(c, p[e]));
                              }),
                          l || ""
                        );
                      },
                    },
                  },
                })
                .extend(t);
            var s = i.localization.getLocString("{0}");
            s.replacementHelper && s.replacementHelper,
              (window.taterAnimationToggle = class {
                #e = {
                  name: "MC_Animation",
                  el: null,
                  text: null,
                  wrapper: null,
                  offsetWidth: null,
                  offsetHeight: null,
                  buttonExpanded: !0,
                  closeTiming: 5e3,
                  focusOnButton: !1,
                  pubSub: {},
                  animationToggle: {
                    class: "MC_AprilFools__cancel",
                  },
                };
                #t = {};
                #a = {
                  animationPaused: !1,
                };
                #o = {
                  animationToggle: {},
                  parentElm: document.body,
                };
                constructor(e) {
                  (this.#e.pubSub = e.pubSub),
                    this.#i({
                      msg: "init",
                    }),
                    (this.#e.el = e.el);
                  try {
                    this.#t = JSON.parse(
                      this.#e.el.getAttribute("data-mc-config"),
                    );
                  } catch (e) {
                    this.#i({
                      err: e,
                    });
                  }
                  (this.#o.animationToggle.el = this.#n(
                    "action__aprilFoolsAnimationToggle",
                  )),
                    (this.#o.animationToggle.wrapper = this.#n(
                      "action__aprilFoolsAnimationToggle_Wrapper",
                    )),
                    (this.#o.animationToggle.text = this.#n(
                      "action__aprilFoolsAnimationToggle_Text",
                    )),
                    (this.#o.animationToggle.notification = this.#n(
                      "action__aprilFoolsAnimationToggle_Notification",
                    )),
                    (this.#e.offsetWidth =
                      this.#o.animationToggle.text.offsetWidth + 5),
                    (this.#e.offsetHeight =
                      this.#o.animationToggle.text.offsetHeight),
                    this.#o.animationToggle.wrapper.setAttribute(
                      "aria-hidden",
                      "false",
                    ),
                    this.#r(),
                    this.#s(),
                    this.#l(),
                    this.#d(),
                    this.#p();
                }
                #r() {
                  this.#o.animationToggle.el.setAttribute(
                    "data-paused",
                    "false",
                  ),
                    this.#o.animationToggle.el.setAttribute(
                      "aria-controls",
                      this.#e.name + "__aprilFoolsAnimationToggle_notification",
                    ),
                    this.#o.animationToggle.notification.setAttribute(
                      "id",
                      this.#e.name + "__aprilFoolsAnimationToggle_notification",
                    );
                }
                #d(e) {
                  let t = null;
                  ("mouseleave" !== e?.type && "focusout" !== e?.type) ||
                    document.activeElement.classList.contains(
                      this.#e.name + "_action__aprilFoolsAnimationToggle",
                    ) ||
                    (this.#e.focusOnButton = !1),
                    !0 === this.#e.buttonExpanded
                      ? (t = setTimeout(() => {
                          !1 === this.#e.focusOnButton &&
                            ((this.#o.animationToggle.wrapper.style.width =
                              "0px"),
                            this.#o.animationToggle.wrapper.setAttribute(
                              "aria-hidden",
                              "true",
                            ));
                        }, this.#e.closeTiming))
                      : "function" == typeof t && clearTimeout(t);
                }
                #c(e) {
                  ("mouseenter" !== e?.type && "focus" !== e?.type) ||
                    (this.#e.focusOnButton = !0),
                    !1 === this.#e.buttonExpanded &&
                      "0px" === this.#o.animationToggle.wrapper.style.width &&
                      ((this.#o.animationToggle.wrapper.style.width =
                        this.#e.offsetWidth + "px"),
                      this.#o.animationToggle.wrapper.setAttribute(
                        "aria-hidden",
                        "false",
                      ),
                      this.#d());
                }
                #s() {
                  (this.#o.animationToggle.wrapper.style.width =
                    this.#e.offsetWidth + "px"),
                    (this.#o.animationToggle.wrapper.style.height =
                      this.#e.offsetHeight + "px"),
                    (this.#o.animationToggle.text.style.width =
                      this.#e.offsetWidth + "px"),
                    this.#o.animationToggle.el.addEventListener(
                      "mouseenter",
                      (e) => {
                        this.#c(e);
                      },
                    ),
                    this.#o.animationToggle.el.addEventListener(
                      "mouseleave",
                      (e) => {
                        this.#d(e);
                      },
                    ),
                    this.#o.animationToggle.el.addEventListener(
                      "focus",
                      (e) => {
                        this.#c(e);
                      },
                    ),
                    this.#o.animationToggle.el.addEventListener(
                      "focusout",
                      (e) => {
                        this.#d(e);
                      },
                    ),
                    this.#o.animationToggle.el.addEventListener(
                      "click",
                      (e) => {
                        this.#u();
                      },
                    ),
                    this.#o.animationToggle.wrapper.addEventListener(
                      "transitionend",
                      () => {
                        (this.#e.buttonExpanded =
                          "0px" !==
                          this.#o.animationToggle.wrapper.style.width),
                          !0 === this.#e.focusOnButton &&
                          !1 === this.#e.buttonExpanded
                            ? this.#c()
                            : !0 === this.#e.buttonExpanded && this.#d();
                      },
                    );
                }
                #l() {
                  this.#e.el.insertAdjacentHTML(
                    "beforebegin",
                    '<div class="' +
                      this.#e.name +
                      '__aprilFoolsAnimationToggle_placeholder"></div>',
                  ),
                    window.addEventListener("scroll", () => {
                      this.#m();
                    });
                }
                #m() {
                  let e = this.#e.el.previousElementSibling,
                    t = e?.getBoundingClientRect();
                  t.top < 0
                    ? this.#o.animationToggle.el.classList.add(
                        this.#e.name + "__aprilFoolsAnimationToggle_sticky",
                      )
                    : this.#o.animationToggle.el.classList.remove(
                        this.#e.name + "__aprilFoolsAnimationToggle_sticky",
                      );
                }
                #u() {
                  !0 === this.#a.animationPaused
                    ? ((this.#a.animationPaused = !1),
                      (this.#o.animationToggle.text.innerText =
                        this.#t.text.animationToggle.cancel),
                      this.#o.animationToggle.el.setAttribute(
                        "data-paused",
                        "false",
                      ),
                      (this.#o.animationToggle.notification.innerText =
                        this.#t.text.screenReader.enabled),
                      this.#o.parentElm?.classList.remove(
                        this.#e.animationToggle.class,
                      ))
                    : ((this.#a.animationPaused = !0),
                      (this.#o.animationToggle.text.innerText =
                        this.#t.text.animationToggle.enable),
                      this.#o.animationToggle.el.setAttribute(
                        "data-paused",
                        "true",
                      ),
                      (this.#o.animationToggle.notification.innerText =
                        this.#t.text.screenReader.disabled),
                      this.#o.parentElm?.classList.add(
                        this.#e.animationToggle.class,
                      )),
                    document.dispatchEvent(
                      new CustomEvent("mcAprilFools", {
                        detail: {
                          status: this.#a.animationPaused,
                        },
                      }),
                    ),
                    this.#i({
                      state: this.#a,
                    });
                }
                #p() {
                  new ResizeObserver(() => {
                    (this.#e.offsetHeight =
                      this.#o.animationToggle.text.offsetHeight),
                      (this.#o.animationToggle.wrapper.style.height =
                        this.#e.offsetHeight + "px");
                  }).observe(this.#o.animationToggle.text);
                }
                #i(e) {
                  mc.pubSub.publish(this.#e.pubSub, e);
                }
                #n(e, t) {
                  return (t || this.#e.el).querySelector(
                    "." + this.#e.name + "_" + e,
                  );
                }
              });
            let l = null,
              d = () => {
                const e = {
                  x: 0,
                  y: 0,
                  prevX: null,
                  prevY: null,
                };
                let t = 0,
                  a = !1;
                !0 !== mc.tests.prefersReducedMotion() &&
                  (document.addEventListener("mousemove", (t) => {
                    null === e.prevX &&
                      ((e.prevX = t.clientX), (e.prevY = t.clientY)),
                      Math.abs(t.clientX - e.prevX) < 20 &&
                      Math.abs(t.clientY - e.prevY) < 20
                        ? (a = !1)
                        : ((a = !0), (e.x = t.clientX), (e.y = t.clientY));
                  }),
                  document.addEventListener("animationend", (e) => {
                    e.target.classList.contains("MC_Animations_PoisonSwirl") &&
                      (e.target.remove(), (t -= 1));
                  }),
                  mc.utils.throttledEvent(
                    "mousemove",
                    () => {
                      a = !1;
                    },
                    null,
                    150,
                  ),
                  (l = setInterval(() => {
                    t < 5 &&
                      !0 === a &&
                      (() => {
                        const a = document.createElement("div");
                        (a.className =
                          "MC_Animations_PoisonSwirl MC_Animations_Layer"),
                          a.style.setProperty("--mouse-x", e.x + "px"),
                          a.style.setProperty("--mouse-y", e.y - 75 + "px"),
                          a.style.setProperty(
                            "--mouse-y-offset",
                            e.y - 150 + "px",
                          ),
                          (a.style.left = e.x + "px"),
                          (a.style.top = e.y - 75 + "px"),
                          document.body.appendChild(a),
                          (t += 1);
                      })();
                  }, 250)));
              },
              p = null,
              c = null,
              u = null,
              m = null,
              g = !1,
              f = null,
              b = null,
              h = !1,
              x = () => {
                (u = 20), (m = 0), (g = !1), (f = 1e4), (b = null), (h = !1);
              },
              v = (e) => {
                let t = document.querySelector(e.path),
                  a = [];
                for (let t = 0; t < e.taters; t++)
                  a.push(
                    [
                      '<button style="' +
                        e.position[t] +
                        '" title="' +
                        s.potato.title +
                        '" aria-label="' +
                        s.potato.title +
                        '" aria-controls="MCExp_AprilFools_Healthbar" class="MCExp_AprilFools_PoisonPotato" data-aem-contentname="poisonPotato"></button>',
                    ].join("\n"),
                  );
                t?.insertAdjacentHTML("afterbegin", a.join("\n"));
              },
              _ = () => {
                "home-page" ===
                  document
                    .querySelector('meta[name="template"]')
                    .getAttribute("content") &&
                  (v({
                    taters: 2,
                    path: ".MC_ambientHeroA .MC_Carousel_track_slide:nth-child(1)",
                    position: ["top:100px;left:10px;", "top:150px;right:10px;"],
                  }),
                  v({
                    taters: 2,
                    path: ".MC_ambientHeroA .MC_Carousel_track_slide:nth-child(1) .MC_Carousel_track_slide_text_fade",
                    position: [
                      "bottom:5px;left:3px;width:32px;height:32px;",
                      "top:7px;right:6px;width:32px;height:32px;",
                    ],
                  }),
                  v({
                    taters: 1,
                    path: ".MC_ambientHeroA .MC_Carousel_track_slide:nth-child(3)",
                    position: ["top:200px;right:10px;"],
                  }),
                  v({
                    taters: 2,
                    path: ".MC_CardE",
                    position: [
                      "top:95px;left:10px;width:32px;height:32px;",
                      "top:10px;right:10px;",
                    ],
                  }),
                  v({
                    taters: 1,
                    path: '[data-mc-ref="mc_banner_textBannerB"]',
                    position: ["top:10px;left:10px;"],
                  }),
                  v({
                    taters: 2,
                    path: '[data-mc-ref="mc_grids_mediaBlockD"]',
                    position: [
                      "bottom:-40px;left:10px;",
                      "top:10px;right:10px;width:64px;height:64px;",
                    ],
                  }),
                  v({
                    taters: 2,
                    path: '[data-mc-ref="mc_grids_imageGridA"]',
                    position: ["top:10px;right:10px;", "bottom:0;left:10px;"],
                  }),
                  v({
                    taters: 1,
                    path: ".MC_CarouselH",
                    position: ["bottom:0px;right:10px;"],
                  })),
                  document
                    .querySelectorAll(".MCExp_AprilFools_PoisonPotato")
                    .forEach((e) => {
                      e.addEventListener("click", (e) => {
                        "true" !== e.target.getAttribute("aria-disabled") &&
                          ((m += 1),
                          e.target.classList.add(
                            "MCExp_AprilFools_PoisonPotato_Shake",
                          ),
                          e.target.setAttribute("aria-disabled", !0),
                          g || ((g = !0), w()),
                          A(!0));
                      }),
                        e.addEventListener("animationend", (e) => {
                          e.target.classList.add(
                            "MCExp_AprilFools_PoisonPotato_Fade",
                          );
                        }),
                        e.addEventListener("transitionend", (e) => {
                          e.target.style.display = "none";
                        });
                    }),
                  document.addEventListener("mcModalToggle", (e) => {
                    !1 === e.detail.show && !0 === h && T();
                  }),
                  document.addEventListener("mcAprilFools", (e) => {
                    mc.utils.component
                      .storage({
                        namespace: "aprilFools",
                        key: "disableExperience",
                        value: e.detail.status ? "true" : "false",
                      })
                      .set(),
                      !1 === e.detail.status
                        ? T()
                        : !0 === e.detail.status &&
                          (clearInterval(l), (l = null));
                  });
              },
              w = () => {
                let e = 0;
                m -= 1;
                let t = setInterval(() => {
                  (e += 1),
                    y(),
                    e >= 4 && (clearInterval(t), m > 0 ? w() : (g = !1));
                }, 500);
              },
              y = () => {
                u = u > 0 ? u - 1 : 0;
                let e = Math.floor(u / 2),
                  t = !1,
                  a = null;
                p.setAttribute("aria-valuenow", e);
                for (let o = 1; o <= 10; o++)
                  (a = p.querySelector(
                    ".MCExp_AprilFools_HealthBar_Heart:nth-child(" + o + ")",
                  )),
                    !t && o > e && u / 2 > e
                      ? ((t = !0),
                        a.classList.add("MCExp_AprilFools_HealthBar_HeartHalf"))
                      : o > e &&
                        (a.classList.remove(
                          "MCExp_AprilFools_HealthBar_HeartHalf",
                        ),
                        a.classList.add(
                          "MCExp_AprilFools_HealthBar_HeartEmpty",
                        ));
                if (0 === u)
                  return (
                    k(!1), (h = !0), void mc.utils.modal().show("AprilFools")
                  );
              },
              A = (e) => {
                !0 === e
                  ? (p.classList.add("MCExp_AprilFools_HealthBar_Poisoned"),
                    null === l && d())
                  : (p.classList.remove("MCExp_AprilFools_HealthBar_Poisoned"),
                    clearInterval(l),
                    (l = null));
              },
              k = (e) => {
                !0 === e
                  ? (b = setInterval(() => {
                      (f = f > 0 ? f - 50 : 0), 0 === f && clearInterval(b);
                    }, 500))
                  : (clearInterval(b),
                    !1 === h &&
                      (c.querySelector(
                        ".MC_AprilFools_Modal_Score_Value",
                      ).innerHTML = f));
              },
              T = () => {
                clearInterval(l),
                  (l = null),
                  A(!1),
                  (() => {
                    let e = null,
                      t = document.querySelectorAll(
                        ".MCExp_AprilFools_PoisonPotato",
                      );
                    for (let t = 1; t <= 10; t++)
                      (e = p.querySelector(
                        ".MCExp_AprilFools_HealthBar_Heart:nth-child(" +
                          t +
                          ")",
                      )),
                        e.classList.remove(
                          "MCExp_AprilFools_HealthBar_HeartHalf",
                        ),
                        e.classList.remove(
                          "MCExp_AprilFools_HealthBar_HeartEmpty",
                        );
                    t.forEach((e) => {
                      e.remove();
                    });
                  })(),
                  x(),
                  _(),
                  k(!0);
              },
              S = () => {
                document
                  .querySelector("#main-content")
                  .insertAdjacentHTML(
                    "afterBegin",
                    [
                      '<section id="taterAnimationToggle_0">',
                      '<div data-mc-mount="taterAnimationToggle" data-mc-config="{&#34;options&#34;:{&#34;collapseTiming&#34;:&#34;5000&#34;},&#34;text&#34;:{&#34;animationToggle&#34;:{&#34;enable&#34;:&#34;' +
                        s.toggle.ontext +
                        "&#34;,&#34;cancel&#34;:&#34;" +
                        s.toggle.ontext +
                        "&#34;,&#34;disabled&#34;:&#34;" +
                        s.toggle.osdisabled +
                        "&#34;},&#34;screenReader&#34;:{&#34;enabled&#34;:&#34;" +
                        s.toggle.onscreenreader +
                        "&#34;,&#34;disabled&#34;:&#34;" +
                        s.toggle.onscreenreader +
                        '&#34;}}}">',
                      '<button type="button" class="MC_Animation_action__aprilFoolsAnimationToggle" data-aem-contentname="aprilFools-toggle">',
                      '<div class="MC_Animation_action__aprilFoolsAnimationToggle_Wrapper">',
                      '<div class="MC_Animation_action__aprilFoolsAnimationToggle_Text">' +
                        s.toggle.offtext +
                        "</div>",
                      "</div>",
                      "</button>",
                      '<div class="MC_Animation_action__aprilFoolsAnimationToggle_Notification mc-sr-only" aria-live="polite"></div>',
                      "</div>",
                      "</section>",
                    ].join("\n"),
                  ),
                  setTimeout(() => {
                    (() => {
                      let e = document.querySelector(
                          "#taterAnimationToggle_0 [data-mc-mount]",
                        ),
                        t = {
                          el: e,
                          ref: e.getAttribute("data-mc-mount"),
                          logic: e.getAttribute("data-mc-logic"),
                          pubSub: void 0,
                          parent: void 0,
                          refConfig: {
                            el: void 0,
                            pubSub: void 0,
                            parent: void 0,
                          },
                        };
                      if ("function" == typeof window[t.ref]) {
                        t.parent &&
                          t.parent !== t.el &&
                          (t.refConfig.parent =
                            mc.utils.JSON_HTML_Attribute_Converter(
                              t.parent.getAttribute("data-mc-component-pubsub"),
                            ));
                        try {
                          let e = JSON.parse(
                            t.el.getAttribute("data-mc-config"),
                          );
                          e.state && Object.assign(mc.utils.state, e.state);
                        } catch (e) {}
                        (t.pubSub = mc.pubSub.create(t)),
                          t.el.setAttribute(
                            "data-mc-component-pubsub",
                            mc.utils.JSON_HTML_Attribute_Converter(t.pubSub),
                          ),
                          new window[t.ref](t),
                          t.el.setAttribute("data-mc-status", "mounted");
                      }
                    })();
                  }, 0);
              };
            i.wait
              .until(
                () =>
                  void 0 !== document.querySelector(".MC_globalHeader") &&
                  "object" == typeof window.mc,
              )
              .then(() => {
                let e = document.querySelector(".MC_globalHeader"),
                  t = mc.utils.component
                    .storage({
                      type: "session",
                      namespace: "aprilFools",
                      key: "disableExperience",
                    })
                    .get();
                e.insertAdjacentHTML(
                  "beforeend",
                  [
                    '<div class="MCExp_AprilFools_HealthbarWrapper">',
                    '<div id="MCExp_AprilFools_Healthbar" role="progressbar" aria-label="' +
                      s.healthbar.ariaLabel +
                      '" aria-valuemin="0" aria-valuemax="10" class="MCExp_AprilFools_Healthbar">',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    '<span class="MCExp_AprilFools_HealthBar_Heart"></span>',
                    "</div>",
                    "</div>",
                  ].join("\n"),
                ),
                  (p = document.querySelector("#MCExp_AprilFools_Healthbar")),
                  x(),
                  document.body.insertAdjacentHTML(
                    "beforeend",
                    [
                      '<section id="MC_AprilFools_Modal" class="MC_Theme_Legends" data-mc-ref="mc_modals_modal" data-aem-item="mc-modal">',
                      '<div class="MC_modal_cover"></div>',
                      '<div data-mc-mount="Modal" data-mc-mount-activation="manual" data-mc-logic="" class="MC_modal MC_modalGeneric" id="MC_modal_AprilFools" data-mc-config="{&#34;modalRef&#34;:&#34;AprilFools&#34;,&#34;aria&#34;:{&#34;modalLabel&#34;:&#34;' +
                        s.modal.youdied +
                        '&#34;,&#34;closeBtnLabel&#34;:&#34;Close modal window&#34;},&#34;options&#34;:{&#34;outsideClickClose&#34;:&#34;false&#34;,&#34;autoOpenStorage&#34:&#34;none&#34;}}">',
                      '<button class="MC_modal_close" data-aem-contentname="close-icon" style="display: none;"></button>',
                      '<div data-mc-mount="Scrollbar" data-mc-mount-activation="manual" class="MC_scrollbar MC_scrollbarA">',
                      '<div class="MC_scrollbar_content_wrapper" style="--scrollerHeight: auto;">',
                      '<div class="MC_scrollbar_content">',
                      '<div class="MC_modal_content" data-aem-item="mc-modal-content">',
                      '<div class="MC_AprilFools_Modal_Content">',
                      "<h2>" + s.modal.youdied + "</h2>",
                      '<p class="MC_AprilFools_Modal_Subtitle">' +
                        s.modal.youawoke +
                        " " +
                        s.modal.mobname +
                        "</p>",
                      '<p class="MC_AprilFools_Modal_Score">' +
                        s.modal.score +
                        ': <span class="MC_AprilFools_Modal_Score_Value"></span>',
                      '<div class="MC_AprilFools_Modal_Actions">',
                      '<button class="MC_Button MC_Button_Hero MC_Style_Java" aria-label="' +
                        s.modal.respawnAria +
                        '" data-aem-contentname="respawn-cta" role="button" data-modalref="AprilFools">',
                      "<span>" + s.modal.respawn + "</span>",
                      "</button>",
                      "</div>",
                      "</div>",
                      "</div>",
                      "</div>",
                      "</div>",
                      '<div class="MC_scrollbar_scrollbar">',
                      '<div class="MC_scrollbar_track"></div>',
                      '<div class="MC_scrollbar_thumb"></div>',
                      "</div>",
                      "</div>",
                      "</div>",
                      "</section>",
                    ].join("\n"),
                  ),
                  (c = document.querySelector("#MC_AprilFools_Modal")),
                  mc.utils.initializeComponents({
                    activation: "manual",
                    scope: "#MC_AprilFools_Modal",
                  }),
                  _(),
                  k(!0),
                  S(),
                  "true" === t &&
                    setTimeout(() => {
                      document
                        .querySelector(
                          ".MC_Animation_action__aprilFoolsAnimationToggle",
                        )
                        .click();
                    }, 0);
              })
              .then((e) => {
                console.log(e);
              });
          },
        })
        .extend(t),
      "function" == typeof e && e();
  }),
  window.experimentStorage.expRequire(
    [["jQuery"], ["experimentBase_1205774"]],
    function () {
      var e = "1205774",
        t = window.staticExperimentConfig().lookup(e);
      !t || t.fn;
      var a = (t ? t.get("utils") : {}).url.locale(),
        o = a.lang + "-" + a.region;
      window
        .staticExperimentConfig({
          htmlTemplateExtensions: {},
        })
        .extend(e),
        t.experimentBase({
          classList: "exp-1205774 exp-1205774T1",
          variationId: "1",
          loadModules: [],
          contentScheduler: [],
          localizedContent: {
            config: {
              fallback: {
                locale: (function () {
                  if ("en" === a.lang) return "en-us";
                })(),
              },
              replacements: {
                "{0}": o,
              },
            },
            "en-us": {
              modal: {
                youdied: "You Died",
                youawoke: "You awoke the",
                mobname: "Toxifin",
                score: "Score",
                respawn: "Respawn",
                respawnAria:
                  "Respawn removes poison effects and restarts the game",
              },
              healthbar: {
                ariaLabel: "Health bar",
              },
              potato: {
                title: "Poison potato",
              },
              toggle: {
                offtext: "Turn off potatoes",
                ontext: "Turn on potatoes",
                offscreenreader:
                  "Turned off potatoes and disabled our April Fools experience",
                onscreenreader:
                  "Turned on potatoes and enabled our April Fools experience",
                osdisabled: "Motion is disabled due to your OS setting.",
              },
            },
            "da-dk": {
              modal: {
                youdied: "Du døde",
                youawoke: "Du vækkede",
                mobname: "Toxifin",
                score: "Score",
                respawn: "Bliv født igen",
                respawnAria:
                  "At blive født igen fjerne den giftige effekt og genstarter spillet",
              },
              healthbar: {
                ariaLabel: "Helbredsbjælke",
              },
              potato: {
                title: "Giftig kartoffel",
              },
              toggle: {
                offtext: "Slå kartofler fra",
                ontext: "Slå kartofler til",
                offscreenreader:
                  "Slå kartofler fra, og deaktiver vores Aprilsnar-oplevelse",
                onscreenreader:
                  "Slå kartofler til, og aktivér vores Aprilsnar-oplevelse",
                osdisabled:
                  "Bevægelse er deaktiveret på grund af dine OS-indstillinger.",
              },
            },
            "de-de": {
              modal: {
                youdied: "Du bist tot",
                youawoke: "Du wecktest",
                mobname: "Toxifin",
                score: "Punktzahl",
                respawn: "Wiederbelebung",
                respawnAria:
                  "Durch die Wiederbelebung wird die Wirkung des Gifts aufgehoben und das Spiel neu gestartet",
              },
              healthbar: {
                ariaLabel: "Gesundheitsleiste",
              },
              potato: {
                title: "Giftkartoffel",
              },
              toggle: {
                offtext: "Kartoffeln deaktivieren",
                ontext: "Kartoffeln aktivieren",
                offscreenreader:
                  "Kartoffeln und unsere April-Fools-Erfahrung deaktivieren",
                onscreenreader:
                  "Kartoffeln und unsere April-Fools-Erfahrung aktivieren",
                osdisabled:
                  "Motion ist aufgrund deiner Betriebssystemeinstellung deaktiviert.",
              },
            },
            "es-es": {
              modal: {
                youdied: "Has muerto",
                youawoke: "Has despertado al",
                mobname: "Toxifin",
                score: "Puntuación",
                respawn: "Reaparecer",
                respawnAria:
                  "La opción Reaparecer elimina los efectos del veneno y reinicia el juego",
              },
              healthbar: {
                ariaLabel: "Barra de salud",
              },
              potato: {
                title: "Patata venenosa",
              },
              toggle: {
                offtext: "Desactivar las patatas",
                ontext: "Activar las patatas",
                offscreenreader:
                  "Desactivar las patatas y deshabilitar nuestra experiencia del día de las bromas de abril",
                onscreenreader:
                  "Activar las patatas y habilitar nuestra experiencia del día de las bromas de abril",
                osdisabled:
                  "El movimiento está deshabilitado debido a la configuración de tu SO.",
              },
            },
            "es-mx": {
              modal: {
                youdied: "Moriste",
                youawoke: "Despertaste al",
                mobname: "Toxifin",
                score: "Puntuación",
                respawn: "Reaparecer",
                respawnAria:
                  "La opción Reaparecer elimina los efectos del veneno y reinicia el juego",
              },
              healthbar: {
                ariaLabel: "Barra de salud",
              },
              potato: {
                title: "Patata venenosa",
              },
              toggle: {
                offtext: "Desactivar las patatas",
                ontext: "Activar las patatas",
                offscreenreader:
                  "Desactivar las patatas y deshabilitar nuestra experiencia del día de las bromas de abril",
                onscreenreader:
                  "Activar las patatas y habilitar nuestra experiencia del día de las bromas de abril",
                osdisabled:
                  "El movimiento está deshabilitado debido a la configuración de tu SO.",
              },
            },
            "fi-fi": {
              modal: {
                youdied: "Kuolit",
                youawoke: "Herätit",
                mobname: "Toxifin",
                score: "Pistemäärä",
                respawn: "Istuta uudelleen",
                respawnAria:
                  "Uudelleen istuttaminen poistaa myrkyn vaikutukset ja aloittaa pelin uudelleen",
              },
              healthbar: {
                ariaLabel: "Terveyspalkki",
              },
              potato: {
                title: "Myrkkyperuna",
              },
              toggle: {
                offtext: "Sammuta perunat",
                ontext: "Käynnistä perunat",
                offscreenreader:
                  "Sammuta perunat ja poista April Fools -kokemus käytöstä",
                onscreenreader:
                  "Käynnistä perunat ja ota April Fools -kokemus käyttöön",
                osdisabled:
                  "Liike on poistettu käytöstä käyttöjärjestelmän asetuksesi vuoksi.",
              },
            },
            "fr-ca": {
              modal: {
                youdied: "Vous êtes mort",
                youawoke: "Vous avez réveillé le",
                mobname: "Toxifin",
                score: "Score",
                respawn: "Réapparaître",
                respawnAria:
                  "La réapparition supprime les effets du poison et redémarre le jeu",
              },
              healthbar: {
                ariaLabel: "Bar de santé",
              },
              potato: {
                title: "Patate empoisonnée",
              },
              toggle: {
                offtext: "Éteindre les patates",
                ontext: "Allumer les patates",
                offscreenreader:
                  "Éteignez les patates et désactivez notre expérience du poisson d’avril",
                onscreenreader:
                  "Allumez les patates et activez notre expérience du poisson d’avril",
                osdisabled:
                  "Le mouvement est désactivé en raison des paramètres de votre système d’exploitation.",
              },
            },
            "fr-fr": {
              modal: {
                youdied: "Vous êtes mort",
                youawoke: "Vous avez réveillé le",
                mobname: "Toxifin",
                score: "Score",
                respawn: "Renaître",
                respawnAria: "Pomme de terre empoisonnée",
              },
              healthbar: {
                ariaLabel: "Barre de santé",
              },
              potato: {
                title: "Pomme de terre empoisonnée",
              },
              toggle: {
                offtext: "Désactiver les pommes de terre",
                ontext: "Activer les pommes de terre",
                offscreenreader:
                  "Désactiver les pommes de terre et désactiver notre expérience du poisson d’avril",
                onscreenreader:
                  "Activer les pommes de terre et activer notre expérience du poisson d’avril",
                osdisabled:
                  "Le mouvement est désactivé en raison des paramètres de votre système d’exploitation.",
              },
            },
            "it-it": {
              modal: {
                youdied: "Sei morto",
                youawoke: "Hai risvegliato:",
                mobname: "Toxifin",
                score: "Punteggio",
                respawn: "Rigenera",
                respawnAria:
                  "La rigenerazione rimuove gli effetti del veleno e riavvia il gioco",
              },
              healthbar: {
                ariaLabel: "Barra della salute",
              },
              potato: {
                title: "Patata avvelenata",
              },
              toggle: {
                offtext: "Disattiva le patate",
                ontext: "Attiva le patate",
                offscreenreader:
                  "Disattiva le patate e disabilita l'esperienza per il Pesce d'aprile",
                onscreenreader:
                  "Attiva le patate e abilita l'esperienza per il Pesce d'aprile",
                osdisabled:
                  "Il movimento è disabilitato a causa delle impostazioni del sistema operativo.",
              },
            },
            "ja-jp": {
              modal: {
                youdied: "死んでしまった",
                youawoke: "次で目覚めた:",
                mobname: "Toxifin",
                score: "スコア",
                respawn: "リスポーン",
                respawnAria:
                  "リスポーンすると毒の効果が解消され、ゲームが再開されます",
              },
              healthbar: {
                ariaLabel: "健康バー",
              },
              potato: {
                title: "青くなったジャガイモ",
              },
              toggle: {
                offtext: "ジャガイモをオフにする",
                ontext: "ジャガイモをオンにする",
                offscreenreader:
                  "ジャガイモをオフにし、エイプリル フール体験を無効にする",
                onscreenreader:
                  "ジャガイモをオンにし、エイプリル フール体験を有効にする",
                osdisabled: "OSの設定により、モーションが無効になっています。",
              },
            },
            "ko-kr": {
              modal: {
                youdied: "당신은 죽었습니다",
                youawoke: "몹을 깨움:",
                mobname: "Toxifin",
                score: "점수",
                respawn: "리스폰",
                respawnAria:
                  "리스폰하면 독 효과가 제거되고 게임이 다시 시작됩니다",
              },
              healthbar: {
                ariaLabel: "체력 표시줄",
              },
              potato: {
                title: "독감자",
              },
              toggle: {
                offtext: "감자 해제하기",
                ontext: "감자 설정하기",
                offscreenreader: "감자를 해제하고 만우절 경험 비활성화하기",
                onscreenreader: "감자를 설정하고 만우절 경험 활성화하기",
                osdisabled: "OS 설정으로 인해 모션이 비활성화되었습니다.",
              },
            },
            "nb-no": {
              modal: {
                youdied: "Du døde",
                youawoke: "Du vekket til live en",
                mobname: "Toxifin",
                score: "Poengsum",
                respawn: "Start på nytt",
                respawnAria:
                  "Når du starter på nytt, fjerner du effektene fra giftpoteten og starter spillet på nytt.",
              },
              healthbar: {
                ariaLabel: "Helsemeter",
              },
              potato: {
                title: "Giftpotet",
              },
              toggle: {
                offtext: "Slå av poteter",
                ontext: "Slå på poteter",
                offscreenreader:
                  "Slå av poteter, og deaktiver Aprilsnarr-opplevelsen",
                onscreenreader:
                  "Slå på poteter, og aktiver Aprilsnarr-opplevelsen",
                osdisabled:
                  "Bevegelse er avslått på grunn av dine OS-innstillinger",
              },
            },
            "nl-nl": {
              modal: {
                youdied: "Je bent dood",
                youawoke: "Je hebt het volgende gewekt:",
                mobname: "Toxifin",
                score: "Score",
                respawn: "Opnieuw spawnen",
                respawnAria:
                  "Door opnieuw te spawnen verwijder je de effecten van het gif en wordt het spel opnieuw gestart",
              },
              healthbar: {
                ariaLabel: "Gezondheidsbalk",
              },
              potato: {
                title: "Gifaardappel",
              },
              toggle: {
                offtext: "Aardappelen uitschakelen",
                ontext: "Aardappelen inschakelen",
                offscreenreader:
                  "Aardappelen uitschakelen en onze 1-aprilgrappen uitschakelen",
                onscreenreader:
                  "Aardappelen inschakelen en onze 1-aprilgrappen inschakelen",
                osdisabled:
                  "Beweging is uitgeschakeld vanwege de instelling van uw besturingssysteem.",
              },
            },
            "pl-pl": {
              modal: {
                youdied: "Nie żyjesz",
                youawoke: "Przebudzasz",
                mobname: "Toxifin",
                score: "Wynik",
                respawn: "Odrodzenie",
                respawnAria:
                  "Odrodzenie usuwa efekty trucizny i restartuje grę",
              },
              healthbar: {
                ariaLabel: "Pasek zdrowia",
              },
              potato: {
                title: "Trujący ziemniak",
              },
              toggle: {
                offtext: "Wyłącz ziemniaki",
                ontext: "Włącz ziemniaki",
                offscreenreader:
                  "Wyłącz ziemniaki i dezaktywuj nasze funkcje na Prima aprilis",
                onscreenreader:
                  "Włącz ziemniaki i aktywuj nasze funkcje na Prima aprilis",
                osdisabled:
                  "Ruch jest wyłączony z powodu ustawienia systemu operacyjnego.",
              },
            },
            "pt-br": {
              modal: {
                youdied: "Você morreu",
                youawoke: "Você acordou o",
                mobname: "Toxifin",
                score: "Pontuação",
                respawn: "Renascer",
                respawnAria:
                  "O renascimento remove os efeitos do veneno e reinicia o jogo",
              },
              healthbar: {
                ariaLabel: "Barra de vida",
              },
              potato: {
                title: "Batata venenosa",
              },
              toggle: {
                offtext: "Desligar as batatas",
                ontext: "Ligar as batatas",
                offscreenreader:
                  "Desliga as batatas e desativa nossa experiência do Dia da Mentira",
                onscreenreader:
                  "Liga as batatas e ativa nossa experiência do Dia da Mentira",
                osdisabled:
                  "O movimento está desativado devido à configuração do seu sistema operacional.",
              },
            },
            "pt-pt": {
              modal: {
                youdied: "Morreste",
                youawoke: "Acordaste o",
                mobname: "Toxifin",
                score: "Pontuação",
                respawn: "Respawn",
                respawnAria:
                  "O respawn remove os efeitos do veneno e reinicia o jogo",
              },
              healthbar: {
                ariaLabel: "Barra de saúde",
              },
              potato: {
                title: "Batata venenosa",
              },
              toggle: {
                offtext: "Desligar as batatas",
                ontext: "Ligar as batatas",
                offscreenreader:
                  "Desliga as batatas e desativa a nossa experiência do Dia das Mentiras",
                onscreenreader:
                  "Liga as batatas e ativa a nossa experiência do Dia das Mentiras",
                osdisabled:
                  "O movimento está desativado devido à sua definição de SO.",
              },
            },
            "ru-ru": {
              modal: {
                youdied: "Ты умер(ла)",
                youawoke: "Ты разбудил(а)",
                mobname: "Toxifin",
                score: "Очки:",
                respawn: "Ожить",
                respawnAria:
                  'При нажатии кнопки "Ожить" исчезает действие яда и игра перезапускается',
              },
              healthbar: {
                ariaLabel: "Шкала здоровья",
              },
              potato: {
                title: "Ядовитая картошка",
              },
              toggle: {
                offtext: "Выключить картошки",
                ontext: "Включить картошки",
                offscreenreader:
                  "Выключить картошки и отключить наши первоапрельские шутки",
                onscreenreader:
                  "Включить картошки и наши первоапрельские шутки",
                osdisabled: "Движение отключено согласно настройке ОС.",
              },
            },
            "sv-se": {
              modal: {
                youdied: "Du dog",
                youawoke: "Du väckte",
                mobname: "Toxifin",
                score: "Poäng",
                respawn: "Återuppliva",
                respawnAria:
                  "Återuppliva tar bort giftverkan och startar om spelet",
              },
              healthbar: {
                ariaLabel: "Hälsofält",
              },
              potato: {
                title: "Förgiftad potatis",
              },
              toggle: {
                offtext: "Stäng av potatis",
                ontext: "Aktivera potatis",
                offscreenreader:
                  "Stäng av potatis och inaktivera vår aprilskämt-upplevelse",
                onscreenreader:
                  "Sätt på potatis och aktivera vår aprilskämt-upplevelse",
                osdisabled:
                  "Funktionen är inaktiverad på grund av inställningarna i ditt operativsystem.",
              },
            },
            "tr-tr": {
              modal: {
                youdied: "Öldünüz",
                youawoke: "Sizin yüzünüzden uyandı:",
                mobname: "Toxifin",
                score: "Puan",
                respawn: "Tekrar Doğ",
                respawnAria:
                  "Tekrar doğduğunuzda zehir etkisi geçer ve oyun baştan başlar",
              },
              healthbar: {
                ariaLabel: "Sağlık çubuğu",
              },
              potato: {
                title: "Zehirli patates",
              },
              toggle: {
                offtext: "Patatesleri kapat",
                ontext: "Patatesleri aç",
                offscreenreader:
                  "1 Nisan Şakası deneyimimizi devre dışı bırakmak için patatesleri kapatın",
                onscreenreader:
                  "1 Nisan Şakası deneyimimizi etkinleştirmek için patatesleri açın",
                osdisabled:
                  "İşletim sistemi ayarınız nedeniyle hareket devre dışı bırakılmıştır.",
              },
            },
            "zh-hans": {
              modal: {
                youdied: "您已死亡",
                youawoke: "您唤醒了",
                mobname: "Toxifin",
                score: "得分",
                respawn: "复活",
                respawnAria: "复活可清除中毒效果并重新开始游戏",
              },
              healthbar: {
                ariaLabel: "生命值血条",
              },
              potato: {
                title: "毒马铃薯",
              },
              toggle: {
                offtext: "关闭马铃薯",
                ontext: "打开马铃薯",
                offscreenreader: "关闭马铃薯，禁止体验愚人节活动",
                onscreenreader: "打开马铃薯，体验愚人节活动",
                osdisabled: "由于你的操作系统设置，动画已禁用",
              },
            },
            "zh-hant": {
              modal: {
                youdied: "您死了",
                youawoke: "您喚醒了",
                mobname: "Toxifin",
                score: "分數",
                respawn: "重生",
                respawnAria: "重生會移除中毒效果並重新啟動遊戲",
              },
              healthbar: {
                ariaLabel: "生命值",
              },
              potato: {
                title: "毒馬鈴薯",
              },
              toggle: {
                offtext: "關閉馬鈴薯",
                ontext: "開啟馬鈴薯",
                offscreenreader: "關閉馬鈴薯並停用我們的愚人節體驗",
                onscreenreader: "開啟馬鈴薯並啟用我們的愚人節體驗",
                osdisabled: "由於您作業系統設定的關係，動態功能已遭到停用。",
              },
            },
          },
        });
    },
  );
