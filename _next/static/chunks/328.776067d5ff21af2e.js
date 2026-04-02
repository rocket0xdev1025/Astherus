"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [328],
  {
    2328: (t, e, i) => {
      let n;
      i.r(e), i.d(e, { default: () => iq });
      var r = i(6094),
        s = i(241);
      function a(t, e, i) {
        let n = t.getProps();
        return (0, s.a)(n, e, void 0 !== i ? i : n.custom, t);
      }
      function o(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let l = o(() => void 0 !== window.ScrollTimeline);
      class u {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        get finished() {
          return Promise.all(
            this.animations.map((t) => ("finished" in t ? t.finished : t))
          );
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            l() && i.attachTimeline
              ? i.attachTimeline(t)
              : "function" == typeof e
              ? e(i)
              : void 0
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      class h extends u {
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
      }
      function d(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      function p(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function c(t) {
        return "function" == typeof t;
      }
      function m(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let f = (t) => Array.isArray(t) && "number" == typeof t[0],
        v = { linearEasing: void 0 },
        g = (function (t, e) {
          let i = o(t);
          return () => {
            var t;
            return null !== (t = v[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        y = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        b = (t, e, i = 10) => {
          let n = "",
            r = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < r; e++) n += t(y(0, r - 1, e)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        },
        w = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        S = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: w([0, 0.65, 0.55, 1]),
          circOut: w([0.55, 0, 1, 0.45]),
          backIn: w([0.31, 0.01, 0.66, -0.59]),
          backOut: w([0.33, 1.53, 0.69, 0.99]),
        },
        A = { x: !1, y: !1 };
      function T(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function V(t) {
        return !("touch" === t.pointerType || A.x || A.y);
      }
      function x(t, e) {
        let i = `${e}PointerCapture`;
        if (
          t.target instanceof Element &&
          i in t.target &&
          void 0 !== t.pointerId
        )
          try {
            t.target[i](t.pointerId);
          } catch (t) {}
      }
      let M = (t, e) => !!e && (t === e || M(t, e.parentElement)),
        P = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        C = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        E = new WeakSet();
      function F(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function k(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let I = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = F(() => {
          if (E.has(i)) return;
          k(i, "down");
          let t = F(() => {
            k(i, "up");
          });
          i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => k(i, "cancel"), e);
        });
        i.addEventListener("keydown", n, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", n),
            e
          );
      };
      function O(t) {
        return P(t) && !(A.x || A.y);
      }
      let N = (t) => 1e3 * t,
        R = (t) => t / 1e3;
      var D = i(2927),
        B = i(2613);
      let K = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...B.U,
      ]);
      var L = i(5313),
        $ = i(7218),
        U = i(6160);
      function j() {
        n = void 0;
      }
      let G = {
        now: () => (
          void 0 === n &&
            G.set(
              U.uv.isProcessing || $.W.useManualTiming
                ? U.uv.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(j);
        },
      };
      class q {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          var e;
          return (
            -1 === (e = this.subscriptions).indexOf(t) && e.push(t),
            () =>
              (function (t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1);
              })(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let W = (t) => !isNaN(parseFloat(t)),
        _ = { current: void 0 };
      class z {
        constructor(t, e = {}) {
          (this.version = "12.4.7"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = G.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = G.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = W(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new q());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  U.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return _.current && _.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = G.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function H(t, e) {
        return new z(t, e);
      }
      var Y = i(928),
        X = i(9794);
      let Q = { current: !1 },
        J = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function Z(t, e, i, n) {
        if (t === e && i === n) return D.l;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, a;
            let o = 0;
            do (s = J((a = e + (i - e) / 2), n, r) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(s) > 1e-7 && ++o < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : J(r(t), e, n));
      }
      let tt = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        te = (t) => (e) => 1 - t(1 - e),
        ti = Z(0.33, 1.53, 0.69, 0.99),
        tn = te(ti),
        tr = tt(tn),
        ts = (t) =>
          (t *= 2) < 1 ? 0.5 * tn(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        ta = (t) => 1 - Math.sin(Math.acos(t)),
        to = te(ta),
        tl = tt(ta),
        tu = (t) => /^0[^.\s]+$/u.test(t);
      var th = i(3156),
        td = i(5356);
      let tp = (t) => Math.round(1e5 * t) / 1e5,
        tc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tm =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tf = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tm.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tv = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [r, s, a, o] = n.match(tc);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(a),
            alpha: void 0 !== o ? parseFloat(o) : 1,
          };
        },
        tg = (t) => (0, th.q)(0, 255, t),
        ty = { ...td.ai, transform: (t) => Math.round(tg(t)) },
        tb = {
          test: tf("rgb", "red"),
          parse: tv("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            ty.transform(t) +
            ", " +
            ty.transform(e) +
            ", " +
            ty.transform(i) +
            ", " +
            tp(td.X4.transform(n)) +
            ")",
        },
        tw = {
          test: tf("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: tb.transform,
        };
      var tS = i(1861);
      let tA = {
          test: tf("hsl", "hue"),
          parse: tv("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tS.KN.transform(tp(e)) +
            ", " +
            tS.KN.transform(tp(i)) +
            ", " +
            tp(td.X4.transform(n)) +
            ")",
        },
        tT = {
          test: (t) => tb.test(t) || tw.test(t) || tA.test(t),
          parse: (t) =>
            tb.test(t) ? tb.parse(t) : tA.test(t) ? tA.parse(t) : tw.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tb.transform(t)
              : tA.transform(t),
        },
        tV =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tx = "number",
        tM = "color",
        tP =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tC(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          s = 0,
          a = e
            .replace(
              tP,
              (t) => (
                tT.test(t)
                  ? (n.color.push(s), r.push(tM), i.push(tT.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(s), r.push("var"), i.push(t))
                  : (n.number.push(s), r.push(tx), i.push(parseFloat(t))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: a, indexes: n, types: r };
      }
      function tE(t) {
        return tC(t).values;
      }
      function tF(t) {
        let { split: e, types: i } = tC(t),
          n = e.length;
        return (t) => {
          let r = "";
          for (let s = 0; s < n; s++)
            if (((r += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === tx
                ? (r += tp(t[s]))
                : e === tM
                ? (r += tT.transform(t[s]))
                : (r += t[s]);
            }
          return r;
        };
      }
      let tk = (t) => ("number" == typeof t ? 0 : t),
        tI = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tc)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tV)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: tE,
          createTransformer: tF,
          getAnimatableNone: function (t) {
            let e = tE(t);
            return tF(t)(e.map(tk));
          },
        },
        tO = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tN(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tc) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = tO.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let tR = /\b([a-z-]*)\(.*?\)/gu,
        tD = {
          ...tI,
          getAnimatableNone: (t) => {
            let e = t.match(tR);
            return e ? e.map(tN).join(" ") : t;
          },
        },
        tB = {
          ...i(4094).W,
          color: tT,
          backgroundColor: tT,
          outlineColor: tT,
          fill: tT,
          stroke: tT,
          borderColor: tT,
          borderTopColor: tT,
          borderRightColor: tT,
          borderBottomColor: tT,
          borderLeftColor: tT,
          filter: tD,
          WebkitFilter: tD,
        },
        tK = (t) => tB[t];
      function tL(t, e) {
        let i = tK(t);
        return (
          i !== tD && (i = tI),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let t$ = new Set(["auto", "none", "0"]),
        tU = (t) => t === td.ai || t === tS.px,
        tj = (t, e) => parseFloat(t.split(", ")[e]),
        tG =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return tj(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? tj(e[1], t) : 0;
            }
          },
        tq = new Set(["x", "y", "z"]),
        tW = B.U.filter((t) => !tq.has(t)),
        t_ = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: tG(4, 13),
          y: tG(5, 14),
        };
      (t_.translateX = t_.x), (t_.translateY = t_.y);
      let tz = new Set(),
        tH = !1,
        tY = !1;
      function tX() {
        if (tY) {
          let t = Array.from(tz).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tW.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tY = !1), (tH = !1), tz.forEach((t) => t.complete()), tz.clear();
      }
      function tQ() {
        tz.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tY = !0);
        });
      }
      class tJ {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tz.add(this),
                tH || ((tH = !0), U.Gt.read(tQ), U.Gt.resolveKeyframes(tX)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tz.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tz.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tZ = D.l,
        t0 = D.l,
        t1 = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var t2 = i(2070);
      let t3 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        t5 = (t) => (e) => e.test(t),
        t6 = [
          td.ai,
          tS.px,
          tS.KN,
          tS.uj,
          tS.vw,
          tS.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        t4 = (t) => t6.find(t5(t));
      class t8 extends tJ {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, t2.p)(n))) {
              let r = (function t(e, i, n = 1) {
                t0(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = t3.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let a = window.getComputedStyle(i).getPropertyValue(r);
                if (a) {
                  let t = a.trim();
                  return t1(t) ? parseFloat(t) : t;
                }
                return (0, t2.p)(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !K.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = t4(n),
            a = t4(r);
          if (s !== a) {
            if (tU(s) && tU(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || tu(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !t$.has(e) &&
                  tC(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = tL(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = t_[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            a = n[s];
          (n[s] = t_[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let t9 = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tI.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        t7 = (t) => null !== t;
      function et(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(t7),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      class ee {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...a
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = G.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...a,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tQ(), tX()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = G.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: a,
            onUpdate: o,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                a = t9(r, e),
                o = t9(s, e);
              return (
                tZ(
                  a === o,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!a &&
                  !!o &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || c(i)) && n))
              );
            })(t, i, n, r)
          ) {
            if (Q.current || !s) {
              o && o(et(t, this.options, e)),
                a && a(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let ei = { mainThread: 0, waapi: 0 },
        en = (t, e, i) => t + (e - t) * i;
      function er(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function es(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let ea = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        eo = [tw, tb, tA],
        el = (t) => eo.find((e) => e.test(t));
      function eu(t) {
        let e = el(t);
        if (
          (tZ(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tA &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  o = 2 * i - n;
                (r = er(o, n, t + 1 / 3)),
                  (s = er(o, n, t)),
                  (a = er(o, n, t - 1 / 3));
              } else r = s = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let eh = (t, e) => {
          let i = eu(t),
            n = eu(e);
          if (!i || !n) return es(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = ea(i.red, n.red, t)),
            (r.green = ea(i.green, n.green, t)),
            (r.blue = ea(i.blue, n.blue, t)),
            (r.alpha = en(i.alpha, n.alpha, t)),
            tb.transform(r)
          );
        },
        ed = (t, e) => (i) => e(t(i)),
        ep = (...t) => t.reduce(ed),
        ec = new Set(["none", "hidden"]);
      function em(t, e) {
        return (i) => en(t, e, i);
      }
      function ef(t) {
        return "number" == typeof t
          ? em
          : "string" == typeof t
          ? (0, t2.p)(t)
            ? es
            : tT.test(t)
            ? eh
            : ey
          : Array.isArray(t)
          ? ev
          : "object" == typeof t
          ? tT.test(t)
            ? eh
            : eg
          : es;
      }
      function ev(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => ef(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function eg(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = ef(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let ey = (t, e) => {
        let i = tI.createTransformer(e),
          n = tC(t),
          r = tC(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (ec.has(t) && !r.values.length) || (ec.has(e) && !n.values.length)
            ? (function (t, e) {
                return ec.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : ep(
                ev(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let a = e.types[s],
                        o = t.indexes[a][r[a]],
                        l = null !== (i = t.values[o]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[a]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : (tZ(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            es(t, e));
      };
      function eb(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? en(t, e, i)
          : ef(t)(t, e);
      }
      function ew(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return (n = i - t(s)), (r = e - s) ? (1e3 / r) * n : 0;
      }
      let eS = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function eA(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let eT = ["duration", "bounce"],
        eV = ["stiffness", "damping", "mass"];
      function ex(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function eM(t = eS.visualDuration, e = eS.bounce) {
        let i;
        let n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: r, restDelta: s } = n,
          a = n.keyframes[0],
          o = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: a },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: c,
            velocity: m,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: eS.velocity,
              stiffness: eS.stiffness,
              damping: eS.damping,
              mass: eS.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!ex(t, eV) && ex(t, eT)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  r =
                    2 * (0, th.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: eS.mass, stiffness: n, damping: r };
              } else {
                let i = (function ({
                  duration: t = eS.duration,
                  bounce: e = eS.bounce,
                  velocity: i = eS.velocity,
                  mass: n = eS.mass,
                }) {
                  let r, s;
                  tZ(
                    t <= N(eS.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let a = 1 - e;
                  (a = (0, th.q)(eS.minDamping, eS.maxDamping, a)),
                    (t = (0, th.q)(eS.minDuration, eS.maxDuration, R(t))),
                    a < 1
                      ? ((r = (e) => {
                          let n = e * a,
                            r = n * t;
                          return 0.001 - ((n - i) / eA(e, a)) * Math.exp(-r);
                        }),
                        (s = (e) => {
                          let n = e * a * t,
                            s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                            o = Math.exp(-n),
                            l = eA(Math.pow(e, 2), a);
                          return (
                            ((n * i + i - s) *
                              o *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let o = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(r, s, 5 / t);
                  if (((t = N(t)), isNaN(o)))
                    return {
                      stiffness: eS.stiffness,
                      damping: eS.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(o, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * a * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: eS.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -R(n.velocity || 0) }),
          v = m || 0,
          g = h / (2 * Math.sqrt(u * d)),
          y = o - a,
          w = R(Math.sqrt(u / d)),
          S = 5 > Math.abs(y);
        if (
          (r || (r = S ? eS.restSpeed.granular : eS.restSpeed.default),
          s || (s = S ? eS.restDelta.granular : eS.restDelta.default),
          g < 1)
        ) {
          let t = eA(w, g);
          i = (e) =>
            o -
            Math.exp(-g * w * e) *
              (((v + g * w * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          i = (t) => o - Math.exp(-w * t) * (y + (v + w * y) * t);
        else {
          let t = w * Math.sqrt(g * g - 1);
          i = (e) => {
            let i = Math.exp(-g * w * e),
              n = Math.min(t * e, 300);
            return (
              o -
              (i * ((v + g * w * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        let A = {
          calculatedDuration: (f && c) || null,
          next: (t) => {
            let e = i(t);
            if (f) l.done = t >= c;
            else {
              let n = 0;
              g < 1 && (n = 0 === t ? N(v) : ew(i, t, e));
              let a = Math.abs(n) <= r,
                u = Math.abs(o - e) <= s;
              l.done = a && u;
            }
            return (l.value = l.done ? o : e), l;
          },
          toString: () => {
            let t = Math.min(p(A), 2e4),
              e = b((e) => A.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return A;
      }
      function eP({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: a,
        min: o,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, p;
        let c = t[0],
          m = { done: !1, value: c },
          f = (t) => (void 0 !== o && t < o) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === o
              ? l
              : void 0 === l
              ? o
              : Math.abs(o - t) < Math.abs(l - t)
              ? o
              : l,
          g = i * e,
          y = c + g,
          b = void 0 === a ? y : a(y);
        b !== y && (g = b - c);
        let w = (t) => -g * Math.exp(-t / n),
          S = (t) => b + w(t),
          A = (t) => {
            let e = w(t),
              i = S(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? b : i);
          },
          T = (t) => {
            f(m.value) &&
              ((d = t),
              (p = eM({
                keyframes: [m.value, v(m.value)],
                velocity: ew(S, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          T(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (p || void 0 !== d || ((e = !0), A(t), T(t)),
              void 0 !== d && t >= d)
                ? p.next(t - d)
                : (e || A(t), m);
            },
          }
        );
      }
      let eC = Z(0.42, 0, 1, 1),
        eE = Z(0, 0, 0.58, 1),
        eF = Z(0.42, 0, 0.58, 1),
        ek = (t) => Array.isArray(t) && "number" != typeof t[0],
        eI = {
          linear: D.l,
          easeIn: eC,
          easeInOut: eF,
          easeOut: eE,
          circIn: ta,
          circInOut: tl,
          circOut: to,
          backIn: tn,
          backInOut: tr,
          backOut: ti,
          anticipate: ts,
        },
        eO = (t) => {
          if (f(t)) {
            t0(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return Z(e, i, n, r);
          }
          return "string" == typeof t
            ? (t0(void 0 !== eI[t], `Invalid easing type '${t}'`), eI[t])
            : t;
        };
      function eN({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = ek(n) ? n.map(eO) : eO(n),
          s = { done: !1, value: e[0] },
          a = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              (t0(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let a = t[0] === t[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || eb,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  e && (s = ep(Array.isArray(e) ? e[i] || D.l : e, s)),
                    n.push(s);
                }
                return n;
              })(e, n, r),
              l = o.length,
              u = (i) => {
                if (a && i < t[0]) return e[0];
                let n = 0;
                if (l > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                let r = y(t[n], t[n + 1], i);
                return o[n](r);
              };
            return i ? (e) => u((0, th.q)(t[0], t[s - 1], e)) : u;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = y(0, e, n);
                        t.push(en(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || eF).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      let eR = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => U.Gt.update(e, !0),
            stop: () => (0, U.WG)(e),
            now: () => (U.uv.isProcessing ? U.uv.timestamp : G.now()),
          };
        },
        eD = { decay: eP, inertia: eP, tween: eN, keyframes: eN, spring: eM },
        eB = (t) => t / 100;
      class eK extends ee {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || tJ;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: a,
              velocity: o = 0,
            } = this.options,
            l = c(n) ? n : eD[n] || eN;
          l !== eN &&
            "number" != typeof t[0] &&
            ((e = ep(eB, eb(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === a &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -o,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = p(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          ei.mainThread++,
            this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: a,
            keyframes: o,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: p,
            repeatType: c,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            g = this.speed >= 0 ? v < 0 : v > u;
          (this.currentTime = Math.max(v, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            b = r;
          if (p) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, p + 1)) % 2 &&
                ("reverse" === c
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === c && (b = s)),
              (y = (0, th.q)(0, 1, i) * h);
          }
          let w = g ? { done: !1, value: o[0] } : b.next(y);
          a && (w.value = a(w.value));
          let { done: S } = w;
          g ||
            null === l ||
            (S =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let A =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            A && void 0 !== n && (w.value = et(o, this.options, n)),
            f && f(w.value),
            A && this.finish(),
            w
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? R(t.calculatedDuration) : 0;
        }
        get time() {
          return R(this.currentTime);
        }
        set time(t) {
          (t = N(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = R(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = eR, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel(),
            ei.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let eL = new Set(["opacity", "clipPath", "filter", "transform"]);
      var e$ = i(7662);
      let eU = o(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        ej = { anticipate: ts, backInOut: tr, circInOut: tl };
      class eG extends ee {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new t8(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i;
          let {
            duration: n = 300,
            times: r,
            ease: s,
            type: a,
            motionValue: o,
            name: l,
            startTime: u,
          } = this.options;
          if (!o.owner || !o.owner.current) return !1;
          if (
            ("string" == typeof s && g() && s in ej && (s = ej[s]),
            c((i = this.options).type) ||
              "spring" === i.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && g()) ||
                  !e ||
                  ("string" == typeof e && (e in S || g())) ||
                  f(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(i.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: o,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new eK({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (n = h.duration),
              (r = h.times),
              (s = h.ease),
              (a = "keyframes");
          }
          let h = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: a = "loop",
              ease: o = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && g()
                  ? b(e, i)
                  : f(e)
                  ? w(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || S.easeOut)
                  : S[e];
            })(o, r);
            Array.isArray(h) && (u.easing = h), e$.Q.value && ei.waapi++;
            let d = t.animate(u, {
              delay: n,
              duration: r,
              easing: Array.isArray(h) ? "linear" : h,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === a ? "alternate" : "normal",
            });
            return (
              e$.Q.value &&
                d.finished.finally(() => {
                  ei.waapi--;
                }),
              d
            );
          })(o.owner.current, l, t, {
            ...this.options,
            duration: n,
            times: r,
            ease: s,
          });
          return (
            (h.startTime = null != u ? u : this.calcStartTime()),
            this.pendingTimeline
              ? (m(h, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (h.onfinish = () => {
                  let { onComplete: i } = this.options;
                  o.set(et(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: h,
              duration: n,
              times: r,
              type: a,
              ease: s,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return R(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return R(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = N(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return D.l;
            let { animation: i } = e;
            m(i, t);
          } else this.pendingTimeline = t;
          return D.l;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: a,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: o,
                element: l,
                ...u
              } = this.options,
              h = new eK({
                ...u,
                keyframes: i,
                duration: n,
                type: r,
                ease: s,
                times: a,
                isGenerator: !0,
              }),
              d = N(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: o } = this.options;
          o && o(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: a,
          } = t;
          if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
            return !1;
          let { onUpdate: o, transformTemplate: l } = e.owner.getProps();
          return (
            eU() &&
            i &&
            eL.has(i) &&
            !o &&
            !l &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== a
          );
        }
      }
      let eq = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        eW = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        e_ = { type: "keyframes", duration: 0.8 },
        ez = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        eH = (t, { keyframes: e }) =>
          e.length > 2
            ? e_
            : B.f.has(t)
            ? t.startsWith("scale")
              ? eW(e[1])
              : eq
            : ez,
        eY =
          (t, e, i, n = {}, r, s) =>
          (a) => {
            let o = d(n, t) || {},
              l = o.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= N(l);
            let p = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...o,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), o.onUpdate && o.onUpdate(t);
              },
              onComplete: () => {
                a(), o.onComplete && o.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(o) && (p = { ...p, ...eH(t, p) }),
              p.duration && (p.duration = N(p.duration)),
              p.repeatDelay && (p.repeatDelay = N(p.repeatDelay)),
              void 0 !== p.from && (p.keyframes[0] = p.from);
            let c = !1;
            if (
              ((!1 !== p.type && (0 !== p.duration || p.repeatDelay)) ||
                ((p.duration = 0), 0 !== p.delay || (c = !0)),
              (Q.current || $.W.skipAnimations) &&
                ((c = !0), (p.duration = 0), (p.delay = 0)),
              c && !s && void 0 !== e.get())
            ) {
              let t = et(p.keyframes, o);
              if (void 0 !== t)
                return (
                  U.Gt.update(() => {
                    p.onUpdate(t), p.onComplete();
                  }),
                  new h([])
                );
            }
            return !s && eG.supports(p) ? new eG(p) : new eK(p);
          };
      function eX(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: l,
          ...u
        } = e;
        n && (o = n);
        let h = [],
          p = r && t.animationState && t.animationState.getState()[r];
        for (let e in u) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = u[e];
          if (
            void 0 === r ||
            (p &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(p, e))
          )
            continue;
          let a = { delay: i, ...d(o || {}, e) },
            l = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[X.n];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, U.Gt);
              null !== t && ((a.startTime = t), (l = !0));
            }
          }
          !(function (t, e) {
            let i = t.getValue("willChange");
            (0, Y.S)(i) && i.add && i.add(e);
          })(t, e),
            n.start(
              eY(
                e,
                n,
                r,
                t.shouldReduceMotion && K.has(e) ? { type: !1 } : a,
                t,
                l
              )
            );
          let c = n.animation;
          c && h.push(c);
        }
        return (
          l &&
            Promise.all(h).then(() => {
              U.Gt.update(() => {
                l &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = a(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = (0, L.K)(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, H(i));
                    }
                  })(t, l);
              });
            }),
          h
        );
      }
      function eQ(t, e, i = {}) {
        var n;
        let r = a(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(eX(t, r, i)) : () => Promise.resolve(),
          l =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let a = [],
                      o = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => o - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(eJ)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            a.push(
                              eQ(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(a)
                    );
                  })(t, e, r + n, a, o, i);
                }
              : () => Promise.resolve(),
          { when: u } = s;
        if (!u) return Promise.all([o(), l(i.delay)]);
        {
          let [t, e] = "beforeChildren" === u ? [o, l] : [l, o];
          return t().then(() => e());
        }
      }
      function eJ(t, e) {
        return t.sortNodePosition(e);
      }
      var eZ = i(2876);
      function e0(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var e1 = i(839),
        e2 = i(6638);
      let e3 = e2._.length,
        e5 = [...e2.U].reverse(),
        e6 = e2.U.length;
      function e4(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function e8() {
        return {
          animate: e4(!0),
          whileInView: e4(),
          whileHover: e4(),
          whileTap: e4(),
          whileDrag: e4(),
          whileFocus: e4(),
          exit: e4(),
        };
      }
      class e9 {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class e7 extends e9 {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => eQ(t, e, i)));
                          else if ("string" == typeof e) n = eQ(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? a(t, e, i.custom) : e;
                            n = Promise.all(eX(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = e8(),
                  n = !0,
                  s = (e) => (i, n) => {
                    var r;
                    let s = a(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function o(o) {
                  let { props: l } = t,
                    u =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < e3; t++) {
                          let n = e2._[t],
                            r = e.props[n];
                          ((0, e1.w)(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    h = [],
                    d = new Set(),
                    p = {},
                    c = 1 / 0;
                  for (let e = 0; e < e6; e++) {
                    var m;
                    let a = e5[e],
                      f = i[a],
                      v = void 0 !== l[a] ? l[a] : u[a],
                      g = (0, e1.w)(v),
                      y = a === o ? f.isActive : null;
                    !1 === y && (c = e);
                    let b = v === u[a] && v !== l[a] && g;
                    if (
                      (b && n && t.manuallyAnimateOnMount && (b = !1),
                      (f.protectedKeys = { ...p }),
                      (!f.isActive && null === y) ||
                        (!v && !f.prevProp) ||
                        (0, r.N)(v) ||
                        "boolean" == typeof v)
                    )
                      continue;
                    let w =
                        ((m = f.prevProp),
                        "string" == typeof v
                          ? v !== m
                          : !!Array.isArray(v) && !e0(v, m)),
                      S =
                        w || (a === o && f.isActive && !b && g) || (e > c && g),
                      A = !1,
                      T = Array.isArray(v) ? v : [v],
                      V = T.reduce(s(a), {});
                    !1 === y && (V = {});
                    let { prevResolvedValues: x = {} } = f,
                      M = { ...x, ...V },
                      P = (e) => {
                        (S = !0),
                          d.has(e) && ((A = !0), d.delete(e)),
                          (f.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = V[t],
                        i = x[t];
                      if (!p.hasOwnProperty(t))
                        ((0, eZ.p)(e) && (0, eZ.p)(i) ? e0(e, i) : e === i)
                          ? void 0 !== e && d.has(t)
                            ? P(t)
                            : (f.protectedKeys[t] = !0)
                          : null != e
                          ? P(t)
                          : d.add(t);
                    }
                    (f.prevProp = v),
                      (f.prevResolvedValues = V),
                      f.isActive && (p = { ...p, ...V }),
                      n && t.blockInitialAnimation && (S = !1);
                    let C = !(b && w) || A;
                    S &&
                      C &&
                      h.push(
                        ...T.map((t) => ({
                          animation: t,
                          options: { type: a },
                        }))
                      );
                  }
                  if (d.size) {
                    let e = {};
                    if ("boolean" != typeof l.initial) {
                      let i = a(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    d.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      h.push({ animation: e });
                  }
                  let f = !!h.length;
                  return (
                    n &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (f = !1),
                    (n = !1),
                    f ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let s = o(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = e8()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          (0, r.N)(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let it = 0;
      class ie extends e9 {
        constructor() {
          super(...arguments), (this.id = it++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      function ii(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      function ir(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && U.Gt.postRender(() => r(e, ii(e)));
      }
      class is extends e9 {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = T(t, i),
                a = (t) => {
                  if (!V(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ("function" != typeof n || !i) return;
                  let s = (t) => {
                    V(t) && (n(t), i.removeEventListener("pointerleave", s));
                  };
                  i.addEventListener("pointerleave", s, r);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", a, r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                ir(this.node, e, "Start"), (t) => ir(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      function ia(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      class io extends e9 {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = ep(
            ia(this.node.current, "focus", () => this.onFocus()),
            ia(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function il(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && U.Gt.postRender(() => r(e, ii(e)));
      }
      class iu extends e9 {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = T(t, i),
                a = (t) => {
                  let i = t.currentTarget;
                  if (!i || !O(t) || E.has(i)) return;
                  E.add(i), x(t, "set");
                  let n = e(i, t),
                    s = (t, e) => {
                      i.removeEventListener("pointerup", a),
                        i.removeEventListener("pointercancel", o),
                        x(t, "release"),
                        O(t) &&
                          E.has(i) &&
                          (E.delete(i),
                          "function" == typeof n && n(t, { success: e }));
                    },
                    a = (t) => {
                      var e;
                      t.isTrusted &&
                      ((e =
                        i instanceof Element
                          ? i.getBoundingClientRect()
                          : {
                              left: 0,
                              top: 0,
                              right: window.innerWidth,
                              bottom: window.innerHeight,
                            }),
                      t.clientX < e.left ||
                        t.clientX > e.right ||
                        t.clientY < e.top ||
                        t.clientY > e.bottom)
                        ? s(t, !1)
                        : s(t, !(i instanceof Element) || M(i, t.target));
                    },
                    o = (t) => {
                      s(t, !1);
                    };
                  i.addEventListener("pointerup", a, r),
                    i.addEventListener("pointercancel", o, r),
                    i.addEventListener("lostpointercapture", o, r);
                };
              return (
                n.forEach((t) => {
                  t = i.useGlobalTarget ? window : t;
                  let e = !1;
                  if (t instanceof HTMLElement) {
                    var n;
                    (e = !0),
                      (n = t),
                      C.has(n.tagName) ||
                        -1 !== n.tabIndex ||
                        null !== t.getAttribute("tabindex") ||
                        (t.tabIndex = 0);
                  }
                  t.addEventListener("pointerdown", a, r),
                    e && t.addEventListener("focus", (t) => I(t, r), r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                il(this.node, e, "Start"),
                (t, { success: e }) => il(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let ih = new WeakMap(),
        id = new WeakMap(),
        ip = (t) => {
          let e = ih.get(t.target);
          e && e(t);
        },
        ic = (t) => {
          t.forEach(ip);
        },
        im = { some: 0, all: 1 };
      class iv extends e9 {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : im[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              id.has(i) || id.set(i, {});
              let n = id.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(ic, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              ih.set(t, i),
              n.observe(t),
              () => {
                ih.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      var ig = i(451),
        iy = i(2472);
      let ib = () => ({ min: 0, max: 0 }),
        iw = () => ({ x: ib(), y: ib() });
      var iS = i(5094);
      let iA = { current: null },
        iT = { current: !1 },
        iV = [...t6, tT, tI],
        ix = (t) => iV.find(t5(t)),
        iM = new WeakMap();
      var iP = i(3083);
      let iC = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class iE {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          a = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tJ),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = G.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                U.Gt.render(this.render, !1, !0));
            });
          let { latestValues: o, renderState: l, onUpdate: u } = s;
          (this.onUpdate = u),
            (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = (0, iP.e)(e)),
            (this.isVariantNode = (0, iP.O)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== o[t] && (0, Y.S)(e) && e.set(o[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            iM.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            iT.current ||
              (function () {
                if (((iT.current = !0), iS.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (iA.current = t.matches);
                    t.addListener(e), e();
                  } else iA.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || iA.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, U.WG)(this.notifyUpdate),
          (0, U.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = B.f.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && U.Gt.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in iy.B) {
            let e = iy.B[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : iw();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < iC.length; e++) {
            let i = iC[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if ((0, Y.S)(r)) t.addValue(n, r);
              else if ((0, Y.S)(s)) t.addValue(n, H(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, H(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = H(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (t1(n) || tu(n))
                ? (n = parseFloat(n))
                : !ix(n) && tI.test(e) && (n = tL(t, e)),
              this.setBaseTarget(t, (0, Y.S)(n) ? n.get() : n)),
            (0, Y.S)(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = (0, s.a)(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || (0, Y.S)(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new q()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class iF extends iE {
        constructor() {
          super(...arguments), (this.KeyframeResolver = t8);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, Y.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      var ik = i(9336),
        iI = i(6302),
        iO = i(4192);
      class iN extends iF {
        constructor() {
          super(...arguments),
            (this.type = "html"),
            (this.renderInstance = iI.e);
        }
        readValueFromInstance(t, e) {
          if (B.f.has(e)) {
            let t = tK(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = ((0, t2.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (function ({ top: t, left: e, right: i, bottom: n }) {
            return { x: { min: e, max: i }, y: { min: t, max: n } };
          })(
            (function (t, e) {
              if (!e) return t;
              let i = e({ x: t.left, y: t.top }),
                n = e({ x: t.right, y: t.bottom });
              return { top: i.y, left: i.x, bottom: n.y, right: n.x };
            })(t.getBoundingClientRect(), e)
          );
        }
        build(t, e, i) {
          (0, ik.O)(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, iO.x)(t, e, i);
        }
      }
      var iR = i(3116),
        iD = i(1352),
        iB = i(1635),
        iK = i(6925),
        iL = i(2667),
        i$ = i(3723),
        iU = i(5777);
      class ij extends iF {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = iw),
            (this.updateDimensions = () => {
              this.current &&
                !this.renderState.dimensions &&
                (0, iL.H)(this.current, this.renderState);
            });
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (B.f.has(e)) {
            let t = tK(e);
            return (t && t.default) || 0;
          }
          return (e = iB.e.has(e) ? e : (0, iR.I)(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return (0, iU.x)(t, e, i);
        }
        onBindTransform() {
          this.current &&
            !this.renderState.dimensions &&
            U.Gt.postRender(this.updateDimensions);
        }
        build(t, e, i) {
          (0, iD.B)(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          (0, i$.d)(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = (0, iK.n)(t.tagName)), super.mount(t);
        }
      }
      var iG = i(8338),
        iq = {
          renderer: (t, e) =>
            (0, iG.Q)(t)
              ? new ij(e)
              : new iN(e, { allowProjection: t !== ig.Fragment }),
          animation: { Feature: e7 },
          exit: { Feature: ie },
          inView: { Feature: iv },
          tap: { Feature: iu },
          focus: { Feature: io },
          hover: { Feature: is },
        };
    },
  },
]);
