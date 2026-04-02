(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [491],
  {
    4846: (e, t, r) => {
      "use strict";
      var n = r(6116),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          l,
          i,
          a,
          s,
          u,
          c,
          d,
          f = !1;
        t || (t = {}), (i = t.debug || !1);
        try {
          if (
            ((s = n()),
            (u = document.createRange()),
            (c = document.getSelection()),
            ((d = document.createElement("span")).textContent = e),
            (d.ariaHidden = "true"),
            (d.style.all = "unset"),
            (d.style.position = "fixed"),
            (d.style.top = 0),
            (d.style.clip = "rect(0, 0, 0, 0)"),
            (d.style.whiteSpace = "pre"),
            (d.style.webkitUserSelect = "text"),
            (d.style.MozUserSelect = "text"),
            (d.style.msUserSelect = "text"),
            (d.style.userSelect = "text"),
            d.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format)) {
                if ((r.preventDefault(), void 0 === r.clipboardData)) {
                  i && console.warn("unable to use e.clipboardData"),
                    i && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var n = o[t.format] || o.default;
                  window.clipboardData.setData(n, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              }
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(d),
            u.selectNodeContents(d),
            c.addRange(u),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          f = !0;
        } catch (n) {
          i && console.error("unable to copy using execCommand: ", n),
            i && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (f = !0);
          } catch (n) {
            i && console.error("unable to copy using clipboardData: ", n),
              i && console.error("falling back to prompt"),
              (r =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (l =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (a = r.replace(/#{\s*key\s*}/g, l)),
              window.prompt(a, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(u)
              : c.removeAllRanges()),
            d && document.body.removeChild(d),
            s();
        }
        return f;
      };
    },
    9645: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => o.a });
      var n = r(4546),
        o = r.n(n);
    },
    7342: (e, t, r) => {
      "use strict";
      var n = r(2450);
      r.o(n, "redirect") &&
        r.d(t, {
          redirect: function () {
            return n.redirect;
          },
        }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          });
    },
    9778: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = r(6858),
        o = r(5544),
        l = r(6131),
        i = o._(r(451)),
        a = n._(r(3458)),
        s = n._(r(4731)),
        u = r(5514),
        c = r(5927),
        d = r(117);
      r(4411);
      let f = r(6536),
        p = n._(r(5770)),
        g = r(1097),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, r, n, o, l, i) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function v(e) {
        return i.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let b = (0, i.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: o,
            height: a,
            width: s,
            decoding: u,
            className: c,
            style: d,
            fetchPriority: f,
            placeholder: p,
            loading: h,
            unoptimized: b,
            fill: y,
            onLoadRef: x,
            onLoadingCompleteRef: w,
            setBlurComplete: E,
            setShowAltText: S,
            sizesInput: P,
            onLoad: C,
            onError: T,
            ...k
          } = e,
          M = (0, i.useCallback)(
            (e) => {
              e && (T && (e.src = e.src), e.complete && m(e, p, x, w, E, b, P));
            },
            [r, p, x, w, E, T, b, P]
          ),
          K = (0, g.useMergedRef)(t, M);
        return (0, l.jsx)("img", {
          ...k,
          ...v(f),
          loading: h,
          width: s,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: K,
          onLoad: (e) => {
            m(e.currentTarget, p, x, w, E, b, P);
          },
          onError: (e) => {
            S(!0), "empty" !== p && E(!0), T && T(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...v(r.fetchPriority),
          };
        return t && a.default.preload
          ? (a.default.preload(r.src, n), null)
          : (0, l.jsx)(s.default, {
              children: (0, l.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let x = (0, i.forwardRef)((e, t) => {
        let r = (0, i.useContext)(f.RouterContext),
          n = (0, i.useContext)(d.ImageConfigContext),
          o = (0, i.useMemo)(() => {
            var e;
            let t = h || n || c.imageConfigDefault,
              r = [...t.deviceSizes, ...t.imageSizes].sort((e, t) => e - t),
              o = t.deviceSizes.sort((e, t) => e - t),
              l = null == (e = t.qualities) ? void 0 : e.sort((e, t) => e - t);
            return { ...t, allSizes: r, deviceSizes: o, qualities: l };
          }, [n]),
          { onLoad: a, onLoadingComplete: s } = e,
          g = (0, i.useRef)(a);
        (0, i.useEffect)(() => {
          g.current = a;
        }, [a]);
        let m = (0, i.useRef)(s);
        (0, i.useEffect)(() => {
          m.current = s;
        }, [s]);
        let [v, x] = (0, i.useState)(!1),
          [w, E] = (0, i.useState)(!1),
          { props: S, meta: P } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: v,
            showAltText: w,
          });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(b, {
              ...S,
              unoptimized: P.unoptimized,
              placeholder: P.placeholder,
              fill: P.fill,
              onLoadRef: g,
              onLoadingCompleteRef: m,
              setBlurComplete: x,
              setShowAltText: E,
              sizesInput: e.sizes,
              ref: t,
            }),
            P.priority
              ? (0, l.jsx)(y, { isAppRouter: !r, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1097: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(451);
      function o(e, t) {
        let r = (0, n.useRef)(() => {}),
          o = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), o.current())
                    : ((r.current = l(e, n)), (o.current = l(t, n)));
                }
              : e || t,
          [e, t]
        );
      }
      function l(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1755: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(6858)._(r(451)).default.createContext({});
    },
    3699: (e, t) => {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    5514: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        r(4411);
      let n = r(6355),
        o = r(5927);
      function l(e) {
        return void 0 !== e.default;
      }
      function i(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function a(e, t) {
        var r, a;
        let s,
          u,
          c,
          {
            src: d,
            sizes: f,
            unoptimized: p = !1,
            priority: g = !1,
            loading: h,
            className: m,
            quality: v,
            width: b,
            height: y,
            fill: x = !1,
            style: w,
            overrideSrc: E,
            onLoad: S,
            onLoadingComplete: P,
            placeholder: C = "empty",
            blurDataURL: T,
            fetchPriority: k,
            decoding: M = "async",
            layout: K,
            objectFit: D,
            objectPosition: O,
            lazyBoundary: I,
            lazyRoot: A,
            ...L
          } = e,
          { imgConf: R, showAltText: j, blurComplete: z, defaultLoader: N } = t,
          F = R || o.imageConfigDefault;
        if ("allSizes" in F) s = F;
        else {
          let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
            t = F.deviceSizes.sort((e, t) => e - t),
            n = null == (r = F.qualities) ? void 0 : r.sort((e, t) => e - t);
          s = { ...F, allSizes: e, deviceSizes: t, qualities: n };
        }
        if (void 0 === N)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let B = L.loader || N;
        delete L.loader, delete L.srcSet;
        let _ = "__next_img_default" in B;
        if (_) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = B;
          B = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (K) {
          "fill" === K && (x = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[K];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[K];
          t && !f && (f = t);
        }
        let W = "",
          V = i(b),
          H = i(y);
        if ((a = d) && "object" == typeof a && (l(a) || void 0 !== a.src)) {
          let e = l(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (c = e.blurHeight),
            (T = T || e.blurDataURL),
            (W = e.src),
            !x)
          ) {
            if (V || H) {
              if (V && !H) {
                let t = V / e.width;
                H = Math.round(e.height * t);
              } else if (!V && H) {
                let t = H / e.height;
                V = Math.round(e.width * t);
              }
            } else (V = e.width), (H = e.height);
          }
        }
        let $ = !g && ("lazy" === h || void 0 === h);
        (!(d = "string" == typeof d ? d : W) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((p = !0), ($ = !1)),
          s.unoptimized && (p = !0),
          _ &&
            !s.dangerouslyAllowSVG &&
            d.split("?", 1)[0].endsWith(".svg") &&
            (p = !0);
        let U = i(v),
          G = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: D,
                  objectPosition: O,
                }
              : {},
            j ? {} : { color: "transparent" },
            w
          ),
          Y =
            z || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: V,
                  heightInt: H,
                  blurWidth: u,
                  blurHeight: c,
                  blurDataURL: T || "",
                  objectFit: G.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          q = Y
            ? {
                backgroundSize: G.objectFit || "cover",
                backgroundPosition: G.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          X = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: l,
              sizes: i,
              loader: a,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: s, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, i),
              c = s.length - 1;
            return {
              sizes: i || "w" !== u ? i : "100vw",
              srcSet: s
                .map(
                  (e, n) =>
                    a({ config: t, src: r, quality: l, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: t, src: r, quality: l, width: s[c] }),
            };
          })({
            config: s,
            src: d,
            unoptimized: p,
            width: V,
            quality: U,
            sizes: f,
            loader: B,
          });
        return {
          props: {
            ...L,
            loading: $ ? "lazy" : h,
            fetchPriority: k,
            width: V,
            height: H,
            decoding: M,
            className: m,
            style: { ...G, ...q },
            sizes: X.sizes,
            srcSet: X.srcSet,
            src: E || X.src,
          },
          meta: { unoptimized: p, priority: g, placeholder: C, fill: x },
        };
      }
    },
    4731: (e, t, r) => {
      "use strict";
      var n = r(9938);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return f;
          },
        });
      let o = r(6858),
        l = r(5544),
        i = r(6131),
        a = l._(r(451)),
        s = o._(r(2484)),
        u = r(1755),
        c = r(1227),
        d = r(3699);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, i.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function p(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(4411);
      let g = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(f(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let l = !0,
                  i = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  i = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (l = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (l = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = g.length; e < t; e++) {
                      let t = g[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (l = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !i) && r.has(e)
                            ? (l = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return l;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let o = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: o });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          r = (0, a.useContext)(u.AmpStateContext),
          n = (0, a.useContext)(c.HeadManagerContext);
        return (0, i.jsx)(s.default, {
          reduceComponentsToState: h,
          headManager: n,
          inAmpMode: (0, d.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    6355: (e, t) => {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: l,
            objectFit: i,
          } = e,
          a = n ? 40 * n : t,
          s = o ? 40 * o : r,
          u = a && s ? "viewBox='0 0 " + a + " " + s + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === i
            ? "xMidYMid"
            : "cover" === i
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          l +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    117: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(6858)._(r(451)),
        o = r(5927),
        l = n.default.createContext(o.imageConfigDefault);
    },
    5927: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: void 0,
          unoptimized: !1,
        };
    },
    4546: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = r(6858),
        o = r(5514),
        l = r(9778),
        i = n._(r(5770));
      function a(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let s = l.Image;
    },
    5770: (e, t) => {
      "use strict";
      function r(e) {
        var t;
        let { config: r, src: n, width: o, quality: l } = e,
          i =
            l ||
            (null == (t = r.qualities)
              ? void 0
              : t.reduce((e, t) =>
                  Math.abs(t - 75) < Math.abs(e - 75) ? t : e
                )) ||
            75;
        return (
          r.path + n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    6536: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(6858)._(r(451)).default.createContext(null);
    },
    2484: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(451),
        o = "undefined" == typeof window,
        l = o ? () => {} : n.useLayoutEffect,
        i = o ? () => {} : n.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function a() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(o, e));
          }
        }
        if (o) {
          var s;
          null == t || null == (s = t.mountedInstances) || s.add(e.children),
            a();
        }
        return (
          l(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          l(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          i(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    4707: (e, t, r) => {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CopyToClipboard = void 0);
      var o = a(r(451)),
        l = a(r(4846)),
        i = ["text", "onCopy", "options", "children"];
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? s(Object(r), !0).forEach(function (t) {
                p(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : s(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function d(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var g = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && c(e, t);
        })(s, e);
        var t,
          r,
          a =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                r = f(s);
              return (
                (e = t
                  ? Reflect.construct(r, arguments, f(this).constructor)
                  : r.apply(this, arguments)),
                (function (e, t) {
                  if (t && ("object" === n(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return d(e);
                })(this, e)
              );
            });
        function s() {
          var e;
          !(function (e, t) {
            if (!(e instanceof t))
              throw TypeError("Cannot call a class as a function");
          })(this, s);
          for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
            r[n] = arguments[n];
          return (
            p(
              d((e = a.call.apply(a, [this].concat(r)))),
              "onClick",
              function (t) {
                var r = e.props,
                  n = r.text,
                  i = r.onCopy,
                  a = r.children,
                  s = r.options,
                  u = o.default.Children.only(a),
                  c = (0, l.default)(n, s);
                i && i(n, c),
                  u &&
                    u.props &&
                    "function" == typeof u.props.onClick &&
                    u.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          (r = [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = (e.text, e.onCopy, e.options, e.children),
                  r = (function (e, t) {
                    if (null == e) return {};
                    var r,
                      n,
                      o = (function (e, t) {
                        if (null == e) return {};
                        var r,
                          n,
                          o = {},
                          l = Object.keys(e);
                        for (n = 0; n < l.length; n++)
                          (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                      })(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      for (n = 0; n < l.length; n++)
                        (r = l[n]),
                          !(t.indexOf(r) >= 0) &&
                            Object.prototype.propertyIsEnumerable.call(e, r) &&
                            (o[r] = e[r]);
                    }
                    return o;
                  })(e, i),
                  n = o.default.Children.only(t);
                return o.default.cloneElement(
                  n,
                  u(u({}, r), {}, { onClick: this.onClick })
                );
              },
            },
          ]),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(s.prototype, r),
          Object.defineProperty(s, "prototype", { writable: !1 }),
          s
        );
      })(o.default.PureComponent);
      (t.CopyToClipboard = g),
        p(g, "defaultProps", { onCopy: void 0, options: void 0 });
    },
    8040: (e, t, r) => {
      "use strict";
      var n = r(4707).CopyToClipboard;
      (n.CopyToClipboard = n), (e.exports = n);
    },
    6116: (e) => {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                r.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    8384: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => l });
      var n = r(451);
      function o(e) {
        return null;
      }
      o.getCollectionNode = function* (e, t) {
        let { childItems: r, title: o, children: l } = e,
          i = e.title || e.children,
          a =
            e.textValue ||
            ("string" == typeof i ? i : "") ||
            e["aria-label"] ||
            "";
        a ||
          (null == t ? void 0 : t.suppressTextValueWarning) ||
          console.warn(
            "<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."
          ),
          yield {
            type: "item",
            props: e,
            rendered: i,
            textValue: a,
            "aria-label": e["aria-label"],
            hasChildNodes:
              null != e.hasChildItems
                ? e.hasChildItems
                : !!(
                    e.childItems ||
                    (e.title && n.Children.count(e.children) > 0)
                  ),
            *childNodes() {
              if (r) for (let e of r) yield { type: "item", value: e };
              else if (o) {
                let e = [];
                n.Children.forEach(l, (t) => {
                  e.push({ type: "item", element: t });
                }),
                  yield* e;
              }
            },
          };
      };
      var l = o;
    },
    512: (e, t, r) => {
      "use strict";
      let n, o;
      r.d(t, { d: () => lT });
      var l = r(2142),
        i = r(451);
      function a(e) {
        return (0, i.forwardRef)(e);
      }
      var s = (e, t, r = !0) => {
          if (!t) return [e, {}];
          let n = t.reduce((t, r) => (r in e ? { ...t, [r]: e[r] } : t), {});
          return r
            ? [
                Object.keys(e)
                  .filter((e) => !t.includes(e))
                  .reduce((t, r) => ({ ...t, [r]: e[r] }), {}),
                n,
              ]
            : [e, n];
        },
        u = ["small", "medium", "large"],
        c = {
          theme: {
            opacity: ["disabled"],
            spacing: ["divider"],
            borderWidth: u,
            borderRadius: u,
          },
          classGroups: {
            shadow: [{ shadow: u }],
            "font-size": [{ text: ["tiny", ...u] }],
            "bg-image": [
              "bg-stripe-gradient-default",
              "bg-stripe-gradient-primary",
              "bg-stripe-gradient-secondary",
              "bg-stripe-gradient-success",
              "bg-stripe-gradient-warning",
              "bg-stripe-gradient-danger",
            ],
          },
        },
        d = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        f = (e) => !e || "object" != typeof e || 0 === Object.keys(e).length,
        p = (e, t) => JSON.stringify(e) === JSON.stringify(t);
      function g(e) {
        let t = [];
        return (
          (function e(t, r) {
            t.forEach(function (t) {
              Array.isArray(t) ? e(t, r) : r.push(t);
            });
          })(e, t),
          t
        );
      }
      var h = (...e) => g(e).filter(Boolean),
        m = (e, t) => {
          let r = {},
            n = Object.keys(e),
            o = Object.keys(t);
          for (let l of n)
            if (o.includes(l)) {
              let n = e[l],
                o = t[l];
              Array.isArray(n) || Array.isArray(o)
                ? (r[l] = h(o, n))
                : "object" == typeof n && "object" == typeof o
                ? (r[l] = m(n, o))
                : (r[l] = o + " " + n);
            } else r[l] = e[l];
          for (let e of o) n.includes(e) || (r[e] = t[e]);
          return r;
        },
        v = (e) =>
          e && "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e;
      let b = (e) => {
          let t = E(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), y(r, t) || w(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = r[e] || [];
              return t && n[e] ? [...o, ...n[e]] : o;
            },
          };
        },
        y = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            o = n ? y(e.slice(1), n) : void 0;
          if (o) return o;
          if (0 === t.validators.length) return;
          let l = e.join("-");
          return t.validators.find(({ validator: e }) => e(l))?.classGroupId;
        },
        x = /^\[(.+)\]$/,
        w = (e) => {
          if (x.test(e)) {
            let t = x.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        E = (e) => {
          let { theme: t, prefix: r } = e,
            n = { nextPart: new Map(), validators: [] };
          return (
            T(Object.entries(e.classGroups), r).forEach(([e, r]) => {
              S(r, n, e, t);
            }),
            n
          );
        },
        S = (e, t, r, n) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : P(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (C(e)) {
                S(e(n), t, r, n);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              S(o, P(t, e), r, n);
            });
          });
        },
        P = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        C = (e) => e.isThemeGetter,
        T = (e, t) =>
          t
            ? e.map(([e, r]) => [
                e,
                r.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, r]) => [t + e, r])
                      )
                    : e
                ),
              ])
            : e,
        k = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            n = new Map(),
            o = (o, l) => {
              r.set(o, l), ++t > e && ((t = 0), (n = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = n.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : o(e, t);
            },
          };
        },
        M = (e) => {
          let { separator: t, experimentalParseClassName: r } = e,
            n = 1 === t.length,
            o = t[0],
            l = t.length,
            i = (e) => {
              let r;
              let i = [],
                a = 0,
                s = 0;
              for (let u = 0; u < e.length; u++) {
                let c = e[u];
                if (0 === a) {
                  if (c === o && (n || e.slice(u, u + l) === t)) {
                    i.push(e.slice(s, u)), (s = u + l);
                    continue;
                  }
                  if ("/" === c) {
                    r = u;
                    continue;
                  }
                }
                "[" === c ? a++ : "]" === c && a--;
              }
              let u = 0 === i.length ? e : e.substring(s),
                c = u.startsWith("!"),
                d = c ? u.substring(1) : u;
              return {
                modifiers: i,
                hasImportantModifier: c,
                baseClassName: d,
                maybePostfixModifierPosition: r && r > s ? r - s : void 0,
              };
            };
          return r ? (e) => r({ className: e, parseClassName: i }) : i;
        },
        K = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            r = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
            }),
            t.push(...r.sort()),
            t
          );
        },
        D = (e) => ({ cache: k(e.cacheSize), parseClassName: M(e), ...b(e) }),
        O = /\s+/,
        I = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: n,
              getConflictingClassGroupIds: o,
            } = t,
            l = [],
            i = e.trim().split(O),
            a = "";
          for (let e = i.length - 1; e >= 0; e -= 1) {
            let t = i[e],
              {
                modifiers: s,
                hasImportantModifier: u,
                baseClassName: c,
                maybePostfixModifierPosition: d,
              } = r(t),
              f = !!d,
              p = n(f ? c.substring(0, d) : c);
            if (!p) {
              if (!f || !(p = n(c))) {
                a = t + (a.length > 0 ? " " + a : a);
                continue;
              }
              f = !1;
            }
            let g = K(s).join(":"),
              h = u ? g + "!" : g,
              m = h + p;
            if (l.includes(m)) continue;
            l.push(m);
            let v = o(p, f);
            for (let e = 0; e < v.length; ++e) {
              let t = v[e];
              l.push(h + t);
            }
            a = t + (a.length > 0 ? " " + a : a);
          }
          return a;
        };
      function A() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = L(e)) && (n && (n += " "), (n += t));
        return n;
      }
      let L = (e) => {
        let t;
        if ("string" == typeof e) return e;
        let r = "";
        for (let n = 0; n < e.length; n++)
          e[n] && (t = L(e[n])) && (r && (r += " "), (r += t));
        return r;
      };
      function R(e, ...t) {
        let r, n, o;
        let l = function (a) {
          return (
            (n = (r = D(t.reduce((e, t) => t(e), e()))).cache.get),
            (o = r.cache.set),
            (l = i),
            i(a)
          );
        };
        function i(e) {
          let t = n(e);
          if (t) return t;
          let l = I(e, r);
          return o(e, l), l;
        }
        return function () {
          return l(A.apply(null, arguments));
        };
      }
      let j = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        z = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        N = /^\d+\/\d+$/,
        F = new Set(["px", "full", "screen"]),
        B = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        _ =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        W = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        V = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        H =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        $ = (e) => G(e) || F.has(e) || N.test(e),
        U = (e) => ei(e, "length", ea),
        G = (e) => !!e && !Number.isNaN(Number(e)),
        Y = (e) => ei(e, "number", G),
        q = (e) => !!e && Number.isInteger(Number(e)),
        X = (e) => e.endsWith("%") && G(e.slice(0, -1)),
        Z = (e) => z.test(e),
        J = (e) => B.test(e),
        Q = new Set(["length", "size", "percentage"]),
        ee = (e) => ei(e, Q, es),
        et = (e) => ei(e, "position", es),
        er = new Set(["image", "url"]),
        en = (e) => ei(e, er, ec),
        eo = (e) => ei(e, "", eu),
        el = () => !0,
        ei = (e, t, r) => {
          let n = z.exec(e);
          return (
            !!n &&
            (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
          );
        },
        ea = (e) => _.test(e) && !W.test(e),
        es = () => !1,
        eu = (e) => V.test(e),
        ec = (e) => H.test(e);
      Symbol.toStringTag;
      let ed = () => {
          let e = j("colors"),
            t = j("spacing"),
            r = j("blur"),
            n = j("brightness"),
            o = j("borderColor"),
            l = j("borderRadius"),
            i = j("borderSpacing"),
            a = j("borderWidth"),
            s = j("contrast"),
            u = j("grayscale"),
            c = j("hueRotate"),
            d = j("invert"),
            f = j("gap"),
            p = j("gradientColorStops"),
            g = j("gradientColorStopPositions"),
            h = j("inset"),
            m = j("margin"),
            v = j("opacity"),
            b = j("padding"),
            y = j("saturate"),
            x = j("scale"),
            w = j("sepia"),
            E = j("skew"),
            S = j("space"),
            P = j("translate"),
            C = () => ["auto", "contain", "none"],
            T = () => ["auto", "hidden", "clip", "visible", "scroll"],
            k = () => ["auto", Z, t],
            M = () => [Z, t],
            K = () => ["", $, U],
            D = () => ["auto", G, Z],
            O = () => [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ],
            I = () => ["solid", "dashed", "dotted", "double", "none"],
            A = () => [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
            ],
            L = () => [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ],
            R = () => ["", "0", Z],
            z = () => [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ],
            N = () => [G, Z];
          return {
            cacheSize: 500,
            separator: ":",
            theme: {
              colors: [el],
              spacing: [$, U],
              blur: ["none", "", J, Z],
              brightness: N(),
              borderColor: [e],
              borderRadius: ["none", "", "full", J, Z],
              borderSpacing: M(),
              borderWidth: K(),
              contrast: N(),
              grayscale: R(),
              hueRotate: N(),
              invert: R(),
              gap: M(),
              gradientColorStops: [e],
              gradientColorStopPositions: [X, U],
              inset: k(),
              margin: k(),
              opacity: N(),
              padding: M(),
              saturate: N(),
              scale: N(),
              sepia: R(),
              skew: N(),
              space: M(),
              translate: M(),
            },
            classGroups: {
              aspect: [{ aspect: ["auto", "square", "video", Z] }],
              container: ["container"],
              columns: [{ columns: [J] }],
              "break-after": [{ "break-after": z() }],
              "break-before": [{ "break-before": z() }],
              "break-inside": [
                {
                  "break-inside": [
                    "auto",
                    "avoid",
                    "avoid-page",
                    "avoid-column",
                  ],
                },
              ],
              "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
              box: [{ box: ["border", "content"] }],
              display: [
                "block",
                "inline-block",
                "inline",
                "flex",
                "inline-flex",
                "table",
                "inline-table",
                "table-caption",
                "table-cell",
                "table-column",
                "table-column-group",
                "table-footer-group",
                "table-header-group",
                "table-row-group",
                "table-row",
                "flow-root",
                "grid",
                "inline-grid",
                "contents",
                "list-item",
                "hidden",
              ],
              float: [{ float: ["right", "left", "none", "start", "end"] }],
              clear: [
                { clear: ["left", "right", "both", "none", "start", "end"] },
              ],
              isolation: ["isolate", "isolation-auto"],
              "object-fit": [
                { object: ["contain", "cover", "fill", "none", "scale-down"] },
              ],
              "object-position": [{ object: [...O(), Z] }],
              overflow: [{ overflow: T() }],
              "overflow-x": [{ "overflow-x": T() }],
              "overflow-y": [{ "overflow-y": T() }],
              overscroll: [{ overscroll: C() }],
              "overscroll-x": [{ "overscroll-x": C() }],
              "overscroll-y": [{ "overscroll-y": C() }],
              position: ["static", "fixed", "absolute", "relative", "sticky"],
              inset: [{ inset: [h] }],
              "inset-x": [{ "inset-x": [h] }],
              "inset-y": [{ "inset-y": [h] }],
              start: [{ start: [h] }],
              end: [{ end: [h] }],
              top: [{ top: [h] }],
              right: [{ right: [h] }],
              bottom: [{ bottom: [h] }],
              left: [{ left: [h] }],
              visibility: ["visible", "invisible", "collapse"],
              z: [{ z: ["auto", q, Z] }],
              basis: [{ basis: k() }],
              "flex-direction": [
                { flex: ["row", "row-reverse", "col", "col-reverse"] },
              ],
              "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
              flex: [{ flex: ["1", "auto", "initial", "none", Z] }],
              grow: [{ grow: R() }],
              shrink: [{ shrink: R() }],
              order: [{ order: ["first", "last", "none", q, Z] }],
              "grid-cols": [{ "grid-cols": [el] }],
              "col-start-end": [{ col: ["auto", { span: ["full", q, Z] }, Z] }],
              "col-start": [{ "col-start": D() }],
              "col-end": [{ "col-end": D() }],
              "grid-rows": [{ "grid-rows": [el] }],
              "row-start-end": [{ row: ["auto", { span: [q, Z] }, Z] }],
              "row-start": [{ "row-start": D() }],
              "row-end": [{ "row-end": D() }],
              "grid-flow": [
                {
                  "grid-flow": [
                    "row",
                    "col",
                    "dense",
                    "row-dense",
                    "col-dense",
                  ],
                },
              ],
              "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Z] }],
              "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Z] }],
              gap: [{ gap: [f] }],
              "gap-x": [{ "gap-x": [f] }],
              "gap-y": [{ "gap-y": [f] }],
              "justify-content": [{ justify: ["normal", ...L()] }],
              "justify-items": [
                { "justify-items": ["start", "end", "center", "stretch"] },
              ],
              "justify-self": [
                {
                  "justify-self": ["auto", "start", "end", "center", "stretch"],
                },
              ],
              "align-content": [{ content: ["normal", ...L(), "baseline"] }],
              "align-items": [
                { items: ["start", "end", "center", "baseline", "stretch"] },
              ],
              "align-self": [
                {
                  self: [
                    "auto",
                    "start",
                    "end",
                    "center",
                    "stretch",
                    "baseline",
                  ],
                },
              ],
              "place-content": [{ "place-content": [...L(), "baseline"] }],
              "place-items": [
                {
                  "place-items": [
                    "start",
                    "end",
                    "center",
                    "baseline",
                    "stretch",
                  ],
                },
              ],
              "place-self": [
                { "place-self": ["auto", "start", "end", "center", "stretch"] },
              ],
              p: [{ p: [b] }],
              px: [{ px: [b] }],
              py: [{ py: [b] }],
              ps: [{ ps: [b] }],
              pe: [{ pe: [b] }],
              pt: [{ pt: [b] }],
              pr: [{ pr: [b] }],
              pb: [{ pb: [b] }],
              pl: [{ pl: [b] }],
              m: [{ m: [m] }],
              mx: [{ mx: [m] }],
              my: [{ my: [m] }],
              ms: [{ ms: [m] }],
              me: [{ me: [m] }],
              mt: [{ mt: [m] }],
              mr: [{ mr: [m] }],
              mb: [{ mb: [m] }],
              ml: [{ ml: [m] }],
              "space-x": [{ "space-x": [S] }],
              "space-x-reverse": ["space-x-reverse"],
              "space-y": [{ "space-y": [S] }],
              "space-y-reverse": ["space-y-reverse"],
              w: [
                { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t] },
              ],
              "min-w": [{ "min-w": [Z, t, "min", "max", "fit"] }],
              "max-w": [
                {
                  "max-w": [
                    Z,
                    t,
                    "none",
                    "full",
                    "min",
                    "max",
                    "fit",
                    "prose",
                    { screen: [J] },
                    J,
                  ],
                },
              ],
              h: [
                { h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "min-h": [
                { "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              "max-h": [
                { "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
              ],
              size: [{ size: [Z, t, "auto", "min", "max", "fit"] }],
              "font-size": [{ text: ["base", J, U] }],
              "font-smoothing": ["antialiased", "subpixel-antialiased"],
              "font-style": ["italic", "not-italic"],
              "font-weight": [
                {
                  font: [
                    "thin",
                    "extralight",
                    "light",
                    "normal",
                    "medium",
                    "semibold",
                    "bold",
                    "extrabold",
                    "black",
                    Y,
                  ],
                },
              ],
              "font-family": [{ font: [el] }],
              "fvn-normal": ["normal-nums"],
              "fvn-ordinal": ["ordinal"],
              "fvn-slashed-zero": ["slashed-zero"],
              "fvn-figure": ["lining-nums", "oldstyle-nums"],
              "fvn-spacing": ["proportional-nums", "tabular-nums"],
              "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
              tracking: [
                {
                  tracking: [
                    "tighter",
                    "tight",
                    "normal",
                    "wide",
                    "wider",
                    "widest",
                    Z,
                  ],
                },
              ],
              "line-clamp": [{ "line-clamp": ["none", G, Y] }],
              leading: [
                {
                  leading: [
                    "none",
                    "tight",
                    "snug",
                    "normal",
                    "relaxed",
                    "loose",
                    $,
                    Z,
                  ],
                },
              ],
              "list-image": [{ "list-image": ["none", Z] }],
              "list-style-type": [{ list: ["none", "disc", "decimal", Z] }],
              "list-style-position": [{ list: ["inside", "outside"] }],
              "placeholder-color": [{ placeholder: [e] }],
              "placeholder-opacity": [{ "placeholder-opacity": [v] }],
              "text-alignment": [
                {
                  text: ["left", "center", "right", "justify", "start", "end"],
                },
              ],
              "text-color": [{ text: [e] }],
              "text-opacity": [{ "text-opacity": [v] }],
              "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline",
              ],
              "text-decoration-style": [{ decoration: [...I(), "wavy"] }],
              "text-decoration-thickness": [
                { decoration: ["auto", "from-font", $, U] },
              ],
              "underline-offset": [{ "underline-offset": ["auto", $, Z] }],
              "text-decoration-color": [{ decoration: [e] }],
              "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case",
              ],
              "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
              "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
              indent: [{ indent: M() }],
              "vertical-align": [
                {
                  align: [
                    "baseline",
                    "top",
                    "middle",
                    "bottom",
                    "text-top",
                    "text-bottom",
                    "sub",
                    "super",
                    Z,
                  ],
                },
              ],
              whitespace: [
                {
                  whitespace: [
                    "normal",
                    "nowrap",
                    "pre",
                    "pre-line",
                    "pre-wrap",
                    "break-spaces",
                  ],
                },
              ],
              break: [{ break: ["normal", "words", "all", "keep"] }],
              hyphens: [{ hyphens: ["none", "manual", "auto"] }],
              content: [{ content: ["none", Z] }],
              "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
              "bg-clip": [
                { "bg-clip": ["border", "padding", "content", "text"] },
              ],
              "bg-opacity": [{ "bg-opacity": [v] }],
              "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
              "bg-position": [{ bg: [...O(), et] }],
              "bg-repeat": [
                {
                  bg: [
                    "no-repeat",
                    { repeat: ["", "x", "y", "round", "space"] },
                  ],
                },
              ],
              "bg-size": [{ bg: ["auto", "cover", "contain", ee] }],
              "bg-image": [
                {
                  bg: [
                    "none",
                    {
                      "gradient-to": [
                        "t",
                        "tr",
                        "r",
                        "br",
                        "b",
                        "bl",
                        "l",
                        "tl",
                      ],
                    },
                    en,
                  ],
                },
              ],
              "bg-color": [{ bg: [e] }],
              "gradient-from-pos": [{ from: [g] }],
              "gradient-via-pos": [{ via: [g] }],
              "gradient-to-pos": [{ to: [g] }],
              "gradient-from": [{ from: [p] }],
              "gradient-via": [{ via: [p] }],
              "gradient-to": [{ to: [p] }],
              rounded: [{ rounded: [l] }],
              "rounded-s": [{ "rounded-s": [l] }],
              "rounded-e": [{ "rounded-e": [l] }],
              "rounded-t": [{ "rounded-t": [l] }],
              "rounded-r": [{ "rounded-r": [l] }],
              "rounded-b": [{ "rounded-b": [l] }],
              "rounded-l": [{ "rounded-l": [l] }],
              "rounded-ss": [{ "rounded-ss": [l] }],
              "rounded-se": [{ "rounded-se": [l] }],
              "rounded-ee": [{ "rounded-ee": [l] }],
              "rounded-es": [{ "rounded-es": [l] }],
              "rounded-tl": [{ "rounded-tl": [l] }],
              "rounded-tr": [{ "rounded-tr": [l] }],
              "rounded-br": [{ "rounded-br": [l] }],
              "rounded-bl": [{ "rounded-bl": [l] }],
              "border-w": [{ border: [a] }],
              "border-w-x": [{ "border-x": [a] }],
              "border-w-y": [{ "border-y": [a] }],
              "border-w-s": [{ "border-s": [a] }],
              "border-w-e": [{ "border-e": [a] }],
              "border-w-t": [{ "border-t": [a] }],
              "border-w-r": [{ "border-r": [a] }],
              "border-w-b": [{ "border-b": [a] }],
              "border-w-l": [{ "border-l": [a] }],
              "border-opacity": [{ "border-opacity": [v] }],
              "border-style": [{ border: [...I(), "hidden"] }],
              "divide-x": [{ "divide-x": [a] }],
              "divide-x-reverse": ["divide-x-reverse"],
              "divide-y": [{ "divide-y": [a] }],
              "divide-y-reverse": ["divide-y-reverse"],
              "divide-opacity": [{ "divide-opacity": [v] }],
              "divide-style": [{ divide: I() }],
              "border-color": [{ border: [o] }],
              "border-color-x": [{ "border-x": [o] }],
              "border-color-y": [{ "border-y": [o] }],
              "border-color-s": [{ "border-s": [o] }],
              "border-color-e": [{ "border-e": [o] }],
              "border-color-t": [{ "border-t": [o] }],
              "border-color-r": [{ "border-r": [o] }],
              "border-color-b": [{ "border-b": [o] }],
              "border-color-l": [{ "border-l": [o] }],
              "divide-color": [{ divide: [o] }],
              "outline-style": [{ outline: ["", ...I()] }],
              "outline-offset": [{ "outline-offset": [$, Z] }],
              "outline-w": [{ outline: [$, U] }],
              "outline-color": [{ outline: [e] }],
              "ring-w": [{ ring: K() }],
              "ring-w-inset": ["ring-inset"],
              "ring-color": [{ ring: [e] }],
              "ring-opacity": [{ "ring-opacity": [v] }],
              "ring-offset-w": [{ "ring-offset": [$, U] }],
              "ring-offset-color": [{ "ring-offset": [e] }],
              shadow: [{ shadow: ["", "inner", "none", J, eo] }],
              "shadow-color": [{ shadow: [el] }],
              opacity: [{ opacity: [v] }],
              "mix-blend": [
                { "mix-blend": [...A(), "plus-lighter", "plus-darker"] },
              ],
              "bg-blend": [{ "bg-blend": A() }],
              filter: [{ filter: ["", "none"] }],
              blur: [{ blur: [r] }],
              brightness: [{ brightness: [n] }],
              contrast: [{ contrast: [s] }],
              "drop-shadow": [{ "drop-shadow": ["", "none", J, Z] }],
              grayscale: [{ grayscale: [u] }],
              "hue-rotate": [{ "hue-rotate": [c] }],
              invert: [{ invert: [d] }],
              saturate: [{ saturate: [y] }],
              sepia: [{ sepia: [w] }],
              "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
              "backdrop-blur": [{ "backdrop-blur": [r] }],
              "backdrop-brightness": [{ "backdrop-brightness": [n] }],
              "backdrop-contrast": [{ "backdrop-contrast": [s] }],
              "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
              "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
              "backdrop-invert": [{ "backdrop-invert": [d] }],
              "backdrop-opacity": [{ "backdrop-opacity": [v] }],
              "backdrop-saturate": [{ "backdrop-saturate": [y] }],
              "backdrop-sepia": [{ "backdrop-sepia": [w] }],
              "border-collapse": [{ border: ["collapse", "separate"] }],
              "border-spacing": [{ "border-spacing": [i] }],
              "border-spacing-x": [{ "border-spacing-x": [i] }],
              "border-spacing-y": [{ "border-spacing-y": [i] }],
              "table-layout": [{ table: ["auto", "fixed"] }],
              caption: [{ caption: ["top", "bottom"] }],
              transition: [
                {
                  transition: [
                    "none",
                    "all",
                    "",
                    "colors",
                    "opacity",
                    "shadow",
                    "transform",
                    Z,
                  ],
                },
              ],
              duration: [{ duration: N() }],
              ease: [{ ease: ["linear", "in", "out", "in-out", Z] }],
              delay: [{ delay: N() }],
              animate: [
                { animate: ["none", "spin", "ping", "pulse", "bounce", Z] },
              ],
              transform: [{ transform: ["", "gpu", "none"] }],
              scale: [{ scale: [x] }],
              "scale-x": [{ "scale-x": [x] }],
              "scale-y": [{ "scale-y": [x] }],
              rotate: [{ rotate: [q, Z] }],
              "translate-x": [{ "translate-x": [P] }],
              "translate-y": [{ "translate-y": [P] }],
              "skew-x": [{ "skew-x": [E] }],
              "skew-y": [{ "skew-y": [E] }],
              "transform-origin": [
                {
                  origin: [
                    "center",
                    "top",
                    "top-right",
                    "right",
                    "bottom-right",
                    "bottom",
                    "bottom-left",
                    "left",
                    "top-left",
                    Z,
                  ],
                },
              ],
              accent: [{ accent: ["auto", e] }],
              appearance: [{ appearance: ["none", "auto"] }],
              cursor: [
                {
                  cursor: [
                    "auto",
                    "default",
                    "pointer",
                    "wait",
                    "text",
                    "move",
                    "help",
                    "not-allowed",
                    "none",
                    "context-menu",
                    "progress",
                    "cell",
                    "crosshair",
                    "vertical-text",
                    "alias",
                    "copy",
                    "no-drop",
                    "grab",
                    "grabbing",
                    "all-scroll",
                    "col-resize",
                    "row-resize",
                    "n-resize",
                    "e-resize",
                    "s-resize",
                    "w-resize",
                    "ne-resize",
                    "nw-resize",
                    "se-resize",
                    "sw-resize",
                    "ew-resize",
                    "ns-resize",
                    "nesw-resize",
                    "nwse-resize",
                    "zoom-in",
                    "zoom-out",
                    Z,
                  ],
                },
              ],
              "caret-color": [{ caret: [e] }],
              "pointer-events": [{ "pointer-events": ["none", "auto"] }],
              resize: [{ resize: ["none", "y", "x", ""] }],
              "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
              "scroll-m": [{ "scroll-m": M() }],
              "scroll-mx": [{ "scroll-mx": M() }],
              "scroll-my": [{ "scroll-my": M() }],
              "scroll-ms": [{ "scroll-ms": M() }],
              "scroll-me": [{ "scroll-me": M() }],
              "scroll-mt": [{ "scroll-mt": M() }],
              "scroll-mr": [{ "scroll-mr": M() }],
              "scroll-mb": [{ "scroll-mb": M() }],
              "scroll-ml": [{ "scroll-ml": M() }],
              "scroll-p": [{ "scroll-p": M() }],
              "scroll-px": [{ "scroll-px": M() }],
              "scroll-py": [{ "scroll-py": M() }],
              "scroll-ps": [{ "scroll-ps": M() }],
              "scroll-pe": [{ "scroll-pe": M() }],
              "scroll-pt": [{ "scroll-pt": M() }],
              "scroll-pr": [{ "scroll-pr": M() }],
              "scroll-pb": [{ "scroll-pb": M() }],
              "scroll-pl": [{ "scroll-pl": M() }],
              "snap-align": [
                { snap: ["start", "end", "center", "align-none"] },
              ],
              "snap-stop": [{ snap: ["normal", "always"] }],
              "snap-type": [{ snap: ["none", "x", "y", "both"] }],
              "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
              touch: [{ touch: ["auto", "none", "manipulation"] }],
              "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
              "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
              "touch-pz": ["touch-pinch-zoom"],
              select: [{ select: ["none", "text", "all", "auto"] }],
              "will-change": [
                {
                  "will-change": ["auto", "scroll", "contents", "transform", Z],
                },
              ],
              fill: [{ fill: [e, "none"] }],
              "stroke-w": [{ stroke: [$, U, Y] }],
              stroke: [{ stroke: [e, "none"] }],
              sr: ["sr-only", "not-sr-only"],
              "forced-color-adjust": [
                { "forced-color-adjust": ["auto", "none"] },
              ],
            },
            conflictingClassGroups: {
              overflow: ["overflow-x", "overflow-y"],
              overscroll: ["overscroll-x", "overscroll-y"],
              inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left",
              ],
              "inset-x": ["right", "left"],
              "inset-y": ["top", "bottom"],
              flex: ["basis", "grow", "shrink"],
              gap: ["gap-x", "gap-y"],
              p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
              px: ["pr", "pl"],
              py: ["pt", "pb"],
              m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
              mx: ["mr", "ml"],
              my: ["mt", "mb"],
              size: ["w", "h"],
              "font-size": ["leading"],
              "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction",
              ],
              "fvn-ordinal": ["fvn-normal"],
              "fvn-slashed-zero": ["fvn-normal"],
              "fvn-figure": ["fvn-normal"],
              "fvn-spacing": ["fvn-normal"],
              "fvn-fraction": ["fvn-normal"],
              "line-clamp": ["display", "overflow"],
              rounded: [
                "rounded-s",
                "rounded-e",
                "rounded-t",
                "rounded-r",
                "rounded-b",
                "rounded-l",
                "rounded-ss",
                "rounded-se",
                "rounded-ee",
                "rounded-es",
                "rounded-tl",
                "rounded-tr",
                "rounded-br",
                "rounded-bl",
              ],
              "rounded-s": ["rounded-ss", "rounded-es"],
              "rounded-e": ["rounded-se", "rounded-ee"],
              "rounded-t": ["rounded-tl", "rounded-tr"],
              "rounded-r": ["rounded-tr", "rounded-br"],
              "rounded-b": ["rounded-br", "rounded-bl"],
              "rounded-l": ["rounded-tl", "rounded-bl"],
              "border-spacing": ["border-spacing-x", "border-spacing-y"],
              "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l",
              ],
              "border-w-x": ["border-w-r", "border-w-l"],
              "border-w-y": ["border-w-t", "border-w-b"],
              "border-color": [
                "border-color-s",
                "border-color-e",
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l",
              ],
              "border-color-x": ["border-color-r", "border-color-l"],
              "border-color-y": ["border-color-t", "border-color-b"],
              "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml",
              ],
              "scroll-mx": ["scroll-mr", "scroll-ml"],
              "scroll-my": ["scroll-mt", "scroll-mb"],
              "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl",
              ],
              "scroll-px": ["scroll-pr", "scroll-pl"],
              "scroll-py": ["scroll-pt", "scroll-pb"],
              touch: ["touch-x", "touch-y", "touch-pz"],
              "touch-x": ["touch"],
              "touch-y": ["touch"],
              "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
          };
        },
        ef = (
          e,
          {
            cacheSize: t,
            prefix: r,
            separator: n,
            experimentalParseClassName: o,
            extend: l = {},
            override: i = {},
          }
        ) => {
          for (let l in (ep(e, "cacheSize", t),
          ep(e, "prefix", r),
          ep(e, "separator", n),
          ep(e, "experimentalParseClassName", o),
          i))
            eg(e[l], i[l]);
          for (let t in l) eh(e[t], l[t]);
          return e;
        },
        ep = (e, t, r) => {
          void 0 !== r && (e[t] = r);
        },
        eg = (e, t) => {
          if (t) for (let r in t) ep(e, r, t[r]);
        },
        eh = (e, t) => {
          if (t)
            for (let r in t) {
              let n = t[r];
              void 0 !== n && (e[r] = (e[r] || []).concat(n));
            }
        },
        em = (e, ...t) =>
          "function" == typeof e ? R(ed, e, ...t) : R(() => ef(ed(), e), ...t),
        ev = R(ed);
      var eb = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
        ey = (e) => e || void 0,
        ex = (...e) => ey(g(e).filter(Boolean).join(" ")),
        ew = null,
        eE = {},
        eS = !1,
        eP =
          (...e) =>
          (t) =>
            t.twMerge
              ? ((!ew || eS) &&
                  ((eS = !1),
                  (ew = f(eE)
                    ? ev
                    : em({
                        ...eE,
                        extend: {
                          theme: eE.theme,
                          classGroups: eE.classGroups,
                          conflictingClassGroupModifiers:
                            eE.conflictingClassGroupModifiers,
                          conflictingClassGroups: eE.conflictingClassGroups,
                          ...eE.extend,
                        },
                      }))),
                ey(ew(ex(e))))
              : ex(e),
        eC = (e, t) => {
          for (let r in t)
            e.hasOwnProperty(r) ? (e[r] = ex(e[r], t[r])) : (e[r] = t[r]);
          return e;
        },
        eT = (e, t) => {
          let {
              extend: r = null,
              slots: n = {},
              variants: o = {},
              compoundVariants: l = [],
              compoundSlots: i = [],
              defaultVariants: a = {},
            } = e,
            s = { ...eb, ...t },
            u =
              null != r && r.base
                ? ex(r.base, null == e ? void 0 : e.base)
                : null == e
                ? void 0
                : e.base,
            c =
              null != r && r.variants && !f(r.variants) ? m(o, r.variants) : o,
            g =
              null != r && r.defaultVariants && !f(r.defaultVariants)
                ? { ...r.defaultVariants, ...a }
                : a;
          f(s.twMergeConfig) ||
            p(s.twMergeConfig, eE) ||
            ((eS = !0), (eE = s.twMergeConfig));
          let b = f(null == r ? void 0 : r.slots),
            y = f(n)
              ? {}
              : {
                  base: ex(
                    null == e ? void 0 : e.base,
                    b && (null == r ? void 0 : r.base)
                  ),
                  ...n,
                },
            x = b
              ? y
              : eC(
                  { ...(null == r ? void 0 : r.slots) },
                  f(y) ? { base: null == e ? void 0 : e.base } : y
                ),
            w = f(null == r ? void 0 : r.compoundVariants)
              ? l
              : h(null == r ? void 0 : r.compoundVariants, l),
            E = (e) => {
              if (f(c) && f(n) && b)
                return eP(
                  u,
                  null == e ? void 0 : e.class,
                  null == e ? void 0 : e.className
                )(s);
              if (w && !Array.isArray(w))
                throw TypeError(
                  `The "compoundVariants" prop must be an array. Received: ${typeof w}`
                );
              if (i && !Array.isArray(i))
                throw TypeError(
                  `The "compoundSlots" prop must be an array. Received: ${typeof i}`
                );
              let t = (e, t, r = [], n) => {
                  let o = r;
                  if ("string" == typeof t)
                    o = o.concat(
                      v(t)
                        .split(" ")
                        .map((t) => `${e}:${t}`)
                    );
                  else if (Array.isArray(t))
                    o = o.concat(t.reduce((t, r) => t.concat(`${e}:${r}`), []));
                  else if ("object" == typeof t && "string" == typeof n) {
                    for (let r in t)
                      if (t.hasOwnProperty(r) && r === n) {
                        let l = t[r];
                        if (l && "string" == typeof l) {
                          let t = v(l);
                          o[n]
                            ? (o[n] = o[n].concat(
                                t.split(" ").map((t) => `${e}:${t}`)
                              ))
                            : (o[n] = t.split(" ").map((t) => `${e}:${t}`));
                        } else
                          Array.isArray(l) &&
                            l.length > 0 &&
                            (o[n] = l.reduce(
                              (t, r) => t.concat(`${e}:${r}`),
                              []
                            ));
                      }
                  }
                  return o;
                },
                r = (r, n = c, o = null, l = null) => {
                  var i;
                  let a = n[r];
                  if (!a || f(a)) return null;
                  let u =
                    null != (i = null == l ? void 0 : l[r])
                      ? i
                      : null == e
                      ? void 0
                      : e[r];
                  if (null === u) return null;
                  let p = d(u),
                    h =
                      (Array.isArray(s.responsiveVariants) &&
                        s.responsiveVariants.length > 0) ||
                      !0 === s.responsiveVariants,
                    m = null == g ? void 0 : g[r],
                    v = [];
                  if ("object" == typeof p && h)
                    for (let [e, r] of Object.entries(p)) {
                      let n = a[r];
                      if ("initial" === e) {
                        m = r;
                        continue;
                      }
                      (Array.isArray(s.responsiveVariants) &&
                        !s.responsiveVariants.includes(e)) ||
                        (v = t(e, n, v, o));
                    }
                  let b =
                    a[
                      (null != p && "object" != typeof p ? p : d(m)) || "false"
                    ];
                  return "object" == typeof v && "string" == typeof o && v[o]
                    ? eC(v, b)
                    : v.length > 0
                    ? (v.push(b), "base" === o ? v.join(" ") : v)
                    : b;
                },
                o = (e, t) => {
                  if (!c || "object" != typeof c) return null;
                  let n = [];
                  for (let o in c) {
                    let l = r(o, c, e, t),
                      i = "base" === e && "string" == typeof l ? l : l && l[e];
                    i && (n[n.length] = i);
                  }
                  return n;
                },
                l = {};
              for (let t in e) void 0 !== e[t] && (l[t] = e[t]);
              let a = (t, r) => {
                  var n;
                  let o =
                    "object" == typeof (null == e ? void 0 : e[t])
                      ? { [t]: null == (n = e[t]) ? void 0 : n.initial }
                      : {};
                  return { ...g, ...l, ...o, ...r };
                },
                p = (e = [], t) => {
                  let r = [];
                  for (let { class: n, className: o, ...l } of e) {
                    let e = !0;
                    for (let [r, n] of Object.entries(l)) {
                      let o = a(r, t)[r];
                      if (Array.isArray(n)) {
                        if (!n.includes(o)) {
                          e = !1;
                          break;
                        }
                      } else {
                        let t = (e) => null == e || !1 === e;
                        if (t(n) && t(o)) continue;
                        if (o !== n) {
                          e = !1;
                          break;
                        }
                      }
                    }
                    e && (n && r.push(n), o && r.push(o));
                  }
                  return r;
                },
                h = (e) => {
                  let t = p(w, e);
                  if (!Array.isArray(t)) return t;
                  let r = {};
                  for (let e of t)
                    if (
                      ("string" == typeof e && (r.base = eP(r.base, e)(s)),
                      "object" == typeof e)
                    )
                      for (let [t, n] of Object.entries(e))
                        r[t] = eP(r[t], n)(s);
                  return r;
                },
                m = (e) => {
                  if (i.length < 1) return null;
                  let t = {};
                  for (let {
                    slots: r = [],
                    class: n,
                    className: o,
                    ...l
                  } of i) {
                    if (!f(l)) {
                      let t = !0;
                      for (let r of Object.keys(l)) {
                        let n = a(r, e)[r];
                        if (
                          void 0 === n ||
                          (Array.isArray(l[r]) ? !l[r].includes(n) : l[r] !== n)
                        ) {
                          t = !1;
                          break;
                        }
                      }
                      if (!t) continue;
                    }
                    for (let e of r) (t[e] = t[e] || []), t[e].push([n, o]);
                  }
                  return t;
                };
              if (!f(n) || !b) {
                let e = {};
                if ("object" == typeof x && !f(x))
                  for (let t of Object.keys(x))
                    e[t] = (e) => {
                      var r, n;
                      return eP(
                        x[t],
                        o(t, e),
                        (null != (r = h(e)) ? r : [])[t],
                        (null != (n = m(e)) ? n : [])[t],
                        null == e ? void 0 : e.class,
                        null == e ? void 0 : e.className
                      )(s);
                    };
                return e;
              }
              return eP(
                u,
                c ? Object.keys(c).map((e) => r(e, c)) : null,
                p(w),
                null == e ? void 0 : e.class,
                null == e ? void 0 : e.className
              )(s);
            };
          return (
            (E.variantKeys = (() => {
              if (!(!c || "object" != typeof c)) return Object.keys(c);
            })()),
            (E.extend = r),
            (E.base = u),
            (E.slots = x),
            (E.variants = c),
            (E.defaultVariants = g),
            (E.compoundSlots = i),
            (E.compoundVariants = w),
            E
          );
        },
        ek = (e, t) => {
          var r, n, o;
          return eT(e, {
            ...t,
            twMerge: null == (r = null == t ? void 0 : t.twMerge) || r,
            twMergeConfig: {
              ...(null == t ? void 0 : t.twMergeConfig),
              theme: {
                ...(null == (n = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : n.theme),
                ...c.theme,
              },
              classGroups: {
                ...(null == (o = null == t ? void 0 : t.twMergeConfig)
                  ? void 0
                  : o.classGroups),
                ...c.classGroups,
              },
            },
          });
        },
        eM = [
          "outline-none",
          "data-[focus-visible=true]:z-10",
          "data-[focus-visible=true]:outline-2",
          "data-[focus-visible=true]:outline-focus",
          "data-[focus-visible=true]:outline-offset-2",
        ],
        eK = ek({
          slots: {
            base: ["group inline-flex flex-col relative"],
            label: [
              "block",
              "absolute",
              "z-10",
              "origin-top-left",
              "flex-shrink-0",
              "rtl:origin-top-right",
              "subpixel-antialiased",
              "text-small",
              "text-foreground-500",
              "pointer-events-none",
            ],
            mainWrapper: "w-full hidden flex-col",
            trigger:
              "relative px-3 gap-3 w-full inline-flex flex-row items-center shadow-sm outline-none tap-highlight-transparent",
            innerWrapper:
              "inline-flex h-fit w-[calc(100%_-_theme(spacing.6))] min-h-4 items-center gap-1.5 box-border",
            selectorIcon: "absolute end-3 w-4 h-4",
            spinner: "absolute end-3",
            value: [
              "text-foreground-500",
              "font-normal",
              "w-full",
              "text-start",
            ],
            listboxWrapper: "scroll-py-6 w-full",
            listbox: "",
            popoverContent: "w-full p-1 overflow-hidden",
            helperWrapper:
              "p-1 flex relative flex-col gap-1.5 group-data-[has-helper=true]:flex",
            description: "text-tiny text-foreground-400",
            errorMessage: "text-tiny text-danger",
          },
          variants: {
            variant: {
              flat: {
                trigger: [
                  "bg-default-100",
                  "data-[hover=true]:bg-default-200",
                  "group-data-[focus=true]:bg-default-200",
                ],
              },
              faded: {
                trigger: [
                  "bg-default-100",
                  "border-medium",
                  "border-default-200",
                  "data-[hover=true]:border-default-400 data-[focus=true]:border-default-400 data-[open=true]:border-default-400",
                ],
                value: "group-data-[has-value=true]:text-default-foreground",
              },
              bordered: {
                trigger: [
                  "border-medium",
                  "border-default-200",
                  "data-[hover=true]:border-default-400",
                  "data-[open=true]:border-default-foreground",
                  "data-[focus=true]:border-default-foreground",
                ],
                value: "group-data-[has-value=true]:text-default-foreground",
              },
              underlined: {
                trigger: [
                  "!px-1",
                  "!pb-0",
                  "!gap-0",
                  "relative",
                  "box-border",
                  "border-b-medium",
                  "shadow-[0_1px_0px_0_rgba(0,0,0,0.05)]",
                  "border-default-200",
                  "!rounded-none",
                  "hover:border-default-300",
                  "after:content-['']",
                  "after:w-0",
                  "after:origin-center",
                  "after:bg-default-foreground",
                  "after:absolute",
                  "after:left-1/2",
                  "after:-translate-x-1/2",
                  "after:-bottom-[2px]",
                  "after:h-[2px]",
                  "data-[open=true]:after:w-full",
                  "data-[focus=true]:after:w-full",
                ],
                value: "group-data-[has-value=true]:text-default-foreground",
              },
            },
            color: {
              default: {},
              primary: { selectorIcon: "text-primary" },
              secondary: { selectorIcon: "text-secondary" },
              success: { selectorIcon: "text-success" },
              warning: { selectorIcon: "text-warning" },
              danger: { selectorIcon: "text-danger" },
            },
            size: {
              sm: {
                label: "text-tiny",
                trigger: "h-8 min-h-8 px-2 rounded-small",
                value: "text-small",
              },
              md: {
                trigger: "h-10 min-h-10 rounded-medium",
                value: "text-small",
              },
              lg: {
                trigger: "h-12 min-h-12 rounded-large",
                value: "text-medium",
              },
            },
            radius: {
              none: { trigger: "rounded-none" },
              sm: { trigger: "rounded-small" },
              md: { trigger: "rounded-medium" },
              lg: { trigger: "rounded-large" },
              full: { trigger: "rounded-full" },
            },
            labelPlacement: {
              outside: { base: "flex flex-col" },
              "outside-left": {
                base: "flex-row items-center flex-nowrap data-[has-helper=true]:items-start",
                label: "relative pe-2 text-foreground",
              },
              inside: {
                label: "text-tiny cursor-pointer",
                trigger: "flex-col items-start justify-center gap-0",
              },
            },
            fullWidth: {
              true: { base: "w-full" },
              false: { base: "min-w-40" },
            },
            isDisabled: {
              true: {
                base: "opacity-disabled pointer-events-none",
                trigger: "pointer-events-none",
              },
            },
            isInvalid: {
              true: {
                label: "!text-danger",
                value: "!text-danger",
                selectorIcon: "text-danger",
              },
            },
            isRequired: {
              true: {
                label: "after:content-['*'] after:text-danger after:ms-0.5",
              },
            },
            isMultiline: {
              true: { label: "relative", trigger: "!h-auto" },
              false: { value: "truncate" },
            },
            disableAnimation: {
              true: {
                trigger: "after:transition-none",
                base: "transition-none",
                label: "transition-none",
                selectorIcon: "transition-none",
              },
              false: {
                base: "transition-background motion-reduce:transition-none !duration-150",
                label: [
                  "will-change-auto",
                  "origin-top-left",
                  "rtl:origin-top-right",
                  "!duration-200",
                  "!ease-out",
                  "transition-[transform,color,left,opacity]",
                  "motion-reduce:transition-none",
                ],
                selectorIcon:
                  "transition-transform duration-150 ease motion-reduce:transition-none",
              },
            },
            disableSelectorIconRotation: {
              true: {},
              false: { selectorIcon: "data-[open=true]:rotate-180" },
            },
          },
          defaultVariants: {
            variant: "flat",
            color: "default",
            size: "md",
            fullWidth: !0,
            isDisabled: !1,
            isMultiline: !1,
            disableSelectorIconRotation: !1,
          },
          compoundVariants: [
            {
              variant: "flat",
              color: "default",
              class: {
                value: "group-data-[has-value=true]:text-default-foreground",
                trigger: ["bg-default-100", "data-[hover=true]:bg-default-200"],
              },
            },
            {
              variant: "flat",
              color: "primary",
              class: {
                trigger: [
                  "bg-primary-100",
                  "text-primary",
                  "data-[hover=true]:bg-primary-50",
                  "group-data-[focus=true]:bg-primary-50",
                ],
                value: "text-primary",
                label: "text-primary",
              },
            },
            {
              variant: "flat",
              color: "secondary",
              class: {
                trigger: [
                  "bg-secondary-100",
                  "text-secondary",
                  "data-[hover=true]:bg-secondary-50",
                  "group-data-[focus=true]:bg-secondary-50",
                ],
                value: "text-secondary",
                label: "text-secondary",
              },
            },
            {
              variant: "flat",
              color: "success",
              class: {
                trigger: [
                  "bg-success-100",
                  "text-success-600",
                  "dark:text-success",
                  "data-[hover=true]:bg-success-50",
                  "group-data-[focus=true]:bg-success-50",
                ],
                value: "text-success-600 dark:text-success",
                label: "text-success-600 dark:text-success",
              },
            },
            {
              variant: "flat",
              color: "warning",
              class: {
                trigger: [
                  "bg-warning-100",
                  "text-warning-600",
                  "dark:text-warning",
                  "data-[hover=true]:bg-warning-50",
                  "group-data-[focus=true]:bg-warning-50",
                ],
                value: "text-warning-600 dark:text-warning",
                label: "text-warning-600 dark:text-warning",
              },
            },
            {
              variant: "flat",
              color: "danger",
              class: {
                trigger: [
                  "bg-danger-100",
                  "text-danger",
                  "dark:text-danger-500",
                  "data-[hover=true]:bg-danger-50",
                  "group-data-[focus=true]:bg-danger-50",
                ],
                value: "text-danger dark:text-danger-500",
                label: "text-danger dark:text-danger-500",
              },
            },
            {
              variant: "faded",
              color: "primary",
              class: {
                trigger:
                  "data-[hover=true]:border-primary data-[focus=true]:border-primary data-[open=true]:border-primary",
                label: "text-primary",
              },
            },
            {
              variant: "faded",
              color: "secondary",
              class: {
                trigger:
                  "data-[hover=true]:border-secondary data-[focus=true]:border-secondary data-[open=true]:border-secondary",
                label: "text-secondary",
              },
            },
            {
              variant: "faded",
              color: "success",
              class: {
                trigger:
                  "data-[hover=true]:border-success data-[focus=true]:border-success data-[open=true]:border-success",
                label: "text-success",
              },
            },
            {
              variant: "faded",
              color: "warning",
              class: {
                trigger:
                  "data-[hover=true]:border-warning data-[focus=true]:border-warning data-[open=true]:border-warning",
                label: "text-warning",
              },
            },
            {
              variant: "faded",
              color: "danger",
              class: {
                trigger:
                  "data-[hover=true]:border-danger data-[focus=true]:border-danger data-[open=true]:border-danger",
                label: "text-danger",
              },
            },
            {
              variant: "underlined",
              color: "default",
              class: { value: "group-data-[has-value=true]:text-foreground" },
            },
            {
              variant: "underlined",
              color: "primary",
              class: { trigger: "after:bg-primary", label: "text-primary" },
            },
            {
              variant: "underlined",
              color: "secondary",
              class: { trigger: "after:bg-secondary", label: "text-secondary" },
            },
            {
              variant: "underlined",
              color: "success",
              class: { trigger: "after:bg-success", label: "text-success" },
            },
            {
              variant: "underlined",
              color: "warning",
              class: { trigger: "after:bg-warning", label: "text-warning" },
            },
            {
              variant: "underlined",
              color: "danger",
              class: { trigger: "after:bg-danger", label: "text-danger" },
            },
            {
              variant: "bordered",
              color: "primary",
              class: {
                trigger: [
                  "data-[open=true]:border-primary",
                  "data-[focus=true]:border-primary",
                ],
                label: "text-primary",
              },
            },
            {
              variant: "bordered",
              color: "secondary",
              class: {
                trigger: [
                  "data-[open=true]:border-secondary",
                  "data-[focus=true]:border-secondary",
                ],
                label: "text-secondary",
              },
            },
            {
              variant: "bordered",
              color: "success",
              class: {
                trigger: [
                  "data-[open=true]:border-success",
                  "data-[focus=true]:border-success",
                ],
                label: "text-success",
              },
            },
            {
              variant: "bordered",
              color: "warning",
              class: {
                trigger: [
                  "data-[open=true]:border-warning",
                  "data-[focus=true]:border-warning",
                ],
                label: "text-warning",
              },
            },
            {
              variant: "bordered",
              color: "danger",
              class: {
                trigger: [
                  "data-[open=true]:border-danger",
                  "data-[focus=true]:border-danger",
                ],
                label: "text-danger",
              },
            },
            {
              labelPlacement: "inside",
              color: "default",
              class: { label: "group-data-[filled=true]:text-default-600" },
            },
            {
              labelPlacement: "outside",
              color: "default",
              class: { label: "group-data-[filled=true]:text-foreground" },
            },
            { radius: "full", size: ["sm"], class: { trigger: "px-3" } },
            { radius: "full", size: "md", class: { trigger: "px-4" } },
            { radius: "full", size: "lg", class: { trigger: "px-5" } },
            {
              disableAnimation: !1,
              variant: ["faded", "bordered"],
              class: {
                trigger: "transition-colors motion-reduce:transition-none",
              },
            },
            {
              disableAnimation: !1,
              variant: "underlined",
              class: {
                trigger:
                  "after:transition-width motion-reduce:after:transition-none",
              },
            },
            { variant: ["flat", "faded"], class: { trigger: [...eM] } },
            {
              isInvalid: !0,
              variant: "flat",
              class: {
                trigger: [
                  "bg-danger-50",
                  "data-[hover=true]:bg-danger-100",
                  "group-data-[focus=true]:bg-danger-50",
                ],
              },
            },
            {
              isInvalid: !0,
              variant: "bordered",
              class: {
                trigger: "!border-danger group-data-[focus=true]:border-danger",
              },
            },
            {
              isInvalid: !0,
              variant: "underlined",
              class: { trigger: "after:bg-danger" },
            },
            {
              labelPlacement: "inside",
              size: "sm",
              class: { trigger: "h-12 min-h-12 py-1.5 px-3" },
            },
            {
              labelPlacement: "inside",
              size: "md",
              class: { trigger: "h-14 min-h-14 py-2" },
            },
            {
              labelPlacement: "inside",
              size: "lg",
              class: {
                label: "text-medium",
                trigger: "h-16 min-h-16 py-2.5 gap-0",
              },
            },
            {
              labelPlacement: "outside",
              isMultiline: !1,
              class: {
                base: "group relative justify-end",
                label: [
                  "pb-0",
                  "z-20",
                  "top-1/2",
                  "-translate-y-1/2",
                  "group-data-[filled=true]:start-0",
                ],
              },
            },
            {
              labelPlacement: ["inside"],
              class: { label: "group-data-[filled=true]:scale-85" },
            },
            {
              labelPlacement: "inside",
              size: ["sm", "md"],
              class: { label: "text-small" },
            },
            {
              labelPlacement: "inside",
              isMultiline: !1,
              size: "sm",
              class: {
                label: [
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px)]",
                ],
                innerWrapper: "group-data-[has-label=true]:pt-4",
              },
            },
            {
              labelPlacement: "inside",
              isMultiline: !1,
              size: "md",
              class: {
                label: [
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px)]",
                ],
                innerWrapper: "group-data-[has-label=true]:pt-4",
              },
            },
            {
              labelPlacement: "inside",
              isMultiline: !1,
              size: "lg",
              class: {
                label: [
                  "text-medium",
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px)]",
                ],
                innerWrapper: "group-data-[has-label=true]:pt-5",
              },
            },
            {
              labelPlacement: "inside",
              variant: ["faded", "bordered"],
              isMultiline: !1,
              size: "sm",
              class: {
                label: [
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_8px_-_theme(borderWidth.medium))]",
                ],
              },
            },
            {
              labelPlacement: "inside",
              variant: ["faded", "bordered"],
              isMultiline: !1,
              size: "md",
              class: {
                label: [
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_6px_-_theme(borderWidth.medium))]",
                ],
              },
            },
            {
              labelPlacement: "inside",
              variant: ["faded", "bordered"],
              isMultiline: !1,
              size: "lg",
              class: {
                label: [
                  "text-medium",
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_8px_-_theme(borderWidth.medium))]",
                ],
              },
            },
            {
              labelPlacement: "inside",
              variant: "underlined",
              isMultiline: !1,
              size: "sm",
              class: {
                label: [
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.tiny)/2_-_5px)]",
                ],
              },
            },
            {
              labelPlacement: "inside",
              variant: "underlined",
              isMultiline: !1,
              size: "md",
              class: {
                label: [
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_3.5px)]",
                ],
              },
            },
            {
              labelPlacement: "inside",
              variant: "underlined",
              isMultiline: !1,
              size: "lg",
              class: {
                label: [
                  "text-medium",
                  "group-data-[filled=true]:-translate-y-[calc(50%_+_theme(fontSize.small)/2_-_4px)]",
                ],
              },
            },
            {
              labelPlacement: "outside",
              size: "sm",
              isMultiline: !1,
              class: {
                label: [
                  "start-2",
                  "text-tiny",
                  "group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.tiny)/2_+_16px)]",
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_8px)]",
              },
            },
            {
              labelPlacement: "outside",
              isMultiline: !1,
              size: "md",
              class: {
                label: [
                  "start-3",
                  "text-small",
                  "group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]",
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_10px)]",
              },
            },
            {
              labelPlacement: "outside",
              isMultiline: !1,
              size: "lg",
              class: {
                label: [
                  "start-3",
                  "text-medium",
                  "group-data-[filled=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_24px)]",
                ],
                base: "data-[has-label=true]:mt-[calc(theme(fontSize.small)_+_12px)]",
              },
            },
            {
              labelPlacement: "outside-left",
              size: "sm",
              class: { label: "group-data-[has-helper=true]:pt-2" },
            },
            {
              labelPlacement: "outside-left",
              size: "md",
              class: { label: "group-data-[has-helper=true]:pt-3" },
            },
            {
              labelPlacement: "outside-left",
              size: "lg",
              class: { label: "group-data-[has-helper=true]:pt-4" },
            },
            {
              labelPlacement: "outside",
              isMultiline: !0,
              class: { label: "pb-1.5" },
            },
            {
              labelPlacement: ["inside", "outside"],
              class: {
                label: [
                  "pe-2",
                  "max-w-full",
                  "text-ellipsis",
                  "overflow-hidden",
                ],
              },
            },
          ],
        });
      function eD(e) {
        let t = (0, i.useRef)(null);
        return (0, i.useImperativeHandle)(e, () => t.current), t;
      }
      "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      var eO = new Set([
          "id",
          "type",
          "style",
          "title",
          "role",
          "tabIndex",
          "htmlFor",
          "width",
          "height",
          "abbr",
          "accept",
          "acceptCharset",
          "accessKey",
          "action",
          "allowFullScreen",
          "allowTransparency",
          "alt",
          "async",
          "autoComplete",
          "autoFocus",
          "autoPlay",
          "cellPadding",
          "cellSpacing",
          "challenge",
          "charset",
          "checked",
          "cite",
          "class",
          "className",
          "cols",
          "colSpan",
          "command",
          "content",
          "contentEditable",
          "contextMenu",
          "controls",
          "coords",
          "crossOrigin",
          "data",
          "dateTime",
          "default",
          "defer",
          "dir",
          "disabled",
          "download",
          "draggable",
          "dropzone",
          "encType",
          "enterKeyHint",
          "for",
          "form",
          "formAction",
          "formEncType",
          "formMethod",
          "formNoValidate",
          "formTarget",
          "frameBorder",
          "headers",
          "hidden",
          "high",
          "href",
          "hrefLang",
          "httpEquiv",
          "icon",
          "inputMode",
          "isMap",
          "itemId",
          "itemProp",
          "itemRef",
          "itemScope",
          "itemType",
          "kind",
          "label",
          "lang",
          "list",
          "loop",
          "manifest",
          "max",
          "maxLength",
          "media",
          "mediaGroup",
          "method",
          "min",
          "minLength",
          "multiple",
          "muted",
          "name",
          "noValidate",
          "open",
          "optimum",
          "pattern",
          "ping",
          "placeholder",
          "poster",
          "preload",
          "radioGroup",
          "referrerPolicy",
          "readOnly",
          "rel",
          "required",
          "rows",
          "rowSpan",
          "sandbox",
          "scope",
          "scoped",
          "scrolling",
          "seamless",
          "selected",
          "shape",
          "size",
          "sizes",
          "slot",
          "sortable",
          "span",
          "spellCheck",
          "src",
          "srcDoc",
          "srcSet",
          "start",
          "step",
          "target",
          "translate",
          "typeMustMatch",
          "useMap",
          "value",
          "wmode",
          "wrap",
        ]),
        eI = new Set([
          "onCopy",
          "onCut",
          "onPaste",
          "onLoad",
          "onError",
          "onWheel",
          "onScroll",
          "onCompositionEnd",
          "onCompositionStart",
          "onCompositionUpdate",
          "onKeyDown",
          "onKeyPress",
          "onKeyUp",
          "onFocus",
          "onBlur",
          "onChange",
          "onInput",
          "onSubmit",
          "onClick",
          "onContextMenu",
          "onDoubleClick",
          "onDrag",
          "onDragEnd",
          "onDragEnter",
          "onDragExit",
          "onDragLeave",
          "onDragOver",
          "onDragStart",
          "onDrop",
          "onMouseDown",
          "onMouseEnter",
          "onMouseLeave",
          "onMouseMove",
          "onMouseOut",
          "onMouseOver",
          "onMouseUp",
          "onPointerDown",
          "onPointerEnter",
          "onPointerLeave",
          "onPointerUp",
          "onSelect",
          "onTouchCancel",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "onAnimationStart",
          "onAnimationEnd",
          "onAnimationIteration",
          "onTransitionEnd",
        ]),
        eA = /^(data-.*)$/,
        eL = /^(aria-.*)$/,
        eR = /^(on[A-Z].*)$/;
      function ej(e, t = {}) {
        let {
            labelable: r = !0,
            enabled: n = !0,
            propNames: o,
            omitPropNames: l,
            omitEventNames: i,
            omitDataProps: a,
            omitEventProps: s,
          } = t,
          u = {};
        if (!n) return e;
        for (let t in e)
          !(
            (null == l ? void 0 : l.has(t)) ||
            ((null == i ? void 0 : i.has(t)) && eR.test(t)) ||
            (eR.test(t) && !eI.has(t)) ||
            (a && eA.test(t)) ||
            (s && eR.test(t))
          ) &&
            ((Object.prototype.hasOwnProperty.call(e, t) &&
              (eO.has(t) ||
                (r && eL.test(t)) ||
                (null == o ? void 0 : o.has(t)) ||
                eA.test(t))) ||
              eR.test(t)) &&
            (u[t] = e[t]);
        return u;
      }
      function ez(e) {
        return Array.isArray(e);
      }
      function eN(e) {
        let t = typeof e;
        return null != e && ("object" === t || "function" === t) && !ez(e);
      }
      var eF = (e) => (e ? "true" : void 0);
      function eB(...e) {
        for (var t, r, n = 0, o = ""; n < e.length; )
          (t = e[n++]) &&
            (r = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t))
                  for (r = 0; r < t.length; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(t)) &&
            (o && (o += " "), (o += r));
        return o;
      }
      var e_ = (e) =>
        e ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : "";
      function eW(e) {
        if (!e || "object" != typeof e) return "";
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "";
        }
      }
      var eV = {};
      function eH(e, t, ...r) {
        let n = t ? ` [${t}]` : " ",
          o = `[Hero UI]${n}: ${e}`;
        "undefined" != typeof console && (eV[o] || (eV[o] = !0));
      }
      var e$ = r(7737);
      function eU(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t);
        };
      }
      let eG = "undefined" != typeof document ? i.useLayoutEffect : () => {};
      function eY(e) {
        let t = (0, i.useRef)(null);
        return (
          eG(() => {
            t.current = e;
          }, [e]),
          (0, i.useCallback)((...e) => {
            let r = t.current;
            return null == r ? void 0 : r(...e);
          }, [])
        );
      }
      var eq = r(4798);
      let eX = !!(
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
        ),
        eZ = new Map();
      function eJ(e) {
        let [t, r] = (0, i.useState)(e),
          n = (0, i.useRef)(null),
          o = (0, eq.Cc)(t),
          l = (0, i.useCallback)((e) => {
            n.current = e;
          }, []);
        return (
          eX &&
            (eZ.has(o) && !eZ.get(o).includes(l)
              ? eZ.set(o, [...eZ.get(o), l])
              : eZ.set(o, [l])),
          eG(
            () => () => {
              eZ.delete(o);
            },
            [o]
          ),
          (0, i.useEffect)(() => {
            let e = n.current;
            e && ((n.current = null), r(e));
          }),
          o
        );
      }
      function eQ(e = []) {
        let t = eJ(),
          [r, n] = (function (e) {
            let [t, r] = (0, i.useState)(e),
              n = (0, i.useRef)(null),
              o = eY(() => {
                if (!n.current) return;
                let e = n.current.next();
                if (e.done) {
                  n.current = null;
                  return;
                }
                t === e.value ? o() : r(e.value);
              });
            eG(() => {
              n.current && o();
            });
            let l = eY((e) => {
              (n.current = e(t)), o();
            });
            return [t, l];
          })(t),
          o = (0, i.useCallback)(() => {
            n(function* () {
              yield t, yield document.getElementById(t) ? t : void 0;
            });
          }, [t, n]);
        return eG(o, [t, o, ...e]), r;
      }
      let e0 = function () {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var l = t.length;
                  for (r = 0; r < l; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      };
      function e1(...e) {
        let t = { ...e[0] };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r &&
            "function" == typeof o &&
            "o" === e[0] &&
            "n" === e[1] &&
            e.charCodeAt(2) >= 65 &&
            90 >= e.charCodeAt(2)
              ? (t[e] = eU(r, o))
              : ("className" === e || "UNSAFE_className" === e) &&
                "string" == typeof r &&
                "string" == typeof o
              ? (t[e] = e0(r, o))
              : "id" === e && r && o
              ? (t.id = (function (e, t) {
                  if (e === t) return e;
                  let r = eZ.get(e);
                  if (r) return r.forEach((e) => e(t)), t;
                  let n = eZ.get(t);
                  return n ? (n.forEach((t) => t(e)), e) : t;
                })(r, o))
              : (t[e] = void 0 !== o ? o : r);
          }
        }
        return t;
      }
      let e4 = new Set(["id"]),
        e3 = new Set([
          "aria-label",
          "aria-labelledby",
          "aria-describedby",
          "aria-details",
        ]),
        e5 = new Set([
          "href",
          "hrefLang",
          "target",
          "rel",
          "download",
          "ping",
          "referrerPolicy",
        ]),
        e2 = /^(data-.*)$/;
      function e6(e, t = {}) {
        let { labelable: r, isLink: n, propNames: o } = t,
          l = {};
        for (let t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            (e4.has(t) ||
              (r && e3.has(t)) ||
              (n && e5.has(t)) ||
              (null == o ? void 0 : o.has(t)) ||
              e2.test(t)) &&
            (l[t] = e[t]);
        return l;
      }
      let e8 = (e) => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) &&
            void 0 !== t
            ? t
            : document;
        },
        e7 = (e) =>
          e && "window" in e && e.window === e
            ? e
            : e8(e).defaultView || window,
        e9 = new Map(),
        te = new Set();
      function tt() {
        if ("undefined" == typeof window) return;
        function e(e) {
          return "propertyName" in e;
        }
        let t = (r) => {
          if (!e(r) || !r.target) return;
          let n = e9.get(r.target);
          if (
            n &&
            (n.delete(r.propertyName),
            0 === n.size &&
              (r.target.removeEventListener("transitioncancel", t),
              e9.delete(r.target)),
            0 === e9.size)
          ) {
            for (let e of te) e();
            te.clear();
          }
        };
        document.body.addEventListener("transitionrun", (r) => {
          if (!e(r) || !r.target) return;
          let n = e9.get(r.target);
          n ||
            ((n = new Set()),
            e9.set(r.target, n),
            r.target.addEventListener("transitioncancel", t, { once: !0 })),
            n.add(r.propertyName);
        }),
          document.body.addEventListener("transitionend", t);
      }
      function tr(e) {
        requestAnimationFrame(() => {
          0 === e9.size ? e() : te.add(e);
        });
      }
      "undefined" != typeof document &&
        ("loading" !== document.readyState
          ? tt()
          : document.addEventListener("DOMContentLoaded", tt));
      var tn = r(11);
      function to(e) {
        return (
          (0 === e.mozInputSource && !!e.isTrusted) ||
          ((0, e$.m0)() && e.pointerType
            ? "click" === e.type && 1 === e.buttons
            : 0 === e.detail && !e.pointerType)
        );
      }
      let tl = null,
        ti = new Set(),
        ta = new Map(),
        ts = !1,
        tu = !1,
        tc = { Tab: !0, Escape: !0 };
      function td(e, t) {
        for (let r of ti) r(e, t);
      }
      function tf(e) {
        (ts = !0),
          e.metaKey ||
            (!(0, e$.cX)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((tl = "keyboard"), td("keyboard", e));
      }
      function tp(e) {
        (tl = "pointer"),
          ("mousedown" === e.type || "pointerdown" === e.type) &&
            ((ts = !0), td("pointer", e));
      }
      function tg(e) {
        to(e) && ((ts = !0), (tl = "virtual"));
      }
      function th(e) {
        e.target !== window &&
          e.target !== document &&
          (ts || tu || ((tl = "virtual"), td("virtual", e)),
          (ts = !1),
          (tu = !1));
      }
      function tm() {
        (ts = !1), (tu = !0);
      }
      function tv(e) {
        if ("undefined" == typeof window || ta.get(e7(e))) return;
        let t = e7(e),
          r = e8(e),
          n = t.HTMLElement.prototype.focus;
        (t.HTMLElement.prototype.focus = function () {
          (ts = !0), n.apply(this, arguments);
        }),
          r.addEventListener("keydown", tf, !0),
          r.addEventListener("keyup", tf, !0),
          r.addEventListener("click", tg, !0),
          t.addEventListener("focus", th, !0),
          t.addEventListener("blur", tm, !1),
          "undefined" != typeof PointerEvent
            ? (r.addEventListener("pointerdown", tp, !0),
              r.addEventListener("pointermove", tp, !0),
              r.addEventListener("pointerup", tp, !0))
            : (r.addEventListener("mousedown", tp, !0),
              r.addEventListener("mousemove", tp, !0),
              r.addEventListener("mouseup", tp, !0)),
          t.addEventListener(
            "beforeunload",
            () => {
              tb(e);
            },
            { once: !0 }
          ),
          ta.set(t, { focus: n });
      }
      let tb = (e, t) => {
        let r = e7(e),
          n = e8(e);
        t && n.removeEventListener("DOMContentLoaded", t),
          ta.has(r) &&
            ((r.HTMLElement.prototype.focus = ta.get(r).focus),
            n.removeEventListener("keydown", tf, !0),
            n.removeEventListener("keyup", tf, !0),
            n.removeEventListener("click", tg, !0),
            r.removeEventListener("focus", th, !0),
            r.removeEventListener("blur", tm, !1),
            "undefined" != typeof PointerEvent
              ? (n.removeEventListener("pointerdown", tp, !0),
                n.removeEventListener("pointermove", tp, !0),
                n.removeEventListener("pointerup", tp, !0))
              : (n.removeEventListener("mousedown", tp, !0),
                n.removeEventListener("mousemove", tp, !0),
                n.removeEventListener("mouseup", tp, !0)),
            ta.delete(r));
      };
      function ty() {
        return "pointer" !== tl;
      }
      function tx(e) {
        (tl = e), td(e, null);
      }
      "undefined" != typeof document &&
        (function (e) {
          let t;
          let r = e8(void 0);
          "loading" !== r.readyState
            ? tv(void 0)
            : ((t = () => {
                tv(void 0);
              }),
              r.addEventListener("DOMContentLoaded", t)),
            () => tb(e, t);
        })();
      let tw = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function tE(e) {
        let t = e8(e);
        if ("virtual" === tl) {
          let r = t.activeElement;
          tr(() => {
            t.activeElement === r && e.isConnected && (0, tn.e)(e);
          });
        } else (0, tn.e)(e);
      }
      function tS(e, t) {
        eG(() => {
          if (e && e.ref && t)
            return (
              (e.ref.current = t.current),
              () => {
                e.ref && (e.ref.current = null);
              }
            );
        });
      }
      class tP {
        isDefaultPrevented() {
          return this.nativeEvent.defaultPrevented;
        }
        preventDefault() {
          (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
        }
        stopPropagation() {
          this.nativeEvent.stopPropagation(),
            (this.isPropagationStopped = () => !0);
        }
        isPropagationStopped() {
          return !1;
        }
        persist() {}
        constructor(e, t) {
          (this.nativeEvent = t),
            (this.target = t.target),
            (this.currentTarget = t.currentTarget),
            (this.relatedTarget = t.relatedTarget),
            (this.bubbles = t.bubbles),
            (this.cancelable = t.cancelable),
            (this.defaultPrevented = t.defaultPrevented),
            (this.eventPhase = t.eventPhase),
            (this.isTrusted = t.isTrusted),
            (this.timeStamp = t.timeStamp),
            (this.type = e);
        }
      }
      function tC(e) {
        let t = (0, i.useRef)({ isFocused: !1, observer: null });
        eG(() => {
          let e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
          };
        }, []);
        let r = eY((t) => {
          null == e || e(t);
        });
        return (0, i.useCallback)(
          (e) => {
            if (
              e.target instanceof HTMLButtonElement ||
              e.target instanceof HTMLInputElement ||
              e.target instanceof HTMLTextAreaElement ||
              e.target instanceof HTMLSelectElement
            ) {
              t.current.isFocused = !0;
              let n = e.target;
              n.addEventListener(
                "focusout",
                (e) => {
                  (t.current.isFocused = !1),
                    n.disabled && r(new tP("blur", e)),
                    t.current.observer &&
                      (t.current.observer.disconnect(),
                      (t.current.observer = null));
                },
                { once: !0 }
              ),
                (t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && n.disabled) {
                    var e;
                    null === (e = t.current.observer) ||
                      void 0 === e ||
                      e.disconnect();
                    let r =
                      n === document.activeElement
                        ? null
                        : document.activeElement;
                    n.dispatchEvent(
                      new FocusEvent("blur", { relatedTarget: r })
                    ),
                      n.dispatchEvent(
                        new FocusEvent("focusout", {
                          bubbles: !0,
                          relatedTarget: r,
                        })
                      );
                  }
                })),
                t.current.observer.observe(n, {
                  attributes: !0,
                  attributeFilter: ["disabled"],
                });
            }
          },
          [r]
        );
      }
      function tT(e) {
        let { isDisabled: t, onFocus: r, onBlur: n, onFocusChange: o } = e,
          l = (0, i.useCallback)(
            (e) => {
              if (e.target === e.currentTarget)
                return n && n(e), o && o(!1), !0;
            },
            [n, o]
          ),
          a = tC(l),
          s = (0, i.useCallback)(
            (e) => {
              let t = e8(e.target);
              e.target === e.currentTarget &&
                t.activeElement === e.target &&
                (r && r(e), o && o(!0), a(e));
            },
            [o, r, a]
          );
        return {
          focusProps: {
            onFocus: !t && (r || o || n) ? s : void 0,
            onBlur: !t && (n || o) ? l : void 0,
          },
        };
      }
      function tk(e) {
        if (!e) return;
        let t = !0;
        return (r) => {
          e({
            ...r,
            preventDefault() {
              r.preventDefault();
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              t
                ? console.error(
                    "stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior."
                  )
                : (t = !0);
            },
            continuePropagation() {
              t = !1;
            },
            isPropagationStopped: () => t,
          }),
            t && r.stopPropagation();
        };
      }
      let tM = i.createContext(null),
        tK = "default",
        tD = "",
        tO = new WeakMap();
      function tI(e) {
        if ((0, e$.un)()) {
          if ("default" === tK) {
            let t = e8(e);
            (tD = t.documentElement.style.webkitUserSelect),
              (t.documentElement.style.webkitUserSelect = "none");
          }
          tK = "disabled";
        } else
          (e instanceof HTMLElement || e instanceof SVGElement) &&
            (tO.set(e, e.style.userSelect), (e.style.userSelect = "none"));
      }
      function tA(e) {
        if ((0, e$.un)())
          "disabled" === tK &&
            ((tK = "restoring"),
            setTimeout(() => {
              tr(() => {
                if ("restoring" === tK) {
                  let t = e8(e);
                  "none" === t.documentElement.style.webkitUserSelect &&
                    (t.documentElement.style.webkitUserSelect = tD || ""),
                    (tD = ""),
                    (tK = "default");
                }
              });
            }, 300));
        else if (
          (e instanceof HTMLElement || e instanceof SVGElement) &&
          e &&
          tO.has(e)
        ) {
          let t = tO.get(e);
          "none" === e.style.userSelect && (e.style.userSelect = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            tO.delete(e);
        }
      }
      let tL = i.createContext({ register: () => {} });
      function tR(e, t, r) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + r + " private field on non-instance"
          );
        return t.get(e);
      }
      function tj(e, t, r) {
        var n = tR(e, t, "set");
        return (
          !(function (e, t, r) {
            if (t.set) t.set.call(e, r);
            else {
              if (!t.writable)
                throw TypeError("attempted to set read only private field");
              t.value = r;
            }
          })(e, n, r),
          r
        );
      }
      function tz() {
        let e = (0, i.useRef)(new Map()),
          t = (0, i.useCallback)((t, r, n, o) => {
            let l = (null == o ? void 0 : o.once)
              ? (...t) => {
                  e.current.delete(n), n(...t);
                }
              : n;
            e.current.set(n, { type: r, eventTarget: t, fn: l, options: o }),
              t.addEventListener(r, l, o);
          }, []),
          r = (0, i.useCallback)((t, r, n, o) => {
            var l;
            let i =
              (null === (l = e.current.get(n)) || void 0 === l
                ? void 0
                : l.fn) || n;
            t.removeEventListener(r, i, o), e.current.delete(n);
          }, []),
          n = (0, i.useCallback)(() => {
            e.current.forEach((e, t) => {
              r(e.eventTarget, e.type, t, e.options);
            });
          }, [r]);
        return (
          (0, i.useEffect)(() => n, [n]),
          {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: n,
          }
        );
      }
      tL.displayName = "PressResponderContext";
      var tN = r(6368),
        tF = new WeakMap();
      class tB {
        continuePropagation() {
          tj(this, tF, !1);
        }
        get shouldStopPropagation() {
          var e;
          return (e = tR(this, tF, "get")).get ? e.get.call(this) : e.value;
        }
        constructor(e, t, r, n) {
          var o;
          !(function (e, t, r) {
            (function (e, t) {
              if (t.has(e))
                throw TypeError(
                  "Cannot initialize the same private elements twice on an object"
                );
            })(e, t),
              t.set(e, r);
          })(this, tF, { writable: !0, value: void 0 }),
            tj(this, tF, !0);
          let l =
              null !== (o = null == n ? void 0 : n.target) && void 0 !== o
                ? o
                : r.currentTarget,
            i = null == l ? void 0 : l.getBoundingClientRect(),
            a,
            s = 0,
            u,
            c = null;
          null != r.clientX &&
            null != r.clientY &&
            ((u = r.clientX), (c = r.clientY)),
            i &&
              (null != u && null != c
                ? ((a = u - i.left), (s = c - i.top))
                : ((a = i.width / 2), (s = i.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = a),
            (this.y = s);
        }
      }
      let t_ = Symbol("linkClicked");
      function tW(e) {
        let {
            onPress: t,
            onPressChange: r,
            onPressStart: n,
            onPressEnd: o,
            onPressUp: l,
            isDisabled: a,
            isPressed: s,
            preventFocusOnPress: u,
            shouldCancelOnPointerExit: c,
            allowTextSelectionOnPress: d,
            ref: f,
            ...p
          } = (function (e) {
            let t = (0, i.useContext)(tL);
            if (t) {
              let { register: r, ...n } = t;
              (e = e1(n, e)), r();
            }
            return tS(t, e.ref), e;
          })(e),
          [g, h] = (0, i.useState)(!1),
          m = (0, i.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            ignoreClickAfterPress: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
          }),
          { addGlobalListener: v, removeAllGlobalListeners: b } = tz(),
          y = eY((e, t) => {
            let o = m.current;
            if (a || o.didFirePressStart) return !1;
            let l = !0;
            if (((o.isTriggeringEvent = !0), n)) {
              let r = new tB("pressstart", t, e);
              n(r), (l = r.shouldStopPropagation);
            }
            return (
              r && r(!0),
              (o.isTriggeringEvent = !1),
              (o.didFirePressStart = !0),
              h(!0),
              l
            );
          }),
          x = eY((e, n, l = !0) => {
            let i = m.current;
            if (!i.didFirePressStart) return !1;
            (i.ignoreClickAfterPress = !0),
              (i.didFirePressStart = !1),
              (i.isTriggeringEvent = !0);
            let s = !0;
            if (o) {
              let t = new tB("pressend", n, e);
              o(t), (s = t.shouldStopPropagation);
            }
            if ((r && r(!1), h(!1), t && l && !a)) {
              let r = new tB("press", n, e);
              t(r), s && (s = r.shouldStopPropagation);
            }
            return (i.isTriggeringEvent = !1), s;
          }),
          w = eY((e, t) => {
            let r = m.current;
            if (a) return !1;
            if (l) {
              r.isTriggeringEvent = !0;
              let n = new tB("pressup", t, e);
              return l(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
            }
            return !0;
          }),
          E = eY((e) => {
            let t = m.current;
            t.isPressed &&
              t.target &&
              (t.isOverTarget &&
                null != t.pointerType &&
                x(tG(t.target, e), t.pointerType, !1),
              (t.isPressed = !1),
              (t.isOverTarget = !1),
              (t.activePointerId = null),
              (t.pointerType = null),
              b(),
              d || tA(t.target));
          }),
          S = eY((e) => {
            c && E(e);
          }),
          P = (0, i.useMemo)(() => {
            let e = m.current,
              t = {
                onKeyDown(t) {
                  if (
                    tH(t.nativeEvent, t.currentTarget) &&
                    t.currentTarget.contains(t.target)
                  ) {
                    var n;
                    tZ(t.target, t.key) && t.preventDefault();
                    let o = !0;
                    if (!e.isPressed && !t.repeat) {
                      (e.target = t.currentTarget),
                        (e.isPressed = !0),
                        (o = y(t, "keyboard"));
                      let n = t.currentTarget;
                      v(
                        e8(t.currentTarget),
                        "keyup",
                        eU((t) => {
                          tH(t, n) &&
                            !t.repeat &&
                            n.contains(t.target) &&
                            e.target &&
                            w(tG(e.target, t), "keyboard");
                        }, r),
                        !0
                      );
                    }
                    o && t.stopPropagation(),
                      t.metaKey &&
                        (0, e$.cX)() &&
                        (null === (n = e.metaKeyEvents) ||
                          void 0 === n ||
                          n.set(t.key, t.nativeEvent));
                  } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                },
                onClick(t) {
                  if (
                    (!t || t.currentTarget.contains(t.target)) &&
                    t &&
                    0 === t.button &&
                    !e.isTriggeringEvent &&
                    !tN.Fe.isOpening
                  ) {
                    let r = !0;
                    if (
                      (a && t.preventDefault(),
                      !e.ignoreClickAfterPress &&
                        !e.ignoreEmulatedMouseEvents &&
                        !e.isPressed &&
                        ("virtual" === e.pointerType || to(t.nativeEvent)))
                    ) {
                      a || u || (0, tn.e)(t.currentTarget);
                      let e = y(t, "virtual"),
                        n = w(t, "virtual"),
                        o = x(t, "virtual");
                      r = e && n && o;
                    }
                    (e.ignoreEmulatedMouseEvents = !1),
                      (e.ignoreClickAfterPress = !1),
                      r && t.stopPropagation();
                  }
                },
              },
              r = (t) => {
                var r, n, o;
                if (e.isPressed && e.target && tH(t, e.target)) {
                  tZ(t.target, t.key) && t.preventDefault();
                  let r = t.target;
                  x(tG(e.target, t), "keyboard", e.target.contains(r)),
                    b(),
                    "Enter" !== t.key &&
                      tV(e.target) &&
                      e.target.contains(r) &&
                      !t[t_] &&
                      ((t[t_] = !0), (0, tN.Fe)(e.target, t, !1)),
                    (e.isPressed = !1),
                    null === (n = e.metaKeyEvents) ||
                      void 0 === n ||
                      n.delete(t.key);
                } else if (
                  "Meta" === t.key &&
                  (null === (r = e.metaKeyEvents) || void 0 === r
                    ? void 0
                    : r.size)
                ) {
                  let t = e.metaKeyEvents;
                  for (let r of ((e.metaKeyEvents = void 0), t.values()))
                    null === (o = e.target) ||
                      void 0 === o ||
                      o.dispatchEvent(new KeyboardEvent("keyup", r));
                }
              };
            if ("undefined" != typeof PointerEvent) {
              (t.onPointerDown = (t) => {
                var n;
                if (0 !== t.button || !t.currentTarget.contains(t.target))
                  return;
                if (
                  ((n = t.nativeEvent),
                  (!(0, e$.m0)() && 0 === n.width && 0 === n.height) ||
                    (1 === n.width &&
                      1 === n.height &&
                      0 === n.pressure &&
                      0 === n.detail &&
                      "mouse" === n.pointerType))
                ) {
                  e.pointerType = "virtual";
                  return;
                }
                tq(t.currentTarget) && t.preventDefault(),
                  (e.pointerType = t.pointerType);
                let l = !0;
                if (!e.isPressed) {
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.activePointerId = t.pointerId),
                    (e.target = t.currentTarget),
                    a || u || (0, tn.e)(t.currentTarget),
                    d || tI(e.target),
                    (l = y(t, e.pointerType));
                  let n = t.target;
                  "releasePointerCapture" in n &&
                    n.releasePointerCapture(t.pointerId),
                    v(e8(t.currentTarget), "pointerup", r, !1),
                    v(e8(t.currentTarget), "pointercancel", o, !1);
                }
                l && t.stopPropagation();
              }),
                (t.onMouseDown = (e) => {
                  e.currentTarget.contains(e.target) &&
                    0 === e.button &&
                    (tq(e.currentTarget) && e.preventDefault(),
                    e.stopPropagation());
                }),
                (t.onPointerUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    "virtual" !== e.pointerType &&
                    0 === t.button &&
                    w(t, e.pointerType || t.pointerType);
                }),
                (t.onPointerEnter = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.target &&
                    !e.isOverTarget &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), y(tG(e.target, t), e.pointerType));
                }),
                (t.onPointerLeave = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.target &&
                    e.isOverTarget &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1),
                    x(tG(e.target, t), e.pointerType, !1),
                    S(t));
                });
              let r = (t) => {
                  t.pointerId === e.activePointerId &&
                    e.isPressed &&
                    0 === t.button &&
                    e.target &&
                    (e.target.contains(t.target) && null != e.pointerType
                      ? x(tG(e.target, t), e.pointerType)
                      : e.isOverTarget &&
                        null != e.pointerType &&
                        x(tG(e.target, t), e.pointerType, !1),
                    (e.isPressed = !1),
                    (e.isOverTarget = !1),
                    (e.activePointerId = null),
                    (e.pointerType = null),
                    b(),
                    d || tA(e.target),
                    "ontouchend" in e.target &&
                      "mouse" !== t.pointerType &&
                      v(e.target, "touchend", n, { once: !0 }));
                },
                n = (e) => {
                  tX(e.currentTarget) && e.preventDefault();
                },
                o = (e) => {
                  E(e);
                };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && E(e);
              };
            } else {
              (t.onMouseDown = (t) => {
                if (0 === t.button && t.currentTarget.contains(t.target)) {
                  if (
                    (tq(t.currentTarget) && t.preventDefault(),
                    e.ignoreEmulatedMouseEvents)
                  ) {
                    t.stopPropagation();
                    return;
                  }
                  (e.isPressed = !0),
                    (e.isOverTarget = !0),
                    (e.target = t.currentTarget),
                    (e.pointerType = to(t.nativeEvent) ? "virtual" : "mouse"),
                    a || u || (0, tn.e)(t.currentTarget),
                    y(t, e.pointerType) && t.stopPropagation(),
                    v(e8(t.currentTarget), "mouseup", r, !1);
                }
              }),
                (t.onMouseEnter = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !0), (r = y(t, e.pointerType))),
                    r && t.stopPropagation();
                }),
                (t.onMouseLeave = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  let r = !0;
                  e.isPressed &&
                    !e.ignoreEmulatedMouseEvents &&
                    null != e.pointerType &&
                    ((e.isOverTarget = !1),
                    (r = x(t, e.pointerType, !1)),
                    S(t)),
                    r && t.stopPropagation();
                }),
                (t.onMouseUp = (t) => {
                  t.currentTarget.contains(t.target) &&
                    !e.ignoreEmulatedMouseEvents &&
                    0 === t.button &&
                    w(t, e.pointerType || "mouse");
                });
              let r = (t) => {
                if (0 === t.button) {
                  if (((e.isPressed = !1), b(), e.ignoreEmulatedMouseEvents)) {
                    e.ignoreEmulatedMouseEvents = !1;
                    return;
                  }
                  e.target && tY(t, e.target) && null != e.pointerType
                    ? x(tG(e.target, t), e.pointerType)
                    : e.target &&
                      e.isOverTarget &&
                      null != e.pointerType &&
                      x(tG(e.target, t), e.pointerType, !1),
                    (e.isOverTarget = !1);
                }
              };
              (t.onTouchStart = (t) => {
                if (!t.currentTarget.contains(t.target)) return;
                let r = (function (e) {
                  let { targetTouches: t } = e;
                  return t.length > 0 ? t[0] : null;
                })(t.nativeEvent);
                r &&
                  ((e.activePointerId = r.identifier),
                  (e.ignoreEmulatedMouseEvents = !0),
                  (e.isOverTarget = !0),
                  (e.isPressed = !0),
                  (e.target = t.currentTarget),
                  (e.pointerType = "touch"),
                  a || u || (0, tn.e)(t.currentTarget),
                  d || tI(e.target),
                  y(tU(e.target, t), e.pointerType) && t.stopPropagation(),
                  v(e7(t.currentTarget), "scroll", n, !0));
              }),
                (t.onTouchMove = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let r = t$(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && tY(r, t.currentTarget)
                    ? e.isOverTarget ||
                      null == e.pointerType ||
                      ((e.isOverTarget = !0),
                      (n = y(tU(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      ((e.isOverTarget = !1),
                      (n = x(tU(e.target, t), e.pointerType, !1)),
                      S(tU(e.target, t))),
                    n && t.stopPropagation();
                }),
                (t.onTouchEnd = (t) => {
                  if (!t.currentTarget.contains(t.target)) return;
                  if (!e.isPressed) {
                    t.stopPropagation();
                    return;
                  }
                  let r = t$(t.nativeEvent, e.activePointerId),
                    n = !0;
                  r && tY(r, t.currentTarget) && null != e.pointerType
                    ? (w(tU(e.target, t), e.pointerType),
                      (n = x(tU(e.target, t), e.pointerType)))
                    : e.isOverTarget &&
                      null != e.pointerType &&
                      (n = x(tU(e.target, t), e.pointerType, !1)),
                    n && t.stopPropagation(),
                    (e.isPressed = !1),
                    (e.activePointerId = null),
                    (e.isOverTarget = !1),
                    (e.ignoreEmulatedMouseEvents = !0),
                    e.target && !d && tA(e.target),
                    b();
                }),
                (t.onTouchCancel = (t) => {
                  t.currentTarget.contains(t.target) &&
                    (t.stopPropagation(), e.isPressed && E(tU(e.target, t)));
                });
              let n = (t) => {
                e.isPressed &&
                  t.target.contains(e.target) &&
                  E({
                    currentTarget: e.target,
                    shiftKey: !1,
                    ctrlKey: !1,
                    metaKey: !1,
                    altKey: !1,
                  });
              };
              t.onDragStart = (e) => {
                e.currentTarget.contains(e.target) && E(e);
              };
            }
            return t;
          }, [v, a, u, b, d, E, S, x, y, w]);
        return (
          (0, i.useEffect)(
            () => () => {
              var e;
              d ||
                tA(
                  null !== (e = m.current.target) && void 0 !== e ? e : void 0
                );
            },
            [d]
          ),
          { isPressed: s || g, pressProps: e1(p, P) }
        );
      }
      function tV(e) {
        return "A" === e.tagName && e.hasAttribute("href");
      }
      function tH(e, t) {
        let { key: r, code: n } = e,
          o = t.getAttribute("role");
        return (
          ("Enter" === r || " " === r || "Spacebar" === r || "Space" === n) &&
          !(
            (t instanceof e7(t).HTMLInputElement && !tQ(t, r)) ||
            t instanceof e7(t).HTMLTextAreaElement ||
            t.isContentEditable
          ) &&
          !(("link" === o || (!o && tV(t))) && "Enter" !== r)
        );
      }
      function t$(e, t) {
        let r = e.changedTouches;
        for (let e = 0; e < r.length; e++) {
          let n = r[e];
          if (n.identifier === t) return n;
        }
        return null;
      }
      function tU(e, t) {
        let r = 0,
          n = 0;
        return (
          t.targetTouches &&
            1 === t.targetTouches.length &&
            ((r = t.targetTouches[0].clientX),
            (n = t.targetTouches[0].clientY)),
          {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey,
            clientX: r,
            clientY: n,
          }
        );
      }
      function tG(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n,
        };
      }
      function tY(e, t) {
        let r,
          n,
          o = t.getBoundingClientRect(),
          l =
            ((r = 0),
            (n = 0),
            void 0 !== e.width
              ? (r = e.width / 2)
              : void 0 !== e.radiusX && (r = e.radiusX),
            void 0 !== e.height
              ? (n = e.height / 2)
              : void 0 !== e.radiusY && (n = e.radiusY),
            {
              top: e.clientY - n,
              right: e.clientX + r,
              bottom: e.clientY + n,
              left: e.clientX - r,
            });
        return (
          !(o.left > l.right) &&
          !(l.left > o.right) &&
          !(o.top > l.bottom) &&
          !(l.top > o.bottom)
        );
      }
      function tq(e) {
        return !(e instanceof HTMLElement) || !e.hasAttribute("draggable");
      }
      function tX(e) {
        return (
          !(e instanceof HTMLInputElement) &&
          (e instanceof HTMLButtonElement
            ? "submit" !== e.type && "reset" !== e.type
            : !tV(e))
        );
      }
      function tZ(e, t) {
        return e instanceof HTMLInputElement ? !tQ(e, t) : tX(e);
      }
      let tJ = new Set([
        "checkbox",
        "radio",
        "range",
        "color",
        "file",
        "image",
        "button",
        "submit",
        "reset",
      ]);
      function tQ(e, t) {
        return "checkbox" === e.type || "radio" === e.type
          ? " " === t
          : tJ.has(e.type);
      }
      function t0(e) {
        let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o,
          } = e,
          l = (0, i.useRef)({ isFocusWithin: !1 }),
          a = (0, i.useCallback)(
            (e) => {
              l.current.isFocusWithin &&
                !e.currentTarget.contains(e.relatedTarget) &&
                ((l.current.isFocusWithin = !1), r && r(e), o && o(!1));
            },
            [r, o, l]
          ),
          s = tC(a),
          u = (0, i.useCallback)(
            (e) => {
              l.current.isFocusWithin ||
                document.activeElement !== e.target ||
                (n && n(e), o && o(!0), (l.current.isFocusWithin = !0), s(e));
            },
            [n, o, s]
          );
        return t
          ? { focusWithinProps: { onFocus: void 0, onBlur: void 0 } }
          : { focusWithinProps: { onFocus: u, onBlur: a } };
      }
      function t1(e = {}) {
        var t, r, n;
        let { autoFocus: o = !1, isTextInput: l, within: a } = e,
          s = (0, i.useRef)({ isFocused: !1, isFocusVisible: o || ty() }),
          [u, c] = (0, i.useState)(!1),
          [d, f] = (0, i.useState)(
            () => s.current.isFocused && s.current.isFocusVisible
          ),
          p = (0, i.useCallback)(
            () => f(s.current.isFocused && s.current.isFocusVisible),
            []
          ),
          g = (0, i.useCallback)(
            (e) => {
              (s.current.isFocused = e), c(e), p();
            },
            [p]
          );
        (t = (e) => {
          (s.current.isFocusVisible = e), p();
        }),
          (r = []),
          (n = { isTextInput: l }),
          tv(),
          (0, i.useEffect)(() => {
            let e = (e, r) => {
              (function (e, t, r) {
                var n;
                let o =
                    "undefined" != typeof window
                      ? e7(null == r ? void 0 : r.target).HTMLInputElement
                      : HTMLInputElement,
                  l =
                    "undefined" != typeof window
                      ? e7(null == r ? void 0 : r.target).HTMLTextAreaElement
                      : HTMLTextAreaElement,
                  i =
                    "undefined" != typeof window
                      ? e7(null == r ? void 0 : r.target).HTMLElement
                      : HTMLElement,
                  a =
                    "undefined" != typeof window
                      ? e7(null == r ? void 0 : r.target).KeyboardEvent
                      : KeyboardEvent;
                return !(
                  (e =
                    e ||
                    ((null == r ? void 0 : r.target) instanceof o &&
                      !tw.has(
                        null == r
                          ? void 0
                          : null === (n = r.target) || void 0 === n
                          ? void 0
                          : n.type
                      )) ||
                    (null == r ? void 0 : r.target) instanceof l ||
                    ((null == r ? void 0 : r.target) instanceof i &&
                      (null == r ? void 0 : r.target.isContentEditable))) &&
                  "keyboard" === t &&
                  r instanceof a &&
                  !tc[r.key]
                );
              })(!!(null == n ? void 0 : n.isTextInput), e, r) && t(ty());
            };
            return (
              ti.add(e),
              () => {
                ti.delete(e);
              }
            );
          }, r);
        let { focusProps: h } = tT({ isDisabled: a, onFocusChange: g }),
          { focusWithinProps: m } = t0({
            isDisabled: !a,
            onFocusWithinChange: g,
          });
        return { isFocused: u, isFocusVisible: d, focusProps: a ? m : h };
      }
      let t4 = !1,
        t3 = 0;
      function t5() {
        (t4 = !0),
          setTimeout(() => {
            t4 = !1;
          }, 50);
      }
      function t2(e) {
        "touch" === e.pointerType && t5();
      }
      function t6() {
        if ("undefined" != typeof document)
          return (
            "undefined" != typeof PointerEvent
              ? document.addEventListener("pointerup", t2)
              : document.addEventListener("touchend", t5),
            t3++,
            () => {
              --t3 > 0 ||
                ("undefined" != typeof PointerEvent
                  ? document.removeEventListener("pointerup", t2)
                  : document.removeEventListener("touchend", t5));
            }
          );
      }
      function t8(e) {
        let {
            onHoverStart: t,
            onHoverChange: r,
            onHoverEnd: n,
            isDisabled: o,
          } = e,
          [l, a] = (0, i.useState)(!1),
          s = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null,
          }).current;
        (0, i.useEffect)(t6, []);
        let { hoverProps: u, triggerHoverEnd: c } = (0, i.useMemo)(() => {
          let e = (e, n) => {
              if (
                ((s.pointerType = n),
                o ||
                  "touch" === n ||
                  s.isHovered ||
                  !e.currentTarget.contains(e.target))
              )
                return;
              s.isHovered = !0;
              let l = e.currentTarget;
              (s.target = l),
                t && t({ type: "hoverstart", target: l, pointerType: n }),
                r && r(!0),
                a(!0);
            },
            l = (e, t) => {
              if (
                ((s.pointerType = ""),
                (s.target = null),
                "touch" === t || !s.isHovered)
              )
                return;
              s.isHovered = !1;
              let o = e.currentTarget;
              n && n({ type: "hoverend", target: o, pointerType: t }),
                r && r(!1),
                a(!1);
            },
            i = {};
          return (
            "undefined" != typeof PointerEvent
              ? ((i.onPointerEnter = (t) => {
                  (t4 && "mouse" === t.pointerType) || e(t, t.pointerType);
                }),
                (i.onPointerLeave = (e) => {
                  !o &&
                    e.currentTarget.contains(e.target) &&
                    l(e, e.pointerType);
                }))
              : ((i.onTouchStart = () => {
                  s.ignoreEmulatedMouseEvents = !0;
                }),
                (i.onMouseEnter = (t) => {
                  s.ignoreEmulatedMouseEvents || t4 || e(t, "mouse"),
                    (s.ignoreEmulatedMouseEvents = !1);
                }),
                (i.onMouseLeave = (e) => {
                  !o && e.currentTarget.contains(e.target) && l(e, "mouse");
                })),
            { hoverProps: i, triggerHoverEnd: l }
          );
        }, [t, r, n, o, s]);
        return (
          (0, i.useEffect)(() => {
            o && c({ currentTarget: s.target }, s.pointerType);
          }, [o]),
          { hoverProps: u, isHovered: l }
        );
      }
      class t7 {
        *[Symbol.iterator]() {
          yield* this.iterable;
        }
        get size() {
          return this.keyMap.size;
        }
        getKeys() {
          return this.keyMap.keys();
        }
        getKeyBefore(e) {
          var t;
          let r = this.keyMap.get(e);
          return r && null !== (t = r.prevKey) && void 0 !== t ? t : null;
        }
        getKeyAfter(e) {
          var t;
          let r = this.keyMap.get(e);
          return r && null !== (t = r.nextKey) && void 0 !== t ? t : null;
        }
        getFirstKey() {
          return this.firstKey;
        }
        getLastKey() {
          return this.lastKey;
        }
        getItem(e) {
          var t;
          return null !== (t = this.keyMap.get(e)) && void 0 !== t ? t : null;
        }
        at(e) {
          let t = [...this.getKeys()];
          return this.getItem(t[e]);
        }
        getChildren(e) {
          let t = this.keyMap.get(e);
          return (null == t ? void 0 : t.childNodes) || [];
        }
        constructor(e) {
          var t;
          (this.keyMap = new Map()),
            (this.firstKey = null),
            (this.lastKey = null),
            (this.iterable = e);
          let r = (e) => {
            if (
              (this.keyMap.set(e.key, e), e.childNodes && "section" === e.type)
            )
              for (let t of e.childNodes) r(t);
          };
          for (let t of e) r(t);
          let n = null,
            o = 0;
          for (let [e, t] of this.keyMap)
            n
              ? ((n.nextKey = e), (t.prevKey = n.key))
              : ((this.firstKey = e), (t.prevKey = void 0)),
              "item" === t.type && (t.index = o++),
              ((n = t).nextKey = void 0);
          this.lastKey =
            null !== (t = null == n ? void 0 : n.key) && void 0 !== t
              ? t
              : null;
        }
      }
      class t9 extends Set {
        constructor(e, t, r) {
          super(e),
            e instanceof t9
              ? ((this.anchorKey = null != t ? t : e.anchorKey),
                (this.currentKey = null != r ? r : e.currentKey))
              : ((this.anchorKey = null != t ? t : null),
                (this.currentKey = null != r ? r : null));
        }
      }
      function re(e, t, r) {
        let [n, o] = (0, i.useState)(e || t),
          l = (0, i.useRef)(void 0 !== e),
          a = void 0 !== e;
        (0, i.useEffect)(() => {
          let e = l.current;
          e !== a &&
            console.warn(
              `WARN: A component changed from ${
                e ? "controlled" : "uncontrolled"
              } to ${a ? "controlled" : "uncontrolled"}.`
            ),
            (l.current = a);
        }, [a]);
        let s = a ? e : n,
          u = (0, i.useCallback)(
            (e, ...t) => {
              let n = (e, ...t) => {
                r && !Object.is(s, e) && r(e, ...t), a || (s = e);
              };
              "function" == typeof e
                ? (console.warn(
                    "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"
                  ),
                  o((r, ...o) => {
                    let l = e(a ? s : r, ...o);
                    return (n(l, ...t), a) ? r : l;
                  }))
                : (a || o(e), n(e, ...t));
            },
            [a, s, r]
          );
        return [s, u];
      }
      function rt(e, t) {
        return e ? ("all" === e ? "all" : new t9(e)) : t;
      }
      function rr(e, t) {
        return "function" == typeof t.getChildren
          ? t.getChildren(e.key)
          : e.childNodes;
      }
      function rn(e, t, r) {
        if (t.parentKey === r.parentKey) return t.index - r.index;
        let n = [...ro(e, t), t],
          o = [...ro(e, r), r],
          l = n.slice(0, o.length).findIndex((e, t) => e !== o[t]);
        return -1 !== l
          ? ((t = n[l]), (r = o[l]), t.index - r.index)
          : n.findIndex((e) => e === r) >= 0
          ? 1
          : (o.findIndex((e) => e === t), -1);
      }
      function ro(e, t) {
        let r = [],
          n = t;
        for (; (null == n ? void 0 : n.parentKey) != null; )
          (n = e.getItem(n.parentKey)) && r.unshift(n);
        return r;
      }
      class rl {
        get selectionMode() {
          return this.state.selectionMode;
        }
        get disallowEmptySelection() {
          return this.state.disallowEmptySelection;
        }
        get selectionBehavior() {
          return this.state.selectionBehavior;
        }
        setSelectionBehavior(e) {
          this.state.setSelectionBehavior(e);
        }
        get isFocused() {
          return this.state.isFocused;
        }
        setFocused(e) {
          this.state.setFocused(e);
        }
        get focusedKey() {
          return this.state.focusedKey;
        }
        get childFocusStrategy() {
          return this.state.childFocusStrategy;
        }
        setFocusedKey(e, t) {
          (null == e || this.collection.getItem(e)) &&
            this.state.setFocusedKey(e, t);
        }
        get selectedKeys() {
          return "all" === this.state.selectedKeys
            ? new Set(this.getSelectAllKeys())
            : this.state.selectedKeys;
        }
        get rawSelection() {
          return this.state.selectedKeys;
        }
        isSelected(e) {
          if ("none" === this.state.selectionMode) return !1;
          let t = this.getKey(e);
          return (
            null != t &&
            ("all" === this.state.selectedKeys
              ? this.canSelectItem(t)
              : this.state.selectedKeys.has(t))
          );
        }
        get isEmpty() {
          return (
            "all" !== this.state.selectedKeys &&
            0 === this.state.selectedKeys.size
          );
        }
        get isSelectAll() {
          if (this.isEmpty) return !1;
          if ("all" === this.state.selectedKeys) return !0;
          if (null != this._isSelectAll) return this._isSelectAll;
          let e = this.getSelectAllKeys(),
            t = this.state.selectedKeys;
          return (
            (this._isSelectAll = e.every((e) => t.has(e))), this._isSelectAll
          );
        }
        get firstSelectedKey() {
          var e;
          let t = null;
          for (let e of this.state.selectedKeys) {
            let r = this.collection.getItem(e);
            (!t || (r && 0 > rn(this.collection, r, t))) && (t = r);
          }
          return null !== (e = null == t ? void 0 : t.key) && void 0 !== e
            ? e
            : null;
        }
        get lastSelectedKey() {
          var e;
          let t = null;
          for (let e of this.state.selectedKeys) {
            let r = this.collection.getItem(e);
            (!t || (r && rn(this.collection, r, t) > 0)) && (t = r);
          }
          return null !== (e = null == t ? void 0 : t.key) && void 0 !== e
            ? e
            : null;
        }
        get disabledKeys() {
          return this.state.disabledKeys;
        }
        get disabledBehavior() {
          return this.state.disabledBehavior;
        }
        extendSelection(e) {
          let t;
          if ("none" === this.selectionMode) return;
          if ("single" === this.selectionMode) {
            this.replaceSelection(e);
            return;
          }
          let r = this.getKey(e);
          if (null != r) {
            if ("all" === this.state.selectedKeys) t = new t9([r], r, r);
            else {
              var n, o;
              let e = this.state.selectedKeys,
                l = null !== (n = e.anchorKey) && void 0 !== n ? n : r;
              for (let n of ((t = new t9(e, l, r)),
              this.getKeyRange(
                l,
                null !== (o = e.currentKey) && void 0 !== o ? o : r
              )))
                t.delete(n);
              for (let e of this.getKeyRange(r, l))
                this.canSelectItem(e) && t.add(e);
            }
            this.state.setSelectedKeys(t);
          }
        }
        getKeyRange(e, t) {
          let r = this.collection.getItem(e),
            n = this.collection.getItem(t);
          return r && n
            ? 0 >= rn(this.collection, r, n)
              ? this.getKeyRangeInternal(e, t)
              : this.getKeyRangeInternal(t, e)
            : [];
        }
        getKeyRangeInternal(e, t) {
          var r;
          if (
            null === (r = this.layoutDelegate) || void 0 === r
              ? void 0
              : r.getKeyRange
          )
            return this.layoutDelegate.getKeyRange(e, t);
          let n = [],
            o = e;
          for (; null != o; ) {
            let e = this.collection.getItem(o);
            if (
              (e &&
                ("item" === e.type ||
                  ("cell" === e.type && this.allowsCellSelection)) &&
                n.push(o),
              o === t)
            )
              return n;
            o = this.collection.getKeyAfter(o);
          }
          return [];
        }
        getKey(e) {
          let t = this.collection.getItem(e);
          if (!t || ("cell" === t.type && this.allowsCellSelection)) return e;
          for (; t && "item" !== t.type && null != t.parentKey; )
            t = this.collection.getItem(t.parentKey);
          return t && "item" === t.type ? t.key : null;
        }
        toggleSelection(e) {
          if ("none" === this.selectionMode) return;
          if ("single" === this.selectionMode && !this.isSelected(e)) {
            this.replaceSelection(e);
            return;
          }
          let t = this.getKey(e);
          if (null == t) return;
          let r = new t9(
            "all" === this.state.selectedKeys
              ? this.getSelectAllKeys()
              : this.state.selectedKeys
          );
          r.has(t)
            ? r.delete(t)
            : this.canSelectItem(t) &&
              (r.add(t), (r.anchorKey = t), (r.currentKey = t)),
            (this.disallowEmptySelection && 0 === r.size) ||
              this.state.setSelectedKeys(r);
        }
        replaceSelection(e) {
          if ("none" === this.selectionMode) return;
          let t = this.getKey(e);
          if (null == t) return;
          let r = this.canSelectItem(t) ? new t9([t], t, t) : new t9();
          this.state.setSelectedKeys(r);
        }
        setSelectedKeys(e) {
          if ("none" === this.selectionMode) return;
          let t = new t9();
          for (let r of e) {
            let e = this.getKey(r);
            if (null != e && (t.add(e), "single" === this.selectionMode)) break;
          }
          this.state.setSelectedKeys(t);
        }
        getSelectAllKeys() {
          let e = [],
            t = (r) => {
              for (; null != r; ) {
                if (this.canSelectItem(r)) {
                  var n, o;
                  let l = this.collection.getItem(r);
                  (null == l ? void 0 : l.type) === "item" && e.push(r),
                    (null == l ? void 0 : l.hasChildNodes) &&
                      (this.allowsCellSelection || "item" !== l.type) &&
                      t(
                        null !==
                          (o =
                            null ===
                              (n = (function (e, t) {
                                let r = 0;
                                for (let t of e) {
                                  if (0 === r) return t;
                                  r++;
                                }
                              })(rr(l, this.collection), 0)) || void 0 === n
                              ? void 0
                              : n.key) && void 0 !== o
                          ? o
                          : null
                      );
                }
                r = this.collection.getKeyAfter(r);
              }
            };
          return t(this.collection.getFirstKey()), e;
        }
        selectAll() {
          this.isSelectAll ||
            "multiple" !== this.selectionMode ||
            this.state.setSelectedKeys("all");
        }
        clearSelection() {
          !this.disallowEmptySelection &&
            ("all" === this.state.selectedKeys ||
              this.state.selectedKeys.size > 0) &&
            this.state.setSelectedKeys(new t9());
        }
        toggleSelectAll() {
          this.isSelectAll ? this.clearSelection() : this.selectAll();
        }
        select(e, t) {
          "none" !== this.selectionMode &&
            ("single" === this.selectionMode
              ? this.isSelected(e) && !this.disallowEmptySelection
                ? this.toggleSelection(e)
                : this.replaceSelection(e)
              : "toggle" === this.selectionBehavior ||
                (t &&
                  ("touch" === t.pointerType || "virtual" === t.pointerType))
              ? this.toggleSelection(e)
              : this.replaceSelection(e));
        }
        isSelectionEqual(e) {
          if (e === this.state.selectedKeys) return !0;
          let t = this.selectedKeys;
          if (e.size !== t.size) return !1;
          for (let r of e) if (!t.has(r)) return !1;
          for (let r of t) if (!e.has(r)) return !1;
          return !0;
        }
        canSelectItem(e) {
          var t;
          if (
            "none" === this.state.selectionMode ||
            this.state.disabledKeys.has(e)
          )
            return !1;
          let r = this.collection.getItem(e);
          return (
            !!r &&
            (null == r ||
              null === (t = r.props) ||
              void 0 === t ||
              !t.isDisabled) &&
            ("cell" !== r.type || !!this.allowsCellSelection)
          );
        }
        isDisabled(e) {
          var t, r;
          return (
            "all" === this.state.disabledBehavior &&
            (this.state.disabledKeys.has(e) ||
              !!(null === (r = this.collection.getItem(e)) || void 0 === r
                ? void 0
                : null === (t = r.props) || void 0 === t
                ? void 0
                : t.isDisabled))
          );
        }
        isLink(e) {
          var t, r;
          return !!(null === (r = this.collection.getItem(e)) || void 0 === r
            ? void 0
            : null === (t = r.props) || void 0 === t
            ? void 0
            : t.href);
        }
        getItemProps(e) {
          var t;
          return null === (t = this.collection.getItem(e)) || void 0 === t
            ? void 0
            : t.props;
        }
        constructor(e, t, r) {
          var n;
          (this.collection = e),
            (this.state = t),
            (this.allowsCellSelection =
              null !== (n = null == r ? void 0 : r.allowsCellSelection) &&
              void 0 !== n &&
              n),
            (this._isSelectAll = null),
            (this.layoutDelegate =
              (null == r ? void 0 : r.layoutDelegate) || null);
        }
      }
      class ri {
        build(e, t) {
          return (this.context = t), ra(() => this.iterateCollection(e));
        }
        *iterateCollection(e) {
          let { children: t, items: r } = e;
          if (i.isValidElement(t) && t.type === i.Fragment)
            yield* this.iterateCollection({
              children: t.props.children,
              items: r,
            });
          else if ("function" == typeof t) {
            if (!r)
              throw Error(
                "props.children was a function but props.items is missing"
              );
            let e = 0;
            for (let n of r)
              yield* this.getFullNode({ value: n, index: e }, { renderer: t }),
                e++;
          } else {
            let e = [];
            i.Children.forEach(t, (t) => {
              t && e.push(t);
            });
            let r = 0;
            for (let t of e)
              for (let e of this.getFullNode({ element: t, index: r }, {}))
                r++, yield e;
          }
        }
        getKey(e, t, r, n) {
          if (null != e.key) return e.key;
          if ("cell" === t.type && null != t.key) return `${n}${t.key}`;
          let o = t.value;
          if (null != o) {
            var l;
            let e = null !== (l = o.key) && void 0 !== l ? l : o.id;
            if (null == e) throw Error("No key found for item");
            return e;
          }
          return n ? `${n}.${t.index}` : `$.${t.index}`;
        }
        getChildState(e, t) {
          return { renderer: t.renderer || e.renderer };
        }
        *getFullNode(e, t, r, n) {
          var o, l, a, s, u, c, d, f;
          if (i.isValidElement(e.element) && e.element.type === i.Fragment) {
            let l = [];
            i.Children.forEach(e.element.props.children, (e) => {
              l.push(e);
            });
            let a = null !== (o = e.index) && void 0 !== o ? o : 0;
            for (let e of l)
              yield* this.getFullNode({ element: e, index: a++ }, t, r, n);
            return;
          }
          let p = e.element;
          if (!p && e.value && t && t.renderer) {
            let r = this.cache.get(e.value);
            if (
              r &&
              (!r.shouldInvalidate || !r.shouldInvalidate(this.context))
            ) {
              (r.index = e.index), (r.parentKey = n ? n.key : null), yield r;
              return;
            }
            p = t.renderer(e.value);
          }
          if (i.isValidElement(p)) {
            let o = p.type;
            if (
              "function" != typeof o &&
              "function" != typeof o.getCollectionNode
            ) {
              let e = p.type;
              throw Error(`Unknown element <${e}> in collection.`);
            }
            let i = o.getCollectionNode(p.props, this.context),
              d = null !== (l = e.index) && void 0 !== l ? l : 0,
              f = i.next();
            for (; !f.done && f.value; ) {
              let o = f.value;
              e.index = d;
              let l = null !== (a = o.key) && void 0 !== a ? a : null;
              null == l && (l = o.element ? null : this.getKey(p, e, t, r));
              let g = [
                ...this.getFullNode(
                  {
                    ...o,
                    key: l,
                    index: d,
                    wrapper: (function (e, t) {
                      return e && t ? (r) => e(t(r)) : e || t || void 0;
                    })(e.wrapper, o.wrapper),
                  },
                  this.getChildState(t, o),
                  r ? `${r}${p.key}` : p.key,
                  n
                ),
              ];
              for (let t of g) {
                if (
                  ((t.value =
                    null !==
                      (u =
                        null !== (s = o.value) && void 0 !== s ? s : e.value) &&
                    void 0 !== u
                      ? u
                      : null),
                  t.value && this.cache.set(t.value, t),
                  e.type && t.type !== e.type)
                )
                  throw Error(
                    `Unsupported type <${rs(t.type)}> in <${rs(
                      null !== (c = null == n ? void 0 : n.type) && void 0 !== c
                        ? c
                        : "unknown parent type"
                    )}>. Only <${rs(e.type)}> is supported.`
                  );
                d++, yield t;
              }
              f = i.next(g);
            }
            return;
          }
          if (null == e.key || null == e.type) return;
          let g = this,
            h = {
              type: e.type,
              props: e.props,
              key: e.key,
              parentKey: n ? n.key : null,
              value: null !== (d = e.value) && void 0 !== d ? d : null,
              level: n ? n.level + 1 : 0,
              index: e.index,
              rendered: e.rendered,
              textValue: null !== (f = e.textValue) && void 0 !== f ? f : "",
              "aria-label": e["aria-label"],
              wrapper: e.wrapper,
              shouldInvalidate: e.shouldInvalidate,
              hasChildNodes: e.hasChildNodes || !1,
              childNodes: ra(function* () {
                if (!e.hasChildNodes || !e.childNodes) return;
                let r = 0;
                for (let n of e.childNodes())
                  for (let e of (null != n.key && (n.key = `${h.key}${n.key}`),
                  g.getFullNode(
                    { ...n, index: r },
                    g.getChildState(t, n),
                    h.key,
                    h
                  )))
                    r++, yield e;
              }),
            };
          yield h;
        }
        constructor() {
          this.cache = new WeakMap();
        }
      }
      function ra(e) {
        let t = [],
          r = null;
        return {
          *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let n of (r || (r = e()), r)) t.push(n), yield n;
          },
        };
      }
      function rs(e) {
        return e[0].toUpperCase() + e.slice(1);
      }
      function ru(e) {
        let { filter: t, layoutDelegate: r } = e,
          n = (function (e) {
            let {
                selectionMode: t = "none",
                disallowEmptySelection: r = !1,
                allowDuplicateSelectionEvents: n,
                selectionBehavior: o = "toggle",
                disabledBehavior: l = "all",
              } = e,
              a = (0, i.useRef)(!1),
              [, s] = (0, i.useState)(!1),
              u = (0, i.useRef)(null),
              c = (0, i.useRef)(null),
              [, d] = (0, i.useState)(null),
              [f, p] = re(
                (0, i.useMemo)(() => rt(e.selectedKeys), [e.selectedKeys]),
                (0, i.useMemo)(
                  () => rt(e.defaultSelectedKeys, new t9()),
                  [e.defaultSelectedKeys]
                ),
                e.onSelectionChange
              ),
              g = (0, i.useMemo)(
                () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
                [e.disabledKeys]
              ),
              [h, m] = (0, i.useState)(o);
            "replace" === o &&
              "toggle" === h &&
              "object" == typeof f &&
              0 === f.size &&
              m("replace");
            let v = (0, i.useRef)(o);
            return (
              (0, i.useEffect)(() => {
                o !== v.current && (m(o), (v.current = o));
              }, [o]),
              {
                selectionMode: t,
                disallowEmptySelection: r,
                selectionBehavior: h,
                setSelectionBehavior: m,
                get isFocused() {
                  return a.current;
                },
                setFocused(e) {
                  (a.current = e), s(e);
                },
                get focusedKey() {
                  return u.current;
                },
                get childFocusStrategy() {
                  return c.current;
                },
                setFocusedKey(e, t = "first") {
                  (u.current = e), (c.current = t), d(e);
                },
                selectedKeys: f,
                setSelectedKeys(e) {
                  (n ||
                    !(function (e, t) {
                      if (e.size !== t.size) return !1;
                      for (let r of e) if (!t.has(r)) return !1;
                      return !0;
                    })(e, f)) &&
                    p(e);
                },
                disabledKeys: g,
                disabledBehavior: l,
              }
            );
          })(e),
          o = (0, i.useMemo)(
            () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
            [e.disabledKeys]
          ),
          l = (0, i.useCallback)((e) => new t7(t ? t(e) : e), [t]),
          a = (0, i.useMemo)(
            () => ({ suppressTextValueWarning: e.suppressTextValueWarning }),
            [e.suppressTextValueWarning]
          ),
          s = (function (e, t, r) {
            let n = (0, i.useMemo)(() => new ri(), []),
              { children: o, items: l, collection: a } = e;
            return (0, i.useMemo)(
              () => a || t(n.build({ children: o, items: l }, r)),
              [n, o, l, a, r, t]
            );
          })(e, l, a),
          u = (0, i.useMemo)(
            () => new rl(s, n, { layoutDelegate: r }),
            [s, n, r]
          ),
          c = (0, i.useRef)(null);
        return (
          (0, i.useEffect)(() => {
            if (null != n.focusedKey && !s.getItem(n.focusedKey) && c.current) {
              var e, t, r, o, l, i, a;
              let d = c.current.getItem(n.focusedKey),
                f = [...c.current.getKeys()]
                  .map((e) => {
                    let t = c.current.getItem(e);
                    return (null == t ? void 0 : t.type) === "item" ? t : null;
                  })
                  .filter((e) => null !== e),
                p = [...s.getKeys()]
                  .map((e) => {
                    let t = s.getItem(e);
                    return (null == t ? void 0 : t.type) === "item" ? t : null;
                  })
                  .filter((e) => null !== e),
                g =
                  (null !== (e = null == f ? void 0 : f.length) && void 0 !== e
                    ? e
                    : 0) -
                  (null !== (t = null == p ? void 0 : p.length) && void 0 !== t
                    ? t
                    : 0),
                h = Math.min(
                  g > 1
                    ? Math.max(
                        (null !== (r = null == d ? void 0 : d.index) &&
                        void 0 !== r
                          ? r
                          : 0) -
                          g +
                          1,
                        0
                      )
                    : null !== (o = null == d ? void 0 : d.index) &&
                      void 0 !== o
                    ? o
                    : 0,
                  (null !== (l = null == p ? void 0 : p.length) && void 0 !== l
                    ? l
                    : 0) - 1
                ),
                m = null,
                v = !1;
              for (; h >= 0; ) {
                if (!u.isDisabled(p[h].key)) {
                  m = p[h];
                  break;
                }
                h < p.length - 1 && !v
                  ? h++
                  : ((v = !0),
                    h >
                      (null !== (i = null == d ? void 0 : d.index) &&
                      void 0 !== i
                        ? i
                        : 0) &&
                      (h =
                        null !== (a = null == d ? void 0 : d.index) &&
                        void 0 !== a
                          ? a
                          : 0),
                    h--);
              }
              n.setFocusedKey(m ? m.key : null);
            }
            c.current = s;
          }, [s, u, n, n.focusedKey]),
          { collection: s, disabledKeys: o, selectionManager: u }
        );
      }
      function rc(e) {
        let [t, r] = re(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
          n = (0, i.useCallback)(() => {
            r(!0);
          }, [r]),
          o = (0, i.useCallback)(() => {
            r(!1);
          }, [r]),
          l = (0, i.useCallback)(() => {
            r(!t);
          }, [r, t]);
        return { isOpen: t, setOpen: r, open: n, close: o, toggle: l };
      }
      let rd = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0,
        },
        rf = { ...rd, customError: !0, valid: !1 },
        rp = { isInvalid: !1, validationDetails: rd, validationErrors: [] },
        rg = (0, i.createContext)({}),
        rh = "__formValidationState" + Date.now();
      function rm(e) {
        return e ? (Array.isArray(e) ? e : [e]) : [];
      }
      function rv(e) {
        return e.length
          ? { isInvalid: !0, validationErrors: e, validationDetails: rf }
          : null;
      }
      function rb(e, t) {
        return (
          e === t ||
          (!!e &&
            !!t &&
            e.isInvalid === t.isInvalid &&
            e.validationErrors.length === t.validationErrors.length &&
            e.validationErrors.every((e, r) => e === t.validationErrors[r]) &&
            Object.entries(e.validationDetails).every(
              ([e, r]) => t.validationDetails[e] === r
            ))
        );
      }
      var ry = r(4994);
      let rx = new Map();
      function rw(e) {
        let { locale: t } = (0, ry.Y)(),
          r =
            t +
            (e
              ? Object.entries(e)
                  .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                  .join()
              : "");
        if (rx.has(r)) return rx.get(r);
        let n = new Intl.Collator(t, e);
        return rx.set(r, n), n;
      }
      function rE(e, t) {
        let { id: r, "aria-label": n, "aria-labelledby": o } = e;
        return (
          (r = eJ(r)),
          o && n
            ? (o = [...new Set([r, ...o.trim().split(/\s+/)])].join(" "))
            : o && (o = o.trim().split(/\s+/).join(" ")),
          n || o || !t || (n = t),
          { id: r, "aria-label": n, "aria-labelledby": o }
        );
      }
      function rS(e) {
        let {
          id: t,
          label: r,
          "aria-labelledby": n,
          "aria-label": o,
          labelElementType: l = "label",
        } = e;
        t = eJ(t);
        let i = eJ(),
          a = {};
        return (
          r
            ? ((n = n ? `${i} ${n}` : i),
              (a = { id: i, htmlFor: "label" === l ? t : void 0 }))
            : n ||
              o ||
              console.warn(
                "If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"
              ),
          {
            labelProps: a,
            fieldProps: rE({ id: t, "aria-label": o, "aria-labelledby": n }),
          }
        );
      }
      var rP = {};
      rP = {
        "ar-AE": {
          longPressMessage: `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`,
        },
        "bg-BG": {
          longPressMessage: `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`,
        },
        "cs-CZ": {
          longPressMessage: `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`,
        },
        "da-DK": {
          longPressMessage: `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`,
        },
        "de-DE": {
          longPressMessage: `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`,
        },
        "el-GR": {
          longPressMessage: `\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`,
        },
        "en-US": {
          longPressMessage: "Long press or press Alt + ArrowDown to open menu",
        },
        "es-ES": {
          longPressMessage: `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`,
        },
        "et-EE": {
          longPressMessage: `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`,
        },
        "fi-FI": {
          longPressMessage: `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`,
        },
        "fr-FR": {
          longPressMessage: `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`,
        },
        "he-IL": {
          longPressMessage: `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`,
        },
        "hr-HR": {
          longPressMessage:
            "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika",
        },
        "hu-HU": {
          longPressMessage: `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`,
        },
        "it-IT": {
          longPressMessage: `Premere a lungo o premere Alt + Freccia gi\xf9 per aprire il menu`,
        },
        "ja-JP": {
          longPressMessage: `\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`,
        },
        "ko-KR": {
          longPressMessage: `\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`,
        },
        "lt-LT": {
          longPressMessage: `Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`,
        },
        "lv-LV": {
          longPressMessage: `Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`,
        },
        "nb-NO": {
          longPressMessage: `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`,
        },
        "nl-NL": {
          longPressMessage:
            "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen",
        },
        "pl-PL": {
          longPressMessage: `Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`,
        },
        "pt-BR": {
          longPressMessage:
            "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu",
        },
        "pt-PT": {
          longPressMessage:
            "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu",
        },
        "ro-RO": {
          longPressMessage: `Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`,
        },
        "ru-RU": {
          longPressMessage: `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`,
        },
        "sk-SK": {
          longPressMessage: `Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`,
        },
        "sl-SI": {
          longPressMessage: `Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`,
        },
        "sr-SP": {
          longPressMessage:
            "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni",
        },
        "sv-SE": {
          longPressMessage: `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`,
        },
        "tr-TR": {
          longPressMessage: `Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`,
        },
        "uk-UA": {
          longPressMessage: `\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`,
        },
        "zh-CN": {
          longPressMessage: `\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`,
        },
        "zh-TW": {
          longPressMessage: `\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`,
        },
      };
      let rC = Symbol.for("react-aria.i18n.locale"),
        rT = Symbol.for("react-aria.i18n.strings");
      class rk {
        getStringForLocale(e, t) {
          let r = this.getStringsForLocale(t)[e];
          if (!r)
            throw Error(`Could not find intl message ${e} in ${t} locale`);
          return r;
        }
        getStringsForLocale(e) {
          let t = this.strings[e];
          return (
            t ||
              ((t = (function (e, t, r = "en-US") {
                if (t[e]) return t[e];
                let n = Intl.Locale
                  ? new Intl.Locale(e).language
                  : e.split("-")[0];
                if (t[n]) return t[n];
                for (let e in t) if (e.startsWith(n + "-")) return t[e];
                return t[r];
              })(e, this.strings, this.defaultLocale)),
              (this.strings[e] = t)),
            t
          );
        }
        static getGlobalDictionaryForPackage(e) {
          if ("undefined" == typeof window) return null;
          let t = window[rC];
          if (void 0 === o) {
            let e = window[rT];
            if (!e) return null;
            for (let r in ((o = {}), e)) o[r] = new rk({ [t]: e[r] }, t);
          }
          let r = null == o ? void 0 : o[e];
          if (!r)
            throw Error(
              `Strings for package "${e}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`
            );
          return r;
        }
        constructor(e, t = "en-US") {
          (this.strings = Object.fromEntries(
            Object.entries(e).filter(([, e]) => e)
          )),
            (this.defaultLocale = t);
        }
      }
      let rM = new Map(),
        rK = new Map();
      class rD {
        format(e, t) {
          let r = this.strings.getStringForLocale(e, this.locale);
          return "function" == typeof r ? r(t, this) : r;
        }
        plural(e, t, r = "cardinal") {
          let n = t["=" + e];
          if (n) return "function" == typeof n ? n() : n;
          let o = this.locale + ":" + r,
            l = rM.get(o);
          return (
            l ||
              ((l = new Intl.PluralRules(this.locale, { type: r })),
              rM.set(o, l)),
            "function" == typeof (n = t[l.select(e)] || t.other) ? n() : n
          );
        }
        number(e) {
          let t = rK.get(this.locale);
          return (
            t ||
              ((t = new Intl.NumberFormat(this.locale)),
              rK.set(this.locale, t)),
            t.format(e)
          );
        }
        select(e, t) {
          let r = e[t] || e.other;
          return "function" == typeof r ? r() : r;
        }
        constructor(e, t) {
          (this.locale = e), (this.strings = t);
        }
      }
      let rO = new WeakMap();
      function rI(e, t) {
        let r,
          { locale: n } = (0, ry.Y)(),
          o =
            (t && rk.getGlobalDictionaryForPackage(t)) ||
            ((r = rO.get(e)) || ((r = new rk(e)), rO.set(e, r)), r);
        return (0, i.useMemo)(() => new rD(n, o), [n, o]);
      }
      let rA = 0,
        rL = new Map();
      function rR(e) {
        let {
            isDisabled: t,
            onLongPressStart: r,
            onLongPressEnd: n,
            onLongPress: o,
            threshold: l = 500,
            accessibilityDescription: a,
          } = e,
          s = (0, i.useRef)(void 0),
          { addGlobalListener: u, removeGlobalListener: c } = tz(),
          { pressProps: d } = tW({
            isDisabled: t,
            onPressStart(e) {
              if (
                (e.continuePropagation(),
                ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                  (r && r({ ...e, type: "longpressstart" }),
                  (s.current = setTimeout(() => {
                    e.target.dispatchEvent(
                      new PointerEvent("pointercancel", { bubbles: !0 })
                    ),
                      o && o({ ...e, type: "longpress" }),
                      (s.current = void 0);
                  }, l)),
                  "touch" === e.pointerType))
              ) {
                let t = (e) => {
                  e.preventDefault();
                };
                u(e.target, "contextmenu", t, { once: !0 }),
                  u(
                    window,
                    "pointerup",
                    () => {
                      setTimeout(() => {
                        c(e.target, "contextmenu", t);
                      }, 30);
                    },
                    { once: !0 }
                  );
              }
            },
            onPressEnd(e) {
              s.current && clearTimeout(s.current),
                n &&
                  ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                  n({ ...e, type: "longpressend" });
            },
          });
        return {
          longPressProps: e1(
            d,
            (function (e) {
              let [t, r] = (0, i.useState)();
              return (
                eG(() => {
                  if (!e) return;
                  let t = rL.get(e);
                  if (t) r(t.element.id);
                  else {
                    let n = `react-aria-description-${rA++}`;
                    r(n);
                    let o = document.createElement("div");
                    (o.id = n),
                      (o.style.display = "none"),
                      (o.textContent = e),
                      document.body.appendChild(o),
                      (t = { refCount: 0, element: o }),
                      rL.set(e, t);
                  }
                  return (
                    t.refCount++,
                    () => {
                      t &&
                        0 == --t.refCount &&
                        (t.element.remove(), rL.delete(e));
                    }
                  );
                }, [e]),
                { "aria-describedby": e ? t : void 0 }
              );
            })(o && !t ? a : void 0)
          ),
        };
      }
      let rj = new WeakMap();
      function rz(e, t, r) {
        let n,
          { type: o } = e,
          { isOpen: l } = t;
        (0, i.useEffect)(() => {
          r && r.current && rj.set(r.current, t.close);
        }),
          "menu" === o ? (n = !0) : "listbox" === o && (n = "listbox");
        let a = eJ();
        return {
          triggerProps: {
            "aria-haspopup": n,
            "aria-expanded": l,
            "aria-controls": l ? a : void 0,
            onPress: t.toggle,
          },
          overlayProps: { id: a },
        };
      }
      class rN {
        getItemRect(e) {
          let t = this.ref.current;
          if (!t) return null;
          let r =
            null != e
              ? t.querySelector(`[data-key="${CSS.escape(e.toString())}"]`)
              : null;
          if (!r) return null;
          let n = t.getBoundingClientRect(),
            o = r.getBoundingClientRect();
          return {
            x: o.left - n.left + t.scrollLeft,
            y: o.top - n.top + t.scrollTop,
            width: o.width,
            height: o.height,
          };
        }
        getContentSize() {
          var e, t;
          let r = this.ref.current;
          return {
            width:
              null !== (e = null == r ? void 0 : r.scrollWidth) && void 0 !== e
                ? e
                : 0,
            height:
              null !== (t = null == r ? void 0 : r.scrollHeight) && void 0 !== t
                ? t
                : 0,
          };
        }
        getVisibleRect() {
          var e, t, r, n;
          let o = this.ref.current;
          return {
            x:
              null !== (e = null == o ? void 0 : o.scrollLeft) && void 0 !== e
                ? e
                : 0,
            y:
              null !== (t = null == o ? void 0 : o.scrollTop) && void 0 !== t
                ? t
                : 0,
            width:
              null !== (r = null == o ? void 0 : o.offsetWidth) && void 0 !== r
                ? r
                : 0,
            height:
              null !== (n = null == o ? void 0 : o.offsetHeight) && void 0 !== n
                ? n
                : 0,
          };
        }
        constructor(e) {
          this.ref = e;
        }
      }
      function rF(e, t) {
        if (!e) return !1;
        let r = window.getComputedStyle(e),
          n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
        return (
          n &&
            t &&
            (n =
              e.scrollHeight !== e.clientHeight ||
              e.scrollWidth !== e.clientWidth),
          n
        );
      }
      class rB {
        isDisabled(e) {
          var t;
          return (
            "all" === this.disabledBehavior &&
            ((null === (t = e.props) || void 0 === t ? void 0 : t.isDisabled) ||
              this.disabledKeys.has(e.key))
          );
        }
        findNextNonDisabled(e, t) {
          let r = e;
          for (; null != r; ) {
            let e = this.collection.getItem(r);
            if ((null == e ? void 0 : e.type) === "item" && !this.isDisabled(e))
              return r;
            r = t(r);
          }
          return null;
        }
        getNextKey(e) {
          let t = e;
          return (
            (t = this.collection.getKeyAfter(t)),
            this.findNextNonDisabled(t, (e) => this.collection.getKeyAfter(e))
          );
        }
        getPreviousKey(e) {
          let t = e;
          return (
            (t = this.collection.getKeyBefore(t)),
            this.findNextNonDisabled(t, (e) => this.collection.getKeyBefore(e))
          );
        }
        findKey(e, t, r) {
          let n = e,
            o = this.layoutDelegate.getItemRect(n);
          if (!o || null == n) return null;
          let l = o;
          do {
            if (null == (n = t(n))) break;
            o = this.layoutDelegate.getItemRect(n);
          } while (o && r(l, o) && null != n);
          return n;
        }
        isSameRow(e, t) {
          return e.y === t.y || e.x !== t.x;
        }
        isSameColumn(e, t) {
          return e.x === t.x || e.y !== t.y;
        }
        getKeyBelow(e) {
          return "grid" === this.layout && "vertical" === this.orientation
            ? this.findKey(e, (e) => this.getNextKey(e), this.isSameRow)
            : this.getNextKey(e);
        }
        getKeyAbove(e) {
          return "grid" === this.layout && "vertical" === this.orientation
            ? this.findKey(e, (e) => this.getPreviousKey(e), this.isSameRow)
            : this.getPreviousKey(e);
        }
        getNextColumn(e, t) {
          return t ? this.getPreviousKey(e) : this.getNextKey(e);
        }
        getKeyRightOf(e) {
          let t = "ltr" === this.direction ? "getKeyRightOf" : "getKeyLeftOf";
          return this.layoutDelegate[t]
            ? ((e = this.layoutDelegate[t](e)),
              this.findNextNonDisabled(e, (e) => this.layoutDelegate[t](e)))
            : "grid" === this.layout
            ? "vertical" === this.orientation
              ? this.getNextColumn(e, "rtl" === this.direction)
              : this.findKey(
                  e,
                  (e) => this.getNextColumn(e, "rtl" === this.direction),
                  this.isSameColumn
                )
            : "horizontal" === this.orientation
            ? this.getNextColumn(e, "rtl" === this.direction)
            : null;
        }
        getKeyLeftOf(e) {
          let t = "ltr" === this.direction ? "getKeyLeftOf" : "getKeyRightOf";
          return this.layoutDelegate[t]
            ? ((e = this.layoutDelegate[t](e)),
              this.findNextNonDisabled(e, (e) => this.layoutDelegate[t](e)))
            : "grid" === this.layout
            ? "vertical" === this.orientation
              ? this.getNextColumn(e, "ltr" === this.direction)
              : this.findKey(
                  e,
                  (e) => this.getNextColumn(e, "ltr" === this.direction),
                  this.isSameColumn
                )
            : "horizontal" === this.orientation
            ? this.getNextColumn(e, "ltr" === this.direction)
            : null;
        }
        getFirstKey() {
          let e = this.collection.getFirstKey();
          return this.findNextNonDisabled(e, (e) =>
            this.collection.getKeyAfter(e)
          );
        }
        getLastKey() {
          let e = this.collection.getLastKey();
          return this.findNextNonDisabled(e, (e) =>
            this.collection.getKeyBefore(e)
          );
        }
        getKeyPageAbove(e) {
          let t = this.ref.current,
            r = this.layoutDelegate.getItemRect(e);
          if (!r) return null;
          if (t && !rF(t)) return this.getFirstKey();
          let n = e;
          if ("horizontal" === this.orientation) {
            let e = Math.max(
              0,
              r.x + r.width - this.layoutDelegate.getVisibleRect().width
            );
            for (; r && r.x > e && null != n; )
              r =
                null == (n = this.getKeyAbove(n))
                  ? null
                  : this.layoutDelegate.getItemRect(n);
          } else {
            let e = Math.max(
              0,
              r.y + r.height - this.layoutDelegate.getVisibleRect().height
            );
            for (; r && r.y > e && null != n; )
              r =
                null == (n = this.getKeyAbove(n))
                  ? null
                  : this.layoutDelegate.getItemRect(n);
          }
          return null != n ? n : this.getFirstKey();
        }
        getKeyPageBelow(e) {
          let t = this.ref.current,
            r = this.layoutDelegate.getItemRect(e);
          if (!r) return null;
          if (t && !rF(t)) return this.getLastKey();
          let n = e;
          if ("horizontal" === this.orientation) {
            let e = Math.min(
              this.layoutDelegate.getContentSize().width,
              r.y - r.width + this.layoutDelegate.getVisibleRect().width
            );
            for (; r && r.x < e && null != n; )
              r =
                null == (n = this.getKeyBelow(n))
                  ? null
                  : this.layoutDelegate.getItemRect(n);
          } else {
            let e = Math.min(
              this.layoutDelegate.getContentSize().height,
              r.y - r.height + this.layoutDelegate.getVisibleRect().height
            );
            for (; r && r.y < e && null != n; )
              r =
                null == (n = this.getKeyBelow(n))
                  ? null
                  : this.layoutDelegate.getItemRect(n);
          }
          return null != n ? n : this.getLastKey();
        }
        getKeyForSearch(e, t) {
          if (!this.collator) return null;
          let r = this.collection,
            n = t || this.getFirstKey();
          for (; null != n; ) {
            let t = r.getItem(n);
            if (!t) break;
            let o = t.textValue.slice(0, e.length);
            if (t.textValue && 0 === this.collator.compare(o, e)) return n;
            n = this.getNextKey(n);
          }
          return null;
        }
        constructor(...e) {
          if (1 === e.length) {
            let t = e[0];
            (this.collection = t.collection),
              (this.ref = t.ref),
              (this.collator = t.collator),
              (this.disabledKeys = t.disabledKeys || new Set()),
              (this.disabledBehavior = t.disabledBehavior || "all"),
              (this.orientation = t.orientation || "vertical"),
              (this.direction = t.direction),
              (this.layout = t.layout || "stack"),
              (this.layoutDelegate = t.layoutDelegate || new rN(t.ref));
          } else
            (this.collection = e[0]),
              (this.disabledKeys = e[1]),
              (this.ref = e[2]),
              (this.collator = e[3]),
              (this.layout = "stack"),
              (this.orientation = "vertical"),
              (this.disabledBehavior = "all"),
              (this.layoutDelegate = new rN(this.ref));
          "stack" === this.layout &&
            "vertical" === this.orientation &&
            ((this.getKeyLeftOf = void 0), (this.getKeyRightOf = void 0));
        }
      }
      function r_(e) {
        let { keyboardDelegate: t, selectionManager: r, onTypeSelect: n } = e,
          o = (0, i.useRef)({ search: "", timeout: void 0 }).current;
        return {
          typeSelectProps: {
            onKeyDownCapture: t.getKeyForSearch
              ? (e) => {
                  var l;
                  let i =
                    1 !== (l = e.key).length && /^[A-Z]/i.test(l) ? "" : l;
                  if (
                    i &&
                    !e.ctrlKey &&
                    !e.metaKey &&
                    e.currentTarget.contains(e.target)
                  ) {
                    if (
                      (" " !== i ||
                        !(o.search.trim().length > 0) ||
                        (e.preventDefault(),
                        "continuePropagation" in e || e.stopPropagation()),
                      (o.search += i),
                      null != t.getKeyForSearch)
                    ) {
                      let e = t.getKeyForSearch(o.search, r.focusedKey);
                      null == e && (e = t.getKeyForSearch(o.search)),
                        null != e && (r.setFocusedKey(e), n && n(e));
                    }
                    clearTimeout(o.timeout),
                      (o.timeout = setTimeout(() => {
                        o.search = "";
                      }, 1e3));
                  }
                }
              : void 0,
          },
        };
      }
      var rW = (null == globalThis ? void 0 : globalThis.document)
          ? i.useLayoutEffect
          : i.useEffect,
        rV = (e, t, r) => {
          let n = null == t ? void 0 : t.current;
          if (!n || !n.contains(e)) {
            let e = document.querySelectorAll(
                "body > span[data-focus-scope-start]"
              ),
              t = [];
            if (
              (e.forEach((e) => {
                t.push(e.nextElementSibling);
              }),
              1 === t.length)
            )
              return r.close(), !1;
          }
          return !n || !n.contains(e);
        },
        rH = Symbol("default"),
        r$ = r(6131),
        rU = (0, i.createContext)(null);
      function rG(e, t) {
        let r = e;
        for (rF(r, t) && (r = r.parentElement); r && !rF(r, t); )
          r = r.parentElement;
        return r || document.scrollingElement || document.documentElement;
      }
      let rY = "undefined" != typeof document && window.visualViewport,
        rq = new Set([
          "checkbox",
          "radio",
          "range",
          "color",
          "file",
          "image",
          "button",
          "submit",
          "reset",
        ]),
        rX = 0;
      function rZ(e = {}) {
        let { isDisabled: t } = e;
        eG(() => {
          if (!t) {
            let e, t, r, o, l;
            return (
              1 == ++rX &&
                (n = (0, e$.un)()
                  ? ((r = null),
                    (o = () => {
                      if (r) return;
                      let e = window.pageXOffset,
                        t = window.pageYOffset;
                      (r = eU(
                        rQ(window, "scroll", () => {
                          window.scrollTo(0, 0);
                        }),
                        rJ(
                          document.documentElement,
                          "paddingRight",
                          `${
                            window.innerWidth -
                            document.documentElement.clientWidth
                          }px`
                        ),
                        rJ(document.documentElement, "overflow", "hidden"),
                        rJ(document.body, "marginTop", `-${t}px`),
                        () => {
                          window.scrollTo(e, t);
                        }
                      )),
                        window.scrollTo(0, 0);
                    }),
                    (l = eU(
                      rQ(
                        document,
                        "touchstart",
                        (r) => {
                          ((e = rG(r.target, !0)) !==
                            document.documentElement ||
                            e !== document.body) &&
                            e instanceof HTMLElement &&
                            "auto" ===
                              window.getComputedStyle(e).overscrollBehavior &&
                            (t = rJ(e, "overscrollBehavior", "contain"));
                        },
                        { passive: !1, capture: !0 }
                      ),
                      rQ(
                        document,
                        "touchmove",
                        (t) => {
                          if (
                            !e ||
                            e === document.documentElement ||
                            e === document.body
                          ) {
                            t.preventDefault();
                            return;
                          }
                          e.scrollHeight === e.clientHeight &&
                            e.scrollWidth === e.clientWidth &&
                            t.preventDefault();
                        },
                        { passive: !1, capture: !0 }
                      ),
                      rQ(
                        document,
                        "touchend",
                        () => {
                          t && t();
                        },
                        { passive: !1, capture: !0 }
                      ),
                      rQ(
                        document,
                        "focus",
                        (e) => {
                          let t = e.target;
                          ((t instanceof HTMLInputElement && !rq.has(t.type)) ||
                            t instanceof HTMLTextAreaElement ||
                            (t instanceof HTMLElement &&
                              t.isContentEditable)) &&
                            (o(),
                            (t.style.transform = "translateY(-2000px)"),
                            requestAnimationFrame(() => {
                              (t.style.transform = ""),
                                rY &&
                                  (rY.height < window.innerHeight
                                    ? requestAnimationFrame(() => {
                                        r0(t);
                                      })
                                    : rY.addEventListener(
                                        "resize",
                                        () => r0(t),
                                        { once: !0 }
                                      ));
                            }));
                        },
                        !0
                      )
                    )),
                    () => {
                      null == t || t(), null == r || r(), l();
                    })
                  : eU(
                      rJ(
                        document.documentElement,
                        "paddingRight",
                        `${
                          window.innerWidth -
                          document.documentElement.clientWidth
                        }px`
                      ),
                      rJ(document.documentElement, "overflow", "hidden")
                    )),
              () => {
                0 == --rX && n();
              }
            );
          }
        }, [t]);
      }
      function rJ(e, t, r) {
        let n = e.style[t];
        return (
          (e.style[t] = r),
          () => {
            e.style[t] = n;
          }
        );
      }
      function rQ(e, t, r, n) {
        return (
          e.addEventListener(t, r, n),
          () => {
            e.removeEventListener(t, r, n);
          }
        );
      }
      function r0(e) {
        let t = document.scrollingElement || document.documentElement,
          r = e;
        for (; r && r !== t; ) {
          let e = rG(r);
          if (
            e !== document.documentElement &&
            e !== document.body &&
            e !== r
          ) {
            let t = e.getBoundingClientRect().top,
              n = r.getBoundingClientRect().top;
            n > t + r.clientHeight && (e.scrollTop += n - t);
          }
          r = e.parentElement;
        }
      }
      var r1 = new WeakMap();
      let r4 = {
        border: 0,
        clip: "rect(0 0 0 0)",
        clipPath: "inset(50%)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: "1px",
        whiteSpace: "nowrap",
      };
      function r3(e = {}) {
        let { style: t, isFocusable: r } = e,
          [n, o] = (0, i.useState)(!1),
          { focusWithinProps: l } = t0({
            isDisabled: !r,
            onFocusWithinChange: (e) => o(e),
          }),
          a = (0, i.useMemo)(() => (n ? t : t ? { ...r4, ...t } : r4), [n]);
        return { visuallyHiddenProps: { ...l, style: a } };
      }
      function r5(e) {
        let {
            children: t,
            elementType: r = "div",
            isFocusable: n,
            style: o,
            ...l
          } = e,
          { visuallyHiddenProps: a } = r3(e);
        return i.createElement(r, e1(l, a), t);
      }
      function r2(e) {
        var t;
        let {
            state: r,
            triggerRef: n,
            selectRef: o,
            label: l,
            name: a,
            isDisabled: s,
          } = e,
          { containerProps: u, selectProps: c } = (function (e, t, r) {
            var n, o, l, a;
            let s, u;
            let c = r1.get(t) || {},
              {
                autoComplete: d,
                name: f = c.name,
                isDisabled: p = c.isDisabled,
                selectionMode: g,
                onChange: h,
              } = e,
              { validationBehavior: m, isRequired: v, isInvalid: b } = c,
              { visuallyHiddenProps: y } = r3();
            return (
              (o = e.selectRef),
              (l = t.selectedKeys),
              (a = t.setSelectedKeys),
              (s = (0, i.useRef)(l)),
              (u = eY(() => {
                a && a(s.current);
              })),
              (0, i.useEffect)(() => {
                var e;
                let t =
                  null == o
                    ? void 0
                    : null === (e = o.current) || void 0 === e
                    ? void 0
                    : e.form;
                return (
                  null == t || t.addEventListener("reset", u),
                  () => {
                    null == t || t.removeEventListener("reset", u);
                  }
                );
              }, [o, u]),
              !(function (e, t, r) {
                let { validationBehavior: n, focus: o } = e;
                eG(() => {
                  if (
                    "native" === n &&
                    (null == r ? void 0 : r.current) &&
                    !r.current.disabled
                  ) {
                    var e;
                    let n,
                      o = t.realtimeValidation.isInvalid
                        ? t.realtimeValidation.validationErrors.join(" ") ||
                          "Invalid value."
                        : "";
                    r.current.setCustomValidity(o),
                      r.current.hasAttribute("title") || (r.current.title = ""),
                      t.realtimeValidation.isInvalid ||
                        t.updateValidation({
                          isInvalid: !(e = r.current).validity.valid,
                          validationDetails: {
                            badInput: (n = e.validity).badInput,
                            customError: n.customError,
                            patternMismatch: n.patternMismatch,
                            rangeOverflow: n.rangeOverflow,
                            rangeUnderflow: n.rangeUnderflow,
                            stepMismatch: n.stepMismatch,
                            tooLong: n.tooLong,
                            tooShort: n.tooShort,
                            typeMismatch: n.typeMismatch,
                            valueMissing: n.valueMissing,
                            valid: n.valid,
                          },
                          validationErrors: e.validationMessage
                            ? [e.validationMessage]
                            : [],
                        });
                  }
                });
                let l = eY(() => {
                    t.resetValidation();
                  }),
                  a = eY((e) => {
                    var n, l;
                    t.displayValidation.isInvalid || t.commitValidation();
                    let i =
                      null == r
                        ? void 0
                        : null === (n = r.current) || void 0 === n
                        ? void 0
                        : n.form;
                    !e.defaultPrevented &&
                      r &&
                      i &&
                      (function (e) {
                        for (let t = 0; t < e.elements.length; t++) {
                          let r = e.elements[t];
                          if (!r.validity.valid) return r;
                        }
                        return null;
                      })(i) === r.current &&
                      (o
                        ? o()
                        : null === (l = r.current) || void 0 === l || l.focus(),
                      tx("keyboard")),
                      e.preventDefault();
                  }),
                  s = eY(() => {
                    t.commitValidation();
                  });
                (0, i.useEffect)(() => {
                  let e = null == r ? void 0 : r.current;
                  if (!e) return;
                  let t = e.form;
                  return (
                    e.addEventListener("invalid", a),
                    e.addEventListener("change", s),
                    null == t || t.addEventListener("reset", l),
                    () => {
                      e.removeEventListener("invalid", a),
                        e.removeEventListener("change", s),
                        null == t || t.removeEventListener("reset", l);
                    }
                  );
                }, [r, a, s, l, n]);
              })(
                {
                  validationBehavior: m,
                  focus: () => {
                    var e;
                    return null == (e = r.current) ? void 0 : e.focus();
                  },
                },
                t,
                e.selectRef
              ),
              {
                containerProps: {
                  ...y,
                  "aria-hidden": !0,
                  "data-a11y-ignore": "aria-hidden-focus",
                },
                inputProps: { style: { display: "none" } },
                selectProps: {
                  autoComplete: d,
                  disabled: p,
                  "aria-invalid": b || void 0,
                  "aria-required": (v && "aria" === m) || void 0,
                  required: v && "native" === m,
                  name: f,
                  tabIndex: -1,
                  value:
                    "multiple" === g
                      ? [...t.selectedKeys].map((e) => String(e))
                      : null != (n = [...t.selectedKeys][0])
                      ? n
                      : "",
                  multiple: "multiple" === g,
                  onChange: (e) => {
                    t.setSelectedKeys(e.target.value), null == h || h(e);
                  },
                },
              }
            );
          })({ ...e, selectRef: o }, r, n);
        return r.collection.size <= 300
          ? (0, r$.jsx)("div", {
              ...u,
              "data-testid": "hidden-select-container",
              children: (0, r$.jsxs)("label", {
                children: [
                  l,
                  (0, r$.jsxs)("select", {
                    ...c,
                    ref: o,
                    children: [
                      (0, r$.jsx)("option", {}),
                      [...r.collection.getKeys()].map((e) => {
                        let t = r.collection.getItem(e);
                        if ((null == t ? void 0 : t.type) === "item")
                          return (0, r$.jsx)(
                            "option",
                            { value: t.key, children: t.textValue },
                            t.key
                          );
                      }),
                    ],
                  }),
                ],
              }),
            })
          : a
          ? (0, r$.jsx)("input", {
              autoComplete: c.autoComplete,
              disabled: s,
              name: a,
              type: "hidden",
              value: null != (t = [...r.selectedKeys].join(",")) ? t : "",
            })
          : null;
      }
      let r6 = new WeakMap();
      function r8(e) {
        return (0, e$.lg)() ? e.altKey : e.ctrlKey;
      }
      function r7(e) {
        return (0, e$.cX)() ? e.metaKey : e.ctrlKey;
      }
      function r9(e, t, r, n) {
        let o = eY(r),
          l = null == r;
        (0, i.useEffect)(() => {
          if (l || !e.current) return;
          let r = e.current;
          return (
            r.addEventListener(t, o, n),
            () => {
              r.removeEventListener(t, o, n);
            }
          );
        }, [e, t, n, l, o]);
      }
      function ne(e, t) {
        let r = nt(e, t, "left"),
          n = nt(e, t, "top"),
          o = t.offsetWidth,
          l = t.offsetHeight,
          i = e.scrollLeft,
          a = e.scrollTop,
          {
            borderTopWidth: s,
            borderLeftWidth: u,
            scrollPaddingTop: c,
            scrollPaddingRight: d,
            scrollPaddingBottom: f,
            scrollPaddingLeft: p,
          } = getComputedStyle(e),
          g = i + parseInt(u, 10),
          h = a + parseInt(s, 10),
          m = g + e.clientWidth,
          v = h + e.clientHeight,
          b = parseInt(c, 10) || 0,
          y = parseInt(f, 10) || 0,
          x = parseInt(d, 10) || 0,
          w = parseInt(p, 10) || 0;
        r <= i + w
          ? (i = r - parseInt(u, 10) - w)
          : r + o > m - x && (i += r + o - m + x),
          n <= h + b
            ? (a = n - parseInt(s, 10) - b)
            : n + l > v - y && (a += n + l - v + y),
          (e.scrollLeft = i),
          (e.scrollTop = a);
      }
      function nt(e, t, r) {
        let n = "left" === r ? "offsetLeft" : "offsetTop",
          o = 0;
        for (; t.offsetParent && ((o += t[n]), t.offsetParent !== e); ) {
          if (t.offsetParent.contains(e)) {
            o -= e[n];
            break;
          }
          t = t.offsetParent;
        }
        return o;
      }
      function nr(e, t) {
        if (e && document.contains(e)) {
          let i = document.scrollingElement || document.documentElement;
          if ("hidden" === window.getComputedStyle(i).overflow)
            for (let t of (function (e, t) {
              let r = [];
              for (; e && e !== document.documentElement; )
                rF(e, void 0) && r.push(e), (e = e.parentElement);
              return r;
            })(e))
              ne(t, e);
          else {
            var r, n, o, l;
            let { left: i, top: a } = e.getBoundingClientRect();
            null == e ||
              null === (r = e.scrollIntoView) ||
              void 0 === r ||
              r.call(e, { block: "nearest" });
            let { left: s, top: u } = e.getBoundingClientRect();
            (Math.abs(i - s) > 1 || Math.abs(a - u) > 1) &&
              (null == t ||
                null === (o = t.containingElement) ||
                void 0 === o ||
                null === (n = o.scrollIntoView) ||
                void 0 === n ||
                n.call(o, { block: "center", inline: "center" }),
              null === (l = e.scrollIntoView) ||
                void 0 === l ||
                l.call(e, { block: "nearest" }));
          }
        }
      }
      let nn = "react-aria-update-activedescendant";
      function no(e, t) {
        let r = (0, i.useRef)(!0),
          n = (0, i.useRef)(null);
        eG(
          () => (
            (r.current = !0),
            () => {
              r.current = !1;
            }
          ),
          []
        ),
          eG(() => {
            r.current
              ? (r.current = !1)
              : (!n.current || t.some((e, t) => !Object.is(e, n[t]))) && e(),
              (n.current = t);
          }, t);
      }
      var nl = r(3458);
      let ni = i.createContext(null),
        na = "react-aria-focus-scope-restore",
        ns = null;
      function nu(e) {
        var t, r, n;
        let o,
          l,
          { children: a, contain: s, restoreFocus: u, autoFocus: c } = e,
          d = (0, i.useRef)(null),
          f = (0, i.useRef)(null),
          p = (0, i.useRef)([]),
          { parentNode: g } = (0, i.useContext)(ni) || {},
          h = (0, i.useMemo)(() => new nC({ scopeRef: p }), [p]);
        eG(() => {
          let e = g || nT.root;
          if (nT.getTreeNode(e.scopeRef) && ns && !nv(ns, e.scopeRef)) {
            let t = nT.getTreeNode(ns);
            t && (e = t);
          }
          e.addChild(h), nT.addNode(h);
        }, [h, g]),
          eG(() => {
            let e = nT.getTreeNode(p);
            e && (e.contain = !!s);
          }, [s]),
          eG(() => {
            var e;
            let t =
                null === (e = d.current) || void 0 === e
                  ? void 0
                  : e.nextSibling,
              r = [],
              n = (e) => e.stopPropagation();
            for (; t && t !== f.current; )
              r.push(t), t.addEventListener(na, n), (t = t.nextSibling);
            return (
              (p.current = r),
              () => {
                for (let e of r) e.removeEventListener(na, n);
              }
            );
          }, [a]),
          eG(() => {
            if (r || n) return;
            let e = t.current,
              o = e8(e ? e[0] : void 0),
              l = (e) => {
                let r = e.target;
                nh(r, t.current) ? (ns = t) : nm(r) || (ns = null);
              };
            return (
              o.addEventListener("focusin", l, !1),
              null == e ||
                e.forEach((e) => e.addEventListener("focusin", l, !1)),
              () => {
                o.removeEventListener("focusin", l, !1),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusin", l, !1));
              }
            );
          }, [(t = p), (r = u), (n = s)]),
          (o = (0, i.useRef)(void 0)),
          (l = (0, i.useRef)(void 0)),
          eG(() => {
            let e = p.current;
            if (!s) {
              l.current &&
                (cancelAnimationFrame(l.current), (l.current = void 0));
              return;
            }
            let t = e8(e ? e[0] : void 0),
              r = (e) => {
                if (
                  "Tab" !== e.key ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  !ng(p) ||
                  e.isComposing
                )
                  return;
                let r = t.activeElement,
                  n = p.current;
                if (!n || !nh(r, n)) return;
                let o = nS(np(n), { tabbable: !0 }, n);
                if (!r) return;
                o.currentNode = r;
                let l = e.shiftKey ? o.previousNode() : o.nextNode();
                l ||
                  ((o.currentNode = e.shiftKey
                    ? n[n.length - 1].nextElementSibling
                    : n[0].previousElementSibling),
                  (l = e.shiftKey ? o.previousNode() : o.nextNode())),
                  e.preventDefault(),
                  l && nb(l, !0);
              },
              n = (e) => {
                (!ns || nv(ns, p)) && nh(e.target, p.current)
                  ? ((ns = p), (o.current = e.target))
                  : ng(p) && !nm(e.target, p)
                  ? o.current
                    ? o.current.focus()
                    : ns && ns.current && nx(ns.current)
                  : ng(p) && (o.current = e.target);
              },
              i = (e) => {
                l.current && cancelAnimationFrame(l.current),
                  (l.current = requestAnimationFrame(() => {
                    let r = tl;
                    if (
                      !(
                        ("virtual" === r || null === r) &&
                        (0, e$.m0)() &&
                        (0, e$.H8)()
                      ) &&
                      t.activeElement &&
                      ng(p) &&
                      !nm(t.activeElement, p)
                    ) {
                      if (((ns = p), t.body.contains(e.target))) {
                        var n;
                        (o.current = e.target),
                          null === (n = o.current) || void 0 === n || n.focus();
                      } else ns.current && nx(ns.current);
                    }
                  }));
              };
            return (
              t.addEventListener("keydown", r, !1),
              t.addEventListener("focusin", n, !1),
              null == e ||
                e.forEach((e) => e.addEventListener("focusin", n, !1)),
              null == e ||
                e.forEach((e) => e.addEventListener("focusout", i, !1)),
              () => {
                t.removeEventListener("keydown", r, !1),
                  t.removeEventListener("focusin", n, !1),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusin", n, !1)),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusout", i, !1));
              }
            );
          }, [p, s]),
          eG(
            () => () => {
              l.current && cancelAnimationFrame(l.current);
            },
            [l]
          ),
          (function (e, t, r) {
            let n = (0, i.useRef)(
              "undefined" != typeof document
                ? e8(e.current ? e.current[0] : void 0).activeElement
                : null
            );
            eG(() => {
              let n = e.current,
                o = e8(n ? n[0] : void 0);
              if (!t || r) return;
              let l = () => {
                (!ns || nv(ns, e)) &&
                  nh(o.activeElement, e.current) &&
                  (ns = e);
              };
              return (
                o.addEventListener("focusin", l, !1),
                null == n ||
                  n.forEach((e) => e.addEventListener("focusin", l, !1)),
                () => {
                  o.removeEventListener("focusin", l, !1),
                    null == n ||
                      n.forEach((e) => e.removeEventListener("focusin", l, !1));
                }
              );
            }, [e, r]),
              eG(() => {
                let n = e8(e.current ? e.current[0] : void 0);
                if (!t) return;
                let o = (t) => {
                  if (
                    "Tab" !== t.key ||
                    t.altKey ||
                    t.ctrlKey ||
                    t.metaKey ||
                    !ng(e) ||
                    t.isComposing
                  )
                    return;
                  let r = n.activeElement;
                  if (!nm(r, e) || !nw(e)) return;
                  let o = nT.getTreeNode(e);
                  if (!o) return;
                  let l = o.nodeToRestore,
                    i = nS(n.body, { tabbable: !0 });
                  i.currentNode = r;
                  let a = t.shiftKey ? i.previousNode() : i.nextNode();
                  if (
                    ((l && n.body.contains(l) && l !== n.body) ||
                      ((l = void 0), (o.nodeToRestore = void 0)),
                    (!a || !nm(a, e)) && l)
                  ) {
                    i.currentNode = l;
                    do a = t.shiftKey ? i.previousNode() : i.nextNode();
                    while (nm(a, e));
                    (t.preventDefault(), t.stopPropagation(), a)
                      ? nb(a, !0)
                      : nm(l)
                      ? nb(l, !0)
                      : r.blur();
                  }
                };
                return (
                  r || n.addEventListener("keydown", o, !0),
                  () => {
                    r || n.removeEventListener("keydown", o, !0);
                  }
                );
              }, [e, t, r]),
              eG(() => {
                var r;
                let o = e8(e.current ? e.current[0] : void 0);
                if (!t) return;
                let l = nT.getTreeNode(e);
                if (l)
                  return (
                    (l.nodeToRestore =
                      null !== (r = n.current) && void 0 !== r ? r : void 0),
                    () => {
                      let r = nT.getTreeNode(e);
                      if (!r) return;
                      let n = r.nodeToRestore;
                      if (
                        t &&
                        n &&
                        ((o.activeElement && nm(o.activeElement, e)) ||
                          (o.activeElement === o.body && nw(e)))
                      ) {
                        let t = nT.clone();
                        requestAnimationFrame(() => {
                          if (o.activeElement === o.body) {
                            let r = t.getTreeNode(e);
                            for (; r; ) {
                              if (
                                r.nodeToRestore &&
                                r.nodeToRestore.isConnected
                              ) {
                                nE(r.nodeToRestore);
                                return;
                              }
                              r = r.parent;
                            }
                            for (r = t.getTreeNode(e); r; ) {
                              if (
                                r.scopeRef &&
                                r.scopeRef.current &&
                                nT.getTreeNode(r.scopeRef)
                              ) {
                                nE(ny(r.scopeRef.current, !0));
                                return;
                              }
                              r = r.parent;
                            }
                          }
                        });
                      }
                    }
                  );
              }, [e, t]);
          })(p, u, s),
          (function (e, t) {
            let r = i.useRef(t);
            (0, i.useEffect)(() => {
              r.current &&
                ((ns = e),
                !nh(
                  e8(e.current ? e.current[0] : void 0).activeElement,
                  ns.current
                ) &&
                  e.current &&
                  nx(e.current)),
                (r.current = !1);
            }, [e]);
          })(p, c),
          (0, i.useEffect)(() => {
            let e = e8(p.current ? p.current[0] : void 0).activeElement,
              t = null;
            if (nh(e, p.current)) {
              for (let r of nT.traverse())
                r.scopeRef && nh(e, r.scopeRef.current) && (t = r);
              t === nT.getTreeNode(p) && (ns = t.scopeRef);
            }
          }, [p]),
          eG(
            () => () => {
              var e, t, r;
              let n =
                null !==
                  (r =
                    null === (t = nT.getTreeNode(p)) || void 0 === t
                      ? void 0
                      : null === (e = t.parent) || void 0 === e
                      ? void 0
                      : e.scopeRef) && void 0 !== r
                  ? r
                  : null;
              (p === ns || nv(p, ns)) && (!n || nT.getTreeNode(n)) && (ns = n),
                nT.removeTreeNode(p);
            },
            [p]
          );
        let m = (0, i.useMemo)(
            () => ({
              focusNext(e = {}) {
                let t = p.current,
                  { from: r, tabbable: n, wrap: o, accept: l } = e,
                  i = r || e8(t[0]).activeElement,
                  a = t[0].previousElementSibling,
                  s = nS(np(t), { tabbable: n, accept: l }, t);
                s.currentNode = nh(i, t) ? i : a;
                let u = s.nextNode();
                return (
                  !u && o && ((s.currentNode = a), (u = s.nextNode())),
                  u && nb(u, !0),
                  u
                );
              },
              focusPrevious(e = {}) {
                let t = p.current,
                  { from: r, tabbable: n, wrap: o, accept: l } = e,
                  i = r || e8(t[0]).activeElement,
                  a = t[t.length - 1].nextElementSibling,
                  s = nS(np(t), { tabbable: n, accept: l }, t);
                s.currentNode = nh(i, t) ? i : a;
                let u = s.previousNode();
                return (
                  !u && o && ((s.currentNode = a), (u = s.previousNode())),
                  u && nb(u, !0),
                  u
                );
              },
              focusFirst(e = {}) {
                let t = p.current,
                  { tabbable: r, accept: n } = e,
                  o = nS(np(t), { tabbable: r, accept: n }, t);
                o.currentNode = t[0].previousElementSibling;
                let l = o.nextNode();
                return l && nb(l, !0), l;
              },
              focusLast(e = {}) {
                let t = p.current,
                  { tabbable: r, accept: n } = e,
                  o = nS(np(t), { tabbable: r, accept: n }, t);
                o.currentNode = t[t.length - 1].nextElementSibling;
                let l = o.previousNode();
                return l && nb(l, !0), l;
              },
            }),
            []
          ),
          v = (0, i.useMemo)(
            () => ({ focusManager: m, parentNode: h }),
            [h, m]
          );
        return i.createElement(
          ni.Provider,
          { value: v },
          i.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: d,
          }),
          a,
          i.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: f,
          })
        );
      }
      let nc = [
          "input:not([disabled]):not([type=hidden])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          "button:not([disabled])",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          '[contenteditable]:not([contenteditable^="false"])',
        ],
        nd =
          nc.join(":not([hidden]),") +
          ",[tabindex]:not([disabled]):not([hidden])";
      nc.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      let nf = nc.join(':not([hidden]):not([tabindex="-1"]),');
      function np(e) {
        return e[0].parentElement;
      }
      function ng(e) {
        let t = nT.getTreeNode(ns);
        for (; t && t.scopeRef !== e; ) {
          if (t.contain) return !1;
          t = t.parent;
        }
        return !0;
      }
      function nh(e, t) {
        return !!e && !!t && t.some((t) => t.contains(e));
      }
      function nm(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
          return !0;
        for (let { scopeRef: r } of nT.traverse(nT.getTreeNode(t)))
          if (r && nh(e, r.current)) return !0;
        return !1;
      }
      function nv(e, t) {
        var r;
        let n =
          null === (r = nT.getTreeNode(t)) || void 0 === r ? void 0 : r.parent;
        for (; n; ) {
          if (n.scopeRef === e) return !0;
          n = n.parent;
        }
        return !1;
      }
      function nb(e, t = !1) {
        if (null == e || t) {
          if (null != e)
            try {
              e.focus();
            } catch {}
        } else
          try {
            tE(e);
          } catch {}
      }
      function ny(e, t = !0) {
        let r = e[0].previousElementSibling,
          n = np(e),
          o = nS(n, { tabbable: t }, e);
        o.currentNode = r;
        let l = o.nextNode();
        return (
          t &&
            !l &&
            (((o = nS((n = np(e)), { tabbable: !1 }, e)).currentNode = r),
            (l = o.nextNode())),
          l
        );
      }
      function nx(e, t = !0) {
        nb(ny(e, t));
      }
      function nw(e) {
        let t = nT.getTreeNode(ns);
        for (; t && t.scopeRef !== e; ) {
          if (t.nodeToRestore) return !1;
          t = t.parent;
        }
        return (null == t ? void 0 : t.scopeRef) === e;
      }
      function nE(e) {
        e.dispatchEvent(new CustomEvent(na, { bubbles: !0, cancelable: !0 })) &&
          nb(e);
      }
      function nS(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? nf : nd,
          o = e8(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (
                null == t
                  ? void 0
                  : null === (o = t.from) || void 0 === o
                  ? void 0
                  : o.contains(e)
              )
                ? NodeFilter.FILTER_REJECT
                : e.matches(n) &&
                  (function e(t, r) {
                    return (
                      "#comment" !== t.nodeName &&
                      (function (e) {
                        let t = e7(e);
                        if (
                          !(e instanceof t.HTMLElement) &&
                          !(e instanceof t.SVGElement)
                        )
                          return !1;
                        let { display: r, visibility: n } = e.style,
                          o =
                            "none" !== r && "hidden" !== n && "collapse" !== n;
                        if (o) {
                          let { getComputedStyle: t } =
                              e.ownerDocument.defaultView,
                            { display: r, visibility: n } = t(e);
                          o =
                            "none" !== r && "hidden" !== n && "collapse" !== n;
                        }
                        return o;
                      })(t) &&
                      !t.hasAttribute("hidden") &&
                      !t.hasAttribute("data-react-aria-prevent-focus") &&
                      ("DETAILS" !== t.nodeName ||
                        !r ||
                        "SUMMARY" === r.nodeName ||
                        t.hasAttribute("open")) &&
                      (!t.parentElement || e(t.parentElement, t))
                    );
                  })(e) &&
                  (!r || nh(e, r)) &&
                  (!(null == t ? void 0 : t.accept) || t.accept(e))
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o;
      }
      class nP {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new nC({ scopeRef: e });
          n.addChild(o),
            (o.parent = n),
            this.fastMap.set(e, o),
            r && (o.nodeToRestore = r);
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e);
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse())
            e !== t &&
              t.nodeToRestore &&
              e.nodeToRestore &&
              t.scopeRef &&
              t.scopeRef.current &&
              nh(e.nodeToRestore, t.scopeRef.current) &&
              (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r &&
            (r.removeChild(t),
            n.size > 0 && n.forEach((e) => r && r.addChild(e))),
            this.fastMap.delete(t.scopeRef);
        }
        *traverse(e = this.root) {
          if ((null != e.scopeRef && (yield e), e.children.size > 0))
            for (let t of e.children) yield* this.traverse(t);
        }
        clone() {
          var e, t;
          let r = new nP();
          for (let n of this.traverse())
            r.addTreeNode(
              n.scopeRef,
              null !==
                (t =
                  null === (e = n.parent) || void 0 === e
                    ? void 0
                    : e.scopeRef) && void 0 !== t
                ? t
                : null,
              n.nodeToRestore
            );
          return r;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new nC({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class nC {
        addChild(e) {
          this.children.add(e), (e.parent = this);
        }
        removeChild(e) {
          this.children.delete(e), (e.parent = void 0);
        }
        constructor(e) {
          (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = e.scopeRef);
        }
      }
      let nT = new nP();
      var nk = ek({
          slots: {
            base: "w-full relative flex flex-col gap-1 p-1 overflow-clip",
            list: "w-full flex flex-col gap-0.5 outline-none",
            emptyContent: [
              "h-10",
              "px-2",
              "py-1.5",
              "w-full",
              "h-full",
              "text-foreground-400",
              "text-start",
            ],
          },
        }),
        nM = ek({
          slots: {
            base: [
              "flex",
              "group",
              "gap-2",
              "items-center",
              "justify-between",
              "relative",
              "px-2",
              "py-1.5",
              "w-full",
              "h-full",
              "box-border",
              "rounded-small",
              "subpixel-antialiased",
              "outline-none",
              "cursor-pointer",
              "tap-highlight-transparent",
              ...eM,
              "data-[focus-visible=true]:dark:ring-offset-background-content1",
            ],
            wrapper: "w-full flex flex-col items-start justify-center",
            title: "flex-1 text-small font-normal",
            description: [
              "w-full",
              "text-tiny",
              "text-foreground-500",
              "group-hover:text-current",
            ],
            selectedIcon: ["text-inherit", "w-3", "h-3", "flex-shrink-0"],
            shortcut: [
              "px-1",
              "py-0.5",
              "rounded",
              "font-sans",
              "text-foreground-500",
              "text-tiny",
              "border-small",
              "border-default-300",
              "group-hover:border-current",
            ],
          },
          variants: {
            variant: {
              solid: { base: "" },
              bordered: {
                base: "border-medium border-transparent bg-transparent",
              },
              light: { base: "bg-transparent" },
              faded: {
                base: [
                  "border-small border-transparent hover:border-default data-[hover=true]:bg-default-100",
                  "data-[selectable=true]:focus:border-default data-[selectable=true]:focus:bg-default-100",
                ],
              },
              flat: { base: "" },
              shadow: { base: "data-[hover=true]:shadow-lg" },
            },
            color: {
              default: {},
              primary: {},
              secondary: {},
              success: {},
              warning: {},
              danger: {},
            },
            showDivider: {
              true: {
                base: [
                  "mb-1.5",
                  "after:content-['']",
                  "after:absolute",
                  "after:-bottom-1",
                  "after:left-0",
                  "after:right-0",
                  "after:h-divider",
                  "after:bg-divider",
                ],
              },
              false: {},
            },
            isDisabled: {
              true: { base: "opacity-disabled pointer-events-none" },
            },
            disableAnimation: {
              true: {},
              false: { base: "data-[hover=true]:transition-colors" },
            },
            hasTitleTextChild: { true: { title: "truncate" } },
            hasDescriptionTextChild: { true: { description: "truncate" } },
          },
          defaultVariants: {
            variant: "solid",
            color: "default",
            showDivider: !1,
          },
          compoundVariants: [
            {
              variant: "solid",
              color: "default",
              class: {
                base: [
                  "data-[hover=true]:bg-default",
                  "data-[hover=true]:text-default-foreground",
                  "data-[selectable=true]:focus:bg-default",
                  "data-[selectable=true]:focus:text-default-foreground",
                ],
              },
            },
            {
              variant: "solid",
              color: "primary",
              class: {
                base: [
                  "data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground",
                  "data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground",
                ],
              },
            },
            {
              variant: "solid",
              color: "secondary",
              class: {
                base: [
                  "data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
                  "data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground",
                ],
              },
            },
            {
              variant: "solid",
              color: "success",
              class: {
                base: [
                  "data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
                  "data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground",
                ],
              },
            },
            {
              variant: "solid",
              color: "warning",
              class: {
                base: [
                  "data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
                  "data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground",
                ],
              },
            },
            {
              variant: "solid",
              color: "danger",
              class: {
                base: [
                  "data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
                  "data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground",
                ],
              },
            },
            {
              variant: "shadow",
              color: "default",
              class: {
                base: [
                  "data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground",
                  "data-[selectable=true]:focus:shadow-default/50 data-[selectable=true]:focus:bg-default data-[selectable=true]:focus:text-default-foreground",
                ],
              },
            },
            {
              variant: "shadow",
              color: "primary",
              class: {
                base: [
                  "data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground",
                  "data-[selectable=true]:focus:shadow-primary/30 data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground",
                ],
              },
            },
            {
              variant: "shadow",
              color: "secondary",
              class: {
                base: [
                  "data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
                  "data-[selectable=true]:focus:shadow-secondary/30 data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground",
                ],
              },
            },
            {
              variant: "shadow",
              color: "success",
              class: {
                base: [
                  "data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
                  "data-[selectable=true]:focus:shadow-success/30 data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground",
                ],
              },
            },
            {
              variant: "shadow",
              color: "warning",
              class: {
                base: [
                  "data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
                  "data-[selectable=true]:focus:shadow-warning/30 data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground",
                ],
              },
            },
            {
              variant: "shadow",
              color: "danger",
              class: {
                base: [
                  "data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
                  "data-[selectable=true]:focus:shadow-danger/30 data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground",
                ],
              },
            },
            {
              variant: "bordered",
              color: "default",
              class: {
                base: [
                  "data-[hover=true]:border-default",
                  "data-[selectable=true]:focus:border-default",
                ],
              },
            },
            {
              variant: "bordered",
              color: "primary",
              class: {
                base: [
                  "data-[hover=true]:border-primary data-[hover=true]:text-primary",
                  "data-[selectable=true]:focus:border-primary data-[selectable=true]:focus:text-primary",
                ],
              },
            },
            {
              variant: "bordered",
              color: "secondary",
              class: {
                base: [
                  "data-[hover=true]:border-secondary data-[hover=true]:text-secondary",
                  "data-[selectable=true]:focus:border-secondary data-[selectable=true]:focus:text-secondary",
                ],
              },
            },
            {
              variant: "bordered",
              color: "success",
              class: {
                base: [
                  "data-[hover=true]:border-success data-[hover=true]:text-success",
                  "data-[selectable=true]:focus:border-success data-[selectable=true]:focus:text-success",
                ],
              },
            },
            {
              variant: "bordered",
              color: "warning",
              class: {
                base: [
                  "data-[hover=true]:border-warning data-[hover=true]:text-warning",
                  "data-[selectable=true]:focus:border-warning data-[selectable=true]:focus:text-warning",
                ],
              },
            },
            {
              variant: "bordered",
              color: "danger",
              class: {
                base: [
                  "data-[hover=true]:border-danger data-[hover=true]:text-danger",
                  "data-[selectable=true]:focus:border-danger data-[selectable=true]:focus:text-danger",
                ],
              },
            },
            {
              variant: "flat",
              color: "default",
              class: {
                base: [
                  "data-[hover=true]:bg-default/40",
                  "data-[hover=true]:text-default-foreground",
                  "data-[selectable=true]:focus:bg-default/40",
                  "data-[selectable=true]:focus:text-default-foreground",
                ],
              },
            },
            {
              variant: "flat",
              color: "primary",
              class: {
                base: [
                  "data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary",
                  "data-[selectable=true]:focus:bg-primary/20 data-[selectable=true]:focus:text-primary",
                ],
              },
            },
            {
              variant: "flat",
              color: "secondary",
              class: {
                base: [
                  "data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary",
                  "data-[selectable=true]:focus:bg-secondary/20 data-[selectable=true]:focus:text-secondary",
                ],
              },
            },
            {
              variant: "flat",
              color: "success",
              class: {
                base: [
                  "data-[hover=true]:bg-success/20 data-[hover=true]:text-success",
                  "data-[selectable=true]:focus:bg-success/20 data-[selectable=true]:focus:text-success",
                ],
              },
            },
            {
              variant: "flat",
              color: "warning",
              class: {
                base: [
                  "data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning",
                  "data-[selectable=true]:focus:bg-warning/20 data-[selectable=true]:focus:text-warning",
                ],
              },
            },
            {
              variant: "flat",
              color: "danger",
              class: {
                base: [
                  "data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger",
                  "data-[selectable=true]:focus:bg-danger/20 data-[selectable=true]:focus:text-danger",
                ],
              },
            },
            {
              variant: "faded",
              color: "default",
              class: {
                base: [
                  "data-[hover=true]:text-default-foreground",
                  "data-[selectable=true]:focus:text-default-foreground",
                ],
              },
            },
            {
              variant: "faded",
              color: "primary",
              class: {
                base: [
                  "data-[hover=true]:text-primary",
                  "data-[selectable=true]:focus:text-primary",
                ],
              },
            },
            {
              variant: "faded",
              color: "secondary",
              class: {
                base: [
                  "data-[hover=true]:text-secondary",
                  "data-[selectable=true]:focus:text-secondary",
                ],
              },
            },
            {
              variant: "faded",
              color: "success",
              class: {
                base: [
                  "data-[hover=true]:text-success",
                  "data-[selectable=true]:focus:text-success",
                ],
              },
            },
            {
              variant: "faded",
              color: "warning",
              class: {
                base: [
                  "data-[hover=true]:text-warning",
                  "data-[selectable=true]:focus:text-warning",
                ],
              },
            },
            {
              variant: "faded",
              color: "danger",
              class: {
                base: [
                  "data-[hover=true]:text-danger",
                  "data-[selectable=true]:focus:text-danger",
                ],
              },
            },
            {
              variant: "light",
              color: "default",
              class: {
                base: [
                  "data-[hover=true]:text-default-500",
                  "data-[selectable=true]:focus:text-default-500",
                ],
              },
            },
            {
              variant: "light",
              color: "primary",
              class: {
                base: [
                  "data-[hover=true]:text-primary",
                  "data-[selectable=true]:focus:text-primary",
                ],
              },
            },
            {
              variant: "light",
              color: "secondary",
              class: {
                base: [
                  "data-[hover=true]:text-secondary",
                  "data-[selectable=true]:focus:text-secondary",
                ],
              },
            },
            {
              variant: "light",
              color: "success",
              class: {
                base: [
                  "data-[hover=true]:text-success",
                  "data-[selectable=true]:focus:text-success",
                ],
              },
            },
            {
              variant: "light",
              color: "warning",
              class: {
                base: [
                  "data-[hover=true]:text-warning",
                  "data-[selectable=true]:focus:text-warning",
                ],
              },
            },
            {
              variant: "light",
              color: "danger",
              class: {
                base: [
                  "data-[hover=true]:text-danger",
                  "data-[selectable=true]:focus:text-danger",
                ],
              },
            },
          ],
        }),
        nK = ek({
          slots: {
            base: "relative mb-2",
            heading: "pl-1 text-tiny text-foreground-500",
            group: "data-[has-title=true]:pt-1",
            divider: "mt-2",
          },
        });
      function nD(e) {
        let { isSelected: t, disableAnimation: r, ...n } = e;
        return (0, r$.jsx)("svg", {
          "aria-hidden": "true",
          "data-selected": t,
          role: "presentation",
          viewBox: "0 0 17 18",
          ...n,
          children: (0, r$.jsx)("polyline", {
            fill: "none",
            points: "1 9 7 14 15 4",
            stroke: "currentColor",
            strokeDasharray: 22,
            strokeDashoffset: t ? 44 : 66,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            style: r ? {} : { transition: "stroke-dashoffset 200ms ease" },
          }),
        });
      }
      let nO = new WeakMap();
      function nI() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === "Enter";
      }
      function nA() {
        let e = window.event;
        return (
          (null == e ? void 0 : e.key) === " " ||
          (null == e ? void 0 : e.code) === "Space"
        );
      }
      var nL = (e) => {
        let {
            Component: t,
            rendered: r,
            description: n,
            isSelectable: o,
            isSelected: a,
            isDisabled: u,
            selectedIcon: c,
            startContent: d,
            endContent: f,
            hideSelectedIcon: p,
            disableAnimation: g,
            getItemProps: h,
            getLabelProps: m,
            getWrapperProps: v,
            getDescriptionProps: b,
            getSelectedIconProps: y,
          } = (function (e) {
            var t, r;
            let n = (0, l.o)(),
              [o, a] = s(e, nM.variantKeys),
              {
                as: u,
                item: c,
                state: d,
                description: f,
                startContent: p,
                endContent: g,
                isVirtualized: h,
                selectedIcon: m,
                className: v,
                classNames: b,
                autoFocus: y,
                onPress: x,
                onPressUp: w,
                onPressStart: E,
                onPressEnd: S,
                onPressChange: P,
                onClick: C,
                shouldHighlightOnFocus: T,
                hideSelectedIcon: k = !1,
                isReadOnly: M = !1,
                ...K
              } = o,
              D =
                null !=
                  (r =
                    null != (t = e.disableAnimation)
                      ? t
                      : null == n
                      ? void 0
                      : n.disableAnimation) && r,
              O = (0, i.useRef)(null),
              I = u || (e.href ? "a" : "li"),
              A = "string" == typeof I,
              { rendered: L, key: R } = c,
              j = d.disabledKeys.has(R) || e.isDisabled,
              z = "none" !== d.selectionManager.selectionMode,
              N =
                !(0, eq.wR)() &&
                "undefined" != typeof window &&
                window.screen.width <= 700;
            C &&
              "function" == typeof C &&
              eH(
                "onClick is deprecated, please use onPress instead. See: https://github.com/heroui-inc/heroui/issues/4292",
                "ListboxItem"
              );
            let { pressProps: F, isPressed: B } = tW({
                ref: O,
                isDisabled: j,
                onPress: x,
                onPressUp: w,
                onPressStart: E,
                onPressEnd: S,
                onPressChange: P,
              }),
              { isHovered: _, hoverProps: W } = t8({ isDisabled: j }),
              { isFocusVisible: V, focusProps: H } = t1({ autoFocus: y }),
              {
                isFocused: $,
                isSelected: U,
                optionProps: G,
                labelProps: Y,
                descriptionProps: q,
              } = (function (e, t, r) {
                var n, o, l, a, s, u, c, d;
                let { key: f } = e,
                  p = r6.get(t),
                  g =
                    null !== (l = e.isDisabled) && void 0 !== l
                      ? l
                      : t.selectionManager.isDisabled(f),
                  h =
                    null !== (a = e.isSelected) && void 0 !== a
                      ? a
                      : t.selectionManager.isSelected(f),
                  m =
                    null !== (s = e.shouldSelectOnPressUp) && void 0 !== s
                      ? s
                      : null == p
                      ? void 0
                      : p.shouldSelectOnPressUp,
                  v =
                    null !== (u = e.shouldFocusOnHover) && void 0 !== u
                      ? u
                      : null == p
                      ? void 0
                      : p.shouldFocusOnHover,
                  b =
                    null !== (c = e.shouldUseVirtualFocus) && void 0 !== c
                      ? c
                      : null == p
                      ? void 0
                      : p.shouldUseVirtualFocus,
                  y =
                    null !== (d = e.isVirtualized) && void 0 !== d
                      ? d
                      : null == p
                      ? void 0
                      : p.isVirtualized,
                  x = eQ(),
                  w = eQ(),
                  E = {
                    role: "option",
                    "aria-disabled": g || void 0,
                    "aria-selected":
                      "none" !== t.selectionManager.selectionMode ? h : void 0,
                  };
                ((0, e$.cX)() && (0, e$.Tc)()) ||
                  ((E["aria-label"] = e["aria-label"]),
                  (E["aria-labelledby"] = x),
                  (E["aria-describedby"] = w));
                let S = t.collection.getItem(f);
                if (y) {
                  let e = Number(null == S ? void 0 : S.index);
                  (E["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1),
                    (E["aria-setsize"] = (function (e) {
                      let t = nO.get(e);
                      if (null != t) return t;
                      let r = 0,
                        n = (t) => {
                          for (let o of t)
                            "section" === o.type ? n(rr(o, e)) : r++;
                        };
                      return n(e), nO.set(e, r), r;
                    })(t.collection));
                }
                let P = (null == p ? void 0 : p.onAction)
                    ? () => {
                        var e;
                        return null == p
                          ? void 0
                          : null === (e = p.onAction) || void 0 === e
                          ? void 0
                          : e.call(p, f);
                      }
                    : void 0,
                  C = (function (e, t) {
                    let r = r6.get(e);
                    if (!r) throw Error("Unknown list");
                    return `${r.id}-option-${
                      "string" == typeof t ? t.replace(/\s*/g, "") : "" + t
                    }`;
                  })(t, f),
                  {
                    itemProps: T,
                    isPressed: k,
                    isFocused: M,
                    hasAction: K,
                    allowsSelection: D,
                  } = (function (e) {
                    let {
                        id: t,
                        selectionManager: r,
                        key: n,
                        ref: o,
                        shouldSelectOnPressUp: l,
                        shouldUseVirtualFocus: a,
                        focus: s,
                        isDisabled: u,
                        onAction: c,
                        allowsDifferentPressOrigin: d,
                        linkBehavior: f = "action",
                      } = e,
                      p = (0, tN.rd)();
                    t = eJ(t);
                    let g = (e) => {
                      if ("keyboard" === e.pointerType && r8(e))
                        r.toggleSelection(n);
                      else {
                        if ("none" === r.selectionMode) return;
                        if (r.isLink(n)) {
                          if ("selection" === f && o.current) {
                            let t = r.getItemProps(n);
                            p.open(o.current, e, t.href, t.routerOptions),
                              r.setSelectedKeys(r.selectedKeys);
                            return;
                          }
                          if ("override" === f || "none" === f) return;
                        }
                        "single" === r.selectionMode
                          ? r.isSelected(n) && !r.disallowEmptySelection
                            ? r.toggleSelection(n)
                            : r.replaceSelection(n)
                          : e && e.shiftKey
                          ? r.extendSelection(n)
                          : "toggle" === r.selectionBehavior ||
                            (e &&
                              (r7(e) ||
                                "touch" === e.pointerType ||
                                "virtual" === e.pointerType))
                          ? r.toggleSelection(n)
                          : r.replaceSelection(n);
                      }
                    };
                    (0, i.useEffect)(() => {
                      if (n === r.focusedKey && r.isFocused) {
                        if (a) {
                          var e;
                          let t = new CustomEvent(nn, {
                            cancelable: !0,
                            bubbles: !0,
                          });
                          null === (e = o.current) ||
                            void 0 === e ||
                            e.dispatchEvent(t);
                        } else
                          s
                            ? s()
                            : document.activeElement !== o.current &&
                              o.current &&
                              tE(o.current);
                      }
                    }, [
                      o,
                      n,
                      r.focusedKey,
                      r.childFocusStrategy,
                      r.isFocused,
                      a,
                    ]),
                      (u = u || r.isDisabled(n));
                    let h = {};
                    a || u
                      ? u &&
                        (h.onMouseDown = (e) => {
                          e.preventDefault();
                        })
                      : (h = {
                          tabIndex: n === r.focusedKey ? 0 : -1,
                          onFocus(e) {
                            e.target === o.current && r.setFocusedKey(n);
                          },
                        });
                    let m = r.isLink(n) && "override" === f,
                      v = r.isLink(n) && "selection" !== f && "none" !== f,
                      b = !u && r.canSelectItem(n) && !m,
                      y = (c || v) && !u,
                      x =
                        y &&
                        ("replace" === r.selectionBehavior
                          ? !b
                          : !b || r.isEmpty),
                      w = y && b && "replace" === r.selectionBehavior,
                      E = x || w,
                      S = (0, i.useRef)(null),
                      P = E && b,
                      C = (0, i.useRef)(!1),
                      T = (0, i.useRef)(!1),
                      k = (e) => {
                        if ((c && c(), v && o.current)) {
                          let t = r.getItemProps(n);
                          p.open(o.current, e, t.href, t.routerOptions);
                        }
                      },
                      M = {};
                    l
                      ? ((M.onPressStart = (e) => {
                          (S.current = e.pointerType),
                            (C.current = P),
                            "keyboard" === e.pointerType &&
                              (!E || nA()) &&
                              g(e);
                        }),
                        d
                          ? ((M.onPressUp = x
                              ? void 0
                              : (e) => {
                                  "mouse" === e.pointerType && b && g(e);
                                }),
                            (M.onPress = x
                              ? k
                              : (e) => {
                                  "keyboard" !== e.pointerType &&
                                    "mouse" !== e.pointerType &&
                                    b &&
                                    g(e);
                                }))
                          : (M.onPress = (e) => {
                              x || (w && "mouse" !== e.pointerType)
                                ? ("keyboard" !== e.pointerType || nI()) && k(e)
                                : "keyboard" !== e.pointerType && b && g(e);
                            }))
                      : ((M.onPressStart = (e) => {
                          (S.current = e.pointerType),
                            (C.current = P),
                            (T.current = x),
                            b &&
                              (("mouse" === e.pointerType && !x) ||
                                ("keyboard" === e.pointerType &&
                                  (!y || nA()))) &&
                              g(e);
                        }),
                        (M.onPress = (e) => {
                          ("touch" === e.pointerType ||
                            "pen" === e.pointerType ||
                            "virtual" === e.pointerType ||
                            ("keyboard" === e.pointerType && E && nI()) ||
                            ("mouse" === e.pointerType && T.current)) &&
                            (E ? k(e) : b && g(e));
                        })),
                      (h["data-key"] = n),
                      (M.preventFocusOnPress = a);
                    let { pressProps: K, isPressed: D } = tW(M),
                      O = w
                        ? (e) => {
                            "mouse" === S.current &&
                              (e.stopPropagation(), e.preventDefault(), k(e));
                          }
                        : void 0,
                      { longPressProps: I } = rR({
                        isDisabled: !P,
                        onLongPress(e) {
                          "touch" === e.pointerType &&
                            (g(e), r.setSelectionBehavior("toggle"));
                        },
                      });
                    return {
                      itemProps: e1(h, b || x ? K : {}, P ? I : {}, {
                        onDoubleClick: O,
                        onDragStartCapture: (e) => {
                          "touch" === S.current &&
                            C.current &&
                            e.preventDefault();
                        },
                        onClick: r.isLink(n)
                          ? (e) => {
                              tN.Fe.isOpening || e.preventDefault();
                            }
                          : void 0,
                        id: t,
                      }),
                      isPressed: D,
                      isSelected: r.isSelected(n),
                      isFocused: r.isFocused && r.focusedKey === n,
                      isDisabled: u,
                      allowsSelection: b,
                      hasAction: E,
                    };
                  })({
                    selectionManager: t.selectionManager,
                    key: f,
                    ref: r,
                    shouldSelectOnPressUp: m,
                    allowsDifferentPressOrigin: m && v,
                    isVirtualized: y,
                    shouldUseVirtualFocus: b,
                    isDisabled: g,
                    onAction:
                      P ||
                      (null == S
                        ? void 0
                        : null === (n = S.props) || void 0 === n
                        ? void 0
                        : n.onAction)
                        ? eU(
                            null == S
                              ? void 0
                              : null === (o = S.props) || void 0 === o
                              ? void 0
                              : o.onAction,
                            P
                          )
                        : void 0,
                    linkBehavior: null == p ? void 0 : p.linkBehavior,
                    id: C,
                  }),
                  { hoverProps: O } = t8({
                    isDisabled: g || !v,
                    onHoverStart() {
                      ty() ||
                        (t.selectionManager.setFocused(!0),
                        t.selectionManager.setFocusedKey(f));
                    },
                  }),
                  I = e6(null == S ? void 0 : S.props);
                delete I.id;
                let A = (0, tN._h)(null == S ? void 0 : S.props);
                return {
                  optionProps: { ...E, ...e1(I, T, O, A), id: C },
                  labelProps: { id: x },
                  descriptionProps: { id: w },
                  isFocused: M,
                  isFocusVisible: M && ty(),
                  isSelected: h,
                  isDisabled: g,
                  isPressed: k,
                  allowsSelection: D,
                  hasAction: K,
                };
              })(
                {
                  key: R,
                  isDisabled: j,
                  "aria-label": o["aria-label"],
                  isVirtualized: h,
                },
                d,
                O
              ),
              X = G,
              Z = (0, i.useMemo)(
                () =>
                  nM({
                    ...a,
                    isDisabled: j,
                    disableAnimation: D,
                    hasTitleTextChild: "string" == typeof L,
                    hasDescriptionTextChild: "string" == typeof f,
                  }),
                [eW(a), j, D, L, f]
              ),
              J = eB(null == b ? void 0 : b.base, v);
            M &&
              (X = (function (e) {
                for (let t in e) t.startsWith("on") && delete e[t];
                return e;
              })(X));
            let Q = (T && $) || (N ? _ || B : _ || ($ && !V)),
              ee = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "aria-hidden": eF(!0),
                    "data-disabled": eF(j),
                    className: Z.selectedIcon({
                      class: null == b ? void 0 : b.selectedIcon,
                    }),
                    ...e,
                  };
                },
                [j, Z, b]
              );
            return {
              Component: I,
              domRef: O,
              slots: Z,
              classNames: b,
              isSelectable: z,
              isSelected: U,
              isDisabled: j,
              rendered: L,
              description: f,
              startContent: p,
              endContent: g,
              selectedIcon: m,
              hideSelectedIcon: k,
              disableAnimation: D,
              getItemProps: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  ref: O,
                  ...e1(
                    { onClick: C },
                    X,
                    M ? {} : e1(H, F),
                    W,
                    ej(K, { enabled: A }),
                    e
                  ),
                  "data-selectable": eF(z),
                  "data-focus": eF($),
                  "data-hover": eF(Q),
                  "data-disabled": eF(j),
                  "data-selected": eF(U),
                  "data-pressed": eF(B),
                  "data-focus-visible": eF(V),
                  className: Z.base({ class: eB(J, e.className) }),
                };
              },
              getLabelProps: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  ...e1(Y, e),
                  "data-label": eF(!0),
                  className: Z.title({ class: null == b ? void 0 : b.title }),
                };
              },
              getWrapperProps: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  ...e1(e),
                  className: Z.wrapper({
                    class: null == b ? void 0 : b.wrapper,
                  }),
                };
              },
              getDescriptionProps: function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                return {
                  ...e1(q, e),
                  className: Z.description({
                    class: null == b ? void 0 : b.description,
                  }),
                };
              },
              getSelectedIconProps: ee,
            };
          })(e),
          x = (0, i.useMemo)(() => {
            let e = (0, r$.jsx)(nD, { disableAnimation: g, isSelected: a });
            return "function" == typeof c
              ? c({ icon: e, isSelected: a, isDisabled: u })
              : c || e;
          }, [c, a, u, g]);
        return (0, r$.jsxs)(t, {
          ...h(),
          children: [
            d,
            n
              ? (0, r$.jsxs)("div", {
                  ...v(),
                  children: [
                    (0, r$.jsx)("span", { ...m(), children: r }),
                    (0, r$.jsx)("span", { ...b(), children: n }),
                  ],
                })
              : (0, r$.jsx)("span", { ...m(), children: r }),
            o && !p && (0, r$.jsx)("span", { ...y(), children: x }),
            f,
          ],
        });
      };
      nL.displayName = "HeroUI.ListboxItem";
      var nR = ek({
          base: "shrink-0 bg-divider border-none",
          variants: {
            orientation: {
              horizontal: "w-full h-divider",
              vertical: "h-full w-divider",
            },
          },
          defaultVariants: { orientation: "horizontal" },
        }),
        nj = a((e, t) => {
          let { Component: r, getDividerProps: n } = (function (e) {
            var t;
            let r, n;
            let { as: o, className: l, orientation: a, ...s } = e,
              u = o || "hr";
            "hr" === u && "vertical" === a && (u = "div");
            let { separatorProps: c } =
                ((n = ej(
                  (t = {
                    elementType: "string" == typeof u ? u : "hr",
                    orientation: a,
                  }),
                  { enabled: "string" == typeof t.elementType }
                )),
                ("vertical" === t.orientation && (r = "vertical"),
                "hr" !== t.elementType)
                  ? {
                      separatorProps: {
                        ...n,
                        role: "separator",
                        "aria-orientation": r,
                      },
                    }
                  : { separatorProps: n }),
              d = (0, i.useMemo)(
                () => nR({ orientation: a, className: l }),
                [a, l]
              );
            return {
              Component: u,
              getDividerProps: (0, i.useCallback)(
                (e = {}) => ({
                  className: d,
                  role: "separator",
                  "data-orientation": a,
                  ...c,
                  ...s,
                  ...e,
                }),
                [d, a, c, s]
              ),
            };
          })({ ...e });
          return (0, r$.jsx)(r, { ref: t, ...n() });
        });
      nj.displayName = "HeroUI.Divider";
      var nz = a((e, t) => {
        let {
            item: r,
            state: n,
            as: o,
            variant: l,
            color: a,
            disableAnimation: s,
            className: u,
            classNames: c,
            hideSelectedIcon: d,
            showDivider: f = !1,
            dividerProps: p = {},
            itemClasses: g,
            title: h,
            items: m,
            ...v
          } = e,
          b = (0, i.useMemo)(() => nK(), []),
          y = eB(null == c ? void 0 : c.base, u),
          x = eB(
            null == c ? void 0 : c.divider,
            null == p ? void 0 : p.className
          ),
          {
            itemProps: w,
            headingProps: E,
            groupProps: S,
          } = (function (e) {
            let { heading: t, "aria-label": r } = e,
              n = eJ();
            return {
              itemProps: { role: "presentation" },
              headingProps: t ? { id: n, role: "presentation" } : {},
              groupProps: {
                role: "group",
                "aria-label": r,
                "aria-labelledby": t ? n : void 0,
              },
            };
          })({ heading: r.rendered, "aria-label": r["aria-label"] });
        return (0, r$.jsxs)(
          o || "li",
          {
            "data-slot": "base",
            ...e1(w, v),
            className: b.base({ class: y }),
            children: [
              r.rendered &&
                (0, r$.jsx)("span", {
                  ...E,
                  className: b.heading({
                    class: null == c ? void 0 : c.heading,
                  }),
                  "data-slot": "heading",
                  children: r.rendered,
                }),
              (0, r$.jsxs)("ul", {
                ...S,
                className: b.group({ class: null == c ? void 0 : c.group }),
                "data-has-title": !!r.rendered,
                "data-slot": "group",
                children: [
                  [...r.childNodes].map((e) => {
                    let { key: t, props: r } = e,
                      o = (0, r$.jsx)(
                        nL,
                        {
                          classNames: g,
                          color: a,
                          disableAnimation: s,
                          hideSelectedIcon: d,
                          item: e,
                          state: n,
                          variant: l,
                          ...r,
                        },
                        t
                      );
                    return e.wrapper && (o = e.wrapper(o)), o;
                  }),
                  f &&
                    (0, r$.jsx)(nj, {
                      as: "li",
                      className: b.divider({ class: x }),
                      ...p,
                    }),
                ],
              }),
            ],
          },
          r.key
        );
      });
      function nN(e, t, r) {
        let n,
          o = r.initialDeps ?? [];
        return () => {
          var l, i, a, s;
          let u, c;
          r.key &&
            (null == (l = r.debug) ? void 0 : l.call(r)) &&
            (u = Date.now());
          let d = e();
          if (!(d.length !== o.length || d.some((e, t) => o[t] !== e)))
            return n;
          if (
            ((o = d),
            r.key &&
              (null == (i = r.debug) ? void 0 : i.call(r)) &&
              (c = Date.now()),
            (n = t(...d)),
            r.key && (null == (a = r.debug) ? void 0 : a.call(r)))
          ) {
            let e = Math.round((Date.now() - u) * 100) / 100,
              t = Math.round((Date.now() - c) * 100) / 100,
              n = t / 16,
              o = (e, t) => {
                for (e = String(e); e.length < t; ) e = " " + e;
                return e;
              };
            console.info(
              `%c⏱ ${o(t, 5)} /${o(e, 5)} ms`,
              `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
              0,
              Math.min(120 - 120 * n, 120)
            )}deg 100% 31%);`,
              null == r ? void 0 : r.key
            );
          }
          return (
            null == (s = null == r ? void 0 : r.onChange) || s.call(r, n), n
          );
        };
      }
      function nF(e, t) {
        if (void 0 !== e) return e;
        throw Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
      }
      nz.displayName = "HeroUI.ListboxSection";
      let nB = (e, t) => 1 > Math.abs(e - t),
        n_ = (e, t, r) => {
          let n;
          return function (...o) {
            e.clearTimeout(n), (n = e.setTimeout(() => t.apply(this, o), r));
          };
        },
        nW = (e) => e,
        nV = (e) => {
          let t = Math.max(e.startIndex - e.overscan, 0),
            r = Math.min(e.endIndex + e.overscan, e.count - 1),
            n = [];
          for (let e = t; e <= r; e++) n.push(e);
          return n;
        },
        nH = (e, t) => {
          let r = e.scrollElement;
          if (!r) return;
          let n = e.targetWindow;
          if (!n) return;
          let o = (e) => {
            let { width: r, height: n } = e;
            t({ width: Math.round(r), height: Math.round(n) });
          };
          if ((o(r.getBoundingClientRect()), !n.ResizeObserver))
            return () => {};
          let l = new n.ResizeObserver((e) => {
            let t = e[0];
            if (null == t ? void 0 : t.borderBoxSize) {
              let e = t.borderBoxSize[0];
              if (e) {
                o({ width: e.inlineSize, height: e.blockSize });
                return;
              }
            }
            o(r.getBoundingClientRect());
          });
          return (
            l.observe(r, { box: "border-box" }),
            () => {
              l.unobserve(r);
            }
          );
        },
        n$ = { passive: !0 },
        nU = "undefined" == typeof window || "onscrollend" in window,
        nG = (e, t) => {
          let r = e.scrollElement;
          if (!r) return;
          let n = e.targetWindow;
          if (!n) return;
          let o = 0,
            l =
              e.options.useScrollendEvent && nU
                ? () => void 0
                : n_(
                    n,
                    () => {
                      t(o, !1);
                    },
                    e.options.isScrollingResetDelay
                  ),
            i = (n) => () => {
              let { horizontal: i, isRtl: a } = e.options;
              (o = i ? r.scrollLeft * ((a && -1) || 1) : r.scrollTop),
                l(),
                t(o, n);
            },
            a = i(!0),
            s = i(!1);
          return (
            s(),
            r.addEventListener("scroll", a, n$),
            r.addEventListener("scrollend", s, n$),
            () => {
              r.removeEventListener("scroll", a),
                r.removeEventListener("scrollend", s);
            }
          );
        },
        nY = (e, t, r) => {
          if (null == t ? void 0 : t.borderBoxSize) {
            let e = t.borderBoxSize[0];
            if (e)
              return Math.round(
                e[r.options.horizontal ? "inlineSize" : "blockSize"]
              );
          }
          return Math.round(
            e.getBoundingClientRect()[r.options.horizontal ? "width" : "height"]
          );
        },
        nq = (e, { adjustments: t = 0, behavior: r }, n) => {
          var o, l;
          null == (l = null == (o = n.scrollElement) ? void 0 : o.scrollTo) ||
            l.call(o, {
              [n.options.horizontal ? "left" : "top"]: e + t,
              behavior: r,
            });
        };
      class nX {
        constructor(e) {
          (this.unsubs = []),
            (this.scrollElement = null),
            (this.targetWindow = null),
            (this.isScrolling = !1),
            (this.scrollToIndexTimeoutId = null),
            (this.measurementsCache = []),
            (this.itemSizeCache = new Map()),
            (this.pendingMeasuredCacheIndexes = []),
            (this.scrollRect = null),
            (this.scrollOffset = null),
            (this.scrollDirection = null),
            (this.scrollAdjustments = 0),
            (this.elementsCache = new Map()),
            (this.observer = (() => {
              let e = null,
                t = () =>
                  e ||
                  (this.targetWindow && this.targetWindow.ResizeObserver
                    ? (e = new this.targetWindow.ResizeObserver((e) => {
                        e.forEach((e) => {
                          this._measureElement(e.target, e);
                        });
                      }))
                    : null);
              return {
                disconnect: () => {
                  var r;
                  null == (r = t()) || r.disconnect(), (e = null);
                },
                observe: (e) => {
                  var r;
                  return null == (r = t())
                    ? void 0
                    : r.observe(e, { box: "border-box" });
                },
                unobserve: (e) => {
                  var r;
                  return null == (r = t()) ? void 0 : r.unobserve(e);
                },
              };
            })()),
            (this.range = null),
            (this.setOptions = (e) => {
              Object.entries(e).forEach(([t, r]) => {
                void 0 === r && delete e[t];
              }),
                (this.options = {
                  debug: !1,
                  initialOffset: 0,
                  overscan: 1,
                  paddingStart: 0,
                  paddingEnd: 0,
                  scrollPaddingStart: 0,
                  scrollPaddingEnd: 0,
                  horizontal: !1,
                  getItemKey: nW,
                  rangeExtractor: nV,
                  onChange: () => {},
                  measureElement: nY,
                  initialRect: { width: 0, height: 0 },
                  scrollMargin: 0,
                  gap: 0,
                  indexAttribute: "data-index",
                  initialMeasurementsCache: [],
                  lanes: 1,
                  isScrollingResetDelay: 150,
                  enabled: !0,
                  isRtl: !1,
                  useScrollendEvent: !0,
                  ...e,
                });
            }),
            (this.notify = (e) => {
              var t, r;
              null == (r = (t = this.options).onChange) || r.call(t, this, e);
            }),
            (this.maybeNotify = nN(
              () => (
                this.calculateRange(),
                [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ]
              ),
              (e) => {
                this.notify(e);
              },
              {
                key: !1,
                debug: () => this.options.debug,
                initialDeps: [
                  this.isScrolling,
                  this.range ? this.range.startIndex : null,
                  this.range ? this.range.endIndex : null,
                ],
              }
            )),
            (this.cleanup = () => {
              this.unsubs.filter(Boolean).forEach((e) => e()),
                (this.unsubs = []),
                this.observer.disconnect(),
                (this.scrollElement = null),
                (this.targetWindow = null);
            }),
            (this._didMount = () => () => {
              this.cleanup();
            }),
            (this._willUpdate = () => {
              var e;
              let t = this.options.enabled
                ? this.options.getScrollElement()
                : null;
              if (this.scrollElement !== t) {
                if ((this.cleanup(), !t)) {
                  this.maybeNotify();
                  return;
                }
                (this.scrollElement = t),
                  this.scrollElement && "ownerDocument" in this.scrollElement
                    ? (this.targetWindow =
                        this.scrollElement.ownerDocument.defaultView)
                    : (this.targetWindow =
                        (null == (e = this.scrollElement)
                          ? void 0
                          : e.window) ?? null),
                  this.elementsCache.forEach((e) => {
                    this.observer.observe(e);
                  }),
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: void 0,
                    behavior: void 0,
                  }),
                  this.unsubs.push(
                    this.options.observeElementRect(this, (e) => {
                      (this.scrollRect = e), this.maybeNotify();
                    })
                  ),
                  this.unsubs.push(
                    this.options.observeElementOffset(this, (e, t) => {
                      (this.scrollAdjustments = 0),
                        (this.scrollDirection = t
                          ? this.getScrollOffset() < e
                            ? "forward"
                            : "backward"
                          : null),
                        (this.scrollOffset = e),
                        (this.isScrolling = t),
                        this.maybeNotify();
                    })
                  );
              }
            }),
            (this.getSize = () =>
              this.options.enabled
                ? ((this.scrollRect =
                    this.scrollRect ?? this.options.initialRect),
                  this.scrollRect[this.options.horizontal ? "width" : "height"])
                : ((this.scrollRect = null), 0)),
            (this.getScrollOffset = () =>
              this.options.enabled
                ? ((this.scrollOffset =
                    this.scrollOffset ??
                    ("function" == typeof this.options.initialOffset
                      ? this.options.initialOffset()
                      : this.options.initialOffset)),
                  this.scrollOffset)
                : ((this.scrollOffset = null), 0)),
            (this.getFurthestMeasurement = (e, t) => {
              let r = new Map(),
                n = new Map();
              for (let o = t - 1; o >= 0; o--) {
                let t = e[o];
                if (r.has(t.lane)) continue;
                let l = n.get(t.lane);
                if (
                  (null == l || t.end > l.end
                    ? n.set(t.lane, t)
                    : t.end < l.end && r.set(t.lane, !0),
                  r.size === this.options.lanes)
                )
                  break;
              }
              return n.size === this.options.lanes
                ? Array.from(n.values()).sort((e, t) =>
                    e.end === t.end ? e.index - t.index : e.end - t.end
                  )[0]
                : void 0;
            }),
            (this.getMeasurementOptions = nN(
              () => [
                this.options.count,
                this.options.paddingStart,
                this.options.scrollMargin,
                this.options.getItemKey,
                this.options.enabled,
              ],
              (e, t, r, n, o) => (
                (this.pendingMeasuredCacheIndexes = []),
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: r,
                  getItemKey: n,
                  enabled: o,
                }
              ),
              { key: !1 }
            )),
            (this.getMeasurements = nN(
              () => [this.getMeasurementOptions(), this.itemSizeCache],
              (
                {
                  count: e,
                  paddingStart: t,
                  scrollMargin: r,
                  getItemKey: n,
                  enabled: o,
                },
                l
              ) => {
                if (!o)
                  return (
                    (this.measurementsCache = []),
                    this.itemSizeCache.clear(),
                    []
                  );
                0 === this.measurementsCache.length &&
                  ((this.measurementsCache =
                    this.options.initialMeasurementsCache),
                  this.measurementsCache.forEach((e) => {
                    this.itemSizeCache.set(e.key, e.size);
                  }));
                let i =
                  this.pendingMeasuredCacheIndexes.length > 0
                    ? Math.min(...this.pendingMeasuredCacheIndexes)
                    : 0;
                this.pendingMeasuredCacheIndexes = [];
                let a = this.measurementsCache.slice(0, i);
                for (let o = i; o < e; o++) {
                  let e = n(o),
                    i =
                      1 === this.options.lanes
                        ? a[o - 1]
                        : this.getFurthestMeasurement(a, o),
                    s = i ? i.end + this.options.gap : t + r,
                    u = l.get(e),
                    c = "number" == typeof u ? u : this.options.estimateSize(o),
                    d = s + c,
                    f = i ? i.lane : o % this.options.lanes;
                  a[o] = {
                    index: o,
                    start: s,
                    size: c,
                    end: d,
                    key: e,
                    lane: f,
                  };
                }
                return (this.measurementsCache = a), a;
              },
              { key: !1, debug: () => this.options.debug }
            )),
            (this.calculateRange = nN(
              () => [
                this.getMeasurements(),
                this.getSize(),
                this.getScrollOffset(),
              ],
              (e, t, r) =>
                (this.range =
                  e.length > 0 && t > 0
                    ? (function ({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: r,
                      }) {
                        let n = e.length - 1,
                          o = nZ(0, n, (t) => e[t].start, r),
                          l = o;
                        for (; l < n && e[l].end < r + t; ) l++;
                        return { startIndex: o, endIndex: l };
                      })({ measurements: e, outerSize: t, scrollOffset: r })
                    : null),
              { key: !1, debug: () => this.options.debug }
            )),
            (this.getIndexes = nN(
              () => {
                let e = null,
                  t = null,
                  r = this.calculateRange();
                return (
                  r && ((e = r.startIndex), (t = r.endIndex)),
                  [
                    this.options.rangeExtractor,
                    this.options.overscan,
                    this.options.count,
                    e,
                    t,
                  ]
                );
              },
              (e, t, r, n, o) =>
                null === n || null === o
                  ? []
                  : e({ startIndex: n, endIndex: o, overscan: t, count: r }),
              { key: !1, debug: () => this.options.debug }
            )),
            (this.indexFromElement = (e) => {
              let t = this.options.indexAttribute,
                r = e.getAttribute(t);
              return r
                ? parseInt(r, 10)
                : (console.warn(
                    `Missing attribute name '${t}={index}' on measured element.`
                  ),
                  -1);
            }),
            (this._measureElement = (e, t) => {
              let r = this.indexFromElement(e),
                n = this.measurementsCache[r];
              if (!n) return;
              let o = n.key,
                l = this.elementsCache.get(o);
              l !== e &&
                (l && this.observer.unobserve(l),
                this.observer.observe(e),
                this.elementsCache.set(o, e)),
                e.isConnected &&
                  this.resizeItem(r, this.options.measureElement(e, t, this));
            }),
            (this.resizeItem = (e, t) => {
              let r = this.measurementsCache[e];
              if (!r) return;
              let n = t - (this.itemSizeCache.get(r.key) ?? r.size);
              0 !== n &&
                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                  ? this.shouldAdjustScrollPositionOnItemSizeChange(r, n, this)
                  : r.start <
                    this.getScrollOffset() + this.scrollAdjustments) &&
                  this._scrollToOffset(this.getScrollOffset(), {
                    adjustments: (this.scrollAdjustments += n),
                    behavior: void 0,
                  }),
                this.pendingMeasuredCacheIndexes.push(r.index),
                (this.itemSizeCache = new Map(
                  this.itemSizeCache.set(r.key, t)
                )),
                this.notify(!1));
            }),
            (this.measureElement = (e) => {
              if (!e) {
                this.elementsCache.forEach((e, t) => {
                  e.isConnected ||
                    (this.observer.unobserve(e), this.elementsCache.delete(t));
                });
                return;
              }
              this._measureElement(e, void 0);
            }),
            (this.getVirtualItems = nN(
              () => [this.getIndexes(), this.getMeasurements()],
              (e, t) => {
                let r = [];
                for (let n = 0, o = e.length; n < o; n++) {
                  let o = t[e[n]];
                  r.push(o);
                }
                return r;
              },
              { key: !1, debug: () => this.options.debug }
            )),
            (this.getVirtualItemForOffset = (e) => {
              let t = this.getMeasurements();
              if (0 !== t.length)
                return nF(t[nZ(0, t.length - 1, (e) => nF(t[e]).start, e)]);
            }),
            (this.getOffsetForAlignment = (e, t) => {
              let r = this.getSize(),
                n = this.getScrollOffset();
              "auto" === t && e >= n + r && (t = "end"),
                "end" === t && (e -= r);
              let o = this.options.horizontal ? "scrollWidth" : "scrollHeight";
              return Math.max(
                Math.min(
                  (this.scrollElement
                    ? "document" in this.scrollElement
                      ? this.scrollElement.document.documentElement[o]
                      : this.scrollElement[o]
                    : 0) - r,
                  e
                ),
                0
              );
            }),
            (this.getOffsetForIndex = (e, t = "auto") => {
              e = Math.max(0, Math.min(e, this.options.count - 1));
              let r = this.measurementsCache[e];
              if (!r) return;
              let n = this.getSize(),
                o = this.getScrollOffset();
              if ("auto" === t) {
                if (r.end >= o + n - this.options.scrollPaddingEnd) t = "end";
                else {
                  if (!(r.start <= o + this.options.scrollPaddingStart))
                    return [o, t];
                  t = "start";
                }
              }
              let l =
                r.start - this.options.scrollPaddingStart + (r.size - n) / 2;
              switch (t) {
                case "center":
                  return [this.getOffsetForAlignment(l, t), t];
                case "end":
                  return [
                    this.getOffsetForAlignment(
                      r.end + this.options.scrollPaddingEnd,
                      t
                    ),
                    t,
                  ];
                default:
                  return [
                    this.getOffsetForAlignment(
                      r.start - this.options.scrollPaddingStart,
                      t
                    ),
                    t,
                  ];
              }
            }),
            (this.isDynamicMode = () => this.elementsCache.size > 0),
            (this.cancelScrollToIndex = () => {
              null !== this.scrollToIndexTimeoutId &&
                this.targetWindow &&
                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId),
                (this.scrollToIndexTimeoutId = null));
            }),
            (this.scrollToOffset = (
              e,
              { align: t = "start", behavior: r } = {}
            ) => {
              this.cancelScrollToIndex(),
                "smooth" === r &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size."
                  ),
                this._scrollToOffset(this.getOffsetForAlignment(e, t), {
                  adjustments: void 0,
                  behavior: r,
                });
            }),
            (this.scrollToIndex = (
              e,
              { align: t = "auto", behavior: r } = {}
            ) => {
              (e = Math.max(0, Math.min(e, this.options.count - 1))),
                this.cancelScrollToIndex(),
                "smooth" === r &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size."
                  );
              let n = this.getOffsetForIndex(e, t);
              if (!n) return;
              let [o, l] = n;
              this._scrollToOffset(o, { adjustments: void 0, behavior: r }),
                "smooth" !== r &&
                  this.isDynamicMode() &&
                  this.targetWindow &&
                  (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(
                    () => {
                      if (
                        ((this.scrollToIndexTimeoutId = null),
                        this.elementsCache.has(this.options.getItemKey(e)))
                      ) {
                        let [t] = nF(this.getOffsetForIndex(e, l));
                        nB(t, this.getScrollOffset()) ||
                          this.scrollToIndex(e, { align: l, behavior: r });
                      } else this.scrollToIndex(e, { align: l, behavior: r });
                    }
                  ));
            }),
            (this.scrollBy = (e, { behavior: t } = {}) => {
              this.cancelScrollToIndex(),
                "smooth" === t &&
                  this.isDynamicMode() &&
                  console.warn(
                    "The `smooth` scroll behavior is not fully supported with dynamic size."
                  ),
                this._scrollToOffset(this.getScrollOffset() + e, {
                  adjustments: void 0,
                  behavior: t,
                });
            }),
            (this.getTotalSize = () => {
              var e;
              let t = this.getMeasurements();
              return Math.max(
                (0 === t.length
                  ? this.options.paddingStart
                  : 1 === this.options.lanes
                  ? (null == (e = t[t.length - 1]) ? void 0 : e.end) ?? 0
                  : Math.max(
                      ...t.slice(-this.options.lanes).map((e) => e.end)
                    )) -
                  this.options.scrollMargin +
                  this.options.paddingEnd,
                0
              );
            }),
            (this._scrollToOffset = (e, { adjustments: t, behavior: r }) => {
              this.options.scrollToFn(e, { behavior: r, adjustments: t }, this);
            }),
            (this.measure = () => {
              (this.itemSizeCache = new Map()), this.notify(!1);
            }),
            this.setOptions(e);
        }
      }
      let nZ = (e, t, r, n) => {
          for (; e <= t; ) {
            let o = ((e + t) / 2) | 0,
              l = r(o);
            if (l < n) e = o + 1;
            else {
              if (!(l > n)) return o;
              t = o - 1;
            }
          }
          return e > 0 ? e - 1 : 0;
        },
        nJ = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;
      var nQ = ek({
          base: [],
          variants: {
            orientation: {
              vertical: [
                "overflow-y-auto",
                "data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
                "data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
                "data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
              ],
              horizontal: [
                "overflow-x-auto",
                "data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
                "data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
                "data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]",
              ],
            },
            hideScrollBar: { true: "scrollbar-hide", false: "" },
          },
          defaultVariants: { orientation: "vertical", hideScrollBar: !1 },
        }),
        n0 = (e, t) => {
          let r = [];
          for (let n of e)
            "section" === n.type
              ? r.push(([...n.childNodes].length + 1) * t)
              : r.push(t);
          return r;
        },
        n1 = (e) => {
          if (
            !e ||
            void 0 === e.scrollTop ||
            void 0 === e.clientHeight ||
            void 0 === e.scrollHeight
          )
            return { isTop: !1, isBottom: !1, isMiddle: !1 };
          let t = 0 === e.scrollTop,
            r = Math.ceil(e.scrollTop + e.clientHeight) >= e.scrollHeight;
          return { isTop: t, isBottom: r, isMiddle: !t && !r };
        },
        n4 = (e) => {
          var t;
          let {
              Component: r,
              state: n,
              color: o,
              variant: l,
              itemClasses: a,
              getBaseProps: u,
              topContent: c,
              bottomContent: d,
              hideEmptyContent: f,
              hideSelectedIcon: p,
              shouldHighlightOnFocus: g,
              disableAnimation: h,
              getEmptyContentProps: m,
              getListProps: v,
              scrollShadowProps: b,
            } = e,
            { virtualization: y } = e;
          if (
            !y ||
            (!(function (e) {
              return ez(e)
                ? ez(e) && 0 === e.length
                : eN(e)
                ? eN(e) && 0 === Object.keys(e).length
                : null == e || "" === e;
            })(y) &&
              !y.maxListboxHeight &&
              !y.itemHeight)
          )
            throw Error(
              "You are using a virtualized listbox. VirtualizedListbox requires 'virtualization' props with 'maxListboxHeight' and 'itemHeight' properties. This error might have originated from autocomplete components that use VirtualizedListbox. Please provide these props to use the virtualized listbox."
            );
          let { maxListboxHeight: x, itemHeight: w } = y,
            E = Math.min(x, w * n.collection.size),
            S = (0, i.useRef)(null),
            P = (0, i.useMemo)(
              () => n0([...n.collection], w),
              [n.collection, w]
            ),
            C = (function (e) {
              let t = i.useReducer(() => ({}), {})[1],
                r = {
                  ...e,
                  onChange: (r, n) => {
                    var o;
                    n ? (0, nl.flushSync)(t) : t(),
                      null == (o = e.onChange) || o.call(e, r, n);
                  },
                },
                [n] = i.useState(() => new nX(r));
              return (
                n.setOptions(r),
                nJ(() => n._didMount(), []),
                nJ(() => n._willUpdate()),
                n
              );
            })({
              observeElementRect: nH,
              observeElementOffset: nG,
              scrollToFn: nq,
              count: [...n.collection].length,
              getScrollElement: () => S.current,
              estimateSize: (e) => P[e],
            }),
            T = C.getVirtualItems(),
            k = C.getTotalSize(),
            { getBaseProps: M } = (function (e) {
              var t;
              let [r, n] = s(e, nQ.variantKeys),
                {
                  ref: o,
                  as: l,
                  children: a,
                  className: u,
                  style: c,
                  size: d = 40,
                  offset: f = 0,
                  visibility: p = "auto",
                  isEnabled: g = !0,
                  onVisibilityChange: h,
                  ...m
                } = r,
                v = eD(o);
              !(function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  {
                    domRef: t,
                    isEnabled: r = !0,
                    overflowCheck: n = "vertical",
                    visibility: o = "auto",
                    offset: l = 0,
                    onVisibilityChange: a,
                    updateDeps: s = [],
                  } = e,
                  u = (0, i.useRef)(o);
                (0, i.useEffect)(() => {
                  let e = null == t ? void 0 : t.current;
                  if (!e || !r) return;
                  let i = (t, r, n, l, i) => {
                      if ("auto" === o) {
                        let t = "".concat(l).concat(e_(i), "Scroll");
                        r && n
                          ? ((e.dataset[t] = "true"),
                            e.removeAttribute("data-".concat(l, "-scroll")),
                            e.removeAttribute("data-".concat(i, "-scroll")))
                          : ((e.dataset["".concat(l, "Scroll")] = r.toString()),
                            (e.dataset["".concat(i, "Scroll")] = n.toString()),
                            e.removeAttribute(
                              "data-".concat(l, "-").concat(i, "-scroll")
                            ));
                      } else {
                        let e = r && n ? "both" : r ? l : n ? i : "none";
                        e !== u.current && (null == a || a(e), (u.current = e));
                      }
                    },
                    s = () => {
                      var t, r;
                      let o = e.querySelector('ul[data-slot="list"]'),
                        a = +(null !=
                        (t =
                          null == o
                            ? void 0
                            : o.getAttribute("data-virtual-scroll-height"))
                          ? t
                          : e.scrollHeight),
                        s = +(null !=
                        (r =
                          null == o
                            ? void 0
                            : o.getAttribute("data-virtual-scroll-top"))
                          ? r
                          : e.scrollTop);
                      for (let { type: t, prefix: r, suffix: o } of [
                        { type: "vertical", prefix: "top", suffix: "bottom" },
                        { type: "horizontal", prefix: "left", suffix: "right" },
                      ])
                        if (n === t || "both" === n) {
                          let n = "vertical" === t ? s > l : e.scrollLeft > l,
                            u =
                              "vertical" === t
                                ? s + e.clientHeight + l < a
                                : e.scrollLeft + e.clientWidth + l <
                                  e.scrollWidth;
                          i(t, n, u, r, o);
                        }
                    },
                    c = () => {
                      [
                        "top",
                        "bottom",
                        "top-bottom",
                        "left",
                        "right",
                        "left-right",
                      ].forEach((t) => {
                        e.removeAttribute("data-".concat(t, "-scroll"));
                      });
                    };
                  return (
                    e.addEventListener("scroll", s, !0),
                    "auto" !== o &&
                      (c(),
                      "both" === o
                        ? ((e.dataset.topBottomScroll = String(
                            "vertical" === n
                          )),
                          (e.dataset.leftRightScroll = String(
                            "horizontal" === n
                          )))
                        : ((e.dataset.topBottomScroll = "false"),
                          (e.dataset.leftRightScroll = "false"),
                          ["top", "bottom", "left", "right"].forEach((t) => {
                            e.dataset["".concat(t, "Scroll")] = String(o === t);
                          }))),
                    () => {
                      e.removeEventListener("scroll", s, !0), c();
                    }
                  );
                }, [...s, r, o, n, a, t]);
              })({
                domRef: v,
                offset: f,
                visibility: p,
                isEnabled: g,
                onVisibilityChange: h,
                updateDeps: [a],
                overflowCheck: null != (t = e.orientation) ? t : "vertical",
              });
              let b = (0, i.useMemo)(
                () => nQ({ ...n, className: u }),
                [eW(n), u]
              );
              return {
                Component: l || "div",
                styles: b,
                domRef: v,
                children: a,
                getBaseProps: function () {
                  var t;
                  let r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ref: v,
                    className: b,
                    "data-orientation":
                      null != (t = e.orientation) ? t : "vertical",
                    style: {
                      "--scroll-shadow-size": "".concat(d, "px"),
                      ...c,
                      ...r.style,
                    },
                    ...m,
                    ...r,
                  };
                },
              };
            })({ ...b }),
            K = (e) => {
              var t;
              let r = [...n.collection][e.index];
              if (!r) return null;
              let i = {
                  color: o,
                  item: r,
                  state: n,
                  variant: l,
                  disableAnimation: h,
                  hideSelectedIcon: p,
                  ...r.props,
                },
                s = {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "".concat(e.size, "px"),
                  transform: "translateY(".concat(e.start, "px)"),
                };
              if ("section" === r.type)
                return (0, r$.jsx)(
                  nz,
                  { ...i, itemClasses: a, style: { ...s, ...i.style } },
                  r.key
                );
              let u = (0, r$.jsx)(
                nL,
                {
                  ...i,
                  classNames: e1(
                    a,
                    null == (t = r.props) ? void 0 : t.classNames
                  ),
                  shouldHighlightOnFocus: g,
                  style: { ...s, ...i.style },
                },
                r.key
              );
              return r.wrapper && (u = r.wrapper(u)), u;
            },
            [D, O] = (0, i.useState)({ isTop: !1, isBottom: !0, isMiddle: !1 }),
            I = (0, r$.jsxs)(r, {
              ...v(),
              "data-virtual-scroll-height": k,
              "data-virtual-scroll-top":
                null == (t = null == S ? void 0 : S.current)
                  ? void 0
                  : t.scrollTop,
              children: [
                !n.collection.size &&
                  !f &&
                  (0, r$.jsx)("li", {
                    children: (0, r$.jsx)("div", { ...m() }),
                  }),
                (0, r$.jsx)("div", {
                  ...ej(M()),
                  ref: S,
                  style: { height: x, overflow: "auto" },
                  onScroll: (e) => {
                    O(n1(e.target));
                  },
                  children:
                    E > 0 &&
                    w > 0 &&
                    (0, r$.jsx)("div", {
                      style: {
                        height: "".concat(k, "px"),
                        width: "100%",
                        position: "relative",
                      },
                      children: T.map((e) => K(e)),
                    }),
                }),
              ],
            });
          return (0, r$.jsxs)("div", { ...u(), children: [c, I, d] });
        },
        n3 = a(function (e, t) {
          let { isVirtualized: r, ...n } = e,
            o = (function (e) {
              var t;
              let r = (0, l.o)(),
                {
                  ref: n,
                  as: o,
                  state: a,
                  variant: s,
                  color: u,
                  onAction: c,
                  children: d,
                  onSelectionChange: f,
                  disableAnimation: p = null !=
                    (t = null == r ? void 0 : r.disableAnimation) && t,
                  itemClasses: g,
                  className: h,
                  topContent: m,
                  bottomContent: v,
                  emptyContent: b = "No items.",
                  hideSelectedIcon: y = !1,
                  hideEmptyContent: x = !1,
                  shouldHighlightOnFocus: w = !1,
                  classNames: E,
                  ...S
                } = e,
                P = o || "ul",
                C = "string" == typeof P,
                T = eD(n),
                k = ru({ ...e, children: d, onSelectionChange: f }),
                M = a || k,
                { listBoxProps: K } = (function (e, t, r) {
                  let n = e6(e, { labelable: !0 }),
                    o = e.selectionBehavior || "toggle",
                    l =
                      e.linkBehavior ||
                      ("replace" === o ? "action" : "override");
                  "toggle" === o && "action" === l && (l = "override");
                  let { listProps: a } = (function (e) {
                      let {
                          selectionManager: t,
                          collection: r,
                          disabledKeys: n,
                          ref: o,
                          keyboardDelegate: l,
                          layoutDelegate: a,
                        } = e,
                        s = rw({ usage: "search", sensitivity: "base" }),
                        u = t.disabledBehavior,
                        c = (0, i.useMemo)(
                          () =>
                            l ||
                            new rB({
                              collection: r,
                              disabledKeys: n,
                              disabledBehavior: u,
                              ref: o,
                              collator: s,
                              layoutDelegate: a,
                            }),
                          [l, a, r, n, o, s, u]
                        ),
                        { collectionProps: d } = (function (e) {
                          let t,
                            {
                              selectionManager: r,
                              keyboardDelegate: n,
                              ref: o,
                              autoFocus: l = !1,
                              shouldFocusWrap: a = !1,
                              disallowEmptySelection: s = !1,
                              disallowSelectAll: u = !1,
                              selectOnFocus: c = "replace" ===
                                r.selectionBehavior,
                              disallowTypeAhead: d = !1,
                              shouldUseVirtualFocus: f,
                              allowsTabNavigation: p = !1,
                              isVirtualized: g,
                              scrollRef: h = o,
                              linkBehavior: m = "action",
                            } = e,
                            { direction: v } = (0, ry.Y)(),
                            b = (0, tN.rd)(),
                            y = (0, i.useRef)({ top: 0, left: 0 });
                          r9(
                            h,
                            "scroll",
                            g
                              ? void 0
                              : () => {
                                  var e, t, r, n;
                                  y.current = {
                                    top:
                                      null !==
                                        (r =
                                          null === (e = h.current) ||
                                          void 0 === e
                                            ? void 0
                                            : e.scrollTop) && void 0 !== r
                                        ? r
                                        : 0,
                                    left:
                                      null !==
                                        (n =
                                          null === (t = h.current) ||
                                          void 0 === t
                                            ? void 0
                                            : t.scrollLeft) && void 0 !== n
                                        ? n
                                        : 0,
                                  };
                                }
                          );
                          let x = (0, i.useRef)(!1);
                          r9(
                            o,
                            "react-aria-focus",
                            f
                              ? (e) => {
                                  let { detail: t } = e;
                                  e.stopPropagation(),
                                    r.setFocused(!0),
                                    (null == t ? void 0 : t.focusStrategy) ===
                                      "first" && (x.current = !0);
                                }
                              : void 0
                          );
                          let w = eY(() => {
                            var e, t, l;
                            let i =
                              null !==
                                (t =
                                  null === (e = n.getFirstKey) || void 0 === e
                                    ? void 0
                                    : e.call(n)) && void 0 !== t
                                ? t
                                : null;
                            null == i
                              ? (null === (l = o.current) ||
                                  void 0 === l ||
                                  l.dispatchEvent(
                                    new CustomEvent(nn, {
                                      cancelable: !0,
                                      bubbles: !0,
                                    })
                                  ),
                                r.collection.size > 0 && (x.current = !1))
                              : (r.setFocusedKey(i), (x.current = !1));
                          });
                          no(() => {
                            x.current && w();
                          }, [r.collection, w]);
                          let E = eY(() => {
                            r.collection.size > 0 && (x.current = !1);
                          });
                          no(() => {
                            E();
                          }, [r.focusedKey, E]),
                            r9(
                              o,
                              "react-aria-clear-focus",
                              f
                                ? (e) => {
                                    e.stopPropagation(),
                                      r.setFocused(!1),
                                      r.setFocusedKey(null);
                                  }
                                : void 0
                            );
                          let S = (0, i.useRef)(l);
                          (0, i.useEffect)(() => {
                            if (S.current) {
                              var e, t, i, a;
                              let s = null;
                              "first" === l &&
                                (s =
                                  null !==
                                    (i =
                                      null === (e = n.getFirstKey) ||
                                      void 0 === e
                                        ? void 0
                                        : e.call(n)) && void 0 !== i
                                    ? i
                                    : null),
                                "last" === l &&
                                  (s =
                                    null !==
                                      (a =
                                        null === (t = n.getLastKey) ||
                                        void 0 === t
                                          ? void 0
                                          : t.call(n)) && void 0 !== a
                                      ? a
                                      : null);
                              let u = r.selectedKeys;
                              if (u.size) {
                                for (let e of u)
                                  if (r.canSelectItem(e)) {
                                    s = e;
                                    break;
                                  }
                              }
                              r.setFocused(!0),
                                r.setFocusedKey(s),
                                null == s && !f && o.current && tE(o.current);
                            }
                          }, []);
                          let P = (0, i.useRef)(r.focusedKey);
                          (0, i.useEffect)(() => {
                            if (
                              r.isFocused &&
                              null != r.focusedKey &&
                              (r.focusedKey !== P.current || S.current) &&
                              h.current &&
                              o.current
                            ) {
                              let e = tl,
                                t = o.current.querySelector(
                                  `[data-key="${CSS.escape(
                                    r.focusedKey.toString()
                                  )}"]`
                                );
                              if (!t) return;
                              ("keyboard" === e || S.current) &&
                                (ne(h.current, t),
                                "virtual" !== e &&
                                  nr(t, { containingElement: o.current }));
                            }
                            !f &&
                              r.isFocused &&
                              null == r.focusedKey &&
                              null != P.current &&
                              o.current &&
                              tE(o.current),
                              (P.current = r.focusedKey),
                              (S.current = !1);
                          }),
                            r9(o, "react-aria-focus-scope-restore", (e) => {
                              e.preventDefault(), r.setFocused(!0);
                            });
                          let C = {
                              onKeyDown: (e) => {
                                var t, l, i, d, f, g, y, x, w, E, S, P, C;
                                if (
                                  (e.altKey &&
                                    "Tab" === e.key &&
                                    e.preventDefault(),
                                  !(null === (t = o.current) || void 0 === t
                                    ? void 0
                                    : t.contains(e.target)))
                                )
                                  return;
                                let T = (t, n) => {
                                  if (null != t) {
                                    if (
                                      r.isLink(t) &&
                                      "selection" === m &&
                                      c &&
                                      !r8(e)
                                    ) {
                                      var o;
                                      (0, nl.flushSync)(() => {
                                        r.setFocusedKey(t, n);
                                      });
                                      let l =
                                          null === (o = h.current) ||
                                          void 0 === o
                                            ? void 0
                                            : o.querySelector(
                                                `[data-key="${CSS.escape(
                                                  t.toString()
                                                )}"]`
                                              ),
                                        i = r.getItemProps(t);
                                      l &&
                                        b.open(l, e, i.href, i.routerOptions);
                                      return;
                                    }
                                    r.setFocusedKey(t, n),
                                      (r.isLink(t) && "override" === m) ||
                                        (e.shiftKey &&
                                        "multiple" === r.selectionMode
                                          ? r.extendSelection(t)
                                          : c &&
                                            !r8(e) &&
                                            r.replaceSelection(t));
                                  }
                                };
                                switch (e.key) {
                                  case "ArrowDown":
                                    if (n.getKeyBelow) {
                                      let t =
                                        null != r.focusedKey
                                          ? null === (l = n.getKeyBelow) ||
                                            void 0 === l
                                            ? void 0
                                            : l.call(n, r.focusedKey)
                                          : null === (i = n.getFirstKey) ||
                                            void 0 === i
                                          ? void 0
                                          : i.call(n);
                                      null == t &&
                                        a &&
                                        (t =
                                          null === (d = n.getFirstKey) ||
                                          void 0 === d
                                            ? void 0
                                            : d.call(n, r.focusedKey)),
                                        null != t && (e.preventDefault(), T(t));
                                    }
                                    break;
                                  case "ArrowUp":
                                    if (n.getKeyAbove) {
                                      let t =
                                        null != r.focusedKey
                                          ? null === (f = n.getKeyAbove) ||
                                            void 0 === f
                                            ? void 0
                                            : f.call(n, r.focusedKey)
                                          : null === (g = n.getLastKey) ||
                                            void 0 === g
                                          ? void 0
                                          : g.call(n);
                                      null == t &&
                                        a &&
                                        (t =
                                          null === (y = n.getLastKey) ||
                                          void 0 === y
                                            ? void 0
                                            : y.call(n, r.focusedKey)),
                                        null != t && (e.preventDefault(), T(t));
                                    }
                                    break;
                                  case "ArrowLeft":
                                    if (n.getKeyLeftOf) {
                                      let t =
                                        null != r.focusedKey
                                          ? null === (x = n.getKeyLeftOf) ||
                                            void 0 === x
                                            ? void 0
                                            : x.call(n, r.focusedKey)
                                          : null;
                                      null == t &&
                                        a &&
                                        (t =
                                          "rtl" === v
                                            ? null === (w = n.getFirstKey) ||
                                              void 0 === w
                                              ? void 0
                                              : w.call(n, r.focusedKey)
                                            : null === (E = n.getLastKey) ||
                                              void 0 === E
                                            ? void 0
                                            : E.call(n, r.focusedKey)),
                                        null != t &&
                                          (e.preventDefault(),
                                          T(t, "rtl" === v ? "first" : "last"));
                                    }
                                    break;
                                  case "ArrowRight":
                                    if (n.getKeyRightOf) {
                                      let t =
                                        null != r.focusedKey
                                          ? null === (S = n.getKeyRightOf) ||
                                            void 0 === S
                                            ? void 0
                                            : S.call(n, r.focusedKey)
                                          : null;
                                      null == t &&
                                        a &&
                                        (t =
                                          "rtl" === v
                                            ? null === (P = n.getLastKey) ||
                                              void 0 === P
                                              ? void 0
                                              : P.call(n, r.focusedKey)
                                            : null === (C = n.getFirstKey) ||
                                              void 0 === C
                                            ? void 0
                                            : C.call(n, r.focusedKey)),
                                        null != t &&
                                          (e.preventDefault(),
                                          T(t, "rtl" === v ? "last" : "first"));
                                    }
                                    break;
                                  case "Home":
                                    if (n.getFirstKey) {
                                      if (null === r.focusedKey && e.shiftKey)
                                        return;
                                      e.preventDefault();
                                      let t = n.getFirstKey(
                                        r.focusedKey,
                                        r7(e)
                                      );
                                      r.setFocusedKey(t),
                                        null != t &&
                                          (r7(e) &&
                                          e.shiftKey &&
                                          "multiple" === r.selectionMode
                                            ? r.extendSelection(t)
                                            : c && r.replaceSelection(t));
                                    }
                                    break;
                                  case "End":
                                    if (n.getLastKey) {
                                      if (null === r.focusedKey && e.shiftKey)
                                        return;
                                      e.preventDefault();
                                      let t = n.getLastKey(r.focusedKey, r7(e));
                                      r.setFocusedKey(t),
                                        null != t &&
                                          (r7(e) &&
                                          e.shiftKey &&
                                          "multiple" === r.selectionMode
                                            ? r.extendSelection(t)
                                            : c && r.replaceSelection(t));
                                    }
                                    break;
                                  case "PageDown":
                                    if (
                                      n.getKeyPageBelow &&
                                      null != r.focusedKey
                                    ) {
                                      let t = n.getKeyPageBelow(r.focusedKey);
                                      null != t && (e.preventDefault(), T(t));
                                    }
                                    break;
                                  case "PageUp":
                                    if (
                                      n.getKeyPageAbove &&
                                      null != r.focusedKey
                                    ) {
                                      let t = n.getKeyPageAbove(r.focusedKey);
                                      null != t && (e.preventDefault(), T(t));
                                    }
                                    break;
                                  case "a":
                                    r7(e) &&
                                      "multiple" === r.selectionMode &&
                                      !0 !== u &&
                                      (e.preventDefault(), r.selectAll());
                                    break;
                                  case "Escape":
                                    s ||
                                      0 === r.selectedKeys.size ||
                                      (e.stopPropagation(),
                                      e.preventDefault(),
                                      r.clearSelection());
                                    break;
                                  case "Tab":
                                    if (!p) {
                                      if (e.shiftKey) o.current.focus();
                                      else {
                                        let e,
                                          t,
                                          r = nS(o.current, { tabbable: !0 });
                                        do (t = r.lastChild()) && (e = t);
                                        while (t);
                                        e &&
                                          !e.contains(document.activeElement) &&
                                          (0, tn.e)(e);
                                      }
                                    }
                                }
                              },
                              onFocus: (e) => {
                                if (r.isFocused) {
                                  e.currentTarget.contains(e.target) ||
                                    r.setFocused(!1);
                                  return;
                                }
                                if (e.currentTarget.contains(e.target)) {
                                  if (
                                    (r.setFocused(!0), null == r.focusedKey)
                                  ) {
                                    var t, l, i, a;
                                    let o = (e) => {
                                        null != e &&
                                          (r.setFocusedKey(e),
                                          c && r.replaceSelection(e));
                                      },
                                      s = e.relatedTarget;
                                    s &&
                                    e.currentTarget.compareDocumentPosition(s) &
                                      Node.DOCUMENT_POSITION_FOLLOWING
                                      ? o(
                                          null !== (i = r.lastSelectedKey) &&
                                            void 0 !== i
                                            ? i
                                            : null === (t = n.getLastKey) ||
                                              void 0 === t
                                            ? void 0
                                            : t.call(n)
                                        )
                                      : o(
                                          null !== (a = r.firstSelectedKey) &&
                                            void 0 !== a
                                            ? a
                                            : null === (l = n.getFirstKey) ||
                                              void 0 === l
                                            ? void 0
                                            : l.call(n)
                                        );
                                  } else
                                    !g &&
                                      h.current &&
                                      ((h.current.scrollTop = y.current.top),
                                      (h.current.scrollLeft = y.current.left));
                                  if (null != r.focusedKey && h.current) {
                                    let e = h.current.querySelector(
                                      `[data-key="${CSS.escape(
                                        r.focusedKey.toString()
                                      )}"]`
                                    );
                                    e &&
                                      (e.contains(document.activeElement) ||
                                        (0, tn.e)(e),
                                      "keyboard" === tl &&
                                        nr(e, {
                                          containingElement: o.current,
                                        }));
                                  }
                                }
                              },
                              onBlur: (e) => {
                                e.currentTarget.contains(e.relatedTarget) ||
                                  r.setFocused(!1);
                              },
                              onMouseDown(e) {
                                h.current === e.target && e.preventDefault();
                              },
                            },
                            { typeSelectProps: T } = r_({
                              keyboardDelegate: n,
                              selectionManager: r,
                            });
                          return (
                            d || (C = e1(T, C)),
                            (t = f ? -1 : null == r.focusedKey ? 0 : -1),
                            { collectionProps: { ...C, tabIndex: t } }
                          );
                        })({
                          ...e,
                          ref: o,
                          selectionManager: t,
                          keyboardDelegate: c,
                        });
                      return { listProps: d };
                    })({
                      ...e,
                      ref: r,
                      selectionManager: t.selectionManager,
                      collection: t.collection,
                      disabledKeys: t.disabledKeys,
                      linkBehavior: l,
                    }),
                    { focusWithinProps: s } = t0({
                      onFocusWithin: e.onFocus,
                      onBlurWithin: e.onBlur,
                      onFocusWithinChange: e.onFocusChange,
                    }),
                    u = eJ(e.id);
                  r6.set(t, {
                    id: u,
                    shouldUseVirtualFocus: e.shouldUseVirtualFocus,
                    shouldSelectOnPressUp: e.shouldSelectOnPressUp,
                    shouldFocusOnHover: e.shouldFocusOnHover,
                    isVirtualized: e.isVirtualized,
                    onAction: e.onAction,
                    linkBehavior: l,
                  });
                  let { labelProps: c, fieldProps: d } = rS({
                    ...e,
                    id: u,
                    labelElementType: "span",
                  });
                  return {
                    labelProps: c,
                    listBoxProps: e1(
                      n,
                      s,
                      "multiple" === t.selectionManager.selectionMode
                        ? { "aria-multiselectable": "true" }
                        : {},
                      { role: "listbox", ...e1(d, a) }
                    ),
                  };
                })({ ...e, onAction: c }, M, T),
                D = (0, i.useMemo)(() => nk(), []),
                O = eB(null == E ? void 0 : E.base, h);
              return {
                Component: P,
                state: M,
                variant: s,
                color: u,
                slots: D,
                classNames: E,
                topContent: m,
                bottomContent: v,
                emptyContent: b,
                hideEmptyContent: x,
                shouldHighlightOnFocus: w,
                hideSelectedIcon: y,
                disableAnimation: p,
                className: h,
                itemClasses: g,
                getBaseProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ref: T,
                    "data-slot": "base",
                    className: D.base({ class: O }),
                    ...ej(S, { enabled: C }),
                    ...e,
                  };
                },
                getListProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "list",
                    className: D.list({ class: null == E ? void 0 : E.list }),
                    ...K,
                    ...e,
                  };
                },
                getEmptyContentProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "empty-content",
                    children: b,
                    className: D.emptyContent({
                      class: null == E ? void 0 : E.emptyContent,
                    }),
                    ...e,
                  };
                },
              };
            })({ ...n, ref: t }),
            {
              Component: a,
              state: s,
              color: u,
              variant: c,
              itemClasses: d,
              getBaseProps: f,
              topContent: p,
              bottomContent: g,
              hideEmptyContent: h,
              hideSelectedIcon: m,
              shouldHighlightOnFocus: v,
              disableAnimation: b,
              getEmptyContentProps: y,
              getListProps: x,
            } = o;
          if (r) return (0, r$.jsx)(n4, { ...e, ...o });
          let w = (0, r$.jsxs)(a, {
            ...x(),
            children: [
              !s.collection.size &&
                !h &&
                (0, r$.jsx)("li", { children: (0, r$.jsx)("div", { ...y() }) }),
              [...s.collection].map((e) => {
                var t;
                let r = {
                  color: u,
                  item: e,
                  state: s,
                  variant: c,
                  disableAnimation: b,
                  hideSelectedIcon: m,
                  ...e.props,
                };
                if ("section" === e.type)
                  return (0, r$.jsx)(nz, { ...r, itemClasses: d }, e.key);
                let n = (0, r$.jsx)(
                  nL,
                  {
                    ...r,
                    classNames: e1(
                      d,
                      null == (t = e.props) ? void 0 : t.classNames
                    ),
                    shouldHighlightOnFocus: v,
                  },
                  e.key
                );
                return e.wrapper && (n = e.wrapper(n)), n;
              }),
            ],
          });
          return (0, r$.jsxs)("div", { ...f(), children: [p, w, g] });
        });
      function n5(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
          let t = e.target.ownerDocument;
          if (
            !t ||
            !t.documentElement.contains(e.target) ||
            e.target.closest("[data-react-aria-top-layer]")
          )
            return !1;
        }
        return t.current && !t.current.contains(e.target);
      }
      let n2 = [];
      function n6(e, t = -1 / 0, r = 1 / 0) {
        return Math.min(Math.max(e, t), r);
      }
      let n8 = { top: "top", bottom: "top", left: "left", right: "left" },
        n7 = { top: "bottom", bottom: "top", left: "right", right: "left" },
        n9 = { top: "left", left: "top" },
        oe = { top: "height", left: "width" },
        ot = { width: "totalWidth", height: "totalHeight" },
        or = {},
        on = "undefined" != typeof document ? window.visualViewport : null;
      function oo(e) {
        var t, r, n, o, l;
        let i = 0,
          a = 0,
          s = 0,
          u = 0,
          c = 0,
          d = 0,
          f = {},
          p =
            (null !== (t = null == on ? void 0 : on.scale) && void 0 !== t
              ? t
              : 1) > 1;
        if ("BODY" === e.tagName) {
          let t = document.documentElement;
          (s = t.clientWidth),
            (u = t.clientHeight),
            (i =
              null !== (r = null == on ? void 0 : on.width) && void 0 !== r
                ? r
                : s),
            (a =
              null !== (n = null == on ? void 0 : on.height) && void 0 !== n
                ? n
                : u),
            (f.top = t.scrollTop || e.scrollTop),
            (f.left = t.scrollLeft || e.scrollLeft),
            on && ((c = on.offsetTop), (d = on.offsetLeft));
        } else
          ({ width: i, height: a, top: c, left: d } = ou(e)),
            (f.top = e.scrollTop),
            (f.left = e.scrollLeft),
            (s = i),
            (u = a);
        return (
          (0, e$.Tc)() &&
            ("BODY" === e.tagName || "HTML" === e.tagName) &&
            p &&
            ((f.top = 0),
            (f.left = 0),
            (c =
              null !== (o = null == on ? void 0 : on.pageTop) && void 0 !== o
                ? o
                : 0),
            (d =
              null !== (l = null == on ? void 0 : on.pageLeft) && void 0 !== l
                ? l
                : 0)),
          {
            width: i,
            height: a,
            totalWidth: s,
            totalHeight: u,
            scroll: f,
            top: c,
            left: d,
          }
        );
      }
      function ol(e, t, r, n, o, l, i) {
        var a;
        let s = null !== (a = o.scroll[e]) && void 0 !== a ? a : 0,
          u = n[oe[e]],
          c = n.scroll[n8[e]] + l,
          d = u + n.scroll[n8[e]] - l,
          f = t - s + i[e] - n[n8[e]],
          p = t - s + r + i[e] - n[n8[e]];
        return f < c ? c - f : p > d ? Math.max(d - p, c - f) : 0;
      }
      function oi(e) {
        if (or[e]) return or[e];
        let [t, r] = e.split(" "),
          n = n8[t] || "right",
          o = n9[n];
        n8[r] || (r = "center");
        let l = oe[n],
          i = oe[o];
        return (
          (or[e] = {
            placement: t,
            crossPlacement: r,
            axis: n,
            crossAxis: o,
            size: l,
            crossSize: i,
          }),
          or[e]
        );
      }
      function oa(e, t, r, n, o, l, i, a, s, u) {
        var c, d, f, p, g;
        let {
            placement: h,
            crossPlacement: m,
            axis: v,
            crossAxis: b,
            size: y,
            crossSize: x,
          } = n,
          w = {};
        (w[b] = null !== (c = e[b]) && void 0 !== c ? c : 0),
          "center" === m
            ? (w[b] +=
                ((null !== (d = e[x]) && void 0 !== d ? d : 0) -
                  (null !== (f = r[x]) && void 0 !== f ? f : 0)) /
                2)
            : m !== b &&
              (w[b] +=
                (null !== (p = e[x]) && void 0 !== p ? p : 0) -
                (null !== (g = r[x]) && void 0 !== g ? g : 0)),
          (w[b] += l);
        let E = e[b] - r[x] + s + u,
          S = e[b] + e[x] - s - u;
        if (((w[b] = n6(w[b], E, S)), h === v)) {
          let r = a ? i[y] : t[ot[y]];
          w[n7[v]] = Math.floor(r - e[v] + o);
        } else w[v] = Math.floor(e[v] + e[y] + o);
        return w;
      }
      function os(e, t, r, n, o, l) {
        var i, a, s;
        let { placement: u, axis: c, size: d } = l;
        return u === c
          ? Math.max(
              0,
              r[c] -
                e[c] -
                (null !== (i = e.scroll[c]) && void 0 !== i ? i : 0) +
                t[c] -
                (null !== (a = n[c]) && void 0 !== a ? a : 0) -
                n[n7[c]] -
                o
            )
          : Math.max(
              0,
              e[d] +
                e[c] +
                e.scroll[c] -
                t[c] -
                r[c] -
                r[d] -
                (null !== (s = n[c]) && void 0 !== s ? s : 0) -
                n[n7[c]] -
                o
            );
      }
      function ou(e) {
        let {
            top: t,
            left: r,
            width: n,
            height: o,
          } = e.getBoundingClientRect(),
          {
            scrollTop: l,
            scrollLeft: i,
            clientTop: a,
            clientLeft: s,
          } = document.documentElement;
        return { top: t + l - a, left: r + i - s, width: n, height: o };
      }
      function oc(e, t) {
        let r,
          n = window.getComputedStyle(e);
        if ("fixed" === n.position) {
          let {
            top: t,
            left: n,
            width: o,
            height: l,
          } = e.getBoundingClientRect();
          r = { top: t, left: n, width: o, height: l };
        } else {
          r = ou(e);
          let n = ou(t),
            o = window.getComputedStyle(t);
          (n.top += (parseInt(o.borderTopWidth, 10) || 0) - t.scrollTop),
            (n.left += (parseInt(o.borderLeftWidth, 10) || 0) - t.scrollLeft),
            (r.top -= n.top),
            (r.left -= n.left);
        }
        return (
          (r.top -= parseInt(n.marginTop, 10) || 0),
          (r.left -= parseInt(n.marginLeft, 10) || 0),
          r
        );
      }
      function od(e) {
        let t = window.getComputedStyle(e);
        return (
          "none" !== t.transform ||
          /transform|perspective/.test(t.willChange) ||
          "none" !== t.filter ||
          "paint" === t.contain ||
          ("backdropFilter" in t && "none" !== t.backdropFilter) ||
          ("WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter)
        );
      }
      function of(e) {
        let { ref: t, box: r, onResize: n } = e;
        (0, i.useEffect)(() => {
          let e = null == t ? void 0 : t.current;
          if (e) {
            if (!(void 0 !== window.ResizeObserver))
              return (
                window.addEventListener("resize", n, !1),
                () => {
                  window.removeEventListener("resize", n, !1);
                }
              );
            {
              let t = new window.ResizeObserver((e) => {
                e.length && n();
              });
              return (
                t.observe(e, { box: r }),
                () => {
                  e && t.unobserve(e);
                }
              );
            }
          }
        }, [n, t, r]);
      }
      let op = "undefined" != typeof document ? window.visualViewport : null;
      var og = (e) => {
          let t = {
            top: { originY: 1 },
            bottom: { originY: 0 },
            left: { originX: 1 },
            right: { originX: 0 },
            "top-start": { originX: 0, originY: 1 },
            "top-end": { originX: 1, originY: 1 },
            "bottom-start": { originX: 0, originY: 0 },
            "bottom-end": { originX: 1, originY: 0 },
            "right-start": { originX: 0, originY: 0 },
            "right-end": { originX: 0, originY: 1 },
            "left-start": { originX: 1, originY: 0 },
            "left-end": { originX: 1, originY: 1 },
          };
          return (null == t ? void 0 : t[e]) || {};
        },
        oh = (e) =>
          ({
            top: "top",
            bottom: "bottom",
            left: "left",
            right: "right",
            "top-start": "top start",
            "top-end": "top end",
            "bottom-start": "bottom start",
            "bottom-end": "bottom end",
            "left-start": "left top",
            "left-end": "left bottom",
            "right-start": "right top",
            "right-end": "right bottom",
          }[e]),
        om = (e, t) => {
          if (t.includes("-")) {
            let [r] = t.split("-");
            if (r.includes(e)) return !1;
          }
          return !0;
        },
        ov = (e, t) => {
          if (t.includes("-")) {
            let [, r] = t.split("-");
            return "".concat(e, "-").concat(r);
          }
          return e;
        },
        ob = new WeakMap(),
        oy = [];
      let ox = new WeakMap(),
        ow = [];
      var oE = {
          solid: {
            default: "bg-default text-default-foreground",
            primary: "bg-primary text-primary-foreground",
            secondary: "bg-secondary text-secondary-foreground",
            success: "bg-success text-success-foreground",
            warning: "bg-warning text-warning-foreground",
            danger: "bg-danger text-danger-foreground",
            foreground: "bg-foreground text-background",
          },
        },
        oS = ek({
          slots: {
            base: [
              "z-0",
              "relative",
              "bg-transparent",
              "before:content-['']",
              "before:hidden",
              "before:z-[-1]",
              "before:absolute",
              "before:rotate-45",
              "before:w-2.5",
              "before:h-2.5",
              "before:rounded-sm",
              "data-[arrow=true]:before:block",
              "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=top]:before:left-1/2",
              "data-[placement=top]:before:-translate-x-1/2",
              "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=top-start]:before:left-3",
              "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=top-end]:before:right-3",
              "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=bottom]:before:left-1/2",
              "data-[placement=bottom]:before:-translate-x-1/2",
              "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=bottom-start]:before:left-3",
              "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
              "data-[placement=bottom-end]:before:right-3",
              "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
              "data-[placement=left]:before:top-1/2",
              "data-[placement=left]:before:-translate-y-1/2",
              "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
              "data-[placement=left-start]:before:top-1/4",
              "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
              "data-[placement=left-end]:before:bottom-1/4",
              "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
              "data-[placement=right]:before:top-1/2",
              "data-[placement=right]:before:-translate-y-1/2",
              "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
              "data-[placement=right-start]:before:top-1/4",
              "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
              "data-[placement=right-end]:before:bottom-1/4",
              ...eM,
            ],
            content: [
              "z-10",
              "px-2.5",
              "py-1",
              "w-full",
              "inline-flex",
              "flex-col",
              "items-center",
              "justify-center",
              "box-border",
              "subpixel-antialiased",
              "outline-none",
              "box-border",
            ],
            trigger: ["z-10"],
            backdrop: ["hidden"],
            arrow: [],
          },
          variants: {
            size: {
              sm: { content: "text-tiny" },
              md: { content: "text-small" },
              lg: { content: "text-medium" },
            },
            color: {
              default: {
                base: "before:bg-content1 before:shadow-small",
                content: "bg-content1",
              },
              foreground: {
                base: "before:bg-foreground",
                content: oE.solid.foreground,
              },
              primary: { base: "before:bg-primary", content: oE.solid.primary },
              secondary: {
                base: "before:bg-secondary",
                content: oE.solid.secondary,
              },
              success: { base: "before:bg-success", content: oE.solid.success },
              warning: { base: "before:bg-warning", content: oE.solid.warning },
              danger: { base: "before:bg-danger", content: oE.solid.danger },
            },
            radius: {
              none: { content: "rounded-none" },
              sm: { content: "rounded-small" },
              md: { content: "rounded-medium" },
              lg: { content: "rounded-large" },
              full: { content: "rounded-full" },
            },
            shadow: {
              none: { content: "shadow-none" },
              sm: { content: "shadow-small" },
              md: { content: "shadow-medium" },
              lg: { content: "shadow-large" },
            },
            backdrop: {
              transparent: {},
              opaque: { backdrop: "bg-overlay/50 backdrop-opacity-disabled" },
              blur: {
                backdrop:
                  "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30",
              },
            },
            triggerScaleOnOpen: {
              true: {
                trigger: [
                  "aria-expanded:scale-[0.97]",
                  "aria-expanded:opacity-70",
                  "subpixel-antialiased",
                ],
              },
              false: {},
            },
            disableAnimation: { true: { base: "animate-none" } },
            isTriggerDisabled: {
              true: { trigger: "opacity-disabled pointer-events-none" },
              false: {},
            },
          },
          defaultVariants: {
            color: "default",
            radius: "lg",
            size: "md",
            shadow: "md",
            backdrop: "transparent",
            triggerScaleOnOpen: !0,
          },
          compoundVariants: [
            {
              backdrop: ["opaque", "blur"],
              class: { backdrop: "block w-full h-full fixed inset-0 -z-30" },
            },
          ],
        });
      let oP = (0, i.createContext)({});
      function oC({ children: e }) {
        let t = (0, i.useMemo)(() => ({ register: () => {} }), []);
        return i.createElement(tL.Provider, { value: t }, e);
      }
      let oT = i.createContext(null);
      function ok(e) {
        var t;
        let r = (0, eq.wR)(),
          { portalContainer: n = r ? null : document.body, isExiting: o } = e,
          [l, a] = (0, i.useState)(!1),
          s = (0, i.useMemo)(() => ({ contain: l, setContain: a }), [l, a]),
          { getContainer: u } =
            null !== (t = (0, i.useContext)(oP)) && void 0 !== t ? t : {};
        if ((!e.portalContainer && u && (n = u()), !n)) return null;
        let c = e.children;
        return (
          e.disableFocusManagement ||
            (c = i.createElement(
              nu,
              { restoreFocus: !0, contain: l && !o },
              c
            )),
          (c = i.createElement(
            oT.Provider,
            { value: s },
            i.createElement(oC, null, c)
          )),
          nl.createPortal(c, n)
        );
      }
      var oM = {};
      function oK(e) {
        var t;
        let { onDismiss: r, ...n } = e,
          o = rE(
            n,
            rI(
              (t = oM) && t.__esModule ? t.default : t,
              "@react-aria/overlays"
            ).format("dismiss")
          );
        return i.createElement(
          r5,
          null,
          i.createElement("button", {
            ...o,
            tabIndex: -1,
            onClick: () => {
              r && r();
            },
            style: { width: 1, height: 1 },
          })
        );
      }
      oM = {
        "ar-AE": { dismiss: `\u{62A}\u{62C}\u{627}\u{647}\u{644}` },
        "bg-BG": {
          dismiss: `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`,
        },
        "cs-CZ": { dismiss: "Odstranit" },
        "da-DK": { dismiss: "Luk" },
        "de-DE": { dismiss: `Schlie\xdfen` },
        "el-GR": {
          dismiss: `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`,
        },
        "en-US": { dismiss: "Dismiss" },
        "es-ES": { dismiss: "Descartar" },
        "et-EE": { dismiss: `L\xf5peta` },
        "fi-FI": { dismiss: `Hylk\xe4\xe4` },
        "fr-FR": { dismiss: "Rejeter" },
        "he-IL": { dismiss: `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}` },
        "hr-HR": { dismiss: "Odbaci" },
        "hu-HU": { dismiss: `Elutas\xedt\xe1s` },
        "it-IT": { dismiss: "Ignora" },
        "ja-JP": { dismiss: `\u{9589}\u{3058}\u{308B}` },
        "ko-KR": { dismiss: `\u{BB34}\u{C2DC}` },
        "lt-LT": { dismiss: "Atmesti" },
        "lv-LV": { dismiss: `Ner\u{101}d\u{12B}t` },
        "nb-NO": { dismiss: "Lukk" },
        "nl-NL": { dismiss: "Negeren" },
        "pl-PL": { dismiss: "Zignoruj" },
        "pt-BR": { dismiss: "Descartar" },
        "pt-PT": { dismiss: "Dispensar" },
        "ro-RO": { dismiss: "Revocare" },
        "ru-RU": {
          dismiss: `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`,
        },
        "sk-SK": { dismiss: `Zru\u{161}i\u{165}` },
        "sl-SI": { dismiss: "Opusti" },
        "sr-SP": { dismiss: "Odbaci" },
        "sv-SE": { dismiss: "Avvisa" },
        "tr-TR": { dismiss: "Kapat" },
        "uk-UA": {
          dismiss: `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`,
        },
        "zh-CN": { dismiss: `\u{53D6}\u{6D88}` },
        "zh-TW": { dismiss: `\u{95DC}\u{9589}` },
      };
      let oD = (0, i.createContext)({ strict: !1 });
      var oO = r(2472);
      function oI(e) {
        for (let t in e) oO.B[t] = { ...oO.B[t], ...e[t] };
      }
      function oA(e) {
        let { children: t, features: r, strict: n = !1 } = e,
          [, o] = (0, i.useState)(!oL(r)),
          l = (0, i.useRef)(void 0);
        if (!oL(r)) {
          let { renderer: e, ...t } = r;
          (l.current = e), oI(t);
        }
        return (
          (0, i.useEffect)(() => {
            oL(r) &&
              r().then((e) => {
                let { renderer: t, ...r } = e;
                oI(r), (l.current = t), o(!0);
              });
          }, []),
          (0, r$.jsx)(oD.Provider, {
            value: { renderer: l.current, strict: n },
            children: t,
          })
        );
      }
      function oL(e) {
        return "function" == typeof e;
      }
      let oR = (0, i.createContext)({});
      var oj = r(250);
      let oz = (0, i.createContext)({});
      var oN = r(3083),
        oF = r(839);
      function oB(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var o_ = r(5094);
      let oW = Symbol.for("motionComponentSymbol");
      function oV(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      let oH = (0, i.createContext)(null),
        o$ = o_.B ? i.useLayoutEffect : i.useEffect;
      var oU = r(9794);
      let { schedule: oG, cancel: oY } = (0, r(210).I)(queueMicrotask, !1),
        oq = (0, i.createContext)({});
      var oX = r(337),
        oZ = r(928),
        oJ = r(9336);
      let oQ = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function o0(e, t, r) {
        for (let n in t) (0, oZ.S)(t[n]) || (0, oX.z)(n, r) || (e[n] = t[n]);
      }
      var o1 = r(697),
        o4 = r(8338),
        o3 = r(1352);
      let o5 = () => ({ ...oQ(), attrs: {} });
      var o2 = r(6925),
        o6 = r(6094),
        o8 = r(241),
        o7 = r(3608),
        o9 = r(5313);
      let le = (e) => (t, r) => {
          let n = (0, i.useContext)(oz),
            o = (0, i.useContext)(oH),
            l = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: e,
                  createRenderState: t,
                  onUpdate: r,
                },
                n,
                o,
                l
              ) {
                let i = {
                  latestValues: (function (e, t, r, n) {
                    let o = {},
                      l = n(e, {});
                    for (let e in l)
                      o[e] = (function (e) {
                        let t = (0, oZ.S)(e) ? e.get() : e;
                        return (0, o9.B)(t) ? t.toValue() : t;
                      })(l[e]);
                    let { initial: i, animate: a } = e,
                      s = (0, oN.e)(e),
                      u = (0, oN.O)(e);
                    t &&
                      u &&
                      !s &&
                      !1 !== e.inherit &&
                      (void 0 === i && (i = t.initial),
                      void 0 === a && (a = t.animate));
                    let c = !!r && !1 === r.initial,
                      d = (c = c || !1 === i) ? a : i;
                    if (d && "boolean" != typeof d && !(0, o6.N)(d)) {
                      let t = Array.isArray(d) ? d : [d];
                      for (let r = 0; r < t.length; r++) {
                        let n = (0, o8.a)(e, t[r]);
                        if (n) {
                          let { transitionEnd: e, transition: t, ...r } = n;
                          for (let e in r) {
                            let t = r[e];
                            if (Array.isArray(t)) {
                              let e = c ? t.length - 1 : 0;
                              t = t[e];
                            }
                            null !== t && (o[e] = t);
                          }
                          for (let t in e) o[t] = e[t];
                        }
                      }
                    }
                    return o;
                  })(n, o, l, e),
                  renderState: t(),
                };
                return (
                  r &&
                    ((i.onMount = (e) => r({ props: n, current: e, ...i })),
                    (i.onUpdate = (e) => r(e))),
                  i
                );
              })(e, t, n, o);
          return r ? l() : (0, o7.M)(l);
        },
        lt = {
          useVisualState: le({
            scrapeMotionValuesFromProps: r(4192).x,
            createRenderState: oQ,
          }),
        };
      var lr = r(6160),
        ln = r(2613),
        lo = r(2667),
        ll = r(3723),
        li = r(5777);
      let la = ["x", "y", "width", "height", "cx", "cy", "r"],
        ls = {
          useVisualState: le({
            scrapeMotionValuesFromProps: li.x,
            createRenderState: o5,
            onUpdate: ({
              props: e,
              prevProps: t,
              current: r,
              renderState: n,
              latestValues: o,
            }) => {
              if (!r) return;
              let l = !!e.drag;
              if (!l) {
                for (let e in o)
                  if (ln.f.has(e)) {
                    l = !0;
                    break;
                  }
              }
              if (!l) return;
              let i = !t;
              if (t)
                for (let r = 0; r < la.length; r++) {
                  let n = la[r];
                  e[n] !== t[n] && (i = !0);
                }
              i &&
                lr.Gt.read(() => {
                  (0, lo.H)(r, n),
                    lr.Gt.render(() => {
                      (0, o3.B)(
                        n,
                        o,
                        (0, o2.n)(r.tagName),
                        e.transformTemplate
                      ),
                        (0, ll.d)(r, n);
                    });
                });
            },
          }),
        },
        lu = (function (e) {
          if ("undefined" == typeof Proxy) return e;
          let t = new Map();
          return new Proxy((...t) => e(...t), {
            get: (r, n) =>
              "create" === n ? e : (t.has(n) || t.set(n, e(n)), t.get(n)),
          });
        })(function (
          e,
          { forwardMotionProps: t } = { forwardMotionProps: !1 }
        ) {
          return (function (e) {
            var t, r;
            let {
              preloadedFeatures: n,
              createVisualElement: o,
              useRender: l,
              useVisualState: a,
              Component: s,
            } = e;
            function u(e, t) {
              var r;
              let n;
              let u = {
                  ...(0, i.useContext)(oj.Q),
                  ...e,
                  layoutId: (function (e) {
                    let { layoutId: t } = e,
                      r = (0, i.useContext)(oR).id;
                    return r && void 0 !== t ? r + "-" + t : t;
                  })(e),
                },
                { isStatic: c } = u,
                d = (function (e) {
                  let { initial: t, animate: r } = (function (e, t) {
                    if ((0, oN.e)(e)) {
                      let { initial: t, animate: r } = e;
                      return {
                        initial: !1 === t || (0, oF.w)(t) ? t : void 0,
                        animate: (0, oF.w)(r) ? r : void 0,
                      };
                    }
                    return !1 !== e.inherit ? t : {};
                  })(e, (0, i.useContext)(oz));
                  return (0, i.useMemo)(
                    () => ({ initial: t, animate: r }),
                    [oB(t), oB(r)]
                  );
                })(e),
                f = a(e, c);
              if (!c && o_.B) {
                (0, i.useContext)(oD).strict;
                let e = (function (e) {
                  let { drag: t, layout: r } = oO.B;
                  if (!t && !r) return {};
                  let n = { ...t, ...r };
                  return {
                    MeasureLayout:
                      (null == t ? void 0 : t.isEnabled(e)) ||
                      (null == r ? void 0 : r.isEnabled(e))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                (n = e.MeasureLayout),
                  (d.visualElement = (function (e, t, r, n, o) {
                    var l, a;
                    let { visualElement: s } = (0, i.useContext)(oz),
                      u = (0, i.useContext)(oD),
                      c = (0, i.useContext)(oH),
                      d = (0, i.useContext)(oj.Q).reducedMotion,
                      f = (0, i.useRef)(null);
                    (n = n || u.renderer),
                      !f.current &&
                        n &&
                        (f.current = n(e, {
                          visualState: t,
                          parent: s,
                          props: r,
                          presenceContext: c,
                          blockInitialAnimation: !!c && !1 === c.initial,
                          reducedMotionConfig: d,
                        }));
                    let p = f.current,
                      g = (0, i.useContext)(oq);
                    p &&
                      !p.projection &&
                      o &&
                      ("html" === p.type || "svg" === p.type) &&
                      (function (e, t, r, n) {
                        let {
                          layoutId: o,
                          layout: l,
                          drag: i,
                          dragConstraints: a,
                          layoutScroll: s,
                          layoutRoot: u,
                        } = t;
                        (e.projection = new r(
                          e.latestValues,
                          t["data-framer-portal-id"]
                            ? void 0
                            : (function e(t) {
                                if (t)
                                  return !1 !== t.options.allowProjection
                                    ? t.projection
                                    : e(t.parent);
                              })(e.parent)
                        )),
                          e.projection.setOptions({
                            layoutId: o,
                            layout: l,
                            alwaysMeasureLayout: !!i || (a && oV(a)),
                            visualElement: e,
                            animationType: "string" == typeof l ? l : "both",
                            initialPromotionConfig: n,
                            layoutScroll: s,
                            layoutRoot: u,
                          });
                      })(f.current, r, o, g);
                    let h = (0, i.useRef)(!1);
                    (0, i.useInsertionEffect)(() => {
                      p && h.current && p.update(r, c);
                    });
                    let m = r[oU.n],
                      v = (0, i.useRef)(
                        !!m &&
                          !(null === (l = window.MotionHandoffIsComplete) ||
                          void 0 === l
                            ? void 0
                            : l.call(window, m)) &&
                          (null === (a = window.MotionHasOptimisedAnimation) ||
                          void 0 === a
                            ? void 0
                            : a.call(window, m))
                      );
                    return (
                      o$(() => {
                        p &&
                          ((h.current = !0),
                          (window.MotionIsMounted = !0),
                          p.updateFeatures(),
                          oG.render(p.render),
                          v.current &&
                            p.animationState &&
                            p.animationState.animateChanges());
                      }),
                      (0, i.useEffect)(() => {
                        p &&
                          (!v.current &&
                            p.animationState &&
                            p.animationState.animateChanges(),
                          v.current &&
                            (queueMicrotask(() => {
                              var e;
                              null ===
                                (e = window.MotionHandoffMarkAsComplete) ||
                                void 0 === e ||
                                e.call(window, m);
                            }),
                            (v.current = !1)));
                      }),
                      p
                    );
                  })(s, f, u, o, e.ProjectionNode));
              }
              return (0, r$.jsxs)(oz.Provider, {
                value: d,
                children: [
                  n && d.visualElement
                    ? (0, r$.jsx)(n, { visualElement: d.visualElement, ...u })
                    : null,
                  l(
                    s,
                    e,
                    ((r = d.visualElement),
                    (0, i.useCallback)(
                      (e) => {
                        e && f.onMount && f.onMount(e),
                          r && (e ? r.mount(e) : r.unmount()),
                          t &&
                            ("function" == typeof t
                              ? t(e)
                              : oV(t) && (t.current = e));
                      },
                      [r]
                    )),
                    f,
                    c,
                    d.visualElement
                  ),
                ],
              });
            }
            n && oI(n),
              (u.displayName = "motion.".concat(
                "string" == typeof s
                  ? s
                  : "create(".concat(
                      null !==
                        (r =
                          null !== (t = s.displayName) && void 0 !== t
                            ? t
                            : s.name) && void 0 !== r
                        ? r
                        : "",
                      ")"
                    )
              ));
            let c = (0, i.forwardRef)(u);
            return (c[oW] = s), c;
          })({
            ...((0, o4.Q)(e) ? ls : lt),
            preloadedFeatures: void 0,
            useRender: (function (e = !1) {
              return (t, r, n, { latestValues: o }, l) => {
                let a = (
                    (0, o4.Q)(t)
                      ? function (e, t, r, n) {
                          let o = (0, i.useMemo)(() => {
                            let r = o5();
                            return (
                              (0, o3.B)(
                                r,
                                t,
                                (0, o2.n)(n),
                                e.transformTemplate
                              ),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [t]);
                          if (e.style) {
                            let t = {};
                            o0(t, e.style, e), (o.style = { ...t, ...o.style });
                          }
                          return o;
                        }
                      : function (e, t) {
                          let r = {},
                            n = (function (e, t) {
                              let r = e.style || {},
                                n = {};
                              return (
                                o0(n, r, e),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: e }, t) {
                                    return (0, i.useMemo)(() => {
                                      let r = oQ();
                                      return (
                                        (0, oJ.O)(r, t, e),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [t]);
                                  })(e, t)
                                ),
                                n
                              );
                            })(e, t);
                          return (
                            e.drag &&
                              !1 !== e.dragListener &&
                              ((r.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === e.drag
                                  ? "none"
                                  : `pan-${"x" === e.drag ? "y" : "x"}`)),
                            void 0 === e.tabIndex &&
                              (e.onTap || e.onTapStart || e.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = n),
                            r
                          );
                        }
                  )(r, o, l, t),
                  s = (0, o1.J)(r, "string" == typeof t, e),
                  u = t !== i.Fragment ? { ...s, ...a, ref: n } : {},
                  { children: c } = r,
                  d = (0, i.useMemo)(() => ((0, oZ.S)(c) ? c.get() : c), [c]);
                return (0, i.createElement)(t, { ...u, children: d });
              };
            })(t),
            createVisualElement: void 0,
            Component: e,
          });
        });
      var lc = {
        ease: [0.36, 0.66, 0.4, 1],
        easeIn: [0.4, 0, 1, 1],
        easeOut: [0, 0, 0.2, 1],
      };
      lc.easeOut, lc.easeIn;
      var ld = {
          scaleSpring: {
            enter: {
              transform: "scale(1)",
              opacity: 1,
              transition: { type: "spring", bounce: 0, duration: 0.2 },
            },
            exit: {
              transform: "scale(0.85)",
              opacity: 0,
              transition: { type: "easeOut", duration: 0.15 },
            },
          },
          scaleSpringOpacity: {
            initial: { opacity: 0, transform: "scale(0.8)" },
            enter: {
              opacity: 1,
              transform: "scale(1)",
              transition: { type: "spring", bounce: 0, duration: 0.3 },
            },
            exit: {
              opacity: 0,
              transform: "scale(0.96)",
              transition: { type: "easeOut", bounce: 0, duration: 0.15 },
            },
          },
          scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
          scaleFadeIn: {
            enter: {
              transform: "scale(1)",
              opacity: 1,
              transition: { duration: 0.25, ease: lc.easeIn },
            },
            exit: {
              transform: "scale(0.95)",
              opacity: 0,
              transition: { duration: 0.2, ease: lc.easeOut },
            },
          },
          scaleInOut: {
            enter: {
              transform: "scale(1)",
              opacity: 1,
              transition: { duration: 0.4, ease: lc.ease },
            },
            exit: {
              transform: "scale(1.03)",
              opacity: 0,
              transition: { duration: 0.3, ease: lc.ease },
            },
          },
          fade: {
            enter: { opacity: 1, transition: { duration: 0.4, ease: lc.ease } },
            exit: { opacity: 0, transition: { duration: 0.3, ease: lc.ease } },
          },
          collapse: {
            enter: {
              opacity: 1,
              height: "auto",
              transition: {
                height: { type: "spring", bounce: 0, duration: 0.3 },
                opacity: { easings: "ease", duration: 0.4 },
              },
            },
            exit: {
              opacity: 0,
              height: 0,
              transition: { easings: "ease", duration: 0.3 },
            },
          },
        },
        lf = () =>
          r
            .e(328)
            .then(r.bind(r, 2328))
            .then((e) => e.default),
        lp = a((e, t) => {
          let {
              children: r,
              motionProps: n,
              placement: o,
              disableAnimation: l,
              style: i = {},
              transformOrigin: a = {},
              ...s
            } = e,
            u = i;
          return (
            void 0 !== a.originX || void 0 !== a.originY
              ? (u = { ...u, transformOrigin: a })
              : o && (u = { ...u, ...og("center" === o ? "top" : o) }),
            l
              ? (0, r$.jsx)("div", { ...s, ref: t, children: r })
              : (0, r$.jsx)(oA, {
                  features: lf,
                  children: (0, r$.jsx)(lu.div, {
                    ref: t,
                    animate: "enter",
                    exit: "exit",
                    initial: "initial",
                    style: u,
                    variants: ld.scaleSpringOpacity,
                    ...e1(s, n),
                    children: r,
                  }),
                })
          );
        });
      lp.displayName = "HeroUI.FreeSoloPopoverWrapper";
      var lg = a((e, t) => {
        let {
            children: r,
            transformOrigin: n,
            disableDialogFocus: o = !1,
            ...a
          } = e,
          {
            Component: u,
            state: c,
            placement: d,
            backdrop: f,
            portalContainer: p,
            disableAnimation: g,
            motionProps: h,
            isNonModal: m,
            getPopoverProps: v,
            getBackdropProps: b,
            getDialogProps: y,
            getContentProps: x,
          } = (function (e) {
            var t, r, n;
            let o = (0, l.o)(),
              [a, u] = s(e, oS.variantKeys),
              {
                as: c,
                ref: d,
                children: f,
                state: p,
                triggerRef: g,
                scrollRef: h,
                defaultOpen: m,
                onOpenChange: v,
                isOpen: b,
                isNonModal: y = !0,
                shouldFlip: x = !0,
                containerPadding: w = 12,
                shouldBlockScroll: E = !1,
                isDismissable: S = !0,
                shouldCloseOnBlur: P,
                portalContainer: C,
                updatePositionDeps: T,
                dialogProps: k,
                placement: M = "top",
                triggerType: K = "dialog",
                showArrow: D = !1,
                offset: O = 7,
                crossOffset: I = 0,
                boundaryElement: A,
                isKeyboardDismissDisabled: L,
                shouldCloseOnInteractOutside: R,
                shouldCloseOnScroll: j,
                motionProps: z,
                className: N,
                classNames: F,
                onClose: B,
                ..._
              } = a,
              W = eD(d),
              V = (0, i.useRef)(null),
              H = (0, i.useRef)(!1),
              $ = g || V,
              U =
                null !=
                  (r =
                    null != (t = e.disableAnimation)
                      ? t
                      : null == o
                      ? void 0
                      : o.disableAnimation) && r,
              G = rc({
                isOpen: b,
                defaultOpen: m,
                onOpenChange: (e) => {
                  null == v || v(e), e || null == B || B();
                },
              }),
              Y = p || G,
              {
                popoverProps: q,
                underlayProps: X,
                placement: Z,
              } = (function (e, t) {
                let {
                    triggerRef: r,
                    popoverRef: n,
                    showArrow: o,
                    offset: l = 7,
                    crossOffset: a = 0,
                    scrollRef: s,
                    shouldFlip: u,
                    boundaryElement: c,
                    isDismissable: d = !0,
                    shouldCloseOnBlur: f = !0,
                    shouldCloseOnScroll: p = !0,
                    placement: g = "top",
                    containerPadding: h,
                    shouldCloseOnInteractOutside: m,
                    isNonModal: v,
                    isKeyboardDismissDisabled: b,
                    updatePositionDeps: y = [],
                    ...x
                  } = e,
                  w = null == v || v,
                  { overlayProps: E, underlayProps: S } = (function (e, t) {
                    let {
                      onClose: r,
                      shouldCloseOnBlur: n,
                      isOpen: o,
                      isDismissable: l = !1,
                      isKeyboardDismissDisabled: a = !1,
                      shouldCloseOnInteractOutside: s,
                    } = e;
                    (0, i.useEffect)(
                      () => (
                        o && n2.push(t),
                        () => {
                          let e = n2.indexOf(t);
                          e >= 0 && n2.splice(e, 1);
                        }
                      ),
                      [o, t]
                    );
                    let u = () => {
                      n2[n2.length - 1] === t && r && r();
                    };
                    !(function (e) {
                      let {
                          ref: t,
                          onInteractOutside: r,
                          isDisabled: n,
                          onInteractOutsideStart: o,
                        } = e,
                        l = (0, i.useRef)({
                          isPointerDown: !1,
                          ignoreEmulatedMouseEvents: !1,
                        }),
                        a = eY((e) => {
                          r &&
                            n5(e, t) &&
                            (o && o(e), (l.current.isPointerDown = !0));
                        }),
                        s = eY((e) => {
                          r && r(e);
                        });
                      (0, i.useEffect)(() => {
                        let e = l.current;
                        if (n) return;
                        let r = e8(t.current);
                        if ("undefined" != typeof PointerEvent) {
                          let n = (r) => {
                            e.isPointerDown && n5(r, t) && s(r),
                              (e.isPointerDown = !1);
                          };
                          return (
                            r.addEventListener("pointerdown", a, !0),
                            r.addEventListener("pointerup", n, !0),
                            () => {
                              r.removeEventListener("pointerdown", a, !0),
                                r.removeEventListener("pointerup", n, !0);
                            }
                          );
                        }
                        {
                          let n = (r) => {
                              e.ignoreEmulatedMouseEvents
                                ? (e.ignoreEmulatedMouseEvents = !1)
                                : e.isPointerDown && n5(r, t) && s(r),
                                (e.isPointerDown = !1);
                            },
                            o = (r) => {
                              (e.ignoreEmulatedMouseEvents = !0),
                                e.isPointerDown && n5(r, t) && s(r),
                                (e.isPointerDown = !1);
                            };
                          return (
                            r.addEventListener("mousedown", a, !0),
                            r.addEventListener("mouseup", n, !0),
                            r.addEventListener("touchstart", a, !0),
                            r.addEventListener("touchend", o, !0),
                            () => {
                              r.removeEventListener("mousedown", a, !0),
                                r.removeEventListener("mouseup", n, !0),
                                r.removeEventListener("touchstart", a, !0),
                                r.removeEventListener("touchend", o, !0);
                            }
                          );
                        }
                      }, [t, n, a, s]);
                    })({
                      ref: t,
                      onInteractOutside:
                        l && o
                          ? (e) => {
                              (!s || s(e.target)) &&
                                (n2[n2.length - 1] === t &&
                                  (e.stopPropagation(), e.preventDefault()),
                                u());
                            }
                          : void 0,
                      onInteractOutsideStart: (e) => {
                        (!s || s(e.target)) &&
                          n2[n2.length - 1] === t &&
                          (e.stopPropagation(), e.preventDefault());
                      },
                    });
                    let { focusWithinProps: c } = t0({
                      isDisabled: !n,
                      onBlurWithin: (e) => {
                        !(!e.relatedTarget || nm(e.relatedTarget, ns)) &&
                          (!s || s(e.relatedTarget)) &&
                          (null == r || r());
                      },
                    });
                    return {
                      overlayProps: {
                        onKeyDown: (e) => {
                          "Escape" !== e.key ||
                            a ||
                            e.nativeEvent.isComposing ||
                            (e.stopPropagation(), e.preventDefault(), u());
                        },
                        ...c,
                      },
                      underlayProps: {
                        onPointerDown: (e) => {
                          e.target === e.currentTarget && e.preventDefault();
                        },
                      },
                    };
                  })(
                    {
                      isOpen: t.isOpen,
                      onClose: t.close,
                      shouldCloseOnBlur: f,
                      isDismissable: d,
                      isKeyboardDismissDisabled: b,
                      shouldCloseOnInteractOutside: m || ((e) => rV(e, r, t)),
                    },
                    n
                  ),
                  {
                    overlayProps: P,
                    arrowProps: C,
                    placement: T,
                    updatePosition: k,
                  } = (function (e) {
                    var t, r, n;
                    let { direction: o } = (0, ry.Y)(),
                      {
                        arrowSize: l = 0,
                        targetRef: a,
                        overlayRef: s,
                        scrollRef: u = s,
                        placement: c = "bottom",
                        containerPadding: d = 12,
                        shouldFlip: f = !0,
                        boundaryElement: p = "undefined" != typeof document
                          ? document.body
                          : null,
                        offset: g = 0,
                        crossOffset: h = 0,
                        shouldUpdatePosition: m = !0,
                        isOpen: v = !0,
                        onClose: b,
                        maxHeight: y,
                        arrowBoundaryOffset: x = 0,
                      } = e,
                      [w, E] = (0, i.useState)(null),
                      S = [
                        m,
                        c,
                        s.current,
                        a.current,
                        u.current,
                        d,
                        f,
                        p,
                        g,
                        h,
                        v,
                        o,
                        y,
                        x,
                        l,
                      ],
                      P = (0, i.useRef)(null == op ? void 0 : op.scale);
                    (0, i.useEffect)(() => {
                      v && (P.current = null == op ? void 0 : op.scale);
                    }, [v]);
                    let C = (0, i.useCallback)(() => {
                      var e, t, r, n, i;
                      if (
                        !1 === m ||
                        !v ||
                        !s.current ||
                        !a.current ||
                        !p ||
                        (null == op ? void 0 : op.scale) !== P.current
                      )
                        return;
                      let b = null;
                      if (
                        u.current &&
                        u.current.contains(document.activeElement)
                      ) {
                        let n =
                            null === (e = document.activeElement) ||
                            void 0 === e
                              ? void 0
                              : e.getBoundingClientRect(),
                          o = u.current.getBoundingClientRect();
                        (b = {
                          type: "top",
                          offset:
                            (null !== (t = null == n ? void 0 : n.top) &&
                            void 0 !== t
                              ? t
                              : 0) - o.top,
                        }).offset >
                          o.height / 2 &&
                          ((b.type = "bottom"),
                          (b.offset =
                            (null !== (r = null == n ? void 0 : n.bottom) &&
                            void 0 !== r
                              ? r
                              : 0) - o.bottom));
                      }
                      let w = s.current;
                      !y &&
                        s.current &&
                        ((w.style.top = "0px"),
                        (w.style.bottom = ""),
                        (w.style.maxHeight =
                          (null !==
                            (i =
                              null === (n = window.visualViewport) ||
                              void 0 === n
                                ? void 0
                                : n.height) && void 0 !== i
                            ? i
                            : window.innerHeight) + "px"));
                      let S = (function (e) {
                        var t, r, n, o;
                        let l;
                        let {
                            placement: i,
                            targetNode: a,
                            overlayNode: s,
                            scrollNode: u,
                            padding: c,
                            shouldFlip: d,
                            boundaryElement: f,
                            offset: p,
                            crossOffset: g,
                            maxHeight: h,
                            arrowSize: m = 0,
                            arrowBoundaryOffset: v = 0,
                          } = e,
                          b =
                            s instanceof HTMLElement
                              ? (function (e) {
                                  let t = e.offsetParent;
                                  if (
                                    (t &&
                                      t === document.body &&
                                      "static" ===
                                        window.getComputedStyle(t).position &&
                                      !od(t) &&
                                      (t = document.documentElement),
                                    null == t)
                                  )
                                    for (t = e.parentElement; t && !od(t); )
                                      t = t.parentElement;
                                  return t || document.documentElement;
                                })(s)
                              : document.documentElement,
                          y = b === document.documentElement,
                          x = window.getComputedStyle(b).position,
                          w = y ? ou(a) : oc(a, b);
                        if (!y) {
                          let { marginTop: e, marginLeft: t } =
                            window.getComputedStyle(a);
                          (w.top += parseInt(e, 10) || 0),
                            (w.left += parseInt(t, 10) || 0);
                        }
                        let E = ou(s),
                          S = {
                            top:
                              parseInt(
                                (l = window.getComputedStyle(s)).marginTop,
                                10
                              ) || 0,
                            bottom: parseInt(l.marginBottom, 10) || 0,
                            left: parseInt(l.marginLeft, 10) || 0,
                            right: parseInt(l.marginRight, 10) || 0,
                          };
                        (E.width +=
                          (null !== (t = S.left) && void 0 !== t ? t : 0) +
                          (null !== (r = S.right) && void 0 !== r ? r : 0)),
                          (E.height +=
                            (null !== (n = S.top) && void 0 !== n ? n : 0) +
                            (null !== (o = S.bottom) && void 0 !== o ? o : 0));
                        let P = {
                            top: u.scrollTop,
                            left: u.scrollLeft,
                            width: u.scrollWidth,
                            height: u.scrollHeight,
                          },
                          C = oo(f),
                          T = oo(b),
                          k = "BODY" === f.tagName ? ou(b) : oc(b, f);
                        return (
                          "HTML" === b.tagName &&
                            "BODY" === f.tagName &&
                            ((T.scroll.top = 0), (T.scroll.left = 0)),
                          (function (
                            e,
                            t,
                            r,
                            n,
                            o,
                            l,
                            i,
                            a,
                            s,
                            u,
                            c,
                            d,
                            f,
                            p,
                            g,
                            h
                          ) {
                            var m, v, b, y;
                            let x = oi(e),
                              {
                                size: w,
                                crossAxis: E,
                                crossSize: S,
                                placement: P,
                                crossPlacement: C,
                              } = x,
                              T = oa(t, a, r, x, c, d, u, f, g, h),
                              k = c,
                              M = os(a, u, t, o, l + c, x);
                            if (i && n[w] > M) {
                              let e = oi(`${n7[P]} ${C}`),
                                n = oa(t, a, r, e, c, d, u, f, g, h);
                              os(a, u, t, o, l + c, e) > M &&
                                ((x = e), (T = n), (k = c));
                            }
                            let K = "bottom";
                            "top" === x.axis
                              ? "top" === x.placement
                                ? (K = "top")
                                : "bottom" === x.placement && (K = "bottom")
                              : "top" === x.crossAxis &&
                                ("top" === x.crossPlacement
                                  ? (K = "bottom")
                                  : "bottom" === x.crossPlacement &&
                                    (K = "top"));
                            let D = ol(E, T[E], r[S], a, s, l, u);
                            T[E] += D;
                            let O = (function (e, t, r, n, o, l, i, a) {
                              var s, u, c, d, f, p, g;
                              let h = n ? r.height : t[ot.height],
                                m =
                                  null != e.top
                                    ? r.top + e.top
                                    : r.top +
                                      (h -
                                        (null !== (s = e.bottom) && void 0 !== s
                                          ? s
                                          : 0) -
                                        i),
                                v =
                                  "top" !== a
                                    ? Math.max(
                                        0,
                                        t.height +
                                          t.top +
                                          (null !== (u = t.scroll.top) &&
                                          void 0 !== u
                                            ? u
                                            : 0) -
                                          m -
                                          ((null !== (c = o.top) && void 0 !== c
                                            ? c
                                            : 0) +
                                            (null !== (d = o.bottom) &&
                                            void 0 !== d
                                              ? d
                                              : 0) +
                                            l)
                                      )
                                    : Math.max(
                                        0,
                                        m +
                                          i -
                                          (t.top +
                                            (null !== (f = t.scroll.top) &&
                                            void 0 !== f
                                              ? f
                                              : 0)) -
                                          ((null !== (p = o.top) && void 0 !== p
                                            ? p
                                            : 0) +
                                            (null !== (g = o.bottom) &&
                                            void 0 !== g
                                              ? g
                                              : 0) +
                                            l)
                                      );
                              return Math.min(t.height - 2 * l, v);
                            })(T, a, u, f, o, l, r.height, K);
                            p && p < O && (O = p),
                              (r.height = Math.min(r.height, O)),
                              (D = ol(
                                E,
                                (T = oa(t, a, r, x, k, d, u, f, g, h))[E],
                                r[S],
                                a,
                                s,
                                l,
                                u
                              )),
                              (T[E] += D);
                            let I = {},
                              A = t[E] + 0.5 * t[S] - T[E] - o[n8[E]],
                              L = g / 2 + h,
                              R =
                                "left" === n8[E]
                                  ? (null !== (m = o.left) && void 0 !== m
                                      ? m
                                      : 0) +
                                    (null !== (v = o.right) && void 0 !== v
                                      ? v
                                      : 0)
                                  : (null !== (b = o.top) && void 0 !== b
                                      ? b
                                      : 0) +
                                    (null !== (y = o.bottom) && void 0 !== y
                                      ? y
                                      : 0),
                              j = r[S] - R - g / 2 - h,
                              z = n6(
                                A,
                                t[E] + g / 2 - (T[E] + o[n8[E]]),
                                t[E] + t[S] - g / 2 - (T[E] + o[n8[E]])
                              );
                            return (
                              (I[E] = n6(z, L, j)),
                              {
                                position: T,
                                maxHeight: O,
                                arrowOffsetLeft: I.left,
                                arrowOffsetTop: I.top,
                                placement: x.placement,
                              }
                            );
                          })(
                            i,
                            w,
                            E,
                            P,
                            S,
                            c,
                            d,
                            C,
                            T,
                            k,
                            p,
                            g,
                            !!x && "static" !== x,
                            h,
                            m,
                            v
                          )
                        );
                      })({
                        placement:
                          "rtl" === o
                            ? c.replace("start", "right").replace("end", "left")
                            : c
                                .replace("start", "left")
                                .replace("end", "right"),
                        overlayNode: s.current,
                        targetNode: a.current,
                        scrollNode: u.current || s.current,
                        padding: d,
                        shouldFlip: f,
                        boundaryElement: p,
                        offset: g,
                        crossOffset: h,
                        maxHeight: y,
                        arrowSize: l,
                        arrowBoundaryOffset: x,
                      });
                      if (S.position) {
                        if (
                          ((w.style.top = ""),
                          (w.style.bottom = ""),
                          (w.style.left = ""),
                          (w.style.right = ""),
                          Object.keys(S.position).forEach(
                            (e) => (w.style[e] = S.position[e] + "px")
                          ),
                          (w.style.maxHeight =
                            null != S.maxHeight ? S.maxHeight + "px" : ""),
                          b && document.activeElement && u.current)
                        ) {
                          let e =
                              document.activeElement.getBoundingClientRect(),
                            t = u.current.getBoundingClientRect(),
                            r = e[b.type] - t[b.type];
                          u.current.scrollTop += r - b.offset;
                        }
                        E(S);
                      }
                    }, S);
                    eG(C, S),
                      eG(
                        () => (
                          window.addEventListener("resize", n, !1),
                          () => {
                            window.removeEventListener("resize", n, !1);
                          }
                        ),
                        [(n = C)]
                      ),
                      of({ ref: s, onResize: C }),
                      of({ ref: a, onResize: C });
                    let T = (0, i.useRef)(!1);
                    eG(() => {
                      let e;
                      let t = () => {
                          (T.current = !0),
                            clearTimeout(e),
                            (e = setTimeout(() => {
                              T.current = !1;
                            }, 500)),
                            C();
                        },
                        r = () => {
                          T.current && t();
                        };
                      return (
                        null == op || op.addEventListener("resize", t),
                        null == op || op.addEventListener("scroll", r),
                        () => {
                          null == op || op.removeEventListener("resize", t),
                            null == op || op.removeEventListener("scroll", r);
                        }
                      );
                    }, [C]);
                    let k = (0, i.useCallback)(() => {
                      T.current || null == b || b();
                    }, [b, T]);
                    return (
                      !(function (e) {
                        let { triggerRef: t, isOpen: r, onClose: n } = e;
                        (0, i.useEffect)(() => {
                          if (!r || null === n) return;
                          let e = (e) => {
                            let r = e.target;
                            if (
                              !t.current ||
                              (r instanceof Node && !r.contains(t.current)) ||
                              e.target instanceof HTMLInputElement ||
                              e.target instanceof HTMLTextAreaElement
                            )
                              return;
                            let o = n || rj.get(t.current);
                            o && o();
                          };
                          return (
                            window.addEventListener("scroll", e, !0),
                            () => {
                              window.removeEventListener("scroll", e, !0);
                            }
                          );
                        }, [r, n, t]);
                      })({ triggerRef: a, isOpen: v, onClose: b && k }),
                      {
                        overlayProps: {
                          style: {
                            position: "absolute",
                            zIndex: 1e5,
                            ...(null == w ? void 0 : w.position),
                            maxHeight:
                              null !== (t = null == w ? void 0 : w.maxHeight) &&
                              void 0 !== t
                                ? t
                                : "100vh",
                          },
                        },
                        placement:
                          null !== (r = null == w ? void 0 : w.placement) &&
                          void 0 !== r
                            ? r
                            : null,
                        arrowProps: {
                          "aria-hidden": "true",
                          role: "presentation",
                          style: {
                            left: null == w ? void 0 : w.arrowOffsetLeft,
                            top: null == w ? void 0 : w.arrowOffsetTop,
                          },
                        },
                        updatePosition: C,
                      }
                    );
                  })({
                    ...x,
                    shouldFlip: u,
                    crossOffset: a,
                    targetRef: r,
                    overlayRef: n,
                    isOpen: t.isOpen,
                    scrollRef: s,
                    boundaryElement: c,
                    containerPadding: h,
                    placement: oh(g),
                    offset: o ? l + 3 : l,
                    onClose: w && p ? t.close : () => {},
                  });
                return (
                  rW(() => {
                    y.length && k();
                  }, y),
                  (0, i.useEffect)(() => {
                    if (t.isOpen && !w && n.current)
                      return (function (e) {
                        let t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : document.body,
                          r = new Set(e),
                          n = new Set(),
                          o = (e) => {
                            for (let t of e.querySelectorAll(
                              "[data-live-announcer], [data-react-aria-top-layer]"
                            ))
                              r.add(t);
                            let t = (e) => {
                                if (
                                  r.has(e) ||
                                  (e.parentElement &&
                                    n.has(e.parentElement) &&
                                    "row" !==
                                      e.parentElement.getAttribute("role"))
                                )
                                  return NodeFilter.FILTER_REJECT;
                                for (let t of r)
                                  if (e.contains(t))
                                    return NodeFilter.FILTER_SKIP;
                                return NodeFilter.FILTER_ACCEPT;
                              },
                              o = document.createTreeWalker(
                                e,
                                NodeFilter.SHOW_ELEMENT,
                                { acceptNode: t }
                              ),
                              i = t(e);
                            if (
                              (i === NodeFilter.FILTER_ACCEPT && l(e),
                              i !== NodeFilter.FILTER_REJECT)
                            ) {
                              let e = o.nextNode();
                              for (; null != e; ) l(e), (e = o.nextNode());
                            }
                          },
                          l = (e) => {
                            var t;
                            let r = null != (t = ob.get(e)) ? t : 0;
                            ("true" !== e.getAttribute("aria-hidden") ||
                              0 !== r) &&
                              (0 === r && e.setAttribute("aria-hidden", "true"),
                              n.add(e),
                              ob.set(e, r + 1));
                          };
                        oy.length && oy[oy.length - 1].disconnect(), o(t);
                        let i = new MutationObserver((e) => {
                          for (let t of e)
                            if (
                              "childList" === t.type &&
                              0 !== t.addedNodes.length &&
                              ![...r, ...n].some((e) => e.contains(t.target))
                            ) {
                              for (let e of t.removedNodes)
                                e instanceof Element &&
                                  (r.delete(e), n.delete(e));
                              for (let e of t.addedNodes)
                                (e instanceof HTMLElement ||
                                  e instanceof SVGElement) &&
                                ("true" === e.dataset.liveAnnouncer ||
                                  "true" === e.dataset.reactAriaTopLayer)
                                  ? r.add(e)
                                  : e instanceof Element && o(e);
                            }
                        });
                        i.observe(t, { childList: !0, subtree: !0 });
                        let a = {
                          observe() {
                            i.observe(t, { childList: !0, subtree: !0 });
                          },
                          disconnect() {
                            i.disconnect();
                          },
                        };
                        return (
                          oy.push(a),
                          () => {
                            for (let e of (i.disconnect(), n)) {
                              let t = ob.get(e);
                              null != t &&
                                (1 === t
                                  ? (e.removeAttribute("aria-hidden"),
                                    ob.delete(e))
                                  : ob.set(e, t - 1));
                            }
                            a === oy[oy.length - 1]
                              ? (oy.pop(),
                                oy.length && oy[oy.length - 1].observe())
                              : oy.splice(oy.indexOf(a), 1);
                          }
                        );
                      })([n.current]);
                  }, [w, t.isOpen, n]),
                  {
                    popoverProps: e1(E, P),
                    arrowProps: C,
                    underlayProps: S,
                    placement: T,
                  }
                );
              })(
                {
                  triggerRef: $,
                  isNonModal: y,
                  popoverRef: W,
                  placement: M,
                  offset: O,
                  scrollRef: h,
                  isDismissable: S,
                  shouldCloseOnBlur: P,
                  boundaryElement: A,
                  crossOffset: I,
                  shouldFlip: x,
                  containerPadding: w,
                  updatePositionDeps: T,
                  isKeyboardDismissDisabled: L,
                  shouldCloseOnScroll: j,
                  shouldCloseOnInteractOutside: R,
                },
                Y
              ),
              J = (0, i.useMemo)(() => (Z ? (om(Z, M) ? Z : M) : null), [Z, M]),
              { triggerProps: Q } = rz({ type: K }, Y, $),
              { isFocusVisible: ee, isFocused: et, focusProps: er } = t1(),
              en = (0, i.useMemo)(() => oS({ ...u }), [eW(u)]),
              eo = eB(null == F ? void 0 : F.base, N);
            rZ({ isDisabled: !(E && Y.isOpen) });
            let el = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "content",
                    "data-open": eF(Y.isOpen),
                    "data-arrow": eF(D),
                    "data-placement": Z ? ov(Z, M) : void 0,
                    className: en.content({
                      class: eB(null == F ? void 0 : F.content, e.className),
                    }),
                  };
                },
                [en, Y.isOpen, D, J, M, F, Z]
              ),
              ei = (0, i.useCallback)(
                (t) => {
                  var r;
                  let n;
                  return (
                    "touch" === t.pointerType &&
                    ((null == e ? void 0 : e.backdrop) === "blur" ||
                      (null == e ? void 0 : e.backdrop) === "opaque")
                      ? (n = setTimeout(() => {
                          H.current = !0;
                        }, 100))
                      : (H.current = !0),
                    null == (r = Q.onPress) || r.call(Q, t),
                    () => {
                      clearTimeout(n);
                    }
                  );
                },
                [null == Q ? void 0 : Q.onPress]
              ),
              ea = (0, i.useCallback)(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                    { isDisabled: r, ...n } = e;
                  return {
                    "data-slot": "trigger",
                    ...e1({ "aria-haspopup": "dialog" }, Q, n),
                    onPress: ()=>alert(),
                    isDisabled: r,
                    className: en.trigger({
                      class: eB(null == F ? void 0 : F.trigger, e.className),
                      isTriggerDisabled: r,
                    }),
                    ref: (function (...e) {
                      return 1 === e.length && e[0]
                        ? e[0]
                        : (t) => {
                            for (let r of e)
                              "function" == typeof r
                                ? r(t)
                                : null != r && (r.current = t);
                          };
                    })(t, $),
                  };
                },
                [Y, Q, ei, $]
              ),
              es = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "backdrop",
                    className: en.backdrop({
                      class: null == F ? void 0 : F.backdrop,
                    }),
                    onClick: (e) => {
                      if (!H.current) {
                        e.preventDefault();
                        return;
                      }
                      Y.close(), (H.current = !1);
                    },
                    ...X,
                    ...e,
                  };
                },
                [en, Y.isOpen, F, X]
              );
            return (
              (0, i.useEffect)(() => {
                if (Y.isOpen && (null == W ? void 0 : W.current))
                  return (function (e, t = document.body) {
                    let r = new Set(e),
                      n = new Set(),
                      o = (e) => {
                        for (let t of e.querySelectorAll(
                          "[data-live-announcer], [data-react-aria-top-layer]"
                        ))
                          r.add(t);
                        let t = (e) => {
                            if (
                              r.has(e) ||
                              (e.parentElement &&
                                n.has(e.parentElement) &&
                                "row" !== e.parentElement.getAttribute("role"))
                            )
                              return NodeFilter.FILTER_REJECT;
                            for (let t of r)
                              if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                            return NodeFilter.FILTER_ACCEPT;
                          },
                          o = document.createTreeWalker(
                            e,
                            NodeFilter.SHOW_ELEMENT,
                            { acceptNode: t }
                          ),
                          i = t(e);
                        if (
                          (i === NodeFilter.FILTER_ACCEPT && l(e),
                          i !== NodeFilter.FILTER_REJECT)
                        ) {
                          let e = o.nextNode();
                          for (; null != e; ) l(e), (e = o.nextNode());
                        }
                      },
                      l = (e) => {
                        var t;
                        let r =
                          null !== (t = ox.get(e)) && void 0 !== t ? t : 0;
                        ("true" !== e.getAttribute("aria-hidden") || 0 !== r) &&
                          (0 === r && e.setAttribute("aria-hidden", "true"),
                          n.add(e),
                          ox.set(e, r + 1));
                      };
                    ow.length && ow[ow.length - 1].disconnect(), o(t);
                    let i = new MutationObserver((e) => {
                      for (let t of e)
                        if (
                          "childList" === t.type &&
                          0 !== t.addedNodes.length &&
                          ![...r, ...n].some((e) => e.contains(t.target))
                        ) {
                          for (let e of t.removedNodes)
                            e instanceof Element && (r.delete(e), n.delete(e));
                          for (let e of t.addedNodes)
                            (e instanceof HTMLElement ||
                              e instanceof SVGElement) &&
                            ("true" === e.dataset.liveAnnouncer ||
                              "true" === e.dataset.reactAriaTopLayer)
                              ? r.add(e)
                              : e instanceof Element && o(e);
                        }
                    });
                    i.observe(t, { childList: !0, subtree: !0 });
                    let a = {
                      observe() {
                        i.observe(t, { childList: !0, subtree: !0 });
                      },
                      disconnect() {
                        i.disconnect();
                      },
                    };
                    return (
                      ow.push(a),
                      () => {
                        for (let e of (i.disconnect(), n)) {
                          let t = ox.get(e);
                          null != t &&
                            (1 === t
                              ? (e.removeAttribute("aria-hidden"), ox.delete(e))
                              : ox.set(e, t - 1));
                        }
                        a === ow[ow.length - 1]
                          ? (ow.pop(), ow.length && ow[ow.length - 1].observe())
                          : ow.splice(ow.indexOf(a), 1);
                      }
                    );
                  })([null == W ? void 0 : W.current]);
              }, [Y.isOpen, W]),
              {
                state: Y,
                Component: c || "div",
                children: f,
                classNames: F,
                showArrow: D,
                triggerRef: $,
                placement: J,
                isNonModal: y,
                popoverRef: W,
                portalContainer: C,
                isOpen: Y.isOpen,
                onClose: Y.close,
                disableAnimation: U,
                shouldBlockScroll: E,
                backdrop: null != (n = e.backdrop) ? n : "transparent",
                motionProps: z,
                getBackdropProps: es,
                getPopoverProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ref: W,
                    ...e1(q, _, e),
                    style: e1(q.style, _.style, e.style),
                  };
                },
                getTriggerProps: ea,
                getDialogProps: function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "base",
                    "data-open": eF(Y.isOpen),
                    "data-focus": eF(et),
                    "data-arrow": eF(D),
                    "data-focus-visible": eF(ee),
                    "data-placement": Z ? ov(Z, M) : void 0,
                    ...e1(er, k, e),
                    className: en.base({ class: eB(eo) }),
                    style: { outline: "none" },
                  };
                },
                getContentProps: el,
              }
            );
          })({ ...a, ref: t }),
          w = i.useRef(null),
          { dialogProps: E, titleProps: S } = (function (e, t) {
            let r,
              n,
              { role: o = "dialog" } = e,
              l = eQ();
            l = e["aria-label"] ? void 0 : l;
            let a = (0, i.useRef)(!1);
            return (
              (0, i.useEffect)(() => {
                if (t.current && !t.current.contains(document.activeElement)) {
                  tE(t.current);
                  let e = setTimeout(() => {
                    document.activeElement === t.current &&
                      ((a.current = !0),
                      t.current && (t.current.blur(), tE(t.current)),
                      (a.current = !1));
                  }, 500);
                  return () => {
                    clearTimeout(e);
                  };
                }
              }, [t]),
              eG(() => {
                null == n || n(!0);
              }, [
                (n =
                  null == (r = (0, i.useContext)(oT)) ? void 0 : r.setContain),
              ]),
              {
                dialogProps: {
                  ...e6(e, { labelable: !0 }),
                  role: o,
                  tabIndex: -1,
                  "aria-labelledby": e["aria-labelledby"] || l,
                  onBlur: (e) => {
                    a.current && e.stopPropagation();
                  },
                },
                titleProps: { id: l },
              }
            );
          })({}, w),
          P = y({ ...(!o && { ref: w }), ...E }),
          C = i.useMemo(
            () =>
              "transparent" === f
                ? null
                : g
                ? (0, r$.jsx)("div", { ...b() })
                : (0, r$.jsx)(oA, {
                    features: lf,
                    children: (0, r$.jsx)(lu.div, {
                      animate: "enter",
                      exit: "exit",
                      initial: "exit",
                      variants: ld.fade,
                      ...b(),
                    }),
                  }),
            [f, g, b]
          );
        return (0, r$.jsxs)(ok, {
          portalContainer: p,
          children: [
            !m && C,
            (0, r$.jsx)(u, {
              ...v(),
              children: (0, r$.jsxs)(lp, {
                disableAnimation: g,
                motionProps: h,
                placement: d,
                tabIndex: -1,
                transformOrigin: n,
                ...P,
                children: [
                  !m && (0, r$.jsx)(oK, { onDismiss: c.close }),
                  (0, r$.jsx)("div", {
                    ...x(),
                    children: "function" == typeof r ? r(S) : r,
                  }),
                  (0, r$.jsx)(oK, { onDismiss: c.close }),
                ],
              }),
            }),
          ],
        });
      });
      lg.displayName = "HeroUI.FreeSoloPopover";
      var lh = ({ strokeWidth: e = 1.5, ...t }) =>
          (0, r$.jsx)("svg", {
            "aria-hidden": "true",
            fill: "none",
            focusable: "false",
            height: "1em",
            role: "presentation",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: e,
            viewBox: "0 0 24 24",
            width: "1em",
            ...t,
            children: (0, r$.jsx)("path", { d: "m6 9 6 6 6-6" }),
          }),
        lm = ek({
          slots: {
            base: "relative inline-flex flex-col gap-2 items-center justify-center",
            wrapper: "relative flex",
            label: "text-foreground dark:text-foreground-dark font-regular",
            circle1: "absolute w-full h-full rounded-full",
            circle2: "absolute w-full h-full rounded-full",
            dots: "relative rounded-full mx-auto",
            spinnerBars: [
              "absolute",
              "animate-fade-out",
              "rounded-full",
              "w-[25%]",
              "h-[8%]",
              "left-[calc(37.5%)]",
              "top-[calc(46%)]",
              "spinner-bar-animation",
            ],
          },
          variants: {
            size: {
              sm: {
                wrapper: "w-5 h-5",
                circle1: "border-2",
                circle2: "border-2",
                dots: "size-1",
                label: "text-small",
              },
              md: {
                wrapper: "w-8 h-8",
                circle1: "border-3",
                circle2: "border-3",
                dots: "size-1.5",
                label: "text-medium",
              },
              lg: {
                wrapper: "w-10 h-10",
                circle1: "border-3",
                circle2: "border-3",
                dots: "size-2",
                label: "text-large",
              },
            },
            color: {
              current: {
                circle1: "border-b-current",
                circle2: "border-b-current",
                dots: "bg-current",
                spinnerBars: "bg-current",
              },
              white: {
                circle1: "border-b-white",
                circle2: "border-b-white",
                dots: "bg-white",
                spinnerBars: "bg-white",
              },
              default: {
                circle1: "border-b-default",
                circle2: "border-b-default",
                dots: "bg-default",
                spinnerBars: "bg-default",
              },
              primary: {
                circle1: "border-b-primary",
                circle2: "border-b-primary",
                dots: "bg-primary",
                spinnerBars: "bg-primary",
              },
              secondary: {
                circle1: "border-b-secondary",
                circle2: "border-b-secondary",
                dots: "bg-secondary",
                spinnerBars: "bg-secondary",
              },
              success: {
                circle1: "border-b-success",
                circle2: "border-b-success",
                dots: "bg-success",
                spinnerBars: "bg-success",
              },
              warning: {
                circle1: "border-b-warning",
                circle2: "border-b-warning",
                dots: "bg-warning",
                spinnerBars: "bg-warning",
              },
              danger: {
                circle1: "border-b-danger",
                circle2: "border-b-danger",
                dots: "bg-danger",
                spinnerBars: "bg-danger",
              },
            },
            labelColor: {
              foreground: { label: "text-foreground" },
              primary: { label: "text-primary" },
              secondary: { label: "text-secondary" },
              success: { label: "text-success" },
              warning: { label: "text-warning" },
              danger: { label: "text-danger" },
            },
            variant: {
              default: {
                circle1: [
                  "animate-spinner-ease-spin",
                  "border-solid",
                  "border-t-transparent",
                  "border-l-transparent",
                  "border-r-transparent",
                ],
                circle2: [
                  "opacity-75",
                  "animate-spinner-linear-spin",
                  "border-dotted",
                  "border-t-transparent",
                  "border-l-transparent",
                  "border-r-transparent",
                ],
              },
              gradient: {
                circle1: [
                  "border-0",
                  "bg-gradient-to-b",
                  "from-transparent",
                  "via-transparent",
                  "to-primary",
                  "animate-spinner-linear-spin",
                  "[animation-duration:1s]",
                  "[-webkit-mask:radial-gradient(closest-side,rgba(0,0,0,0.0)calc(100%-3px),rgba(0,0,0,1)calc(100%-3px))]",
                ],
                circle2: ["hidden"],
              },
              wave: {
                wrapper: "translate-y-3/4",
                dots: ["animate-sway", "spinner-dot-animation"],
              },
              dots: {
                wrapper: "translate-y-2/4",
                dots: ["animate-blink", "spinner-dot-blink-animation"],
              },
              spinner: {},
              simple: {
                wrapper: "text-foreground h-5 w-5 animate-spin",
                circle1: "opacity-25",
                circle2: "opacity-75",
              },
            },
          },
          defaultVariants: {
            size: "md",
            color: "primary",
            labelColor: "foreground",
            variant: "default",
          },
          compoundVariants: [
            {
              variant: "gradient",
              color: "current",
              class: { circle1: "to-current" },
            },
            {
              variant: "gradient",
              color: "white",
              class: { circle1: "to-white" },
            },
            {
              variant: "gradient",
              color: "default",
              class: { circle1: "to-default" },
            },
            {
              variant: "gradient",
              color: "primary",
              class: { circle1: "to-primary" },
            },
            {
              variant: "gradient",
              color: "secondary",
              class: { circle1: "to-secondary" },
            },
            {
              variant: "gradient",
              color: "success",
              class: { circle1: "to-success" },
            },
            {
              variant: "gradient",
              color: "warning",
              class: { circle1: "to-warning" },
            },
            {
              variant: "gradient",
              color: "danger",
              class: { circle1: "to-danger" },
            },
            { variant: "wave", size: "sm", class: { wrapper: "w-5 h-5" } },
            { variant: "wave", size: "md", class: { wrapper: "w-8 h-8" } },
            { variant: "wave", size: "lg", class: { wrapper: "w-12 h-12" } },
            { variant: "dots", size: "sm", class: { wrapper: "w-5 h-5" } },
            { variant: "dots", size: "md", class: { wrapper: "w-8 h-8" } },
            { variant: "dots", size: "lg", class: { wrapper: "w-12 h-12" } },
            { variant: "simple", size: "sm", class: { wrapper: "w-5 h-5" } },
            { variant: "simple", size: "md", class: { wrapper: "w-8 h-8" } },
            { variant: "simple", size: "lg", class: { wrapper: "w-12 h-12" } },
            {
              variant: "simple",
              color: "current",
              class: { wrapper: "text-current" },
            },
            {
              variant: "simple",
              color: "white",
              class: { wrapper: "text-white" },
            },
            {
              variant: "simple",
              color: "default",
              class: { wrapper: "text-default" },
            },
            {
              variant: "simple",
              color: "primary",
              class: { wrapper: "text-primary" },
            },
            {
              variant: "simple",
              color: "secondary",
              class: { wrapper: "text-secondary" },
            },
            {
              variant: "simple",
              color: "success",
              class: { wrapper: "text-success" },
            },
            {
              variant: "simple",
              color: "warning",
              class: { wrapper: "text-warning" },
            },
            {
              variant: "simple",
              color: "danger",
              class: { wrapper: "text-danger" },
            },
          ],
        }),
        lv = a((e, t) => {
          let {
            slots: r,
            classNames: n,
            label: o,
            variant: a,
            getSpinnerProps: u,
          } = (function (e) {
            var t, r;
            let [n, o] = s(e, lm.variantKeys),
              a = (0, l.o)(),
              u =
                null !=
                (r =
                  null != (t = null == e ? void 0 : e.variant)
                    ? t
                    : null == a
                    ? void 0
                    : a.spinnerVariant)
                  ? r
                  : "default",
              { children: c, className: d, classNames: f, label: p, ...g } = n,
              h = (0, i.useMemo)(() => lm({ ...o }), [eW(o)]),
              m = eB(null == f ? void 0 : f.base, d),
              v = p || c,
              b = (0, i.useMemo)(
                () =>
                  v && "string" == typeof v
                    ? v
                    : g["aria-label"]
                    ? ""
                    : "Loading",
                [c, v, g["aria-label"]]
              ),
              y = (0, i.useCallback)(
                () => ({
                  "aria-label": b,
                  className: h.base({ class: m }),
                  ...g,
                }),
                [b, h, m, g]
              );
            return {
              label: v,
              slots: h,
              classNames: f,
              variant: u,
              getSpinnerProps: y,
            };
          })({ ...e });
          return "wave" === a || "dots" === a
            ? (0, r$.jsxs)("div", {
                ref: t,
                ...u(),
                children: [
                  (0, r$.jsx)("div", {
                    className: r.wrapper({
                      class: null == n ? void 0 : n.wrapper,
                    }),
                    children: [void 0, void 0, void 0].map((e, t) =>
                      (0, r$.jsx)(
                        "i",
                        {
                          className: r.dots({
                            class: null == n ? void 0 : n.dots,
                          }),
                          style: { "--dot-index": t },
                        },
                        `dot-${t}`
                      )
                    ),
                  }),
                  o &&
                    (0, r$.jsx)("span", {
                      className: r.label({
                        class: null == n ? void 0 : n.label,
                      }),
                      children: o,
                    }),
                ],
              })
            : "simple" === a
            ? (0, r$.jsxs)("div", {
                ref: t,
                ...u(),
                children: [
                  (0, r$.jsxs)("svg", {
                    className: r.wrapper({
                      class: null == n ? void 0 : n.wrapper,
                    }),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      (0, r$.jsx)("circle", {
                        className: r.circle1({
                          class: null == n ? void 0 : n.circle1,
                        }),
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4",
                      }),
                      (0, r$.jsx)("path", {
                        className: r.circle2({
                          class: null == n ? void 0 : n.circle2,
                        }),
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                        fill: "currentColor",
                      }),
                    ],
                  }),
                  o &&
                    (0, r$.jsx)("span", {
                      className: r.label({
                        class: null == n ? void 0 : n.label,
                      }),
                      children: o,
                    }),
                ],
              })
            : "spinner" === a
            ? (0, r$.jsxs)("div", {
                ref: t,
                ...u(),
                children: [
                  (0, r$.jsx)("div", {
                    className: r.wrapper({
                      class: null == n ? void 0 : n.wrapper,
                    }),
                    children: [...Array(12)].map((e, t) =>
                      (0, r$.jsx)(
                        "i",
                        {
                          className: r.spinnerBars({
                            class: null == n ? void 0 : n.spinnerBars,
                          }),
                          style: { "--bar-index": t },
                        },
                        `star-${t}`
                      )
                    ),
                  }),
                  o &&
                    (0, r$.jsx)("span", {
                      className: r.label({
                        class: null == n ? void 0 : n.label,
                      }),
                      children: o,
                    }),
                ],
              })
            : (0, r$.jsxs)("div", {
                ref: t,
                ...u(),
                children: [
                  (0, r$.jsxs)("div", {
                    className: r.wrapper({
                      class: null == n ? void 0 : n.wrapper,
                    }),
                    children: [
                      (0, r$.jsx)("i", {
                        className: r.circle1({
                          class: null == n ? void 0 : n.circle1,
                        }),
                      }),
                      (0, r$.jsx)("i", {
                        className: r.circle2({
                          class: null == n ? void 0 : n.circle2,
                        }),
                      }),
                    ],
                  }),
                  o &&
                    (0, r$.jsx)("span", {
                      className: r.label({
                        class: null == n ? void 0 : n.label,
                      }),
                      children: o,
                    }),
                ],
              });
        });
      lv.displayName = "HeroUI.Spinner";
      var lb = a((e, t) => {
        let {
          Component: r,
          children: n,
          getBaseProps: o,
        } = (function (e) {
          var t;
          let [r, n] = s(e, nQ.variantKeys),
            {
              ref: o,
              as: l,
              children: a,
              className: u,
              style: c,
              size: d = 40,
              offset: f = 0,
              visibility: p = "auto",
              isEnabled: g = !0,
              onVisibilityChange: h,
              ...m
            } = r,
            v = eD(o);
          !(function (e = {}) {
            let {
                domRef: t,
                isEnabled: r = !0,
                overflowCheck: n = "vertical",
                visibility: o = "auto",
                offset: l = 0,
                onVisibilityChange: a,
                updateDeps: s = [],
              } = e,
              u = (0, i.useRef)(o);
            (0, i.useEffect)(() => {
              let e = null == t ? void 0 : t.current;
              if (!e || !r) return;
              let i = (t, r, n, l, i) => {
                  if ("auto" === o) {
                    let t = `${l}${e_(i)}Scroll`;
                    r && n
                      ? ((e.dataset[t] = "true"),
                        e.removeAttribute(`data-${l}-scroll`),
                        e.removeAttribute(`data-${i}-scroll`))
                      : ((e.dataset[`${l}Scroll`] = r.toString()),
                        (e.dataset[`${i}Scroll`] = n.toString()),
                        e.removeAttribute(`data-${l}-${i}-scroll`));
                  } else {
                    let e = r && n ? "both" : r ? l : n ? i : "none";
                    e !== u.current && (null == a || a(e), (u.current = e));
                  }
                },
                s = () => {
                  var t, r;
                  let o = e.querySelector('ul[data-slot="list"]'),
                    a = +(null !=
                    (t =
                      null == o
                        ? void 0
                        : o.getAttribute("data-virtual-scroll-height"))
                      ? t
                      : e.scrollHeight),
                    s = +(null !=
                    (r =
                      null == o
                        ? void 0
                        : o.getAttribute("data-virtual-scroll-top"))
                      ? r
                      : e.scrollTop);
                  for (let { type: t, prefix: r, suffix: o } of [
                    { type: "vertical", prefix: "top", suffix: "bottom" },
                    { type: "horizontal", prefix: "left", suffix: "right" },
                  ])
                    if (n === t || "both" === n) {
                      let n = "vertical" === t ? s > l : e.scrollLeft > l,
                        u =
                          "vertical" === t
                            ? s + e.clientHeight + l < a
                            : e.scrollLeft + e.clientWidth + l < e.scrollWidth;
                      i(t, n, u, r, o);
                    }
                },
                c = () => {
                  [
                    "top",
                    "bottom",
                    "top-bottom",
                    "left",
                    "right",
                    "left-right",
                  ].forEach((t) => {
                    e.removeAttribute(`data-${t}-scroll`);
                  });
                };
              return (
                e.addEventListener("scroll", s, !0),
                "auto" !== o &&
                  (c(),
                  "both" === o
                    ? ((e.dataset.topBottomScroll = String("vertical" === n)),
                      (e.dataset.leftRightScroll = String("horizontal" === n)))
                    : ((e.dataset.topBottomScroll = "false"),
                      (e.dataset.leftRightScroll = "false"),
                      ["top", "bottom", "left", "right"].forEach((t) => {
                        e.dataset[`${t}Scroll`] = String(o === t);
                      }))),
                () => {
                  e.removeEventListener("scroll", s, !0), c();
                }
              );
            }, [...s, r, o, n, a, t]);
          })({
            domRef: v,
            offset: f,
            visibility: p,
            isEnabled: g,
            onVisibilityChange: h,
            updateDeps: [a],
            overflowCheck: null != (t = e.orientation) ? t : "vertical",
          });
          let b = (0, i.useMemo)(() => nQ({ ...n, className: u }), [eW(n), u]);
          return {
            Component: l || "div",
            styles: b,
            domRef: v,
            children: a,
            getBaseProps: function () {
              var t;
              let r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                ref: v,
                className: b,
                "data-orientation":
                  null != (t = e.orientation) ? t : "vertical",
                style: {
                  "--scroll-shadow-size": "".concat(d, "px"),
                  ...c,
                  ...r.style,
                },
                ...m,
                ...r,
              };
            },
          };
        })({ ...e, ref: t });
        return (0, r$.jsx)(r, { ...o(), children: n });
      });
      lb.displayName = "HeroUI.ScrollShadow";
      class ly extends i.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = t.offsetParent,
              r = (e instanceof HTMLElement && e.offsetWidth) || 0,
              n = this.props.sizeRef.current;
            (n.height = t.offsetHeight || 0),
              (n.width = t.offsetWidth || 0),
              (n.top = t.offsetTop),
              (n.left = t.offsetLeft),
              (n.right = r - n.width - n.left);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function lx(e) {
        let { children: t, isPresent: r, anchorX: n } = e,
          o = (0, i.useId)(),
          l = (0, i.useRef)(null),
          a = (0, i.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: s } = (0, i.useContext)(oj.Q);
        return (
          (0, i.useInsertionEffect)(() => {
            let { width: e, height: t, top: i, left: u, right: c } = a.current;
            if (r || !l.current || !e || !t) return;
            l.current.dataset.motionPopId = o;
            let d = document.createElement("style");
            return (
              s && (d.nonce = s),
              document.head.appendChild(d),
              d.sheet &&
                d.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: '
                    )
                    .concat(e, "px !important;\n            height: ")
                    .concat(t, "px !important;\n            ")
                    .concat(
                      "left" === n ? "left: ".concat(u) : "right: ".concat(c),
                      "px !important;\n            top: "
                    )
                    .concat(i, "px !important;\n          }\n        ")
                ),
              () => {
                document.head.removeChild(d);
              }
            );
          }, [r]),
          (0, r$.jsx)(ly, {
            isPresent: r,
            childRef: l,
            sizeRef: a,
            children: i.cloneElement(t, { ref: l }),
          })
        );
      }
      let lw = (e) => {
        let {
            children: t,
            initial: r,
            isPresent: n,
            onExitComplete: o,
            custom: l,
            presenceAffectsLayout: a,
            mode: s,
            anchorX: u,
          } = e,
          c = (0, o7.M)(lE),
          d = (0, i.useId)(),
          f = (0, i.useCallback)(
            (e) => {
              for (let t of (c.set(e, !0), c.values())) if (!t) return;
              o && o();
            },
            [c, o]
          ),
          p = (0, i.useMemo)(
            () => ({
              id: d,
              initial: r,
              isPresent: n,
              custom: l,
              onExitComplete: f,
              register: (e) => (c.set(e, !1), () => c.delete(e)),
            }),
            a ? [Math.random(), f] : [n, f]
          );
        return (
          (0, i.useMemo)(() => {
            c.forEach((e, t) => c.set(t, !1));
          }, [n]),
          i.useEffect(() => {
            n || c.size || !o || o();
          }, [n]),
          "popLayout" === s &&
            (t = (0, r$.jsx)(lx, { isPresent: n, anchorX: u, children: t })),
          (0, r$.jsx)(oH.Provider, { value: p, children: t })
        );
      };
      function lE() {
        return new Map();
      }
      let lS = (e) => e.key || "";
      function lP(e) {
        let t = [];
        return (
          i.Children.forEach(e, (e) => {
            (0, i.isValidElement)(e) && t.push(e);
          }),
          t
        );
      }
      let lC = (e) => {
        let {
            children: t,
            custom: r,
            initial: n = !0,
            onExitComplete: o,
            presenceAffectsLayout: l = !0,
            mode: a = "sync",
            propagate: s = !1,
            anchorX: u = "left",
          } = e,
          [c, d] = (function (e = !0) {
            let t = (0, i.useContext)(oH);
            if (null === t) return [!0, null];
            let { isPresent: r, onExitComplete: n, register: o } = t,
              l = (0, i.useId)();
            (0, i.useEffect)(() => {
              if (e) return o(l);
            }, [e]);
            let a = (0, i.useCallback)(() => e && n && n(l), [l, n, e]);
            return !r && n ? [!1, a] : [!0];
          })(s),
          f = (0, i.useMemo)(() => lP(t), [t]),
          p = s && !c ? [] : f.map(lS),
          g = (0, i.useRef)(!0),
          h = (0, i.useRef)(f),
          m = (0, o7.M)(() => new Map()),
          [v, b] = (0, i.useState)(f),
          [y, x] = (0, i.useState)(f);
        o$(() => {
          (g.current = !1), (h.current = f);
          for (let e = 0; e < y.length; e++) {
            let t = lS(y[e]);
            p.includes(t) ? m.delete(t) : !0 !== m.get(t) && m.set(t, !1);
          }
        }, [y, p.length, p.join("-")]);
        let w = [];
        if (f !== v) {
          let e = [...f];
          for (let t = 0; t < y.length; t++) {
            let r = y[t],
              n = lS(r);
            p.includes(n) || (e.splice(t, 0, r), w.push(r));
          }
          return "wait" === a && w.length && (e = w), x(lP(e)), b(f), null;
        }
        let { forceRender: E } = (0, i.useContext)(oR);
        return (0, r$.jsx)(r$.Fragment, {
          children: y.map((e) => {
            let t = lS(e),
              i = (!s || !!c) && (f === y || p.includes(t));
            return (0, r$.jsx)(
              lw,
              {
                isPresent: i,
                initial: (!g.current || !!n) && void 0,
                custom: r,
                presenceAffectsLayout: l,
                mode: a,
                onExitComplete: i
                  ? void 0
                  : () => {
                      if (!m.has(t)) return;
                      m.set(t, !0);
                      let e = !0;
                      m.forEach((t) => {
                        t || (e = !1);
                      }),
                        e &&
                          (null == E || E(),
                          x(h.current),
                          s && (null == d || d()),
                          o && o());
                    },
                anchorX: u,
                children: e,
              },
              t
            );
          }),
        });
      };
      var lT = a(function (e, t) {
        let {
            Component: r,
            state: n,
            label: o,
            hasHelper: a,
            isLoading: u,
            triggerRef: c,
            selectorIcon: d = (0, r$.jsx)(lh, {}),
            description: f,
            errorMessage: p,
            isInvalid: g,
            startContent: h,
            endContent: m,
            placeholder: v,
            renderValue: b,
            shouldLabelBeOutside: y,
            disableAnimation: x,
            getBaseProps: w,
            getLabelProps: E,
            getTriggerProps: S,
            getValueProps: P,
            getListboxProps: C,
            getPopoverProps: T,
            getSpinnerProps: k,
            getMainWrapperProps: M,
            getInnerWrapperProps: K,
            getHiddenSelectProps: D,
            getHelperWrapperProps: O,
            getListboxWrapperProps: I,
            getDescriptionProps: A,
            getErrorMessageProps: L,
            getSelectorIconProps: R,
          } = (function (e) {
            var t, r, n, o, a, u;
            let c = (0, l.o)(),
              { validationBehavior: d } =
                (function (e, t) {
                  let r = (0, i.useContext)(e);
                  if (r && "object" == typeof r && "slots" in r && r.slots) {
                    let e = new Intl.ListFormat().format(
                      Object.keys(r.slots).map((e) => '"'.concat(e, '"'))
                    );
                    if (!r.slots[rH])
                      throw Error(
                        "A slot prop is required. Valid slot names are ".concat(
                          e,
                          "."
                        )
                      );
                    let n = t || rH;
                    if (!r.slots[n])
                      throw Error(
                        'Invalid slot "'
                          .concat(t, '". Valid slot names are ')
                          .concat(e, ".")
                      );
                    return r.slots[n];
                  }
                  return r;
                })(rU) || {},
              [f, p] = s(e, eK.variantKeys),
              g =
                null !=
                  (r =
                    null != (t = e.disableAnimation)
                      ? t
                      : null == c
                      ? void 0
                      : c.disableAnimation) && r,
              {
                ref: h,
                as: m,
                label: v,
                name: b,
                isLoading: y,
                selectorIcon: x,
                isOpen: w,
                defaultOpen: E,
                onOpenChange: S,
                startContent: P,
                endContent: C,
                description: T,
                renderValue: k,
                onSelectionChange: M,
                placeholder: K,
                isVirtualized: D,
                itemHeight: O = 36,
                maxListboxHeight: I = 256,
                children: A,
                disallowEmptySelection: L = !1,
                selectionMode: R = "single",
                spinnerRef: j,
                scrollRef: z,
                popoverProps: N = {},
                scrollShadowProps: F = {},
                listboxProps: B = {},
                spinnerProps: _ = {},
                validationState: W,
                onChange: V,
                onClose: H,
                className: $,
                classNames: U,
                validationBehavior: G = null !=
                (n = null != d ? d : null == c ? void 0 : c.validationBehavior)
                  ? n
                  : "native",
                hideEmptyContent: Y = !1,
                ...q
              } = f,
              X = eD(z),
              Z = {
                popoverProps: e1(
                  {
                    placement: "bottom",
                    triggerScaleOnOpen: !1,
                    offset: 5,
                    disableAnimation: g,
                  },
                  N
                ),
                scrollShadowProps: e1(
                  {
                    ref: X,
                    isEnabled: null == (o = e.showScrollIndicators) || o,
                    hideScrollBar: !0,
                    offset: 15,
                  },
                  F
                ),
                listboxProps: e1({ disableAnimation: g }, B),
              },
              J = m || "button",
              Q = "string" == typeof J,
              ee = eD(h),
              et = (0, i.useRef)(null),
              er = (0, i.useRef)(null),
              en = (0, i.useRef)(null),
              eo = (function ({ validate: e, validationBehavior: t, ...r }) {
                let [n, o] = (0, i.useState)(!1),
                  [l, a] = (0, i.useState)(null),
                  s = (function (e) {
                    let t = rc(e),
                      [r, n] = (0, i.useState)(null),
                      [o, l] = (0, i.useState)([]),
                      a = () => {
                        l([]), t.close();
                      };
                    return {
                      focusStrategy: r,
                      ...t,
                      open(e = null) {
                        n(e), t.open();
                      },
                      toggle(e = null) {
                        n(e), t.toggle();
                      },
                      close() {
                        a();
                      },
                      expandedKeysStack: o,
                      openSubmenu: (e, t) => {
                        l((r) => (t > r.length ? r : [...r.slice(0, t), e]));
                      },
                      closeSubmenu: (e, t) => {
                        l((r) => (r[t] === e ? r.slice(0, t) : r));
                      },
                    };
                  })(r),
                  u = (function (e) {
                    let {
                        collection: t,
                        disabledKeys: r,
                        selectionManager: n,
                        selectionManager: {
                          setSelectedKeys: o,
                          selectedKeys: l,
                          selectionMode: a,
                        },
                      } = ru(e),
                      s = (0, i.useMemo)(
                        () =>
                          e.isLoading || 0 === l.size
                            ? []
                            : Array.from(l)
                                .filter(Boolean)
                                .filter((e) => !t.getItem(e)),
                        [l, t]
                      ),
                      u =
                        0 !== l.size
                          ? Array.from(l)
                              .map((e) => t.getItem(e))
                              .filter(Boolean)
                          : null;
                    return (
                      s.length &&
                        console.warn(
                          `Select: Keys "${s.join(
                            ", "
                          )}" passed to "selectedKeys" are not present in the collection.`
                        ),
                      {
                        collection: t,
                        disabledKeys: r,
                        selectionManager: n,
                        selectionMode: a,
                        selectedKeys: l,
                        setSelectedKeys: o.bind(n),
                        selectedItems: u,
                      }
                    );
                  })({
                    ...r,
                    onSelectionChange: (e) => {
                      null != r.onSelectionChange &&
                        ("all" === e
                          ? r.onSelectionChange(new Set(u.collection.getKeys()))
                          : r.onSelectionChange(e)),
                        "single" === r.selectionMode && s.close();
                    },
                  }),
                  c = (function (e) {
                    if (e[rh]) {
                      let {
                        realtimeValidation: t,
                        displayValidation: r,
                        updateValidation: n,
                        resetValidation: o,
                        commitValidation: l,
                      } = e[rh];
                      return {
                        realtimeValidation: t,
                        displayValidation: r,
                        updateValidation: n,
                        resetValidation: o,
                        commitValidation: l,
                      };
                    }
                    return (function (e) {
                      let {
                        isInvalid: t,
                        validationState: r,
                        name: n,
                        value: o,
                        builtinValidation: l,
                        validate: a,
                        validationBehavior: s = "aria",
                      } = e;
                      r && (t || (t = "invalid" === r));
                      let u =
                          void 0 !== t
                            ? {
                                isInvalid: t,
                                validationErrors: [],
                                validationDetails: rf,
                              }
                            : null,
                        c = (0, i.useMemo)(
                          () =>
                            a && null != o
                              ? rv(
                                  (function (e, t) {
                                    if ("function" == typeof e) {
                                      let r = e(t);
                                      if (r && "boolean" != typeof r)
                                        return rm(r);
                                    }
                                    return [];
                                  })(a, o)
                                )
                              : null,
                          [a, o]
                        );
                      (null == l ? void 0 : l.validationDetails.valid) &&
                        (l = void 0);
                      let d = (0, i.useContext)(rg),
                        f = (0, i.useMemo)(
                          () =>
                            n
                              ? Array.isArray(n)
                                ? n.flatMap((e) => rm(d[e]))
                                : rm(d[n])
                              : [],
                          [d, n]
                        ),
                        [p, g] = (0, i.useState)(d),
                        [h, m] = (0, i.useState)(!1);
                      d !== p && (g(d), m(!1));
                      let v = (0, i.useMemo)(() => rv(h ? [] : f), [h, f]),
                        b = (0, i.useRef)(rp),
                        [y, x] = (0, i.useState)(rp),
                        w = (0, i.useRef)(rp),
                        [E, S] = (0, i.useState)(!1);
                      return (
                        (0, i.useEffect)(() => {
                          if (!E) return;
                          S(!1);
                          let e = c || l || b.current;
                          rb(e, w.current) || ((w.current = e), x(e));
                        }),
                        {
                          realtimeValidation: u || v || c || l || rp,
                          displayValidation:
                            "native" === s
                              ? u || v || y
                              : u || v || c || l || y,
                          updateValidation(e) {
                            "aria" !== s || rb(y, e) ? (b.current = e) : x(e);
                          },
                          resetValidation() {
                            rb(rp, w.current) || ((w.current = rp), x(rp)),
                              "native" === s && S(!1),
                              m(!0);
                          },
                          commitValidation() {
                            "native" === s && S(!0), m(!0);
                          },
                        }
                      );
                    })(e);
                  })({
                    ...r,
                    validationBehavior: t,
                    validate: (t) => {
                      if (!e) return;
                      let n = Array.from(t);
                      return e("single" === r.selectionMode ? n[0] : n);
                    },
                    value: u.selectedKeys,
                  }),
                  d = 0 === u.collection.size && r.hideEmptyContent;
                return {
                  ...c,
                  ...u,
                  ...s,
                  focusStrategy: l,
                  close() {
                    s.close();
                  },
                  open(e = null) {
                    d || (a(e), s.open());
                  },
                  toggle(e = null) {
                    d || (a(e), s.toggle());
                  },
                  isFocused: n,
                  setFocused: o,
                };
              })({
                ...f,
                isOpen: w,
                selectionMode: R,
                disallowEmptySelection: L,
                validationBehavior: G,
                children: A,
                isRequired: e.isRequired,
                isDisabled: e.isDisabled,
                isInvalid: e.isInvalid,
                defaultOpen: E,
                hideEmptyContent: Y,
                onOpenChange: (e) => {
                  null == S || S(e), e || null == H || H();
                },
                onSelectionChange: (e) => {
                  null == M || M(e),
                    V &&
                      "function" == typeof V &&
                      V({
                        target: {
                          ...(ee.current && {
                            ...ee.current,
                            name: ee.current.name,
                          }),
                          value: Array.from(e).join(","),
                        },
                      }),
                    eo.commitValidation();
                },
              });
            (eo = {
              ...eo,
              ...(e.isDisabled && {
                disabledKeys: new Set([...eo.collection.getKeys()]),
              }),
            }),
              rW(() => {
                var e;
                (null == (e = ee.current) ? void 0 : e.value) &&
                  eo.setSelectedKeys(
                    new Set([...eo.selectedKeys, ee.current.value])
                  );
              }, [ee.current]);
            let {
                labelProps: el,
                triggerProps: ei,
                valueProps: ea,
                menuProps: es,
                descriptionProps: eu,
                errorMessageProps: ec,
                isInvalid: ed,
                validationErrors: ef,
                validationDetails: ep,
              } = (function (e, t, r) {
                let { disallowEmptySelection: n, isDisabled: o } = e,
                  l = rw({ usage: "search", sensitivity: "base" }),
                  a = (0, i.useMemo)(
                    () => new rB(t.collection, t.disabledKeys, null, l),
                    [t.collection, t.disabledKeys, l]
                  ),
                  { menuTriggerProps: s, menuProps: u } = (function (e, t, r) {
                    var n;
                    let {
                        type: o = "menu",
                        isDisabled: l,
                        trigger: i = "press",
                      } = e,
                      a = eJ(),
                      { triggerProps: s, overlayProps: u } = rz(
                        { type: o },
                        t,
                        r
                      ),
                      { longPressProps: c } = rR({
                        isDisabled: l || "longPress" !== i,
                        accessibilityDescription: rI(
                          (n = rP) && n.__esModule ? n.default : n,
                          "@react-aria/menu"
                        ).format("longPressMessage"),
                        onLongPressStart() {
                          t.close();
                        },
                        onLongPress() {
                          t.open("first");
                        },
                      });
                    return (
                      delete s.onPress,
                      {
                        menuTriggerProps: {
                          ...s,
                          ...("press" === i
                            ? {
                                onPressStart(e) {
                                  "touch" === e.pointerType ||
                                    "keyboard" === e.pointerType ||
                                    l ||
                                    t.open(
                                      "virtual" === e.pointerType
                                        ? "first"
                                        : null
                                    );
                                },
                                onPress(e) {
                                  "touch" !== e.pointerType || l || t.toggle();
                                },
                              }
                            : c),
                          id: a,
                          onKeyDown: (e) => {
                            if (
                              !l &&
                              ("longPress" !== i || e.altKey) &&
                              r &&
                              r.current
                            )
                              switch (e.key) {
                                case "Enter":
                                case " ":
                                  if ("longPress" === i) return;
                                case "ArrowDown":
                                  "continuePropagation" in e ||
                                    e.stopPropagation(),
                                    e.preventDefault(),
                                    t.toggle("first");
                                  break;
                                case "ArrowUp":
                                  "continuePropagation" in e ||
                                    e.stopPropagation(),
                                    e.preventDefault(),
                                    t.toggle("last");
                                  break;
                                default:
                                  "continuePropagation" in e &&
                                    e.continuePropagation();
                              }
                          },
                        },
                        menuProps: {
                          ...u,
                          "aria-labelledby": a,
                          autoFocus: t.focusStrategy || !0,
                          onClose: t.close,
                        },
                      }
                    );
                  })({ isDisabled: o, type: "listbox" }, t, r),
                  { typeSelectProps: c } = r_({
                    keyboardDelegate: a,
                    selectionManager: t.selectionManager,
                    onTypeSelect(e) {
                      t.setSelectedKeys([e]);
                    },
                  }),
                  {
                    isInvalid: d,
                    validationErrors: f,
                    validationDetails: p,
                  } = t.displayValidation,
                  {
                    labelProps: g,
                    fieldProps: h,
                    descriptionProps: m,
                    errorMessageProps: v,
                  } = (function (e) {
                    let {
                        description: t,
                        errorMessage: r,
                        isInvalid: n,
                        validationState: o,
                      } = e,
                      { labelProps: l, fieldProps: i } = rS(e),
                      a = eQ([!!t, !!r, n, o]),
                      s = eQ([!!t, !!r, n, o]);
                    return {
                      labelProps: l,
                      fieldProps: (i = e1(i, {
                        "aria-describedby":
                          [a, s, e["aria-describedby"]]
                            .filter(Boolean)
                            .join(" ") || void 0,
                      })),
                      descriptionProps: { id: a },
                      errorMessageProps: { id: s },
                    };
                  })({
                    ...e,
                    labelElementType: "span",
                    isInvalid: d,
                    errorMessage: e.errorMessage || f,
                  });
                (c.onKeyDown = c.onKeyDownCapture), delete c.onKeyDownCapture;
                let b = e6(e, { labelable: !0 }),
                  y = e1(c, s, h),
                  x = eJ();
                return {
                  labelProps: {
                    ...g,
                    onClick: () => {
                      var t;
                      e.isDisabled ||
                        (null == (t = r.current) || t.focus(), tx("keyboard"));
                    },
                  },
                  triggerProps: e1(b, {
                    ...y,
                    onKeyDown: eU(
                      y.onKeyDown,
                      (e) => {
                        if ("single" === t.selectionMode)
                          switch (e.key) {
                            case "ArrowLeft": {
                              e.preventDefault();
                              let r =
                                t.selectedKeys.size > 0
                                  ? a.getKeyAbove(
                                      t.selectedKeys.values().next().value
                                    )
                                  : a.getFirstKey();
                              r && t.setSelectedKeys([r]);
                              break;
                            }
                            case "ArrowRight": {
                              e.preventDefault();
                              let r =
                                t.selectedKeys.size > 0
                                  ? a.getKeyBelow(
                                      t.selectedKeys.values().next().value
                                    )
                                  : a.getFirstKey();
                              r && t.setSelectedKeys([r]);
                            }
                          }
                      },
                      e.onKeyDown
                    ),
                    onKeyUp: e.onKeyUp,
                    "aria-labelledby": [
                      x,
                      void 0 !== b["aria-label"]
                        ? void 0 !== b["aria-labelledby"]
                          ? b["aria-labelledby"]
                          : y.id
                        : y["aria-labelledby"],
                    ].join(" "),
                    onFocus(r) {
                      t.isFocused ||
                        (e.onFocus && e.onFocus(r), t.setFocused(!0));
                    },
                    onBlur(r) {
                      t.isOpen || (e.onBlur && e.onBlur(r), t.setFocused(!1));
                    },
                  }),
                  valueProps: { id: x },
                  menuProps: {
                    ...u,
                    disallowEmptySelection: n,
                    autoFocus: t.focusStrategy || !0,
                    shouldSelectOnPressUp: !0,
                    shouldFocusOnHover: !0,
                    onBlur: (r) => {
                      r.currentTarget.contains(r.relatedTarget) ||
                        (e.onBlur && e.onBlur(r), t.setFocused(!1));
                    },
                    onFocus: null == u ? void 0 : u.onFocus,
                    "aria-labelledby": [
                      h["aria-labelledby"],
                      y["aria-label"] && !h["aria-labelledby"] ? y.id : null,
                    ]
                      .filter(Boolean)
                      .join(" "),
                  },
                  descriptionProps: m,
                  errorMessageProps: v,
                  isInvalid: d,
                  validationErrors: f,
                  validationDetails: p,
                };
              })(
                { ...f, disallowEmptySelection: L, isDisabled: e.isDisabled },
                eo,
                et
              ),
              eg = e.isInvalid || "invalid" === W || ed,
              { isPressed: eh, buttonProps: em } = (function (e, t) {
                let r,
                  {
                    elementType: n = "button",
                    isDisabled: o,
                    onPress: l,
                    onPressStart: a,
                    onPressEnd: s,
                    onPressChange: u,
                    preventFocusOnPress: c,
                    allowFocusWhenDisabled: d,
                    onClick: f,
                    href: p,
                    target: g,
                    rel: h,
                    type: m = "button",
                    allowTextSelectionOnPress: v,
                    role: b,
                  } = e;
                r =
                  "button" === n
                    ? { type: m, disabled: o }
                    : {
                        role: "button",
                        tabIndex: o ? void 0 : 0,
                        href: "a" !== n || o ? void 0 : p,
                        target: "a" === n ? g : void 0,
                        type: "input" === n ? m : void 0,
                        disabled: "input" === n ? o : void 0,
                        "aria-disabled": o && "input" !== n ? o : void 0,
                        rel: "a" === n ? h : void 0,
                      };
                let y = (0, e$.un)() || (0, e$.m0)();
                f &&
                  "function" == typeof f &&
                  "link" !== b &&
                  !(
                    e.hasOwnProperty("aria-expanded") &&
                    e.hasOwnProperty("aria-controls")
                  ) &&
                  eH(
                    "onClick is deprecated, please use onPress instead. See: https://github.com/heroui-inc/heroui/issues/4292",
                    "useButton"
                  );
                let { pressProps: x, isPressed: w } = tW({
                    onPressStart: a,
                    onPressEnd: s,
                    onPressChange: u,
                    onPress: (e) => {
                      y && (null == f || f(e)), null == l || l(e);
                    },
                    isDisabled: o,
                    preventFocusOnPress: c,
                    allowTextSelectionOnPress: v,
                    ref: t,
                  }),
                  { focusableProps: E } = (function (e, t) {
                    let { focusProps: r } = tT(e),
                      { keyboardProps: n } = {
                        keyboardProps: e.isDisabled
                          ? {}
                          : {
                              onKeyDown: tk(e.onKeyDown),
                              onKeyUp: tk(e.onKeyUp),
                            },
                      },
                      o = e1(r, n),
                      l = (function (e) {
                        let t = (0, i.useContext)(tM) || {};
                        tS(t, e);
                        let { ref: r, ...n } = t;
                        return n;
                      })(t),
                      a = e.isDisabled ? {} : l,
                      s = (0, i.useRef)(e.autoFocus);
                    return (
                      (0, i.useEffect)(() => {
                        s.current && t.current && tE(t.current),
                          (s.current = !1);
                      }, [t]),
                      {
                        focusableProps: e1(
                          {
                            ...o,
                            tabIndex:
                              e.excludeFromTabOrder && !e.isDisabled
                                ? -1
                                : void 0,
                          },
                          a
                        ),
                      }
                    );
                  })(e, t);
                d && (E.tabIndex = o ? -1 : E.tabIndex);
                let S = e1(E, x, e6(e, { labelable: !0 }));
                return {
                  isPressed: w,
                  buttonProps: e1(r, S, {
                    "aria-haspopup": e["aria-haspopup"],
                    "aria-expanded": e["aria-expanded"],
                    "aria-controls": e["aria-controls"],
                    "aria-pressed": e["aria-pressed"],
                    onClick: (e) => {
                      ("button" === m && y) || null == f || f(e);
                    },
                  }),
                };
              })(ei, et),
              { focusProps: ev, isFocused: eb, isFocusVisible: ey } = t1(),
              { isHovered: ex, hoverProps: ew } = t8({
                isDisabled: e.isDisabled,
              }),
              eE = (function (e) {
                let t = (0, l.o)(),
                  r = null == t ? void 0 : t.labelPlacement;
                return (0, i.useMemo)(() => {
                  var t, n;
                  let o =
                    null != (n = null != (t = e.labelPlacement) ? t : r)
                      ? n
                      : "inside";
                  return "inside" !== o || e.label ? o : "outside";
                }, [e.labelPlacement, r, e.label]);
              })({ labelPlacement: e.labelPlacement, label: v }),
              eS = !!K,
              eP =
                "outside-left" === eE ||
                ("outside" === eE && (!(eS || T) || !!e.isMultiline)),
              eC = "inside" === eE,
              eT = "outside-left" === eE,
              ek =
                eo.isOpen ||
                eS ||
                !!(null == (a = eo.selectedItems) ? void 0 : a.length) ||
                !!P ||
                !!C ||
                !!e.isMultiline,
              eM = !!(null == (u = eo.selectedItems) ? void 0 : u.length),
              eO = !!v,
              eI = eB(null == U ? void 0 : U.base, $),
              eA = (0, i.useMemo)(
                () =>
                  eK({
                    ...p,
                    isInvalid: eg,
                    labelPlacement: eE,
                    disableAnimation: g,
                  }),
                [eW(p), eg, eE, g]
              );
            (0, i.useEffect)(() => {
              if (eo.isOpen && en.current && er.current) {
                let e = er.current.querySelector(
                    "[aria-selected=true] [data-label=true]"
                  ),
                  t = X.current;
                if (e && t && e.parentElement) {
                  let r = (null == t ? void 0 : t.getBoundingClientRect())
                    .height;
                  t.scrollTop =
                    e.parentElement.offsetTop -
                    r / 2 +
                    e.parentElement.clientHeight / 2;
                }
              }
            }, [eo.isOpen, g]),
              rZ({ isDisabled: !eo.isOpen });
            let eL =
                "function" == typeof f.errorMessage
                  ? f.errorMessage({
                      isInvalid: eg,
                      validationErrors: ef,
                      validationDetails: ep,
                    })
                  : f.errorMessage || (null == ef ? void 0 : ef.join(" ")),
              eR = !!T || !!eL;
            (0, i.useEffect)(() => {
              if (eo.isOpen && en.current && et.current) {
                let e = et.current.getBoundingClientRect();
                en.current.style.width = e.width + "px";
              }
            }, [eo.isOpen]);
            let ez = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "base",
                    "data-filled": eF(ek),
                    "data-has-value": eF(eM),
                    "data-has-label": eF(eO),
                    "data-has-helper": eF(eR),
                    "data-invalid": eF(eg),
                    className: eA.base({ class: eB(eI, e.className) }),
                    ...e,
                  };
                },
                [eA, eR, eM, eO, ek, eI]
              ),
              eN = (0, i.useCallback)(
                function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ref: et,
                    "data-slot": "trigger",
                    "data-open": eF(eo.isOpen),
                    "data-disabled": eF(null == e ? void 0 : e.isDisabled),
                    "data-focus": eF(eb),
                    "data-pressed": eF(eh),
                    "data-focus-visible": eF(ey),
                    "data-hover": eF(ex),
                    className: eA.trigger({
                      class: null == U ? void 0 : U.trigger,
                    }),
                    ...e1(em, ev, ew, ej(q, { enabled: Q }), ej(t)),
                  };
                },
                [
                  eA,
                  et,
                  eo.isOpen,
                  null == U ? void 0 : U.trigger,
                  null == e ? void 0 : e.isDisabled,
                  eb,
                  eh,
                  ey,
                  ex,
                  em,
                  ev,
                  ew,
                  q,
                  Q,
                ]
              ),
              e_ = (0, i.useCallback)(
                function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    state: eo,
                    triggerRef: et,
                    selectRef: ee,
                    selectionMode: R,
                    label: null == e ? void 0 : e.label,
                    name: null == e ? void 0 : e.name,
                    isRequired: null == e ? void 0 : e.isRequired,
                    autoComplete: null == e ? void 0 : e.autoComplete,
                    isDisabled: null == e ? void 0 : e.isDisabled,
                    onChange: V,
                    ...t,
                  };
                },
                [
                  eo,
                  R,
                  null == e ? void 0 : e.label,
                  null == e ? void 0 : e.autoComplete,
                  null == e ? void 0 : e.name,
                  null == e ? void 0 : e.isDisabled,
                  et,
                ]
              ),
              eV = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "label",
                    className: eA.label({
                      class: eB(null == U ? void 0 : U.label, e.className),
                    }),
                    ...el,
                    ...e,
                  };
                },
                [eA, null == U ? void 0 : U.label, el]
              ),
              eG = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "value",
                    className: eA.value({
                      class: eB(null == U ? void 0 : U.value, e.className),
                    }),
                    ...ea,
                    ...e,
                  };
                },
                [eA, null == U ? void 0 : U.value, ea]
              ),
              eY = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "data-slot": "listboxWrapper",
                    className: eA.listboxWrapper({
                      class: eB(
                        null == U ? void 0 : U.listboxWrapper,
                        null == e ? void 0 : e.className
                      ),
                    }),
                    style: { maxHeight: null != I ? I : 256, ...e.style },
                    ...e1(Z.scrollShadowProps, e),
                  };
                },
                [
                  eA.listboxWrapper,
                  null == U ? void 0 : U.listboxWrapper,
                  Z.scrollShadowProps,
                  I,
                ]
              ),
              eq = (0, i.useCallback)(
                function () {
                  var e, t;
                  let r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = e1(Z.popoverProps, r);
                  return {
                    state: eo,
                    triggerRef: et,
                    ref: en,
                    "data-slot": "popover",
                    scrollRef: er,
                    triggerType: "listbox",
                    classNames: {
                      content: eA.popoverContent({
                        class: eB(
                          null == U ? void 0 : U.popoverContent,
                          r.className
                        ),
                      }),
                    },
                    ...n,
                    offset:
                      eo.selectedItems && eo.selectedItems.length > 0
                        ? 1e-8 * eo.selectedItems.length +
                          ((null == (e = Z.popoverProps) ? void 0 : e.offset) ||
                            0)
                        : null == (t = Z.popoverProps)
                        ? void 0
                        : t.offset,
                    shouldCloseOnInteractOutside: (
                      null == n ? void 0 : n.shouldCloseOnInteractOutside
                    )
                      ? n.shouldCloseOnInteractOutside
                      : (e) => rV(e, ee, eo),
                  };
                },
                [
                  eA,
                  null == U ? void 0 : U.popoverContent,
                  Z.popoverProps,
                  et,
                  eo,
                  eo.selectedItems,
                ]
              ),
              eX = (0, i.useCallback)(
                () => ({
                  "data-slot": "selectorIcon",
                  "aria-hidden": eF(!0),
                  "data-open": eF(eo.isOpen),
                  className: eA.selectorIcon({
                    class: null == U ? void 0 : U.selectorIcon,
                  }),
                }),
                [eA, null == U ? void 0 : U.selectorIcon, eo.isOpen]
              ),
              eZ = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    "data-slot": "innerWrapper",
                    className: eA.innerWrapper({
                      class: eB(
                        null == U ? void 0 : U.innerWrapper,
                        null == e ? void 0 : e.className
                      ),
                    }),
                  };
                },
                [eA, null == U ? void 0 : U.innerWrapper]
              ),
              e0 = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    "data-slot": "helperWrapper",
                    className: eA.helperWrapper({
                      class: eB(
                        null == U ? void 0 : U.helperWrapper,
                        null == e ? void 0 : e.className
                      ),
                    }),
                  };
                },
                [eA, null == U ? void 0 : U.helperWrapper]
              ),
              e4 = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    ...eu,
                    "data-slot": "description",
                    className: eA.description({
                      class: eB(
                        null == U ? void 0 : U.description,
                        null == e ? void 0 : e.className
                      ),
                    }),
                  };
                },
                [eA, null == U ? void 0 : U.description]
              ),
              e3 = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    "data-slot": "mainWrapper",
                    className: eA.mainWrapper({
                      class: eB(
                        null == U ? void 0 : U.mainWrapper,
                        null == e ? void 0 : e.className
                      ),
                    }),
                  };
                },
                [eA, null == U ? void 0 : U.mainWrapper]
              ),
              e5 = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    ...e,
                    ...ec,
                    "data-slot": "error-message",
                    className: eA.errorMessage({
                      class: eB(
                        null == U ? void 0 : U.errorMessage,
                        null == e ? void 0 : e.className
                      ),
                    }),
                  };
                },
                [eA, ec, null == U ? void 0 : U.errorMessage]
              ),
              e2 = (0, i.useCallback)(
                function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    "aria-hidden": eF(!0),
                    "data-slot": "spinner",
                    color: "current",
                    size: "sm",
                    ..._,
                    ...e,
                    ref: j,
                    className: eA.spinner({
                      class: eB(
                        null == U ? void 0 : U.spinner,
                        null == e ? void 0 : e.className
                      ),
                    }),
                  };
                },
                [eA, j, _, null == U ? void 0 : U.spinner]
              );
            return (
              r1.set(eo, {
                isDisabled: null == e ? void 0 : e.isDisabled,
                isRequired: null == e ? void 0 : e.isRequired,
                name: null == e ? void 0 : e.name,
                isInvalid: eg,
                validationBehavior: G,
              }),
              {
                Component: J,
                domRef: ee,
                state: eo,
                label: v,
                name: b,
                triggerRef: et,
                isLoading: y,
                placeholder: K,
                startContent: P,
                endContent: C,
                description: T,
                selectorIcon: x,
                hasHelper: eR,
                labelPlacement: eE,
                hasPlaceholder: eS,
                renderValue: k,
                selectionMode: R,
                disableAnimation: g,
                isOutsideLeft: eT,
                shouldLabelBeOutside: eP,
                shouldLabelBeInside: eC,
                isInvalid: eg,
                errorMessage: eL,
                getBaseProps: ez,
                getTriggerProps: eN,
                getLabelProps: eV,
                getValueProps: eG,
                getListboxProps: function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = null != D ? D : eo.collection.size > 50;
                  return {
                    state: eo,
                    ref: er,
                    isVirtualized: t,
                    virtualization: t
                      ? { maxListboxHeight: I, itemHeight: O }
                      : void 0,
                    "data-slot": "listbox",
                    className: eA.listbox({
                      class: eB(
                        null == U ? void 0 : U.listbox,
                        null == e ? void 0 : e.className
                      ),
                    }),
                    scrollShadowProps: Z.scrollShadowProps,
                    ...e1(Z.listboxProps, e, es),
                  };
                },
                getPopoverProps: eq,
                getSpinnerProps: e2,
                getMainWrapperProps: e3,
                getListboxWrapperProps: eY,
                getHiddenSelectProps: e_,
                getInnerWrapperProps: eZ,
                getHelperWrapperProps: e0,
                getDescriptionProps: e4,
                getErrorMessageProps: e5,
                getSelectorIconProps: eX,
              }
            );
          })({ ...e, ref: t }),
          j = o ? (0, r$.jsx)("label", { ...E(), children: o }) : null,
          z = (0, i.cloneElement)(d, R()),
          N = (0, i.useMemo)(() => {
            let e = g && p,
              t = e || f;
            return a && t
              ? (0, r$.jsx)("div", {
                  ...O(),
                  children: e
                    ? (0, r$.jsx)("div", { ...L(), children: p })
                    : (0, r$.jsx)("div", { ...A(), children: f }),
                })
              : null;
          }, [a, g, p, f, O, L, A]),
          F = (0, i.useMemo)(() => {
            var e;
            return (null == (e = n.selectedItems) ? void 0 : e.length)
              ? b && "function" == typeof b
                ? b(
                    [...n.selectedItems].map((e) => ({
                      key: e.key,
                      data: e.value,
                      type: e.type,
                      props: e.props,
                      textValue: e.textValue,
                      rendered: e.rendered,
                      "aria-label": e["aria-label"],
                    }))
                  )
                : n.selectedItems.map((e) => e.textValue).join(", ")
              : v;
          }, [n.selectedItems, b, v]),
          B = (0, i.useMemo)(
            () => (u ? (0, r$.jsx)(lv, { ...k() }) : z),
            [u, z, k]
          ),
          _ = (0, i.useMemo)(
            () =>
              n.isOpen
                ? (0, r$.jsx)(lg, {
                    ...T(),
                    children: (0, r$.jsx)(lb, {
                      ...I(),
                      children: (0, r$.jsx)(n3, { ...C() }),
                    }),
                  })
                : null,
            [n.isOpen, T, n, c, I, C]
          );
        return (0,
        r$.jsxs)("div", { ...w(), children: [(0, r$.jsx)(r2, { ...D() }), y ? j : null, (0, r$.jsxs)("div", { ...M(), children: [(0, r$.jsxs)(r, { ...S(), children: [y ? null : j, (0, r$.jsxs)("div", { ...K(), children: [h, (0, r$.jsx)("span", { ...P(), children: F }), m && n.selectedItems && (0, r$.jsx)(r5, { elementType: "span", children: "," }), m] }), B] }), N] }), x ? _ : (0, r$.jsx)(lC, { children: _ })] });
      });
    },
    9794: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => n });
      let n = "data-" + (0, r(3116).I)("framerAppearId");
    },
    6094: (e, t, r) => {
      "use strict";
      function n(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      r.d(t, { N: () => n });
    },
    2876: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => n });
      let n = (e) => Array.isArray(e);
    },
    210: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => i });
      var n = r(7218);
      let o = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var l = r(7662);
      function i(e, t) {
        let r = !1,
          i = !0,
          a = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (r = !0),
          u = o.reduce(
            (e, r) => (
              (e[r] = (function (e, t) {
                let r = new Set(),
                  n = new Set(),
                  o = !1,
                  i = !1,
                  a = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 },
                  u = 0;
                function c(t) {
                  a.has(t) && (d.schedule(t), e()), u++, t(s);
                }
                let d = {
                  schedule: (e, t = !1, l = !1) => {
                    let i = l && o ? r : n;
                    return t && a.add(e), i.has(e) || i.add(e), e;
                  },
                  cancel: (e) => {
                    n.delete(e), a.delete(e);
                  },
                  process: (e) => {
                    if (((s = e), o)) {
                      i = !0;
                      return;
                    }
                    (o = !0),
                      ([r, n] = [n, r]),
                      r.forEach(c),
                      t && l.Q.value && l.Q.value.frameloop[t].push(u),
                      (u = 0),
                      r.clear(),
                      (o = !1),
                      i && ((i = !1), d.process(e));
                  },
                };
                return d;
              })(s, t ? r : void 0)),
              e
            ),
            {}
          ),
          {
            read: c,
            resolveKeyframes: d,
            update: f,
            preRender: p,
            render: g,
            postRender: h,
          } = u,
          m = () => {
            let o = n.W.useManualTiming ? a.timestamp : performance.now();
            (r = !1),
              n.W.useManualTiming ||
                (a.delta = i
                  ? 1e3 / 60
                  : Math.max(Math.min(o - a.timestamp, 40), 1)),
              (a.timestamp = o),
              (a.isProcessing = !0),
              c.process(a),
              d.process(a),
              f.process(a),
              p.process(a),
              g.process(a),
              h.process(a),
              (a.isProcessing = !1),
              r && t && ((i = !1), e(m));
          },
          v = () => {
            (r = !0), (i = !0), a.isProcessing || e(m);
          };
        return {
          schedule: o.reduce((e, t) => {
            let n = u[t];
            return (
              (e[t] = (e, t = !1, o = !1) => (r || v(), n.schedule(e, t, o))), e
            );
          }, {}),
          cancel: (e) => {
            for (let t = 0; t < o.length; t++) u[o[t]].cancel(e);
          },
          state: a,
          steps: u,
        };
      }
    },
    6160: (e, t, r) => {
      "use strict";
      r.d(t, { Gt: () => o, WG: () => l, uv: () => i });
      var n = r(2927);
      let {
        schedule: o,
        cancel: l,
        state: i,
        steps: a,
      } = (0, r(210).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.l,
        !0
      );
    },
    2472: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => o });
      let n = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        o = {};
      for (let e in n) o[e] = { isEnabled: (t) => n[e].some((e) => !!t[e]) };
    },
    337: (e, t, r) => {
      "use strict";
      r.d(t, { z: () => l });
      let n = {};
      var o = r(2613);
      function l(e, { layout: t, layoutId: r }) {
        return (
          o.f.has(e) ||
          e.startsWith("origin") ||
          ((t || void 0 !== r) && (!!n[e] || "opacity" === e))
        );
      }
    },
    3116: (e, t, r) => {
      "use strict";
      r.d(t, { I: () => n });
      let n = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
    },
    2070: (e, t, r) => {
      "use strict";
      r.d(t, { j: () => o, p: () => i });
      let n = (e) => (t) => "string" == typeof t && t.startsWith(e),
        o = n("--"),
        l = n("var(--"),
        i = (e) => !!l(e) && a.test(e.split("/*")[0].trim()),
        a =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    },
    8338: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => o });
      let n = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function o(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (n.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1;
      }
    },
    4094: (e, t, r) => {
      "use strict";
      r.d(t, { W: () => s });
      var n = r(5356),
        o = r(1861);
      let l = {
          borderWidth: o.px,
          borderTopWidth: o.px,
          borderRightWidth: o.px,
          borderBottomWidth: o.px,
          borderLeftWidth: o.px,
          borderRadius: o.px,
          radius: o.px,
          borderTopLeftRadius: o.px,
          borderTopRightRadius: o.px,
          borderBottomRightRadius: o.px,
          borderBottomLeftRadius: o.px,
          width: o.px,
          maxWidth: o.px,
          height: o.px,
          maxHeight: o.px,
          top: o.px,
          right: o.px,
          bottom: o.px,
          left: o.px,
          padding: o.px,
          paddingTop: o.px,
          paddingRight: o.px,
          paddingBottom: o.px,
          paddingLeft: o.px,
          margin: o.px,
          marginTop: o.px,
          marginRight: o.px,
          marginBottom: o.px,
          marginLeft: o.px,
          backgroundPositionX: o.px,
          backgroundPositionY: o.px,
        },
        i = {
          rotate: o.uj,
          rotateX: o.uj,
          rotateY: o.uj,
          rotateZ: o.uj,
          scale: n.hs,
          scaleX: n.hs,
          scaleY: n.hs,
          scaleZ: n.hs,
          skew: o.uj,
          skewX: o.uj,
          skewY: o.uj,
          distance: o.px,
          translateX: o.px,
          translateY: o.px,
          translateZ: o.px,
          x: o.px,
          y: o.px,
          z: o.px,
          perspective: o.px,
          transformPerspective: o.px,
          opacity: n.X4,
          originX: o.gQ,
          originY: o.gQ,
          originZ: o.px,
        },
        a = { ...n.ai, transform: Math.round },
        s = {
          ...l,
          ...i,
          zIndex: a,
          size: o.px,
          fillOpacity: n.X4,
          strokeOpacity: n.X4,
          numOctaves: a,
        };
    },
    9336: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => u });
      var n = r(2070);
      let o = (e, t) => (t && "number" == typeof e ? t.transform(e) : e);
      var l = r(4094),
        i = r(2613);
      let a = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        s = i.U.length;
      function u(e, t, r) {
        let { style: u, vars: c, transformOrigin: d } = e,
          f = !1,
          p = !1;
        for (let e in t) {
          let r = t[e];
          if (i.f.has(e)) {
            f = !0;
            continue;
          }
          if ((0, n.j)(e)) {
            c[e] = r;
            continue;
          }
          {
            let t = o(r, l.W[e]);
            e.startsWith("origin") ? ((p = !0), (d[e] = t)) : (u[e] = t);
          }
        }
        if (
          (!t.transform &&
            (f || r
              ? (u.transform = (function (e, t, r) {
                  let n = "",
                    u = !0;
                  for (let c = 0; c < s; c++) {
                    let s = i.U[c],
                      d = e[s];
                    if (void 0 === d) continue;
                    let f = !0;
                    if (
                      !(f =
                        "number" == typeof d
                          ? d === (s.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(d)) ||
                      r
                    ) {
                      let e = o(d, l.W[s]);
                      if (!f) {
                        u = !1;
                        let t = a[s] || s;
                        n += `${t}(${e}) `;
                      }
                      r && (t[s] = e);
                    }
                  }
                  return (
                    (n = n.trim()),
                    r ? (n = r(t, u ? "" : n)) : u && (n = "none"),
                    n
                  );
                })(t, e.transform, r))
              : u.transform && (u.transform = "none")),
          p)
        ) {
          let { originX: e = "50%", originY: t = "50%", originZ: r = 0 } = d;
          u.transformOrigin = `${e} ${t} ${r}`;
        }
      }
    },
    2613: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => n, f: () => o });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        o = new Set(n);
    },
    6302: (e, t, r) => {
      "use strict";
      function n(e, { style: t, vars: r }, n, o) {
        for (let l in (Object.assign(e.style, t, o && o.getProjectionStyles(n)),
        r))
          e.style.setProperty(l, r[l]);
      }
      r.d(t, { e: () => n });
    },
    4192: (e, t, r) => {
      "use strict";
      r.d(t, { x: () => l });
      var n = r(337),
        o = r(928);
      function l(e, t, r) {
        var l;
        let { style: i } = e,
          a = {};
        for (let s in i)
          ((0, o.S)(i[s]) ||
            (t.style && (0, o.S)(t.style[s])) ||
            (0, n.z)(s, e) ||
            (null === (l = null == r ? void 0 : r.getValue(s)) || void 0 === l
              ? void 0
              : l.liveStyle) !== void 0) &&
            (a[s] = i[s]);
        return a;
      }
    },
    1352: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => s });
      var n = r(9336),
        o = r(1861);
      let l = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        i = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function a(e, t, r) {
        return "string" == typeof e ? e : o.px.transform(t + r * e);
      }
      function s(
        e,
        {
          attrX: t,
          attrY: r,
          attrScale: s,
          originX: u,
          originY: c,
          pathLength: d,
          pathSpacing: f = 1,
          pathOffset: p = 0,
          ...g
        },
        h,
        m
      ) {
        if (((0, n.O)(e, g, m), h)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: v, style: b, dimensions: y } = e;
        v.transform && (y && (b.transform = v.transform), delete v.transform),
          y &&
            (void 0 !== u || void 0 !== c || b.transform) &&
            (b.transformOrigin = (function (e, t, r) {
              let n = a(t, e.x, e.width),
                o = a(r, e.y, e.height);
              return `${n} ${o}`;
            })(y, void 0 !== u ? u : 0.5, void 0 !== c ? c : 0.5)),
          void 0 !== t && (v.x = t),
          void 0 !== r && (v.y = r),
          void 0 !== s && (v.scale = s),
          void 0 !== d &&
            (function (e, t, r = 1, n = 0, a = !0) {
              e.pathLength = 1;
              let s = a ? l : i;
              e[s.offset] = o.px.transform(-n);
              let u = o.px.transform(t),
                c = o.px.transform(r);
              e[s.array] = `${u} ${c}`;
            })(v, d, f, p, !1);
      }
    },
    1635: (e, t, r) => {
      "use strict";
      r.d(t, { e: () => n });
      let n = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    6925: (e, t, r) => {
      "use strict";
      r.d(t, { n: () => n });
      let n = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    },
    2667: (e, t, r) => {
      "use strict";
      function n(e, t) {
        try {
          t.dimensions =
            "function" == typeof e.getBBox
              ? e.getBBox()
              : e.getBoundingClientRect();
        } catch (e) {
          t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
        }
      }
      r.d(t, { H: () => n });
    },
    3723: (e, t, r) => {
      "use strict";
      r.d(t, { d: () => i });
      var n = r(3116),
        o = r(6302),
        l = r(1635);
      function i(e, t, r, i) {
        for (let r in ((0, o.e)(e, t, void 0, i), t.attrs))
          e.setAttribute(l.e.has(r) ? r : (0, n.I)(r), t.attrs[r]);
      }
    },
    5777: (e, t, r) => {
      "use strict";
      r.d(t, { x: () => i });
      var n = r(928),
        o = r(2613),
        l = r(4192);
      function i(e, t, r) {
        let i = (0, l.x)(e, t, r);
        for (let r in e)
          ((0, n.S)(e[r]) || (0, n.S)(t[r])) &&
            (i[
              -1 !== o.U.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = e[r]);
        return i;
      }
    },
    3083: (e, t, r) => {
      "use strict";
      r.d(t, { O: () => a, e: () => i });
      var n = r(6094),
        o = r(839),
        l = r(6638);
      function i(e) {
        return (0, n.N)(e.animate) || l._.some((t) => (0, o.w)(e[t]));
      }
      function a(e) {
        return !!(i(e) || e.variants);
      }
    },
    839: (e, t, r) => {
      "use strict";
      function n(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      r.d(t, { w: () => n });
    },
    241: (e, t, r) => {
      "use strict";
      function n(e, t, r, n) {
        if (
          "function" == typeof t ||
          ("string" == typeof t && (t = e.variants && e.variants[t]),
          "function" == typeof t)
        ) {
          let [o, l] = (function (e) {
            let t = [{}, {}];
            return (
              null == e ||
                e.values.forEach((e, r) => {
                  (t[0][r] = e.get()), (t[1][r] = e.getVelocity());
                }),
              t
            );
          })(n);
          t = t(void 0 !== r ? r : e.custom, o, l);
        }
        return t;
      }
      r.d(t, { a: () => n });
    },
    6638: (e, t, r) => {
      "use strict";
      r.d(t, { U: () => n, _: () => o });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        o = ["initial", ...n];
    },
    7662: (e, t, r) => {
      "use strict";
      r.d(t, { Q: () => n });
      let n = { value: null, addProjectionMetrics: null };
    },
    3156: (e, t, r) => {
      "use strict";
      r.d(t, { q: () => n });
      let n = (e, t, r) => (r > t ? t : r < e ? e : r);
    },
    5094: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => n });
      let n = "undefined" != typeof window;
    },
    5313: (e, t, r) => {
      "use strict";
      r.d(t, { B: () => o, K: () => l });
      var n = r(2876);
      let o = (e) => !!(e && "object" == typeof e && e.mix && e.toValue),
        l = (e) => ((0, n.p)(e) ? e[e.length - 1] || 0 : e);
    },
    5356: (e, t, r) => {
      "use strict";
      r.d(t, { X4: () => l, ai: () => o, hs: () => i });
      var n = r(3156);
      let o = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        l = { ...o, transform: (e) => (0, n.q)(0, 1, e) },
        i = { ...o, default: 1 };
    },
    1861: (e, t, r) => {
      "use strict";
      r.d(t, {
        KN: () => l,
        gQ: () => u,
        px: () => i,
        uj: () => o,
        vh: () => a,
        vw: () => s,
      });
      let n = (e) => ({
          test: (t) =>
            "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
          parse: parseFloat,
          transform: (t) => `${t}${e}`,
        }),
        o = n("deg"),
        l = n("%"),
        i = n("px"),
        a = n("vh"),
        s = n("vw"),
        u = {
          ...l,
          parse: (e) => l.parse(e) / 100,
          transform: (e) => l.transform(100 * e),
        };
    },
    928: (e, t, r) => {
      "use strict";
      r.d(t, { S: () => n });
      let n = (e) => !!(e && e.getVelocity);
    },
    2927: (e, t, r) => {
      "use strict";
      r.d(t, { l: () => n });
      let n = (e) => e;
    },
  },
]);
