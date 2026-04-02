(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [90, 496],
  {
    9109: (e, s, t) => {
      Promise.resolve().then(t.t.bind(t, 9778, 23)),
        Promise.resolve().then(t.bind(t, 5392)),
        Promise.resolve().then(t.bind(t, 5317)),
        Promise.resolve().then(t.t.bind(t, 957, 23));
    },
    5392: (e, s, t) => {
      "use strict";
      t.d(s, { LanguageSelect: () => h });
      var l = t(6131),
        n = t(512),
        r = t(8384),
        c = t(7342),
        i = t(9645),
        a = t(957),
        o = t.n(a);
      let d = (e) => {
        let {
          children: s,
          className: t = "",
          variant: n = "text",
          style: r = "regular",
        } = e;
        return "text" !== n
          ? (0, l.jsx)("h1", {
              className: "".concat(o()[n], " ").concat(o()[r], " ").concat(t),
              children: s,
            })
          : (0, l.jsx)("span", {
              className: "".concat(o().text, " ").concat(o()[r], " ").concat(t),
              children: s,
            });
      };
      function h() {
        let e = (0, c.usePathname)().split("/")[1];
        return (0, l.jsxs)(n.d, {
          defaultSelectedKeys: [e],
          className: "w-[92px]",
          size: "md",
          renderValue: () =>
            (0, l.jsxs)("div", {
              className: "flex items-center gap-1",
              children: [
                (0, l.jsx)(i.default, {
                  alt: "en",
                  src: "/images/".concat(e, ".png"),
                  width: 16,
                  height: 16,
                }),
                " ",
                (0, l.jsxs)(d, {
                  style: "bold",
                  children: [" ", e.toUpperCase()],
                }),
              ],
            }),
          children: [
            (0, l.jsx)(
              r.y,
              {
                onPress: () => (0, c.redirect)("/en"),
                children: (0, l.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, l.jsx)(i.default, {
                      alt: "en",
                      src: "/images/en.png",
                      width: 16,
                      height: 16,
                    }),
                    " ",
                    (0, l.jsx)(d, { style: "bold", children: "EN" }),
                  ],
                }),
              },
              "en"
            ),
            (0, l.jsx)(
              r.y,
              {
                onPress: () => (0, c.redirect)("/cn"),
                children: (0, l.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, l.jsx)(i.default, {
                      alt: "cn",
                      src: "/images/cn.png",
                      width: 16,
                      height: 16,
                    }),
                    " ",
                    (0, l.jsx)(d, { style: "bold", children: "CN" }),
                  ],
                }),
              },
              "cn"
            ),
          ],
        });
      }
    },
    5317: (e, s, t) => {
      "use strict";
      t.d(s, { CopyButton: () => c });
      var l = t(6131),
        n = t(451),
        r = t(8040);
      let c = (e) => {
        let { text: s } = e,
          [t, c] = (0, n.useState)(!1);
        return (0, l.jsx)("div", {
          className: t ? "active" : "text-black crs",
          children: (0, l.jsx)(r.CopyToClipboard, {
            text: s,
            onCopy: () => {
              c(!0),
                setTimeout(() => {
                  c(!1);
                }, 1500);
            },
            children: (0, l.jsxs)("svg", {
              width: "16",
              height: "16",
              viewBox: "0 0 19 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: t ? "text-yellow-light" : "text-black",
              children: [
                (0, l.jsx)("path", {
                  d: "M16.8612 17H7.06118C6.90205 17 6.74944 16.9368 6.63692 16.8243C6.5244 16.7117 6.46118 16.5591 6.46118 16.4V6.6C6.46118 6.44087 6.5244 6.28826 6.63692 6.17574C6.74944 6.06321 6.90205 6 7.06118 6H16.8612C17.0203 6 17.1729 6.06321 17.2854 6.17574C17.398 6.28826 17.4612 6.44087 17.4612 6.6V16.4C17.4612 16.5591 17.398 16.7117 17.2854 16.8243C17.1729 16.9368 17.0203 17 16.8612 17Z",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, l.jsx)("path", {
                  d: "M12.4612 6V1.6C12.4612 1.44087 12.398 1.28826 12.2854 1.17574C12.1729 1.06321 12.0203 1 11.8612 1H2.06118C1.90205 1 1.74944 1.06321 1.63692 1.17574C1.5244 1.28826 1.46118 1.44087 1.46118 1.6V11.4C1.46118 11.5591 1.5244 11.7117 1.63692 11.8243C1.74944 11.9368 1.90205 12 2.06118 12H6.46118",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          }),
        });
      };
    },
    957: (e) => {
      e.exports = {
        h1: "styles_h1__gDdIN",
        h2: "styles_h2__luXAL",
        h3: "styles_h3__pJWn8",
        h4: "styles_h4__n_xHf",
        h5: "styles_h5__iZrU0",
        text: "styles_text__aoYyk",
        bold: "styles_bold__IPZiO",
        regular: "styles_regular__eeM9C",
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [170, 958, 491, 37, 911, 358], () => s(9109)), (_N_E = e.O());
  },
]);
