var Kf = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
import * as C from "react";
import de, { useState as lt, useEffect as mt, version as Wf, isValidElement as Vf, useContext as qt, createContext as ks, useRef as ye, useLayoutEffect as Uf, forwardRef as mu, useMemo as qf, Children as Gf, createRef as Yf } from "react";
import * as Xf from "react-dom";
import oo, { flushSync as fc } from "react-dom";
var ox = Kf((ux, io) => {
  function gu(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
  }
  function Zf(r) {
    if (r.__esModule) return r;
    var e = r.default;
    if (typeof e == "function") {
      var t = function n() {
        return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
      };
      t.prototype = e.prototype;
    } else t = {};
    return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(r).forEach(function(n) {
      var i = Object.getOwnPropertyDescriptor(r, n);
      Object.defineProperty(t, n, i.get ? i : {
        enumerable: !0,
        get: function() {
          return r[n];
        }
      });
    }), t;
  }
  var za = { exports: {} }, Bn = {};
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hc;
  function Jf() {
    if (hc) return Bn;
    hc = 1;
    var r = de, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
    function s(a, c, l) {
      var u, d = {}, f = null, h = null;
      l !== void 0 && (f = "" + l), c.key !== void 0 && (f = "" + c.key), c.ref !== void 0 && (h = c.ref);
      for (u in c) n.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
      if (a && a.defaultProps) for (u in c = a.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
      return { $$typeof: e, type: a, key: f, ref: h, props: d, _owner: i.current };
    }
    return Bn.Fragment = t, Bn.jsx = s, Bn.jsxs = s, Bn;
  }
  var jn = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var pc;
  function Qf() {
    return pc || (pc = 1, process.env.NODE_ENV !== "production" && function() {
      var r = de, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
      function p(w) {
        if (w === null || typeof w != "object")
          return null;
        var K = m && w[m] || w[g];
        return typeof K == "function" ? K : null;
      }
      var v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function y(w) {
        {
          for (var K = arguments.length, X = new Array(K > 1 ? K - 1 : 0), le = 1; le < K; le++)
            X[le - 1] = arguments[le];
          x("error", w, X);
        }
      }
      function x(w, K, X) {
        {
          var le = v.ReactDebugCurrentFrame, be = le.getStackAddendum();
          be !== "" && (K += "%s", X = X.concat([be]));
          var he = X.map(function(fe) {
            return String(fe);
          });
          he.unshift("Warning: " + K), Function.prototype.apply.call(console[w], console, he);
        }
      }
      var E = !1, b = !1, _ = !1, S = !1, M = !1, A;
      A = Symbol.for("react.module.reference");
      function N(w) {
        return !!(typeof w == "string" || typeof w == "function" || w === n || w === o || M || w === i || w === l || w === u || S || w === h || E || b || _ || typeof w == "object" && w !== null && (w.$$typeof === f || w.$$typeof === d || w.$$typeof === s || w.$$typeof === a || w.$$typeof === c || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        w.$$typeof === A || w.getModuleId !== void 0));
      }
      function $(w, K, X) {
        var le = w.displayName;
        if (le)
          return le;
        var be = K.displayName || K.name || "";
        return be !== "" ? X + "(" + be + ")" : X;
      }
      function F(w) {
        return w.displayName || "Context";
      }
      function L(w) {
        if (w == null)
          return null;
        if (typeof w.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof w == "function")
          return w.displayName || w.name || null;
        if (typeof w == "string")
          return w;
        switch (w) {
          case n:
            return "Fragment";
          case t:
            return "Portal";
          case o:
            return "Profiler";
          case i:
            return "StrictMode";
          case l:
            return "Suspense";
          case u:
            return "SuspenseList";
        }
        if (typeof w == "object")
          switch (w.$$typeof) {
            case a:
              var K = w;
              return F(K) + ".Consumer";
            case s:
              var X = w;
              return F(X._context) + ".Provider";
            case c:
              return $(w, w.render, "ForwardRef");
            case d:
              var le = w.displayName || null;
              return le !== null ? le : L(w.type) || "Memo";
            case f: {
              var be = w, he = be._payload, fe = be._init;
              try {
                return L(fe(he));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var D = Object.assign, U = 0, P, R, k, z, T, O, B;
      function j() {
      }
      j.__reactDisabledLog = !0;
      function V() {
        {
          if (U === 0) {
            P = console.log, R = console.info, k = console.warn, z = console.error, T = console.group, O = console.groupCollapsed, B = console.groupEnd;
            var w = {
              configurable: !0,
              enumerable: !0,
              value: j,
              writable: !0
            };
            Object.defineProperties(console, {
              info: w,
              log: w,
              warn: w,
              error: w,
              group: w,
              groupCollapsed: w,
              groupEnd: w
            });
          }
          U++;
        }
      }
      function ee() {
        {
          if (U--, U === 0) {
            var w = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: D({}, w, {
                value: P
              }),
              info: D({}, w, {
                value: R
              }),
              warn: D({}, w, {
                value: k
              }),
              error: D({}, w, {
                value: z
              }),
              group: D({}, w, {
                value: T
              }),
              groupCollapsed: D({}, w, {
                value: O
              }),
              groupEnd: D({}, w, {
                value: B
              })
            });
          }
          U < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Q = v.ReactCurrentDispatcher, q;
      function re(w, K, X) {
        {
          if (q === void 0)
            try {
              throw Error();
            } catch (be) {
              var le = be.stack.trim().match(/\n( *(at )?)/);
              q = le && le[1] || "";
            }
          return `
` + q + w;
        }
      }
      var ie = !1, te;
      {
        var ae = typeof WeakMap == "function" ? WeakMap : Map;
        te = new ae();
      }
      function W(w, K) {
        if (!w || ie)
          return "";
        {
          var X = te.get(w);
          if (X !== void 0)
            return X;
        }
        var le;
        ie = !0;
        var be = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var he;
        he = Q.current, Q.current = null, V();
        try {
          if (K) {
            var fe = function() {
              throw Error();
            };
            if (Object.defineProperty(fe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(fe, []);
              } catch (Ke) {
                le = Ke;
              }
              Reflect.construct(w, [], fe);
            } else {
              try {
                fe.call();
              } catch (Ke) {
                le = Ke;
              }
              w.call(fe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Ke) {
              le = Ke;
            }
            w();
          }
        } catch (Ke) {
          if (Ke && le && typeof Ke.stack == "string") {
            for (var pe = Ke.stack.split(`
`), ne = le.stack.split(`
`), J = pe.length - 1, ce = ne.length - 1; J >= 1 && ce >= 0 && pe[J] !== ne[ce]; )
              ce--;
            for (; J >= 1 && ce >= 0; J--, ce--)
              if (pe[J] !== ne[ce]) {
                if (J !== 1 || ce !== 1)
                  do
                    if (J--, ce--, ce < 0 || pe[J] !== ne[ce]) {
                      var Ce = `
` + pe[J].replace(" at new ", " at ");
                      return w.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", w.displayName)), typeof w == "function" && te.set(w, Ce), Ce;
                    }
                  while (J >= 1 && ce >= 0);
                break;
              }
          }
        } finally {
          ie = !1, Q.current = he, ee(), Error.prepareStackTrace = be;
        }
        var st = w ? w.displayName || w.name : "", rr = st ? re(st) : "";
        return typeof w == "function" && te.set(w, rr), rr;
      }
      function Oe(w, K, X) {
        return W(w, !1);
      }
      function Z(w) {
        var K = w.prototype;
        return !!(K && K.isReactComponent);
      }
      function Ae(w, K, X) {
        if (w == null)
          return "";
        if (typeof w == "function")
          return W(w, Z(w));
        if (typeof w == "string")
          return re(w);
        switch (w) {
          case l:
            return re("Suspense");
          case u:
            return re("SuspenseList");
        }
        if (typeof w == "object")
          switch (w.$$typeof) {
            case c:
              return Oe(w.render);
            case d:
              return Ae(w.type, K, X);
            case f: {
              var le = w, be = le._payload, he = le._init;
              try {
                return Ae(he(be), K, X);
              } catch {
              }
            }
          }
        return "";
      }
      var Ee = Object.prototype.hasOwnProperty, Be = {}, Xe = v.ReactDebugCurrentFrame;
      function je(w) {
        if (w) {
          var K = w._owner, X = Ae(w.type, w._source, K ? K.type : null);
          Xe.setExtraStackFrame(X);
        } else
          Xe.setExtraStackFrame(null);
      }
      function ue(w, K, X, le, be) {
        {
          var he = Function.call.bind(Ee);
          for (var fe in w)
            if (he(w, fe)) {
              var pe = void 0;
              try {
                if (typeof w[fe] != "function") {
                  var ne = Error((le || "React class") + ": " + X + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof w[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ne.name = "Invariant Violation", ne;
                }
                pe = w[fe](K, fe, le, X, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (J) {
                pe = J;
              }
              pe && !(pe instanceof Error) && (je(be), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", X, fe, typeof pe), je(null)), pe instanceof Error && !(pe.message in Be) && (Be[pe.message] = !0, je(be), y("Failed %s type: %s", X, pe.message), je(null));
            }
        }
      }
      var me = Array.isArray;
      function xe(w) {
        return me(w);
      }
      function De(w) {
        {
          var K = typeof Symbol == "function" && Symbol.toStringTag, X = K && w[Symbol.toStringTag] || w.constructor.name || "Object";
          return X;
        }
      }
      function ge(w) {
        try {
          return Pe(w), !1;
        } catch {
          return !0;
        }
      }
      function Pe(w) {
        return "" + w;
      }
      function ke(w) {
        if (ge(w))
          return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", De(w)), Pe(w);
      }
      var He = v.ReactCurrentOwner, at = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, At, $r, zr;
      zr = {};
      function Zr(w) {
        if (Ee.call(w, "ref")) {
          var K = Object.getOwnPropertyDescriptor(w, "ref").get;
          if (K && K.isReactWarning)
            return !1;
        }
        return w.ref !== void 0;
      }
      function yt(w) {
        if (Ee.call(w, "key")) {
          var K = Object.getOwnPropertyDescriptor(w, "key").get;
          if (K && K.isReactWarning)
            return !1;
        }
        return w.key !== void 0;
      }
      function In(w, K) {
        if (typeof w.ref == "string" && He.current && K && He.current.stateNode !== K) {
          var X = L(He.current.type);
          zr[X] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(He.current.type), w.ref), zr[X] = !0);
        }
      }
      function $n(w, K) {
        {
          var X = function() {
            At || (At = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
          };
          X.isReactWarning = !0, Object.defineProperty(w, "key", {
            get: X,
            configurable: !0
          });
        }
      }
      function Jr(w, K) {
        {
          var X = function() {
            $r || ($r = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", K));
          };
          X.isReactWarning = !0, Object.defineProperty(w, "ref", {
            get: X,
            configurable: !0
          });
        }
      }
      var Qr = function(w, K, X, le, be, he, fe) {
        var pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: e,
          // Built-in properties that belong on the element
          type: w,
          key: K,
          ref: X,
          props: fe,
          // Record the component responsible for creating this element.
          _owner: he
        };
        return pe._store = {}, Object.defineProperty(pe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(pe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: le
        }), Object.defineProperty(pe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: be
        }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
      };
      function zn(w, K, X, le, be) {
        {
          var he, fe = {}, pe = null, ne = null;
          X !== void 0 && (ke(X), pe = "" + X), yt(K) && (ke(K.key), pe = "" + K.key), Zr(K) && (ne = K.ref, In(K, be));
          for (he in K)
            Ee.call(K, he) && !at.hasOwnProperty(he) && (fe[he] = K[he]);
          if (w && w.defaultProps) {
            var J = w.defaultProps;
            for (he in J)
              fe[he] === void 0 && (fe[he] = J[he]);
          }
          if (pe || ne) {
            var ce = typeof w == "function" ? w.displayName || w.name || "Unknown" : w;
            pe && $n(fe, ce), ne && Jr(fe, ce);
          }
          return Qr(w, pe, ne, be, le, He.current, fe);
        }
      }
      var Lr = v.ReactCurrentOwner, Qt = v.ReactDebugCurrentFrame;
      function rt(w) {
        if (w) {
          var K = w._owner, X = Ae(w.type, w._source, K ? K.type : null);
          Qt.setExtraStackFrame(X);
        } else
          Qt.setExtraStackFrame(null);
      }
      var Pt;
      Pt = !1;
      function Nt(w) {
        return typeof w == "object" && w !== null && w.$$typeof === e;
      }
      function er() {
        {
          if (Lr.current) {
            var w = L(Lr.current.type);
            if (w)
              return `

Check the render method of \`` + w + "`.";
          }
          return "";
        }
      }
      function Dt(w) {
        return "";
      }
      var _t = {};
      function Ln(w) {
        {
          var K = er();
          if (!K) {
            var X = typeof w == "string" ? w : w.displayName || w.name;
            X && (K = `

Check the top-level render call using <` + X + ">.");
          }
          return K;
        }
      }
      function Ie(w, K) {
        {
          if (!w._store || w._store.validated || w.key != null)
            return;
          w._store.validated = !0;
          var X = Ln(K);
          if (_t[X])
            return;
          _t[X] = !0;
          var le = "";
          w && w._owner && w._owner !== Lr.current && (le = " It was passed a child from " + L(w._owner.type) + "."), rt(w), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', X, le), rt(null);
        }
      }
      function tr(w, K) {
        {
          if (typeof w != "object")
            return;
          if (xe(w))
            for (var X = 0; X < w.length; X++) {
              var le = w[X];
              Nt(le) && Ie(le, K);
            }
          else if (Nt(w))
            w._store && (w._store.validated = !0);
          else if (w) {
            var be = p(w);
            if (typeof be == "function" && be !== w.entries)
              for (var he = be.call(w), fe; !(fe = he.next()).done; )
                Nt(fe.value) && Ie(fe.value, K);
          }
        }
      }
      function vr(w) {
        {
          var K = w.type;
          if (K == null || typeof K == "string")
            return;
          var X;
          if (typeof K == "function")
            X = K.propTypes;
          else if (typeof K == "object" && (K.$$typeof === c || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          K.$$typeof === d))
            X = K.propTypes;
          else
            return;
          if (X) {
            var le = L(K);
            ue(X, w.props, "prop", le, w);
          } else if (K.PropTypes !== void 0 && !Pt) {
            Pt = !0;
            var be = L(K);
            y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", be || "Unknown");
          }
          typeof K.getDefaultProps == "function" && !K.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ne(w) {
        {
          for (var K = Object.keys(w.props), X = 0; X < K.length; X++) {
            var le = K[X];
            if (le !== "children" && le !== "key") {
              rt(w), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), rt(null);
              break;
            }
          }
          w.ref !== null && (rt(w), y("Invalid attribute `ref` supplied to `React.Fragment`."), rt(null));
        }
      }
      var Le = {};
      function Qe(w, K, X, le, be, he) {
        {
          var fe = N(w);
          if (!fe) {
            var pe = "";
            (w === void 0 || typeof w == "object" && w !== null && Object.keys(w).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var ne = Dt();
            ne ? pe += ne : pe += er();
            var J;
            w === null ? J = "null" : xe(w) ? J = "array" : w !== void 0 && w.$$typeof === e ? (J = "<" + (L(w.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : J = typeof w, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, pe);
          }
          var ce = zn(w, K, X, be, he);
          if (ce == null)
            return ce;
          if (fe) {
            var Ce = K.children;
            if (Ce !== void 0)
              if (le)
                if (xe(Ce)) {
                  for (var st = 0; st < Ce.length; st++)
                    tr(Ce[st], w);
                  Object.freeze && Object.freeze(Ce);
                } else
                  y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                tr(Ce, w);
          }
          if (Ee.call(K, "key")) {
            var rr = L(w), Ke = Object.keys(K).filter(function(mi) {
              return mi !== "key";
            }), Fn = Ke.length > 0 ? "{key: someKey, " + Ke.join(": ..., ") + ": ...}" : "{key: someKey}";
            if (!Le[rr + Fn]) {
              var zo = Ke.length > 0 ? "{" + Ke.join(": ..., ") + ": ...}" : "{}";
              y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fn, rr, zo, rr), Le[rr + Fn] = !0;
            }
          }
          return w === n ? Ne(ce) : vr(ce), ce;
        }
      }
      function ut(w, K, X) {
        return Qe(w, K, X, !0);
      }
      function yr(w, K, X) {
        return Qe(w, K, X, !1);
      }
      var en = yr, br = ut;
      jn.Fragment = n, jn.jsx = en, jn.jsxs = br;
    }()), jn;
  }
  process.env.NODE_ENV === "production" ? za.exports = Jf() : za.exports = Qf();
  var ve = za.exports;
  /**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
  const vu = "166", La = 0, eh = 1, th = 2, mc = 1, gc = 100, vc = 204, yc = 205, bc = 3, yu = 0, bu = 300, ao = 1e3, gi = 1001, xc = 1002, rh = 1006, nh = 1008, ih = 1009, oh = 1015, ah = 1023, sh = 0, xu = "", Or = "srgb", Is = "srgb-linear", ch = "display-p3", Su = "display-p3-linear", Fa = "linear", Sc = "srgb", Ec = "rec709", Cc = "p3", tn = 7680, wc = 519, Mc = 35044, vi = 2e3, _c = 2001;
  class yo {
    addEventListener(e, t) {
      this._listeners === void 0 && (this._listeners = {});
      const n = this._listeners;
      n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
    }
    hasEventListener(e, t) {
      if (this._listeners === void 0) return !1;
      const n = this._listeners;
      return n[e] !== void 0 && n[e].indexOf(t) !== -1;
    }
    removeEventListener(e, t) {
      if (this._listeners === void 0) return;
      const i = this._listeners[e];
      if (i !== void 0) {
        const o = i.indexOf(t);
        o !== -1 && i.splice(o, 1);
      }
    }
    dispatchEvent(e) {
      if (this._listeners === void 0) return;
      const n = this._listeners[e.type];
      if (n !== void 0) {
        e.target = this;
        const i = n.slice(0);
        for (let o = 0, s = i.length; o < s; o++)
          i[o].call(this, e);
        e.target = null;
      }
    }
  }
  const nt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  function ui() {
    const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
    return (nt[r & 255] + nt[r >> 8 & 255] + nt[r >> 16 & 255] + nt[r >> 24 & 255] + "-" + nt[e & 255] + nt[e >> 8 & 255] + "-" + nt[e >> 16 & 15 | 64] + nt[e >> 24 & 255] + "-" + nt[t & 63 | 128] + nt[t >> 8 & 255] + "-" + nt[t >> 16 & 255] + nt[t >> 24 & 255] + nt[n & 255] + nt[n >> 8 & 255] + nt[n >> 16 & 255] + nt[n >> 24 & 255]).toLowerCase();
  }
  function ht(r, e, t) {
    return Math.max(e, Math.min(t, r));
  }
  function lh(r, e) {
    return (r % e + e) % e;
  }
  function Fo(r, e, t) {
    return (1 - t) * r + t * e;
  }
  function Hn(r, e) {
    switch (e.constructor) {
      case Float32Array:
        return r;
      case Uint32Array:
        return r / 4294967295;
      case Uint16Array:
        return r / 65535;
      case Uint8Array:
        return r / 255;
      case Int32Array:
        return Math.max(r / 2147483647, -1);
      case Int16Array:
        return Math.max(r / 32767, -1);
      case Int8Array:
        return Math.max(r / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function dt(r, e) {
    switch (e.constructor) {
      case Float32Array:
        return r;
      case Uint32Array:
        return Math.round(r * 4294967295);
      case Uint16Array:
        return Math.round(r * 65535);
      case Uint8Array:
        return Math.round(r * 255);
      case Int32Array:
        return Math.round(r * 2147483647);
      case Int16Array:
        return Math.round(r * 32767);
      case Int8Array:
        return Math.round(r * 127);
      default:
        throw new Error("Invalid component type.");
    }
  }
  class et {
    constructor(e = 0, t = 0) {
      et.prototype.isVector2 = !0, this.x = e, this.y = t;
    }
    get width() {
      return this.x;
    }
    set width(e) {
      this.x = e;
    }
    get height() {
      return this.y;
    }
    set height(e) {
      this.y = e;
    }
    set(e, t) {
      return this.x = e, this.y = t, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this;
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    applyMatrix3(e) {
      const t = this.x, n = this.y, i = e.elements;
      return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y;
    }
    cross(e) {
      return this.x * e.y - this.y * e.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    angle() {
      return Math.atan2(-this.y, -this.x) + Math.PI;
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(ht(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x, n = this.y - e.y;
      return t * t + n * n;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this;
    }
    rotateAround(e, t) {
      const n = Math.cos(t), i = Math.sin(t), o = this.x - e.x, s = this.y - e.y;
      return this.x = o * n - s * i + e.x, this.y = o * i + s * n + e.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  }
  class kr {
    constructor(e, t, n, i, o, s, a, c, l) {
      kr.prototype.isMatrix3 = !0, this.elements = [
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ], e !== void 0 && this.set(e, t, n, i, o, s, a, c, l);
    }
    set(e, t, n, i, o, s, a, c, l) {
      const u = this.elements;
      return u[0] = e, u[1] = i, u[2] = a, u[3] = t, u[4] = o, u[5] = c, u[6] = n, u[7] = s, u[8] = l, this;
    }
    identity() {
      return this.set(
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ), this;
    }
    copy(e) {
      const t = this.elements, n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
    }
    extractBasis(e, t, n) {
      return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(e) {
      const t = e.elements;
      return this.set(
        t[0],
        t[4],
        t[8],
        t[1],
        t[5],
        t[9],
        t[2],
        t[6],
        t[10]
      ), this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, i = t.elements, o = this.elements, s = n[0], a = n[3], c = n[6], l = n[1], u = n[4], d = n[7], f = n[2], h = n[5], m = n[8], g = i[0], p = i[3], v = i[6], y = i[1], x = i[4], E = i[7], b = i[2], _ = i[5], S = i[8];
      return o[0] = s * g + a * y + c * b, o[3] = s * p + a * x + c * _, o[6] = s * v + a * E + c * S, o[1] = l * g + u * y + d * b, o[4] = l * p + u * x + d * _, o[7] = l * v + u * E + d * S, o[2] = f * g + h * y + m * b, o[5] = f * p + h * x + m * _, o[8] = f * v + h * E + m * S, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], o = e[3], s = e[4], a = e[5], c = e[6], l = e[7], u = e[8];
      return t * s * u - t * a * l - n * o * u + n * a * c + i * o * l - i * s * c;
    }
    invert() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], o = e[3], s = e[4], a = e[5], c = e[6], l = e[7], u = e[8], d = u * s - a * l, f = a * c - u * o, h = l * o - s * c, m = t * d + n * f + i * h;
      if (m === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const g = 1 / m;
      return e[0] = d * g, e[1] = (i * l - u * n) * g, e[2] = (a * n - i * s) * g, e[3] = f * g, e[4] = (u * t - i * c) * g, e[5] = (i * o - a * t) * g, e[6] = h * g, e[7] = (n * c - l * t) * g, e[8] = (s * t - n * o) * g, this;
    }
    transpose() {
      let e;
      const t = this.elements;
      return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
    }
    getNormalMatrix(e) {
      return this.setFromMatrix4(e).invert().transpose();
    }
    transposeIntoArray(e) {
      const t = this.elements;
      return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
    }
    setUvTransform(e, t, n, i, o, s, a) {
      const c = Math.cos(o), l = Math.sin(o);
      return this.set(
        n * c,
        n * l,
        -n * (c * s + l * a) + s + e,
        -i * l,
        i * c,
        -i * (-l * s + c * a) + a + t,
        0,
        0,
        1
      ), this;
    }
    //
    scale(e, t) {
      return this.premultiply(Bo.makeScale(e, t)), this;
    }
    rotate(e) {
      return this.premultiply(Bo.makeRotation(-e)), this;
    }
    translate(e, t) {
      return this.premultiply(Bo.makeTranslation(e, t)), this;
    }
    // for 2D Transforms
    makeTranslation(e, t) {
      return e.isVector2 ? this.set(
        1,
        0,
        e.x,
        0,
        1,
        e.y,
        0,
        0,
        1
      ) : this.set(
        1,
        0,
        e,
        0,
        1,
        t,
        0,
        0,
        1
      ), this;
    }
    makeRotation(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(
        t,
        -n,
        0,
        n,
        t,
        0,
        0,
        0,
        1
      ), this;
    }
    makeScale(e, t) {
      return this.set(
        e,
        0,
        0,
        0,
        t,
        0,
        0,
        0,
        1
      ), this;
    }
    //
    equals(e) {
      const t = this.elements, n = e.elements;
      for (let i = 0; i < 9; i++)
        if (t[i] !== n[i]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 9; n++)
        this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  }
  const Bo = /* @__PURE__ */ new kr();
  function uh(r) {
    for (let e = r.length - 1; e >= 0; --e)
      if (r[e] >= 65535) return !0;
    return !1;
  }
  function Ba(r) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", r);
  }
  const Tc = {};
  function dh(r) {
    r in Tc || (Tc[r] = !0, console.warn(r));
  }
  const Oc = /* @__PURE__ */ new kr().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ), Rc = /* @__PURE__ */ new kr().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ), yi = {
    [Is]: {
      transfer: Fa,
      primaries: Ec,
      toReference: (r) => r,
      fromReference: (r) => r
    },
    [Or]: {
      transfer: Sc,
      primaries: Ec,
      toReference: (r) => r.convertSRGBToLinear(),
      fromReference: (r) => r.convertLinearToSRGB()
    },
    [Su]: {
      transfer: Fa,
      primaries: Cc,
      toReference: (r) => r.applyMatrix3(Rc),
      fromReference: (r) => r.applyMatrix3(Oc)
    },
    [ch]: {
      transfer: Sc,
      primaries: Cc,
      toReference: (r) => r.convertSRGBToLinear().applyMatrix3(Rc),
      fromReference: (r) => r.applyMatrix3(Oc).convertLinearToSRGB()
    }
  }, fh = /* @__PURE__ */ new Set([Is, Su]), kt = {
    enabled: !0,
    _workingColorSpace: Is,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(r) {
      if (!fh.has(r))
        throw new Error(`Unsupported working color space, "${r}".`);
      this._workingColorSpace = r;
    },
    convert: function(r, e, t) {
      if (this.enabled === !1 || e === t || !e || !t)
        return r;
      const n = yi[e].toReference, i = yi[t].fromReference;
      return i(n(r));
    },
    fromWorkingColorSpace: function(r, e) {
      return this.convert(r, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function(r, e) {
      return this.convert(r, e, this._workingColorSpace);
    },
    getPrimaries: function(r) {
      return yi[r].primaries;
    },
    getTransfer: function(r) {
      return r === xu ? Fa : yi[r].transfer;
    }
  };
  function Sn(r) {
    return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
  }
  function jo(r) {
    return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
  }
  let rn;
  class hh {
    static getDataURL(e) {
      if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
        return e.src;
      let t;
      if (e instanceof HTMLCanvasElement)
        t = e;
      else {
        rn === void 0 && (rn = Ba("canvas")), rn.width = e.width, rn.height = e.height;
        const n = rn.getContext("2d");
        e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = rn;
      }
      return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
    }
    static sRGBToLinear(e) {
      if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
        const t = Ba("canvas");
        t.width = e.width, t.height = e.height;
        const n = t.getContext("2d");
        n.drawImage(e, 0, 0, e.width, e.height);
        const i = n.getImageData(0, 0, e.width, e.height), o = i.data;
        for (let s = 0; s < o.length; s++)
          o[s] = Sn(o[s] / 255) * 255;
        return n.putImageData(i, 0, 0), t;
      } else if (e.data) {
        const t = e.data.slice(0);
        for (let n = 0; n < t.length; n++)
          t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Sn(t[n] / 255) * 255) : t[n] = Sn(t[n]);
        return {
          data: t,
          width: e.width,
          height: e.height
        };
      } else
        return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
    }
  }
  let ph = 0;
  class mh {
    constructor(e = null) {
      this.isSource = !0, Object.defineProperty(this, "id", { value: ph++ }), this.uuid = ui(), this.data = e, this.dataReady = !0, this.version = 0;
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.images[this.uuid] !== void 0)
        return e.images[this.uuid];
      const n = {
        uuid: this.uuid,
        url: ""
      }, i = this.data;
      if (i !== null) {
        let o;
        if (Array.isArray(i)) {
          o = [];
          for (let s = 0, a = i.length; s < a; s++)
            i[s].isDataTexture ? o.push(Ho(i[s].image)) : o.push(Ho(i[s]));
        } else
          o = Ho(i);
        n.url = o;
      }
      return t || (e.images[this.uuid] = n), n;
    }
  }
  function Ho(r) {
    return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? hh.getDataURL(r) : r.data ? {
      data: Array.from(r.data),
      width: r.width,
      height: r.height,
      type: r.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  let gh = 0;
  class Nr extends yo {
    constructor(e = Nr.DEFAULT_IMAGE, t = Nr.DEFAULT_MAPPING, n = gi, i = gi, o = rh, s = nh, a = ah, c = ih, l = Nr.DEFAULT_ANISOTROPY, u = xu) {
      super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: gh++ }), this.uuid = ui(), this.name = "", this.source = new mh(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = o, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new et(0, 0), this.repeat = new et(1, 1), this.center = new et(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new kr(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0;
    }
    get image() {
      return this.source.data;
    }
    set image(e = null) {
      this.source.data = e;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      if (!t && e.textures[this.uuid] !== void 0)
        return e.textures[this.uuid];
      const n = {
        metadata: {
          version: 4.6,
          type: "Texture",
          generator: "Texture.toJSON"
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(e).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment
      };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(e) {
      if (this.mapping !== bu) return e;
      if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
        switch (this.wrapS) {
          case ao:
            e.x = e.x - Math.floor(e.x);
            break;
          case gi:
            e.x = e.x < 0 ? 0 : 1;
            break;
          case xc:
            Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
            break;
        }
      if (e.y < 0 || e.y > 1)
        switch (this.wrapT) {
          case ao:
            e.y = e.y - Math.floor(e.y);
            break;
          case gi:
            e.y = e.y < 0 ? 0 : 1;
            break;
          case xc:
            Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
            break;
        }
      return this.flipY && (e.y = 1 - e.y), e;
    }
    set needsUpdate(e) {
      e === !0 && (this.version++, this.source.needsUpdate = !0);
    }
    set needsPMREMUpdate(e) {
      e === !0 && this.pmremVersion++;
    }
  }
  Nr.DEFAULT_IMAGE = null;
  Nr.DEFAULT_MAPPING = bu;
  Nr.DEFAULT_ANISOTROPY = 1;
  class di {
    constructor(e = 0, t = 0, n = 0, i = 1) {
      this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i;
    }
    static slerpFlat(e, t, n, i, o, s, a) {
      let c = n[i + 0], l = n[i + 1], u = n[i + 2], d = n[i + 3];
      const f = o[s + 0], h = o[s + 1], m = o[s + 2], g = o[s + 3];
      if (a === 0) {
        e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
        return;
      }
      if (a === 1) {
        e[t + 0] = f, e[t + 1] = h, e[t + 2] = m, e[t + 3] = g;
        return;
      }
      if (d !== g || c !== f || l !== h || u !== m) {
        let p = 1 - a;
        const v = c * f + l * h + u * m + d * g, y = v >= 0 ? 1 : -1, x = 1 - v * v;
        if (x > Number.EPSILON) {
          const b = Math.sqrt(x), _ = Math.atan2(b, v * y);
          p = Math.sin(p * _) / b, a = Math.sin(a * _) / b;
        }
        const E = a * y;
        if (c = c * p + f * E, l = l * p + h * E, u = u * p + m * E, d = d * p + g * E, p === 1 - a) {
          const b = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
          c *= b, l *= b, u *= b, d *= b;
        }
      }
      e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
    }
    static multiplyQuaternionsFlat(e, t, n, i, o, s) {
      const a = n[i], c = n[i + 1], l = n[i + 2], u = n[i + 3], d = o[s], f = o[s + 1], h = o[s + 2], m = o[s + 3];
      return e[t] = a * m + u * d + c * h - l * f, e[t + 1] = c * m + u * f + l * d - a * h, e[t + 2] = l * m + u * h + a * f - c * d, e[t + 3] = u * m - a * d - c * f - l * h, e;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x = e, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y = e, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(e) {
      this._w = e, this._onChangeCallback();
    }
    set(e, t, n, i) {
      return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(e) {
      return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
    }
    setFromEuler(e, t = !0) {
      const n = e._x, i = e._y, o = e._z, s = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), u = a(i / 2), d = a(o / 2), f = c(n / 2), h = c(i / 2), m = c(o / 2);
      switch (s) {
        case "XYZ":
          this._x = f * u * d + l * h * m, this._y = l * h * d - f * u * m, this._z = l * u * m + f * h * d, this._w = l * u * d - f * h * m;
          break;
        case "YXZ":
          this._x = f * u * d + l * h * m, this._y = l * h * d - f * u * m, this._z = l * u * m - f * h * d, this._w = l * u * d + f * h * m;
          break;
        case "ZXY":
          this._x = f * u * d - l * h * m, this._y = l * h * d + f * u * m, this._z = l * u * m + f * h * d, this._w = l * u * d - f * h * m;
          break;
        case "ZYX":
          this._x = f * u * d - l * h * m, this._y = l * h * d + f * u * m, this._z = l * u * m - f * h * d, this._w = l * u * d + f * h * m;
          break;
        case "YZX":
          this._x = f * u * d + l * h * m, this._y = l * h * d + f * u * m, this._z = l * u * m - f * h * d, this._w = l * u * d - f * h * m;
          break;
        case "XZY":
          this._x = f * u * d - l * h * m, this._y = l * h * d - f * u * m, this._z = l * u * m + f * h * d, this._w = l * u * d + f * h * m;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
      }
      return t === !0 && this._onChangeCallback(), this;
    }
    setFromAxisAngle(e, t) {
      const n = t / 2, i = Math.sin(n);
      return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e) {
      const t = e.elements, n = t[0], i = t[4], o = t[8], s = t[1], a = t[5], c = t[9], l = t[2], u = t[6], d = t[10], f = n + a + d;
      if (f > 0) {
        const h = 0.5 / Math.sqrt(f + 1);
        this._w = 0.25 / h, this._x = (u - c) * h, this._y = (o - l) * h, this._z = (s - i) * h;
      } else if (n > a && n > d) {
        const h = 2 * Math.sqrt(1 + n - a - d);
        this._w = (u - c) / h, this._x = 0.25 * h, this._y = (i + s) / h, this._z = (o + l) / h;
      } else if (a > d) {
        const h = 2 * Math.sqrt(1 + a - n - d);
        this._w = (o - l) / h, this._x = (i + s) / h, this._y = 0.25 * h, this._z = (c + u) / h;
      } else {
        const h = 2 * Math.sqrt(1 + d - n - a);
        this._w = (s - i) / h, this._x = (o + l) / h, this._y = (c + u) / h, this._z = 0.25 * h;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(e, t) {
      let n = e.dot(t) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
    }
    angleTo(e) {
      return 2 * Math.acos(Math.abs(ht(this.dot(e), -1, 1)));
    }
    rotateTowards(e, t) {
      const n = this.angleTo(e);
      if (n === 0) return this;
      const i = Math.min(1, t / n);
      return this.slerp(e, i), this;
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
    }
    dot(e) {
      return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let e = this.length();
      return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
    }
    multiply(e) {
      return this.multiplyQuaternions(this, e);
    }
    premultiply(e) {
      return this.multiplyQuaternions(e, this);
    }
    multiplyQuaternions(e, t) {
      const n = e._x, i = e._y, o = e._z, s = e._w, a = t._x, c = t._y, l = t._z, u = t._w;
      return this._x = n * u + s * a + i * l - o * c, this._y = i * u + s * c + o * a - n * l, this._z = o * u + s * l + n * c - i * a, this._w = s * u - n * a - i * c - o * l, this._onChangeCallback(), this;
    }
    slerp(e, t) {
      if (t === 0) return this;
      if (t === 1) return this.copy(e);
      const n = this._x, i = this._y, o = this._z, s = this._w;
      let a = s * e._w + n * e._x + i * e._y + o * e._z;
      if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
        return this._w = s, this._x = n, this._y = i, this._z = o, this;
      const c = 1 - a * a;
      if (c <= Number.EPSILON) {
        const h = 1 - t;
        return this._w = h * s + t * this._w, this._x = h * n + t * this._x, this._y = h * i + t * this._y, this._z = h * o + t * this._z, this.normalize(), this;
      }
      const l = Math.sqrt(c), u = Math.atan2(l, a), d = Math.sin((1 - t) * u) / l, f = Math.sin(t * u) / l;
      return this._w = s * d + this._w * f, this._x = n * d + this._x * f, this._y = i * d + this._y * f, this._z = o * d + this._z * f, this._onChangeCallback(), this;
    }
    slerpQuaternions(e, t, n) {
      return this.copy(e).slerp(t, n);
    }
    random() {
      const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), o = Math.sqrt(n);
      return this.set(
        i * Math.sin(e),
        i * Math.cos(e),
        o * Math.sin(t),
        o * Math.cos(t)
      );
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
    }
    fromArray(e, t = 0) {
      return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
    }
    fromBufferAttribute(e, t) {
      return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(e) {
      return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  }
  class H {
    constructor(e = 0, t = 0, n = 0) {
      H.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
    }
    set(e, t, n) {
      return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
    }
    setScalar(e) {
      return this.x = e, this.y = e, this.z = e, this;
    }
    setX(e) {
      return this.x = e, this;
    }
    setY(e) {
      return this.y = e, this;
    }
    setZ(e) {
      return this.z = e, this;
    }
    setComponent(e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
      return this;
    }
    getComponent(e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this;
    }
    add(e) {
      return this.x += e.x, this.y += e.y, this.z += e.z, this;
    }
    addScalar(e) {
      return this.x += e, this.y += e, this.z += e, this;
    }
    addVectors(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
    }
    addScaledVector(e, t) {
      return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
    }
    sub(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
    }
    subScalar(e) {
      return this.x -= e, this.y -= e, this.z -= e, this;
    }
    subVectors(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
    }
    multiply(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
    }
    multiplyScalar(e) {
      return this.x *= e, this.y *= e, this.z *= e, this;
    }
    multiplyVectors(e, t) {
      return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
    }
    applyEuler(e) {
      return this.applyQuaternion(Ac.setFromEuler(e));
    }
    applyAxisAngle(e, t) {
      return this.applyQuaternion(Ac.setFromAxisAngle(e, t));
    }
    applyMatrix3(e) {
      const t = this.x, n = this.y, i = this.z, o = e.elements;
      return this.x = o[0] * t + o[3] * n + o[6] * i, this.y = o[1] * t + o[4] * n + o[7] * i, this.z = o[2] * t + o[5] * n + o[8] * i, this;
    }
    applyNormalMatrix(e) {
      return this.applyMatrix3(e).normalize();
    }
    applyMatrix4(e) {
      const t = this.x, n = this.y, i = this.z, o = e.elements, s = 1 / (o[3] * t + o[7] * n + o[11] * i + o[15]);
      return this.x = (o[0] * t + o[4] * n + o[8] * i + o[12]) * s, this.y = (o[1] * t + o[5] * n + o[9] * i + o[13]) * s, this.z = (o[2] * t + o[6] * n + o[10] * i + o[14]) * s, this;
    }
    applyQuaternion(e) {
      const t = this.x, n = this.y, i = this.z, o = e.x, s = e.y, a = e.z, c = e.w, l = 2 * (s * i - a * n), u = 2 * (a * t - o * i), d = 2 * (o * n - s * t);
      return this.x = t + c * l + s * d - a * u, this.y = n + c * u + a * l - o * d, this.z = i + c * d + o * u - s * l, this;
    }
    project(e) {
      return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
    }
    unproject(e) {
      return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
    }
    transformDirection(e) {
      const t = this.x, n = this.y, i = this.z, o = e.elements;
      return this.x = o[0] * t + o[4] * n + o[8] * i, this.y = o[1] * t + o[5] * n + o[9] * i, this.z = o[2] * t + o[6] * n + o[10] * i, this.normalize();
    }
    divide(e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
    }
    divideScalar(e) {
      return this.multiplyScalar(1 / e);
    }
    min(e) {
      return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
    }
    max(e) {
      return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
    }
    clamp(e, t) {
      return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
    }
    clampScalar(e, t) {
      return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
    }
    clampLength(e, t) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
    }
    floor() {
      return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
    }
    ceil() {
      return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
    }
    round() {
      return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
    }
    roundToZero() {
      return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
    }
    negate() {
      return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
    }
    dot(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    }
    // TODO lengthSquared?
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(e) {
      return this.normalize().multiplyScalar(e);
    }
    lerp(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
    }
    lerpVectors(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
    }
    cross(e) {
      return this.crossVectors(this, e);
    }
    crossVectors(e, t) {
      const n = e.x, i = e.y, o = e.z, s = t.x, a = t.y, c = t.z;
      return this.x = i * c - o * a, this.y = o * s - n * c, this.z = n * a - i * s, this;
    }
    projectOnVector(e) {
      const t = e.lengthSq();
      if (t === 0) return this.set(0, 0, 0);
      const n = e.dot(this) / t;
      return this.copy(e).multiplyScalar(n);
    }
    projectOnPlane(e) {
      return Ko.copy(this).projectOnVector(e), this.sub(Ko);
    }
    reflect(e) {
      return this.sub(Ko.copy(e).multiplyScalar(2 * this.dot(e)));
    }
    angleTo(e) {
      const t = Math.sqrt(this.lengthSq() * e.lengthSq());
      if (t === 0) return Math.PI / 2;
      const n = this.dot(e) / t;
      return Math.acos(ht(n, -1, 1));
    }
    distanceTo(e) {
      return Math.sqrt(this.distanceToSquared(e));
    }
    distanceToSquared(e) {
      const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
      return t * t + n * n + i * i;
    }
    manhattanDistanceTo(e) {
      return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
    }
    setFromSpherical(e) {
      return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
    }
    setFromSphericalCoords(e, t, n) {
      const i = Math.sin(t) * e;
      return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
    }
    setFromCylindrical(e) {
      return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
    }
    setFromCylindricalCoords(e, t, n) {
      return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
    }
    setFromMatrixPosition(e) {
      const t = e.elements;
      return this.x = t[12], this.y = t[13], this.z = t[14], this;
    }
    setFromMatrixScale(e) {
      const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
      return this.x = t, this.y = n, this.z = i, this;
    }
    setFromMatrixColumn(e, t) {
      return this.fromArray(e.elements, t * 4);
    }
    setFromMatrix3Column(e, t) {
      return this.fromArray(e.elements, t * 3);
    }
    setFromEuler(e) {
      return this.x = e._x, this.y = e._y, this.z = e._z, this;
    }
    setFromColor(e) {
      return this.x = e.r, this.y = e.g, this.z = e.b, this;
    }
    equals(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    }
    fromArray(e, t = 0) {
      return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
    }
    fromBufferAttribute(e, t) {
      return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
      return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  }
  const Ko = /* @__PURE__ */ new H(), Ac = /* @__PURE__ */ new di();
  class fi {
    constructor(e = new H(1 / 0, 1 / 0, 1 / 0), t = new H(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = !0, this.min = e, this.max = t;
    }
    set(e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    }
    setFromArray(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t += 3)
        this.expandByPoint(It.fromArray(e, t));
      return this;
    }
    setFromBufferAttribute(e) {
      this.makeEmpty();
      for (let t = 0, n = e.count; t < n; t++)
        this.expandByPoint(It.fromBufferAttribute(e, t));
      return this;
    }
    setFromPoints(e) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++)
        this.expandByPoint(e[t]);
      return this;
    }
    setFromCenterAndSize(e, t) {
      const n = It.copy(t).multiplyScalar(0.5);
      return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
    }
    setFromObject(e, t = !1) {
      return this.makeEmpty(), this.expandByObject(e, t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(e) {
      return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
    }
    expandByPoint(e) {
      return this.min.min(e), this.max.max(e), this;
    }
    expandByVector(e) {
      return this.min.sub(e), this.max.add(e), this;
    }
    expandByScalar(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    }
    expandByObject(e, t = !1) {
      e.updateWorldMatrix(!1, !1);
      const n = e.geometry;
      if (n !== void 0) {
        const o = n.getAttribute("position");
        if (t === !0 && o !== void 0 && e.isInstancedMesh !== !0)
          for (let s = 0, a = o.count; s < a; s++)
            e.isMesh === !0 ? e.getVertexPosition(s, It) : It.fromBufferAttribute(o, s), It.applyMatrix4(e.matrixWorld), this.expandByPoint(It);
        else
          e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), bi.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), bi.copy(n.boundingBox)), bi.applyMatrix4(e.matrixWorld), this.union(bi);
      }
      const i = e.children;
      for (let o = 0, s = i.length; o < s; o++)
        this.expandByObject(i[o], t);
      return this;
    }
    containsPoint(e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
    }
    containsBox(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
    }
    getParameter(e, t) {
      return t.set(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z)
      );
    }
    intersectsBox(e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
    }
    intersectsSphere(e) {
      return this.clampPoint(e.center, It), It.distanceToSquared(e.center) <= e.radius * e.radius;
    }
    intersectsPlane(e) {
      let t, n;
      return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
    }
    intersectsTriangle(e) {
      if (this.isEmpty())
        return !1;
      this.getCenter(Kn), xi.subVectors(this.max, Kn), nn.subVectors(e.a, Kn), on.subVectors(e.b, Kn), an.subVectors(e.c, Kn), xr.subVectors(on, nn), Sr.subVectors(an, on), Fr.subVectors(nn, an);
      let t = [
        0,
        -xr.z,
        xr.y,
        0,
        -Sr.z,
        Sr.y,
        0,
        -Fr.z,
        Fr.y,
        xr.z,
        0,
        -xr.x,
        Sr.z,
        0,
        -Sr.x,
        Fr.z,
        0,
        -Fr.x,
        -xr.y,
        xr.x,
        0,
        -Sr.y,
        Sr.x,
        0,
        -Fr.y,
        Fr.x,
        0
      ];
      return !Wo(t, nn, on, an, xi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Wo(t, nn, on, an, xi)) ? !1 : (Si.crossVectors(xr, Sr), t = [Si.x, Si.y, Si.z], Wo(t, nn, on, an, xi));
    }
    clampPoint(e, t) {
      return t.copy(e).clamp(this.min, this.max);
    }
    distanceToPoint(e) {
      return this.clampPoint(e, It).distanceTo(e);
    }
    getBoundingSphere(e) {
      return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(It).length() * 0.5), e;
    }
    intersect(e) {
      return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    }
    applyMatrix4(e) {
      return this.isEmpty() ? this : (nr[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), nr[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), nr[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), nr[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), nr[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), nr[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), nr[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), nr[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(nr), this);
    }
    translate(e) {
      return this.min.add(e), this.max.add(e), this;
    }
    equals(e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    }
  }
  const nr = [
    /* @__PURE__ */ new H(),
    /* @__PURE__ */ new H(),
    /* @__PURE__ */ new H(),
    /* @__PURE__ */ new H(),
    /* @__PURE__ */ new H(),
    /* @__PURE__ */ new H(),
    /* @__PURE__ */ new H(),
    /* @__PURE__ */ new H()
  ], It = /* @__PURE__ */ new H(), bi = /* @__PURE__ */ new fi(), nn = /* @__PURE__ */ new H(), on = /* @__PURE__ */ new H(), an = /* @__PURE__ */ new H(), xr = /* @__PURE__ */ new H(), Sr = /* @__PURE__ */ new H(), Fr = /* @__PURE__ */ new H(), Kn = /* @__PURE__ */ new H(), xi = /* @__PURE__ */ new H(), Si = /* @__PURE__ */ new H(), Br = /* @__PURE__ */ new H();
  function Wo(r, e, t, n, i) {
    for (let o = 0, s = r.length - 3; o <= s; o += 3) {
      Br.fromArray(r, o);
      const a = i.x * Math.abs(Br.x) + i.y * Math.abs(Br.y) + i.z * Math.abs(Br.z), c = e.dot(Br), l = t.dot(Br), u = n.dot(Br);
      if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a)
        return !1;
    }
    return !0;
  }
  const vh = /* @__PURE__ */ new fi(), Wn = /* @__PURE__ */ new H(), Vo = /* @__PURE__ */ new H();
  class Eu {
    constructor(e = new H(), t = -1) {
      this.isSphere = !0, this.center = e, this.radius = t;
    }
    set(e, t) {
      return this.center.copy(e), this.radius = t, this;
    }
    setFromPoints(e, t) {
      const n = this.center;
      t !== void 0 ? n.copy(t) : vh.setFromPoints(e).getCenter(n);
      let i = 0;
      for (let o = 0, s = e.length; o < s; o++)
        i = Math.max(i, n.distanceToSquared(e[o]));
      return this.radius = Math.sqrt(i), this;
    }
    copy(e) {
      return this.center.copy(e.center), this.radius = e.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(e) {
      return e.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(e) {
      const t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    }
    intersectsBox(e) {
      return e.intersectsSphere(this);
    }
    intersectsPlane(e) {
      return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(e, t) {
      const n = this.center.distanceToSquared(e);
      return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
    }
    getBoundingBox(e) {
      return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
    }
    applyMatrix4(e) {
      return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
    }
    translate(e) {
      return this.center.add(e), this;
    }
    expandByPoint(e) {
      if (this.isEmpty())
        return this.center.copy(e), this.radius = 0, this;
      Wn.subVectors(e, this.center);
      const t = Wn.lengthSq();
      if (t > this.radius * this.radius) {
        const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
        this.center.addScaledVector(Wn, i / n), this.radius += i;
      }
      return this;
    }
    union(e) {
      return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Vo.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(Wn.copy(e.center).add(Vo)), this.expandByPoint(Wn.copy(e.center).sub(Vo))), this);
    }
    equals(e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  const ir = /* @__PURE__ */ new H(), Uo = /* @__PURE__ */ new H(), Ei = /* @__PURE__ */ new H(), Er = /* @__PURE__ */ new H(), qo = /* @__PURE__ */ new H(), Ci = /* @__PURE__ */ new H(), Go = /* @__PURE__ */ new H();
  class yh {
    constructor(e = new H(), t = new H(0, 0, -1)) {
      this.origin = e, this.direction = t;
    }
    set(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    }
    copy(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    }
    at(e, t) {
      return t.copy(this.origin).addScaledVector(this.direction, e);
    }
    lookAt(e) {
      return this.direction.copy(e).sub(this.origin).normalize(), this;
    }
    recast(e) {
      return this.origin.copy(this.at(e, ir)), this;
    }
    closestPointToPoint(e, t) {
      t.subVectors(e, this.origin);
      const n = t.dot(this.direction);
      return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(e) {
      return Math.sqrt(this.distanceSqToPoint(e));
    }
    distanceSqToPoint(e) {
      const t = ir.subVectors(e, this.origin).dot(this.direction);
      return t < 0 ? this.origin.distanceToSquared(e) : (ir.copy(this.origin).addScaledVector(this.direction, t), ir.distanceToSquared(e));
    }
    distanceSqToSegment(e, t, n, i) {
      Uo.copy(e).add(t).multiplyScalar(0.5), Ei.copy(t).sub(e).normalize(), Er.copy(this.origin).sub(Uo);
      const o = e.distanceTo(t) * 0.5, s = -this.direction.dot(Ei), a = Er.dot(this.direction), c = -Er.dot(Ei), l = Er.lengthSq(), u = Math.abs(1 - s * s);
      let d, f, h, m;
      if (u > 0)
        if (d = s * c - a, f = s * a - c, m = o * u, d >= 0)
          if (f >= -m)
            if (f <= m) {
              const g = 1 / u;
              d *= g, f *= g, h = d * (d + s * f + 2 * a) + f * (s * d + f + 2 * c) + l;
            } else
              f = o, d = Math.max(0, -(s * f + a)), h = -d * d + f * (f + 2 * c) + l;
          else
            f = -o, d = Math.max(0, -(s * f + a)), h = -d * d + f * (f + 2 * c) + l;
        else
          f <= -m ? (d = Math.max(0, -(-s * o + a)), f = d > 0 ? -o : Math.min(Math.max(-o, -c), o), h = -d * d + f * (f + 2 * c) + l) : f <= m ? (d = 0, f = Math.min(Math.max(-o, -c), o), h = f * (f + 2 * c) + l) : (d = Math.max(0, -(s * o + a)), f = d > 0 ? o : Math.min(Math.max(-o, -c), o), h = -d * d + f * (f + 2 * c) + l);
      else
        f = s > 0 ? -o : o, d = Math.max(0, -(s * f + a)), h = -d * d + f * (f + 2 * c) + l;
      return n && n.copy(this.origin).addScaledVector(this.direction, d), i && i.copy(Uo).addScaledVector(Ei, f), h;
    }
    intersectSphere(e, t) {
      ir.subVectors(e.center, this.origin);
      const n = ir.dot(this.direction), i = ir.dot(ir) - n * n, o = e.radius * e.radius;
      if (i > o) return null;
      const s = Math.sqrt(o - i), a = n - s, c = n + s;
      return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
    }
    intersectsSphere(e) {
      return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
    }
    distanceToPlane(e) {
      const t = e.normal.dot(this.direction);
      if (t === 0)
        return e.distanceToPoint(this.origin) === 0 ? 0 : null;
      const n = -(this.origin.dot(e.normal) + e.constant) / t;
      return n >= 0 ? n : null;
    }
    intersectPlane(e, t) {
      const n = this.distanceToPlane(e);
      return n === null ? null : this.at(n, t);
    }
    intersectsPlane(e) {
      const t = e.distanceToPoint(this.origin);
      return t === 0 || e.normal.dot(this.direction) * t < 0;
    }
    intersectBox(e, t) {
      let n, i, o, s, a, c;
      const l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
      return l >= 0 ? (n = (e.min.x - f.x) * l, i = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, i = (e.min.x - f.x) * l), u >= 0 ? (o = (e.min.y - f.y) * u, s = (e.max.y - f.y) * u) : (o = (e.max.y - f.y) * u, s = (e.min.y - f.y) * u), n > s || o > i || ((o > n || isNaN(n)) && (n = o), (s < i || isNaN(i)) && (i = s), d >= 0 ? (a = (e.min.z - f.z) * d, c = (e.max.z - f.z) * d) : (a = (e.max.z - f.z) * d, c = (e.min.z - f.z) * d), n > c || a > i) || ((a > n || n !== n) && (n = a), (c < i || i !== i) && (i = c), i < 0) ? null : this.at(n >= 0 ? n : i, t);
    }
    intersectsBox(e) {
      return this.intersectBox(e, ir) !== null;
    }
    intersectTriangle(e, t, n, i, o) {
      qo.subVectors(t, e), Ci.subVectors(n, e), Go.crossVectors(qo, Ci);
      let s = this.direction.dot(Go), a;
      if (s > 0) {
        if (i) return null;
        a = 1;
      } else if (s < 0)
        a = -1, s = -s;
      else
        return null;
      Er.subVectors(this.origin, e);
      const c = a * this.direction.dot(Ci.crossVectors(Er, Ci));
      if (c < 0)
        return null;
      const l = a * this.direction.dot(qo.cross(Er));
      if (l < 0 || c + l > s)
        return null;
      const u = -a * Er.dot(Go);
      return u < 0 ? null : this.at(u / s, o);
    }
    applyMatrix4(e) {
      return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
    }
    equals(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  }
  class Ht {
    constructor(e, t, n, i, o, s, a, c, l, u, d, f, h, m, g, p) {
      Ht.prototype.isMatrix4 = !0, this.elements = [
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ], e !== void 0 && this.set(e, t, n, i, o, s, a, c, l, u, d, f, h, m, g, p);
    }
    set(e, t, n, i, o, s, a, c, l, u, d, f, h, m, g, p) {
      const v = this.elements;
      return v[0] = e, v[4] = t, v[8] = n, v[12] = i, v[1] = o, v[5] = s, v[9] = a, v[13] = c, v[2] = l, v[6] = u, v[10] = d, v[14] = f, v[3] = h, v[7] = m, v[11] = g, v[15] = p, this;
    }
    identity() {
      return this.set(
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    clone() {
      return new Ht().fromArray(this.elements);
    }
    copy(e) {
      const t = this.elements, n = e.elements;
      return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
    }
    copyPosition(e) {
      const t = this.elements, n = e.elements;
      return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
    }
    setFromMatrix3(e) {
      const t = e.elements;
      return this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    extractBasis(e, t, n) {
      return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(e, t, n) {
      return this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    extractRotation(e) {
      const t = this.elements, n = e.elements, i = 1 / sn.setFromMatrixColumn(e, 0).length(), o = 1 / sn.setFromMatrixColumn(e, 1).length(), s = 1 / sn.setFromMatrixColumn(e, 2).length();
      return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * o, t[5] = n[5] * o, t[6] = n[6] * o, t[7] = 0, t[8] = n[8] * s, t[9] = n[9] * s, t[10] = n[10] * s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromEuler(e) {
      const t = this.elements, n = e.x, i = e.y, o = e.z, s = Math.cos(n), a = Math.sin(n), c = Math.cos(i), l = Math.sin(i), u = Math.cos(o), d = Math.sin(o);
      if (e.order === "XYZ") {
        const f = s * u, h = s * d, m = a * u, g = a * d;
        t[0] = c * u, t[4] = -c * d, t[8] = l, t[1] = h + m * l, t[5] = f - g * l, t[9] = -a * c, t[2] = g - f * l, t[6] = m + h * l, t[10] = s * c;
      } else if (e.order === "YXZ") {
        const f = c * u, h = c * d, m = l * u, g = l * d;
        t[0] = f + g * a, t[4] = m * a - h, t[8] = s * l, t[1] = s * d, t[5] = s * u, t[9] = -a, t[2] = h * a - m, t[6] = g + f * a, t[10] = s * c;
      } else if (e.order === "ZXY") {
        const f = c * u, h = c * d, m = l * u, g = l * d;
        t[0] = f - g * a, t[4] = -s * d, t[8] = m + h * a, t[1] = h + m * a, t[5] = s * u, t[9] = g - f * a, t[2] = -s * l, t[6] = a, t[10] = s * c;
      } else if (e.order === "ZYX") {
        const f = s * u, h = s * d, m = a * u, g = a * d;
        t[0] = c * u, t[4] = m * l - h, t[8] = f * l + g, t[1] = c * d, t[5] = g * l + f, t[9] = h * l - m, t[2] = -l, t[6] = a * c, t[10] = s * c;
      } else if (e.order === "YZX") {
        const f = s * c, h = s * l, m = a * c, g = a * l;
        t[0] = c * u, t[4] = g - f * d, t[8] = m * d + h, t[1] = d, t[5] = s * u, t[9] = -a * u, t[2] = -l * u, t[6] = h * d + m, t[10] = f - g * d;
      } else if (e.order === "XZY") {
        const f = s * c, h = s * l, m = a * c, g = a * l;
        t[0] = c * u, t[4] = -d, t[8] = l * u, t[1] = f * d + g, t[5] = s * u, t[9] = h * d - m, t[2] = m * d - h, t[6] = a * u, t[10] = g * d + f;
      }
      return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
    }
    makeRotationFromQuaternion(e) {
      return this.compose(bh, e, xh);
    }
    lookAt(e, t, n) {
      const i = this.elements;
      return bt.subVectors(e, t), bt.lengthSq() === 0 && (bt.z = 1), bt.normalize(), Cr.crossVectors(n, bt), Cr.lengthSq() === 0 && (Math.abs(n.z) === 1 ? bt.x += 1e-4 : bt.z += 1e-4, bt.normalize(), Cr.crossVectors(n, bt)), Cr.normalize(), wi.crossVectors(bt, Cr), i[0] = Cr.x, i[4] = wi.x, i[8] = bt.x, i[1] = Cr.y, i[5] = wi.y, i[9] = bt.y, i[2] = Cr.z, i[6] = wi.z, i[10] = bt.z, this;
    }
    multiply(e) {
      return this.multiplyMatrices(this, e);
    }
    premultiply(e) {
      return this.multiplyMatrices(e, this);
    }
    multiplyMatrices(e, t) {
      const n = e.elements, i = t.elements, o = this.elements, s = n[0], a = n[4], c = n[8], l = n[12], u = n[1], d = n[5], f = n[9], h = n[13], m = n[2], g = n[6], p = n[10], v = n[14], y = n[3], x = n[7], E = n[11], b = n[15], _ = i[0], S = i[4], M = i[8], A = i[12], N = i[1], $ = i[5], F = i[9], L = i[13], D = i[2], U = i[6], P = i[10], R = i[14], k = i[3], z = i[7], T = i[11], O = i[15];
      return o[0] = s * _ + a * N + c * D + l * k, o[4] = s * S + a * $ + c * U + l * z, o[8] = s * M + a * F + c * P + l * T, o[12] = s * A + a * L + c * R + l * O, o[1] = u * _ + d * N + f * D + h * k, o[5] = u * S + d * $ + f * U + h * z, o[9] = u * M + d * F + f * P + h * T, o[13] = u * A + d * L + f * R + h * O, o[2] = m * _ + g * N + p * D + v * k, o[6] = m * S + g * $ + p * U + v * z, o[10] = m * M + g * F + p * P + v * T, o[14] = m * A + g * L + p * R + v * O, o[3] = y * _ + x * N + E * D + b * k, o[7] = y * S + x * $ + E * U + b * z, o[11] = y * M + x * F + E * P + b * T, o[15] = y * A + x * L + E * R + b * O, this;
    }
    multiplyScalar(e) {
      const t = this.elements;
      return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
    }
    determinant() {
      const e = this.elements, t = e[0], n = e[4], i = e[8], o = e[12], s = e[1], a = e[5], c = e[9], l = e[13], u = e[2], d = e[6], f = e[10], h = e[14], m = e[3], g = e[7], p = e[11], v = e[15];
      return m * (+o * c * d - i * l * d - o * a * f + n * l * f + i * a * h - n * c * h) + g * (+t * c * h - t * l * f + o * s * f - i * s * h + i * l * u - o * c * u) + p * (+t * l * d - t * a * h - o * s * d + n * s * h + o * a * u - n * l * u) + v * (-i * a * u - t * c * d + t * a * f + i * s * d - n * s * f + n * c * u);
    }
    transpose() {
      const e = this.elements;
      let t;
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
    }
    setPosition(e, t, n) {
      const i = this.elements;
      return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
    }
    invert() {
      const e = this.elements, t = e[0], n = e[1], i = e[2], o = e[3], s = e[4], a = e[5], c = e[6], l = e[7], u = e[8], d = e[9], f = e[10], h = e[11], m = e[12], g = e[13], p = e[14], v = e[15], y = d * p * l - g * f * l + g * c * h - a * p * h - d * c * v + a * f * v, x = m * f * l - u * p * l - m * c * h + s * p * h + u * c * v - s * f * v, E = u * g * l - m * d * l + m * a * h - s * g * h - u * a * v + s * d * v, b = m * d * c - u * g * c - m * a * f + s * g * f + u * a * p - s * d * p, _ = t * y + n * x + i * E + o * b;
      if (_ === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S = 1 / _;
      return e[0] = y * S, e[1] = (g * f * o - d * p * o - g * i * h + n * p * h + d * i * v - n * f * v) * S, e[2] = (a * p * o - g * c * o + g * i * l - n * p * l - a * i * v + n * c * v) * S, e[3] = (d * c * o - a * f * o - d * i * l + n * f * l + a * i * h - n * c * h) * S, e[4] = x * S, e[5] = (u * p * o - m * f * o + m * i * h - t * p * h - u * i * v + t * f * v) * S, e[6] = (m * c * o - s * p * o - m * i * l + t * p * l + s * i * v - t * c * v) * S, e[7] = (s * f * o - u * c * o + u * i * l - t * f * l - s * i * h + t * c * h) * S, e[8] = E * S, e[9] = (m * d * o - u * g * o - m * n * h + t * g * h + u * n * v - t * d * v) * S, e[10] = (s * g * o - m * a * o + m * n * l - t * g * l - s * n * v + t * a * v) * S, e[11] = (u * a * o - s * d * o - u * n * l + t * d * l + s * n * h - t * a * h) * S, e[12] = b * S, e[13] = (u * g * i - m * d * i + m * n * f - t * g * f - u * n * p + t * d * p) * S, e[14] = (m * a * i - s * g * i - m * n * c + t * g * c + s * n * p - t * a * p) * S, e[15] = (s * d * i - u * a * i + u * n * c - t * d * c - s * n * f + t * a * f) * S, this;
    }
    scale(e) {
      const t = this.elements, n = e.x, i = e.y, o = e.z;
      return t[0] *= n, t[4] *= i, t[8] *= o, t[1] *= n, t[5] *= i, t[9] *= o, t[2] *= n, t[6] *= i, t[10] *= o, t[3] *= n, t[7] *= i, t[11] *= o, this;
    }
    getMaxScaleOnAxis() {
      const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, n, i));
    }
    makeTranslation(e, t, n) {
      return e.isVector3 ? this.set(
        1,
        0,
        0,
        e.x,
        0,
        1,
        0,
        e.y,
        0,
        0,
        1,
        e.z,
        0,
        0,
        0,
        1
      ) : this.set(
        1,
        0,
        0,
        e,
        0,
        1,
        0,
        t,
        0,
        0,
        1,
        n,
        0,
        0,
        0,
        1
      ), this;
    }
    makeRotationX(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(
        1,
        0,
        0,
        0,
        0,
        t,
        -n,
        0,
        0,
        n,
        t,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeRotationY(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(
        t,
        0,
        n,
        0,
        0,
        1,
        0,
        0,
        -n,
        0,
        t,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeRotationZ(e) {
      const t = Math.cos(e), n = Math.sin(e);
      return this.set(
        t,
        -n,
        0,
        0,
        n,
        t,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeRotationAxis(e, t) {
      const n = Math.cos(t), i = Math.sin(t), o = 1 - n, s = e.x, a = e.y, c = e.z, l = o * s, u = o * a;
      return this.set(
        l * s + n,
        l * a - i * c,
        l * c + i * a,
        0,
        l * a + i * c,
        u * a + n,
        u * c - i * s,
        0,
        l * c - i * a,
        u * c + i * s,
        o * c * c + n,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeScale(e, t, n) {
      return this.set(
        e,
        0,
        0,
        0,
        0,
        t,
        0,
        0,
        0,
        0,
        n,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    makeShear(e, t, n, i, o, s) {
      return this.set(
        1,
        n,
        o,
        0,
        e,
        1,
        s,
        0,
        t,
        i,
        1,
        0,
        0,
        0,
        0,
        1
      ), this;
    }
    compose(e, t, n) {
      const i = this.elements, o = t._x, s = t._y, a = t._z, c = t._w, l = o + o, u = s + s, d = a + a, f = o * l, h = o * u, m = o * d, g = s * u, p = s * d, v = a * d, y = c * l, x = c * u, E = c * d, b = n.x, _ = n.y, S = n.z;
      return i[0] = (1 - (g + v)) * b, i[1] = (h + E) * b, i[2] = (m - x) * b, i[3] = 0, i[4] = (h - E) * _, i[5] = (1 - (f + v)) * _, i[6] = (p + y) * _, i[7] = 0, i[8] = (m + x) * S, i[9] = (p - y) * S, i[10] = (1 - (f + g)) * S, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
    }
    decompose(e, t, n) {
      const i = this.elements;
      let o = sn.set(i[0], i[1], i[2]).length();
      const s = sn.set(i[4], i[5], i[6]).length(), a = sn.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (o = -o), e.x = i[12], e.y = i[13], e.z = i[14], $t.copy(this);
      const l = 1 / o, u = 1 / s, d = 1 / a;
      return $t.elements[0] *= l, $t.elements[1] *= l, $t.elements[2] *= l, $t.elements[4] *= u, $t.elements[5] *= u, $t.elements[6] *= u, $t.elements[8] *= d, $t.elements[9] *= d, $t.elements[10] *= d, t.setFromRotationMatrix($t), n.x = o, n.y = s, n.z = a, this;
    }
    makePerspective(e, t, n, i, o, s, a = vi) {
      const c = this.elements, l = 2 * o / (t - e), u = 2 * o / (n - i), d = (t + e) / (t - e), f = (n + i) / (n - i);
      let h, m;
      if (a === vi)
        h = -(s + o) / (s - o), m = -2 * s * o / (s - o);
      else if (a === _c)
        h = -s / (s - o), m = -s * o / (s - o);
      else
        throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
      return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = u, c[9] = f, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = h, c[14] = m, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
    }
    makeOrthographic(e, t, n, i, o, s, a = vi) {
      const c = this.elements, l = 1 / (t - e), u = 1 / (n - i), d = 1 / (s - o), f = (t + e) * l, h = (n + i) * u;
      let m, g;
      if (a === vi)
        m = (s + o) * d, g = -2 * d;
      else if (a === _c)
        m = o * d, g = -1 * d;
      else
        throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
      return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -f, c[1] = 0, c[5] = 2 * u, c[9] = 0, c[13] = -h, c[2] = 0, c[6] = 0, c[10] = g, c[14] = -m, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
    }
    equals(e) {
      const t = this.elements, n = e.elements;
      for (let i = 0; i < 16; i++)
        if (t[i] !== n[i]) return !1;
      return !0;
    }
    fromArray(e, t = 0) {
      for (let n = 0; n < 16; n++)
        this.elements[n] = e[n + t];
      return this;
    }
    toArray(e = [], t = 0) {
      const n = this.elements;
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
    }
  }
  const sn = /* @__PURE__ */ new H(), $t = /* @__PURE__ */ new Ht(), bh = /* @__PURE__ */ new H(0, 0, 0), xh = /* @__PURE__ */ new H(1, 1, 1), Cr = /* @__PURE__ */ new H(), wi = /* @__PURE__ */ new H(), bt = /* @__PURE__ */ new H(), Pc = /* @__PURE__ */ new Ht(), Nc = /* @__PURE__ */ new di();
  class An {
    constructor(e = 0, t = 0, n = 0, i = An.DEFAULT_ORDER) {
      this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i;
    }
    get x() {
      return this._x;
    }
    set x(e) {
      this._x = e, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(e) {
      this._y = e, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(e) {
      this._z = e, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(e) {
      this._order = e, this._onChangeCallback();
    }
    set(e, t, n, i = this._order) {
      return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(e) {
      return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(e, t = this._order, n = !0) {
      const i = e.elements, o = i[0], s = i[4], a = i[8], c = i[1], l = i[5], u = i[9], d = i[2], f = i[6], h = i[10];
      switch (t) {
        case "XYZ":
          this._y = Math.asin(ht(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, h), this._z = Math.atan2(-s, o)) : (this._x = Math.atan2(f, l), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-ht(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, h), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, o), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(ht(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, h), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(c, o));
          break;
        case "ZYX":
          this._y = Math.asin(-ht(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, h), this._z = Math.atan2(c, o)) : (this._x = 0, this._z = Math.atan2(-s, l));
          break;
        case "YZX":
          this._z = Math.asin(ht(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, o)) : (this._x = 0, this._y = Math.atan2(a, h));
          break;
        case "XZY":
          this._z = Math.asin(-ht(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, o)) : (this._x = Math.atan2(-u, h), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
      }
      return this._order = t, n === !0 && this._onChangeCallback(), this;
    }
    setFromQuaternion(e, t, n) {
      return Pc.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Pc, t, n);
    }
    setFromVector3(e, t = this._order) {
      return this.set(e.x, e.y, e.z, t);
    }
    reorder(e) {
      return Nc.setFromEuler(this), this.setFromQuaternion(Nc, e);
    }
    equals(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
    }
    fromArray(e) {
      return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
    }
    _onChange(e) {
      return this._onChangeCallback = e, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  }
  An.DEFAULT_ORDER = "XYZ";
  class Sh {
    constructor() {
      this.mask = 1;
    }
    set(e) {
      this.mask = (1 << e | 0) >>> 0;
    }
    enable(e) {
      this.mask |= 1 << e | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(e) {
      this.mask ^= 1 << e | 0;
    }
    disable(e) {
      this.mask &= ~(1 << e | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(e) {
      return (this.mask & e.mask) !== 0;
    }
    isEnabled(e) {
      return (this.mask & (1 << e | 0)) !== 0;
    }
  }
  let Eh = 0;
  const Dc = /* @__PURE__ */ new H(), cn = /* @__PURE__ */ new di(), or = /* @__PURE__ */ new Ht(), Mi = /* @__PURE__ */ new H(), Vn = /* @__PURE__ */ new H(), Ch = /* @__PURE__ */ new H(), wh = /* @__PURE__ */ new di(), kc = /* @__PURE__ */ new H(1, 0, 0), Ic = /* @__PURE__ */ new H(0, 1, 0), $c = /* @__PURE__ */ new H(0, 0, 1), zc = { type: "added" }, Mh = { type: "removed" }, ln = { type: "childadded", child: null }, Yo = { type: "childremoved", child: null };
  class pr extends yo {
    constructor() {
      super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Eh++ }), this.uuid = ui(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = pr.DEFAULT_UP.clone();
      const e = new H(), t = new An(), n = new di(), i = new H(1, 1, 1);
      function o() {
        n.setFromEuler(t, !1);
      }
      function s() {
        t.setFromQuaternion(n, void 0, !1);
      }
      t._onChange(o), n._onChange(s), Object.defineProperties(this, {
        position: {
          configurable: !0,
          enumerable: !0,
          value: e
        },
        rotation: {
          configurable: !0,
          enumerable: !0,
          value: t
        },
        quaternion: {
          configurable: !0,
          enumerable: !0,
          value: n
        },
        scale: {
          configurable: !0,
          enumerable: !0,
          value: i
        },
        modelViewMatrix: {
          value: new Ht()
        },
        normalMatrix: {
          value: new kr()
        }
      }), this.matrix = new Ht(), this.matrixWorld = new Ht(), this.matrixAutoUpdate = pr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = pr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Sh(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(e) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(e) {
      return this.quaternion.premultiply(e), this;
    }
    setRotationFromAxisAngle(e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    }
    setRotationFromEuler(e) {
      this.quaternion.setFromEuler(e, !0);
    }
    setRotationFromMatrix(e) {
      this.quaternion.setFromRotationMatrix(e);
    }
    setRotationFromQuaternion(e) {
      this.quaternion.copy(e);
    }
    rotateOnAxis(e, t) {
      return cn.setFromAxisAngle(e, t), this.quaternion.multiply(cn), this;
    }
    rotateOnWorldAxis(e, t) {
      return cn.setFromAxisAngle(e, t), this.quaternion.premultiply(cn), this;
    }
    rotateX(e) {
      return this.rotateOnAxis(kc, e);
    }
    rotateY(e) {
      return this.rotateOnAxis(Ic, e);
    }
    rotateZ(e) {
      return this.rotateOnAxis($c, e);
    }
    translateOnAxis(e, t) {
      return Dc.copy(e).applyQuaternion(this.quaternion), this.position.add(Dc.multiplyScalar(t)), this;
    }
    translateX(e) {
      return this.translateOnAxis(kc, e);
    }
    translateY(e) {
      return this.translateOnAxis(Ic, e);
    }
    translateZ(e) {
      return this.translateOnAxis($c, e);
    }
    localToWorld(e) {
      return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(e) {
      return this.updateWorldMatrix(!0, !1), e.applyMatrix4(or.copy(this.matrixWorld).invert());
    }
    lookAt(e, t, n) {
      e.isVector3 ? Mi.copy(e) : Mi.set(e, t, n);
      const i = this.parent;
      this.updateWorldMatrix(!0, !1), Vn.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? or.lookAt(Vn, Mi, this.up) : or.lookAt(Mi, Vn, this.up), this.quaternion.setFromRotationMatrix(or), i && (or.extractRotation(i.matrixWorld), cn.setFromRotationMatrix(or), this.quaternion.premultiply(cn.invert()));
    }
    add(e) {
      if (arguments.length > 1) {
        for (let t = 0; t < arguments.length; t++)
          this.add(arguments[t]);
        return this;
      }
      return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(zc), ln.child = e, this.dispatchEvent(ln), ln.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
    }
    remove(e) {
      if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++)
          this.remove(arguments[n]);
        return this;
      }
      const t = this.children.indexOf(e);
      return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Mh), Yo.child = e, this.dispatchEvent(Yo), Yo.child = null), this;
    }
    removeFromParent() {
      const e = this.parent;
      return e !== null && e.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(e) {
      return this.updateWorldMatrix(!0, !1), or.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), or.multiply(e.parent.matrixWorld)), e.applyMatrix4(or), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(zc), ln.child = e, this.dispatchEvent(ln), ln.child = null, this;
    }
    getObjectById(e) {
      return this.getObjectByProperty("id", e);
    }
    getObjectByName(e) {
      return this.getObjectByProperty("name", e);
    }
    getObjectByProperty(e, t) {
      if (this[e] === t) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const s = this.children[n].getObjectByProperty(e, t);
        if (s !== void 0)
          return s;
      }
    }
    getObjectsByProperty(e, t, n = []) {
      this[e] === t && n.push(this);
      const i = this.children;
      for (let o = 0, s = i.length; o < s; o++)
        i[o].getObjectsByProperty(e, t, n);
      return n;
    }
    getWorldPosition(e) {
      return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(e) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Vn, e, Ch), e;
    }
    getWorldScale(e) {
      return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Vn, wh, e), e;
    }
    getWorldDirection(e) {
      this.updateWorldMatrix(!0, !1);
      const t = this.matrixWorld.elements;
      return e.set(t[8], t[9], t[10]).normalize();
    }
    raycast() {
    }
    traverse(e) {
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++)
        t[n].traverse(e);
    }
    traverseVisible(e) {
      if (this.visible === !1) return;
      e(this);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++)
        t[n].traverseVisible(e);
    }
    traverseAncestors(e) {
      const t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(e) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
      const t = this.children;
      for (let n = 0, i = t.length; n < i; n++)
        t[n].updateMatrixWorld(e);
    }
    updateWorldMatrix(e, t) {
      const n = this.parent;
      if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) {
        const i = this.children;
        for (let o = 0, s = i.length; o < s; o++)
          i[o].updateWorldMatrix(!1, !0);
      }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string", n = {};
      t && (e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {}
      }, n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON"
      });
      const i = {};
      i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((a) => ({
        boxInitialized: a.boxInitialized,
        boxMin: a.box.min.toArray(),
        boxMax: a.box.max.toArray(),
        sphereInitialized: a.sphereInitialized,
        sphereRadius: a.sphere.radius,
        sphereCenter: a.sphere.center.toArray()
      })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = {
        center: i.boundingSphere.center.toArray(),
        radius: i.boundingSphere.radius
      }), this.boundingBox !== null && (i.boundingBox = {
        min: i.boundingBox.min.toArray(),
        max: i.boundingBox.max.toArray()
      }));
      function o(a, c) {
        return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
      }
      if (this.isScene)
        this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = o(e.geometries, this.geometry);
        const a = this.geometry.parameters;
        if (a !== void 0 && a.shapes !== void 0) {
          const c = a.shapes;
          if (Array.isArray(c))
            for (let l = 0, u = c.length; l < u; l++) {
              const d = c[l];
              o(e.shapes, d);
            }
          else
            o(e.shapes, c);
        }
      }
      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (o(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0)
        if (Array.isArray(this.material)) {
          const a = [];
          for (let c = 0, l = this.material.length; c < l; c++)
            a.push(o(e.materials, this.material[c]));
          i.material = a;
        } else
          i.material = o(e.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let a = 0; a < this.children.length; a++)
          i.children.push(this.children[a].toJSON(e).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let a = 0; a < this.animations.length; a++) {
          const c = this.animations[a];
          i.animations.push(o(e.animations, c));
        }
      }
      if (t) {
        const a = s(e.geometries), c = s(e.materials), l = s(e.textures), u = s(e.images), d = s(e.shapes), f = s(e.skeletons), h = s(e.animations), m = s(e.nodes);
        a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), h.length > 0 && (n.animations = h), m.length > 0 && (n.nodes = m);
      }
      return n.object = i, n;
      function s(a) {
        const c = [];
        for (const l in a) {
          const u = a[l];
          delete u.metadata, c.push(u);
        }
        return c;
      }
    }
    clone(e) {
      return new this.constructor().copy(this, e);
    }
    copy(e, t = !0) {
      if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
        for (let n = 0; n < e.children.length; n++) {
          const i = e.children[n];
          this.add(i.clone());
        }
      return this;
    }
  }
  pr.DEFAULT_UP = /* @__PURE__ */ new H(0, 1, 0);
  pr.DEFAULT_MATRIX_AUTO_UPDATE = !0;
  pr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
  const zt = /* @__PURE__ */ new H(), ar = /* @__PURE__ */ new H(), Xo = /* @__PURE__ */ new H(), sr = /* @__PURE__ */ new H(), un = /* @__PURE__ */ new H(), dn = /* @__PURE__ */ new H(), Lc = /* @__PURE__ */ new H(), Zo = /* @__PURE__ */ new H(), Jo = /* @__PURE__ */ new H(), Qo = /* @__PURE__ */ new H();
  class Ut {
    constructor(e = new H(), t = new H(), n = new H()) {
      this.a = e, this.b = t, this.c = n;
    }
    static getNormal(e, t, n, i) {
      i.subVectors(n, t), zt.subVectors(e, t), i.cross(zt);
      const o = i.lengthSq();
      return o > 0 ? i.multiplyScalar(1 / Math.sqrt(o)) : i.set(0, 0, 0);
    }
    // static/instance method to calculate barycentric coordinates
    // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
    static getBarycoord(e, t, n, i, o) {
      zt.subVectors(i, t), ar.subVectors(n, t), Xo.subVectors(e, t);
      const s = zt.dot(zt), a = zt.dot(ar), c = zt.dot(Xo), l = ar.dot(ar), u = ar.dot(Xo), d = s * l - a * a;
      if (d === 0)
        return o.set(0, 0, 0), null;
      const f = 1 / d, h = (l * c - a * u) * f, m = (s * u - a * c) * f;
      return o.set(1 - h - m, m, h);
    }
    static containsPoint(e, t, n, i) {
      return this.getBarycoord(e, t, n, i, sr) === null ? !1 : sr.x >= 0 && sr.y >= 0 && sr.x + sr.y <= 1;
    }
    static getInterpolation(e, t, n, i, o, s, a, c) {
      return this.getBarycoord(e, t, n, i, sr) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(o, sr.x), c.addScaledVector(s, sr.y), c.addScaledVector(a, sr.z), c);
    }
    static isFrontFacing(e, t, n, i) {
      return zt.subVectors(n, t), ar.subVectors(e, t), zt.cross(ar).dot(i) < 0;
    }
    set(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
    }
    setFromPointsAndIndices(e, t, n, i) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
    }
    setFromAttributeAndIndices(e, t, n, i) {
      return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    }
    getArea() {
      return zt.subVectors(this.c, this.b), ar.subVectors(this.a, this.b), zt.cross(ar).length() * 0.5;
    }
    getMidpoint(e) {
      return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(e) {
      return Ut.getNormal(this.a, this.b, this.c, e);
    }
    getPlane(e) {
      return e.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(e, t) {
      return Ut.getBarycoord(e, this.a, this.b, this.c, t);
    }
    getInterpolation(e, t, n, i, o) {
      return Ut.getInterpolation(e, this.a, this.b, this.c, t, n, i, o);
    }
    containsPoint(e) {
      return Ut.containsPoint(e, this.a, this.b, this.c);
    }
    isFrontFacing(e) {
      return Ut.isFrontFacing(this.a, this.b, this.c, e);
    }
    intersectsBox(e) {
      return e.intersectsTriangle(this);
    }
    closestPointToPoint(e, t) {
      const n = this.a, i = this.b, o = this.c;
      let s, a;
      un.subVectors(i, n), dn.subVectors(o, n), Zo.subVectors(e, n);
      const c = un.dot(Zo), l = dn.dot(Zo);
      if (c <= 0 && l <= 0)
        return t.copy(n);
      Jo.subVectors(e, i);
      const u = un.dot(Jo), d = dn.dot(Jo);
      if (u >= 0 && d <= u)
        return t.copy(i);
      const f = c * d - u * l;
      if (f <= 0 && c >= 0 && u <= 0)
        return s = c / (c - u), t.copy(n).addScaledVector(un, s);
      Qo.subVectors(e, o);
      const h = un.dot(Qo), m = dn.dot(Qo);
      if (m >= 0 && h <= m)
        return t.copy(o);
      const g = h * l - c * m;
      if (g <= 0 && l >= 0 && m <= 0)
        return a = l / (l - m), t.copy(n).addScaledVector(dn, a);
      const p = u * m - h * d;
      if (p <= 0 && d - u >= 0 && h - m >= 0)
        return Lc.subVectors(o, i), a = (d - u) / (d - u + (h - m)), t.copy(i).addScaledVector(Lc, a);
      const v = 1 / (p + g + f);
      return s = g * v, a = f * v, t.copy(n).addScaledVector(un, s).addScaledVector(dn, a);
    }
    equals(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    }
  }
  const Cu = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }, wr = { h: 0, s: 0, l: 0 }, _i = { h: 0, s: 0, l: 0 };
  function ea(r, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
  }
  class jt {
    constructor(e, t, n) {
      return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
    }
    set(e, t, n) {
      if (t === void 0 && n === void 0) {
        const i = e;
        i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
      } else
        this.setRGB(e, t, n);
      return this;
    }
    setScalar(e) {
      return this.r = e, this.g = e, this.b = e, this;
    }
    setHex(e, t = Or) {
      return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, kt.toWorkingColorSpace(this, t), this;
    }
    setRGB(e, t, n, i = kt.workingColorSpace) {
      return this.r = e, this.g = t, this.b = n, kt.toWorkingColorSpace(this, i), this;
    }
    setHSL(e, t, n, i = kt.workingColorSpace) {
      if (e = lh(e, 1), t = ht(t, 0, 1), n = ht(n, 0, 1), t === 0)
        this.r = this.g = this.b = n;
      else {
        const o = n <= 0.5 ? n * (1 + t) : n + t - n * t, s = 2 * n - o;
        this.r = ea(s, o, e + 1 / 3), this.g = ea(s, o, e), this.b = ea(s, o, e - 1 / 3);
      }
      return kt.toWorkingColorSpace(this, i), this;
    }
    setStyle(e, t = Or) {
      function n(o) {
        o !== void 0 && parseFloat(o) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
      }
      let i;
      if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
        let o;
        const s = i[1], a = i[2];
        switch (s) {
          case "rgb":
          case "rgba":
            if (o = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
              return n(o[4]), this.setRGB(
                Math.min(255, parseInt(o[1], 10)) / 255,
                Math.min(255, parseInt(o[2], 10)) / 255,
                Math.min(255, parseInt(o[3], 10)) / 255,
                t
              );
            if (o = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
              return n(o[4]), this.setRGB(
                Math.min(100, parseInt(o[1], 10)) / 100,
                Math.min(100, parseInt(o[2], 10)) / 100,
                Math.min(100, parseInt(o[3], 10)) / 100,
                t
              );
            break;
          case "hsl":
          case "hsla":
            if (o = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
              return n(o[4]), this.setHSL(
                parseFloat(o[1]) / 360,
                parseFloat(o[2]) / 100,
                parseFloat(o[3]) / 100,
                t
              );
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + e);
        }
      } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
        const o = i[1], s = o.length;
        if (s === 3)
          return this.setRGB(
            parseInt(o.charAt(0), 16) / 15,
            parseInt(o.charAt(1), 16) / 15,
            parseInt(o.charAt(2), 16) / 15,
            t
          );
        if (s === 6)
          return this.setHex(parseInt(o, 16), t);
        console.warn("THREE.Color: Invalid hex color " + e);
      } else if (e && e.length > 0)
        return this.setColorName(e, t);
      return this;
    }
    setColorName(e, t = Or) {
      const n = Cu[e.toLowerCase()];
      return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this;
    }
    copySRGBToLinear(e) {
      return this.r = Sn(e.r), this.g = Sn(e.g), this.b = Sn(e.b), this;
    }
    copyLinearToSRGB(e) {
      return this.r = jo(e.r), this.g = jo(e.g), this.b = jo(e.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(e = Or) {
      return kt.fromWorkingColorSpace(it.copy(this), e), Math.round(ht(it.r * 255, 0, 255)) * 65536 + Math.round(ht(it.g * 255, 0, 255)) * 256 + Math.round(ht(it.b * 255, 0, 255));
    }
    getHexString(e = Or) {
      return ("000000" + this.getHex(e).toString(16)).slice(-6);
    }
    getHSL(e, t = kt.workingColorSpace) {
      kt.fromWorkingColorSpace(it.copy(this), t);
      const n = it.r, i = it.g, o = it.b, s = Math.max(n, i, o), a = Math.min(n, i, o);
      let c, l;
      const u = (a + s) / 2;
      if (a === s)
        c = 0, l = 0;
      else {
        const d = s - a;
        switch (l = u <= 0.5 ? d / (s + a) : d / (2 - s - a), s) {
          case n:
            c = (i - o) / d + (i < o ? 6 : 0);
            break;
          case i:
            c = (o - n) / d + 2;
            break;
          case o:
            c = (n - i) / d + 4;
            break;
        }
        c /= 6;
      }
      return e.h = c, e.s = l, e.l = u, e;
    }
    getRGB(e, t = kt.workingColorSpace) {
      return kt.fromWorkingColorSpace(it.copy(this), t), e.r = it.r, e.g = it.g, e.b = it.b, e;
    }
    getStyle(e = Or) {
      kt.fromWorkingColorSpace(it.copy(this), e);
      const t = it.r, n = it.g, i = it.b;
      return e !== Or ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
    }
    offsetHSL(e, t, n) {
      return this.getHSL(wr), this.setHSL(wr.h + e, wr.s + t, wr.l + n);
    }
    add(e) {
      return this.r += e.r, this.g += e.g, this.b += e.b, this;
    }
    addColors(e, t) {
      return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
    }
    addScalar(e) {
      return this.r += e, this.g += e, this.b += e, this;
    }
    sub(e) {
      return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
    }
    multiply(e) {
      return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
    }
    multiplyScalar(e) {
      return this.r *= e, this.g *= e, this.b *= e, this;
    }
    lerp(e, t) {
      return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
    }
    lerpColors(e, t, n) {
      return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
    }
    lerpHSL(e, t) {
      this.getHSL(wr), e.getHSL(_i);
      const n = Fo(wr.h, _i.h, t), i = Fo(wr.s, _i.s, t), o = Fo(wr.l, _i.l, t);
      return this.setHSL(n, i, o), this;
    }
    setFromVector3(e) {
      return this.r = e.x, this.g = e.y, this.b = e.z, this;
    }
    applyMatrix3(e) {
      const t = this.r, n = this.g, i = this.b, o = e.elements;
      return this.r = o[0] * t + o[3] * n + o[6] * i, this.g = o[1] * t + o[4] * n + o[7] * i, this.b = o[2] * t + o[5] * n + o[8] * i, this;
    }
    equals(e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    }
    fromArray(e, t = 0) {
      return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
    }
    toArray(e = [], t = 0) {
      return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
    }
    fromBufferAttribute(e, t) {
      return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  }
  const it = /* @__PURE__ */ new jt();
  jt.NAMES = Cu;
  let _h = 0;
  class wu extends yo {
    constructor() {
      super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: _h++ }), this.uuid = ui(), this.name = "", this.type = "Material", this.blending = mc, this.side = La, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = vc, this.blendDst = yc, this.blendEquation = gc, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new jt(0, 0, 0), this.blendAlpha = 0, this.depthFunc = bc, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = wc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = tn, this.stencilZFail = tn, this.stencilZPass = tn, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(e) {
      this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(e) {
      if (e !== void 0)
        for (const t in e) {
          const n = e[t];
          if (n === void 0) {
            console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
            continue;
          }
          const i = this[t];
          if (i === void 0) {
            console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
            continue;
          }
          i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
        }
    }
    toJSON(e) {
      const t = e === void 0 || typeof e == "string";
      t && (e = {
        textures: {},
        images: {}
      });
      const n = {
        metadata: {
          version: 4.6,
          type: "Material",
          generator: "Material.toJSON"
        }
      };
      n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== mc && (n.blending = this.blending), this.side !== La && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== vc && (n.blendSrc = this.blendSrc), this.blendDst !== yc && (n.blendDst = this.blendDst), this.blendEquation !== gc && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== bc && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== wc && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== tn && (n.stencilFail = this.stencilFail), this.stencilZFail !== tn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== tn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
      function i(o) {
        const s = [];
        for (const a in o) {
          const c = o[a];
          delete c.metadata, s.push(c);
        }
        return s;
      }
      if (t) {
        const o = i(e.textures), s = i(e.images);
        o.length > 0 && (n.textures = o), s.length > 0 && (n.images = s);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
      const t = e.clippingPlanes;
      let n = null;
      if (t !== null) {
        const i = t.length;
        n = new Array(i);
        for (let o = 0; o !== i; ++o)
          n[o] = t[o].clone();
      }
      return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    onBuild() {
      console.warn("Material: onBuild() has been removed.");
    }
    onBeforeRender() {
      console.warn("Material: onBeforeRender() has been removed.");
    }
  }
  class Th extends wu {
    constructor(e) {
      super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new jt(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new An(), this.combine = yu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
    }
  }
  const We = /* @__PURE__ */ new H(), Ti = /* @__PURE__ */ new et();
  class En {
    constructor(e, t, n = !1) {
      if (Array.isArray(e))
        throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Mc, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = oh, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(e) {
      e === !0 && this.version++;
    }
    get updateRange() {
      return dh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
    }
    setUsage(e) {
      return this.usage = e, this;
    }
    addUpdateRange(e, t) {
      this.updateRanges.push({ start: e, count: t });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(e) {
      return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
    }
    copyAt(e, t, n) {
      e *= this.itemSize, n *= t.itemSize;
      for (let i = 0, o = this.itemSize; i < o; i++)
        this.array[e + i] = t.array[n + i];
      return this;
    }
    copyArray(e) {
      return this.array.set(e), this;
    }
    applyMatrix3(e) {
      if (this.itemSize === 2)
        for (let t = 0, n = this.count; t < n; t++)
          Ti.fromBufferAttribute(this, t), Ti.applyMatrix3(e), this.setXY(t, Ti.x, Ti.y);
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++)
          We.fromBufferAttribute(this, t), We.applyMatrix3(e), this.setXYZ(t, We.x, We.y, We.z);
      return this;
    }
    applyMatrix4(e) {
      for (let t = 0, n = this.count; t < n; t++)
        We.fromBufferAttribute(this, t), We.applyMatrix4(e), this.setXYZ(t, We.x, We.y, We.z);
      return this;
    }
    applyNormalMatrix(e) {
      for (let t = 0, n = this.count; t < n; t++)
        We.fromBufferAttribute(this, t), We.applyNormalMatrix(e), this.setXYZ(t, We.x, We.y, We.z);
      return this;
    }
    transformDirection(e) {
      for (let t = 0, n = this.count; t < n; t++)
        We.fromBufferAttribute(this, t), We.transformDirection(e), this.setXYZ(t, We.x, We.y, We.z);
      return this;
    }
    set(e, t = 0) {
      return this.array.set(e, t), this;
    }
    getComponent(e, t) {
      let n = this.array[e * this.itemSize + t];
      return this.normalized && (n = Hn(n, this.array)), n;
    }
    setComponent(e, t, n) {
      return this.normalized && (n = dt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
    }
    getX(e) {
      let t = this.array[e * this.itemSize];
      return this.normalized && (t = Hn(t, this.array)), t;
    }
    setX(e, t) {
      return this.normalized && (t = dt(t, this.array)), this.array[e * this.itemSize] = t, this;
    }
    getY(e) {
      let t = this.array[e * this.itemSize + 1];
      return this.normalized && (t = Hn(t, this.array)), t;
    }
    setY(e, t) {
      return this.normalized && (t = dt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
    }
    getZ(e) {
      let t = this.array[e * this.itemSize + 2];
      return this.normalized && (t = Hn(t, this.array)), t;
    }
    setZ(e, t) {
      return this.normalized && (t = dt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
    }
    getW(e) {
      let t = this.array[e * this.itemSize + 3];
      return this.normalized && (t = Hn(t, this.array)), t;
    }
    setW(e, t) {
      return this.normalized && (t = dt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
    }
    setXY(e, t, n) {
      return e *= this.itemSize, this.normalized && (t = dt(t, this.array), n = dt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
    }
    setXYZ(e, t, n, i) {
      return e *= this.itemSize, this.normalized && (t = dt(t, this.array), n = dt(n, this.array), i = dt(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
    }
    setXYZW(e, t, n, i, o) {
      return e *= this.itemSize, this.normalized && (t = dt(t, this.array), n = dt(n, this.array), i = dt(i, this.array), o = dt(o, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = o, this;
    }
    onUpload(e) {
      return this.onUploadCallback = e, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const e = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized
      };
      return this.name !== "" && (e.name = this.name), this.usage !== Mc && (e.usage = this.usage), e;
    }
  }
  class Oh extends En {
    constructor(e, t, n) {
      super(new Uint16Array(e), t, n);
    }
  }
  class Rh extends En {
    constructor(e, t, n) {
      super(new Uint32Array(e), t, n);
    }
  }
  class Yi extends En {
    constructor(e, t, n) {
      super(new Float32Array(e), t, n);
    }
  }
  let Ah = 0;
  const Tt = /* @__PURE__ */ new Ht(), ta = /* @__PURE__ */ new pr(), fn = /* @__PURE__ */ new H(), xt = /* @__PURE__ */ new fi(), Un = /* @__PURE__ */ new fi(), Ze = /* @__PURE__ */ new H();
  class bo extends yo {
    constructor() {
      super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Ah++ }), this.uuid = ui(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(e) {
      return Array.isArray(e) ? this.index = new (uh(e) ? Rh : Oh)(e, 1) : this.index = e, this;
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    setAttribute(e, t) {
      return this.attributes[e] = t, this;
    }
    deleteAttribute(e) {
      return delete this.attributes[e], this;
    }
    hasAttribute(e) {
      return this.attributes[e] !== void 0;
    }
    addGroup(e, t, n = 0) {
      this.groups.push({
        start: e,
        count: t,
        materialIndex: n
      });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(e, t) {
      this.drawRange.start = e, this.drawRange.count = t;
    }
    applyMatrix4(e) {
      const t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
      const n = this.attributes.normal;
      if (n !== void 0) {
        const o = new kr().getNormalMatrix(e);
        n.applyNormalMatrix(o), n.needsUpdate = !0;
      }
      const i = this.attributes.tangent;
      return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
    }
    applyQuaternion(e) {
      return Tt.makeRotationFromQuaternion(e), this.applyMatrix4(Tt), this;
    }
    rotateX(e) {
      return Tt.makeRotationX(e), this.applyMatrix4(Tt), this;
    }
    rotateY(e) {
      return Tt.makeRotationY(e), this.applyMatrix4(Tt), this;
    }
    rotateZ(e) {
      return Tt.makeRotationZ(e), this.applyMatrix4(Tt), this;
    }
    translate(e, t, n) {
      return Tt.makeTranslation(e, t, n), this.applyMatrix4(Tt), this;
    }
    scale(e, t, n) {
      return Tt.makeScale(e, t, n), this.applyMatrix4(Tt), this;
    }
    lookAt(e) {
      return ta.lookAt(e), ta.updateMatrix(), this.applyMatrix4(ta.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(fn).negate(), this.translate(fn.x, fn.y, fn.z), this;
    }
    setFromPoints(e) {
      const t = [];
      for (let n = 0, i = e.length; n < i; n++) {
        const o = e[n];
        t.push(o.x, o.y, o.z || 0);
      }
      return this.setAttribute("position", new Yi(t, 3)), this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new fi());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(
          new H(-1 / 0, -1 / 0, -1 / 0),
          new H(1 / 0, 1 / 0, 1 / 0)
        );
        return;
      }
      if (e !== void 0) {
        if (this.boundingBox.setFromBufferAttribute(e), t)
          for (let n = 0, i = t.length; n < i; n++) {
            const o = t[n];
            xt.setFromBufferAttribute(o), this.morphTargetsRelative ? (Ze.addVectors(this.boundingBox.min, xt.min), this.boundingBox.expandByPoint(Ze), Ze.addVectors(this.boundingBox.max, xt.max), this.boundingBox.expandByPoint(Ze)) : (this.boundingBox.expandByPoint(xt.min), this.boundingBox.expandByPoint(xt.max));
          }
      } else
        this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new Eu());
      const e = this.attributes.position, t = this.morphAttributes.position;
      if (e && e.isGLBufferAttribute) {
        console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new H(), 1 / 0);
        return;
      }
      if (e) {
        const n = this.boundingSphere.center;
        if (xt.setFromBufferAttribute(e), t)
          for (let o = 0, s = t.length; o < s; o++) {
            const a = t[o];
            Un.setFromBufferAttribute(a), this.morphTargetsRelative ? (Ze.addVectors(xt.min, Un.min), xt.expandByPoint(Ze), Ze.addVectors(xt.max, Un.max), xt.expandByPoint(Ze)) : (xt.expandByPoint(Un.min), xt.expandByPoint(Un.max));
          }
        xt.getCenter(n);
        let i = 0;
        for (let o = 0, s = e.count; o < s; o++)
          Ze.fromBufferAttribute(e, o), i = Math.max(i, n.distanceToSquared(Ze));
        if (t)
          for (let o = 0, s = t.length; o < s; o++) {
            const a = t[o], c = this.morphTargetsRelative;
            for (let l = 0, u = a.count; l < u; l++)
              Ze.fromBufferAttribute(a, l), c && (fn.fromBufferAttribute(e, l), Ze.add(fn)), i = Math.max(i, n.distanceToSquared(Ze));
          }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const e = this.index, t = this.attributes;
      if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
        console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
        return;
      }
      const n = t.position, i = t.normal, o = t.uv;
      this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new En(new Float32Array(4 * n.count), 4));
      const s = this.getAttribute("tangent"), a = [], c = [];
      for (let M = 0; M < n.count; M++)
        a[M] = new H(), c[M] = new H();
      const l = new H(), u = new H(), d = new H(), f = new et(), h = new et(), m = new et(), g = new H(), p = new H();
      function v(M, A, N) {
        l.fromBufferAttribute(n, M), u.fromBufferAttribute(n, A), d.fromBufferAttribute(n, N), f.fromBufferAttribute(o, M), h.fromBufferAttribute(o, A), m.fromBufferAttribute(o, N), u.sub(l), d.sub(l), h.sub(f), m.sub(f);
        const $ = 1 / (h.x * m.y - m.x * h.y);
        isFinite($) && (g.copy(u).multiplyScalar(m.y).addScaledVector(d, -h.y).multiplyScalar($), p.copy(d).multiplyScalar(h.x).addScaledVector(u, -m.x).multiplyScalar($), a[M].add(g), a[A].add(g), a[N].add(g), c[M].add(p), c[A].add(p), c[N].add(p));
      }
      let y = this.groups;
      y.length === 0 && (y = [{
        start: 0,
        count: e.count
      }]);
      for (let M = 0, A = y.length; M < A; ++M) {
        const N = y[M], $ = N.start, F = N.count;
        for (let L = $, D = $ + F; L < D; L += 3)
          v(
            e.getX(L + 0),
            e.getX(L + 1),
            e.getX(L + 2)
          );
      }
      const x = new H(), E = new H(), b = new H(), _ = new H();
      function S(M) {
        b.fromBufferAttribute(i, M), _.copy(b);
        const A = a[M];
        x.copy(A), x.sub(b.multiplyScalar(b.dot(A))).normalize(), E.crossVectors(_, A);
        const $ = E.dot(c[M]) < 0 ? -1 : 1;
        s.setXYZW(M, x.x, x.y, x.z, $);
      }
      for (let M = 0, A = y.length; M < A; ++M) {
        const N = y[M], $ = N.start, F = N.count;
        for (let L = $, D = $ + F; L < D; L += 3)
          S(e.getX(L + 0)), S(e.getX(L + 1)), S(e.getX(L + 2));
      }
    }
    computeVertexNormals() {
      const e = this.index, t = this.getAttribute("position");
      if (t !== void 0) {
        let n = this.getAttribute("normal");
        if (n === void 0)
          n = new En(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
        else
          for (let f = 0, h = n.count; f < h; f++)
            n.setXYZ(f, 0, 0, 0);
        const i = new H(), o = new H(), s = new H(), a = new H(), c = new H(), l = new H(), u = new H(), d = new H();
        if (e)
          for (let f = 0, h = e.count; f < h; f += 3) {
            const m = e.getX(f + 0), g = e.getX(f + 1), p = e.getX(f + 2);
            i.fromBufferAttribute(t, m), o.fromBufferAttribute(t, g), s.fromBufferAttribute(t, p), u.subVectors(s, o), d.subVectors(i, o), u.cross(d), a.fromBufferAttribute(n, m), c.fromBufferAttribute(n, g), l.fromBufferAttribute(n, p), a.add(u), c.add(u), l.add(u), n.setXYZ(m, a.x, a.y, a.z), n.setXYZ(g, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
          }
        else
          for (let f = 0, h = t.count; f < h; f += 3)
            i.fromBufferAttribute(t, f + 0), o.fromBufferAttribute(t, f + 1), s.fromBufferAttribute(t, f + 2), u.subVectors(s, o), d.subVectors(i, o), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
        this.normalizeNormals(), n.needsUpdate = !0;
      }
    }
    normalizeNormals() {
      const e = this.attributes.normal;
      for (let t = 0, n = e.count; t < n; t++)
        Ze.fromBufferAttribute(e, t), Ze.normalize(), e.setXYZ(t, Ze.x, Ze.y, Ze.z);
    }
    toNonIndexed() {
      function e(a, c) {
        const l = a.array, u = a.itemSize, d = a.normalized, f = new l.constructor(c.length * u);
        let h = 0, m = 0;
        for (let g = 0, p = c.length; g < p; g++) {
          a.isInterleavedBufferAttribute ? h = c[g] * a.data.stride + a.offset : h = c[g] * u;
          for (let v = 0; v < u; v++)
            f[m++] = l[h++];
        }
        return new En(f, u, d);
      }
      if (this.index === null)
        return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const t = new bo(), n = this.index.array, i = this.attributes;
      for (const a in i) {
        const c = i[a], l = e(c, n);
        t.setAttribute(a, l);
      }
      const o = this.morphAttributes;
      for (const a in o) {
        const c = [], l = o[a];
        for (let u = 0, d = l.length; u < d; u++) {
          const f = l[u], h = e(f, n);
          c.push(h);
        }
        t.morphAttributes[a] = c;
      }
      t.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let a = 0, c = s.length; a < c; a++) {
        const l = s[a];
        t.addGroup(l.start, l.count, l.materialIndex);
      }
      return t;
    }
    toJSON() {
      const e = {
        metadata: {
          version: 4.6,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON"
        }
      };
      if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
        const c = this.parameters;
        for (const l in c)
          c[l] !== void 0 && (e[l] = c[l]);
        return e;
      }
      e.data = { attributes: {} };
      const t = this.index;
      t !== null && (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array)
      });
      const n = this.attributes;
      for (const c in n) {
        const l = n[c];
        e.data.attributes[c] = l.toJSON(e.data);
      }
      const i = {};
      let o = !1;
      for (const c in this.morphAttributes) {
        const l = this.morphAttributes[c], u = [];
        for (let d = 0, f = l.length; d < f; d++) {
          const h = l[d];
          u.push(h.toJSON(e.data));
        }
        u.length > 0 && (i[c] = u, o = !0);
      }
      o && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
      const s = this.groups;
      s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
      const a = this.boundingSphere;
      return a !== null && (e.data.boundingSphere = {
        center: a.center.toArray(),
        radius: a.radius
      }), e;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(e) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const t = {};
      this.name = e.name;
      const n = e.index;
      n !== null && this.setIndex(n.clone(t));
      const i = e.attributes;
      for (const l in i) {
        const u = i[l];
        this.setAttribute(l, u.clone(t));
      }
      const o = e.morphAttributes;
      for (const l in o) {
        const u = [], d = o[l];
        for (let f = 0, h = d.length; f < h; f++)
          u.push(d[f].clone(t));
        this.morphAttributes[l] = u;
      }
      this.morphTargetsRelative = e.morphTargetsRelative;
      const s = e.groups;
      for (let l = 0, u = s.length; l < u; l++) {
        const d = s[l];
        this.addGroup(d.start, d.count, d.materialIndex);
      }
      const a = e.boundingBox;
      a !== null && (this.boundingBox = a.clone());
      const c = e.boundingSphere;
      return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  }
  const Fc = /* @__PURE__ */ new Ht(), jr = /* @__PURE__ */ new yh(), Oi = /* @__PURE__ */ new Eu(), Bc = /* @__PURE__ */ new H(), hn = /* @__PURE__ */ new H(), pn = /* @__PURE__ */ new H(), mn = /* @__PURE__ */ new H(), ra = /* @__PURE__ */ new H(), Ri = /* @__PURE__ */ new H(), Ai = /* @__PURE__ */ new et(), Pi = /* @__PURE__ */ new et(), Ni = /* @__PURE__ */ new et(), jc = /* @__PURE__ */ new H(), Hc = /* @__PURE__ */ new H(), Kc = /* @__PURE__ */ new H(), Di = /* @__PURE__ */ new H(), ki = /* @__PURE__ */ new H();
  class Ph extends pr {
    constructor(e = new bo(), t = new Th()) {
      super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
    }
    copy(e, t) {
      return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
    }
    updateMorphTargets() {
      const t = this.geometry.morphAttributes, n = Object.keys(t);
      if (n.length > 0) {
        const i = t[n[0]];
        if (i !== void 0) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let o = 0, s = i.length; o < s; o++) {
            const a = i[o].name || String(o);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = o;
          }
        }
      }
    }
    getVertexPosition(e, t) {
      const n = this.geometry, i = n.attributes.position, o = n.morphAttributes.position, s = n.morphTargetsRelative;
      t.fromBufferAttribute(i, e);
      const a = this.morphTargetInfluences;
      if (o && a) {
        Ri.set(0, 0, 0);
        for (let c = 0, l = o.length; c < l; c++) {
          const u = a[c], d = o[c];
          u !== 0 && (ra.fromBufferAttribute(d, e), s ? Ri.addScaledVector(ra, u) : Ri.addScaledVector(ra.sub(t), u));
        }
        t.add(Ri);
      }
      return t;
    }
    raycast(e, t) {
      const n = this.geometry, i = this.material, o = this.matrixWorld;
      i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Oi.copy(n.boundingSphere), Oi.applyMatrix4(o), jr.copy(e.ray).recast(e.near), !(Oi.containsPoint(jr.origin) === !1 && (jr.intersectSphere(Oi, Bc) === null || jr.origin.distanceToSquared(Bc) > (e.far - e.near) ** 2)) && (Fc.copy(o).invert(), jr.copy(e.ray).applyMatrix4(Fc), !(n.boundingBox !== null && jr.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, jr)));
    }
    _computeIntersections(e, t, n) {
      let i;
      const o = this.geometry, s = this.material, a = o.index, c = o.attributes.position, l = o.attributes.uv, u = o.attributes.uv1, d = o.attributes.normal, f = o.groups, h = o.drawRange;
      if (a !== null)
        if (Array.isArray(s))
          for (let m = 0, g = f.length; m < g; m++) {
            const p = f[m], v = s[p.materialIndex], y = Math.max(p.start, h.start), x = Math.min(a.count, Math.min(p.start + p.count, h.start + h.count));
            for (let E = y, b = x; E < b; E += 3) {
              const _ = a.getX(E), S = a.getX(E + 1), M = a.getX(E + 2);
              i = Ii(this, v, e, n, l, u, d, _, S, M), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = p.materialIndex, t.push(i));
            }
          }
        else {
          const m = Math.max(0, h.start), g = Math.min(a.count, h.start + h.count);
          for (let p = m, v = g; p < v; p += 3) {
            const y = a.getX(p), x = a.getX(p + 1), E = a.getX(p + 2);
            i = Ii(this, s, e, n, l, u, d, y, x, E), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
          }
        }
      else if (c !== void 0)
        if (Array.isArray(s))
          for (let m = 0, g = f.length; m < g; m++) {
            const p = f[m], v = s[p.materialIndex], y = Math.max(p.start, h.start), x = Math.min(c.count, Math.min(p.start + p.count, h.start + h.count));
            for (let E = y, b = x; E < b; E += 3) {
              const _ = E, S = E + 1, M = E + 2;
              i = Ii(this, v, e, n, l, u, d, _, S, M), i && (i.faceIndex = Math.floor(E / 3), i.face.materialIndex = p.materialIndex, t.push(i));
            }
          }
        else {
          const m = Math.max(0, h.start), g = Math.min(c.count, h.start + h.count);
          for (let p = m, v = g; p < v; p += 3) {
            const y = p, x = p + 1, E = p + 2;
            i = Ii(this, s, e, n, l, u, d, y, x, E), i && (i.faceIndex = Math.floor(p / 3), t.push(i));
          }
        }
    }
  }
  function Nh(r, e, t, n, i, o, s, a) {
    let c;
    if (e.side === eh ? c = n.intersectTriangle(s, o, i, !0, a) : c = n.intersectTriangle(i, o, s, e.side === La, a), c === null) return null;
    ki.copy(a), ki.applyMatrix4(r.matrixWorld);
    const l = t.ray.origin.distanceTo(ki);
    return l < t.near || l > t.far ? null : {
      distance: l,
      point: ki.clone(),
      object: r
    };
  }
  function Ii(r, e, t, n, i, o, s, a, c, l) {
    r.getVertexPosition(a, hn), r.getVertexPosition(c, pn), r.getVertexPosition(l, mn);
    const u = Nh(r, e, t, n, hn, pn, mn, Di);
    if (u) {
      i && (Ai.fromBufferAttribute(i, a), Pi.fromBufferAttribute(i, c), Ni.fromBufferAttribute(i, l), u.uv = Ut.getInterpolation(Di, hn, pn, mn, Ai, Pi, Ni, new et())), o && (Ai.fromBufferAttribute(o, a), Pi.fromBufferAttribute(o, c), Ni.fromBufferAttribute(o, l), u.uv1 = Ut.getInterpolation(Di, hn, pn, mn, Ai, Pi, Ni, new et())), s && (jc.fromBufferAttribute(s, a), Hc.fromBufferAttribute(s, c), Kc.fromBufferAttribute(s, l), u.normal = Ut.getInterpolation(Di, hn, pn, mn, jc, Hc, Kc, new H()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
      const d = {
        a,
        b: c,
        c: l,
        normal: new H(),
        materialIndex: 0
      };
      Ut.getNormal(hn, pn, mn, d.normal), u.face = d;
    }
    return u;
  }
  class Dh extends wu {
    constructor(e) {
      super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new jt(16777215), this.specular = new jt(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new jt(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = sh, this.normalScale = new et(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new An(), this.combine = yu, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
    }
    copy(e) {
      return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
    }
  }
  const Wc = {
    enabled: !1,
    files: {},
    add: function(r, e) {
      this.enabled !== !1 && (this.files[r] = e);
    },
    get: function(r) {
      if (this.enabled !== !1)
        return this.files[r];
    },
    remove: function(r) {
      delete this.files[r];
    },
    clear: function() {
      this.files = {};
    }
  };
  class kh {
    constructor(e, t, n) {
      const i = this;
      let o = !1, s = 0, a = 0, c;
      const l = [];
      this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
        a++, o === !1 && i.onStart !== void 0 && i.onStart(u, s, a), o = !0;
      }, this.itemEnd = function(u) {
        s++, i.onProgress !== void 0 && i.onProgress(u, s, a), s === a && (o = !1, i.onLoad !== void 0 && i.onLoad());
      }, this.itemError = function(u) {
        i.onError !== void 0 && i.onError(u);
      }, this.resolveURL = function(u) {
        return c ? c(u) : u;
      }, this.setURLModifier = function(u) {
        return c = u, this;
      }, this.addHandler = function(u, d) {
        return l.push(u, d), this;
      }, this.removeHandler = function(u) {
        const d = l.indexOf(u);
        return d !== -1 && l.splice(d, 2), this;
      }, this.getHandler = function(u) {
        for (let d = 0, f = l.length; d < f; d += 2) {
          const h = l[d], m = l[d + 1];
          if (h.global && (h.lastIndex = 0), h.test(u))
            return m;
        }
        return null;
      };
    }
  }
  const Ih = /* @__PURE__ */ new kh();
  class $s {
    constructor(e) {
      this.manager = e !== void 0 ? e : Ih, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(e, t) {
      const n = this;
      return new Promise(function(i, o) {
        n.load(e, i, t, o);
      });
    }
    parse() {
    }
    setCrossOrigin(e) {
      return this.crossOrigin = e, this;
    }
    setWithCredentials(e) {
      return this.withCredentials = e, this;
    }
    setPath(e) {
      return this.path = e, this;
    }
    setResourcePath(e) {
      return this.resourcePath = e, this;
    }
    setRequestHeader(e) {
      return this.requestHeader = e, this;
    }
  }
  $s.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  class $h extends $s {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
      const o = this, s = Wc.get(e);
      if (s !== void 0)
        return o.manager.itemStart(e), setTimeout(function() {
          t && t(s), o.manager.itemEnd(e);
        }, 0), s;
      const a = Ba("img");
      function c() {
        u(), Wc.add(e, this), t && t(this), o.manager.itemEnd(e);
      }
      function l(d) {
        u(), i && i(d), o.manager.itemError(e), o.manager.itemEnd(e);
      }
      function u() {
        a.removeEventListener("load", c, !1), a.removeEventListener("error", l, !1);
      }
      return a.addEventListener("load", c, !1), a.addEventListener("error", l, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), o.manager.itemStart(e), a.src = e, a;
    }
  }
  class zh extends $s {
    constructor(e) {
      super(e);
    }
    load(e, t, n, i) {
      const o = new Nr(), s = new $h(this.manager);
      return s.setCrossOrigin(this.crossOrigin), s.setPath(this.path), s.load(e, function(a) {
        o.image = a, o.needsUpdate = !0, t !== void 0 && t(o);
      }, n, i), o;
    }
  }
  typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
    revision: vu
  } }));
  typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = vu);
  const $e = {
    Integer: 0,
    Length: 2,
    Angle: 3,
    RealNum: 4,
    LightSw: 5,
    ColRGB: 6,
    Intens: 7,
    LineTyp: 8,
    Mater: 9,
    FillPat: 10,
    PenCol: 11,
    CString: 12,
    Boolean: 13,
    Separator: 14,
    Title: 15,
    BuildingMaterial: 16,
    Profile: 17,
    Dictionary: 18
  }, Ot = {
    Int: 0,
    String: 1,
    Dict: 2,
    Num: 3
  }, qn = (r) => {
    switch (r) {
      case $e.Integer:
      case $e.LightSw:
      case $e.Intens:
      case $e.LineTyp:
      case $e.Mater:
      case $e.FillPat:
      case $e.PenCol:
      case $e.Boolean:
      case $e.BuildingMaterial:
      case $e.Profile:
        return Ot.Int;
      case $e.CString:
        return Ot.String;
      case $e.Dictionary:
        return Ot.Dict;
      default:
        return Ot.Num;
    }
  }, Lh = ({
    location: r,
    parametersJsonFileName: e,
    current: t,
    materialAndPenTable: n,
    generate3DModelOnCurrentGSM: i
  }) => {
    if (!t) return;
    const [o, s] = lt(null), [a, c] = lt(), l = (p, v) => p == $e.PenCol ? n == null ? void 0 : n.pens : p == $e.Mater ? n == null ? void 0 : n.surfaces : qn(p) === Ot.String ? v.strValues : v.numRanges, u = (p, v) => {
      if (d(p, v)) {
        var y = l(p, v);
        return y == null ? void 0 : y.map((x, E) => {
          var b = {}, _ = "";
          if (p === $e.PenCol)
            _ = x[0], b = {
              ...b,
              value: x[0],
              style: { backgroundColor: `rgb(${x[1]},${x[2]},${x[3]})` }
            };
          else if (p === $e.Mater)
            _ = x[1], b = {
              ...b,
              value: x[0]
            };
          else if (qn(p) == Ot.String)
            b = {
              ...b,
              value: x
            }, _ = x;
          else {
            var S = f(x), M = "";
            S.valueDescription != "" ? M = S.valueDescription : M = S.value, b = {
              ...b,
              value: S.value
            }, _ = M;
          }
          return /* @__PURE__ */ ve.jsx("option", { ...b, children: _ }, E);
        });
      }
    }, d = (p, v) => {
      if (p == $e.PenCol || p == $e.Mater)
        return !0;
      switch (qn(p)) {
        case Ot.Int:
        case Ot.Num:
          return v.hasValues && !v.hasRange;
        default:
          return v.hasValues;
      }
    };
    function f(p) {
      return {
        value: p[0],
        lowerLimit: p[1],
        upperLimit: p[2],
        stepBeg: p[3],
        stepVal: p[4],
        flags: p[5],
        valueDescription: p[6]
      };
    }
    mt(() => {
      fetch(`${r}/${e}`).then((p) => p.json()).then((p) => {
        s(p);
      }).catch((p) => console.error("Error fetching parameters:", p));
    }, [r, e]), mt(() => {
      a && o && (i(
        o.parameters[a].name,
        o
      ), c(null));
    }, [a, o]);
    const h = (p, v) => (y) => {
      const { name: x, value: E, type: b, checked: _, nodeName: S, options: M, selectedIndex: A } = y.target;
      var N = b === "checkbox" ? _ : E;
      S.toLowerCase() === "select" && (N = M[A].value), c(($) => x), s(($) => {
        const F = [...$.parameters];
        switch (qn(F[v].type)) {
          case Ot.Num:
          case Ot.Int:
            N = Number(N);
            break;
        }
        return F[v] = { ...F[v], value: N }, { ...$, parameters: F };
      });
    }, m = (p) => p.description !== "" ? p.description : p.name.toLowerCase() === "a" ? "Dimension 1" : p.name.toLowerCase() === "b" ? "Dimension 2" : p.name.toLowerCase() === "zzyzx" ? "Height" : p.name, g = (p, v) => {
      let y = null;
      if (d(p.type, p.range))
        y = /* @__PURE__ */ ve.jsx(
          "select",
          {
            name: v,
            value: p.value,
            onChange: h(p, v),
            children: u(
              p.type,
              p.range
            )
          }
        );
      else {
        const E = Array.isArray(p.value);
        var x;
        switch (E && (p.value.length, Array.isArray(p.value[0]) && p.value[0].length), qn(p.type)) {
          case Ot.Int:
            switch (p.type) {
              case $e.Boolean:
                x = "checkbox";
                break;
              default:
                x = "number";
                break;
            }
            break;
          case Ot.Num:
            x = "number";
            break;
          default:
            x = "text";
            break;
        }
        y = /* @__PURE__ */ ve.jsx(
          "input",
          {
            type: E ? "text" : x,
            name: v,
            value: p.value,
            checked: p.type === $e.Boolean ? p.value : void 0,
            onChange: h(p, v)
          }
        );
      }
      return y;
    };
    return o ? /* @__PURE__ */ ve.jsx("form", { id: "parametersform", children: /* @__PURE__ */ ve.jsxs("table", { border: "collapse", children: [
      /* @__PURE__ */ ve.jsxs("thead", { children: [
        /* @__PURE__ */ ve.jsx("tr", { children: /* @__PURE__ */ ve.jsx("td", { id: "actGSM", colSpan: "2", style: { textAlign: "center" }, children: t == null ? void 0 : t.name }) }),
        /* @__PURE__ */ ve.jsx("tr", { children: /* @__PURE__ */ ve.jsxs("td", { colSpan: "2", style: { textAlign: "center" }, children: [
          "パラメータ設定 | ",
          /* @__PURE__ */ ve.jsx("a", { href: "#", onClick: () => i(), children: "元に設定する" })
        ] }) }),
        /* @__PURE__ */ ve.jsxs("tr", { children: [
          /* @__PURE__ */ ve.jsx("td", { children: "名称" }),
          /* @__PURE__ */ ve.jsx("td", { children: "値" })
        ] })
      ] }),
      /* @__PURE__ */ ve.jsx("tbody", { children: o.parameters.map(
        (p, v) => p.visible ? /* @__PURE__ */ ve.jsxs("tr", { children: [
          /* @__PURE__ */ ve.jsx(
            "td",
            {
              colSpan: p.type === $e.Title ? 2 : 1,
              style: {
                textAlign: p.type === $e.Title ? "center" : "",
                backgroundColor: p.type === $e.Title ? "#EEEEEE" : ""
              },
              children: m(p)
            }
          ),
          p.type !== $e.Title && /* @__PURE__ */ ve.jsx("td", { children: p.enabled ? g(p, v) : p.value })
        ] }, v) : null
      ) })
    ] }) }) : null;
  }, na = {
    GetMaterialAndPenTable: {
      Command: "GetMaterialAndPenTable"
    },
    GetLibraryObjects: {
      Command: "GetLibraryObjects"
    },
    Generate3DModel: {
      Command: "Generate3DModel"
    },
    GetPreviewImage: {
      Command: "GetPreviewImage"
    }
  }, Gn = {
    API: "http://yhk.tgl-cloud.com:8989/ConvertToJSON",
    FILE_UPLOAD: "http://yhk.tgl-cloud.com:8989/register"
  };
  function Fh({
    jsonData: r,
    textureLocation: e,
    textureLoadedCallback: t,
    setMeshs: n
  }) {
    return r ? (mt(() => {
      function i(c, l, u) {
        function d(h, m, g) {
          const p = h.texture;
          if (p != null) {
            const v = new zh().load(
              `${m}/${p.name}`,
              () => {
                u !== null && u();
              }
            );
            v.wrapS = ao, v.wrapT = ao, v.textureScale = new et(
              p.scale[0],
              p.scale[1]
            ), v.textureRotation = p.rotation;
            const y = new jt(1, 1, 1), x = new jt(1, 1, 1);
            g.ambient = y.getHex(), g.color = x.getHex(), g.map = v;
          }
        }
        const f = [];
        return c.forEach((h) => {
          const m = h.material, g = new jt(), p = new jt(), v = m.color, y = m.color;
          g.setRGB(
            v[0],
            v[1],
            v[2]
          ), p.setRGB(
            y[0],
            y[1],
            y[2]
          );
          const x = 1 - m.transparency.transmittance, E = x !== 1, b = {
            ambient: g.getHex(),
            color: p.getHex(),
            opacity: x,
            transparent: E,
            side: th
          };
          d(h, l, b), f.push(new Dh(b));
        }), f;
      }
      function o(c, l) {
        function u(p, v, y, x, E) {
          function b(D, U, P, R) {
            function k(z, T, O) {
              const B = Math.cos(O), j = Math.sin(O), V = z * B - T * j, ee = z * j + T * B;
              return new et(V, ee);
            }
            return k(D * R.x, -U * R.y, P);
          }
          const _ = p.material, S = p.parameters, M = new bo(), A = E[_], N = [], $ = [], F = [], L = [];
          for (let D = 0; D < S.length; D += 9) {
            const U = 3 * S[D + 0], P = 3 * S[D + 1], R = 3 * S[D + 2], k = 3 * S[D + 3], z = 3 * S[D + 4], T = 3 * S[D + 5], O = 2 * S[D + 6], B = 2 * S[D + 7], j = 2 * S[D + 8];
            if (N.push(v[U + 0], v[U + 1], v[U + 2]), N.push(v[P + 0], v[P + 1], v[P + 2]), N.push(v[R + 0], v[R + 1], v[R + 2]), $.push(y[k + 0], y[k + 1], y[k + 2]), $.push(y[z + 0], y[z + 1], y[z + 2]), $.push(y[T + 0], y[T + 1], y[T + 2]), A.map !== void 0 && A.map !== null) {
              const V = b(
                x[O + 0],
                x[O + 1],
                A.map.textureRotation,
                A.map.textureScale
              ), ee = b(
                x[B + 0],
                x[B + 1],
                A.map.textureRotation,
                A.map.textureScale
              ), Q = b(
                x[j + 0],
                x[j + 1],
                A.map.textureRotation,
                A.map.textureScale
              );
              F.push(V.x, V.y), F.push(ee.x, ee.y), F.push(Q.x, Q.y);
            }
            L.push(L.length, L.length + 1, L.length + 2);
          }
          return M.setAttribute(
            "position",
            new Yi(N, 3)
          ), M.setAttribute(
            "normal",
            new Yi($, 3)
          ), M.setAttribute(
            "uv",
            new Yi(F, 2)
          ), M.setIndex(L), new Ph(M, A);
        }
        const d = c.vertices;
        if (!d) return [];
        const f = c.normals;
        if (!f) return [];
        const h = c.uvs;
        if (!h) return [];
        const m = [];
        return c.triangles.forEach((p) => {
          m.push(u(p, d, f, h, l));
        }), m;
      }
      const s = i(
        r.materials,
        e,
        t
      );
      if (!s) return;
      const a = [];
      r.meshes.forEach((c) => {
        const l = o(c, s);
        l && a.push(...l);
      }), n(a);
    }, [r, e, t]), null) : [];
  }
  var Mu = { exports: {} };
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  (function(r) {
    (function() {
      var e = {}.hasOwnProperty;
      function t() {
        for (var o = "", s = 0; s < arguments.length; s++) {
          var a = arguments[s];
          a && (o = i(o, n(a)));
        }
        return o;
      }
      function n(o) {
        if (typeof o == "string" || typeof o == "number")
          return o;
        if (typeof o != "object")
          return "";
        if (Array.isArray(o))
          return t.apply(null, o);
        if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
          return o.toString();
        var s = "";
        for (var a in o)
          e.call(o, a) && o[a] && (s = i(s, a));
        return s;
      }
      function i(o, s) {
        return s ? o ? o + " " + s : o + s : o;
      }
      r.exports ? (t.default = t, r.exports = t) : window.classNames = t;
    })();
  })(Mu);
  var Bh = Mu.exports;
  const Re = /* @__PURE__ */ gu(Bh);
  function ze() {
    return ze = Object.assign ? Object.assign.bind() : function(r) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var n in t) ({}).hasOwnProperty.call(t, n) && (r[n] = t[n]);
      }
      return r;
    }, ze.apply(null, arguments);
  }
  var ja = { exports: {} }, we = {};
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Vc;
  function jh() {
    if (Vc) return we;
    Vc = 1;
    var r = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m;
    m = Symbol.for("react.module.reference");
    function g(p) {
      if (typeof p == "object" && p !== null) {
        var v = p.$$typeof;
        switch (v) {
          case r:
            switch (p = p.type, p) {
              case t:
              case i:
              case n:
              case l:
              case u:
                return p;
              default:
                switch (p = p && p.$$typeof, p) {
                  case a:
                  case s:
                  case c:
                  case f:
                  case d:
                  case o:
                    return p;
                  default:
                    return v;
                }
            }
          case e:
            return v;
        }
      }
    }
    return we.ContextConsumer = s, we.ContextProvider = o, we.Element = r, we.ForwardRef = c, we.Fragment = t, we.Lazy = f, we.Memo = d, we.Portal = e, we.Profiler = i, we.StrictMode = n, we.Suspense = l, we.SuspenseList = u, we.isAsyncMode = function() {
      return !1;
    }, we.isConcurrentMode = function() {
      return !1;
    }, we.isContextConsumer = function(p) {
      return g(p) === s;
    }, we.isContextProvider = function(p) {
      return g(p) === o;
    }, we.isElement = function(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }, we.isForwardRef = function(p) {
      return g(p) === c;
    }, we.isFragment = function(p) {
      return g(p) === t;
    }, we.isLazy = function(p) {
      return g(p) === f;
    }, we.isMemo = function(p) {
      return g(p) === d;
    }, we.isPortal = function(p) {
      return g(p) === e;
    }, we.isProfiler = function(p) {
      return g(p) === i;
    }, we.isStrictMode = function(p) {
      return g(p) === n;
    }, we.isSuspense = function(p) {
      return g(p) === l;
    }, we.isSuspenseList = function(p) {
      return g(p) === u;
    }, we.isValidElementType = function(p) {
      return typeof p == "string" || typeof p == "function" || p === t || p === i || p === n || p === l || p === u || p === h || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === d || p.$$typeof === o || p.$$typeof === s || p.$$typeof === c || p.$$typeof === m || p.getModuleId !== void 0);
    }, we.typeOf = g, we;
  }
  var Me = {};
  /**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var Uc;
  function Hh() {
    return Uc || (Uc = 1, process.env.NODE_ENV !== "production" && function() {
      var r = Symbol.for("react.element"), e = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = !1, g = !1, p = !1, v = !1, y = !1, x;
      x = Symbol.for("react.module.reference");
      function E(Z) {
        return !!(typeof Z == "string" || typeof Z == "function" || Z === t || Z === i || y || Z === n || Z === l || Z === u || v || Z === h || m || g || p || typeof Z == "object" && Z !== null && (Z.$$typeof === f || Z.$$typeof === d || Z.$$typeof === o || Z.$$typeof === s || Z.$$typeof === c || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        Z.$$typeof === x || Z.getModuleId !== void 0));
      }
      function b(Z) {
        if (typeof Z == "object" && Z !== null) {
          var Ae = Z.$$typeof;
          switch (Ae) {
            case r:
              var Ee = Z.type;
              switch (Ee) {
                case t:
                case i:
                case n:
                case l:
                case u:
                  return Ee;
                default:
                  var Be = Ee && Ee.$$typeof;
                  switch (Be) {
                    case a:
                    case s:
                    case c:
                    case f:
                    case d:
                    case o:
                      return Be;
                    default:
                      return Ae;
                  }
              }
            case e:
              return Ae;
          }
        }
      }
      var _ = s, S = o, M = r, A = c, N = t, $ = f, F = d, L = e, D = i, U = n, P = l, R = u, k = !1, z = !1;
      function T(Z) {
        return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function O(Z) {
        return z || (z = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
      }
      function B(Z) {
        return b(Z) === s;
      }
      function j(Z) {
        return b(Z) === o;
      }
      function V(Z) {
        return typeof Z == "object" && Z !== null && Z.$$typeof === r;
      }
      function ee(Z) {
        return b(Z) === c;
      }
      function Q(Z) {
        return b(Z) === t;
      }
      function q(Z) {
        return b(Z) === f;
      }
      function re(Z) {
        return b(Z) === d;
      }
      function ie(Z) {
        return b(Z) === e;
      }
      function te(Z) {
        return b(Z) === i;
      }
      function ae(Z) {
        return b(Z) === n;
      }
      function W(Z) {
        return b(Z) === l;
      }
      function Oe(Z) {
        return b(Z) === u;
      }
      Me.ContextConsumer = _, Me.ContextProvider = S, Me.Element = M, Me.ForwardRef = A, Me.Fragment = N, Me.Lazy = $, Me.Memo = F, Me.Portal = L, Me.Profiler = D, Me.StrictMode = U, Me.Suspense = P, Me.SuspenseList = R, Me.isAsyncMode = T, Me.isConcurrentMode = O, Me.isContextConsumer = B, Me.isContextProvider = j, Me.isElement = V, Me.isForwardRef = ee, Me.isFragment = Q, Me.isLazy = q, Me.isMemo = re, Me.isPortal = ie, Me.isProfiler = te, Me.isStrictMode = ae, Me.isSuspense = W, Me.isSuspenseList = Oe, Me.isValidElementType = E, Me.typeOf = b;
    }()), Me;
  }
  process.env.NODE_ENV === "production" ? ja.exports = jh() : ja.exports = Hh();
  var Zn = ja.exports;
  function so(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [];
    return de.Children.forEach(r, function(n) {
      n == null && !e.keepEmpty || (Array.isArray(n) ? t = t.concat(so(n)) : Zn.isFragment(n) && n.props ? t = t.concat(so(n.props.children, e)) : t.push(n));
    }), t;
  }
  var Ha = {}, zs = [], Kh = function(e) {
    zs.push(e);
  };
  function ri(r, e) {
    if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
      var t = zs.reduce(function(n, i) {
        return i(n ?? "", "warning");
      }, e);
      t && console.error("Warning: ".concat(t));
    }
  }
  function Wh(r, e) {
    if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
      var t = zs.reduce(function(n, i) {
        return i(n ?? "", "note");
      }, e);
      t && console.warn("Note: ".concat(t));
    }
  }
  function _u() {
    Ha = {};
  }
  function Tu(r, e, t) {
    !e && !Ha[t] && (r(!1, t), Ha[t] = !0);
  }
  function Ge(r, e) {
    Tu(ri, r, e);
  }
  function Vh(r, e) {
    Tu(Wh, r, e);
  }
  Ge.preMessage = Kh;
  Ge.resetWarned = _u;
  Ge.noteOnce = Vh;
  function Se(r) {
    "@babel/helpers - typeof";
    return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, Se(r);
  }
  function Uh(r, e) {
    if (Se(r) != "object" || !r) return r;
    var t = r[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(r, e || "default");
      if (Se(n) != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(r);
  }
  function Ou(r) {
    var e = Uh(r, "string");
    return Se(e) == "symbol" ? e : e + "";
  }
  function I(r, e, t) {
    return (e = Ou(e)) in r ? Object.defineProperty(r, e, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : r[e] = t, r;
  }
  function qc(r, e) {
    var t = Object.keys(r);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(r);
      e && (n = n.filter(function(i) {
        return Object.getOwnPropertyDescriptor(r, i).enumerable;
      })), t.push.apply(t, n);
    }
    return t;
  }
  function Y(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? qc(Object(t), !0).forEach(function(n) {
        I(r, n, t[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : qc(Object(t)).forEach(function(n) {
        Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
      });
    }
    return r;
  }
  function Gc(r) {
    return r instanceof HTMLElement || r instanceof SVGElement;
  }
  function qh(r) {
    return r && Se(r) === "object" && Gc(r.nativeElement) ? r.nativeElement : Gc(r) ? r : null;
  }
  function Jn(r) {
    var e = qh(r);
    if (e)
      return e;
    if (r instanceof de.Component) {
      var t;
      return (t = oo.findDOMNode) === null || t === void 0 ? void 0 : t.call(oo, r);
    }
    return null;
  }
  function Ls(r, e, t) {
    var n = C.useRef({});
    return (!("value" in n.current) || t(n.current.condition, e)) && (n.current.value = r(), n.current.condition = e), n.current.value;
  }
  var Ru = function(e, t) {
    typeof e == "function" ? e(t) : Se(e) === "object" && e && "current" in e && (e.current = t);
  }, xo = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    var i = t.filter(Boolean);
    return i.length <= 1 ? i[0] : function(o) {
      t.forEach(function(s) {
        Ru(s, o);
      });
    };
  }, Gh = function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Ls(function() {
      return xo.apply(void 0, t);
    }, t, function(i, o) {
      return i.length !== o.length || i.every(function(s, a) {
        return s !== o[a];
      });
    });
  }, Fs = function(e) {
    var t, n, i = Zn.isMemo(e) ? e.type.type : e.type;
    return !(typeof i == "function" && !((t = i.prototype) !== null && t !== void 0 && t.render) && i.$$typeof !== Zn.ForwardRef || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render) && e.$$typeof !== Zn.ForwardRef);
  };
  function Yc(r) {
    return /* @__PURE__ */ Vf(r) && !Zn.isFragment(r);
  }
  Number(Wf.split(".")[0]) >= 19;
  var Ka = /* @__PURE__ */ C.createContext(null);
  function Yh(r) {
    var e = r.children, t = r.onBatchResize, n = C.useRef(0), i = C.useRef([]), o = C.useContext(Ka), s = C.useCallback(function(a, c, l) {
      n.current += 1;
      var u = n.current;
      i.current.push({
        size: a,
        element: c,
        data: l
      }), Promise.resolve().then(function() {
        u === n.current && (t == null || t(i.current), i.current = []);
      }), o == null || o(a, c, l);
    }, [t, o]);
    return /* @__PURE__ */ C.createElement(Ka.Provider, {
      value: s
    }, e);
  }
  var Au = function() {
    if (typeof Map < "u")
      return Map;
    function r(e, t) {
      var n = -1;
      return e.some(function(i, o) {
        return i[0] === t ? (n = o, !0) : !1;
      }), n;
    }
    return (
      /** @class */
      function() {
        function e() {
          this.__entries__ = [];
        }
        return Object.defineProperty(e.prototype, "size", {
          /**
           * @returns {boolean}
           */
          get: function() {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0
        }), e.prototype.get = function(t) {
          var n = r(this.__entries__, t), i = this.__entries__[n];
          return i && i[1];
        }, e.prototype.set = function(t, n) {
          var i = r(this.__entries__, t);
          ~i ? this.__entries__[i][1] = n : this.__entries__.push([t, n]);
        }, e.prototype.delete = function(t) {
          var n = this.__entries__, i = r(n, t);
          ~i && n.splice(i, 1);
        }, e.prototype.has = function(t) {
          return !!~r(this.__entries__, t);
        }, e.prototype.clear = function() {
          this.__entries__.splice(0);
        }, e.prototype.forEach = function(t, n) {
          n === void 0 && (n = null);
          for (var i = 0, o = this.__entries__; i < o.length; i++) {
            var s = o[i];
            t.call(n, s[1], s[0]);
          }
        }, e;
      }()
    );
  }(), Wa = typeof window < "u" && typeof document < "u" && window.document === document, co = function() {
    return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
  }(), Xh = function() {
    return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(co) : function(r) {
      return setTimeout(function() {
        return r(Date.now());
      }, 1e3 / 60);
    };
  }(), Zh = 2;
  function Jh(r, e) {
    var t = !1, n = !1, i = 0;
    function o() {
      t && (t = !1, r()), n && a();
    }
    function s() {
      Xh(o);
    }
    function a() {
      var c = Date.now();
      if (t) {
        if (c - i < Zh)
          return;
        n = !0;
      } else
        t = !0, n = !1, setTimeout(s, e);
      i = c;
    }
    return a;
  }
  var Qh = 20, ep = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], tp = typeof MutationObserver < "u", rp = (
    /** @class */
    function() {
      function r() {
        this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = Jh(this.refresh.bind(this), Qh);
      }
      return r.prototype.addObserver = function(e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_();
      }, r.prototype.removeObserver = function(e) {
        var t = this.observers_, n = t.indexOf(e);
        ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_();
      }, r.prototype.refresh = function() {
        var e = this.updateObservers_();
        e && this.refresh();
      }, r.prototype.updateObservers_ = function() {
        var e = this.observers_.filter(function(t) {
          return t.gatherActive(), t.hasActive();
        });
        return e.forEach(function(t) {
          return t.broadcastActive();
        }), e.length > 0;
      }, r.prototype.connect_ = function() {
        !Wa || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), tp ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
      }, r.prototype.disconnect_ = function() {
        !Wa || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
      }, r.prototype.onTransitionEnd_ = function(e) {
        var t = e.propertyName, n = t === void 0 ? "" : t, i = ep.some(function(o) {
          return !!~n.indexOf(o);
        });
        i && this.refresh();
      }, r.getInstance = function() {
        return this.instance_ || (this.instance_ = new r()), this.instance_;
      }, r.instance_ = null, r;
    }()
  ), Pu = function(r, e) {
    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
      var i = n[t];
      Object.defineProperty(r, i, {
        value: e[i],
        enumerable: !1,
        writable: !1,
        configurable: !0
      });
    }
    return r;
  }, Cn = function(r) {
    var e = r && r.ownerDocument && r.ownerDocument.defaultView;
    return e || co;
  }, Nu = So(0, 0, 0, 0);
  function lo(r) {
    return parseFloat(r) || 0;
  }
  function Xc(r) {
    for (var e = [], t = 1; t < arguments.length; t++)
      e[t - 1] = arguments[t];
    return e.reduce(function(n, i) {
      var o = r["border-" + i + "-width"];
      return n + lo(o);
    }, 0);
  }
  function np(r) {
    for (var e = ["top", "right", "bottom", "left"], t = {}, n = 0, i = e; n < i.length; n++) {
      var o = i[n], s = r["padding-" + o];
      t[o] = lo(s);
    }
    return t;
  }
  function ip(r) {
    var e = r.getBBox();
    return So(0, 0, e.width, e.height);
  }
  function op(r) {
    var e = r.clientWidth, t = r.clientHeight;
    if (!e && !t)
      return Nu;
    var n = Cn(r).getComputedStyle(r), i = np(n), o = i.left + i.right, s = i.top + i.bottom, a = lo(n.width), c = lo(n.height);
    if (n.boxSizing === "border-box" && (Math.round(a + o) !== e && (a -= Xc(n, "left", "right") + o), Math.round(c + s) !== t && (c -= Xc(n, "top", "bottom") + s)), !sp(r)) {
      var l = Math.round(a + o) - e, u = Math.round(c + s) - t;
      Math.abs(l) !== 1 && (a -= l), Math.abs(u) !== 1 && (c -= u);
    }
    return So(i.left, i.top, a, c);
  }
  var ap = /* @__PURE__ */ function() {
    return typeof SVGGraphicsElement < "u" ? function(r) {
      return r instanceof Cn(r).SVGGraphicsElement;
    } : function(r) {
      return r instanceof Cn(r).SVGElement && typeof r.getBBox == "function";
    };
  }();
  function sp(r) {
    return r === Cn(r).document.documentElement;
  }
  function cp(r) {
    return Wa ? ap(r) ? ip(r) : op(r) : Nu;
  }
  function lp(r) {
    var e = r.x, t = r.y, n = r.width, i = r.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(o.prototype);
    return Pu(s, {
      x: e,
      y: t,
      width: n,
      height: i,
      top: t,
      right: e + n,
      bottom: i + t,
      left: e
    }), s;
  }
  function So(r, e, t, n) {
    return { x: r, y: e, width: t, height: n };
  }
  var up = (
    /** @class */
    function() {
      function r(e) {
        this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = So(0, 0, 0, 0), this.target = e;
      }
      return r.prototype.isActive = function() {
        var e = cp(this.target);
        return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight;
      }, r.prototype.broadcastRect = function() {
        var e = this.contentRect_;
        return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e;
      }, r;
    }()
  ), dp = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(e, t) {
        var n = lp(t);
        Pu(this, { target: e, contentRect: n });
      }
      return r;
    }()
  ), fp = (
    /** @class */
    function() {
      function r(e, t, n) {
        if (this.activeObservations_ = [], this.observations_ = new Au(), typeof e != "function")
          throw new TypeError("The callback provided as parameter 1 is not a function.");
        this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n;
      }
      return r.prototype.observe = function(e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(e instanceof Cn(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) || (t.set(e, new up(e)), this.controller_.addObserver(this), this.controller_.refresh());
        }
      }, r.prototype.unobserve = function(e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(e instanceof Cn(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this));
        }
      }, r.prototype.disconnect = function() {
        this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
      }, r.prototype.gatherActive = function() {
        var e = this;
        this.clearActive(), this.observations_.forEach(function(t) {
          t.isActive() && e.activeObservations_.push(t);
        });
      }, r.prototype.broadcastActive = function() {
        if (this.hasActive()) {
          var e = this.callbackCtx_, t = this.activeObservations_.map(function(n) {
            return new dp(n.target, n.broadcastRect());
          });
          this.callback_.call(e, t, e), this.clearActive();
        }
      }, r.prototype.clearActive = function() {
        this.activeObservations_.splice(0);
      }, r.prototype.hasActive = function() {
        return this.activeObservations_.length > 0;
      }, r;
    }()
  ), Du = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Au(), ku = (
    /** @class */
    /* @__PURE__ */ function() {
      function r(e) {
        if (!(this instanceof r))
          throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        var t = rp.getInstance(), n = new fp(e, t, this);
        Du.set(this, n);
      }
      return r;
    }()
  );
  [
    "observe",
    "unobserve",
    "disconnect"
  ].forEach(function(r) {
    ku.prototype[r] = function() {
      var e;
      return (e = Du.get(this))[r].apply(e, arguments);
    };
  });
  var hp = function() {
    return typeof co.ResizeObserver < "u" ? co.ResizeObserver : ku;
  }(), hr = /* @__PURE__ */ new Map();
  function Iu(r) {
    r.forEach(function(e) {
      var t, n = e.target;
      (t = hr.get(n)) === null || t === void 0 || t.forEach(function(i) {
        return i(n);
      });
    });
  }
  var $u = new hp(Iu);
  process.env.NODE_ENV;
  process.env.NODE_ENV;
  function pp(r, e) {
    hr.has(r) || (hr.set(r, /* @__PURE__ */ new Set()), $u.observe(r)), hr.get(r).add(e);
  }
  function mp(r, e) {
    hr.has(r) && (hr.get(r).delete(e), hr.get(r).size || ($u.unobserve(r), hr.delete(r)));
  }
  function gt(r, e) {
    if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  function Zc(r, e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, Ou(n.key), n);
    }
  }
  function vt(r, e, t) {
    return e && Zc(r.prototype, e), t && Zc(r, t), Object.defineProperty(r, "prototype", {
      writable: !1
    }), r;
  }
  function Va(r, e) {
    return Va = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
      return t.__proto__ = n, t;
    }, Va(r, e);
  }
  function Gr(r, e) {
    if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
    r.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: r,
        writable: !0,
        configurable: !0
      }
    }), Object.defineProperty(r, "prototype", {
      writable: !1
    }), e && Va(r, e);
  }
  function uo(r) {
    return uo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, uo(r);
  }
  function zu() {
    try {
      var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch {
    }
    return (zu = function() {
      return !!r;
    })();
  }
  function G(r) {
    if (r === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r;
  }
  function gp(r, e) {
    if (e && (Se(e) == "object" || typeof e == "function")) return e;
    if (e !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return G(r);
  }
  function Yr(r) {
    var e = zu();
    return function() {
      var t, n = uo(r);
      if (e) {
        var i = uo(this).constructor;
        t = Reflect.construct(n, arguments, i);
      } else t = n.apply(this, arguments);
      return gp(this, t);
    };
  }
  var vp = /* @__PURE__ */ function(r) {
    Gr(t, r);
    var e = Yr(t);
    function t() {
      return gt(this, t), e.apply(this, arguments);
    }
    return vt(t, [{
      key: "render",
      value: function() {
        return this.props.children;
      }
    }]), t;
  }(C.Component);
  function yp(r, e) {
    var t = r.children, n = r.disabled, i = C.useRef(null), o = C.useRef(null), s = C.useContext(Ka), a = typeof t == "function", c = a ? t(i) : t, l = C.useRef({
      width: -1,
      height: -1,
      offsetWidth: -1,
      offsetHeight: -1
    }), u = !a && /* @__PURE__ */ C.isValidElement(c) && Fs(c), d = u ? c.ref : null, f = Gh(d, i), h = function() {
      var v;
      return Jn(i.current) || // Support `nativeElement` format
      (i.current && Se(i.current) === "object" ? Jn((v = i.current) === null || v === void 0 ? void 0 : v.nativeElement) : null) || Jn(o.current);
    };
    C.useImperativeHandle(e, function() {
      return h();
    });
    var m = C.useRef(r);
    m.current = r;
    var g = C.useCallback(function(p) {
      var v = m.current, y = v.onResize, x = v.data, E = p.getBoundingClientRect(), b = E.width, _ = E.height, S = p.offsetWidth, M = p.offsetHeight, A = Math.floor(b), N = Math.floor(_);
      if (l.current.width !== A || l.current.height !== N || l.current.offsetWidth !== S || l.current.offsetHeight !== M) {
        var $ = {
          width: A,
          height: N,
          offsetWidth: S,
          offsetHeight: M
        };
        l.current = $;
        var F = S === Math.round(b) ? b : S, L = M === Math.round(_) ? _ : M, D = Y(Y({}, $), {}, {
          offsetWidth: F,
          offsetHeight: L
        });
        s == null || s(D, p, x), y && Promise.resolve().then(function() {
          y(D, p);
        });
      }
    }, []);
    return C.useEffect(function() {
      var p = h();
      return p && !n && pp(p, g), function() {
        return mp(p, g);
      };
    }, [i.current, n]), /* @__PURE__ */ C.createElement(vp, {
      ref: o
    }, u ? /* @__PURE__ */ C.cloneElement(c, {
      ref: f
    }) : c);
  }
  var Lu = /* @__PURE__ */ C.forwardRef(yp);
  process.env.NODE_ENV !== "production" && (Lu.displayName = "SingleObserver");
  var bp = "rc-observer-key";
  function xp(r, e) {
    var t = r.children, n = typeof t == "function" ? [t] : so(t);
    return process.env.NODE_ENV !== "production" && (n.length > 1 ? ri(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && ri(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(i, o) {
      var s = (i == null ? void 0 : i.key) || "".concat(bp, "-").concat(o);
      return /* @__PURE__ */ C.createElement(Lu, ze({}, r, {
        key: s,
        ref: o === 0 ? e : void 0
      }), i);
    });
  }
  var Eo = /* @__PURE__ */ C.forwardRef(xp);
  process.env.NODE_ENV !== "production" && (Eo.displayName = "ResizeObserver");
  Eo.Collection = Yh;
  function Fu(r, e) {
    var t = Object.assign({}, r);
    return Array.isArray(e) && e.forEach(function(n) {
      delete t[n];
    }), t;
  }
  function Ua(r, e) {
    (e == null || e > r.length) && (e = r.length);
    for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
    return n;
  }
  function Sp(r) {
    if (Array.isArray(r)) return Ua(r);
  }
  function Bu(r) {
    if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
  }
  function Bs(r, e) {
    if (r) {
      if (typeof r == "string") return Ua(r, e);
      var t = {}.toString.call(r).slice(8, -1);
      return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ua(r, e) : void 0;
    }
  }
  function Ep() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function Ye(r) {
    return Sp(r) || Bu(r) || Bs(r) || Ep();
  }
  var ju = function(e) {
    return +setTimeout(e, 16);
  }, Hu = function(e) {
    return clearTimeout(e);
  };
  typeof window < "u" && "requestAnimationFrame" in window && (ju = function(e) {
    return window.requestAnimationFrame(e);
  }, Hu = function(e) {
    return window.cancelAnimationFrame(e);
  });
  var Jc = 0, Co = /* @__PURE__ */ new Map();
  function Ku(r) {
    Co.delete(r);
  }
  var Je = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    Jc += 1;
    var n = Jc;
    function i(o) {
      if (o === 0)
        Ku(n), e();
      else {
        var s = ju(function() {
          i(o - 1);
        });
        Co.set(n, s);
      }
    }
    return i(t), n;
  };
  Je.cancel = function(r) {
    var e = Co.get(r);
    return Ku(r), Hu(e);
  };
  process.env.NODE_ENV !== "production" && (Je.ids = function() {
    return Co;
  });
  function Wu(r) {
    if (Array.isArray(r)) return r;
  }
  function Cp(r, e) {
    var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
    if (t != null) {
      var n, i, o, s, a = [], c = !0, l = !1;
      try {
        if (o = (t = t.call(r)).next, e === 0) {
          if (Object(t) !== t) return;
          c = !1;
        } else for (; !(c = (n = o.call(t)).done) && (a.push(n.value), a.length !== e); c = !0) ;
      } catch (u) {
        l = !0, i = u;
      } finally {
        try {
          if (!c && t.return != null && (s = t.return(), Object(s) !== s)) return;
        } finally {
          if (l) throw i;
        }
      }
      return a;
    }
  }
  function Vu() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function oe(r, e) {
    return Wu(r) || Cp(r, e) || Bs(r, e) || Vu();
  }
  function ni(r) {
    for (var e = 0, t, n = 0, i = r.length; i >= 4; ++n, i -= 4)
      t = r.charCodeAt(n) & 255 | (r.charCodeAt(++n) & 255) << 8 | (r.charCodeAt(++n) & 255) << 16 | (r.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
      t >>> 24, e = /* Math.imul(k, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
    switch (i) {
      case 3:
        e ^= (r.charCodeAt(n + 2) & 255) << 16;
      case 2:
        e ^= (r.charCodeAt(n + 1) & 255) << 8;
      case 1:
        e ^= r.charCodeAt(n) & 255, e = /* Math.imul(h, m): */
        (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
    }
    return e ^= e >>> 13, e = /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
  }
  function gr() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
  }
  function wp(r, e) {
    if (!r)
      return !1;
    if (r.contains)
      return r.contains(e);
    for (var t = e; t; ) {
      if (t === r)
        return !0;
      t = t.parentNode;
    }
    return !1;
  }
  var Qc = "data-rc-order", el = "data-rc-priority", Mp = "rc-util-key", qa = /* @__PURE__ */ new Map();
  function Uu() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = r.mark;
    return e ? e.startsWith("data-") ? e : "data-".concat(e) : Mp;
  }
  function wo(r) {
    if (r.attachTo)
      return r.attachTo;
    var e = document.querySelector("head");
    return e || document.body;
  }
  function _p(r) {
    return r === "queue" ? "prependQueue" : r ? "prepend" : "append";
  }
  function js(r) {
    return Array.from((qa.get(r) || r).children).filter(function(e) {
      return e.tagName === "STYLE";
    });
  }
  function qu(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!gr())
      return null;
    var t = e.csp, n = e.prepend, i = e.priority, o = i === void 0 ? 0 : i, s = _p(n), a = s === "prependQueue", c = document.createElement("style");
    c.setAttribute(Qc, s), a && o && c.setAttribute(el, "".concat(o)), t != null && t.nonce && (c.nonce = t == null ? void 0 : t.nonce), c.innerHTML = r;
    var l = wo(e), u = l.firstChild;
    if (n) {
      if (a) {
        var d = (e.styles || js(l)).filter(function(f) {
          if (!["prepend", "prependQueue"].includes(f.getAttribute(Qc)))
            return !1;
          var h = Number(f.getAttribute(el) || 0);
          return o >= h;
        });
        if (d.length)
          return l.insertBefore(c, d[d.length - 1].nextSibling), c;
      }
      l.insertBefore(c, u);
    } else
      l.appendChild(c);
    return c;
  }
  function Gu(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = wo(e);
    return (e.styles || js(t)).find(function(n) {
      return n.getAttribute(Uu(e)) === r;
    });
  }
  function Yu(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = Gu(r, e);
    if (t) {
      var n = wo(e);
      n.removeChild(t);
    }
  }
  function Tp(r, e) {
    var t = qa.get(r);
    if (!t || !wp(document, t)) {
      var n = qu("", e), i = n.parentNode;
      qa.set(r, i), r.removeChild(n);
    }
  }
  function Wr(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = wo(t), i = js(n), o = Y(Y({}, t), {}, {
      styles: i
    });
    Tp(n, o);
    var s = Gu(e, o);
    if (s) {
      var a, c;
      if ((a = o.csp) !== null && a !== void 0 && a.nonce && s.nonce !== ((c = o.csp) === null || c === void 0 ? void 0 : c.nonce)) {
        var l;
        s.nonce = (l = o.csp) === null || l === void 0 ? void 0 : l.nonce;
      }
      return s.innerHTML !== r && (s.innerHTML = r), s;
    }
    var u = qu(r, o);
    return u.setAttribute(Uu(o), e), u;
  }
  function Op(r, e) {
    if (r == null) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.indexOf(n) >= 0) continue;
      t[n] = r[n];
    }
    return t;
  }
  function Yt(r, e) {
    if (r == null) return {};
    var t, n, i = Op(r, e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(r);
      for (n = 0; n < o.length; n++) t = o[n], e.indexOf(t) >= 0 || {}.propertyIsEnumerable.call(r, t) && (i[t] = r[t]);
    }
    return i;
  }
  function Rp(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
    function i(o, s) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = n.has(o);
      if (Ge(!c, "Warning: There may be circular references"), c)
        return !1;
      if (o === s)
        return !0;
      if (t && a > 1)
        return !1;
      n.add(o);
      var l = a + 1;
      if (Array.isArray(o)) {
        if (!Array.isArray(s) || o.length !== s.length)
          return !1;
        for (var u = 0; u < o.length; u++)
          if (!i(o[u], s[u], l))
            return !1;
        return !0;
      }
      if (o && s && Se(o) === "object" && Se(s) === "object") {
        var d = Object.keys(o);
        return d.length !== Object.keys(s).length ? !1 : d.every(function(f) {
          return i(o[f], s[f], l);
        });
      }
      return !1;
    }
    return i(r, e);
  }
  var Ap = "%";
  function Ga(r) {
    return r.join(Ap);
  }
  var Pp = /* @__PURE__ */ function() {
    function r(e) {
      gt(this, r), I(this, "instanceId", void 0), I(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = e;
    }
    return vt(r, [{
      key: "get",
      value: function(t) {
        return this.opGet(Ga(t));
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opGet",
      value: function(t) {
        return this.cache.get(t) || null;
      }
    }, {
      key: "update",
      value: function(t, n) {
        return this.opUpdate(Ga(t), n);
      }
      /** A fast get cache with `get` concat. */
    }, {
      key: "opUpdate",
      value: function(t, n) {
        var i = this.cache.get(t), o = n(i);
        o === null ? this.cache.delete(t) : this.cache.set(t, o);
      }
    }]), r;
  }(), wn = "data-token-hash", Kt = "data-css-hash", Np = "data-cache-path", Ar = "__cssinjs_instance__";
  function Dp() {
    var r = Math.random().toString(12).slice(2);
    if (typeof document < "u" && document.head && document.body) {
      var e = document.body.querySelectorAll("style[".concat(Kt, "]")) || [], t = document.head.firstChild;
      Array.from(e).forEach(function(i) {
        i[Ar] = i[Ar] || r, i[Ar] === r && document.head.insertBefore(i, t);
      });
      var n = {};
      Array.from(document.querySelectorAll("style[".concat(Kt, "]"))).forEach(function(i) {
        var o = i.getAttribute(Kt);
        if (n[o]) {
          if (i[Ar] === r) {
            var s;
            (s = i.parentNode) === null || s === void 0 || s.removeChild(i);
          }
        } else
          n[o] = !0;
      });
    }
    return new Pp(r);
  }
  var kp = /* @__PURE__ */ C.createContext({
    hashPriority: "low",
    cache: Dp(),
    defaultCache: !0
  });
  const Mo = kp;
  var Xu = /* @__PURE__ */ vt(function r() {
    gt(this, r);
  }), Zu = "CALC_UNIT", Ip = new RegExp(Zu, "g");
  function ia(r) {
    return typeof r == "number" ? "".concat(r).concat(Zu) : r;
  }
  var $p = /* @__PURE__ */ function(r) {
    Gr(t, r);
    var e = Yr(t);
    function t(n, i) {
      var o;
      gt(this, t), o = e.call(this), I(G(o), "result", ""), I(G(o), "unitlessCssVar", void 0), I(G(o), "lowPriority", void 0);
      var s = Se(n);
      return o.unitlessCssVar = i, n instanceof t ? o.result = "(".concat(n.result, ")") : s === "number" ? o.result = ia(n) : s === "string" && (o.result = n), o;
    }
    return vt(t, [{
      key: "add",
      value: function(i) {
        return i instanceof t ? this.result = "".concat(this.result, " + ").concat(i.getResult()) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " + ").concat(ia(i))), this.lowPriority = !0, this;
      }
    }, {
      key: "sub",
      value: function(i) {
        return i instanceof t ? this.result = "".concat(this.result, " - ").concat(i.getResult()) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " - ").concat(ia(i))), this.lowPriority = !0, this;
      }
    }, {
      key: "mul",
      value: function(i) {
        return this.lowPriority && (this.result = "(".concat(this.result, ")")), i instanceof t ? this.result = "".concat(this.result, " * ").concat(i.getResult(!0)) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " * ").concat(i)), this.lowPriority = !1, this;
      }
    }, {
      key: "div",
      value: function(i) {
        return this.lowPriority && (this.result = "(".concat(this.result, ")")), i instanceof t ? this.result = "".concat(this.result, " / ").concat(i.getResult(!0)) : (typeof i == "number" || typeof i == "string") && (this.result = "".concat(this.result, " / ").concat(i)), this.lowPriority = !1, this;
      }
    }, {
      key: "getResult",
      value: function(i) {
        return this.lowPriority || i ? "(".concat(this.result, ")") : this.result;
      }
    }, {
      key: "equal",
      value: function(i) {
        var o = this, s = i || {}, a = s.unit, c = !0;
        return typeof a == "boolean" ? c = a : Array.from(this.unitlessCssVar).some(function(l) {
          return o.result.includes(l);
        }) && (c = !1), this.result = this.result.replace(Ip, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
      }
    }]), t;
  }(Xu), zp = /* @__PURE__ */ function(r) {
    Gr(t, r);
    var e = Yr(t);
    function t(n) {
      var i;
      return gt(this, t), i = e.call(this), I(G(i), "result", 0), n instanceof t ? i.result = n.result : typeof n == "number" && (i.result = n), i;
    }
    return vt(t, [{
      key: "add",
      value: function(i) {
        return i instanceof t ? this.result += i.result : typeof i == "number" && (this.result += i), this;
      }
    }, {
      key: "sub",
      value: function(i) {
        return i instanceof t ? this.result -= i.result : typeof i == "number" && (this.result -= i), this;
      }
    }, {
      key: "mul",
      value: function(i) {
        return i instanceof t ? this.result *= i.result : typeof i == "number" && (this.result *= i), this;
      }
    }, {
      key: "div",
      value: function(i) {
        return i instanceof t ? this.result /= i.result : typeof i == "number" && (this.result /= i), this;
      }
    }, {
      key: "equal",
      value: function() {
        return this.result;
      }
    }]), t;
  }(Xu), Lp = function(e, t) {
    var n = e === "css" ? $p : zp;
    return function(i) {
      return new n(i, t);
    };
  };
  function Fp(r, e) {
    if (r.length !== e.length)
      return !1;
    for (var t = 0; t < r.length; t++)
      if (r[t] !== e[t])
        return !1;
    return !0;
  }
  var Hs = /* @__PURE__ */ function() {
    function r() {
      gt(this, r), I(this, "cache", void 0), I(this, "keys", void 0), I(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
    }
    return vt(r, [{
      key: "size",
      value: function() {
        return this.keys.length;
      }
    }, {
      key: "internalGet",
      value: function(t) {
        var n, i, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = {
          map: this.cache
        };
        return t.forEach(function(a) {
          if (!s)
            s = void 0;
          else {
            var c;
            s = (c = s) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(a);
          }
        }), (n = s) !== null && n !== void 0 && n.value && o && (s.value[1] = this.cacheCallTimes++), (i = s) === null || i === void 0 ? void 0 : i.value;
      }
    }, {
      key: "get",
      value: function(t) {
        var n;
        return (n = this.internalGet(t, !0)) === null || n === void 0 ? void 0 : n[0];
      }
    }, {
      key: "has",
      value: function(t) {
        return !!this.internalGet(t);
      }
    }, {
      key: "set",
      value: function(t, n) {
        var i = this;
        if (!this.has(t)) {
          if (this.size() + 1 > r.MAX_CACHE_SIZE + r.MAX_CACHE_OFFSET) {
            var o = this.keys.reduce(function(l, u) {
              var d = oe(l, 2), f = d[1];
              return i.internalGet(u)[1] < f ? [u, i.internalGet(u)[1]] : l;
            }, [this.keys[0], this.cacheCallTimes]), s = oe(o, 1), a = s[0];
            this.delete(a);
          }
          this.keys.push(t);
        }
        var c = this.cache;
        t.forEach(function(l, u) {
          if (u === t.length - 1)
            c.set(l, {
              value: [n, i.cacheCallTimes++]
            });
          else {
            var d = c.get(l);
            d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(l, {
              map: /* @__PURE__ */ new Map()
            }), c = c.get(l).map;
          }
        });
      }
    }, {
      key: "deleteByPath",
      value: function(t, n) {
        var i = t.get(n[0]);
        if (n.length === 1) {
          var o;
          return i.map ? t.set(n[0], {
            map: i.map
          }) : t.delete(n[0]), (o = i.value) === null || o === void 0 ? void 0 : o[0];
        }
        var s = this.deleteByPath(i.map, n.slice(1));
        return (!i.map || i.map.size === 0) && !i.value && t.delete(n[0]), s;
      }
    }, {
      key: "delete",
      value: function(t) {
        if (this.has(t))
          return this.keys = this.keys.filter(function(n) {
            return !Fp(n, t);
          }), this.deleteByPath(this.cache, t);
      }
    }]), r;
  }();
  I(Hs, "MAX_CACHE_SIZE", 20);
  I(Hs, "MAX_CACHE_OFFSET", 5);
  var tl = 0, Ju = /* @__PURE__ */ function() {
    function r(e) {
      gt(this, r), I(this, "derivatives", void 0), I(this, "id", void 0), this.derivatives = Array.isArray(e) ? e : [e], this.id = tl, e.length === 0 && ri(e.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), tl += 1;
    }
    return vt(r, [{
      key: "getDerivativeToken",
      value: function(t) {
        return this.derivatives.reduce(function(n, i) {
          return i(t, n);
        }, void 0);
      }
    }]), r;
  }(), oa = new Hs();
  function Ya(r) {
    var e = Array.isArray(r) ? r : [r];
    return oa.has(e) || oa.set(e, new Ju(e)), oa.get(e);
  }
  var Bp = /* @__PURE__ */ new WeakMap(), aa = {};
  function jp(r, e) {
    for (var t = Bp, n = 0; n < e.length; n += 1) {
      var i = e[n];
      t.has(i) || t.set(i, /* @__PURE__ */ new WeakMap()), t = t.get(i);
    }
    return t.has(aa) || t.set(aa, r()), t.get(aa);
  }
  var rl = /* @__PURE__ */ new WeakMap();
  function Qn(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t = rl.get(r) || "";
    return t || (Object.keys(r).forEach(function(n) {
      var i = r[n];
      t += n, i instanceof Ju ? t += i.id : i && Se(i) === "object" ? t += Qn(i, e) : t += i;
    }), e && (t = ni(t)), rl.set(r, t)), t;
  }
  function nl(r, e) {
    return ni("".concat(e, "_").concat(Qn(r, !0)));
  }
  var Xa = gr();
  function qe(r) {
    return typeof r == "number" ? "".concat(r, "px") : r;
  }
  function fo(r, e, t) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
    if (i)
      return r;
    var o = Y(Y({}, n), {}, I(I({}, wn, e), Kt, t)), s = Object.keys(o).map(function(a) {
      var c = o[a];
      return c ? "".concat(a, '="').concat(c, '"') : null;
    }).filter(function(a) {
      return a;
    }).join(" ");
    return "<style ".concat(s, ">").concat(r, "</style>");
  }
  var Xi = function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return "--".concat(t ? "".concat(t, "-") : "").concat(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
  }, Hp = function(e, t, n) {
    return Object.keys(e).length ? ".".concat(t).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(e).map(function(i) {
      var o = oe(i, 2), s = o[0], a = o[1];
      return "".concat(s, ":").concat(a, ";");
    }).join(""), "}") : "";
  }, Qu = function(e, t, n) {
    var i = {}, o = {};
    return Object.entries(e).forEach(function(s) {
      var a, c, l = oe(s, 2), u = l[0], d = l[1];
      if (n != null && (a = n.preserve) !== null && a !== void 0 && a[u])
        o[u] = d;
      else if ((typeof d == "string" || typeof d == "number") && !(n != null && (c = n.ignore) !== null && c !== void 0 && c[u])) {
        var f, h = Xi(u, n == null ? void 0 : n.prefix);
        i[h] = typeof d == "number" && !(n != null && (f = n.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), o[u] = "var(".concat(h, ")");
      }
    }), [o, Hp(i, t, {
      scope: n == null ? void 0 : n.scope
    })];
  }, il = process.env.NODE_ENV !== "test" && gr() ? C.useLayoutEffect : C.useEffect, Gt = function(e, t) {
    var n = C.useRef(!0);
    il(function() {
      return e(n.current);
    }, t), il(function() {
      return n.current = !1, function() {
        n.current = !0;
      };
    }, []);
  }, Kp = Y({}, C), ol = Kp.useInsertionEffect, Wp = function(e, t, n) {
    C.useMemo(e, n), Gt(function() {
      return t(!0);
    }, n);
  }, Vp = ol ? function(r, e, t) {
    return ol(function() {
      return r(), e();
    }, t);
  } : Wp;
  const Up = Vp;
  var qp = Y({}, C), Gp = qp.useInsertionEffect, Yp = function(e) {
    var t = [], n = !1;
    function i(o) {
      if (n) {
        process.env.NODE_ENV !== "production" && ri(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
        return;
      }
      t.push(o);
    }
    return C.useEffect(function() {
      return n = !1, function() {
        n = !0, t.length && t.forEach(function(o) {
          return o();
        });
      };
    }, e), i;
  }, Xp = function() {
    return function(e) {
      e();
    };
  }, Zp = typeof Gp < "u" ? Yp : Xp;
  const Jp = Zp;
  function Qp() {
    return !1;
  }
  var Za = !1;
  function em() {
    return Za;
  }
  const tm = process.env.NODE_ENV === "production" ? Qp : em;
  if (process.env.NODE_ENV !== "production" && typeof io < "u" && io && io.hot && typeof window < "u") {
    var sa = window;
    if (typeof sa.webpackHotUpdate == "function") {
      var rm = sa.webpackHotUpdate;
      sa.webpackHotUpdate = function() {
        return Za = !0, setTimeout(function() {
          Za = !1;
        }, 0), rm.apply(void 0, arguments);
      };
    }
  }
  function Ks(r, e, t, n, i) {
    var o = C.useContext(Mo), s = o.cache, a = [r].concat(Ye(e)), c = Ga(a), l = Jp([c]), u = tm(), d = function(g) {
      s.opUpdate(c, function(p) {
        var v = p || [void 0, void 0], y = oe(v, 2), x = y[0], E = x === void 0 ? 0 : x, b = y[1], _ = b;
        process.env.NODE_ENV !== "production" && b && u && (n == null || n(_, u), _ = null);
        var S = _ || t(), M = [E, S];
        return g ? g(M) : M;
      });
    };
    C.useMemo(
      function() {
        d();
      },
      /* eslint-disable react-hooks/exhaustive-deps */
      [c]
      /* eslint-enable */
    );
    var f = s.opGet(c);
    process.env.NODE_ENV !== "production" && !f && (d(), f = s.opGet(c));
    var h = f[1];
    return Up(function() {
      i == null || i(h);
    }, function(m) {
      return d(function(g) {
        var p = oe(g, 2), v = p[0], y = p[1];
        return m && v === 0 && (i == null || i(h)), [v + 1, y];
      }), function() {
        s.opUpdate(c, function(g) {
          var p = g || [], v = oe(p, 2), y = v[0], x = y === void 0 ? 0 : y, E = v[1], b = x - 1;
          return b === 0 ? (l(function() {
            (m || !s.opGet(c)) && (n == null || n(E, !1));
          }), null) : [x - 1, E];
        });
      };
    }, [c]), h;
  }
  var nm = {}, im = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Hr = /* @__PURE__ */ new Map();
  function om(r) {
    Hr.set(r, (Hr.get(r) || 0) + 1);
  }
  function am(r, e) {
    if (typeof document < "u") {
      var t = document.querySelectorAll("style[".concat(wn, '="').concat(r, '"]'));
      t.forEach(function(n) {
        if (n[Ar] === e) {
          var i;
          (i = n.parentNode) === null || i === void 0 || i.removeChild(n);
        }
      });
    }
  }
  var sm = 0;
  function cm(r, e) {
    Hr.set(r, (Hr.get(r) || 0) - 1);
    var t = Array.from(Hr.keys()), n = t.filter(function(i) {
      var o = Hr.get(i) || 0;
      return o <= 0;
    });
    t.length - n.length > sm && n.forEach(function(i) {
      am(i, e), Hr.delete(i);
    });
  }
  var lm = function(e, t, n, i) {
    var o = n.getDerivativeToken(e), s = Y(Y({}, o), t);
    return i && (s = i(s)), s;
  }, ed = "token";
  function um(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = qt(Mo), i = n.cache.instanceId, o = n.container, s = t.salt, a = s === void 0 ? "" : s, c = t.override, l = c === void 0 ? nm : c, u = t.formatToken, d = t.getComputedToken, f = t.cssVar, h = jp(function() {
      return Object.assign.apply(Object, [{}].concat(Ye(e)));
    }, e), m = Qn(h), g = Qn(l), p = f ? Qn(f) : "", v = Ks(ed, [a, r.id, m, g, p], function() {
      var y, x = d ? d(h, l, r) : lm(h, l, r, u), E = Y({}, x), b = "";
      if (f) {
        var _ = Qu(x, f.key, {
          prefix: f.prefix,
          ignore: f.ignore,
          unitless: f.unitless,
          preserve: f.preserve
        }), S = oe(_, 2);
        x = S[0], b = S[1];
      }
      var M = nl(x, a);
      x._tokenKey = M, E._tokenKey = nl(E, a);
      var A = (y = f == null ? void 0 : f.key) !== null && y !== void 0 ? y : M;
      x._themeKey = A, om(A);
      var N = "".concat(im, "-").concat(ni(M));
      return x._hashId = N, [x, N, E, b, (f == null ? void 0 : f.key) || ""];
    }, function(y) {
      cm(y[0]._themeKey, i);
    }, function(y) {
      var x = oe(y, 4), E = x[0], b = x[3];
      if (f && b) {
        var _ = Wr(b, ni("css-variables-".concat(E._themeKey)), {
          mark: Kt,
          prepend: "queue",
          attachTo: o,
          priority: -999
        });
        _[Ar] = i, _.setAttribute(wn, E._themeKey);
      }
    });
    return v;
  }
  var dm = function(e, t, n) {
    var i = oe(e, 5), o = i[2], s = i[3], a = i[4], c = n || {}, l = c.plain;
    if (!s)
      return null;
    var u = o._tokenKey, d = -999, f = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(d)
    }, h = fo(s, a, u, f, l);
    return [d, u, h];
  }, fm = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  }, td = "comm", rd = "rule", nd = "decl", hm = "@import", pm = "@keyframes", mm = "@layer", id = Math.abs, Ws = String.fromCharCode;
  function od(r) {
    return r.trim();
  }
  function Zi(r, e, t) {
    return r.replace(e, t);
  }
  function gm(r, e, t) {
    return r.indexOf(e, t);
  }
  function ii(r, e) {
    return r.charCodeAt(e) | 0;
  }
  function oi(r, e, t) {
    return r.slice(e, t);
  }
  function fr(r) {
    return r.length;
  }
  function vm(r) {
    return r.length;
  }
  function $i(r, e) {
    return e.push(r), r;
  }
  var _o = 1, Mn = 1, ad = 0, Rt = 0, Ue = 0, Pn = "";
  function Vs(r, e, t, n, i, o, s, a) {
    return { value: r, root: e, parent: t, type: n, props: i, children: o, line: _o, column: Mn, length: s, return: "", siblings: a };
  }
  function ym() {
    return Ue;
  }
  function bm() {
    return Ue = Rt > 0 ? ii(Pn, --Rt) : 0, Mn--, Ue === 10 && (Mn = 1, _o--), Ue;
  }
  function Wt() {
    return Ue = Rt < ad ? ii(Pn, Rt++) : 0, Mn++, Ue === 10 && (Mn = 1, _o++), Ue;
  }
  function Vr() {
    return ii(Pn, Rt);
  }
  function Ji() {
    return Rt;
  }
  function To(r, e) {
    return oi(Pn, r, e);
  }
  function Ja(r) {
    switch (r) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function xm(r) {
    return _o = Mn = 1, ad = fr(Pn = r), Rt = 0, [];
  }
  function Sm(r) {
    return Pn = "", r;
  }
  function ca(r) {
    return od(To(Rt - 1, Qa(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
  }
  function Em(r) {
    for (; (Ue = Vr()) && Ue < 33; )
      Wt();
    return Ja(r) > 2 || Ja(Ue) > 3 ? "" : " ";
  }
  function Cm(r, e) {
    for (; --e && Wt() && !(Ue < 48 || Ue > 102 || Ue > 57 && Ue < 65 || Ue > 70 && Ue < 97); )
      ;
    return To(r, Ji() + (e < 6 && Vr() == 32 && Wt() == 32));
  }
  function Qa(r) {
    for (; Wt(); )
      switch (Ue) {
        case r:
          return Rt;
        case 34:
        case 39:
          r !== 34 && r !== 39 && Qa(Ue);
          break;
        case 40:
          r === 41 && Qa(r);
          break;
        case 92:
          Wt();
          break;
      }
    return Rt;
  }
  function wm(r, e) {
    for (; Wt() && r + Ue !== 57; )
      if (r + Ue === 84 && Vr() === 47)
        break;
    return "/*" + To(e, Rt - 1) + "*" + Ws(r === 47 ? r : Wt());
  }
  function Mm(r) {
    for (; !Ja(Vr()); )
      Wt();
    return To(r, Rt);
  }
  function _m(r) {
    return Sm(Qi("", null, null, null, [""], r = xm(r), 0, [0], r));
  }
  function Qi(r, e, t, n, i, o, s, a, c) {
    for (var l = 0, u = 0, d = s, f = 0, h = 0, m = 0, g = 1, p = 1, v = 1, y = 0, x = "", E = i, b = o, _ = n, S = x; p; )
      switch (m = y, y = Wt()) {
        case 40:
          if (m != 108 && ii(S, d - 1) == 58) {
            gm(S += Zi(ca(y), "&", "&\f"), "&\f", id(l ? a[l - 1] : 0)) != -1 && (v = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          S += ca(y);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          S += Em(m);
          break;
        case 92:
          S += Cm(Ji() - 1, 7);
          continue;
        case 47:
          switch (Vr()) {
            case 42:
            case 47:
              $i(Tm(wm(Wt(), Ji()), e, t, c), c);
              break;
            default:
              S += "/";
          }
          break;
        case 123 * g:
          a[l++] = fr(S) * v;
        case 125 * g:
        case 59:
        case 0:
          switch (y) {
            case 0:
            case 125:
              p = 0;
            case 59 + u:
              v == -1 && (S = Zi(S, /\f/g, "")), h > 0 && fr(S) - d && $i(h > 32 ? sl(S + ";", n, t, d - 1, c) : sl(Zi(S, " ", "") + ";", n, t, d - 2, c), c);
              break;
            case 59:
              S += ";";
            default:
              if ($i(_ = al(S, e, t, l, u, i, a, x, E = [], b = [], d, o), o), y === 123)
                if (u === 0)
                  Qi(S, e, _, _, E, o, d, a, b);
                else
                  switch (f === 99 && ii(S, 3) === 110 ? 100 : f) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      Qi(r, _, _, n && $i(al(r, _, _, 0, 0, i, a, x, i, E = [], d, b), b), i, b, d, a, n ? E : b);
                      break;
                    default:
                      Qi(S, _, _, _, [""], b, 0, a, b);
                  }
          }
          l = u = h = 0, g = v = 1, x = S = "", d = s;
          break;
        case 58:
          d = 1 + fr(S), h = m;
        default:
          if (g < 1) {
            if (y == 123)
              --g;
            else if (y == 125 && g++ == 0 && bm() == 125)
              continue;
          }
          switch (S += Ws(y), y * g) {
            case 38:
              v = u > 0 ? 1 : (S += "\f", -1);
              break;
            case 44:
              a[l++] = (fr(S) - 1) * v, v = 1;
              break;
            case 64:
              Vr() === 45 && (S += ca(Wt())), f = Vr(), u = d = fr(x = S += Mm(Ji())), y++;
              break;
            case 45:
              m === 45 && fr(S) == 2 && (g = 0);
          }
      }
    return o;
  }
  function al(r, e, t, n, i, o, s, a, c, l, u, d) {
    for (var f = i - 1, h = i === 0 ? o : [""], m = vm(h), g = 0, p = 0, v = 0; g < n; ++g)
      for (var y = 0, x = oi(r, f + 1, f = id(p = s[g])), E = r; y < m; ++y)
        (E = od(p > 0 ? h[y] + " " + x : Zi(x, /&\f/g, h[y]))) && (c[v++] = E);
    return Vs(r, e, t, i === 0 ? rd : a, c, l, u, d);
  }
  function Tm(r, e, t, n) {
    return Vs(r, e, t, td, Ws(ym()), oi(r, 2, -2), 0, n);
  }
  function sl(r, e, t, n, i) {
    return Vs(r, e, t, nd, oi(r, 0, n), oi(r, n + 1, -1), n, i);
  }
  function es(r, e) {
    for (var t = "", n = 0; n < r.length; n++)
      t += e(r[n], n, r, e) || "";
    return t;
  }
  function Om(r, e, t, n) {
    switch (r.type) {
      case mm:
        if (r.children.length) break;
      case hm:
      case nd:
        return r.return = r.return || r.value;
      case td:
        return "";
      case pm:
        return r.return = r.value + "{" + es(r.children, n) + "}";
      case rd:
        if (!fr(r.value = r.props.join(","))) return "";
    }
    return fr(t = es(r.children, n)) ? r.return = r.value + "{" + t + "}" : "";
  }
  function sd(r, e) {
    var t = e.path, n = e.parentSelectors;
    Ge(!1, "[Ant Design CSS-in-JS] ".concat(t ? "Error in ".concat(t, ": ") : "").concat(r).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
  }
  var Rm = function(e, t, n) {
    if (e === "content") {
      var i = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, o = ["normal", "none", "initial", "inherit", "unset"];
      (typeof t != "string" || o.indexOf(t) === -1 && !i.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")) && sd("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(t, "\"'`."), n);
    }
  }, Am = function(e, t, n) {
    e === "animation" && n.hashId && t !== "none" && sd("You seem to be using hashed animation '".concat(t, "', in which case 'animationName' with Keyframe as value is recommended."), n);
  }, cl = "data-ant-cssinjs-cache-path", cd = "_FILE_STYLE__", Ur, ld = !0;
  function Pm() {
    if (!Ur && (Ur = {}, gr())) {
      var r = document.createElement("div");
      r.className = cl, r.style.position = "fixed", r.style.visibility = "hidden", r.style.top = "-9999px", document.body.appendChild(r);
      var e = getComputedStyle(r).content || "";
      e = e.replace(/^"/, "").replace(/"$/, ""), e.split(";").forEach(function(i) {
        var o = i.split(":"), s = oe(o, 2), a = s[0], c = s[1];
        Ur[a] = c;
      });
      var t = document.querySelector("style[".concat(cl, "]"));
      if (t) {
        var n;
        ld = !1, (n = t.parentNode) === null || n === void 0 || n.removeChild(t);
      }
      document.body.removeChild(r);
    }
  }
  function Nm(r) {
    return Pm(), !!Ur[r];
  }
  function Dm(r) {
    var e = Ur[r], t = null;
    if (e && gr())
      if (ld)
        t = cd;
      else {
        var n = document.querySelector("style[".concat(Kt, '="').concat(Ur[r], '"]'));
        n ? t = n.innerHTML : delete Ur[r];
      }
    return [t, e];
  }
  var ud = "_skip_check_", dd = "_multi_value_";
  function eo(r) {
    var e = es(_m(r), Om);
    return e.replace(/\{%%%\:[^;];}/g, ";");
  }
  function km(r) {
    return Se(r) === "object" && r && (ud in r || dd in r);
  }
  function Im(r, e, t) {
    if (!e)
      return r;
    var n = ".".concat(e), i = t === "low" ? ":where(".concat(n, ")") : n, o = r.split(",").map(function(s) {
      var a, c = s.trim().split(/\s+/), l = c[0] || "", u = ((a = l.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
      return l = "".concat(u).concat(i).concat(l.slice(u.length)), [l].concat(Ye(c.slice(1))).join(" ");
    });
    return o.join(",");
  }
  var $m = function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      root: !0,
      parentSelectors: []
    }, i = n.root, o = n.injectHash, s = n.parentSelectors, a = t.hashId, c = t.layer, l = t.path, u = t.hashPriority, d = t.transformers, f = d === void 0 ? [] : d, h = t.linters, m = h === void 0 ? [] : h, g = "", p = {};
    function v(E) {
      var b = E.getName(a);
      if (!p[b]) {
        var _ = r(E.style, t, {
          root: !1,
          parentSelectors: s
        }), S = oe(_, 1), M = S[0];
        p[b] = "@keyframes ".concat(E.getName(a)).concat(M);
      }
    }
    function y(E) {
      var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return E.forEach(function(_) {
        Array.isArray(_) ? y(_, b) : _ && b.push(_);
      }), b;
    }
    var x = y(Array.isArray(e) ? e : [e]);
    return x.forEach(function(E) {
      var b = typeof E == "string" && !i ? {} : E;
      if (typeof b == "string")
        g += "".concat(b, `
`);
      else if (b._keyframe)
        v(b);
      else {
        var _ = f.reduce(function(S, M) {
          var A;
          return (M == null || (A = M.visit) === null || A === void 0 ? void 0 : A.call(M, S)) || S;
        }, b);
        Object.keys(_).forEach(function(S) {
          var M = _[S];
          if (Se(M) === "object" && M && (S !== "animationName" || !M._keyframe) && !km(M)) {
            var A = !1, N = S.trim(), $ = !1;
            (i || o) && a ? N.startsWith("@") ? A = !0 : N = Im(S, a, u) : i && !a && (N === "&" || N === "") && (N = "", $ = !0);
            var F = r(M, t, {
              root: $,
              injectHash: A,
              parentSelectors: [].concat(Ye(s), [N])
            }), L = oe(F, 2), D = L[0], U = L[1];
            p = Y(Y({}, p), U), g += "".concat(N).concat(D);
          } else {
            let k = function(z, T) {
              process.env.NODE_ENV !== "production" && (Se(M) !== "object" || !(M != null && M[ud])) && [Rm, Am].concat(Ye(m)).forEach(function(j) {
                return j(z, T, {
                  path: l,
                  hashId: a,
                  parentSelectors: s
                });
              });
              var O = z.replace(/[A-Z]/g, function(j) {
                return "-".concat(j.toLowerCase());
              }), B = T;
              !fm[z] && typeof B == "number" && B !== 0 && (B = "".concat(B, "px")), z === "animationName" && T !== null && T !== void 0 && T._keyframe && (v(T), B = T.getName(a)), g += "".concat(O, ":").concat(B, ";");
            };
            var P, R = (P = M == null ? void 0 : M.value) !== null && P !== void 0 ? P : M;
            Se(M) === "object" && M !== null && M !== void 0 && M[dd] && Array.isArray(R) ? R.forEach(function(z) {
              k(S, z);
            }) : k(S, R);
          }
        });
      }
    }), i ? c && (g = "@layer ".concat(c.name, " {").concat(g, "}"), c.dependencies && (p["@layer ".concat(c.name)] = c.dependencies.map(function(E) {
      return "@layer ".concat(E, ", ").concat(c.name, ";");
    }).join(`
`))) : g = "{".concat(g, "}"), [g, p];
  };
  function fd(r, e) {
    return ni("".concat(r.join("%")).concat(e));
  }
  function zm() {
    return null;
  }
  var hd = "style";
  function ts(r, e) {
    var t = r.token, n = r.path, i = r.hashId, o = r.layer, s = r.nonce, a = r.clientOnly, c = r.order, l = c === void 0 ? 0 : c, u = C.useContext(Mo), d = u.autoClear, f = u.mock, h = u.defaultCache, m = u.hashPriority, g = u.container, p = u.ssrInline, v = u.transformers, y = u.linters, x = u.cache, E = u.layer, b = t._tokenKey, _ = [b];
    E && _.push("layer"), _.push.apply(_, Ye(n));
    var S = Xa;
    process.env.NODE_ENV !== "production" && f !== void 0 && (S = f === "client");
    var M = Ks(
      hd,
      _,
      // Create cache if needed
      function() {
        var L = _.join("|");
        if (Nm(L)) {
          var D = Dm(L), U = oe(D, 2), P = U[0], R = U[1];
          if (P)
            return [P, b, R, {}, a, l];
        }
        var k = e(), z = $m(k, {
          hashId: i,
          hashPriority: m,
          layer: E ? o : void 0,
          path: n.join("-"),
          transformers: v,
          linters: y
        }), T = oe(z, 2), O = T[0], B = T[1], j = eo(O), V = fd(_, j);
        return [j, b, V, B, a, l];
      },
      // Remove cache if no need
      function(L, D) {
        var U = oe(L, 3), P = U[2];
        (D || d) && Xa && Yu(P, {
          mark: Kt
        });
      },
      // Effect: Inject style here
      function(L) {
        var D = oe(L, 4), U = D[0];
        D[1];
        var P = D[2], R = D[3];
        if (S && U !== cd) {
          var k = {
            mark: Kt,
            prepend: E ? !1 : "queue",
            attachTo: g,
            priority: l
          }, z = typeof s == "function" ? s() : s;
          z && (k.csp = {
            nonce: z
          });
          var T = [], O = [];
          Object.keys(R).forEach(function(j) {
            j.startsWith("@layer") ? T.push(j) : O.push(j);
          }), T.forEach(function(j) {
            Wr(eo(R[j]), "_layer-".concat(j), Y(Y({}, k), {}, {
              prepend: !0
            }));
          });
          var B = Wr(U, P, k);
          B[Ar] = x.instanceId, B.setAttribute(wn, b), process.env.NODE_ENV !== "production" && B.setAttribute(Np, _.join("|")), O.forEach(function(j) {
            Wr(eo(R[j]), "_effect-".concat(j), k);
          });
        }
      }
    ), A = oe(M, 3), N = A[0], $ = A[1], F = A[2];
    return function(L) {
      var D;
      return !p || S || !h ? D = /* @__PURE__ */ C.createElement(zm, null) : D = /* @__PURE__ */ C.createElement("style", ze({}, I(I({}, wn, $), Kt, F), {
        dangerouslySetInnerHTML: {
          __html: N
        }
      })), /* @__PURE__ */ C.createElement(C.Fragment, null, D, L);
    };
  }
  var Lm = function(e, t, n) {
    var i = oe(e, 6), o = i[0], s = i[1], a = i[2], c = i[3], l = i[4], u = i[5], d = n || {}, f = d.plain;
    if (l)
      return null;
    var h = o, m = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(u)
    };
    return h = fo(o, s, a, m, f), c && Object.keys(c).forEach(function(g) {
      if (!t[g]) {
        t[g] = !0;
        var p = eo(c[g]), v = fo(p, s, "_effect-".concat(g), m, f);
        g.startsWith("@layer") ? h = v + h : h += v;
      }
    }), [u, a, h];
  }, pd = "cssVar", Fm = function(e, t) {
    var n = e.key, i = e.prefix, o = e.unitless, s = e.ignore, a = e.token, c = e.scope, l = c === void 0 ? "" : c, u = qt(Mo), d = u.cache.instanceId, f = u.container, h = a._tokenKey, m = [].concat(Ye(e.path), [n, l, h]), g = Ks(pd, m, function() {
      var p = t(), v = Qu(p, n, {
        prefix: i,
        unitless: o,
        ignore: s,
        scope: l
      }), y = oe(v, 2), x = y[0], E = y[1], b = fd(m, E);
      return [x, E, b, n];
    }, function(p) {
      var v = oe(p, 3), y = v[2];
      Xa && Yu(y, {
        mark: Kt
      });
    }, function(p) {
      var v = oe(p, 3), y = v[1], x = v[2];
      if (y) {
        var E = Wr(y, x, {
          mark: Kt,
          prepend: "queue",
          attachTo: f,
          priority: -999
        });
        E[Ar] = d, E.setAttribute(wn, n);
      }
    });
    return g;
  }, Bm = function(e, t, n) {
    var i = oe(e, 4), o = i[1], s = i[2], a = i[3], c = n || {}, l = c.plain;
    if (!o)
      return null;
    var u = -999, d = {
      "data-rc-order": "prependQueue",
      "data-rc-priority": "".concat(u)
    }, f = fo(o, a, s, d, l);
    return [u, s, f];
  };
  I(I(I({}, hd, Lm), ed, dm), pd, Bm);
  var jm = /* @__PURE__ */ function() {
    function r(e, t) {
      gt(this, r), I(this, "name", void 0), I(this, "style", void 0), I(this, "_keyframe", !0), this.name = e, this.style = t;
    }
    return vt(r, [{
      key: "getName",
      value: function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        return t ? "".concat(t, "-").concat(this.name) : this.name;
      }
    }]), r;
  }();
  function gn(r) {
    return r.notSplit = !0, r;
  }
  gn(["borderTop", "borderBottom"]), gn(["borderTop"]), gn(["borderBottom"]), gn(["borderLeft", "borderRight"]), gn(["borderLeft"]), gn(["borderRight"]);
  var Us = /* @__PURE__ */ ks({});
  function Hm(r) {
    return Wu(r) || Bu(r) || Bs(r) || Vu();
  }
  function rs(r, e) {
    for (var t = r, n = 0; n < e.length; n += 1) {
      if (t == null)
        return;
      t = t[e[n]];
    }
    return t;
  }
  function md(r, e, t, n) {
    if (!e.length)
      return t;
    var i = Hm(e), o = i[0], s = i.slice(1), a;
    return !r && typeof o == "number" ? a = [] : Array.isArray(r) ? a = Ye(r) : a = Y({}, r), n && t === void 0 && s.length === 1 ? delete a[o][s[0]] : a[o] = md(a[o], s, t, n), a;
  }
  function la(r, e, t) {
    var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return e.length && n && t === void 0 && !rs(r, e.slice(0, -1)) ? r : md(r, e, t, n);
  }
  function Km(r) {
    return Se(r) === "object" && r !== null && Object.getPrototypeOf(r) === Object.prototype;
  }
  function ll(r) {
    return Array.isArray(r) ? [] : {};
  }
  var Wm = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
  function Vm() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    var n = ll(e[0]);
    return e.forEach(function(i) {
      function o(s, a) {
        var c = new Set(a), l = rs(i, s), u = Array.isArray(l);
        if (u || Km(l)) {
          if (!c.has(l)) {
            c.add(l);
            var d = rs(n, s);
            u ? n = la(n, s, []) : (!d || Se(d) !== "object") && (n = la(n, s, ll(l))), Wm(l).forEach(function(f) {
              o([].concat(Ye(s), [f]), c);
            });
          }
        } else
          n = la(n, s, l);
      }
      o([]);
    }), n;
  }
  function gd() {
  }
  let dr = null;
  function Um() {
    dr = null, _u();
  }
  let qs = gd;
  process.env.NODE_ENV !== "production" && (qs = (r, e, t) => {
    Ge(r, `[antd: ${e}] ${t}`), process.env.NODE_ENV === "test" && Um();
  });
  const vd = /* @__PURE__ */ C.createContext({}), Nn = process.env.NODE_ENV !== "production" ? (r) => {
    const {
      strict: e
    } = C.useContext(vd), t = (n, i, o) => {
      if (!n)
        if (e === !1 && i === "deprecated") {
          const s = dr;
          dr || (dr = {}), dr[r] = dr[r] || [], dr[r].includes(o || "") || dr[r].push(o || ""), s || console.warn("[antd] There exists deprecated usage in your code:", dr);
        } else
          process.env.NODE_ENV !== "production" && qs(n, r, o);
    };
    return t.deprecated = (n, i, o, s) => {
      t(n, "deprecated", `\`${i}\` is deprecated. Please use \`${o}\` instead.${s ? ` ${s}` : ""}`);
    }, t;
  } : () => {
    const r = () => {
    };
    return r.deprecated = gd, r;
  }, Oo = qs, qm = /* @__PURE__ */ ks(void 0);
  var Gm = {
    // Options
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    // Pagination
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
  }, Ym = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: !0,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  };
  const yd = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
  }, ul = {
    lang: Object.assign({
      placeholder: "Select date",
      yearPlaceholder: "Select year",
      quarterPlaceholder: "Select quarter",
      monthPlaceholder: "Select month",
      weekPlaceholder: "Select week",
      rangePlaceholder: ["Start date", "End date"],
      rangeYearPlaceholder: ["Start year", "End year"],
      rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
      rangeMonthPlaceholder: ["Start month", "End month"],
      rangeWeekPlaceholder: ["Start week", "End week"]
    }, Ym),
    timePickerLocale: Object.assign({}, yd)
  }, St = "${label} is not a valid ${type}", Ro = {
    locale: "en",
    Pagination: Gm,
    DatePicker: ul,
    TimePicker: yd,
    Calendar: ul,
    global: {
      placeholder: "Please select"
    },
    Table: {
      filterTitle: "Filter menu",
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      filterCheckall: "Select all items",
      filterSearchPlaceholder: "Search in filters",
      emptyText: "No data",
      selectAll: "Select current page",
      selectInvert: "Invert current page",
      selectNone: "Clear all data",
      selectionAll: "Select all data",
      sortTitle: "Sort",
      expand: "Expand row",
      collapse: "Collapse row",
      triggerDesc: "Click to sort descending",
      triggerAsc: "Click to sort ascending",
      cancelSort: "Click to cancel sorting"
    },
    Tour: {
      Next: "Next",
      Previous: "Previous",
      Finish: "Finish"
    },
    Modal: {
      okText: "OK",
      cancelText: "Cancel",
      justOkText: "OK"
    },
    Popconfirm: {
      okText: "OK",
      cancelText: "Cancel"
    },
    Transfer: {
      titles: ["", ""],
      searchPlaceholder: "Search here",
      itemUnit: "item",
      itemsUnit: "items",
      remove: "Remove",
      selectCurrent: "Select current page",
      removeCurrent: "Remove current page",
      selectAll: "Select all data",
      deselectAll: "Deselect all data",
      removeAll: "Remove all data",
      selectInvert: "Invert current page"
    },
    Upload: {
      uploading: "Uploading...",
      removeFile: "Remove file",
      uploadError: "Upload error",
      previewFile: "Preview file",
      downloadFile: "Download file"
    },
    Empty: {
      description: "No data"
    },
    Icon: {
      icon: "icon"
    },
    Text: {
      edit: "Edit",
      copy: "Copy",
      copied: "Copied",
      expand: "Expand",
      collapse: "Collapse"
    },
    Form: {
      optional: "(optional)",
      defaultValidateMessages: {
        default: "Field validation error for ${label}",
        required: "Please enter ${label}",
        enum: "${label} must be one of [${enum}]",
        whitespace: "${label} cannot be a blank character",
        date: {
          format: "${label} date format is invalid",
          parse: "${label} cannot be converted to a date",
          invalid: "${label} is an invalid date"
        },
        types: {
          string: St,
          method: St,
          array: St,
          object: St,
          number: St,
          date: St,
          boolean: St,
          integer: St,
          float: St,
          regexp: St,
          email: St,
          url: St,
          hex: St
        },
        string: {
          len: "${label} must be ${len} characters",
          min: "${label} must be at least ${min} characters",
          max: "${label} must be up to ${max} characters",
          range: "${label} must be between ${min}-${max} characters"
        },
        number: {
          len: "${label} must be equal to ${len}",
          min: "${label} must be minimum ${min}",
          max: "${label} must be maximum ${max}",
          range: "${label} must be between ${min}-${max}"
        },
        array: {
          len: "Must be ${len} ${label}",
          min: "At least ${min} ${label}",
          max: "At most ${max} ${label}",
          range: "The amount of ${label} must be between ${min}-${max}"
        },
        pattern: {
          mismatch: "${label} does not match the pattern ${pattern}"
        }
      }
    },
    Image: {
      preview: "Preview"
    },
    QRCode: {
      expired: "QR code expired",
      refresh: "Refresh",
      scanned: "Scanned"
    },
    ColorPicker: {
      presetEmpty: "Empty"
    }
  };
  Object.assign({}, Ro.Modal);
  let to = [];
  const dl = () => to.reduce((r, e) => Object.assign(Object.assign({}, r), e), Ro.Modal);
  function Xm(r) {
    if (r) {
      const e = Object.assign({}, r);
      return to.push(e), dl(), () => {
        to = to.filter((t) => t !== e), dl();
      };
    }
    Object.assign({}, Ro.Modal);
  }
  const bd = /* @__PURE__ */ ks(void 0), xd = "internalMark", Sd = (r) => {
    const {
      locale: e = {},
      children: t,
      _ANT_MARK__: n
    } = r;
    if (process.env.NODE_ENV !== "production") {
      const o = Nn("LocaleProvider");
      process.env.NODE_ENV !== "production" && o(n === xd, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
    }
    C.useEffect(() => Xm(e == null ? void 0 : e.Modal), [e]);
    const i = C.useMemo(() => Object.assign(Object.assign({}, e), {
      exist: !0
    }), [e]);
    return /* @__PURE__ */ C.createElement(bd.Provider, {
      value: i
    }, t);
  };
  process.env.NODE_ENV !== "production" && (Sd.displayName = "LocaleProvider");
  function tt(r, e) {
    Zm(r) && (r = "100%");
    var t = Jm(r);
    return r = e === 360 ? r : Math.min(e, Math.max(0, parseFloat(r))), t && (r = parseInt(String(r * e), 10) / 100), Math.abs(r - e) < 1e-6 ? 1 : (e === 360 ? r = (r < 0 ? r % e + e : r % e) / parseFloat(String(e)) : r = r % e / parseFloat(String(e)), r);
  }
  function zi(r) {
    return Math.min(1, Math.max(0, r));
  }
  function Zm(r) {
    return typeof r == "string" && r.indexOf(".") !== -1 && parseFloat(r) === 1;
  }
  function Jm(r) {
    return typeof r == "string" && r.indexOf("%") !== -1;
  }
  function Ed(r) {
    return r = parseFloat(r), (isNaN(r) || r < 0 || r > 1) && (r = 1), r;
  }
  function Li(r) {
    return r <= 1 ? "".concat(Number(r) * 100, "%") : r;
  }
  function Kr(r) {
    return r.length === 1 ? "0" + r : String(r);
  }
  function Qm(r, e, t) {
    return {
      r: tt(r, 255) * 255,
      g: tt(e, 255) * 255,
      b: tt(t, 255) * 255
    };
  }
  function fl(r, e, t) {
    r = tt(r, 255), e = tt(e, 255), t = tt(t, 255);
    var n = Math.max(r, e, t), i = Math.min(r, e, t), o = 0, s = 0, a = (n + i) / 2;
    if (n === i)
      s = 0, o = 0;
    else {
      var c = n - i;
      switch (s = a > 0.5 ? c / (2 - n - i) : c / (n + i), n) {
        case r:
          o = (e - t) / c + (e < t ? 6 : 0);
          break;
        case e:
          o = (t - r) / c + 2;
          break;
        case t:
          o = (r - e) / c + 4;
          break;
      }
      o /= 6;
    }
    return { h: o, s, l: a };
  }
  function ua(r, e, t) {
    return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * (6 * t) : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * (2 / 3 - t) * 6 : r;
  }
  function eg(r, e, t) {
    var n, i, o;
    if (r = tt(r, 360), e = tt(e, 100), t = tt(t, 100), e === 0)
      i = t, o = t, n = t;
    else {
      var s = t < 0.5 ? t * (1 + e) : t + e - t * e, a = 2 * t - s;
      n = ua(a, s, r + 1 / 3), i = ua(a, s, r), o = ua(a, s, r - 1 / 3);
    }
    return { r: n * 255, g: i * 255, b: o * 255 };
  }
  function ns(r, e, t) {
    r = tt(r, 255), e = tt(e, 255), t = tt(t, 255);
    var n = Math.max(r, e, t), i = Math.min(r, e, t), o = 0, s = n, a = n - i, c = n === 0 ? 0 : a / n;
    if (n === i)
      o = 0;
    else {
      switch (n) {
        case r:
          o = (e - t) / a + (e < t ? 6 : 0);
          break;
        case e:
          o = (t - r) / a + 2;
          break;
        case t:
          o = (r - e) / a + 4;
          break;
      }
      o /= 6;
    }
    return { h: o, s: c, v: s };
  }
  function tg(r, e, t) {
    r = tt(r, 360) * 6, e = tt(e, 100), t = tt(t, 100);
    var n = Math.floor(r), i = r - n, o = t * (1 - e), s = t * (1 - i * e), a = t * (1 - (1 - i) * e), c = n % 6, l = [t, s, o, o, a, t][c], u = [a, t, t, s, o, o][c], d = [o, o, a, t, t, s][c];
    return { r: l * 255, g: u * 255, b: d * 255 };
  }
  function is(r, e, t, n) {
    var i = [
      Kr(Math.round(r).toString(16)),
      Kr(Math.round(e).toString(16)),
      Kr(Math.round(t).toString(16))
    ];
    return n && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("");
  }
  function rg(r, e, t, n, i) {
    var o = [
      Kr(Math.round(r).toString(16)),
      Kr(Math.round(e).toString(16)),
      Kr(Math.round(t).toString(16)),
      Kr(ng(n))
    ];
    return i && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
  }
  function ng(r) {
    return Math.round(parseFloat(r) * 255).toString(16);
  }
  function hl(r) {
    return Et(r) / 255;
  }
  function Et(r) {
    return parseInt(r, 16);
  }
  function ig(r) {
    return {
      r: r >> 16,
      g: (r & 65280) >> 8,
      b: r & 255
    };
  }
  var os = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  };
  function vn(r) {
    var e = { r: 0, g: 0, b: 0 }, t = 1, n = null, i = null, o = null, s = !1, a = !1;
    return typeof r == "string" && (r = sg(r)), typeof r == "object" && (cr(r.r) && cr(r.g) && cr(r.b) ? (e = Qm(r.r, r.g, r.b), s = !0, a = String(r.r).substr(-1) === "%" ? "prgb" : "rgb") : cr(r.h) && cr(r.s) && cr(r.v) ? (n = Li(r.s), i = Li(r.v), e = tg(r.h, n, i), s = !0, a = "hsv") : cr(r.h) && cr(r.s) && cr(r.l) && (n = Li(r.s), o = Li(r.l), e = eg(r.h, n, o), s = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(r, "a") && (t = r.a)), t = Ed(t), {
      ok: s,
      format: r.format || a,
      r: Math.min(255, Math.max(e.r, 0)),
      g: Math.min(255, Math.max(e.g, 0)),
      b: Math.min(255, Math.max(e.b, 0)),
      a: t
    };
  }
  var og = "[-\\+]?\\d+%?", ag = "[-\\+]?\\d*\\.\\d+%?", Pr = "(?:".concat(ag, ")|(?:").concat(og, ")"), da = "[\\s|\\(]+(".concat(Pr, ")[,|\\s]+(").concat(Pr, ")[,|\\s]+(").concat(Pr, ")\\s*\\)?"), fa = "[\\s|\\(]+(".concat(Pr, ")[,|\\s]+(").concat(Pr, ")[,|\\s]+(").concat(Pr, ")[,|\\s]+(").concat(Pr, ")\\s*\\)?"), Lt = {
    CSS_UNIT: new RegExp(Pr),
    rgb: new RegExp("rgb" + da),
    rgba: new RegExp("rgba" + fa),
    hsl: new RegExp("hsl" + da),
    hsla: new RegExp("hsla" + fa),
    hsv: new RegExp("hsv" + da),
    hsva: new RegExp("hsva" + fa),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
  function sg(r) {
    if (r = r.trim().toLowerCase(), r.length === 0)
      return !1;
    var e = !1;
    if (os[r])
      r = os[r], e = !0;
    else if (r === "transparent")
      return { r: 0, g: 0, b: 0, a: 0, format: "name" };
    var t = Lt.rgb.exec(r);
    return t ? { r: t[1], g: t[2], b: t[3] } : (t = Lt.rgba.exec(r), t ? { r: t[1], g: t[2], b: t[3], a: t[4] } : (t = Lt.hsl.exec(r), t ? { h: t[1], s: t[2], l: t[3] } : (t = Lt.hsla.exec(r), t ? { h: t[1], s: t[2], l: t[3], a: t[4] } : (t = Lt.hsv.exec(r), t ? { h: t[1], s: t[2], v: t[3] } : (t = Lt.hsva.exec(r), t ? { h: t[1], s: t[2], v: t[3], a: t[4] } : (t = Lt.hex8.exec(r), t ? {
      r: Et(t[1]),
      g: Et(t[2]),
      b: Et(t[3]),
      a: hl(t[4]),
      format: e ? "name" : "hex8"
    } : (t = Lt.hex6.exec(r), t ? {
      r: Et(t[1]),
      g: Et(t[2]),
      b: Et(t[3]),
      format: e ? "name" : "hex"
    } : (t = Lt.hex4.exec(r), t ? {
      r: Et(t[1] + t[1]),
      g: Et(t[2] + t[2]),
      b: Et(t[3] + t[3]),
      a: hl(t[4] + t[4]),
      format: e ? "name" : "hex8"
    } : (t = Lt.hex3.exec(r), t ? {
      r: Et(t[1] + t[1]),
      g: Et(t[2] + t[2]),
      b: Et(t[3] + t[3]),
      format: e ? "name" : "hex"
    } : !1)))))))));
  }
  function cr(r) {
    return !!Lt.CSS_UNIT.exec(String(r));
  }
  var wt = (
    /** @class */
    function() {
      function r(e, t) {
        e === void 0 && (e = ""), t === void 0 && (t = {});
        var n;
        if (e instanceof r)
          return e;
        typeof e == "number" && (e = ig(e)), this.originalInput = e;
        var i = vn(e);
        this.originalInput = e, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = t.format) !== null && n !== void 0 ? n : i.format, this.gradientType = t.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok;
      }
      return r.prototype.isDark = function() {
        return this.getBrightness() < 128;
      }, r.prototype.isLight = function() {
        return !this.isDark();
      }, r.prototype.getBrightness = function() {
        var e = this.toRgb();
        return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
      }, r.prototype.getLuminance = function() {
        var e = this.toRgb(), t, n, i, o = e.r / 255, s = e.g / 255, a = e.b / 255;
        return o <= 0.03928 ? t = o / 12.92 : t = Math.pow((o + 0.055) / 1.055, 2.4), s <= 0.03928 ? n = s / 12.92 : n = Math.pow((s + 0.055) / 1.055, 2.4), a <= 0.03928 ? i = a / 12.92 : i = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * t + 0.7152 * n + 0.0722 * i;
      }, r.prototype.getAlpha = function() {
        return this.a;
      }, r.prototype.setAlpha = function(e) {
        return this.a = Ed(e), this.roundA = Math.round(100 * this.a) / 100, this;
      }, r.prototype.isMonochrome = function() {
        var e = this.toHsl().s;
        return e === 0;
      }, r.prototype.toHsv = function() {
        var e = ns(this.r, this.g, this.b);
        return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
      }, r.prototype.toHsvString = function() {
        var e = ns(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), i = Math.round(e.v * 100);
        return this.a === 1 ? "hsv(".concat(t, ", ").concat(n, "%, ").concat(i, "%)") : "hsva(".concat(t, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")");
      }, r.prototype.toHsl = function() {
        var e = fl(this.r, this.g, this.b);
        return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
      }, r.prototype.toHslString = function() {
        var e = fl(this.r, this.g, this.b), t = Math.round(e.h * 360), n = Math.round(e.s * 100), i = Math.round(e.l * 100);
        return this.a === 1 ? "hsl(".concat(t, ", ").concat(n, "%, ").concat(i, "%)") : "hsla(".concat(t, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")");
      }, r.prototype.toHex = function(e) {
        return e === void 0 && (e = !1), is(this.r, this.g, this.b, e);
      }, r.prototype.toHexString = function(e) {
        return e === void 0 && (e = !1), "#" + this.toHex(e);
      }, r.prototype.toHex8 = function(e) {
        return e === void 0 && (e = !1), rg(this.r, this.g, this.b, this.a, e);
      }, r.prototype.toHex8String = function(e) {
        return e === void 0 && (e = !1), "#" + this.toHex8(e);
      }, r.prototype.toHexShortString = function(e) {
        return e === void 0 && (e = !1), this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
      }, r.prototype.toRgb = function() {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a
        };
      }, r.prototype.toRgbString = function() {
        var e = Math.round(this.r), t = Math.round(this.g), n = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(e, ", ").concat(t, ", ").concat(n, ")") : "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", ").concat(this.roundA, ")");
      }, r.prototype.toPercentageRgb = function() {
        var e = function(t) {
          return "".concat(Math.round(tt(t, 255) * 100), "%");
        };
        return {
          r: e(this.r),
          g: e(this.g),
          b: e(this.b),
          a: this.a
        };
      }, r.prototype.toPercentageRgbString = function() {
        var e = function(t) {
          return Math.round(tt(t, 255) * 100);
        };
        return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
      }, r.prototype.toName = function() {
        if (this.a === 0)
          return "transparent";
        if (this.a < 1)
          return !1;
        for (var e = "#" + is(this.r, this.g, this.b, !1), t = 0, n = Object.entries(os); t < n.length; t++) {
          var i = n[t], o = i[0], s = i[1];
          if (e === s)
            return o;
        }
        return !1;
      }, r.prototype.toString = function(e) {
        var t = !!e;
        e = e ?? this.format;
        var n = !1, i = this.a < 1 && this.a >= 0, o = !t && i && (e.startsWith("hex") || e === "name");
        return o ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
      }, r.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
      }, r.prototype.clone = function() {
        return new r(this.toString());
      }, r.prototype.lighten = function(e) {
        e === void 0 && (e = 10);
        var t = this.toHsl();
        return t.l += e / 100, t.l = zi(t.l), new r(t);
      }, r.prototype.brighten = function(e) {
        e === void 0 && (e = 10);
        var t = this.toRgb();
        return t.r = Math.max(0, Math.min(255, t.r - Math.round(255 * -(e / 100)))), t.g = Math.max(0, Math.min(255, t.g - Math.round(255 * -(e / 100)))), t.b = Math.max(0, Math.min(255, t.b - Math.round(255 * -(e / 100)))), new r(t);
      }, r.prototype.darken = function(e) {
        e === void 0 && (e = 10);
        var t = this.toHsl();
        return t.l -= e / 100, t.l = zi(t.l), new r(t);
      }, r.prototype.tint = function(e) {
        return e === void 0 && (e = 10), this.mix("white", e);
      }, r.prototype.shade = function(e) {
        return e === void 0 && (e = 10), this.mix("black", e);
      }, r.prototype.desaturate = function(e) {
        e === void 0 && (e = 10);
        var t = this.toHsl();
        return t.s -= e / 100, t.s = zi(t.s), new r(t);
      }, r.prototype.saturate = function(e) {
        e === void 0 && (e = 10);
        var t = this.toHsl();
        return t.s += e / 100, t.s = zi(t.s), new r(t);
      }, r.prototype.greyscale = function() {
        return this.desaturate(100);
      }, r.prototype.spin = function(e) {
        var t = this.toHsl(), n = (t.h + e) % 360;
        return t.h = n < 0 ? 360 + n : n, new r(t);
      }, r.prototype.mix = function(e, t) {
        t === void 0 && (t = 50);
        var n = this.toRgb(), i = new r(e).toRgb(), o = t / 100, s = {
          r: (i.r - n.r) * o + n.r,
          g: (i.g - n.g) * o + n.g,
          b: (i.b - n.b) * o + n.b,
          a: (i.a - n.a) * o + n.a
        };
        return new r(s);
      }, r.prototype.analogous = function(e, t) {
        e === void 0 && (e = 6), t === void 0 && (t = 30);
        var n = this.toHsl(), i = 360 / t, o = [this];
        for (n.h = (n.h - (i * e >> 1) + 720) % 360; --e; )
          n.h = (n.h + i) % 360, o.push(new r(n));
        return o;
      }, r.prototype.complement = function() {
        var e = this.toHsl();
        return e.h = (e.h + 180) % 360, new r(e);
      }, r.prototype.monochromatic = function(e) {
        e === void 0 && (e = 6);
        for (var t = this.toHsv(), n = t.h, i = t.s, o = t.v, s = [], a = 1 / e; e--; )
          s.push(new r({ h: n, s: i, v: o })), o = (o + a) % 1;
        return s;
      }, r.prototype.splitcomplement = function() {
        var e = this.toHsl(), t = e.h;
        return [
          this,
          new r({ h: (t + 72) % 360, s: e.s, l: e.l }),
          new r({ h: (t + 216) % 360, s: e.s, l: e.l })
        ];
      }, r.prototype.onBackground = function(e) {
        var t = this.toRgb(), n = new r(e).toRgb(), i = t.a + n.a * (1 - t.a);
        return new r({
          r: (t.r * t.a + n.r * n.a * (1 - t.a)) / i,
          g: (t.g * t.a + n.g * n.a * (1 - t.a)) / i,
          b: (t.b * t.a + n.b * n.a * (1 - t.a)) / i,
          a: i
        });
      }, r.prototype.triad = function() {
        return this.polyad(3);
      }, r.prototype.tetrad = function() {
        return this.polyad(4);
      }, r.prototype.polyad = function(e) {
        for (var t = this.toHsl(), n = t.h, i = [this], o = 360 / e, s = 1; s < e; s++)
          i.push(new r({ h: (n + s * o) % 360, s: t.s, l: t.l }));
        return i;
      }, r.prototype.equals = function(e) {
        return this.toRgbString() === new r(e).toRgbString();
      }, r;
    }()
  ), Fi = 2, pl = 0.16, cg = 0.05, lg = 0.05, ug = 0.15, Cd = 5, wd = 4, dg = [{
    index: 7,
    opacity: 0.15
  }, {
    index: 6,
    opacity: 0.25
  }, {
    index: 5,
    opacity: 0.3
  }, {
    index: 5,
    opacity: 0.45
  }, {
    index: 5,
    opacity: 0.65
  }, {
    index: 5,
    opacity: 0.85
  }, {
    index: 4,
    opacity: 0.9
  }, {
    index: 3,
    opacity: 0.95
  }, {
    index: 2,
    opacity: 0.97
  }, {
    index: 1,
    opacity: 0.98
  }];
  function ml(r) {
    var e = r.r, t = r.g, n = r.b, i = ns(e, t, n);
    return {
      h: i.h * 360,
      s: i.s,
      v: i.v
    };
  }
  function Bi(r) {
    var e = r.r, t = r.g, n = r.b;
    return "#".concat(is(e, t, n, !1));
  }
  function fg(r, e, t) {
    var n = t / 100, i = {
      r: (e.r - r.r) * n + r.r,
      g: (e.g - r.g) * n + r.g,
      b: (e.b - r.b) * n + r.b
    };
    return i;
  }
  function gl(r, e, t) {
    var n;
    return Math.round(r.h) >= 60 && Math.round(r.h) <= 240 ? n = t ? Math.round(r.h) - Fi * e : Math.round(r.h) + Fi * e : n = t ? Math.round(r.h) + Fi * e : Math.round(r.h) - Fi * e, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
  }
  function vl(r, e, t) {
    if (r.h === 0 && r.s === 0)
      return r.s;
    var n;
    return t ? n = r.s - pl * e : e === wd ? n = r.s + pl : n = r.s + cg * e, n > 1 && (n = 1), t && e === Cd && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
  }
  function yl(r, e, t) {
    var n;
    return t ? n = r.v + lg * e : n = r.v - ug * e, n > 1 && (n = 1), Number(n.toFixed(2));
  }
  function ai(r) {
    for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = [], n = vn(r), i = Cd; i > 0; i -= 1) {
      var o = ml(n), s = Bi(vn({
        h: gl(o, i, !0),
        s: vl(o, i, !0),
        v: yl(o, i, !0)
      }));
      t.push(s);
    }
    t.push(Bi(n));
    for (var a = 1; a <= wd; a += 1) {
      var c = ml(n), l = Bi(vn({
        h: gl(c, a),
        s: vl(c, a),
        v: yl(c, a)
      }));
      t.push(l);
    }
    return e.theme === "dark" ? dg.map(function(u) {
      var d = u.index, f = u.opacity, h = Bi(fg(vn(e.backgroundColor || "#141414"), vn(t[d]), f * 100));
      return h;
    }) : t;
  }
  var ha = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
  }, as = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
  as.primary = as[5];
  var ss = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
  ss.primary = ss[5];
  var cs = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
  cs.primary = cs[5];
  var ls = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
  ls.primary = ls[5];
  var us = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
  us.primary = us[5];
  var ds = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
  ds.primary = ds[5];
  var fs = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
  fs.primary = fs[5];
  var hs = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
  hs.primary = hs[5];
  var ho = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
  ho.primary = ho[5];
  var ps = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
  ps.primary = ps[5];
  var ms = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
  ms.primary = ms[5];
  var gs = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
  gs.primary = gs[5];
  var vs = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
  vs.primary = vs[5];
  var pa = {
    red: as,
    volcano: ss,
    orange: cs,
    gold: ls,
    yellow: us,
    lime: ds,
    green: fs,
    cyan: hs,
    blue: ho,
    geekblue: ps,
    purple: ms,
    magenta: gs,
    grey: vs
  };
  const Md = {
    blue: "#1677FF",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    /**
     * @deprecated Use magenta instead
     */
    pink: "#EB2F96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
  }, si = Object.assign(Object.assign({}, Md), {
    // Color
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    // Font
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    // Line
    lineWidth: 1,
    lineType: "solid",
    // Motion
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    // Radius
    borderRadius: 6,
    // Size
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    // Control Base
    controlHeight: 32,
    // zIndex
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    // Image
    opacityImage: 1,
    // Wireframe
    wireframe: !1,
    // Motion
    motion: !0
  });
  function hg(r, e) {
    let {
      generateColorPalettes: t,
      generateNeutralColorPalettes: n
    } = e;
    const {
      colorSuccess: i,
      colorWarning: o,
      colorError: s,
      colorInfo: a,
      colorPrimary: c,
      colorBgBase: l,
      colorTextBase: u
    } = r, d = t(c), f = t(i), h = t(o), m = t(s), g = t(a), p = n(l, u), v = r.colorLink || r.colorInfo, y = t(v);
    return Object.assign(Object.assign({}, p), {
      colorPrimaryBg: d[1],
      colorPrimaryBgHover: d[2],
      colorPrimaryBorder: d[3],
      colorPrimaryBorderHover: d[4],
      colorPrimaryHover: d[5],
      colorPrimary: d[6],
      colorPrimaryActive: d[7],
      colorPrimaryTextHover: d[8],
      colorPrimaryText: d[9],
      colorPrimaryTextActive: d[10],
      colorSuccessBg: f[1],
      colorSuccessBgHover: f[2],
      colorSuccessBorder: f[3],
      colorSuccessBorderHover: f[4],
      colorSuccessHover: f[4],
      colorSuccess: f[6],
      colorSuccessActive: f[7],
      colorSuccessTextHover: f[8],
      colorSuccessText: f[9],
      colorSuccessTextActive: f[10],
      colorErrorBg: m[1],
      colorErrorBgHover: m[2],
      colorErrorBgActive: m[3],
      colorErrorBorder: m[3],
      colorErrorBorderHover: m[4],
      colorErrorHover: m[5],
      colorError: m[6],
      colorErrorActive: m[7],
      colorErrorTextHover: m[8],
      colorErrorText: m[9],
      colorErrorTextActive: m[10],
      colorWarningBg: h[1],
      colorWarningBgHover: h[2],
      colorWarningBorder: h[3],
      colorWarningBorderHover: h[4],
      colorWarningHover: h[4],
      colorWarning: h[6],
      colorWarningActive: h[7],
      colorWarningTextHover: h[8],
      colorWarningText: h[9],
      colorWarningTextActive: h[10],
      colorInfoBg: g[1],
      colorInfoBgHover: g[2],
      colorInfoBorder: g[3],
      colorInfoBorderHover: g[4],
      colorInfoHover: g[4],
      colorInfo: g[6],
      colorInfoActive: g[7],
      colorInfoTextHover: g[8],
      colorInfoText: g[9],
      colorInfoTextActive: g[10],
      colorLinkHover: y[4],
      colorLink: y[6],
      colorLinkActive: y[7],
      colorBgMask: new wt("#000").setAlpha(0.45).toRgbString(),
      colorWhite: "#fff"
    });
  }
  const pg = (r) => {
    let e = r, t = r, n = r, i = r;
    return r < 6 && r >= 5 ? e = r + 1 : r < 16 && r >= 6 ? e = r + 2 : r >= 16 && (e = 16), r < 7 && r >= 5 ? t = 4 : r < 8 && r >= 7 ? t = 5 : r < 14 && r >= 8 ? t = 6 : r < 16 && r >= 14 ? t = 7 : r >= 16 && (t = 8), r < 6 && r >= 2 ? n = 1 : r >= 6 && (n = 2), r > 4 && r < 8 ? i = 4 : r >= 8 && (i = 6), {
      borderRadius: r,
      borderRadiusXS: n,
      borderRadiusSM: t,
      borderRadiusLG: e,
      borderRadiusOuter: i
    };
  };
  function mg(r) {
    const {
      motionUnit: e,
      motionBase: t,
      borderRadius: n,
      lineWidth: i
    } = r;
    return Object.assign({
      // motion
      motionDurationFast: `${(t + e).toFixed(1)}s`,
      motionDurationMid: `${(t + e * 2).toFixed(1)}s`,
      motionDurationSlow: `${(t + e * 3).toFixed(1)}s`,
      // line
      lineWidthBold: i + 1
    }, pg(n));
  }
  const gg = (r) => {
    const {
      controlHeight: e
    } = r;
    return {
      controlHeightSM: e * 0.75,
      controlHeightXS: e * 0.5,
      controlHeightLG: e * 1.25
    };
  };
  function ro(r) {
    return (r + 8) / r;
  }
  function vg(r) {
    const e = new Array(10).fill(null).map((t, n) => {
      const i = n - 1, o = r * Math.pow(Math.E, i / 5), s = n > 1 ? Math.floor(o) : Math.ceil(o);
      return Math.floor(s / 2) * 2;
    });
    return e[1] = r, e.map((t) => ({
      size: t,
      lineHeight: ro(t)
    }));
  }
  const yg = (r) => {
    const e = vg(r), t = e.map((u) => u.size), n = e.map((u) => u.lineHeight), i = t[1], o = t[0], s = t[2], a = n[1], c = n[0], l = n[2];
    return {
      fontSizeSM: o,
      fontSize: i,
      fontSizeLG: s,
      fontSizeXL: t[3],
      fontSizeHeading1: t[6],
      fontSizeHeading2: t[5],
      fontSizeHeading3: t[4],
      fontSizeHeading4: t[3],
      fontSizeHeading5: t[2],
      lineHeight: a,
      lineHeightLG: l,
      lineHeightSM: c,
      fontHeight: Math.round(a * i),
      fontHeightLG: Math.round(l * s),
      fontHeightSM: Math.round(c * o),
      lineHeightHeading1: n[6],
      lineHeightHeading2: n[5],
      lineHeightHeading3: n[4],
      lineHeightHeading4: n[3],
      lineHeightHeading5: n[2]
    };
  };
  function bg(r) {
    const {
      sizeUnit: e,
      sizeStep: t
    } = r;
    return {
      sizeXXL: e * (t + 8),
      // 48
      sizeXL: e * (t + 4),
      // 32
      sizeLG: e * (t + 2),
      // 24
      sizeMD: e * (t + 1),
      // 20
      sizeMS: e * t,
      // 16
      size: e * t,
      // 16
      sizeSM: e * (t - 1),
      // 12
      sizeXS: e * (t - 2),
      // 8
      sizeXXS: e * (t - 3)
      // 4
    };
  }
  const lr = (r, e) => new wt(r).setAlpha(e).toRgbString(), Yn = (r, e) => new wt(r).darken(e).toHexString(), xg = (r) => {
    const e = ai(r);
    return {
      1: e[0],
      2: e[1],
      3: e[2],
      4: e[3],
      5: e[4],
      6: e[5],
      7: e[6],
      8: e[4],
      9: e[5],
      10: e[6]
      // 8: colors[7],
      // 9: colors[8],
      // 10: colors[9],
    };
  }, Sg = (r, e) => {
    const t = r || "#fff", n = e || "#000";
    return {
      colorBgBase: t,
      colorTextBase: n,
      colorText: lr(n, 0.88),
      colorTextSecondary: lr(n, 0.65),
      colorTextTertiary: lr(n, 0.45),
      colorTextQuaternary: lr(n, 0.25),
      colorFill: lr(n, 0.15),
      colorFillSecondary: lr(n, 0.06),
      colorFillTertiary: lr(n, 0.04),
      colorFillQuaternary: lr(n, 0.02),
      colorBgLayout: Yn(t, 4),
      colorBgContainer: Yn(t, 0),
      colorBgElevated: Yn(t, 0),
      colorBgSpotlight: lr(n, 0.85),
      colorBgBlur: "transparent",
      colorBorder: Yn(t, 15),
      colorBorderSecondary: Yn(t, 6)
    };
  };
  function Eg(r) {
    ha.pink = ha.magenta, pa.pink = pa.magenta;
    const e = Object.keys(Md).map((t) => {
      const n = r[t] === ha[t] ? pa[t] : ai(r[t]);
      return new Array(10).fill(1).reduce((i, o, s) => (i[`${t}-${s + 1}`] = n[s], i[`${t}${s + 1}`] = n[s], i), {});
    }).reduce((t, n) => (t = Object.assign(Object.assign({}, t), n), t), {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), e), hg(r, {
      generateColorPalettes: xg,
      generateNeutralColorPalettes: Sg
    })), yg(r.fontSize)), bg(r)), gg(r)), mg(r));
  }
  const _d = Ya(Eg), ys = {
    token: si,
    override: {
      override: si
    },
    hashed: !0
  }, Td = /* @__PURE__ */ de.createContext(ys), Od = "anticon", Cg = (r, e) => e || (r ? `ant-${r}` : "ant"), Xt = /* @__PURE__ */ C.createContext({
    // We provide a default function for Context without provider
    getPrefixCls: Cg,
    iconPrefixCls: Od
  }), wg = `-ant-${Date.now()}-${Math.random()}`;
  function Mg(r, e) {
    const t = {}, n = (s, a) => {
      let c = s.clone();
      return c = (a == null ? void 0 : a(c)) || c, c.toRgbString();
    }, i = (s, a) => {
      const c = new wt(s), l = ai(c.toRgbString());
      t[`${a}-color`] = n(c), t[`${a}-color-disabled`] = l[1], t[`${a}-color-hover`] = l[4], t[`${a}-color-active`] = l[6], t[`${a}-color-outline`] = c.clone().setAlpha(0.2).toRgbString(), t[`${a}-color-deprecated-bg`] = l[0], t[`${a}-color-deprecated-border`] = l[2];
    };
    if (e.primaryColor) {
      i(e.primaryColor, "primary");
      const s = new wt(e.primaryColor), a = ai(s.toRgbString());
      a.forEach((l, u) => {
        t[`primary-${u + 1}`] = l;
      }), t["primary-color-deprecated-l-35"] = n(s, (l) => l.lighten(35)), t["primary-color-deprecated-l-20"] = n(s, (l) => l.lighten(20)), t["primary-color-deprecated-t-20"] = n(s, (l) => l.tint(20)), t["primary-color-deprecated-t-50"] = n(s, (l) => l.tint(50)), t["primary-color-deprecated-f-12"] = n(s, (l) => l.setAlpha(l.getAlpha() * 0.12));
      const c = new wt(a[0]);
      t["primary-color-active-deprecated-f-30"] = n(c, (l) => l.setAlpha(l.getAlpha() * 0.3)), t["primary-color-active-deprecated-d-02"] = n(c, (l) => l.darken(2));
    }
    return e.successColor && i(e.successColor, "success"), e.warningColor && i(e.warningColor, "warning"), e.errorColor && i(e.errorColor, "error"), e.infoColor && i(e.infoColor, "info"), `
  :root {
    ${Object.keys(t).map((s) => `--${r}-${s}: ${t[s]};`).join(`
`)}
  }
  `.trim();
  }
  function _g(r, e) {
    const t = Mg(r, e);
    gr() ? Wr(t, `${wg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Oo(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
  }
  const po = /* @__PURE__ */ C.createContext(!1), Tg = (r) => {
    let {
      children: e,
      disabled: t
    } = r;
    const n = C.useContext(po);
    return /* @__PURE__ */ C.createElement(po.Provider, {
      value: t ?? n
    }, e);
  }, _n = /* @__PURE__ */ C.createContext(void 0), Og = (r) => {
    let {
      children: e,
      size: t
    } = r;
    const n = C.useContext(_n);
    return /* @__PURE__ */ C.createElement(_n.Provider, {
      value: t || n
    }, e);
  };
  function Rg() {
    const r = qt(po), e = qt(_n);
    return {
      componentDisabled: r,
      componentSize: e
    };
  }
  const Ag = "5.19.1";
  function ma(r) {
    return r >= 0 && r <= 255;
  }
  function ji(r, e) {
    const {
      r: t,
      g: n,
      b: i,
      a: o
    } = new wt(r).toRgb();
    if (o < 1)
      return r;
    const {
      r: s,
      g: a,
      b: c
    } = new wt(e).toRgb();
    for (let l = 0.01; l <= 1; l += 0.01) {
      const u = Math.round((t - s * (1 - l)) / l), d = Math.round((n - a * (1 - l)) / l), f = Math.round((i - c * (1 - l)) / l);
      if (ma(u) && ma(d) && ma(f))
        return new wt({
          r: u,
          g: d,
          b: f,
          a: Math.round(l * 100) / 100
        }).toRgbString();
    }
    return new wt({
      r: t,
      g: n,
      b: i,
      a: 1
    }).toRgbString();
  }
  var Pg = function(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
    return t;
  };
  function Rd(r) {
    const {
      override: e
    } = r, t = Pg(r, ["override"]), n = Object.assign({}, e);
    Object.keys(si).forEach((f) => {
      delete n[f];
    });
    const i = Object.assign(Object.assign({}, t), n), o = 480, s = 576, a = 768, c = 992, l = 1200, u = 1600;
    if (i.motion === !1) {
      const f = "0s";
      i.motionDurationFast = f, i.motionDurationMid = f, i.motionDurationSlow = f;
    }
    return Object.assign(Object.assign(Object.assign({}, i), {
      // ============== Background ============== //
      colorFillContent: i.colorFillSecondary,
      colorFillContentHover: i.colorFill,
      colorFillAlter: i.colorFillQuaternary,
      colorBgContainerDisabled: i.colorFillTertiary,
      // ============== Split ============== //
      colorBorderBg: i.colorBgContainer,
      colorSplit: ji(i.colorBorderSecondary, i.colorBgContainer),
      // ============== Text ============== //
      colorTextPlaceholder: i.colorTextQuaternary,
      colorTextDisabled: i.colorTextQuaternary,
      colorTextHeading: i.colorText,
      colorTextLabel: i.colorTextSecondary,
      colorTextDescription: i.colorTextTertiary,
      colorTextLightSolid: i.colorWhite,
      colorHighlight: i.colorError,
      colorBgTextHover: i.colorFillSecondary,
      colorBgTextActive: i.colorFill,
      colorIcon: i.colorTextTertiary,
      colorIconHover: i.colorText,
      colorErrorOutline: ji(i.colorErrorBg, i.colorBgContainer),
      colorWarningOutline: ji(i.colorWarningBg, i.colorBgContainer),
      // Font
      fontSizeIcon: i.fontSizeSM,
      // Line
      lineWidthFocus: i.lineWidth * 4,
      // Control
      lineWidth: i.lineWidth,
      controlOutlineWidth: i.lineWidth * 2,
      // Checkbox size and expand icon size
      controlInteractiveSize: i.controlHeight / 2,
      controlItemBgHover: i.colorFillTertiary,
      controlItemBgActive: i.colorPrimaryBg,
      controlItemBgActiveHover: i.colorPrimaryBgHover,
      controlItemBgActiveDisabled: i.colorFill,
      controlTmpOutline: i.colorFillQuaternary,
      controlOutline: ji(i.colorPrimaryBg, i.colorBgContainer),
      lineType: i.lineType,
      borderRadius: i.borderRadius,
      borderRadiusXS: i.borderRadiusXS,
      borderRadiusSM: i.borderRadiusSM,
      borderRadiusLG: i.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: "none",
      linkHoverDecoration: "none",
      linkFocusDecoration: "none",
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: i.sizeXXS,
      paddingXS: i.sizeXS,
      paddingSM: i.sizeSM,
      padding: i.size,
      paddingMD: i.sizeMD,
      paddingLG: i.sizeLG,
      paddingXL: i.sizeXL,
      paddingContentHorizontalLG: i.sizeLG,
      paddingContentVerticalLG: i.sizeMS,
      paddingContentHorizontal: i.sizeMS,
      paddingContentVertical: i.sizeSM,
      paddingContentHorizontalSM: i.size,
      paddingContentVerticalSM: i.sizeXS,
      marginXXS: i.sizeXXS,
      marginXS: i.sizeXS,
      marginSM: i.sizeSM,
      margin: i.size,
      marginMD: i.sizeMD,
      marginLG: i.sizeLG,
      marginXL: i.sizeXL,
      marginXXL: i.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: o,
      screenXSMin: o,
      screenXSMax: s - 1,
      screenSM: s,
      screenSMMin: s,
      screenSMMax: a - 1,
      screenMD: a,
      screenMDMin: a,
      screenMDMax: c - 1,
      screenLG: c,
      screenLGMin: c,
      screenLGMax: l - 1,
      screenXL: l,
      screenXLMin: l,
      screenXLMax: u - 1,
      screenXXL: u,
      screenXXLMin: u,
      boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
      boxShadowCard: `
      0 1px 2px -2px ${new wt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new wt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new wt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
      boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), n);
  }
  var bl = function(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
    return t;
  };
  const Ad = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0
  }, Pd = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0
  }, Ng = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0
  }, Nd = (r, e, t) => {
    const n = t.getDerivativeToken(r), {
      override: i
    } = e, o = bl(e, ["override"]);
    let s = Object.assign(Object.assign({}, n), {
      override: i
    });
    return s = Rd(s), o && Object.entries(o).forEach((a) => {
      let [c, l] = a;
      const {
        theme: u
      } = l, d = bl(l, ["theme"]);
      let f = d;
      u && (f = Nd(Object.assign(Object.assign({}, s), d), {
        override: d
      }, u)), s[c] = f;
    }), s;
  };
  function Dr() {
    const {
      token: r,
      hashed: e,
      theme: t,
      override: n,
      cssVar: i
    } = de.useContext(Td), o = `${Ag}-${e || ""}`, s = t || _d, [a, c, l] = um(s, [si, r], {
      salt: o,
      override: n,
      getComputedToken: Nd,
      // formatToken will not be consumed after 1.15.0 with getComputedToken.
      // But token will break if @ant-design/cssinjs is under 1.15.0 without it
      formatToken: Rd,
      cssVar: i && {
        prefix: i.prefix,
        key: i.key,
        unitless: Ad,
        ignore: Pd,
        preserve: Ng
      }
    });
    return [s, l, e ? c : "", a, i];
  }
  function Tn(r) {
    var e = C.useRef();
    e.current = r;
    var t = C.useCallback(function() {
      for (var n, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (n = e.current) === null || n === void 0 ? void 0 : n.call.apply(n, [e].concat(o));
    }, []);
    return t;
  }
  function bs(r) {
    var e = C.useRef(!1), t = C.useState(r), n = oe(t, 2), i = n[0], o = n[1];
    C.useEffect(function() {
      return e.current = !1, function() {
        e.current = !0;
      };
    }, []);
    function s(a, c) {
      c && e.current || o(a);
    }
    return [i, s];
  }
  const Dg = 1e3 * 60 * 10;
  let kg = /* @__PURE__ */ function() {
    function r() {
      gt(this, r), this.map = /* @__PURE__ */ new Map(), this.objectIDMap = /* @__PURE__ */ new WeakMap(), this.nextID = 0, this.lastAccessBeat = /* @__PURE__ */ new Map(), this.accessBeat = 0;
    }
    return vt(r, [{
      key: "set",
      value: function(t, n) {
        this.clear();
        const i = this.getCompositeKey(t);
        this.map.set(i, n), this.lastAccessBeat.set(i, Date.now());
      }
    }, {
      key: "get",
      value: function(t) {
        const n = this.getCompositeKey(t), i = this.map.get(n);
        return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, i;
      }
    }, {
      key: "getCompositeKey",
      value: function(t) {
        return t.map((i) => i && typeof i == "object" ? `obj_${this.getObjectID(i)}` : `${typeof i}_${i}`).join("|");
      }
    }, {
      key: "getObjectID",
      value: function(t) {
        if (this.objectIDMap.has(t))
          return this.objectIDMap.get(t);
        const n = this.nextID;
        return this.objectIDMap.set(t, n), this.nextID += 1, n;
      }
    }, {
      key: "clear",
      value: function() {
        if (this.accessBeat > 1e4) {
          const t = Date.now();
          this.lastAccessBeat.forEach((n, i) => {
            t - n > Dg && (this.map.delete(i), this.lastAccessBeat.delete(i));
          }), this.accessBeat = 0;
        }
      }
    }]);
  }();
  const xl = new kg();
  function Ig(r, e) {
    return de.useMemo(() => {
      const t = xl.get(e);
      if (t)
        return t;
      const n = r();
      return xl.set(e, n), n;
    }, e);
  }
  const no = function(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      color: r.colorText,
      fontSize: r.fontSize,
      // font-variant: @font-variant-base;
      lineHeight: r.lineHeight,
      listStyle: "none",
      // font-feature-settings: @font-feature-settings-base;
      fontFamily: e ? "inherit" : r.fontFamily
    };
  }, $g = () => ({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
      lineHeight: 1
    },
    svg: {
      display: "inline-block"
    }
  }), zg = (r) => ({
    a: {
      color: r.colorLink,
      textDecoration: r.linkDecoration,
      backgroundColor: "transparent",
      // remove the gray background on active links in IE 10.
      outline: "none",
      cursor: "pointer",
      transition: `color ${r.motionDurationSlow}`,
      "-webkit-text-decoration-skip": "objects",
      // remove gaps in links underline in iOS 8+ and Safari 8+.
      "&:hover": {
        color: r.colorLinkHover
      },
      "&:active": {
        color: r.colorLinkActive
      },
      "&:active, &:hover": {
        textDecoration: r.linkHoverDecoration,
        outline: 0
      },
      // https://github.com/ant-design/ant-design/issues/22503
      "&:focus": {
        textDecoration: r.linkFocusDecoration,
        outline: 0
      },
      "&[disabled]": {
        color: r.colorTextDisabled,
        cursor: "not-allowed"
      }
    }
  }), Lg = (r, e, t, n) => {
    const i = `[class^="${e}"], [class*=" ${e}"]`, o = t ? `.${t}` : i, s = {
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      }
    };
    let a = {};
    return n !== !1 && (a = {
      fontFamily: r.fontFamily,
      fontSize: r.fontSize
    }), {
      [o]: Object.assign(Object.assign(Object.assign({}, a), s), {
        [i]: s
      })
    };
  }, Gs = (r) => ({
    outline: `${qe(r.lineWidthFocus)} solid ${r.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: "outline-offset 0s, outline 0s"
  }), Fg = (r) => ({
    "&:focus-visible": Object.assign({}, Gs(r))
  });
  function Bg(r) {
    return r === "js" ? {
      max: Math.max,
      min: Math.min
    } : {
      max: function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return `max(${t.map((i) => qe(i)).join(",")})`;
      },
      min: function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return `min(${t.map((i) => qe(i)).join(",")})`;
      }
    };
  }
  const Dd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
  let xs = !0;
  function Ir() {
    for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
      e[t] = arguments[t];
    if (!Dd)
      return Object.assign.apply(Object, [{}].concat(e));
    xs = !1;
    const n = {};
    return e.forEach((i) => {
      Object.keys(i).forEach((s) => {
        Object.defineProperty(n, s, {
          configurable: !0,
          enumerable: !0,
          get: () => i[s]
        });
      });
    }), xs = !0, n;
  }
  const Sl = {};
  function jg() {
  }
  const Hg = (r) => {
    let e, t = r, n = jg;
    return Dd && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), t = new Proxy(r, {
      get(i, o) {
        return xs && e.add(o), i[o];
      }
    }), n = (i, o) => {
      var s;
      Sl[i] = {
        global: Array.from(e),
        component: Object.assign(Object.assign({}, (s = Sl[i]) === null || s === void 0 ? void 0 : s.component), o)
      };
    }), {
      token: t,
      keys: e,
      flush: n
    };
  }, kd = (r, e) => {
    const [t, n] = Dr();
    return ts({
      theme: t,
      token: n,
      hashId: "",
      path: ["ant-design-icons", r],
      nonce: () => e == null ? void 0 : e.nonce,
      layer: {
        name: "antd"
      }
    }, () => [{
      [`.${r}`]: Object.assign(Object.assign({}, $g()), {
        [`.${r} .${r}-icon`]: {
          display: "block"
        }
      })
    }]);
  }, Id = (r, e, t) => {
    var n;
    return typeof t == "function" ? t(Ir(e, (n = e[r]) !== null && n !== void 0 ? n : {})) : t ?? {};
  }, $d = (r, e, t, n) => {
    const i = Object.assign({}, e[r]);
    if (n != null && n.deprecatedTokens) {
      const {
        deprecatedTokens: s
      } = n;
      s.forEach((a) => {
        let [c, l] = a;
        var u;
        process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Ge(!(i != null && i[c]), `Component Token \`${String(c)}\` of ${r} is deprecated. Please use \`${String(l)}\` instead.`), (i != null && i[c] || i != null && i[l]) && ((u = i[l]) !== null && u !== void 0 || (i[l] = i == null ? void 0 : i[c]));
      });
    }
    const o = Object.assign(Object.assign({}, t), i);
    return Object.keys(o).forEach((s) => {
      o[s] === e[s] && delete o[s];
    }), o;
  }, El = (r, e) => `${[e, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
  function Ys(r, e, t) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = Array.isArray(r) ? r : [r, r], [o] = i, s = i.join("-");
    return function(a) {
      let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a;
      const [l, u, d, f, h] = Dr(), {
        getPrefixCls: m,
        iconPrefixCls: g,
        csp: p
      } = qt(Xt), v = m(), y = h ? "css" : "js", x = Ig(() => {
        const M = /* @__PURE__ */ new Set();
        return h && Object.keys(n.unitless || {}).forEach((A) => {
          M.add(Xi(A, h.prefix)), M.add(Xi(A, El(o, h.prefix)));
        }), Lp(y, M);
      }, [y, o, h == null ? void 0 : h.prefix]), {
        max: E,
        min: b
      } = Bg(y), _ = {
        theme: l,
        token: f,
        hashId: d,
        nonce: () => p == null ? void 0 : p.nonce,
        clientOnly: n.clientOnly,
        layer: {
          name: "antd"
        },
        // antd is always at top of styles
        order: n.order || -999
      };
      return ts(Object.assign(Object.assign({}, _), {
        clientOnly: !1,
        path: ["Shared", v]
      }), () => [{
        // Link
        "&": zg(f)
      }]), kd(g, p), [ts(Object.assign(Object.assign({}, _), {
        path: [s, a, g]
      }), () => {
        if (n.injectStyle === !1)
          return [];
        const {
          token: M,
          flush: A
        } = Hg(f), N = Id(o, u, t), $ = `.${a}`, F = $d(o, u, N, {
          deprecatedTokens: n.deprecatedTokens
        });
        h && Object.keys(N).forEach((U) => {
          N[U] = `var(${Xi(U, El(o, h.prefix))})`;
        });
        const L = Ir(M, {
          componentCls: $,
          prefixCls: a,
          iconCls: `.${g}`,
          antCls: `.${v}`,
          calc: x,
          // @ts-ignore
          max: E,
          // @ts-ignore
          min: b
        }, h ? N : F), D = e(L, {
          hashId: d,
          prefixCls: a,
          rootPrefixCls: v,
          iconPrefixCls: g
        });
        return A(o, F), [n.resetStyle === !1 ? null : Lg(L, a, c, n.resetFont), D];
      }), d];
    };
  }
  const Kg = (r, e, t, n) => {
    const i = Ys(r, e, t, Object.assign({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, n)), o = (s) => {
      let {
        prefixCls: a,
        rootCls: c = a
      } = s;
      return i(a, c), null;
    };
    return process.env.NODE_ENV !== "production" && (o.displayName = `SubStyle_${Array.isArray(r) ? r.join(".") : r}`), o;
  }, Wg = (r, e, t) => {
    const {
      unitless: n,
      injectStyle: i = !0,
      prefixToken: o
    } = t, s = (c) => {
      let {
        rootCls: l,
        cssVar: u
      } = c;
      const [, d] = Dr();
      return Fm({
        path: [r],
        prefix: u.prefix,
        key: u == null ? void 0 : u.key,
        unitless: n,
        ignore: Pd,
        token: d,
        scope: l
      }, () => {
        const f = Id(r, d, e), h = $d(r, d, f, {
          deprecatedTokens: t == null ? void 0 : t.deprecatedTokens
        });
        return Object.keys(f).forEach((m) => {
          h[o(m)] = h[m], delete h[m];
        }), h;
      }), null;
    };
    return (c) => {
      const [, , , , l] = Dr();
      return [(u) => i && l ? /* @__PURE__ */ de.createElement(de.Fragment, null, /* @__PURE__ */ de.createElement(s, {
        rootCls: c,
        cssVar: l,
        component: r
      }), u) : u, l == null ? void 0 : l.key];
    };
  }, Xs = (r, e, t, n) => {
    const i = Array.isArray(r) ? r[0] : r;
    function o(d) {
      return `${i}${d.slice(0, 1).toUpperCase()}${d.slice(1)}`;
    }
    const s = (n == null ? void 0 : n.unitless) || {}, a = Object.assign(Object.assign({}, Ad), {
      [o("zIndexPopup")]: !0
    });
    Object.keys(s).forEach((d) => {
      a[o(d)] = s[d];
    });
    const c = Object.assign(Object.assign({}, n), {
      unitless: a,
      prefixToken: o
    }), l = Ys(r, e, t, c), u = Wg(i, t, c);
    return function(d) {
      let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
      const [, h] = l(d, f), [m, g] = u(f);
      return [m, h, g];
    };
  }, Vg = Object.assign({}, C), {
    useId: Cl
  } = Vg, Ug = () => "", qg = typeof Cl > "u" ? Ug : Cl;
  function Gg(r, e, t) {
    var n, i;
    const o = Nn("ConfigProvider"), s = r || {}, a = s.inherit === !1 || !e ? Object.assign(Object.assign({}, ys), {
      hashed: (n = e == null ? void 0 : e.hashed) !== null && n !== void 0 ? n : ys.hashed,
      cssVar: e == null ? void 0 : e.cssVar
    }) : e, c = qg();
    if (process.env.NODE_ENV !== "production") {
      const l = s.cssVar || a.cssVar, u = !!(typeof s.cssVar == "object" && (!((i = s.cssVar) === null || i === void 0) && i.key) || c);
      process.env.NODE_ENV !== "production" && o(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
    }
    return Ls(() => {
      var l, u;
      if (!r)
        return e;
      const d = Object.assign({}, a.components);
      Object.keys(r.components || {}).forEach((m) => {
        d[m] = Object.assign(Object.assign({}, d[m]), r.components[m]);
      });
      const f = `css-var-${c.replace(/:/g, "")}`, h = ((l = s.cssVar) !== null && l !== void 0 ? l : a.cssVar) && Object.assign(Object.assign(Object.assign({
        prefix: t == null ? void 0 : t.prefixCls
      }, typeof a.cssVar == "object" ? a.cssVar : {}), typeof s.cssVar == "object" ? s.cssVar : {}), {
        key: typeof s.cssVar == "object" && ((u = s.cssVar) === null || u === void 0 ? void 0 : u.key) || f
      });
      return Object.assign(Object.assign(Object.assign({}, a), s), {
        token: Object.assign(Object.assign({}, a.token), s.token),
        components: d,
        cssVar: h
      });
    }, [s, a], (l, u) => l.some((d, f) => {
      const h = u[f];
      return !Rp(d, h, !0);
    }));
  }
  var Yg = ["children"], zd = /* @__PURE__ */ C.createContext({});
  function Xg(r) {
    var e = r.children, t = Yt(r, Yg);
    return /* @__PURE__ */ C.createElement(zd.Provider, {
      value: t
    }, e);
  }
  var Zg = /* @__PURE__ */ function(r) {
    Gr(t, r);
    var e = Yr(t);
    function t() {
      return gt(this, t), e.apply(this, arguments);
    }
    return vt(t, [{
      key: "render",
      value: function() {
        return this.props.children;
      }
    }]), t;
  }(C.Component);
  function Jg(r) {
    var e = C.useReducer(function(a) {
      return a + 1;
    }, 0), t = oe(e, 2), n = t[1], i = C.useRef(r), o = Tn(function() {
      return i.current;
    }), s = Tn(function(a) {
      i.current = typeof a == "function" ? a(i.current) : a, n();
    });
    return [o, s];
  }
  var Rr = "none", Hi = "appear", Ki = "enter", Wi = "leave", wl = "none", Bt = "prepare", yn = "start", bn = "active", Zs = "end", Ld = "prepared";
  function Ml(r, e) {
    var t = {};
    return t[r.toLowerCase()] = e.toLowerCase(), t["Webkit".concat(r)] = "webkit".concat(e), t["Moz".concat(r)] = "moz".concat(e), t["ms".concat(r)] = "MS".concat(e), t["O".concat(r)] = "o".concat(e.toLowerCase()), t;
  }
  function Qg(r, e) {
    var t = {
      animationend: Ml("Animation", "AnimationEnd"),
      transitionend: Ml("Transition", "TransitionEnd")
    };
    return r && ("AnimationEvent" in e || delete t.animationend.animation, "TransitionEvent" in e || delete t.transitionend.transition), t;
  }
  var ev = Qg(gr(), typeof window < "u" ? window : {}), Fd = {};
  if (gr()) {
    var tv = document.createElement("div");
    Fd = tv.style;
  }
  var Vi = {};
  function Bd(r) {
    if (Vi[r])
      return Vi[r];
    var e = ev[r];
    if (e)
      for (var t = Object.keys(e), n = t.length, i = 0; i < n; i += 1) {
        var o = t[i];
        if (Object.prototype.hasOwnProperty.call(e, o) && o in Fd)
          return Vi[r] = e[o], Vi[r];
      }
    return "";
  }
  var jd = Bd("animationend"), Hd = Bd("transitionend"), Kd = !!(jd && Hd), _l = jd || "animationend", Tl = Hd || "transitionend";
  function Ol(r, e) {
    if (!r) return null;
    if (Se(r) === "object") {
      var t = e.replace(/-\w/g, function(n) {
        return n[1].toUpperCase();
      });
      return r[t];
    }
    return "".concat(r, "-").concat(e);
  }
  const rv = function(r) {
    var e = ye();
    function t(i) {
      i && (i.removeEventListener(Tl, r), i.removeEventListener(_l, r));
    }
    function n(i) {
      e.current && e.current !== i && t(e.current), i && i !== e.current && (i.addEventListener(Tl, r), i.addEventListener(_l, r), e.current = i);
    }
    return C.useEffect(function() {
      return function() {
        t(e.current);
      };
    }, []), [n, t];
  };
  var Wd = gr() ? Uf : mt;
  const nv = function() {
    var r = C.useRef(null);
    function e() {
      Je.cancel(r.current);
    }
    function t(n) {
      var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      e();
      var o = Je(function() {
        i <= 1 ? n({
          isCanceled: function() {
            return o !== r.current;
          }
        }) : t(n, i - 1);
      });
      r.current = o;
    }
    return C.useEffect(function() {
      return function() {
        e();
      };
    }, []), [t, e];
  };
  var iv = [Bt, yn, bn, Zs], ov = [Bt, Ld], Vd = !1, av = !0;
  function Ud(r) {
    return r === bn || r === Zs;
  }
  const sv = function(r, e, t) {
    var n = bs(wl), i = oe(n, 2), o = i[0], s = i[1], a = nv(), c = oe(a, 2), l = c[0], u = c[1];
    function d() {
      s(Bt, !0);
    }
    var f = e ? ov : iv;
    return Wd(function() {
      if (o !== wl && o !== Zs) {
        var h = f.indexOf(o), m = f[h + 1], g = t(o);
        g === Vd ? s(m, !0) : m && l(function(p) {
          function v() {
            p.isCanceled() || s(m, !0);
          }
          g === !0 ? v() : Promise.resolve(g).then(v);
        });
      }
    }, [r, o]), C.useEffect(function() {
      return function() {
        u();
      };
    }, []), [d, o];
  };
  function cv(r, e, t, n) {
    var i = n.motionEnter, o = i === void 0 ? !0 : i, s = n.motionAppear, a = s === void 0 ? !0 : s, c = n.motionLeave, l = c === void 0 ? !0 : c, u = n.motionDeadline, d = n.motionLeaveImmediately, f = n.onAppearPrepare, h = n.onEnterPrepare, m = n.onLeavePrepare, g = n.onAppearStart, p = n.onEnterStart, v = n.onLeaveStart, y = n.onAppearActive, x = n.onEnterActive, E = n.onLeaveActive, b = n.onAppearEnd, _ = n.onEnterEnd, S = n.onLeaveEnd, M = n.onVisibleChanged, A = bs(), N = oe(A, 2), $ = N[0], F = N[1], L = Jg(Rr), D = oe(L, 2), U = D[0], P = D[1], R = bs(null), k = oe(R, 2), z = k[0], T = k[1], O = U(), B = ye(!1), j = ye(null);
    function V() {
      return t();
    }
    var ee = ye(!1);
    function Q() {
      P(Rr), T(null, !0);
    }
    var q = Tn(function(ue) {
      var me = U();
      if (me !== Rr) {
        var xe = V();
        if (!(ue && !ue.deadline && ue.target !== xe)) {
          var De = ee.current, ge;
          me === Hi && De ? ge = b == null ? void 0 : b(xe, ue) : me === Ki && De ? ge = _ == null ? void 0 : _(xe, ue) : me === Wi && De && (ge = S == null ? void 0 : S(xe, ue)), De && ge !== !1 && Q();
        }
      }
    }), re = rv(q), ie = oe(re, 1), te = ie[0], ae = function(me) {
      switch (me) {
        case Hi:
          return I(I(I({}, Bt, f), yn, g), bn, y);
        case Ki:
          return I(I(I({}, Bt, h), yn, p), bn, x);
        case Wi:
          return I(I(I({}, Bt, m), yn, v), bn, E);
        default:
          return {};
      }
    }, W = C.useMemo(function() {
      return ae(O);
    }, [O]), Oe = sv(O, !r, function(ue) {
      if (ue === Bt) {
        var me = W[Bt];
        return me ? me(V()) : Vd;
      }
      if (Ee in W) {
        var xe;
        T(((xe = W[Ee]) === null || xe === void 0 ? void 0 : xe.call(W, V(), null)) || null);
      }
      return Ee === bn && O !== Rr && (te(V()), u > 0 && (clearTimeout(j.current), j.current = setTimeout(function() {
        q({
          deadline: !0
        });
      }, u))), Ee === Ld && Q(), av;
    }), Z = oe(Oe, 2), Ae = Z[0], Ee = Z[1], Be = Ud(Ee);
    ee.current = Be, Wd(function() {
      F(e);
      var ue = B.current;
      B.current = !0;
      var me;
      !ue && e && a && (me = Hi), ue && e && o && (me = Ki), (ue && !e && l || !ue && d && !e && l) && (me = Wi);
      var xe = ae(me);
      me && (r || xe[Bt]) ? (P(me), Ae()) : P(Rr);
    }, [e]), mt(function() {
      // Cancel appear
      (O === Hi && !a || // Cancel enter
      O === Ki && !o || // Cancel leave
      O === Wi && !l) && P(Rr);
    }, [a, o, l]), mt(function() {
      return function() {
        B.current = !1, clearTimeout(j.current);
      };
    }, []);
    var Xe = C.useRef(!1);
    mt(function() {
      $ && (Xe.current = !0), $ !== void 0 && O === Rr && ((Xe.current || $) && (M == null || M($)), Xe.current = !0);
    }, [$, O]);
    var je = z;
    return W[Bt] && Ee === yn && (je = Y({
      transition: "none"
    }, je)), [O, Ee, je, $ ?? e];
  }
  function lv(r) {
    var e = r;
    Se(r) === "object" && (e = r.transitionSupport);
    function t(i, o) {
      return !!(i.motionName && e && o !== !1);
    }
    var n = /* @__PURE__ */ C.forwardRef(function(i, o) {
      var s = i.visible, a = s === void 0 ? !0 : s, c = i.removeOnLeave, l = c === void 0 ? !0 : c, u = i.forceRender, d = i.children, f = i.motionName, h = i.leavedClassName, m = i.eventProps, g = C.useContext(zd), p = g.motion, v = t(i, p), y = ye(), x = ye();
      function E() {
        try {
          return y.current instanceof HTMLElement ? y.current : Jn(x.current);
        } catch {
          return null;
        }
      }
      var b = cv(v, a, E, i), _ = oe(b, 4), S = _[0], M = _[1], A = _[2], N = _[3], $ = C.useRef(N);
      N && ($.current = !0);
      var F = C.useCallback(function(z) {
        y.current = z, Ru(o, z);
      }, [o]), L, D = Y(Y({}, m), {}, {
        visible: a
      });
      if (!d)
        L = null;
      else if (S === Rr)
        N ? L = d(Y({}, D), F) : !l && $.current && h ? L = d(Y(Y({}, D), {}, {
          className: h
        }), F) : u || !l && !h ? L = d(Y(Y({}, D), {}, {
          style: {
            display: "none"
          }
        }), F) : L = null;
      else {
        var U;
        M === Bt ? U = "prepare" : Ud(M) ? U = "active" : M === yn && (U = "start");
        var P = Ol(f, "".concat(S, "-").concat(U));
        L = d(Y(Y({}, D), {}, {
          className: Re(Ol(f, S), I(I({}, P, P && U), f, typeof f == "string")),
          style: A
        }), F);
      }
      if (/* @__PURE__ */ C.isValidElement(L) && Fs(L)) {
        var R = L, k = R.ref;
        k || (L = /* @__PURE__ */ C.cloneElement(L, {
          ref: F
        }));
      }
      return /* @__PURE__ */ C.createElement(Zg, {
        ref: x
      }, L);
    });
    return n.displayName = "CSSMotion", n;
  }
  const Ao = lv(Kd);
  var Ss = "add", Es = "keep", Cs = "remove", ga = "removed";
  function uv(r) {
    var e;
    return r && Se(r) === "object" && "key" in r ? e = r : e = {
      key: r
    }, Y(Y({}, e), {}, {
      key: String(e.key)
    });
  }
  function ws() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return r.map(uv);
  }
  function dv() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = [], n = 0, i = e.length, o = ws(r), s = ws(e);
    o.forEach(function(l) {
      for (var u = !1, d = n; d < i; d += 1) {
        var f = s[d];
        if (f.key === l.key) {
          n < d && (t = t.concat(s.slice(n, d).map(function(h) {
            return Y(Y({}, h), {}, {
              status: Ss
            });
          })), n = d), t.push(Y(Y({}, f), {}, {
            status: Es
          })), n += 1, u = !0;
          break;
        }
      }
      u || t.push(Y(Y({}, l), {}, {
        status: Cs
      }));
    }), n < i && (t = t.concat(s.slice(n).map(function(l) {
      return Y(Y({}, l), {}, {
        status: Ss
      });
    })));
    var a = {};
    t.forEach(function(l) {
      var u = l.key;
      a[u] = (a[u] || 0) + 1;
    });
    var c = Object.keys(a).filter(function(l) {
      return a[l] > 1;
    });
    return c.forEach(function(l) {
      t = t.filter(function(u) {
        var d = u.key, f = u.status;
        return d !== l || f !== Cs;
      }), t.forEach(function(u) {
        u.key === l && (u.status = Es);
      });
    }), t;
  }
  var fv = ["component", "children", "onVisibleChanged", "onAllRemoved"], hv = ["status"], pv = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
  function mv(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ao, t = /* @__PURE__ */ function(n) {
      Gr(o, n);
      var i = Yr(o);
      function o() {
        var s;
        gt(this, o);
        for (var a = arguments.length, c = new Array(a), l = 0; l < a; l++)
          c[l] = arguments[l];
        return s = i.call.apply(i, [this].concat(c)), I(G(s), "state", {
          keyEntities: []
        }), I(G(s), "removeKey", function(u) {
          var d = s.state.keyEntities, f = d.map(function(h) {
            return h.key !== u ? h : Y(Y({}, h), {}, {
              status: ga
            });
          });
          return s.setState({
            keyEntities: f
          }), f.filter(function(h) {
            var m = h.status;
            return m !== ga;
          }).length;
        }), s;
      }
      return vt(o, [{
        key: "render",
        value: function() {
          var a = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, f = l.onVisibleChanged, h = l.onAllRemoved, m = Yt(l, fv), g = u || C.Fragment, p = {};
          return pv.forEach(function(v) {
            p[v] = m[v], delete m[v];
          }), delete m.keys, /* @__PURE__ */ C.createElement(g, m, c.map(function(v, y) {
            var x = v.status, E = Yt(v, hv), b = x === Ss || x === Es;
            return /* @__PURE__ */ C.createElement(e, ze({}, p, {
              key: E.key,
              visible: b,
              eventProps: E,
              onVisibleChanged: function(S) {
                if (f == null || f(S, {
                  key: E.key
                }), !S) {
                  var M = a.removeKey(E.key);
                  M === 0 && h && h();
                }
              }
            }), function(_, S) {
              return d(Y(Y({}, _), {}, {
                index: y
              }), S);
            });
          }));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function(a, c) {
          var l = a.keys, u = c.keyEntities, d = ws(l), f = dv(u, d);
          return {
            keyEntities: f.filter(function(h) {
              var m = u.find(function(g) {
                var p = g.key;
                return h.key === p;
              });
              return !(m && m.status === ga && h.status === Cs);
            })
          };
        }
      }]), o;
    }(C.Component);
    return I(t, "defaultProps", {
      component: "div"
    }), t;
  }
  mv(Kd);
  function gv(r) {
    const {
      children: e
    } = r, [, t] = Dr(), {
      motion: n
    } = t, i = C.useRef(!1);
    return i.current = i.current || n === !1, i.current ? /* @__PURE__ */ C.createElement(Xg, {
      motion: n
    }, e) : e;
  }
  const qd = /* @__PURE__ */ C.memo((r) => {
    let {
      dropdownMatchSelectWidth: e
    } = r;
    return Nn("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
  });
  process.env.NODE_ENV !== "production" && (qd.displayName = "PropWarning");
  const vv = process.env.NODE_ENV !== "production" ? qd : () => null;
  var yv = function(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
    return t;
  };
  let Ms = !1;
  process.env.NODE_ENV;
  const bv = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], Gd = "ant";
  let Yd;
  function xv() {
    return Yd || Gd;
  }
  function Sv(r) {
    return Object.keys(r).some((e) => e.endsWith("Color"));
  }
  const Ev = (r) => {
    const {
      prefixCls: e,
      iconPrefixCls: t,
      theme: n,
      holderRender: i
    } = r;
    e !== void 0 && (Yd = e), n && Sv(n) && (process.env.NODE_ENV !== "production" && Oo(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), _g(xv(), n));
  }, Cv = (r) => {
    const {
      children: e,
      csp: t,
      autoInsertSpaceInButton: n,
      alert: i,
      anchor: o,
      form: s,
      locale: a,
      componentSize: c,
      direction: l,
      space: u,
      virtual: d,
      dropdownMatchSelectWidth: f,
      popupMatchSelectWidth: h,
      popupOverflow: m,
      legacyLocale: g,
      parentContext: p,
      iconPrefixCls: v,
      theme: y,
      componentDisabled: x,
      segmented: E,
      statistic: b,
      spin: _,
      calendar: S,
      carousel: M,
      cascader: A,
      collapse: N,
      typography: $,
      checkbox: F,
      descriptions: L,
      divider: D,
      drawer: U,
      skeleton: P,
      steps: R,
      image: k,
      layout: z,
      list: T,
      mentions: O,
      modal: B,
      progress: j,
      result: V,
      slider: ee,
      breadcrumb: Q,
      menu: q,
      pagination: re,
      input: ie,
      textArea: te,
      empty: ae,
      badge: W,
      radio: Oe,
      rate: Z,
      switch: Ae,
      transfer: Ee,
      avatar: Be,
      message: Xe,
      tag: je,
      table: ue,
      card: me,
      tabs: xe,
      timeline: De,
      timePicker: ge,
      upload: Pe,
      notification: ke,
      tree: He,
      colorPicker: at,
      datePicker: At,
      rangePicker: $r,
      flex: zr,
      wave: Zr,
      dropdown: yt,
      warning: In,
      tour: $n,
      floatButtonGroup: Jr,
      variant: Qr,
      inputNumber: zn,
      treeSelect: Lr
    } = r, Qt = C.useCallback((Ne, Le) => {
      const {
        prefixCls: Qe
      } = r;
      if (Le)
        return Le;
      const ut = Qe || p.getPrefixCls("");
      return Ne ? `${ut}-${Ne}` : ut;
    }, [p.getPrefixCls, r.prefixCls]), rt = v || p.iconPrefixCls || Od, Pt = t || p.csp;
    kd(rt, Pt);
    const Nt = Gg(y, p.theme, {
      prefixCls: Qt("")
    });
    process.env.NODE_ENV !== "production" && (Ms = Ms || !!Nt);
    const er = {
      csp: Pt,
      autoInsertSpaceInButton: n,
      alert: i,
      anchor: o,
      locale: a || g,
      direction: l,
      space: u,
      virtual: d,
      popupMatchSelectWidth: h ?? f,
      popupOverflow: m,
      getPrefixCls: Qt,
      iconPrefixCls: rt,
      theme: Nt,
      segmented: E,
      statistic: b,
      spin: _,
      calendar: S,
      carousel: M,
      cascader: A,
      collapse: N,
      typography: $,
      checkbox: F,
      descriptions: L,
      divider: D,
      drawer: U,
      skeleton: P,
      steps: R,
      image: k,
      input: ie,
      textArea: te,
      layout: z,
      list: T,
      mentions: O,
      modal: B,
      progress: j,
      result: V,
      slider: ee,
      breadcrumb: Q,
      menu: q,
      pagination: re,
      empty: ae,
      badge: W,
      radio: Oe,
      rate: Z,
      switch: Ae,
      transfer: Ee,
      avatar: Be,
      message: Xe,
      tag: je,
      table: ue,
      card: me,
      tabs: xe,
      timeline: De,
      timePicker: ge,
      upload: Pe,
      notification: ke,
      tree: He,
      colorPicker: at,
      datePicker: At,
      rangePicker: $r,
      flex: zr,
      wave: Zr,
      dropdown: yt,
      warning: In,
      tour: $n,
      floatButtonGroup: Jr,
      variant: Qr,
      inputNumber: zn,
      treeSelect: Lr
    };
    process.env.NODE_ENV !== "production" && Nn("ConfigProvider")(!("autoInsertSpaceInButton" in r), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
    const Dt = Object.assign({}, p);
    Object.keys(er).forEach((Ne) => {
      er[Ne] !== void 0 && (Dt[Ne] = er[Ne]);
    }), bv.forEach((Ne) => {
      const Le = r[Ne];
      Le && (Dt[Ne] = Le);
    }), typeof n < "u" && (Dt.button = Object.assign({
      autoInsertSpace: n
    }, Dt.button));
    const _t = Ls(() => Dt, Dt, (Ne, Le) => {
      const Qe = Object.keys(Ne), ut = Object.keys(Le);
      return Qe.length !== ut.length || Qe.some((yr) => Ne[yr] !== Le[yr]);
    }), Ln = C.useMemo(() => ({
      prefixCls: rt,
      csp: Pt
    }), [rt, Pt]);
    let Ie = /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement(vv, {
      dropdownMatchSelectWidth: f
    }), e);
    const tr = C.useMemo(() => {
      var Ne, Le, Qe, ut;
      return Vm(((Ne = Ro.Form) === null || Ne === void 0 ? void 0 : Ne.defaultValidateMessages) || {}, ((Qe = (Le = _t.locale) === null || Le === void 0 ? void 0 : Le.Form) === null || Qe === void 0 ? void 0 : Qe.defaultValidateMessages) || {}, ((ut = _t.form) === null || ut === void 0 ? void 0 : ut.validateMessages) || {}, (s == null ? void 0 : s.validateMessages) || {});
    }, [_t, s == null ? void 0 : s.validateMessages]);
    Object.keys(tr).length > 0 && (Ie = /* @__PURE__ */ C.createElement(qm.Provider, {
      value: tr
    }, Ie)), a && (Ie = /* @__PURE__ */ C.createElement(Sd, {
      locale: a,
      _ANT_MARK__: xd
    }, Ie)), (rt || Pt) && (Ie = /* @__PURE__ */ C.createElement(Us.Provider, {
      value: Ln
    }, Ie)), c && (Ie = /* @__PURE__ */ C.createElement(Og, {
      size: c
    }, Ie)), Ie = /* @__PURE__ */ C.createElement(gv, null, Ie);
    const vr = C.useMemo(() => {
      const Ne = Nt || {}, {
        algorithm: Le,
        token: Qe,
        components: ut,
        cssVar: yr
      } = Ne, en = yv(Ne, ["algorithm", "token", "components", "cssVar"]), br = Le && (!Array.isArray(Le) || Le.length > 0) ? Ya(Le) : _d, w = {};
      Object.entries(ut || {}).forEach((X) => {
        let [le, be] = X;
        const he = Object.assign({}, be);
        "algorithm" in he && (he.algorithm === !0 ? he.theme = br : (Array.isArray(he.algorithm) || typeof he.algorithm == "function") && (he.theme = Ya(he.algorithm)), delete he.algorithm), w[le] = he;
      });
      const K = Object.assign(Object.assign({}, si), Qe);
      return Object.assign(Object.assign({}, en), {
        theme: br,
        token: K,
        components: w,
        override: Object.assign({
          override: K
        }, w),
        cssVar: yr
      });
    }, [Nt]);
    return y && (Ie = /* @__PURE__ */ C.createElement(Td.Provider, {
      value: vr
    }, Ie)), _t.warning && (Ie = /* @__PURE__ */ C.createElement(vd.Provider, {
      value: _t.warning
    }, Ie)), x !== void 0 && (Ie = /* @__PURE__ */ C.createElement(Tg, {
      disabled: x
    }, Ie)), /* @__PURE__ */ C.createElement(Xt.Provider, {
      value: _t
    }, Ie);
  }, Dn = (r) => {
    const e = C.useContext(Xt), t = C.useContext(bd);
    return /* @__PURE__ */ C.createElement(Cv, Object.assign({
      parentContext: e,
      legacyLocale: t
    }, r));
  };
  Dn.ConfigContext = Xt;
  Dn.SizeContext = _n;
  Dn.config = Ev;
  Dn.useConfig = Rg;
  Object.defineProperty(Dn, "SizeContext", {
    get: () => (process.env.NODE_ENV !== "production" && Oo(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), _n)
  });
  process.env.NODE_ENV !== "production" && (Dn.displayName = "ConfigProvider");
  function Xd(r) {
    var e;
    return r == null || (e = r.getRootNode) === null || e === void 0 ? void 0 : e.call(r);
  }
  function wv(r) {
    return Xd(r) instanceof ShadowRoot;
  }
  function Mv(r) {
    return wv(r) ? Xd(r) : null;
  }
  function _v(r) {
    return r.replace(/-(.)/g, function(e, t) {
      return t.toUpperCase();
    });
  }
  function Tv(r, e) {
    Ge(r, "[@ant-design/icons] ".concat(e));
  }
  function Rl(r) {
    return Se(r) === "object" && typeof r.name == "string" && typeof r.theme == "string" && (Se(r.icon) === "object" || typeof r.icon == "function");
  }
  function Al() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.keys(r).reduce(function(e, t) {
      var n = r[t];
      switch (t) {
        case "class":
          e.className = n, delete e.class;
          break;
        default:
          delete e[t], e[_v(t)] = n;
      }
      return e;
    }, {});
  }
  function _s(r, e, t) {
    return t ? /* @__PURE__ */ de.createElement(r.tag, Y(Y({
      key: e
    }, Al(r.attrs)), t), (r.children || []).map(function(n, i) {
      return _s(n, "".concat(e, "-").concat(r.tag, "-").concat(i));
    })) : /* @__PURE__ */ de.createElement(r.tag, Y({
      key: e
    }, Al(r.attrs)), (r.children || []).map(function(n, i) {
      return _s(n, "".concat(e, "-").concat(r.tag, "-").concat(i));
    }));
  }
  function Zd(r) {
    return ai(r)[0];
  }
  function Jd(r) {
    return r ? Array.isArray(r) ? r : [r] : [];
  }
  var Ov = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, Rv = function(e) {
    var t = qt(Us), n = t.csp, i = t.prefixCls, o = Ov;
    i && (o = o.replace(/anticon/g, i)), mt(function() {
      var s = e.current, a = Mv(s);
      Wr(o, "@ant-design-icons", {
        prepend: !0,
        csp: n,
        attachTo: a
      });
    }, []);
  }, Av = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ei = {
    primaryColor: "#333",
    secondaryColor: "#E6E6E6",
    calculated: !1
  };
  function Pv(r) {
    var e = r.primaryColor, t = r.secondaryColor;
    ei.primaryColor = e, ei.secondaryColor = t || Zd(e), ei.calculated = !!t;
  }
  function Nv() {
    return Y({}, ei);
  }
  var kn = function(e) {
    var t = e.icon, n = e.className, i = e.onClick, o = e.style, s = e.primaryColor, a = e.secondaryColor, c = Yt(e, Av), l = C.useRef(), u = ei;
    if (s && (u = {
      primaryColor: s,
      secondaryColor: a || Zd(s)
    }), Rv(l), Tv(Rl(t), "icon should be icon definiton, but got ".concat(t)), !Rl(t))
      return null;
    var d = t;
    return d && typeof d.icon == "function" && (d = Y(Y({}, d), {}, {
      icon: d.icon(u.primaryColor, u.secondaryColor)
    })), _s(d.icon, "svg-".concat(d.name), Y(Y({
      className: n,
      onClick: i,
      style: o,
      "data-icon": d.name,
      width: "1em",
      height: "1em",
      fill: "currentColor",
      "aria-hidden": "true"
    }, c), {}, {
      ref: l
    }));
  };
  kn.displayName = "IconReact";
  kn.getTwoToneColors = Nv;
  kn.setTwoToneColors = Pv;
  function Qd(r) {
    var e = Jd(r), t = oe(e, 2), n = t[0], i = t[1];
    return kn.setTwoToneColors({
      primaryColor: n,
      secondaryColor: i
    });
  }
  function Dv() {
    var r = kn.getTwoToneColors();
    return r.calculated ? [r.primaryColor, r.secondaryColor] : r.primaryColor;
  }
  var kv = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
  Qd(ho.primary);
  var Vt = /* @__PURE__ */ C.forwardRef(function(r, e) {
    var t = r.className, n = r.icon, i = r.spin, o = r.rotate, s = r.tabIndex, a = r.onClick, c = r.twoToneColor, l = Yt(r, kv), u = C.useContext(Us), d = u.prefixCls, f = d === void 0 ? "anticon" : d, h = u.rootClassName, m = Re(h, f, I(I({}, "".concat(f, "-").concat(n.name), !!n.name), "".concat(f, "-spin"), !!i || n.name === "loading"), t), g = s;
    g === void 0 && a && (g = -1);
    var p = o ? {
      msTransform: "rotate(".concat(o, "deg)"),
      transform: "rotate(".concat(o, "deg)")
    } : void 0, v = Jd(c), y = oe(v, 2), x = y[0], E = y[1];
    return /* @__PURE__ */ C.createElement("span", ze({
      role: "img",
      "aria-label": n.name
    }, l, {
      ref: e,
      tabIndex: g,
      onClick: a,
      className: m
    }), /* @__PURE__ */ C.createElement(kn, {
      icon: n,
      primaryColor: x,
      secondaryColor: E,
      style: p
    }));
  });
  Vt.displayName = "AntdIcon";
  Vt.getTwoToneColor = Dv;
  Vt.setTwoToneColor = Qd;
  var Iv = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, $v = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, zv = "".concat(Iv, " ").concat($v).split(/[\s\n]+/), Lv = "aria-", Fv = "data-";
  function Pl(r, e) {
    return r.indexOf(e) === 0;
  }
  function ef(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, t;
    e === !1 ? t = {
      aria: !0,
      data: !0,
      attr: !0
    } : e === !0 ? t = {
      aria: !0
    } : t = Y({}, e);
    var n = {};
    return Object.keys(r).forEach(function(i) {
      // Aria
      (t.aria && (i === "role" || Pl(i, Lv)) || // Data
      t.data && Pl(i, Fv) || // Attr
      t.attr && zv.includes(i)) && (n[i] = r[i]);
    }), n;
  }
  function Bv(r) {
    return r && /* @__PURE__ */ de.isValidElement(r) && r.type === de.Fragment;
  }
  const jv = (r, e, t) => /* @__PURE__ */ de.isValidElement(r) ? /* @__PURE__ */ de.cloneElement(r, typeof t == "function" ? t(r.props || {}) : t) : e;
  function mo(r, e) {
    return jv(r, r, e);
  }
  var se = {
    /**
     * MAC_ENTER
     */
    MAC_ENTER: 3,
    /**
     * BACKSPACE
     */
    BACKSPACE: 8,
    /**
     * TAB
     */
    TAB: 9,
    /**
     * NUMLOCK on FF/Safari Mac
     */
    NUM_CENTER: 12,
    // NUMLOCK on FF/Safari Mac
    /**
     * ENTER
     */
    ENTER: 13,
    /**
     * SHIFT
     */
    SHIFT: 16,
    /**
     * CTRL
     */
    CTRL: 17,
    /**
     * ALT
     */
    ALT: 18,
    /**
     * PAUSE
     */
    PAUSE: 19,
    /**
     * CAPS_LOCK
     */
    CAPS_LOCK: 20,
    /**
     * ESC
     */
    ESC: 27,
    /**
     * SPACE
     */
    SPACE: 32,
    /**
     * PAGE_UP
     */
    PAGE_UP: 33,
    // also NUM_NORTH_EAST
    /**
     * PAGE_DOWN
     */
    PAGE_DOWN: 34,
    // also NUM_SOUTH_EAST
    /**
     * END
     */
    END: 35,
    // also NUM_SOUTH_WEST
    /**
     * HOME
     */
    HOME: 36,
    // also NUM_NORTH_WEST
    /**
     * LEFT
     */
    LEFT: 37,
    // also NUM_WEST
    /**
     * UP
     */
    UP: 38,
    // also NUM_NORTH
    /**
     * RIGHT
     */
    RIGHT: 39,
    // also NUM_EAST
    /**
     * DOWN
     */
    DOWN: 40,
    // also NUM_SOUTH
    /**
     * PRINT_SCREEN
     */
    PRINT_SCREEN: 44,
    /**
     * INSERT
     */
    INSERT: 45,
    // also NUM_INSERT
    /**
     * DELETE
     */
    DELETE: 46,
    // also NUM_DELETE
    /**
     * ZERO
     */
    ZERO: 48,
    /**
     * ONE
     */
    ONE: 49,
    /**
     * TWO
     */
    TWO: 50,
    /**
     * THREE
     */
    THREE: 51,
    /**
     * FOUR
     */
    FOUR: 52,
    /**
     * FIVE
     */
    FIVE: 53,
    /**
     * SIX
     */
    SIX: 54,
    /**
     * SEVEN
     */
    SEVEN: 55,
    /**
     * EIGHT
     */
    EIGHT: 56,
    /**
     * NINE
     */
    NINE: 57,
    /**
     * QUESTION_MARK
     */
    QUESTION_MARK: 63,
    // needs localization
    /**
     * A
     */
    A: 65,
    /**
     * B
     */
    B: 66,
    /**
     * C
     */
    C: 67,
    /**
     * D
     */
    D: 68,
    /**
     * E
     */
    E: 69,
    /**
     * F
     */
    F: 70,
    /**
     * G
     */
    G: 71,
    /**
     * H
     */
    H: 72,
    /**
     * I
     */
    I: 73,
    /**
     * J
     */
    J: 74,
    /**
     * K
     */
    K: 75,
    /**
     * L
     */
    L: 76,
    /**
     * M
     */
    M: 77,
    /**
     * N
     */
    N: 78,
    /**
     * O
     */
    O: 79,
    /**
     * P
     */
    P: 80,
    /**
     * Q
     */
    Q: 81,
    /**
     * R
     */
    R: 82,
    /**
     * S
     */
    S: 83,
    /**
     * T
     */
    T: 84,
    /**
     * U
     */
    U: 85,
    /**
     * V
     */
    V: 86,
    /**
     * W
     */
    W: 87,
    /**
     * X
     */
    X: 88,
    /**
     * Y
     */
    Y: 89,
    /**
     * Z
     */
    Z: 90,
    /**
     * META
     */
    META: 91,
    // WIN_KEY_LEFT
    /**
     * WIN_KEY_RIGHT
     */
    WIN_KEY_RIGHT: 92,
    /**
     * CONTEXT_MENU
     */
    CONTEXT_MENU: 93,
    /**
     * NUM_ZERO
     */
    NUM_ZERO: 96,
    /**
     * NUM_ONE
     */
    NUM_ONE: 97,
    /**
     * NUM_TWO
     */
    NUM_TWO: 98,
    /**
     * NUM_THREE
     */
    NUM_THREE: 99,
    /**
     * NUM_FOUR
     */
    NUM_FOUR: 100,
    /**
     * NUM_FIVE
     */
    NUM_FIVE: 101,
    /**
     * NUM_SIX
     */
    NUM_SIX: 102,
    /**
     * NUM_SEVEN
     */
    NUM_SEVEN: 103,
    /**
     * NUM_EIGHT
     */
    NUM_EIGHT: 104,
    /**
     * NUM_NINE
     */
    NUM_NINE: 105,
    /**
     * NUM_MULTIPLY
     */
    NUM_MULTIPLY: 106,
    /**
     * NUM_PLUS
     */
    NUM_PLUS: 107,
    /**
     * NUM_MINUS
     */
    NUM_MINUS: 109,
    /**
     * NUM_PERIOD
     */
    NUM_PERIOD: 110,
    /**
     * NUM_DIVISION
     */
    NUM_DIVISION: 111,
    /**
     * F1
     */
    F1: 112,
    /**
     * F2
     */
    F2: 113,
    /**
     * F3
     */
    F3: 114,
    /**
     * F4
     */
    F4: 115,
    /**
     * F5
     */
    F5: 116,
    /**
     * F6
     */
    F6: 117,
    /**
     * F7
     */
    F7: 118,
    /**
     * F8
     */
    F8: 119,
    /**
     * F9
     */
    F9: 120,
    /**
     * F10
     */
    F10: 121,
    /**
     * F11
     */
    F11: 122,
    /**
     * F12
     */
    F12: 123,
    /**
     * NUMLOCK
     */
    NUMLOCK: 144,
    /**
     * SEMICOLON
     */
    SEMICOLON: 186,
    // needs localization
    /**
     * DASH
     */
    DASH: 189,
    // needs localization
    /**
     * EQUALS
     */
    EQUALS: 187,
    // needs localization
    /**
     * COMMA
     */
    COMMA: 188,
    // needs localization
    /**
     * PERIOD
     */
    PERIOD: 190,
    // needs localization
    /**
     * SLASH
     */
    SLASH: 191,
    // needs localization
    /**
     * APOSTROPHE
     */
    APOSTROPHE: 192,
    // needs localization
    /**
     * SINGLE_QUOTE
     */
    SINGLE_QUOTE: 222,
    // needs localization
    /**
     * OPEN_SQUARE_BRACKET
     */
    OPEN_SQUARE_BRACKET: 219,
    // needs localization
    /**
     * BACKSLASH
     */
    BACKSLASH: 220,
    // needs localization
    /**
     * CLOSE_SQUARE_BRACKET
     */
    CLOSE_SQUARE_BRACKET: 221,
    // needs localization
    /**
     * WIN_KEY
     */
    WIN_KEY: 224,
    /**
     * MAC_FF_META
     */
    MAC_FF_META: 224,
    // Firefox (Gecko) fires this for the meta key instead of 91
    /**
     * WIN_IME
     */
    WIN_IME: 229,
    // ======================== Function ========================
    /**
     * whether text and modified key is entered at the same time.
     */
    isTextModifyingKeyEvent: function(e) {
      var t = e.keyCode;
      if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
      t >= se.F1 && t <= se.F12)
        return !1;
      switch (t) {
        case se.ALT:
        case se.CAPS_LOCK:
        case se.CONTEXT_MENU:
        case se.CTRL:
        case se.DOWN:
        case se.END:
        case se.ESC:
        case se.HOME:
        case se.INSERT:
        case se.LEFT:
        case se.MAC_FF_META:
        case se.META:
        case se.NUMLOCK:
        case se.NUM_CENTER:
        case se.PAGE_DOWN:
        case se.PAGE_UP:
        case se.PAUSE:
        case se.PRINT_SCREEN:
        case se.RIGHT:
        case se.SHIFT:
        case se.UP:
        case se.WIN_KEY:
        case se.WIN_KEY_RIGHT:
          return !1;
        default:
          return !0;
      }
    },
    /**
     * whether character is entered.
     */
    isCharacterKey: function(e) {
      if (e >= se.ZERO && e <= se.NINE || e >= se.NUM_ZERO && e <= se.NUM_MULTIPLY || e >= se.A && e <= se.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && e === 0)
        return !0;
      switch (e) {
        case se.SPACE:
        case se.QUESTION_MARK:
        case se.NUM_PLUS:
        case se.NUM_MINUS:
        case se.NUM_PERIOD:
        case se.NUM_DIVISION:
        case se.SEMICOLON:
        case se.DASH:
        case se.EQUALS:
        case se.COMMA:
        case se.PERIOD:
        case se.SLASH:
        case se.APOSTROPHE:
        case se.SINGLE_QUOTE:
        case se.OPEN_SQUARE_BRACKET:
        case se.BACKSLASH:
        case se.CLOSE_SQUARE_BRACKET:
          return !0;
        default:
          return !1;
      }
    }
  }, Hv = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Kv = function(e, t) {
    return /* @__PURE__ */ C.createElement(Vt, ze({}, e, {
      ref: t,
      icon: Hv
    }));
  }, Js = /* @__PURE__ */ C.forwardRef(Kv);
  process.env.NODE_ENV !== "production" && (Js.displayName = "LoadingOutlined");
  function ci() {
    ci = function() {
      return e;
    };
    var r, e = {}, t = Object.prototype, n = t.hasOwnProperty, i = Object.defineProperty || function(P, R, k) {
      P[R] = k.value;
    }, o = typeof Symbol == "function" ? Symbol : {}, s = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", c = o.toStringTag || "@@toStringTag";
    function l(P, R, k) {
      return Object.defineProperty(P, R, {
        value: k,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), P[R];
    }
    try {
      l({}, "");
    } catch {
      l = function(k, z, T) {
        return k[z] = T;
      };
    }
    function u(P, R, k, z) {
      var T = R && R.prototype instanceof v ? R : v, O = Object.create(T.prototype), B = new D(z || []);
      return i(O, "_invoke", {
        value: N(P, k, B)
      }), O;
    }
    function d(P, R, k) {
      try {
        return {
          type: "normal",
          arg: P.call(R, k)
        };
      } catch (z) {
        return {
          type: "throw",
          arg: z
        };
      }
    }
    e.wrap = u;
    var f = "suspendedStart", h = "suspendedYield", m = "executing", g = "completed", p = {};
    function v() {
    }
    function y() {
    }
    function x() {
    }
    var E = {};
    l(E, s, function() {
      return this;
    });
    var b = Object.getPrototypeOf, _ = b && b(b(U([])));
    _ && _ !== t && n.call(_, s) && (E = _);
    var S = x.prototype = v.prototype = Object.create(E);
    function M(P) {
      ["next", "throw", "return"].forEach(function(R) {
        l(P, R, function(k) {
          return this._invoke(R, k);
        });
      });
    }
    function A(P, R) {
      function k(T, O, B, j) {
        var V = d(P[T], P, O);
        if (V.type !== "throw") {
          var ee = V.arg, Q = ee.value;
          return Q && Se(Q) == "object" && n.call(Q, "__await") ? R.resolve(Q.__await).then(function(q) {
            k("next", q, B, j);
          }, function(q) {
            k("throw", q, B, j);
          }) : R.resolve(Q).then(function(q) {
            ee.value = q, B(ee);
          }, function(q) {
            return k("throw", q, B, j);
          });
        }
        j(V.arg);
      }
      var z;
      i(this, "_invoke", {
        value: function(O, B) {
          function j() {
            return new R(function(V, ee) {
              k(O, B, V, ee);
            });
          }
          return z = z ? z.then(j, j) : j();
        }
      });
    }
    function N(P, R, k) {
      var z = f;
      return function(T, O) {
        if (z === m) throw Error("Generator is already running");
        if (z === g) {
          if (T === "throw") throw O;
          return {
            value: r,
            done: !0
          };
        }
        for (k.method = T, k.arg = O; ; ) {
          var B = k.delegate;
          if (B) {
            var j = $(B, k);
            if (j) {
              if (j === p) continue;
              return j;
            }
          }
          if (k.method === "next") k.sent = k._sent = k.arg;
          else if (k.method === "throw") {
            if (z === f) throw z = g, k.arg;
            k.dispatchException(k.arg);
          } else k.method === "return" && k.abrupt("return", k.arg);
          z = m;
          var V = d(P, R, k);
          if (V.type === "normal") {
            if (z = k.done ? g : h, V.arg === p) continue;
            return {
              value: V.arg,
              done: k.done
            };
          }
          V.type === "throw" && (z = g, k.method = "throw", k.arg = V.arg);
        }
      };
    }
    function $(P, R) {
      var k = R.method, z = P.iterator[k];
      if (z === r) return R.delegate = null, k === "throw" && P.iterator.return && (R.method = "return", R.arg = r, $(P, R), R.method === "throw") || k !== "return" && (R.method = "throw", R.arg = new TypeError("The iterator does not provide a '" + k + "' method")), p;
      var T = d(z, P.iterator, R.arg);
      if (T.type === "throw") return R.method = "throw", R.arg = T.arg, R.delegate = null, p;
      var O = T.arg;
      return O ? O.done ? (R[P.resultName] = O.value, R.next = P.nextLoc, R.method !== "return" && (R.method = "next", R.arg = r), R.delegate = null, p) : O : (R.method = "throw", R.arg = new TypeError("iterator result is not an object"), R.delegate = null, p);
    }
    function F(P) {
      var R = {
        tryLoc: P[0]
      };
      1 in P && (R.catchLoc = P[1]), 2 in P && (R.finallyLoc = P[2], R.afterLoc = P[3]), this.tryEntries.push(R);
    }
    function L(P) {
      var R = P.completion || {};
      R.type = "normal", delete R.arg, P.completion = R;
    }
    function D(P) {
      this.tryEntries = [{
        tryLoc: "root"
      }], P.forEach(F, this), this.reset(!0);
    }
    function U(P) {
      if (P || P === "") {
        var R = P[s];
        if (R) return R.call(P);
        if (typeof P.next == "function") return P;
        if (!isNaN(P.length)) {
          var k = -1, z = function T() {
            for (; ++k < P.length; ) if (n.call(P, k)) return T.value = P[k], T.done = !1, T;
            return T.value = r, T.done = !0, T;
          };
          return z.next = z;
        }
      }
      throw new TypeError(Se(P) + " is not iterable");
    }
    return y.prototype = x, i(S, "constructor", {
      value: x,
      configurable: !0
    }), i(x, "constructor", {
      value: y,
      configurable: !0
    }), y.displayName = l(x, c, "GeneratorFunction"), e.isGeneratorFunction = function(P) {
      var R = typeof P == "function" && P.constructor;
      return !!R && (R === y || (R.displayName || R.name) === "GeneratorFunction");
    }, e.mark = function(P) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(P, x) : (P.__proto__ = x, l(P, c, "GeneratorFunction")), P.prototype = Object.create(S), P;
    }, e.awrap = function(P) {
      return {
        __await: P
      };
    }, M(A.prototype), l(A.prototype, a, function() {
      return this;
    }), e.AsyncIterator = A, e.async = function(P, R, k, z, T) {
      T === void 0 && (T = Promise);
      var O = new A(u(P, R, k, z), T);
      return e.isGeneratorFunction(R) ? O : O.next().then(function(B) {
        return B.done ? B.value : O.next();
      });
    }, M(S), l(S, c, "Generator"), l(S, s, function() {
      return this;
    }), l(S, "toString", function() {
      return "[object Generator]";
    }), e.keys = function(P) {
      var R = Object(P), k = [];
      for (var z in R) k.push(z);
      return k.reverse(), function T() {
        for (; k.length; ) {
          var O = k.pop();
          if (O in R) return T.value = O, T.done = !1, T;
        }
        return T.done = !0, T;
      };
    }, e.values = U, D.prototype = {
      constructor: D,
      reset: function(R) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = r, this.done = !1, this.delegate = null, this.method = "next", this.arg = r, this.tryEntries.forEach(L), !R) for (var k in this) k.charAt(0) === "t" && n.call(this, k) && !isNaN(+k.slice(1)) && (this[k] = r);
      },
      stop: function() {
        this.done = !0;
        var R = this.tryEntries[0].completion;
        if (R.type === "throw") throw R.arg;
        return this.rval;
      },
      dispatchException: function(R) {
        if (this.done) throw R;
        var k = this;
        function z(ee, Q) {
          return B.type = "throw", B.arg = R, k.next = ee, Q && (k.method = "next", k.arg = r), !!Q;
        }
        for (var T = this.tryEntries.length - 1; T >= 0; --T) {
          var O = this.tryEntries[T], B = O.completion;
          if (O.tryLoc === "root") return z("end");
          if (O.tryLoc <= this.prev) {
            var j = n.call(O, "catchLoc"), V = n.call(O, "finallyLoc");
            if (j && V) {
              if (this.prev < O.catchLoc) return z(O.catchLoc, !0);
              if (this.prev < O.finallyLoc) return z(O.finallyLoc);
            } else if (j) {
              if (this.prev < O.catchLoc) return z(O.catchLoc, !0);
            } else {
              if (!V) throw Error("try statement without catch or finally");
              if (this.prev < O.finallyLoc) return z(O.finallyLoc);
            }
          }
        }
      },
      abrupt: function(R, k) {
        for (var z = this.tryEntries.length - 1; z >= 0; --z) {
          var T = this.tryEntries[z];
          if (T.tryLoc <= this.prev && n.call(T, "finallyLoc") && this.prev < T.finallyLoc) {
            var O = T;
            break;
          }
        }
        O && (R === "break" || R === "continue") && O.tryLoc <= k && k <= O.finallyLoc && (O = null);
        var B = O ? O.completion : {};
        return B.type = R, B.arg = k, O ? (this.method = "next", this.next = O.finallyLoc, p) : this.complete(B);
      },
      complete: function(R, k) {
        if (R.type === "throw") throw R.arg;
        return R.type === "break" || R.type === "continue" ? this.next = R.arg : R.type === "return" ? (this.rval = this.arg = R.arg, this.method = "return", this.next = "end") : R.type === "normal" && k && (this.next = k), p;
      },
      finish: function(R) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var z = this.tryEntries[k];
          if (z.finallyLoc === R) return this.complete(z.completion, z.afterLoc), L(z), p;
        }
      },
      catch: function(R) {
        for (var k = this.tryEntries.length - 1; k >= 0; --k) {
          var z = this.tryEntries[k];
          if (z.tryLoc === R) {
            var T = z.completion;
            if (T.type === "throw") {
              var O = T.arg;
              L(z);
            }
            return O;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function(R, k, z) {
        return this.delegate = {
          iterator: U(R),
          resultName: k,
          nextLoc: z
        }, this.method === "next" && (this.arg = r), p;
      }
    }, e;
  }
  function Nl(r, e, t, n, i, o, s) {
    try {
      var a = r[o](s), c = a.value;
    } catch (l) {
      return void t(l);
    }
    a.done ? e(c) : Promise.resolve(c).then(n, i);
  }
  function tf(r) {
    return function() {
      var e = this, t = arguments;
      return new Promise(function(n, i) {
        var o = r.apply(e, t);
        function s(c) {
          Nl(o, n, i, s, a, "next", c);
        }
        function a(c) {
          Nl(o, n, i, s, a, "throw", c);
        }
        s(void 0);
      });
    };
  }
  var hi = Y({}, Xf), Wv = hi.version, Vv = hi.render, Uv = hi.unmountComponentAtNode, Po;
  try {
    var qv = Number((Wv || "").split(".")[0]);
    qv >= 18 && (Po = hi.createRoot);
  } catch {
  }
  function Dl(r) {
    var e = hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    e && Se(e) === "object" && (e.usingClientEntryPoint = r);
  }
  var go = "__rc_react_root__";
  function Gv(r, e) {
    Dl(!0);
    var t = e[go] || Po(e);
    Dl(!1), t.render(r), e[go] = t;
  }
  function Yv(r, e) {
    Vv(r, e);
  }
  function Xv(r, e) {
    if (Po) {
      Gv(r, e);
      return;
    }
    Yv(r, e);
  }
  function Zv(r) {
    return Ts.apply(this, arguments);
  }
  function Ts() {
    return Ts = tf(/* @__PURE__ */ ci().mark(function r(e) {
      return ci().wrap(function(n) {
        for (; ; ) switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var i;
              (i = e[go]) === null || i === void 0 || i.unmount(), delete e[go];
            }));
          case 1:
          case "end":
            return n.stop();
        }
      }, r);
    })), Ts.apply(this, arguments);
  }
  function Jv(r) {
    Uv(r);
  }
  function Qv(r) {
    return Os.apply(this, arguments);
  }
  function Os() {
    return Os = tf(/* @__PURE__ */ ci().mark(function r(e) {
      return ci().wrap(function(n) {
        for (; ; ) switch (n.prev = n.next) {
          case 0:
            if (Po === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", Zv(e));
          case 2:
            Jv(e);
          case 3:
          case "end":
            return n.stop();
        }
      }, r);
    })), Os.apply(this, arguments);
  }
  const va = () => ({
    height: 0,
    opacity: 0
  }), kl = (r) => {
    const {
      scrollHeight: e
    } = r;
    return {
      height: e,
      opacity: 1
    };
  }, ey = (r) => ({
    height: r ? r.offsetHeight : 0
  }), ya = (r, e) => (e == null ? void 0 : e.deadline) === !0 || e.propertyName === "height", ty = function() {
    return {
      motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "ant"}-motion-collapse`,
      onAppearStart: va,
      onEnterStart: va,
      onAppearActive: kl,
      onEnterActive: kl,
      onLeaveStart: ey,
      onLeaveActive: va,
      onAppearEnd: ya,
      onEnterEnd: ya,
      onLeaveEnd: ya,
      motionDeadline: 500
    };
  }, ry = function(r) {
    if (!r)
      return !1;
    if (r instanceof Element) {
      if (r.offsetParent)
        return !0;
      if (r.getBBox) {
        var e = r.getBBox(), t = e.width, n = e.height;
        if (t || n)
          return !0;
      }
      if (r.getBoundingClientRect) {
        var i = r.getBoundingClientRect(), o = i.width, s = i.height;
        if (o || s)
          return !0;
      }
    }
    return !1;
  }, ny = (r) => {
    const {
      componentCls: e,
      colorPrimary: t
    } = r;
    return {
      [e]: {
        position: "absolute",
        background: "transparent",
        pointerEvents: "none",
        boxSizing: "border-box",
        color: `var(--wave-color, ${t})`,
        boxShadow: "0 0 0 0 currentcolor",
        opacity: 0.2,
        // =================== Motion ===================
        "&.wave-motion-appear": {
          transition: [`box-shadow 0.4s ${r.motionEaseOutCirc}`, `opacity 2s ${r.motionEaseOutCirc}`].join(","),
          "&-active": {
            boxShadow: "0 0 0 6px currentcolor",
            opacity: 0
          },
          "&.wave-quick": {
            transition: [`box-shadow ${r.motionDurationSlow} ${r.motionEaseInOut}`, `opacity ${r.motionDurationSlow} ${r.motionEaseInOut}`].join(",")
          }
        }
      }
    };
  }, iy = Ys("Wave", (r) => [ny(r)]), rf = `${Gd}-wave-target`;
  function oy(r) {
    const e = (r || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
    return e && e[1] && e[2] && e[3] ? !(e[1] === e[2] && e[2] === e[3]) : !0;
  }
  function ba(r) {
    return r && r !== "#fff" && r !== "#ffffff" && r !== "rgb(255, 255, 255)" && r !== "rgba(255, 255, 255, 1)" && oy(r) && !/rgba\((?:\d*, ){3}0\)/.test(r) && // any transparent rgba color
    r !== "transparent";
  }
  function ay(r) {
    const {
      borderTopColor: e,
      borderColor: t,
      backgroundColor: n
    } = getComputedStyle(r);
    return ba(e) ? e : ba(t) ? t : ba(n) ? n : null;
  }
  function xa(r) {
    return Number.isNaN(r) ? 0 : r;
  }
  const sy = (r) => {
    const {
      className: e,
      target: t,
      component: n
    } = r, i = C.useRef(null), [o, s] = C.useState(null), [a, c] = C.useState([]), [l, u] = C.useState(0), [d, f] = C.useState(0), [h, m] = C.useState(0), [g, p] = C.useState(0), [v, y] = C.useState(!1), x = {
      left: l,
      top: d,
      width: h,
      height: g,
      borderRadius: a.map((_) => `${_}px`).join(" ")
    };
    o && (x["--wave-color"] = o);
    function E() {
      const _ = getComputedStyle(t);
      s(ay(t));
      const S = _.position === "static", {
        borderLeftWidth: M,
        borderTopWidth: A
      } = _;
      u(S ? t.offsetLeft : xa(-parseFloat(M))), f(S ? t.offsetTop : xa(-parseFloat(A))), m(t.offsetWidth), p(t.offsetHeight);
      const {
        borderTopLeftRadius: N,
        borderTopRightRadius: $,
        borderBottomLeftRadius: F,
        borderBottomRightRadius: L
      } = _;
      c([N, $, L, F].map((D) => xa(parseFloat(D))));
    }
    if (C.useEffect(() => {
      if (t) {
        const _ = Je(() => {
          E(), y(!0);
        });
        let S;
        return typeof ResizeObserver < "u" && (S = new ResizeObserver(E), S.observe(t)), () => {
          Je.cancel(_), S == null || S.disconnect();
        };
      }
    }, []), !v)
      return null;
    const b = (n === "Checkbox" || n === "Radio") && (t == null ? void 0 : t.classList.contains(rf));
    return /* @__PURE__ */ C.createElement(Ao, {
      visible: !0,
      motionAppear: !0,
      motionName: "wave-motion",
      motionDeadline: 5e3,
      onAppearEnd: (_, S) => {
        var M;
        if (S.deadline || S.propertyName === "opacity") {
          const A = (M = i.current) === null || M === void 0 ? void 0 : M.parentElement;
          Qv(A).then(() => {
            A == null || A.remove();
          });
        }
        return !1;
      }
    }, (_, S) => {
      let {
        className: M
      } = _;
      return /* @__PURE__ */ C.createElement("div", {
        ref: xo(i, S),
        className: Re(e, M, {
          "wave-quick": b
        }),
        style: x
      });
    });
  }, cy = (r, e) => {
    var t;
    const {
      component: n
    } = e;
    if (n === "Checkbox" && !(!((t = r.querySelector("input")) === null || t === void 0) && t.checked))
      return;
    const i = document.createElement("div");
    i.style.position = "absolute", i.style.left = "0px", i.style.top = "0px", r == null || r.insertBefore(i, r == null ? void 0 : r.firstChild), Xv(/* @__PURE__ */ C.createElement(sy, Object.assign({}, e, {
      target: r
    })), i);
  }, ly = (r, e, t) => {
    const {
      wave: n
    } = C.useContext(Xt), [, i, o] = Dr(), s = Tn((l) => {
      const u = r.current;
      if (n != null && n.disabled || !u)
        return;
      const d = u.querySelector(`.${rf}`) || u, {
        showEffect: f
      } = n || {};
      (f || cy)(d, {
        className: e,
        token: i,
        component: t,
        event: l,
        hashId: o
      });
    }), a = C.useRef();
    return (l) => {
      Je.cancel(a.current), a.current = Je(() => {
        s(l);
      });
    };
  }, nf = (r) => {
    const {
      children: e,
      disabled: t,
      component: n
    } = r, {
      getPrefixCls: i
    } = qt(Xt), o = ye(null), s = i("wave"), [, a] = iy(s), c = ly(o, Re(s, a), n);
    if (de.useEffect(() => {
      const u = o.current;
      if (!u || u.nodeType !== 1 || t)
        return;
      const d = (f) => {
        !ry(f.target) || // No need wave
        !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") || u.className.includes("-leave") || c(f);
      };
      return u.addEventListener("click", d, !0), () => {
        u.removeEventListener("click", d, !0);
      };
    }, [t]), !/* @__PURE__ */ de.isValidElement(e))
      return e ?? null;
    const l = Fs(e) ? xo(e.ref, o) : o;
    return mo(e, {
      ref: l
    });
  };
  process.env.NODE_ENV !== "production" && (nf.displayName = "Wave");
  const uy = (r) => {
    const e = de.useContext(_n);
    return de.useMemo(() => r ? typeof r == "string" ? r ?? e : r instanceof Function ? r(e) : e : e, [r, e]);
  }, dy = /* @__PURE__ */ C.createContext(null), fy = (r, e) => {
    const t = C.useContext(dy), n = C.useMemo(() => {
      if (!t)
        return "";
      const {
        compactDirection: i,
        isFirstItem: o,
        isLastItem: s
      } = t, a = i === "vertical" ? "-vertical-" : "-";
      return Re(`${r}-compact${a}item`, {
        [`${r}-compact${a}first-item`]: o,
        [`${r}-compact${a}last-item`]: s,
        [`${r}-compact${a}item-rtl`]: e === "rtl"
      });
    }, [r, e, t]);
    return {
      compactSize: t == null ? void 0 : t.compactSize,
      compactDirection: t == null ? void 0 : t.compactDirection,
      compactItemClassnames: n
    };
  };
  var hy = function(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
    return t;
  };
  const of = /* @__PURE__ */ C.createContext(void 0), py = (r) => {
    const {
      getPrefixCls: e,
      direction: t
    } = C.useContext(Xt), {
      prefixCls: n,
      size: i,
      className: o
    } = r, s = hy(r, ["prefixCls", "size", "className"]), a = e("btn-group", n), [, , c] = Dr();
    let l = "";
    switch (i) {
      case "large":
        l = "lg";
        break;
      case "small":
        l = "sm";
        break;
    }
    if (process.env.NODE_ENV !== "production") {
      const d = Nn("Button.Group");
      process.env.NODE_ENV !== "production" && d(!i || ["large", "small", "middle"].includes(i), "usage", "Invalid prop `size`.");
    }
    const u = Re(a, {
      [`${a}-${l}`]: l,
      [`${a}-rtl`]: t === "rtl"
    }, o, c);
    return /* @__PURE__ */ C.createElement(of.Provider, {
      value: i
    }, /* @__PURE__ */ C.createElement("div", Object.assign({}, s, {
      className: u
    })));
  }, Il = /^[\u4e00-\u9fa5]{2}$/, Rs = Il.test.bind(Il);
  function $l(r) {
    return typeof r == "string";
  }
  function Ui(r) {
    return r === "text" || r === "link";
  }
  function my(r, e) {
    if (r == null)
      return;
    const t = e ? " " : "";
    return typeof r != "string" && typeof r != "number" && $l(r.type) && Rs(r.props.children) ? mo(r, {
      children: r.props.children.split("").join(t)
    }) : $l(r) ? Rs(r) ? /* @__PURE__ */ de.createElement("span", null, r.split("").join(t)) : /* @__PURE__ */ de.createElement("span", null, r) : Bv(r) ? /* @__PURE__ */ de.createElement("span", null, r) : r;
  }
  function gy(r, e) {
    let t = !1;
    const n = [];
    return de.Children.forEach(r, (i) => {
      const o = typeof i, s = o === "string" || o === "number";
      if (t && s) {
        const a = n.length - 1, c = n[a];
        n[a] = `${c}${i}`;
      } else
        n.push(i);
      t = s;
    }), de.Children.map(n, (i) => my(i, e));
  }
  const af = /* @__PURE__ */ mu((r, e) => {
    const {
      className: t,
      style: n,
      children: i,
      prefixCls: o
    } = r, s = Re(`${o}-icon`, t);
    return /* @__PURE__ */ de.createElement("span", {
      ref: e,
      className: s,
      style: n
    }, i);
  }), zl = /* @__PURE__ */ mu((r, e) => {
    const {
      prefixCls: t,
      className: n,
      style: i,
      iconClassName: o
    } = r, s = Re(`${t}-loading-icon`, n);
    return /* @__PURE__ */ de.createElement(af, {
      prefixCls: t,
      className: s,
      style: i,
      ref: e
    }, /* @__PURE__ */ de.createElement(Js, {
      className: o
    }));
  }), Sa = () => ({
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  }), Ea = (r) => ({
    width: r.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  }), vy = (r) => {
    const {
      prefixCls: e,
      loading: t,
      existIcon: n,
      className: i,
      style: o
    } = r, s = !!t;
    return n ? /* @__PURE__ */ de.createElement(zl, {
      prefixCls: e,
      className: i,
      style: o
    }) : /* @__PURE__ */ de.createElement(Ao, {
      visible: s,
      // We do not really use this motionName
      motionName: `${e}-loading-icon-motion`,
      motionLeave: s,
      removeOnLeave: !0,
      onAppearStart: Sa,
      onAppearActive: Ea,
      onEnterStart: Sa,
      onEnterActive: Ea,
      onLeaveStart: Ea,
      onLeaveActive: Sa
    }, (a, c) => {
      let {
        className: l,
        style: u
      } = a;
      return /* @__PURE__ */ de.createElement(zl, {
        prefixCls: e,
        className: i,
        style: Object.assign(Object.assign({}, o), u),
        ref: c,
        iconClassName: l
      });
    });
  }, Ll = (r, e) => ({
    // Border
    [`> span, > ${r}`]: {
      "&:not(:last-child)": {
        [`&, & > ${r}`]: {
          "&:not(:disabled)": {
            borderInlineEndColor: e
          }
        }
      },
      "&:not(:first-child)": {
        [`&, & > ${r}`]: {
          "&:not(:disabled)": {
            borderInlineStartColor: e
          }
        }
      }
    }
  }), yy = (r) => {
    const {
      componentCls: e,
      fontSize: t,
      lineWidth: n,
      groupBorderColor: i,
      colorErrorHover: o
    } = r;
    return {
      [`${e}-group`]: [
        {
          position: "relative",
          display: "inline-flex",
          // Border
          [`> span, > ${e}`]: {
            "&:not(:last-child)": {
              [`&, & > ${e}`]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0
              }
            },
            "&:not(:first-child)": {
              marginInlineStart: r.calc(n).mul(-1).equal(),
              [`&, & > ${e}`]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0
              }
            }
          },
          [e]: {
            position: "relative",
            zIndex: 1,
            "&:hover, &:focus, &:active": {
              zIndex: 2
            },
            "&[disabled]": {
              zIndex: 0
            }
          },
          [`${e}-icon-only`]: {
            fontSize: t
          }
        },
        // Border Color
        Ll(`${e}-primary`, i),
        Ll(`${e}-danger`, o)
      ]
    };
  }, sf = (r) => {
    const {
      paddingInline: e,
      onlyIconSize: t,
      paddingBlock: n
    } = r;
    return Ir(r, {
      buttonPaddingHorizontal: e,
      buttonPaddingVertical: n,
      buttonIconOnlyFontSize: t
    });
  }, cf = (r) => {
    var e, t, n, i, o, s;
    const a = (e = r.contentFontSize) !== null && e !== void 0 ? e : r.fontSize, c = (t = r.contentFontSizeSM) !== null && t !== void 0 ? t : r.fontSize, l = (n = r.contentFontSizeLG) !== null && n !== void 0 ? n : r.fontSizeLG, u = (i = r.contentLineHeight) !== null && i !== void 0 ? i : ro(a), d = (o = r.contentLineHeightSM) !== null && o !== void 0 ? o : ro(c), f = (s = r.contentLineHeightLG) !== null && s !== void 0 ? s : ro(l);
    return {
      fontWeight: 400,
      defaultShadow: `0 ${r.controlOutlineWidth}px 0 ${r.controlTmpOutline}`,
      primaryShadow: `0 ${r.controlOutlineWidth}px 0 ${r.controlOutline}`,
      dangerShadow: `0 ${r.controlOutlineWidth}px 0 ${r.colorErrorOutline}`,
      primaryColor: r.colorTextLightSolid,
      dangerColor: r.colorTextLightSolid,
      borderColorDisabled: r.colorBorder,
      defaultGhostColor: r.colorBgContainer,
      ghostBg: "transparent",
      defaultGhostBorderColor: r.colorBgContainer,
      paddingInline: r.paddingContentHorizontal - r.lineWidth,
      paddingInlineLG: r.paddingContentHorizontal - r.lineWidth,
      paddingInlineSM: 8 - r.lineWidth,
      onlyIconSize: r.fontSizeLG,
      onlyIconSizeSM: r.fontSizeLG - 2,
      onlyIconSizeLG: r.fontSizeLG + 2,
      groupBorderColor: r.colorPrimaryHover,
      linkHoverBg: "transparent",
      textHoverBg: r.colorBgTextHover,
      defaultColor: r.colorText,
      defaultBg: r.colorBgContainer,
      defaultBorderColor: r.colorBorder,
      defaultBorderColorDisabled: r.colorBorder,
      defaultHoverBg: r.colorBgContainer,
      defaultHoverColor: r.colorPrimaryHover,
      defaultHoverBorderColor: r.colorPrimaryHover,
      defaultActiveBg: r.colorBgContainer,
      defaultActiveColor: r.colorPrimaryActive,
      defaultActiveBorderColor: r.colorPrimaryActive,
      contentFontSize: a,
      contentFontSizeSM: c,
      contentFontSizeLG: l,
      contentLineHeight: u,
      contentLineHeightSM: d,
      contentLineHeightLG: f,
      paddingBlock: Math.max((r.controlHeight - a * u) / 2 - r.lineWidth, 0),
      paddingBlockSM: Math.max((r.controlHeightSM - c * d) / 2 - r.lineWidth, 0),
      paddingBlockLG: Math.max((r.controlHeightLG - l * f) / 2 - r.lineWidth, 0)
    };
  }, by = (r) => {
    const {
      componentCls: e,
      iconCls: t,
      fontWeight: n
    } = r;
    return {
      [e]: {
        outline: "none",
        position: "relative",
        display: "inline-flex",
        gap: r.marginXS,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: n,
        whiteSpace: "nowrap",
        textAlign: "center",
        backgroundImage: "none",
        background: "transparent",
        border: `${qe(r.lineWidth)} ${r.lineType} transparent`,
        cursor: "pointer",
        transition: `all ${r.motionDurationMid} ${r.motionEaseInOut}`,
        userSelect: "none",
        touchAction: "manipulation",
        color: r.colorText,
        "&:disabled > *": {
          pointerEvents: "none"
        },
        "> span": {
          display: "inline-block"
        },
        [`${e}-icon`]: {
          lineHeight: 1
        },
        "> a": {
          color: "currentColor"
        },
        "&:not(:disabled)": Object.assign({}, Fg(r)),
        [`&${e}-two-chinese-chars::first-letter`]: {
          letterSpacing: "0.34em"
        },
        [`&${e}-two-chinese-chars > *:not(${t})`]: {
          marginInlineEnd: "-0.34em",
          letterSpacing: "0.34em"
        },
        // iconPosition="end"
        "&-icon-end": {
          flexDirection: "row-reverse"
        }
      }
    };
  }, mr = (r, e, t) => ({
    [`&:not(:disabled):not(${r}-disabled)`]: {
      "&:hover": e,
      "&:active": t
    }
  }), xy = (r) => ({
    minWidth: r.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%"
  }), Sy = (r) => ({
    borderRadius: r.controlHeight,
    paddingInlineStart: r.calc(r.controlHeight).div(2).equal(),
    paddingInlineEnd: r.calc(r.controlHeight).div(2).equal()
  }), Ey = (r) => ({
    cursor: "not-allowed",
    borderColor: r.borderColorDisabled,
    color: r.colorTextDisabled,
    background: r.colorBgContainerDisabled,
    boxShadow: "none"
  }), li = (r, e, t, n, i, o, s, a) => ({
    [`&${r}-background-ghost`]: Object.assign(Object.assign({
      color: t || void 0,
      background: e,
      borderColor: n || void 0,
      boxShadow: "none"
    }, mr(r, Object.assign({
      background: e
    }, s), Object.assign({
      background: e
    }, a))), {
      "&:disabled": {
        cursor: "not-allowed",
        color: i || void 0,
        borderColor: o || void 0
      }
    })
  }), Qs = (r) => ({
    [`&:disabled, &${r.componentCls}-disabled`]: Object.assign({}, Ey(r))
  }), lf = (r) => Object.assign({}, Qs(r)), vo = (r) => ({
    [`&:disabled, &${r.componentCls}-disabled`]: {
      cursor: "not-allowed",
      color: r.colorTextDisabled
    }
  }), uf = (r) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, lf(r)), {
    background: r.defaultBg,
    borderColor: r.defaultBorderColor,
    color: r.defaultColor,
    boxShadow: r.defaultShadow
  }), mr(r.componentCls, {
    color: r.defaultHoverColor,
    borderColor: r.defaultHoverBorderColor,
    background: r.defaultHoverBg
  }, {
    color: r.defaultActiveColor,
    borderColor: r.defaultActiveBorderColor,
    background: r.defaultActiveBg
  })), li(r.componentCls, r.ghostBg, r.defaultGhostColor, r.defaultGhostBorderColor, r.colorTextDisabled, r.colorBorder)), {
    [`&${r.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      color: r.colorError,
      borderColor: r.colorError
    }, mr(r.componentCls, {
      color: r.colorErrorHover,
      borderColor: r.colorErrorBorderHover
    }, {
      color: r.colorErrorActive,
      borderColor: r.colorErrorActive
    })), li(r.componentCls, r.ghostBg, r.colorError, r.colorError, r.colorTextDisabled, r.colorBorder)), Qs(r))
  }), Cy = (r) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, lf(r)), {
    color: r.primaryColor,
    background: r.colorPrimary,
    boxShadow: r.primaryShadow
  }), mr(r.componentCls, {
    color: r.colorTextLightSolid,
    background: r.colorPrimaryHover
  }, {
    color: r.colorTextLightSolid,
    background: r.colorPrimaryActive
  })), li(r.componentCls, r.ghostBg, r.colorPrimary, r.colorPrimary, r.colorTextDisabled, r.colorBorder, {
    color: r.colorPrimaryHover,
    borderColor: r.colorPrimaryHover
  }, {
    color: r.colorPrimaryActive,
    borderColor: r.colorPrimaryActive
  })), {
    [`&${r.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
      background: r.colorError,
      boxShadow: r.dangerShadow,
      color: r.dangerColor
    }, mr(r.componentCls, {
      background: r.colorErrorHover
    }, {
      background: r.colorErrorActive
    })), li(r.componentCls, r.ghostBg, r.colorError, r.colorError, r.colorTextDisabled, r.colorBorder, {
      color: r.colorErrorHover,
      borderColor: r.colorErrorHover
    }, {
      color: r.colorErrorActive,
      borderColor: r.colorErrorActive
    })), Qs(r))
  }), wy = (r) => Object.assign(Object.assign({}, uf(r)), {
    borderStyle: "dashed"
  }), My = (r) => Object.assign(Object.assign(Object.assign({
    color: r.colorLink
  }, mr(r.componentCls, {
    color: r.colorLinkHover,
    background: r.linkHoverBg
  }, {
    color: r.colorLinkActive
  })), vo(r)), {
    [`&${r.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: r.colorError
    }, mr(r.componentCls, {
      color: r.colorErrorHover
    }, {
      color: r.colorErrorActive
    })), vo(r))
  }), _y = (r) => Object.assign(Object.assign(Object.assign({}, mr(r.componentCls, {
    color: r.colorText,
    background: r.textHoverBg
  }, {
    color: r.colorText,
    background: r.colorBgTextActive
  })), vo(r)), {
    [`&${r.componentCls}-dangerous`]: Object.assign(Object.assign({
      color: r.colorError
    }, vo(r)), mr(r.componentCls, {
      color: r.colorErrorHover,
      background: r.colorErrorBg
    }, {
      color: r.colorErrorHover,
      background: r.colorErrorBgActive
    }))
  }), Ty = (r) => {
    const {
      componentCls: e
    } = r;
    return {
      [`${e}-default`]: uf(r),
      [`${e}-primary`]: Cy(r),
      [`${e}-dashed`]: wy(r),
      [`${e}-link`]: My(r),
      [`${e}-text`]: _y(r),
      [`${e}-ghost`]: li(r.componentCls, r.ghostBg, r.colorBgContainer, r.colorBgContainer, r.colorTextDisabled, r.colorBorder)
    };
  }, ec = function(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const {
      componentCls: t,
      controlHeight: n,
      fontSize: i,
      lineHeight: o,
      borderRadius: s,
      buttonPaddingHorizontal: a,
      iconCls: c,
      buttonPaddingVertical: l
    } = r, u = `${t}-icon-only`;
    return [
      {
        [`${e}`]: {
          fontSize: i,
          lineHeight: o,
          height: n,
          padding: `${qe(l)} ${qe(a)}`,
          borderRadius: s,
          [`&${u}`]: {
            width: n,
            paddingInline: 0,
            // make `btn-icon-only` not too narrow
            [`&${t}-compact-item`]: {
              flex: "none"
            },
            [`&${t}-round`]: {
              width: "auto"
            },
            [c]: {
              fontSize: r.buttonIconOnlyFontSize
            }
          },
          // Loading
          [`&${t}-loading`]: {
            opacity: r.opacityLoading,
            cursor: "default"
          },
          [`${t}-loading-icon`]: {
            transition: `width ${r.motionDurationSlow} ${r.motionEaseInOut}, opacity ${r.motionDurationSlow} ${r.motionEaseInOut}`
          }
        }
      },
      // Shape - patch prefixCls again to override solid border radius style
      {
        [`${t}${t}-circle${e}`]: xy(r)
      },
      {
        [`${t}${t}-round${e}`]: Sy(r)
      }
    ];
  }, Oy = (r) => {
    const e = Ir(r, {
      fontSize: r.contentFontSize,
      lineHeight: r.contentLineHeight
    });
    return ec(e, r.componentCls);
  }, Ry = (r) => {
    const e = Ir(r, {
      controlHeight: r.controlHeightSM,
      fontSize: r.contentFontSizeSM,
      lineHeight: r.contentLineHeightSM,
      padding: r.paddingXS,
      buttonPaddingHorizontal: r.paddingInlineSM,
      buttonPaddingVertical: r.paddingBlockSM,
      borderRadius: r.borderRadiusSM,
      buttonIconOnlyFontSize: r.onlyIconSizeSM
    });
    return ec(e, `${r.componentCls}-sm`);
  }, Ay = (r) => {
    const e = Ir(r, {
      controlHeight: r.controlHeightLG,
      fontSize: r.contentFontSizeLG,
      lineHeight: r.contentLineHeightLG,
      buttonPaddingHorizontal: r.paddingInlineLG,
      buttonPaddingVertical: r.paddingBlockLG,
      borderRadius: r.borderRadiusLG,
      buttonIconOnlyFontSize: r.onlyIconSizeLG
    });
    return ec(e, `${r.componentCls}-lg`);
  }, Py = (r) => {
    const {
      componentCls: e
    } = r;
    return {
      [e]: {
        [`&${e}-block`]: {
          width: "100%"
        }
      }
    };
  }, Ny = Xs("Button", (r) => {
    const e = sf(r);
    return [
      // Shared
      by(e),
      // Size
      Oy(e),
      Ry(e),
      Ay(e),
      // Block
      Py(e),
      // Group (type, ghost, danger, loading)
      Ty(e),
      // Button Group
      yy(e)
    ];
  }, cf, {
    unitless: {
      fontWeight: !0,
      contentLineHeight: !0,
      contentLineHeightSM: !0,
      contentLineHeightLG: !0
    }
  });
  function Dy(r, e, t) {
    const {
      focusElCls: n,
      focus: i,
      borderElCls: o
    } = t, s = o ? "> *" : "", a = ["hover", i ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${s}`).join(",");
    return {
      [`&-item:not(${e}-last-item)`]: {
        marginInlineEnd: r.calc(r.lineWidth).mul(-1).equal()
      },
      "&-item": Object.assign(Object.assign({
        [a]: {
          zIndex: 2
        }
      }, n ? {
        [`&${n}`]: {
          zIndex: 2
        }
      } : {}), {
        [`&[disabled] ${s}`]: {
          zIndex: 0
        }
      })
    };
  }
  function ky(r, e, t) {
    const {
      borderElCls: n
    } = t, i = n ? `> ${n}` : "";
    return {
      [`&-item:not(${e}-first-item):not(${e}-last-item) ${i}`]: {
        borderRadius: 0
      },
      [`&-item:not(${e}-last-item)${e}-first-item`]: {
        [`& ${i}, &${r}-sm ${i}, &${r}-lg ${i}`]: {
          borderStartEndRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`&-item:not(${e}-first-item)${e}-last-item`]: {
        [`& ${i}, &${r}-sm ${i}, &${r}-lg ${i}`]: {
          borderStartStartRadius: 0,
          borderEndStartRadius: 0
        }
      }
    };
  }
  function Iy(r) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      focus: !0
    };
    const {
      componentCls: t
    } = r, n = `${t}-compact`;
    return {
      [n]: Object.assign(Object.assign({}, Dy(r, n, e)), ky(t, n, e))
    };
  }
  function $y(r, e) {
    return {
      // border collapse
      [`&-item:not(${e}-last-item)`]: {
        marginBottom: r.calc(r.lineWidth).mul(-1).equal()
      },
      "&-item": {
        "&:hover,&:focus,&:active": {
          zIndex: 2
        },
        "&[disabled]": {
          zIndex: 0
        }
      }
    };
  }
  function zy(r, e) {
    return {
      [`&-item:not(${e}-first-item):not(${e}-last-item)`]: {
        borderRadius: 0
      },
      [`&-item${e}-first-item:not(${e}-last-item)`]: {
        [`&, &${r}-sm, &${r}-lg`]: {
          borderEndEndRadius: 0,
          borderEndStartRadius: 0
        }
      },
      [`&-item${e}-last-item:not(${e}-first-item)`]: {
        [`&, &${r}-sm, &${r}-lg`]: {
          borderStartStartRadius: 0,
          borderStartEndRadius: 0
        }
      }
    };
  }
  function Ly(r) {
    const e = `${r.componentCls}-compact-vertical`;
    return {
      [e]: Object.assign(Object.assign({}, $y(r, e)), zy(r.componentCls, e))
    };
  }
  const Fy = (r) => {
    const {
      componentCls: e,
      calc: t
    } = r;
    return {
      [e]: {
        // Special styles for Primary Button
        [`&-compact-item${e}-primary`]: {
          [`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: t(r.lineWidth).mul(-1).equal(),
              insetInlineStart: t(r.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: r.lineWidth,
              height: `calc(100% + ${qe(r.lineWidth)} * 2)`,
              backgroundColor: r.colorPrimaryHover,
              content: '""'
            }
          }
        },
        // Special styles for Primary Button
        "&-compact-vertical-item": {
          [`&${e}-primary`]: {
            [`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]: {
              position: "relative",
              "&:before": {
                position: "absolute",
                top: t(r.lineWidth).mul(-1).equal(),
                insetInlineStart: t(r.lineWidth).mul(-1).equal(),
                display: "inline-block",
                width: `calc(100% + ${qe(r.lineWidth)} * 2)`,
                height: r.lineWidth,
                backgroundColor: r.colorPrimaryHover,
                content: '""'
              }
            }
          }
        }
      }
    };
  }, By = Kg(["Button", "compact"], (r) => {
    const e = sf(r);
    return [
      // Space Compact
      Iy(e),
      Ly(e),
      Fy(e)
    ];
  }, cf);
  var jy = function(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
    return t;
  };
  function Hy(r) {
    if (typeof r == "object" && r) {
      let e = r == null ? void 0 : r.delay;
      return e = !Number.isNaN(e) && typeof e == "number" ? e : 0, {
        loading: e <= 0,
        delay: e
      };
    }
    return {
      loading: !!r,
      delay: 0
    };
  }
  const Ky = /* @__PURE__ */ de.forwardRef((r, e) => {
    var t, n, i;
    const {
      loading: o = !1,
      prefixCls: s,
      type: a,
      danger: c = !1,
      shape: l = "default",
      size: u,
      styles: d,
      disabled: f,
      className: h,
      rootClassName: m,
      children: g,
      icon: p,
      iconPosition: v = "start",
      ghost: y = !1,
      block: x = !1,
      // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
      htmlType: E = "button",
      classNames: b,
      style: _ = {},
      autoInsertSpace: S
    } = r, M = jy(r, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace"]), A = a || "default", {
      getPrefixCls: N,
      direction: $,
      button: F
    } = qt(Xt), L = (t = S ?? (F == null ? void 0 : F.autoInsertSpace)) !== null && t !== void 0 ? t : !0, D = N("btn", s), [U, P, R] = Ny(D), k = qt(po), z = f ?? k, T = qt(of), O = qf(() => Hy(o), [o]), [B, j] = lt(O.loading), [V, ee] = lt(!1), q = xo(e, /* @__PURE__ */ Yf()), re = Gf.count(g) === 1 && !p && !Ui(A);
    mt(() => {
      let ge = null;
      O.delay > 0 ? ge = setTimeout(() => {
        ge = null, j(!0);
      }, O.delay) : j(O.loading);
      function Pe() {
        ge && (clearTimeout(ge), ge = null);
      }
      return Pe;
    }, [O]), mt(() => {
      if (!q || !q.current || !L)
        return;
      const ge = q.current.textContent;
      re && Rs(ge) ? V || ee(!0) : V && ee(!1);
    }, [q]);
    const ie = (ge) => {
      const {
        onClick: Pe
      } = r;
      if (B || z) {
        ge.preventDefault();
        return;
      }
      Pe == null || Pe(ge);
    };
    if (process.env.NODE_ENV !== "production") {
      const ge = Nn("Button");
      process.env.NODE_ENV !== "production" && ge(!(typeof p == "string" && p.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${p}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ge(!(y && Ui(A)), "usage", "`link` or `text` button can't be a `ghost` button.");
    }
    const {
      compactSize: te,
      compactItemClassnames: ae
    } = fy(D, $), W = {
      large: "lg",
      small: "sm",
      middle: void 0
    }, Oe = uy((ge) => {
      var Pe, ke;
      return (ke = (Pe = u ?? te) !== null && Pe !== void 0 ? Pe : T) !== null && ke !== void 0 ? ke : ge;
    }), Z = Oe && W[Oe] || "", Ae = B ? "loading" : p, Ee = Fu(M, ["navigate"]), Be = Re(D, P, R, {
      [`${D}-${l}`]: l !== "default" && l,
      [`${D}-${A}`]: A,
      [`${D}-${Z}`]: Z,
      [`${D}-icon-only`]: !g && g !== 0 && !!Ae,
      [`${D}-background-ghost`]: y && !Ui(A),
      [`${D}-loading`]: B,
      [`${D}-two-chinese-chars`]: V && L && !B,
      [`${D}-block`]: x,
      [`${D}-dangerous`]: c,
      [`${D}-rtl`]: $ === "rtl",
      [`${D}-icon-end`]: v === "end"
    }, ae, h, m, F == null ? void 0 : F.className), Xe = Object.assign(Object.assign({}, F == null ? void 0 : F.style), _), je = Re(b == null ? void 0 : b.icon, (n = F == null ? void 0 : F.classNames) === null || n === void 0 ? void 0 : n.icon), ue = Object.assign(Object.assign({}, (d == null ? void 0 : d.icon) || {}), ((i = F == null ? void 0 : F.styles) === null || i === void 0 ? void 0 : i.icon) || {}), me = p && !B ? /* @__PURE__ */ de.createElement(af, {
      prefixCls: D,
      className: je,
      style: ue
    }, p) : /* @__PURE__ */ de.createElement(vy, {
      existIcon: !!p,
      prefixCls: D,
      loading: B
    }), xe = g || g === 0 ? gy(g, re && L) : null;
    if (Ee.href !== void 0)
      return U(/* @__PURE__ */ de.createElement("a", Object.assign({}, Ee, {
        className: Re(Be, {
          [`${D}-disabled`]: z
        }),
        href: z ? void 0 : Ee.href,
        style: Xe,
        onClick: ie,
        ref: q,
        tabIndex: z ? -1 : 0
      }), me, xe));
    let De = /* @__PURE__ */ de.createElement("button", Object.assign({}, M, {
      type: E,
      className: Be,
      style: Xe,
      onClick: ie,
      disabled: z,
      ref: q
    }), me, xe, !!ae && /* @__PURE__ */ de.createElement(By, {
      key: "compact",
      prefixCls: D
    }));
    return Ui(A) || (De = /* @__PURE__ */ de.createElement(nf, {
      component: "Button",
      disabled: B
    }, De)), U(De);
  }), No = Ky;
  No.Group = py;
  No.__ANT_BUTTON = !0;
  process.env.NODE_ENV !== "production" && (No.displayName = "Button");
  const Wy = (r) => ({
    [r.componentCls]: {
      // For common/openAnimation
      [`${r.antCls}-motion-collapse-legacy`]: {
        overflow: "hidden",
        "&-active": {
          transition: `height ${r.motionDurationMid} ${r.motionEaseInOut},
        opacity ${r.motionDurationMid} ${r.motionEaseInOut} !important`
        }
      },
      [`${r.antCls}-motion-collapse`]: {
        overflow: "hidden",
        transition: `height ${r.motionDurationMid} ${r.motionEaseInOut},
        opacity ${r.motionDurationMid} ${r.motionEaseInOut} !important`
      }
    }
  });
  var df = /* @__PURE__ */ C.forwardRef(function(r, e) {
    var t = r.height, n = r.offsetY, i = r.offsetX, o = r.children, s = r.prefixCls, a = r.onInnerResize, c = r.innerProps, l = r.rtl, u = r.extra, d = {}, f = {
      display: "flex",
      flexDirection: "column"
    };
    return n !== void 0 && (d = {
      height: t,
      position: "relative",
      overflow: "hidden"
    }, f = Y(Y({}, f), {}, I(I(I(I(I({
      transform: "translateY(".concat(n, "px)")
    }, l ? "marginRight" : "marginLeft", -i), "position", "absolute"), "left", 0), "right", 0), "top", 0))), /* @__PURE__ */ C.createElement("div", {
      style: d
    }, /* @__PURE__ */ C.createElement(Eo, {
      onResize: function(m) {
        var g = m.offsetHeight;
        g && a && a();
      }
    }, /* @__PURE__ */ C.createElement("div", ze({
      style: f,
      className: Re(I({}, "".concat(s, "-holder-inner"), s)),
      ref: e
    }, c), o, u)));
  });
  df.displayName = "Filler";
  function Vy(r) {
    var e = r.children, t = r.setRef, n = C.useCallback(function(i) {
      t(i);
    }, []);
    return /* @__PURE__ */ C.cloneElement(e, {
      ref: n
    });
  }
  function Uy(r, e, t, n, i, o, s, a) {
    var c = a.getKey;
    return r.slice(e, t + 1).map(function(l, u) {
      var d = e + u, f = s(l, d, {
        style: {
          width: n
        },
        offsetX: i
      }), h = c(l);
      return /* @__PURE__ */ C.createElement(Vy, {
        key: h,
        setRef: function(g) {
          return o(l, g);
        }
      }, f);
    });
  }
  function qy(r, e, t) {
    var n = r.length, i = e.length, o, s;
    if (n === 0 && i === 0)
      return null;
    n < i ? (o = r, s = e) : (o = e, s = r);
    var a = {
      __EMPTY_ITEM__: !0
    };
    function c(m) {
      return m !== void 0 ? t(m) : a;
    }
    for (var l = null, u = Math.abs(n - i) !== 1, d = 0; d < s.length; d += 1) {
      var f = c(o[d]), h = c(s[d]);
      if (f !== h) {
        l = d, u = u || f !== c(s[d + 1]);
        break;
      }
    }
    return l === null ? null : {
      index: l,
      multiple: u
    };
  }
  function Gy(r, e, t) {
    var n = C.useState(r), i = oe(n, 2), o = i[0], s = i[1], a = C.useState(null), c = oe(a, 2), l = c[0], u = c[1];
    return C.useEffect(function() {
      var d = qy(o || [], r || [], e);
      (d == null ? void 0 : d.index) !== void 0 && u(r[d.index]), s(r);
    }, [r]), [l];
  }
  var Fl = (typeof navigator > "u" ? "undefined" : Se(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
  const ff = function(r, e, t, n) {
    var i = ye(!1), o = ye(null);
    function s() {
      clearTimeout(o.current), i.current = !0, o.current = setTimeout(function() {
        i.current = !1;
      }, 50);
    }
    var a = ye({
      top: r,
      bottom: e,
      left: t,
      right: n
    });
    return a.current.top = r, a.current.bottom = e, a.current.left = t, a.current.right = n, function(c, l) {
      var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, d = c ? (
        // Pass origin wheel when on the left
        l < 0 && a.current.left || // Pass origin wheel when on the right
        l > 0 && a.current.right
      ) : l < 0 && a.current.top || // Pass origin wheel when on the bottom
      l > 0 && a.current.bottom;
      return u && d ? (clearTimeout(o.current), i.current = !1) : (!d || i.current) && s(), !i.current && d;
    };
  };
  function Yy(r, e, t, n, i, o, s) {
    var a = ye(0), c = ye(null), l = ye(null), u = ye(!1), d = ff(e, t, n, i);
    function f(y, x) {
      Je.cancel(c.current), a.current += x, l.current = x, !d(!1, x) && (Fl || y.preventDefault(), c.current = Je(function() {
        var E = u.current ? 10 : 1;
        s(a.current * E), a.current = 0;
      }));
    }
    function h(y, x) {
      s(x, !0), Fl || y.preventDefault();
    }
    var m = ye(null), g = ye(null);
    function p(y) {
      if (r) {
        Je.cancel(g.current), g.current = Je(function() {
          m.current = null;
        }, 2);
        var x = y.deltaX, E = y.deltaY, b = y.shiftKey, _ = x, S = E;
        (m.current === "sx" || !m.current && b && E && !x) && (_ = E, S = 0, m.current = "sx");
        var M = Math.abs(_), A = Math.abs(S);
        m.current === null && (m.current = o && M > A ? "x" : "y"), m.current === "y" ? f(y, S) : h(y, _);
      }
    }
    function v(y) {
      r && (u.current = y.detail === l.current);
    }
    return [p, v];
  }
  function Xy(r, e, t, n) {
    var i = C.useMemo(function() {
      return [/* @__PURE__ */ new Map(), []];
    }, [r, t.id, n]), o = oe(i, 2), s = o[0], a = o[1], c = function(u) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u, f = s.get(u), h = s.get(d);
      if (f === void 0 || h === void 0)
        for (var m = r.length, g = a.length; g < m; g += 1) {
          var p, v = r[g], y = e(v);
          s.set(y, g);
          var x = (p = t.get(y)) !== null && p !== void 0 ? p : n;
          if (a[g] = (a[g - 1] || 0) + x, y === u && (f = g), y === d && (h = g), f !== void 0 && h !== void 0)
            break;
        }
      return {
        top: a[f - 1] || 0,
        bottom: a[h]
      };
    };
    return c;
  }
  var Zy = /* @__PURE__ */ function() {
    function r() {
      gt(this, r), I(this, "maps", void 0), I(this, "id", 0), this.maps = /* @__PURE__ */ Object.create(null);
    }
    return vt(r, [{
      key: "set",
      value: function(t, n) {
        this.maps[t] = n, this.id += 1;
      }
    }, {
      key: "get",
      value: function(t) {
        return this.maps[t];
      }
    }]), r;
  }();
  function Jy(r, e, t) {
    var n = C.useState(0), i = oe(n, 2), o = i[0], s = i[1], a = ye(/* @__PURE__ */ new Map()), c = ye(new Zy()), l = ye();
    function u() {
      Je.cancel(l.current);
    }
    function d() {
      var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      u();
      var m = function() {
        a.current.forEach(function(p, v) {
          if (p && p.offsetParent) {
            var y = Jn(p), x = y.offsetHeight;
            c.current.get(v) !== x && c.current.set(v, y.offsetHeight);
          }
        }), s(function(p) {
          return p + 1;
        });
      };
      h ? m() : l.current = Je(m);
    }
    function f(h, m) {
      var g = r(h);
      a.current.get(g), m ? (a.current.set(g, m), d()) : a.current.delete(g);
    }
    return mt(function() {
      return u;
    }, []), [f, d, c.current, o];
  }
  var Bl = 14 / 15;
  function Qy(r, e, t) {
    var n = ye(!1), i = ye(0), o = ye(0), s = ye(null), a = ye(null), c, l = function(h) {
      if (n.current) {
        var m = Math.ceil(h.touches[0].pageX), g = Math.ceil(h.touches[0].pageY), p = i.current - m, v = o.current - g, y = Math.abs(p) > Math.abs(v);
        y ? i.current = m : o.current = g, t(y, y ? p : v) && h.preventDefault(), clearInterval(a.current), a.current = setInterval(function() {
          y ? p *= Bl : v *= Bl;
          var x = Math.floor(y ? p : v);
          (!t(y, x, !0) || Math.abs(x) <= 0.1) && clearInterval(a.current);
        }, 16);
      }
    }, u = function() {
      n.current = !1, c();
    }, d = function(h) {
      c(), h.touches.length === 1 && !n.current && (n.current = !0, i.current = Math.ceil(h.touches[0].pageX), o.current = Math.ceil(h.touches[0].pageY), s.current = h.target, s.current.addEventListener("touchmove", l, {
        passive: !1
      }), s.current.addEventListener("touchend", u, {
        passive: !0
      }));
    };
    c = function() {
      s.current && (s.current.removeEventListener("touchmove", l), s.current.removeEventListener("touchend", u));
    }, Gt(function() {
      return r && e.current.addEventListener("touchstart", d, {
        passive: !0
      }), function() {
        var f;
        (f = e.current) === null || f === void 0 || f.removeEventListener("touchstart", d), c(), clearInterval(a.current);
      };
    }, [r]);
  }
  var jl = 10;
  function e0(r, e, t, n, i, o, s, a) {
    var c = C.useRef(), l = C.useState(null), u = oe(l, 2), d = u[0], f = u[1];
    return Gt(function() {
      if (d && d.times < jl) {
        if (!r.current) {
          f(function(z) {
            return Y({}, z);
          });
          return;
        }
        o();
        var h = d.targetAlign, m = d.originAlign, g = d.index, p = d.offset, v = r.current.clientHeight, y = !1, x = h, E = null;
        if (v) {
          for (var b = h || m, _ = 0, S = 0, M = 0, A = Math.min(e.length - 1, g), N = 0; N <= A; N += 1) {
            var $ = i(e[N]);
            S = _;
            var F = t.get($);
            M = S + (F === void 0 ? n : F), _ = M;
          }
          for (var L = b === "top" ? p : v - p, D = A; D >= 0; D -= 1) {
            var U = i(e[D]), P = t.get(U);
            if (P === void 0) {
              y = !0;
              break;
            }
            if (L -= P, L <= 0)
              break;
          }
          switch (b) {
            case "top":
              E = S - p;
              break;
            case "bottom":
              E = M - v + p;
              break;
            default: {
              var R = r.current.scrollTop, k = R + v;
              S < R ? x = "top" : M > k && (x = "bottom");
            }
          }
          E !== null && s(E), E !== d.lastTop && (y = !0);
        }
        y && f(Y(Y({}, d), {}, {
          times: d.times + 1,
          targetAlign: x,
          lastTop: E
        }));
      } else process.env.NODE_ENV !== "production" && (d == null ? void 0 : d.times) === jl && Ge(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
    }, [d, r.current]), function(h) {
      if (h == null) {
        a();
        return;
      }
      if (Je.cancel(c.current), typeof h == "number")
        s(h);
      else if (h && Se(h) === "object") {
        var m, g = h.align;
        "index" in h ? m = h.index : m = e.findIndex(function(y) {
          return i(y) === h.key;
        });
        var p = h.offset, v = p === void 0 ? 0 : p;
        f({
          times: 0,
          index: m,
          offset: v,
          originAlign: g
        });
      }
    };
  }
  function Hl(r, e) {
    var t = "touches" in r ? r.touches[0] : r;
    return t[e ? "pageX" : "pageY"];
  }
  var As = /* @__PURE__ */ C.forwardRef(function(r, e) {
    var t = r.prefixCls, n = r.rtl, i = r.scrollOffset, o = r.scrollRange, s = r.onStartMove, a = r.onStopMove, c = r.onScroll, l = r.horizontal, u = r.spinSize, d = r.containerSize, f = r.style, h = r.thumbStyle, m = C.useState(!1), g = oe(m, 2), p = g[0], v = g[1], y = C.useState(null), x = oe(y, 2), E = x[0], b = x[1], _ = C.useState(null), S = oe(_, 2), M = S[0], A = S[1], N = !n, $ = C.useRef(), F = C.useRef(), L = C.useState(!1), D = oe(L, 2), U = D[0], P = D[1], R = C.useRef(), k = function() {
      clearTimeout(R.current), P(!0), R.current = setTimeout(function() {
        P(!1);
      }, 3e3);
    }, z = o - d || 0, T = d - u || 0, O = C.useMemo(function() {
      if (i === 0 || z === 0)
        return 0;
      var te = i / z;
      return te * T;
    }, [i, z, T]), B = function(ae) {
      ae.stopPropagation(), ae.preventDefault();
    }, j = C.useRef({
      top: O,
      dragging: p,
      pageY: E,
      startTop: M
    });
    j.current = {
      top: O,
      dragging: p,
      pageY: E,
      startTop: M
    };
    var V = function(ae) {
      v(!0), b(Hl(ae, l)), A(j.current.top), s(), ae.stopPropagation(), ae.preventDefault();
    };
    C.useEffect(function() {
      var te = function(Z) {
        Z.preventDefault();
      }, ae = $.current, W = F.current;
      return ae.addEventListener("touchstart", te, {
        passive: !1
      }), W.addEventListener("touchstart", V, {
        passive: !1
      }), function() {
        ae.removeEventListener("touchstart", te), W.removeEventListener("touchstart", V);
      };
    }, []);
    var ee = C.useRef();
    ee.current = z;
    var Q = C.useRef();
    Q.current = T, C.useEffect(function() {
      if (p) {
        var te, ae = function(Z) {
          var Ae = j.current, Ee = Ae.dragging, Be = Ae.pageY, Xe = Ae.startTop;
          Je.cancel(te);
          var je = $.current.getBoundingClientRect(), ue = d / (l ? je.width : je.height);
          if (Ee) {
            var me = (Hl(Z, l) - Be) * ue, xe = Xe;
            !N && l ? xe -= me : xe += me;
            var De = ee.current, ge = Q.current, Pe = ge ? xe / ge : 0, ke = Math.ceil(Pe * De);
            ke = Math.max(ke, 0), ke = Math.min(ke, De), te = Je(function() {
              c(ke, l);
            });
          }
        }, W = function() {
          v(!1), a();
        };
        return window.addEventListener("mousemove", ae, {
          passive: !0
        }), window.addEventListener("touchmove", ae, {
          passive: !0
        }), window.addEventListener("mouseup", W, {
          passive: !0
        }), window.addEventListener("touchend", W, {
          passive: !0
        }), function() {
          window.removeEventListener("mousemove", ae), window.removeEventListener("touchmove", ae), window.removeEventListener("mouseup", W), window.removeEventListener("touchend", W), Je.cancel(te);
        };
      }
    }, [p]), C.useEffect(function() {
      return k(), function() {
        clearTimeout(R.current);
      };
    }, [i]), C.useImperativeHandle(e, function() {
      return {
        delayHidden: k
      };
    });
    var q = "".concat(t, "-scrollbar"), re = {
      position: "absolute",
      visibility: U ? null : "hidden"
    }, ie = {
      position: "absolute",
      background: "rgba(0, 0, 0, 0.5)",
      borderRadius: 99,
      cursor: "pointer",
      userSelect: "none"
    };
    return l ? (re.height = 8, re.left = 0, re.right = 0, re.bottom = 0, ie.height = "100%", ie.width = u, N ? ie.left = O : ie.right = O) : (re.width = 8, re.top = 0, re.bottom = 0, N ? re.right = 0 : re.left = 0, ie.width = "100%", ie.height = u, ie.top = O), /* @__PURE__ */ C.createElement("div", {
      ref: $,
      className: Re(q, I(I(I({}, "".concat(q, "-horizontal"), l), "".concat(q, "-vertical"), !l), "".concat(q, "-visible"), U)),
      style: Y(Y({}, re), f),
      onMouseDown: B,
      onMouseMove: k
    }, /* @__PURE__ */ C.createElement("div", {
      ref: F,
      className: Re("".concat(q, "-thumb"), I({}, "".concat(q, "-thumb-moving"), p)),
      style: Y(Y({}, ie), h),
      onMouseDown: V
    }));
  });
  process.env.NODE_ENV !== "production" && (As.displayName = "ScrollBar");
  var t0 = 20;
  function Kl() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = r / e * r;
    return isNaN(t) && (t = 0), t = Math.max(t, t0), Math.floor(t);
  }
  var r0 = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles"], n0 = [], i0 = {
    overflowY: "auto",
    overflowAnchor: "none"
  };
  function o0(r, e) {
    var t = r.prefixCls, n = t === void 0 ? "rc-virtual-list" : t, i = r.className, o = r.height, s = r.itemHeight, a = r.fullHeight, c = a === void 0 ? !0 : a, l = r.style, u = r.data, d = r.children, f = r.itemKey, h = r.virtual, m = r.direction, g = r.scrollWidth, p = r.component, v = p === void 0 ? "div" : p, y = r.onScroll, x = r.onVirtualScroll, E = r.onVisibleChange, b = r.innerProps, _ = r.extraRender, S = r.styles, M = Yt(r, r0), A = C.useCallback(function(ne) {
      return typeof f == "function" ? f(ne) : ne == null ? void 0 : ne[f];
    }, [f]), N = Jy(A), $ = oe(N, 4), F = $[0], L = $[1], D = $[2], U = $[3], P = !!(h !== !1 && o && s), R = C.useMemo(function() {
      return Object.values(D.maps).reduce(function(ne, J) {
        return ne + J;
      }, 0);
    }, [D.id, D.maps]), k = P && u && (Math.max(s * u.length, R) > o || !!g), z = m === "rtl", T = Re(n, I({}, "".concat(n, "-rtl"), z), i), O = u || n0, B = ye(), j = ye(), V = ye(), ee = lt(0), Q = oe(ee, 2), q = Q[0], re = Q[1], ie = lt(0), te = oe(ie, 2), ae = te[0], W = te[1], Oe = lt(!1), Z = oe(Oe, 2), Ae = Z[0], Ee = Z[1], Be = function() {
      Ee(!0);
    }, Xe = function() {
      Ee(!1);
    }, je = {
      getKey: A
    };
    function ue(ne) {
      re(function(J) {
        var ce;
        typeof ne == "function" ? ce = ne(J) : ce = ne;
        var Ce = Pt(ce);
        return B.current.scrollTop = Ce, Ce;
      });
    }
    var me = ye({
      start: 0,
      end: O.length
    }), xe = ye(), De = Gy(O, A), ge = oe(De, 1), Pe = ge[0];
    xe.current = Pe;
    var ke = C.useMemo(function() {
      if (!P)
        return {
          scrollHeight: void 0,
          start: 0,
          end: O.length - 1,
          offset: void 0
        };
      if (!k) {
        var ne;
        return {
          scrollHeight: ((ne = j.current) === null || ne === void 0 ? void 0 : ne.offsetHeight) || 0,
          start: 0,
          end: O.length - 1,
          offset: void 0
        };
      }
      for (var J = 0, ce, Ce, st, rr = O.length, Ke = 0; Ke < rr; Ke += 1) {
        var Fn = O[Ke], zo = A(Fn), mi = D.get(zo), Lo = J + (mi === void 0 ? s : mi);
        Lo >= q && ce === void 0 && (ce = Ke, Ce = J), Lo > q + o && st === void 0 && (st = Ke), J = Lo;
      }
      return ce === void 0 && (ce = 0, Ce = 0, st = Math.ceil(o / s)), st === void 0 && (st = O.length - 1), st = Math.min(st + 1, O.length - 1), {
        scrollHeight: J,
        start: ce,
        end: st,
        offset: Ce
      };
    }, [k, P, q, O, U, o]), He = ke.scrollHeight, at = ke.start, At = ke.end, $r = ke.offset;
    me.current.start = at, me.current.end = At;
    var zr = C.useState({
      width: 0,
      height: o
    }), Zr = oe(zr, 2), yt = Zr[0], In = Zr[1], $n = function(J) {
      In({
        width: J.offsetWidth,
        height: J.offsetHeight
      });
    }, Jr = ye(), Qr = ye(), zn = C.useMemo(function() {
      return Kl(yt.width, g);
    }, [yt.width, g]), Lr = C.useMemo(function() {
      return Kl(yt.height, He);
    }, [yt.height, He]), Qt = He - o, rt = ye(Qt);
    rt.current = Qt;
    function Pt(ne) {
      var J = ne;
      return Number.isNaN(rt.current) || (J = Math.min(J, rt.current)), J = Math.max(J, 0), J;
    }
    var Nt = q <= 0, er = q >= Qt, Dt = ae <= 0, _t = ae >= g, Ln = ff(Nt, er, Dt, _t), Ie = function() {
      return {
        x: z ? -ae : ae,
        y: q
      };
    }, tr = ye(Ie()), vr = Tn(function(ne) {
      if (x) {
        var J = Y(Y({}, Ie()), ne);
        (tr.current.x !== J.x || tr.current.y !== J.y) && (x(J), tr.current = J);
      }
    });
    function Ne(ne, J) {
      var ce = ne;
      J ? (fc(function() {
        W(ce);
      }), vr()) : ue(ce);
    }
    function Le(ne) {
      var J = ne.currentTarget.scrollTop;
      J !== q && ue(J), y == null || y(ne), vr();
    }
    var Qe = function(J) {
      var ce = J, Ce = g ? g - yt.width : 0;
      return ce = Math.max(ce, 0), ce = Math.min(ce, Ce), ce;
    }, ut = Tn(function(ne, J) {
      J ? (fc(function() {
        W(function(ce) {
          var Ce = ce + (z ? -ne : ne);
          return Qe(Ce);
        });
      }), vr()) : ue(function(ce) {
        var Ce = ce + ne;
        return Ce;
      });
    }), yr = Yy(P, Nt, er, Dt, _t, !!g, ut), en = oe(yr, 2), br = en[0], w = en[1];
    Qy(P, B, function(ne, J, ce) {
      return Ln(ne, J, ce) ? !1 : (br({
        preventDefault: function() {
        },
        deltaX: ne ? J : 0,
        deltaY: ne ? 0 : J
      }), !0);
    }), Gt(function() {
      function ne(ce) {
        P && ce.preventDefault();
      }
      var J = B.current;
      return J.addEventListener("wheel", br, {
        passive: !1
      }), J.addEventListener("DOMMouseScroll", w, {
        passive: !0
      }), J.addEventListener("MozMousePixelScroll", ne, {
        passive: !1
      }), function() {
        J.removeEventListener("wheel", br), J.removeEventListener("DOMMouseScroll", w), J.removeEventListener("MozMousePixelScroll", ne);
      };
    }, [P]), Gt(function() {
      if (g) {
        var ne = Qe(ae);
        W(ne), vr({
          x: ne
        });
      }
    }, [yt.width, g]);
    var K = function() {
      var J, ce;
      (J = Jr.current) === null || J === void 0 || J.delayHidden(), (ce = Qr.current) === null || ce === void 0 || ce.delayHidden();
    }, X = e0(B, O, D, s, A, function() {
      return L(!0);
    }, ue, K);
    C.useImperativeHandle(e, function() {
      return {
        nativeElement: V.current,
        getScrollInfo: Ie,
        scrollTo: function(J) {
          function ce(Ce) {
            return Ce && Se(Ce) === "object" && ("left" in Ce || "top" in Ce);
          }
          ce(J) ? (J.left !== void 0 && W(Qe(J.left)), X(J.top)) : X(J);
        }
      };
    }), Gt(function() {
      if (E) {
        var ne = O.slice(at, At + 1);
        E(ne, O);
      }
    }, [at, At, O]);
    var le = Xy(O, A, D, s), be = _ == null ? void 0 : _({
      start: at,
      end: At,
      virtual: k,
      offsetX: ae,
      offsetY: $r,
      rtl: z,
      getSize: le
    }), he = Uy(O, at, At, g, ae, F, d, je), fe = null;
    o && (fe = Y(I({}, c ? "height" : "maxHeight", o), i0), P && (fe.overflowY = "hidden", g && (fe.overflowX = "hidden"), Ae && (fe.pointerEvents = "none")));
    var pe = {};
    return z && (pe.dir = "rtl"), /* @__PURE__ */ C.createElement("div", ze({
      ref: V,
      style: Y(Y({}, l), {}, {
        position: "relative"
      }),
      className: T
    }, pe, M), /* @__PURE__ */ C.createElement(Eo, {
      onResize: $n
    }, /* @__PURE__ */ C.createElement(v, {
      className: "".concat(n, "-holder"),
      style: fe,
      ref: B,
      onScroll: Le,
      onMouseEnter: K
    }, /* @__PURE__ */ C.createElement(df, {
      prefixCls: n,
      height: He,
      offsetX: ae,
      offsetY: $r,
      scrollWidth: g,
      onInnerResize: L,
      ref: j,
      innerProps: b,
      rtl: z,
      extra: be
    }, he))), k && He > o && /* @__PURE__ */ C.createElement(As, {
      ref: Jr,
      prefixCls: n,
      scrollOffset: q,
      scrollRange: He,
      rtl: z,
      onScroll: Ne,
      onStartMove: Be,
      onStopMove: Xe,
      spinSize: Lr,
      containerSize: yt.height,
      style: S == null ? void 0 : S.verticalScrollBar,
      thumbStyle: S == null ? void 0 : S.verticalScrollBarThumb
    }), k && g > yt.width && /* @__PURE__ */ C.createElement(As, {
      ref: Qr,
      prefixCls: n,
      scrollOffset: ae,
      scrollRange: g,
      rtl: z,
      onScroll: Ne,
      onStartMove: Be,
      onStopMove: Xe,
      spinSize: zn,
      containerSize: yt.width,
      horizontal: !0,
      style: S == null ? void 0 : S.horizontalScrollBar,
      thumbStyle: S == null ? void 0 : S.horizontalScrollBarThumb
    }));
  }
  var hf = /* @__PURE__ */ C.forwardRef(o0);
  hf.displayName = "List";
  function pt(r, e) {
    return r[e];
  }
  var a0 = ["children"];
  function pf(r, e) {
    return "".concat(r, "-").concat(e);
  }
  function s0(r) {
    return r && r.type && r.type.isTreeNode;
  }
  function pi(r, e) {
    return r ?? e;
  }
  function On(r) {
    var e = r || {}, t = e.title, n = e._title, i = e.key, o = e.children, s = t || "title";
    return {
      title: s,
      _title: n || [s],
      key: i || "key",
      children: o || "children"
    };
  }
  function c0(r, e) {
    var t = /* @__PURE__ */ new Map();
    function n(i) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
      (i || []).forEach(function(s) {
        var a = s[e.key], c = s[e.children];
        Ge(a != null, "Tree node must have a certain key: [".concat(o).concat(a, "]"));
        var l = String(a);
        Ge(!t.has(l) || a === null || a === void 0, "Same 'key' exist in the Tree: ".concat(l)), t.set(l, !0), n(c, "".concat(o).concat(l, " > "));
      });
    }
    n(r);
  }
  function mf(r) {
    function e(t) {
      var n = so(t);
      return n.map(function(i) {
        if (!s0(i))
          return Ge(!i, "Tree/TreeNode can only accept TreeNode as children."), null;
        var o = i.key, s = i.props, a = s.children, c = Yt(s, a0), l = Y({
          key: o
        }, c), u = e(a);
        return u.length && (l.children = u), l;
      }).filter(function(i) {
        return i;
      });
    }
    return e(r);
  }
  function Ca(r, e, t) {
    var n = On(t), i = n._title, o = n.key, s = n.children, a = new Set(e === !0 ? [] : e), c = [];
    function l(u) {
      var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return u.map(function(f, h) {
        for (var m = pf(d ? d.pos : "0", h), g = pi(f[o], m), p, v = 0; v < i.length; v += 1) {
          var y = i[v];
          if (f[y] !== void 0) {
            p = f[y];
            break;
          }
        }
        var x = Object.assign(Fu(f, [].concat(Ye(i), [o, s])), {
          title: p,
          key: g,
          parent: d,
          pos: m,
          children: null,
          data: f,
          isStart: [].concat(Ye(d ? d.isStart : []), [h === 0]),
          isEnd: [].concat(Ye(d ? d.isEnd : []), [h === u.length - 1])
        });
        return c.push(x), e === !0 || a.has(g) ? x.children = l(f[s] || [], x) : x.children = [], x;
      });
    }
    return l(r), c;
  }
  function l0(r, e, t) {
    var n = {};
    Se(t) === "object" ? n = t : n = {
      externalGetKey: t
    }, n = n || {};
    var i = n, o = i.childrenPropName, s = i.externalGetKey, a = i.fieldNames, c = On(a), l = c.key, u = c.children, d = o || u, f;
    s ? typeof s == "string" ? f = function(g) {
      return g[s];
    } : typeof s == "function" && (f = function(g) {
      return s(g);
    }) : f = function(g, p) {
      return pi(g[l], p);
    };
    function h(m, g, p, v) {
      var y = m ? m[d] : r, x = m ? pf(p.pos, g) : "0", E = m ? [].concat(Ye(v), [m]) : [];
      if (m) {
        var b = f(m, x), _ = {
          node: m,
          index: g,
          pos: x,
          key: b,
          parentPos: p.node ? p.pos : null,
          level: p.level + 1,
          nodes: E
        };
        e(_);
      }
      y && y.forEach(function(S, M) {
        h(S, M, {
          node: m,
          pos: x,
          level: p ? p.level + 1 : -1
        }, E);
      });
    }
    h(null);
  }
  function gf(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = e.initWrapper, n = e.processEntity, i = e.onProcessFinished, o = e.externalGetKey, s = e.childrenPropName, a = e.fieldNames, c = arguments.length > 2 ? arguments[2] : void 0, l = o || c, u = {}, d = {}, f = {
      posEntities: u,
      keyEntities: d
    };
    return t && (f = t(f) || f), l0(r, function(h) {
      var m = h.node, g = h.index, p = h.pos, v = h.key, y = h.parentPos, x = h.level, E = h.nodes, b = {
        node: m,
        nodes: E,
        index: g,
        key: v,
        pos: p,
        level: x
      }, _ = pi(v, p);
      u[p] = b, d[_] = b, b.parent = u[y], b.parent && (b.parent.children = b.parent.children || [], b.parent.children.push(b)), n && n(b, f);
    }, {
      externalGetKey: l,
      childrenPropName: s,
      fieldNames: a
    }), i && i(f), f;
  }
  function ti(r, e) {
    var t = e.expandedKeys, n = e.selectedKeys, i = e.loadedKeys, o = e.loadingKeys, s = e.checkedKeys, a = e.halfCheckedKeys, c = e.dragOverNodeKey, l = e.dropPosition, u = e.keyEntities, d = pt(u, r), f = {
      eventKey: r,
      expanded: t.indexOf(r) !== -1,
      selected: n.indexOf(r) !== -1,
      loaded: i.indexOf(r) !== -1,
      loading: o.indexOf(r) !== -1,
      checked: s.indexOf(r) !== -1,
      halfChecked: a.indexOf(r) !== -1,
      pos: String(d ? d.pos : ""),
      // [Legacy] Drag props
      // Since the interaction of drag is changed, the semantic of the props are
      // not accuracy, I think it should be finally removed
      dragOver: c === r && l === 0,
      dragOverGapTop: c === r && l === -1,
      dragOverGapBottom: c === r && l === 1
    };
    return f;
  }
  function Ve(r) {
    var e = r.data, t = r.expanded, n = r.selected, i = r.checked, o = r.loaded, s = r.loading, a = r.halfChecked, c = r.dragOver, l = r.dragOverGapTop, u = r.dragOverGapBottom, d = r.pos, f = r.active, h = r.eventKey, m = Y(Y({}, e), {}, {
      expanded: t,
      selected: n,
      checked: i,
      loaded: o,
      loading: s,
      halfChecked: a,
      dragOver: c,
      dragOverGapTop: l,
      dragOverGapBottom: u,
      pos: d,
      active: f,
      key: h
    });
    return "props" in m || Object.defineProperty(m, "props", {
      get: function() {
        return Ge(!1, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), r;
      }
    }), m;
  }
  function vf(r, e) {
    var t = /* @__PURE__ */ new Set();
    return r.forEach(function(n) {
      e.has(n) || t.add(n);
    }), t;
  }
  function u0(r) {
    var e = r || {}, t = e.disabled, n = e.disableCheckbox, i = e.checkable;
    return !!(t || n) || i === !1;
  }
  function d0(r, e, t, n) {
    for (var i = new Set(r), o = /* @__PURE__ */ new Set(), s = 0; s <= t; s += 1) {
      var a = e.get(s) || /* @__PURE__ */ new Set();
      a.forEach(function(d) {
        var f = d.key, h = d.node, m = d.children, g = m === void 0 ? [] : m;
        i.has(f) && !n(h) && g.filter(function(p) {
          return !n(p.node);
        }).forEach(function(p) {
          i.add(p.key);
        });
      });
    }
    for (var c = /* @__PURE__ */ new Set(), l = t; l >= 0; l -= 1) {
      var u = e.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(d) {
        var f = d.parent, h = d.node;
        if (!(n(h) || !d.parent || c.has(d.parent.key))) {
          if (n(d.parent.node)) {
            c.add(f.key);
            return;
          }
          var m = !0, g = !1;
          (f.children || []).filter(function(p) {
            return !n(p.node);
          }).forEach(function(p) {
            var v = p.key, y = i.has(v);
            m && !y && (m = !1), !g && (y || o.has(v)) && (g = !0);
          }), m && i.add(f.key), g && o.add(f.key), c.add(f.key);
        }
      });
    }
    return {
      checkedKeys: Array.from(i),
      halfCheckedKeys: Array.from(vf(o, i))
    };
  }
  function f0(r, e, t, n, i) {
    for (var o = new Set(r), s = new Set(e), a = 0; a <= n; a += 1) {
      var c = t.get(a) || /* @__PURE__ */ new Set();
      c.forEach(function(f) {
        var h = f.key, m = f.node, g = f.children, p = g === void 0 ? [] : g;
        !o.has(h) && !s.has(h) && !i(m) && p.filter(function(v) {
          return !i(v.node);
        }).forEach(function(v) {
          o.delete(v.key);
        });
      });
    }
    s = /* @__PURE__ */ new Set();
    for (var l = /* @__PURE__ */ new Set(), u = n; u >= 0; u -= 1) {
      var d = t.get(u) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        var h = f.parent, m = f.node;
        if (!(i(m) || !f.parent || l.has(f.parent.key))) {
          if (i(f.parent.node)) {
            l.add(h.key);
            return;
          }
          var g = !0, p = !1;
          (h.children || []).filter(function(v) {
            return !i(v.node);
          }).forEach(function(v) {
            var y = v.key, x = o.has(y);
            g && !x && (g = !1), !p && (x || s.has(y)) && (p = !0);
          }), g || o.delete(h.key), p && s.add(h.key), l.add(h.key);
        }
      });
    }
    return {
      checkedKeys: Array.from(o),
      halfCheckedKeys: Array.from(vf(s, o))
    };
  }
  function wa(r, e, t, n) {
    var i = [], o;
    o = u0;
    var s = new Set(r.filter(function(u) {
      var d = !!pt(t, u);
      return d || i.push(u), d;
    })), a = /* @__PURE__ */ new Map(), c = 0;
    Object.keys(t).forEach(function(u) {
      var d = t[u], f = d.level, h = a.get(f);
      h || (h = /* @__PURE__ */ new Set(), a.set(f, h)), h.add(d), c = Math.max(c, f);
    }), Ge(!i.length, "Tree missing follow keys: ".concat(i.slice(0, 100).map(function(u) {
      return "'".concat(u, "'");
    }).join(", ")));
    var l;
    return e === !0 ? l = d0(s, a, c, o) : l = f0(s, e.halfCheckedKeys, a, c, o), l;
  }
  const h0 = (r) => {
    const {
      checkboxCls: e
    } = r, t = `${e}-wrapper`;
    return [
      // ===================== Basic =====================
      {
        // Group
        [`${e}-group`]: Object.assign(Object.assign({}, no(r)), {
          display: "inline-flex",
          flexWrap: "wrap",
          columnGap: r.marginXS,
          // Group > Grid
          [`> ${r.antCls}-row`]: {
            flex: 1
          }
        }),
        // Wrapper
        [t]: Object.assign(Object.assign({}, no(r)), {
          display: "inline-flex",
          alignItems: "baseline",
          cursor: "pointer",
          // Fix checkbox & radio in flex align #30260
          "&:after": {
            display: "inline-block",
            width: 0,
            overflow: "hidden",
            content: "'\\a0'"
          },
          // Checkbox near checkbox
          [`& + ${t}`]: {
            marginInlineStart: 0
          },
          [`&${t}-in-form-item`]: {
            'input[type="checkbox"]': {
              width: 14,
              // FIXME: magic
              height: 14
              // FIXME: magic
            }
          }
        }),
        // Wrapper > Checkbox
        [e]: Object.assign(Object.assign({}, no(r)), {
          position: "relative",
          whiteSpace: "nowrap",
          lineHeight: 1,
          cursor: "pointer",
          borderRadius: r.borderRadiusSM,
          // To make alignment right when `controlHeight` is changed
          // Ref: https://github.com/ant-design/ant-design/issues/41564
          alignSelf: "center",
          // Wrapper > Checkbox > input
          [`${e}-input`]: {
            position: "absolute",
            // Since baseline align will get additional space offset,
            // we need to move input to top to make it align with text.
            // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
            inset: 0,
            zIndex: 1,
            cursor: "pointer",
            opacity: 0,
            margin: 0,
            [`&:focus-visible + ${e}-inner`]: Object.assign({}, Gs(r))
          },
          // Wrapper > Checkbox > inner
          [`${e}-inner`]: {
            boxSizing: "border-box",
            display: "block",
            width: r.checkboxSize,
            height: r.checkboxSize,
            direction: "ltr",
            backgroundColor: r.colorBgContainer,
            border: `${qe(r.lineWidth)} ${r.lineType} ${r.colorBorder}`,
            borderRadius: r.borderRadiusSM,
            borderCollapse: "separate",
            transition: `all ${r.motionDurationSlow}`,
            "&:after": {
              boxSizing: "border-box",
              position: "absolute",
              top: "50%",
              insetInlineStart: "25%",
              display: "table",
              width: r.calc(r.checkboxSize).div(14).mul(5).equal(),
              height: r.calc(r.checkboxSize).div(14).mul(8).equal(),
              border: `${qe(r.lineWidthBold)} solid ${r.colorWhite}`,
              borderTop: 0,
              borderInlineStart: 0,
              transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
              opacity: 0,
              content: '""',
              transition: `all ${r.motionDurationFast} ${r.motionEaseInBack}, opacity ${r.motionDurationFast}`
            }
          },
          // Wrapper > Checkbox + Text
          "& + span": {
            paddingInlineStart: r.paddingXS,
            paddingInlineEnd: r.paddingXS
          }
        })
      },
      // ===================== Hover =====================
      {
        // Wrapper & Wrapper > Checkbox
        [`
        ${t}:not(${t}-disabled),
        ${e}:not(${e}-disabled)
      `]: {
          [`&:hover ${e}-inner`]: {
            borderColor: r.colorPrimary
          }
        },
        [`${t}:not(${t}-disabled)`]: {
          [`&:hover ${e}-checked:not(${e}-disabled) ${e}-inner`]: {
            backgroundColor: r.colorPrimaryHover,
            borderColor: "transparent"
          },
          [`&:hover ${e}-checked:not(${e}-disabled):after`]: {
            borderColor: r.colorPrimaryHover
          }
        }
      },
      // ==================== Checked ====================
      {
        // Wrapper > Checkbox
        [`${e}-checked`]: {
          [`${e}-inner`]: {
            backgroundColor: r.colorPrimary,
            borderColor: r.colorPrimary,
            "&:after": {
              opacity: 1,
              transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
              transition: `all ${r.motionDurationMid} ${r.motionEaseOutBack} ${r.motionDurationFast}`
            }
          }
        },
        [`
        ${t}-checked:not(${t}-disabled),
        ${e}-checked:not(${e}-disabled)
      `]: {
          [`&:hover ${e}-inner`]: {
            backgroundColor: r.colorPrimaryHover,
            borderColor: "transparent"
          }
        }
      },
      // ================= Indeterminate =================
      {
        [e]: {
          "&-indeterminate": {
            // Wrapper > Checkbox > inner
            [`${e}-inner`]: {
              backgroundColor: r.colorBgContainer,
              borderColor: r.colorBorder,
              "&:after": {
                top: "50%",
                insetInlineStart: "50%",
                width: r.calc(r.fontSizeLG).div(2).equal(),
                height: r.calc(r.fontSizeLG).div(2).equal(),
                backgroundColor: r.colorPrimary,
                border: 0,
                transform: "translate(-50%, -50%) scale(1)",
                opacity: 1,
                content: '""'
              }
            }
          }
        }
      },
      // ==================== Disable ====================
      {
        // Wrapper
        [`${t}-disabled`]: {
          cursor: "not-allowed"
        },
        // Wrapper > Checkbox
        [`${e}-disabled`]: {
          // Wrapper > Checkbox > input
          [`&, ${e}-input`]: {
            cursor: "not-allowed",
            // Disabled for native input to enable Tooltip event handler
            // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
            pointerEvents: "none"
          },
          // Wrapper > Checkbox > inner
          [`${e}-inner`]: {
            background: r.colorBgContainerDisabled,
            borderColor: r.colorBorder,
            "&:after": {
              borderColor: r.colorTextDisabled
            }
          },
          "&:after": {
            display: "none"
          },
          "& + span": {
            color: r.colorTextDisabled
          },
          [`&${e}-indeterminate ${e}-inner::after`]: {
            background: r.colorTextDisabled
          }
        }
      }
    ];
  };
  function yf(r, e) {
    const t = Ir(e, {
      checkboxCls: `.${r}`,
      checkboxSize: e.controlInteractiveSize
    });
    return [h0(t)];
  }
  Xs("Checkbox", (r, e) => {
    let {
      prefixCls: t
    } = e;
    return [yf(t, r)];
  });
  var tc = /* @__PURE__ */ C.createContext(null), p0 = function(e) {
    for (var t = e.prefixCls, n = e.level, i = e.isStart, o = e.isEnd, s = "".concat(t, "-indent-unit"), a = [], c = 0; c < n; c += 1)
      a.push(/* @__PURE__ */ C.createElement("span", {
        key: c,
        className: Re(s, I(I({}, "".concat(s, "-start"), i[c]), "".concat(s, "-end"), o[c]))
      }));
    return /* @__PURE__ */ C.createElement("span", {
      "aria-hidden": "true",
      className: "".concat(t, "-indent")
    }, a);
  };
  const m0 = /* @__PURE__ */ C.memo(p0);
  var g0 = ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "data", "onMouseMove", "selectable"], Wl = "open", Vl = "close", v0 = "---", y0 = /* @__PURE__ */ function(r) {
    Gr(t, r);
    var e = Yr(t);
    function t() {
      var n;
      gt(this, t);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return n = e.call.apply(e, [this].concat(o)), I(G(n), "state", {
        dragNodeHighlight: !1
      }), I(G(n), "selectHandle", void 0), I(G(n), "cacheIndent", void 0), I(G(n), "onSelectorClick", function(a) {
        var c = n.props.context.onNodeClick;
        c(a, Ve(n.props)), n.isSelectable() ? n.onSelect(a) : n.onCheck(a);
      }), I(G(n), "onSelectorDoubleClick", function(a) {
        var c = n.props.context.onNodeDoubleClick;
        c(a, Ve(n.props));
      }), I(G(n), "onSelect", function(a) {
        if (!n.isDisabled()) {
          var c = n.props.context.onNodeSelect;
          c(a, Ve(n.props));
        }
      }), I(G(n), "onCheck", function(a) {
        if (!n.isDisabled()) {
          var c = n.props, l = c.disableCheckbox, u = c.checked, d = n.props.context.onNodeCheck;
          if (!(!n.isCheckable() || l)) {
            var f = !u;
            d(a, Ve(n.props), f);
          }
        }
      }), I(G(n), "onMouseEnter", function(a) {
        var c = n.props.context.onNodeMouseEnter;
        c(a, Ve(n.props));
      }), I(G(n), "onMouseLeave", function(a) {
        var c = n.props.context.onNodeMouseLeave;
        c(a, Ve(n.props));
      }), I(G(n), "onContextMenu", function(a) {
        var c = n.props.context.onNodeContextMenu;
        c(a, Ve(n.props));
      }), I(G(n), "onDragStart", function(a) {
        var c = n.props.context.onNodeDragStart;
        a.stopPropagation(), n.setState({
          dragNodeHighlight: !0
        }), c(a, G(n));
        try {
          a.dataTransfer.setData("text/plain", "");
        } catch {
        }
      }), I(G(n), "onDragEnter", function(a) {
        var c = n.props.context.onNodeDragEnter;
        a.preventDefault(), a.stopPropagation(), c(a, G(n));
      }), I(G(n), "onDragOver", function(a) {
        var c = n.props.context.onNodeDragOver;
        a.preventDefault(), a.stopPropagation(), c(a, G(n));
      }), I(G(n), "onDragLeave", function(a) {
        var c = n.props.context.onNodeDragLeave;
        a.stopPropagation(), c(a, G(n));
      }), I(G(n), "onDragEnd", function(a) {
        var c = n.props.context.onNodeDragEnd;
        a.stopPropagation(), n.setState({
          dragNodeHighlight: !1
        }), c(a, G(n));
      }), I(G(n), "onDrop", function(a) {
        var c = n.props.context.onNodeDrop;
        a.preventDefault(), a.stopPropagation(), n.setState({
          dragNodeHighlight: !1
        }), c(a, G(n));
      }), I(G(n), "onExpand", function(a) {
        var c = n.props, l = c.loading, u = c.context.onNodeExpand;
        l || u(a, Ve(n.props));
      }), I(G(n), "setSelectHandle", function(a) {
        n.selectHandle = a;
      }), I(G(n), "getNodeState", function() {
        var a = n.props.expanded;
        return n.isLeaf() ? null : a ? Wl : Vl;
      }), I(G(n), "hasChildren", function() {
        var a = n.props.eventKey, c = n.props.context.keyEntities, l = pt(c, a) || {}, u = l.children;
        return !!(u || []).length;
      }), I(G(n), "isLeaf", function() {
        var a = n.props, c = a.isLeaf, l = a.loaded, u = n.props.context.loadData, d = n.hasChildren();
        return c === !1 ? !1 : c || !u && !d || u && l && !d;
      }), I(G(n), "isDisabled", function() {
        var a = n.props.disabled, c = n.props.context.disabled;
        return !!(c || a);
      }), I(G(n), "isCheckable", function() {
        var a = n.props.checkable, c = n.props.context.checkable;
        return !c || a === !1 ? !1 : c;
      }), I(G(n), "syncLoadData", function(a) {
        var c = a.expanded, l = a.loading, u = a.loaded, d = n.props.context, f = d.loadData, h = d.onNodeLoad;
        l || f && c && !n.isLeaf() && !u && h(Ve(n.props));
      }), I(G(n), "isDraggable", function() {
        var a = n.props, c = a.data, l = a.context.draggable;
        return !!(l && (!l.nodeDraggable || l.nodeDraggable(c)));
      }), I(G(n), "renderDragHandler", function() {
        var a = n.props.context, c = a.draggable, l = a.prefixCls;
        return c != null && c.icon ? /* @__PURE__ */ C.createElement("span", {
          className: "".concat(l, "-draggable-icon")
        }, c.icon) : null;
      }), I(G(n), "renderSwitcherIconDom", function(a) {
        var c = n.props.switcherIcon, l = n.props.context.switcherIcon, u = c || l;
        return typeof u == "function" ? u(Y(Y({}, n.props), {}, {
          isLeaf: a
        })) : u;
      }), I(G(n), "renderSwitcher", function() {
        var a = n.props.expanded, c = n.props.context.prefixCls;
        if (n.isLeaf()) {
          var l = n.renderSwitcherIconDom(!0);
          return l !== !1 ? /* @__PURE__ */ C.createElement("span", {
            className: Re("".concat(c, "-switcher"), "".concat(c, "-switcher-noop"))
          }, l) : null;
        }
        var u = Re("".concat(c, "-switcher"), "".concat(c, "-switcher_").concat(a ? Wl : Vl)), d = n.renderSwitcherIconDom(!1);
        return d !== !1 ? /* @__PURE__ */ C.createElement("span", {
          onClick: n.onExpand,
          className: u
        }, d) : null;
      }), I(G(n), "renderCheckbox", function() {
        var a = n.props, c = a.checked, l = a.halfChecked, u = a.disableCheckbox, d = n.props.context.prefixCls, f = n.isDisabled(), h = n.isCheckable();
        if (!h) return null;
        var m = typeof h != "boolean" ? h : null;
        return /* @__PURE__ */ C.createElement("span", {
          className: Re("".concat(d, "-checkbox"), c && "".concat(d, "-checkbox-checked"), !c && l && "".concat(d, "-checkbox-indeterminate"), (f || u) && "".concat(d, "-checkbox-disabled")),
          onClick: n.onCheck
        }, m);
      }), I(G(n), "renderIcon", function() {
        var a = n.props.loading, c = n.props.context.prefixCls;
        return /* @__PURE__ */ C.createElement("span", {
          className: Re("".concat(c, "-iconEle"), "".concat(c, "-icon__").concat(n.getNodeState() || "docu"), a && "".concat(c, "-icon_loading"))
        });
      }), I(G(n), "renderSelector", function() {
        var a = n.state.dragNodeHighlight, c = n.props, l = c.title, u = l === void 0 ? v0 : l, d = c.selected, f = c.icon, h = c.loading, m = c.data, g = n.props.context, p = g.prefixCls, v = g.showIcon, y = g.icon, x = g.loadData, E = g.titleRender, b = n.isDisabled(), _ = "".concat(p, "-node-content-wrapper"), S;
        if (v) {
          var M = f || y;
          S = M ? /* @__PURE__ */ C.createElement("span", {
            className: Re("".concat(p, "-iconEle"), "".concat(p, "-icon__customize"))
          }, typeof M == "function" ? M(n.props) : M) : n.renderIcon();
        } else x && h && (S = n.renderIcon());
        var A;
        typeof u == "function" ? A = u(m) : E ? A = E(m) : A = u;
        var N = /* @__PURE__ */ C.createElement("span", {
          className: "".concat(p, "-title")
        }, A);
        return /* @__PURE__ */ C.createElement("span", {
          ref: n.setSelectHandle,
          title: typeof u == "string" ? u : "",
          className: Re("".concat(_), "".concat(_, "-").concat(n.getNodeState() || "normal"), !b && (d || a) && "".concat(p, "-node-selected")),
          onMouseEnter: n.onMouseEnter,
          onMouseLeave: n.onMouseLeave,
          onContextMenu: n.onContextMenu,
          onClick: n.onSelectorClick,
          onDoubleClick: n.onSelectorDoubleClick
        }, S, N, n.renderDropIndicator());
      }), I(G(n), "renderDropIndicator", function() {
        var a = n.props, c = a.disabled, l = a.eventKey, u = n.props.context, d = u.draggable, f = u.dropLevelOffset, h = u.dropPosition, m = u.prefixCls, g = u.indent, p = u.dropIndicatorRender, v = u.dragOverNodeKey, y = u.direction, x = !!d, E = !c && x && v === l, b = g ?? n.cacheIndent;
        return n.cacheIndent = g, E ? p({
          dropPosition: h,
          dropLevelOffset: f,
          indent: b,
          prefixCls: m,
          direction: y
        }) : null;
      }), n;
    }
    return vt(t, [{
      key: "componentDidMount",
      value: (
        // Isomorphic needn't load data in server side
        function() {
          this.syncLoadData(this.props);
        }
      )
    }, {
      key: "componentDidUpdate",
      value: function() {
        this.syncLoadData(this.props);
      }
    }, {
      key: "isSelectable",
      value: function() {
        var i = this.props.selectable, o = this.props.context.selectable;
        return typeof i == "boolean" ? i : o;
      }
    }, {
      key: "render",
      value: (
        // =========================== Render ===========================
        function() {
          var i, o = this.props, s = o.eventKey, a = o.className, c = o.style, l = o.dragOver, u = o.dragOverGapTop, d = o.dragOverGapBottom, f = o.isLeaf, h = o.isStart, m = o.isEnd, g = o.expanded, p = o.selected, v = o.checked, y = o.halfChecked, x = o.loading, E = o.domRef, b = o.active;
          o.data;
          var _ = o.onMouseMove, S = o.selectable, M = Yt(o, g0), A = this.props.context, N = A.prefixCls, $ = A.filterTreeNode, F = A.keyEntities, L = A.dropContainerKey, D = A.dropTargetKey, U = A.draggingNodeKey, P = this.isDisabled(), R = ef(M, {
            aria: !0,
            data: !0
          }), k = pt(F, s) || {}, z = k.level, T = m[m.length - 1], O = this.isDraggable(), B = !P && O, j = U === s, V = S !== void 0 ? {
            "aria-selected": !!S
          } : void 0;
          return /* @__PURE__ */ C.createElement("div", ze({
            ref: E,
            className: Re(a, "".concat(N, "-treenode"), (i = {}, I(I(I(I(I(I(I(I(I(I(i, "".concat(N, "-treenode-disabled"), P), "".concat(N, "-treenode-switcher-").concat(g ? "open" : "close"), !f), "".concat(N, "-treenode-checkbox-checked"), v), "".concat(N, "-treenode-checkbox-indeterminate"), y), "".concat(N, "-treenode-selected"), p), "".concat(N, "-treenode-loading"), x), "".concat(N, "-treenode-active"), b), "".concat(N, "-treenode-leaf-last"), T), "".concat(N, "-treenode-draggable"), O), "dragging", j), I(I(I(I(I(I(i, "drop-target", D === s), "drop-container", L === s), "drag-over", !P && l), "drag-over-gap-top", !P && u), "drag-over-gap-bottom", !P && d), "filter-node", $ && $(Ve(this.props))))),
            style: c,
            draggable: B,
            "aria-grabbed": j,
            onDragStart: B ? this.onDragStart : void 0,
            onDragEnter: O ? this.onDragEnter : void 0,
            onDragOver: O ? this.onDragOver : void 0,
            onDragLeave: O ? this.onDragLeave : void 0,
            onDrop: O ? this.onDrop : void 0,
            onDragEnd: O ? this.onDragEnd : void 0,
            onMouseMove: _
          }, V, R), /* @__PURE__ */ C.createElement(m0, {
            prefixCls: N,
            level: z,
            isStart: h,
            isEnd: m
          }), this.renderDragHandler(), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
        }
      )
    }]), t;
  }(C.Component), Rn = function(e) {
    return /* @__PURE__ */ C.createElement(tc.Consumer, null, function(t) {
      return /* @__PURE__ */ C.createElement(y0, ze({}, e, {
        context: t
      }));
    });
  };
  Rn.displayName = "TreeNode";
  Rn.isTreeNode = 1;
  function ur(r, e) {
    if (!r) return [];
    var t = r.slice(), n = t.indexOf(e);
    return n >= 0 && t.splice(n, 1), t;
  }
  function Mr(r, e) {
    var t = (r || []).slice();
    return t.indexOf(e) === -1 && t.push(e), t;
  }
  function rc(r) {
    return r.split("-");
  }
  function b0(r, e) {
    var t = [], n = pt(e, r);
    function i() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      o.forEach(function(s) {
        var a = s.key, c = s.children;
        t.push(a), i(c);
      });
    }
    return i(n.children), t;
  }
  function x0(r) {
    if (r.parent) {
      var e = rc(r.pos);
      return Number(e[e.length - 1]) === r.parent.children.length - 1;
    }
    return !1;
  }
  function S0(r) {
    var e = rc(r.pos);
    return Number(e[e.length - 1]) === 0;
  }
  function Ul(r, e, t, n, i, o, s, a, c, l) {
    var u, d = r.clientX, f = r.clientY, h = r.target.getBoundingClientRect(), m = h.top, g = h.height, p = (l === "rtl" ? -1 : 1) * (((i == null ? void 0 : i.x) || 0) - d), v = (p - 12) / n, y = c.filter(function(P) {
      var R;
      return (R = a[P]) === null || R === void 0 || (R = R.children) === null || R === void 0 ? void 0 : R.length;
    }), x = pt(a, t.props.eventKey);
    if (f < m + g / 2) {
      var E = s.findIndex(function(P) {
        return P.key === x.key;
      }), b = E <= 0 ? 0 : E - 1, _ = s[b].key;
      x = pt(a, _);
    }
    var S = x.key, M = x, A = x.key, N = 0, $ = 0;
    if (!y.includes(S))
      for (var F = 0; F < v && x0(x); F += 1)
        x = x.parent, $ += 1;
    var L = e.props.data, D = x.node, U = !0;
    return S0(x) && x.level === 0 && f < m + g / 2 && o({
      dragNode: L,
      dropNode: D,
      dropPosition: -1
    }) && x.key === t.props.eventKey ? N = -1 : (M.children || []).length && y.includes(A) ? o({
      dragNode: L,
      dropNode: D,
      dropPosition: 0
    }) ? N = 0 : U = !1 : $ === 0 ? v > -1.5 ? o({
      dragNode: L,
      dropNode: D,
      dropPosition: 1
    }) ? N = 1 : U = !1 : o({
      dragNode: L,
      dropNode: D,
      dropPosition: 0
    }) ? N = 0 : o({
      dragNode: L,
      dropNode: D,
      dropPosition: 1
    }) ? N = 1 : U = !1 : o({
      dragNode: L,
      dropNode: D,
      dropPosition: 1
    }) ? N = 1 : U = !1, {
      dropPosition: N,
      dropLevelOffset: $,
      dropTargetKey: x.key,
      dropTargetPos: x.pos,
      dragOverNodeKey: A,
      dropContainerKey: N === 0 ? null : ((u = x.parent) === null || u === void 0 ? void 0 : u.key) || null,
      dropAllowed: U
    };
  }
  function ql(r, e) {
    if (r) {
      var t = e.multiple;
      return t ? r.slice() : r.length ? [r[0]] : r;
    }
  }
  function Ma(r) {
    if (!r)
      return null;
    var e;
    if (Array.isArray(r))
      e = {
        checkedKeys: r,
        halfCheckedKeys: void 0
      };
    else if (Se(r) === "object")
      e = {
        checkedKeys: r.checked || void 0,
        halfCheckedKeys: r.halfChecked || void 0
      };
    else
      return Ge(!1, "`checkedKeys` is not an array or an object"), null;
    return e;
  }
  function Ps(r, e) {
    var t = /* @__PURE__ */ new Set();
    function n(i) {
      if (!t.has(i)) {
        var o = pt(e, i);
        if (o) {
          t.add(i);
          var s = o.parent, a = o.node;
          a.disabled || s && n(s.key);
        }
      }
    }
    return (r || []).forEach(function(i) {
      n(i);
    }), Ye(t);
  }
  function E0(r) {
    var e = r.dropPosition, t = r.dropLevelOffset, n = r.indent, i = {
      pointerEvents: "none",
      position: "absolute",
      right: 0,
      backgroundColor: "red",
      height: 2
    };
    switch (e) {
      case -1:
        i.top = 0, i.left = -t * n;
        break;
      case 1:
        i.bottom = 0, i.left = -t * n;
        break;
      case 0:
        i.bottom = 0, i.left = n;
        break;
    }
    return /* @__PURE__ */ C.createElement("div", {
      style: i
    });
  }
  function bf(r) {
    if (r == null) throw new TypeError("Cannot destructure " + r);
  }
  function C0(r, e) {
    var t = C.useState(!1), n = oe(t, 2), i = n[0], o = n[1];
    Gt(function() {
      if (i)
        return r(), function() {
          e();
        };
    }, [i]), Gt(function() {
      return o(!0), function() {
        o(!1);
      };
    }, []);
  }
  var w0 = ["className", "style", "motion", "motionNodes", "motionType", "onMotionStart", "onMotionEnd", "active", "treeNodeRequiredProps"], xf = function(e, t) {
    var n = e.className, i = e.style, o = e.motion, s = e.motionNodes, a = e.motionType, c = e.onMotionStart, l = e.onMotionEnd, u = e.active, d = e.treeNodeRequiredProps, f = Yt(e, w0), h = C.useState(!0), m = oe(h, 2), g = m[0], p = m[1], v = C.useContext(tc), y = v.prefixCls, x = s && a !== "hide";
    Gt(function() {
      s && x !== g && p(x);
    }, [s]);
    var E = function() {
      s && c();
    }, b = C.useRef(!1), _ = function() {
      s && !b.current && (b.current = !0, l());
    };
    C0(E, _);
    var S = function(A) {
      x === A && _();
    };
    return s ? /* @__PURE__ */ C.createElement(Ao, ze({
      ref: t,
      visible: g
    }, o, {
      motionAppear: a === "show",
      onVisibleChanged: S
    }), function(M, A) {
      var N = M.className, $ = M.style;
      return /* @__PURE__ */ C.createElement("div", {
        ref: A,
        className: Re("".concat(y, "-treenode-motion"), N),
        style: $
      }, s.map(function(F) {
        var L = Object.assign({}, (bf(F.data), F.data)), D = F.title, U = F.key, P = F.isStart, R = F.isEnd;
        delete L.children;
        var k = ti(U, d);
        return /* @__PURE__ */ C.createElement(Rn, ze({}, L, k, {
          title: D,
          active: u,
          data: F.data,
          key: U,
          isStart: P,
          isEnd: R
        }));
      }));
    }) : /* @__PURE__ */ C.createElement(Rn, ze({
      domRef: t,
      className: n,
      style: i
    }, f, {
      active: u
    }));
  };
  xf.displayName = "MotionTreeNode";
  var M0 = /* @__PURE__ */ C.forwardRef(xf);
  function _0() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = r.length, n = e.length;
    if (Math.abs(t - n) !== 1)
      return {
        add: !1,
        key: null
      };
    function i(o, s) {
      var a = /* @__PURE__ */ new Map();
      o.forEach(function(l) {
        a.set(l, !0);
      });
      var c = s.filter(function(l) {
        return !a.has(l);
      });
      return c.length === 1 ? c[0] : null;
    }
    return t < n ? {
      add: !0,
      key: i(r, e)
    } : {
      add: !1,
      key: i(e, r)
    };
  }
  function Gl(r, e, t) {
    var n = r.findIndex(function(a) {
      return a.key === t;
    }), i = r[n + 1], o = e.findIndex(function(a) {
      return a.key === t;
    });
    if (i) {
      var s = e.findIndex(function(a) {
        return a.key === i.key;
      });
      return e.slice(o + 1, s);
    }
    return e.slice(o + 1);
  }
  var T0 = ["prefixCls", "data", "selectable", "checkable", "expandedKeys", "selectedKeys", "checkedKeys", "loadedKeys", "loadingKeys", "halfCheckedKeys", "keyEntities", "disabled", "dragging", "dragOverNodeKey", "dropPosition", "motion", "height", "itemHeight", "virtual", "focusable", "activeItem", "focused", "tabIndex", "onKeyDown", "onFocus", "onBlur", "onActiveChange", "onListChangeStart", "onListChangeEnd"], Yl = {
    width: 0,
    height: 0,
    display: "flex",
    overflow: "hidden",
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0
  }, O0 = function() {
  }, qr = "RC_TREE_MOTION_".concat(Math.random()), Ns = {
    key: qr
  }, Sf = {
    key: qr,
    level: 0,
    index: 0,
    pos: "0",
    node: Ns,
    nodes: [Ns]
  }, Xl = {
    parent: null,
    children: [],
    pos: Sf.pos,
    data: Ns,
    title: null,
    key: qr,
    /** Hold empty list here since we do not use it */
    isStart: [],
    isEnd: []
  };
  function Zl(r, e, t, n) {
    return e === !1 || !t ? r : r.slice(0, Math.ceil(t / n) + 1);
  }
  function Jl(r) {
    var e = r.key, t = r.pos;
    return pi(e, t);
  }
  function R0(r) {
    for (var e = String(r.data.key), t = r; t.parent; )
      t = t.parent, e = "".concat(t.data.key, " > ").concat(e);
    return e;
  }
  var Ef = /* @__PURE__ */ C.forwardRef(function(r, e) {
    var t = r.prefixCls, n = r.data;
    r.selectable, r.checkable;
    var i = r.expandedKeys, o = r.selectedKeys, s = r.checkedKeys, a = r.loadedKeys, c = r.loadingKeys, l = r.halfCheckedKeys, u = r.keyEntities, d = r.disabled, f = r.dragging, h = r.dragOverNodeKey, m = r.dropPosition, g = r.motion, p = r.height, v = r.itemHeight, y = r.virtual, x = r.focusable, E = r.activeItem, b = r.focused, _ = r.tabIndex, S = r.onKeyDown, M = r.onFocus, A = r.onBlur, N = r.onActiveChange, $ = r.onListChangeStart, F = r.onListChangeEnd, L = Yt(r, T0), D = C.useRef(null), U = C.useRef(null);
    C.useImperativeHandle(e, function() {
      return {
        scrollTo: function(me) {
          D.current.scrollTo(me);
        },
        getIndentWidth: function() {
          return U.current.offsetWidth;
        }
      };
    });
    var P = C.useState(i), R = oe(P, 2), k = R[0], z = R[1], T = C.useState(n), O = oe(T, 2), B = O[0], j = O[1], V = C.useState(n), ee = oe(V, 2), Q = ee[0], q = ee[1], re = C.useState([]), ie = oe(re, 2), te = ie[0], ae = ie[1], W = C.useState(null), Oe = oe(W, 2), Z = Oe[0], Ae = Oe[1], Ee = C.useRef(n);
    Ee.current = n;
    function Be() {
      var ue = Ee.current;
      j(ue), q(ue), ae([]), Ae(null), F();
    }
    Gt(function() {
      z(i);
      var ue = _0(k, i);
      if (ue.key !== null)
        if (ue.add) {
          var me = B.findIndex(function(He) {
            var at = He.key;
            return at === ue.key;
          }), xe = Zl(Gl(B, n, ue.key), y, p, v), De = B.slice();
          De.splice(me + 1, 0, Xl), q(De), ae(xe), Ae("show");
        } else {
          var ge = n.findIndex(function(He) {
            var at = He.key;
            return at === ue.key;
          }), Pe = Zl(Gl(n, B, ue.key), y, p, v), ke = n.slice();
          ke.splice(ge + 1, 0, Xl), q(ke), ae(Pe), Ae("hide");
        }
      else B !== n && (j(n), q(n));
    }, [i, n]), C.useEffect(function() {
      f || Be();
    }, [f]);
    var Xe = g ? Q : n, je = {
      expandedKeys: i,
      selectedKeys: o,
      loadedKeys: a,
      loadingKeys: c,
      checkedKeys: s,
      halfCheckedKeys: l,
      dragOverNodeKey: h,
      dropPosition: m,
      keyEntities: u
    };
    return /* @__PURE__ */ C.createElement(C.Fragment, null, b && E && /* @__PURE__ */ C.createElement("span", {
      style: Yl,
      "aria-live": "assertive"
    }, R0(E)), /* @__PURE__ */ C.createElement("div", null, /* @__PURE__ */ C.createElement("input", {
      style: Yl,
      disabled: x === !1 || d,
      tabIndex: x !== !1 ? _ : null,
      onKeyDown: S,
      onFocus: M,
      onBlur: A,
      value: "",
      onChange: O0,
      "aria-label": "for screen reader"
    })), /* @__PURE__ */ C.createElement("div", {
      className: "".concat(t, "-treenode"),
      "aria-hidden": !0,
      style: {
        position: "absolute",
        pointerEvents: "none",
        visibility: "hidden",
        height: 0,
        overflow: "hidden",
        border: 0,
        padding: 0
      }
    }, /* @__PURE__ */ C.createElement("div", {
      className: "".concat(t, "-indent")
    }, /* @__PURE__ */ C.createElement("div", {
      ref: U,
      className: "".concat(t, "-indent-unit")
    }))), /* @__PURE__ */ C.createElement(hf, ze({}, L, {
      data: Xe,
      itemKey: Jl,
      height: p,
      fullHeight: !1,
      virtual: y,
      itemHeight: v,
      prefixCls: "".concat(t, "-list"),
      ref: D,
      onVisibleChange: function(me, xe) {
        var De = new Set(me), ge = xe.filter(function(Pe) {
          return !De.has(Pe);
        });
        ge.some(function(Pe) {
          return Jl(Pe) === qr;
        }) && Be();
      }
    }), function(ue) {
      var me = ue.pos, xe = Object.assign({}, (bf(ue.data), ue.data)), De = ue.title, ge = ue.key, Pe = ue.isStart, ke = ue.isEnd, He = pi(ge, me);
      delete xe.key, delete xe.children;
      var at = ti(He, je);
      return /* @__PURE__ */ C.createElement(M0, ze({}, xe, at, {
        title: De,
        active: !!E && ge === E.key,
        pos: me,
        data: ue.data,
        isStart: Pe,
        isEnd: ke,
        motion: g,
        motionNodes: ge === qr ? te : null,
        motionType: Z,
        onMotionStart: $,
        onMotionEnd: Be,
        treeNodeRequiredProps: je,
        onMouseMove: function() {
          N(null);
        }
      }));
    }));
  });
  Ef.displayName = "NodeList";
  var A0 = 10, nc = /* @__PURE__ */ function(r) {
    Gr(t, r);
    var e = Yr(t);
    function t() {
      var n;
      gt(this, t);
      for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return n = e.call.apply(e, [this].concat(o)), I(G(n), "destroyed", !1), I(G(n), "delayedDragEnterLogic", void 0), I(G(n), "loadingRetryTimes", {}), I(G(n), "state", {
        keyEntities: {},
        indent: null,
        selectedKeys: [],
        checkedKeys: [],
        halfCheckedKeys: [],
        loadedKeys: [],
        loadingKeys: [],
        expandedKeys: [],
        draggingNodeKey: null,
        dragChildrenKeys: [],
        // dropTargetKey is the key of abstract-drop-node
        // the abstract-drop-node is the real drop node when drag and drop
        // not the DOM drag over node
        dropTargetKey: null,
        dropPosition: null,
        // the drop position of abstract-drop-node, inside 0, top -1, bottom 1
        dropContainerKey: null,
        // the container key of abstract-drop-node if dropPosition is -1 or 1
        dropLevelOffset: null,
        // the drop level offset of abstract-drag-over-node
        dropTargetPos: null,
        // the pos of abstract-drop-node
        dropAllowed: !0,
        // if drop to abstract-drop-node is allowed
        // the abstract-drag-over-node
        // if mouse is on the bottom of top dom node or no the top of the bottom dom node
        // abstract-drag-over-node is the top node
        dragOverNodeKey: null,
        treeData: [],
        flattenNodes: [],
        focused: !1,
        activeKey: null,
        listChanging: !1,
        prevProps: null,
        fieldNames: On()
      }), I(G(n), "dragStartMousePosition", null), I(G(n), "dragNode", void 0), I(G(n), "currentMouseOverDroppableNodeKey", null), I(G(n), "listRef", /* @__PURE__ */ C.createRef()), I(G(n), "onNodeDragStart", function(a, c) {
        var l = n.state, u = l.expandedKeys, d = l.keyEntities, f = n.props.onDragStart, h = c.props.eventKey;
        n.dragNode = c, n.dragStartMousePosition = {
          x: a.clientX,
          y: a.clientY
        };
        var m = ur(u, h);
        n.setState({
          draggingNodeKey: h,
          dragChildrenKeys: b0(h, d),
          indent: n.listRef.current.getIndentWidth()
        }), n.setExpandedKeys(m), window.addEventListener("dragend", n.onWindowDragEnd), f == null || f({
          event: a,
          node: Ve(c.props)
        });
      }), I(G(n), "onNodeDragEnter", function(a, c) {
        var l = n.state, u = l.expandedKeys, d = l.keyEntities, f = l.dragChildrenKeys, h = l.flattenNodes, m = l.indent, g = n.props, p = g.onDragEnter, v = g.onExpand, y = g.allowDrop, x = g.direction, E = c.props, b = E.pos, _ = E.eventKey, S = G(n), M = S.dragNode;
        if (n.currentMouseOverDroppableNodeKey !== _ && (n.currentMouseOverDroppableNodeKey = _), !M) {
          n.resetDragState();
          return;
        }
        var A = Ul(a, M, c, m, n.dragStartMousePosition, y, h, d, u, x), N = A.dropPosition, $ = A.dropLevelOffset, F = A.dropTargetKey, L = A.dropContainerKey, D = A.dropTargetPos, U = A.dropAllowed, P = A.dragOverNodeKey;
        if (
          // don't allow drop inside its children
          f.indexOf(F) !== -1 || // don't allow drop when drop is not allowed caculated by calcDropPosition
          !U
        ) {
          n.resetDragState();
          return;
        }
        if (n.delayedDragEnterLogic || (n.delayedDragEnterLogic = {}), Object.keys(n.delayedDragEnterLogic).forEach(function(R) {
          clearTimeout(n.delayedDragEnterLogic[R]);
        }), M.props.eventKey !== c.props.eventKey && (a.persist(), n.delayedDragEnterLogic[b] = window.setTimeout(function() {
          if (n.state.draggingNodeKey !== null) {
            var R = Ye(u), k = pt(d, c.props.eventKey);
            k && (k.children || []).length && (R = Mr(u, c.props.eventKey)), "expandedKeys" in n.props || n.setExpandedKeys(R), v == null || v(R, {
              node: Ve(c.props),
              expanded: !0,
              nativeEvent: a.nativeEvent
            });
          }
        }, 800)), M.props.eventKey === F && $ === 0) {
          n.resetDragState();
          return;
        }
        n.setState({
          dragOverNodeKey: P,
          dropPosition: N,
          dropLevelOffset: $,
          dropTargetKey: F,
          dropContainerKey: L,
          dropTargetPos: D,
          dropAllowed: U
        }), p == null || p({
          event: a,
          node: Ve(c.props),
          expandedKeys: u
        });
      }), I(G(n), "onNodeDragOver", function(a, c) {
        var l = n.state, u = l.dragChildrenKeys, d = l.flattenNodes, f = l.keyEntities, h = l.expandedKeys, m = l.indent, g = n.props, p = g.onDragOver, v = g.allowDrop, y = g.direction, x = G(n), E = x.dragNode;
        if (E) {
          var b = Ul(a, E, c, m, n.dragStartMousePosition, v, d, f, h, y), _ = b.dropPosition, S = b.dropLevelOffset, M = b.dropTargetKey, A = b.dropContainerKey, N = b.dropAllowed, $ = b.dropTargetPos, F = b.dragOverNodeKey;
          u.indexOf(M) !== -1 || !N || (E.props.eventKey === M && S === 0 ? n.state.dropPosition === null && n.state.dropLevelOffset === null && n.state.dropTargetKey === null && n.state.dropContainerKey === null && n.state.dropTargetPos === null && n.state.dropAllowed === !1 && n.state.dragOverNodeKey === null || n.resetDragState() : _ === n.state.dropPosition && S === n.state.dropLevelOffset && M === n.state.dropTargetKey && A === n.state.dropContainerKey && $ === n.state.dropTargetPos && N === n.state.dropAllowed && F === n.state.dragOverNodeKey || n.setState({
            dropPosition: _,
            dropLevelOffset: S,
            dropTargetKey: M,
            dropContainerKey: A,
            dropTargetPos: $,
            dropAllowed: N,
            dragOverNodeKey: F
          }), p == null || p({
            event: a,
            node: Ve(c.props)
          }));
        }
      }), I(G(n), "onNodeDragLeave", function(a, c) {
        n.currentMouseOverDroppableNodeKey === c.props.eventKey && !a.currentTarget.contains(a.relatedTarget) && (n.resetDragState(), n.currentMouseOverDroppableNodeKey = null);
        var l = n.props.onDragLeave;
        l == null || l({
          event: a,
          node: Ve(c.props)
        });
      }), I(G(n), "onWindowDragEnd", function(a) {
        n.onNodeDragEnd(a, null, !0), window.removeEventListener("dragend", n.onWindowDragEnd);
      }), I(G(n), "onNodeDragEnd", function(a, c) {
        var l = n.props.onDragEnd;
        n.setState({
          dragOverNodeKey: null
        }), n.cleanDragState(), l == null || l({
          event: a,
          node: Ve(c.props)
        }), n.dragNode = null, window.removeEventListener("dragend", n.onWindowDragEnd);
      }), I(G(n), "onNodeDrop", function(a, c) {
        var l, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, d = n.state, f = d.dragChildrenKeys, h = d.dropPosition, m = d.dropTargetKey, g = d.dropTargetPos, p = d.dropAllowed;
        if (p) {
          var v = n.props.onDrop;
          if (n.setState({
            dragOverNodeKey: null
          }), n.cleanDragState(), m !== null) {
            var y = Y(Y({}, ti(m, n.getTreeNodeRequiredProps())), {}, {
              active: ((l = n.getActiveItem()) === null || l === void 0 ? void 0 : l.key) === m,
              data: pt(n.state.keyEntities, m).node
            }), x = f.indexOf(m) !== -1;
            Ge(!x, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
            var E = rc(g), b = {
              event: a,
              node: Ve(y),
              dragNode: n.dragNode ? Ve(n.dragNode.props) : null,
              dragNodesKeys: [n.dragNode.props.eventKey].concat(f),
              dropToGap: h !== 0,
              dropPosition: h + Number(E[E.length - 1])
            };
            u || v == null || v(b), n.dragNode = null;
          }
        }
      }), I(G(n), "cleanDragState", function() {
        var a = n.state.draggingNodeKey;
        a !== null && n.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: !0,
          dragOverNodeKey: null
        }), n.dragStartMousePosition = null, n.currentMouseOverDroppableNodeKey = null;
      }), I(G(n), "triggerExpandActionExpand", function(a, c) {
        var l = n.state, u = l.expandedKeys, d = l.flattenNodes, f = c.expanded, h = c.key, m = c.isLeaf;
        if (!(m || a.shiftKey || a.metaKey || a.ctrlKey)) {
          var g = d.filter(function(v) {
            return v.key === h;
          })[0], p = Ve(Y(Y({}, ti(h, n.getTreeNodeRequiredProps())), {}, {
            data: g.data
          }));
          n.setExpandedKeys(f ? ur(u, h) : Mr(u, h)), n.onNodeExpand(a, p);
        }
      }), I(G(n), "onNodeClick", function(a, c) {
        var l = n.props, u = l.onClick, d = l.expandAction;
        d === "click" && n.triggerExpandActionExpand(a, c), u == null || u(a, c);
      }), I(G(n), "onNodeDoubleClick", function(a, c) {
        var l = n.props, u = l.onDoubleClick, d = l.expandAction;
        d === "doubleClick" && n.triggerExpandActionExpand(a, c), u == null || u(a, c);
      }), I(G(n), "onNodeSelect", function(a, c) {
        var l = n.state.selectedKeys, u = n.state, d = u.keyEntities, f = u.fieldNames, h = n.props, m = h.onSelect, g = h.multiple, p = c.selected, v = c[f.key], y = !p;
        y ? g ? l = Mr(l, v) : l = [v] : l = ur(l, v);
        var x = l.map(function(E) {
          var b = pt(d, E);
          return b ? b.node : null;
        }).filter(function(E) {
          return E;
        });
        n.setUncontrolledState({
          selectedKeys: l
        }), m == null || m(l, {
          event: "select",
          selected: y,
          node: c,
          selectedNodes: x,
          nativeEvent: a.nativeEvent
        });
      }), I(G(n), "onNodeCheck", function(a, c, l) {
        var u = n.state, d = u.keyEntities, f = u.checkedKeys, h = u.halfCheckedKeys, m = n.props, g = m.checkStrictly, p = m.onCheck, v = c.key, y, x = {
          event: "check",
          node: c,
          checked: l,
          nativeEvent: a.nativeEvent
        };
        if (g) {
          var E = l ? Mr(f, v) : ur(f, v), b = ur(h, v);
          y = {
            checked: E,
            halfChecked: b
          }, x.checkedNodes = E.map(function($) {
            return pt(d, $);
          }).filter(function($) {
            return $;
          }).map(function($) {
            return $.node;
          }), n.setUncontrolledState({
            checkedKeys: E
          });
        } else {
          var _ = wa([].concat(Ye(f), [v]), !0, d), S = _.checkedKeys, M = _.halfCheckedKeys;
          if (!l) {
            var A = new Set(S);
            A.delete(v);
            var N = wa(Array.from(A), {
              checked: !1,
              halfCheckedKeys: M
            }, d);
            S = N.checkedKeys, M = N.halfCheckedKeys;
          }
          y = S, x.checkedNodes = [], x.checkedNodesPositions = [], x.halfCheckedKeys = M, S.forEach(function($) {
            var F = pt(d, $);
            if (F) {
              var L = F.node, D = F.pos;
              x.checkedNodes.push(L), x.checkedNodesPositions.push({
                node: L,
                pos: D
              });
            }
          }), n.setUncontrolledState({
            checkedKeys: S
          }, !1, {
            halfCheckedKeys: M
          });
        }
        p == null || p(y, x);
      }), I(G(n), "onNodeLoad", function(a) {
        var c, l = a.key, u = n.state.keyEntities, d = pt(u, l);
        if (!(d != null && (c = d.children) !== null && c !== void 0 && c.length)) {
          var f = new Promise(function(h, m) {
            n.setState(function(g) {
              var p = g.loadedKeys, v = p === void 0 ? [] : p, y = g.loadingKeys, x = y === void 0 ? [] : y, E = n.props, b = E.loadData, _ = E.onLoad;
              if (!b || v.indexOf(l) !== -1 || x.indexOf(l) !== -1)
                return null;
              var S = b(a);
              return S.then(function() {
                var M = n.state.loadedKeys, A = Mr(M, l);
                _ == null || _(A, {
                  event: "load",
                  node: a
                }), n.setUncontrolledState({
                  loadedKeys: A
                }), n.setState(function(N) {
                  return {
                    loadingKeys: ur(N.loadingKeys, l)
                  };
                }), h();
              }).catch(function(M) {
                if (n.setState(function(N) {
                  return {
                    loadingKeys: ur(N.loadingKeys, l)
                  };
                }), n.loadingRetryTimes[l] = (n.loadingRetryTimes[l] || 0) + 1, n.loadingRetryTimes[l] >= A0) {
                  var A = n.state.loadedKeys;
                  Ge(!1, "Retry for `loadData` many times but still failed. No more retry."), n.setUncontrolledState({
                    loadedKeys: Mr(A, l)
                  }), h();
                }
                m(M);
              }), {
                loadingKeys: Mr(x, l)
              };
            });
          });
          return f.catch(function() {
          }), f;
        }
      }), I(G(n), "onNodeMouseEnter", function(a, c) {
        var l = n.props.onMouseEnter;
        l == null || l({
          event: a,
          node: c
        });
      }), I(G(n), "onNodeMouseLeave", function(a, c) {
        var l = n.props.onMouseLeave;
        l == null || l({
          event: a,
          node: c
        });
      }), I(G(n), "onNodeContextMenu", function(a, c) {
        var l = n.props.onRightClick;
        l && (a.preventDefault(), l({
          event: a,
          node: c
        }));
      }), I(G(n), "onFocus", function() {
        var a = n.props.onFocus;
        n.setState({
          focused: !0
        });
        for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
          l[u] = arguments[u];
        a == null || a.apply(void 0, l);
      }), I(G(n), "onBlur", function() {
        var a = n.props.onBlur;
        n.setState({
          focused: !1
        }), n.onActiveChange(null);
        for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
          l[u] = arguments[u];
        a == null || a.apply(void 0, l);
      }), I(G(n), "getTreeNodeRequiredProps", function() {
        var a = n.state, c = a.expandedKeys, l = a.selectedKeys, u = a.loadedKeys, d = a.loadingKeys, f = a.checkedKeys, h = a.halfCheckedKeys, m = a.dragOverNodeKey, g = a.dropPosition, p = a.keyEntities;
        return {
          expandedKeys: c || [],
          selectedKeys: l || [],
          loadedKeys: u || [],
          loadingKeys: d || [],
          checkedKeys: f || [],
          halfCheckedKeys: h || [],
          dragOverNodeKey: m,
          dropPosition: g,
          keyEntities: p
        };
      }), I(G(n), "setExpandedKeys", function(a) {
        var c = n.state, l = c.treeData, u = c.fieldNames, d = Ca(l, a, u);
        n.setUncontrolledState({
          expandedKeys: a,
          flattenNodes: d
        }, !0);
      }), I(G(n), "onNodeExpand", function(a, c) {
        var l = n.state.expandedKeys, u = n.state, d = u.listChanging, f = u.fieldNames, h = n.props, m = h.onExpand, g = h.loadData, p = c.expanded, v = c[f.key];
        if (!d) {
          var y = l.indexOf(v), x = !p;
          if (Ge(p && y !== -1 || !p && y === -1, "Expand state not sync with index check"), x ? l = Mr(l, v) : l = ur(l, v), n.setExpandedKeys(l), m == null || m(l, {
            node: c,
            expanded: x,
            nativeEvent: a.nativeEvent
          }), x && g) {
            var E = n.onNodeLoad(c);
            E && E.then(function() {
              var b = Ca(n.state.treeData, l, f);
              n.setUncontrolledState({
                flattenNodes: b
              });
            }).catch(function() {
              var b = n.state.expandedKeys, _ = ur(b, v);
              n.setExpandedKeys(_);
            });
          }
        }
      }), I(G(n), "onListChangeStart", function() {
        n.setUncontrolledState({
          listChanging: !0
        });
      }), I(G(n), "onListChangeEnd", function() {
        setTimeout(function() {
          n.setUncontrolledState({
            listChanging: !1
          });
        });
      }), I(G(n), "onActiveChange", function(a) {
        var c = n.state.activeKey, l = n.props, u = l.onActiveChange, d = l.itemScrollOffset, f = d === void 0 ? 0 : d;
        c !== a && (n.setState({
          activeKey: a
        }), a !== null && n.scrollTo({
          key: a,
          offset: f
        }), u == null || u(a));
      }), I(G(n), "getActiveItem", function() {
        var a = n.state, c = a.activeKey, l = a.flattenNodes;
        return c === null ? null : l.find(function(u) {
          var d = u.key;
          return d === c;
        }) || null;
      }), I(G(n), "offsetActiveKey", function(a) {
        var c = n.state, l = c.flattenNodes, u = c.activeKey, d = l.findIndex(function(m) {
          var g = m.key;
          return g === u;
        });
        d === -1 && a < 0 && (d = l.length), d = (d + a + l.length) % l.length;
        var f = l[d];
        if (f) {
          var h = f.key;
          n.onActiveChange(h);
        } else
          n.onActiveChange(null);
      }), I(G(n), "onKeyDown", function(a) {
        var c = n.state, l = c.activeKey, u = c.expandedKeys, d = c.checkedKeys, f = c.fieldNames, h = n.props, m = h.onKeyDown, g = h.checkable, p = h.selectable;
        switch (a.which) {
          case se.UP: {
            n.offsetActiveKey(-1), a.preventDefault();
            break;
          }
          case se.DOWN: {
            n.offsetActiveKey(1), a.preventDefault();
            break;
          }
        }
        var v = n.getActiveItem();
        if (v && v.data) {
          var y = n.getTreeNodeRequiredProps(), x = v.data.isLeaf === !1 || !!(v.data[f.children] || []).length, E = Ve(Y(Y({}, ti(l, y)), {}, {
            data: v.data,
            active: !0
          }));
          switch (a.which) {
            case se.LEFT: {
              x && u.includes(l) ? n.onNodeExpand({}, E) : v.parent && n.onActiveChange(v.parent.key), a.preventDefault();
              break;
            }
            case se.RIGHT: {
              x && !u.includes(l) ? n.onNodeExpand({}, E) : v.children && v.children.length && n.onActiveChange(v.children[0].key), a.preventDefault();
              break;
            }
            case se.ENTER:
            case se.SPACE: {
              g && !E.disabled && E.checkable !== !1 && !E.disableCheckbox ? n.onNodeCheck({}, E, !d.includes(l)) : !g && p && !E.disabled && E.selectable !== !1 && n.onNodeSelect({}, E);
              break;
            }
          }
        }
        m == null || m(a);
      }), I(G(n), "setUncontrolledState", function(a) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!n.destroyed) {
          var u = !1, d = !0, f = {};
          Object.keys(a).forEach(function(h) {
            if (h in n.props) {
              d = !1;
              return;
            }
            u = !0, f[h] = a[h];
          }), u && (!c || d) && n.setState(Y(Y({}, f), l));
        }
      }), I(G(n), "scrollTo", function(a) {
        n.listRef.current.scrollTo(a);
      }), n;
    }
    return vt(t, [{
      key: "componentDidMount",
      value: function() {
        this.destroyed = !1, this.onUpdated();
      }
    }, {
      key: "componentDidUpdate",
      value: function() {
        this.onUpdated();
      }
    }, {
      key: "onUpdated",
      value: function() {
        var i = this.props, o = i.activeKey, s = i.itemScrollOffset, a = s === void 0 ? 0 : s;
        o !== void 0 && o !== this.state.activeKey && (this.setState({
          activeKey: o
        }), o !== null && this.scrollTo({
          key: o,
          offset: a
        }));
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        window.removeEventListener("dragend", this.onWindowDragEnd), this.destroyed = !0;
      }
    }, {
      key: "resetDragState",
      value: function() {
        this.setState({
          dragOverNodeKey: null,
          dropPosition: null,
          dropLevelOffset: null,
          dropTargetKey: null,
          dropContainerKey: null,
          dropTargetPos: null,
          dropAllowed: !1
        });
      }
    }, {
      key: "render",
      value: function() {
        var i = this.state, o = i.focused, s = i.flattenNodes, a = i.keyEntities, c = i.draggingNodeKey, l = i.activeKey, u = i.dropLevelOffset, d = i.dropContainerKey, f = i.dropTargetKey, h = i.dropPosition, m = i.dragOverNodeKey, g = i.indent, p = this.props, v = p.prefixCls, y = p.className, x = p.style, E = p.showLine, b = p.focusable, _ = p.tabIndex, S = _ === void 0 ? 0 : _, M = p.selectable, A = p.showIcon, N = p.icon, $ = p.switcherIcon, F = p.draggable, L = p.checkable, D = p.checkStrictly, U = p.disabled, P = p.motion, R = p.loadData, k = p.filterTreeNode, z = p.height, T = p.itemHeight, O = p.virtual, B = p.titleRender, j = p.dropIndicatorRender, V = p.onContextMenu, ee = p.onScroll, Q = p.direction, q = p.rootClassName, re = p.rootStyle, ie = ef(this.props, {
          aria: !0,
          data: !0
        }), te;
        return F && (Se(F) === "object" ? te = F : typeof F == "function" ? te = {
          nodeDraggable: F
        } : te = {}), /* @__PURE__ */ C.createElement(tc.Provider, {
          value: {
            prefixCls: v,
            selectable: M,
            showIcon: A,
            icon: N,
            switcherIcon: $,
            draggable: te,
            draggingNodeKey: c,
            checkable: L,
            checkStrictly: D,
            disabled: U,
            keyEntities: a,
            dropLevelOffset: u,
            dropContainerKey: d,
            dropTargetKey: f,
            dropPosition: h,
            dragOverNodeKey: m,
            indent: g,
            direction: Q,
            dropIndicatorRender: j,
            loadData: R,
            filterTreeNode: k,
            titleRender: B,
            onNodeClick: this.onNodeClick,
            onNodeDoubleClick: this.onNodeDoubleClick,
            onNodeExpand: this.onNodeExpand,
            onNodeSelect: this.onNodeSelect,
            onNodeCheck: this.onNodeCheck,
            onNodeLoad: this.onNodeLoad,
            onNodeMouseEnter: this.onNodeMouseEnter,
            onNodeMouseLeave: this.onNodeMouseLeave,
            onNodeContextMenu: this.onNodeContextMenu,
            onNodeDragStart: this.onNodeDragStart,
            onNodeDragEnter: this.onNodeDragEnter,
            onNodeDragOver: this.onNodeDragOver,
            onNodeDragLeave: this.onNodeDragLeave,
            onNodeDragEnd: this.onNodeDragEnd,
            onNodeDrop: this.onNodeDrop
          }
        }, /* @__PURE__ */ C.createElement("div", {
          role: "tree",
          className: Re(v, y, q, I(I(I({}, "".concat(v, "-show-line"), E), "".concat(v, "-focused"), o), "".concat(v, "-active-focused"), l !== null)),
          style: re
        }, /* @__PURE__ */ C.createElement(Ef, ze({
          ref: this.listRef,
          prefixCls: v,
          style: x,
          data: s,
          disabled: U,
          selectable: M,
          checkable: !!L,
          motion: P,
          dragging: c !== null,
          height: z,
          itemHeight: T,
          virtual: O,
          focusable: b,
          focused: o,
          tabIndex: S,
          activeItem: this.getActiveItem(),
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onKeyDown: this.onKeyDown,
          onActiveChange: this.onActiveChange,
          onListChangeStart: this.onListChangeStart,
          onListChangeEnd: this.onListChangeEnd,
          onContextMenu: V,
          onScroll: ee
        }, this.getTreeNodeRequiredProps(), ie))));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(i, o) {
        var s = o.prevProps, a = {
          prevProps: i
        };
        function c(_) {
          return !s && _ in i || s && s[_] !== i[_];
        }
        var l, u = o.fieldNames;
        if (c("fieldNames") && (u = On(i.fieldNames), a.fieldNames = u), c("treeData") ? l = i.treeData : c("children") && (Ge(!1, "`children` of Tree is deprecated. Please use `treeData` instead."), l = mf(i.children)), l) {
          a.treeData = l;
          var d = gf(l, {
            fieldNames: u
          });
          a.keyEntities = Y(I({}, qr, Sf), d.keyEntities), process.env.NODE_ENV !== "production" && c0(l, u);
        }
        var f = a.keyEntities || o.keyEntities;
        if (c("expandedKeys") || s && c("autoExpandParent"))
          a.expandedKeys = i.autoExpandParent || !s && i.defaultExpandParent ? Ps(i.expandedKeys, f) : i.expandedKeys;
        else if (!s && i.defaultExpandAll) {
          var h = Y({}, f);
          delete h[qr], a.expandedKeys = Object.keys(h).map(function(_) {
            return h[_].key;
          });
        } else !s && i.defaultExpandedKeys && (a.expandedKeys = i.autoExpandParent || i.defaultExpandParent ? Ps(i.defaultExpandedKeys, f) : i.defaultExpandedKeys);
        if (a.expandedKeys || delete a.expandedKeys, l || a.expandedKeys) {
          var m = Ca(l || o.treeData, a.expandedKeys || o.expandedKeys, u);
          a.flattenNodes = m;
        }
        if (i.selectable && (c("selectedKeys") ? a.selectedKeys = ql(i.selectedKeys, i) : !s && i.defaultSelectedKeys && (a.selectedKeys = ql(i.defaultSelectedKeys, i))), i.checkable) {
          var g;
          if (c("checkedKeys") ? g = Ma(i.checkedKeys) || {} : !s && i.defaultCheckedKeys ? g = Ma(i.defaultCheckedKeys) || {} : l && (g = Ma(i.checkedKeys) || {
            checkedKeys: o.checkedKeys,
            halfCheckedKeys: o.halfCheckedKeys
          }), g) {
            var p = g, v = p.checkedKeys, y = v === void 0 ? [] : v, x = p.halfCheckedKeys, E = x === void 0 ? [] : x;
            if (!i.checkStrictly) {
              var b = wa(y, !0, f);
              y = b.checkedKeys, E = b.halfCheckedKeys;
            }
            a.checkedKeys = y, a.halfCheckedKeys = E;
          }
        }
        return c("loadedKeys") && (a.loadedKeys = i.loadedKeys), a;
      }
    }]), t;
  }(C.Component);
  I(nc, "defaultProps", {
    prefixCls: "rc-tree",
    showLine: !1,
    showIcon: !0,
    selectable: !0,
    multiple: !1,
    checkable: !1,
    disabled: !1,
    checkStrictly: !1,
    draggable: !1,
    defaultExpandParent: !0,
    autoExpandParent: !1,
    defaultExpandAll: !1,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: E0,
    allowDrop: function() {
      return !0;
    },
    expandAction: !1
  });
  I(nc, "TreeNode", Rn);
  var P0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z" } }] }, name: "file", theme: "outlined" }, N0 = function(e, t) {
    return /* @__PURE__ */ C.createElement(Vt, ze({}, e, {
      ref: t,
      icon: P0
    }));
  }, ic = /* @__PURE__ */ C.forwardRef(N0);
  process.env.NODE_ENV !== "production" && (ic.displayName = "FileOutlined");
  var D0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z" } }] }, name: "folder-open", theme: "outlined" }, k0 = function(e, t) {
    return /* @__PURE__ */ C.createElement(Vt, ze({}, e, {
      ref: t,
      icon: D0
    }));
  }, Cf = /* @__PURE__ */ C.forwardRef(k0);
  process.env.NODE_ENV !== "production" && (Cf.displayName = "FolderOpenOutlined");
  var I0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z" } }] }, name: "folder", theme: "outlined" }, $0 = function(e, t) {
    return /* @__PURE__ */ C.createElement(Vt, ze({}, e, {
      ref: t,
      icon: I0
    }));
  }, wf = /* @__PURE__ */ C.forwardRef($0);
  process.env.NODE_ENV !== "production" && (wf.displayName = "FolderOutlined");
  var z0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z" } }] }, name: "holder", theme: "outlined" }, L0 = function(e, t) {
    return /* @__PURE__ */ C.createElement(Vt, ze({}, e, {
      ref: t,
      icon: z0
    }));
  }, Mf = /* @__PURE__ */ C.forwardRef(L0);
  process.env.NODE_ENV !== "production" && (Mf.displayName = "HolderOutlined");
  const F0 = new jm("ant-tree-node-fx-do-not-use", {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  }), B0 = (r, e) => ({
    [`.${r}-switcher-icon`]: {
      display: "inline-block",
      fontSize: 10,
      verticalAlign: "baseline",
      svg: {
        transition: `transform ${e.motionDurationSlow}`
      }
    }
  }), j0 = (r, e) => ({
    [`.${r}-drop-indicator`]: {
      position: "absolute",
      // it should displayed over the following node
      zIndex: 1,
      height: 2,
      backgroundColor: e.colorPrimary,
      borderRadius: 1,
      pointerEvents: "none",
      "&:after": {
        position: "absolute",
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: "transparent",
        border: `${qe(e.lineWidthBold)} solid ${e.colorPrimary}`,
        borderRadius: "50%",
        content: '""'
      }
    }
  }), H0 = (r, e) => {
    const {
      treeCls: t,
      treeNodeCls: n,
      treeNodePadding: i,
      titleHeight: o,
      nodeSelectedBg: s,
      nodeHoverBg: a
    } = e, c = e.paddingXS;
    return {
      [t]: Object.assign(Object.assign({}, no(e)), {
        background: e.colorBgContainer,
        borderRadius: e.borderRadius,
        transition: `background-color ${e.motionDurationSlow}`,
        [`&${t}-rtl`]: {
          // >>> Switcher
          [`${t}-switcher`]: {
            "&_close": {
              [`${t}-switcher-icon`]: {
                svg: {
                  transform: "rotate(90deg)"
                }
              }
            }
          }
        },
        [`&-focused:not(:hover):not(${t}-active-focused)`]: Object.assign({}, Gs(e)),
        // =================== Virtual List ===================
        [`${t}-list-holder-inner`]: {
          alignItems: "flex-start"
        },
        [`&${t}-block-node`]: {
          [`${t}-list-holder-inner`]: {
            alignItems: "stretch",
            // >>> Title
            [`${t}-node-content-wrapper`]: {
              flex: "auto"
            },
            // >>> Drag
            [`${n}.dragging`]: {
              position: "relative",
              "&:after": {
                position: "absolute",
                top: 0,
                insetInlineEnd: 0,
                bottom: i,
                insetInlineStart: 0,
                border: `1px solid ${e.colorPrimary}`,
                opacity: 0,
                animationName: F0,
                animationDuration: e.motionDurationSlow,
                animationPlayState: "running",
                animationFillMode: "forwards",
                content: '""',
                pointerEvents: "none"
              }
            }
          }
        },
        // ===================== TreeNode =====================
        [`${n}`]: {
          display: "flex",
          alignItems: "flex-start",
          padding: `0 0 ${qe(i)} 0`,
          outline: "none",
          "&-rtl": {
            direction: "rtl"
          },
          // Disabled
          "&-disabled": {
            // >>> Title
            [`${t}-node-content-wrapper`]: {
              color: e.colorTextDisabled,
              cursor: "not-allowed",
              "&:hover": {
                background: "transparent"
              }
            }
          },
          [`&-active ${t}-node-content-wrapper`]: {
            background: e.controlItemBgHover
          },
          [`&:not(${n}-disabled).filter-node ${t}-title`]: {
            color: "inherit",
            fontWeight: 500
          },
          "&-draggable": {
            cursor: "grab",
            [`${t}-draggable-icon`]: {
              // https://github.com/ant-design/ant-design/issues/41915
              flexShrink: 0,
              width: o,
              lineHeight: `${qe(o)}`,
              textAlign: "center",
              visibility: "visible",
              opacity: 0.2,
              transition: `opacity ${e.motionDurationSlow}`,
              [`${n}:hover &`]: {
                opacity: 0.45
              }
            },
            [`&${n}-disabled`]: {
              [`${t}-draggable-icon`]: {
                visibility: "hidden"
              }
            }
          }
        },
        // >>> Indent
        [`${t}-indent`]: {
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          userSelect: "none",
          "&-unit": {
            display: "inline-block",
            width: o
          }
        },
        // >>> Drag Handler
        [`${t}-draggable-icon`]: {
          visibility: "hidden"
        },
        // >>> Switcher
        [`${t}-switcher`]: Object.assign(Object.assign({}, B0(r, e)), {
          position: "relative",
          flex: "none",
          alignSelf: "stretch",
          width: o,
          margin: 0,
          lineHeight: `${qe(o)}`,
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
          transition: `all ${e.motionDurationSlow}`,
          borderRadius: e.borderRadius,
          "&-noop": {
            cursor: "unset"
          },
          [`&:not(${t}-switcher-noop):hover`]: {
            backgroundColor: e.colorBgTextHover
          },
          "&_close": {
            [`${t}-switcher-icon`]: {
              svg: {
                transform: "rotate(-90deg)"
              }
            }
          },
          "&-loading-icon": {
            color: e.colorPrimary
          },
          "&-leaf-line": {
            position: "relative",
            zIndex: 1,
            display: "inline-block",
            width: "100%",
            height: "100%",
            // https://github.com/ant-design/ant-design/issues/31884
            "&:before": {
              position: "absolute",
              top: 0,
              insetInlineEnd: e.calc(o).div(2).equal(),
              bottom: e.calc(i).mul(-1).equal(),
              marginInlineStart: -1,
              borderInlineEnd: `1px solid ${e.colorBorder}`,
              content: '""'
            },
            "&:after": {
              position: "absolute",
              width: e.calc(e.calc(o).div(2).equal()).mul(0.8).equal(),
              height: e.calc(o).div(2).equal(),
              borderBottom: `1px solid ${e.colorBorder}`,
              content: '""'
            }
          }
        }),
        // >>> Checkbox
        [`${t}-checkbox`]: {
          top: "initial",
          marginInlineEnd: c,
          alignSelf: "flex-start",
          marginTop: e.marginXXS
        },
        // >>> Title
        // add `${treeCls}-checkbox + span` to cover checkbox `${checkboxCls} + span`
        [`${t}-node-content-wrapper, ${t}-checkbox + span`]: {
          position: "relative",
          zIndex: "auto",
          minHeight: o,
          margin: 0,
          padding: `0 ${qe(e.calc(e.paddingXS).div(2).equal())}`,
          color: "inherit",
          lineHeight: `${qe(o)}`,
          background: "transparent",
          borderRadius: e.borderRadius,
          cursor: "pointer",
          transition: `all ${e.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
          "&:hover": {
            backgroundColor: a
          },
          [`&${t}-node-selected`]: {
            backgroundColor: s
          },
          // Icon
          [`${t}-iconEle`]: {
            display: "inline-block",
            width: o,
            height: o,
            lineHeight: `${qe(o)}`,
            textAlign: "center",
            verticalAlign: "top",
            "&:empty": {
              display: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/28217
        [`${t}-unselectable ${t}-node-content-wrapper:hover`]: {
          backgroundColor: "transparent"
        },
        // ==================== Draggable =====================
        [`${t}-node-content-wrapper`]: Object.assign({
          lineHeight: `${qe(o)}`,
          userSelect: "none"
        }, j0(r, e)),
        [`${n}.drop-container`]: {
          "> [draggable]": {
            boxShadow: `0 0 0 2px ${e.colorPrimary}`
          }
        },
        // ==================== Show Line =====================
        "&-show-line": {
          // ================ Indent lines ================
          [`${t}-indent`]: {
            "&-unit": {
              position: "relative",
              height: "100%",
              "&:before": {
                position: "absolute",
                top: 0,
                insetInlineEnd: e.calc(o).div(2).equal(),
                bottom: e.calc(i).mul(-1).equal(),
                borderInlineEnd: `1px solid ${e.colorBorder}`,
                content: '""'
              },
              "&-end": {
                "&:before": {
                  display: "none"
                }
              }
            }
          },
          // ============== Cover Background ==============
          [`${t}-switcher`]: {
            background: "transparent",
            "&-line-icon": {
              // https://github.com/ant-design/ant-design/issues/32813
              verticalAlign: "-0.15em"
            }
          }
        },
        [`${n}-leaf-last`]: {
          [`${t}-switcher`]: {
            "&-leaf-line": {
              "&:before": {
                top: "auto !important",
                bottom: "auto !important",
                height: `${qe(e.calc(o).div(2).equal())} !important`
              }
            }
          }
        }
      })
    };
  }, K0 = (r) => {
    const {
      treeCls: e,
      treeNodeCls: t,
      treeNodePadding: n,
      directoryNodeSelectedBg: i,
      directoryNodeSelectedColor: o
    } = r;
    return {
      [`${e}${e}-directory`]: {
        // ================== TreeNode ==================
        [t]: {
          position: "relative",
          // Hover color
          "&:before": {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: n,
            insetInlineStart: 0,
            transition: `background-color ${r.motionDurationMid}`,
            content: '""',
            pointerEvents: "none"
          },
          "&:hover": {
            "&:before": {
              background: r.controlItemBgHover
            }
          },
          // Elements
          "> *": {
            zIndex: 1
          },
          // >>> Switcher
          [`${e}-switcher`]: {
            transition: `color ${r.motionDurationMid}`
          },
          // >>> Title
          [`${e}-node-content-wrapper`]: {
            borderRadius: 0,
            userSelect: "none",
            "&:hover": {
              background: "transparent"
            },
            [`&${e}-node-selected`]: {
              color: o,
              background: "transparent"
            }
          },
          // ============= Selected =============
          "&-selected": {
            "\n            &:hover::before,\n            &::before\n          ": {
              background: i
            },
            // >>> Switcher
            [`${e}-switcher`]: {
              color: o
            },
            // >>> Title
            [`${e}-node-content-wrapper`]: {
              color: o,
              background: "transparent"
            }
          }
        }
      }
    };
  }, W0 = (r, e) => {
    const t = `.${r}`, n = `${t}-treenode`, i = e.calc(e.paddingXS).div(2).equal(), o = Ir(e, {
      treeCls: t,
      treeNodeCls: n,
      treeNodePadding: i
    });
    return [
      // Basic
      H0(r, o),
      // Directory
      K0(o)
    ];
  }, V0 = (r) => {
    const {
      controlHeightSM: e
    } = r;
    return {
      titleHeight: e,
      nodeHoverBg: r.controlItemBgHover,
      nodeSelectedBg: r.controlItemBgActive
    };
  }, U0 = (r) => {
    const {
      colorTextLightSolid: e,
      colorPrimary: t
    } = r;
    return Object.assign(Object.assign({}, V0(r)), {
      directoryNodeSelectedColor: e,
      directoryNodeSelectedBg: t
    });
  }, q0 = Xs("Tree", (r, e) => {
    let {
      prefixCls: t
    } = e;
    return [{
      [r.componentCls]: yf(`${t}-checkbox`, r)
    }, W0(t, r), Wy(r)];
  }, U0), Ql = 4;
  function G0(r) {
    const {
      dropPosition: e,
      dropLevelOffset: t,
      prefixCls: n,
      indent: i,
      direction: o = "ltr"
    } = r, s = o === "ltr" ? "left" : "right", a = o === "ltr" ? "right" : "left", c = {
      [s]: -t * i + Ql,
      [a]: 0
    };
    switch (e) {
      case -1:
        c.top = -3;
        break;
      case 1:
        c.bottom = -3;
        break;
      default:
        c.bottom = -3, c[s] = i + Ql;
        break;
    }
    return /* @__PURE__ */ de.createElement("div", {
      style: c,
      className: `${n}-drop-indicator`
    });
  }
  var Y0 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" } }] }, name: "caret-down", theme: "filled" }, X0 = function(e, t) {
    return /* @__PURE__ */ C.createElement(Vt, ze({}, e, {
      ref: t,
      icon: Y0
    }));
  }, _f = /* @__PURE__ */ C.forwardRef(X0);
  process.env.NODE_ENV !== "production" && (_f.displayName = "CaretDownFilled");
  var Z0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "minus-square", theme: "outlined" }, J0 = function(e, t) {
    return /* @__PURE__ */ C.createElement(Vt, ze({}, e, {
      ref: t,
      icon: Z0
    }));
  }, Tf = /* @__PURE__ */ C.forwardRef(J0);
  process.env.NODE_ENV !== "production" && (Tf.displayName = "MinusSquareOutlined");
  var Q0 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z" } }, { tag: "path", attrs: { d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, name: "plus-square", theme: "outlined" }, eb = function(e, t) {
    return /* @__PURE__ */ C.createElement(Vt, ze({}, e, {
      ref: t,
      icon: Q0
    }));
  }, Of = /* @__PURE__ */ C.forwardRef(eb);
  process.env.NODE_ENV !== "production" && (Of.displayName = "PlusSquareOutlined");
  const tb = (r) => {
    const {
      prefixCls: e,
      switcherIcon: t,
      treeNodeProps: n,
      showLine: i
    } = r, {
      isLeaf: o,
      expanded: s,
      loading: a
    } = n;
    if (a)
      return /* @__PURE__ */ C.createElement(Js, {
        className: `${e}-switcher-loading-icon`
      });
    let c;
    if (i && typeof i == "object" && (c = i.showLeafIcon), o) {
      if (!i)
        return null;
      if (typeof c != "boolean" && c) {
        const d = typeof c == "function" ? c(n) : c, f = `${e}-switcher-line-custom-icon`;
        return /* @__PURE__ */ C.isValidElement(d) ? mo(d, {
          className: Re(d.props.className || "", f)
        }) : d;
      }
      return c ? /* @__PURE__ */ C.createElement(ic, {
        className: `${e}-switcher-line-icon`
      }) : /* @__PURE__ */ C.createElement("span", {
        className: `${e}-switcher-leaf-line`
      });
    }
    const l = `${e}-switcher-icon`, u = typeof t == "function" ? t(n) : t;
    return /* @__PURE__ */ C.isValidElement(u) ? mo(u, {
      className: Re(u.props.className || "", l)
    }) : u !== void 0 ? u : i ? s ? /* @__PURE__ */ C.createElement(Tf, {
      className: `${e}-switcher-line-icon`
    }) : /* @__PURE__ */ C.createElement(Of, {
      className: `${e}-switcher-line-icon`
    }) : /* @__PURE__ */ C.createElement(_f, {
      className: l
    });
  }, oc = /* @__PURE__ */ de.forwardRef((r, e) => {
    var t;
    const {
      getPrefixCls: n,
      direction: i,
      virtual: o,
      tree: s
    } = de.useContext(Xt), {
      prefixCls: a,
      className: c,
      showIcon: l = !1,
      showLine: u,
      switcherIcon: d,
      blockNode: f = !1,
      children: h,
      checkable: m = !1,
      selectable: g = !0,
      draggable: p,
      motion: v,
      style: y
    } = r, x = n("tree", a), E = n(), b = v ?? Object.assign(Object.assign({}, ty(E)), {
      motionAppear: !1
    }), _ = Object.assign(Object.assign({}, r), {
      checkable: m,
      selectable: g,
      showIcon: l,
      motion: b,
      blockNode: f,
      showLine: !!u,
      dropIndicatorRender: G0
    }), [S, M, A] = q0(x), [, N] = Dr(), $ = N.paddingXS / 2 + (((t = N.Tree) === null || t === void 0 ? void 0 : t.titleHeight) || N.controlHeightSM), F = de.useMemo(() => {
      if (!p)
        return !1;
      let D = {};
      switch (typeof p) {
        case "function":
          D.nodeDraggable = p;
          break;
        case "object":
          D = Object.assign({}, p);
          break;
      }
      return D.icon !== !1 && (D.icon = D.icon || /* @__PURE__ */ de.createElement(Mf, null)), D;
    }, [p]), L = (D) => /* @__PURE__ */ de.createElement(tb, {
      prefixCls: x,
      switcherIcon: d,
      treeNodeProps: D,
      showLine: u
    });
    return S(
      // @ts-ignore
      /* @__PURE__ */ de.createElement(nc, Object.assign({
        itemHeight: $,
        ref: e,
        virtual: o
      }, _, {
        // newProps may contain style so declare style below it
        style: Object.assign(Object.assign({}, s == null ? void 0 : s.style), y),
        prefixCls: x,
        className: Re({
          [`${x}-icon-hide`]: !l,
          [`${x}-block-node`]: f,
          [`${x}-unselectable`]: !g,
          [`${x}-rtl`]: i === "rtl"
        }, s == null ? void 0 : s.className, c, M, A),
        direction: i,
        checkable: m && /* @__PURE__ */ de.createElement("span", {
          className: `${x}-checkbox-inner`
        }),
        selectable: g,
        switcherIcon: L,
        draggable: F
      }), h)
    );
  });
  process.env.NODE_ENV !== "production" && (oc.displayName = "Tree");
  const eu = 0, _a = 1, tu = 2;
  function ac(r, e, t) {
    const {
      key: n,
      children: i
    } = t;
    function o(s) {
      const a = s[n], c = s[i];
      e(a, s) !== !1 && ac(c || [], e, t);
    }
    r.forEach(o);
  }
  function rb(r) {
    let {
      treeData: e,
      expandedKeys: t,
      startKey: n,
      endKey: i,
      fieldNames: o
    } = r;
    const s = [];
    let a = eu;
    if (n && n === i)
      return [n];
    if (!n || !i)
      return [];
    function c(l) {
      return l === n || l === i;
    }
    return ac(e, (l) => {
      if (a === tu)
        return !1;
      if (c(l)) {
        if (s.push(l), a === eu)
          a = _a;
        else if (a === _a)
          return a = tu, !1;
      } else a === _a && s.push(l);
      return t.includes(l);
    }, On(o)), s;
  }
  function Ta(r, e, t) {
    const n = Ye(e), i = [];
    return ac(r, (o, s) => {
      const a = n.indexOf(o);
      return a !== -1 && (i.push(s), n.splice(a, 1)), !!n.length;
    }, On(t)), i;
  }
  var ru = function(r, e) {
    var t = {};
    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
    return t;
  };
  function nb(r) {
    const {
      isLeaf: e,
      expanded: t
    } = r;
    return e ? /* @__PURE__ */ C.createElement(ic, null) : t ? /* @__PURE__ */ C.createElement(Cf, null) : /* @__PURE__ */ C.createElement(wf, null);
  }
  function nu(r) {
    let {
      treeData: e,
      children: t
    } = r;
    return e || mf(t);
  }
  const ib = (r, e) => {
    var {
      defaultExpandAll: t,
      defaultExpandParent: n,
      defaultExpandedKeys: i
    } = r, o = ru(r, ["defaultExpandAll", "defaultExpandParent", "defaultExpandedKeys"]);
    const s = C.useRef(), a = C.useRef(), c = () => {
      const {
        keyEntities: M
      } = gf(nu(o));
      let A;
      return t ? A = Object.keys(M) : n ? A = Ps(o.expandedKeys || i || [], M) : A = o.expandedKeys || i || [], A;
    }, [l, u] = C.useState(o.selectedKeys || o.defaultSelectedKeys || []), [d, f] = C.useState(() => c());
    C.useEffect(() => {
      "selectedKeys" in o && u(o.selectedKeys);
    }, [o.selectedKeys]), C.useEffect(() => {
      "expandedKeys" in o && f(o.expandedKeys);
    }, [o.expandedKeys]);
    const h = (M, A) => {
      var N;
      return "expandedKeys" in o || f(M), (N = o.onExpand) === null || N === void 0 ? void 0 : N.call(o, M, A);
    }, m = (M, A) => {
      var N;
      const {
        multiple: $,
        fieldNames: F
      } = o, {
        node: L,
        nativeEvent: D
      } = A, {
        key: U = ""
      } = L, P = nu(o), R = Object.assign(Object.assign({}, A), {
        selected: !0
      }), k = (D == null ? void 0 : D.ctrlKey) || (D == null ? void 0 : D.metaKey), z = D == null ? void 0 : D.shiftKey;
      let T;
      $ && k ? (T = M, s.current = U, a.current = T, R.selectedNodes = Ta(P, T, F)) : $ && z ? (T = Array.from(new Set([].concat(Ye(a.current || []), Ye(rb({
        treeData: P,
        expandedKeys: d,
        startKey: U,
        endKey: s.current,
        fieldNames: F
      }))))), R.selectedNodes = Ta(P, T, F)) : (T = [U], s.current = U, a.current = T, R.selectedNodes = Ta(P, T, F)), (N = o.onSelect) === null || N === void 0 || N.call(o, T, R), "selectedKeys" in o || u(T);
    }, {
      getPrefixCls: g,
      direction: p
    } = C.useContext(Xt), {
      prefixCls: v,
      className: y,
      showIcon: x = !0,
      expandAction: E = "click"
    } = o, b = ru(o, ["prefixCls", "className", "showIcon", "expandAction"]), _ = g("tree", v), S = Re(`${_}-directory`, {
      [`${_}-directory-rtl`]: p === "rtl"
    }, y);
    return /* @__PURE__ */ C.createElement(oc, Object.assign({
      icon: nb,
      ref: e,
      blockNode: !0
    }, b, {
      showIcon: x,
      expandAction: E,
      prefixCls: _,
      className: S,
      expandedKeys: d,
      selectedKeys: l,
      onSelect: m,
      onExpand: h
    }));
  }, Rf = /* @__PURE__ */ C.forwardRef(ib);
  process.env.NODE_ENV !== "production" && (Rf.displayName = "DirectoryTree");
  const sc = oc;
  sc.DirectoryTree = Rf;
  sc.TreeNode = Rn;
  var Ds = { exports: {} }, qi = { exports: {} }, _e = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var iu;
  function ob() {
    if (iu) return _e;
    iu = 1;
    var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, i = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, s = r ? Symbol.for("react.provider") : 60109, a = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, u = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, f = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, m = r ? Symbol.for("react.lazy") : 60116, g = r ? Symbol.for("react.block") : 60121, p = r ? Symbol.for("react.fundamental") : 60117, v = r ? Symbol.for("react.responder") : 60118, y = r ? Symbol.for("react.scope") : 60119;
    function x(b) {
      if (typeof b == "object" && b !== null) {
        var _ = b.$$typeof;
        switch (_) {
          case e:
            switch (b = b.type, b) {
              case c:
              case l:
              case n:
              case o:
              case i:
              case d:
                return b;
              default:
                switch (b = b && b.$$typeof, b) {
                  case a:
                  case u:
                  case m:
                  case h:
                  case s:
                    return b;
                  default:
                    return _;
                }
            }
          case t:
            return _;
        }
      }
    }
    function E(b) {
      return x(b) === l;
    }
    return _e.AsyncMode = c, _e.ConcurrentMode = l, _e.ContextConsumer = a, _e.ContextProvider = s, _e.Element = e, _e.ForwardRef = u, _e.Fragment = n, _e.Lazy = m, _e.Memo = h, _e.Portal = t, _e.Profiler = o, _e.StrictMode = i, _e.Suspense = d, _e.isAsyncMode = function(b) {
      return E(b) || x(b) === c;
    }, _e.isConcurrentMode = E, _e.isContextConsumer = function(b) {
      return x(b) === a;
    }, _e.isContextProvider = function(b) {
      return x(b) === s;
    }, _e.isElement = function(b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }, _e.isForwardRef = function(b) {
      return x(b) === u;
    }, _e.isFragment = function(b) {
      return x(b) === n;
    }, _e.isLazy = function(b) {
      return x(b) === m;
    }, _e.isMemo = function(b) {
      return x(b) === h;
    }, _e.isPortal = function(b) {
      return x(b) === t;
    }, _e.isProfiler = function(b) {
      return x(b) === o;
    }, _e.isStrictMode = function(b) {
      return x(b) === i;
    }, _e.isSuspense = function(b) {
      return x(b) === d;
    }, _e.isValidElementType = function(b) {
      return typeof b == "string" || typeof b == "function" || b === n || b === l || b === o || b === i || b === d || b === f || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === h || b.$$typeof === s || b.$$typeof === a || b.$$typeof === u || b.$$typeof === p || b.$$typeof === v || b.$$typeof === y || b.$$typeof === g);
    }, _e.typeOf = x, _e;
  }
  var Te = {};
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var ou;
  function ab() {
    return ou || (ou = 1, process.env.NODE_ENV !== "production" && function() {
      var r = typeof Symbol == "function" && Symbol.for, e = r ? Symbol.for("react.element") : 60103, t = r ? Symbol.for("react.portal") : 60106, n = r ? Symbol.for("react.fragment") : 60107, i = r ? Symbol.for("react.strict_mode") : 60108, o = r ? Symbol.for("react.profiler") : 60114, s = r ? Symbol.for("react.provider") : 60109, a = r ? Symbol.for("react.context") : 60110, c = r ? Symbol.for("react.async_mode") : 60111, l = r ? Symbol.for("react.concurrent_mode") : 60111, u = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, f = r ? Symbol.for("react.suspense_list") : 60120, h = r ? Symbol.for("react.memo") : 60115, m = r ? Symbol.for("react.lazy") : 60116, g = r ? Symbol.for("react.block") : 60121, p = r ? Symbol.for("react.fundamental") : 60117, v = r ? Symbol.for("react.responder") : 60118, y = r ? Symbol.for("react.scope") : 60119;
      function x(W) {
        return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        W === n || W === l || W === o || W === i || W === d || W === f || typeof W == "object" && W !== null && (W.$$typeof === m || W.$$typeof === h || W.$$typeof === s || W.$$typeof === a || W.$$typeof === u || W.$$typeof === p || W.$$typeof === v || W.$$typeof === y || W.$$typeof === g);
      }
      function E(W) {
        if (typeof W == "object" && W !== null) {
          var Oe = W.$$typeof;
          switch (Oe) {
            case e:
              var Z = W.type;
              switch (Z) {
                case c:
                case l:
                case n:
                case o:
                case i:
                case d:
                  return Z;
                default:
                  var Ae = Z && Z.$$typeof;
                  switch (Ae) {
                    case a:
                    case u:
                    case m:
                    case h:
                    case s:
                      return Ae;
                    default:
                      return Oe;
                  }
              }
            case t:
              return Oe;
          }
        }
      }
      var b = c, _ = l, S = a, M = s, A = e, N = u, $ = n, F = m, L = h, D = t, U = o, P = i, R = d, k = !1;
      function z(W) {
        return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(W) || E(W) === c;
      }
      function T(W) {
        return E(W) === l;
      }
      function O(W) {
        return E(W) === a;
      }
      function B(W) {
        return E(W) === s;
      }
      function j(W) {
        return typeof W == "object" && W !== null && W.$$typeof === e;
      }
      function V(W) {
        return E(W) === u;
      }
      function ee(W) {
        return E(W) === n;
      }
      function Q(W) {
        return E(W) === m;
      }
      function q(W) {
        return E(W) === h;
      }
      function re(W) {
        return E(W) === t;
      }
      function ie(W) {
        return E(W) === o;
      }
      function te(W) {
        return E(W) === i;
      }
      function ae(W) {
        return E(W) === d;
      }
      Te.AsyncMode = b, Te.ConcurrentMode = _, Te.ContextConsumer = S, Te.ContextProvider = M, Te.Element = A, Te.ForwardRef = N, Te.Fragment = $, Te.Lazy = F, Te.Memo = L, Te.Portal = D, Te.Profiler = U, Te.StrictMode = P, Te.Suspense = R, Te.isAsyncMode = z, Te.isConcurrentMode = T, Te.isContextConsumer = O, Te.isContextProvider = B, Te.isElement = j, Te.isForwardRef = V, Te.isFragment = ee, Te.isLazy = Q, Te.isMemo = q, Te.isPortal = re, Te.isProfiler = ie, Te.isStrictMode = te, Te.isSuspense = ae, Te.isValidElementType = x, Te.typeOf = E;
    }()), Te;
  }
  var au;
  function Af() {
    return au || (au = 1, process.env.NODE_ENV === "production" ? qi.exports = ob() : qi.exports = ab()), qi.exports;
  }
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var Oa, su;
  function sb() {
    if (su) return Oa;
    su = 1;
    var r = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
    function n(o) {
      if (o == null)
        throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(o);
    }
    function i() {
      try {
        if (!Object.assign)
          return !1;
        var o = new String("abc");
        if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
          return !1;
        for (var s = {}, a = 0; a < 10; a++)
          s["_" + String.fromCharCode(a)] = a;
        var c = Object.getOwnPropertyNames(s).map(function(u) {
          return s[u];
        });
        if (c.join("") !== "0123456789")
          return !1;
        var l = {};
        return "abcdefghijklmnopqrst".split("").forEach(function(u) {
          l[u] = u;
        }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
      } catch {
        return !1;
      }
    }
    return Oa = i() ? Object.assign : function(o, s) {
      for (var a, c = n(o), l, u = 1; u < arguments.length; u++) {
        a = Object(arguments[u]);
        for (var d in a)
          e.call(a, d) && (c[d] = a[d]);
        if (r) {
          l = r(a);
          for (var f = 0; f < l.length; f++)
            t.call(a, l[f]) && (c[l[f]] = a[l[f]]);
        }
      }
      return c;
    }, Oa;
  }
  var Ra, cu;
  function cc() {
    if (cu) return Ra;
    cu = 1;
    var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return Ra = r, Ra;
  }
  var Aa, lu;
  function Pf() {
    return lu || (lu = 1, Aa = Function.call.bind(Object.prototype.hasOwnProperty)), Aa;
  }
  var Pa, uu;
  function cb() {
    if (uu) return Pa;
    uu = 1;
    var r = function() {
    };
    if (process.env.NODE_ENV !== "production") {
      var e = cc(), t = {}, n = Pf();
      r = function(o) {
        var s = "Warning: " + o;
        typeof console < "u" && console.error(s);
        try {
          throw new Error(s);
        } catch {
        }
      };
    }
    function i(o, s, a, c, l) {
      if (process.env.NODE_ENV !== "production") {
        for (var u in o)
          if (n(o, u)) {
            var d;
            try {
              if (typeof o[u] != "function") {
                var f = Error(
                  (c || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                throw f.name = "Invariant Violation", f;
              }
              d = o[u](s, u, c, a, null, e);
            } catch (m) {
              d = m;
            }
            if (d && !(d instanceof Error) && r(
              (c || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
            ), d instanceof Error && !(d.message in t)) {
              t[d.message] = !0;
              var h = l ? l() : "";
              r(
                "Failed " + a + " type: " + d.message + (h ?? "")
              );
            }
          }
      }
    }
    return i.resetWarningCache = function() {
      process.env.NODE_ENV !== "production" && (t = {});
    }, Pa = i, Pa;
  }
  var Na, du;
  function lb() {
    if (du) return Na;
    du = 1;
    var r = Af(), e = sb(), t = cc(), n = Pf(), i = cb(), o = function() {
    };
    process.env.NODE_ENV !== "production" && (o = function(a) {
      var c = "Warning: " + a;
      typeof console < "u" && console.error(c);
      try {
        throw new Error(c);
      } catch {
      }
    });
    function s() {
      return null;
    }
    return Na = function(a, c) {
      var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
      function d(T) {
        var O = T && (l && T[l] || T[u]);
        if (typeof O == "function")
          return O;
      }
      var f = "<<anonymous>>", h = {
        array: v("array"),
        bigint: v("bigint"),
        bool: v("boolean"),
        func: v("function"),
        number: v("number"),
        object: v("object"),
        string: v("string"),
        symbol: v("symbol"),
        any: y(),
        arrayOf: x,
        element: E(),
        elementType: b(),
        instanceOf: _,
        node: N(),
        objectOf: M,
        oneOf: S,
        oneOfType: A,
        shape: F,
        exact: L
      };
      function m(T, O) {
        return T === O ? T !== 0 || 1 / T === 1 / O : T !== T && O !== O;
      }
      function g(T, O) {
        this.message = T, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
      }
      g.prototype = Error.prototype;
      function p(T) {
        if (process.env.NODE_ENV !== "production")
          var O = {}, B = 0;
        function j(ee, Q, q, re, ie, te, ae) {
          if (re = re || f, te = te || q, ae !== t) {
            if (c) {
              var W = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw W.name = "Invariant Violation", W;
            } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
              var Oe = re + ":" + q;
              !O[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
              B < 3 && (o(
                "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + re + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
              ), O[Oe] = !0, B++);
            }
          }
          return Q[q] == null ? ee ? Q[q] === null ? new g("The " + ie + " `" + te + "` is marked as required " + ("in `" + re + "`, but its value is `null`.")) : new g("The " + ie + " `" + te + "` is marked as required in " + ("`" + re + "`, but its value is `undefined`.")) : null : T(Q, q, re, ie, te);
        }
        var V = j.bind(null, !1);
        return V.isRequired = j.bind(null, !0), V;
      }
      function v(T) {
        function O(B, j, V, ee, Q, q) {
          var re = B[j], ie = P(re);
          if (ie !== T) {
            var te = R(re);
            return new g(
              "Invalid " + ee + " `" + Q + "` of type " + ("`" + te + "` supplied to `" + V + "`, expected ") + ("`" + T + "`."),
              { expectedType: T }
            );
          }
          return null;
        }
        return p(O);
      }
      function y() {
        return p(s);
      }
      function x(T) {
        function O(B, j, V, ee, Q) {
          if (typeof T != "function")
            return new g("Property `" + Q + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
          var q = B[j];
          if (!Array.isArray(q)) {
            var re = P(q);
            return new g("Invalid " + ee + " `" + Q + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected an array."));
          }
          for (var ie = 0; ie < q.length; ie++) {
            var te = T(q, ie, V, ee, Q + "[" + ie + "]", t);
            if (te instanceof Error)
              return te;
          }
          return null;
        }
        return p(O);
      }
      function E() {
        function T(O, B, j, V, ee) {
          var Q = O[B];
          if (!a(Q)) {
            var q = P(Q);
            return new g("Invalid " + V + " `" + ee + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected a single ReactElement."));
          }
          return null;
        }
        return p(T);
      }
      function b() {
        function T(O, B, j, V, ee) {
          var Q = O[B];
          if (!r.isValidElementType(Q)) {
            var q = P(Q);
            return new g("Invalid " + V + " `" + ee + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return p(T);
      }
      function _(T) {
        function O(B, j, V, ee, Q) {
          if (!(B[j] instanceof T)) {
            var q = T.name || f, re = z(B[j]);
            return new g("Invalid " + ee + " `" + Q + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected ") + ("instance of `" + q + "`."));
          }
          return null;
        }
        return p(O);
      }
      function S(T) {
        if (!Array.isArray(T))
          return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
            "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
          ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
        function O(B, j, V, ee, Q) {
          for (var q = B[j], re = 0; re < T.length; re++)
            if (m(q, T[re]))
              return null;
          var ie = JSON.stringify(T, function(ae, W) {
            var Oe = R(W);
            return Oe === "symbol" ? String(W) : W;
          });
          return new g("Invalid " + ee + " `" + Q + "` of value `" + String(q) + "` " + ("supplied to `" + V + "`, expected one of " + ie + "."));
        }
        return p(O);
      }
      function M(T) {
        function O(B, j, V, ee, Q) {
          if (typeof T != "function")
            return new g("Property `" + Q + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
          var q = B[j], re = P(q);
          if (re !== "object")
            return new g("Invalid " + ee + " `" + Q + "` of type " + ("`" + re + "` supplied to `" + V + "`, expected an object."));
          for (var ie in q)
            if (n(q, ie)) {
              var te = T(q, ie, V, ee, Q + "." + ie, t);
              if (te instanceof Error)
                return te;
            }
          return null;
        }
        return p(O);
      }
      function A(T) {
        if (!Array.isArray(T))
          return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
        for (var O = 0; O < T.length; O++) {
          var B = T[O];
          if (typeof B != "function")
            return o(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + k(B) + " at index " + O + "."
            ), s;
        }
        function j(V, ee, Q, q, re) {
          for (var ie = [], te = 0; te < T.length; te++) {
            var ae = T[te], W = ae(V, ee, Q, q, re, t);
            if (W == null)
              return null;
            W.data && n(W.data, "expectedType") && ie.push(W.data.expectedType);
          }
          var Oe = ie.length > 0 ? ", expected one of type [" + ie.join(", ") + "]" : "";
          return new g("Invalid " + q + " `" + re + "` supplied to " + ("`" + Q + "`" + Oe + "."));
        }
        return p(j);
      }
      function N() {
        function T(O, B, j, V, ee) {
          return D(O[B]) ? null : new g("Invalid " + V + " `" + ee + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
        }
        return p(T);
      }
      function $(T, O, B, j, V) {
        return new g(
          (T || "React class") + ": " + O + " type `" + B + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
        );
      }
      function F(T) {
        function O(B, j, V, ee, Q) {
          var q = B[j], re = P(q);
          if (re !== "object")
            return new g("Invalid " + ee + " `" + Q + "` of type `" + re + "` " + ("supplied to `" + V + "`, expected `object`."));
          for (var ie in T) {
            var te = T[ie];
            if (typeof te != "function")
              return $(V, ee, Q, ie, R(te));
            var ae = te(q, ie, V, ee, Q + "." + ie, t);
            if (ae)
              return ae;
          }
          return null;
        }
        return p(O);
      }
      function L(T) {
        function O(B, j, V, ee, Q) {
          var q = B[j], re = P(q);
          if (re !== "object")
            return new g("Invalid " + ee + " `" + Q + "` of type `" + re + "` " + ("supplied to `" + V + "`, expected `object`."));
          var ie = e({}, B[j], T);
          for (var te in ie) {
            var ae = T[te];
            if (n(T, te) && typeof ae != "function")
              return $(V, ee, Q, te, R(ae));
            if (!ae)
              return new g(
                "Invalid " + ee + " `" + Q + "` key `" + te + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(B[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
              );
            var W = ae(q, te, V, ee, Q + "." + te, t);
            if (W)
              return W;
          }
          return null;
        }
        return p(O);
      }
      function D(T) {
        switch (typeof T) {
          case "number":
          case "string":
          case "undefined":
            return !0;
          case "boolean":
            return !T;
          case "object":
            if (Array.isArray(T))
              return T.every(D);
            if (T === null || a(T))
              return !0;
            var O = d(T);
            if (O) {
              var B = O.call(T), j;
              if (O !== T.entries) {
                for (; !(j = B.next()).done; )
                  if (!D(j.value))
                    return !1;
              } else
                for (; !(j = B.next()).done; ) {
                  var V = j.value;
                  if (V && !D(V[1]))
                    return !1;
                }
            } else
              return !1;
            return !0;
          default:
            return !1;
        }
      }
      function U(T, O) {
        return T === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
      }
      function P(T) {
        var O = typeof T;
        return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : U(O, T) ? "symbol" : O;
      }
      function R(T) {
        if (typeof T > "u" || T === null)
          return "" + T;
        var O = P(T);
        if (O === "object") {
          if (T instanceof Date)
            return "date";
          if (T instanceof RegExp)
            return "regexp";
        }
        return O;
      }
      function k(T) {
        var O = R(T);
        switch (O) {
          case "array":
          case "object":
            return "an " + O;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + O;
          default:
            return O;
        }
      }
      function z(T) {
        return !T.constructor || !T.constructor.name ? f : T.constructor.name;
      }
      return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
    }, Na;
  }
  var Da, fu;
  function ub() {
    if (fu) return Da;
    fu = 1;
    var r = cc();
    function e() {
    }
    function t() {
    }
    return t.resetWarningCache = e, Da = function() {
      function n(s, a, c, l, u, d) {
        if (d !== r) {
          var f = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw f.name = "Invariant Violation", f;
        }
      }
      n.isRequired = n;
      function i() {
        return n;
      }
      var o = {
        array: n,
        bigint: n,
        bool: n,
        func: n,
        number: n,
        object: n,
        string: n,
        symbol: n,
        any: n,
        arrayOf: i,
        element: n,
        elementType: n,
        instanceOf: i,
        node: n,
        objectOf: i,
        oneOf: i,
        oneOfType: i,
        shape: i,
        exact: i,
        checkPropTypes: t,
        resetWarningCache: e
      };
      return o.PropTypes = o, o;
    }, Da;
  }
  if (process.env.NODE_ENV !== "production") {
    var db = Af(), fb = !0;
    Ds.exports = lb()(db.isElement, fb);
  } else
    Ds.exports = ub()();
  var Nf = Ds.exports;
  function hb(r, e) {
    const t = new URLSearchParams();
    function n(i, o) {
      for (const s in o)
        if (o.hasOwnProperty(s)) {
          const a = o[s], c = i ? `${i}[${s}]` : s;
          typeof a == "object" && a !== null ? n(c, a) : t.append(c, a);
        }
    }
    return n(e, r), t;
  }
  var Do = { exports: {} }, Df = {};
  function kf(r) {
    var e, t, n = "";
    if (typeof r == "string" || typeof r == "number") n += r;
    else if (typeof r == "object") if (Array.isArray(r)) for (e = 0; e < r.length; e++) r[e] && (t = kf(r[e])) && (n && (n += " "), n += t);
    else for (e in r) r[e] && (n && (n += " "), n += e);
    return n;
  }
  function hu() {
    for (var r, e, t = 0, n = ""; t < arguments.length; ) (r = arguments[t++]) && (e = kf(r)) && (n && (n += " "), n += e);
    return n;
  }
  const pb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    clsx: hu,
    default: hu
  }, Symbol.toStringTag, { value: "Module" })), mb = /* @__PURE__ */ Zf(pb);
  var Fe = {}, Zt = {};
  Object.defineProperty(Zt, "__esModule", {
    value: !0
  });
  Zt.dontSetMe = xb;
  Zt.findInArray = gb;
  Zt.int = bb;
  Zt.isFunction = vb;
  Zt.isNum = yb;
  function gb(r, e) {
    for (let t = 0, n = r.length; t < n; t++)
      if (e.apply(e, [r[t], t, r])) return r[t];
  }
  function vb(r) {
    return typeof r == "function" || Object.prototype.toString.call(r) === "[object Function]";
  }
  function yb(r) {
    return typeof r == "number" && !isNaN(r);
  }
  function bb(r) {
    return parseInt(r, 10);
  }
  function xb(r, e, t) {
    if (r[e])
      return new Error("Invalid prop ".concat(e, " passed to ").concat(t, " - do not set this, set it on the child."));
  }
  var Xr = {};
  Object.defineProperty(Xr, "__esModule", {
    value: !0
  });
  Xr.browserPrefixToKey = $f;
  Xr.browserPrefixToStyle = Sb;
  Xr.default = void 0;
  Xr.getPrefix = If;
  const ka = ["Moz", "Webkit", "O", "ms"];
  function If() {
    var r;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
    if (typeof window > "u") return "";
    const t = (r = window.document) === null || r === void 0 || (r = r.documentElement) === null || r === void 0 ? void 0 : r.style;
    if (!t || e in t) return "";
    for (let n = 0; n < ka.length; n++)
      if ($f(e, ka[n]) in t) return ka[n];
    return "";
  }
  function $f(r, e) {
    return e ? "".concat(e).concat(Eb(r)) : r;
  }
  function Sb(r, e) {
    return e ? "-".concat(e.toLowerCase(), "-").concat(r) : r;
  }
  function Eb(r) {
    let e = "", t = !0;
    for (let n = 0; n < r.length; n++)
      t ? (e += r[n].toUpperCase(), t = !1) : r[n] === "-" ? t = !0 : e += r[n];
    return e;
  }
  Xr.default = If();
  Object.defineProperty(Fe, "__esModule", {
    value: !0
  });
  Fe.addClassName = Ff;
  Fe.addEvent = Mb;
  Fe.addUserSelectStyles = $b;
  Fe.createCSSTransform = Nb;
  Fe.createSVGTransform = Db;
  Fe.getTouch = kb;
  Fe.getTouchIdentifier = Ib;
  Fe.getTranslation = lc;
  Fe.innerHeight = Rb;
  Fe.innerWidth = Ab;
  Fe.matchesSelector = Lf;
  Fe.matchesSelectorAndParentsTo = wb;
  Fe.offsetXYFromParent = Pb;
  Fe.outerHeight = Tb;
  Fe.outerWidth = Ob;
  Fe.removeClassName = Bf;
  Fe.removeEvent = _b;
  Fe.removeUserSelectStyles = zb;
  var Mt = Zt, pu = Cb(Xr);
  function zf(r) {
    if (typeof WeakMap != "function") return null;
    var e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (zf = function(n) {
      return n ? t : e;
    })(r);
  }
  function Cb(r, e) {
    if (r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return { default: r };
    var t = zf(e);
    if (t && t.has(r))
      return t.get(r);
    var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in r)
      if (o !== "default" && Object.prototype.hasOwnProperty.call(r, o)) {
        var s = i ? Object.getOwnPropertyDescriptor(r, o) : null;
        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = r[o];
      }
    return n.default = r, t && t.set(r, n), n;
  }
  let Gi = "";
  function Lf(r, e) {
    return Gi || (Gi = (0, Mt.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(t) {
      return (0, Mt.isFunction)(r[t]);
    })), (0, Mt.isFunction)(r[Gi]) ? r[Gi](e) : !1;
  }
  function wb(r, e, t) {
    let n = r;
    do {
      if (Lf(n, e)) return !0;
      if (n === t) return !1;
      n = n.parentNode;
    } while (n);
    return !1;
  }
  function Mb(r, e, t, n) {
    if (!r) return;
    const i = {
      capture: !0,
      ...n
    };
    r.addEventListener ? r.addEventListener(e, t, i) : r.attachEvent ? r.attachEvent("on" + e, t) : r["on" + e] = t;
  }
  function _b(r, e, t, n) {
    if (!r) return;
    const i = {
      capture: !0,
      ...n
    };
    r.removeEventListener ? r.removeEventListener(e, t, i) : r.detachEvent ? r.detachEvent("on" + e, t) : r["on" + e] = null;
  }
  function Tb(r) {
    let e = r.clientHeight;
    const t = r.ownerDocument.defaultView.getComputedStyle(r);
    return e += (0, Mt.int)(t.borderTopWidth), e += (0, Mt.int)(t.borderBottomWidth), e;
  }
  function Ob(r) {
    let e = r.clientWidth;
    const t = r.ownerDocument.defaultView.getComputedStyle(r);
    return e += (0, Mt.int)(t.borderLeftWidth), e += (0, Mt.int)(t.borderRightWidth), e;
  }
  function Rb(r) {
    let e = r.clientHeight;
    const t = r.ownerDocument.defaultView.getComputedStyle(r);
    return e -= (0, Mt.int)(t.paddingTop), e -= (0, Mt.int)(t.paddingBottom), e;
  }
  function Ab(r) {
    let e = r.clientWidth;
    const t = r.ownerDocument.defaultView.getComputedStyle(r);
    return e -= (0, Mt.int)(t.paddingLeft), e -= (0, Mt.int)(t.paddingRight), e;
  }
  function Pb(r, e, t) {
    const i = e === e.ownerDocument.body ? {
      left: 0,
      top: 0
    } : e.getBoundingClientRect(), o = (r.clientX + e.scrollLeft - i.left) / t, s = (r.clientY + e.scrollTop - i.top) / t;
    return {
      x: o,
      y: s
    };
  }
  function Nb(r, e) {
    const t = lc(r, e, "px");
    return {
      [(0, pu.browserPrefixToKey)("transform", pu.default)]: t
    };
  }
  function Db(r, e) {
    return lc(r, e, "");
  }
  function lc(r, e, t) {
    let {
      x: n,
      y: i
    } = r, o = "translate(".concat(n).concat(t, ",").concat(i).concat(t, ")");
    if (e) {
      const s = "".concat(typeof e.x == "string" ? e.x : e.x + t), a = "".concat(typeof e.y == "string" ? e.y : e.y + t);
      o = "translate(".concat(s, ", ").concat(a, ")") + o;
    }
    return o;
  }
  function kb(r, e) {
    return r.targetTouches && (0, Mt.findInArray)(r.targetTouches, (t) => e === t.identifier) || r.changedTouches && (0, Mt.findInArray)(r.changedTouches, (t) => e === t.identifier);
  }
  function Ib(r) {
    if (r.targetTouches && r.targetTouches[0]) return r.targetTouches[0].identifier;
    if (r.changedTouches && r.changedTouches[0]) return r.changedTouches[0].identifier;
  }
  function $b(r) {
    if (!r) return;
    let e = r.getElementById("react-draggable-style-el");
    e || (e = r.createElement("style"), e.type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = `.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`, e.innerHTML += `.react-draggable-transparent-selection *::selection {all: inherit;}
`, r.getElementsByTagName("head")[0].appendChild(e)), r.body && Ff(r.body, "react-draggable-transparent-selection");
  }
  function zb(r) {
    if (r)
      try {
        if (r.body && Bf(r.body, "react-draggable-transparent-selection"), r.selection)
          r.selection.empty();
        else {
          const e = (r.defaultView || window).getSelection();
          e && e.type !== "Caret" && e.removeAllRanges();
        }
      } catch {
      }
  }
  function Ff(r, e) {
    r.classList ? r.classList.add(e) : r.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (r.className += " ".concat(e));
  }
  function Bf(r, e) {
    r.classList ? r.classList.remove(e) : r.className = r.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "");
  }
  var Jt = {};
  Object.defineProperty(Jt, "__esModule", {
    value: !0
  });
  Jt.canDragX = Bb;
  Jt.canDragY = jb;
  Jt.createCoreData = Kb;
  Jt.createDraggableData = Wb;
  Jt.getBoundPosition = Lb;
  Jt.getControlPosition = Hb;
  Jt.snapToGrid = Fb;
  var Ct = Zt, xn = Fe;
  function Lb(r, e, t) {
    if (!r.props.bounds) return [e, t];
    let {
      bounds: n
    } = r.props;
    n = typeof n == "string" ? n : Vb(n);
    const i = uc(r);
    if (typeof n == "string") {
      const {
        ownerDocument: o
      } = i, s = o.defaultView;
      let a;
      if (n === "parent" ? a = i.parentNode : a = o.querySelector(n), !(a instanceof s.HTMLElement))
        throw new Error('Bounds selector "' + n + '" could not find an element.');
      const c = a, l = s.getComputedStyle(i), u = s.getComputedStyle(c);
      n = {
        left: -i.offsetLeft + (0, Ct.int)(u.paddingLeft) + (0, Ct.int)(l.marginLeft),
        top: -i.offsetTop + (0, Ct.int)(u.paddingTop) + (0, Ct.int)(l.marginTop),
        right: (0, xn.innerWidth)(c) - (0, xn.outerWidth)(i) - i.offsetLeft + (0, Ct.int)(u.paddingRight) - (0, Ct.int)(l.marginRight),
        bottom: (0, xn.innerHeight)(c) - (0, xn.outerHeight)(i) - i.offsetTop + (0, Ct.int)(u.paddingBottom) - (0, Ct.int)(l.marginBottom)
      };
    }
    return (0, Ct.isNum)(n.right) && (e = Math.min(e, n.right)), (0, Ct.isNum)(n.bottom) && (t = Math.min(t, n.bottom)), (0, Ct.isNum)(n.left) && (e = Math.max(e, n.left)), (0, Ct.isNum)(n.top) && (t = Math.max(t, n.top)), [e, t];
  }
  function Fb(r, e, t) {
    const n = Math.round(e / r[0]) * r[0], i = Math.round(t / r[1]) * r[1];
    return [n, i];
  }
  function Bb(r) {
    return r.props.axis === "both" || r.props.axis === "x";
  }
  function jb(r) {
    return r.props.axis === "both" || r.props.axis === "y";
  }
  function Hb(r, e, t) {
    const n = typeof e == "number" ? (0, xn.getTouch)(r, e) : null;
    if (typeof e == "number" && !n) return null;
    const i = uc(t), o = t.props.offsetParent || i.offsetParent || i.ownerDocument.body;
    return (0, xn.offsetXYFromParent)(n || r, o, t.props.scale);
  }
  function Kb(r, e, t) {
    const n = !(0, Ct.isNum)(r.lastX), i = uc(r);
    return n ? {
      node: i,
      deltaX: 0,
      deltaY: 0,
      lastX: e,
      lastY: t,
      x: e,
      y: t
    } : {
      node: i,
      deltaX: e - r.lastX,
      deltaY: t - r.lastY,
      lastX: r.lastX,
      lastY: r.lastY,
      x: e,
      y: t
    };
  }
  function Wb(r, e) {
    const t = r.props.scale;
    return {
      node: e.node,
      x: r.state.x + e.deltaX / t,
      y: r.state.y + e.deltaY / t,
      deltaX: e.deltaX / t,
      deltaY: e.deltaY / t,
      lastX: r.state.x,
      lastY: r.state.y
    };
  }
  function Vb(r) {
    return {
      left: r.left,
      top: r.top,
      right: r.right,
      bottom: r.bottom
    };
  }
  function uc(r) {
    const e = r.findDOMNode();
    if (!e)
      throw new Error("<DraggableCore>: Unmounted during event!");
    return e;
  }
  var ko = {}, Io = {};
  Object.defineProperty(Io, "__esModule", {
    value: !0
  });
  Io.default = Ub;
  function Ub() {
  }
  Object.defineProperty(ko, "__esModule", {
    value: !0
  });
  ko.default = void 0;
  var Ia = Gb(de), ft = dc(Nf), qb = dc(oo), ot = Fe, _r = Jt, $a = Zt, Xn = dc(Io);
  function dc(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function jf(r) {
    if (typeof WeakMap != "function") return null;
    var e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
    return (jf = function(n) {
      return n ? t : e;
    })(r);
  }
  function Gb(r, e) {
    if (r && r.__esModule)
      return r;
    if (r === null || typeof r != "object" && typeof r != "function")
      return { default: r };
    var t = jf(e);
    if (t && t.has(r))
      return t.get(r);
    var n = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in r)
      if (o !== "default" && Object.prototype.hasOwnProperty.call(r, o)) {
        var s = i ? Object.getOwnPropertyDescriptor(r, o) : null;
        s && (s.get || s.set) ? Object.defineProperty(n, o, s) : n[o] = r[o];
      }
    return n.default = r, t && t.set(r, n), n;
  }
  function ct(r, e, t) {
    return e = Yb(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
  }
  function Yb(r) {
    var e = Xb(r, "string");
    return typeof e == "symbol" ? e : String(e);
  }
  function Xb(r, e) {
    if (typeof r != "object" || r === null) return r;
    var t = r[Symbol.toPrimitive];
    if (t !== void 0) {
      var n = t.call(r, e || "default");
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (e === "string" ? String : Number)(r);
  }
  const Ft = {
    touch: {
      start: "touchstart",
      move: "touchmove",
      stop: "touchend"
    },
    mouse: {
      start: "mousedown",
      move: "mousemove",
      stop: "mouseup"
    }
  };
  let Tr = Ft.mouse, $o = class extends Ia.Component {
    constructor() {
      super(...arguments), ct(this, "dragging", !1), ct(this, "lastX", NaN), ct(this, "lastY", NaN), ct(this, "touchIdentifier", null), ct(this, "mounted", !1), ct(this, "handleDragStart", (e) => {
        if (this.props.onMouseDown(e), !this.props.allowAnyClick && typeof e.button == "number" && e.button !== 0) return !1;
        const t = this.findDOMNode();
        if (!t || !t.ownerDocument || !t.ownerDocument.body)
          throw new Error("<DraggableCore> not mounted on DragStart!");
        const {
          ownerDocument: n
        } = t;
        if (this.props.disabled || !(e.target instanceof n.defaultView.Node) || this.props.handle && !(0, ot.matchesSelectorAndParentsTo)(e.target, this.props.handle, t) || this.props.cancel && (0, ot.matchesSelectorAndParentsTo)(e.target, this.props.cancel, t))
          return;
        e.type === "touchstart" && e.preventDefault();
        const i = (0, ot.getTouchIdentifier)(e);
        this.touchIdentifier = i;
        const o = (0, _r.getControlPosition)(e, i, this);
        if (o == null) return;
        const {
          x: s,
          y: a
        } = o, c = (0, _r.createCoreData)(this, s, a);
        (0, Xn.default)("DraggableCore: handleDragStart: %j", c), (0, Xn.default)("calling", this.props.onStart), !(this.props.onStart(e, c) === !1 || this.mounted === !1) && (this.props.enableUserSelectHack && (0, ot.addUserSelectStyles)(n), this.dragging = !0, this.lastX = s, this.lastY = a, (0, ot.addEvent)(n, Tr.move, this.handleDrag), (0, ot.addEvent)(n, Tr.stop, this.handleDragStop));
      }), ct(this, "handleDrag", (e) => {
        const t = (0, _r.getControlPosition)(e, this.touchIdentifier, this);
        if (t == null) return;
        let {
          x: n,
          y: i
        } = t;
        if (Array.isArray(this.props.grid)) {
          let a = n - this.lastX, c = i - this.lastY;
          if ([a, c] = (0, _r.snapToGrid)(this.props.grid, a, c), !a && !c) return;
          n = this.lastX + a, i = this.lastY + c;
        }
        const o = (0, _r.createCoreData)(this, n, i);
        if ((0, Xn.default)("DraggableCore: handleDrag: %j", o), this.props.onDrag(e, o) === !1 || this.mounted === !1) {
          try {
            this.handleDragStop(new MouseEvent("mouseup"));
          } catch {
            const c = document.createEvent("MouseEvents");
            c.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), this.handleDragStop(c);
          }
          return;
        }
        this.lastX = n, this.lastY = i;
      }), ct(this, "handleDragStop", (e) => {
        if (!this.dragging) return;
        const t = (0, _r.getControlPosition)(e, this.touchIdentifier, this);
        if (t == null) return;
        let {
          x: n,
          y: i
        } = t;
        if (Array.isArray(this.props.grid)) {
          let c = n - this.lastX || 0, l = i - this.lastY || 0;
          [c, l] = (0, _r.snapToGrid)(this.props.grid, c, l), n = this.lastX + c, i = this.lastY + l;
        }
        const o = (0, _r.createCoreData)(this, n, i);
        if (this.props.onStop(e, o) === !1 || this.mounted === !1) return !1;
        const a = this.findDOMNode();
        a && this.props.enableUserSelectHack && (0, ot.removeUserSelectStyles)(a.ownerDocument), (0, Xn.default)("DraggableCore: handleDragStop: %j", o), this.dragging = !1, this.lastX = NaN, this.lastY = NaN, a && ((0, Xn.default)("DraggableCore: Removing handlers"), (0, ot.removeEvent)(a.ownerDocument, Tr.move, this.handleDrag), (0, ot.removeEvent)(a.ownerDocument, Tr.stop, this.handleDragStop));
      }), ct(this, "onMouseDown", (e) => (Tr = Ft.mouse, this.handleDragStart(e))), ct(this, "onMouseUp", (e) => (Tr = Ft.mouse, this.handleDragStop(e))), ct(this, "onTouchStart", (e) => (Tr = Ft.touch, this.handleDragStart(e))), ct(this, "onTouchEnd", (e) => (Tr = Ft.touch, this.handleDragStop(e)));
    }
    componentDidMount() {
      this.mounted = !0;
      const e = this.findDOMNode();
      e && (0, ot.addEvent)(e, Ft.touch.start, this.onTouchStart, {
        passive: !1
      });
    }
    componentWillUnmount() {
      this.mounted = !1;
      const e = this.findDOMNode();
      if (e) {
        const {
          ownerDocument: t
        } = e;
        (0, ot.removeEvent)(t, Ft.mouse.move, this.handleDrag), (0, ot.removeEvent)(t, Ft.touch.move, this.handleDrag), (0, ot.removeEvent)(t, Ft.mouse.stop, this.handleDragStop), (0, ot.removeEvent)(t, Ft.touch.stop, this.handleDragStop), (0, ot.removeEvent)(e, Ft.touch.start, this.onTouchStart, {
          passive: !1
        }), this.props.enableUserSelectHack && (0, ot.removeUserSelectStyles)(t);
      }
    }
    // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
    // the underlying DOM node ourselves. See the README for more information.
    findDOMNode() {
      var e, t;
      return (e = this.props) !== null && e !== void 0 && e.nodeRef ? (t = this.props) === null || t === void 0 || (t = t.nodeRef) === null || t === void 0 ? void 0 : t.current : qb.default.findDOMNode(this);
    }
    render() {
      return /* @__PURE__ */ Ia.cloneElement(Ia.Children.only(this.props.children), {
        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        // onTouchStart is added on `componentDidMount` so they can be added with
        // {passive: false}, which allows it to cancel. See
        // https://developers.google.com/web/updates/2017/01/scrolling-intervention
        onTouchEnd: this.onTouchEnd
      });
    }
  };
  ko.default = $o;
  ct($o, "displayName", "DraggableCore");
  ct($o, "propTypes", {
    /**
     * `allowAnyClick` allows dragging using any mouse button.
     * By default, we only accept the left button.
     *
     * Defaults to `false`.
     */
    allowAnyClick: ft.default.bool,
    children: ft.default.node.isRequired,
    /**
     * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
     * with the exception of `onMouseDown`, will not fire.
     */
    disabled: ft.default.bool,
    /**
     * By default, we add 'user-select:none' attributes to the document body
     * to prevent ugly text selection during drag. If this is causing problems
     * for your app, set this to `false`.
     */
    enableUserSelectHack: ft.default.bool,
    /**
     * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
     * instead of using the parent node.
     */
    offsetParent: function(r, e) {
      if (r[e] && r[e].nodeType !== 1)
        throw new Error("Draggable's offsetParent must be a DOM Node.");
    },
    /**
     * `grid` specifies the x and y that dragging should snap to.
     */
    grid: ft.default.arrayOf(ft.default.number),
    /**
     * `handle` specifies a selector to be used as the handle that initiates drag.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *         return (
     *            <Draggable handle=".handle">
     *              <div>
     *                  <div className="handle">Click me to drag</div>
     *                  <div>This is some other content</div>
     *              </div>
     *           </Draggable>
     *         );
     *       }
     *   });
     * ```
     */
    handle: ft.default.string,
    /**
     * `cancel` specifies a selector to be used to prevent drag initialization.
     *
     * Example:
     *
     * ```jsx
     *   let App = React.createClass({
     *       render: function () {
     *           return(
     *               <Draggable cancel=".cancel">
     *                   <div>
     *                     <div className="cancel">You can't drag from here</div>
     *                     <div>Dragging here works fine</div>
     *                   </div>
     *               </Draggable>
     *           );
     *       }
     *   });
     * ```
     */
    cancel: ft.default.string,
    /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
     * Unfortunately, in order for <Draggable> to work properly, we need raw access
     * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
     * as in this example:
     *
     * function MyComponent() {
     *   const nodeRef = React.useRef(null);
     *   return (
     *     <Draggable nodeRef={nodeRef}>
     *       <div ref={nodeRef}>Example Target</div>
     *     </Draggable>
     *   );
     * }
     *
     * This can be used for arbitrarily nested components, so long as the ref ends up
     * pointing to the actual child DOM node and not a custom component.
     */
    nodeRef: ft.default.object,
    /**
     * Called when dragging starts.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onStart: ft.default.func,
    /**
     * Called while dragging.
     * If this function returns the boolean false, dragging will be canceled.
     */
    onDrag: ft.default.func,
    /**
     * Called when dragging stops.
     * If this function returns the boolean false, the drag will remain active.
     */
    onStop: ft.default.func,
    /**
     * A workaround option which can be passed if onMouseDown needs to be accessed,
     * since it'll always be blocked (as there is internal use of onMouseDown)
     */
    onMouseDown: ft.default.func,
    /**
     * `scale`, if set, applies scaling while dragging an element
     */
    scale: ft.default.number,
    /**
     * These properties should be defined on the child, not here.
     */
    className: $a.dontSetMe,
    style: $a.dontSetMe,
    transform: $a.dontSetMe
  });
  ct($o, "defaultProps", {
    allowAnyClick: !1,
    // by default only accept left click
    disabled: !1,
    enableUserSelectHack: !0,
    onStart: function() {
    },
    onDrag: function() {
    },
    onStop: function() {
    },
    onMouseDown: function() {
    },
    scale: 1
  });
  (function(r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), Object.defineProperty(r, "DraggableCore", {
      enumerable: !0,
      get: function() {
        return c.default;
      }
    }), r.default = void 0;
    var e = f(de), t = u(Nf), n = u(oo), i = u(mb), o = Fe, s = Jt, a = Zt, c = u(ko), l = u(Io);
    function u(y) {
      return y && y.__esModule ? y : { default: y };
    }
    function d(y) {
      if (typeof WeakMap != "function") return null;
      var x = /* @__PURE__ */ new WeakMap(), E = /* @__PURE__ */ new WeakMap();
      return (d = function(b) {
        return b ? E : x;
      })(y);
    }
    function f(y, x) {
      if (y && y.__esModule)
        return y;
      if (y === null || typeof y != "object" && typeof y != "function")
        return { default: y };
      var E = d(x);
      if (E && E.has(y))
        return E.get(y);
      var b = {}, _ = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var S in y)
        if (S !== "default" && Object.prototype.hasOwnProperty.call(y, S)) {
          var M = _ ? Object.getOwnPropertyDescriptor(y, S) : null;
          M && (M.get || M.set) ? Object.defineProperty(b, S, M) : b[S] = y[S];
        }
      return b.default = y, E && E.set(y, b), b;
    }
    function h() {
      return h = Object.assign ? Object.assign.bind() : function(y) {
        for (var x = 1; x < arguments.length; x++) {
          var E = arguments[x];
          for (var b in E)
            Object.prototype.hasOwnProperty.call(E, b) && (y[b] = E[b]);
        }
        return y;
      }, h.apply(this, arguments);
    }
    function m(y, x, E) {
      return x = g(x), x in y ? Object.defineProperty(y, x, { value: E, enumerable: !0, configurable: !0, writable: !0 }) : y[x] = E, y;
    }
    function g(y) {
      var x = p(y, "string");
      return typeof x == "symbol" ? x : String(x);
    }
    function p(y, x) {
      if (typeof y != "object" || y === null) return y;
      var E = y[Symbol.toPrimitive];
      if (E !== void 0) {
        var b = E.call(y, x || "default");
        if (typeof b != "object") return b;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (x === "string" ? String : Number)(y);
    }
    class v extends e.Component {
      // React 16.3+
      // Arity (props, state)
      static getDerivedStateFromProps(x, E) {
        let {
          position: b
        } = x, {
          prevPropsPosition: _
        } = E;
        return b && (!_ || b.x !== _.x || b.y !== _.y) ? ((0, l.default)("Draggable: getDerivedStateFromProps %j", {
          position: b,
          prevPropsPosition: _
        }), {
          x: b.x,
          y: b.y,
          prevPropsPosition: {
            ...b
          }
        }) : null;
      }
      constructor(x) {
        super(x), m(this, "onDragStart", (E, b) => {
          if ((0, l.default)("Draggable: onDragStart: %j", b), this.props.onStart(E, (0, s.createDraggableData)(this, b)) === !1) return !1;
          this.setState({
            dragging: !0,
            dragged: !0
          });
        }), m(this, "onDrag", (E, b) => {
          if (!this.state.dragging) return !1;
          (0, l.default)("Draggable: onDrag: %j", b);
          const _ = (0, s.createDraggableData)(this, b), S = {
            x: _.x,
            y: _.y,
            slackX: 0,
            slackY: 0
          };
          if (this.props.bounds) {
            const {
              x: A,
              y: N
            } = S;
            S.x += this.state.slackX, S.y += this.state.slackY;
            const [$, F] = (0, s.getBoundPosition)(this, S.x, S.y);
            S.x = $, S.y = F, S.slackX = this.state.slackX + (A - S.x), S.slackY = this.state.slackY + (N - S.y), _.x = S.x, _.y = S.y, _.deltaX = S.x - this.state.x, _.deltaY = S.y - this.state.y;
          }
          if (this.props.onDrag(E, _) === !1) return !1;
          this.setState(S);
        }), m(this, "onDragStop", (E, b) => {
          if (!this.state.dragging || this.props.onStop(E, (0, s.createDraggableData)(this, b)) === !1) return !1;
          (0, l.default)("Draggable: onDragStop: %j", b);
          const S = {
            dragging: !1,
            slackX: 0,
            slackY: 0
          };
          if (!!this.props.position) {
            const {
              x: A,
              y: N
            } = this.props.position;
            S.x = A, S.y = N;
          }
          this.setState(S);
        }), this.state = {
          // Whether or not we are currently dragging.
          dragging: !1,
          // Whether or not we have been dragged before.
          dragged: !1,
          // Current transform x and y.
          x: x.position ? x.position.x : x.defaultPosition.x,
          y: x.position ? x.position.y : x.defaultPosition.y,
          prevPropsPosition: {
            ...x.position
          },
          // Used for compensating for out-of-bounds drags
          slackX: 0,
          slackY: 0,
          // Can only determine if SVG after mounting
          isElementSVG: !1
        }, x.position && !(x.onDrag || x.onStop) && console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
      }
      componentDidMount() {
        typeof window.SVGElement < "u" && this.findDOMNode() instanceof window.SVGElement && this.setState({
          isElementSVG: !0
        });
      }
      componentWillUnmount() {
        this.setState({
          dragging: !1
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
      findDOMNode() {
        var x, E;
        return (x = (E = this.props) === null || E === void 0 || (E = E.nodeRef) === null || E === void 0 ? void 0 : E.current) !== null && x !== void 0 ? x : n.default.findDOMNode(this);
      }
      render() {
        const {
          axis: x,
          bounds: E,
          children: b,
          defaultPosition: _,
          defaultClassName: S,
          defaultClassNameDragging: M,
          defaultClassNameDragged: A,
          position: N,
          positionOffset: $,
          scale: F,
          ...L
        } = this.props;
        let D = {}, U = null;
        const R = !!!N || this.state.dragging, k = N || _, z = {
          // Set left if horizontal drag is enabled
          x: (0, s.canDragX)(this) && R ? this.state.x : k.x,
          // Set top if vertical drag is enabled
          y: (0, s.canDragY)(this) && R ? this.state.y : k.y
        };
        this.state.isElementSVG ? U = (0, o.createSVGTransform)(z, $) : D = (0, o.createCSSTransform)(z, $);
        const T = (0, i.default)(b.props.className || "", S, {
          [M]: this.state.dragging,
          [A]: this.state.dragged
        });
        return /* @__PURE__ */ e.createElement(c.default, h({}, L, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), /* @__PURE__ */ e.cloneElement(e.Children.only(b), {
          className: T,
          style: {
            ...b.props.style,
            ...D
          },
          transform: U
        }));
      }
    }
    r.default = v, m(v, "displayName", "Draggable"), m(v, "propTypes", {
      // Accepts all props <DraggableCore> accepts.
      ...c.default.propTypes,
      /**
       * `axis` determines which axis the draggable can move.
       *
       *  Note that all callbacks will still return data as normal. This only
       *  controls flushing to the DOM.
       *
       * 'both' allows movement horizontally and vertically.
       * 'x' limits movement to horizontal axis.
       * 'y' limits movement to vertical axis.
       * 'none' limits all movement.
       *
       * Defaults to 'both'.
       */
      axis: t.default.oneOf(["both", "x", "y", "none"]),
      /**
       * `bounds` determines the range of movement available to the element.
       * Available values are:
       *
       * 'parent' restricts movement within the Draggable's parent node.
       *
       * Alternatively, pass an object with the following properties, all of which are optional:
       *
       * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
       *
       * All values are in px.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *         return (
       *            <Draggable bounds={{right: 300, bottom: 300}}>
       *              <div>Content</div>
       *           </Draggable>
       *         );
       *       }
       *   });
       * ```
       */
      bounds: t.default.oneOfType([t.default.shape({
        left: t.default.number,
        right: t.default.number,
        top: t.default.number,
        bottom: t.default.number
      }), t.default.string, t.default.oneOf([!1])]),
      defaultClassName: t.default.string,
      defaultClassNameDragging: t.default.string,
      defaultClassNameDragged: t.default.string,
      /**
       * `defaultPosition` specifies the x and y that the dragged item should start at
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable defaultPosition={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      defaultPosition: t.default.shape({
        x: t.default.number,
        y: t.default.number
      }),
      positionOffset: t.default.shape({
        x: t.default.oneOfType([t.default.number, t.default.string]),
        y: t.default.oneOfType([t.default.number, t.default.string])
      }),
      /**
       * `position`, if present, defines the current position of the element.
       *
       *  This is similar to how form elements in React work - if no `position` is supplied, the component
       *  is uncontrolled.
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable position={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      position: t.default.shape({
        x: t.default.number,
        y: t.default.number
      }),
      /**
       * These properties should be defined on the child, not here.
       */
      className: a.dontSetMe,
      style: a.dontSetMe,
      transform: a.dontSetMe
    }), m(v, "defaultProps", {
      ...c.default.defaultProps,
      axis: "both",
      bounds: !1,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: {
        x: 0,
        y: 0
      },
      scale: 1
    });
  })(Df);
  const {
    default: Hf,
    DraggableCore: Zb
  } = Df;
  Do.exports = Hf;
  Do.exports.default = Hf;
  Do.exports.DraggableCore = Zb;
  var Jb = Do.exports;
  const Qb = /* @__PURE__ */ gu(Jb), ex = (r) => {
    const {
      open: e = !1,
      width: t = 500,
      height: n = 800,
      children: i,
      okText: o = "OK",
      onOk: s
    } = r, [a, c] = lt(e), l = ye(), u = () => {
      if (s) {
        s();
        return;
      }
      c(!1);
    };
    return mt(() => {
      c(e);
    }, [e]), /* @__PURE__ */ ve.jsx(
      Qb,
      {
        axis: "both",
        handle: ".dialog-container",
        defaultPosition: {
          x: 0,
          y: 0
        },
        children: /* @__PURE__ */ ve.jsxs(
          "div",
          {
            style: {
              display: e ? "flex" : "none",
              zIndex: 1e3,
              cursor: "move",
              background: "#FFF",
              padding: "12px",
              borderRadius: "6px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
              position: "absolute",
              top: `calc(50%- ${n / 2}px)`,
              left: `calc(85% - ${t / 2}px)`,
              width: `${t}px`,
              height: `${n}px`,
              flexDirection: "column",
              gap: "1rem",
              overflowY: "scroll"
            },
            ref: l,
            $open: a,
            className: "dialog-container",
            $width: t,
            $height: n,
            children: [
              /* @__PURE__ */ ve.jsx("div", { children: i }),
              /* @__PURE__ */ ve.jsx(
                "div",
                {
                  style: {
                    display: "flex",
                    flexWrap: "wrap",
                    // gap: "0.5rem",
                    justifyContent: "flex-end"
                  },
                  children: /* @__PURE__ */ ve.jsx(No, { type: "primary", onClick: u, children: o })
                }
              )
            ]
          }
        )
      }
    );
  }, { DirectoryTree: tx } = sc, rx = () => console.log("Texture loaded");
  function nx({ consumerSetMeshes: r }) {
    const [e, t] = lt([]);
    lt([]);
    const [n, i] = lt(), [o, s] = lt(), [a, c] = lt(), [l, u] = lt("");
    function d(_ = "attributes.js") {
      fetch(Gn.API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(na.GetMaterialAndPenTable)
      }).then((S) => S.json()).then((S) => {
        fetch(
          "http://yhk.tgl-cloud.com:8989/" + S.resultDir + "/" + _
        ).then((M) => M.json()).then((M) => {
          i(M);
        }).catch((M) => console.log(M));
      });
    }
    function f(_ = "library.js") {
      fetch(Gn.API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(na.GetLibraryObjects)
      }).then((S) => S.json()).then((S) => {
        fetch(
          "http://yhk.tgl-cloud.com:8989/" + S.resultDir + "/" + _
        ).then((M) => M.json()).then((M) => {
          t(M.libraries);
        });
      });
    }
    function h(_) {
      return _ != null;
    }
    mt(() => {
      f(), d();
    }, []), mt(() => {
      o && m();
    }, [o]);
    const m = (_ = null, S = null) => {
      const M = [o.library], A = new URLSearchParams();
      A.append("Command", "Generate3DModel"), M.forEach((N) => {
        A.append("LibraryFolderLocations[]", N);
      }), A.append("GSMObject[GSMFileName]", o.name), h(S) && (A.append("GSMObject[GDLParameters]", JSON.stringify(S)), A.append("GSMObject[ChangedParameter]", _)), fetch(Gn.API, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: A.toString()
      }).then((N) => N.json()).then((N) => {
        u("http://yhk.tgl-cloud.com:8989/" + N.resultDir), fetch(
          "http://yhk.tgl-cloud.com:8989/" + N.resultDir + "/geometry.js"
        ).then(($) => $.json()).then(($) => {
          c($), b(!0);
        }).catch(($) => {
          console.error("An error happened", $);
        });
      });
    }, g = ye(), p = (_) => {
      const S = new FormData();
      S.append("file", _.target.files[0]), fetch(Gn.FILE_UPLOAD, {
        method: "POST",
        body: S
      }).then(() => {
        f();
      }).catch((M) => {
        console.log(M);
      });
    }, v = (_) => {
      const S = {
        ...na.GetPreviewImage,
        GSMObject: _
      };
      fetch(Gn.API, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: hb(S).toString()
      }).then((M) => M.json()).then((M) => {
        console.log("image location", M.resultDir);
      }).catch((M) => {
        console.log(M);
      });
    }, y = (_, { expanded: S, node: M }) => {
      var N;
      if (S) {
        var A = (N = M.items) == null ? void 0 : N.filter(($) => $.type === "gsm");
        A == null || A.map(($) => {
          v($);
        });
      }
    }, x = (_, S) => {
      var M;
      ((M = S == null ? void 0 : S.node) == null ? void 0 : M.type) === "gsm" && s(S.node);
    }, [E, b] = lt(!1);
    return /* @__PURE__ */ ve.jsxs(ve.Fragment, { children: [
      /* @__PURE__ */ ve.jsx(
        Fh,
        {
          jsonData: a,
          textureLocation: l,
          textureLoadedCallback: rx,
          setMeshs: r
        }
      ),
      /* @__PURE__ */ ve.jsxs("div", { style: { display: "flex", width: "100%" }, children: [
        /* @__PURE__ */ ve.jsxs(
          "div",
          {
            style: {
              height: "100vh",
              minWidth: "15vw",
              // background: "#FCC",
              overflowY: "scroll"
            },
            children: [
              /* @__PURE__ */ ve.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%"
                  },
                  children: [
                    /* @__PURE__ */ ve.jsx("p", { children: "モデル一覧" }),
                    /* @__PURE__ */ ve.jsx(
                      "button",
                      {
                        onClick: () => {
                          g.current.click();
                        },
                        children: "新規追加"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ ve.jsx(
                "input",
                {
                  type: "file",
                  name: "file",
                  id: "file",
                  ref: g,
                  onChange: p,
                  style: { display: "none" }
                }
              ),
              /* @__PURE__ */ ve.jsx(
                tx,
                {
                  onSelect: x,
                  treeData: e,
                  fieldNames: { key: "name", children: "items", title: "name" },
                  showIcon: !1,
                  onExpand: y,
                  showLine: !0
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ ve.jsx(
          ex,
          {
            open: E,
            footer: null,
            onOk: () => {
              b(!1);
            },
            children: /* @__PURE__ */ ve.jsx(
              Lh,
              {
                current: o,
                location: l,
                materialAndPenTable: n,
                parametersJsonFileName: "parameters.js",
                generate3DModelOnCurrentGSM: m
              }
            )
          }
        )
      ] })
    ] });
  }
  const ix = (r, e) => r + e;
  window.WebGDL = { App: nx, add: ix };
});
export default ox();
