//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, c = (n, r, o) => (o = n == null ? {} : e(i(n)), s(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), l = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), f = Symbol.for("react.activity"), p = Symbol.for("react.view_transition"), m = Symbol.iterator;
	function h(e) {
		return typeof e != "object" || !e ? null : (e = m && e[m] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var g = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, _ = Object.assign, v = {};
	function y(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
		if (typeof e != "object" && typeof e != "function" && e != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, e, t, "setState");
	}, y.prototype.forceUpdate = function(e) {
		this.updater.enqueueForceUpdate(this, e, "forceUpdate");
	};
	function b() {}
	b.prototype = y.prototype;
	function x(e, t, n) {
		this.props = e, this.context = t, this.refs = v, this.updater = n || g;
	}
	var S = x.prototype = new b();
	S.constructor = x, _(S, y.prototype), S.isPureReactComponent = !0;
	var C = Array.isArray;
	function w() {}
	var T = {
		H: null,
		A: null,
		T: null,
		S: null
	}, E = Object.prototype.hasOwnProperty;
	function D(e, n, r) {
		var i = r.ref;
		return {
			$$typeof: t,
			type: e,
			key: n,
			ref: i === void 0 ? null : i,
			props: r
		};
	}
	function O(e, t) {
		return D(e.type, t, e.props);
	}
	function k(e) {
		return typeof e == "object" && !!e && e.$$typeof === t;
	}
	function A(e) {
		var t = {
			"=": "=0",
			":": "=2"
		};
		return "$" + e.replace(/[=:]/g, function(e) {
			return t[e];
		});
	}
	var j = /\/+/g;
	function M(e, t) {
		return typeof e == "object" && e && e.key != null ? A("" + e.key) : t.toString(36);
	}
	function N(e) {
		switch (e.status) {
			case "fulfilled": return e.value;
			case "rejected": throw e.reason;
			default: switch (typeof e.status == "string" ? e.then(w, w) : (e.status = "pending", e.then(function(t) {
				e.status === "pending" && (e.status = "fulfilled", e.value = t);
			}, function(t) {
				e.status === "pending" && (e.status = "rejected", e.reason = t);
			})), e.status) {
				case "fulfilled": return e.value;
				case "rejected": throw e.reason;
			}
		}
		throw e;
	}
	function P(e, r, i, a, o) {
		var s = typeof e;
		(s === "undefined" || s === "boolean") && (e = null);
		var c = !1;
		if (e === null) c = !0;
		else switch (s) {
			case "bigint":
			case "string":
			case "number":
				c = !0;
				break;
			case "object": switch (e.$$typeof) {
				case t:
				case n:
					c = !0;
					break;
				case d: return c = e._init, P(c(e._payload), r, i, a, o);
			}
		}
		if (c) return o = o(e), c = a === "" ? "." + M(e, 0) : a, C(o) ? (i = "", c != null && (i = c.replace(j, "$&/") + "/"), P(o, r, i, "", function(e) {
			return e;
		})) : o != null && (k(o) && (o = O(o, i + (o.key == null || e && e.key === o.key ? "" : ("" + o.key).replace(j, "$&/") + "/") + c)), r.push(o)), 1;
		c = 0;
		var l = a === "" ? "." : a + ":";
		if (C(e)) for (var u = 0; u < e.length; u++) a = e[u], s = l + M(a, u), c += P(a, r, i, s, o);
		else if (u = h(e), typeof u == "function") for (e = u.call(e), u = 0; !(a = e.next()).done;) a = a.value, s = l + M(a, u++), c += P(a, r, i, s, o);
		else if (s === "object") {
			if (typeof e.then == "function") return P(N(e), r, i, a, o);
			throw r = String(e), Error("Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.");
		}
		return c;
	}
	function F(e, t, n) {
		if (e == null) return e;
		var r = [], i = 0;
		return P(e, r, "", "", function(e) {
			return t.call(n, e, i++);
		}), r;
	}
	function I(e) {
		if (e._status === -1) {
			var t = e._result, n = t();
			n.then(function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 1, e._result = t, n.status === void 0 && (n.status = "fulfilled", n.value = t));
			}, function(t) {
				(e._status === 0 || e._status === -1) && (e._status = 2, e._result = t, n.status === void 0 && (n.status = "rejected", n.reason = t));
			}), e._status === -1 && (e._status = 0, e._result = n);
		}
		if (e._status === 1) return e._result.default;
		throw e._result;
	}
	var L = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	};
	function ee(e) {
		var t = T.T, n = {};
		n.types = t === null ? null : t.types, T.T = n;
		try {
			var r = e(), i = T.S;
			i !== null && i(n, r), typeof r == "object" && r && typeof r.then == "function" && r.then(w, L);
		} catch (e) {
			L(e);
		} finally {
			t !== null && n.types !== null && (t.types = n.types), T.T = t;
		}
	}
	function te(e) {
		var t = T.T;
		if (t !== null) {
			var n = t.types;
			n === null ? t.types = [e] : n.indexOf(e) === -1 && n.push(e);
		} else ee(te.bind(null, e));
	}
	var ne = {
		map: F,
		forEach: function(e, t, n) {
			F(e, function() {
				t.apply(this, arguments);
			}, n);
		},
		count: function(e) {
			var t = 0;
			return F(e, function() {
				t++;
			}), t;
		},
		toArray: function(e) {
			return F(e, function(e) {
				return e;
			}) || [];
		},
		only: function(e) {
			if (!k(e)) throw Error("React.Children.only expected to receive a single React element child.");
			return e;
		}
	};
	e.Activity = f, e.Children = ne, e.Component = y, e.Fragment = r, e.Profiler = a, e.PureComponent = x, e.StrictMode = i, e.Suspense = l, e.ViewTransition = p, e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(e) {
			return T.H.useMemoCache(e);
		}
	}, e.addTransitionType = te, e.cache = function(e) {
		return function() {
			return e.apply(null, arguments);
		};
	}, e.cacheSignal = function() {
		return null;
	}, e.cloneElement = function(e, t, n) {
		if (e == null) throw Error("The argument must be a React element, but you passed " + e + ".");
		var r = _({}, e.props), i = e.key;
		if (t != null) for (a in t.key !== void 0 && (i = "" + t.key), t) !E.call(t, a) || a === "key" || a === "__self" || a === "__source" || a === "ref" && t.ref === void 0 || (r[a] = t[a]);
		var a = arguments.length - 2;
		if (a === 1) r.children = n;
		else if (1 < a) {
			for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
			r.children = o;
		}
		return D(e.type, i, r);
	}, e.createContext = function(e) {
		return e = {
			$$typeof: s,
			_currentValue: e,
			_currentValue2: e,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		}, e.Provider = e, e.Consumer = {
			$$typeof: o,
			_context: e
		}, e;
	}, e.createElement = function(e, t, n) {
		var r, i = {}, a = null;
		if (t != null) for (r in t.key !== void 0 && (a = "" + t.key), t) E.call(t, r) && r !== "key" && r !== "__self" && r !== "__source" && (i[r] = t[r]);
		var o = arguments.length - 2;
		if (o === 1) i.children = n;
		else if (1 < o) {
			for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
			i.children = s;
		}
		if (e && e.defaultProps) for (r in o = e.defaultProps, o) i[r] === void 0 && (i[r] = o[r]);
		return D(e, a, i);
	}, e.createRef = function() {
		return { current: null };
	}, e.forwardRef = function(e) {
		return {
			$$typeof: c,
			render: e
		};
	}, e.isValidElement = k, e.lazy = function(e) {
		return {
			$$typeof: d,
			_payload: {
				_status: -1,
				_result: e
			},
			_init: I
		};
	}, e.memo = function(e, t) {
		return {
			$$typeof: u,
			type: e,
			compare: t === void 0 ? null : t
		};
	}, e.startTransition = ee, e.unstable_useCacheRefresh = function() {
		return T.H.useCacheRefresh();
	}, e.use = function(e) {
		return T.H.use(e);
	}, e.useActionState = function(e, t, n) {
		return T.H.useActionState(e, t, n);
	}, e.useCallback = function(e, t) {
		return T.H.useCallback(e, t);
	}, e.useContext = function(e) {
		return T.H.useContext(e);
	}, e.useDebugValue = function() {}, e.useDeferredValue = function(e, t) {
		return T.H.useDeferredValue(e, t);
	}, e.useEffect = function(e, t) {
		return T.H.useEffect(e, t);
	}, e.useEffectEvent = function(e) {
		return T.H.useEffectEvent(e);
	}, e.useId = function() {
		return T.H.useId();
	}, e.useImperativeHandle = function(e, t, n) {
		return T.H.useImperativeHandle(e, t, n);
	}, e.useInsertionEffect = function(e, t) {
		return T.H.useInsertionEffect(e, t);
	}, e.useLayoutEffect = function(e, t) {
		return T.H.useLayoutEffect(e, t);
	}, e.useMemo = function(e, t) {
		return T.H.useMemo(e, t);
	}, e.useOptimistic = function(e, t) {
		return T.H.useOptimistic(e, t);
	}, e.useReducer = function(e, t, n) {
		return T.H.useReducer(e, t, n);
	}, e.useRef = function(e) {
		return T.H.useRef(e);
	}, e.useState = function(e) {
		return T.H.useState(e);
	}, e.useSyncExternalStore = function(e, t, n) {
		return T.H.useSyncExternalStore(e, t, n);
	}, e.useTransition = function() {
		return T.H.useTransition();
	}, e.version = "19.3.0";
})), u = /* @__PURE__ */ o(((e, t) => {
	t.exports = l();
})), d = /* @__PURE__ */ o(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) {
			if (n(c) !== null) m = !0, S || (S = !0, O());
			else {
				var t = n(l);
				t !== null && j(x, t.startTime - e);
			}
		}
	}
	var S = !1, C = -1, w = 5, T = -1;
	function E() {
		return g ? !0 : !(e.unstable_now() - T < w);
	}
	function D() {
		if (g = !1, S) {
			var t = e.unstable_now();
			T = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(C), C = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && E());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && j(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? O() : S = !1;
			}
		}
	}
	var O;
	if (typeof y == "function") O = function() {
		y(D);
	};
	else if (typeof MessageChannel < "u") {
		var k = new MessageChannel(), A = k.port2;
		k.port1.onmessage = D, O = function() {
			A.postMessage(null);
		};
	} else O = function() {
		_(D, 0);
	};
	function j(t, n) {
		C = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : w = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(C), C = -1) : h = !0, j(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, O()))), r;
	}, e.unstable_shouldYield = E, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), f = /* @__PURE__ */ o(((e, t) => {
	t.exports = d();
})), p = /* @__PURE__ */ o(((e) => {
	var t = u();
	function n(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function r() {}
	var i = {
		d: {
			f: r,
			r: function() {
				throw Error(n(522));
			},
			D: r,
			C: r,
			L: r,
			m: r,
			X: r,
			S: r,
			M: r
		},
		p: 0,
		findDOMNode: null
	}, a = Symbol.for("react.portal"), o = Symbol.for("react.recoverable"), s = Symbol.for("react.optimistic_key");
	function c(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: a,
			key: r == null ? null : r === s ? s : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, e.browser = function(e) {
		return {
			$$typeof: o,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
		return c(e, t, null, r);
	}, e.flushSync = function(e) {
		var t = l.T, n = i.p;
		try {
			if (l.T = null, i.p = 2, e) return e();
		} finally {
			l.T = t, i.p = n, i.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, i.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && i.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), a = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? i.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o
			}) : n === "script" && i.d.X(e, {
				crossOrigin: r,
				integrity: a,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					i.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? i.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			i.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				i.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else i.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		i.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return l.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return l.H.useHostTransitionStatus();
	}, e.version = "19.3.0";
})), m = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = p();
})), h = /* @__PURE__ */ o(((e) => {
	var t = f(), n = u(), r = m();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function a(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function o(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function s(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function c(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (o(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = o(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var s = a.alternate;
			if (s === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === s.child) {
				for (s = a.child; s;) {
					if (s === n) return l(a), e;
					if (s === r) return l(a), t;
					s = s.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = s;
			else {
				for (var c = !1, u = a.child; u;) {
					if (u === n) {
						c = !0, n = a, r = s;
						break;
					}
					if (u === r) {
						c = !0, r = a, n = s;
						break;
					}
					u = u.sibling;
				}
				if (!c) {
					for (u = s.child; u;) {
						if (u === n) {
							c = !0, n = s, r = a;
							break;
						}
						if (u === r) {
							c = !0, r = s, n = a;
							break;
						}
						u = u.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = p(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function h(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function g(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = g(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(i(559));
		}
	}
	var x = null, S = null;
	function C(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function w(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function T(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function E(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var D = Object.assign, O = Symbol.for("react.element"), k = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), F = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), re = Symbol.for("react.legacy_hidden"), z = Symbol.for("react.memo_cache_sentinel"), ie = Symbol.for("react.view_transition"), ae = Symbol.for("react.recoverable"), oe = Symbol.iterator;
	function se(e) {
		return typeof e != "object" || !e ? null : (e = oe && e[oe] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var ce = Symbol.for("react.client.reference");
	function le(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === ce ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case j: return "Fragment";
			case N: return "Profiler";
			case M: return "StrictMode";
			case L: return "Suspense";
			case ee: return "SuspenseList";
			case R: return "Activity";
			case ie: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case A: return "Portal";
			case F: return e.displayName || "Context";
			case P: return (e._context.displayName || "Context") + ".Consumer";
			case I:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case te: return t = e.displayName || null, t === null ? le(e.type) || "Memo" : t;
			case ne:
				t = e._payload, e = e._init;
				try {
					return le(e(t));
				} catch {}
		}
		return null;
	}
	var ue = Array.isArray, B = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, fe = [], pe = -1;
	function H(e) {
		return { current: e };
	}
	function U(e) {
		0 > pe || (e.current = fe[pe], fe[pe] = null, pe--);
	}
	function W(e, t) {
		pe++, fe[pe] = e.current, e.current = t;
	}
	var me = H(null), he = H(null), ge = H(null), _e = H(null);
	function ve(e, t) {
		switch (W(ge, t), W(he, e), W(me, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		U(me), W(me, e);
	}
	function ye() {
		U(me), U(he), U(ge);
	}
	function be(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, W(_e, e)), t = me.current;
		var n = dp(t, e.type);
		t !== n && (W(he, e), W(me, n));
	}
	function xe(e) {
		he.current === e && (U(me), U(he)), _e.current === e && (U(_e), sh._currentValue = de);
	}
	var Se, Ce;
	function we(e) {
		if (Se === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Se = t && t[1] || "", Ce = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Se + e + Ce;
	}
	var G = !1;
	function Te(e, t) {
		if (!e || G) return "";
		G = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			G = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? we(n) : "";
	}
	function Ee(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return we(e.type);
			case 16: return we("Lazy");
			case 13: return e.child !== t && t !== null ? we("Suspense Fallback") : we("Suspense");
			case 19: return we("SuspenseList");
			case 0:
			case 15: return Te(e.type, !1);
			case 11: return Te(e.type.render, !1);
			case 1: return Te(e.type, !0);
			case 31: return we("Activity");
			case 30: return we("ViewTransition");
			default: return "";
		}
	}
	function De(e) {
		try {
			var t = "", n = null;
			do
				t += Ee(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Oe = Object.prototype.hasOwnProperty, ke = t.unstable_scheduleCallback, Ae = t.unstable_cancelCallback, je = t.unstable_shouldYield, Me = t.unstable_requestPaint, Ne = t.unstable_now, Pe = t.unstable_getCurrentPriorityLevel, Fe = t.unstable_ImmediatePriority, Ie = t.unstable_UserBlockingPriority, Le = t.unstable_NormalPriority, Re = t.unstable_LowPriority, ze = t.unstable_IdlePriority, Be = t.log, Ve = t.unstable_setDisableYieldValue, He = null, Ue = null;
	function We(e) {
		if (typeof Be == "function" && Ve(e), Ue && typeof Ue.setStrictMode == "function") try {
			Ue.setStrictMode(He, e);
		} catch {}
	}
	var Ge = Math.clz32 ? Math.clz32 : Je, Ke = Math.log, qe = Math.LN2;
	function Je(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (Ke(e) / qe | 0) | 0;
	}
	var Ye = 256, Xe = 262144, Ze = 4194304;
	function Qe(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function $e(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = Qe(n))) : i = Qe(o) : i = Qe(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = Qe(n))) : i = Qe(o)) : i = Qe(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function et(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function tt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - Ge(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function nt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function rt() {
		var e = Ze;
		return Ze <<= 1, !(Ze & 62914560) && (Ze = 4194304), e;
	}
	function it(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function at(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function ot(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Ge(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && st(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function st(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Ge(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function ct(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Ge(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function lt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : ut(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function ut(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function dt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function ft() {
		var e = V.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function pt(e, t) {
		var n = V.p;
		try {
			return V.p = e, t();
		} finally {
			V.p = n;
		}
	}
	var mt = Math.random().toString(36).slice(2), ht = "__reactFiber$" + mt, gt = "__reactProps$" + mt, _t = "__reactContainer$" + mt, vt = "__reactEvents$" + mt, yt = "__reactListeners$" + mt, bt = "__reactHandles$" + mt, xt = "__reactResources$" + mt, St = "__reactMarker$" + mt, Ct = "__reactLoad$" + mt;
	function wt(e) {
		delete e[ht], delete e[gt], delete e[yt], delete e[bt];
	}
	function Tt(e) {
		var t;
		if (t = e[ht]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[_t] || n[ht]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[ht]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Et(e) {
		if (e = e[ht] || e[_t]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Dt(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Ot(e) {
		var t = e[xt];
		return t ||= e[xt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function kt(e) {
		e[St] = !0;
	}
	function At(e) {
		e[Ct] = void 0;
	}
	var jt = /* @__PURE__ */ new Set(), Mt = {};
	function Nt(e, t) {
		Pt(e, t), Pt(e + "Capture", t);
	}
	function Pt(e, t) {
		for (Mt[e] = t, e = 0; e < t.length; e++) jt.add(t[e]);
	}
	var Ft = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), It = {}, Lt = {};
	function Rt(e) {
		return Oe.call(Lt, e) ? !0 : Oe.call(It, e) ? !1 : Ft.test(e) ? Lt[e] = !0 : (It[e] = !0, !1);
	}
	var K = !1;
	function zt() {
		var e = K;
		return K = !1, e;
	}
	function Bt(e, t, n) {
		if (Rt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Vt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Ht(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function Ut(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Wt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Gt(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Kt(e) {
		if (!e._valueTracker) {
			var t = Wt(e) ? "checked" : "value";
			e._valueTracker = Gt(e, t, "" + e[t]);
		}
	}
	function qt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Wt(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var Jt = /[\n"\\]/g;
	function Yt(e) {
		return e.replace(Jt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Xt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Qt(e, Ut(n)) : o === "number" && e.value == t ? Qt(e, Ut(e.value)) : Qt(e, Ut(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Ut(s) : e.removeAttribute("name");
	}
	function Zt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Kt(e);
				return;
			}
			n = n == null ? "" : "" + Ut(n), t = t == null ? n : "" + Ut(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Kt(e);
	}
	function Qt(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function $t(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function en(e, t, n) {
		if (t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Ut(n);
	}
	function tn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (ue(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Ut(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Kt(e);
	}
	function nn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var rn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function an(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || rn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function on(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", K = !0);
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && (an(e, a, r), K = !0);
		} else for (var o in t) t.hasOwnProperty(o) && an(e, o, t[o]);
	}
	function sn(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var cn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), ln = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function un(e) {
		return ln.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function dn() {}
	var fn = null;
	function pn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var mn = null, hn = null;
	function gn(e) {
		var t = Et(e);
		if (t && (e = t.stateNode)) {
			var n = e[gt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Xt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + Yt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[gt] || null;
								if (!a) throw Error(i(90));
								Xt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && qt(r);
					}
					break a;
				case "textarea":
					en(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && $t(e, !!n.multiple, t, !1);
			}
		}
	}
	var _n = !1;
	function vn(e, t, n) {
		if (_n) return e(t, n);
		_n = !0;
		try {
			return e(t);
		} finally {
			if (_n = !1, (mn !== null || hn !== null) && (Ld(), mn && (t = mn, e = hn, hn = mn = null, gn(t), e))) for (t = 0; t < e.length; t++) gn(e[t]);
		}
	}
	function yn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[gt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var bn = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, xn = !1;
	if (bn) try {
		var Sn = {};
		Object.defineProperty(Sn, "passive", { get: function() {
			xn = !0;
		} }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
	} catch {
		xn = !1;
	}
	var Cn = null, wn = null, Tn = null;
	function En() {
		if (Tn) return Tn;
		var e, t = wn, n = t.length, r, i = "value" in Cn ? Cn.value : Cn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Tn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Dn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function On() {
		return !0;
	}
	function kn() {
		return !1;
	}
	function An(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? On : kn, this.isPropagationStopped = kn, this;
		}
		return D(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = On);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = On);
			},
			persist: function() {},
			isPersistent: On
		}), t;
	}
	var jn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Mn = An(jn), Nn = D({}, jn, {
		view: 0,
		detail: 0
	}), Pn = An(Nn), Fn, In, Ln, Rn = D({}, Nn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Yn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Ln && (Ln && e.type === "mousemove" ? (Fn = e.screenX - Ln.screenX, In = e.screenY - Ln.screenY) : In = Fn = 0, Ln = e), Fn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : In;
		}
	}), zn = An(Rn), Bn = An(D({}, Rn, { dataTransfer: 0 })), Vn = An(D({}, Nn, { relatedTarget: 0 })), Hn = An(D({}, jn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Un = An(D({}, jn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Wn = An(D({}, jn, { data: 0 })), Gn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Kn = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, qn = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Jn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = qn[e]) ? !!t[e] : !1;
	}
	function Yn() {
		return Jn;
	}
	var Xn = An(D({}, Nn, {
		key: function(e) {
			if (e.key) {
				var t = Gn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Dn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Kn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Yn,
		charCode: function(e) {
			return e.type === "keypress" ? Dn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Dn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), Zn = An(D({}, Rn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Qn = An(D({}, jn, { submitter: 0 })), $n = An(D({}, Nn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Yn
	})), er = An(D({}, jn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), tr = An(D({}, Rn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), nr = An(D({}, jn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), rr = [
		9,
		13,
		27,
		32
	], ir = bn && "CompositionEvent" in window, ar = null;
	bn && "documentMode" in document && (ar = document.documentMode);
	var or = bn && "TextEvent" in window && !ar, sr = bn && (!ir || ar && 8 < ar && 11 >= ar), cr = " ", lr = !1;
	function ur(e, t) {
		switch (e) {
			case "keyup": return rr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function dr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var fr = !1;
	function pr(e, t) {
		switch (e) {
			case "compositionend": return dr(t);
			case "keypress": return t.which === 32 ? (lr = !0, cr) : null;
			case "textInput": return e = t.data, e === cr && lr ? null : e;
			default: return null;
		}
	}
	function mr(e, t) {
		if (fr) return e === "compositionend" || !ir && ur(e, t) ? (e = En(), Tn = wn = Cn = null, fr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return sr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var hr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function gr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!hr[e.type] : t === "textarea";
	}
	function _r(e, t, n, r) {
		mn ? hn ? hn.push(r) : hn = [r] : mn = r, t = qf(t, "onChange"), 0 < t.length && (n = new Mn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var vr = null, yr = null;
	function br(e) {
		Bf(e, 0);
	}
	function xr(e) {
		if (qt(Dt(e))) return e;
	}
	function Sr(e, t) {
		if (e === "change") return t;
	}
	var Cr = !1;
	if (bn) {
		var wr;
		if (bn) {
			var Tr = "oninput" in document;
			if (!Tr) {
				var Er = document.createElement("div");
				Er.setAttribute("oninput", "return;"), Tr = typeof Er.oninput == "function";
			}
			wr = Tr;
		} else wr = !1;
		Cr = wr && (!document.documentMode || 9 < document.documentMode);
	}
	function Dr() {
		vr && (vr.detachEvent("onpropertychange", Or), yr = vr = null);
	}
	function Or(e) {
		if (e.propertyName === "value" && xr(yr)) {
			var t = [];
			_r(t, yr, e, pn(e)), vn(br, t);
		}
	}
	function kr(e, t, n) {
		e === "focusin" ? (Dr(), vr = t, yr = n, vr.attachEvent("onpropertychange", Or)) : e === "focusout" && Dr();
	}
	function Ar(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return xr(yr);
	}
	function jr(e, t) {
		if (e === "click") return xr(t);
	}
	function Mr(e, t) {
		if (e === "input" || e === "change") return xr(t);
	}
	function Nr(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Pr = typeof Object.is == "function" ? Object.is : Nr;
	function Fr(e, t) {
		if (Pr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Oe.call(t, i) || !Pr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Ir(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function Lr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Rr(e, t) {
		var n = Lr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Lr(n);
		}
	}
	function zr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Br(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Ir(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Ir(e.document);
		}
		return t;
	}
	function Vr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Hr = bn && "documentMode" in document && 11 >= document.documentMode, Ur = null, Wr = null, Gr = null, Kr = !1;
	function qr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Kr || Ur == null || Ur !== Ir(r) || (r = Ur, "selectionStart" in r && Vr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), Gr && Fr(Gr, r) || (Gr = r, r = qf(Wr, "onSelect"), 0 < r.length && (t = new Mn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Ur)));
	}
	function Jr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Yr = {
		animationend: Jr("Animation", "AnimationEnd"),
		animationiteration: Jr("Animation", "AnimationIteration"),
		animationstart: Jr("Animation", "AnimationStart"),
		transitionrun: Jr("Transition", "TransitionRun"),
		transitionstart: Jr("Transition", "TransitionStart"),
		transitioncancel: Jr("Transition", "TransitionCancel"),
		transitionend: Jr("Transition", "TransitionEnd")
	}, Xr = {}, Zr = {};
	bn && (Zr = document.createElement("div").style, "AnimationEvent" in window || (delete Yr.animationend.animation, delete Yr.animationiteration.animation, delete Yr.animationstart.animation), "TransitionEvent" in window || delete Yr.transitionend.transition);
	function Qr(e) {
		if (Xr[e]) return Xr[e];
		if (!Yr[e]) return e;
		var t = Yr[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Zr) return Xr[e] = t[n];
		return e;
	}
	var $r = Qr("animationend"), ei = Qr("animationiteration"), ti = Qr("animationstart"), ni = Qr("transitionrun"), ri = Qr("transitionstart"), ii = Qr("transitioncancel"), ai = Qr("transitionend"), oi = /* @__PURE__ */ new Map(), si = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	si.push("scrollEnd");
	function ci(e, t) {
		oi.set(e, t), Nt(t, [e]);
	}
	var li = 0;
	function ui(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = vd.identifierPrefix;
		var n = li++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function di(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Ed;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function fi(e, t) {
		return e = di(e), t = di(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var pi = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, mi = [], hi = 0, gi = 0;
	function _i() {
		for (var e = hi, t = gi = hi = 0; t < e;) {
			var n = mi[t];
			mi[t++] = null;
			var r = mi[t];
			mi[t++] = null;
			var i = mi[t];
			mi[t++] = null;
			var a = mi[t];
			if (mi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && xi(n, i, a);
		}
	}
	function vi(e, t, n, r) {
		mi[hi++] = e, mi[hi++] = t, mi[hi++] = n, mi[hi++] = r, gi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function yi(e, t, n, r) {
		return vi(e, t, n, r), Si(e);
	}
	function bi(e, t) {
		return vi(e, null, null, t), Si(e);
	}
	function xi(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ge(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Si(e) {
		if (50 < Dd) throw Dd = 0, Od = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ci = {};
	function wi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Ti(e, t, n, r) {
		return new wi(e, t, n, r);
	}
	function Ei(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Di(e, t) {
		var n = e.alternate;
		return n === null ? (n = Ti(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Oi(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function ki(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof r == "function") Ei(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, me.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case R: return e = Ti(31, n, t, a), e.elementType = R, e.lanes = o, e;
			case j: return Ai(n.children, a, o, t);
			case M:
				s = 8, a |= 24;
				break;
			case N: return e = Ti(12, n, t, a | 2), e.elementType = N, e.lanes = o, e;
			case L: return e = Ti(13, n, t, a), e.elementType = L, e.lanes = o, e;
			case ee: return e = Ti(19, n, t, a), e.elementType = ee, e.lanes = o, e;
			case re:
			case ie: return e = a | 32, e = Ti(30, n, t, e), e.elementType = ie, e.lanes = o, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case F:
						s = 10;
						break a;
					case P:
						s = 9;
						break a;
					case I:
						s = 11;
						break a;
					case te:
						s = 14;
						break a;
					case ne:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Ti(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function Ai(e, t, n, r) {
		return e = Ti(7, e, r, t), e.lanes = n, e;
	}
	function ji(e, t, n) {
		return e = Ti(6, e, null, t), e.lanes = n, e;
	}
	function Mi(e) {
		var t = Ti(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Ni(e, t, n) {
		return t = Ti(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Pi = /* @__PURE__ */ new WeakMap();
	function Fi(e, t) {
		if (typeof e == "object" && e) {
			var n = Pi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: De(t)
			}, Pi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: De(t)
		};
	}
	var Ii = [], Li = 0, Ri = null, zi = 0, Bi = [], Vi = 0, Hi = null, Ui = 1, Wi = "";
	function Gi(e, t) {
		Ii[Li++] = zi, Ii[Li++] = Ri, Ri = e, zi = t;
	}
	function Ki(e, t, n) {
		Bi[Vi++] = Ui, Bi[Vi++] = Wi, Bi[Vi++] = Hi, Hi = e;
		var r = Ui;
		e = Wi;
		var i = 32 - Ge(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ge(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Ui = 1 << 32 - Ge(t) + i | n << i | r, Wi = a + e;
		} else Ui = 1 << a | n << i | r, Wi = e;
	}
	function qi(e) {
		e.return !== null && (Gi(e, 1), Ki(e, 1, 0));
	}
	function Ji(e) {
		for (; e === Ri;) Ri = Ii[--Li], Ii[Li] = null, zi = Ii[--Li], Ii[Li] = null;
		for (; e === Hi;) Hi = Bi[--Vi], Bi[Vi] = null, Wi = Bi[--Vi], Bi[Vi] = null, Ui = Bi[--Vi], Bi[Vi] = null;
	}
	function Yi(e, t) {
		Bi[Vi++] = Ui, Bi[Vi++] = Wi, Bi[Vi++] = Hi, Ui = t.id, Wi = t.overflow, Hi = e;
	}
	var Xi = null, Zi = null, q = !1, Qi = null, $i = !1, ea = Error(i(519));
	function ta(e) {
		throw sa(Fi(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), ea;
	}
	function na(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[ht] = e, t[gt] = r, n) {
			case "dialog":
				$("cancel", t), $("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				$("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Rf.length; n++) $(Rf[n], t);
				break;
			case "source":
				$("error", t);
				break;
			case "img":
			case "image":
			case "link":
				$("error", t), $("load", t);
				break;
			case "details":
				$("toggle", t);
				break;
			case "input":
				$("invalid", t), Zt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				$("invalid", t);
				break;
			case "textarea": $("invalid", t), tn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || $f(t.textContent, n) ? (r.popover != null && ($("beforetoggle", t), $("toggle", t)), r.onScroll != null && $("scroll", t), r.onScrollEnd != null && $("scrollend", t), r.onClick != null && (t.onclick = dn), t = !0) : t = !1, t || ta(e, !0);
	}
	function ra(e) {
		for (Xi = e.return; Xi;) switch (Xi.tag) {
			case 5:
			case 31:
			case 13:
				$i = !1;
				return;
			case 27:
			case 3:
				$i = !0;
				return;
			default: Xi = Xi.return;
		}
	}
	function ia(e) {
		if (e !== Xi) return !1;
		if (!q) return ra(e), q = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && Zi && ta(e), ra(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			Zi = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			Zi = dm(e);
		} else t === 27 ? (t = Zi, Sp(e.type) ? (e = um, um = null, Zi = e) : Zi = t) : Zi = Xi ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function aa() {
		Zi = Xi = null, q = !1;
	}
	function oa() {
		var e = Qi;
		return e !== null && (dd === null ? dd = e : dd.push.apply(dd, e), Qi = null), e;
	}
	function sa(e) {
		Qi === null ? Qi = [e] : Qi.push(e);
	}
	var ca = H(null), la = null, ua = null;
	function da(e, t, n) {
		W(ca, t._currentValue), t._currentValue = n;
	}
	function fa(e) {
		e._currentValue = ca.current, U(ca);
	}
	function pa(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ma(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), pa(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), pa(s, n, e), s = null;
			} else a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), pa(a.return, n, e), s = a.child, s = s === null ? null : s.sibling) : s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function ha(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					Pr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === _e.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			a = a.return;
		}
		return e !== null && ma(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function ga(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Pr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function _a(e) {
		la = e, ua = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function va(e) {
		return ba(la, e);
	}
	function ya(e, t) {
		return la === null && _a(e), ba(e, t);
	}
	function ba(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ua === null) {
			if (e === null) throw Error(i(308));
			ua = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ua = ua.next = t;
		return n;
	}
	var xa = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, Sa = t.unstable_scheduleCallback, Ca = t.unstable_NormalPriority, wa = {
		$$typeof: F,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Ta() {
		return {
			controller: new xa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Ea(e) {
		e.refCount--, e.refCount === 0 && Sa(Ca, function() {
			e.controller.abort();
		});
	}
	function Da(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var Oa = null;
	function ka(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var Aa = null, ja = 0, Ma = 0, Na = null;
	function Pa(e, t) {
		if (Aa === null) {
			var n = Aa = [];
			ja = 0, Ma = Nf(), Na = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return ja++, t.then(Fa, Fa), t;
	}
	function Fa() {
		if (--ja === 0 && (Oa = null, Aa !== null)) {
			Na !== null && (Na.status = "fulfilled");
			var e = Aa;
			Aa = null, Ma = 0, Na = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ia(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var La = B.S;
	B.S = function(e, t) {
		if (pd = Ne(), typeof t == "object" && t && typeof t.then == "function" && Pa(e, t), Oa !== null) for (var n = yf; n !== null;) Da(n, Oa), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = yf; r !== null;) Da(r, n), r = r.next;
			if (Ma !== 0) {
				r = Oa, r === null && (r = Oa = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		La !== null && La(e, t);
	};
	var Ra = H(null);
	function za() {
		var e = Ra.current;
		return e === null ? Zu.pooledCache : e;
	}
	function Ba(e, t) {
		t === null ? W(Ra, Ra.current) : W(Ra, t.pool);
	}
	function Va() {
		var e = za();
		return e === null ? null : {
			parent: wa._currentValue,
			pool: e
		};
	}
	var Ha = Error(i(460)), Ua = Error(i(474)), Wa = Error(i(542)), Ga = { then: function() {} };
	function Ka(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function qa(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(dn, dn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Za(e), e === void 0 && !("reason" in t) ? Error(i(600)) : e;
			default:
				if (typeof t.status == "string") t.then(dn, dn);
				else {
					if (e = Zu, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Za(e), e;
				}
				throw Ya = t, Ha;
		}
	}
	function Ja(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Ya = e, Ha) : e;
		}
	}
	var Ya = null;
	function Xa() {
		if (Ya === null) throw Error(i(459));
		var e = Ya;
		return Ya = null, e;
	}
	function Za(e) {
		if (e === Ha || e === Wa) throw Error(i(483));
	}
	var Qa = null, $a = 0;
	function eo(e) {
		var t = $a;
		return $a += 1, Qa === null && (Qa = []), qa(Qa, e, t);
	}
	function to(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function no(e, t) {
		throw t.$$typeof === O ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function ro(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = Di(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = ji(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === j ? (e = d(e, t, n.props.children, r, n.key), to(e, n), e) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === ne && Ja(i) === t.type) ? (t = a(t, n.props), to(t, n), t.return = e, t) : (t = ki(n.type, n.key, n.props, null, e.mode, r), to(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ni(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = Ai(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = ji("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case k: return n = ki(t.type, t.key, t.props, null, e.mode, n), to(n, t), n.return = e, n;
					case A: return t = Ni(t, e.mode, n), t.return = e, t;
					case ne: return t = Ja(t), f(e, t, n);
				}
				if (ue(t) || se(t)) return t = Ai(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, eo(t), n);
				if (t.$$typeof === F) return f(e, ya(e, t), n);
				no(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case k: return n.key === i ? l(e, t, n, r) : null;
					case A: return n.key === i ? u(e, t, n, r) : null;
					case ne: return n = Ja(n), p(e, t, n, r);
				}
				if (ue(n) || se(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, eo(n), r);
				if (n.$$typeof === F) return p(e, t, ya(e, n), r);
				no(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case k: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case A: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case ne: return r = Ja(r), m(e, t, n, r, i);
				}
				if (ue(r) || se(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, eo(r), i);
				if (r.$$typeof === F) return m(e, t, n, ya(t, r), i);
				no(t, r);
			}
			return null;
		}
		function h(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), q && Gi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return q && Gi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), q && Gi(i, h), l;
		}
		function g(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), q && Gi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return q && Gi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), q && Gi(a, g), u;
		}
		function _(e, r, o, c) {
			if (typeof o == "object" && o && o.type === j && o.key === null && o.props.ref === void 0 && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case k:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === j) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), to(c, o), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === ne && Ja(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), to(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							o.type === j ? (c = Ai(o.props.children, e.mode, c, o.key), to(c, o), c.return = e, e = c) : (c = ki(o.type, o.key, o.props, null, e.mode, c), to(c, o), c.return = e, e = c);
						}
						return s(e);
					case A:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
										n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Ni(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case ne: return o = Ja(o), _(e, r, o, c);
				}
				if (ue(o)) return h(e, r, o, c);
				if (se(o)) {
					if (l = se(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), g(e, r, o, c);
				}
				if (typeof o.then == "function") return _(e, r, eo(o), c);
				if (o.$$typeof === F) return _(e, r, ya(e, o), c);
				no(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = ji(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				$a = 0;
				var i = _(e, t, n, r);
				return Qa = null, i;
			} catch (t) {
				if (t === Ha || t === Wa) throw t;
				var a = Ti(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var io = ro(!0), ao = ro(!1), oo = !1;
	function so(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function co(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function lo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function uo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, Y & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Si(e), xi(e, null, n), t;
		}
		return vi(e, r, t, n), Si(e);
	}
	function fo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ct(e, n);
		}
	}
	function po(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var mo = !1;
	function ho() {
		if (mo) {
			var e = Na;
			if (e !== null) throw e;
		}
	}
	function go(e, t, n, r) {
		mo = !1;
		var i = e.updateQueue;
		oo = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Z & f) === f : (r & f) === f) {
					f !== 0 && f === Ma && (mo = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = D({}, d, f);
								break a;
							case 2: oo = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), ad |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function _o(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function vo(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) _o(n[e], t);
	}
	var yo = H(null), bo = H(0);
	function xo(e, t) {
		e = rd, W(bo, e), W(yo, t), rd = e | t.baseLanes;
	}
	function So() {
		W(bo, rd), W(yo, yo.current);
	}
	function Co() {
		rd = bo.current, U(yo), U(bo);
	}
	var wo = H(null), To = null;
	function Eo(e) {
		var t = e.alternate;
		W(jo, jo.current & 1), W(wo, e), To === null && (t === null || yo.current !== null || t.memoizedState !== null) && (To = e);
	}
	function Do(e) {
		W(jo, jo.current), W(wo, e), To === null && (To = e);
	}
	function Oo(e) {
		e.tag === 22 ? (W(jo, jo.current), W(wo, e), To === null && (To = e)) : ko();
	}
	function ko() {
		W(jo, jo.current), W(wo, wo.current);
	}
	function Ao(e) {
		U(wo), To === e && (To = null), U(jo);
	}
	var jo = H(0);
	function Mo(e, t) {
		W(wo, wo.current), W(jo, t);
	}
	function No(e) {
		U(jo), U(wo), To === e && (To = null);
	}
	function Po(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Fo = 0, J = null, Io = null, Lo = null, Ro = !1, zo = !1, Bo = !1, Vo = 0, Ho = 0, Uo = null, Wo = 0;
	function Go() {
		throw Error(i(321));
	}
	function Ko(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Pr(e[n], t[n])) return !1;
		return !0;
	}
	function qo(e, t, n, r, i, a) {
		return Fo = a, J = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? uc : dc, Bo = !1, a = n(r, i), Bo = !1, zo && (a = Yo(t, n, r, i)), Jo(e), a;
	}
	function Jo(e) {
		B.H = lc;
		var t = Io !== null && Io.next !== null;
		if (Fo = 0, Lo = Io = J = null, Ro = !1, Ho = 0, Uo = null, t) throw Error(i(300));
		e === null || Oc || (e = e.dependencies, e !== null && ga(e) && (Oc = !0));
	}
	function Yo(e, t, n, r) {
		J = e;
		var a = 0;
		do {
			if (zo && (Uo = null), Ho = 0, zo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, Lo = Io = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			B.H = fc, o = t(n, r);
		} while (zo);
		return o;
	}
	function Xo() {
		var e = B.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? rs(t) : t, e = e.useState()[0], (Io === null ? null : Io.memoizedState) !== e && (J.flags |= 1024), t;
	}
	function Zo() {
		var e = Vo !== 0;
		return Vo = 0, e;
	}
	function Qo(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function $o(e) {
		if (Ro) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Ro = !1;
		}
		Fo = 0, Lo = Io = J = null, zo = !1, Ho = Vo = 0, Uo = null;
	}
	function es() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Lo === null ? J.memoizedState = Lo = e : Lo = Lo.next = e, Lo;
	}
	function ts() {
		if (Io === null) {
			var e = J.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = Io.next;
		var t = Lo === null ? J.memoizedState : Lo.next;
		if (t !== null) Lo = t, Io = e;
		else {
			if (e === null) throw J.alternate === null ? Error(i(467)) : Error(i(310));
			Io = e, e = {
				memoizedState: Io.memoizedState,
				baseState: Io.baseState,
				baseQueue: Io.baseQueue,
				queue: Io.queue,
				next: null
			}, Lo === null ? J.memoizedState = Lo = e : Lo = Lo.next = e;
		}
		return Lo;
	}
	function ns() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function rs(e) {
		var t = Ho;
		return Ho += 1, Uo === null && (Uo = []), e = qa(Uo, e, t), t = J, (Lo === null ? t.memoizedState : Lo.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? uc : dc), e;
	}
	function is(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return rs(e);
			if (e.$$typeof === ae) return;
			if (e.$$typeof === F) return va(e);
		}
		throw Error(i(438, String(e)));
	}
	function as(e) {
		var t = null, n = J.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = J.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = ns(), J.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = z;
		return t.index++, n;
	}
	function os(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function ss(e) {
		return cs(ts(), Io, e);
	}
	function cs(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Fo & f) === f : (Z & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Ma && (d = !0);
					else if ((Fo & p) === p) {
						u = u.next, p === Ma && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, J.lanes |= p, ad |= p;
					f = u.action, Bo && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, J.lanes |= f, ad |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !Pr(o, e.memoizedState) && (Oc = !0, d && (n = Na, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function ls(e) {
		var t = ts(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			Pr(o, t.memoizedState) || (Oc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function us(e, t, n) {
		var r = J, a = ts(), o = q;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !Pr((Io || a).memoizedState, n);
		if (s && (a.memoizedState = n, Oc = !0), a = a.queue, Fs(ps.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Lo !== null && !!(Lo.memoizedState.tag & 1), As(e ? 9 : 8, { destroy: void 0 }, fs.bind(null, r, a, n, t), null), e) {
			if (r.flags |= 2048, Zu === null) throw Error(i(349));
			o || Fo & 127 || ds(r, t, n);
		}
		return n;
	}
	function ds(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = J.updateQueue, t === null ? (t = ns(), J.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function fs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, ms(t) && hs(e);
	}
	function ps(e, t, n) {
		return n(function() {
			ms(t) && hs(e);
		});
	}
	function ms(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Pr(e, n);
		} catch {
			return !0;
		}
	}
	function hs(e) {
		var t = bi(e, 2);
		t !== null && Md(t, e, 2);
	}
	function gs(e) {
		var t = es();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Bo) {
				We(!0);
				try {
					n();
				} finally {
					We(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: os,
			lastRenderedState: e
		}, t;
	}
	function _s(e, t, n, r) {
		return e.baseState = n, cs(e, Io, typeof r == "function" ? r : os);
	}
	function vs(e, t, n, r, a) {
		if (oc(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			B.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, ys(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function ys(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = B.T, o = {};
			o.types = a === null ? null : a.types, B.T = o;
			try {
				var s = n(i, r), c = B.S;
				c !== null && c(o, s), bs(e, t, s);
			} catch (n) {
				Ss(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), B.T = a;
			}
		} else try {
			a = n(i, r), bs(e, t, a);
		} catch (n) {
			Ss(e, t, n);
		}
	}
	function bs(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			xs(e, t, n);
		}, function(n) {
			return Ss(e, t, n);
		}) : xs(e, t, n);
	}
	function xs(e, t, n) {
		t.status = "fulfilled", t.value = n, Cs(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ys(e, n)));
	}
	function Ss(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, Cs(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function Cs(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function ws(e, t) {
		return t;
	}
	function Ts(e, t) {
		if (q) {
			var n = Zu.formState;
			if (n !== null) {
				a: {
					var r = J;
					if (q) {
						if (Zi) {
							b: {
								for (var i = Zi, a = $i; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lm(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								Zi = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ta(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = es(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ws,
			lastRenderedState: t
		}, n.queue = r, n = rc.bind(null, J, r), r.dispatch = n, r = gs(!1), a = ac.bind(null, J, !1, r.queue), r = es(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = vs.bind(null, J, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Es(e) {
		return Ds(ts(), Io, e);
	}
	function Ds(e, t, n) {
		if (t = cs(e, t, ws)[0], e = ss(os)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = rs(t);
		} catch (e) {
			throw e === Ha ? Wa : e;
		}
		else r = t;
		t = ts();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (J.flags |= 2048, As(9, { destroy: void 0 }, Os.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Os(e, t) {
		e.action = t;
	}
	function ks(e) {
		var t = ts(), n = Io;
		if (n !== null) return Ds(t, n, e);
		ts(), t = t.memoizedState, n = ts();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function As(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = J.updateQueue, t === null && (t = ns(), J.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function js() {
		return ts().memoizedState;
	}
	function Ms(e, t, n, r) {
		var i = es();
		J.flags |= e, i.memoizedState = As(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function Ns(e, t, n, r) {
		var i = ts();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		Io !== null && r !== null && Ko(r, Io.memoizedState.deps) ? i.memoizedState = As(t, a, n, r) : (J.flags |= e, i.memoizedState = As(1 | t, a, n, r));
	}
	function Ps(e, t) {
		Ms(8390656, 8, e, t);
	}
	function Fs(e, t) {
		Ns(2048, 8, e, t);
	}
	function Is(e) {
		J.flags |= 4;
		var t = J.updateQueue;
		if (t === null) t = ns(), J.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Ls(e) {
		var t = ts().memoizedState;
		return Is({
			ref: t,
			nextImpl: e
		}), function() {
			if (Y & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Rs(e, t) {
		return Ns(4, 2, e, t);
	}
	function zs(e, t) {
		return Ns(4, 4, e, t);
	}
	function Bs(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function Vs(e, t, n) {
		n = n == null ? null : n.concat([e]), Ns(4, 4, Bs.bind(null, t, e), n);
	}
	function Hs() {}
	function Us(e, t) {
		var n = ts();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Ko(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Ws(e, t) {
		var n = ts();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Ko(t, r[1])) return r[0];
		if (r = e(), Bo) {
			We(!0);
			try {
				e();
			} finally {
				We(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Gs(e, t, n) {
		return n === void 0 || Fo & 1073741824 && !(Z & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Ad(), J.lanes |= e, ad |= e, n);
	}
	function Ks(e, t, n, r) {
		return Pr(n, t) ? n : yo.current === null ? !(Fo & 106) || Fo & 1073741824 && !(Z & 261930) ? (Oc = !0, e.memoizedState = n) : (e = Ad(), J.lanes |= e, ad |= e, t) : (e = Gs(e, n, r), Pr(e, t) || (Oc = !0), e);
	}
	function qs(e, t, n, r, i) {
		var a = V.p;
		V.p = a !== 0 && 8 > a ? a : 8;
		var o = B.T, s = {};
		s.types = o === null ? null : o.types, B.T = s, ac(e, !1, t, n);
		try {
			var c = i(), l = B.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? ic(e, t, Ia(c, r), kd(e)) : ic(e, t, r, kd(e));
		} catch (n) {
			ic(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, kd());
		} finally {
			V.p = a, o !== null && s.types !== null && (o.types = s.types), B.T = o;
		}
	}
	function Js() {}
	function Ys(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Xs(e).queue;
		qs(e, a, t, de, n === null ? Js : function() {
			return Zs(e), n(r);
		});
	}
	function Xs(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: de,
			baseState: de,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: os,
				lastRenderedState: de
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: os,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function Zs(e) {
		var t = Xs(e);
		t.next === null && (t = e.alternate.memoizedState), ic(e, t.next.queue, {}, kd());
	}
	function Qs() {
		return va(sh);
	}
	function $s() {
		return ts().memoizedState;
	}
	function ec() {
		return ts().memoizedState;
	}
	function tc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = kd();
					e = lo(n);
					var r = uo(t, e, n);
					r !== null && (Md(r, t, n), fo(r, t, n)), t = { cache: Ta() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function nc(e, t, n) {
		var r = kd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, oc(e) ? sc(t, n) : (n = yi(e, t, n, r), n !== null && (Md(n, e, r), cc(n, t, r)));
	}
	function rc(e, t, n) {
		ic(e, t, n, kd());
	}
	function ic(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (oc(e)) sc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Pr(s, o)) return vi(e, t, i, 0), Zu === null && _i(), !1;
			} catch {}
			if (n = yi(e, t, i, r), n !== null) return Md(n, e, r), cc(n, t, r), !0;
		}
		return !1;
	}
	function ac(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Nf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, oc(e)) {
			if (t) throw Error(i(479));
		} else t = yi(e, n, r, 2), t !== null && Md(t, e, 2);
	}
	function oc(e) {
		var t = e.alternate;
		return e === J || t !== null && t === J;
	}
	function sc(e, t) {
		zo = Ro = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function cc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ct(e, n);
		}
	}
	var lc = {
		readContext: va,
		use: is,
		useCallback: Go,
		useContext: Go,
		useEffect: Go,
		useImperativeHandle: Go,
		useLayoutEffect: Go,
		useInsertionEffect: Go,
		useMemo: Go,
		useReducer: Go,
		useRef: Go,
		useState: Go,
		useDebugValue: Go,
		useDeferredValue: Go,
		useTransition: Go,
		useSyncExternalStore: Go,
		useId: Go,
		useHostTransitionStatus: Go,
		useFormState: Go,
		useActionState: Go,
		useOptimistic: Go,
		useMemoCache: Go,
		useCacheRefresh: Go,
		useEffectEvent: Go
	}, uc = {
		readContext: va,
		use: is,
		useCallback: function(e, t) {
			return es().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: va,
		useEffect: Ps,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Ms(4194308, 4, Bs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Ms(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Ms(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = es();
			t = t === void 0 ? null : t;
			var r = e();
			if (Bo) {
				We(!0);
				try {
					e();
				} finally {
					We(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = es();
			if (n !== void 0) {
				var i = n(t);
				if (Bo) {
					We(!0);
					try {
						n(t);
					} finally {
						We(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = nc.bind(null, J, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = es();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = gs(e);
			var t = e.queue, n = rc.bind(null, J, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			return Gs(es(), e, t);
		},
		useTransition: function() {
			var e = gs(!1);
			return e = qs.bind(null, J, e.queue, !0, !1), es().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = J, a = es();
			if (q) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), Zu === null) throw Error(i(349));
				Z & 127 || ds(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, Ps(ps.bind(null, r, o, e), [e]), r.flags |= 2048, As(9, { destroy: void 0 }, fs.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = es(), t = Zu.identifierPrefix;
			if (q) {
				var n = Wi, r = Ui;
				n = (r & ~(1 << 32 - Ge(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Vo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Wo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: Qs,
		useFormState: Ts,
		useActionState: Ts,
		useOptimistic: function(e) {
			var t = es();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = ac.bind(null, J, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: as,
		useCacheRefresh: function() {
			return es().memoizedState = tc.bind(null, J);
		},
		useEffectEvent: function(e) {
			var t = es(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (Y & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, dc = {
		readContext: va,
		use: is,
		useCallback: Us,
		useContext: va,
		useEffect: Fs,
		useImperativeHandle: Vs,
		useInsertionEffect: Rs,
		useLayoutEffect: zs,
		useMemo: Ws,
		useReducer: ss,
		useRef: js,
		useState: function() {
			return ss(os);
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			return Ks(ts(), Io.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ss(os)[0], t = ts().memoizedState;
			return [typeof e == "boolean" ? e : rs(e), t];
		},
		useSyncExternalStore: us,
		useId: $s,
		useHostTransitionStatus: Qs,
		useFormState: Es,
		useActionState: Es,
		useOptimistic: function(e, t) {
			return _s(ts(), Io, e, t);
		},
		useMemoCache: as,
		useCacheRefresh: ec,
		useEffectEvent: Ls
	}, fc = {
		readContext: va,
		use: is,
		useCallback: Us,
		useContext: va,
		useEffect: Fs,
		useImperativeHandle: Vs,
		useInsertionEffect: Rs,
		useLayoutEffect: zs,
		useMemo: Ws,
		useReducer: ls,
		useRef: js,
		useState: function() {
			return ls(os);
		},
		useDebugValue: Hs,
		useDeferredValue: function(e, t) {
			var n = ts();
			return Io === null ? Gs(n, e, t) : Ks(n, Io.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ls(os)[0], t = ts().memoizedState;
			return [typeof e == "boolean" ? e : rs(e), t];
		},
		useSyncExternalStore: us,
		useId: $s,
		useHostTransitionStatus: Qs,
		useFormState: ks,
		useActionState: ks,
		useOptimistic: function(e, t) {
			var n = ts();
			return Io === null ? (n.baseState = e, [e, n.queue.dispatch]) : _s(n, Io, e, t);
		},
		useMemoCache: as,
		useCacheRefresh: ec,
		useEffectEvent: Ls
	};
	function pc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : D({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var mc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = kd(), i = lo(r);
			i.payload = t, n != null && (i.callback = n), t = uo(e, i, r), t !== null && (Md(t, e, r), fo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = kd(), i = lo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = uo(e, i, r), t !== null && (Md(t, e, r), fo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = kd(), r = lo(n);
			r.tag = 2, t != null && (r.callback = t), t = uo(e, r, n), t !== null && (Md(t, e, n), fo(t, e, n));
		}
	};
	function hc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Fr(n, r) || !Fr(i, a) : !0;
	}
	function gc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && mc.enqueueReplaceState(t, t.state, null);
	}
	function _c(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = D({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function vc(e) {
		pi(e);
	}
	function yc(e) {
		console.error(e);
	}
	function bc(e) {
		pi(e);
	}
	function xc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Sc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Cc(e, t, n) {
		return n = lo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			xc(e, t);
		}, n;
	}
	function wc(e) {
		return e = lo(e), e.tag = 3, e;
	}
	function Tc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Sc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Sc(t, n, r), typeof i != "function" && (gd === null ? gd = /* @__PURE__ */ new Set([this]) : gd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Ec(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && ha(t, n, a, !0), n = wo.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return To === null ? Wd() : n.alternate === null && id === 0 && (id = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), pf(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Ga ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), pf(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return pf(e, r, a), Wd(), !1;
		}
		if (q) return t = wo.current, t === null ? (r !== ea && (t = Error(i(423), { cause: r }), sa(Fi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Fi(r, n), a = Cc(e.stateNode, r, a), po(e, a), id !== 4 && (id = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== ea && (e = Error(i(422), { cause: r }), sa(Fi(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Fi(o, n), ud === null ? ud = [o] : ud.push(o), id !== 4 && (id = 2), t === null) return !0;
		r = Fi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Cc(n.stateNode, r, e), po(n, e), !1;
				case 1:
					if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (gd === null || !gd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = wc(a), Tc(a, e, n, r), po(n, a), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Dc = Error(i(461)), Oc = !1;
	function kc(e, t, n, r) {
		t.child = e === null ? ao(t, null, n, r) : io(t, e.child, n, r);
	}
	function Ac(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return _a(t), r = qo(e, t, n, o, a, i), s = Zo(), e !== null && !Oc ? (Qo(e, t, i), il(e, t, i)) : (q && s && qi(t), t.flags |= 1, kc(e, t, r, i), t.child);
	}
	function jc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ei(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Mc(e, t, a, r, i)) : (e = ki(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !al(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Fr : n, n(o, r) && e.ref === t.ref) return il(e, t, i);
		}
		return t.flags |= 1, e = Di(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Mc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Fr(a, r) && e.ref === t.ref) {
				if (Oc = !1, t.pendingProps = r = a, al(e, i)) e.flags & 131072 && (Oc = !0);
				else return t.lanes = e.lanes, il(e, t, i);
			}
		}
		return Bc(e, t, n, r, i);
	}
	function Nc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Fc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ba(t, a === null ? null : a.cachePool), a === null ? So() : xo(t, a), Oo(t);
			else return r = t.lanes = 536870912, Fc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ba(t, null), So(), ko()) : (Ba(t, a.cachePool), xo(t, a), ko(), t.memoizedState = null);
		return kc(e, t, i, n), t.child;
	}
	function Pc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Fc(e, t, n, r, i) {
		var a = za();
		return a = a === null ? null : {
			parent: wa._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ba(t, null), So(), Oo(t), e !== null && ha(e, t, r, !0), t.childLanes = i, null;
	}
	function Ic(e, t) {
		return t = Yc({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Lc(e, t, n) {
		return io(t, e.child, null, n), e = Ic(t, t.pendingProps), e.flags |= 2, Ao(t), t.memoizedState = null, e;
	}
	function Rc(e, t, n) {
		var r = t.pendingProps, a = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (q) {
				if (r.mode === "hidden") return e = Ic(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Pc(null, e);
				if (Do(t), (e = Zi) ? (e = am(e, $i), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Hi === null ? null : {
						id: Ui,
						overflow: Wi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Mi(e), n.return = t, t.child = n, Xi = t, Zi = null)) : e = null, e === null) throw ta(t);
				return t.lanes = 536870912, null;
			}
			return Ic(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (Do(t), a) {
				if (t.flags & 256) t.flags &= -257, t = Lc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(i(558));
			} else if (Oc || ha(e, t, n, !1), a = (n & e.childLanes) !== 0, Oc || a) {
				if (yo.current === null) {
					if (r = Zu, r !== null && (s = lt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, bi(e, s), Md(r, e, s), Dc;
					Wd();
				}
				t = Lc(e, t, n);
			} else e = o.treeContext, Zi = lm(s.nextSibling), Xi = t, q = !0, Qi = null, $i = !1, e !== null && Yi(t, e), t = Ic(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Di(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function zc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Bc(e, t, n, r, i) {
		return _a(t), n = qo(e, t, n, r, void 0, i), r = Zo(), e !== null && !Oc ? (Qo(e, t, i), il(e, t, i)) : (q && r && qi(t), t.flags |= 1, kc(e, t, n, i), t.child);
	}
	function Vc(e, t, n, r, i, a) {
		return _a(t), t.updateQueue = null, n = Yo(t, r, n, i), Jo(e), r = Zo(), e !== null && !Oc ? (Qo(e, t, a), il(e, t, a)) : (q && r && qi(t), t.flags |= 1, kc(e, t, n, a), t.child);
	}
	function Hc(e, t, n, r, i) {
		if (_a(t), t.stateNode === null) {
			var a = Ci, o = n.contextType;
			typeof o == "object" && o && (a = va(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = mc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, so(t), o = n.contextType, a.context = typeof o == "object" && o ? va(o) : Ci, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (pc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && mc.enqueueReplaceState(a, a.state, null), go(t, r, a, i), ho(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = _c(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ci, typeof u == "object" && u && (o = va(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && gc(t, a, r, o), oo = !1;
			var f = t.memoizedState;
			a.state = f, go(t, r, a, i), ho(), l = t.memoizedState, s || f !== l || oo ? (typeof d == "function" && (pc(t, n, d, r), l = t.memoizedState), (c = oo || hc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, co(e, t), o = t.memoizedProps, u = _c(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ci, typeof l == "object" && l && (c = va(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && gc(t, a, r, c), oo = !1, f = t.memoizedState, a.state = f, go(t, r, a, i), ho();
			var p = t.memoizedState;
			o !== d || f !== p || oo || e !== null && e.dependencies !== null && ga(e.dependencies) ? (typeof s == "function" && (pc(t, n, s, r), p = t.memoizedState), (u = oo || hc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && ga(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, zc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = io(t, e.child, null, i), t.child = io(t, null, n, i)) : kc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = il(e, t, i), e;
	}
	function Uc(e, t, n, r) {
		return aa(), t.flags |= 256, kc(e, t, n, r), t.child;
	}
	var Wc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Gc(e) {
		return {
			baseLanes: e,
			cachePool: Va()
		};
	}
	function Kc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= cd), e;
	}
	function qc(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(jo.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (q) {
				if (i ? Eo(t) : ko(), (e = Zi) ? (e = am(e, $i), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Hi === null ? null : {
						id: Ui,
						overflow: Wi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Mi(e), n.return = t, t.child = n, Xi = t, Zi = null)) : e = null, e === null) throw ta(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (ko(), i = t.mode, a = Yc({
				mode: "hidden",
				children: a
			}, i), r = Ai(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Gc(n), r.childLanes = Kc(e, o, n), t.memoizedState = Wc, Pc(null, r)) : (Eo(t), Jc(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return Zc(e, t, a, o, r, c, s, n);
		}
		return i ? (ko(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Di(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Ai(i, a, n, null), i.flags |= 2) : i = Di(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Pc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Gc(n) : (a = i.cachePool, a === null ? a = Va() : (s = wa._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Kc(e, o, n), t.memoizedState = Wc, Pc(e.child, r)) : (Eo(t), n = e.child, e = n.sibling, n = Di(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Jc(e, t) {
		return t = Yc({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function Yc(e, t) {
		return e = Ti(22, e, null, t), e.lanes = 0, e;
	}
	function Xc(e, t, n) {
		return io(t, e.child, null, n), e = Jc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Zc(e, t, n, r, a, o, s, c) {
		if (n) return t.flags & 256 ? (Eo(t), t.flags &= -257, Xc(e, t, c)) : t.memoizedState === null ? (ko(), o = a.fallback, s = t.mode, a = Yc({
			mode: "visible",
			children: a.children
		}, s), o = Ai(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, io(t, e.child, null, c), a = t.child, a.memoizedState = Gc(c), a.childLanes = Kc(e, r, c), t.memoizedState = Wc, Pc(null, a)) : (ko(), t.child = e.child, t.flags |= 128, null);
		if (Eo(t), sm(o)) {
			if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (a = Error(i(419)), a.stack = "", a.digest = r, sa({
				value: a,
				source: null,
				stack: null
			})), Xc(e, t, c);
		}
		if (Oc || ha(e, t, c, !1), r = (c & e.childLanes) !== 0, Oc || r) {
			if (yo.current !== null) return Xc(e, t, c);
			if (r = Zu, r !== null && (a = lt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, bi(e, a), Md(r, e, a), Dc;
			return om(o) || Wd(), Xc(e, t, c);
		}
		return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, Zi = lm(o.nextSibling), Xi = t, q = !0, Qi = null, $i = !1, e !== null && Yi(t, e), t = Jc(t, a.children), t.flags |= 134221824, t);
	}
	function Qc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), pa(e.return, t, n);
	}
	function $c(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Po(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function el(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function tl(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function nl(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = jo.current;
		if (t.flags & 128) return Mo(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Mo(t, o), i === "backwards" && e !== null ? (tl(e), kc(e, t, r, n), tl(e)) : kc(e, t, r, n), r = q ? zi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Qc(e, n, t);
			else if (e.tag === 19) Qc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = $c(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, tl(t)), el(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Po(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				el(t, !0, n, null, a, r);
				break;
			case "together":
				el(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = $c(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), el(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function rl(e, t, n) {
		var r = t.pendingProps;
		return da(t, t.type, r.value), kc(e, t, r.children, n), t.child;
	}
	function il(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), ad |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (ha(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = Di(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Di(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function al(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && ga(e)));
	}
	function ol(e, t, n) {
		switch (t.tag) {
			case 3:
				ve(t, t.stateNode.containerInfo), da(t, wa, e.memoizedState.cache), aa();
				break;
			case 27:
			case 5:
				be(t);
				break;
			case 4:
				ve(t, t.stateNode.containerInfo);
				break;
			case 10:
				da(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Do(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Eo(t), t.flags |= 128, null;
					r = ha(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? qc(e, t, n) : (Eo(t), e = il(e, t, n), e === null ? null : e.sibling);
				}
				Eo(t);
				break;
			case 19:
				if (t.flags & 128) return nl(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (ha(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return nl(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Mo(t, jo.current), r) break;
				return null;
			case 22: return t.lanes = 0, Nc(e, t, n, t.pendingProps);
			case 24: da(t, wa, e.memoizedState.cache);
		}
		return il(e, t, n);
	}
	function sl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Oc = !0;
			else {
				if (!al(e, n) && !(t.flags & 128)) return Oc = !1, ol(e, t, n);
				Oc = !!(e.flags & 131072);
			}
		} else Oc = !1, q && t.flags & 1048576 && Ki(t, zi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Ja(t.elementType), t.type = e, typeof e == "function") Ei(e) ? (r = _c(e, r), t.tag = 1, t = Hc(null, t, e, r, n)) : (t.tag = 0, t = Bc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === I) {
								t.tag = 11, t = Ac(null, t, e, r, n);
								break a;
							}
							if (a === te) {
								t.tag = 14, t = jc(null, t, e, r, n);
								break a;
							}
							if (a === F) {
								t.tag = 10, t.type = e, t = rl(null, t, n);
								break a;
							}
						}
						throw t = le(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return Bc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = _c(r, t.pendingProps), Hc(e, t, r, a, n);
			case 3:
				a: {
					if (ve(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, co(e, t), go(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, da(t, wa, r), r !== o.cache && ma(t, [wa], n, !0), ho(), r = s.element, o.isDehydrated) {
						if (o = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
							t = Uc(e, t, r, n);
							break a;
						}
						if (r !== a) {
							a = Fi(Error(i(424)), t), sa(a), t = Uc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (Zi = lm(e.firstChild), Xi = t, q = !0, Qi = null, $i = !0, n = ao(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (aa(), r === a) {
							t = il(e, t, n);
							break a;
						}
						kc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return zc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : q || (t.stateNode = fp(t.type, t.pendingProps, ge.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return be(t), e === null && q && (r = t.stateNode = hm(t.type, t.pendingProps, ge.current), Xi = t, $i = !0, a = Zi, Sp(t.type) ? (um = a, Zi = lm(r.firstChild)) : Zi = a), kc(e, t, t.pendingProps.children, n), zc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && q && ((a = r = Zi) && (r = rm(r, t.type, t.pendingProps, $i), r === null ? a = !1 : (t.stateNode = r, Xi = t, Zi = lm(r.firstChild), $i = !1, a = !0)), a || ta(t)), be(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = qo(e, t, Xo, null, null, n), sh._currentValue = a), zc(e, t), kc(e, t, r, n), t.child;
			case 6: return e === null && q && ((e = n = Zi) && (n = im(n, t.pendingProps, $i), n === null ? e = !1 : (t.stateNode = n, Xi = t, Zi = null, e = !0)), e || ta(t)), null;
			case 13: return qc(e, t, n);
			case 4: return ve(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = io(t, null, r, n) : kc(e, t, r, n), t.child;
			case 11: return Ac(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, zc(e, t), kc(e, t, r, n), t.child;
			case 8: return kc(e, t, t.pendingProps.children, n), t.child;
			case 12: return kc(e, t, t.pendingProps.children, n), t.child;
			case 10: return rl(e, t, n);
			case 9: return a = t.type._context, r = t.pendingProps.children, _a(t), a = va(a), r = r(a), t.flags |= 1, kc(e, t, r, n), t.child;
			case 14: return jc(e, t, t.type, t.pendingProps, n);
			case 15: return Mc(e, t, t.type, t.pendingProps, n);
			case 19: return nl(e, t, n);
			case 31: return Rc(e, t, n);
			case 22: return Nc(e, t, n, t.pendingProps);
			case 24: return _a(t), r = va(wa), e === null ? (a = za(), a === null && (a = Zu, o = Ta(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, so(t), da(t, wa, a)) : ((e.lanes & n) !== 0 && (co(e, t), go(t, null, null, n), ho()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, da(t, wa, r), r !== a.cache && ma(t, [wa], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), da(t, wa, r))), kc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : q && qi(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : zc(e, t), kc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function cl(e) {
		e.flags |= 4;
	}
	function ll(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Vd()) e.flags |= 8192;
				else throw Ya = Ga, Ua;
			}
		} else e.flags &= -16777217;
	}
	function ul(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Vd()) e.flags |= 8192;
			else throw Ya = Ga, Ua;
		}
	}
	function dl(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : rt(), e.lanes |= t, ld |= t);
	}
	function fl(e, t) {
		if (!q) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function pl(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function ml(e, t, n) {
		var r = t.pendingProps;
		switch (Ji(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return pl(t), null;
			case 1: return pl(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), fa(wa), ye(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ia(t) ? cl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, oa())), pl(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (cl(t), o === null ? (pl(t), ll(t, a, null, r, n)) : (pl(t), ul(t, o))) : o ? o === e.memoizedState ? (pl(t), t.flags &= -16777217) : (cl(t), pl(t), ul(t, o)) : (e = e.memoizedProps, e !== r && cl(t), pl(t), ll(t, a, e, r, n)), null;
			case 27:
				if (xe(t), n = ge.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return pl(t), t.subtreeFlags &= -33554433, null;
					}
					e = me.current, ia(t) ? na(t, e) : (e = hm(a, r, n), t.stateNode = e, cl(t));
				}
				return pl(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (xe(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return pl(t), t.subtreeFlags &= -33554433, null;
					}
					if (o = me.current, ia(t)) na(t, o);
					else {
						var s = lp(ge.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[ht] = t, o[gt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (np(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && cl(t);
					}
				}
				return pl(t), t.subtreeFlags &= -33554433, ll(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && cl(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = ge.current, ia(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Xi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[ht] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || $f(e.nodeValue, n)), e || ta(t, !0);
					} else e = lp(e).createTextNode(r), e[ht] = t, t.stateNode = e;
				}
				return pl(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = ia(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[ht] = t;
						} else aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						pl(t), e = !1;
					} else n = oa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Ao(t), t) : (Ao(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return pl(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = ia(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[ht] = t;
						} else aa(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						pl(t), a = !1;
					} else a = oa(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (Ao(t), t) : (Ao(t), null);
				}
				return Ao(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), dl(t, t.updateQueue), pl(t), null);
			case 4: return ye(), e === null && Uf(t.stateNode.containerInfo), t.flags |= 67108864, pl(t), null;
			case 10: return fa(t.type), pl(t), null;
			case 19:
				if (No(t), r = t.memoizedState, r === null) return pl(t), null;
				if (a = !!(t.flags & 128), o = r.rendering, o === null) {
					if (a) fl(r, !1);
					else {
						if (id !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (o = Po(e), o !== null) {
								for (t.flags |= 128, fl(r, !1), e = o.updateQueue, t.updateQueue = e, dl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Oi(n, e), n = n.sibling;
								return Mo(t, jo.current & 1 | 2), q && Gi(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ne() > md && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!a) {
						if (e = Po(o), e !== null) {
							if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, dl(t, e), fl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !o.alternate && !q) return pl(t), null;
						} else 2 * Ne() - r.renderingStartTime > md && n !== 536870912 && (t.flags |= 128, a = !0, fl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ne(), e.sibling = null, o = jo.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || q ? Mo(t, o) : (n = o, W(wo, t), W(jo, n), To === null && (To = t)), q && Gi(t, r.treeForkCount), e;
				}
				return pl(t), null;
			case 22:
			case 23: return Ao(t), Co(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (pl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : pl(t), n = t.updateQueue, n !== null && dl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && U(Ra), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), fa(wa), pl(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, pl(t), null;
		}
		throw Error(i(156, t.tag));
	}
	function hl(e, t) {
		switch (Ji(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return fa(wa), ye(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return xe(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Ao(t), t.alternate === null) throw Error(i(340));
					aa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Ao(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					aa();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return No(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return ye(), null;
			case 10: return fa(t.type), null;
			case 22:
			case 23: return Ao(t), Co(), e !== null && U(Ra), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return fa(wa), null;
			case 25: return null;
			default: return null;
		}
	}
	function gl(e, t) {
		switch (Ji(t), t.tag) {
			case 3:
				fa(wa), ye();
				break;
			case 26:
			case 27:
			case 5:
				xe(t);
				break;
			case 4:
				ye();
				break;
			case 31:
				t.memoizedState !== null && Ao(t);
				break;
			case 13:
				Ao(t);
				break;
			case 19:
				No(t);
				break;
			case 10:
				fa(t.type);
				break;
			case 22:
			case 23:
				Ao(t), Co(), e !== null && U(Ra);
				break;
			case 24: fa(wa);
		}
	}
	function _l(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function vl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								ff(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function yl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				vo(t, n);
			} catch (t) {
				ff(e, e.return, t);
			}
		}
	}
	function bl(e, t, n) {
		n.props = _c(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			ff(e, t, n);
		}
	}
	function xl(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = ui(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							h(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			ff(e, t, n);
		}
	}
	function Sl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				ff(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				ff(e, t, n);
			}
			else n.current = null;
		}
	}
	function Cl(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function wl(e) {
		for (var t = e.return; t !== null && (Dl(t) && em(e.stateNode, t.stateNode), !El(t));) t = t.return;
	}
	function Tl(e) {
		for (var t = e.return; t !== null && (Dl(t) && tm(e.stateNode, t.stateNode), !El(t));) t = t.return;
	}
	function El(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Dl(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Ol(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	function kl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[gt] = t;
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	function Al(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function jl(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Al(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Ml(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = dn)), Cl(e, r), K = !0;
		else if (i !== 4 && (i === 27 && (Cl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ml(e, t, n, r), e = e.sibling; e !== null;) Ml(e, t, n, r), e = e.sibling;
	}
	function Nl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Cl(e, r), K = !0;
		else if (i !== 4 && (i === 27 && (Cl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Nl(e, t, n, r), e = e.sibling; e !== null;) Nl(e, t, n, r), e = e.sibling;
	}
	function Pl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[ht] = e, t[gt] = n;
		} catch (t) {
			ff(e, e.return, t);
		}
	}
	var Fl = !1, Il = null;
	function Ll(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Fl = !0);
	}
	var Rl = null;
	function zl() {
		var e = Rl;
		return Rl = null, e;
	}
	var Bl = 0;
	function Vl(e, t, n, r, i) {
		return Bl = 0, Hl(e.child, t, n, r, i);
	}
	function Hl(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				Fl = !0, Tp(o, Bl === 0 ? t : t + "_" + Bl, n), Bl++;
			} else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Hl(e.child, t, n, r, i) && (a = !0));
			e = e.sibling;
		}
		return a;
	}
	function Ul(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Ul(e.child, t)), e = e.sibling;
	}
	function Wl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Wl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(i(544));
				var n = t.name;
				t = fi(t.default, t.share), t !== "none" && (Vl(e, n, t, null, !1) || Ul(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Gl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = ui(r, n), a = fi(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Wl(e) : Vl(e, i, a, null, !1) ? (Wl(e), n.paired || t || jd(e, r.onEnter)) : Ul(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Gl(e, t), e = e.sibling;
		else Wl(e);
	}
	function Kl(e) {
		if (Il !== null && Il.size !== 0) {
			var t = Il;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = fi(n.default, n.share);
								if (a !== "none" && (Vl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, jd(e, n.onShare)) : Ul(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Kl(e);
				}
				e = e.sibling;
			}
		}
	}
	function ql(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = ui(t, e.stateNode), r = Il === null ? void 0 : Il.get(n), i = fi(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Vl(e, n, i, null, !1) ? r === void 0 ? jd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Il.delete(n), jd(e, t.onShare)) : Ul(e.child, !1)), Il !== null && Kl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) ql(e), e = e.sibling;
		else Il !== null && Kl(e);
	}
	function Jl(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = ui(t, e.stateNode);
				t = fi(t.default, t.update), e.flags &= -5, t !== "none" && Vl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && Jl(e);
			e = e.sibling;
		}
	}
	function Yl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Ul(e.child, !1));
				}
				Yl(e);
			}
			e = e.sibling;
		}
	}
	function Xl(e) {
		if (e.tag === 30) e.stateNode.paired = null, Ul(e.child, !1), Yl(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Xl(e), e = e.sibling;
		else Yl(e);
	}
	function Zl(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Ul(e.child, !1) : e.subtreeFlags & 33554432 && Zl(e), e = e.sibling;
	}
	function Ql(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Bl < a.length) {
					var l = a[Bl], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Bl === 0 ? n : n + "_" + Bl, i), s && e.flags & 4 || (Rl === null && (Rl = []), Rl.push(c, Bl === 0 ? r : r + "_" + Bl, t.memoizedProps)), Bl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : Ql(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function $l(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = ui(n, r), a = fi(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Bl = 0, i = Ql(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || jd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && $l(e, t);
			e = e.sibling;
		}
	}
	var eu = !1, tu = !1, nu = !1, ru = !1, iu = typeof WeakSet == "function" ? WeakSet : Set, au = null, ou = !1, su = !1, cu = !1, lu = !1;
	function uu(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Br(e), Vr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, au = t, t = n ? 9270 : 1024; au !== null;) {
			if (e = au, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && ql(r[a]);
			if (e.alternate === null && e.flags & 2) n && Ll(e), du(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && ql(r), du(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Ll(e), du(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, au = r) : (n && Jl(e), du(n));
			}
		}
		Il = null;
	}
	function du(e) {
		for (; au !== null;) {
			var t = au, n = e, r = t.alternate, a = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (a & 1024 && r !== null) {
						n = void 0, a = r.memoizedProps, r = r.memoizedState;
						var o = t.stateNode;
						try {
							var s = _c(t.type, a);
							n = o.getSnapshotBeforeUpdate(s, r), o.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							ff(t, t.return, e);
						}
					}
					break;
				case 3:
					if (a & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = ui(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = fi(a.default, a.update), a !== "none" && Vl(r, n, a, r.memoizedState = [], !0));
					break;
				default: if (a & 1024) throw Error(i(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, au = r;
				break;
			}
			au = t.return;
		}
	}
	function fu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Mu(e, n), r & 4 && _l(5, n);
				break;
			case 1:
				if (Mu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						ff(n, n.return, e);
					}
					else {
						var i = _c(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							ff(n, n.return, e);
						}
					}
				}
				r & 64 && yl(n), r & 512 && xl(n, n.return);
				break;
			case 3:
				if (Mu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						vo(e, t);
					} catch (e) {
						ff(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && Pl(n);
			case 26:
			case 5:
				Mu(e, n), t === null && r & 4 && Ol(n), r & 512 && xl(n, n.return);
				break;
			case 12:
				Mu(e, n);
				break;
			case 31:
				Mu(e, n), r & 4 && xu(e, n);
				break;
			case 13:
				Mu(e, n), r & 4 && Su(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = gf.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || eu, !r) {
					var a = t !== null && t.memoizedState !== null || tu;
					t = eu, i = tu, eu = r, (tu = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Pu(e, n, r)) : Mu(e, n), eu = t, tu = i;
				}
				break;
			case 30:
				Mu(e, n), r & 512 && xl(n, n.return);
				break;
			case 7: r & 512 && xl(n, n.return);
			default: Mu(e, n);
		}
	}
	function pu(e, t) {
		for (e = e.child; e !== null;) mu(e, t), e = e.sibling;
	}
	function mu(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					ff(e, e.return, t);
				}
				hu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, K = !0;
				} catch (t) {
					ff(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					ff(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && pu(e, t);
				break;
			default: pu(e, t);
		}
	}
	function hu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						mu(n, r);
						break a;
					case 22:
						n.memoizedState === null && hu(n, r);
						break a;
					default: hu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function gu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, gu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && wt(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var _u = null, vu = !1;
	function yu(e, t, n) {
		for (n = n.child; n !== null;) bu(e, t, n), n = n.sibling;
	}
	function bu(e, t, n) {
		if (Ue && typeof Ue.onCommitFiberUnmount == "function") try {
			Ue.onCommitFiberUnmount(He, n);
		} catch {}
		switch (n.tag) {
			case 26:
				tu || Sl(n, t), yu(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !tu && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				tu || Sl(n, t), Tl(n);
				var r = _u, i = vu;
				Sp(n.type) && (_u = n.stateNode, vu = !1), yu(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), _u = r, vu = i;
				break;
			case 5: tu || Sl(n, t), Tl(n);
			case 6:
				if (n.tag === 6 && Tl(n), r = _u, i = vu, _u = null, yu(e, t, n), _u = r, vu = i, _u !== null) {
					if (vu) try {
						(_u.nodeType === 9 ? _u.body : _u.nodeName === "HTML" ? _u.ownerDocument.body : _u).removeChild(n.stateNode), K = !0;
					} catch (e) {
						ff(n, t, e);
					}
					else try {
						_u.removeChild(n.stateNode), K = !0;
					} catch (e) {
						ff(n, t, e);
					}
				}
				break;
			case 18:
				_u !== null && (vu ? (e = _u, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(_u, n.stateNode));
				break;
			case 4:
				r = _u, i = vu, _u = n.stateNode.containerInfo, vu = !0, yu(e, t, n), _u = r, vu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				vl(2, n, t), tu || vl(4, n, t), yu(e, t, n);
				break;
			case 1:
				tu || (Sl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && bl(n, t, r)), yu(e, t, n);
				break;
			case 21:
				yu(e, t, n);
				break;
			case 22:
				tu = (r = tu) || n.memoizedState !== null, yu(e, t, n), tu = r;
				break;
			case 30:
				Sl(n, t), yu(e, t, n);
				break;
			case 7:
				tu || Sl(n, t), yu(e, t, n);
				break;
			default: yu(e, t, n);
		}
	}
	function xu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				ff(t, t.return, e);
			}
		}
	}
	function Su(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			ff(t, t.return, e);
		}
	}
	function Cu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new iu()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new iu()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function wu(e, t) {
		var n = Cu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = _f.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Tu(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var a = 0; a < r.length; a++) {
			var o = r[a], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							_u = l.stateNode, vu = !1;
							break a;
						}
						break;
					case 5:
						_u = l.stateNode, vu = !1;
						break a;
					case 3:
					case 4:
						_u = l.stateNode.containerInfo, vu = !0;
						break a;
				}
				l = l.return;
			}
			if (_u === null) throw Error(i(160));
			bu(s, c, o), _u = null, vu = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Du(t, e, n), t = t.sibling;
	}
	var Eu = null;
	function Du(e, t, n) {
		var r = e.alternate, a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
					var s = r[o];
					s.ref.impl = s.nextImpl;
				}
				Tu(t, e, n), Ou(e), a & 4 && (vl(3, e, e.return), _l(3, e), vl(5, e, e.return));
				break;
			case 1:
				Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), a & 64 && eu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (o = Eu, Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), a & 4) {
					if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (eu) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, a = o.ownerDocument || o;
										b: switch (t) {
											case "title":
												r = a.getElementsByTagName("title")[0], (!r || r[St] || r[ht] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector("head > title"))), np(r, t, n), r[ht] = e, kt(r), t = r;
												break a;
											case "link":
												if (o = Gm("link", "href", a).get(t + (n.href || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											case "meta":
												if (o = Gm("meta", "content", a).get(t + (n.content || ""))) {
													for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														o.splice(s, 1);
														break b;
													}
												}
												r = a.createElement(t), np(r, t, n), a.head.appendChild(r);
												break;
											default: throw Error(i(468, t));
										}
										r[ht] = e, kt(r), t = r;
									}
									e.stateNode = t;
								}
							} else eu || Km(o, e.type, e.stateNode);
						} else e.stateNode = Bm(o, n, e.memoizedProps);
					} else a === n ? n === null && e.stateNode !== null && kl(e, e.memoizedProps, r.memoizedProps) : (a === null ? (t = r.stateNode, t === null || tu || t.parentNode.removeChild(t)) : a.count--, n === null ? eu || Km(o, e.type, e.stateNode) : Bm(o, n, e.memoizedProps));
				}
				break;
			case 27:
				Tu(t, e, n), Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), r !== null && a & 4 && kl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (o = nu, nu = !1, Tu(t, e, n), nu = o, Ou(e), a & 512 && (tu || r === null || Sl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						nn(t, ""), K = !0;
					} catch (t) {
						ff(e, e.return, t);
					}
				}
				a & 4 && e.stateNode != null && (t = e.memoizedProps, kl(e, t, r === null ? t : r.memoizedProps)), a & 1024 && (ru = !0);
				break;
			case 6:
				if (Tu(t, e, n), Ou(e), a & 4) {
					if (e.stateNode === null) throw Error(i(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, K = !0;
					} catch (t) {
						ff(e, e.return, t);
					}
				}
				break;
			case 3:
				if (K = !1, Wm = null, o = Eu, Eu = bm(t.containerInfo), Tu(t, e, n), Eu = o, Ou(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					ff(e, e.return, t);
				}
				ru && (ru = !1, ku(e)), K = !1;
				break;
			case 4:
				a = nu, nu = eu, r = zt(), o = Eu, Eu = bm(e.stateNode.containerInfo), Tu(t, e, n), Ou(e), Eu = o, K && su && (cu = !0), K = r, nu = a;
				break;
			case 12:
				Tu(t, e, n), Ou(e);
				break;
			case 31:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 13:
				Tu(t, e, n), Ou(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (fd = Ne()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 22:
				o = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = eu, l = tu, u = nu;
				eu = c || o, nu = u || o, tu = l || s, Tu(t, e, n), tu = l, nu = u, eu = c, Ou(e), a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || eu || tu || (t = s || tu, n = eu, r = tu, eu = o || eu, tu = t, Nu(e, 2), eu = n, tu = r), !o && nu || pu(e, o)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, wu(e, n))));
				break;
			case 19:
				Tu(t, e, n), Ou(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, wu(e, t)));
				break;
			case 30:
				a & 512 && (tu || r === null || Sl(r, r.return)), a = zt(), o = su, s = (n & 335544064) === n, c = e.memoizedProps, su = s && fi(c.default, c.update) !== "none", Tu(t, e, n), Ou(e), s && r !== null && K && (e.flags |= 4), su = o, K = a;
				break;
			case 21: break;
			case 7: a & 512 && (tu || r === null || Sl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Tu(t, e, n), Ou(e);
		}
	}
	function Ou(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Al(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var a = e.return; a !== null;) {
					if (Dl(a)) {
						var o = a.stateNode;
						r === null ? r = [o] : r.push(o);
					}
					if (El(a)) break;
					a = a.return;
				}
				var s = r;
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Nl(e, jl(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (nn(l, ""), n.flags &= -33), Nl(e, jl(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Ml(e, jl(e), u, s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				ff(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function ku(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			ku(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Au(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) ju(t, e), t = t.sibling;
		else $l(t, !1);
	}
	function ju(e, t) {
		var n = e.alternate;
		if (n === null) Gl(e, !1);
		else switch (e.tag) {
			case 3:
				if (lu = ou = !1, zl(), Au(t, e), !ou && !cu) {
					if (e = Rl, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), lu = !0;
				}
				Rl = null;
				break;
			case 5:
				Au(t, e);
				break;
			case 4:
				r = ou, ou = !1, Au(t, e), ou && (cu = !0), ou = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Au(t, e) : Gl(e, !1));
				break;
			case 30:
				r = ou, i = zl(), ou = !1, Au(t, e), ou && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = ui(a, o), o = ui(n.memoizedProps, o);
				var s = fi(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Bl = 0, t = Ql(e, n, t, o, s, a, !0), Bl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (jd(e, e.memoizedProps.onUpdate), Rl = i) : i !== null && (i.push.apply(i, Rl), Rl = i), ou = e.flags & 32 ? !0 : r;
				break;
			default: Au(t, e);
		}
	}
	function Mu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) fu(e, t.alternate, t), t = t.sibling;
	}
	function Nu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					vl(4, n, n.return), Nu(n, r);
					break;
				case 1:
					Sl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && bl(n, n.return, i), Nu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Sl(n, n.return), n.tag !== 5 && n.tag !== 27 || Tl(n), Nu(n, r);
					break;
				case 6:
					Tl(n);
					break;
				case 26:
					Sl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || tu || i.parentNode.removeChild(i), Nu(n, r);
					break;
				case 22:
					n.memoizedState === null && Nu(n, r);
					break;
				case 30:
					Sl(n, n.return), Nu(n, r);
					break;
				case 7: Sl(n, n.return);
				default: Nu(n, r);
			}
			e = e.sibling;
		}
	}
	function Pu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Pu(i, a, n), _l(4, a);
					break;
				case 1:
					if (Pu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						ff(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) _o(l[i], c);
						} catch (e) {
							ff(r, r.return, e);
						}
					}
					s && o & 64 && yl(a), xl(a, a.return);
					break;
				case 27: n & 2 && Pl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || wl(a), Pu(i, a, n), s && r === null && o & 4 && Ol(a), xl(a, a.return);
					break;
				case 6:
					wl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || eu || Km(bm(c.ownerDocument), a.type, c), Pu(i, a, n), s && r === null && o & 4 && Ol(a), xl(a, a.return);
					break;
				case 12:
					Pu(i, a, n);
					break;
				case 31:
					Pu(i, a, n), s && o & 4 && xu(i, a);
					break;
				case 13:
					Pu(i, a, n), s && o & 4 && Su(i, a);
					break;
				case 22:
					a.memoizedState === null && Pu(i, a, n), xl(a, a.return);
					break;
				case 30:
					Pu(i, a, n), xl(a, a.return);
					break;
				case 7: xl(a, a.return);
				default: Pu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Fu(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Ea(n));
	}
	function Iu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ea(e));
	}
	function Lu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Ru(e, t, n, r), t = t.sibling;
		else i && Zl(t);
	}
	function Ru(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && Xl(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Lu(e, t, n, r), a & 2048 && _l(9, t);
				break;
			case 1:
				Lu(e, t, n, r);
				break;
			case 3:
				Lu(e, t, n, r), i && lu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Ea(a)));
				break;
			case 12:
				if (a & 2048) {
					Lu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						ff(t, t.return, e);
					}
				} else Lu(e, t, n, r);
				break;
			case 31:
				Lu(e, t, n, r);
				break;
			case 13:
				Lu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && Xl(t), o._visibility & 2 ? Lu(e, t, n, r) : (o._visibility |= 2, zu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && Xl(s), o._visibility & 2 ? Lu(e, t, n, r) : Bu(e, t)), a & 2048 && Fu(s, t);
				break;
			case 24:
				Lu(e, t, n, r), a & 2048 && Iu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Ul(a.child, !0), Ul(t.child, !0))), Lu(e, t, n, r);
				break;
			default: Lu(e, t, n, r);
		}
	}
	function zu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					zu(a, o, s, c, i), _l(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, zu(a, o, s, c, i)) : u._visibility & 2 ? zu(a, o, s, c, i) : Bu(a, o), i && l & 2048 && Fu(o.alternate, o);
					break;
				case 24:
					zu(a, o, s, c, i), i && l & 2048 && Iu(o.alternate, o);
					break;
				default: zu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Bu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Bu(n, r), i & 2048 && Fu(r.alternate, r);
					break;
				case 24:
					Bu(n, r), i & 2048 && Iu(r.alternate, r);
					break;
				default: Bu(n, r);
			}
			t = t.sibling;
		}
	}
	var Vu = 8192;
	function Hu(e, t, n) {
		if (e.subtreeFlags & Vu) for (e = e.child; e !== null;) Uu(e, t, n), e = e.sibling;
	}
	function Uu(e, t, n) {
		switch (e.tag) {
			case 26:
				Hu(e, t, n), e.flags & Vu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, Eu, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Hu(e, t, n), e.flags & Vu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = Eu;
				Eu = bm(e.stateNode.containerInfo), Hu(e, t, n), Eu = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Vu, Vu = 16777216, Hu(e, t, n), Vu = r) : Hu(e, t, n));
				break;
			case 30:
				if ((e.flags & Vu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Il === null && (Il = /* @__PURE__ */ new Map()), Il.set(r, i);
				}
				Hu(e, t, n);
				break;
			default: Hu(e, t, n);
		}
	}
	function Wu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Gu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				au = r, Ju(r, e);
			}
			Wu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Ku(e), e = e.sibling;
	}
	function Ku(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Gu(e), e.flags & 2048 && vl(9, e, e.return);
				break;
			case 3:
				Gu(e);
				break;
			case 12:
				Gu(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qu(e)) : Gu(e);
				break;
			default: Gu(e);
		}
	}
	function qu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				au = r, Ju(r, e);
			}
			Wu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					vl(8, t, t.return), qu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, qu(t));
					break;
				default: qu(t);
			}
			e = e.sibling;
		}
	}
	function Ju(e, t) {
		for (; au !== null;) {
			var n = au;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					vl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Ea(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, au = r;
			else a: for (n = e; au !== null;) {
				r = au;
				var i = r.sibling, a = r.return;
				if (gu(r), r === n) {
					au = null;
					break a;
				}
				if (i !== null) {
					i.return = a, au = i;
					break a;
				}
				au = a;
			}
		}
	}
	var Yu = {
		getCacheForType: function(e) {
			var t = va(wa), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return va(wa).controller.signal;
		}
	}, Xu = typeof WeakMap == "function" ? WeakMap : Map, Y = 0, Zu = null, X = null, Z = 0, Qu = 0, $u = null, ed = !1, td = !1, nd = !1, rd = 0, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = null, dd = null, Q = !1, fd = 0, pd = 0, md = Infinity, hd = null, gd = null, _d = 0, vd = null, yd = null, bd = 0, xd = 0, Sd = null, Cd = null, wd = null, Td = null, Ed = null, Dd = 0, Od = null;
	function kd() {
		return Y & 2 && Z !== 0 ? Z & -Z : B.T === null ? ft() : Nf();
	}
	function Ad() {
		if (cd === 0) {
			if (!(Z & 536870912) || q) {
				var e = Xe;
				Xe <<= 1, !(Xe & 3932160) && (Xe = 262144), cd = e;
			} else cd = 536870912;
		}
		return e = wo.current, e !== null && (e.flags |= 32), cd;
	}
	function jd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(ui(e.memoizedProps, n))), Td === null && (Td = []), Td.push(t.bind(null, r));
		}
	}
	function Md(e, t, n) {
		(e === Zu && (Qu === 2 || Qu === 9) || e.cancelPendingCommit !== null) && (zd(e, 0), Id(e, Z, cd, !1)), at(e, n), (!(Y & 2) || e !== Zu) && (e === Zu && (!(Y & 2) && (od |= n), id === 4 && Id(e, Z, cd, !1)), Tf(e));
	}
	function Nd(e, t, n) {
		if (Y & 6) throw Error(i(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || et(e, t), a = r ? qd(e, t) : Gd(e, t, !0), o = r;
		do {
			if (a === 0) {
				td && !r && Id(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, o && !Fd(n)) {
				a = Gd(e, t, !1), o = !1;
				continue;
			}
			if (a === 2) {
				if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
				else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
				if (s !== 0) {
					t = s;
					a: {
						var c = e;
						a = ud;
						var l = c.current.memoizedState.isDehydrated;
						if (l && (zd(c, s).flags |= 256), s = Gd(c, s, !1), s !== 2 && s !== 6) {
							if (nd && !l) {
								c.errorRecoveryDisabledLanes |= o, od |= o, a = 4;
								break a;
							}
							o = dd, dd = a, o !== null && (dd === null ? dd = o : dd.push.apply(dd, o));
						}
						a = s;
					}
					if (o = !1, a !== 2) continue;
				}
			}
			if (a === 1) {
				zd(e, 0), Id(e, t, 0, !0);
				break;
			}
			a: {
				switch (r = e, o = a, o) {
					case 0:
					case 1: throw Error(i(345));
					case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
					case 6:
						Id(r, t, cd, !ed);
						break a;
					case 2:
						dd = null;
						break;
					case 3:
					case 5: break;
					default: throw Error(i(329));
				}
				if ((t & 62914560) === t && (a = fd + 300 - Ne(), 10 < a)) {
					if (Id(r, t, cd, !ed), $e(r, 0, !0) !== 0) break a;
					bd = t, r.timeoutHandle = gp(Pd.bind(null, r, n, dd, hd, Q, t, cd, od, ld, ed, o, "Throttled", -0, 0), a);
					break a;
				}
				Pd(r, n, dd, hd, Q, t, cd, od, ld, ed, o, null, -0, 0);
			}
			break;
		} while (1);
		Tf(e);
	}
	function Pd(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: dn
		}, Il = null, Uu(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? fd - Ne() : (a & 4194048) === a ? pd - Ne() : 0, m = eh(d, m), m !== null)) {
			bd = a, e.cancelPendingCommit = m(ef.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Id(e, a, o, !l);
			return;
		}
		ef(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Fd(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Pr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Id(e, t, n, r) {
		t = tt(e, t), t &= ~sd, t &= ~od, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Ge(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && st(e, n, t);
	}
	function Ld() {
		return Y & 6 ? !0 : (Ef(0, !1), !1);
	}
	function Rd() {
		if (X !== null) {
			if (Qu === 0) var e = X.return;
			else e = X, ua = la = null, $o(e), Qa = null, $a = 0, e = X;
			for (; e !== null;) gl(e.alternate, e), e = e.return;
			X = null;
		}
	}
	function zd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), bd = 0, Rd(), Zu = e, X = n = Di(e.current, null), Z = t, Qu = 0, $u = null, ed = !1, td = et(e, t), nd = !1, ld = cd = sd = od = ad = id = 0, dd = ud = null, Q = !1, rd = tt(e, t), _i(), n;
	}
	function Bd(e, t) {
		J = null, B.H = lc, t === Ha || t === Wa ? (t = Xa(), Qu = 3) : t === Ua ? (t = Xa(), Qu = 4) : Qu = t === Dc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, $u = t, X === null && (id = 1, xc(e, Fi(t, e.current)));
	}
	function Vd() {
		var e = wo.current;
		return e === null ? !0 : (Z & 4194048) === Z ? To === null : (Z & 62914560) === Z || Z & 536870912 ? e === To : !1;
	}
	function Hd() {
		var e = B.H;
		return B.H = lc, e === null ? lc : e;
	}
	function Ud() {
		var e = B.A;
		return B.A = Yu, e;
	}
	function Wd() {
		id = 4, ed || (Z & 4194048) !== Z && wo.current !== null || (td = !0), !(ad & 134217727) && !(od & 134217727) || Zu === null || Id(Zu, Z, cd, !1);
	}
	function Gd(e, t, n) {
		var r = Y;
		Y |= 2;
		var i = Hd(), a = Ud();
		(Zu !== e || Z !== t) && (hd = null, zd(e, t)), t = !1;
		var o = id;
		a: do
			try {
				if (Qu !== 0 && X !== null) {
					var s = X, c = $u;
					switch (Qu) {
						case 8:
							Rd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							wo.current === null && (t = !0);
							var l = Qu;
							if (Qu = 0, $u = null, Zd(e, s, c, l), n && td) {
								o = 0;
								break a;
							}
							break;
						default: l = Qu, Qu = 0, $u = null, Zd(e, s, c, l);
					}
				}
				Kd(), o = id;
				break;
			} catch (t) {
				Bd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ua = la = null, Y = r, B.H = i, B.A = a, X === null && (Zu = null, Z = 0, _i()), o;
	}
	function Kd() {
		for (; X !== null;) Yd(X);
	}
	function qd(e, t) {
		var n = Y;
		Y |= 2;
		var r = Hd(), a = Ud();
		Zu !== e || Z !== t ? (hd = null, md = Ne() + 500, zd(e, t)) : td = et(e, t);
		a: do
			try {
				if (Qu !== 0 && X !== null) {
					t = X;
					var o = $u;
					b: switch (Qu) {
						case 1:
							Qu = 0, $u = null, Zd(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (Ka(o)) {
								Qu = 0, $u = null, Xd(t);
								break;
							}
							t = function() {
								Qu !== 2 && Qu !== 9 || Zu !== e || (Qu = 7), Tf(e);
							}, o.then(t, t);
							break a;
						case 3:
							Qu = 7;
							break a;
						case 4:
							Qu = 5;
							break a;
						case 7:
							Ka(o) ? (Qu = 0, $u = null, Xd(t)) : (Qu = 0, $u = null, Zd(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (X.tag) {
								case 26: s = X.memoizedState;
								case 5:
								case 27:
									var c = X;
									if (s ? Ym(s) : c.stateNode.complete) {
										Qu = 0, $u = null;
										var l = c.sibling;
										if (l !== null) X = l;
										else {
											var u = c.return;
											u === null ? X = null : (X = u, Qd(u));
										}
										break b;
									}
							}
							Qu = 0, $u = null, Zd(e, t, o, 5);
							break;
						case 6:
							Qu = 0, $u = null, Zd(e, t, o, 6);
							break;
						case 8:
							Rd(), id = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Jd();
				break;
			} catch (t) {
				Bd(e, t);
			}
		while (1);
		return ua = la = null, B.H = r, B.A = a, Y = n, X === null ? (Zu = null, Z = 0, _i(), id) : 0;
	}
	function Jd() {
		for (; X !== null && !je();) Yd(X);
	}
	function Yd(e) {
		var t = sl(e.alternate, e, rd);
		e.memoizedProps = e.pendingProps, t === null ? Qd(e) : X = t;
	}
	function Xd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Vc(n, t, t.pendingProps, t.type, void 0, Z);
				break;
			case 11:
				t = Vc(n, t, t.pendingProps, t.type.render, t.ref, Z);
				break;
			case 5:
				$o(t);
				var r = t;
				r === Xi && (q ? (ra(r), r.tag === 5 && r.stateNode != null && (Zi = r.stateNode)) : (ra(r), q = !0));
			default: gl(n, t), t = X = Oi(t, rd), t = sl(n, t, rd);
		}
		e.memoizedProps = e.pendingProps, t === null ? Qd(e) : X = t;
	}
	function Zd(e, t, n, r) {
		ua = la = null, $o(t), Qa = null, $a = 0;
		var i = t.return;
		try {
			if (Ec(e, i, t, n, Z)) {
				id = 1, xc(e, Fi(n, e.current)), X = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw X = i, t;
			id = 1, xc(e, Fi(n, e.current)), X = null;
			return;
		}
		t.flags & 32768 ? (q || r === 1 ? e = !0 : td || Z & 536870912 ? e = !1 : (ed = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = wo.current, r !== null && r.tag === 13 && (r.flags |= 16384))), $d(t, e)) : Qd(t);
	}
	function Qd(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				$d(t, ed);
				return;
			}
			e = t.return;
			var n = ml(t.alternate, t, rd);
			if (n !== null) {
				X = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				X = t;
				return;
			}
			X = t = e;
		} while (t !== null);
		id === 0 && (id = 5);
	}
	function $d(e, t) {
		do {
			var n = hl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, X = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				X = e;
				return;
			}
			X = e = n;
		} while (e !== null);
		id = 6, X = null;
	}
	function ef(e, t, n, r, a, o, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			lf();
		while (_d !== 0);
		if (Y & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			e === Zu && (X = Zu = null, Z = 0), yd = t, vd = e, bd = n, Sd = a, Cd = r, tf(e, t, n, s, c, l, f);
		}
	}
	function tf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (xd = s, s |= gi, ot(e, n, s, r, i, a), Td = null, (n & 335544064) === n ? (Ed = ka(e), r = 10262) : (Ed = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, vf(Le, function() {
			return uf(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Fl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = B.T, B.T = null, i = V.p, V.p = 2, a = Y, Y |= 4;
			try {
				uu(e, t, n);
			} finally {
				Y = a, V.p = i, B.T = r;
			}
		}
		_d = 1, Fl ? wd = Mp(o, e.containerInfo, Ed, af, of, rf, sf, uf, nf, null, null) : (af(), of(), sf());
	}
	function nf(e) {
		if (_d !== 0) {
			var t = vd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function rf() {
		_d === 3 && (_d = 0, ju(yd, vd), _d = 4);
	}
	function af() {
		if (_d === 1) {
			_d = 0;
			var e = vd, t = yd, n = bd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = B.T, B.T = null;
				var i = V.p;
				V.p = 2;
				var a = Y;
				Y |= 4;
				try {
					su = cu = !1, Du(t, e, n), n = cp;
					var o = Br(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && zr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Vr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Rr(s, h), v = Rr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					Y = a, V.p = i, B.T = r;
				}
			}
			e.current = t, _d = 2;
		}
	}
	function of() {
		if (_d === 2) {
			_d = 0;
			var e = vd, t = yd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = B.T, B.T = null;
				var r = V.p;
				V.p = 2;
				var i = Y;
				Y |= 4;
				try {
					fu(e, t.alternate, t);
				} finally {
					Y = i, V.p = r, B.T = n;
				}
			}
			_d = 3;
		}
	}
	function sf() {
		if (_d === 4 || _d === 3) {
			_d = 0;
			var e = wd;
			wd = null, Me();
			var t = vd, n = yd, r = bd, i = Cd, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? _d = 5 : (_d = 0, yd = vd = null, cf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (gd = null), dt(r), n = n.stateNode, Ue && typeof Ue.onCommitFiberRoot == "function") try {
				Ue.onCommitFiberRoot(He, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = B.T, a = V.p, V.p = 2, B.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					B.T = n, V.p = a;
				}
			}
			if (i = Td, o = Ed, Ed = null, i !== null && (Td = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			bd & 3 && lf(), Tf(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Od ? Dd++ : (Dd = 0, Od = t) : (Dd = 0, Od = null), Ef(0, !1);
		}
	}
	function cf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ea(t)));
	}
	function lf() {
		return wd !== null && (wd.skipTransition(), wd = null), af(), of(), sf(), uf();
	}
	function uf() {
		if (_d !== 5) return !1;
		var e = vd, t = xd;
		xd = 0;
		var n = dt(bd), r = B.T, a = V.p;
		try {
			V.p = 32 > n ? 32 : n, B.T = null, n = Sd, Sd = null;
			var o = vd, s = bd;
			if (_d = 0, yd = vd = null, bd = 0, Y & 6) throw Error(i(331));
			var c = Y;
			if (Y |= 4, Ku(o.current), Ru(o, o.current, s, n), Y = c, Ef(0, !1), Ue && typeof Ue.onPostCommitFiberRoot == "function") try {
				Ue.onPostCommitFiberRoot(He, o);
			} catch {}
			return !0;
		} finally {
			V.p = a, B.T = r, cf(e, t);
		}
	}
	function df(e, t, n) {
		t = Fi(n, t), t = Cc(e.stateNode, t, 2), e = uo(e, t, 2), e !== null && (at(e, 2), Tf(e));
	}
	function ff(e, t, n) {
		if (e.tag === 3) df(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				df(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gd === null || !gd.has(r))) {
					e = Fi(n, e), n = wc(2), r = uo(t, n, 2), r !== null && (Tc(n, r, t, e), at(r, 2), Tf(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function pf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Xu();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (nd = !0, i.add(n), e = mf.bind(null, e, t, n), t.then(e, e));
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Zu === e && (Z & n) === n && (id === 4 || id === 3 && (Z & 62914560) === Z && 300 > Ne() - fd ? Y & 2 ? sd |= n : zd(e, 0) : sd |= n, ld === Z && (ld = 0)), Tf(e);
	}
	function hf(e, t) {
		t === 0 && (t = rt()), e = bi(e, t), e !== null && (at(e, t), Tf(e));
	}
	function gf(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), hf(e, n);
	}
	function _f(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), hf(e, n);
	}
	function vf(e, t) {
		return ke(e, t);
	}
	var yf = null, bf = null, xf = !1, Sf = !1, Cf = !1, wf = 0;
	function Tf(e) {
		e !== bf && e.next === null && (bf === null ? yf = bf = e : bf = bf.next = e), Sf = !0, xf || (xf = !0, Mf());
	}
	function Ef(e, t) {
		if (!Cf && Sf) {
			Cf = !0;
			do
				for (var n = !1, r = yf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - Ge(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, jf(r, a));
						} else a = Z, a = $e(r, r === Zu ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || et(r, a) || (n = !0, jf(r, a));
					}
					r = r.next;
				}
			while (n);
			Cf = !1;
		}
	}
	function Df() {
		Of();
	}
	function Of() {
		Sf = xf = !1;
		var e = 0;
		wf !== 0 && hp() && (e = wf);
		for (var t = Ne(), n = null, r = yf; r !== null;) {
			var i = r.next, a = kf(r, t);
			a === 0 ? (r.next = null, n === null ? yf = i : n.next = i, i === null && (bf = n)) : (n = r, (e !== 0 || a & 3) && (Sf = !0)), r = i;
		}
		_d !== 0 && _d !== 5 || Ef(e, !1), wf !== 0 && (wf = 0);
	}
	function kf(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Ge(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = Zu, n = Z, n = $e(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (Qu === 2 || Qu === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ae(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || et(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ae(r), dt(n)) {
				case 2:
				case 8:
					n = Ie;
					break;
				case 32:
					n = Le;
					break;
				case 268435456:
					n = ze;
					break;
				default: n = Le;
			}
			return r = Af.bind(null, e), n = ke(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ae(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function Af(e, t) {
		if (_d !== 0 && _d !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (lf() && e.callbackNode !== n) return null;
		var r = Z;
		return r = $e(e, e === Zu ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Nd(e, r, t), kf(e, Ne()), e.callbackNode != null && e.callbackNode === n ? Af.bind(null, e) : null);
	}
	function jf(e, t) {
		if (lf()) return null;
		Nd(e, t, !0);
	}
	function Mf() {
		bp(function() {
			Y & 6 ? ke(Fe, Df) : Of();
		});
	}
	function Nf() {
		if (wf === 0) {
			var e = Ma;
			e === 0 && (e = Ye, Ye <<= 1, !(Ye & 261888) && (Ye = 256)), wf = e;
		}
		return wf;
	}
	function Pf(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : un(e);
	}
	function Ff(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Pf((i[gt] || null).action), o = r.submitter;
			o && (t = (t = o[gt] || null) ? Pf(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Mn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (wf !== 0) {
								var e = new FormData(i, o);
								Ys(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), Ys(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var If = 0; If < si.length; If++) {
		var Lf = si[If];
		ci(Lf.toLowerCase(), "on" + (Lf[0].toUpperCase() + Lf.slice(1)));
	}
	ci($r, "onAnimationEnd"), ci(ei, "onAnimationIteration"), ci(ti, "onAnimationStart"), ci("dblclick", "onDoubleClick"), ci("focusin", "onFocus"), ci("focusout", "onBlur"), ci(ni, "onTransitionRun"), ci(ri, "onTransitionStart"), ci(ii, "onTransitionCancel"), ci(ai, "onTransitionEnd"), Pt("onMouseEnter", ["mouseout", "mouseover"]), Pt("onMouseLeave", ["mouseout", "mouseover"]), Pt("onPointerEnter", ["pointerout", "pointerover"]), Pt("onPointerLeave", ["pointerout", "pointerover"]), Nt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Nt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Nt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Nt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Nt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Nt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var Rf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), zf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Rf));
	function Bf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						pi(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						pi(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function $(e, t) {
		var n = t[vt];
		n === void 0 && (n = t[vt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Wf(t, e, 2, !1), n.add(r));
	}
	function Vf(e, t, n) {
		var r = 0;
		t && (r |= 4), Wf(n, e, r, t);
	}
	var Hf = "_reactListening" + Math.random().toString(36).slice(2);
	function Uf(e) {
		if (!e[Hf]) {
			e[Hf] = !0, jt.forEach(function(t) {
				t !== "selectionchange" && (zf.has(t) || Vf(t, !1, e), Vf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Hf] || (t[Hf] = !0, Vf("selectionchange", !1, t));
		}
	}
	function Wf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !xn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Gf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var s = r.tag;
			if (s === 3 || s === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (s === 4) for (s = r.return; s !== null;) {
					var l = s.tag;
					if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
					s = s.return;
				}
				for (; c !== null;) {
					if (s = Tt(c), s === null) return;
					if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = s;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		vn(function() {
			var r = a, i = pn(n), s = [];
			a: {
				var c = oi.get(e);
				if (c !== void 0) {
					var l = Mn, u = e;
					switch (e) {
						case "keypress": if (Dn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Xn;
							break;
						case "focusin":
							u = "focus", l = Vn;
							break;
						case "focusout":
							u = "blur", l = Vn;
							break;
						case "beforeblur":
						case "afterblur":
							l = Vn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = zn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = Bn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = $n;
							break;
						case $r:
						case ei:
						case ti:
							l = Hn;
							break;
						case ai:
							l = er;
							break;
						case "scroll":
						case "scrollend":
							l = Pn;
							break;
						case "wheel":
							l = tr;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = Un;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = Zn;
							break;
						case "submit":
							l = Qn;
							break;
						case "toggle":
						case "beforetoggle": l = nr;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = yn(m, p), g != null && d.push(Kf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), s.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (l = e === "mouseover" || e === "pointerover", c = e === "mouseout" || e === "pointerout", l && n !== fn && (u = n.relatedTarget || n.fromElement) && (Tt(u) || u[_t])) break a;
					(c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Tt(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = zn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = Zn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = c == null ? u : Dt(c), h = l == null ? u : Dt(l), u = new d(g, m + "leave", c, n, i), u.target = f, u.relatedTarget = h, g = null, Tt(i) === r && (d = new d(p, m + "enter", l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? E(c, l, Jf) : null, c !== null && Yf(s, u, c, d, !1), l !== null && f !== null && Yf(s, f, l, d, !0)));
				}
				a: {
					if (c = r ? Dt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var _ = Sr;
					else if (gr(c)) {
						if (Cr) _ = Mr;
						else {
							_ = Ar;
							var v = kr;
						}
					} else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && sn(r.elementType) && (_ = Sr) : _ = jr;
					if (_ &&= _(e, r)) {
						_r(s, _, n, i);
						break a;
					}
					v && v(e, c, r);
				}
				switch (v = r ? Dt(r) : window, e) {
					case "focusin":
						(gr(v) || v.contentEditable === "true") && (Ur = v, Wr = r, Gr = null);
						break;
					case "focusout":
						Gr = Wr = Ur = null;
						break;
					case "mousedown":
						Kr = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Kr = !1, qr(s, n, i);
						break;
					case "selectionchange": if (Hr) break;
					case "keydown":
					case "keyup": qr(s, n, i);
				}
				var y;
				if (ir) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else fr ? ur(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (sr && n.locale !== "ko" && (fr || b !== "onCompositionStart" ? b === "onCompositionEnd" && fr && (y = En()) : (Cn = i, wn = "value" in Cn ? Cn.value : Cn.textContent, fr = !0)), v = qf(r, b), 0 < v.length && (b = new Wn(b, e, null, n, i), s.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = dr(n), y !== null && (b.data = y)))), (y = or ? pr(e, n) : mr(e, n)) && (b = qf(r, "onBeforeInput"), 0 < b.length && (v = new Wn("onBeforeInput", "beforeinput", null, n, i), s.push({
					event: v,
					listeners: b
				}), v.data = y)), Ff(s, e, r, n, i);
			}
			Bf(s, t);
		});
	}
	function Kf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function qf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = yn(e, n), i != null && r.unshift(Kf(e, i, a)), i = yn(e, t), i != null && r.push(Kf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Jf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Yf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = yn(n, a), l != null && o.unshift(Kf(n, l, c))) : i || (l = yn(n, a), l != null && o.push(Kf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Xf = /\r\n?/g, Zf = /\u0000|\uFFFD/g;
	function Qf(e) {
		return (typeof e == "string" ? e : "" + e).replace(Xf, "\n").replace(Zf, "");
	}
	function $f(e, t) {
		return t = Qf(t), Qf(e) === t;
	}
	function ep(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || nn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && nn(e, "" + r);
				else return;
				break;
			case "className":
				Vt(e, "class", r);
				break;
			case "tabIndex":
				Vt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Vt(e, n, r);
				break;
			case "style":
				on(e, r, o);
				return;
			case "data": if (t !== "object") {
				Vt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = un(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof o == "function" && (n === "formAction" ? (t !== "input" && ep(e, t, "name", a.name, a, null), ep(e, t, "formEncType", a.formEncType, a, null), ep(e, t, "formMethod", a.formMethod, a, null), ep(e, t, "formTarget", a.formTarget, a, null)) : (ep(e, t, "encType", a.encType, a, null), ep(e, t, "method", a.method, a, null), ep(e, t, "target", a.target, a, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = un(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = dn);
				return;
			case "onScroll":
				r != null && $("scroll", e);
				return;
			case "onScrollEnd":
				r != null && $("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = un(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				$("beforetoggle", e), $("toggle", e), Bt(e, "popover", r);
				break;
			case "xlinkActuate":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Ht(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Ht(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Bt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = cn.get(n) || n, Bt(e, n, r);
			else return;
		}
		K = !0;
	}
	function tp(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				on(e, r, o);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						o?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") nn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") nn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && $("scroll", e);
				return;
			case "onScrollEnd":
				r != null && $("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = dn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Mt.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), o = n.slice(2, a ? n.length - 7 : void 0), t = e[gt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(o, t, a), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(o, r, a);
						break a;
					}
					K = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Bt(e, n, r);
				}
				return;
		}
		K = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				$("error", e), $("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: ep(e, t, o, s, n, null);
					}
				}
				a && ep(e, t, "srcSet", n.srcSet, n, null), r && ep(e, t, "src", n.src, n, null);
				return;
			case "input":
				$("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: ep(e, t, r, d, n, null);
					}
				}
				Zt(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in $("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: ep(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && $t(e, !!r, n, !0) : $t(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in $("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: ep(e, t, s, c, n, null);
				}
				tn(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: ep(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				$("beforetoggle", e), $("toggle", e), $("cancel", e), $("close", e);
				break;
			case "iframe":
			case "object":
				$("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < Rf.length; r++) $(Rf[r], e);
				break;
			case "image":
				$("error", e), $("load", e);
				break;
			case "details":
				$("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": $("error", e), $("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: ep(e, t, u, r, n, null);
				}
				return;
			default: if (sn(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && ep(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || ep(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (K = !0), o = m;
							break;
						case "name":
							m !== f && (K = !0), a = m;
							break;
						case "checked":
							m !== f && (K = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (K = !0), d = m;
							break;
						case "value":
							m !== f && (K = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (K = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && ep(e, t, p, m, r, f);
					}
				}
				Xt(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || ep(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						o !== l && (K = !0), p = o;
						break;
					case "defaultValue":
						o !== l && (K = !0), c = o;
						break;
					case "multiple": o !== l && (K = !0), s = o;
					default: o !== l && ep(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? $t(e, !!n, n ? [] : "", !1) : $t(e, !!n, t, !0)) : $t(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: ep(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						a !== o && (K = !0), p = a;
						break;
					case "defaultValue":
						a !== o && (K = !0), m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && ep(e, t, s, a, r, o);
				}
				en(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: ep(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (K = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: ep(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && ep(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: ep(e, t, u, p, r, m);
				}
				return;
			default: if (sn(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && ep(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || ep(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[ht] = r, n[gt] = t, np(n, e, t), kt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[St] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : D({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), h(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = b(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = g(this._fragmentFiber);
		e !== null && (e = b(e), e = lp(e).activeElement, e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag !== 6 && (e = b(e), t.observe(e), !1);
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag !== 6 && (e = b(e), t.unobserve(e), !1);
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = g(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = Tt(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = g(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = E(n, a, T), t === null ? t = !1 : (h(t, !0, C, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = E(r, a, T), t === null ? t = !1 : (h(t, !0, w, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(i(566));
		var t = [];
		h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), Zp(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var a = t[r];
			a.tag === 6 ? (a = b(a), Zp(a, n)) : b(a).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = b(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), wt(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[St]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && ep(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === dn && (e.onclick = null), wt(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		wt(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = V.d;
	V.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = Ld();
		return e || t;
	}
	function Cm(e) {
		var t = Et(e);
		t !== null && t.tag === 5 && t.type === "form" ? Zs(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = Yt(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), kt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + Yt(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + Yt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + Yt(n.imageSizes) + "\"]")) : i += "[href=\"" + Yt(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = D({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Ct] = !0, o.onload = o.onerror = function() {
					At(o);
				}), kt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + Yt(r) + "\"][href=\"" + Yt(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = D({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), kt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Ot(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = D({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					kt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Ot(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = D({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), kt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Ot(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = D({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), kt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var a = (a = ge.current) ? bm(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Ot(a).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var o = Ot(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Ot(a).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + Yt(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return D({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Ct]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Ct] = !0, t.onload = t.onerror = At.bind(null, t), np(t, "link", n), kt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + Yt(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + Yt(n.href) + "\"]");
				if (r) return t.instance = r, kt(r), r;
				var a = D({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), kt(r), np(r, "style", a), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = Pm(n.href);
				var o = e.querySelector(Fm(a));
				if (o) return t.state.loading |= 4, t.instance = o, kt(o), o;
				r = Im(n), (a = vm.get(a)) && Hm(r, a), o = (e.ownerDocument || e).createElement("link"), kt(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(o, "link", r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
			case "script": return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, kt(a), a) : (r = n, (a = vm.get(o)) && (r = D({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), kt(a), np(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[St] || a[ht] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, kt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), kt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: F,
		Provider: null,
		Consumer: null,
		_currentValue: de,
		_currentValue2: de,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = it(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = it(0), this.hiddenUpdates = it(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Ti(3, null, null, t), e.current = a, a.stateNode = e, t = Ta(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, so(a), e;
	}
	function uh(e) {
		return e ? (e = Ci, e) : Ci;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = lo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = uo(e, r, t), n !== null && (Md(n, e, t), fo(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = bi(e, 67108864);
			t !== null && Md(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = kd();
			t = ut(t);
			var n = bi(e, t);
			n !== null && Md(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = B.T;
		B.T = null;
		var a = V.p;
		try {
			V.p = 2, yh(e, t, n, r);
		} finally {
			V.p = a, B.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = B.T;
		B.T = null;
		var a = V.p;
		try {
			V.p = 8, yh(e, t, n, r);
		} finally {
			V.p = a, B.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Gf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Et(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = Qe(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Ge(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Tf(a), !(Y & 6) && (md = Ne() + 500, Ef(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = bi(a, 2), s !== null && Md(s, a, 2), Ld(), ph(a, 2);
					}
					if (a = bh(r), a === null && Gf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Gf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = pn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = Tt(e), e !== null) {
			var t = o(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = s(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Pe()) {
				case Fe: return 2;
				case Ie: return 8;
				case Le:
				case Re: return 32;
				case ze: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Et(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = Tt(e.target);
		if (t !== null) {
			var n = o(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = s(n), t !== null) {
						e.blockedOn = t, pt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, pt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				fn = r, n.target.dispatchEvent(r), fn = null;
			} else return t = Et(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = Et(n);
				a !== null && (e.splice(t, 3), t -= 3, Ys(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[gt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[gt] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		dh(n, kd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), Ld(), t[_t] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = ft();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = n.version;
	if (Kh !== "19.3.0") throw Error(i(527, Kh, "19.3.0"));
	V.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : p(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: B,
		reconcilerVersion: "19.3.0"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			He = Jh.inject(qh), Ue = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!a(e)) throw Error(i(299));
		var n = !1, r = "", o = vc, s = yc, c = bc;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh), e[_t] = t.current, Uf(e), new Wh(t);
	};
})), g = /* @__PURE__ */ o(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = h();
})), _ = /* @__PURE__ */ o(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), v = /* @__PURE__ */ o(((e, t) => {
	t.exports = _();
})), y = g(), b = /* @__PURE__ */ c(u(), 1), x = m(), S = v(), C = Object.defineProperty, w = (e, t) => {
	for (var n in t) C(e, n, {
		get: t[n],
		enumerable: !0,
		configurable: !0,
		set: (e) => t[n] = () => e
	});
};
if (typeof b.createContext != "function") throw Error([
	"Remotion requires React.createContext, but it is \"undefined\".",
	"If you are in a React Server Component, turn it into a client component by adding \"use client\" at the top of the file.",
	"",
	"Before:",
	"  import {useCurrentFrame} from \"remotion\";",
	"",
	"After:",
	"  \"use client\";",
	"  import {useCurrentFrame} from \"remotion\";"
].join("\n"));
var T = (0, b.createContext)(!1), E = ({ children: e }) => /* @__PURE__ */ (0, S.jsx)(T.Provider, {
	value: !0,
	children: e
}), D = (0, b.createContext)({
	setError: () => {},
	clearError: () => {}
}), O = () => {
	try {
		return typeof __webpack_module__ > "u" ? null : __webpack_module__.hot ?? null;
	} catch {
		return null;
	}
}, k = class extends b.Component {
	state = { hasError: !1 };
	hmrStatusHandler = null;
	static getDerivedStateFromError() {
		return { hasError: !0 };
	}
	componentDidCatch(e) {
		this.props.onError(e), this.subscribeToHmrReset();
	}
	componentDidMount() {
		this.state.hasError || this.props.onClear();
	}
	componentDidUpdate(e, t) {
		t.hasError && !this.state.hasError && this.props.onClear();
	}
	componentWillUnmount() {
		this.unsubscribeFromHmrReset();
	}
	subscribeToHmrReset() {
		if (this.hmrStatusHandler) return;
		let e = O();
		if (!e) return;
		let t = (e) => {
			e === "idle" && (this.unsubscribeFromHmrReset(), this.setState({ hasError: !1 }));
		};
		this.hmrStatusHandler = t, e.addStatusHandler(t);
	}
	unsubscribeFromHmrReset() {
		let e = this.hmrStatusHandler;
		if (!e) return;
		this.hmrStatusHandler = null;
		let t = O();
		t && t.removeStatusHandler(e);
	}
	render() {
		return this.state.hasError ? null : this.props.children;
	}
}, A = (e) => `asset:${e}`, j = (0, b.createContext)({
	compositions: [],
	folders: [],
	currentCompositionMetadata: null,
	currentAssetMetadata: null,
	canvasContent: null
}), M = (0, b.createContext)({
	registerComposition: () => {},
	unregisterComposition: () => {},
	registerFolder: () => {},
	unregisterFolder: () => {},
	setCanvasContent: () => {},
	setCurrentAssetMetadata: () => {},
	onlyRenderComposition: null
}), N = [], P = null, F = /* @__PURE__ */ new WeakMap(), I = null, L = "_remotionInternalStack", ee = "studio-original://", te = /\(studio-original:\/\/([^\r\n]+):(\d+):(\d+)\)/, ne = ({ fileName: e, lineNumber: t, columnNumber: n }) => `Error
    at remotionOriginalSource (${ee}${encodeURIComponent(e)}:${t}:${n})`, R = (e) => {
	if (!e) return null;
	let t = e.match(te);
	return t ? {
		fileName: decodeURIComponent(t[1]),
		line: Number(t[2]),
		column: Number(t[3])
	} : null;
}, re = () => N, z = (e) => {
	N.push(e);
}, ie = (e) => {
	P = e;
}, ae = () => P, oe = (e) => {
	I = e;
}, se = (e) => I?.(e) ?? e, ce = (e, t) => {
	if (t === void 0) {
		F.delete(e);
		return;
	}
	F.set(e, t);
}, le = (e) => F.get(e) ?? null, ue = (e) => {
	let t = b.Children.toArray(e);
	if (t.length !== 1) return null;
	let n = t[0];
	return !b.isValidElement(n) || typeof n.type != "function" && typeof n.type != "object" ? null : se(n.type);
}, B = Symbol.for("remotion.sequence-order-marker"), V = Symbol.for("remotion.sequence-manager-order-marker"), de = Symbol.for("remotion.composition-order-marker"), fe = Symbol.for("remotion.folder-order-marker"), pe = Symbol.for("remotion.composition-manager-order-marker"), H = "remotion:commit-order", U = (e) => `${e.type}:${e.id}`, W = ({ name: e, parent: t }) => [t, e].filter(Boolean).join("/"), me = ({ children: e }) => e;
Object.defineProperty(me, B, { value: !0 });
var he = ({ children: e }) => e;
Object.defineProperty(he, V, { value: !0 });
var ge = ({ children: e }) => e;
Object.defineProperty(ge, de, { value: !0 });
var _e = ({ children: e }) => e;
Object.defineProperty(_e, fe, { value: !0 });
var ve = ({ children: e }) => e;
Object.defineProperty(ve, pe, { value: !0 });
var ye = {
	compositionManagerMarker: pe,
	compositionMarker: de,
	folderMarker: fe,
	sequenceManagerMarker: V,
	sequenceMarker: B,
	eventName: H
};
function be(e) {
	return !!e;
}
function xe() {
	return [
		"NOD",
		"E_EN",
		"V"
	].join("");
}
var Se = () => ["e", "nv"].join(""), Ce = () => {
	let e = typeof window < "u" && window.remotion_isPlayer, t = typeof window < "u" && window.process !== void 0 && window.process.env !== void 0 && (window.process[Se()][xe()] === "test" || window.process[Se()][xe()] === "production" && typeof window < "u" && window.remotion_puppeteerTimeout !== void 0);
	return {
		isStudio: typeof window < "u" && window.remotion_isStudio,
		isRendering: t,
		isPlayer: e,
		isReadOnlyStudio: typeof window < "u" && window.remotion_isReadOnlyStudio,
		isClientSideRendering: !1
	};
}, we = b.createContext(null), G = () => {
	let e = (0, b.useContext)(we), [t] = (0, b.useState)(() => Ce());
	return e ?? t;
}, Te = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g, Ee = (e) => e.match(Te()), De = (e) => {
	if (e == null) throw TypeError("You must pass a name to a <Folder />.");
	if (typeof e != "string") throw TypeError(`The "name" you pass into <Folder /> must be a string. Got: ${typeof e}`);
	if (!Ee(e)) throw Error(`Folder name can only contain a-z, A-Z, 0-9 and -. You passed ${e}`);
}, Oe = `Folder name must match ${String(Te())}`, ke = (0, b.createContext)({
	folderName: null,
	parentName: null
}), Ae = (e) => {
	let { name: t, children: n } = e, r = (0, b.useContext)(ke), { registerFolder: i, unregisterFolder: a } = (0, b.useContext)(M), o = G(), s = e._remotionInternalStack ?? null;
	De(t);
	let c = [r.parentName, r.folderName].filter(be), l = c.length === 0 ? null : c.join("/"), u = (0, b.useMemo)(() => ({
		folderName: t,
		parentName: l
	}), [t, l]);
	(0, b.useEffect)(() => (i(t, l, s), () => {
		a(t, l);
	}), [
		t,
		r.folderName,
		l,
		i,
		a,
		s
	]);
	let d = /* @__PURE__ */ (0, S.jsx)(ke.Provider, {
		value: u,
		children: n
	});
	return o.isStudio ? /* @__PURE__ */ (0, S.jsx)(_e, {
		folderId: W({
			name: t,
			parent: l
		}),
		children: d
	}) : d;
}, je = "remotion-date:", Me = "remotion-file:", Ne = ({ data: e, indent: t, staticBase: n }) => {
	let r = !1, i = !1, a = !1, o = !1;
	try {
		return {
			serializedString: JSON.stringify(e, function(e, t) {
				let s = this[e];
				return s instanceof Date ? (r = !0, `${je}${s.toISOString()}`) : s instanceof Map ? (a = !0, t) : s instanceof Set ? (o = !0, t) : typeof s == "string" && n !== null && n !== "" && s.startsWith(n) ? (i = !0, `${Me}${s.replace(n + "/", "")}`) : t;
			}, t),
			customDateUsed: r,
			customFileUsed: i,
			mapUsed: a,
			setUsed: o
		};
	} catch (e) {
		throw Error("Could not serialize the passed input props to JSON: " + e.message);
	}
}, Pe = (e) => {
	let t = e.replace(Me, ""), n = t;
	try {
		n = t.split("/").map(decodeURIComponent).join("/");
	} catch {}
	let r = window.remotion_staticFiles?.find((e) => e.name === n);
	return r ? r.src : `${window.remotion_staticBase}/${t}`;
}, Fe = (e) => JSON.parse(e, (e, t) => typeof t == "string" && t.startsWith(je) ? new Date(t.replace(je, "")) : typeof t == "string" && t.startsWith(Me) ? Pe(t) : t), Ie = (e) => Fe(Ne({
	data: e,
	indent: 2,
	staticBase: window.remotion_staticBase
}).serializedString), Le = (e) => Ce().isStudio ? Ie(e) : e, Re = (0, b.createContext)(!1), ze = ({ children: e }) => /* @__PURE__ */ (0, S.jsx)(Re.Provider, {
	value: !0,
	children: e
}), Be = () => (0, b.useContext)(Re), Ve = ({ className: e, classPrefix: t, type: n }) => {
	if (!e) return !1;
	if (n === "exact") {
		let n = e.split(" ");
		return t.some((e) => n.some((t) => t.trim() === e || t.trim().endsWith(`:${e}`) || t.trim().endsWith(`!${e}`)));
	}
	return t.some((t) => e.startsWith(t) || e.includes(` ${t}`) || e.includes(`!${t}`) || e.includes(`:${t}`));
}, He = (0, b.forwardRef)((e, t) => {
	let { style: n, ...r } = e, i = (0, b.useMemo)(() => ({
		position: "absolute",
		top: Ve({
			className: r.className,
			classPrefix: ["top-", "inset-"],
			type: "prefix"
		}) ? void 0 : 0,
		left: Ve({
			className: r.className,
			classPrefix: ["left-", "inset-"],
			type: "prefix"
		}) ? void 0 : 0,
		right: Ve({
			className: r.className,
			classPrefix: ["right-", "inset-"],
			type: "prefix"
		}) ? void 0 : 0,
		bottom: Ve({
			className: r.className,
			classPrefix: ["bottom-", "inset-"],
			type: "prefix"
		}) ? void 0 : 0,
		width: Ve({
			className: r.className,
			classPrefix: ["w-"],
			type: "prefix"
		}) ? void 0 : "100%",
		height: Ve({
			className: r.className,
			classPrefix: ["h-"],
			type: "prefix"
		}) ? void 0 : "100%",
		display: Ve({
			className: r.className,
			classPrefix: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			type: "exact"
		}) ? void 0 : "flex",
		flexDirection: Ve({
			className: r.className,
			classPrefix: [
				"flex-row",
				"flex-col",
				"flex-row-reverse",
				"flex-col-reverse"
			],
			type: "exact"
		}) ? void 0 : "column",
		...n
	}), [r.className, n]);
	return /* @__PURE__ */ (0, S.jsx)("div", {
		ref: t,
		style: i,
		...r
	});
}), Ue = null, We = 1, Ge = [], Ke = () => We, qe = (e) => (Ge.push(e), () => {
	Ge = Ge.filter((t) => t !== e);
}), Je = (e) => {
	if (We !== e) {
		We = e;
		for (let e of Ge) e();
	}
}, Ye = () => {
	if (!Ue) {
		if (typeof document > "u") throw Error("Tried to call an API that only works in the browser from outside the browser");
		Ue = document.createElement("div"), Ue.style.position = "absolute", Ue.style.top = "0px", Ue.style.left = "0px", Ue.style.right = "0px", Ue.style.bottom = "0px", Ue.style.width = "100%", Ue.style.height = "100%", Ue.style.display = "flex", Ue.style.flexDirection = "column";
		let e = document.createElement("div");
		e.style.position = "fixed", e.style.top = "-999999px", e.appendChild(Ue), document.body.appendChild(e);
	}
	return Ue;
}, Xe = (0, b.createContext)(null), Ze = () => "remotion_inputPropsOverride" + window.location.origin, Qe = () => {
	if (typeof localStorage > "u") return null;
	let e = localStorage.getItem(Ze());
	return e ? JSON.parse(e) : null;
}, $e = (e) => {
	if (typeof localStorage < "u") {
		if (e === null) {
			localStorage.removeItem(Ze());
			return;
		}
		localStorage.setItem(Ze(), JSON.stringify(e));
	}
}, et = !1, tt = () => {
	et || (et = !0, console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object."), console.warn("To hide this warning, don't call this function on the server:"), console.warn("  typeof window === 'undefined' ? {} : getInputProps()"));
}, nt = () => {
	if (typeof window > "u") return tt(), {};
	if (Ce().isPlayer) throw Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");
	let e = Qe();
	if (e) return e;
	if (typeof window > "u" || window.remotion_inputProps === void 0) throw Error("Cannot call `getInputProps()` - window.remotion_inputProps is not set. This API is only available if you are in the Studio, or while you are rendering server-side.");
	let t = window.remotion_inputProps;
	return t ? Fe(t) : {};
}, rt = (0, b.createContext)({
	props: {},
	updateProps: () => {
		throw Error("Not implemented");
	}
}), it = b.createRef(), at = ({ children: e }) => {
	let [t, n] = b.useState({}), r = (0, b.useCallback)(({ defaultProps: e, id: t, newProps: r }) => {
		n((n) => ({
			...n,
			[t]: typeof r == "function" ? r(n[t] ?? e) : r
		}));
	}, []), i = (0, b.useMemo)(() => ({
		props: t,
		updateProps: r
	}), [t, r]);
	return /* @__PURE__ */ (0, S.jsx)(rt.Provider, {
		value: i,
		children: e
	});
};
function ot(e, t, n) {
	if (typeof e != "number") throw Error(`The "${t}" prop ${n} must be a number, but you passed a value of type ${typeof e}`);
	if (isNaN(e)) throw TypeError(`The "${t}" prop ${n} must not be NaN, but is NaN.`);
	if (!Number.isFinite(e)) throw TypeError(`The "${t}" prop ${n} must be finite, but is ${e}.`);
	if (e % 1 != 0) throw TypeError(`The "${t}" prop ${n} must be an integer, but is ${e}.`);
	if (e <= 0) throw TypeError(`The "${t}" prop ${n} must be positive, but got ${e}.`);
}
function st(e, t) {
	let { allowFloats: n, component: r } = t;
	if (e === void 0) throw Error(`The "durationInFrames" prop ${r} is missing.`);
	if (typeof e != "number") throw Error(`The "durationInFrames" prop ${r} must be a number, but you passed a value of type ${typeof e}`);
	if (e <= 0) throw TypeError(`The "durationInFrames" prop ${r} must be positive, but got ${e}.`);
	if (!n && e % 1 != 0) throw TypeError(`The "durationInFrames" prop ${r} must be an integer, but got ${e}.`);
	if (!Number.isFinite(e)) throw TypeError(`The "durationInFrames" prop ${r} must be finite, but got ${e}.`);
}
function ct(e, t, n) {
	if (typeof e != "number") throw Error(`"fps" must be a number, but you passed a value of type ${typeof e} ${t}`);
	if (!Number.isFinite(e)) throw Error(`"fps" must be a finite, but you passed ${e} ${t}`);
	if (isNaN(e)) throw Error(`"fps" must not be NaN, but got ${e} ${t}`);
	if (e <= 0) throw TypeError(`"fps" must be positive, but got ${e} ${t}`);
	if (n && e > 50) throw TypeError("The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif");
}
var lt = (0, b.createContext)(null), ut = (0, b.createRef)(), dt = (e) => !!e.calculateMetadata, ft = (e) => {
	let t = (0, b.useContext)(lt), { props: n } = (0, b.useContext)(rt), { compositions: r, canvasContent: i, currentCompositionMetadata: a, currentAssetMetadata: o } = (0, b.useContext)(j), s = i?.type === "composition" ? i.compositionId : null, c = e ?? s, l = r.find((e) => e.id === c), u = (0, b.useMemo)(() => l ? n[l.id] ?? {} : {}, [n, l]), d = G();
	return (0, b.useMemo)(() => e === null && i?.type === "asset" && o?.asset === i.asset ? {
		type: "success",
		metadataSource: null,
		result: {
			...o,
			id: A(i.asset),
			defaultProps: {}
		}
	} : l ? a ? {
		type: "success",
		metadataSource: null,
		result: {
			...a,
			id: l.id,
			defaultProps: l.defaultProps ?? {}
		}
	} : dt(l) ? !t || !t[l.id] ? null : t[l.id] : (st(l.durationInFrames, {
		allowFloats: !1,
		component: `in <Composition id="${l.id}">`
	}), ct(l.fps, `in <Composition id="${l.id}">`, !1), ot(l.width, "width", `in <Composition id="${l.id}">`), ot(l.height, "height", `in <Composition id="${l.id}">`), {
		type: "success",
		metadataSource: null,
		result: {
			width: l.width,
			height: l.height,
			fps: l.fps,
			id: l.id,
			durationInFrames: l.durationInFrames,
			defaultProps: l.defaultProps ?? {},
			props: {
				...l.defaultProps ?? {},
				...u ?? {},
				...typeof window > "u" || d.isPlayer || !window.remotion_inputProps ? {} : nt() ?? {}
			},
			defaultCodec: null,
			defaultOutName: null,
			defaultVideoImageFormat: null,
			defaultPixelFormat: null,
			defaultProResProfile: null,
			defaultSampleRate: null
		}
	}) : null, [
		l,
		i,
		t,
		o,
		a,
		e,
		u,
		d.isPlayer
	]);
}, pt = () => null, mt = () => {
	let { canvasContent: e, compositions: t, currentCompositionMetadata: n, currentAssetMetadata: r } = (0, b.useContext)(j), i = t.find((t) => e?.type === "composition" && t.id === e.compositionId), a = ft(i?.id ?? null);
	return (0, b.useMemo)(() => e?.type === "asset" && r?.asset === e.asset ? {
		...r,
		id: A(e.asset),
		defaultProps: {},
		component: pt
	} : !a || a.type === "error" || a.type === "loading" || !i ? null : {
		...a.result,
		defaultProps: i.defaultProps ?? {},
		id: i.id,
		...n ?? {},
		component: i.component
	}, [
		e,
		r,
		n,
		a,
		i
	]);
}, ht = () => {
	let e = (0, b.useContext)(Xe), t = e?.width ?? null, n = e?.height ?? null, r = e?.durationInFrames ?? null, i = mt();
	return (0, b.useMemo)(() => {
		if (!i) return null;
		let { id: e, durationInFrames: a, fps: o, height: s, width: c, defaultProps: l, props: u, defaultCodec: d, defaultOutName: f, defaultVideoImageFormat: p, defaultPixelFormat: m, defaultProResProfile: h, defaultSampleRate: g } = i;
		return {
			id: e,
			width: t ?? c,
			height: n ?? s,
			fps: o,
			durationInFrames: r ?? a,
			defaultProps: l,
			props: u,
			defaultCodec: d,
			defaultOutName: f,
			defaultVideoImageFormat: p,
			defaultPixelFormat: m,
			defaultProResProfile: h,
			defaultSampleRate: g
		};
	}, [
		r,
		n,
		t,
		i
	]);
}, gt = b.createContext(null), _t = (0, b.createContext)({
	setSize: () => {},
	size: {
		size: "auto",
		translation: {
			x: 0,
			y: 0
		}
	}
}), vt = ({ canvasSize: e, compositionHeight: t, compositionWidth: n, previewSize: r }) => {
	let i = e.height / t, a = e.width / n, o = Math.min(i, a);
	return r === "auto" ? o === 0 ? 1 : o : Number(r);
}, yt = (e) => {
	let t = b.useContext(gt), n = b.useContext(_t), r = ht(), i = G(), [a, o] = b.useState(Ke);
	if (b.useEffect(() => {
		let e = () => o(Ke());
		return e(), qe(e);
	}, []), t === null || r === null || n === null) {
		if (e?.dontThrowIfOutsideOfRemotion || i.isRendering) return 1;
		throw Error([
			"useCurrentScale() was called outside of a Remotion context.",
			"This hook can only be called in a component that is being rendered by Remotion.",
			"If you want to this hook to return 1 outside of Remotion, pass {dontThrowIfOutsideOfRemotion: true} as an option.",
			"If you think you called this hook in a Remotion component, make sure all versions of Remotion are aligned."
		].join("\n"));
	}
	return t.type === "scale" ? t.scale : a;
}, bt = { transform: "rotate(90deg)" }, xt = 40, St = 14, Ct = {
	color: "rgba(255, 255, 255, 0.8)",
	fontFamily: "sans-serif"
}, wt = {
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#1f2428"
}, Tt = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	animation: "anim 2s",
	animationFillMode: "forwards"
}, Et = () => {
	let e = yt({ dontThrowIfOutsideOfRemotion: !0 });
	return /* @__PURE__ */ (0, S.jsxs)(He, {
		style: wt,
		id: "remotion-comp-loading",
		children: [/* @__PURE__ */ (0, S.jsx)("style", {
			type: "text/css",
			children: "\n				@keyframes anim {\n					from {\n						opacity: 0\n					}\n					to {\n						opacity: 1\n					}\n				}\n			"
		}), /* @__PURE__ */ (0, S.jsxs)("div", {
			id: "remotion-comp-loading-content",
			style: Tt,
			children: [/* @__PURE__ */ (0, S.jsx)("svg", {
				width: xt / e,
				height: xt / e,
				viewBox: "-100 -100 400 400",
				style: bt,
				children: /* @__PURE__ */ (0, S.jsx)("path", {
					fill: "#555",
					stroke: "#555",
					strokeWidth: "100",
					strokeLinejoin: "round",
					d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
				})
			}), /* @__PURE__ */ (0, S.jsxs)("p", {
				style: {
					...Ct,
					fontSize: St / e
				},
				children: [
					"Resolving ",
					"<Suspense>",
					"..."
				]
			})]
		})]
	});
}, Dt = (e) => {
	let t = e.stack ?? "";
	return t.startsWith("Error:") ? t : `${e.message}
${t}`;
}, Ot = (e) => e instanceof Error || !(typeof e != "object" || !e || !("stack" in e) || typeof e.stack != "string" || !("message" in e) || typeof e.message != "string");
function kt(e, t) {
	let n;
	throw Ot(t) ? (n = t, n.stack || (n.stack = Error(n.message).stack)) : n = Error(typeof t == "string" ? t : "Rendering was cancelled"), e && (e.remotion_cancelledError = Dt(n)), n;
}
function At(e) {
	return kt(typeof window < "u" ? window : void 0, e);
}
var jt = "The delayRender was called:", Mt = "Retries left: ", Nt = "- Rendering the frame will be retried.", Pt = "handle was cleared after", Ft = [
	"trace",
	"verbose",
	"info",
	"warn",
	"error"
], It = (e) => Ft.indexOf(e), Lt = (e, t) => It(e) <= It(t), Rt = ({ args: e, logLevel: t, tag: n }) => {
	let r = [...e];
	return Ce().isRendering && !Ce().isClientSideRendering && r.unshift(Symbol.for(`__remotion_level_${t}`)), n && Ce().isRendering && !Ce().isClientSideRendering && r.unshift(Symbol.for(`__remotion_tag_${n}`)), r;
}, K = {
	trace: (e, ...t) => {
		if (Lt(e.logLevel, "trace")) return console.debug(...Rt({
			args: t,
			logLevel: "trace",
			tag: e.tag
		}));
	},
	verbose: (e, ...t) => {
		if (Lt(e.logLevel, "verbose")) return console.debug(...Rt({
			args: t,
			logLevel: "verbose",
			tag: e.tag
		}));
	},
	info: (e, ...t) => {
		if (Lt(e.logLevel, "info")) return console.log(...Rt({
			args: t,
			logLevel: "info",
			tag: e.tag
		}));
	},
	warn: (e, ...t) => {
		if (Lt(e.logLevel, "warn")) return console.warn(...Rt({
			args: t,
			logLevel: "warn",
			tag: e.tag
		}));
	},
	error: (e, ...t) => console.error(...Rt({
		args: t,
		logLevel: "error",
		tag: e.tag
	}))
};
typeof window < "u" && (window.remotion_renderReady = !1, window.remotion_delayRenderTimeouts || (window.remotion_delayRenderTimeouts = {}), window.remotion_delayRenderHandles = []);
var zt = 3e4, Bt = ({ scope: e, environment: t, label: n, options: r }) => {
	if (typeof n != "string" && n !== null) throw Error("The label parameter of delayRender() must be a string or undefined, got: " + JSON.stringify(n));
	let i = Math.random();
	e.remotion_delayRenderHandles.push(i);
	let a = Error().stack?.replace(/^Error/g, "") ?? "";
	if (t.isRendering) {
		let o = Math.max(0, (r?.timeoutInMilliseconds ?? e.remotion_puppeteerTimeout ?? zt) - 2e3), s = (r?.retries ?? 0) - (e.remotion_attempt - 1);
		e.remotion_delayRenderTimeouts[i] = {
			label: n ?? null,
			startTime: Date.now(),
			timeout: setTimeout(() => {
				let r = [
					"A delayRender()",
					n ? `"${n}"` : null,
					`was called but not cleared after ${o}ms. See https://remotion.dev/docs/timeout for help.`,
					s > 0 ? Mt + s : null,
					s > 0 ? Nt : null,
					jt,
					a
				].filter(be).join(" ");
				t.isClientSideRendering ? e.remotion_cancelledError = Dt(Error(r)) : kt(e, Error(r));
			}, o)
		};
	}
	return e.remotion_renderReady = !1, i;
}, Vt = ({ scope: e, handle: t, environment: n, logLevel: r }) => {
	if (t === void 0) throw TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");
	if (typeof t != "number") throw TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: " + JSON.stringify(t));
	let i = e.remotion_delayRenderHandles.includes(t), a = e.remotion_delayRenderTimeouts[t];
	if (i && n.isRendering && a) {
		let { label: n, startTime: i, timeout: o } = a;
		clearTimeout(o);
		let s = [
			n ? `"${n}"` : "A handle",
			Pt,
			`${Date.now() - i}ms`
		].filter(be).join(" ");
		K.verbose({
			logLevel: r,
			tag: "delayRender()"
		}, s), delete e.remotion_delayRenderTimeouts[t];
	}
	e.remotion_delayRenderHandles = e.remotion_delayRenderHandles.filter((e) => e !== t), e.remotion_delayRenderHandles.length === 0 && (e.remotion_renderReady = !0);
}, Ht = (0, b.createContext)({
	logLevel: "info",
	mountTime: 0
}), Ut = () => {
	let { logLevel: e } = b.useContext(Ht);
	if (e === null) throw Error("useLogLevel must be used within a LogLevelProvider");
	return e;
}, Wt = () => {
	let { mountTime: e } = b.useContext(Ht);
	if (e === null) throw Error("useMountTime must be used within a LogLevelProvider");
	return e;
}, Gt = (0, b.createContext)(null), Kt = () => {
	let e = G(), t = (0, b.useContext)(Gt) ?? (typeof window < "u" ? window : void 0), n = Ut();
	return {
		delayRender: (0, b.useCallback)((n, r) => t ? Bt({
			scope: t,
			environment: e,
			label: n ?? null,
			options: r ?? {}
		}) : Math.random(), [e, t]),
		continueRender: (0, b.useCallback)((r) => {
			t && Vt({
				scope: t,
				handle: r,
				environment: e,
				logLevel: n
			});
		}, [
			e,
			n,
			t
		]),
		cancelRender: (0, b.useCallback)((e) => kt(t ?? (typeof window < "u" ? window : void 0), e), [t])
	};
}, qt = ({ compProps: e, componentName: t, noSuspense: n }) => {
	let r = (0, b.useRef)(null);
	return "component" in e && (r.current = e.component), (0, b.useMemo)(() => {
		if ("component" in e) {
			if (typeof document > "u" || n) return e.component;
			if (e.component === void 0) throw Error(`A value of \`undefined\` was passed to the \`component\` prop. Check the value you are passing to the <${t}/> component.`);
			return (e) => {
				let t = r.current;
				return b.createElement(t, e);
			};
		}
		if ("lazyComponent" in e && e.lazyComponent !== void 0) {
			if (e.lazyComponent === void 0) throw Error(`A value of \`undefined\` was passed to the \`lazyComponent\` prop. Check the value you are passing to the <${t}/> component.`);
			return b.lazy(e.lazyComponent);
		}
		throw Error("You must pass either 'component' or 'lazyComponent'");
	}, [e.lazyComponent]);
}, Jt = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g, Yt = (e) => e.match(Jt()), Xt = (e) => {
	if (!Yt(e)) throw Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${e}`);
}, Zt = `Composition ID must match ${String(Jt())}`, Qt = (e, t, n) => {
	if (e) {
		if (typeof e != "object") throw Error(`"${t}" must be an object, but you passed a value of type ${typeof e}`);
		if (Array.isArray(e)) throw Error(`"${t}" must be an object, an array was passed ${n ? `for composition "${n}"` : ""}`);
	}
}, $t = () => {
	let { continueRender: e, delayRender: t } = Kt();
	return (0, b.useEffect)(() => {
		let n = t("Waiting for Root component to unsuspend");
		return () => e(n);
	}, [e, t]), null;
}, en = ({ width: e, height: t, fps: n, durationInFrames: r, id: i, defaultProps: a, schema: o, ...s }) => {
	let { registerComposition: c, unregisterComposition: l } = (0, b.useContext)(M), u = mt(), d = qt({
		compProps: s,
		componentName: "Composition",
		noSuspense: !1
	}), f = Be(), p = G(), m = (0, b.useContext)(T);
	if (typeof window < "u" && (window.remotion_seenCompositionIds = Array.from(/* @__PURE__ */ new Set([...window.remotion_seenCompositionIds ?? [], i]))), m) throw Error(f ? "<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help." : "<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");
	let { folderName: h, parentName: g } = (0, b.useContext)(ke), _ = s._remotionInternalStack ?? null, v = "component" in s ? se(s.component) : null;
	(0, b.useEffect)(() => {
		if (!i) throw Error("No id for composition passed.");
		return Xt(i), Qt(a, "defaultProps", i), c({
			durationInFrames: r ?? void 0,
			fps: n ?? void 0,
			height: t ?? void 0,
			width: e ?? void 0,
			id: i,
			folderName: h,
			component: d,
			defaultProps: Le(a ?? {}),
			order: null,
			parentFolderName: g,
			componentFromProps: v,
			schema: o ?? null,
			calculateMetadata: s.calculateMetadata ?? null,
			stack: _
		}), () => {
			l(i);
		};
	}, [
		r,
		n,
		t,
		d,
		i,
		h,
		a,
		e,
		g,
		v,
		o,
		s.calculateMetadata,
		_,
		c,
		l
	]);
	let y = ft(i), { setError: C, clearError: w } = (0, b.useContext)(D), O = (0, b.useCallback)((e) => {
		C(e);
	}, [C]), A = (0, b.useCallback)(() => {
		w();
	}, [w]);
	if (p.isStudio && u && u.component === d && u.id === i) {
		let e = d;
		return y === null || y.type !== "success" && y.type !== "success-and-refreshing" ? null : (0, x.createPortal)(/* @__PURE__ */ (0, S.jsx)(E, { children: /* @__PURE__ */ (0, S.jsx)(k, {
			onError: O,
			onClear: A,
			children: /* @__PURE__ */ (0, S.jsx)(b.Suspense, {
				fallback: /* @__PURE__ */ (0, S.jsx)(Et, {}),
				children: /* @__PURE__ */ (0, S.jsx)(e, { ...y.result.props ?? {} })
			})
		}) }), Ye());
	}
	if (p.isRendering && u && u.component === d && u.id === i) {
		let e = d;
		return y === null || y.type !== "success" && y.type !== "success-and-refreshing" ? null : (0, x.createPortal)(/* @__PURE__ */ (0, S.jsx)(E, { children: /* @__PURE__ */ (0, S.jsx)(b.Suspense, {
			fallback: /* @__PURE__ */ (0, S.jsx)($t, {}),
			children: /* @__PURE__ */ (0, S.jsx)(e, { ...y.result.props ?? {} })
		}) }), Ye());
	}
	return null;
}, tn = (e) => {
	let { onlyRenderComposition: t } = (0, b.useContext)(M), n = G();
	if (t && t !== e.id) return null;
	let r = /* @__PURE__ */ (0, S.jsx)(en, { ...e });
	return n.isStudio ? /* @__PURE__ */ (0, S.jsx)(ge, {
		compositionId: e.id,
		children: r
	}) : r;
}, nn = "4.0.533", rn = () => {
	if (typeof globalThis > "u") return;
	let e = () => {
		globalThis.remotion_imported = nn, typeof window < "u" && (window.remotion_imported = nn);
	}, t = globalThis.remotion_imported || typeof window < "u" && window.remotion_imported;
	if (t) {
		if (t === "4.0.533") return;
		if (typeof t == "string" && t.includes("webcodecs")) {
			e();
			return;
		}
		throw TypeError(`\uD83D\uDEA8 Multiple versions of Remotion detected: ${[nn, typeof t == "string" ? t : "an older version"].filter(be).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`);
	}
	e();
}, an = {};
w(an, {
	useTimelineSetFrameWithoutSeek: () => jn,
	useTimelineSeekFrame: () => Mn,
	useTimelinePosition: () => On,
	useTimelineContext: () => En,
	usePlaying: () => vn,
	usePlaybackRate: () => Dn,
	useIsInsideFreeze: () => kn,
	useBuffering: () => yn,
	useAbsoluteTimelinePosition: () => An,
	persistCurrentFrame: () => xn,
	getInitialFrameState: () => Sn,
	getFrameForComposition: () => Cn,
	clampFrameToCompositionRange: () => wn
});
var on = (e) => {
	let t = e, n = /* @__PURE__ */ new Set();
	return {
		store: {
			getSnapshot: () => t,
			subscribe: (e) => (n.add(e), () => {
				n.delete(e);
			})
		},
		setSnapshot: (e) => {
			if (t !== e) {
				t = e;
				for (let e of n) e(t);
			}
		}
	};
}, sn = (e) => {
	let t = (0, b.useRef)(0);
	return (0, b.useMemo)(() => ({
		revision: t,
		seekFrame: (n) => {
			t.current++, e(n);
		}
	}), [e]);
}, cn = () => {
	throw Error("SetTimelineContext is missing. This is likely caused by a Remotion version mismatch.");
}, ln = (0, b.createContext)({
	seek: null,
	setFrameWithoutSeek: cn,
	setPlaying: cn,
	setBuffering: cn,
	subscribePlaying: () => () => {},
	subscribeBuffering: () => () => {},
	isPlaying: () => !1,
	isBuffering: cn,
	frameRef: { current: {} },
	audioAndVideoTags: { current: [] }
}), un = (0, b.createContext)(null), dn = (0, b.createContext)(null), fn = (0, b.createContext)(null), pn = ({ children: e, frameState: t }) => {
	let n = (0, b.useMemo)(() => on({ playing: !1 }), []), r = (0, b.useMemo)(() => on({ buffering: !1 }), []), [i, a] = (0, b.useState)(1), o = (0, b.useRef)([]), [s, c] = (0, b.useState)(() => Sn()), l = sn(c), { isStudio: u } = G(), d = u ? l : null, f = t ?? s, p = (0, b.useRef)(f);
	p.current = f;
	let m = (0, b.useCallback)(() => n.store.getSnapshot().playing, [n]), h = (0, b.useCallback)(() => r.store.getSnapshot().buffering, [r]), { delayRender: g, continueRender: _ } = Kt();
	typeof window < "u" && (0, b.useLayoutEffect)(() => {
		window.remotion_setFrame = (e, t, n) => {
			window.remotion_attempt = n;
			let r = g(`Setting the current frame to ${e}`), i = !0;
			c((n) => (n[t] ?? window.remotion_initialFrame) === e ? (i = !1, n) : {
				...n,
				[t]: e
			}), i ? requestAnimationFrame(() => _(r)) : _(r);
		}, window.remotion_isPlayer = !1;
	}, [_, g]);
	let v = (0, b.useMemo)(() => ({
		frame: f,
		isPlaying: m,
		isInsideFreeze: !1,
		audioAndVideoTags: o
	}), [f, m]), y = (0, b.useMemo)(() => ({
		playbackRate: i,
		setPlaybackRate: a
	}), [i]), x = (0, b.useMemo)(() => ({
		setFrameWithoutSeek: c,
		seek: d,
		setPlaying: (e) => {
			let t = n.store.getSnapshot().playing, r = typeof e == "function" ? e(t) : e;
			t !== r && n.setSnapshot({ playing: r });
		},
		setBuffering: (e) => {
			h() !== e && r.setSnapshot({ buffering: e });
		},
		subscribePlaying: n.store.subscribe,
		subscribeBuffering: r.store.subscribe,
		isPlaying: m,
		isBuffering: h,
		frameRef: p,
		audioAndVideoTags: o
	}), [
		r,
		n,
		h,
		m,
		d
	]);
	return /* @__PURE__ */ (0, S.jsx)(fn.Provider, {
		value: v,
		children: /* @__PURE__ */ (0, S.jsx)(dn.Provider, {
			value: y,
			children: /* @__PURE__ */ (0, S.jsx)(un.Provider, {
				value: v,
				children: /* @__PURE__ */ (0, S.jsx)(ln.Provider, {
					value: x,
					children: e
				})
			})
		})
	});
}, mn = typeof Object.is == "function" ? Object.is : (e, t) => e === t && (e !== 0 || 1 / e == 1 / t) || Number.isNaN(e) && Number.isNaN(t), hn = (e) => {
	try {
		return !mn(e.value, e.getSnapshot());
	} catch {
		return !0;
	}
}, gn = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? (e, t) => t() : (e, t) => {
	let n = t(), [{ instance: r }, i] = b.useState({ instance: {
		value: n,
		getSnapshot: t
	} });
	return b.useLayoutEffect(() => {
		r.value = n, r.getSnapshot = t, hn(r) && i({ instance: r });
	}, [
		t,
		r,
		e,
		n
	]), b.useEffect(() => (hn(r) && i({ instance: r }), e(() => {
		hn(r) && i({ instance: r });
	})), [r, e]), b.useDebugValue(n), n;
}, _n = b.useSyncExternalStore ?? gn, vn = () => {
	let { isPlaying: e } = En(), { subscribePlaying: t } = (0, b.useContext)(ln);
	return _n(t, e, e);
}, yn = () => {
	let { isBuffering: e, subscribeBuffering: t } = (0, b.useContext)(ln);
	return _n(t, e, e);
}, bn = () => "remotion.time-all", xn = (e) => {
	localStorage.setItem(bn(), JSON.stringify(e));
}, Sn = () => {
	let e = localStorage.getItem(bn()) ?? "{}";
	return JSON.parse(e);
}, Cn = (e) => {
	let t = localStorage.getItem(bn()) ?? "{}", n = JSON.parse(t);
	return n[e] === void 0 ? typeof window > "u" ? 0 : window.remotion_initialFrame ?? 0 : Number(n[e]);
}, wn = (e, t) => Math.max(0, Math.min(Math.max(0, t - 1), e)), Tn = (e) => {
	let t = mt(), n = G();
	return t ? wn(e.frame[t.id] ?? (n.isPlayer ? 0 : Cn(t.id)), t.durationInFrames) : typeof window > "u" ? 0 : window.remotion_initialFrame ?? 0;
}, En = () => {
	let e = (0, b.useContext)(un);
	if (e === null) throw Error("TimelineContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
	return e;
}, Dn = () => {
	let e = (0, b.useContext)(dn);
	if (e === null) throw Error("PlaybackRateContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
	return e;
}, On = () => Tn(En()), kn = () => En().isInsideFreeze, An = () => {
	let e = (0, b.useContext)(fn);
	if (e === null) throw Error("AbsoluteTimeContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
	return Tn(e);
}, jn = () => {
	let { setFrameWithoutSeek: e } = (0, b.useContext)(ln);
	return e;
}, Mn = () => {
	let { seek: e, setFrameWithoutSeek: t } = (0, b.useContext)(ln);
	return e?.seekFrame ?? t;
}, Nn = () => {
	let e = (0, b.useContext)(T), t = G();
	if (!e) throw t.isPlayer ? Error("useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples") : Error("useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions");
	let n = On(), r = (0, b.useContext)(Xe);
	return (n - (r ? r.cumulatedFrom + r.relativeFrom : 0)) * (r?.playbackRate ?? 1);
}, Pn = () => {
	let e = ht(), t = (0, b.useContext)(T), n = Be();
	if (!e) throw typeof window < "u" && window.remotion_isPlayer || n ? Error([
		"No video config found. Likely reasons:",
		"- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.",
		"- You have multiple versions of Remotion installed which causes the React context to get lost."
	].join("-")) : Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");
	if (!t) throw Error("Called useVideoConfig() outside a Remotion composition.");
	return e;
}, Fn = (0, b.createContext)(!1), In = () => (0, b.useContext)(Fn), Ln = ({ frame: e, children: t, active: n = !0, _remotionInternalIsPremounting: r = !1 }) => {
	let i = Nn(), a = Pn();
	if (e === void 0) throw Error("The <Freeze /> component requires a 'frame' prop, but none was passed.");
	if (typeof e != "number") throw Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof e}`);
	if (Number.isNaN(e)) throw Error("The 'frame' prop of <Freeze /> must be a real number, but it is NaN.");
	if (!Number.isFinite(e)) throw Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${e}.`);
	let o = (0, b.useMemo)(() => {
		if (typeof n == "boolean") return n;
		if (typeof n == "function") return n(i);
	}, [n, i]), s = En(), c = (0, b.useContext)(Xe), l = In(), u = c?.relativeFrom ?? 0, d = c?.playbackRate ?? 1, f = (0, b.useMemo)(() => o ? {
		...s,
		isPlaying: () => !1,
		isInsideFreeze: !0,
		frame: { [a.id]: e / d + u }
	} : s, [
		o,
		s,
		a.id,
		e,
		u,
		d
	]), p = (0, b.useMemo)(() => c ? o ? {
		...c,
		cumulatedFrom: 0
	} : c : null, [c, o]);
	return /* @__PURE__ */ (0, S.jsx)(Fn.Provider, {
		value: l || !!o && !r,
		children: /* @__PURE__ */ (0, S.jsx)(un.Provider, {
			value: f,
			children: /* @__PURE__ */ (0, S.jsx)(Xe.Provider, {
				value: p,
				children: t
			})
		})
	});
}, Rn = ({ absoluteFrame: e, cumulatedFrom: t, from: n, parentPlaybackRate: r, durationInFrames: i }) => Math.min(i / 2, 2 ** -52 * Math.max(Math.abs(e * r), Math.abs(t * r), Math.abs(n)) * 4), zn = { captions: {
	type: "remotion-captions",
	default: void 0,
	description: "Captions",
	keyframable: !1
} }, Bn = {
	"style.transformOrigin": {
		type: "transform-origin",
		step: 1,
		default: "50% 50%",
		description: "Transform origin"
	},
	"style.translate": {
		type: "translate",
		step: 1,
		default: "0px 0px",
		description: "Offset"
	},
	"style.scale": {
		type: "scale",
		max: 100,
		step: .01,
		default: 1,
		description: "Scale",
		defaultKeyframeOutput: "perceptual-scale"
	},
	"style.rotate": {
		type: "rotation-css",
		step: 1,
		default: "0deg",
		description: "Rotation"
	},
	"style.opacity": {
		type: "number",
		min: 0,
		max: 1,
		step: .01,
		default: 1,
		description: "Opacity",
		hiddenFromList: !1
	}
}, Vn = Bn, Hn = {
	"style.color": {
		type: "color",
		default: void 0,
		description: "Color"
	},
	"style.fontFamily": {
		type: "font-family",
		default: void 0,
		description: "Font family",
		keyframable: !1
	},
	"style.fontSize": {
		type: "number",
		default: void 0,
		min: 0,
		step: 1,
		description: "Font size",
		hiddenFromList: !1
	},
	"style.lineHeight": {
		type: "number",
		default: void 0,
		min: 0,
		step: .05,
		description: "Line height",
		hiddenFromList: !1
	},
	"style.fontWeight": {
		type: "font-weight",
		default: 400,
		description: "Font weight"
	},
	"style.fontStyle": {
		type: "enum",
		default: "normal",
		description: "Font style",
		variants: {
			normal: {},
			italic: {},
			oblique: {}
		}
	},
	"style.textAlign": {
		type: "enum",
		default: "left",
		description: "Text align",
		variants: {
			left: {},
			center: {},
			right: {},
			justify: {},
			start: {},
			end: {}
		}
	},
	"style.letterSpacing": {
		type: "number",
		default: void 0,
		step: .1,
		description: "Letter spacing",
		hiddenFromList: !1
	}
}, Un = {
	"style.borderWidth": {
		type: "number",
		default: void 0,
		min: 0,
		step: 1,
		description: "Border width",
		hiddenFromList: !1
	},
	"style.borderStyle": {
		type: "enum",
		default: "none",
		description: "Border style",
		variants: {
			none: {},
			hidden: {},
			solid: {},
			dashed: {},
			dotted: {},
			double: {},
			groove: {},
			ridge: {},
			inset: {},
			outset: {}
		}
	},
	"style.borderColor": {
		type: "color",
		default: void 0,
		description: "Border color"
	}
}, Wn = {
	"style.borderRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Border radius",
		hiddenFromList: !1,
		keyframable: !0
	},
	"style.borderTopLeftRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Top left radius",
		hiddenFromList: !1
	},
	"style.borderTopRightRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Top right radius",
		hiddenFromList: !1
	},
	"style.borderBottomRightRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Bottom right radius",
		hiddenFromList: !1
	},
	"style.borderBottomLeftRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Bottom left radius",
		hiddenFromList: !1
	}
}, Gn = { "style.backgroundColor": {
	type: "color",
	default: "transparent",
	description: "Color"
} }, Kn = {
	color: {
		type: "color",
		default: void 0,
		description: "Current color"
	},
	stroke: {
		type: "color",
		default: "none",
		description: "Stroke"
	},
	strokeWidth: {
		type: "number",
		default: 1,
		description: "Stroke width",
		min: 0,
		step: 1,
		hiddenFromList: !1
	}
}, qn = {
	fill: {
		type: "color",
		default: void 0,
		description: "Fill"
	},
	...Kn
}, Jn = { children: {
	type: "text-content",
	default: "",
	description: "Text",
	keyframable: !1
} }, Yn = {
	premountFor: {
		type: "number",
		default: 0,
		description: "Premount For",
		min: 0,
		step: 1,
		hiddenFromList: !1,
		keyframable: !1
	},
	postmountFor: {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		hiddenFromList: !0,
		keyframable: !1
	}
}, Xn = { ...Yn }, Zn = {
	cropLeft: {
		type: "number",
		default: 0,
		description: "Crop left",
		min: 0,
		max: 1,
		step: .01,
		hiddenFromList: !1,
		keyframable: !0
	},
	cropRight: {
		type: "number",
		default: 0,
		description: "Crop right",
		min: 0,
		max: 1,
		step: .01,
		hiddenFromList: !1,
		keyframable: !0
	},
	cropTop: {
		type: "number",
		default: 0,
		description: "Crop top",
		min: 0,
		max: 1,
		step: .01,
		hiddenFromList: !1,
		keyframable: !0
	},
	cropBottom: {
		type: "number",
		default: 0,
		description: "Crop bottom",
		min: 0,
		max: 1,
		step: .01,
		hiddenFromList: !1,
		keyframable: !0
	}
}, Qn = Zn, $n = {
	...Qn,
	...Bn,
	...Gn,
	...Un,
	...Wn,
	...Xn
}, er = {
	type: "boolean",
	default: !1,
	description: "Hidden"
}, tr = { type: "hidden" }, nr = { type: "hidden" }, rr = (e) => ({
	name: nr,
	...e
}), ir = {
	type: "number",
	default: void 0,
	min: 1,
	step: 1,
	hiddenFromList: !0
}, ar = {
	type: "number",
	default: 0,
	step: 1,
	hiddenFromList: !0
}, or = {
	type: "number",
	default: 0,
	min: 0,
	step: 1,
	hiddenFromList: !0
}, sr = {
	type: "number",
	default: void 0,
	min: 1,
	step: 1,
	hiddenFromList: !0
}, cr = {
	type: "boolean",
	default: !1,
	description: "Loop",
	keyframable: !1
}, lr = {
	type: "number",
	default: null,
	step: 1,
	hiddenFromList: !0
}, ur = {
	type: "number",
	default: 1,
	min: .01,
	step: .1,
	description: "Playback rate",
	hiddenFromList: !1,
	keyframable: !1
}, dr = {
	durationInFrames: ir,
	from: ar,
	trimBefore: or,
	playbackRate: ur,
	freeze: lr,
	hidden: er,
	name: nr,
	showInTimeline: tr
}, fr = {
	durationInFrames: ir,
	from: ar,
	trimBefore: or,
	freeze: lr,
	hidden: er,
	name: nr,
	showInTimeline: tr
}, pr = {
	...dr,
	layout: {
		type: "enum",
		default: "absolute-fill",
		description: "Layout",
		variants: {
			"absolute-fill": $n,
			none: {}
		}
	}
}, mr = {
	durationInFrames: ir,
	trimBefore: or,
	playbackRate: ur,
	freeze: lr,
	hidden: er,
	name: nr,
	showInTimeline: tr,
	layout: pr.layout
}, hr = {
	...pr,
	layout: {
		...pr.layout,
		default: "none"
	}
}, gr = (0, b.createContext)(null), _r = ({ durationInFrames: e }) => e ?? Infinity, vr = ({ durationInFrames: e, playbackRate: t, loop: n }) => n ? Infinity : _r({ durationInFrames: e }) / (t ?? 1), yr = (e) => Math.min(1, Math.max(0, e ?? 0)), br = (e, t) => {
	let n = yr(e), r = yr(t);
	return n + r > 1 ? [.5, .5] : [n, r];
}, xr = ({ cropLeft: e, cropRight: t, cropTop: n, cropBottom: r }) => {
	let [i, a] = br(e, t), [o, s] = br(n, r);
	return {
		left: i,
		right: a,
		top: o,
		bottom: s
	};
}, Sr = ({ left: e, right: t, top: n, bottom: r, style: i }) => {
	if (e === 0 && t === 0 && n === 0 && r === 0) return null;
	let a = (e) => typeof e == "number" ? `${e}px` : e, o = a(i?.borderRadius), s = [
		i?.borderTopLeftRadius,
		i?.borderTopRightRadius,
		i?.borderBottomRightRadius,
		i?.borderBottomLeftRadius
	], c = o || (s.some((e) => e !== void 0) ? s.map((e) => a(e) ?? "0px").join(" ") : void 0), l = c ? ` round ${c}` : "";
	return `inset(${n * 100}% ${t * 100}% ${r * 100}% ${e * 100}%${l})`;
}, Cr = (e, t = "<Sequence />") => {
	for (let [n, r] of Object.entries(e)) if (r !== void 0) {
		if (typeof r != "number" || !Number.isFinite(r)) throw TypeError(`The "${n}" prop of ${t} must be a finite number, but got ${String(r)}.`);
		if (r > 100) throw RangeError(`The "${n}" prop of ${t} must be between 0 and 1, but got ${r}. The crop range is 0 to 1, not 0 to 100.`);
	}
}, wr = b.createContext(!1), Tr = /* @__PURE__ */ new WeakMap(), Er = {
	createRef: () => {
		let e = { current: null };
		return Tr.set(e, []), e;
	},
	getNodes: (e) => Tr.get(e) ?? null,
	setNodes: (e, t) => {
		let n = Tr.get(e);
		n?.length === t.length && n.every((e, n) => e === t[n]) || (Tr.set(e, t), e.current = t.length === 1 && t[0].nodeType === 1 ? t[0] : null);
	}
}, Dr = typeof window > "u" ? b.useEffect : b.useLayoutEffect, Or = {
	registerSequence: () => {
		throw Error("SequenceManagerContext not initialized");
	},
	updateSequence: null,
	unregisterSequence: () => {
		throw Error("SequenceManagerContext not initialized");
	},
	sequences: []
}, kr = b.createContext({
	registerSequence: Or.registerSequence,
	updateSequence: Or.updateSequence,
	unregisterSequence: Or.unregisterSequence
}), Ar = b.createContext(Or), jr = Ar.Provider;
Object.defineProperty(Ar, "Provider", { value: ({ value: e, children: t }) => {
	let n = (0, b.useMemo)(() => ({
		registerSequence: e.registerSequence,
		updateSequence: e.updateSequence,
		unregisterSequence: e.unregisterSequence
	}), [
		e.registerSequence,
		e.updateSequence,
		e.unregisterSequence
	]);
	return /* @__PURE__ */ (0, S.jsx)(kr.Provider, {
		value: n,
		children: /* @__PURE__ */ (0, S.jsx)(jr, {
			value: e,
			children: t
		})
	});
} });
var Mr = () => (0, b.useContext)(Ar).sequences, Nr = b.createContext({ current: [] }), Pr = b.createContext(!1), Fr = b.createContext(!1), Ir = ({ children: e }) => b.createElement(Fr.Provider, { value: !0 }, e), Lr = b.createContext(null), Rr = b.createContext(null), zr = ({ children: e, dragOverridesSubscription: t, fromKeys: n }) => {
	let r = (0, b.useContext)(kr), i = (0, b.useMemo)(() => ({
		...t,
		manager: r
	}), [t, r]), a = (0, b.useMemo)(() => ({
		manager: r,
		keys: n
	}), [n, r]);
	return /* @__PURE__ */ (0, S.jsx)(Rr.Provider, {
		value: a,
		children: /* @__PURE__ */ (0, S.jsx)(Lr.Provider, {
			value: i,
			children: e
		})
	});
}, Br = {}, Vr = /* @__PURE__ */ new Set(), Hr = {}, Ur = (e) => `${e.absolutePath}\x00${e.nodePath.join(".")}\x00${e.sequenceKeys.join(".")}\x00${e.effectKeys.map((e) => e.join(".")).join(".")}`, Wr = b.createContext({ propStatuses: {} }), Gr = b.createContext({ current: {} }), Kr = b.createContext({
	getDragOverrides: () => {
		throw Error("VisualModeDragOverridesContext not initialized");
	},
	getEffectDragOverrides: () => {
		throw Error("VisualModeDragOverridesContext not initialized");
	}
}), qr = (e) => {
	let t = (0, b.useContext)(Lr), n = (0, b.useContext)(kr), r = t?.manager === n ? t : null, i = r === null ? (0, b.useContext)(Kr) : null, a = e === null ? null : Ur(e), o = (0, b.useCallback)((e) => r?.subscribe(a, e) ?? (() => {}), [a, r]), s = (0, b.useCallback)(() => r?.getSnapshot(a) ?? Br, [a, r]), c = _n(o, s, s);
	return i !== null && e !== null ? i.getDragOverrides(e) : c;
}, Jr = () => {
	let e = (0, b.useContext)(Rr), t = (0, b.useContext)(kr);
	return e?.manager === t ? e.keys : Vr;
}, Yr = (e, t) => {
	let n = (0, b.useContext)(Lr), r = (0, b.useContext)(kr), i = n?.manager === r ? n : null, a = i === null ? (0, b.useContext)(Kr) : null, o = e === null ? null : Ur(e), s = (0, b.useCallback)((e) => i?.subscribeEffects(o, e) ?? (() => {}), [o, i]), c = (0, b.useCallback)(() => i?.getEffectSnapshot(o) ?? Hr, [o, i]), l = _n(s, c, c);
	if (a !== null && e !== null) {
		let n = {};
		for (let r = 0; r < t; r++) n[r] = a.getEffectDragOverrides(e, r);
		return n;
	}
	return l;
}, Xr = b.createContext({
	setDragOverrides: () => {
		throw Error("VisualModeSettersContext not initialized");
	},
	clearDragOverrides: () => {
		throw Error("VisualModeSettersContext not initialized");
	},
	setEffectDragOverrides: () => {
		throw Error("VisualModeSettersContext not initialized");
	},
	clearEffectDragOverrides: () => {
		throw Error("VisualModeSettersContext not initialized");
	},
	setPropStatuses: () => {
		throw Error("VisualModeSettersContext not initialized");
	},
	remapPropStatuses: () => {
		throw Error("VisualModeSettersContext not initialized");
	}
}), Zr = b.createContext(null), Qr = (e, t) => `${Ur(e)}.effects.${t}`, $r = ({ children: e }) => {
	let { isStudio: t } = G(), [n] = (0, b.useState)(() => String(Math.random())), r = (0, b.useRef)(null), i = (0, b.useRef)(null), [a, o] = (0, b.useState)([]), s = (0, b.useRef)(a);
	s.current = a;
	let [c, l] = (0, b.useState)(() => ({
		overrides: {},
		fromKeys: /* @__PURE__ */ new Set()
	})), u = c.overrides, d = (0, b.useRef)({
		snapshot: u,
		listeners: /* @__PURE__ */ new Map()
	}), [f, p] = (0, b.useState)({}), m = (0, b.useRef)({
		snapshot: f,
		byNode: /* @__PURE__ */ new Map(),
		listeners: /* @__PURE__ */ new Map()
	}), [h, g] = (0, b.useState)({}), _ = (0, b.useRef)(h);
	_.current = h;
	let v = (0, b.useCallback)((e) => {
		l((t) => {
			let n = t.overrides, r = null, i = t.fromKeys;
			for (let { nodePath: t, key: a, value: o } of e) {
				let e = Ur(t), s = (r ?? n)[e]?.[a];
				s === o || s?.type === "static" && o.type === "static" && Object.is(s.value, o.value) || (r === null && (r = { ...n }), r[e] === n[e] && (r[e] = { ...n[e] }), r[e][a] = o, a === "from" && !i.has(e) && (i = new Set(i), i.add(e)));
			}
			return r === null ? t : {
				overrides: r,
				fromKeys: i
			};
		});
	}, []), y = (0, b.useCallback)((e, t, n) => v([{
		nodePath: e,
		key: t,
		value: n
	}]), [v]), x = (0, b.useCallback)((e, t) => {
		if (e === null) return () => {};
		let n = d.current.listeners.get(e);
		return n || (n = /* @__PURE__ */ new Set(), d.current.listeners.set(e, n)), n.add(t), () => {
			n.delete(t), n.size === 0 && d.current.listeners.delete(e);
		};
	}, []), C = (0, b.useCallback)((e) => e === null ? Br : d.current.snapshot[e] ?? Br, []);
	Dr(() => {
		let e = d.current.snapshot;
		d.current.snapshot = u;
		for (let t of /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(u)])) if (e[t] !== u[t]) for (let e of d.current.listeners.get(t) ?? []) e();
	}, [u]);
	let w = (0, b.useCallback)((e, t) => {
		if (e === null) return () => {};
		let n = m.current.listeners.get(e);
		return n || (n = /* @__PURE__ */ new Set(), m.current.listeners.set(e, n)), n.add(t), () => {
			n.delete(t), n.size === 0 && m.current.listeners.delete(e);
		};
	}, []), T = (0, b.useCallback)((e) => e === null ? Hr : m.current.byNode.get(e) ?? Hr, []);
	Dr(() => {
		let e = m.current.snapshot, t = new Map(m.current.byNode), n = /* @__PURE__ */ new Set();
		for (let r of /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(f)])) {
			if (e[r] === f[r]) continue;
			let i = r.lastIndexOf(".effects.");
			if (i === -1) throw Error("Invalid effect drag override key");
			let a = r.slice(0, i), o = r.slice(i + 9);
			n.has(a) || (t.set(a, { ...t.get(a) }), n.add(a));
			let s = t.get(a);
			f[r] === void 0 ? delete s[o] : s[o] = f[r];
		}
		for (let e of n) Object.keys(t.get(e)).length === 0 && t.delete(e);
		m.current.snapshot = f, m.current.byNode = t;
		for (let e of n) for (let t of m.current.listeners.get(e) ?? []) t();
	}, [f]);
	let E = (0, b.useCallback)((e) => {
		l((t) => {
			let n = t.overrides, r = Ur(e);
			if (!n[r]) return t;
			let i = { ...n };
			delete i[r];
			let a = t.fromKeys.has(r) ? new Set(t.fromKeys) : t.fromKeys;
			return a.delete(r), {
				overrides: i,
				fromKeys: a
			};
		});
	}, []), D = (0, b.useCallback)((e) => {
		p((t) => {
			let n = null;
			for (let { nodePath: r, effectIndex: i, key: a, value: o } of e) {
				let e = Qr(r, i), s = (n ?? t)[e]?.[a];
				s === o || s?.type === "static" && o.type === "static" && Object.is(s.value, o.value) || (n === null && (n = { ...t }), n[e] === t[e] && (n[e] = { ...t[e] }), n[e][a] = o);
			}
			return n ?? t;
		});
	}, []), O = (0, b.useCallback)((e, t, n, r) => D([{
		nodePath: e,
		effectIndex: t,
		key: n,
		value: r
	}]), [D]), k = (0, b.useCallback)((e, t) => {
		p((n) => {
			let r = Qr(e, t);
			if (!n[r]) return n;
			let i = { ...n };
			return delete i[r], i;
		});
	}, []), A = (0, b.useCallback)((e, t) => {
		g((n) => {
			let r = Ur(e), i = n[r], a = t(i);
			return i === a ? n : {
				...n,
				[r]: a
			};
		});
	}, []), j = (0, b.useCallback)((e) => {
		g((t) => {
			let n = { ...t };
			for (let t of e) delete n[Ur(t.previousNodePath)];
			for (let t of e) t.nodePath !== null && t.result !== null && (n[Ur(t.nodePath)] = t.result);
			return n;
		});
	}, []);
	Dr(() => {
		if (!t) return;
		let e = !1, a = (t) => {
			let { detail: a } = t, s = a.sequenceManagers.find((e) => e.managerId === n);
			if (!s) return;
			let c = i.current;
			if (c !== null && c.length === s.sequenceIds.length && c.every((e, t) => e === s.sequenceIds[t])) return;
			let l = new Map(s.sequenceIds.map((e, t) => [e, t]));
			i.current = s.sequenceIds, r.current = l, queueMicrotask(() => {
				e || o((e) => {
					let t = !1, n = e.map((e) => {
						let n = l.get(e.id) ?? null;
						return e.timelineOrder === n ? e : (t = !0, {
							...e,
							timelineOrder: n
						});
					});
					return t ? n : e;
				});
			});
		};
		return window.addEventListener(H, a), () => {
			e = !0, window.removeEventListener(H, a);
		};
	}, [t, n]);
	let M = (0, b.useCallback)((e) => {
		o((t) => [...t, {
			...e,
			timelineOrder: r.current?.get(e.id) ?? null
		}]);
	}, []), N = (0, b.useCallback)((e) => {
		o((t) => {
			let n = t.findIndex((t) => t.id === e.id);
			if (n === -1) return t;
			let i = [...t];
			return i[n] = {
				...e,
				timelineOrder: r.current?.get(e.id) ?? null
			}, i;
		});
	}, []), P = (0, b.useCallback)((e) => {
		o((t) => t.filter((t) => t.id !== e));
	}, []), F = (0, b.useMemo)(() => ({
		registerSequence: M,
		sequences: a,
		updateSequence: N,
		unregisterSequence: P
	}), [
		M,
		a,
		P,
		N
	]), I = (0, b.useMemo)(() => ({
		subscribe: x,
		getSnapshot: C,
		subscribeEffects: w,
		getEffectSnapshot: T
	}), [
		C,
		T,
		x,
		w
	]), L = (0, b.useCallback)((e) => u[Ur(e)] ?? {}, [u]), ee = (0, b.useCallback)((e, t) => f[Qr(e, t)] ?? {}, [f]), te = (0, b.useMemo)(() => ({ propStatuses: h }), [h]), ne = (0, b.useMemo)(() => ({
		getDragOverrides: L,
		getEffectDragOverrides: ee
	}), [L, ee]), R = (0, b.useMemo)(() => ({
		setDragOverrides: y,
		clearDragOverrides: E,
		setEffectDragOverrides: O,
		clearEffectDragOverrides: k,
		setPropStatuses: A,
		remapPropStatuses: j
	}), [
		y,
		E,
		O,
		k,
		A,
		j
	]), re = (0, b.useMemo)(() => ({
		setDragOverridesBatch: v,
		setEffectDragOverridesBatch: D
	}), [v, D]), z = /* @__PURE__ */ (0, S.jsx)(Nr.Provider, {
		value: s,
		children: /* @__PURE__ */ (0, S.jsx)(Ar.Provider, {
			value: F,
			children: /* @__PURE__ */ (0, S.jsx)(Gr.Provider, {
				value: _,
				children: /* @__PURE__ */ (0, S.jsx)(Wr.Provider, {
					value: te,
					children: /* @__PURE__ */ (0, S.jsx)(zr, {
						dragOverridesSubscription: I,
						fromKeys: c.fromKeys,
						children: /* @__PURE__ */ (0, S.jsx)(Kr.Provider, {
							value: ne,
							children: /* @__PURE__ */ (0, S.jsx)(Xr.Provider, {
								value: R,
								children: /* @__PURE__ */ (0, S.jsx)(Zr.Provider, {
									value: re,
									children: e
								})
							})
						})
					})
				})
			})
		})
	});
	return t ? /* @__PURE__ */ (0, S.jsx)(he, {
		managerId: n,
		children: z
	}) : z;
}, ei = (0, b.createContext)(!1), ti = ({ children: e }) => /* @__PURE__ */ (0, S.jsx)(ei.Provider, {
	value: !0,
	children: e
}), ni = ({ children: e }) => /* @__PURE__ */ (0, S.jsx)(ei.Provider, {
	value: !1,
	children: e
}), ri = () => {
	if (!b.useContext(ei)) throw Error("This component must be inside a <Series /> component.");
}, ii = (0, b.createContext)({ premountFramesRemaining: 0 }), ai = !1, oi = (e) => e ?? ai, si = ({ from: e, durationInFrames: t, premountFor: n, postmountFor: r, style: i, styleWhilePremounted: a, styleWhilePostmounted: o, hideWhilePremounted: s }) => {
	let c = (0, b.useContext)(ii), l = Nn() - c.premountFramesRemaining, u = G(), { fps: d } = Pn(), f = n ?? 0, p = r ?? 0, m = e + t, h = (0, b.useContext)(Xe), g = Rn({
		absoluteFrame: On(),
		cumulatedFrom: h ? h.cumulatedFrom + h.relativeFrom : 0,
		from: e,
		parentPlaybackRate: h?.playbackRate ?? 1,
		durationInFrames: t
	}), _ = !u.isRendering && l - e < -g && l - (e - f) >= -g, v = !u.isRendering && l - m >= -g && l - (m + p) < -g, y = _ || v;
	return {
		effectivePremountFor: f,
		effectivePostmountFor: p,
		premountingActive: _,
		postmountingActive: v,
		isPremountingOrPostmounting: y,
		freezeFrame: _ ? e : v ? e + t - 1 : 0,
		premountingStyle: (0, b.useMemo)(() => y ? {
			...i,
			...s === "opacity" ? { opacity: 0 } : { display: "none" },
			pointerEvents: "none",
			..._ ? a : {},
			...v ? o : {}
		} : i, [
			y,
			s,
			v,
			_,
			i,
			o,
			a
		])
	};
}, ci = ({ getSequence: e, id: t }) => {
	let { registerSequence: n, unregisterSequence: r, updateSequence: i } = (0, b.useContext)(kr), a = (0, b.useContext)(Fr), o = (0, b.useRef)(e);
	o.current = e;
	let s = (0, b.useRef)(null), c = e !== null && !a;
	(0, b.useEffect)(() => {
		if (!c) return;
		let e = o.current;
		if (e === null) throw Error("Expected a sequence registration getter");
		return n(e()), s.current = e, () => {
			s.current = null, r(t);
		};
	}, [
		t,
		n,
		c,
		r
	]), (0, b.useEffect)(() => {
		a || e === null || i === null || s.current === e || (i(e()), s.current = e);
	}, [
		e,
		a,
		i
	]);
}, li = (e, t) => {
	for (let n of t) {
		let t = n.split("."), r = [e], i = e;
		for (let e = 0; e < t.length - 1; e++) {
			let n = t[e], a = i[n];
			if (a == null) {
				i = null;
				break;
			}
			i = a, r.push(i);
		}
		if (i !== null) {
			delete i[t[t.length - 1]];
			for (let e = r.length - 1; e > 0; e--) {
				let n = r[e];
				if (Object.keys(n).length === 0) {
					let n = t[e - 1];
					delete r[e - 1][n];
				} else break;
			}
		}
	}
	return e;
}, ui = 4, di = .001, fi = 1e-7, pi = 10, mi = 11, hi = 1 / (mi - 1), gi = typeof Float32Array == "function";
function _i(e, t) {
	return 1 - 3 * t + 3 * e;
}
function vi(e, t) {
	return 3 * t - 6 * e;
}
function yi(e) {
	return 3 * e;
}
function bi(e, t, n) {
	return ((_i(t, n) * e + vi(t, n)) * e + yi(t)) * e;
}
function xi(e, t, n) {
	return 3 * _i(t, n) * e * e + 2 * vi(t, n) * e + yi(t);
}
function Si({ aX: e, _aA: t, _aB: n, mX1: r, mX2: i }) {
	let a, o, s = 0, c = t, l = n;
	do
		o = c + (l - c) / 2, a = bi(o, r, i) - e, a > 0 ? l = o : c = o;
	while (Math.abs(a) > fi && ++s < pi);
	return o;
}
function Ci(e, t, n, r) {
	let i = t;
	for (let t = 0; t < ui; ++t) {
		let t = xi(i, n, r);
		if (t === 0) return i;
		let a = bi(i, n, r) - e;
		i -= a / t;
	}
	return i;
}
function wi(e, t, n, r) {
	if (!(e >= 0 && e <= 1 && n >= 0 && n <= 1)) throw Error("bezier x values must be in [0, 1] range");
	let i = gi ? new Float32Array(mi) : Array(mi);
	if (e !== t || n !== r) for (let t = 0; t < mi; ++t) i[t] = bi(t * hi, e, n);
	function a(t) {
		let r = 0, a = 1, o = mi - 1;
		for (; a !== o && i[a] <= t; ++a) r += hi;
		--a;
		let s = (t - i[a]) / (i[a + 1] - i[a]), c = r + s * hi, l = xi(c, e, n);
		return l >= di ? Ci(t, c, e, n) : l === 0 ? c : Si({
			aX: t,
			_aA: r,
			_aB: r + hi,
			mX1: e,
			mX2: n
		});
	}
	return function(i) {
		let o = Math.min(1, Math.max(0, i));
		return e === t && n === r ? o : o === 0 ? 0 : o === 1 ? 1 : bi(a(o), t, r);
	};
}
var Ti = (e) => Math.round(e * 1e6) / 1e6, Ei = /* @__PURE__ */ new Set([
	"deg",
	"rad",
	"grad",
	"turn"
]), Di = /* @__PURE__ */ new Set(/* @__PURE__ */ "%.cap.ch.cm.cqb.cqh.cqi.cqmax.cqmin.cqw.dvh.dvw.em.ex.ic.in.lh.lvh.lvw.mm.pc.pt.px.q.rem.rlh.svh.svw.vb.vh.vi.vmax.vmin.vw".split(".")), Oi = /^([+-]?(?:\d+\.?\d*|\.\d+))([a-zA-Z%]+)?$/, ki = /* @__PURE__ */ new Set([
	"left",
	"center",
	"right",
	"top",
	"bottom"
]), Ai = (e) => e === "left" ? [{
	axis: "x",
	value: {
		value: 0,
		unit: "%"
	}
}] : e === "right" ? [{
	axis: "x",
	value: {
		value: 100,
		unit: "%"
	}
}] : e === "top" ? [{
	axis: "y",
	value: {
		value: 0,
		unit: "%"
	}
}] : e === "bottom" ? [{
	axis: "y",
	value: {
		value: 100,
		unit: "%"
	}
}] : [{
	axis: "x",
	value: {
		value: 50,
		unit: "%"
	}
}, {
	axis: "y",
	value: {
		value: 50,
		unit: "%"
	}
}], ji = {
	value: 50,
	unit: "%"
}, Mi = (e) => String(Ti(e)), Ni = class extends TypeError {}, Pi = (e, t) => {
	let n = Oi.exec(e);
	if (n === null) throw new Ni(`Cannot interpolate "${t}" because "${e}" is not a supported scale, translate, or rotate value`);
	let r = n[2] ?? null, i = Number(n[1]);
	if (!Number.isFinite(i)) throw TypeError(`Cannot interpolate "${t}" because "${e}" is not finite`);
	if (r === null) return {
		kind: "scale",
		value: i,
		unit: null
	};
	if (Ei.has(r)) return {
		kind: "rotate",
		value: i,
		unit: r
	};
	if (Di.has(r)) return {
		kind: "translate",
		value: i,
		unit: r
	};
	throw TypeError(`Cannot interpolate "${t}" because "${r}" is not a supported translate or rotate unit`);
}, Fi = ({ component: e, value: t, allowPercentage: n }) => {
	let r = Oi.exec(e);
	if (r === null) throw TypeError(`Cannot interpolate "${t}" because "${e}" is not a supported transform-origin ${n ? "length-percentage" : "z length"}`);
	let i = r[2] ?? null, a = Number(r[1]);
	if (!Number.isFinite(a)) throw TypeError(`Cannot interpolate "${t}" because "${e}" is not finite`);
	if (i === null || !Di.has(i) || !n && i === "%") throw TypeError(`Cannot interpolate "${t}" because "${e}" is not a supported transform-origin ${n ? "length-percentage" : "z length"}`);
	return {
		value: a,
		unit: i
	};
}, Ii = (e, t) => {
	let n = e.toLowerCase();
	return ki.has(n) ? {
		type: "keyword",
		keyword: n
	} : {
		type: "length-percentage",
		parsed: Fi({
			component: e,
			value: t,
			allowPercentage: !0
		})
	};
}, Li = (e, t, n) => {
	let r = [];
	for (let n of Ai(e)) for (let e of Ai(t)) n.axis !== e.axis && r.push(n.axis === "x" ? [n.value, e.value] : [e.value, n.value]);
	if (r.length === 0) throw TypeError(`Cannot interpolate "${n}" because "${e} ${t}" is not a valid transform-origin keyword pair`);
	return r[0];
}, Ri = (e, t) => {
	if (e.length === 1) {
		let n = Ii(e[0], t);
		return n.type === "length-percentage" ? [n.parsed, ji] : n.keyword === "top" || n.keyword === "bottom" ? [ji, Ai(n.keyword)[0].value] : [Ai(n.keyword)[0].value, ji];
	}
	let n = Ii(e[0], t), r = Ii(e[1], t);
	if (n.type === "length-percentage" && r.type === "length-percentage") return [n.parsed, r.parsed];
	if (n.type === "keyword" && r.type === "keyword") return Li(n.keyword, r.keyword, t);
	let i = n.type === "keyword" ? n : r.type === "keyword" ? r : null, a = n.type === "length-percentage" ? n.parsed : r.type === "length-percentage" ? r.parsed : null;
	if (i === null || a === null) throw Error("Expected a keyword and a length-percentage value");
	let o = n.type === "keyword";
	if (i.keyword === "left" || i.keyword === "right") {
		if (!o) throw TypeError(`Cannot interpolate "${t}" because horizontal transform-origin keywords must come before a length-percentage value`);
		return [Ai(i.keyword)[0].value, a];
	}
	return i.keyword === "top" || i.keyword === "bottom" ? [a, Ai(i.keyword)[0].value] : o ? [ji, a] : [a, ji];
}, zi = (e, t) => {
	let [n, r] = Ri(t.slice(0, 2), e), i = t[2] === void 0 ? {
		value: 0,
		unit: null
	} : Fi({
		component: t[2],
		value: e,
		allowPercentage: !1
	});
	return {
		kind: "translate",
		values: [
			n.value,
			r.value,
			i.value,
			0
		],
		units: [
			n.unit,
			r.unit,
			i.unit,
			null
		],
		dimensions: t[2] === void 0 ? 2 : 3,
		axisRotation: !1
	};
}, Bi = (e) => {
	let t = e.trim().split(/\s+/), n = t.length === 2 ? t[0].toLowerCase() : null;
	if (n === "x" || n === "y" || n === "z") {
		let r = Pi(t[1], e);
		return r.kind === "rotate" ? {
			kind: "rotate",
			values: n === "x" ? [
				1,
				0,
				0,
				r.value
			] : n === "y" ? [
				0,
				1,
				0,
				r.value
			] : [
				0,
				0,
				1,
				r.value
			],
			units: [
				null,
				null,
				null,
				r.unit
			],
			dimensions: 4,
			axisRotation: !0
		} : null;
	}
	if (t.length !== 4) return null;
	let r = t.slice(0, 3).map(Number);
	if (!r.every(Number.isFinite)) return null;
	let i = Pi(t[3], e);
	return i.kind === "rotate" ? {
		kind: "rotate",
		values: [
			r[0],
			r[1],
			r[2],
			i.value
		],
		units: [
			null,
			null,
			null,
			i.unit
		],
		dimensions: 4,
		axisRotation: !0
	} : null;
}, Vi = (e, t) => {
	if (typeof e == "number") {
		if (!Number.isFinite(e)) throw Error(`outputRange must contain only finite numbers, but got [${e}]`);
		return {
			kind: "scale",
			values: [
				e,
				e,
				1,
				0
			],
			units: [
				null,
				null,
				null,
				null
			],
			dimensions: 1,
			axisRotation: !1
		};
	}
	if (t === "transform-origin") {
		let t = e.trim().split(/\s+/);
		if (t.length < 1 || t.length > 3 || t[0] === "") throw TypeError(`String outputRange values must contain 1 to 3 components, but got "${e}"`);
		return zi(e, t);
	}
	let n = Bi(e);
	if (n !== null) {
		if (t !== void 0 && t !== "rotate") throw TypeError(`Cannot interpolate "${e}" as ${t} because it is a rotate value`);
		return n;
	}
	let r = e.trim().split(/\s+/);
	if (r.length < 1 || r.length > 3 || r[0] === "") throw TypeError(`String outputRange values must contain 1 to 3 components, but got "${e}"`);
	if (r.some((e) => ki.has(e.toLowerCase()))) {
		if (t !== void 0) throw TypeError(`Cannot interpolate "${e}" as ${t} because it is a transform-origin value`);
		return zi(e, r);
	}
	let i = r.map((t) => Pi(t, e)), [{ kind: a }] = i;
	for (let t of i) if (t.kind !== a) throw TypeError(`Cannot interpolate "${e}" because it mixes ${a} and ${t.kind} values`);
	if (t !== void 0 && t !== a) throw TypeError(`Cannot interpolate "${e}" as ${t} because it is a ${a} value`);
	if (a === "scale") {
		let e = i[0].value;
		return {
			kind: a,
			values: [
				e,
				i[1]?.value ?? e,
				i[2]?.value ?? 1,
				0
			],
			units: [
				null,
				null,
				null,
				null
			],
			dimensions: i.length,
			axisRotation: !1
		};
	}
	return {
		kind: a,
		values: [
			i[0].value,
			i[1]?.value ?? 0,
			i[2]?.value ?? 0,
			0
		],
		units: [
			i[0].unit,
			i[1]?.unit ?? null,
			i[2]?.unit ?? null,
			null
		],
		dimensions: i.length,
		axisRotation: !1
	};
}, Hi = ({ kind: e, values: t, units: n, dimensions: r, axisRotation: i }) => i ? `${Mi(t[0])} ${Mi(t[1])} ${Mi(t[2])} ${Mi(t[3])}${n[3]}` : e === "scale" ? t.slice(0, r).map((e) => Mi(e)).join(" ") : t.slice(0, r).map((e, t) => `${Mi(e)}${n[t]}`).join(" "), Ui = (e) => e === 0 ? 0 : Math.sign(e) * e * e, Wi = (e) => e === 0 ? 0 : Math.sign(e) * Math.sqrt(Math.abs(e));
function Gi(e, t, n, r) {
	let { extrapolateLeft: i, extrapolateRight: a, easing: o, output: s } = r, c = e, [l, u] = t, [d, f] = n;
	if (c < l) {
		if (i === "identity") return c;
		if (i === "clamp") c = l;
		else if (i === "wrap") {
			let e = u - l;
			c = ((c - l) % e + e) % e + l;
		}
	}
	if (c > u) {
		if (a === "identity") return c;
		if (a === "clamp") c = u;
		else if (a === "wrap") {
			let e = u - l;
			c = ((c - l) % e + e) % e + l;
		}
	}
	if (d === f) return d;
	if (c = (c - l) / (u - l), c = o(c), s === "perceptual-scale") {
		let e = Ui(d), t = Ui(f);
		c = Wi(c * (t - e) + e);
	} else c = c * (f - d) + d;
	return c;
}
function Ki(e, t) {
	let n = 1;
	for (; n < t.length - 1 && !(t[n] >= e); ++n);
	return n - 1;
}
var qi = (e) => e, Ji = (e) => e ?? "linear", Yi = (e) => e.remotionShouldExtendRight === !0, Xi = ({ easing: e, segmentIndex: t }) => e === void 0 ? qi : typeof e == "function" ? e : e[t], Zi = ({ input: e, inputRange: t, outputRange: n, easing: r, extrapolateLeft: i, extrapolateRight: a, output: o }) => Gi(e, t, n, {
	easing: r,
	extrapolateLeft: i,
	extrapolateRight: e > t[1] && a === "clamp" && Yi(r) ? "extend" : a,
	output: o
}), q = ({ input: e, inputRange: t, outputRange: n, options: r }) => {
	let i = Ji(r?.output);
	if (t.length === 1) return n[0];
	let a = r?.easing, o = "extend";
	r?.extrapolateLeft !== void 0 && (o = r.extrapolateLeft);
	let s = "extend";
	r?.extrapolateRight !== void 0 && (s = r.extrapolateRight);
	let c = r?.posterize === void 0 ? e : Math.floor(e / r.posterize) * r.posterize, l = Ki(c, t), u = Xi({
		easing: a,
		segmentIndex: l
	}), d = Zi({
		input: c,
		inputRange: [t[l], t[l + 1]],
		outputRange: [n[l], n[l + 1]],
		easing: u,
		extrapolateLeft: o,
		extrapolateRight: s,
		output: i
	});
	for (let e = 0; e < l; e++) {
		let r = Xi({
			easing: a,
			segmentIndex: e
		});
		if (!Yi(r)) continue;
		let s = t[e + 1];
		if (c <= s) continue;
		let l = Zi({
			input: c,
			inputRange: [t[e], s],
			outputRange: [n[e], n[e + 1]],
			easing: r,
			extrapolateLeft: o,
			extrapolateRight: "extend",
			output: i
		});
		d += l - n[e + 1];
	}
	return d;
}, Qi = ({ input: e, inputRange: t, outputRange: n, options: r, outputType: i }) => {
	let a = n.map((e) => Vi(e, i)), o = a.some((e) => e.axisRotation), s = r?.posterize === void 0 ? e : Math.floor(e / r.posterize) * r.posterize, c = t.length === 1 ? 0 : Ki(s, t), l = o ? a.map((e, t) => {
		if (e.kind !== "rotate" || e.axisRotation) return e;
		if (e.dimensions !== 1) throw TypeError("Cannot interpolate a multi-angle rotate value with an axis rotation");
		let n = e.values[0] === 0 ? t === 0 ? a.find((e) => e.axisRotation) : t === a.length - 1 ? [...a].reverse().find((e) => e.axisRotation) : t === c ? a[t + 1] : t === c + 1 ? a[t - 1] : void 0 : void 0, r = n?.axisRotation ? n.values : [
			0,
			0,
			1
		];
		return {
			kind: "rotate",
			values: [
				r[0],
				r[1],
				r[2],
				e.values[0]
			],
			units: [
				null,
				null,
				null,
				e.units[0]
			],
			dimensions: 4,
			axisRotation: !0
		};
	}) : a, u = l[0]?.kind;
	if (u === void 0) throw Error("outputRange must have at least 1 element");
	for (let e of l) if (e.kind !== u) throw TypeError(`Cannot interpolate ${u} values with ${e.kind} values`);
	let d = Math.max(...l.map((e) => e.dimensions)), f = [
		null,
		null,
		null,
		null
	];
	if (u !== "scale") {
		for (let e = 0; e < d; e++) if (!(o && e < 3)) {
			for (let t of l) {
				let n = t.units[e];
				if (n !== null) {
					if (f[e] === null) {
						f[e] = n;
						continue;
					}
					if (f[e] !== n) throw TypeError(`Cannot interpolate ${u} values with different units on axis ${e + 1}: ${f[e]} and ${n}`);
				}
			}
			if (f[e] === null) throw TypeError(`Cannot interpolate ${u} values because axis ${e + 1} has no unit`);
		}
	}
	let p = [
		0,
		0,
		0,
		0
	];
	for (let n = 0; n < d; n++) p[n] = q({
		input: e,
		inputRange: t,
		outputRange: l.map((e) => e.values[n]),
		options: r
	});
	return Hi({
		kind: u,
		values: p,
		units: f,
		dimensions: d,
		axisRotation: o
	});
}, $i = ({ input: e, inputRange: t, outputRange: n, options: r }) => q({
	input: e,
	inputRange: t,
	outputRange: n.map((e) => {
		if (typeof e == "string") {
			let t = e.toLowerCase();
			if (t === "normal") return 400;
			if (t === "bold") return 700;
		}
		let t = typeof e == "string" ? Oi.exec(e) : null, n = typeof e == "number" ? e : t !== null && t[2] === void 0 ? Number(t[1]) : NaN;
		if (!Number.isFinite(n) || n < 1 || n > 1e3) throw TypeError(`Cannot interpolate font weight "${e}". Expected "normal", "bold", or a number between 1 and 1000`);
		return n;
	}),
	options: r
}), ea = ({ input: e, inputRange: t, outputRange: n, options: r }) => {
	if (t.length === 1) return n[0];
	for (let e = 0; e < t.length - 1; e++) if (Xi({
		easing: r?.easing,
		segmentIndex: e
	}) !== Sa.step1) throw TypeError(typeof n[0] == "boolean" ? "Booleans can only be interpolated using Easing.step1" : "Non-numeric strings can only be interpolated using Easing.step1");
	let i = r?.posterize === void 0 ? e : Math.floor(e / r.posterize) * r.posterize, a = t[0], o = t[t.length - 1], s = i;
	if (s < a) {
		if (r?.extrapolateLeft === "identity") throw TypeError(typeof n[0] == "boolean" ? "extrapolateLeft: \"identity\" is not supported for booleans" : "extrapolateLeft: \"identity\" is not supported for non-numeric strings");
		if (r?.extrapolateLeft === "wrap") {
			let e = o - a;
			s = ((s - a) % e + e) % e + a;
		} else return n[0];
	}
	if (s > o) {
		if (r?.extrapolateRight === "identity") throw TypeError(typeof n[0] == "boolean" ? "extrapolateRight: \"identity\" is not supported for booleans" : "extrapolateRight: \"identity\" is not supported for non-numeric strings");
		if (r?.extrapolateRight === "wrap") {
			let e = o - a;
			s = ((s - a) % e + e) % e + a;
		} else return n[n.length - 1];
	}
	let c = Ki(s, t);
	return s >= t[c + 1] ? n[c + 1] : n[c];
}, ta = (e) => {
	let t = e[0]?.length;
	if (t === void 0) throw Error("outputRange must have at least 1 element");
	if (t === 0) throw TypeError("outputRange tuples must contain at least 1 number");
	for (let n of e) {
		if (n.length !== t) throw TypeError(`outputRange tuples must all have the same length, but got ${t} and ${n.length}`);
		for (let e of n) if (typeof e != "number" || !Number.isFinite(e)) throw TypeError(`outputRange tuples must contain only finite numbers, but got [${n.join(",")}]`);
	}
	return t;
}, na = ({ input: e, inputRange: t, outputRange: n, options: r }) => {
	let i = ta(n);
	return Array(i).fill(!0).map((i, a) => q({
		input: e,
		inputRange: t,
		outputRange: n.map((e) => e[a]),
		options: r
	}));
};
function ra(e) {
	for (let t = 1; t < e.length; ++t) if (!(e[t] > e[t - 1])) throw Error(`inputRange must be strictly monotonically increasing but got [${e.join(",")}]`);
}
function ia(e, t) {
	if (t.length < 1) throw Error(e + " must have at least 1 element");
	for (let n of t) {
		if (typeof n != "number") throw Error(`${e} must contain only numbers`);
		if (!Number.isFinite(n)) throw Error(`${e} must contain only finite numbers, but got [${t.join(",")}]`);
	}
}
function aa(e, t) {
	if (e === void 0 || typeof e == "function") return;
	let n = t - 1;
	if (e.length !== n) throw Error(`When easing is an array, it must have one entry per segment between keyframes (length inputRange.length - 1 = ${n}), but got length ${e.length}`);
	for (let t = 0; t < e.length; t++) if (typeof e[t] != "function") throw Error(`easing[${t}] must be a function`);
}
function oa(e) {
	if (e !== void 0 && (typeof e != "number" || !Number.isFinite(e) || e <= 0)) throw Error(`posterize must be a positive finite number, but got ${e}`);
}
function sa(e) {
	if (e !== void 0 && e !== "linear" && e !== "perceptual-scale") throw Error(`output must be "linear" or "perceptual-scale", but got ${String(e)}`);
}
function ca(e) {
	if (e !== void 0 && e !== "font-weight" && e !== "scale" && e !== "translate" && e !== "rotate" && e !== "transform-origin") throw Error(`outputType must be "font-weight", "scale", "translate", "rotate", or "transform-origin", but got ${String(e)}`);
}
function la(e, t, n, r) {
	if (e === void 0) throw Error("input can not be undefined");
	if (t === void 0) throw Error("inputRange can not be undefined");
	if (n === void 0) throw Error("outputRange can not be undefined");
	if (t.length !== n.length) throw Error("inputRange (" + t.length + ") and outputRange (" + n.length + ") must have the same length");
	if (ia("inputRange", t), ra(t), aa(r?.easing, t.length), oa(r?.posterize), sa(r?.output), ca(r?.outputType), typeof e != "number") throw TypeError("Cannot interpolate an input which is not a number");
	if (!Array.isArray(n)) throw Error("outputRange must contain only numbers");
	let i = r?.outputType;
	if (n.some((e) => typeof e == "boolean")) {
		if (!n.every((e) => typeof e == "boolean")) throw TypeError("Boolean outputRange must contain only booleans");
		if (i !== void 0) throw TypeError("Boolean outputRange cannot use outputType");
		return ea({
			input: e,
			inputRange: t,
			outputRange: n,
			options: r
		});
	}
	if (i === "font-weight") {
		if (!n.every((e) => typeof e == "number" || typeof e == "string")) throw TypeError("Font weight outputRange must contain only numbers or strings");
		return $i({
			input: e,
			inputRange: t,
			outputRange: n,
			options: r
		});
	}
	let a = n.some((e) => typeof e == "string");
	if (i !== void 0 && i !== "scale" && !a) throw TypeError(`${i} outputRange must contain strings with the appropriate CSS units`);
	if (a) {
		if (!n.every((e) => typeof e == "string" || typeof e == "number")) throw TypeError("outputRange must contain only numbers, or supported scale, translate, and rotate strings");
		try {
			return Qi({
				input: e,
				inputRange: t,
				outputRange: n,
				options: r,
				outputType: i
			});
		} catch (a) {
			if (!n.every((e) => typeof e == "string") || !n.some((e) => {
				try {
					return Vi(e, i), !1;
				} catch (e) {
					return e instanceof Ni;
				}
			})) throw a;
			return ea({
				input: e,
				inputRange: t,
				outputRange: n,
				options: r
			});
		}
	}
	if (n.every((e) => Array.isArray(e))) return na({
		input: e,
		inputRange: t,
		outputRange: n,
		options: r
	});
	if (!n.every((e) => typeof e == "number")) throw TypeError("outputRange must contain only numbers, numeric tuples, or supported scale, translate, and rotate strings");
	return ia("outputRange", n), q({
		input: e,
		inputRange: t,
		outputRange: n,
		options: r
	});
}
var ua = ({ allowFloats: e, durationInFrames: t, frame: n }) => {
	if (n === void 0) throw TypeError("Argument missing for parameter \"frame\"");
	if (typeof n != "number") throw TypeError(`Argument passed for "frame" is not a number: ${n}`);
	if (!Number.isFinite(n)) throw RangeError(`Frame ${n} is not finite`);
	if (n % 1 != 0 && !e) throw RangeError(`Argument for frame must be an integer, but got ${n}`);
	if (n < 0 && n < -t) throw RangeError(`Cannot use frame ${n}: Duration of composition is ${t}, therefore the lowest frame that can be rendered is ${-t}`);
	if (n > t - 1) throw RangeError(`Cannot use frame ${n}: Duration of composition is ${t}, therefore the highest frame that can be rendered is ${t - 1}`);
}, da = (e) => {
	if (e !== void 0) {
		if (typeof e != "number") throw TypeError(`A "duration" of a spring must be a "number" but is "${typeof e}"`);
		if (Number.isNaN(e)) throw TypeError("A \"duration\" of a spring is NaN, which it must not be");
		if (!Number.isFinite(e)) throw TypeError("A \"duration\" of a spring must be finite, but is " + e);
		if (e <= 0) throw TypeError("A \"duration\" of a spring must be positive, but is " + e);
	}
}, fa = {
	damping: 10,
	mass: 1,
	stiffness: 100,
	overshootClamping: !1
}, pa = {};
function ma({ animation: e, now: t, config: n }) {
	let { toValue: r, lastTimestamp: i, current: a, velocity: o } = e, s = Math.min(t - i, 64);
	if (n.damping <= 0) throw Error("Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.");
	let c = n.damping, l = n.mass, u = n.stiffness, d = [
		r,
		i,
		a,
		o,
		c,
		l,
		u,
		t
	].join("-");
	if (pa[d]) return pa[d];
	let f = -o, p = r - a, m = c / (2 * Math.sqrt(u * l)), h = Math.sqrt(u / l), g = h * Math.sqrt(1 - m ** 2), _ = s / 1e3, v = Math.sin(g * _), y = Math.cos(g * _), b = Math.exp(-m * h * _), x = b * (v * ((f + m * h * p) / g) + p * y), S = r - x, C = m * h * x - b * (y * (f + m * h * p) - g * p * v), w = Math.exp(-h * _), T = r - w * (p + (f + h * p) * _), E = w * (f * (_ * h - 1) + _ * p * h * h), D = {
		toValue: r,
		prevPosition: a,
		lastTimestamp: t,
		current: m < 1 ? S : T,
		velocity: m < 1 ? C : E
	};
	return pa[d] = D, D;
}
var ha = {};
function ga({ frame: e, fps: t, config: n = {} }) {
	let r = {
		damping: n.damping ?? fa.damping,
		mass: n.mass ?? fa.mass,
		stiffness: n.stiffness ?? fa.stiffness,
		overshootClamping: n.overshootClamping ?? fa.overshootClamping
	}, i = [
		e,
		t,
		r.damping,
		r.mass,
		r.overshootClamping,
		r.stiffness
	].join("-");
	if (ha[i]) return ha[i];
	let a = {
		lastTimestamp: 0,
		current: 0,
		toValue: 1,
		velocity: 0,
		prevPosition: 0
	}, o = Math.max(0, e), s = o % 1;
	for (let e = 0; e <= Math.floor(o); e++) {
		let n = e / t * 1e3;
		a = ma({
			animation: a,
			now: n,
			config: r
		});
	}
	return s > 0 && (a = ma({
		animation: a,
		now: o / t * 1e3,
		config: r
	})), ha[i] = a, a;
}
var _a = /* @__PURE__ */ new Map();
function va({ fps: e, config: t = {}, threshold: n = .005 }) {
	if (typeof n != "number") throw TypeError(`threshold must be a number, got ${n} of type ${typeof n}`);
	if (n === 0) return Infinity;
	if (n === 1) return 0;
	if (isNaN(n)) throw TypeError("Threshold is NaN");
	if (!Number.isFinite(n)) throw TypeError("Threshold is not finite");
	if (n < 0) throw TypeError("Threshold is below 0");
	let r = [
		e,
		t.damping,
		t.mass,
		t.overshootClamping,
		t.stiffness,
		n
	].join("-");
	if (_a.has(r)) return _a.get(r);
	ct(e, "to the measureSpring() function", !1);
	let i = 0, a = 0, o = () => ga({
		fps: e,
		frame: i,
		config: t
	}), s = o(), c = () => Math.abs(s.current - s.toValue), l = c();
	for (; l >= n;) i++, s = o(), l = c();
	a = i;
	for (let e = 0; e < 20; e++) i++, s = o(), l = c(), l >= n && (e = 0, a = i + 1);
	return _a.set(r, a), a;
}
function ya({ frame: e, fps: t, config: n = {}, from: r = 0, to: i = 1, durationInFrames: a, durationRestThreshold: o, delay: s = 0, reverse: c = !1 }) {
	da(a), ua({
		frame: e,
		durationInFrames: Infinity,
		allowFloats: !0
	}), ct(t, "to spring()", !1);
	let l = c || a !== void 0, u = l ? va({
		fps: t,
		config: n,
		threshold: o
	}) : void 0, d = l ? { get: () => u } : { get: () => {
		throw Error("did not calculate natural duration, this is an error with Remotion. Please report");
	} }, f = (c ? (a ?? d.get()) - e : e) + (c ? s : -s), p = a === void 0 ? f : f / (a / d.get());
	if (a && f > a) return i;
	let m = ga({
		fps: t,
		frame: p,
		config: n
	}), h = n.overshootClamping ? i >= r ? Math.min(m.current, i) : Math.max(m.current, i) : m.current;
	return r === 0 && i === 1 ? h : la(h, [0, 1], [r, i]);
}
var ba = (e) => Math.min(1, Math.max(0, e)), xa = 30, Sa = class e {
	static step0(e) {
		return +(e > 0);
	}
	static step1(e) {
		return +(e >= 1);
	}
	static linear(e) {
		return e;
	}
	static ease(t) {
		return e.bezier(.42, 0, 1, 1)(t);
	}
	static quad(e) {
		return e * e;
	}
	static cubic(e) {
		return e * e * e;
	}
	static poly(e) {
		return (t) => t ** e;
	}
	static sin(e) {
		return 1 - Math.cos(e * Math.PI / 2);
	}
	static circle(e) {
		let t = ba(e);
		return 1 - Math.sqrt(1 - t * t);
	}
	static exp(e) {
		return 2 ** (10 * (e - 1));
	}
	static elastic(e = 1) {
		let t = e * Math.PI;
		return (e) => 1 - Math.cos(e * Math.PI / 2) ** 3 * Math.cos(e * t);
	}
	static back(e = 1.70158) {
		return (t) => t * t * ((e + 1) * t - e);
	}
	static spring({ allowTail: e = !1, durationRestThreshold: t, ...n } = {}) {
		return Object.assign((r) => r <= 0 ? 0 : !e && r >= 1 ? 1 : ya(e ? {
			fps: xa,
			frame: r * va({
				fps: xa,
				config: n,
				threshold: t
			}),
			config: n
		} : {
			fps: xa,
			frame: r * xa,
			config: n,
			durationInFrames: xa,
			durationRestThreshold: t
		}), { remotionShouldExtendRight: e });
	}
	static bounce(e) {
		let t = ba(e);
		if (t < 1 / 2.75) return 7.5625 * t * t;
		if (t < 2 / 2.75) {
			let e = t - 1.5 / 2.75;
			return 7.5625 * e * e + .75;
		}
		if (t < 2.5 / 2.75) {
			let e = t - 2.25 / 2.75;
			return 7.5625 * e * e + .9375;
		}
		let n = t - 2.625 / 2.75;
		return 7.5625 * n * n + .984375;
	}
	static bezier(e, t, n, r) {
		return wi(e, t, n, r);
	}
	static in(e) {
		return e;
	}
	static out(e) {
		return (t) => 1 - e(1 - t);
	}
	static inOut(e) {
		return (t) => t < .5 ? e(t * 2) / 2 : 1 - e((1 - t) * 2) / 2;
	}
}, Ca = "[-+]?\\d*\\.?\\d+", wa = Ca + "%";
function Ta(...e) {
	return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var Ea = "(?:none|[-+]?\\d*\\.?\\d+(?:%|deg|rad|grad|turn)?)";
function Da(e) {
	return RegExp(e + "\\(\\s*(" + Ea + ")\\s+(" + Ea + ")\\s+(" + Ea + ")(?:\\s*\\/\\s*(" + Ea + "))?\\s*\\)");
}
function Oa() {
	let e = {
		rgb: void 0,
		rgba: void 0,
		hsl: void 0,
		hsla: void 0,
		hex3: void 0,
		hex4: void 0,
		hex5: void 0,
		hex6: void 0,
		hex8: void 0,
		oklch: void 0,
		oklab: void 0,
		lab: void 0,
		lch: void 0,
		hwb: void 0
	};
	return e.rgb === void 0 && (e.rgb = RegExp("rgb" + Ta(Ca, Ca, Ca)), e.rgba = RegExp("rgba" + Ta(Ca, Ca, Ca, Ca)), e.hsl = RegExp("hsl" + Ta(Ca, wa, wa)), e.hsla = RegExp("hsla" + Ta(Ca, wa, wa, Ca)), e.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, e.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, e.hex6 = /^#([0-9a-fA-F]{6})$/, e.hex8 = /^#([0-9a-fA-F]{8})$/, e.oklch = Da("oklch"), e.oklab = Da("oklab"), e.lab = Da("lab"), e.lch = Da("lch"), e.hwb = Da("hwb")), e;
}
function ka(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Aa(e, t, n) {
	let r = n < .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r, a = ka(i, r, e + 1 / 3), o = ka(i, r, e), s = ka(i, r, e - 1 / 3);
	return Math.round(a * 255) << 24 | Math.round(o * 255) << 16 | Math.round(s * 255) << 8;
}
function ja(e) {
	let t = Number.parseInt(e, 10);
	return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Ma(e) {
	return (Number.parseFloat(e) % 360 + 360) % 360 / 360;
}
function Na(e) {
	let t = Number.parseFloat(e);
	return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Pa(e) {
	let t = Number.parseFloat(e);
	return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Fa(e, t) {
	return e === "none" ? 0 : e.endsWith("%") ? Number.parseFloat(e) / 100 * t : Number.parseFloat(e);
}
function Ia(e) {
	return e === "none" ? 0 : e.endsWith("rad") ? Number.parseFloat(e) * 180 / Math.PI : e.endsWith("grad") ? Number.parseFloat(e) * .9 : e.endsWith("turn") ? Number.parseFloat(e) * 360 : Number.parseFloat(e);
}
function La(e) {
	return e === void 0 || e === "none" ? 1 : e.endsWith("%") ? Math.max(0, Math.min(1, Number.parseFloat(e) / 100)) : Math.max(0, Math.min(1, Number.parseFloat(e)));
}
function Ra(e) {
	return e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055;
}
function za(e) {
	return Math.max(0, Math.min(1, e));
}
function Ba(e, t, n, r) {
	let i = Math.round(za(e) * 255), a = Math.round(za(t) * 255), o = Math.round(za(n) * 255), s = Math.round(za(r) * 255);
	return (i << 24 | a << 16 | o << 8 | s) >>> 0;
}
function Va(e, t, n) {
	let r = e + .3963377774 * t + .2158037573 * n, i = e - .1055613458 * t - .0638541728 * n, a = e - .0894841775 * t - 1.291485548 * n, o = r * r * r, s = i * i * i, c = a * a * a, l = 4.0767416621 * o - 3.3077115913 * s + .2309699292 * c, u = -1.2684380046 * o + 2.6097574011 * s - .3413193965 * c, d = -.0041960863 * o - .7034186147 * s + 1.707614701 * c;
	return [
		Ra(l),
		Ra(u),
		Ra(d)
	];
}
function Ha(e, t, n) {
	let r = 216 / 24389, i = 24389 / 27, a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, c = o * o * o, l = s * s * s, u = c > r ? c : (116 * o - 16) / i, d = e > i * r ? ((e + 16) / 116) ** 3 : e / i, f = l > r ? l : (116 * s - 16) / i, p = u * .95047, m = d * 1, h = f * 1.08883, g = 3.2404542 * p - 1.5371385 * m - .4985314 * h, _ = -.969266 * p + 1.8760108 * m + .041556 * h, v = .0556434 * p - .2040259 * m + 1.0572252 * h;
	return [
		Ra(g),
		Ra(_),
		Ra(v)
	];
}
function Ua(e, t, n) {
	if (t + n >= 1) {
		let e = t / (t + n);
		return [
			e,
			e,
			e
		];
	}
	let r = ka(0, 1, e + 1 / 3), i = ka(0, 1, e), a = ka(0, 1, e - 1 / 3), o = 1 - t - n;
	return [
		r * o + t,
		i * o + t,
		a * o + t
	];
}
var Wa = {
	transparent: 0,
	aliceblue: 4042850303,
	antiquewhite: 4209760255,
	aqua: 16777215,
	aquamarine: 2147472639,
	azure: 4043309055,
	beige: 4126530815,
	bisque: 4293182719,
	black: 255,
	blanchedalmond: 4293643775,
	blue: 65535,
	blueviolet: 2318131967,
	brown: 2771004159,
	burlywood: 3736635391,
	burntsienna: 3934150143,
	cadetblue: 1604231423,
	chartreuse: 2147418367,
	chocolate: 3530104575,
	coral: 4286533887,
	cornflowerblue: 1687547391,
	cornsilk: 4294499583,
	crimson: 3692313855,
	cyan: 16777215,
	darkblue: 35839,
	darkcyan: 9145343,
	darkgoldenrod: 3095792639,
	darkgray: 2846468607,
	darkgreen: 6553855,
	darkgrey: 2846468607,
	darkkhaki: 3182914559,
	darkmagenta: 2332068863,
	darkolivegreen: 1433087999,
	darkorange: 4287365375,
	darkorchid: 2570243327,
	darkred: 2332033279,
	darksalmon: 3918953215,
	darkseagreen: 2411499519,
	darkslateblue: 1211993087,
	darkslategray: 793726975,
	darkslategrey: 793726975,
	darkturquoise: 13554175,
	darkviolet: 2483082239,
	deeppink: 4279538687,
	deepskyblue: 12582911,
	dimgray: 1768516095,
	dimgrey: 1768516095,
	dodgerblue: 512819199,
	firebrick: 2988581631,
	floralwhite: 4294635775,
	forestgreen: 579543807,
	fuchsia: 4278255615,
	gainsboro: 3705462015,
	ghostwhite: 4177068031,
	gold: 4292280575,
	goldenrod: 3668254975,
	gray: 2155905279,
	green: 8388863,
	greenyellow: 2919182335,
	grey: 2155905279,
	honeydew: 4043305215,
	hotpink: 4285117695,
	indianred: 3445382399,
	indigo: 1258324735,
	ivory: 4294963455,
	khaki: 4041641215,
	lavender: 3873897215,
	lavenderblush: 4293981695,
	lawngreen: 2096890111,
	lemonchiffon: 4294626815,
	lightblue: 2916673279,
	lightcoral: 4034953471,
	lightcyan: 3774873599,
	lightgoldenrodyellow: 4210742015,
	lightgray: 3553874943,
	lightgreen: 2431553791,
	lightgrey: 3553874943,
	lightpink: 4290167295,
	lightsalmon: 4288707327,
	lightseagreen: 548580095,
	lightskyblue: 2278488831,
	lightslategray: 2005441023,
	lightslategrey: 2005441023,
	lightsteelblue: 2965692159,
	lightyellow: 4294959359,
	lime: 16711935,
	limegreen: 852308735,
	linen: 4210091775,
	magenta: 4278255615,
	maroon: 2147483903,
	mediumaquamarine: 1724754687,
	mediumblue: 52735,
	mediumorchid: 3126187007,
	mediumpurple: 2473647103,
	mediumseagreen: 1018393087,
	mediumslateblue: 2070474495,
	mediumspringgreen: 16423679,
	mediumturquoise: 1221709055,
	mediumvioletred: 3340076543,
	midnightblue: 421097727,
	mintcream: 4127193855,
	mistyrose: 4293190143,
	moccasin: 4293178879,
	navajowhite: 4292783615,
	navy: 33023,
	oldlace: 4260751103,
	olive: 2155872511,
	olivedrab: 1804477439,
	orange: 4289003775,
	orangered: 4282712319,
	orchid: 3664828159,
	palegoldenrod: 4008225535,
	palegreen: 2566625535,
	paleturquoise: 2951671551,
	palevioletred: 3681588223,
	papayawhip: 4293907967,
	peachpuff: 4292524543,
	peru: 3448061951,
	pink: 4290825215,
	plum: 3718307327,
	powderblue: 2967529215,
	purple: 2147516671,
	rebeccapurple: 1714657791,
	red: 4278190335,
	rosybrown: 3163525119,
	royalblue: 1097458175,
	saddlebrown: 2336560127,
	salmon: 4202722047,
	sandybrown: 4104413439,
	seagreen: 780883967,
	seashell: 4294307583,
	sienna: 2689740287,
	silver: 3233857791,
	skyblue: 2278484991,
	slateblue: 1784335871,
	slategray: 1887473919,
	slategrey: 1887473919,
	snow: 4294638335,
	springgreen: 16744447,
	steelblue: 1182971135,
	tan: 3535047935,
	teal: 8421631,
	thistle: 3636451583,
	tomato: 4284696575,
	turquoise: 1088475391,
	violet: 4001558271,
	wheat: 4125012991,
	white: 4294967295,
	whitesmoke: 4126537215,
	yellow: 4294902015,
	yellowgreen: 2597139199
};
function Ga(e) {
	let t = Oa(), n;
	if (t.hex6 && (n = t.hex6.exec(e))) return Number.parseInt(n[1] + "ff", 16) >>> 0;
	if (Wa[e] !== void 0) return Wa[e];
	if (t.rgb && (n = t.rgb.exec(e))) return (ja(n[1]) << 24 | ja(n[2]) << 16 | ja(n[3]) << 8 | 255) >>> 0;
	if (t.rgba && (n = t.rgba.exec(e))) return (ja(n[1]) << 24 | ja(n[2]) << 16 | ja(n[3]) << 8 | Na(n[4])) >>> 0;
	if (t.hex3 && (n = t.hex3.exec(e))) return Number.parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + "ff", 16) >>> 0;
	if (t.hex8 && (n = t.hex8.exec(e))) return Number.parseInt(n[1], 16) >>> 0;
	if (t.hex4 && (n = t.hex4.exec(e))) return Number.parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4], 16) >>> 0;
	if (t.hsl && (n = t.hsl.exec(e))) return (Aa(Ma(n[1]), Pa(n[2]), Pa(n[3])) | 255) >>> 0;
	if (t.hsla && (n = t.hsla.exec(e))) return (Aa(Ma(n[1]), Pa(n[2]), Pa(n[3])) | Na(n[4])) >>> 0;
	if (t.oklch && (n = t.oklch.exec(e))) {
		let e = Fa(n[1], 1), t = Fa(n[2], .4), r = Ia(n[3]), i = La(n[4]), a = r * Math.PI / 180, [o, s, c] = Va(e, t * Math.cos(a), t * Math.sin(a));
		return Ba(o, s, c, i);
	}
	if (t.oklab && (n = t.oklab.exec(e))) {
		let e = Fa(n[1], 1), t = Fa(n[2], .4), r = Fa(n[3], .4), i = La(n[4]), [a, o, s] = Va(e, t, r);
		return Ba(a, o, s, i);
	}
	if (t.lab && (n = t.lab.exec(e))) {
		let e = Fa(n[1], 100), t = Fa(n[2], 125), r = Fa(n[3], 125), i = La(n[4]), [a, o, s] = Ha(e, t, r);
		return Ba(a, o, s, i);
	}
	if (t.lch && (n = t.lch.exec(e))) {
		let e = Fa(n[1], 100), t = Fa(n[2], 150), r = Ia(n[3]), i = La(n[4]), a = r * Math.PI / 180, [o, s, c] = Ha(e, t * Math.cos(a), t * Math.sin(a));
		return Ba(o, s, c, i);
	}
	if (t.hwb && (n = t.hwb.exec(e))) {
		let e = Ia(n[1]), t = Fa(n[2], 1), r = Fa(n[3], 1), i = La(n[4]), [a, o, s] = Ua(e / 360, t, r);
		return Ba(a, o, s, i);
	}
	throw Error(`invalid color string ${e} provided`);
}
var Ka = (e) => (e >> 24 & 255) / 255, qa = (e) => e >> 16 & 255, Ja = (e) => e >> 8 & 255, Ya = (e) => e & 255, Xa = (e, t, n, r) => `rgba(${e}, ${t}, ${n}, ${r})`;
function Za(e) {
	let t = Ga(e);
	return (t << 24 | t >>> 8) >>> 0;
}
var Qa = (e, t, n, r) => {
	let [i, a, o, s] = [
		qa,
		Ja,
		Ya,
		Ka
	].map((i) => {
		let a = la(e, t, n.map((e) => i(e)), {
			easing: r?.easing,
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
			posterize: r?.posterize
		});
		return i === Ka ? Number(a.toFixed(3)) : Math.round(a);
	});
	return Xa(i, a, o, s);
}, $a = (e, t, n, r) => {
	if (e === void 0) throw TypeError("input can not be undefined");
	if (t === void 0) throw TypeError("inputRange can not be undefined");
	if (n === void 0) throw TypeError("outputRange can not be undefined");
	if (t.length !== n.length) throw TypeError("inputRange (" + t.length + " values provided) and outputRange (" + n.length + " values provided) must have the same length");
	return Qa(e, t, n.map((e) => Za(e)), r);
}, eo = null, to = (e) => {
	eo = e;
}, no = ({ easing: e, forceSpringAllowTail: t }) => {
	switch (e.type) {
		case "linear": return Sa.linear;
		case "step1": return Sa.step1;
		case "spring": return Sa.spring({
			allowTail: t ?? e.allowTail ?? void 0,
			damping: e.damping,
			durationRestThreshold: e.durationRestThreshold ?? void 0,
			mass: e.mass,
			overshootClamping: e.overshootClamping,
			stiffness: e.stiffness
		});
		case "bezier": return wi(e.x1, e.y1, e.x2, e.y2);
		default: throw TypeError(`Unsupported easing: ${JSON.stringify(e)}`);
	}
}, ro = ({ frame: e, forceSpringAllowTail: t, status: n }) => {
	let { keyframes: r, easing: i, clamping: a, interpolationFunction: o } = n;
	if (r.length === 0) return null;
	let s = [...r].sort((e, t) => e.frame - t.frame), c = s.map((e) => e.frame), l = s.map((e) => e.value);
	if (o === "interpolatePaths") {
		if (!l.every((e) => typeof e == "string")) return null;
		if (r.length === 1) return l[0];
		if (!eo || a.left === "identity" || a.right === "identity") return null;
		try {
			return eo(e, c, l, {
				easing: i.map((e) => no({
					easing: e,
					forceSpringAllowTail: t
				})),
				extrapolateLeft: a.left,
				extrapolateRight: a.right,
				posterize: n.posterize
			});
		} catch {
			return null;
		}
	}
	if (o === "interpolateColors") {
		if (!l.every((e) => typeof e == "string")) return null;
		if (r.length === 1) return l[0];
		try {
			return $a(e, c, l, {
				easing: i.map((e) => no({
					easing: e,
					forceSpringAllowTail: t
				})),
				posterize: n.posterize
			});
		} catch {
			return null;
		}
	}
	if (o !== "interpolate") return null;
	try {
		return la(e, c, l, {
			easing: i.map((e) => no({
				easing: e,
				forceSpringAllowTail: t
			})),
			extrapolateLeft: a.left,
			extrapolateRight: a.right,
			output: n.output,
			posterize: n.posterize
		});
	} catch {
		return null;
	}
}, io = ({ frame: e, status: t }) => e * (t.keyframePlaybackRateAdjustment ?? 1) - (t.keyframeDisplayOffsetAdjustment ?? 0), ao = ({ dragOverrideValue: e, frame: t }) => {
	if (e === void 0) return { type: "none" };
	if (e.type === "static") return {
		type: "resolved",
		value: e.value
	};
	if (t === null) return { type: "none" };
	let n = ro({
		forceSpringAllowTail: null,
		frame: io({
			frame: t,
			status: e.status
		}),
		status: e.status
	});
	return n === null ? { type: "none" } : {
		type: "resolved",
		value: n
	};
}, oo = ({ propStatus: e, dragOverrideValue: t, defaultValue: n, frame: r = null, shouldResortToDefaultValueIfUndefined: i = !1 }) => {
	let a = ao({
		dragOverrideValue: t,
		frame: r
	});
	return a.type === "resolved" && a.value !== void 0 ? a.value : e.status === "keyframed" ? r === null ? i ? n : void 0 : ro({
		forceSpringAllowTail: null,
		frame: io({
			frame: r,
			status: e
		}),
		status: e
	}) : e.codeValue === void 0 && i ? n : e.codeValue;
}, so = (0, b.createContext)({ overrideIdToNodePathMappings: {} }), co = (0, b.createContext)({ setOverrideIdToNodePath: () => {
	throw Error("OverrideIdsToNodePathsSettersContext not initialized");
} }), lo = {}, uo = ({ descriptor: e, propStatusOverrides: t, dragOverrides: n, frame: r }) => {
	if (!t && !n) return {
		params: e.params,
		effectKey: e.effectKey
	};
	let i = { ...e.params };
	if (t) for (let [e, n] of Object.entries(t)) n !== void 0 && (i[e] = n);
	if (n) for (let [e, t] of Object.entries(n)) {
		let n = ao({
			dragOverrideValue: t,
			frame: r
		});
		n.type === "resolved" && (i[e] = n.value);
	}
	return {
		params: i,
		effectKey: e.definition.calculateKey(i)
	};
}, fo = (e, t) => {
	if (!e) return null;
	let n = {}, r = !1;
	for (let [i, a] of Object.entries(e)) {
		if (a.status === "static") {
			n[i] = a.codeValue, r = !0;
			continue;
		}
		if (a.status === "keyframed") {
			let e = ro({
				forceSpringAllowTail: null,
				frame: io({
					frame: t,
					status: a
				}),
				status: a
			});
			e !== null && (n[i] = e, r = !0);
		}
	}
	return r ? n : null;
}, po = (e) => {
	let t = (0, b.useRef)(null), n = e.map((e) => e.definition), r = t.current, i = r !== null && r.definitions.length === n.length && r.definitions.every((e, t) => e === n[t]), a = i ? r.controllers : e.map((e) => on(e.params)), o = i ? r.definitions : n;
	return (0, b.useLayoutEffect)(() => {
		o.forEach((t, n) => {
			let r = e[n]?.params;
			a[n].setSnapshot(r);
		});
	}, [
		a,
		e,
		o
	]), t.current = {
		definitions: o,
		controllers: a
	}, Object.assign(o, { runtimeValues: a.map((e) => e.store) });
}, mo = ({ propStatuses: e, nodePath: t, effectIndex: n }) => {
	let r = e[Ur(t)];
	if (!r) return {
		type: "cannot-update-sequence",
		reason: "not-found"
	};
	if (!r.canUpdate) return {
		type: "cannot-update-sequence",
		reason: r.reason
	};
	let i = r.effects.find((e) => e.effectIndex === n);
	return i ? i.canUpdate ? {
		type: "can-update-effect",
		props: i.props
	} : {
		type: "cannot-update-effect",
		reason: i.reason
	} : {
		type: "cannot-update-effect",
		reason: "not-found"
	};
}, ho = (e, t) => {
	let n = e[Ur(t)];
	if (n && n.canUpdate) return n.props;
}, go = ({ effects: e, overrideId: t }) => {
	let n = (0, b.useRef)(null), { propStatuses: r } = (0, b.useContext)(Wr), i = Nn(), { overrideIdToNodePathMappings: a } = (0, b.useContext)(so), o = n.current, s = t ? a[t] ?? null : null, c = Yr(s, e.length), l = e.map((e, t) => {
		if (s === null) return {
			descriptor: e,
			params: e.params,
			effectKey: e.effectKey
		};
		let n = mo({
			propStatuses: r,
			nodePath: s,
			effectIndex: t
		}), a = n.type === "can-update-effect" ? fo(n.props, i) : null, o = c[t] ?? lo, { params: l, effectKey: u } = uo({
			descriptor: e,
			propStatusOverrides: a,
			dragOverrides: Object.keys(o).length === 0 ? null : o,
			frame: i
		});
		return {
			descriptor: e,
			params: l,
			effectKey: u
		};
	});
	if (o !== null && o.length === l.length && o.every((e, t) => e.definition === l[t].descriptor.definition && e.effectKey === l[t].effectKey)) return o;
	let u = l.map(({ descriptor: e, params: t, effectKey: n }) => ({
		definition: e.definition,
		effectKey: n,
		params: t,
		memoized: !0
	}));
	return n.current = u, u;
}, _o = (e, t) => {
	let n = {};
	for (let r of Object.keys(e)) {
		let i = e[r];
		if (i.type !== "hidden") {
			if (i.type === "enum") {
				n[r] = i;
				let e = t(r) ?? i.default, a = i.variants[e];
				a && Object.assign(n, _o(a, t));
			} else n[r] = i;
		}
	}
	return n;
}, vo = (e) => {
	let t = {}, n = (e, n) => {
		e in t || (t[e] = n);
	};
	for (let t of Object.keys(e)) {
		let r = e[t];
		if (n(t, r), r.type === "enum") for (let e of Object.values(r.variants)) {
			let t = vo(e);
			for (let e of Object.keys(t)) n(e, t[e]);
		}
	}
	return t;
}, yo = ({ schema: e, key: t, value: n }) => {
	let r = e[t];
	if (!r) throw Error("Key " + JSON.stringify(t) + " not found in schema");
	if (typeof n != "string") throw Error("Value must be a string, but is " + JSON.stringify(n));
	if (r.type !== "enum") throw Error("Key " + JSON.stringify(t) + " is not an enum");
	if (!r.variants[n]) throw Error("Value for " + JSON.stringify(t) + " must be one of " + Object.keys(r.variants).map((e) => JSON.stringify(e)).join(", ") + ", got " + JSON.stringify(n));
	let i = Object.keys(r.variants).filter((e) => e !== n), a = /* @__PURE__ */ new Set();
	for (let e of i) {
		let t = r.variants[e], n = Object.keys(t);
		for (let e of n) a.add(e);
	}
	return [...a];
}, bo = { type: "linear" }, xo = ({ insertedKeyframeIndex: e, easingLength: t, keyframeCount: n }) => !(e > 0 && e < n - 1) || t === 0 ? null : Math.min(e - 1, t - 1), So = (e) => ({
	type: "static",
	value: e
}), Co = ({ status: e, frame: t, value: n, defaultEasing: r = bo }) => {
	let i = e.keyframes.findIndex((e) => e.frame === t), a = i === -1 ? [...e.keyframes, {
		frame: t,
		value: n
	}].sort((e, t) => e.frame - t.frame) : e.keyframes.map((e, r) => r === i ? {
		frame: t,
		value: n
	} : e), o = [...e.easing];
	if (i === -1) {
		let e = a.findIndex((e) => e.frame === t), n = xo({
			insertedKeyframeIndex: e,
			easingLength: o.length,
			keyframeCount: a.length
		}), i = n === null ? r : o[n];
		o.splice(e, 0, i);
	}
	for (; o.length < a.length - 1;) o.push(r);
	return o.length > a.length - 1 && (o.length = a.length - 1), {
		type: "keyframed",
		status: {
			...e,
			keyframes: a,
			easing: o
		}
	};
}, wo = (e) => {
	if (e?.type === "static") return e.value;
}, To = (e) => e !== null && e.status === "keyframed", Eo = (e, t) => {
	if (t in e) return e[t];
	for (let n of Object.values(e)) if (n.type === "enum") for (let e of Object.values(n.variants)) {
		let n = Eo(e, t);
		if (n) return n;
	}
}, Do = ({ schema: e, currentValue: t, overrideValues: n, propStatus: r, frame: i }) => {
	let a = {}, o = /* @__PURE__ */ new Set();
	for (let s of Object.keys(t)) {
		let c = r?.[s] ?? null, l = Eo(e, s);
		if (l?.type === "hidden") continue;
		let u;
		if (c === null) {
			let e = ao({
				dragOverrideValue: n[s],
				frame: i
			});
			u = e.type === "resolved" ? e.value : t[s];
		} else if (To(c)) {
			if (l?.type === "array" || l?.keyframable === !1) u = t[s];
			else {
				let e = ao({
					dragOverrideValue: n[s],
					frame: i
				});
				u = e.type === "resolved" ? e.value : i === null ? t[s] : ro({
					forceSpringAllowTail: null,
					frame: io({
						frame: i,
						status: c
					}),
					status: c
				}) ?? t[s];
			}
		} else u = c.status === "computed" ? t[s] : oo({
			propStatus: c,
			dragOverrideValue: n[s],
			defaultValue: l?.default,
			frame: i,
			shouldResortToDefaultValueIfUndefined: !1
		});
		l?.type === "asset" && typeof u == "string" && u.startsWith(Me) && (u = Pe(u)), u === void 0 && o.add(s), a[s] = u;
	}
	for (let t of Object.keys(n)) if (e[t]?.type === "enum") {
		let n = yo({
			schema: e,
			key: t,
			value: a[t]
		});
		for (let e of n) o.add(e);
	}
	return {
		merged: a,
		propsToDelete: o
	};
}, Oo = (e, t) => {
	let n = t.split("."), r = e;
	for (let e of n) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, ko = ({ flatSchema: e, key: t, props: n }) => {
	let r = Oo(n, t);
	if (e[t]?.type !== "text-content" || typeof r == "string") return r;
}, Ao = (e, t, n) => {
	let r = {};
	for (let i of t) r[i] = n ? ko({
		flatSchema: n,
		key: i,
		props: e
	}) : Oo(e, i);
	return r;
}, jo = (e, t) => Object.keys(_o(e, (e) => t[e])), Mo = ({ flatSchema: e, props: t, valuesDotNotation: n, schemaKeys: r, propsToDelete: i }) => {
	let a = { ...t };
	for (let t of r) {
		let r = n[t];
		if (e[t]?.type === "text-content" && r === void 0) continue;
		let i = t.split(".");
		if (i.length === 1) {
			a[t] = r;
			continue;
		}
		let o = a;
		for (let e = 0; e < i.length - 1; e++) {
			let t = i[e];
			typeof o[t] == "object" && o[t] !== null ? o[t] = { ...o[t] } : o[t] = {}, o = o[t];
		}
		o[i[i.length - 1]] = r;
	}
	return li(a, new Set([...i].filter((t) => e[t]?.type !== "text-content" || n[t] !== void 0))), a;
}, No = {}, Po = (0, b.createContext)(!1), Fo = ({ children: e }) => b.createElement(Po.Provider, { value: !0 }, e), J = (0, b.createContext)(!1), Io = ({ children: e }) => b.createElement(J.Provider, { value: !0 }, e), Lo = ({ Component: e, componentName: t, componentIdentity: n = null, schema: r, supportsEffects: i }) => {
	let a = rr(r), o = vo(a), s = Object.keys(o), c = (0, b.forwardRef)((r, c) => {
		let { _remotionInternalStack: l, ...u } = r, d = u, f = G(), p = (0, b.useContext)(T), m = (0, b.useContext)(Po), h = (0, b.useContext)(J);
		if (!f.isStudio && !h || f.isRendering || !p || m) return b.createElement(e, {
			...d,
			controls: null,
			ref: c
		});
		let { propStatuses: g } = (0, b.useContext)(Wr), _ = (0, b.useContext)(so), v = Nn(), y = ht(), x = y?.durationInFrames, S = y?.fps, C = y?.height, w = y?.width, E = (0, b.useMemo)(() => x === void 0 || S === void 0 || C === void 0 || w === void 0 ? null : {
			durationInFrames: x,
			fps: S,
			height: C,
			width: w
		}, [
			x,
			S,
			C,
			w
		]);
		if (d.controls) {
			let t = d.controls;
			return le(t) === null && ce(t, l), b.createElement(e, {
				...d,
				ref: c
			});
		}
		let [D] = (0, b.useState)(() => {
			if (!l) return String(Math.random());
			let e = No[l];
			if (e) return e;
			let t = String(Math.random());
			return No[l] = t, t;
		}), O = f.isReadOnlyStudio ? null : _.overrideIdToNodePathMappings[D] ?? null, k = qr(O), A = s.map((e) => ko({
			flatSchema: o,
			key: e,
			props: d
		})), j = (0, b.useMemo)(() => Ao(d, s, o), A), [M] = (0, b.useState)(() => on(j));
		(0, b.useLayoutEffect)(() => {
			M.setSnapshot(j);
		}, [j, M]);
		let N = (0, b.useMemo)(() => ({
			schema: a,
			currentRuntimeValueDotNotation: j,
			runtimeValues: M.store,
			videoConfigValues: E,
			overrideId: D,
			supportsEffects: i,
			componentIdentity: n,
			componentName: t
		}), [
			j,
			D,
			M.store,
			E
		]);
		ce(N, l);
		let { merged: P, propsToDelete: F } = (0, b.useMemo)(() => Do({
			schema: a,
			currentValue: j,
			overrideValues: k,
			propStatus: O === null ? void 0 : ho(g, O),
			frame: v
		}), [
			j,
			k,
			O,
			g,
			v
		]), I = jo(a, P), L = Mo({
			flatSchema: o,
			props: d,
			valuesDotNotation: P,
			schemaKeys: I,
			propsToDelete: F
		});
		return b.createElement(e, {
			...L,
			controls: N,
			ref: c
		});
	});
	return c.displayName = `withInteractivitySchema(${e.displayName || e.name || "Component"})`, c;
}, Ro = (0, b.createContext)(!0), zo = [], Bo = (0, b.forwardRef)(({ from: e = 0, trimBefore: t = 0, playbackRate: n = 1, loop: r = !1, freeze: i, durationInFrames: a, children: o, name: s, height: c, width: l, showInTimeline: u = !0, hidden: d = !1, controls: f, _remotionInternalEffects: p, _remotionInternalLoopDisplay: m, _remotionInternalStack: h, _remotionInternalDocumentationLink: g, _remotionInternalSingleChildComponent: _, _remotionInternalPremountDisplay: v, _remotionInternalPostmountDisplay: y, _remotionInternalIsMedia: x, outlineRef: C, cropLeft: w, cropRight: T, cropTop: E, cropBottom: D, ...O }, k) => {
	let { layout: A = "absolute-fill" } = O, [j] = (0, b.useState)(() => String(Math.random())), M = (0, b.useContext)(Xe), N = M?.playbackRate ?? 1, P = N * n, F = M ? M.cumulatedFrom + M.relativeFrom : 0;
	if (A !== "absolute-fill" && A !== "none") throw TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${A}`);
	let I = {
		cropLeft: w,
		cropRight: T,
		cropTop: E,
		cropBottom: D
	}, L = Object.values(I).some((e) => e !== void 0);
	if (A === "none" && L) throw TypeError("The cropLeft, cropRight, cropTop and cropBottom props of <Sequence /> are only supported with layout=\"absolute-fill\".");
	Cr(I);
	let { left: ee, right: te, top: ne, bottom: R } = xr(I);
	if (A === "none" && O.style !== void 0) throw TypeError("If layout=\"none\", you may not pass a style. Passed: " + JSON.stringify(O.style));
	let re = _r({ durationInFrames: a });
	if (typeof re != "number") throw TypeError(`You passed to durationInFrames an argument of type ${typeof re}, but it must be a number.`);
	if (re <= 0) throw TypeError(`durationInFrames must be positive, but got ${re}`);
	if (typeof e != "number") throw TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof e}, but it must be a number.`);
	if (!Number.isFinite(e)) throw TypeError(`The "from" prop of a sequence must be finite, but got ${e}.`);
	if (typeof t != "number") throw TypeError(`You passed to the "trimBefore" prop of your <Sequence> an argument of type ${typeof t}, but it must be a number.`);
	if (t < 0) throw TypeError(`The "trimBefore" prop of <Sequence /> must be greater than or equal to 0, but got ${t}.`);
	if (Number.isNaN(t)) throw TypeError("The \"trimBefore\" prop of <Sequence /> must be a real number, but it is NaN.");
	if (!Number.isFinite(t)) throw TypeError(`The "trimBefore" prop of <Sequence /> must be finite, but it is ${t}.`);
	if (typeof r != "boolean") throw TypeError(`The "loop" prop of <Sequence /> must be a boolean, but is of type ${typeof r}.`);
	if (r && !Number.isFinite(re)) throw Error("The \"loop\" prop of <Sequence /> requires a finite \"durationInFrames\" prop, because a <Sequence /> has no intrinsic duration.");
	if (i != null) {
		if (typeof i != "number") throw TypeError(`The "freeze" prop of <Sequence /> must be a number, but is of type ${typeof i}.`);
		if (Number.isNaN(i)) throw TypeError("The \"freeze\" prop of <Sequence /> must be a real number, but it is NaN.");
		if (!Number.isFinite(i)) throw TypeError(`The "freeze" prop of <Sequence /> must be finite, but it is ${i}.`);
	}
	let z = On(), ie = (0, b.useRef)({
		playbackRate: n,
		frame: z
	});
	if (typeof n != "number" || !Number.isFinite(n) || n <= 0) throw TypeError(`The "playbackRate" prop of <Sequence /> must be a positive finite number, but got ${n}.`);
	if (ie.current.frame !== z && ie.current.playbackRate !== n) throw Error("The \"playbackRate\" prop of <Sequence /> must be constant. Animating playbackRate is not supported.");
	ie.current = {
		playbackRate: n,
		frame: z
	};
	let ae = Pn(), oe = vr({
		durationInFrames: a,
		playbackRate: n,
		loop: r
	}), se = e - t / n, ce = M ? Math.min(M.durationInFrames - se, oe) : oe, ue = Math.max(0, Math.min(ae.durationInFrames - e, ce)), B = (z - F) * N, V = r && Number.isFinite(re) ? re / n : null, de = 0;
	if (V !== null) {
		let t = (B - e) / V, n = Math.round(t), r = Math.abs(t - n) <= 2 ** -52 * Math.max(1, Math.abs(t)) * 4, i = Math.ceil(ue / V) - 1;
		de = Math.max(0, Math.min(i, r ? n : Math.floor(t)));
	}
	let fe = V === null ? 0 : de * V, pe = e + fe, H = (pe - t / n) / N, U = (M?.absoluteFrom ?? 0) + H, W = V === null ? ue * n + t : Math.min(V, ue - fe) * n + t, he = (0, b.useContext)(Pr), ge = (0, b.useContext)(wr), _e = G(), ve = _e.isStudio || ge, ye = (0, b.useMemo)(() => ve && A === "none" && !C ? Er.createRef() : null, [
		ve,
		A,
		C
	]), be = (0, b.useRef)(null), xe = O.layout === "none" ? C ?? ye : C ?? be, Se = (0, b.useMemo)(() => M?.premounting || !!O._remotionInternalIsPremounting, [O._remotionInternalIsPremounting, M?.premounting]), Ce = (0, b.useMemo)(() => M?.postmounting || !!O._remotionInternalIsPostmounting, [O._remotionInternalIsPostmounting, M?.postmounting]), we = F + H, Te = M ? M.cumulatedFrom + M.relativeFrom : 0, Ee = M ? Te - M.cumulatedNegativeFrom / N : 0, De = (we - Math.max(0, Ee, F + pe / N)) * P, Oe = (0, b.useMemo)(() => ({
		playbackRate: P,
		absoluteFrom: U,
		cumulatedFrom: F,
		relativeFrom: H,
		cumulatedNegativeFrom: De,
		durationInFrames: W,
		parentFrom: M?.relativeFrom ?? 0,
		id: j,
		height: c ?? M?.height ?? null,
		width: l ?? M?.width ?? null,
		premounting: Se,
		postmounting: Ce,
		premountDisplay: v ?? null,
		postmountDisplay: y ?? null
	}), [
		F,
		U,
		H,
		P,
		W,
		M,
		j,
		c,
		l,
		Se,
		Ce,
		v,
		y,
		De
	]), ke = (0, b.useMemo)(() => V === null ? null : {
		iteration: de,
		durationInFrames: re
	}, [
		re,
		de,
		V
	]), Ae = (0, b.useMemo)(() => m || V === null ? m : {
		numberOfTimes: ue / V,
		startOffset: 0,
		durationInFrames: V
	}, [
		ue,
		m,
		V
	]), je = (0, b.useMemo)(() => s ?? "", [s]), Me = g ?? "https://www.remotion.dev/docs/sequence", Ne = (0, b.useContext)(ei), Pe = (0, b.useRef)(null);
	Pe.current = f ? le(f) ?? h ?? null : h ?? null;
	let Fe = typeof i == "number" ? i : null, Ie = t === 0 ? null : t, Le = M?.cumulatedNegativeFrom ?? 0, Re = x && x.type !== "image" ? x.data.startMediaFrom + Le - De : null, ze = x && x.type !== "image" ? x.data.startMediaFrom + Le : null, Be = x && x.type !== "image" && ze !== null ? Fe === null ? null : ze + (Ae ? Fe % Ae.durationInFrames : Fe) * x.data.playbackRate : null, Ve = f?.schema, Ue = f?.runtimeValues, We = f?.overrideId, Ge = f?.supportsEffects, Ke = f?.componentIdentity, qe = f?.componentName, Je = f?.videoConfigValues, Ye = In(), Ze = (Ke === "dev.remotion.remotion.Series" || Ke === "dev.remotion.transitions.TransitionSeries") && !r && Fe === null && !Ye && !d, Qe = Ze && a === void 0, $e = Ke === "dev.remotion.remotion.Series.Sequence" || Ke === "dev.remotion.transitions.TransitionSeries.Sequence" || Ke === "dev.remotion.transitions.TransitionSeries.Transition" || Ke === "dev.remotion.transitions.TransitionSeries.Overlay", et = (0, b.useContext)(Ro), tt = (0, b.useMemo)(() => p?.runtimeValues ?? null, [p]), nt = (0, b.useMemo)(() => Ve === void 0 || Ue === void 0 || We === void 0 || Ge === void 0 || Ke === void 0 || qe === void 0 || Je === void 0 ? null : {
		schema: Ve,
		runtimeValues: Ue,
		overrideId: We,
		supportsEffects: Ge,
		componentIdentity: Ke,
		componentName: qe,
		videoConfigValues: Je
	}, [
		Ke,
		qe,
		Je,
		We,
		Ue,
		Ve,
		Ge
	]), rt = (0, b.useCallback)(() => x ? x.type === "image" ? {
		sequencePlaybackRate: n,
		type: "image",
		controls: nt,
		effects: p ?? zo,
		effectRuntimeValues: tt,
		displayName: je,
		documentationLink: Me,
		duration: ue,
		from: e,
		trimBefore: Ie,
		id: j,
		loopDisplay: Ae,
		parent: M?.id ?? null,
		postmountDisplay: y ?? null,
		premountDisplay: v ?? null,
		showInTimeline: u,
		timelineOrder: null,
		src: x.src,
		getStack: () => Pe.current,
		refForOutline: xe ?? null,
		isInsideSeries: Ne,
		frozenFrame: Fe,
		singleChildComponent: _ ?? null
	} : {
		type: x.type,
		sequencePlaybackRate: n,
		controls: nt,
		effects: p ?? zo,
		effectRuntimeValues: tt,
		displayName: je,
		documentationLink: Me,
		doesVolumeChange: x.data.doesVolumeChange,
		duration: ue,
		from: e,
		trimBefore: Ie,
		id: j,
		loopDisplay: Ae,
		parent: M?.id ?? null,
		playbackRate: x.data.playbackRate,
		postmountDisplay: y ?? null,
		premountDisplay: v ?? null,
		showInTimeline: u,
		timelineOrder: null,
		src: x.data.src,
		getStack: () => Pe.current,
		startMediaFrom: Re ?? x.data.startMediaFrom,
		mediaFrameAtSequenceZero: ze,
		volume: x.data.volumes,
		muted: x.data.muted,
		refForOutline: xe ?? null,
		isInsideSeries: Ne,
		frozenFrame: Fe,
		frozenMediaFrame: Be,
		singleChildComponent: _ ?? null
	} : {
		from: e,
		sequencePlaybackRate: n,
		trimBefore: Ie,
		duration: ue,
		...Qe ? { autoDuration: !0 } : {},
		...Ze ? { canInferDuration: !0 } : {},
		...$e ? { unclippedDuration: oe } : {},
		id: j,
		displayName: je,
		documentationLink: Me,
		parent: M?.id ?? null,
		type: "sequence",
		showInTimeline: u,
		timelineOrder: null,
		loopDisplay: Ae,
		getStack: () => Pe.current,
		premountDisplay: v ?? null,
		postmountDisplay: y ?? null,
		controls: nt,
		effects: p ?? zo,
		effectRuntimeValues: tt,
		refForOutline: xe ?? null,
		isInsideSeries: Ne,
		frozenFrame: Fe,
		singleChildComponent: _ ?? null
	}, [
		j,
		je,
		n,
		M?.id,
		ue,
		Qe,
		Ze,
		$e,
		oe,
		e,
		Ie,
		u,
		Ae,
		v,
		y,
		nt,
		p,
		tt,
		x,
		Me,
		xe,
		Ne,
		Fe,
		Re,
		ze,
		Be,
		_
	]);
	ci({
		getSequence: _e.isStudio || he ? rt : null,
		id: j
	});
	let it = e + oe, at = Rn({
		absoluteFrame: z,
		cumulatedFrom: F,
		from: e,
		parentPlaybackRate: N,
		durationInFrames: oe
	}), ot = !et || B - e < -at || B - it >= -at ? null : o, st = ot === null || i == null ? ot : /* @__PURE__ */ (0, S.jsx)(Ln, {
		frame: i,
		children: ot
	}), ct = st === null || ke === null ? st : /* @__PURE__ */ (0, S.jsx)(gr.Provider, {
		value: ke,
		children: st
	}), lt = O.layout === "none" ? void 0 : O.style, ut = Sr({
		left: ee,
		right: te,
		top: ne,
		bottom: R,
		style: lt
	}), dt = (0, b.useCallback)((e) => {
		be.current = e, typeof k == "function" ? k(e) : k && (k.current = e);
	}, [k]), ft = (0, b.useMemo)(() => ({
		flexDirection: void 0,
		...l ? { width: l } : {},
		...c ? { height: c } : {},
		...lt ?? {},
		...ut ? { clipPath: ut } : {}
	}), [
		ut,
		c,
		lt,
		l
	]);
	if (k !== null && A === "none") throw TypeError("It is not supported to pass both a `ref` and `layout=\"none\"` to <Sequence />.");
	if (d) return ve ? /* @__PURE__ */ (0, S.jsx)(me, {
		sequenceId: j,
		outlineChildrenRef: ye,
		children: null
	}) : null;
	let pt = _e.isStudio && Ze, mt = ct === null ? pt ? o : null : O.layout === "none" ? ct : /* @__PURE__ */ (0, S.jsx)(He, {
		ref: dt,
		style: ft,
		className: O.className,
		children: ct
	}), ht = /* @__PURE__ */ (0, S.jsx)(Xe.Provider, {
		value: Oe,
		children: pt ? /* @__PURE__ */ (0, S.jsx)(Ro.Provider, {
			value: ot !== null,
			children: mt
		}) : mt
	});
	return ve ? /* @__PURE__ */ (0, S.jsx)(me, {
		sequenceId: j,
		outlineChildrenRef: ye,
		children: ht
	}) : ht;
}), Vo = (0, b.forwardRef)((e, t) => {
	if (e.layout === "none") throw Error("`<Sequence>` with `premountFor` and `postmountFor` props does not support layout=\"none\"");
	let { style: n, from: r = 0, durationInFrames: i, premountFor: a = 0, postmountFor: o = 0, styleWhilePremounted: s, styleWhilePostmounted: c, ...l } = e, { freezeFrame: u, isPremountingOrPostmounting: d, postmountingActive: f, premountingActive: p, premountingStyle: m } = si({
		from: r,
		durationInFrames: vr({
			durationInFrames: i,
			playbackRate: l.playbackRate,
			loop: l.loop
		}),
		premountFor: a,
		postmountFor: o,
		style: n ?? null,
		styleWhilePremounted: s ?? null,
		styleWhilePostmounted: c ?? null,
		hideWhilePremounted: "opacity"
	});
	return /* @__PURE__ */ (0, S.jsx)(Ln, {
		frame: u,
		active: d,
		_remotionInternalIsPremounting: p,
		children: /* @__PURE__ */ (0, S.jsx)(Ho, {
			ref: t,
			from: r,
			durationInFrames: i,
			style: m ?? void 0,
			_remotionInternalPremountDisplay: a,
			_remotionInternalPostmountDisplay: o,
			_remotionInternalIsPremounting: p,
			_remotionInternalIsPostmounting: f,
			...l
		})
	});
}), Ho = (0, b.forwardRef)((e, t) => {
	let n = G(), { fps: r } = Pn();
	if (e.layout !== "none" && !n.isRendering) {
		let n = e.premountFor;
		if (n || e.postmountFor) return /* @__PURE__ */ (0, S.jsx)(Vo, {
			ref: t,
			...e,
			premountFor: n
		});
	}
	return /* @__PURE__ */ (0, S.jsx)(Bo, {
		...e,
		ref: t
	});
}), Uo = Ho, Wo = Lo({
	Component: Ho,
	componentName: "<Sequence>",
	componentIdentity: "dev.remotion.remotion.Sequence",
	schema: pr,
	supportsEffects: !1
});
Lo({
	Component: Ho,
	componentName: "<Sequence>",
	componentIdentity: null,
	schema: mr,
	supportsEffects: !1
});
var Go = {
	...dr,
	...Yn,
	...Bn,
	...Gn,
	...Un,
	...Wn,
	...Hn,
	...Jn
}, Ko = (e, t) => {
	typeof e == "function" ? e(t) : e && (e.current = t);
}, qo = ({ ref: e, from: t, premountFor: n, postmountFor: r, styleWhilePremounted: i, styleWhilePostmounted: a, trimBefore: o, playbackRate: s, loop: c, freeze: l, durationInFrames: u, hidden: d, name: f, showInTimeline: p, stack: m, controls: h, children: g, ..._ }) => {
	let { effectivePremountFor: v, effectivePostmountFor: y, freezeFrame: b, isPremountingOrPostmounting: x, premountingActive: C, postmountingActive: w, premountingStyle: T } = si({
		from: t ?? 0,
		durationInFrames: vr({
			durationInFrames: u,
			playbackRate: s,
			loop: c
		}),
		premountFor: n ?? null,
		postmountFor: r ?? null,
		style: _.style ?? null,
		styleWhilePremounted: i ?? null,
		styleWhilePostmounted: a ?? null,
		hideWhilePremounted: "opacity"
	});
	return /* @__PURE__ */ (0, S.jsx)(Ln, {
		frame: b,
		active: x,
		_remotionInternalIsPremounting: C,
		children: /* @__PURE__ */ (0, S.jsx)(Wo, {
			layout: "none",
			from: t ?? 0,
			trimBefore: o,
			playbackRate: s,
			loop: c,
			freeze: l,
			durationInFrames: u,
			hidden: d,
			name: f ?? "<AbsoluteFill>",
			showInTimeline: p ?? !0,
			controls: h,
			_remotionInternalStack: m,
			_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/absolute-fill",
			_remotionInternalPremountDisplay: v || null,
			_remotionInternalPostmountDisplay: y || null,
			_remotionInternalIsPremounting: C,
			_remotionInternalIsPostmounting: w,
			children: /* @__PURE__ */ (0, S.jsx)(He, {
				ref: e,
				..._,
				style: T ?? void 0,
				children: g
			})
		})
	});
};
z(Lo({
	Component: ({ ref: e, from: t, premountFor: n, postmountFor: r, styleWhilePremounted: i, styleWhilePostmounted: a, trimBefore: o, playbackRate: s, loop: c, freeze: l, durationInFrames: u, hidden: d, name: f, showInTimeline: p, stack: m, controls: h, children: g, ..._ }) => {
		let v = ht(), y = (0, b.useCallback)((t) => {
			Ko(e, t);
		}, [e]);
		return v === null ? d ? null : /* @__PURE__ */ (0, S.jsx)(He, {
			ref: y,
			..._,
			children: g
		}) : /* @__PURE__ */ (0, S.jsx)(qo, {
			..._,
			ref: y,
			from: t,
			premountFor: n,
			postmountFor: r,
			styleWhilePremounted: i,
			styleWhilePostmounted: a,
			trimBefore: o,
			playbackRate: s,
			loop: c,
			freeze: l,
			durationInFrames: u,
			hidden: d,
			name: f,
			showInTimeline: p,
			stack: m,
			controls: h,
			children: g
		});
	},
	componentName: "<AbsoluteFill>",
	componentIdentity: "dev.remotion.remotion.AbsoluteFill",
	schema: Go,
	supportsEffects: !1
}));
var Jo = ({ cropLeft: e, cropRight: t, cropTop: n, cropBottom: r, style: i, componentName: a }) => (Cr({
	cropLeft: e,
	cropRight: t,
	cropTop: n,
	cropBottom: r
}, a), (0, b.useMemo)(() => {
	let a = Sr({
		...xr({
			cropLeft: e,
			cropRight: t,
			cropTop: n,
			cropBottom: r
		}),
		style: i
	});
	return a === null ? i : {
		...i,
		clipPath: a
	};
}, [
	r,
	e,
	t,
	n,
	i
])), Yo = (e, t, n) => {
	switch (e) {
		case "fill": return [
			0,
			0,
			t.width,
			t.height,
			0,
			0,
			n.width,
			n.height
		];
		case "contain": {
			let e = Math.min(n.width / t.width, n.height / t.height), r = (n.width - t.width * e) / 2, i = (n.height - t.height * e) / 2;
			return [
				0,
				0,
				t.width,
				t.height,
				r,
				i,
				t.width * e,
				t.height * e
			];
		}
		case "cover": {
			let e = Math.max(n.width / t.width, n.height / t.height), r = (n.width - t.width * e) / 2, i = (n.height - t.height * e) / 2;
			return [
				0,
				0,
				t.width,
				t.height,
				r,
				i,
				t.width * e,
				t.height * e
			];
		}
		default: throw Error("Unknown fit: " + e);
	}
}, Xo = "https://remotion.dev/docs/troubleshooting/webgl2-context", Zo = (e, t) => `Failed to acquire ${e} context for ${t}. Pass --gl=angle when using the CLI, set chromiumOptions: { gl: "angle" } when using SSR APIs, or set "OpenGL render backend" to "angle" in the Advanced section when rendering in the Studio. See ${Xo}`, Qo = (e) => Error(Zo("WebGL", e)), $o = (e) => Error(Zo("WebGL2", e)), es = class {
	width;
	height;
	pairs = /* @__PURE__ */ new Map();
	allocated = [];
	lostContexts = /* @__PURE__ */ new Set();
	onContextLost;
	disposed = !1;
	constructor(e, t, n) {
		this.width = e, this.height = t, this.onContextLost = n;
	}
	getPair(e) {
		if (this.disposed) throw Error("Effect chain state was used after it had been cleaned up");
		let t = this.pairs.get(e);
		if (t) return t;
		let n = [this.allocateCanvas(e), this.allocateCanvas(e)];
		return this.pairs.set(e, n), n;
	}
	assertContextNotLost(e) {
		if (this.lostContexts.has(e)) throw Error("WebGL context was lost during canvas effect rendering. This typically happens in headless or memory-constrained environments (e.g. Remotion Lambda). Try reducing concurrency or increasing the Lambda function memory.");
	}
	dispose() {
		if (!this.disposed) {
			this.disposed = !0;
			for (let { canvas: e, gl: t } of this.allocated) t?.getExtension("WEBGL_lose_context")?.loseContext(), e.width = 0, e.height = 0;
			this.allocated.length = 0, this.pairs.clear(), this.lostContexts.clear();
		}
	}
	allocateCanvas(e) {
		let t = document.createElement("canvas");
		switch (t.width = this.width, t.height = this.height, e) {
			case "2d":
				if (!t.getContext("2d", { colorSpace: "srgb" })) throw Error("Failed to acquire 2D context for canvas effect");
				return this.allocated.push({
					canvas: t,
					gl: null
				}), t;
			case "webgl2": {
				let e = t.getContext("webgl2", {
					premultipliedAlpha: !0,
					alpha: !0,
					preserveDrawingBuffer: !0
				});
				if (!e) throw $o("canvas effect");
				return t.addEventListener("webglcontextlost", (e) => {
					this.disposed || (e.preventDefault(), this.lostContexts.add(t), this.onContextLost(t));
				}), t.addEventListener("webglcontextrestored", () => {
					this.disposed || (e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), this.lostContexts.delete(t));
				}), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), this.allocated.push({
					canvas: t,
					gl: e
				}), t;
			}
			case "webgpu":
				if (typeof navigator > "u" || !("gpu" in navigator)) throw Error("WebGPU is not available in this environment for canvas effect");
				return this.allocated.push({
					canvas: t,
					gl: null
				}), t;
			default: throw Error(`Unknown effect backend: ${e}`);
		}
	}
}, ts = (e) => {
	let t = [], n = [], r = null;
	for (let i of e) {
		let { backend: e } = i.definition;
		r === null || e === r ? (n.push(i), r = e) : (t.push({
			backend: r,
			effects: n
		}), n = [i], r = e);
	}
	return r !== null && n.length > 0 && t.push({
		backend: r,
		effects: n
	}), t;
}, ns = null, rs = () => ns || (ns = (async () => {
	if (typeof navigator > "u" || !("gpu" in navigator)) throw Error("WebGPU is not available in this environment");
	let { gpu: e } = navigator, t = await e.requestAdapter();
	if (!t) throw Error("No WebGPU adapter available");
	return t.requestDevice();
})(), ns), is = (e, t) => {
	let n = {
		pool: new es(e, t, (e) => {
			let t = n.cleanupRegistry.filter((t) => t.target === e);
			n.cleanupRegistry = n.cleanupRegistry.filter((t) => t.target !== e);
			for (let r of t) n.setupCache.get(r.definition)?.delete(e);
			for (let e of t) e.definition.cleanup(e.state);
		}),
		setupCache: /* @__PURE__ */ new WeakMap(),
		cleanupRegistry: [],
		currentRunId: 0
	};
	return n;
}, as = (e) => {
	e.currentRunId++;
	try {
		for (let t of e.cleanupRegistry) t.definition.cleanup(t.state);
	} finally {
		e.cleanupRegistry.length = 0, e.pool.dispose();
	}
}, os = (e, t, n) => {
	let r = t, i = e.setupCache.get(r);
	if (i || (i = /* @__PURE__ */ new WeakMap(), e.setupCache.set(r, i)), i.has(n)) return i.get(n);
	let a = t.setup(n);
	return i.set(n, a), e.cleanupRegistry.push({
		definition: r,
		state: a,
		target: n
	}), a;
}, ss = async ({ state: e, source: t, effects: n, output: r, width: i, height: a }) => {
	let o = ++e.currentRunId, s = () => e.currentRunId !== o, c = ts(n.filter((e) => !e.params.disabled)), l = t, u = null;
	if (c.length === 0) {
		if (t === r) return !0;
		let e = r.getContext("2d");
		if (!e) throw Error("Failed to acquire 2D context for output canvas");
		return e.clearRect(0, 0, i, a), e.drawImage(l, 0, 0, i, a), !0;
	}
	let d = !1;
	for (let e of c) if (e.backend === "webgpu") {
		d = !0;
		break;
	}
	let f = d ? await rs() : null;
	if (s()) return !1;
	let p = !0;
	for (let t = 0; t < c.length; t++) {
		let n = c[t], [r, o] = e.pool.getPair(n.backend), d = r;
		for (let t of n.effects) {
			let s = t.definition;
			n.backend === "webgl2" && e.pool.assertContextNotLost(d);
			let c = os(e, s, d);
			s.apply({
				source: l,
				target: d,
				state: c,
				params: t.params,
				width: i,
				height: a,
				gpuDevice: f,
				flipSourceY: n.backend === "webgl2" && p
			}), n.backend === "webgl2" && (p = !0), l = d, d = d === r ? o : r;
		}
		u = l ?? u;
		let m = c[t + 1];
		if (m && m.backend !== n.backend && u) {
			if (n.backend === "2d" && m.backend === "webgl2") l = u, p = !0;
			else {
				let e = await createImageBitmap(u);
				if (s()) return e.close(), !1;
				l = e, m.backend === "webgl2" && (p = !1);
			}
		}
	}
	if (!u) return !0;
	let m = r.getContext("2d");
	if (!m) throw Error("Failed to acquire 2D context for output canvas");
	return m.clearRect(0, 0, i, a), m.drawImage(u, 0, 0, i, a), !0;
}, cs = () => {
	let e = (0, b.useRef)(null), t = (0, b.useRef)(null), n = (0, b.useRef)(!1);
	return (0, b.useEffect)(() => (n.current = !1, () => {
		n.current = !0, e.current && (as(e.current), e.current = null, t.current = null);
	}), []), (0, b.useMemo)(() => ({ get: (r, i) => n.current ? null : ((!t.current || t.current.width !== r || t.current.height !== i) && (e.current && as(e.current), e.current = is(r, i), t.current = {
		width: r,
		height: i
	}), e.current) }), []);
}, ls = b.forwardRef(({ width: e, height: t, fit: n, className: r, style: i, effects: a, ...o }, s) => {
	let c = (0, b.useRef)(null), l = cs(), u = (0, b.useMemo)(() => typeof document > "u" ? null : document.createElement("canvas"), []), d = (0, b.useCallback)((r) => {
		let i = c.current, o = e ?? r.displayWidth, s = t ?? r.displayHeight;
		if (!i) throw Error("Canvas ref is not set");
		if (!u) throw Error("Source canvas is not available");
		u.width = o, u.height = s;
		let d = u.getContext("2d");
		if (!d) throw Error("Could not get 2d context for source canvas");
		return d.drawImage(r, ...Yo(n, {
			height: r.displayHeight,
			width: r.displayWidth
		}, {
			width: o,
			height: s
		})), i.width = o, i.height = s, ss({
			state: l.get(o, s),
			source: u,
			effects: a,
			output: i,
			width: o,
			height: s
		});
	}, [
		l,
		a,
		n,
		t,
		u,
		e
	]);
	return (0, b.useImperativeHandle)(s, () => ({
		draw: d,
		getCanvas: () => {
			if (!c.current) throw Error("Canvas ref is not set");
			return c.current;
		},
		clear: () => {
			let e = c.current?.getContext("2d");
			if (!e) throw Error("Could not get 2d context");
			e.clearRect(0, 0, c.current.width, c.current.height);
		}
	}), [d]), /* @__PURE__ */ (0, S.jsx)("canvas", {
		ref: c,
		className: r,
		style: i,
		...o
	});
}), us = async ({ resolvedSrc: e, signal: t, requestInit: n, contentType: r }) => {
	if (typeof ImageDecoder > "u") throw Error("Your browser does not support the WebCodecs ImageDecoder API.");
	let i = await fetch(e, {
		...n,
		signal: t
	}), { body: a } = i;
	if (!a) throw Error("Got no body");
	let o = new ImageDecoder({
		data: a,
		type: r ?? i.headers.get("Content-Type") ?? "image/gif"
	});
	await Promise.all([o.completed, o.tracks.ready]);
	let { selectedTrack: s } = o.tracks;
	if (!s) throw o.close(), Error("No selected track");
	return {
		decoder: o,
		selectedTrack: s
	};
}, ds = 5, fs = ({ loopBehavior: e, durationFound: t, timeInSec: n }) => e === "loop" ? t ? n % t : n : Math.min(n, t || Infinity), ps = async ({ resolvedSrc: e, signal: t, requestInit: n, currentTime: r, initialLoopBehavior: i }) => {
	let { decoder: a, selectedTrack: o } = await us({
		resolvedSrc: e,
		signal: t,
		requestInit: n,
		contentType: null
	}), s = [], c = null, l = async (e) => {
		let t = s.find((t) => t.frameIndex === e);
		if (t && t.frame) return t;
		let n = await a.decode({
			frameIndex: e,
			completeFramesOnly: !0
		});
		return t ? t.frame = n.image : s.push({
			frame: n.image,
			frameIndex: e,
			timeInSeconds: n.image.timestamp / 1e6
		}), {
			frame: n.image,
			frameIndex: e,
			timeInSeconds: n.image.timestamp / 1e6
		};
	}, u = (e) => {
		let t = s.filter((e) => e.frame).sort((t, n) => Math.abs(t.timeInSeconds - e) - Math.abs(n.timeInSeconds - e));
		for (let e = 0; e < t.length; e++) {
			if (e < ds) continue;
			let n = t[e];
			n.frame = null;
		}
	}, d = async ({ timeInSec: e, loopBehavior: t }) => {
		let n = fs({
			durationFound: c,
			loopBehavior: t,
			timeInSec: e
		}), r = s.filter((e) => e.timeInSeconds <= n).map((e) => e.frameIndex).reduce((e, t) => Math.max(e, t), 0), i = r;
		for (;;) {
			let e = await l(i);
			if (i++, !e.frame) throw Error("No frame found");
			if (!e.frame.duration || (i === o.frameCount && c === null && (c = (e.frame.timestamp + e.frame.duration) / 1e6), e.timeInSeconds > n || i === o.frameCount)) break;
		}
		o.frameCount - r < 3 && t === "loop" && await l(0), u(n);
	};
	return await d({
		timeInSec: r,
		loopBehavior: i
	}), await d({
		timeInSec: r,
		loopBehavior: i
	}), {
		close: () => {
			for (let e of s) e.frame?.close(), e.frame = null;
			a.close();
		},
		getFrame: async (e, t) => {
			if (c !== null && e > c && t === "clear-after-finish") return null;
			let n = fs({
				loopBehavior: t,
				durationFound: c,
				timeInSec: e
			});
			await d({
				timeInSec: n,
				loopBehavior: t
			});
			let r = s.filter((e) => e.frame).reduce((e, t) => Math.abs(e.timeInSeconds - n) < Math.abs(t.timeInSeconds - n) ? e : t);
			if (!r.frame) throw Error("No frame found");
			return r;
		},
		frameCount: o.frameCount
	};
}, ms = ({ frame: e, playbackRate: t, fps: n }) => e * t / n, hs = async ({ resolvedSrc: e, signal: t, requestInit: n, contentType: r }) => {
	let { decoder: i, selectedTrack: a } = await us({
		resolvedSrc: e,
		signal: t,
		requestInit: n,
		contentType: r
	});
	try {
		let { image: e } = await i.decode({
			frameIndex: a.frameCount - 1,
			completeFramesOnly: !0
		});
		try {
			if (e.duration === null) throw Error("Could not determine animated image duration");
			return (e.timestamp + e.duration) / 1e6;
		} finally {
			e.close();
		}
	} finally {
		i.close();
	}
}, gs = (e) => {
	if (!e) return null;
	let t = { ...e };
	delete t.signal;
	let { headers: n, ...r } = t;
	return JSON.stringify({
		...r,
		headers: n ? Array.from(new Headers(n).entries()) : null
	});
}, _s = (e) => typeof window > "u" ? e : new URL(e, document.baseURI).href, vs = {
	src: {
		type: "asset",
		assetType: "image",
		default: void 0,
		description: "Source",
		keyframable: !1
	},
	...dr,
	loop: cr,
	...Zn,
	...Yn,
	...Bn,
	...Gn,
	...Un,
	...Wn
}, ys = (e) => {
	let t = {}, n = t;
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (t.startsWith("data-") || t.startsWith("aria-")) && (n[t] = e[t]);
	return t;
}, bs = (0, b.forwardRef)(({ src: e, width: t, height: n, onError: r, loopBehavior: i = "loop", playbackRate: a = 1, fit: o = "fill", requestInit: s, effects: c, controls: l, ...u }, d) => {
	let f = _s(e), [p, m] = (0, b.useState)(null), { delayRender: h, continueRender: g } = Kt(), [_] = (0, b.useState)(() => h(`Rendering <AnimatedImage/> with src="${f}"`)), v = Nn(), { fps: y } = Pn(), x = ms({
		frame: v,
		playbackRate: a,
		fps: y
	}), C = (0, b.useRef)(x);
	C.current = x;
	let w = gs(s), T = (0, b.useRef)(s);
	T.current = s;
	let E = (0, b.useRef)(null), D = go({
		effects: c,
		overrideId: l?.overrideId ?? null
	});
	(0, b.useImperativeHandle)(d, () => {
		let e = E.current?.getCanvas();
		if (!e) throw Error("Canvas ref is not set");
		return e;
	}, []);
	let [O] = (0, b.useState)(() => i);
	return (0, b.useEffect)(() => {
		let e = new AbortController(), t = !1, n = !1, i = () => {
			n || (n = !0, g(_));
		};
		return ps({
			resolvedSrc: f,
			signal: e.signal,
			requestInit: T.current,
			currentTime: C.current,
			initialLoopBehavior: O
		}).then((e) => {
			if (t) {
				e.close();
				return;
			}
			m(e), i();
		}).catch((e) => {
			if (!t) {
				if (e.name === "AbortError") {
					i();
					return;
				}
				r ? (r?.(e), i()) : At(e);
			}
		}), () => {
			t = !0, e.abort(), i();
		};
	}, [
		f,
		_,
		r,
		w,
		O,
		g
	]), (0, b.useEffect)(() => () => {
		p?.close();
	}, [p]), (0, b.useLayoutEffect)(() => {
		if (!p) return;
		let t = h(`Rendering frame at ${x} of <AnimatedImage src="${e}"/>`), n = !1;
		return p.getFrame(x, i).then(async (e) => {
			if (!n) {
				if (e === null) {
					E.current?.clear(), g(t);
					return;
				}
				await E.current?.draw(e.frame) && !n && g(t);
			}
		}).catch((e) => {
			n || (r ? (r(e), g(t)) : At(e));
		}), () => {
			n = !0, g(t);
		};
	}, [
		x,
		p,
		i,
		r,
		e,
		g,
		h,
		D,
		o,
		t,
		n
	]), /* @__PURE__ */ (0, S.jsx)(ls, {
		ref: E,
		width: t,
		height: n,
		fit: o,
		effects: D,
		...u
	});
});
bs.displayName = "AnimatedImageContent";
var xs = ({ src: e, width: t, height: n, onError: r, fit: i, playbackRate: a, loopBehavior: o, id: s, className: c, style: l, durationInFrames: u, from: d, premountFor: f, postmountFor: p, styleWhilePremounted: m, styleWhilePostmounted: h, cropLeft: g, cropRight: _, cropTop: v, cropBottom: y, requestInit: x, effects: C = [], controls: w, ref: T, ...E }) => {
	let D = (0, b.useRef)(null), O = po(C);
	(0, b.useImperativeHandle)(T, () => D.current, []);
	let { effectivePostmountFor: k, effectivePremountFor: A, freezeFrame: j, isPremountingOrPostmounting: M, postmountingActive: N, premountingActive: P, premountingStyle: F } = si({
		from: d ?? 0,
		durationInFrames: vr({
			durationInFrames: u,
			playbackRate: a,
			loop: E.loop
		}),
		premountFor: f ?? null,
		postmountFor: p ?? null,
		style: l ?? null,
		styleWhilePremounted: m ?? null,
		styleWhilePostmounted: h ?? null,
		hideWhilePremounted: "display-none"
	}), I = Jo({
		cropLeft: g,
		cropRight: _,
		cropTop: v,
		cropBottom: y,
		style: F,
		componentName: "<AnimatedImage />"
	}), L = ys(E), ee = {
		src: e,
		width: t,
		height: n,
		onError: r,
		fit: i,
		loopBehavior: o,
		id: s,
		className: c,
		style: I ?? void 0,
		requestInit: x,
		...L
	};
	return /* @__PURE__ */ (0, S.jsx)(Ln, {
		frame: j,
		active: M,
		_remotionInternalIsPremounting: P,
		children: /* @__PURE__ */ (0, S.jsx)(Wo, {
			layout: "none",
			from: d ?? 0,
			playbackRate: a,
			durationInFrames: u,
			name: "<AnimatedImage>",
			_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/animatedimage",
			controls: w,
			_remotionInternalEffects: O,
			_remotionInternalPremountDisplay: A || null,
			_remotionInternalPostmountDisplay: k || null,
			_remotionInternalIsPremounting: P,
			_remotionInternalIsPostmounting: N,
			...E,
			children: /* @__PURE__ */ (0, S.jsx)(bs, {
				...ee,
				ref: D,
				effects: C,
				controls: w
			})
		})
	});
}, Ss = (e) => {
	let { fps: t } = Pn(), { delayRender: n, continueRender: r } = Kt(), { src: i, requestInit: a, trimBefore: o } = e, s = (0, b.useRef)(a);
	s.current = a;
	let c = (0, b.useRef)(e.onError);
	c.current = e.onError;
	let [l] = (0, b.useState)(() => n(`Finding duration of <AnimatedImage src="${i}" />`)), [u, d] = (0, b.useState)(null), [f, p] = (0, b.useState)(!1);
	return (0, b.useEffect)(() => {
		let e = new AbortController(), n = !1;
		return hs({
			resolvedSrc: _s(i),
			signal: e.signal,
			requestInit: s.current,
			contentType: null
		}).then((e) => {
			n || d(Math.ceil(e * t) - (o ?? 0));
		}).catch((e) => {
			n || (c.current ? (c.current(e), p(!0)) : At(e));
		}), () => {
			n = !0, e.abort(), r(l);
		};
	}, [
		r,
		t,
		l,
		i,
		o
	]), (0, b.useEffect)(() => {
		(u !== null || f) && r(l);
	}, [
		r,
		u,
		f,
		l
	]), u === null || f ? null : /* @__PURE__ */ (0, S.jsx)(xs, {
		...e,
		durationInFrames: u
	});
}, Cs = Lo({
	Component: (e) => {
		if (e.loop && e.durationInFrames === void 0) {
			let t = _s(e.src), n = gs(e.requestInit);
			return /* @__PURE__ */ (0, b.createElement)(Ss, {
				...e,
				key: `${t}-${n}-${e.trimBefore ?? 0}`
			});
		}
		return /* @__PURE__ */ (0, S.jsx)(xs, { ...e });
	},
	componentName: "<AnimatedImage>",
	componentIdentity: "dev.remotion.remotion.AnimatedImage",
	schema: vs,
	supportsEffects: !0
});
Cs.displayName = "AnimatedImage", z(Cs);
var ws = {
	type: "boolean",
	default: !1,
	description: "Disabled"
}, Ts = (e) => {
	let { calculateKey: t, validateParams: n } = e, r = {
		...e,
		documentationLink: e.documentationLink ?? null,
		calculateKey: (e) => {
			let n = e.disabled ?? !1;
			return `${t(e)}-disabled-${n}`;
		},
		schema: {
			disabled: ws,
			...e.schema
		}
	};
	return (e = {}) => (n(e), {
		definition: r,
		params: e,
		effectKey: r.calculateKey(e),
		memoized: !1
	});
}, Es = (e) => {
	if (typeof e != "string") throw TypeError(`The "filename" must be a string, but you passed a value of type ${typeof e}`);
	if (e.trim() === "") throw Error("The `filename` must not be empty");
	if (!e.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g)) throw Error("The `filename` must match \"/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g\". Use forward slashes only, even on Windows.");
}, Ds = (e) => {
	if (typeof e != "string" && !(e instanceof Uint8Array)) throw TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof e}`);
	if (typeof e == "string" && e.trim() === "") throw Error("The `content` must not be empty");
}, Os = (e) => {
	e.type === "artifact" && (Es(e.filename), e.contentType !== "thumbnail" && Ds(e.content));
}, ks = (0, b.createContext)({
	registerRenderAsset: () => {},
	unregisterRenderAsset: () => {},
	renderAssets: []
}), As = ({ children: e, collectAssets: t }) => {
	let [n, r] = (0, b.useState)([]), i = (0, b.useRef)([]), a = (0, b.useCallback)((e) => {
		Os(e), i.current = [...i.current, e], r(i.current);
	}, []);
	t && (0, b.useImperativeHandle)(t, () => ({ collectAssets: () => {
		let e = i.current;
		return i.current = [], r([]), e;
	} }), []);
	let o = (0, b.useCallback)((e) => {
		i.current = i.current.filter((t) => t.id !== e), r(i.current);
	}, []);
	(0, b.useLayoutEffect)(() => {
		typeof window < "u" && (window.remotion_collectAssets = () => {
			let e = i.current;
			return i.current = [], r([]), e;
		});
	}, []);
	let s = (0, b.useMemo)(() => ({
		registerRenderAsset: a,
		unregisterRenderAsset: o,
		renderAssets: n
	}), [
		n,
		a,
		o
	]);
	return /* @__PURE__ */ (0, S.jsx)(ks.Provider, {
		value: s,
		children: e
	});
}, js = (e) => typeof window > "u" || e.startsWith("http://") || e.startsWith("https://") || e.startsWith("file://") || e.startsWith("blob:") || e.startsWith("data:") ? e : new URL(e, document.baseURI).href, Ms = ({ trimAfter: e, mediaDurationInFrames: t, playbackRate: n, trimBefore: r }) => {
	let i = t;
	return e !== void 0 && (i = e), r !== void 0 && (i -= r), i / n;
}, Ns = ({ durationInFrames: e, trimAfter: t, trimBefore: n }) => {
	let r = e === void 0 ? void 0 : (n ?? 0) + e;
	return r === void 0 ? t : t === void 0 ? r : Math.min(t, r);
}, Ps = (0, b.createContext)(null), Fs = () => b.useContext(gr), Is = ({ durationInFrames: e, times: t = Infinity, children: n, name: r, showInTimeline: i, playbackRate: a, ...o }) => {
	let s = Nn(), { durationInFrames: c } = Pn(), l = (0, b.useContext)(Xe), u = l?.playbackRate ?? 1, d = e / (a ?? 1), f = l ? l.cumulatedFrom + l.relativeFrom : 0, p = f - (l?.cumulatedNegativeFrom ?? 0) / u, m = f + Math.min(c, d * t) / u;
	if (st(e, {
		component: "of the <Loop /> component",
		allowFloats: !0
	}), typeof t != "number") throw TypeError(`You passed to "times" an argument of type ${typeof t}, but it must be a number.`);
	if (t !== Infinity && t % 1 != 0) throw TypeError(`The "times" prop of a loop must be an integer, but got ${t}.`);
	if (t < 0) throw TypeError(`The "times" prop of a loop must be at least 0, but got ${t}`);
	let h = Math.ceil(c / d), g = Math.min(h, t), _ = d * (g - 1), v = s / d, y = Math.round(v), x = Math.abs(v - y) <= 2 ** -52 * Math.max(1, Math.abs(v)) * 4, C = Math.max(0, Math.min(g - 1, x ? y : Math.floor(v))), w = x ? s : C * d, T = Math.max(0, Math.min(w, _)), E = (0, b.useMemo)(() => ({
		numberOfTimes: Math.min(c / d, t),
		startOffset: -T,
		durationInFrames: d
	}), [
		c,
		T,
		d,
		t
	]), D = (0, b.useMemo)(() => ({
		iteration: C,
		durationInFrames: e
	}), [C, e]), O = (0, b.useMemo)(() => ({
		startFrame: f,
		firstVisibleFrame: p,
		endFrame: m,
		playbackRate: u
	}), [
		f,
		p,
		m,
		u
	]);
	return g === 0 ? null : /* @__PURE__ */ (0, S.jsx)(Ps.Provider, {
		value: O,
		children: /* @__PURE__ */ (0, S.jsx)(gr.Provider, {
			value: D,
			children: /* @__PURE__ */ (0, S.jsx)(Wo, {
				durationInFrames: e,
				from: T,
				name: r ?? "<Loop>",
				_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/loop",
				_remotionInternalLoopDisplay: E,
				...o,
				showInTimeline: i,
				playbackRate: a,
				children: n
			})
		})
	});
};
Is.useLoop = Fs;
var Ls = ({ logLevel: e, tag: t, message: n, mountTime: r }) => {
	let i = [r ? Date.now() - r + "ms " : null, t].filter(Boolean).join(" ");
	K.trace({
		logLevel: e,
		tag: null
	}, `[${i}]`, n);
}, Rs = (0, b.createContext)({}), zs = {}, Bs = [], Vs = ({ children: e }) => {
	let [t, n] = (0, b.useState)(() => zs);
	return (0, b.useEffect)(() => {
		let e = () => {
			n(zs);
		};
		return Bs.push(e), () => {
			Bs = Bs.filter((t) => t !== e);
		};
	}, []), /* @__PURE__ */ (0, S.jsx)(Rs.Provider, {
		value: t,
		children: e
	});
}, Hs = (e) => {
	let t = e.indexOf("#");
	return t === -1 ? null : t;
}, Us = (e) => {
	let t = Hs(e);
	return t === null ? e : e.slice(0, t);
}, Ws = (e) => {
	let t = (0, b.useContext)(Rs), n = Hs(e), r = Us(e);
	return t[r] ? n === null ? t[r] : t[r] + e.slice(n) : e;
}, Gs = (e, t) => {
	if (typeof e.volume != "number" && typeof e.volume != "function" && e.volume !== void 0) throw TypeError(`You have passed a volume of type ${typeof e.volume} to your <${t} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);
	if (typeof e.volume == "number" && e.volume < 0) throw TypeError(`You have passed a volume below 0 to your <${t} /> component. Volume must be between 0 and 1`);
	if (typeof e.playbackRate != "number" && e.playbackRate !== void 0) throw TypeError(`You have passed a playbackRate of type ${typeof e.playbackRate} to your <${t} /> component. Playback rate must a real number or undefined.`);
	if (typeof e.playbackRate == "number" && (isNaN(e.playbackRate) || !Number.isFinite(e.playbackRate) || e.playbackRate <= 0)) throw TypeError(`You have passed a playbackRate of ${e.playbackRate} to your <${t} /> component. Playback rate must be a real number above 0.`);
	if (typeof e.preservePitch != "boolean" && e.preservePitch !== void 0) throw TypeError(`'preservePitch' must be a boolean or undefined but got '${typeof e.preservePitch}' instead`);
}, Ks = (e, t) => {
	if (e !== void 0) {
		if (typeof e != "number") throw TypeError(`type of startFrom prop must be a number, instead got type ${typeof e}.`);
		if (isNaN(e) || e === Infinity) throw TypeError("startFrom prop can not be NaN or Infinity.");
		if (e < 0) throw TypeError(`startFrom must be greater than equal to 0 instead got ${e}.`);
	}
	if (t !== void 0) {
		if (typeof t != "number") throw TypeError(`type of endAt prop must be a number, instead got type ${typeof t}.`);
		if (isNaN(t)) throw TypeError("endAt prop can not be NaN.");
		if (t <= 0) throw TypeError(`endAt must be a positive number, instead got ${t}.`);
	}
	if (t < e) throw TypeError("endAt prop must be greater than startFrom prop.");
}, qs = (e, t) => {
	if (e !== void 0) {
		if (typeof e != "number") throw TypeError(`type of trimBefore prop must be a number, instead got type ${typeof e}.`);
		if (isNaN(e) || e === Infinity) throw TypeError("trimBefore prop can not be NaN or Infinity.");
		if (e < 0) throw TypeError(`trimBefore must be greater than equal to 0 instead got ${e}.`);
	}
	if (t !== void 0) {
		if (typeof t != "number") throw TypeError(`type of trimAfter prop must be a number, instead got type ${typeof t}.`);
		if (isNaN(t)) throw TypeError("trimAfter prop can not be NaN.");
		if (t <= 0) throw TypeError(`trimAfter must be a positive number, instead got ${t}.`);
	}
	if (t <= e) throw TypeError("trimAfter prop must be greater than trimBefore prop.");
}, Js = ({ startFrom: e, endAt: t, trimBefore: n, trimAfter: r }) => {
	if (e !== void 0 && n !== void 0) throw TypeError("Cannot use both startFrom and trimBefore props. Use trimBefore instead as startFrom is deprecated.");
	if (t !== void 0 && r !== void 0) throw TypeError("Cannot use both endAt and trimAfter props. Use trimAfter instead as endAt is deprecated.");
	n !== void 0 || r !== void 0 ? qs(n, r) : (e !== void 0 || t !== void 0) && Ks(e, t);
}, Ys = ({ startFrom: e, endAt: t, trimBefore: n, trimAfter: r }) => ({
	trimBeforeValue: n ?? e ?? void 0,
	trimAfterValue: r ?? t ?? void 0
}), Xs = (e, t) => {
	switch (t.type) {
		case "got-duration": {
			let n = js(t.src);
			return e[n] === t.durationInSeconds ? e : {
				...e,
				[n]: t.durationInSeconds
			};
		}
		default: return e;
	}
}, Zs = (0, b.createContext)({
	durations: {},
	setDurations: () => {
		throw Error("context missing");
	}
}), Qs = ({ children: e }) => {
	let [t, n] = (0, b.useReducer)(Xs, {}), r = (0, b.useMemo)(() => ({
		durations: t,
		setDurations: n
	}), [t]);
	return /* @__PURE__ */ (0, S.jsx)(Zs.Provider, {
		value: r,
		children: e
	});
}, $s = ({ crossOrigin: e, requestsVideoFrame: t, isClientSideRendering: n }) => {
	if (e != null) return e;
	if (n || t) return "anonymous";
};
function ec(e) {
	let t = e + 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function tc(e) {
	let t = 0, n = 0, r = 0;
	for (t = 0; t < e.length; t++) n = e.charCodeAt(t), r = (r << 5) - r + n, r |= 0;
	return r;
}
var nc = (e, t) => {
	if (t !== void 0) throw TypeError("random() takes only one argument");
	if (e === null) return Math.random();
	if (typeof e == "string") return ec(tc(e));
	if (typeof e == "number") return ec(e * 1e10);
	throw Error("random() argument must be a number or a string");
}, rc = ({ mediaRef: e, mediaType: t, onAutoPlayError: n, logLevel: r, mountTime: i, reason: a, isPlayer: o }) => {
	let { current: s } = e;
	if (!s) return;
	Ls({
		logLevel: r,
		tag: "play",
		message: `Attempting to play ${s.src}. Reason: ${a}`,
		mountTime: i
	});
	let c = s.play();
	c.catch && c.catch((e) => {
		if (s && !e.message.includes("request was interrupted by a call to pause") && !e.message.includes("The operation was aborted.") && !e.message.includes("The fetching process for the media resource was aborted by the user agent") && !e.message.includes("request was interrupted by a new load request") && !e.message.includes("because the media was removed from the document") && !(e.message.includes("user didn't interact with the document") && s.muted) && (console.log(`Could not play ${t} due to following error: `, e), !s.muted)) {
			if (n) {
				n();
				return;
			}
			t === "video" && o && (K.info({
				logLevel: r,
				tag: "<" + t + ">"
			}, "The video will be muted and we'll retry playing it."), K.info({
				logLevel: r,
				tag: "<" + t + ">"
			}, "Use onAutoPlayError() to handle this error yourself."), s.muted = !0, s.play());
		}
	});
}, ic = ({ audioContext: e, ref: t }) => {
	let n = null, r = !1, i = e;
	return {
		setAudioContext: (e) => {
			i = e;
		},
		attemptToConnect: () => {
			if (r) throw Error("SharedElementSourceNode has been disposed");
			!n && t.current && i && (n = i.createMediaElementSource(t.current));
		},
		get: () => {
			if (!n) throw Error("Audio element not connected");
			return n;
		},
		cleanup: () => {
			n &&= (n.disconnect(), null), r = !0;
		}
	};
}, ac = !1, oc = (e) => {
	ac || (ac = !0, typeof window < "u" && K.warn({
		logLevel: e,
		tag: null
	}, "AudioContext is not supported in this browser"));
}, sc = ({ logLevel: e, latencyHint: t, audioEnabled: n, sampleRate: r }) => {
	let i = G(), a = (0, b.useRef)(r);
	if (r !== a.current) throw Error(`Changing the AudioContext sample rate dynamically is not supported. The sample rate was initialized with ${a.current} Hz, but ${r} Hz was passed later.`);
	return (0, b.useMemo)(() => {
		if (i.isRendering || !n) return null;
		if (typeof AudioContext > "u") return oc(e), null;
		let a = new AudioContext({
			latencyHint: t,
			sampleRate: r
		}), o = a.createGain();
		o.connect(a.destination), K.trace({
			logLevel: e,
			tag: "audio"
		}, "Creating new audio context"), a.suspend();
		let s = null;
		return {
			audioContext: a,
			gainNode: o,
			getState: () => {
				let e = a.state;
				return s === "running" && e !== "running" ? "suspended-to-running" : s === "suspended" && e !== "suspended" ? "running-to-suspended" : e;
			},
			resume: () => {
				s = "running";
				let e = a.resume();
				return e.finally(() => {
					s === "running" && (s = null);
				}), e;
			},
			suspend: () => {
				s = "suspended";
				let e = a.suspend();
				return e.finally(() => {
					s === "suspended" && (s = null);
				}), e;
			}
		};
	}, [
		e,
		t,
		i.isRendering,
		n,
		r
	]);
}, cc = 1e3, lc = (e, t, n, r) => new Promise((i) => {
	let a = e.currentTime, o = e.getOutputTimestamp().performanceTime, s = performance.now(), c = null, l = null, u = !1, d = () => {}, f = (e) => {
		u || (u = !0, c !== null && cancelAnimationFrame(c), l !== null && clearTimeout(l), n.removeEventListener("abort", d), i(e));
	};
	d = () => f("cancelled");
	let p = (t) => {
		let n = e.getOutputTimestamp();
		return t !== void 0 && n.performanceTime !== void 0 && n.performanceTime > t && n.contextTime !== void 0 && n.contextTime > a;
	}, m = () => {
		c = null;
		let { currentTime: n } = e, r = e.getOutputTimestamp(), i = performance.now() - s;
		if (p(o)) {
			K.verbose({
				logLevel: t,
				tag: "audio"
			}, `waitUntilActuallyResumed: getOutputTimestamp.performanceTime advanced from ${o.toFixed(6)} to ${r.performanceTime?.toFixed(6)} after ${i.toFixed(1)}ms. currentTime=${n.toFixed(6)} (advanced by ${(n - a).toFixed(6)}), getOutputTimestamp.performanceTime=${r.performanceTime?.toFixed(1) ?? "undefined"}`), f("resumed");
			return;
		}
		c = requestAnimationFrame(m);
	};
	if (n.aborted) {
		f("cancelled");
		return;
	}
	n.addEventListener("abort", d, { once: !0 }), r && (l = setTimeout(() => {
		if (p(o)) {
			f("resumed");
			return;
		}
		K.warn({
			logLevel: t,
			tag: "audio"
		}, "WARNING: You enabled autoPlay on an unmuted <Player /> and the browser did not allow the video to be started. Remotion muted the <Player /> so it can play. To properly handle this, either set the `muted` prop or remove the `autoPlay` prop"), f("failed");
	}, cc)), c = requestAnimationFrame(m);
}), uc = "data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV", dc = (e, t) => {
	let n = Object.keys(e).sort(), r = Object.keys(t).sort();
	if (n.length !== r.length) return !1;
	for (let i = 0; i < n.length; i++) if (n[i] !== r[i] || e[n[i]] !== t[r[i]]) return !1;
	return !0;
}, fc = (e, t, n) => e === "src" && !n.startsWith("data:") && !t.startsWith("data:") ? new URL(n, document.baseURI).toString() !== new URL(t, document.baseURI).toString() : n !== t, pc = (0, b.createContext)(null), mc = (0, b.createContext)(null), hc = (e) => {
	if (e === "suspended" || e === "running-to-suspended" || e === "interrupted") return !0;
	if (e === "running" || e === "suspended-to-running") return !1;
	throw Error(`Unexpected audio context state: ${e}`);
}, gc = ({ children: e, audioLatencyHint: t, audioEnabled: n, previewSampleRate: r, _experimentalKeepAudioContextAlive: i }) => {
	let a = Ut(), o = r ?? 48e3, s = sc({
		logLevel: a,
		latencyHint: t,
		audioEnabled: n,
		sampleRate: o
	}), c = (0, b.useRef)(!1);
	if ((0, b.useRef)(i).current !== i) throw Error("`_experimentalKeepAudioContextAlive` cannot be changed dynamically.");
	let l = (0, b.useRef)(null), u = (0, b.useRef)(0), d = (0, b.useRef)(!1), f = (0, b.useMemo)(() => ({ value: 0 }), []), p = (0, b.useRef)([]), m = (0, b.useMemo)(() => ({
		dispatch: (e) => {
			p.current.forEach((t) => t(e));
		},
		subscribe: (e) => (p.current.push(e), { remove: () => {
			p.current = p.current.filter((t) => t !== e);
		} })
	}), []), h = (0, b.useRef)({
		scheduledEndTime: null,
		mediaEndTime: null
	}), g = (0, b.useRef)(/* @__PURE__ */ new Map()), _ = (0, b.useCallback)((e) => {
		g.current.delete(e);
	}, []), v = (0, b.useMemo)(() => ({ node: e, mediaTimestamp: t, sourceOffset: n, scheduledTime: r, duration: o, offset: l, originalUnloopedMediaTimestamp: u }) => {
		if (!s) throw Error("Audio context not found");
		let d = s.getState();
		if (d === "closed") return {
			type: "not-started",
			reason: "audio context is closed"
		};
		let f = hc(d) || i && !c.current;
		o > 0 && (f ? g.current.set(e, {
			scheduledTime: r,
			offset: l,
			duration: o
		}) : e.start(r, l, o));
		let p = r + o / e.playbackRate.value, m = t + l - n, _ = m + o, v = s.audioContext.baseLatency + s.audioContext.outputLatency, y = r - s.audioContext.currentTime, b = h.current, x = b.scheduledEndTime !== null && Math.abs(r - b.scheduledEndTime) > .001, S = b.mediaEndTime !== null && Math.abs(m - b.mediaEndTime) > .001;
		return K.verbose({
			logLevel: a,
			tag: "audio-scheduling"
		}, "scheduled %c%s%c %s %c%s%c %s %c%s%c %s %s %s %s %s", x ? "color: red; font-weight: bold" : "", r.toFixed(4), "", p.toFixed(4), S ? "color: red; font-weight: bold" : "", m.toFixed(4), "", _.toFixed(4), o < 0 || y < 0 ? "color: red; font-weight: bold" : "color: blue; font-weight: bold", o < 0 ? "missed " + Math.abs(l).toFixed(2) + "s" : Math.abs(y).toFixed(2) + (y < 0 ? " delay" : " ahead"), "", "current=" + s.audioContext.currentTime.toFixed(4), "offset=" + l.toFixed(4), "latency=" + v.toFixed(4), "state=" + s.audioContext.state, u === m ? "" : "original_ts=" + u.toFixed(4), "action=" + (f ? "schedule" : "start"), ""), b.scheduledEndTime = p, b.mediaEndTime = _, o > 0 ? {
			type: "started",
			scheduledTime: r
		} : {
			type: "not-started",
			reason: "missed " + Math.abs(l).toFixed(2) + "s"
		};
	}, [
		s,
		i,
		a
	]), y = (0, b.useCallback)(() => {
		let e = d.current;
		if (d.current = !1, !s || c.current || (c.current = !0, s.gainNode.gain.cancelScheduledValues(s.audioContext.currentTime), s.gainNode.gain.setValueAtTime(0, s.audioContext.currentTime), s.gainNode.gain.linearRampToValueAtTime(1, s.audioContext.currentTime + .03), g.current.forEach((e, t) => {
			t.start(e.scheduledTime, e.offset, e.duration);
		}), g.current.clear(), i && s.audioContext.state === "running")) return Promise.resolve();
		let t = s.resume(), n = new AbortController(), r = u.current++, o = new Promise((r) => {
			lc(s.audioContext, a, n.signal, e).then(r), t.catch((e) => {
				K.warn({
					logLevel: a,
					tag: "audio"
				}, "AudioContext resume rejected, muting playback and continuing without audio", e), n.abort(), r("failed");
			});
		}).finally(() => {
			l.current?.id === r && (l.current = null);
		});
		return l.current = {
			abortController: n,
			id: r,
			promise: o
		}, t.catch(() => {});
	}, [
		s,
		i,
		a
	]), x = (0, b.useCallback)(() => (d.current = !0, y()), [y]), C = (0, b.useCallback)(() => l.current?.promise ?? null, []), w = (0, b.useCallback)(() => (l.current?.abortController.abort(), !s || !c.current ? Promise.resolve() : (c.current = !1, i ? (s.gainNode.gain.cancelScheduledValues(s.audioContext.currentTime), s.gainNode.gain.setValueAtTime(0, s.audioContext.currentTime), Promise.resolve()) : s.suspend())), [s, i]);
	(0, b.useEffect)(() => {
		if (!i || !s || typeof window > "u") return;
		let e = () => {
			s.audioContext.state !== "running" && s.resume().catch(() => {});
		};
		return e(), window.addEventListener("pointerdown", e, {
			capture: !0,
			passive: !0
		}), window.addEventListener("keydown", e, {
			capture: !0,
			passive: !0
		}), () => {
			window.removeEventListener("pointerdown", e, { capture: !0 }), window.removeEventListener("keydown", e, { capture: !0 }), s.suspend().catch(() => {});
		};
	}, [s, i]);
	let T = (0, b.useMemo)(() => ({
		sampleRate: o,
		audioContext: s?.audioContext ?? null,
		getAudioContextState: () => s?.getState() ?? null,
		gainNode: s?.gainNode ?? null,
		audioSyncAnchor: f,
		audioSyncAnchorEmitter: m,
		scheduleAudioNode: v,
		resume: y,
		resumeAsAutoPlay: x,
		suspend: w,
		getIsResumingAudioContext: C,
		unscheduleAudioNode: _,
		_experimentalKeepAudioContextAlive: i
	}), [
		o,
		s,
		f,
		m,
		v,
		y,
		x,
		w,
		C,
		_,
		i
	]);
	return /* @__PURE__ */ (0, S.jsx)(pc.Provider, {
		value: T,
		children: e
	});
}, _c = ({ children: e, numberOfAudioTags: t }) => {
	let n = (0, b.useRef)([]), [r] = (0, b.useState)(t);
	if (t !== r) throw Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");
	let i = Ut(), a = Wt(), o = G(), s = (0, b.useContext)(pc), c = s?.audioContext ?? null, l = s?.resume, [u] = (0, b.useState)(() => Array(t).fill(!0).map(() => {
		let e = (0, b.createRef)();
		return {
			id: Math.random(),
			ref: e,
			mediaElementSourceNode: ic({
				audioContext: c,
				ref: e
			})
		};
	}));
	for (let { mediaElementSourceNode: e } of u) e?.setAudioContext(c);
	(b.useInsertionEffect ?? b.useLayoutEffect)(() => () => {
		requestAnimationFrame(() => {
			u.forEach(({ mediaElementSourceNode: e }) => {
				e?.cleanup();
			});
		});
	}, [u]);
	let d = (0, b.useRef)(Array(t).fill(!1)), f = (0, b.useCallback)(() => {
		u.forEach(({ ref: e, id: t }) => {
			let r = n.current?.find((e) => e.id === t), { current: i } = e;
			if (i) {
				if (r === void 0) {
					i.src !== uc && (i.src = uc);
					return;
				}
				if (!r) throw TypeError("Expected audio data to be there");
				Object.keys(r.props).forEach((e) => {
					fc(e, r.props[e], i[e]) && (i[e] = r.props[e]);
				});
			}
		});
	}, [u]), p = (0, b.useCallback)((e) => {
		let { aud: r, audioId: i, premounting: a, postmounting: o } = e, s = n.current?.find((e) => e.audioId === i);
		if (s) return s;
		let c = d.current.findIndex((e) => e === !1);
		if (c === -1) throw Error(`Tried to simultaneously mount ${t + 1} <Html5Audio /> tags at the same time. With the current settings, the maximum amount of <Html5Audio /> tags is limited to ${t} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#using-the-numberofsharedaudiotags-prop for more information on how to increase this limit.`);
		let { id: l, ref: p, mediaElementSourceNode: m } = u[c], h = [...d.current];
		h[c] = l, d.current = h;
		let g = {
			props: r,
			id: l,
			el: p,
			audioId: i,
			mediaElementSourceNode: m,
			premounting: a,
			audioMounted: !!p.current,
			postmounting: o,
			cleanupOnMediaTagUnmount: () => {}
		};
		return n.current?.push(g), f(), g;
	}, [
		t,
		u,
		f
	]), m = (0, b.useCallback)((e) => {
		let t = [...d.current], r = u.findIndex((t) => t.id === e);
		if (r === -1) throw TypeError(`Unknown audio ref ${e}; refs: ${u.map((e) => e.id).join(", ")}`);
		t[r] = !1, d.current = t, n.current = n.current?.filter((t) => t.id !== e), f();
	}, [u, f]), h = (0, b.useCallback)(({ aud: e, audioId: t, id: r, premounting: i, postmounting: a }) => {
		let o = !1;
		n.current = n.current?.map((n) => {
			let s = !!n.el.current;
			return n.audioMounted !== s && (o = !0), n.id === r ? dc(e, n.props) && n.premounting === i && n.postmounting === a ? n.audioMounted === s ? n : {
				...n,
				audioMounted: s
			} : (o = !0, {
				...n,
				props: e,
				premounting: i,
				postmounting: a,
				audioId: t,
				audioMounted: s
			}) : n.audioMounted === s ? n : {
				...n,
				audioMounted: s
			};
		}), o && f();
	}, [f]), g = (0, b.useCallback)(() => {
		u.forEach((e) => {
			n.current.find((t) => t.el === e.ref)?.premounting || rc({
				mediaRef: e.ref,
				mediaType: "audio",
				onAutoPlayError: null,
				logLevel: i,
				mountTime: a,
				reason: "playing all audios",
				isPlayer: o.isPlayer
			});
		}), l?.();
	}, [
		i,
		a,
		u,
		o.isPlayer,
		l
	]), _ = (0, b.useMemo)(() => ({
		registerAudio: p,
		unregisterAudio: m,
		updateAudio: h,
		playAllAudios: g,
		numberOfAudioTags: t
	}), [
		t,
		g,
		p,
		m,
		h
	]), v = (0, b.useMemo)(() => u.map(({ id: e, ref: t }) => /* @__PURE__ */ (0, S.jsx)("audio", {
		ref: t,
		preload: "metadata",
		src: uc
	}, e)), [u]);
	return /* @__PURE__ */ (0, S.jsxs)(mc.Provider, {
		value: _,
		children: [v, e]
	});
}, vc = ({ aud: e, audioId: t, premounting: n, postmounting: r }) => {
	let i = (0, b.useContext)(pc), a = (0, b.useContext)(mc), [o] = (0, b.useState)(() => {
		if (a && a.numberOfAudioTags > 0) return a.registerAudio({
			aud: e,
			audioId: t,
			premounting: n,
			postmounting: r
		});
		let o = b.createRef(), s = ic({
			audioContext: i?.audioContext ?? null,
			ref: o
		});
		return {
			el: o,
			id: Math.random(),
			props: e,
			audioId: t,
			mediaElementSourceNode: s,
			premounting: n,
			audioMounted: !!o.current,
			postmounting: r,
			cleanupOnMediaTagUnmount: () => {
				s?.cleanup();
			}
		};
	});
	o.mediaElementSourceNode?.setAudioContext(i?.audioContext ?? null);
	let s = b.useInsertionEffect ?? b.useLayoutEffect;
	return typeof document < "u" && (s(() => {
		a && a.numberOfAudioTags > 0 && a.updateAudio({
			id: o.id,
			aud: e,
			audioId: t,
			premounting: n,
			postmounting: r
		});
	}, [
		e,
		a,
		o.id,
		t,
		n,
		r
	]), s(() => () => {
		a && a.numberOfAudioTags > 0 && a.unregisterAudio(o.id);
	}, [a, o.id])), o;
}, yc = 1e-5, bc = (e, t) => Math.abs(e - t) < yc, xc = (e, t) => Math.round(e / t * 100) / 100, Sc = () => typeof window > "u" || !/AppleWebKit/.test(window.navigator.userAgent) ? !1 : !window.navigator.userAgent.includes("Chrome/"), Cc = () => {
	if (typeof window > "u") return !1;
	let { userAgent: e, platform: t, maxTouchPoints: n } = window.navigator;
	return (/iP(ad|od|hone)/i.test(e) || t === "MacIntel" && n > 1) && Sc();
}, wc = (e) => Cc() && e.startsWith("blob:"), Tc = ({ actualFrom: e, fps: t }) => xc(Math.max(0, -e), t), Ec = ({ duration: e, fps: t }) => xc(e, t), Dc = ({ actualSrc: e, actualFrom: t, duration: n, fps: r }) => {
	if (wc(e) || e.startsWith("data:") || new URL(e, (typeof window > "u" ? null : window.location.href) ?? "http://localhost:3000").hash || !Number.isFinite(t)) return e;
	let i = `${e}#t=${Tc({
		actualFrom: t,
		fps: r
	})}`;
	return Number.isFinite(n) ? `${i},${Ec({
		duration: n,
		fps: r
	})}` : i;
}, Oc = ({ prevStartFrom: e, newStartFrom: t, prevDuration: n, newDuration: r, fps: i }) => {
	let a = Tc({
		actualFrom: e,
		fps: i
	}), o = Tc({
		actualFrom: t,
		fps: i
	}), s = Ec({
		duration: n,
		fps: i
	}), c = Ec({
		duration: r,
		fps: i
	});
	return !(o < a || c > s);
}, kc = ({ actualSrc: e, actualFrom: t, duration: n, fps: r }) => {
	let i = (0, b.useRef)(t), a = (0, b.useRef)(n), o = (0, b.useRef)(e);
	return (!Oc({
		prevStartFrom: i.current,
		newStartFrom: t,
		prevDuration: a.current,
		newDuration: n,
		fps: r
	}) || e !== o.current) && (i.current = t, a.current = n, o.current = e), Dc({
		actualSrc: o.current,
		actualFrom: i.current,
		duration: a.current,
		fps: r
	});
}, Ac = !1, jc = (e) => {
	Ac || (Ac = !0, K.warn({
		logLevel: e,
		tag: null
	}, "In Safari, setting a volume and a playback rate at the same time is buggy."), K.warn({
		logLevel: e,
		tag: null
	}, "In Desktop Safari, only volumes <= 1 will be applied."), K.warn({
		logLevel: e,
		tag: null
	}, e, "In Mobile Safari, the volume will be ignored and set to 1 if a playbackRate is set."));
}, Mc = ({ mediaRef: e, volume: t, logLevel: n, source: r, shouldUseWebAudioApi: i }) => {
	let a = (0, b.useRef)(null), o = (0, b.useRef)(t);
	o.current = t;
	let s = (0, b.useContext)(pc);
	if (!s) throw Error("useAmplification must be used within a SharedAudioContext");
	let { audioContext: c, gainNode: l } = s;
	if (typeof window < "u" && (0, b.useLayoutEffect)(() => {
		if (!c || !e.current || !i) return;
		if (e.current.playbackRate !== 1 && Sc()) {
			jc(n);
			return;
		}
		if (!r || !l) return;
		let t = new GainNode(c, { gain: o.current });
		return r.attemptToConnect(), r.get().connect(t), t.connect(l), a.current = { gainNode: t }, K.trace({
			logLevel: n,
			tag: null
		}, `Starting to amplify ${e.current?.src}. Gain = ${o.current}, playbackRate = ${e.current?.playbackRate}`), () => {
			a.current = null, t.disconnect(), r.get().disconnect();
		};
	}, [
		n,
		e,
		c,
		r,
		i,
		l
	]), a.current) {
		let r = t;
		bc(a.current.gainNode.gain.value, r) || (a.current.gainNode.gain.value = r, K.trace({
			logLevel: n,
			tag: null
		}, `Setting gain to ${r} for ${e.current?.src}`));
	}
	return (Sc() && e.current && e.current?.playbackRate !== 1 || !i) && e.current && !bc(t, e.current?.volume) && (e.current.volume = Math.min(t, 1)), a;
}, Nc = (0, b.createContext)(0), Pc = () => (0, b.useContext)(Xe)?.cumulatedNegativeFrom ?? 0, Fc = (e) => {
	let t = Is.useLoop(), n = (0, b.useContext)(Ps), r = (0, b.useContext)(Xe), i = Nn(), a = Pc();
	return e === "repeat" || t === null ? i + a : i + a + t.durationInFrames * t.iteration * (r?.playbackRate ?? 1) / (n?.playbackRate ?? 1);
}, Ic = (e) => {
	if (e.startsWith("data:")) return "Data URL";
	if (e.startsWith("blob:")) {
		let t = typeof window > "u" ? void 0 : window.remotion_staticFiles?.find((t) => t.src === e);
		return t ? Ic(t.name) : "Blob URL";
	}
	let t = e.split("/").map((e) => e.split("\\")).flat(1), n = t[t.length - 1];
	try {
		return decodeURIComponent(n);
	} catch {
		return n;
	}
}, Lc = ({ compositionDurationInFrames: e, playbackRate: t, trimBefore: n, trimAfter: r, parentSequenceDurationInFrames: i, loop: a }) => {
	if (a) return e;
	let o = Ms({
		mediaDurationInFrames: e * t + (n ?? 0),
		playbackRate: t,
		trimBefore: n,
		trimAfter: r
	});
	return i === null ? o : Number(Math.min(i, o).toFixed(10));
}, Rc = ({ frame: e, volume: t, mediaVolume: n = 1 }) => {
	if (typeof t == "number") return t * n;
	if (t === void 0) return Number(n);
	let r = t(e) * n;
	if (typeof r != "number") throw TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof r} for frame ${e}`);
	if (Number.isNaN(r)) throw TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${e}.`);
	if (!Number.isFinite(r)) throw TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${e}.`);
	return Math.max(0, r);
}, zc = ({ volume: e, mediaVolume: t, src: n, displayName: r, trimBefore: i, trimAfter: a, playbackRate: o, sequenceDurationInFrames: s, mediaStartsAt: c, mediaFrom: l, loop: u, muted: d }) => {
	if (!n) throw Error("No src passed");
	let f = (0, b.useContext)(Xe), p = f?.playbackRate ?? 1, m = Lc({
		compositionDurationInFrames: s,
		playbackRate: o,
		trimBefore: i,
		trimAfter: a,
		parentSequenceDurationInFrames: f?.durationInFrames ?? null,
		loop: u
	}), h = (0, b.useMemo)(() => typeof e == "number" ? e : typeof e == "function" ? Array(Math.ceil(Math.max(0, m + Math.min(0, c + l)) / p)).fill(!0).map((n, r) => Rc({
		frame: r * p,
		volume: e,
		mediaVolume: t
	})).join(",") : Rc({
		frame: 0,
		volume: e,
		mediaVolume: t
	}), [
		m,
		c,
		l,
		e,
		t,
		p
	]), g = typeof e == "function", _ = 0 - c + (i ?? 0);
	return (0, b.useMemo)(() => ({
		volumes: h,
		duration: m,
		doesVolumeChange: g,
		finalDisplayName: r ?? Ic(n),
		startMediaFrom: _,
		src: n,
		playbackRate: o,
		muted: d
	}), [
		h,
		m,
		g,
		r,
		n,
		_,
		o,
		d
	]);
}, Bc = ({ volume: e, mediaVolume: t, src: n, mediaType: r, playbackRate: i, displayName: a, id: o, getStack: s, showInTimeline: c, premountDisplay: l, postmountDisplay: u, loopDisplay: d, loopVolumeCurveBehavior: f, documentationLink: p, muted: m }) => {
	let h = (0, b.useContext)(Xe), g = (0, b.useContext)(Nc), _ = (0, b.useContext)(Pr), { durationInFrames: v } = Pn(), y = Pc(), x = Is.useLoop(), S = (0, b.useContext)(Ps), C = (0, b.useContext)(wr), { isStudio: w } = G(), T = (0, b.useMemo)(() => r === "video" && (w || C) ? Er.createRef() : null, [
		C,
		w,
		r
	]), { volumes: E, duration: D, finalDisplayName: O } = zc({
		volume: x && typeof e == "function" ? void 0 : e,
		mediaVolume: t,
		src: n,
		displayName: a,
		trimAfter: void 0,
		trimBefore: void 0,
		playbackRate: i,
		sequenceDurationInFrames: v,
		mediaStartsAt: y,
		mediaFrom: 0,
		loop: !1,
		muted: m
	}), k = typeof e == "function", A = (0, b.useMemo)(() => {
		if (!x || !S || typeof e != "function") return E;
		let n = S, r = x.durationInFrames, i = h?.playbackRate ?? 1, a = (h ? h.cumulatedFrom + h.relativeFrom : 0) + g / i - (n.startFrame + x.iteration * r / n.playbackRate), o = Math.max(0, n.firstVisibleFrame), s = Math.ceil(o);
		return Array.from({ length: Math.max(0, Math.ceil(n.endFrame) - s) }, (c, l) => {
			let u = s + l, d = (u - n.startFrame) * n.playbackRate / r, p = Math.round(d), m = Math.abs(d - p) <= 2 ** -52 * Math.max(1, Math.abs(d)) * 4 ? p : Math.floor(d), h = n.startFrame + m * r / n.playbackRate + a;
			return Rc({
				frame: Math.max(0, u - Math.max(o, h)) * i + (f === "extend" ? m * r * i / n.playbackRate : 0),
				volume: e,
				mediaVolume: t
			});
		}).join(",");
	}, [
		E,
		x,
		S,
		g,
		t,
		h,
		e,
		f
	]), j = (0, b.useCallback)(() => {
		if (!n) throw Error("No src passed");
		return {
			effectRuntimeValues: null,
			type: r,
			src: n,
			id: o,
			duration: D,
			from: 0,
			trimBefore: null,
			parent: h?.id ?? null,
			displayName: O,
			documentationLink: p,
			volume: A,
			muted: m,
			showInTimeline: !0,
			timelineOrder: null,
			startMediaFrom: g,
			mediaFrameAtSequenceZero: g * (1 - i),
			doesVolumeChange: k,
			loopDisplay: d,
			playbackRate: i,
			sequencePlaybackRate: 1,
			getStack: s,
			premountDisplay: l,
			postmountDisplay: u,
			controls: null,
			effects: [],
			refForOutline: T,
			isInsideSeries: !1,
			frozenFrame: null,
			frozenMediaFrame: null
		};
	}, [
		D,
		o,
		h,
		n,
		A,
		k,
		r,
		g,
		i,
		s,
		l,
		u,
		d,
		p,
		O,
		T,
		m
	]);
	return ci({
		getSequence: (w || _ || typeof window < "u" && window.process?.env?.NODE_ENV === "test") && c ? j : null,
		id: o
	}), T;
}, Vc = (e, t, n, r) => {
	let [i, a] = (0, b.useState)(0), o = G().isRendering, s = (0, b.useCallback)(() => {
		if (o) return { unblock: () => {} };
		let e = !1;
		return a((e) => e + 1), { unblock: () => {
			e || (e = !0, a((e) => e - 1));
		} };
	}, [o]);
	return (0, b.useEffect)(() => {
		o || i > 0 && !r() && (n(!0), Ls({
			logLevel: e,
			message: "Player is entering buffer state",
			mountTime: t,
			tag: "player"
		}));
	}, [i]), typeof window < "u" && (0, b.useLayoutEffect)(() => {
		o || i === 0 && r() && (n(!1), Ls({
			logLevel: e,
			message: "Player is exiting buffer state",
			mountTime: t,
			tag: "player"
		}));
	}, [i]), (0, b.useMemo)(() => ({ addBlock: s }), [s]);
}, Hc = b.createContext(null), Uc = ({ children: e }) => {
	let { logLevel: t, mountTime: n } = (0, b.useContext)(Ht), { isBuffering: r, setBuffering: i } = (0, b.useContext)(ln), a = Vc(t ?? "info", n, i, r);
	return /* @__PURE__ */ (0, S.jsx)(Hc.Provider, {
		value: a,
		children: e
	});
}, Wc = () => {
	let e = (0, b.useContext)(Hc), t = Ut(), n = e ? e.addBlock : null;
	return (0, b.useMemo)(() => ({ delayPlayback: () => {
		if (!n) throw Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");
		K.trace({
			logLevel: t,
			tag: "[buffer-state]"
		}, "Adding buffer handle", (/* @__PURE__ */ Error()).stack);
		let { unblock: e } = n(), r = !1;
		return { unblock: () => {
			r || (r = !0, K.trace({
				logLevel: t,
				tag: "[buffer-state]"
			}, "Removing buffer handle"), e());
		} };
	} }), [n, t]);
}, Gc = () => /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent), Kc = ({ mediaRef: e, mediaType: t, onVariableFpsVideoDetected: n, pauseWhenBuffering: r, logLevel: i, mountTime: a }) => {
	let o = (0, b.useRef)(!1), { delayPlayback: s } = Wc(), c = (0, b.useCallback)((c) => {
		if (t !== "video" || !r) return;
		let l = e.current;
		if (!l) return;
		if (l.readyState >= l.HAVE_FUTURE_DATA && !Gc()) {
			Ls({
				logLevel: i,
				message: `Not using buffer until first frame, because readyState is ${l.readyState} and is not Safari or Desktop Chrome`,
				mountTime: a,
				tag: "buffer"
			});
			return;
		}
		if (!l.requestVideoFrameCallback) {
			Ls({
				logLevel: i,
				message: "Not using buffer until first frame, because requestVideoFrameCallback is not supported",
				mountTime: a,
				tag: "buffer"
			});
			return;
		}
		o.current = !0, Ls({
			logLevel: i,
			message: `Buffering ${e.current?.src} until the first frame is received`,
			mountTime: a,
			tag: "buffer"
		});
		let u = s(), d = () => {
			u.unblock(), l.removeEventListener("ended", d, { once: !0 }), l.removeEventListener("pause", d, { once: !0 }), o.current = !1;
		}, f = () => {
			d();
		};
		l.requestVideoFrameCallback((e, t) => {
			Math.abs(t.mediaTime - c) > .5 && n(), d();
		}), l.addEventListener("ended", f, { once: !0 }), l.addEventListener("pause", f, { once: !0 }), l.addEventListener("canplay", f, { once: !0 });
	}, [
		s,
		i,
		e,
		t,
		a,
		n,
		r
	]);
	return (0, b.useMemo)(() => ({
		isBuffering: () => o.current,
		bufferUntilFirstFrame: c
	}), [c]);
}, qc = (e) => {
	let { duration: t, currentTime: n, paused: r, ended: i, desiredUnclampedTime: a, mediaTagTime: o, mediaTagLastUpdate: s, rvcTime: c, rvcLastUpdate: l, isVariableFpsVideo: u, acceptableTimeShift: d, lastSeekDueToShift: f, playing: p, playbackRate: m, mediaTagBufferingOrStalled: h, playerBuffering: g, absoluteFrame: _, onlyWarnForMediaSeekingError: v, isPremounting: y, isPostmounting: b, pauseWhenBuffering: x } = e, S = !Number.isNaN(t) && Number.isFinite(t) ? Math.min(t, a) : a, C = Math.abs(S - o), w = c ? Math.abs(S - c) : null, T = w && !u && l && c > s ? w : C;
	if (T > d && f !== S) return {
		type: "seek-due-to-shift",
		shouldBeTime: S,
		why: `because time shift is too big. shouldBeTime = ${S}, isTime = ${o}, requestVideoCallbackTime = ${c}, timeShift = ${T}${u ? ", isVariableFpsVideo = true" : ""}, isPremounting = ${y}, isPostmounting = ${b}, pauseWhenBuffering = ${x}`,
		bufferUntilFirstFrame: p && m > 0,
		playReason: p && r ? "player is playing but media tag is paused, and just seeked" : null,
		warnAboutNonSeekable: !v
	};
	let E = p ? .15 : .01, D = Math.abs(n - S) > E;
	if (!p || g && !h) return {
		type: "seek-if-not-playing",
		shouldBeTime: S,
		why: D ? `not playing or something else is buffering. time offset is over seek threshold (${E})` : null
	};
	if (!p || g) return { type: "none" };
	let O = r && !i;
	if (O || _ === 0) {
		let e = O ? "media tag is paused" : "absolute frame is 0";
		return {
			type: "play-and-seek",
			shouldBeTime: S,
			why: D ? `is over timeshift threshold (threshold = ${E}) and ${e}` : null,
			playReason: `player is playing and ${e}`,
			bufferUntilFirstFrame: !u && m > 0
		};
	}
	return { type: "none" };
}, Jc = (e) => {
	let t = b.useRef({
		time: e.current?.currentTime ?? 0,
		lastUpdate: performance.now()
	}), n = e.current?.currentTime ?? null;
	return n !== null && t.current.time !== n && (t.current.time = n, t.current.lastUpdate = performance.now()), t;
}, Yc = ({ mediaRef: e, time: t, logLevel: n, why: r, mountTime: i }) => {
	let a = Cc() ? Number(t.toFixed(1)) : t;
	return Ls({
		logLevel: n,
		tag: "seek",
		message: `Seeking from ${e.currentTime} to ${a}. src= ${e.src} Reason: ${r}`,
		mountTime: i
	}), e.currentTime = a, a;
}, Xc = ({ element: e, shouldBuffer: t, isPremounting: n, isPostmounting: r, logLevel: i, mountTime: a, src: o }) => {
	let s = Wc(), [c, l] = (0, b.useState)(!1);
	return (0, b.useEffect)(() => {
		let c = [], { current: u } = e;
		if (!u || !t) return;
		if (n || r) {
			if ((n || r) && u.readyState < u.HAVE_FUTURE_DATA && !navigator.userAgent.includes("Firefox/")) {
				Ls({
					logLevel: i,
					message: `Calling .load() on ${u.src} because readyState is ${u.readyState} and it is not Firefox. Element is premounted ${u.playbackRate}`,
					tag: "load",
					mountTime: a
				});
				let e = u.playbackRate;
				u.load(), u.playbackRate = e;
			}
			return;
		}
		let d = (e) => {
			let t = !1;
			c.forEach((n) => {
				n(e), t = !0;
			}), c = [], l((e) => (e && (t = !0), !1)), t && Ls({
				logLevel: i,
				message: `Unmarking as buffering: ${u.src}. Reason: ${e}`,
				tag: "buffer",
				mountTime: a
			});
		}, f = (e) => {
			l(!0), Ls({
				logLevel: i,
				message: `Marking as buffering: ${u.src}. Reason: ${e}`,
				tag: "buffer",
				mountTime: a
			});
			let { unblock: t } = s.delayPlayback(), n = () => {
				d("\"canplay\" was fired"), p();
			}, r = () => {
				d("\"error\" event was occurred"), p();
			};
			u.addEventListener("canplay", n, { once: !0 }), c.push(() => {
				u.removeEventListener("canplay", n);
			}), u.addEventListener("error", r, { once: !0 }), c.push(() => {
				u.removeEventListener("error", r);
			}), c.push((e) => {
				Ls({
					logLevel: i,
					message: `Unblocking ${u.src} from buffer. Reason: ${e}`,
					tag: "buffer",
					mountTime: a
				}), t();
			});
		}, p = () => {
			if (u.readyState < u.HAVE_FUTURE_DATA) {
				if (f(`readyState is ${u.readyState}, which is less than HAVE_FUTURE_DATA`), !navigator.userAgent.includes("Firefox/")) {
					Ls({
						logLevel: i,
						message: `Calling .load() on ${o} because readyState is ${u.readyState} and it is not Firefox. ${u.playbackRate}`,
						tag: "load",
						mountTime: a
					});
					let e = u.playbackRate;
					u.load(), u.playbackRate = e;
				}
			} else {
				let e = () => {
					f("\"waiting\" event was fired");
				};
				u.addEventListener("waiting", e), c.push(() => {
					u.removeEventListener("waiting", e);
				});
			}
		};
		return p(), () => {
			d("element was unmounted or prop changed");
		};
	}, [
		s,
		o,
		e,
		n,
		r,
		i,
		t,
		a
	]), c;
}, Zc = ({ mediaRef: e, mediaType: t, lastSeek: n, onVariableFpsVideoDetected: r }) => {
	let i = (0, b.useRef)(null);
	return (0, b.useEffect)(() => {
		let { current: a } = e;
		if (a) i.current = {
			time: a.currentTime,
			lastUpdate: performance.now()
		};
		else {
			i.current = null;
			return;
		}
		if (t !== "video") {
			i.current = null;
			return;
		}
		let o = a;
		if (!o.requestVideoFrameCallback) return;
		let s = () => {}, c = () => {
			if (!o) return;
			let e = o.requestVideoFrameCallback((e, t) => {
				if (i.current !== null) {
					let e = Math.abs(i.current.time - t.mediaTime), a = Math.abs(n.current === null ? Infinity : t.mediaTime - n.current);
					e > .5 && a > .5 && t.mediaTime > i.current.time && r();
				}
				i.current = {
					time: t.mediaTime,
					lastUpdate: performance.now()
				}, c();
			});
			s = () => {
				o.cancelVideoFrameCallback(e), s = () => {};
			};
		};
		return c(), () => {
			s();
		};
	}, [
		n,
		e,
		t,
		r
	]), i;
}, Qc = ({ frame: e, playbackRate: t, startFrom: n }) => la(e, [
	-1,
	n,
	n + 1
], [
	-1,
	n,
	n + t
]), $c = ({ fps: e, frame: t, playbackRate: n, startFrom: r }) => Qc({
	frame: t,
	playbackRate: n,
	startFrom: r
}) * (1e3 / e) / 1e3, el = {}, tl = (e, t) => {
	if (e === null || e.seekable.length === 0 || e.seekable.length > 1 || el[e.src]) return;
	let n = {
		start: e.seekable.start(0),
		end: e.seekable.end(0)
	};
	if (n.start === 0 && n.end === 0) {
		let n = [
			`The media ${e.src} cannot be seeked. This could be one of few reasons:`,
			"1) The media resource was replaced while the video is playing but it was not loaded yet.",
			"2) The media does not support seeking.",
			"3) The media was loaded with security headers prventing it from being included.",
			"Please see https://remotion.dev/docs/non-seekable-media for assistance."
		].join("\n");
		if (t === "console-error") console.error(n);
		else if (t === "console-warning") console.warn(`The media ${e.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);
		else throw Error(n);
		el[e.src] = !0;
	}
}, nl = .65, rl = ({ reason: e, isPremounting: t, isPostmounting: n }) => e === "buffering" ? "player is buffering but media tag is not" : t ? "media is premounting" : n ? "media is postmounting" : "Player is not playing", il = ({ mediaRef: e, src: t, mediaType: n, playbackRate: r, preservePitch: i = !0, onlyWarnForMediaSeekingError: a, acceptableTimeshift: o, pauseWhenBuffering: s, isPremounting: c, isPostmounting: l, onAutoPlayError: u }) => {
	let { playbackRate: d } = Dn(), f = Nn(), p = On(), m = vn(), h = yn(), { fps: g } = Pn(), _ = (0, b.useContext)(Nc), v = (0, b.useRef)(null), y = (0, b.useRef)(null), x = Ut(), S = Wt(), C = (0, b.useRef)({}), w = (0, b.useCallback)(() => {
		t && (C.current[t] || (K.verbose({
			logLevel: x,
			tag: null
		}, `Detected ${t} as a variable FPS video. Disabling buffering while seeking.`), C.current[t] = !0));
	}, [x, t]), T = Zc({
		mediaRef: e,
		mediaType: n,
		lastSeek: y,
		onVariableFpsVideoDetected: w
	}), E = Jc(e), D = $c({
		frame: f,
		playbackRate: r,
		startFrom: _,
		fps: g
	}), O = Xc({
		element: e,
		shouldBuffer: s,
		isPremounting: c,
		isPostmounting: l,
		logLevel: x,
		mountTime: S,
		src: t ?? null
	}), { bufferUntilFirstFrame: k, isBuffering: A } = Kc({
		mediaRef: e,
		mediaType: n,
		onVariableFpsVideoDetected: w,
		pauseWhenBuffering: s,
		logLevel: x,
		mountTime: S
	}), j = (0, b.useContext)(Xe), M = r * d * (j?.playbackRate ?? 1), N = e.current?.duration ? Math.min(e.current.duration, o ?? nl) : o ?? nl, P = G();
	(0, b.useLayoutEffect)(() => {
		let t = Math.max(0, M);
		e.current && e.current.defaultPlaybackRate !== t && (e.current.defaultPlaybackRate = t), e.current && e.current.playbackRate !== t && (e.current.playbackRate = t), e.current && e.current.preservesPitch !== i && (e.current.preservesPitch = i);
	}, [
		e,
		M,
		i
	]), (0, b.useEffect)(() => {
		let r = n === "audio" ? "<Html5Audio>" : "<Html5Video>";
		if (!e.current) throw Error(`No ${n} ref found`);
		if (!t) throw Error(`No 'src' attribute was passed to the ${r} element.`);
		let { current: i } = e, o = O || A(), d = null;
		m ? h && !o && (d = "buffering") : d = "not-playing", !i.paused && d !== null && (Ls({
			logLevel: x,
			tag: "pause",
			message: `Pausing ${i.src} because ${rl({
				reason: d,
				isPremounting: c,
				isPostmounting: l
			})}`,
			mountTime: S
		}), i.pause());
		let f = qc({
			duration: i.duration,
			currentTime: i.currentTime,
			paused: i.paused,
			ended: i.ended,
			desiredUnclampedTime: D,
			mediaTagTime: E.current.time,
			mediaTagLastUpdate: E.current.lastUpdate,
			rvcTime: T.current?.time ?? null,
			rvcLastUpdate: T.current?.lastUpdate ?? null,
			isVariableFpsVideo: !!C.current[t],
			acceptableTimeShift: N,
			lastSeekDueToShift: v.current,
			playing: m,
			playbackRate: M,
			mediaTagBufferingOrStalled: o,
			playerBuffering: h,
			absoluteFrame: p,
			onlyWarnForMediaSeekingError: a,
			isPremounting: c,
			isPostmounting: l,
			pauseWhenBuffering: s
		});
		if (f.type !== "none") {
			if (f.type === "seek-due-to-shift") {
				y.current = Yc({
					mediaRef: i,
					time: f.shouldBeTime,
					logLevel: x,
					why: f.why,
					mountTime: S
				}), v.current = y.current, f.bufferUntilFirstFrame && k(f.shouldBeTime), f.playReason !== null && rc({
					mediaRef: e,
					mediaType: n,
					onAutoPlayError: u,
					logLevel: x,
					mountTime: S,
					reason: f.playReason,
					isPlayer: P.isPlayer
				}), f.warnAboutNonSeekable && tl(i, "console-error");
				return;
			}
			if (f.type === "seek-if-not-playing") {
				f.why !== null && (y.current = Yc({
					mediaRef: i,
					time: f.shouldBeTime,
					logLevel: x,
					why: f.why,
					mountTime: S
				}));
				return;
			}
			f.why !== null && (y.current = Yc({
				mediaRef: i,
				time: f.shouldBeTime,
				logLevel: x,
				why: f.why,
				mountTime: S
			})), rc({
				mediaRef: e,
				mediaType: n,
				onAutoPlayError: u,
				logLevel: x,
				mountTime: S,
				reason: f.playReason,
				isPlayer: P.isPlayer
			}), f.bufferUntilFirstFrame && k(f.shouldBeTime);
		}
	}, [
		p,
		N,
		k,
		T,
		x,
		D,
		A,
		O,
		e,
		n,
		a,
		M,
		h,
		m,
		t,
		u,
		c,
		l,
		s,
		S,
		E,
		P.isPlayer
	]);
}, al = ({ mediaRef: e, id: t, mediaType: n, onAutoPlayError: r, isPremounting: i, isPostmounting: a }) => {
	let { audioAndVideoTags: o, isPlaying: s } = En(), { subscribePlaying: c } = (0, b.useContext)(ln), l = (0, b.useRef)(s);
	l.current = s;
	let u = Ut(), d = Wt(), f = G();
	(0, b.useEffect)(() => {
		let s = {
			id: t,
			play: (t) => {
				if (l.current() && !(i || a)) return rc({
					mediaRef: e,
					mediaType: n,
					onAutoPlayError: r,
					logLevel: u,
					mountTime: d,
					reason: t,
					isPlayer: f.isPlayer
				});
			}
		};
		o.current.push(s);
		let p = c((t) => {
			if (t.playing) return;
			let n = e.current;
			n && !n.paused && (Ls({
				logLevel: u,
				tag: "pause",
				message: `Pausing ${n.src} because Player is not playing`,
				mountTime: d
			}), n.pause());
		});
		return () => {
			p(), o.current = o.current.filter((e) => e.id !== t);
		};
	}, [
		o,
		t,
		e,
		n,
		r,
		i,
		a,
		u,
		d,
		f.isPlayer,
		c
	]);
}, ol = (0, b.createContext)({
	playerMuted: !1,
	mediaVolume: 1
}), sl = (0, b.createContext)({
	setPlayerMuted: () => {
		throw Error("default");
	},
	setMediaVolume: () => {
		throw Error("default");
	}
}), cl = () => {
	let { mediaVolume: e } = (0, b.useContext)(ol), { setMediaVolume: t } = (0, b.useContext)(sl);
	return (0, b.useMemo)(() => [e, t], [e, t]);
}, ll = () => {
	let { playerMuted: e } = (0, b.useContext)(ol), { setPlayerMuted: t } = (0, b.useContext)(sl);
	return (0, b.useMemo)(() => [e, t], [e, t]);
}, ul = (e) => {
	if (e >= 100) throw Error(`Volume was set to ${e}, but regular volume is 1, not 100. Did you forget to divide by 100? Set a volume of less than 100 to dismiss this error.`);
}, dl = ({ muted: e, playerMuted: t, volume: n, isInsideFreeze: r, audioEnabled: i }) => {
	let a = e || r, o = a || t || n !== null && n <= 0;
	return {
		isMutedForTimeline: a,
		isMutedForPlayback: o,
		shouldUseAudio: i && !o
	};
}, fl = ({ muted: e, volume: t, audioEnabled: n }) => {
	let [r] = ll();
	return dl({
		muted: e,
		playerMuted: r,
		volume: t,
		isInsideFreeze: kn(),
		audioEnabled: n
	});
}, pl = (0, b.forwardRef)((e, t) => {
	let [n] = (0, b.useState)(e.shouldPreMountAudioTags);
	if (e.shouldPreMountAudioTags !== n) throw Error("Cannot change the behavior for pre-mounting audio tags dynamically.");
	let r = Ut(), { volume: i, muted: a, playbackRate: o, preservePitch: s, shouldPreMountAudioTags: c, src: l, onDuration: u, acceptableTimeShiftInSeconds: d, _remotionInternalNeedsDurationCalculation: f, _remotionInternalNativeLoopPassed: p, _remotionInternalStack: m, allowAmplificationDuringRender: h, name: g, pauseWhenBuffering: _, showInTimeline: v, loopVolumeCurveBehavior: y, crossOrigin: x, delayRenderRetries: C, delayRenderTimeoutInMilliseconds: w, toneFrequency: T, useWebAudioApi: E, onError: D, onNativeError: O, audioStreamIndex: k, ...A } = e, [j] = cl(), M = Fc(y ?? "repeat");
	if (!l) throw TypeError("No 'src' was passed to <Html5Audio>.");
	let N = Ws(l), P = (0, b.useContext)(Xe), { isStudio: F } = G(), [I] = (0, b.useState)(() => String(Math.random())), L = Rc({
		frame: M,
		volume: i,
		mediaVolume: j
	}), { isMutedForTimeline: ee, isMutedForPlayback: te } = fl({
		muted: a ?? !1,
		volume: L,
		audioEnabled: !0
	});
	ul(L);
	let ne = $s({
		crossOrigin: x,
		requestsVideoFrame: !1,
		isClientSideRendering: !1
	}), R = (0, b.useMemo)(() => ({
		muted: te,
		src: N,
		loop: p,
		crossOrigin: ne,
		...A
	}), [
		p,
		te,
		A,
		N,
		ne
	]), { el: re, mediaElementSourceNode: z, cleanupOnMediaTagUnmount: ie } = vc({
		aud: R,
		audioId: (0, b.useMemo)(() => `audio-${nc(l ?? "")}-${P?.relativeFrom}-${P?.cumulatedFrom}-${P?.durationInFrames}-muted:${e.muted}-loop:${e.loop}`, [
			l,
			P?.relativeFrom,
			P?.cumulatedFrom,
			P?.durationInFrames,
			e.muted,
			e.loop
		]),
		premounting: !!P?.premounting,
		postmounting: !!P?.postmounting
	}), ae = (0, b.useCallback)(() => m ?? null, [m]);
	Bc({
		volume: i,
		mediaVolume: j,
		src: l,
		mediaType: "audio",
		playbackRate: o ?? 1,
		displayName: g ?? null,
		id: I,
		getStack: ae,
		showInTimeline: v,
		premountDisplay: P?.premountDisplay ?? null,
		postmountDisplay: P?.postmountDisplay ?? null,
		loopDisplay: void 0,
		loopVolumeCurveBehavior: y ?? "repeat",
		documentationLink: "https://www.remotion.dev/docs/html5-audio",
		muted: ee
	}), il({
		mediaRef: re,
		src: l,
		mediaType: "audio",
		playbackRate: o ?? 1,
		preservePitch: s,
		onlyWarnForMediaSeekingError: !1,
		acceptableTimeshift: d ?? null,
		isPremounting: !!P?.premounting,
		isPostmounting: !!P?.postmounting,
		pauseWhenBuffering: _,
		onAutoPlayError: null
	}), al({
		id: I,
		isPostmounting: !!P?.postmounting,
		isPremounting: !!P?.premounting,
		mediaRef: re,
		mediaType: "audio",
		onAutoPlayError: null
	}), Mc({
		logLevel: r,
		mediaRef: re,
		source: z,
		volume: L,
		shouldUseWebAudioApi: E ?? !1
	}), (b.useInsertionEffect ?? b.useLayoutEffect)(() => () => {
		requestAnimationFrame(() => {
			ie();
		});
	}, [ie]), (0, b.useImperativeHandle)(t, () => re.current, [re]);
	let oe = (0, b.useRef)(u);
	if (oe.current = u, (0, b.useEffect)(() => {
		let { current: e } = re;
		if (!e) return;
		if (e.duration) {
			oe.current?.(e.src, e.duration);
			return;
		}
		let t = () => {
			oe.current?.(e.src, e.duration);
		};
		return e.addEventListener("loadedmetadata", t), () => {
			e.removeEventListener("loadedmetadata", t);
		};
	}, [re, l]), n) return F ? /* @__PURE__ */ (0, S.jsx)(me, {
		sequenceId: I,
		outlineChildrenRef: null,
		children: null
	}) : null;
	let se = /* @__PURE__ */ (0, S.jsx)("audio", {
		ref: re,
		preload: "metadata",
		crossOrigin: ne,
		...R
	});
	return F ? /* @__PURE__ */ (0, S.jsx)(me, {
		sequenceId: I,
		outlineChildrenRef: null,
		children: se
	}) : se;
}), ml = (0, b.createContext)(null), hl = () => {
	let e = (0, b.useContext)(ml);
	return !e || e.videoEnabled === null ? window.remotion_videoEnabled : e.videoEnabled;
}, gl = () => {
	let e = (0, b.useContext)(ml);
	return !e || e.audioEnabled === null ? window.remotion_audioEnabled : e.audioEnabled;
}, _l = ({ children: e, videoEnabled: t, audioEnabled: n }) => {
	let r = (0, b.useMemo)(() => ({
		videoEnabled: t,
		audioEnabled: n
	}), [t, n]);
	return /* @__PURE__ */ (0, S.jsx)(ml.Provider, {
		value: r,
		children: e
	});
}, vl = (0, b.forwardRef)((e, t) => {
	let n = (0, b.useRef)(null), { volume: r, playbackRate: i, allowAmplificationDuringRender: a, onDuration: o, toneFrequency: s, _remotionInternalNeedsDurationCalculation: c, _remotionInternalNativeLoopPassed: l, acceptableTimeShiftInSeconds: u, name: d, onNativeError: f, delayRenderRetries: p, delayRenderTimeoutInMilliseconds: m, loopVolumeCurveBehavior: h, pauseWhenBuffering: g, audioStreamIndex: _, preservePitch: v, ...y } = e, x = On(), C = Fc(h ?? "repeat"), w = Nn(), T = (0, b.useContext)(Xe), E = T?.playbackRate ?? 1, D = (0, b.useContext)(Nc), { registerRenderAsset: O, unregisterRenderAsset: k } = (0, b.useContext)(ks), { delayRender: A, continueRender: j } = Kt(), M = (0, b.useMemo)(() => `audio-${nc(e.src ?? "")}-${T?.relativeFrom}-${T?.cumulatedFrom}-${T?.durationInFrames}`, [
		e.src,
		T?.relativeFrom,
		T?.cumulatedFrom,
		T?.durationInFrames
	]), N = Rc({
		volume: r,
		frame: C,
		mediaVolume: 1
	});
	ul(N);
	let P = gl(), { shouldUseAudio: F } = fl({
		muted: e.muted ?? !1,
		volume: N,
		audioEnabled: P
	});
	(0, b.useImperativeHandle)(t, () => n.current, []), (0, b.useEffect)(() => {
		if (!e.src) throw Error("No src passed");
		if (F) return O({
			type: "audio",
			src: js(e.src),
			id: M,
			frame: x,
			volume: N,
			mediaFrame: D + (w - D) / E,
			playbackRate: (e.playbackRate ?? 1) * E,
			toneFrequency: s ?? 1,
			audioStartFrame: D,
			audioStreamIndex: _ ?? 0
		}), () => k(M);
	}, [
		F,
		e.src,
		O,
		x,
		M,
		k,
		N,
		C,
		w,
		i,
		e.playbackRate,
		s,
		D,
		E,
		_
	]);
	let { src: I } = e, L = t || c;
	return (0, b.useLayoutEffect)(() => {
		if (window.process?.env?.NODE_ENV === "test" || !L) return;
		let e = A("Loading <Html5Audio> duration with src=" + I, {
			retries: p ?? void 0,
			timeoutInMilliseconds: m ?? void 0
		}), { current: t } = n, r = () => {
			t?.duration && o(t.src, t.duration), j(e);
		};
		return t?.duration ? (o(t.src, t.duration), j(e)) : t?.addEventListener("loadedmetadata", r, { once: !0 }), () => {
			t?.removeEventListener("loadedmetadata", r), j(e);
		};
	}, [
		I,
		o,
		L,
		p,
		m,
		j,
		A
	]), L ? /* @__PURE__ */ (0, S.jsx)("audio", {
		ref: n,
		...y,
		onError: f
	}) : null;
}), yl = (0, b.forwardRef)((e, t) => {
	let n = (0, b.useContext)(mc), r = e, { startFrom: i, endAt: a, trimBefore: o, trimAfter: s, durationInFrames: c, name: l, _remotionInternalStack: u, pauseWhenBuffering: d, showInTimeline: f, onError: p, freeze: m, ...h } = r, { loop: g, freeze: _, ...v } = r, { fps: y } = Pn(), x = G(), C = oi(d);
	if (x.isClientSideRendering) throw Error("<Html5Audio> is not supported in @remotion/web-renderer. Use <Audio> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
	if (m !== void 0) throw TypeError("The \"freeze\" prop is not supported on <Html5Audio />. Use <Sequence freeze={...}> to freeze media playback.");
	let { durations: w, setDurations: T } = (0, b.useContext)(Zs);
	if (typeof e.src != "string") throw TypeError(`The \`<Html5Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(e.src)} instead.`);
	let E = Ws(e.src), D = (0, b.useCallback)((e) => {
		console.log(e.currentTarget.error);
		let t = `Could not play audio with src ${E}: ${e.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;
		if (g) {
			if (p) {
				p(Error(t));
				return;
			}
			At(Error(t));
		} else p?.(Error(t)), console.warn(t);
	}, [
		g,
		p,
		E
	]), O = (0, b.useCallback)((e, t) => {
		T({
			type: "got-duration",
			durationInSeconds: t,
			src: e
		});
	}, [T]), k = w[js(E)] ?? w[js(e.src)];
	Js({
		startFrom: i,
		endAt: a,
		trimBefore: o,
		trimAfter: s
	}), c !== void 0 && st(c, {
		component: "of the <Html5Audio /> component",
		allowFloats: !0
	});
	let { trimBeforeValue: A, trimAfterValue: j } = Ys({
		startFrom: i,
		endAt: a,
		trimBefore: o,
		trimAfter: s
	}), M = Ns({
		durationInFrames: c,
		trimAfter: j,
		trimBefore: A
	}), N = M ?? (k === void 0 ? void 0 : k * y);
	return g && N !== void 0 ? Number.isFinite(N) ? /* @__PURE__ */ (0, S.jsx)(Is, {
		layout: "none",
		durationInFrames: Ms({
			trimAfter: M,
			mediaDurationInFrames: N,
			playbackRate: e.playbackRate ?? 1,
			trimBefore: A
		}),
		children: /* @__PURE__ */ (0, S.jsx)(yl, {
			...v,
			ref: t,
			_remotionInternalNativeLoopPassed: !0
		})
	}) : /* @__PURE__ */ (0, S.jsx)(yl, {
		...v,
		ref: t,
		_remotionInternalNativeLoopPassed: !0
	}) : A !== void 0 || M !== void 0 ? /* @__PURE__ */ (0, S.jsx)(Nc.Provider, {
		value: A ?? 0,
		children: /* @__PURE__ */ (0, S.jsx)(Wo, {
			layout: "none",
			from: 0 - (A ?? 0),
			showInTimeline: !1,
			durationInFrames: M === void 0 ? void 0 : (A ?? 0) + (M - (A ?? 0)) / (e.playbackRate ?? 1),
			name: l,
			children: /* @__PURE__ */ (0, S.jsx)(yl, {
				_remotionInternalNeedsDurationCalculation: !!g,
				pauseWhenBuffering: C,
				...h,
				ref: t
			})
		})
	}) : (Gs({
		playbackRate: e.playbackRate,
		preservePitch: e.preservePitch,
		volume: e.volume
	}, "Html5Audio"), x.isRendering ? /* @__PURE__ */ (0, S.jsx)(vl, {
		onDuration: O,
		...e,
		ref: t,
		onNativeError: D,
		_remotionInternalNeedsDurationCalculation: !!g
	}) : /* @__PURE__ */ (0, S.jsx)(pl, {
		_remotionInternalNativeLoopPassed: e._remotionInternalNativeLoopPassed ?? !1,
		_remotionInternalStack: u ?? null,
		shouldPreMountAudioTags: n !== null && n.numberOfAudioTags > 0,
		...e,
		ref: t,
		onNativeError: D,
		onDuration: O,
		pauseWhenBuffering: C,
		_remotionInternalNeedsDurationCalculation: !!g,
		showInTimeline: f ?? !0
	}));
});
z(yl);
var bl = (e) => {
	if (e === void 0) return 1;
	if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw Error(`<Solid>: \`pixelDensity\` must be a positive finite number. Received: ${String(e)}.`);
	return e;
}, xl = {
	...dr,
	...Yn,
	color: {
		type: "color",
		default: "transparent",
		description: "Color"
	},
	width: {
		type: "number",
		min: 1,
		step: 1,
		default: 1920,
		description: "Width",
		hiddenFromList: !1
	},
	height: {
		type: "number",
		min: 1,
		step: 1,
		default: 1080,
		description: "Height",
		hiddenFromList: !1
	},
	pixelDensity: {
		type: "number",
		min: 1,
		max: 3,
		step: .1,
		default: 1,
		description: "Pixel density",
		hiddenFromList: !1
	},
	...Bn,
	...Gn,
	...Un,
	...Wn,
	...Zn
}, Sl = ({ color: e, width: t, height: n, effects: r = [], className: i, style: a, pixelDensity: o, overrideId: s, reference: c }) => {
	let { delayRender: l, continueRender: u, cancelRender: d } = Kt(), f = bl(o), p = Math.ceil(t * f), m = Math.ceil(n * f), [h, g] = (0, b.useState)(null), _ = go({
		effects: r,
		overrideId: s ?? null
	}), v = (0, b.useMemo)(() => {
		if (typeof document > "u") return null;
		let e = document.createElement("canvas");
		return e.width = 1, e.height = 1, e;
	}, []), y = cs(), x = (0, b.useCallback)((e) => {
		g(e), typeof c == "function" ? c(e) : c && (c.current = e);
	}, [c]);
	(0, b.useEffect)(() => {
		if (!h || !v) return;
		let t = l("Solid effect chain");
		if (!y) return u(t), () => {
			u(t);
		};
		let n = v.getContext("2d", { colorSpace: "srgb" });
		if (!n) {
			d(/* @__PURE__ */ Error("Failed to acquire 2D context for <Solid> source"));
			return;
		}
		return n.clearRect(0, 0, 1, 1), e !== void 0 && (n.fillStyle = e, n.fillRect(0, 0, 1, 1)), ss({
			state: y.get(p, m),
			source: v,
			effects: _,
			output: h,
			width: p,
			height: m
		}).then((e) => {
			e && u(t);
		}).catch((e) => {
			d(e);
		}), () => {
			u(t);
		};
	}, [
		e,
		h,
		v,
		y,
		p,
		m,
		l,
		u,
		d,
		_
	]);
	let C = (0, b.useMemo)(() => ({
		width: t,
		height: n,
		...a ?? {}
	}), [
		n,
		a,
		t
	]);
	return /* @__PURE__ */ (0, S.jsx)("canvas", {
		ref: x,
		width: p,
		height: m,
		className: i,
		style: C
	});
}, Cl = Lo({
	Component: (0, b.forwardRef)(({ effects: e = [], controls: t, color: n, height: r, width: i, className: a, durationInFrames: o, style: s, name: c, from: l, premountFor: u, postmountFor: d, styleWhilePremounted: f, styleWhilePostmounted: p, trimBefore: m, playbackRate: h, loop: g, freeze: _, hidden: v, showInTimeline: y, pixelDensity: x, cropLeft: C, cropRight: w, cropTop: T, cropBottom: E, ...D }, O) => {
		let k = po(e), A = (0, b.useRef)(null);
		(0, b.useImperativeHandle)(O, () => A.current, []);
		let { effectivePremountFor: j, effectivePostmountFor: M, freezeFrame: N, isPremountingOrPostmounting: P, premountingActive: F, postmountingActive: I, premountingStyle: L } = si({
			from: l ?? 0,
			durationInFrames: vr({
				durationInFrames: o,
				playbackRate: h,
				loop: g
			}),
			premountFor: u ?? null,
			postmountFor: d ?? null,
			style: s ?? null,
			styleWhilePremounted: f ?? null,
			styleWhilePostmounted: p ?? null,
			hideWhilePremounted: "opacity"
		}), ee = Jo({
			cropLeft: C,
			cropRight: w,
			cropTop: T,
			cropBottom: E,
			style: L,
			componentName: "<Solid />"
		});
		return /* @__PURE__ */ (0, S.jsx)(Ln, {
			frame: N,
			active: P,
			_remotionInternalIsPremounting: F,
			children: /* @__PURE__ */ (0, S.jsx)(Wo, {
				layout: "none",
				from: l,
				trimBefore: m,
				playbackRate: h,
				loop: g,
				freeze: _,
				hidden: v,
				showInTimeline: y,
				controls: t,
				_remotionInternalEffects: k,
				durationInFrames: o,
				name: c ?? "<Solid>",
				_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/solid",
				...D,
				_remotionInternalPremountDisplay: j || null,
				_remotionInternalPostmountDisplay: M || null,
				_remotionInternalIsPremounting: F,
				_remotionInternalIsPostmounting: I,
				children: /* @__PURE__ */ (0, S.jsx)(Sl, {
					reference: A,
					overrideId: t?.overrideId ?? null,
					color: n,
					height: r,
					width: i,
					className: a,
					style: ee ?? void 0,
					effects: e,
					pixelDensity: x
				})
			})
		});
	}),
	componentName: "<Solid>",
	componentIdentity: "dev.remotion.remotion.Solid",
	schema: xl,
	supportsEffects: !0
});
Cl.displayName = "Solid", z(Cl);
var wl = /* @__PURE__ */ new WeakMap(), Tl = (e) => {
	let t = wl.get(e);
	if (t) return t;
	let n = e.transferControlToOffscreen();
	return wl.set(e, n), n;
}, El = null, Dl = () => {
	if (El !== null) return El;
	if (typeof document > "u") return !1;
	let e = document.createElement("canvas");
	return El = typeof e.getContext("2d")?.drawElementImage == "function" && typeof e.requestPaint == "function" && typeof e.captureElementImage == "function" && "transferControlToOffscreen" in HTMLCanvasElement.prototype, El;
}, Ol = 157, kl = () => {
	if (!Dl() || typeof navigator > "u") return !1;
	let e = navigator.userAgent.match(/(?:Chrome|Chromium)\/(\d+)/)?.[1];
	return e !== void 0 && Number(e) >= Ol;
}, Al = "HTML in Canvas requires Chrome 149 or newer with Canvas Draw Element enabled at chrome://flags/#canvas-draw-element.", jl = () => {
	if (typeof document > "u") return `HTML in Canvas is unavailable because there is no browser document. ${Al}`;
	let e = typeof navigator > "u" ? "" : navigator.userAgent, t = e.match(/(?:Chrome|Chromium)\/(\d+)/)?.[1], n = "this browser";
	return e.includes("Edg/") ? n = "Microsoft Edge" : e.includes("Chromium/") ? n = "Chromium" : t ? n = "Chrome" : e.includes("Firefox/") ? n = "Firefox" : e.includes("Safari/") && (n = "Safari"), t && Number(t) >= 149 ? `HTML in Canvas is unavailable. Enable Canvas Draw Element at ${n === "Microsoft Edge" ? "edge://flags/#canvas-draw-element" : "chrome://flags/#canvas-draw-element"} and fully restart ${n}.` : t ? `HTML in Canvas is not supported in ${n} ${t}. Use a Chromium-based browser running version 149 or newer.` : `HTML in Canvas is not supported in ${n}. Use Chrome 149 or newer.`;
};
function Ml(e, t) {
	if (typeof e != "number" || typeof t != "number") throw Error(`HtmlInCanvas: \`width\` and \`height\` must be numbers. Received width=${String(e)}, height=${String(t)}.`);
	if (!Number.isInteger(e) || e <= 0) throw Error(`HtmlInCanvas: \`width\` must be a positive integer. Received: ${String(e)}.`);
	if (!Number.isInteger(t) || t <= 0) throw Error(`HtmlInCanvas: \`height\` must be a positive integer. Received: ${String(t)}.`);
}
function Nl(e) {
	if (e === void 0) return 1;
	if (typeof e != "number" || !Number.isFinite(e) || e <= 0) throw Error(`HtmlInCanvas: \`pixelDensity\` must be a positive finite number. Received: ${String(e)}.`);
	return e;
}
var Pl = (e) => e instanceof DOMException && e.name === "InvalidStateError", Fl = "HtmlInCanvas: Expected the element to be inside the viewport during rendering, but Chrome had no cached paint record for it.", Il = ({ target: e, width: t, height: n }) => {
	e.width !== t && (e.width = t), e.height !== n && (e.height = n);
}, Ll = ({ canvas: e, elementImage: t }) => {
	let n = e.getContext("2d");
	if (!n) throw Error("Failed to acquire 2D context for <HtmlInCanvas> canvas");
	n.reset(), n.drawElementImage(t, 0, 0);
}, Rl = (0, b.createContext)(!1), zl = (0, b.forwardRef)(({ width: e, height: t, effects: n, children: r, canvasSiblings: i, onPaint: a, onInit: o, pixelDensity: s, controls: c, style: l }, u) => {
	let d = (0, b.useContext)(Rl);
	if (Ml(e, t), d && !kl()) throw Error(`Nested <HtmlInCanvas> components require Chrome ${Ol} or newer with HTML-in-canvas enabled.`);
	let f = Nl(s), p = Math.ceil(e * f), m = Math.ceil(t * f), { delayRender: h, continueRender: g, cancelRender: _ } = Kt(), { isClientSideRendering: v, isRendering: y } = G(), x = !y || v, C = a === void 0 && o === void 0;
	Dl() || _(Error(jl()));
	let w = (0, b.useRef)(null), T = (0, b.useRef)(null), E = (0, b.useRef)(null), D = `${e}x${t}@${f}-${C ? "direct" : "offscreen"}`, O = (0, b.useCallback)((e) => {
		w.current = e, typeof u == "function" ? u(e) : u && (u.current = e);
	}, [u]), k = cs(), A = go({
		effects: n,
		overrideId: c?.overrideId ?? null
	}), j = (0, b.useRef)(A);
	j.current = A;
	let M = (0, b.useRef)(a);
	M.current = a;
	let N = (0, b.useRef)(o);
	N.current = o;
	let P = (0, b.useRef)(!1), F = (0, b.useRef)(null), I = (0, b.useRef)(!1), L = (0, b.useCallback)(async () => {
		let e = E.current;
		if (!e) throw Error("Canvas or scene element not found");
		let t = T.current;
		if (!t) throw Error("HtmlInCanvas: paint target is not ready because the canvas is remounting");
		Il({
			target: t,
			width: p,
			height: m
		});
		try {
			let n = w.current;
			if (!n) throw Error("Canvas not found");
			let r = h("onPaint");
			if (!P.current) {
				let i = N.current;
				if (!i) P.current = !0;
				else {
					let a;
					try {
						a = n.captureElementImage(e);
					} catch (e) {
						if (Pl(e) && x) {
							g(r);
							return;
						}
						throw Pl(e) ? Error(Fl) : e;
					}
					P.current = !0;
					try {
						if (t instanceof HTMLCanvasElement) throw Error("HtmlInCanvas: onInit requires an OffscreenCanvas paint target");
						let n = await i({
							canvas: t,
							element: e,
							elementImage: a,
							pixelDensity: f
						});
						if (typeof n != "function") throw Error("HtmlInCanvas: when `onInit` is provided, it must return a cleanup function, or a Promise that resolves to one.");
						I.current ? n() : F.current = n;
					} finally {
						a.close();
					}
				}
			}
			let i;
			try {
				i = n.captureElementImage(e);
			} catch (e) {
				if (Pl(e) && x) {
					g(r);
					return;
				}
				throw Pl(e) ? Error(Fl) : e;
			}
			try {
				let n = M.current;
				if (n) {
					if (t instanceof HTMLCanvasElement) throw Error("HtmlInCanvas: onPaint requires an OffscreenCanvas paint target");
					let r = n({
						canvas: t,
						element: e,
						elementImage: i,
						pixelDensity: f
					});
					r && await r;
				} else Ll({
					canvas: t,
					element: e,
					elementImage: i,
					pixelDensity: f
				});
				let r = k.get(p, m);
				r && await ss({
					state: r,
					source: t,
					effects: j.current,
					output: t,
					width: p,
					height: m
				});
			} finally {
				i.close();
			}
			g(r);
		} catch (e) {
			_(e);
		}
	}, [
		m,
		p,
		k,
		g,
		_,
		h,
		f,
		x
	]);
	(0, b.useLayoutEffect)(() => {
		let e = w.current;
		if (!e) throw Error("Canvas not found");
		e.setAttribute("content", "drawable"), e.layoutSubtree = !0, E.current?.setAttribute("drawable", "");
		let t = C ? e : Tl(e);
		return T.current = t, Il({
			target: t,
			width: p,
			height: m
		}), P.current = !1, I.current = !1, e.addEventListener("paint", L), () => {
			e.removeEventListener("paint", L), T.current = null, P.current = !1, I.current = !0, F.current?.(), F.current = null;
		};
	}, [
		L,
		_,
		p,
		m,
		C
	]);
	let ee = (0, b.useRef)(!1);
	(0, b.useLayoutEffect)(() => {
		if (!ee.current) {
			ee.current = !0;
			return;
		}
		let e = w.current;
		e && e.requestPaint?.();
	}, [a, A]), (0, b.useLayoutEffect)(() => {
		let e = w.current;
		if (!e) return;
		let t = h("waiting for first paint after canvas resize");
		return e.addEventListener("paint", () => {
			g(t);
		}, { once: !0 }), () => {
			g(t);
		};
	}, [
		e,
		t,
		g,
		h,
		D
	]);
	let te = (0, b.useMemo)(() => ({
		width: e,
		height: t
	}), [e, t]), ne = (0, b.useMemo)(() => ({
		width: e,
		height: t,
		...l ?? {}
	}), [
		t,
		l,
		e
	]);
	return /* @__PURE__ */ (0, S.jsx)(Rl.Provider, {
		value: !0,
		children: /* @__PURE__ */ (0, S.jsxs)("canvas", {
			ref: O,
			width: p,
			height: m,
			style: ne,
			children: [/* @__PURE__ */ (0, S.jsx)("div", {
				ref: E,
				style: te,
				children: r
			}), i]
		}, D)
	});
});
zl.displayName = "HtmlInCanvasContent";
var Bl = (0, b.forwardRef)(({ width: e, height: t, effects: n = [], children: r, onPaint: i, onInit: a, pixelDensity: o, _remotionInternalCanvasSiblings: s, controls: c, style: l, cropLeft: u, cropRight: d, cropTop: f, cropBottom: p, durationInFrames: m, premountFor: h, postmountFor: g, styleWhilePremounted: _, styleWhilePostmounted: v, name: y, ...x }, C) => {
	let w = po(n), T = (0, b.useRef)(null), E = (0, b.useCallback)((e) => {
		T.current = e, typeof C == "function" ? C(e) : C && (C.current = e);
	}, [C]), { effectivePremountFor: D, effectivePostmountFor: O, freezeFrame: k, isPremountingOrPostmounting: A, premountingActive: j, postmountingActive: M, premountingStyle: N } = si({
		from: x.from ?? 0,
		durationInFrames: vr({
			durationInFrames: m,
			playbackRate: x.playbackRate,
			loop: x.loop
		}),
		premountFor: h ?? null,
		postmountFor: g ?? null,
		style: l ?? null,
		styleWhilePremounted: _ ?? null,
		styleWhilePostmounted: v ?? null,
		hideWhilePremounted: "opacity"
	}), P = Jo({
		cropLeft: u,
		cropRight: d,
		cropTop: f,
		cropBottom: p,
		style: N,
		componentName: "<HtmlInCanvas />"
	});
	return /* @__PURE__ */ (0, S.jsx)(Ln, {
		frame: k,
		active: A,
		_remotionInternalIsPremounting: j,
		children: /* @__PURE__ */ (0, S.jsx)(Wo, {
			layout: "none",
			durationInFrames: m,
			name: y ?? "<HtmlInCanvas>",
			_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/remotion/html-in-canvas",
			controls: c,
			_remotionInternalEffects: w,
			...x,
			_remotionInternalPremountDisplay: D || null,
			_remotionInternalPostmountDisplay: O || null,
			_remotionInternalIsPremounting: j,
			_remotionInternalIsPostmounting: M,
			children: /* @__PURE__ */ (0, S.jsx)(zl, {
				ref: E,
				width: e,
				height: t,
				effects: n,
				onPaint: i,
				onInit: a,
				pixelDensity: o,
				canvasSiblings: s ?? null,
				controls: c,
				style: P ?? void 0,
				children: r
			})
		})
	});
});
Bl.displayName = "HtmlInCanvas";
var Vl = Lo({
	Component: Bl,
	componentName: "<HtmlInCanvas>",
	componentIdentity: "dev.remotion.remotion.HtmlInCanvas",
	schema: {
		...dr,
		...Yn,
		pixelDensity: {
			type: "number",
			min: 1,
			max: 3,
			step: .1,
			default: 1,
			description: "Pixel density",
			hiddenFromList: !1
		},
		...Bn,
		...Gn,
		...Un,
		...Wn,
		...Zn
	},
	supportsEffects: !0
}), Hl = Object.assign(Vl, {
	isSupported: Dl,
	isNestingSupported: kl
});
Hl.displayName = "HtmlInCanvas", z(Hl);
function Ul(e) {
	return typeof e == "string" ? e.length > 100 && (e.startsWith("data:") || e.startsWith("blob:")) ? e.slice(0, 60) + "...[" + e.length + " chars total]" : e : String(e);
}
var Wl = {
	src: {
		type: "asset",
		assetType: "image",
		default: void 0,
		description: "Source",
		keyframable: !1
	},
	...fr,
	...Zn,
	...Yn,
	fit: {
		type: "enum",
		default: "fill",
		description: "Fit",
		variants: {
			fill: {},
			contain: {},
			cover: {}
		}
	},
	...Bn,
	...Gn,
	...Un,
	...Wn
}, Gl = () => {
	if (typeof DOMException < "u") return new DOMException("Image loading was aborted", "AbortError");
	let e = /* @__PURE__ */ Error("Image loading was aborted");
	return e.name = "AbortError", e;
}, Kl = ({ src: e, signal: t, crossOrigin: n }) => new Promise((r, i) => {
	let a = new Image(), o = !1;
	function s() {
		a.onload = null, a.onerror = null;
	}
	function c(e) {
		o || (o = !0, s(), e());
	}
	function l() {
		c(() => i(Gl()));
	}
	if (a.onload = () => {
		Promise.resolve(a.decode?.()).catch(() => {}).then(() => {
			let t = a.naturalWidth || a.width, n = a.naturalHeight || a.height;
			if (t <= 0 || n <= 0) {
				c(() => i(/* @__PURE__ */ Error(`Could not determine dimensions for <CanvasImage> with src="${Ul(e)}"`)));
				return;
			}
			c(() => r({
				element: a,
				width: t,
				height: n
			}));
		});
	}, a.onerror = () => {
		c(() => i(/* @__PURE__ */ Error(`Could not load <CanvasImage> with src="${Ul(e)}"`)));
	}, t.addEventListener("abort", l, { once: !0 }), t.aborted) {
		l();
		return;
	}
	a.crossOrigin = n ?? "anonymous", a.src = e;
});
function ql(e) {
	return 1e3 * 2 ** (e - 1);
}
var Jl = ({ onFrame: e }) => {
	if (typeof requestAnimationFrame > "u") return e(), () => {};
	let t = requestAnimationFrame(e);
	return () => cancelAnimationFrame(t);
}, Yl = (0, b.forwardRef)(({ src: e, crossOrigin: t, width: n, height: r, fit: i = "fill", effects: a, controls: o, onError: s, className: c, style: l, id: u, pauseWhenLoading: d, maxRetries: f = 2, delayRenderRetries: p, delayRenderTimeoutInMilliseconds: m, ...h }, g) => {
	let { delayRender: _, continueRender: v, cancelRender: y } = Kt(), { delayPlayback: x } = Wc(), [C, w] = (0, b.useState)(null), [T, E] = (0, b.useState)(null), D = Ws(e), O = cs(), k = go({
		effects: a,
		overrideId: o?.overrideId ?? null
	}), A = (0, b.useContext)(Xe), j = (0, b.useRef)(null), [M, N] = (0, b.useState)(!1), P = !!A?.premounting, F = !!A?.postmounting, I = (0, b.useCallback)(({ markAsReady: e }) => {
		let t = j.current;
		t && !t.continued && (t.continued = !0, e && N(!1), v(t.handle), j.current = null);
	}, [v]), L = (0, b.useMemo)(() => typeof document > "u" ? null : document.createElement("canvas"), []), ee = (0, b.useCallback)((e) => {
		w(e), typeof g == "function" ? g(e) : g && (g.current = e);
	}, [g]);
	return (0, b.useLayoutEffect)(() => {
		if (d && M && !P && !F) return x().unblock;
	}, [
		x,
		M,
		F,
		P,
		d
	]), (0, b.useLayoutEffect)(() => {
		let e = _(`Rendering <CanvasImage> with src="${Ul(D)}"`, {
			retries: p ?? void 0,
			timeoutInMilliseconds: m ?? void 0
		}), n = new AbortController(), r = !1, i = 0, a = null;
		E(null), N(!0), j.current = {
			handle: e,
			continued: !1
		};
		let o = () => {
			Kl({
				src: D,
				signal: n.signal,
				crossOrigin: t
			}).then((e) => {
				r || E(e);
			}).catch((e) => {
				if (e.name === "AbortError") {
					I({ markAsReady: !1 });
					return;
				}
				if (i++, i <= f) {
					let e = ql(i);
					console.warn(`Could not load <CanvasImage> with src="${Ul(D)}", retrying in ${e}ms`), a = setTimeout(() => {
						r || o();
					}, e);
				} else s ? (s(e), I({ markAsReady: !0 })) : y(e);
			});
		};
		return o(), () => {
			r = !0, a !== null && clearTimeout(a), n.abort(), I({ markAsReady: !1 });
		};
	}, [
		D,
		y,
		I,
		t,
		_,
		p,
		m,
		f,
		s
	]), (0, b.useLayoutEffect)(() => {
		if (!T || !C || !L) return;
		let e = _(`Applying effects to <CanvasImage> with src="${Ul(D)}"`), t = !1, a = !1, o = () => {}, c = () => {
			a || (a = !0, v(e));
		}, l = n ?? T.width, u = r ?? T.height, d = L.getContext("2d", { colorSpace: "srgb" });
		return d ? (L.width = l, L.height = u, C.width = l, C.height = u, d.clearRect(0, 0, l, u), d.drawImage(T.element, ...Yo(i, {
			width: T.width,
			height: T.height
		}, {
			width: l,
			height: u
		})), ss({
			state: O.get(l, u),
			source: L,
			effects: k,
			output: C,
			width: l,
			height: u
		}).then((e) => {
			e && !t && (o = Jl({ onFrame: () => {
				t || (c(), I({ markAsReady: !0 }));
			} }));
		}).catch((e) => {
			t || (s ? (s(e), c(), I({ markAsReady: !0 })) : y(e));
		}), () => {
			t = !0, o(), c();
		}) : (y(/* @__PURE__ */ Error("Could not get 2D context for <CanvasImage> source canvas")), c(), () => {
			c();
		});
	}, [
		D,
		y,
		O,
		v,
		I,
		_,
		i,
		r,
		T,
		k,
		s,
		C,
		L,
		n
	]), /* @__PURE__ */ (0, S.jsx)("canvas", {
		...h,
		ref: ee,
		width: n,
		height: r,
		className: c,
		style: l,
		id: u
	});
});
Yl.displayName = "CanvasImageContent";
var Xl = Lo({
	Component: (0, b.forwardRef)(({ src: e, crossOrigin: t, width: n, height: r, fit: i, effects: a = [], className: o, style: s, id: c, onError: l, pauseWhenLoading: u, maxRetries: d, delayRenderRetries: f, delayRenderTimeoutInMilliseconds: p, durationInFrames: m, from: h, trimBefore: g, loop: _, freeze: v, premountFor: y, postmountFor: x, styleWhilePremounted: C, styleWhilePostmounted: w, hidden: T, name: E, showInTimeline: D, cropLeft: O, cropRight: k, cropTop: A, cropBottom: j, controls: M, _remotionInternalDocumentationLink: N, _remotionInternalCropComponentName: P, ...F }, I) => {
		if (!e) throw Error("No \"src\" prop was passed to <CanvasImage>.");
		let L = (0, b.useMemo)(() => ({
			type: "image",
			src: e
		}), [e]), ee = po(a), te = (0, b.useRef)(null);
		(0, b.useImperativeHandle)(I, () => te.current, []);
		let { effectivePostmountFor: ne, effectivePremountFor: R, freezeFrame: re, isPremountingOrPostmounting: z, postmountingActive: ie, premountingActive: ae, premountingStyle: oe } = si({
			from: h ?? 0,
			durationInFrames: vr({
				durationInFrames: m,
				playbackRate: void 0,
				loop: _
			}),
			premountFor: y ?? null,
			postmountFor: x ?? null,
			style: s ?? null,
			styleWhilePremounted: C ?? null,
			styleWhilePostmounted: w ?? null,
			hideWhilePremounted: "display-none"
		}), se = Jo({
			cropLeft: O,
			cropRight: k,
			cropTop: A,
			cropBottom: j,
			style: oe,
			componentName: P ?? "<CanvasImage />"
		});
		return /* @__PURE__ */ (0, S.jsx)(Ln, {
			frame: re,
			active: z,
			_remotionInternalIsPremounting: ae,
			children: /* @__PURE__ */ (0, S.jsx)(Wo, {
				layout: "none",
				from: h ?? 0,
				trimBefore: g,
				loop: _,
				durationInFrames: m,
				freeze: v,
				hidden: T,
				showInTimeline: D ?? !0,
				name: E ?? "<CanvasImage>",
				_remotionInternalDocumentationLink: N ?? "https://www.remotion.dev/docs/canvasimage",
				controls: M,
				_remotionInternalEffects: ee,
				_remotionInternalIsMedia: L,
				_remotionInternalPremountDisplay: R || null,
				_remotionInternalPostmountDisplay: ne || null,
				_remotionInternalIsPremounting: ae,
				_remotionInternalIsPostmounting: ie,
				children: /* @__PURE__ */ (0, S.jsx)(Yl, {
					ref: te,
					src: e,
					crossOrigin: t,
					width: n,
					height: r,
					fit: i,
					effects: a,
					controls: M,
					className: o,
					style: se ?? void 0,
					id: c,
					onError: l,
					pauseWhenLoading: u,
					maxRetries: d,
					delayRenderRetries: f,
					delayRenderTimeoutInMilliseconds: p,
					...F
				})
			})
		});
	}),
	componentName: "<CanvasImage>",
	componentIdentity: "dev.remotion.remotion.CanvasImage",
	schema: Wl,
	supportsEffects: !0
});
Xl.displayName = "CanvasImage", z(Xl), (0, b.forwardRef)(({ onLoad: e, onError: t, delayRenderRetries: n, delayRenderTimeoutInMilliseconds: r, ...i }, a) => {
	let { delayRender: o, continueRender: s } = Kt(), [c] = (0, b.useState)(() => o(`Loading <IFrame> with source ${i.src}`, {
		retries: n ?? void 0,
		timeoutInMilliseconds: r ?? void 0
	})), l = (0, b.useCallback)((t) => {
		s(c), e?.(t);
	}, [
		c,
		e,
		s
	]), u = (0, b.useCallback)((e) => {
		s(c), t ? t(e) : console.error("Error loading iframe:", e, "Handle the event using the onError() prop to make this message disappear.");
	}, [
		c,
		t,
		s
	]);
	return /* @__PURE__ */ (0, S.jsx)("iframe", {
		referrerPolicy: "strict-origin-when-cross-origin",
		...i,
		ref: a,
		onError: u,
		onLoad: l
	});
});
function Zl(e) {
	return 1e3 * 2 ** (e - 1);
}
var Ql = ({ onError: e, onImageError: t, maxRetries: n = 2, src: r, pauseWhenLoading: i, delayRenderRetries: a, delayRenderTimeoutInMilliseconds: o, onImageFrame: s, crossOrigin: c, decoding: l, ref: u, ...d }) => {
	let f = (0, b.useRef)(null), p = (0, b.useRef)({}), { delayPlayback: m } = Wc(), h = (0, b.useContext)(Xe), [g, _] = (0, b.useState)(!1), v = (0, b.useCallback)((e) => {
		f.current = e, typeof u == "function" ? u(e) : u && (u.current = e);
	}, [u]), y = Ws(r), x = (0, b.useCallback)((e) => {
		if (!f.current) return;
		let t = f.current.src;
		setTimeout(() => {
			if (!f.current) return;
			let e = f.current?.src;
			e === t && (f.current.removeAttribute("src"), f.current.setAttribute("src", e));
		}, e);
	}, []), { delayRender: C, continueRender: w, cancelRender: T } = Kt(), E = !!h?.premounting, D = !!h?.postmounting, O = (0, b.useCallback)((r) => {
		if (p.current) {
			if (p.current[f.current?.src] = (p.current[f.current?.src] ?? 0) + 1, (e || t) && (p.current[f.current?.src] ?? 0) > n) {
				e?.(r), t?.(/* @__PURE__ */ Error("Error loading image with src: " + Ul(f.current?.src)));
				return;
			}
			if ((p.current[f.current?.src] ?? 0) <= n) {
				let e = Zl(p.current[f.current?.src] ?? 0);
				console.warn(`Could not load image with source ${Ul(f.current?.src)}, retrying again in ${e}ms`), x(e);
				return;
			}
			try {
				T("Error loading image with src: " + Ul(f.current?.src));
			} catch {}
		}
	}, [
		T,
		n,
		e,
		t,
		x
	]);
	typeof window < "u" && ((0, b.useLayoutEffect)(() => {
		if (i && g && !E && !D) return m().unblock;
	}, [
		m,
		g,
		D,
		E,
		i
	]), (0, b.useLayoutEffect)(() => {
		if (window.process?.env?.NODE_ENV === "test") {
			f.current && (f.current.src = y);
			return;
		}
		let { current: e } = f;
		if (!e) return;
		_(!0);
		let t = C("Loading <Img> with src=" + Ul(y), {
			retries: a ?? void 0,
			timeoutInMilliseconds: o ?? void 0
		}), n = !1, r = () => {
			if (n) {
				w(t);
				return;
			}
			(p.current[f.current?.src] ?? 0) > 0 && (delete p.current[f.current?.src], console.info(`Retry successful - ${Ul(f.current?.src)} is now loaded`)), e && s?.(e), _(!1), w(t);
		};
		if (!f.current) {
			r();
			return;
		}
		return e.src = y, e.decode().then(r).catch((t) => {
			console.warn(t), e.complete && e.naturalWidth > 0 && e.naturalHeight > 0 ? r() : e.addEventListener("load", r);
		}), () => {
			n = !0, e.removeEventListener("load", r), w(t);
		};
	}, [
		y,
		a,
		o,
		s,
		w,
		C
	]));
	let { isClientSideRendering: k, isRendering: A } = G(), j = $s({
		crossOrigin: c,
		requestsVideoFrame: !1,
		isClientSideRendering: k
	});
	return /* @__PURE__ */ (0, S.jsx)("img", {
		...d,
		ref: v,
		crossOrigin: j,
		onError: O,
		decoding: A ? "sync" : l
	});
}, $l = ({ hidden: e, name: t, showInTimeline: n, src: r, from: i, trimBefore: a, loop: o, durationInFrames: s, freeze: c, premountFor: l, postmountFor: u, style: d, styleWhilePremounted: f, styleWhilePostmounted: p, cropLeft: m, cropRight: h, cropTop: g, cropBottom: _, controls: v, ...y }) => {
	if (!r) throw Error("No \"src\" prop was passed to <Img>.");
	let x = (0, b.useMemo)(() => ({
		type: "image",
		src: r
	}), [r]), { effectivePostmountFor: C, effectivePremountFor: w, freezeFrame: T, isPremountingOrPostmounting: E, postmountingActive: D, premountingActive: O, premountingStyle: k } = si({
		from: i ?? 0,
		durationInFrames: vr({
			durationInFrames: s,
			playbackRate: void 0,
			loop: o
		}),
		premountFor: l ?? null,
		postmountFor: u ?? null,
		style: d ?? null,
		styleWhilePremounted: f ?? null,
		styleWhilePostmounted: p ?? null,
		hideWhilePremounted: "display-none"
	}), A = Jo({
		cropLeft: m,
		cropRight: h,
		cropTop: g,
		cropBottom: _,
		style: k,
		componentName: "<Img />"
	});
	return /* @__PURE__ */ (0, S.jsx)(Ln, {
		frame: T,
		active: E,
		_remotionInternalIsPremounting: O,
		children: /* @__PURE__ */ (0, S.jsx)(Wo, {
			layout: "none",
			from: i ?? 0,
			trimBefore: a,
			loop: o,
			durationInFrames: s,
			freeze: c,
			_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/img",
			_remotionInternalIsMedia: x,
			_remotionInternalPremountDisplay: w || null,
			_remotionInternalPostmountDisplay: C || null,
			_remotionInternalIsPremounting: O,
			_remotionInternalIsPostmounting: D,
			name: t ?? "<Img>",
			controls: v,
			showInTimeline: n ?? !0,
			hidden: e,
			children: /* @__PURE__ */ (0, S.jsx)(Ql, {
				src: r,
				style: A ?? void 0,
				...y
			})
		})
	});
}, eu = Xl, tu = {
	src: {
		type: "asset",
		assetType: "image",
		default: void 0,
		description: "Source",
		keyframable: !1
	},
	...fr,
	...Zn,
	...Yn,
	...Bn,
	...Gn,
	...Un,
	...Wn
}, nu = /* @__PURE__ */ new Set([
	"alt",
	"decoding",
	"fetchPriority",
	"loading",
	"onError",
	"onImageFrame",
	"onLoad",
	"sizes",
	"srcSet",
	"useMap"
]), ru = (e) => Object.keys(e).filter((t) => e[t] !== void 0 && nu.has(t)), iu = (e) => e.map((e) => `"${e}"`).join(", "), au = ({ props: e, ref: t, width: n, height: r }) => {
	if (typeof n == "string" || typeof r == "string") throw Error("The \"width\" and \"height\" props must be numbers on <Img> when effects are passed, because <Img> renders a <CanvasImage>. Use numeric props or CSS dimensions in \"style\".");
	let i = ru(e);
	if (t != null && i.unshift("ref"), i.length !== 0) throw Error(`The ${iu(i)} prop${i.length === 1 ? "" : "s"} cannot be used on <Img> when effects are passed, because <Img> renders a <canvas> instead of a native <img>. Remove ${i.length === 1 ? "this prop" : "these props"}.`);
}, ou = (e) => {
	let t = e?.objectFit;
	if (t === "fill" || t === "contain" || t === "cover") return t;
}, su = Lo({
	Component: ({ effects: e = [], ref: t, hidden: n, name: r, showInTimeline: i, src: a, from: o, trimBefore: s, durationInFrames: c, freeze: l, premountFor: u, postmountFor: d, styleWhilePremounted: f, styleWhilePostmounted: p, controls: m, width: h, height: g, className: _, style: v, cropLeft: y, cropRight: b, cropTop: x, cropBottom: C, id: w, pauseWhenLoading: T, maxRetries: E, delayRenderRetries: D, delayRenderTimeoutInMilliseconds: O, onImageError: k, ...A }) => {
		let j = oi(T);
		if (e.length === 0) return /* @__PURE__ */ (0, S.jsx)($l, {
			...A,
			ref: t,
			hidden: n,
			name: r,
			showInTimeline: i,
			src: a,
			from: o,
			trimBefore: s,
			durationInFrames: c,
			freeze: l,
			premountFor: u,
			postmountFor: d,
			styleWhilePremounted: f,
			styleWhilePostmounted: p,
			controls: m,
			width: h,
			height: g,
			className: _,
			style: v,
			cropLeft: y,
			cropRight: b,
			cropTop: x,
			cropBottom: C,
			id: w,
			pauseWhenLoading: j,
			maxRetries: E,
			delayRenderRetries: D,
			delayRenderTimeoutInMilliseconds: O,
			onImageError: k
		});
		if (!a) throw Error("No \"src\" prop was passed to <Img>.");
		au({
			props: A,
			ref: t,
			width: h,
			height: g
		});
		let M = typeof h == "number" ? h : void 0, N = typeof g == "number" ? g : void 0, P = A, F = ou(v) ?? "fill";
		return /* @__PURE__ */ (0, S.jsx)(eu, {
			src: a,
			width: M,
			height: N,
			fit: F,
			effects: e,
			className: _,
			style: v,
			cropLeft: y,
			cropRight: b,
			cropTop: x,
			cropBottom: C,
			id: w,
			onError: k,
			pauseWhenLoading: j,
			maxRetries: E,
			delayRenderRetries: D,
			delayRenderTimeoutInMilliseconds: O,
			from: o,
			trimBefore: s,
			durationInFrames: c,
			freeze: l,
			premountFor: u,
			postmountFor: d,
			styleWhilePremounted: f,
			styleWhilePostmounted: p,
			hidden: n,
			name: r ?? "<Img>",
			showInTimeline: i,
			_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/img",
			_remotionInternalCropComponentName: "<Img />",
			controls: m,
			...P
		});
	},
	componentName: "<Img>",
	componentIdentity: "dev.remotion.remotion.Img",
	schema: tu,
	supportsEffects: !0
});
z(su);
var cu = (e) => {
	if (e === "remotion") return "dev.remotion.remotion";
	if (e.startsWith("@remotion/")) return `dev.remotion.${e.slice(10).replace(/-([a-z])/g, (e, t) => t.toUpperCase())}`;
	throw Error(`Unsupported Remotion package name: ${e}`);
}, lu = ({ packageName: e, componentName: t }) => `${cu(e)}.${t}`, uu = {
	...dr,
	...Yn,
	...Bn,
	...Zn
}, du = {
	...uu,
	...Gn,
	...Un,
	...Wn
}, fu = {
	...du,
	...Hn,
	...Jn
}, pu = {
	...uu,
	...qn,
	...Hn,
	...Jn
}, mu = {
	...uu,
	...qn
}, hu = {
	...mu,
	d: {
		type: "svg-path",
		default: void 0,
		description: "Path",
		keyframable: !0
	}
}, gu = {
	...uu,
	...Kn
}, _u = {
	...du,
	...qn
}, vu = (e, t) => {
	typeof e == "function" ? e(t) : e && (e.current = t);
}, yu = (e) => {
	let t = e;
	if (!t.wrapInSequence) {
		let e = Lo(t);
		return z(e), e;
	}
	let { Component: n, componentName: r, schema: i, wrapInSequence: a, ...o } = t, s = (0, b.forwardRef)((e, t) => {
		let { canvasContent: i, compositions: a } = (0, b.useContext)(j), o = se(c), s = a.some((e) => i?.type === "composition" && e.id === i.compositionId && e.componentFromProps === o), { durationInFrames: l, from: u, trimBefore: d, playbackRate: f, loop: p, freeze: m, hidden: h, name: g, showInTimeline: _, controls: v, premountFor: y, postmountFor: x, styleWhilePremounted: C, styleWhilePostmounted: w, ...T } = e, { cropLeft: E, cropRight: D, cropTop: O, cropBottom: k, style: A, ...M } = T, { effectivePremountFor: N, effectivePostmountFor: P, freezeFrame: F, isPremountingOrPostmounting: I, premountingActive: L, postmountingActive: ee, premountingStyle: te } = si({
			from: u ?? 0,
			durationInFrames: vr({
				durationInFrames: l,
				playbackRate: f,
				loop: p
			}),
			premountFor: y ?? null,
			postmountFor: x ?? null,
			style: A ?? null,
			styleWhilePremounted: C ?? null,
			styleWhilePostmounted: w ?? null,
			hideWhilePremounted: "opacity"
		}), ne = Jo({
			cropLeft: E,
			cropRight: D,
			cropTop: O,
			cropBottom: k,
			style: te,
			componentName: r
		});
		return /* @__PURE__ */ (0, S.jsx)(Ln, {
			frame: F,
			active: I,
			children: /* @__PURE__ */ (0, S.jsx)(Uo, {
				_remotionInternalSingleChildComponent: s ? null : o,
				layout: "none",
				durationInFrames: l,
				from: u,
				trimBefore: d,
				playbackRate: f,
				loop: p,
				freeze: m,
				hidden: h,
				name: g ?? r,
				showInTimeline: !s && _,
				controls: v,
				_remotionInternalPremountDisplay: N || null,
				_remotionInternalPostmountDisplay: P || null,
				_remotionInternalIsPremounting: L,
				_remotionInternalIsPostmounting: ee,
				children: b.createElement(n, {
					...M,
					style: ne ?? void 0,
					ref: t
				})
			})
		});
	}), c = Lo({
		...o,
		Component: s,
		componentName: r,
		schema: {
			...i,
			...Bn,
			...dr,
			...Yn,
			...Zn
		},
		supportsEffects: !1
	});
	return z(c), c;
}, bu = (e, t, n) => {
	let r = (0, b.forwardRef)((n, r) => {
		let { durationInFrames: i, from: a, premountFor: o, postmountFor: s, styleWhilePremounted: c, styleWhilePostmounted: l, trimBefore: u, playbackRate: d, loop: f, freeze: p, hidden: m, name: h, showInTimeline: g, controls: _, cropLeft: v, cropRight: y, cropTop: x, cropBottom: C, style: w, ...T } = n, { effectivePremountFor: E, effectivePostmountFor: D, freezeFrame: O, isPremountingOrPostmounting: k, premountingActive: A, postmountingActive: j, premountingStyle: M } = si({
			from: a ?? 0,
			durationInFrames: vr({
				durationInFrames: i,
				playbackRate: d,
				loop: f
			}),
			premountFor: o ?? null,
			postmountFor: s ?? null,
			style: w ?? null,
			styleWhilePremounted: c ?? null,
			styleWhilePostmounted: l ?? null,
			hideWhilePremounted: "opacity"
		}), N = Jo({
			cropLeft: v,
			cropRight: y,
			cropTop: x,
			cropBottom: C,
			style: M,
			componentName: t
		}), P = (0, b.useCallback)((e) => {
			vu(r, e);
		}, [r]);
		return /* @__PURE__ */ (0, S.jsx)(Ln, {
			frame: O,
			active: k,
			_remotionInternalIsPremounting: A,
			children: /* @__PURE__ */ (0, S.jsx)(Wo, {
				layout: "none",
				from: a ?? 0,
				trimBefore: u,
				playbackRate: d,
				loop: f,
				durationInFrames: i,
				freeze: p,
				hidden: m,
				name: h ?? t,
				showInTimeline: g ?? !0,
				controls: _,
				_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/interactive",
				_remotionInternalPremountDisplay: E || null,
				_remotionInternalPostmountDisplay: D || null,
				_remotionInternalIsPremounting: A,
				_remotionInternalIsPostmounting: j,
				children: b.createElement(e, {
					...T,
					style: N ?? void 0,
					ref: P
				})
			})
		});
	});
	r.displayName = t;
	let i = yu({
		Component: r,
		componentName: t,
		componentIdentity: lu({
			packageName: "remotion",
			componentName: t.slice(1, -1)
		}),
		schema: n,
		supportsEffects: !1
	});
	return i.displayName = t, i;
}, xu = (e, t) => bu(e, t, fu), Su = (e, t) => bu(e, t, mu), Cu = {
	baseSchema: dr,
	captionsSchema: zn,
	transformSchema: Bn,
	textSchema: Hn,
	backgroundSchema: Gn,
	borderSchema: Un,
	borderRadiusSchema: Wn,
	cropSchema: Zn,
	svgPaintSchema: qn,
	svgStrokeSchema: Kn,
	premountSchema: Yn,
	sequenceSchema: pr,
	withSchema: yu,
	_internalMakeRemotionComponentIdentity: lu,
	A: xu("a", "<Interactive.A>"),
	Article: xu("article", "<Interactive.Article>"),
	Aside: xu("aside", "<Interactive.Aside>"),
	Button: xu("button", "<Interactive.Button>"),
	Circle: Su("circle", "<Interactive.Circle>"),
	Code: xu("code", "<Interactive.Code>"),
	Div: xu("div", "<Interactive.Div>"),
	Ellipse: Su("ellipse", "<Interactive.Ellipse>"),
	Em: xu("em", "<Interactive.Em>"),
	Footer: xu("footer", "<Interactive.Footer>"),
	G: Su("g", "<Interactive.G>"),
	H1: xu("h1", "<Interactive.H1>"),
	H2: xu("h2", "<Interactive.H2>"),
	H3: xu("h3", "<Interactive.H3>"),
	H4: xu("h4", "<Interactive.H4>"),
	H5: xu("h5", "<Interactive.H5>"),
	H6: xu("h6", "<Interactive.H6>"),
	Header: xu("header", "<Interactive.Header>"),
	Label: xu("label", "<Interactive.Label>"),
	Li: xu("li", "<Interactive.Li>"),
	Line: ((e, t) => bu(e, t, gu))("line", "<Interactive.Line>"),
	Main: xu("main", "<Interactive.Main>"),
	Nav: xu("nav", "<Interactive.Nav>"),
	Ol: xu("ol", "<Interactive.Ol>"),
	P: xu("p", "<Interactive.P>"),
	Path: bu("path", "<Interactive.Path>", hu),
	Pre: xu("pre", "<Interactive.Pre>"),
	Rect: Su("rect", "<Interactive.Rect>"),
	Section: xu("section", "<Interactive.Section>"),
	Small: xu("small", "<Interactive.Small>"),
	Span: xu("span", "<Interactive.Span>"),
	Strong: xu("strong", "<Interactive.Strong>"),
	Svg: bu("svg", "<Interactive.Svg>", _u),
	Text: bu("text", "<Interactive.Text>", pu),
	Ul: xu("ul", "<Interactive.Ul>")
}, wu = b.createRef(), Tu = typeof window > "u" ? b.useEffect : b.useLayoutEffect, Eu = ({ children: e, onlyRenderComposition: t, currentCompositionMetadata: n, initialCompositions: r, initialCanvasContent: i }) => {
	let { isStudio: a } = G(), [o] = (0, b.useState)(() => String(Math.random())), s = (0, b.useRef)(null), c = (0, b.useRef)(null), l = (0, b.useRef)(new Map(r.map((e, t) => [U({
		type: "composition",
		id: e.id
	}), t]))), u = (0, b.useRef)(r.length), [d, f] = (0, b.useState)([]), [p, m] = (0, b.useState)(i), [h, g] = (0, b.useState)(null), [_, v] = (0, b.useState)(() => r.map((e, t) => ({
		...e,
		order: t
	}))), y = (0, b.useRef)(_), x = (0, b.useCallback)((e) => {
		v((t) => {
			let n = e(t);
			return y.current = n, n;
		});
	}, []), C = (0, b.useCallback)((e) => {
		let t = U({
			type: "composition",
			id: e.id
		}), n = u.current++;
		l.current.set(t, n), x((r) => {
			if (r.find((t) => t.id === e.id)) throw Error(`Multiple composition with id ${e.id} are registered.`);
			return [...r, {
				...e,
				order: s.current?.get(t) ?? n
			}];
		});
	}, [x]), w = (0, b.useCallback)((e) => {
		l.current.delete(U({
			type: "composition",
			id: e
		})), v((t) => t.filter((t) => t.id !== e));
	}, []), T = (0, b.useCallback)((e, t, n) => {
		let r = U({
			type: "folder",
			id: W({
				name: e,
				parent: t
			})
		}), i = u.current++;
		l.current.set(r, i), f((a) => [...a, {
			name: e,
			parent: t,
			order: s.current?.get(r) ?? i,
			stack: n
		}]);
	}, []), E = (0, b.useCallback)((e, t) => {
		l.current.delete(U({
			type: "folder",
			id: W({
				name: e,
				parent: t
			})
		})), f((n) => n.filter((n) => n.name !== e || n.parent !== t));
	}, []);
	Tu(() => {
		if (!a) return;
		let e = !1, t = (t) => {
			let { detail: n } = t, r = n.compositionManagers.find((e) => e.managerId === o);
			if (!r) return;
			let i = r.compositionAndFolderOrder.map(U), a = c.current;
			if (a !== null && a.length === i.length && a.every((e, t) => e === i[t])) return;
			let u = new Map(i.map((e, t) => [e, t]));
			c.current = i, s.current = u, queueMicrotask(() => {
				e || (x((e) => {
					let t = !1, n = e.map((e) => {
						let n = u.get(U({
							type: "composition",
							id: e.id
						})) ?? l.current.get(U({
							type: "composition",
							id: e.id
						})) ?? e.order;
						return n === e.order ? e : (t = !0, {
							...e,
							order: n
						});
					});
					return t ? n : e;
				}), f((e) => {
					let t = !1, n = e.map((e) => {
						let n = u.get(U({
							type: "folder",
							id: W(e)
						})) ?? l.current.get(U({
							type: "folder",
							id: W(e)
						})) ?? e.order;
						return n === e.order ? e : (t = !0, {
							...e,
							order: n
						});
					});
					return t ? n : e;
				}));
			});
		};
		return window.addEventListener(H, t), () => {
			e = !0, window.removeEventListener(H, t);
		};
	}, [
		o,
		a,
		x
	]), (0, b.useImperativeHandle)(wu, () => ({ getCompositions: () => y.current }), []);
	let D = (0, b.useMemo)(() => ({
		registerComposition: C,
		unregisterComposition: w,
		registerFolder: T,
		unregisterFolder: E,
		setCanvasContent: m,
		setCurrentAssetMetadata: g,
		onlyRenderComposition: t
	}), [
		C,
		T,
		w,
		E,
		t
	]), O = (0, b.useMemo)(() => ({
		compositions: _,
		folders: d,
		currentCompositionMetadata: n,
		currentAssetMetadata: h,
		canvasContent: p
	}), [
		_,
		d,
		n,
		h,
		p
	]), k = /* @__PURE__ */ (0, S.jsx)(j.Provider, {
		value: O,
		children: /* @__PURE__ */ (0, S.jsx)(M.Provider, {
			value: D,
			children: e
		})
	});
	return a ? /* @__PURE__ */ (0, S.jsx)(ve, {
		managerId: o,
		children: k
	}) : k;
}, Du = {};
w(Du, {
	makeDefaultPreviewCSS: () => ju,
	injectCSS: () => ku,
	OBJECTFIT_CONTAIN_CLASS_NAME: () => Au
});
var Ou = {}, ku = (e) => {
	if (typeof document > "u" || Ou[e]) return () => {};
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	return n.appendChild(document.createTextNode(e)), t.prepend(n), Ou[e] = n, () => {
		let t = Ou[e];
		t && (t.parentNode && t.parentNode.removeChild(t), delete Ou[e]);
	};
}, Au = "__remotion_objectfitcontain", ju = (e, t) => e ? `
    ${e} * {
      box-sizing: border-box;
    }
    ${e} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${e} .${Au} {
      object-fit: contain;
    }
  ` : `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${t};
    }
    .${Au} {
      object-fit: contain;
    }
    `, Mu = "__remotion-studio-container", Nu = () => document.getElementById(Mu), Pu = b.createContext(null), Fu = (e) => {
	e.disposed || (e.disposed = !0, e.values.clear(), e.dispose());
}, Iu = () => {
	let e = /* @__PURE__ */ new Map(), t = !1;
	return {
		acquire: ({ key: n, create: r }) => {
			if (t) throw Error("Media resource manager has already been disposed");
			let i = e.get(n);
			if (!i) {
				let t = r();
				i = {
					resource: t.resource,
					dispose: t.dispose,
					refCount: 0,
					disposeGeneration: 0,
					disposed: !1,
					values: /* @__PURE__ */ new Map()
				}, e.set(n, i);
			}
			i.refCount++, i.disposeGeneration++;
			let a = !1;
			return {
				resource: i.resource,
				getOrCreateValue: (e, t) => {
					if (i.values.has(e)) return i.values.get(e);
					let n = t();
					return i.values.set(e, n), n;
				},
				release: () => {
					if (a || (a = !0, i.refCount--, i.refCount !== 0)) return;
					let t = ++i.disposeGeneration;
					queueMicrotask(() => {
						i.refCount === 0 && i.disposeGeneration === t && (e.get(n) === i && e.delete(n), Fu(i));
					});
				}
			};
		},
		invalidate: (t) => {
			let n = e.get(t);
			n && (e.delete(t), n.disposeGeneration++, n.refCount === 0 && Fu(n));
		},
		dispose: () => {
			if (t) return;
			t = !0;
			let n = Array.from(e.values());
			e.clear();
			let r = null;
			for (let e of n) try {
				Fu(e);
			} catch (e) {
				r ??= e;
			}
			if (r !== null) throw r;
		}
	};
}, Lu = ({ src: e, credentials: t, requestInitFingerprint: n, revision: r }) => JSON.stringify([
	"mediabunny-input",
	e,
	t,
	n,
	r
]), Ru = "mediabunny-duration", zu = Iu(), Bu = "remotion-react-refresh-started", Vu = "remotion-react-refresh-finished", Hu = null, Uu = [], Wu = () => Hu, Gu = (e) => (Uu.push(e), () => {
	Uu = Uu.filter((t) => t !== e);
}), Ku = ({ children: e, numberOfAudioTags: t, logLevel: n, audioLatencyHint: r, previewSampleRate: i, videoEnabled: a, audioEnabled: o, frameState: s, _experimentalKeepAudioContextAlive: c }) => {
	let l = (0, b.useMemo)(() => ({
		logLevel: n,
		mountTime: Date.now()
	}), [n]);
	return /* @__PURE__ */ (0, S.jsx)(Ht.Provider, {
		value: l,
		children: /* @__PURE__ */ (0, S.jsx)(pn, {
			frameState: s,
			children: /* @__PURE__ */ (0, S.jsx)(_l, {
				videoEnabled: a,
				audioEnabled: o,
				children: /* @__PURE__ */ (0, S.jsx)(at, { children: /* @__PURE__ */ (0, S.jsx)(Vs, { children: /* @__PURE__ */ (0, S.jsx)($r, { children: /* @__PURE__ */ (0, S.jsx)(Qs, { children: /* @__PURE__ */ (0, S.jsx)(Uc, { children: /* @__PURE__ */ (0, S.jsx)(gc, {
					audioLatencyHint: r,
					audioEnabled: o,
					previewSampleRate: i,
					_experimentalKeepAudioContextAlive: c,
					children: /* @__PURE__ */ (0, S.jsx)(_c, {
						numberOfAudioTags: t,
						children: e
					})
				}) }) }) }) }) })
			})
		})
	});
}, qu = () => {
	let e = /* @__PURE__ */ new Map(), t = !1;
	return {
		getOrCreateResource: ({ key: n, create: r }) => {
			if (t) throw Error("Render resource manager has already been disposed");
			let i = e.get(n);
			if (i) return i.resource;
			let a = r();
			return e.set(n, a), a.resource;
		},
		dispose: () => {
			if (t) return;
			t = !0;
			let n = Array.from(e.values());
			e.clear();
			let r = null;
			for (let e of n) try {
				e.dispose();
			} catch (e) {
				r ??= e;
			}
			if (r !== null) throw r;
		}
	};
}, Ju = b.createContext(null), Yu = [
	"h264",
	"h265",
	"vp8",
	"vp9",
	"av1",
	"mp3",
	"aac",
	"wav",
	"prores",
	"h264-mkv",
	"h264-ts",
	"gif"
];
function Xu(e, t, n) {
	if (e !== void 0) {
		if (typeof e != "string") throw TypeError(`The "${n}" prop ${t} must be a string, but you passed a value of type ${typeof e}.`);
		if (!Yu.includes(e)) throw Error(`The "${n}" prop ${t} must be one of ${Yu.join(", ")}, but you passed ${e}.`);
	}
}
var Y = ({ calculated: e, compositionId: t, compositionFps: n, compositionHeight: r, compositionWidth: i, compositionDurationInFrames: a }) => {
	let o = `calculated by calculateMetadata() for the composition "${t}"`, s = `of the "<Composition />" component with the id "${t}"`, c = e?.width ?? i ?? void 0;
	ot(c, "width", e?.width ? o : s);
	let l = e?.height ?? r ?? void 0;
	ot(l, "height", e?.height ? o : s);
	let u = e?.fps ?? n ?? null;
	ct(u, e?.fps ? o : s, !1);
	let d = e?.durationInFrames ?? a ?? null;
	st(d, {
		allowFloats: !1,
		component: `of the "<Composition />" component with the id "${t}"`
	});
	let f = e?.defaultCodec;
	return Xu(f, o, "defaultCodec"), {
		width: c,
		height: l,
		fps: u,
		durationInFrames: d,
		defaultCodec: f,
		defaultOutName: e?.defaultOutName,
		defaultVideoImageFormat: e?.defaultVideoImageFormat,
		defaultPixelFormat: e?.defaultPixelFormat,
		defaultProResProfile: e?.defaultProResProfile,
		defaultSampleRate: e?.defaultSampleRate
	};
}, Zu = ({ calculated: e, compositionDurationInFrames: t, compositionFps: n, compositionHeight: r, compositionId: i, compositionWidth: a, defaultProps: o, originalProps: s }) => {
	let c = Y({
		calculated: e,
		compositionDurationInFrames: t,
		compositionFps: n,
		compositionHeight: r,
		compositionWidth: a,
		compositionId: i
	});
	return {
		metadataSource: {
			durationInFrames: e?.durationInFrames === void 0 ? "composition" : "calculate-metadata",
			fps: e?.fps === void 0 ? "composition" : "calculate-metadata",
			height: e?.height === void 0 ? "composition" : "calculate-metadata",
			width: e?.width === void 0 ? "composition" : "calculate-metadata"
		},
		videoConfig: {
			...c,
			id: i,
			defaultProps: Le(o ?? {}),
			props: Le(e?.props ?? s),
			defaultCodec: c.defaultCodec ?? null,
			defaultOutName: c.defaultOutName ?? null,
			defaultVideoImageFormat: c.defaultVideoImageFormat ?? null,
			defaultPixelFormat: c.defaultPixelFormat ?? null,
			defaultProResProfile: c.defaultProResProfile ?? null,
			defaultSampleRate: c.defaultSampleRate ?? null
		}
	};
}, X = ({ calculateMetadata: e, signal: t, defaultProps: n, inputProps: r, compositionId: i, compositionDurationInFrames: a, compositionFps: o, compositionHeight: s, compositionWidth: c }) => {
	let l = e ? e({
		defaultProps: n,
		props: r,
		abortSignal: t,
		compositionId: i,
		isRendering: Ce().isRendering
	}) : null;
	return typeof l == "object" && l && "then" in l ? l.then((e) => Zu({
		calculated: e,
		compositionDurationInFrames: a,
		compositionFps: o,
		compositionHeight: s,
		compositionWidth: c,
		compositionId: i,
		defaultProps: n,
		originalProps: r
	})) : Zu({
		calculated: l,
		compositionDurationInFrames: a,
		compositionFps: o,
		compositionHeight: s,
		compositionWidth: c,
		compositionId: i,
		defaultProps: n,
		originalProps: r
	});
}, Z = (e) => {
	let t = X(e);
	return typeof t == "object" && "then" in t ? t.then(({ videoConfig: e }) => e) : t.videoConfig;
}, Qu = (e) => {
	try {
		return {
			type: "success",
			result: X(e)
		};
	} catch (e) {
		return {
			type: "error",
			error: e
		};
	}
}, $u = (e) => {
	try {
		return {
			type: "success",
			result: Z(e)
		};
	} catch (e) {
		return {
			type: "error",
			error: e
		};
	}
}, ed = b.createContext(() => {}), td = () => {
	if (Ce().isRendering) {
		let e = window.remotion_envVariables;
		return e ? {
			...JSON.parse(e),
			NODE_ENV: "production"
		} : {};
	}
	return { NODE_ENV: "production" };
}, nd = () => {
	let e = td();
	window.process || (window.process = {}), window.process.env || (window.process.env = {}), Object.keys(e).forEach((t) => {
		window.process.env[t] = e[t];
	});
}, rd = b.createContext(null), id = ({ src: e, transparent: t, currentTime: n, toneMapped: r }) => `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(js(e))}&time=${encodeURIComponent(Math.max(0, n))}&transparent=${String(t)}&toneMapped=${String(r)}`, ad = ({ onError: e, volume: t, playbackRate: n, src: r, muted: i, allowAmplificationDuringRender: a, transparent: o, toneMapped: s, toneFrequency: c, name: l, loopVolumeCurveBehavior: u, delayRenderRetries: d, delayRenderTimeoutInMilliseconds: f, onVideoFrame: p, crossOrigin: m, audioStreamIndex: h, preservePitch: g, ..._ }) => {
	let v = On(), y = Nn(), x = Fc(u), C = ht(), w = (0, b.useContext)(Xe), T = w?.playbackRate ?? 1, E = (0, b.useContext)(Nc), { registerRenderAsset: D, unregisterRenderAsset: O } = (0, b.useContext)(ks);
	if (!r) throw TypeError("No `src` was passed to <OffthreadVideo>.");
	let k = (0, b.useMemo)(() => `offthreadvideo-${nc(r)}-${w?.cumulatedFrom}-${w?.relativeFrom}-${w?.durationInFrames}`, [
		r,
		w?.cumulatedFrom,
		w?.relativeFrom,
		w?.durationInFrames
	]), A = Rc({
		volume: t,
		frame: x,
		mediaVolume: 1
	});
	ul(A);
	let { shouldUseAudio: j } = fl({
		muted: i,
		volume: A,
		audioEnabled: gl()
	});
	if (!C) throw Error("No video config found");
	(0, b.useEffect)(() => {
		if (!r) throw Error("No src passed");
		if (j) return D({
			type: "video",
			src: js(r),
			id: k,
			frame: v,
			volume: A,
			mediaFrame: E + (y - E) / T,
			playbackRate: n * T,
			toneFrequency: c,
			audioStartFrame: E,
			audioStreamIndex: h
		}), () => O(k);
	}, [
		j,
		r,
		D,
		k,
		O,
		A,
		y,
		v,
		n,
		c,
		E,
		T,
		h
	]);
	let M = (0, b.useMemo)(() => Qc({
		frame: y,
		playbackRate: n || 1,
		startFrom: E
	}) / C.fps, [
		y,
		E,
		n,
		C.fps
	]), N = (0, b.useMemo)(() => id({
		src: r,
		currentTime: M,
		transparent: o,
		toneMapped: s
	}), [
		s,
		M,
		r,
		o
	]), [P, F] = (0, b.useState)(null), { delayRender: I, continueRender: L } = Kt();
	(0, b.useLayoutEffect)(() => {
		if (!window.remotion_videoEnabled) return;
		let t = [];
		F(null);
		let n = new AbortController(), r = I(`Fetching ${N} from server`, {
			retries: d ?? void 0,
			timeoutInMilliseconds: f ?? void 0
		});
		return (async () => {
			try {
				let e = await fetch(N, {
					signal: n.signal,
					cache: "no-store"
				});
				if (e.status !== 200) {
					if (e.status === 500) {
						let t = await e.json();
						if (t.error) {
							let e = t.error.replace(/^Error: /, "");
							throw Error(e);
						}
					}
					throw Error(`Server returned status ${e.status} while fetching ${N}`);
				}
				let i = await e.blob(), a = URL.createObjectURL(i);
				t.push(() => URL.revokeObjectURL(a)), F({
					src: a,
					handle: r
				});
			} catch (t) {
				if (t.message.includes("aborted")) {
					L(r);
					return;
				}
				if (n.signal.aborted) {
					L(r);
					return;
				}
				t.message.includes("Failed to fetch") && (t = Error(`Failed to fetch ${N}. This could be caused by Chrome rejecting the request because the disk space is low. Consider increasing the disk size of your environment.`, { cause: t })), e ? e(t) : At(t);
			}
		})(), t.push(() => {
			n.signal.aborted || n.abort();
		}), () => {
			t.forEach((e) => e());
		};
	}, [
		N,
		d,
		f,
		e,
		L,
		I
	]);
	let ee = (0, b.useCallback)(() => {
		e ? e?.(/* @__PURE__ */ Error("Failed to load image with src " + P)) : At("Failed to load image with src " + P);
	}, [P, e]), te = (0, b.useMemo)(() => [Au, _.className].filter(be).join(" "), [_.className]), ne = (0, b.useCallback)((e) => {
		p && p(e);
	}, [p]);
	return !P || !window.remotion_videoEnabled ? null : (L(P.handle), /* @__PURE__ */ (0, S.jsx)(su, {
		src: P.src,
		delayRenderRetries: d,
		delayRenderTimeoutInMilliseconds: f,
		onImageFrame: ne,
		..._,
		onError: ee,
		className: te
	}));
}, od = ({ ref: e, onVideoFrame: t }) => {
	(0, b.useEffect)(() => {
		let { current: n } = e;
		if (!n || !t) return;
		let r = 0, i = (n, a) => {
			e.current && (t(e.current, n, a), r = e.current.requestVideoFrameCallback(i));
		};
		if (t(n), n.requestVideoFrameCallback) return r = n.requestVideoFrameCallback(i), () => {
			r && n.cancelVideoFrameCallback(r);
		};
	}, [t, e]);
}, sd = class extends Error {
	src;
	constructor({ message: e, src: t }) {
		super(e), this.name = "MediaPlaybackError", this.src = t;
	}
}, cd = (0, b.forwardRef)((e, t) => {
	let n = (0, b.useContext)(pc);
	if (!n) throw Error("SharedAudioContext not found");
	let r = (0, b.useRef)(null), i = (0, b.useMemo)(() => n.audioContext ? ic({
		audioContext: n.audioContext,
		ref: r
	}) : null, [n.audioContext]);
	(b.useInsertionEffect ?? b.useLayoutEffect)(() => () => {
		requestAnimationFrame(() => {
			i?.cleanup();
		});
	}, [i]);
	let { volume: a, muted: o, playbackRate: s, preservePitch: c, onlyWarnForMediaSeekingError: l, src: u, onDuration: d, acceptableTimeShift: f, acceptableTimeShiftInSeconds: p, toneFrequency: m, name: h, _remotionInternalNativeLoopPassed: g, _remotionInternalStack: _, style: v, pauseWhenBuffering: y, showInTimeline: x, loopVolumeCurveBehavior: C, onError: w, onAutoPlayError: T, onVideoFrame: E, crossOrigin: D, delayRenderRetries: O, delayRenderTimeoutInMilliseconds: k, allowAmplificationDuringRender: A, useWebAudioApi: j, audioStreamIndex: M, ...N } = e, P = Fc(C ?? "repeat"), { fps: F, durationInFrames: I } = Pn(), L = (0, b.useContext)(Xe), { isStudio: ee } = G(), te = Ut(), ne = Wt(), [R] = (0, b.useState)(() => String(Math.random()));
	if (f !== void 0) throw Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");
	let [re] = cl(), z = Rc({
		frame: P,
		volume: a,
		mediaVolume: re
	}), { isMutedForTimeline: ie, isMutedForPlayback: ae } = fl({
		muted: o ?? !1,
		volume: z,
		audioEnabled: !0
	});
	ul(z);
	let oe = (0, b.useCallback)(() => _ ?? null, [_]), se = Bc({
		volume: a,
		mediaVolume: re,
		mediaType: "video",
		src: u,
		playbackRate: e.playbackRate ?? 1,
		displayName: h ?? null,
		id: R,
		getStack: oe,
		showInTimeline: x,
		premountDisplay: L?.premountDisplay ?? null,
		postmountDisplay: L?.postmountDisplay ?? null,
		loopDisplay: void 0,
		loopVolumeCurveBehavior: C ?? "repeat",
		documentationLink: l ? "https://www.remotion.dev/docs/offthreadvideo" : "https://www.remotion.dev/docs/html5-video",
		muted: ie
	});
	il({
		mediaRef: r,
		src: u,
		mediaType: "video",
		playbackRate: e.playbackRate ?? 1,
		preservePitch: c,
		onlyWarnForMediaSeekingError: l,
		acceptableTimeshift: p ?? null,
		isPremounting: !!L?.premounting,
		isPostmounting: !!L?.postmounting,
		pauseWhenBuffering: y,
		onAutoPlayError: T ?? null
	}), al({
		id: R,
		isPostmounting: !!L?.postmounting,
		isPremounting: !!L?.premounting,
		mediaRef: r,
		mediaType: "video",
		onAutoPlayError: T ?? null
	}), Mc({
		logLevel: te,
		mediaRef: r,
		volume: z,
		source: i,
		shouldUseWebAudioApi: j ?? !1
	});
	let ce = L ? L.relativeFrom : 0, le = L ? Math.min(L.durationInFrames, I) : I, ue = kc({
		actualSrc: Ws(u),
		actualFrom: ce,
		duration: le,
		fps: F
	});
	(0, b.useImperativeHandle)(t, () => r.current, []), (0, b.useState)(() => Ls({
		logLevel: te,
		message: `Mounting video with source = ${ue}, v=${nn}, user agent=${typeof navigator > "u" ? "server" : navigator.userAgent}`,
		tag: "video",
		mountTime: ne
	})), (0, b.useEffect)(() => {
		let { current: e } = r;
		if (!e) return;
		let t = () => {
			if (e.error) {
				if (console.error("Error occurred in video", e?.error), w) {
					let t = new sd({
						message: `Code ${e.error.code}: ${e.error.message}`,
						src: u
					});
					w(t);
					return;
				}
				throw new sd({
					message: `The browser threw an error while playing the video ${u}: Code ${e.error.code} - ${e?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`,
					src: u
				});
			}
			if (w) {
				let e = new sd({
					message: `The browser threw an error while playing the video ${u}`,
					src: u
				});
				w(e);
				return;
			}
			throw new sd({
				message: "The browser threw an error while playing the video",
				src: u
			});
		};
		return e.addEventListener("error", t, { once: !0 }), () => {
			e.removeEventListener("error", t);
		};
	}, [w, u]);
	let B = (0, b.useRef)(d);
	B.current = d, od({
		ref: r,
		onVideoFrame: E
	}), (0, b.useEffect)(() => {
		let { current: e } = r;
		if (!e) return;
		if (e.duration) {
			B.current?.(u, e.duration);
			return;
		}
		let t = () => {
			B.current?.(u, e.duration);
		};
		return e.addEventListener("loadedmetadata", t), () => {
			e.removeEventListener("loadedmetadata", t);
		};
	}, [u]), (0, b.useEffect)(() => {
		let { current: e } = r;
		e && (e.preload = Cc() ? "metadata" : "auto");
	}, []);
	let V = (0, b.useMemo)(() => ({ ...v }), [v]), de = $s({
		crossOrigin: D,
		requestsVideoFrame: !!E,
		isClientSideRendering: !1
	}), fe = /* @__PURE__ */ (0, S.jsx)("video", {
		...N,
		ref: r,
		muted: ae,
		playsInline: !0,
		src: ue,
		loop: g,
		style: V,
		disableRemotePlayback: !0,
		crossOrigin: de,
		controls: !1
	});
	return ee || se ? /* @__PURE__ */ (0, S.jsx)(me, {
		sequenceId: R,
		outlineChildrenRef: se,
		children: fe
	}) : fe;
}), ld = (e) => {
	let { startFrom: t, endAt: n, trimBefore: r, trimAfter: i, durationInFrames: a, name: o, pauseWhenBuffering: s, _remotionInternalStack: c, showInTimeline: l, ...u } = e, d = G(), f = oi(s);
	if (d.isClientSideRendering) throw Error("<OffthreadVideo> is not supported in @remotion/web-renderer. Use <Video> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
	let p = (0, b.useCallback)(() => {}, []);
	if (typeof e.src != "string") throw TypeError(`The \`<OffthreadVideo>\` tag requires a string for \`src\`, but got ${JSON.stringify(e.src)} instead.`);
	Js({
		startFrom: t,
		endAt: n,
		trimBefore: r,
		trimAfter: i
	}), a !== void 0 && st(a, {
		component: "of the <OffthreadVideo /> component",
		allowFloats: !0
	});
	let { trimBeforeValue: m, trimAfterValue: h } = Ys({
		startFrom: t,
		endAt: n,
		trimBefore: r,
		trimAfter: i
	}), g = Ns({
		durationInFrames: a,
		trimAfter: h,
		trimBefore: m
	});
	if (m !== void 0 || g !== void 0) return /* @__PURE__ */ (0, S.jsx)(Nc.Provider, {
		value: m ?? 0,
		children: /* @__PURE__ */ (0, S.jsx)(Wo, {
			layout: "none",
			from: 0 - (m ?? 0),
			showInTimeline: !1,
			durationInFrames: g === void 0 ? void 0 : (m ?? 0) + (g - (m ?? 0)) / (e.playbackRate ?? 1),
			name: o,
			children: /* @__PURE__ */ (0, S.jsx)(ld, {
				pauseWhenBuffering: f,
				...u,
				trimAfter: void 0,
				durationInFrames: void 0,
				name: void 0,
				showInTimeline: l,
				trimBefore: void 0,
				_remotionInternalStack: void 0,
				startFrom: void 0,
				endAt: void 0
			})
		})
	});
	if (Gs(e, "Video"), d.isRendering) return /* @__PURE__ */ (0, S.jsx)(ad, {
		pauseWhenBuffering: f,
		...u,
		trimAfter: void 0,
		durationInFrames: void 0,
		name: void 0,
		showInTimeline: l,
		trimBefore: void 0,
		_remotionInternalStack: void 0,
		startFrom: void 0,
		endAt: void 0
	});
	let { transparent: _, toneMapped: v, onAutoPlayError: y, onVideoFrame: x, crossOrigin: C, delayRenderRetries: w, delayRenderTimeoutInMilliseconds: T, ...E } = u;
	return /* @__PURE__ */ (0, S.jsx)(cd, {
		_remotionInternalStack: c ?? null,
		onDuration: p,
		onlyWarnForMediaSeekingError: !0,
		pauseWhenBuffering: f,
		showInTimeline: l ?? !0,
		onAutoPlayError: y ?? void 0,
		onVideoFrame: x ?? null,
		crossOrigin: C,
		...E,
		_remotionInternalNativeLoopPassed: !1
	});
};
z(({ src: e, acceptableTimeShiftInSeconds: t, allowAmplificationDuringRender: n, audioStreamIndex: r, crossOrigin: i, delayRenderRetries: a, delayRenderTimeoutInMilliseconds: o, loopVolumeCurveBehavior: s, muted: c, name: l, onAutoPlayError: u, onError: d, onVideoFrame: f, pauseWhenBuffering: p, playbackRate: m, preservePitch: h, showInTimeline: g, style: _, toneFrequency: v, toneMapped: y, transparent: b, trimAfter: x, durationInFrames: C, trimBefore: w, useWebAudioApi: T, volume: E, _remotionInternalNativeLoopPassed: D, endAt: O, _remotionInternalStack: k, startFrom: A, imageFormat: j, ...M }) => {
	if (j) throw TypeError("The `<OffthreadVideo>` tag does no longer accept `imageFormat`. Use the `transparent` prop if you want to render a transparent video.");
	return /* @__PURE__ */ (0, S.jsx)(ld, {
		acceptableTimeShiftInSeconds: t,
		allowAmplificationDuringRender: n ?? !0,
		audioStreamIndex: r ?? 0,
		crossOrigin: i,
		delayRenderRetries: a,
		delayRenderTimeoutInMilliseconds: o,
		loopVolumeCurveBehavior: s ?? "repeat",
		muted: c ?? !1,
		name: l,
		onAutoPlayError: u ?? null,
		onError: d,
		onVideoFrame: f,
		pauseWhenBuffering: oi(p),
		playbackRate: m ?? 1,
		preservePitch: h,
		toneFrequency: v ?? 1,
		showInTimeline: g ?? !0,
		src: e,
		_remotionInternalStack: k,
		startFrom: A,
		_remotionInternalNativeLoopPassed: D ?? !1,
		endAt: O,
		style: _,
		toneMapped: y ?? !0,
		transparent: b ?? !1,
		trimAfter: x,
		durationInFrames: C,
		trimBefore: w,
		useWebAudioApi: T ?? !1,
		volume: E,
		...M
	});
});
var ud = "remotion_staticFilesChanged";
function dd() {
	let e = b.useContext(j), t = b.useContext(un), n = b.useContext(ln), r = b.useContext(Xe), i = b.useContext(T), a = b.useContext(Rs), o = b.useContext(lt), s = b.useContext(ks), c = b.useContext(Ar), l = b.useContext(Nr), u = b.useContext(Gr), d = b.useContext(Hc), f = b.useContext(Ht);
	return (0, b.useMemo)(() => ({
		compositionManagerCtx: e,
		timelineContext: t,
		setTimelineContext: n,
		sequenceContext: r,
		canUseRemotionHooksContext: i,
		preloadContext: a,
		resolveCompositionContext: o,
		renderAssetManagerContext: s,
		sequenceManagerContext: c,
		sequenceManagerRefContext: l,
		visualModePropStatusesRefContext: u,
		bufferManagerContext: d,
		logLevelContext: f
	}), [
		e,
		r,
		n,
		t,
		i,
		a,
		o,
		s,
		c,
		l,
		u,
		d,
		f
	]);
}
var Q = {
	AbsoluteFillElement: He,
	MaxMediaCacheSizeContext: Pu,
	getMediabunnyInputResourceKey: Lu,
	globalMediaResourceManager: zu,
	makeMediaResourceManager: Iu,
	MEDIABUNNY_DURATION_VALUE_KEY: Ru,
	makeRenderResourceManager: qu,
	RenderResourceManagerContext: Ju,
	createRuntimeValueStore: on,
	useUnsafeVideoConfig: ht,
	useFrameForVolumeProp: Fc,
	useTimelinePosition: On,
	useAbsoluteTimelinePosition: An,
	useIsInsideFreeze: kn,
	useIsInsideNonPremountFreeze: In,
	useMediaAudioState: fl,
	evaluateVolume: Rc,
	getAbsoluteSrc: js,
	getAnimatedImageDurationInSeconds: hs,
	getAssetDisplayName: Ic,
	Timeline: an,
	validateMediaTrimProps: Js,
	validateMediaProps: Gs,
	resolveTrimProps: Ys,
	VideoForPreview: cd,
	CompositionManager: j,
	CompositionSetters: M,
	VisualModePropStatusesContext: Wr,
	VisualModePropStatusesRefContext: Gr,
	VisualModeBatchSettersContext: Zr,
	VisualModeDragOverridesContext: Kr,
	VisualModeSettersContext: Xr,
	SequenceManager: Ar,
	SequenceManagerProvider: $r,
	SequenceManagerRefContext: Nr,
	useActiveFromDragOverrideKeys: Jr,
	useSequenceManagerSequences: Mr,
	SequenceRegistrationContext: Pr,
	DisableSequenceRegistrationProvider: Ir,
	CommitOrderInternals: ye,
	SequenceOutlineInternals: Er,
	SequenceOutlineContext: wr,
	SequenceStackTracesUpdateContext: ed,
	baseSchema: dr,
	sequenceSchema: pr,
	SequenceWithoutSchema: Uo,
	sequenceStyleSchema: $n,
	sequenceVisualStyleSchema: Vn,
	sequencePremountSchema: Xn,
	sequenceCropSchema: Qn,
	textSchema: Hn,
	transformSchema: Bn,
	premountSchema: Yn,
	flattenActiveSchema: _o,
	getFlatSchemaWithAllKeys: vo,
	RemotionRootContexts: Ku,
	CompositionManagerProvider: Eu,
	useVideo: mt,
	getRoot: Wu,
	useMediaVolumeState: cl,
	usePlayerMutedState: ll,
	useMediaInTimeline: Bc,
	useLazyComponent: qt,
	truthy: be,
	SequenceContext: Xe,
	PremountContext: ii,
	usePremounting: si,
	resolveSequenceDuration: vr,
	useRemotionContexts: dd,
	RemotionContextProvider: (e) => {
		let { children: t, contexts: n } = e;
		return /* @__PURE__ */ (0, S.jsx)(Ht.Provider, {
			value: n.logLevelContext,
			children: /* @__PURE__ */ (0, S.jsx)(T.Provider, {
				value: n.canUseRemotionHooksContext,
				children: /* @__PURE__ */ (0, S.jsx)(Rs.Provider, {
					value: n.preloadContext,
					children: /* @__PURE__ */ (0, S.jsx)(j.Provider, {
						value: n.compositionManagerCtx,
						children: /* @__PURE__ */ (0, S.jsx)(Nr.Provider, {
							value: n.sequenceManagerRefContext,
							children: /* @__PURE__ */ (0, S.jsx)(Ar.Provider, {
								value: n.sequenceManagerContext,
								children: /* @__PURE__ */ (0, S.jsx)(Gr.Provider, {
									value: n.visualModePropStatusesRefContext,
									children: /* @__PURE__ */ (0, S.jsx)(ks.Provider, {
										value: n.renderAssetManagerContext,
										children: /* @__PURE__ */ (0, S.jsx)(lt.Provider, {
											value: n.resolveCompositionContext,
											children: /* @__PURE__ */ (0, S.jsx)(un.Provider, {
												value: n.timelineContext,
												children: /* @__PURE__ */ (0, S.jsx)(ln.Provider, {
													value: n.setTimelineContext,
													children: /* @__PURE__ */ (0, S.jsx)(Xe.Provider, {
														value: n.sequenceContext,
														children: /* @__PURE__ */ (0, S.jsx)(Hc.Provider, {
															value: n.bufferManagerContext,
															children: t
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		});
	},
	CSSUtils: Du,
	setupEnvVariables: nd,
	MediaVolumeContext: ol,
	SetMediaVolumeContext: sl,
	getRemotionEnvironment: Ce,
	SharedAudioContext: pc,
	SharedAudioContextProvider: gc,
	SharedAudioTagsContext: mc,
	SharedAudioTagsContextProvider: _c,
	invalidCompositionErrorMessage: Zt,
	invalidFolderNameErrorMessage: Oe,
	calculateMediaDuration: Ms,
	isCompositionIdValid: Yt,
	isFolderNameValid: Ee,
	getPreviewDomElement: Nu,
	compositionsRef: wu,
	portalNode: Ye,
	setPortalNodeCurrentScale: Je,
	waitForRoot: Gu,
	SetTimelineContext: ln,
	CanUseRemotionHooksProvider: E,
	CanUseRemotionHooks: T,
	DisableInteractivityProvider: Fo,
	EnableInteractivityProvider: Io,
	PrefetchProvider: Vs,
	DurationsContextProvider: Qs,
	IsPlayerContextProvider: ze,
	useIsPlayer: Be,
	EditorPropsProvider: at,
	EditorPropsContext: rt,
	usePreload: Ws,
	resolveVideoConfig: Z,
	resolveVideoConfigOrCatch: $u,
	resolveVideoConfigWithMetadataOrCatch: Qu,
	ResolveCompositionContext: lt,
	useResolvedVideoConfig: ft,
	resolveCompositionsRef: ut,
	REMOTION_STUDIO_CONTAINER_ELEMENT: Mu,
	RenderAssetManager: ks,
	persistCurrentFrame: xn,
	usePlaybackRate: Dn,
	useTimelineContext: En,
	useTimelineSetFrameWithoutSeek: jn,
	isIosSafari: Cc,
	WATCH_REMOTION_STATIC_FILES: ud,
	REACT_REFRESH_STARTED_EVENT: Bu,
	REACT_REFRESH_FINISHED_EVENT: Vu,
	addSequenceStackTraces: z,
	useMediaStartsAt: Pc,
	BufferingProvider: Uc,
	BufferingContextReact: Hc,
	getComponentsToAddStacksTo: re,
	getSequenceComponent: ae,
	getSingleChildComponent: ue,
	getStackForControls: le,
	makeOriginalSourceStack: ne,
	parseOriginalSourceStack: R,
	REMOTION_INTERNAL_STACK_PROP: L,
	setComponentIdentityResolver: oe,
	CurrentScaleContext: gt,
	PixelDensityContext: rd,
	PreviewSizeContext: _t,
	calculateScale: vt,
	validateRenderAsset: Os,
	Log: K,
	LogLevelContext: Ht,
	useLogLevel: Ut,
	playbackLogging: Ls,
	timeValueRef: it,
	compositionSelectorRef: (0, b.createRef)(),
	RemotionEnvironmentContext: we,
	warnAboutTooHighVolume: ul,
	AudioForPreview: pl,
	OBJECTFIT_CONTAIN_CLASS_NAME: Au,
	InnerOffthreadVideo: ld,
	useBasicMediaInTimeline: zc,
	getInputPropsOverride: Qe,
	setInputPropsOverride: $e,
	useVideoEnabled: hl,
	useAudioEnabled: gl,
	useBuffering: yn,
	TimelinePosition: an,
	useTimelineSeek: sn,
	DelayRenderContextType: Gt,
	TimelineContext: un,
	usePlaying: vn,
	PlaybackRateContext: dn,
	AbsoluteTimeContext: fn,
	RenderAssetManagerProvider: As,
	getEffectiveVisualModeValue: oo,
	CompositionRenderErrorContext: D,
	useEffectChainState: cs,
	createEffectChainState: is,
	cleanupEffectChainState: as,
	runEffectChain: ss,
	useMemoizedEffects: go,
	useMemoizedEffectDefinitions: po,
	createEffect: Ts,
	createWebGLContextError: Qo,
	createWebGL2ContextError: $o,
	computeEffectiveSchemaValuesDotNotation: Do,
	interpolateKeyframedStatus: ro,
	setInterpolatePaths: to,
	makeStaticDragOverride: So,
	makeKeyframedDragOverride: Co,
	resolveDragOverrideValue: ao,
	getStaticDragOverrideValue: wo,
	OverrideIdsToNodePathsGettersContext: so,
	OverrideIdsToNodePathsSettersContext: co,
	findPropsToDelete: yo,
	makeSequencePropsSubscriptionKey: Ur,
	getPropStatusesCtx: ho,
	getEffectPropStatusesCtx: mo,
	hiddenField: er,
	durationInFramesField: ir,
	freezeField: lr,
	fromField: ar,
	trimAfterField: sr,
	resolveSequenceCrop: xr,
	useCropStyle: Jo
};
Object.assign(Q, { useSyncExternalStore: _n });
var fd = (e) => b.Children.toArray(e).reduce((e, t) => t.type === b.Fragment ? e.concat(fd(t.props.children)) : (e.push(t), e), []), pd = {
	durationInFrames: Cu.baseSchema.durationInFrames,
	name: Cu.sequenceSchema.name,
	hidden: Cu.sequenceSchema.hidden,
	showInTimeline: Cu.sequenceSchema.showInTimeline,
	freeze: Cu.baseSchema.freeze,
	trimBefore: Cu.sequenceSchema.trimBefore,
	playbackRate: Cu.sequenceSchema.playbackRate,
	layout: Cu.sequenceSchema.layout
}, md = (0, b.forwardRef)(({ offset: e = 0, className: t = "", _remotionInternalRender: n = null, ...r }, i) => (ri(), n ? n({
	...r,
	offset: e,
	className: t || void 0
}, i) : /* @__PURE__ */ (0, S.jsx)(ni, { children: r.children }))), hd = Cu.withSchema({
	Component: md,
	componentName: "<Series.Sequence>",
	componentIdentity: "dev.remotion.remotion.Series.Sequence",
	schema: pd,
	supportsEffects: !1
}), gd = Uo, _d = ({ durationInFrames: e, offset: t, index: n, childrenLength: r }) => {
	let i = `index = ${n}, duration = ${e}`;
	(n !== r - 1 || e !== Infinity) && st(e, {
		component: "of a <Series.Sequence /> component",
		allowFloats: !0
	});
	let a = t ?? 0;
	if (Number.isNaN(a)) throw TypeError(`The "offset" property of a <Series.Sequence /> must not be NaN, but got NaN (${i}).`);
	if (!Number.isFinite(a) || a % 1 != 0) throw TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${a} (${i}).`);
	return a;
};
z(Object.assign(Lo({
	Component: (e) => {
		let t = (0, b.useMemo)(() => {
			let t = fd(e.children), n = (e, r) => {
				if (e === t.length) return null;
				let i = t[e];
				if (typeof i == "string") {
					if (i.trim() === "") return n(e + 1, r);
					throw TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but you passed a string "${i}"`);
				}
				if (i.type !== hd) throw TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but got ${i} instead`);
				let a = i;
				return _d({
					durationInFrames: a.props.durationInFrames,
					offset: a.props.offset,
					index: e,
					childrenLength: t.length
				}), b.cloneElement(a, { _remotionInternalRender: (i, a) => {
					let o = i.durationInFrames, s = o / (i.playbackRate ?? 1);
					if (i.loop) throw Error("<Series.Sequence> does not accept `loop`. Put a looping <Sequence> inside the <Series.Sequence> instead.");
					let { durationInFrames: c, children: l, offset: u, controls: d, from: f, name: p, ...m } = i, h = _d({
						durationInFrames: o,
						offset: u,
						index: e,
						childrenLength: t.length
					}), g = r + h, _ = r + s + h;
					return /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)(gd, {
						ref: a,
						name: p || "<Series.Sequence>",
						_remotionInternalDocumentationLink: p ? void 0 : "https://www.remotion.dev/docs/series",
						controls: d ?? void 0,
						from: g,
						durationInFrames: o,
						...m,
						_remotionInternalSingleChildComponent: ue(l),
						children: /* @__PURE__ */ (0, S.jsx)(ni, { children: l })
					}), n(e + 1, _)] });
				} });
			};
			return n(0, 0);
		}, [e.children]);
		return /* @__PURE__ */ (0, S.jsx)(Wo, {
			layout: "none",
			name: "<Series>",
			_remotionInternalDocumentationLink: "https://www.remotion.dev/docs/series",
			...e,
			children: /* @__PURE__ */ (0, S.jsx)(ti, { children: t })
		});
	},
	componentName: "<Series>",
	componentIdentity: "dev.remotion.remotion.Series",
	schema: hr,
	supportsEffects: !1
}), { Sequence: hd })), z((e) => {
	let t = {
		...e,
		durationInFrames: 1,
		fps: 1
	};
	return b.createElement(tn, t);
});
var vd = (e) => Math.round(e * 1e5) / 1e5, yd = ({ element: e, desiredTime: t, logLevel: n, mountTime: r }) => {
	if (bc(e.currentTime, t)) return {
		wait: Promise.resolve(t),
		cancel: () => {}
	};
	Yc({
		logLevel: n,
		mediaRef: e,
		time: t,
		why: "Seeking during rendering",
		mountTime: r
	});
	let i, a = null, o = new Promise((t) => {
		i = e.requestVideoFrameCallback((e, n) => {
			let r = n.expectedDisplayTime - e;
			if (r <= 0) {
				t(n.mediaTime);
				return;
			}
			setTimeout(() => {
				t(n.mediaTime);
			}, r + 150);
		});
	}), s = new Promise((t) => {
		let n = () => {
			t();
		};
		e.addEventListener("seeked", n, { once: !0 }), a = () => {
			e.removeEventListener("seeked", n);
		};
	});
	return {
		wait: Promise.all([o, s]).then(([e]) => e),
		cancel: () => {
			a?.(), e.cancelVideoFrameCallback(i);
		}
	};
}, bd = ({ element: e, desiredTime: t, fps: n, logLevel: r, mountTime: i }) => {
	let a = 1 / n / 2, o = () => {};
	return Number.isFinite(e.duration) && e.currentTime >= e.duration && t >= e.duration ? {
		prom: Promise.resolve(),
		cancel: () => {}
	} : {
		prom: new Promise((n, s) => {
			let c = yd({
				element: e,
				desiredTime: t + a,
				logLevel: r,
				mountTime: i
			});
			c.wait.then((c) => {
				if (Math.abs(t - c) <= a) return n();
				let l = yd({
					element: e,
					desiredTime: c + a * (t > c ? 1 : -1),
					logLevel: r,
					mountTime: i
				});
				o = l.cancel, l.wait.then((c) => {
					if (vd(Math.abs(t - c)) <= vd(a)) return n();
					let l = yd({
						element: e,
						desiredTime: t + a,
						logLevel: r,
						mountTime: i
					});
					return o = l.cancel, l.wait.then(() => {
						n();
					}).catch((e) => {
						s(e);
					});
				}).catch((e) => {
					s(e);
				});
			}), o = c.cancel;
		}),
		cancel: () => {
			o();
		}
	};
}, xd = (0, b.forwardRef)(({ onError: e, volume: t, allowAmplificationDuringRender: n, playbackRate: r, onDuration: i, toneFrequency: a, name: o, acceptableTimeShiftInSeconds: s, delayRenderRetries: c, delayRenderTimeoutInMilliseconds: l, loopVolumeCurveBehavior: u, audioStreamIndex: d, onVideoFrame: f, preservePitch: p, ...m }, h) => {
	let g = On(), _ = Nn(), v = Fc(u ?? "repeat"), y = ht(), x = (0, b.useRef)(null), C = (0, b.useContext)(Xe), w = C?.playbackRate ?? 1, T = (0, b.useContext)(Nc), E = G(), D = Ut(), O = Wt(), { delayRender: k, continueRender: A } = Kt(), { registerRenderAsset: j, unregisterRenderAsset: M } = (0, b.useContext)(ks), N = (0, b.useMemo)(() => `video-${nc(m.src ?? "")}-${C?.cumulatedFrom}-${C?.relativeFrom}-${C?.durationInFrames}`, [
		m.src,
		C?.cumulatedFrom,
		C?.relativeFrom,
		C?.durationInFrames
	]), P = Rc({
		volume: t,
		frame: v,
		mediaVolume: 1
	});
	ul(P);
	let F = gl(), { shouldUseAudio: I } = fl({
		muted: m.muted ?? !1,
		volume: P,
		audioEnabled: F
	});
	if (!y) throw Error("No video config found");
	(0, b.useEffect)(() => {
		if (!m.src) throw Error("No src passed");
		if (I) return j({
			type: "video",
			src: js(m.src),
			id: N,
			frame: g,
			volume: P,
			mediaFrame: T + (_ - T) / w,
			playbackRate: (r ?? 1) * w,
			toneFrequency: a ?? 1,
			audioStartFrame: T,
			audioStreamIndex: d ?? 0
		}), () => M(N);
	}, [
		I,
		m.src,
		j,
		N,
		M,
		P,
		_,
		g,
		r,
		a,
		T,
		w,
		d
	]), (0, b.useImperativeHandle)(h, () => x.current, []), od({
		ref: x,
		onVideoFrame: f
	}), (0, b.useEffect)(() => {
		if (!window.remotion_videoEnabled) return;
		let { current: t } = x;
		if (!t) return;
		let n = $c({
			frame: _,
			playbackRate: r || 1,
			startFrom: T,
			fps: y.fps
		}), i = k(`Rendering <Html5Video /> with src="${m.src}" at time ${n}`, {
			retries: c ?? void 0,
			timeoutInMilliseconds: l ?? void 0
		});
		if (window.process?.env?.NODE_ENV === "test") {
			A(i);
			return;
		}
		if (bc(t.currentTime, n)) {
			if (t.readyState >= 2) {
				A(i);
				return;
			}
			let e = () => {
				A(i);
			};
			return t.addEventListener("loadeddata", e, { once: !0 }), () => {
				t.removeEventListener("loadeddata", e);
			};
		}
		let a = () => {
			A(i);
		}, o = bd({
			element: t,
			desiredTime: n,
			fps: y.fps,
			logLevel: D,
			mountTime: O
		});
		o.prom.then(() => {
			A(i);
		}), t.addEventListener("ended", a, { once: !0 });
		let s = () => {
			if (t?.error) {
				if (console.error("Error occurred in video", t?.error), e) return;
				throw new sd({
					message: `The browser threw an error while playing the video ${m.src}: Code ${t.error.code} - ${t?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`,
					src: m.src
				});
			}
			throw new sd({
				message: "The browser threw an error",
				src: m.src
			});
		};
		return t.addEventListener("error", s, { once: !0 }), () => {
			o.cancel(), t.removeEventListener("ended", a), t.removeEventListener("error", s), A(i);
		};
	}, [
		v,
		m.src,
		r,
		y.fps,
		_,
		T,
		e,
		c,
		l,
		D,
		O,
		A,
		k
	]);
	let { src: L } = m;
	return E.isRendering && (0, b.useLayoutEffect)(() => {
		if (window.process?.env?.NODE_ENV === "test") return;
		let e = k("Loading <Html5Video> duration with src=" + L, {
			retries: c ?? void 0,
			timeoutInMilliseconds: l ?? void 0
		}), { current: t } = x, n = () => {
			t?.duration && i(L, t.duration), A(e);
		};
		return t?.duration ? (i(L, t.duration), A(e)) : t?.addEventListener("loadedmetadata", n, { once: !0 }), () => {
			t?.removeEventListener("loadedmetadata", n), A(e);
		};
	}, [
		L,
		i,
		c,
		l,
		A,
		k
	]), /* @__PURE__ */ (0, S.jsx)("video", {
		ref: x,
		disableRemotePlayback: !0,
		...m
	});
}), Sd = (0, b.forwardRef)((e, t) => {
	let { startFrom: n, endAt: r, trimBefore: i, trimAfter: a, durationInFrames: o, name: s, pauseWhenBuffering: c, _remotionInternalStack: l, _remotionInternalNativeLoopPassed: u, showInTimeline: d, onAutoPlayError: f, onVideoFrame: p, ...m } = e, { loop: h, ...g } = e, { fps: _ } = Pn(), v = G(), y = oi(c);
	if (v.isClientSideRendering) throw Error("<Html5Video> is not supported in @remotion/web-renderer. Use <Video> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
	let { durations: x, setDurations: C } = (0, b.useContext)(Zs);
	if (typeof t == "string") throw Error("string refs are not supported");
	if (typeof e.src != "string") throw TypeError(`The \`<Html5Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(e.src)} instead.`);
	let w = Ws(e.src), T = (0, b.useCallback)((e, t) => {
		C({
			type: "got-duration",
			durationInSeconds: t,
			src: e
		});
	}, [C]), E = x[js(w)] ?? x[js(e.src)];
	Js({
		startFrom: n,
		endAt: r,
		trimBefore: i,
		trimAfter: a
	}), o !== void 0 && st(o, {
		component: "of the <Html5Video /> component",
		allowFloats: !0
	});
	let { trimBeforeValue: D, trimAfterValue: O } = Ys({
		startFrom: n,
		endAt: r,
		trimBefore: i,
		trimAfter: a
	}), k = Ns({
		durationInFrames: o,
		trimAfter: O,
		trimBefore: D
	}), A = k ?? (E === void 0 ? void 0 : E * _);
	return h && A !== void 0 ? Number.isFinite(A) ? /* @__PURE__ */ (0, S.jsx)(Is, {
		durationInFrames: Ms({
			trimAfter: k,
			mediaDurationInFrames: A,
			playbackRate: e.playbackRate ?? 1,
			trimBefore: D
		}),
		layout: "none",
		name: s,
		showInTimeline: !1,
		children: /* @__PURE__ */ (0, S.jsx)(Sd, {
			...g,
			ref: t,
			_remotionInternalStack: l,
			_remotionInternalNativeLoopPassed: !0
		})
	}) : /* @__PURE__ */ (0, S.jsx)(Sd, {
		...g,
		ref: t,
		_remotionInternalStack: l,
		_remotionInternalNativeLoopPassed: !0
	}) : D !== void 0 || k !== void 0 ? /* @__PURE__ */ (0, S.jsx)(Nc.Provider, {
		value: D ?? 0,
		children: /* @__PURE__ */ (0, S.jsx)(Wo, {
			layout: "none",
			from: 0 - (D ?? 0),
			showInTimeline: !1,
			durationInFrames: k === void 0 ? void 0 : (D ?? 0) + (k - (D ?? 0)) / (e.playbackRate ?? 1),
			name: s,
			children: /* @__PURE__ */ (0, S.jsx)(Sd, {
				pauseWhenBuffering: y,
				onVideoFrame: p,
				...m,
				ref: t,
				_remotionInternalStack: l
			})
		})
	}) : (Gs({
		playbackRate: e.playbackRate,
		preservePitch: e.preservePitch,
		volume: e.volume
	}, "Html5Video"), v.isRendering ? /* @__PURE__ */ (0, S.jsx)(xd, {
		onDuration: T,
		onVideoFrame: p ?? null,
		...m,
		ref: t
	}) : /* @__PURE__ */ (0, S.jsx)(cd, {
		onlyWarnForMediaSeekingError: !1,
		...m,
		ref: t,
		onVideoFrame: p ?? null,
		pauseWhenBuffering: y,
		onDuration: T,
		_remotionInternalStack: l ?? null,
		_remotionInternalNativeLoopPassed: u ?? !1,
		showInTimeline: d ?? !0,
		onAutoPlayError: f ?? void 0
	}));
});
z(Sd), rn();
var Cd = new Proxy({}, { get(e, t) {
	return t === "Bundling" || t === "Rendering" || t === "Log" || t === "Puppeteer" || t === "Output" ? Cd : () => {
		console.warn("⚠️  The CLI configuration has been extracted from Remotion Core."), console.warn("Update the import from the config file:"), console.warn(), console.warn("- Delete:"), console.warn("import {Config} from \"remotion\";"), console.warn("+ Replace:"), console.warn("import {Config} from \"@remotion/cli/config\";"), console.warn(), console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration."), process.exit(1);
	};
} });
Wo.displayName = "Sequence", z(Wo), ie(Wo), z(tn), z(Ae);
//#endregion
//#region node_modules/remotion/dist/esm/no-react.mjs
var wd = 4, Td = .001, Ed = 1e-7, Dd = 10, Od = 11, kd = 1 / (Od - 1), Ad = typeof Float32Array == "function";
function jd(e, t) {
	return 1 - 3 * t + 3 * e;
}
function Md(e, t) {
	return 3 * t - 6 * e;
}
function Nd(e) {
	return 3 * e;
}
function Pd(e, t, n) {
	return ((jd(t, n) * e + Md(t, n)) * e + Nd(t)) * e;
}
function Fd(e, t, n) {
	return 3 * jd(t, n) * e * e + 2 * Md(t, n) * e + Nd(t);
}
function Id({ aX: e, _aA: t, _aB: n, mX1: r, mX2: i }) {
	let a, o, s = 0, c = t, l = n;
	do
		o = c + (l - c) / 2, a = Pd(o, r, i) - e, a > 0 ? l = o : c = o;
	while (Math.abs(a) > Ed && ++s < Dd);
	return o;
}
function Ld(e, t, n, r) {
	let i = t;
	for (let t = 0; t < wd; ++t) {
		let t = Fd(i, n, r);
		if (t === 0) return i;
		let a = Pd(i, n, r) - e;
		i -= a / t;
	}
	return i;
}
function Rd(e, t, n, r) {
	if (!(e >= 0 && e <= 1 && n >= 0 && n <= 1)) throw Error("bezier x values must be in [0, 1] range");
	let i = Ad ? new Float32Array(Od) : Array(Od);
	if (e !== t || n !== r) for (let t = 0; t < Od; ++t) i[t] = Pd(t * kd, e, n);
	function a(t) {
		let r = 0, a = 1, o = Od - 1;
		for (; a !== o && i[a] <= t; ++a) r += kd;
		--a;
		let s = (t - i[a]) / (i[a + 1] - i[a]), c = r + s * kd, l = Fd(c, e, n);
		return l >= Td ? Ld(t, c, e, n) : l === 0 ? c : Id({
			aX: t,
			_aA: r,
			_aB: r + kd,
			mX1: e,
			mX2: n
		});
	}
	return function(i) {
		let o = Math.min(1, Math.max(0, i));
		return e === t && n === r ? o : o === 0 ? 0 : o === 1 ? 1 : Pd(a(o), t, r);
	};
}
var zd = ({ allowFloats: e, durationInFrames: t, frame: n }) => {
	if (n === void 0) throw TypeError("Argument missing for parameter \"frame\"");
	if (typeof n != "number") throw TypeError(`Argument passed for "frame" is not a number: ${n}`);
	if (!Number.isFinite(n)) throw RangeError(`Frame ${n} is not finite`);
	if (n % 1 != 0 && !e) throw RangeError(`Argument for frame must be an integer, but got ${n}`);
	if (n < 0 && n < -t) throw RangeError(`Cannot use frame ${n}: Duration of composition is ${t}, therefore the lowest frame that can be rendered is ${-t}`);
	if (n > t - 1) throw RangeError(`Cannot use frame ${n}: Duration of composition is ${t}, therefore the highest frame that can be rendered is ${t - 1}`);
};
function Bd(e, t, n) {
	if (typeof e != "number") throw Error(`"fps" must be a number, but you passed a value of type ${typeof e} ${t}`);
	if (!Number.isFinite(e)) throw Error(`"fps" must be a finite, but you passed ${e} ${t}`);
	if (isNaN(e)) throw Error(`"fps" must not be NaN, but got ${e} ${t}`);
	if (e <= 0) throw TypeError(`"fps" must be positive, but got ${e} ${t}`);
	if (n && e > 50) throw TypeError("The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif");
}
var Vd = (e) => {
	if (e !== void 0) {
		if (typeof e != "number") throw TypeError(`A "duration" of a spring must be a "number" but is "${typeof e}"`);
		if (Number.isNaN(e)) throw TypeError("A \"duration\" of a spring is NaN, which it must not be");
		if (!Number.isFinite(e)) throw TypeError("A \"duration\" of a spring must be finite, but is " + e);
		if (e <= 0) throw TypeError("A \"duration\" of a spring must be positive, but is " + e);
	}
}, Hd = {
	damping: 10,
	mass: 1,
	stiffness: 100,
	overshootClamping: !1
}, Ud = {};
function Wd({ animation: e, now: t, config: n }) {
	let { toValue: r, lastTimestamp: i, current: a, velocity: o } = e, s = Math.min(t - i, 64);
	if (n.damping <= 0) throw Error("Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.");
	let c = n.damping, l = n.mass, u = n.stiffness, d = [
		r,
		i,
		a,
		o,
		c,
		l,
		u,
		t
	].join("-");
	if (Ud[d]) return Ud[d];
	let f = -o, p = r - a, m = c / (2 * Math.sqrt(u * l)), h = Math.sqrt(u / l), g = h * Math.sqrt(1 - m ** 2), _ = s / 1e3, v = Math.sin(g * _), y = Math.cos(g * _), b = Math.exp(-m * h * _), x = b * (v * ((f + m * h * p) / g) + p * y), S = r - x, C = m * h * x - b * (y * (f + m * h * p) - g * p * v), w = Math.exp(-h * _), T = r - w * (p + (f + h * p) * _), E = w * (f * (_ * h - 1) + _ * p * h * h), D = {
		toValue: r,
		prevPosition: a,
		lastTimestamp: t,
		current: m < 1 ? S : T,
		velocity: m < 1 ? C : E
	};
	return Ud[d] = D, D;
}
var Gd = {};
function Kd({ frame: e, fps: t, config: n = {} }) {
	let r = {
		damping: n.damping ?? Hd.damping,
		mass: n.mass ?? Hd.mass,
		stiffness: n.stiffness ?? Hd.stiffness,
		overshootClamping: n.overshootClamping ?? Hd.overshootClamping
	}, i = [
		e,
		t,
		r.damping,
		r.mass,
		r.overshootClamping,
		r.stiffness
	].join("-");
	if (Gd[i]) return Gd[i];
	let a = {
		lastTimestamp: 0,
		current: 0,
		toValue: 1,
		velocity: 0,
		prevPosition: 0
	}, o = Math.max(0, e), s = o % 1;
	for (let e = 0; e <= Math.floor(o); e++) {
		let n = e / t * 1e3;
		a = Wd({
			animation: a,
			now: n,
			config: r
		});
	}
	return s > 0 && (a = Wd({
		animation: a,
		now: o / t * 1e3,
		config: r
	})), Gd[i] = a, a;
}
var qd = /* @__PURE__ */ new Map();
function Jd({ fps: e, config: t = {}, threshold: n = .005 }) {
	if (typeof n != "number") throw TypeError(`threshold must be a number, got ${n} of type ${typeof n}`);
	if (n === 0) return Infinity;
	if (n === 1) return 0;
	if (isNaN(n)) throw TypeError("Threshold is NaN");
	if (!Number.isFinite(n)) throw TypeError("Threshold is not finite");
	if (n < 0) throw TypeError("Threshold is below 0");
	let r = [
		e,
		t.damping,
		t.mass,
		t.overshootClamping,
		t.stiffness,
		n
	].join("-");
	if (qd.has(r)) return qd.get(r);
	Bd(e, "to the measureSpring() function", !1);
	let i = 0, a = 0, o = () => Kd({
		fps: e,
		frame: i,
		config: t
	}), s = o(), c = () => Math.abs(s.current - s.toValue), l = c();
	for (; l >= n;) i++, s = o(), l = c();
	a = i;
	for (let e = 0; e < 20; e++) i++, s = o(), l = c(), l >= n && (e = 0, a = i + 1);
	return qd.set(r, a), a;
}
function Yd({ frame: e, fps: t, config: n = {}, from: r = 0, to: i = 1, durationInFrames: a, durationRestThreshold: o, delay: s = 0, reverse: c = !1 }) {
	Vd(a), zd({
		frame: e,
		durationInFrames: Infinity,
		allowFloats: !0
	}), Bd(t, "to spring()", !1);
	let l = c || a !== void 0, u = l ? Jd({
		fps: t,
		config: n,
		threshold: o
	}) : void 0, d = l ? { get: () => u } : { get: () => {
		throw Error("did not calculate natural duration, this is an error with Remotion. Please report");
	} }, f = (c ? (a ?? d.get()) - e : e) + (c ? s : -s), p = a === void 0 ? f : f / (a / d.get());
	if (a && f > a) return i;
	let m = Kd({
		fps: t,
		frame: p,
		config: n
	}), h = n.overshootClamping ? i >= r ? Math.min(m.current, i) : Math.max(m.current, i) : m.current;
	return r === 0 && i === 1 ? h : zf(h, [0, 1], [r, i]);
}
var Xd = (e) => Math.min(1, Math.max(0, e)), Zd = 30, Qd = class e {
	static step0(e) {
		return +(e > 0);
	}
	static step1(e) {
		return +(e >= 1);
	}
	static linear(e) {
		return e;
	}
	static ease(t) {
		return e.bezier(.42, 0, 1, 1)(t);
	}
	static quad(e) {
		return e * e;
	}
	static cubic(e) {
		return e * e * e;
	}
	static poly(e) {
		return (t) => t ** e;
	}
	static sin(e) {
		return 1 - Math.cos(e * Math.PI / 2);
	}
	static circle(e) {
		let t = Xd(e);
		return 1 - Math.sqrt(1 - t * t);
	}
	static exp(e) {
		return 2 ** (10 * (e - 1));
	}
	static elastic(e = 1) {
		let t = e * Math.PI;
		return (e) => 1 - Math.cos(e * Math.PI / 2) ** 3 * Math.cos(e * t);
	}
	static back(e = 1.70158) {
		return (t) => t * t * ((e + 1) * t - e);
	}
	static spring({ allowTail: e = !1, durationRestThreshold: t, ...n } = {}) {
		return Object.assign((r) => r <= 0 ? 0 : !e && r >= 1 ? 1 : Yd(e ? {
			fps: Zd,
			frame: r * Jd({
				fps: Zd,
				config: n,
				threshold: t
			}),
			config: n
		} : {
			fps: Zd,
			frame: r * Zd,
			config: n,
			durationInFrames: Zd,
			durationRestThreshold: t
		}), { remotionShouldExtendRight: e });
	}
	static bounce(e) {
		let t = Xd(e);
		if (t < 1 / 2.75) return 7.5625 * t * t;
		if (t < 2 / 2.75) {
			let e = t - 1.5 / 2.75;
			return 7.5625 * e * e + .75;
		}
		if (t < 2.5 / 2.75) {
			let e = t - 2.25 / 2.75;
			return 7.5625 * e * e + .9375;
		}
		let n = t - 2.625 / 2.75;
		return 7.5625 * n * n + .984375;
	}
	static bezier(e, t, n, r) {
		return Rd(e, t, n, r);
	}
	static in(e) {
		return e;
	}
	static out(e) {
		return (t) => 1 - e(1 - t);
	}
	static inOut(e) {
		return (t) => t < .5 ? e(t * 2) / 2 : 1 - e((1 - t) * 2) / 2;
	}
}, $d = (e) => Math.round(e * 1e6) / 1e6, ef = /* @__PURE__ */ new Set([
	"deg",
	"rad",
	"grad",
	"turn"
]), tf = /* @__PURE__ */ new Set(/* @__PURE__ */ "%.cap.ch.cm.cqb.cqh.cqi.cqmax.cqmin.cqw.dvh.dvw.em.ex.ic.in.lh.lvh.lvw.mm.pc.pt.px.q.rem.rlh.svh.svw.vb.vh.vi.vmax.vmin.vw".split(".")), nf = /^([+-]?(?:\d+\.?\d*|\.\d+))([a-zA-Z%]+)?$/, rf = /* @__PURE__ */ new Set([
	"left",
	"center",
	"right",
	"top",
	"bottom"
]), af = (e) => e === "left" ? [{
	axis: "x",
	value: {
		value: 0,
		unit: "%"
	}
}] : e === "right" ? [{
	axis: "x",
	value: {
		value: 100,
		unit: "%"
	}
}] : e === "top" ? [{
	axis: "y",
	value: {
		value: 0,
		unit: "%"
	}
}] : e === "bottom" ? [{
	axis: "y",
	value: {
		value: 100,
		unit: "%"
	}
}] : [{
	axis: "x",
	value: {
		value: 50,
		unit: "%"
	}
}, {
	axis: "y",
	value: {
		value: 50,
		unit: "%"
	}
}], of = {
	value: 50,
	unit: "%"
}, sf = (e) => String($d(e)), cf = class extends TypeError {}, lf = (e, t) => {
	let n = nf.exec(e);
	if (n === null) throw new cf(`Cannot interpolate "${t}" because "${e}" is not a supported scale, translate, or rotate value`);
	let r = n[2] ?? null, i = Number(n[1]);
	if (!Number.isFinite(i)) throw TypeError(`Cannot interpolate "${t}" because "${e}" is not finite`);
	if (r === null) return {
		kind: "scale",
		value: i,
		unit: null
	};
	if (ef.has(r)) return {
		kind: "rotate",
		value: i,
		unit: r
	};
	if (tf.has(r)) return {
		kind: "translate",
		value: i,
		unit: r
	};
	throw TypeError(`Cannot interpolate "${t}" because "${r}" is not a supported translate or rotate unit`);
}, uf = ({ component: e, value: t, allowPercentage: n }) => {
	let r = nf.exec(e);
	if (r === null) throw TypeError(`Cannot interpolate "${t}" because "${e}" is not a supported transform-origin ${n ? "length-percentage" : "z length"}`);
	let i = r[2] ?? null, a = Number(r[1]);
	if (!Number.isFinite(a)) throw TypeError(`Cannot interpolate "${t}" because "${e}" is not finite`);
	if (i === null || !tf.has(i) || !n && i === "%") throw TypeError(`Cannot interpolate "${t}" because "${e}" is not a supported transform-origin ${n ? "length-percentage" : "z length"}`);
	return {
		value: a,
		unit: i
	};
}, df = (e, t) => {
	let n = e.toLowerCase();
	return rf.has(n) ? {
		type: "keyword",
		keyword: n
	} : {
		type: "length-percentage",
		parsed: uf({
			component: e,
			value: t,
			allowPercentage: !0
		})
	};
}, ff = (e, t, n) => {
	let r = [];
	for (let n of af(e)) for (let e of af(t)) n.axis !== e.axis && r.push(n.axis === "x" ? [n.value, e.value] : [e.value, n.value]);
	if (r.length === 0) throw TypeError(`Cannot interpolate "${n}" because "${e} ${t}" is not a valid transform-origin keyword pair`);
	return r[0];
}, pf = (e, t) => {
	if (e.length === 1) {
		let n = df(e[0], t);
		return n.type === "length-percentage" ? [n.parsed, of] : n.keyword === "top" || n.keyword === "bottom" ? [of, af(n.keyword)[0].value] : [af(n.keyword)[0].value, of];
	}
	let n = df(e[0], t), r = df(e[1], t);
	if (n.type === "length-percentage" && r.type === "length-percentage") return [n.parsed, r.parsed];
	if (n.type === "keyword" && r.type === "keyword") return ff(n.keyword, r.keyword, t);
	let i = n.type === "keyword" ? n : r.type === "keyword" ? r : null, a = n.type === "length-percentage" ? n.parsed : r.type === "length-percentage" ? r.parsed : null;
	if (i === null || a === null) throw Error("Expected a keyword and a length-percentage value");
	let o = n.type === "keyword";
	if (i.keyword === "left" || i.keyword === "right") {
		if (!o) throw TypeError(`Cannot interpolate "${t}" because horizontal transform-origin keywords must come before a length-percentage value`);
		return [af(i.keyword)[0].value, a];
	}
	return i.keyword === "top" || i.keyword === "bottom" ? [a, af(i.keyword)[0].value] : o ? [of, a] : [a, of];
}, mf = (e, t) => {
	let [n, r] = pf(t.slice(0, 2), e), i = t[2] === void 0 ? {
		value: 0,
		unit: null
	} : uf({
		component: t[2],
		value: e,
		allowPercentage: !1
	});
	return {
		kind: "translate",
		values: [
			n.value,
			r.value,
			i.value,
			0
		],
		units: [
			n.unit,
			r.unit,
			i.unit,
			null
		],
		dimensions: t[2] === void 0 ? 2 : 3,
		axisRotation: !1
	};
}, hf = (e) => {
	let t = e.trim().split(/\s+/), n = t.length === 2 ? t[0].toLowerCase() : null;
	if (n === "x" || n === "y" || n === "z") {
		let r = lf(t[1], e);
		return r.kind === "rotate" ? {
			kind: "rotate",
			values: n === "x" ? [
				1,
				0,
				0,
				r.value
			] : n === "y" ? [
				0,
				1,
				0,
				r.value
			] : [
				0,
				0,
				1,
				r.value
			],
			units: [
				null,
				null,
				null,
				r.unit
			],
			dimensions: 4,
			axisRotation: !0
		} : null;
	}
	if (t.length !== 4) return null;
	let r = t.slice(0, 3).map(Number);
	if (!r.every(Number.isFinite)) return null;
	let i = lf(t[3], e);
	return i.kind === "rotate" ? {
		kind: "rotate",
		values: [
			r[0],
			r[1],
			r[2],
			i.value
		],
		units: [
			null,
			null,
			null,
			i.unit
		],
		dimensions: 4,
		axisRotation: !0
	} : null;
}, gf = (e, t) => {
	if (typeof e == "number") {
		if (!Number.isFinite(e)) throw Error(`outputRange must contain only finite numbers, but got [${e}]`);
		return {
			kind: "scale",
			values: [
				e,
				e,
				1,
				0
			],
			units: [
				null,
				null,
				null,
				null
			],
			dimensions: 1,
			axisRotation: !1
		};
	}
	if (t === "transform-origin") {
		let t = e.trim().split(/\s+/);
		if (t.length < 1 || t.length > 3 || t[0] === "") throw TypeError(`String outputRange values must contain 1 to 3 components, but got "${e}"`);
		return mf(e, t);
	}
	let n = hf(e);
	if (n !== null) {
		if (t !== void 0 && t !== "rotate") throw TypeError(`Cannot interpolate "${e}" as ${t} because it is a rotate value`);
		return n;
	}
	let r = e.trim().split(/\s+/);
	if (r.length < 1 || r.length > 3 || r[0] === "") throw TypeError(`String outputRange values must contain 1 to 3 components, but got "${e}"`);
	if (r.some((e) => rf.has(e.toLowerCase()))) {
		if (t !== void 0) throw TypeError(`Cannot interpolate "${e}" as ${t} because it is a transform-origin value`);
		return mf(e, r);
	}
	let i = r.map((t) => lf(t, e)), [{ kind: a }] = i;
	for (let t of i) if (t.kind !== a) throw TypeError(`Cannot interpolate "${e}" because it mixes ${a} and ${t.kind} values`);
	if (t !== void 0 && t !== a) throw TypeError(`Cannot interpolate "${e}" as ${t} because it is a ${a} value`);
	if (a === "scale") {
		let e = i[0].value;
		return {
			kind: a,
			values: [
				e,
				i[1]?.value ?? e,
				i[2]?.value ?? 1,
				0
			],
			units: [
				null,
				null,
				null,
				null
			],
			dimensions: i.length,
			axisRotation: !1
		};
	}
	return {
		kind: a,
		values: [
			i[0].value,
			i[1]?.value ?? 0,
			i[2]?.value ?? 0,
			0
		],
		units: [
			i[0].unit,
			i[1]?.unit ?? null,
			i[2]?.unit ?? null,
			null
		],
		dimensions: i.length,
		axisRotation: !1
	};
}, _f = ({ kind: e, values: t, units: n, dimensions: r, axisRotation: i }) => i ? `${sf(t[0])} ${sf(t[1])} ${sf(t[2])} ${sf(t[3])}${n[3]}` : e === "scale" ? t.slice(0, r).map((e) => sf(e)).join(" ") : t.slice(0, r).map((e, t) => `${sf(e)}${n[t]}`).join(" "), vf = (e) => e === 0 ? 0 : Math.sign(e) * e * e, yf = (e) => e === 0 ? 0 : Math.sign(e) * Math.sqrt(Math.abs(e));
function bf(e, t, n, r) {
	let { extrapolateLeft: i, extrapolateRight: a, easing: o, output: s } = r, c = e, [l, u] = t, [d, f] = n;
	if (c < l) {
		if (i === "identity") return c;
		if (i === "clamp") c = l;
		else if (i === "wrap") {
			let e = u - l;
			c = ((c - l) % e + e) % e + l;
		}
	}
	if (c > u) {
		if (a === "identity") return c;
		if (a === "clamp") c = u;
		else if (a === "wrap") {
			let e = u - l;
			c = ((c - l) % e + e) % e + l;
		}
	}
	if (d === f) return d;
	if (c = (c - l) / (u - l), c = o(c), s === "perceptual-scale") {
		let e = vf(d), t = vf(f);
		c = yf(c * (t - e) + e);
	} else c = c * (f - d) + d;
	return c;
}
function xf(e, t) {
	let n = 1;
	for (; n < t.length - 1 && !(t[n] >= e); ++n);
	return n - 1;
}
var Sf = (e) => e, Cf = (e) => e ?? "linear", wf = (e) => e.remotionShouldExtendRight === !0, Tf = ({ easing: e, segmentIndex: t }) => e === void 0 ? Sf : typeof e == "function" ? e : e[t], Ef = ({ input: e, inputRange: t, outputRange: n, easing: r, extrapolateLeft: i, extrapolateRight: a, output: o }) => bf(e, t, n, {
	easing: r,
	extrapolateLeft: i,
	extrapolateRight: e > t[1] && a === "clamp" && wf(r) ? "extend" : a,
	output: o
}), Df = ({ input: e, inputRange: t, outputRange: n, options: r }) => {
	let i = Cf(r?.output);
	if (t.length === 1) return n[0];
	let a = r?.easing, o = "extend";
	r?.extrapolateLeft !== void 0 && (o = r.extrapolateLeft);
	let s = "extend";
	r?.extrapolateRight !== void 0 && (s = r.extrapolateRight);
	let c = r?.posterize === void 0 ? e : Math.floor(e / r.posterize) * r.posterize, l = xf(c, t), u = Tf({
		easing: a,
		segmentIndex: l
	}), d = Ef({
		input: c,
		inputRange: [t[l], t[l + 1]],
		outputRange: [n[l], n[l + 1]],
		easing: u,
		extrapolateLeft: o,
		extrapolateRight: s,
		output: i
	});
	for (let e = 0; e < l; e++) {
		let r = Tf({
			easing: a,
			segmentIndex: e
		});
		if (!wf(r)) continue;
		let s = t[e + 1];
		if (c <= s) continue;
		let l = Ef({
			input: c,
			inputRange: [t[e], s],
			outputRange: [n[e], n[e + 1]],
			easing: r,
			extrapolateLeft: o,
			extrapolateRight: "extend",
			output: i
		});
		d += l - n[e + 1];
	}
	return d;
}, Of = ({ input: e, inputRange: t, outputRange: n, options: r, outputType: i }) => {
	let a = n.map((e) => gf(e, i)), o = a.some((e) => e.axisRotation), s = r?.posterize === void 0 ? e : Math.floor(e / r.posterize) * r.posterize, c = t.length === 1 ? 0 : xf(s, t), l = o ? a.map((e, t) => {
		if (e.kind !== "rotate" || e.axisRotation) return e;
		if (e.dimensions !== 1) throw TypeError("Cannot interpolate a multi-angle rotate value with an axis rotation");
		let n = e.values[0] === 0 ? t === 0 ? a.find((e) => e.axisRotation) : t === a.length - 1 ? [...a].reverse().find((e) => e.axisRotation) : t === c ? a[t + 1] : t === c + 1 ? a[t - 1] : void 0 : void 0, r = n?.axisRotation ? n.values : [
			0,
			0,
			1
		];
		return {
			kind: "rotate",
			values: [
				r[0],
				r[1],
				r[2],
				e.values[0]
			],
			units: [
				null,
				null,
				null,
				e.units[0]
			],
			dimensions: 4,
			axisRotation: !0
		};
	}) : a, u = l[0]?.kind;
	if (u === void 0) throw Error("outputRange must have at least 1 element");
	for (let e of l) if (e.kind !== u) throw TypeError(`Cannot interpolate ${u} values with ${e.kind} values`);
	let d = Math.max(...l.map((e) => e.dimensions)), f = [
		null,
		null,
		null,
		null
	];
	if (u !== "scale") {
		for (let e = 0; e < d; e++) if (!(o && e < 3)) {
			for (let t of l) {
				let n = t.units[e];
				if (n !== null) {
					if (f[e] === null) {
						f[e] = n;
						continue;
					}
					if (f[e] !== n) throw TypeError(`Cannot interpolate ${u} values with different units on axis ${e + 1}: ${f[e]} and ${n}`);
				}
			}
			if (f[e] === null) throw TypeError(`Cannot interpolate ${u} values because axis ${e + 1} has no unit`);
		}
	}
	let p = [
		0,
		0,
		0,
		0
	];
	for (let n = 0; n < d; n++) p[n] = Df({
		input: e,
		inputRange: t,
		outputRange: l.map((e) => e.values[n]),
		options: r
	});
	return _f({
		kind: u,
		values: p,
		units: f,
		dimensions: d,
		axisRotation: o
	});
}, kf = ({ input: e, inputRange: t, outputRange: n, options: r }) => Df({
	input: e,
	inputRange: t,
	outputRange: n.map((e) => {
		if (typeof e == "string") {
			let t = e.toLowerCase();
			if (t === "normal") return 400;
			if (t === "bold") return 700;
		}
		let t = typeof e == "string" ? nf.exec(e) : null, n = typeof e == "number" ? e : t !== null && t[2] === void 0 ? Number(t[1]) : NaN;
		if (!Number.isFinite(n) || n < 1 || n > 1e3) throw TypeError(`Cannot interpolate font weight "${e}". Expected "normal", "bold", or a number between 1 and 1000`);
		return n;
	}),
	options: r
}), Af = ({ input: e, inputRange: t, outputRange: n, options: r }) => {
	if (t.length === 1) return n[0];
	for (let e = 0; e < t.length - 1; e++) if (Tf({
		easing: r?.easing,
		segmentIndex: e
	}) !== Qd.step1) throw TypeError(typeof n[0] == "boolean" ? "Booleans can only be interpolated using Easing.step1" : "Non-numeric strings can only be interpolated using Easing.step1");
	let i = r?.posterize === void 0 ? e : Math.floor(e / r.posterize) * r.posterize, a = t[0], o = t[t.length - 1], s = i;
	if (s < a) {
		if (r?.extrapolateLeft === "identity") throw TypeError(typeof n[0] == "boolean" ? "extrapolateLeft: \"identity\" is not supported for booleans" : "extrapolateLeft: \"identity\" is not supported for non-numeric strings");
		if (r?.extrapolateLeft === "wrap") {
			let e = o - a;
			s = ((s - a) % e + e) % e + a;
		} else return n[0];
	}
	if (s > o) {
		if (r?.extrapolateRight === "identity") throw TypeError(typeof n[0] == "boolean" ? "extrapolateRight: \"identity\" is not supported for booleans" : "extrapolateRight: \"identity\" is not supported for non-numeric strings");
		if (r?.extrapolateRight === "wrap") {
			let e = o - a;
			s = ((s - a) % e + e) % e + a;
		} else return n[n.length - 1];
	}
	let c = xf(s, t);
	return s >= t[c + 1] ? n[c + 1] : n[c];
}, jf = (e) => {
	let t = e[0]?.length;
	if (t === void 0) throw Error("outputRange must have at least 1 element");
	if (t === 0) throw TypeError("outputRange tuples must contain at least 1 number");
	for (let n of e) {
		if (n.length !== t) throw TypeError(`outputRange tuples must all have the same length, but got ${t} and ${n.length}`);
		for (let e of n) if (typeof e != "number" || !Number.isFinite(e)) throw TypeError(`outputRange tuples must contain only finite numbers, but got [${n.join(",")}]`);
	}
	return t;
}, Mf = ({ input: e, inputRange: t, outputRange: n, options: r }) => {
	let i = jf(n);
	return Array(i).fill(!0).map((i, a) => Df({
		input: e,
		inputRange: t,
		outputRange: n.map((e) => e[a]),
		options: r
	}));
};
function Nf(e) {
	for (let t = 1; t < e.length; ++t) if (!(e[t] > e[t - 1])) throw Error(`inputRange must be strictly monotonically increasing but got [${e.join(",")}]`);
}
function Pf(e, t) {
	if (t.length < 1) throw Error(e + " must have at least 1 element");
	for (let n of t) {
		if (typeof n != "number") throw Error(`${e} must contain only numbers`);
		if (!Number.isFinite(n)) throw Error(`${e} must contain only finite numbers, but got [${t.join(",")}]`);
	}
}
function Ff(e, t) {
	if (e === void 0 || typeof e == "function") return;
	let n = t - 1;
	if (e.length !== n) throw Error(`When easing is an array, it must have one entry per segment between keyframes (length inputRange.length - 1 = ${n}), but got length ${e.length}`);
	for (let t = 0; t < e.length; t++) if (typeof e[t] != "function") throw Error(`easing[${t}] must be a function`);
}
function If(e) {
	if (e !== void 0 && (typeof e != "number" || !Number.isFinite(e) || e <= 0)) throw Error(`posterize must be a positive finite number, but got ${e}`);
}
function Lf(e) {
	if (e !== void 0 && e !== "linear" && e !== "perceptual-scale") throw Error(`output must be "linear" or "perceptual-scale", but got ${String(e)}`);
}
function Rf(e) {
	if (e !== void 0 && e !== "font-weight" && e !== "scale" && e !== "translate" && e !== "rotate" && e !== "transform-origin") throw Error(`outputType must be "font-weight", "scale", "translate", "rotate", or "transform-origin", but got ${String(e)}`);
}
function zf(e, t, n, r) {
	if (e === void 0) throw Error("input can not be undefined");
	if (t === void 0) throw Error("inputRange can not be undefined");
	if (n === void 0) throw Error("outputRange can not be undefined");
	if (t.length !== n.length) throw Error("inputRange (" + t.length + ") and outputRange (" + n.length + ") must have the same length");
	if (Pf("inputRange", t), Nf(t), Ff(r?.easing, t.length), If(r?.posterize), Lf(r?.output), Rf(r?.outputType), typeof e != "number") throw TypeError("Cannot interpolate an input which is not a number");
	if (!Array.isArray(n)) throw Error("outputRange must contain only numbers");
	let i = r?.outputType;
	if (n.some((e) => typeof e == "boolean")) {
		if (!n.every((e) => typeof e == "boolean")) throw TypeError("Boolean outputRange must contain only booleans");
		if (i !== void 0) throw TypeError("Boolean outputRange cannot use outputType");
		return Af({
			input: e,
			inputRange: t,
			outputRange: n,
			options: r
		});
	}
	if (i === "font-weight") {
		if (!n.every((e) => typeof e == "number" || typeof e == "string")) throw TypeError("Font weight outputRange must contain only numbers or strings");
		return kf({
			input: e,
			inputRange: t,
			outputRange: n,
			options: r
		});
	}
	let a = n.some((e) => typeof e == "string");
	if (i !== void 0 && i !== "scale" && !a) throw TypeError(`${i} outputRange must contain strings with the appropriate CSS units`);
	if (a) {
		if (!n.every((e) => typeof e == "string" || typeof e == "number")) throw TypeError("outputRange must contain only numbers, or supported scale, translate, and rotate strings");
		try {
			return Of({
				input: e,
				inputRange: t,
				outputRange: n,
				options: r,
				outputType: i
			});
		} catch (a) {
			if (!n.every((e) => typeof e == "string") || !n.some((e) => {
				try {
					return gf(e, i), !1;
				} catch (e) {
					return e instanceof cf;
				}
			})) throw a;
			return Af({
				input: e,
				inputRange: t,
				outputRange: n,
				options: r
			});
		}
	}
	if (n.every((e) => Array.isArray(e))) return Mf({
		input: e,
		inputRange: t,
		outputRange: n,
		options: r
	});
	if (!n.every((e) => typeof e == "number")) throw TypeError("outputRange must contain only numbers, numeric tuples, or supported scale, translate, and rotate strings");
	return Pf("outputRange", n), Df({
		input: e,
		inputRange: t,
		outputRange: n,
		options: r
	});
}
var Bf = "The delayRender was called:", $ = "Retries left: ", Vf = "- Rendering the frame will be retried.", Hf = "handle was cleared after", Uf = ({ schema: e, key: t, value: n }) => {
	let r = e[t];
	if (!r) throw Error("Key " + JSON.stringify(t) + " not found in schema");
	if (typeof n != "string") throw Error("Value must be a string, but is " + JSON.stringify(n));
	if (r.type !== "enum") throw Error("Key " + JSON.stringify(t) + " is not an enum");
	if (!r.variants[n]) throw Error("Value for " + JSON.stringify(t) + " must be one of " + Object.keys(r.variants).map((e) => JSON.stringify(e)).join(", ") + ", got " + JSON.stringify(n));
	let i = Object.keys(r.variants).filter((e) => e !== n), a = /* @__PURE__ */ new Set();
	for (let e of i) {
		let t = r.variants[e], n = Object.keys(t);
		for (let e of n) a.add(e);
	}
	return [...a];
}, Wf = [], Gf = /* @__PURE__ */ new Map(), Kf = (e) => {
	let t = Gf.get(e);
	if (t) return t;
	let n = fetch(e).then((t) => {
		if (!t.ok) throw Error(`Failed to load font ${JSON.stringify(e)}: ${t.status} ${t.statusText}`);
		return t.arrayBuffer();
	}).catch((t) => {
		throw Gf.delete(e), t;
	});
	return Gf.set(e, n), n;
}, qf = (e) => {
	Wf.some((t) => t.ascentOverride === e.ascentOverride && t.descentOverride === e.descentOverride && t.display === e.display && t.featureSettings === e.featureSettings && t.fontFamily === e.fontFamily && t.fontUrl === e.fontUrl && t.format === e.format && t.lineGapOverride === e.lineGapOverride && t.style === e.style && t.weight === e.weight && t.stretch === e.stretch && t.unicodeRange === e.unicodeRange && t.variant === e.variant) || Wf.push(e);
}, Jf = () => Wf.slice(), Yf = "remotion-date:", Xf = "remotion-file:", Zf = ({ data: e, indent: t, staticBase: n }) => {
	let r = !1, i = !1, a = !1, o = !1;
	try {
		return {
			serializedString: JSON.stringify(e, function(e, t) {
				let s = this[e];
				return s instanceof Date ? (r = !0, `${Yf}${s.toISOString()}`) : s instanceof Map ? (a = !0, t) : s instanceof Set ? (o = !0, t) : typeof s == "string" && n !== null && n !== "" && s.startsWith(n) ? (i = !0, `${Xf}${s.replace(n + "/", "")}`) : t;
			}, t),
			customDateUsed: r,
			customFileUsed: i,
			mapUsed: a,
			setUsed: o
		};
	} catch (e) {
		throw Error("Could not serialize the passed input props to JSON: " + e.message);
	}
}, Qf = (e) => {
	let t = e.replace(Xf, ""), n = t;
	try {
		n = t.split("/").map(decodeURIComponent).join("/");
	} catch {}
	let r = window.remotion_staticFiles?.find((e) => e.name === n);
	return r ? r.src : `${window.remotion_staticBase}/${t}`;
}, $f = (e) => JSON.parse(e, (e, t) => typeof t == "string" && t.startsWith(Yf) ? new Date(t.replace(Yf, "")) : typeof t == "string" && t.startsWith(Xf) ? Qf(t) : t), ep = {
	"style.transformOrigin": {
		type: "transform-origin",
		step: 1,
		default: "50% 50%",
		description: "Transform origin"
	},
	"style.translate": {
		type: "translate",
		step: 1,
		default: "0px 0px",
		description: "Offset"
	},
	"style.scale": {
		type: "scale",
		max: 100,
		step: .01,
		default: 1,
		description: "Scale",
		defaultKeyframeOutput: "perceptual-scale"
	},
	"style.rotate": {
		type: "rotation-css",
		step: 1,
		default: "0deg",
		description: "Rotation"
	},
	"style.opacity": {
		type: "number",
		min: 0,
		max: 1,
		step: .01,
		default: 1,
		description: "Opacity",
		hiddenFromList: !1
	}
}, tp = {
	"style.borderWidth": {
		type: "number",
		default: void 0,
		min: 0,
		step: 1,
		description: "Border width",
		hiddenFromList: !1
	},
	"style.borderStyle": {
		type: "enum",
		default: "none",
		description: "Border style",
		variants: {
			none: {},
			hidden: {},
			solid: {},
			dashed: {},
			dotted: {},
			double: {},
			groove: {},
			ridge: {},
			inset: {},
			outset: {}
		}
	},
	"style.borderColor": {
		type: "color",
		default: void 0,
		description: "Border color"
	}
}, np = {
	"style.borderRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Border radius",
		hiddenFromList: !1,
		keyframable: !0
	},
	"style.borderTopLeftRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Top left radius",
		hiddenFromList: !1
	},
	"style.borderTopRightRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Top right radius",
		hiddenFromList: !1
	},
	"style.borderBottomRightRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Bottom right radius",
		hiddenFromList: !1
	},
	"style.borderBottomLeftRadius": {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		description: "Bottom left radius",
		hiddenFromList: !1
	}
}, rp = { "style.backgroundColor": {
	type: "color",
	default: "transparent",
	description: "Color"
} }, ip = {
	premountFor: {
		type: "number",
		default: 0,
		description: "Premount For",
		min: 0,
		step: 1,
		hiddenFromList: !1,
		keyframable: !1
	},
	postmountFor: {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		hiddenFromList: !0,
		keyframable: !1
	}
}, ap = {
	durationInFrames: {
		type: "number",
		default: void 0,
		min: 1,
		step: 1,
		hiddenFromList: !0
	},
	from: {
		type: "number",
		default: 0,
		step: 1,
		hiddenFromList: !0
	},
	trimBefore: {
		type: "number",
		default: 0,
		min: 0,
		step: 1,
		hiddenFromList: !0
	},
	playbackRate: {
		type: "number",
		default: 1,
		min: .01,
		step: .1,
		description: "Playback rate",
		hiddenFromList: !1,
		keyframable: !1
	},
	freeze: {
		type: "number",
		default: null,
		step: 1,
		hiddenFromList: !0
	},
	hidden: {
		type: "boolean",
		default: !1,
		description: "Hidden"
	},
	name: { type: "hidden" },
	showInTimeline: { type: "hidden" },
	layout: {
		type: "enum",
		default: "absolute-fill",
		description: "Layout",
		variants: {
			"absolute-fill": {
				cropLeft: {
					type: "number",
					default: 0,
					description: "Crop left",
					min: 0,
					max: 1,
					step: .01,
					hiddenFromList: !1,
					keyframable: !0
				},
				cropRight: {
					type: "number",
					default: 0,
					description: "Crop right",
					min: 0,
					max: 1,
					step: .01,
					hiddenFromList: !1,
					keyframable: !0
				},
				cropTop: {
					type: "number",
					default: 0,
					description: "Crop top",
					min: 0,
					max: 1,
					step: .01,
					hiddenFromList: !1,
					keyframable: !0
				},
				cropBottom: {
					type: "number",
					default: 0,
					description: "Crop bottom",
					min: 0,
					max: 1,
					step: .01,
					hiddenFromList: !1,
					keyframable: !0
				},
				...ep,
				...rp,
				...tp,
				...np,
				...ip
			},
			none: {}
		}
	}
};
ap.layout, { ...ap }, { ...ap.layout };
var op = "[-+]?\\d*\\.?\\d+", sp = op + "%";
function cp(...e) {
	return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var lp = "(?:none|[-+]?\\d*\\.?\\d+(?:%|deg|rad|grad|turn)?)";
function up(e) {
	return RegExp(e + "\\(\\s*(" + lp + ")\\s+(" + lp + ")\\s+(" + lp + ")(?:\\s*\\/\\s*(" + lp + "))?\\s*\\)");
}
function dp() {
	let e = {
		rgb: void 0,
		rgba: void 0,
		hsl: void 0,
		hsla: void 0,
		hex3: void 0,
		hex4: void 0,
		hex5: void 0,
		hex6: void 0,
		hex8: void 0,
		oklch: void 0,
		oklab: void 0,
		lab: void 0,
		lch: void 0,
		hwb: void 0
	};
	return e.rgb === void 0 && (e.rgb = RegExp("rgb" + cp(op, op, op)), e.rgba = RegExp("rgba" + cp(op, op, op, op)), e.hsl = RegExp("hsl" + cp(op, sp, sp)), e.hsla = RegExp("hsla" + cp(op, sp, sp, op)), e.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, e.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, e.hex6 = /^#([0-9a-fA-F]{6})$/, e.hex8 = /^#([0-9a-fA-F]{8})$/, e.oklch = up("oklch"), e.oklab = up("oklab"), e.lab = up("lab"), e.lch = up("lch"), e.hwb = up("hwb")), e;
}
function fp(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function pp(e, t, n) {
	let r = n < .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r, a = fp(i, r, e + 1 / 3), o = fp(i, r, e), s = fp(i, r, e - 1 / 3);
	return Math.round(a * 255) << 24 | Math.round(o * 255) << 16 | Math.round(s * 255) << 8;
}
function mp(e) {
	let t = Number.parseInt(e, 10);
	return t < 0 ? 0 : t > 255 ? 255 : t;
}
function hp(e) {
	return (Number.parseFloat(e) % 360 + 360) % 360 / 360;
}
function gp(e) {
	let t = Number.parseFloat(e);
	return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function _p(e) {
	let t = Number.parseFloat(e);
	return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function vp(e, t) {
	return e === "none" ? 0 : e.endsWith("%") ? Number.parseFloat(e) / 100 * t : Number.parseFloat(e);
}
function yp(e) {
	return e === "none" ? 0 : e.endsWith("rad") ? Number.parseFloat(e) * 180 / Math.PI : e.endsWith("grad") ? Number.parseFloat(e) * .9 : e.endsWith("turn") ? Number.parseFloat(e) * 360 : Number.parseFloat(e);
}
function bp(e) {
	return e === void 0 || e === "none" ? 1 : e.endsWith("%") ? Math.max(0, Math.min(1, Number.parseFloat(e) / 100)) : Math.max(0, Math.min(1, Number.parseFloat(e)));
}
function xp(e) {
	return e <= .0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - .055;
}
function Sp(e) {
	return Math.max(0, Math.min(1, e));
}
function Cp(e, t, n, r) {
	let i = Math.round(Sp(e) * 255), a = Math.round(Sp(t) * 255), o = Math.round(Sp(n) * 255), s = Math.round(Sp(r) * 255);
	return (i << 24 | a << 16 | o << 8 | s) >>> 0;
}
function wp(e, t, n) {
	let r = e + .3963377774 * t + .2158037573 * n, i = e - .1055613458 * t - .0638541728 * n, a = e - .0894841775 * t - 1.291485548 * n, o = r * r * r, s = i * i * i, c = a * a * a, l = 4.0767416621 * o - 3.3077115913 * s + .2309699292 * c, u = -1.2684380046 * o + 2.6097574011 * s - .3413193965 * c, d = -.0041960863 * o - .7034186147 * s + 1.707614701 * c;
	return [
		xp(l),
		xp(u),
		xp(d)
	];
}
function Tp(e, t, n) {
	let r = 216 / 24389, i = 24389 / 27, a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, c = o * o * o, l = s * s * s, u = c > r ? c : (116 * o - 16) / i, d = e > i * r ? ((e + 16) / 116) ** 3 : e / i, f = l > r ? l : (116 * s - 16) / i, p = u * .95047, m = d * 1, h = f * 1.08883, g = 3.2404542 * p - 1.5371385 * m - .4985314 * h, _ = -.969266 * p + 1.8760108 * m + .041556 * h, v = .0556434 * p - .2040259 * m + 1.0572252 * h;
	return [
		xp(g),
		xp(_),
		xp(v)
	];
}
function Ep(e, t, n) {
	if (t + n >= 1) {
		let e = t / (t + n);
		return [
			e,
			e,
			e
		];
	}
	let r = fp(0, 1, e + 1 / 3), i = fp(0, 1, e), a = fp(0, 1, e - 1 / 3), o = 1 - t - n;
	return [
		r * o + t,
		i * o + t,
		a * o + t
	];
}
var Dp = {
	transparent: 0,
	aliceblue: 4042850303,
	antiquewhite: 4209760255,
	aqua: 16777215,
	aquamarine: 2147472639,
	azure: 4043309055,
	beige: 4126530815,
	bisque: 4293182719,
	black: 255,
	blanchedalmond: 4293643775,
	blue: 65535,
	blueviolet: 2318131967,
	brown: 2771004159,
	burlywood: 3736635391,
	burntsienna: 3934150143,
	cadetblue: 1604231423,
	chartreuse: 2147418367,
	chocolate: 3530104575,
	coral: 4286533887,
	cornflowerblue: 1687547391,
	cornsilk: 4294499583,
	crimson: 3692313855,
	cyan: 16777215,
	darkblue: 35839,
	darkcyan: 9145343,
	darkgoldenrod: 3095792639,
	darkgray: 2846468607,
	darkgreen: 6553855,
	darkgrey: 2846468607,
	darkkhaki: 3182914559,
	darkmagenta: 2332068863,
	darkolivegreen: 1433087999,
	darkorange: 4287365375,
	darkorchid: 2570243327,
	darkred: 2332033279,
	darksalmon: 3918953215,
	darkseagreen: 2411499519,
	darkslateblue: 1211993087,
	darkslategray: 793726975,
	darkslategrey: 793726975,
	darkturquoise: 13554175,
	darkviolet: 2483082239,
	deeppink: 4279538687,
	deepskyblue: 12582911,
	dimgray: 1768516095,
	dimgrey: 1768516095,
	dodgerblue: 512819199,
	firebrick: 2988581631,
	floralwhite: 4294635775,
	forestgreen: 579543807,
	fuchsia: 4278255615,
	gainsboro: 3705462015,
	ghostwhite: 4177068031,
	gold: 4292280575,
	goldenrod: 3668254975,
	gray: 2155905279,
	green: 8388863,
	greenyellow: 2919182335,
	grey: 2155905279,
	honeydew: 4043305215,
	hotpink: 4285117695,
	indianred: 3445382399,
	indigo: 1258324735,
	ivory: 4294963455,
	khaki: 4041641215,
	lavender: 3873897215,
	lavenderblush: 4293981695,
	lawngreen: 2096890111,
	lemonchiffon: 4294626815,
	lightblue: 2916673279,
	lightcoral: 4034953471,
	lightcyan: 3774873599,
	lightgoldenrodyellow: 4210742015,
	lightgray: 3553874943,
	lightgreen: 2431553791,
	lightgrey: 3553874943,
	lightpink: 4290167295,
	lightsalmon: 4288707327,
	lightseagreen: 548580095,
	lightskyblue: 2278488831,
	lightslategray: 2005441023,
	lightslategrey: 2005441023,
	lightsteelblue: 2965692159,
	lightyellow: 4294959359,
	lime: 16711935,
	limegreen: 852308735,
	linen: 4210091775,
	magenta: 4278255615,
	maroon: 2147483903,
	mediumaquamarine: 1724754687,
	mediumblue: 52735,
	mediumorchid: 3126187007,
	mediumpurple: 2473647103,
	mediumseagreen: 1018393087,
	mediumslateblue: 2070474495,
	mediumspringgreen: 16423679,
	mediumturquoise: 1221709055,
	mediumvioletred: 3340076543,
	midnightblue: 421097727,
	mintcream: 4127193855,
	mistyrose: 4293190143,
	moccasin: 4293178879,
	navajowhite: 4292783615,
	navy: 33023,
	oldlace: 4260751103,
	olive: 2155872511,
	olivedrab: 1804477439,
	orange: 4289003775,
	orangered: 4282712319,
	orchid: 3664828159,
	palegoldenrod: 4008225535,
	palegreen: 2566625535,
	paleturquoise: 2951671551,
	palevioletred: 3681588223,
	papayawhip: 4293907967,
	peachpuff: 4292524543,
	peru: 3448061951,
	pink: 4290825215,
	plum: 3718307327,
	powderblue: 2967529215,
	purple: 2147516671,
	rebeccapurple: 1714657791,
	red: 4278190335,
	rosybrown: 3163525119,
	royalblue: 1097458175,
	saddlebrown: 2336560127,
	salmon: 4202722047,
	sandybrown: 4104413439,
	seagreen: 780883967,
	seashell: 4294307583,
	sienna: 2689740287,
	silver: 3233857791,
	skyblue: 2278484991,
	slateblue: 1784335871,
	slategray: 1887473919,
	slategrey: 1887473919,
	snow: 4294638335,
	springgreen: 16744447,
	steelblue: 1182971135,
	tan: 3535047935,
	teal: 8421631,
	thistle: 3636451583,
	tomato: 4284696575,
	turquoise: 1088475391,
	violet: 4001558271,
	wheat: 4125012991,
	white: 4294967295,
	whitesmoke: 4126537215,
	yellow: 4294902015,
	yellowgreen: 2597139199
};
function Op(e) {
	let t = dp(), n;
	if (t.hex6 && (n = t.hex6.exec(e))) return Number.parseInt(n[1] + "ff", 16) >>> 0;
	if (Dp[e] !== void 0) return Dp[e];
	if (t.rgb && (n = t.rgb.exec(e))) return (mp(n[1]) << 24 | mp(n[2]) << 16 | mp(n[3]) << 8 | 255) >>> 0;
	if (t.rgba && (n = t.rgba.exec(e))) return (mp(n[1]) << 24 | mp(n[2]) << 16 | mp(n[3]) << 8 | gp(n[4])) >>> 0;
	if (t.hex3 && (n = t.hex3.exec(e))) return Number.parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + "ff", 16) >>> 0;
	if (t.hex8 && (n = t.hex8.exec(e))) return Number.parseInt(n[1], 16) >>> 0;
	if (t.hex4 && (n = t.hex4.exec(e))) return Number.parseInt(n[1] + n[1] + n[2] + n[2] + n[3] + n[3] + n[4] + n[4], 16) >>> 0;
	if (t.hsl && (n = t.hsl.exec(e))) return (pp(hp(n[1]), _p(n[2]), _p(n[3])) | 255) >>> 0;
	if (t.hsla && (n = t.hsla.exec(e))) return (pp(hp(n[1]), _p(n[2]), _p(n[3])) | gp(n[4])) >>> 0;
	if (t.oklch && (n = t.oklch.exec(e))) {
		let e = vp(n[1], 1), t = vp(n[2], .4), r = yp(n[3]), i = bp(n[4]), a = r * Math.PI / 180, [o, s, c] = wp(e, t * Math.cos(a), t * Math.sin(a));
		return Cp(o, s, c, i);
	}
	if (t.oklab && (n = t.oklab.exec(e))) {
		let e = vp(n[1], 1), t = vp(n[2], .4), r = vp(n[3], .4), i = bp(n[4]), [a, o, s] = wp(e, t, r);
		return Cp(a, o, s, i);
	}
	if (t.lab && (n = t.lab.exec(e))) {
		let e = vp(n[1], 100), t = vp(n[2], 125), r = vp(n[3], 125), i = bp(n[4]), [a, o, s] = Tp(e, t, r);
		return Cp(a, o, s, i);
	}
	if (t.lch && (n = t.lch.exec(e))) {
		let e = vp(n[1], 100), t = vp(n[2], 150), r = yp(n[3]), i = bp(n[4]), a = r * Math.PI / 180, [o, s, c] = Tp(e, t * Math.cos(a), t * Math.sin(a));
		return Cp(o, s, c, i);
	}
	if (t.hwb && (n = t.hwb.exec(e))) {
		let e = yp(n[1]), t = vp(n[2], 1), r = vp(n[3], 1), i = bp(n[4]), [a, o, s] = Ep(e / 360, t, r);
		return Cp(a, o, s, i);
	}
	throw Error(`invalid color string ${e} provided`);
}
function kp(e) {
	let t = Op(e);
	return (t << 24 | t >>> 8) >>> 0;
}
var Ap = [
	"4444-xq",
	"4444",
	"hq",
	"standard",
	"light",
	"proxy"
], jp = [
	1,
	1,
	1
], Mp = (e) => {
	let t = e.trim().split(/\s+/);
	if (t.length < 1 || t.length > 3 || t[0] === "") return null;
	let n = t.map((e) => Number(e));
	if (!n.every((e) => Number.isFinite(e))) return null;
	let r = n[0];
	return [
		r,
		n[1] ?? r,
		n[2] ?? 1
	];
}, Np = (e) => typeof e == "number" ? Number.isFinite(e) ? [
	e,
	e,
	1
] : null : typeof e == "string" ? Mp(e) : null, Pp = (e) => Np(e) ?? jp, Fp = ([e, t, n]) => {
	let r = $d(e), i = $d(t), a = $d(n);
	return r === i && a === 1 ? r : a === 1 ? `${r} ${i}` : `${r} ${i} ${a}`;
};
function Ip(e) {
	return !!e;
}
var Lp = !1, Rp = [
	"h264",
	"h265",
	"vp8",
	"vp9",
	"av1",
	"mp3",
	"aac",
	"wav",
	"prores",
	"h264-mkv",
	"h264-ts",
	"gif"
];
function zp(e, t, n) {
	if (e !== void 0) {
		if (typeof e != "string") throw TypeError(`The "${n}" prop ${t} must be a string, but you passed a value of type ${typeof e}.`);
		if (!Rp.includes(e)) throw Error(`The "${n}" prop ${t} must be one of ${Rp.join(", ")}, but you passed ${e}.`);
	}
}
var Bp = (e, t, n) => {
	if (e) {
		if (typeof e != "object") throw Error(`"${t}" must be an object, but you passed a value of type ${typeof e}`);
		if (Array.isArray(e)) throw Error(`"${t}" must be an object, an array was passed ${n ? `for composition "${n}"` : ""}`);
	}
};
function Vp(e, t, n) {
	if (typeof e != "number") throw Error(`The "${t}" prop ${n} must be a number, but you passed a value of type ${typeof e}`);
	if (isNaN(e)) throw TypeError(`The "${t}" prop ${n} must not be NaN, but is NaN.`);
	if (!Number.isFinite(e)) throw TypeError(`The "${t}" prop ${n} must be finite, but is ${e}.`);
	if (e % 1 != 0) throw TypeError(`The "${t}" prop ${n} must be an integer, but is ${e}.`);
	if (e <= 0) throw TypeError(`The "${t}" prop ${n} must be positive, but got ${e}.`);
}
function Hp(e, t) {
	let { allowFloats: n, component: r } = t;
	if (e === void 0) throw Error(`The "durationInFrames" prop ${r} is missing.`);
	if (typeof e != "number") throw Error(`The "durationInFrames" prop ${r} must be a number, but you passed a value of type ${typeof e}`);
	if (e <= 0) throw TypeError(`The "durationInFrames" prop ${r} must be positive, but got ${e}.`);
	if (!n && e % 1 != 0) throw TypeError(`The "durationInFrames" prop ${r} must be an integer, but got ${e}.`);
	if (!Number.isFinite(e)) throw TypeError(`The "durationInFrames" prop ${r} must be finite, but got ${e}.`);
}
var Up = ({ frame: e, playbackRate: t, startFrom: n }) => zf(e, [
	-1,
	n,
	n + 1
], [
	-1,
	n,
	n + t
]), Wp = (e) => typeof window > "u" || e.startsWith("http://") || e.startsWith("https://") || e.startsWith("file://") || e.startsWith("blob:") || e.startsWith("data:") ? e : new URL(e, document.baseURI).href, Gp = {
	processColor: kp,
	truthy: Ip,
	validateFps: Bd,
	validateDimension: Vp,
	validateDurationInFrames: Hp,
	validateDefaultAndInputProps: Bp,
	validateFrame: zd,
	serializeJSONWithSpecialTypes: Zf,
	bundleName: "bundle.js",
	bundleMapName: "bundle.js.map",
	deserializeJSONWithSpecialTypes: $f,
	DELAY_RENDER_CALLSTACK_TOKEN: Bf,
	DELAY_RENDER_RETRY_TOKEN: Vf,
	DELAY_RENDER_CLEAR_TOKEN: Hf,
	DELAY_RENDER_ATTEMPT_TOKEN: $,
	getOffthreadVideoSource: ({ src: e, transparent: t, currentTime: n, toneMapped: r }) => `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(Wp(e))}&time=${encodeURIComponent(Math.max(0, n))}&transparent=${String(t)}&toneMapped=${String(r)}`,
	getExpectedMediaFrameUncorrected: Up,
	ENABLE_V5_BREAKING_CHANGES: Lp,
	MIN_NODE_VERSION: 16,
	MIN_BUN_VERSION: "1.0.3",
	MIN_ESLINT_VERSION: "7.15.0",
	colorNames: Dp,
	DATE_TOKEN: Yf,
	FILE_TOKEN: Xf,
	validateCodec: zp,
	proResProfileOptions: Ap,
	findPropsToDelete: Uf,
	sequenceSchema: ap,
	parseScaleValue: Pp,
	serializeScaleValue: Fp,
	getRegisteredFontFaces: Jf,
	registerFontFace: qf,
	fetchFontData: Kf
};
//#endregion
//#region node_modules/@remotion/player/dist/esm/index.mjs
if (typeof b.createContext != "function") throw Error([
	"Remotion requires React.createContext, but it is \"undefined\".",
	"If you are in a React Server Component, turn it into a client component by adding \"use client\" at the top of the file.",
	"",
	"Before:",
	"  import {Player} from \"@remotion/player\";",
	"",
	"After:",
	"  \"use client\";",
	"  import {Player} from \"@remotion/player\";"
].join("\n"));
var Kp = 25, qp = 16, Jp = () => /* @__PURE__ */ (0, S.jsx)("svg", {
	width: Kp,
	height: Kp,
	viewBox: "0 0 25 25",
	fill: "none",
	children: /* @__PURE__ */ (0, S.jsx)("path", {
		d: "M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",
		fill: "white",
		stroke: "white",
		strokeWidth: "6.25",
		strokeLinejoin: "round"
	})
}), Yp = () => /* @__PURE__ */ (0, S.jsxs)("svg", {
	viewBox: "0 0 100 100",
	width: Kp,
	height: Kp,
	children: [/* @__PURE__ */ (0, S.jsx)("rect", {
		x: "25",
		y: "20",
		width: "20",
		height: "60",
		fill: "#fff",
		ry: "5",
		rx: "5"
	}), /* @__PURE__ */ (0, S.jsx)("rect", {
		x: "55",
		y: "20",
		width: "20",
		height: "60",
		fill: "#fff",
		ry: "5",
		rx: "5"
	})]
}), Xp = ({ isFullscreen: e }) => {
	let t = e ? 0 : 3, n = e ? 6 * 1.6 : 3, r = e ? 6 * 1.6 : 12;
	return /* @__PURE__ */ (0, S.jsxs)("svg", {
		viewBox: "0 0 32 32",
		height: qp,
		width: qp,
		children: [
			/* @__PURE__ */ (0, S.jsx)("path", {
				d: `
				M ${t} ${r}
				L ${n} ${n}
				L ${r} ${t}
				`,
				stroke: "#fff",
				strokeWidth: 6,
				fill: "none"
			}),
			/* @__PURE__ */ (0, S.jsx)("path", {
				d: `
				M ${32 - t} ${r}
				L ${32 - n} ${n}
				L ${32 - r} ${t}
				`,
				stroke: "#fff",
				strokeWidth: 6,
				fill: "none"
			}),
			/* @__PURE__ */ (0, S.jsx)("path", {
				d: `
				M ${t} ${32 - r}
				L ${n} ${32 - n}
				L ${r} ${32 - t}
				`,
				stroke: "#fff",
				strokeWidth: 6,
				fill: "none"
			}),
			/* @__PURE__ */ (0, S.jsx)("path", {
				d: `
				M ${32 - t} ${32 - r}
				L ${32 - n} ${32 - n}
				L ${32 - r} ${32 - t}
				`,
				stroke: "#fff",
				strokeWidth: 6,
				fill: "none"
			})
		]
	});
}, Zp = () => /* @__PURE__ */ (0, S.jsx)("svg", {
	width: Kp,
	height: Kp,
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ (0, S.jsx)("path", {
		d: "M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",
		fill: "#fff"
	})
}), Qp = () => /* @__PURE__ */ (0, S.jsx)("svg", {
	width: Kp,
	height: Kp,
	viewBox: "0 0 24 24",
	children: /* @__PURE__ */ (0, S.jsx)("path", {
		d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",
		fill: "#fff"
	})
}), $p = "__remotion_buffering_indicator", em = "__remotion_buffering_animation", tm = {
	width: Kp,
	height: Kp,
	overflow: "hidden",
	lineHeight: "normal",
	fontSize: "inherit"
}, nm = {
	width: 14,
	height: 14,
	overflow: "hidden",
	lineHeight: "normal",
	fontSize: "inherit"
}, rm = ({ type: e, color: t = "white" }) => {
	let n = e === "player" ? tm : nm;
	return /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)("style", {
		type: "text/css",
		children: `
				@keyframes ${em} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${$p} {
            animation: ${em} 1s linear infinite;
        }        
			`
	}), /* @__PURE__ */ (0, S.jsx)("div", {
		style: n,
		children: /* @__PURE__ */ (0, S.jsx)("svg", {
			viewBox: e === "player" ? "0 0 22 22" : "0 0 18 18",
			style: n,
			className: $p,
			children: /* @__PURE__ */ (0, S.jsx)("path", {
				d: e === "player" ? "M 11 4 A 7 7 0 0 1 15.1145 16.66312" : "M 9 2 A 7 7 0 0 1 13.1145 14.66312",
				stroke: t,
				strokeLinecap: "round",
				fill: "none",
				strokeWidth: 3
			})
		})
	})] });
}, im = ({ currentSize: e, width: t, height: n, compositionWidth: r, compositionHeight: i }) => t !== void 0 && n === void 0 || n !== void 0 && t === void 0 ? { aspectRatio: [r, i].join("/") } : {
	width: r,
	height: i
}, am = ({ previewSize: e, compositionWidth: t, compositionHeight: n, canvasSize: r }) => {
	let i = Q.calculateScale({
		canvasSize: r,
		compositionHeight: n,
		compositionWidth: t,
		previewSize: e
	}), a = 0 - (1 - i) / 2, o = a * t, s = a * n, c = t * i, l = n * i;
	return {
		centerX: r.width / 2 - c / 2,
		centerY: r.height / 2 - l / 2,
		xCorrection: o,
		yCorrection: s,
		scale: i
	};
}, om = ({ config: e, style: t, canvasSize: n, overflowVisible: r, layout: i }) => e ? {
	position: "relative",
	overflow: r ? "visible" : "hidden",
	...im({
		compositionHeight: e.height,
		compositionWidth: e.width,
		currentSize: n,
		height: t?.height,
		width: t?.width
	}),
	opacity: +!!i,
	...t
} : {}, sm = ({ config: e, layout: t, scale: n, overflowVisible: r }) => e ? t ? {
	position: "absolute",
	width: e.width,
	height: e.height,
	display: "flex",
	transform: `scale(${n})`,
	marginLeft: t.xCorrection,
	marginTop: t.yCorrection,
	overflow: r ? "visible" : "hidden"
} : {
	position: "absolute",
	width: e.width,
	height: e.height,
	display: "flex",
	transform: `scale(${n})`,
	overflow: r ? "visible" : "hidden"
} : {}, cm = ({ layout: e, scale: t, config: n, overflowVisible: r }) => {
	if (!n) return {};
	if (!e) return {
		width: n.width * t,
		height: n.height * t,
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		overflow: r ? "visible" : "hidden"
	};
	let { centerX: i, centerY: a } = e;
	return {
		width: n.width * t,
		height: n.height * t,
		display: "flex",
		flexDirection: "column",
		position: "absolute",
		left: i,
		top: a,
		overflow: r ? "visible" : "hidden"
	};
}, lm = (0, b.createContext)(null), um = b.createContext(void 0), dm = b.createContext(void 0), fm = class {
	listeners = {
		ended: [],
		error: [],
		pause: [],
		play: [],
		ratechange: [],
		scalechange: [],
		seeked: [],
		timeupdate: [],
		frameupdate: [],
		fullscreenchange: [],
		volumechange: [],
		mutechange: [],
		waiting: [],
		resume: []
	};
	addEventListener(e, t) {
		this.listeners[e].push(t);
	}
	removeEventListener(e, t) {
		this.listeners[e] = this.listeners[e].filter((e) => e !== t);
	}
	dispatchEvent(e, t) {
		this.listeners[e].forEach((e) => {
			e({ detail: t });
		});
	}
	dispatchSeek = (e) => {
		this.dispatchEvent("seeked", { frame: e });
	};
	dispatchVolumeChange = (e) => {
		this.dispatchEvent("volumechange", { volume: e });
	};
	dispatchPause = () => {
		this.dispatchEvent("pause", void 0);
	};
	dispatchPlay = () => {
		this.dispatchEvent("play", void 0);
	};
	dispatchEnded = () => {
		this.dispatchEvent("ended", void 0);
	};
	dispatchRateChange = (e) => {
		this.dispatchEvent("ratechange", { playbackRate: e });
	};
	dispatchScaleChange = (e) => {
		this.dispatchEvent("scalechange", { scale: e });
	};
	dispatchError = (e) => {
		this.dispatchEvent("error", { error: e });
	};
	dispatchTimeUpdate = (e) => {
		this.dispatchEvent("timeupdate", e);
	};
	dispatchFrameUpdate = (e) => {
		this.dispatchEvent("frameupdate", e);
	};
	dispatchFullscreenChange = (e) => {
		this.dispatchEvent("fullscreenchange", e);
	};
	dispatchMuteChange = (e) => {
		this.dispatchEvent("mutechange", e);
	};
	dispatchWaiting = (e) => {
		this.dispatchEvent("waiting", e);
	};
	dispatchResume = (e) => {
		this.dispatchEvent("resume", e);
	};
}, pm = class {
	listeners = {
		error: [],
		waiting: [],
		resume: []
	};
	addEventListener(e, t) {
		this.listeners[e].push(t);
	}
	removeEventListener(e, t) {
		this.listeners[e] = this.listeners[e].filter((e) => e !== t);
	}
	dispatchEvent(e, t) {
		this.listeners[e].forEach((e) => {
			e({ detail: t });
		});
	}
	dispatchError = (e) => {
		this.dispatchEvent("error", { error: e });
	};
	dispatchWaiting = (e) => {
		this.dispatchEvent("waiting", e);
	};
	dispatchResume = (e) => {
		this.dispatchEvent("resume", e);
	};
}, mm = (e) => {
	let { subscribeBuffering: t } = (0, b.useContext)(Q.SetTimelineContext);
	(0, b.useLayoutEffect)(() => t((t) => {
		t.buffering ? e.dispatchWaiting({}) : e.dispatchResume({});
	}), [e, t]);
}, hm = ({ children: e, currentPlaybackRate: t }) => {
	let [n] = (0, b.useState)(() => new fm());
	return (0, b.useEffect)(() => {
		t && n.dispatchRateChange(t);
	}, [n, t]), mm(n), /* @__PURE__ */ (0, S.jsx)(um.Provider, {
		value: n,
		children: e
	});
}, gm = b.createContext(null), _m = (e, t) => {
	let [n, r] = (0, b.useState)(!1);
	return (0, b.useEffect)(() => {
		let { current: n } = e;
		if (!n) return;
		let i, a = () => {
			t && (clearTimeout(i), i = setTimeout(() => {
				r(!1);
			}, t === !0 ? 3e3 : t));
		}, o = () => {
			r(!0), a();
		}, s = () => {
			r(!1), clearTimeout(i);
		}, c = () => {
			r(!0), a();
		};
		return n.addEventListener("mouseenter", o), n.addEventListener("mouseleave", s), n.addEventListener("mousemove", c), () => {
			n.removeEventListener("mouseenter", o), n.removeEventListener("mouseleave", s), n.removeEventListener("mousemove", c), clearTimeout(i);
		};
	}, [t, e]), n;
}, vm = () => {
	let e = Q.Timeline.useTimelineSeekFrame(), { setPlaying: t, frameRef: n, audioAndVideoTags: r, isPlaying: i, isBuffering: a } = (0, b.useContext)(Q.SetTimelineContext), o = (0, b.useContext)(Q.SharedAudioContext), s = (0, b.useContext)(Q.SharedAudioTagsContext), c = G(), l = Q.useVideo(), u = Q.useUnsafeVideoConfig(), d = (0, b.useContext)(um), f = (0, b.useRef)(0), p = (0, b.useRef)(null), m = (0, b.useRef)(!1);
	if (!d) throw TypeError("Expected Player event emitter context");
	let h = (0, b.useCallback)(() => {
		if (!l) return p.current ?? (typeof window > "u" ? 0 : window.remotion_initialFrame ?? 0);
		let e = n.current[l.id] ?? (c.isPlayer ? 0 : Q.Timeline.getFrameForComposition(l.id));
		return Q.Timeline.clampFrameToCompositionRange(e, l.durationInFrames);
	}, [
		c.isPlayer,
		n,
		l
	]), g = (0, b.useCallback)((t) => {
		let r = u ? Q.TimelinePosition.clampFrameToCompositionRange(t, u.durationInFrames) : Math.max(0, t);
		p.current = r, l?.id && (e((e) => e[l.id] === r ? e : {
			...e,
			[l.id]: r
		}), n.current[l.id] !== r && (n.current = {
			...n.current,
			[l.id]: r
		})), d.dispatchSeek(r);
	}, [
		u,
		d,
		n,
		e,
		l?.id
	]), _ = (0, b.useCallback)((e) => {
		let n = m.current;
		if (m.current = !1, i()) return;
		let a = (u?.durationInFrames ?? 1) - 1;
		h() === a && g(0), n ? o?.resumeAsAutoPlay() : o?.resume(), s && s.numberOfAudioTags > 0 && e && s.playAllAudios(), r.current.forEach((e) => e.play("player play() was called and playing audio from a click")), t(!0), f.current = h(), d.dispatchPlay();
	}, [
		r,
		o,
		s,
		u?.durationInFrames,
		d,
		h,
		i,
		g,
		t
	]), v = (0, b.useCallback)(() => {
		m.current = !0, _();
	}, [_]), y = (0, b.useCallback)(() => {
		i() && (t(!1), d.dispatchPause(), o?.suspend());
	}, [
		o,
		d,
		i,
		t
	]), x = (0, b.useCallback)(() => {
		i() && (t(!1), p.current = f.current, u && (e((e) => ({
			...e,
			[u.id]: f.current
		})), n.current = {
			...n.current,
			[u.id]: f.current
		}, d.dispatchPause()));
	}, [
		u,
		d,
		n,
		i,
		t,
		e
	]), S = l?.id, C = (u?.durationInFrames ?? 1) - 1, w = (0, b.useCallback)((t) => {
		if (!S) return null;
		if (i()) return;
		let r = n.current[S] ?? window.remotion_initialFrame ?? 0, a = Math.max(0, r - t);
		r !== a && (e((e) => e[S] === a ? e : {
			...e,
			[S]: a
		}), n.current = {
			...n.current,
			[S]: a
		});
	}, [
		n,
		i,
		e,
		S
	]), T = (0, b.useCallback)((t) => {
		if (!S) return null;
		if (i()) return;
		let r = n.current[S] ?? window.remotion_initialFrame ?? 0, a = Math.min(C, r + t);
		r !== a && (e((e) => e[S] === a ? e : {
			...e,
			[S]: a
		}), n.current = {
			...n.current,
			[S]: a
		});
	}, [
		n,
		C,
		i,
		e,
		S
	]), E = (0, b.useCallback)((e) => {
		i() ? y() : _(e);
	}, [
		y,
		_,
		i
	]);
	return (0, b.useMemo)(() => ({
		frameBack: w,
		frameForward: T,
		emitter: d,
		play: _,
		playAsAutoPlay: v,
		pause: y,
		seek: g,
		getCurrentFrame: h,
		isPlaying: i,
		isBuffering: a,
		pauseAndReturnToPlayStart: x,
		toggle: E
	}), [
		d,
		w,
		T,
		h,
		i,
		y,
		x,
		_,
		v,
		a,
		g,
		E
	]);
}, ym = ({ browserMediaControlsBehavior: e, videoConfig: t, playbackRate: n }) => {
	let r = Q.usePlaying(), { pause: i, play: a, emitter: o, getCurrentFrame: s, seek: c } = vm(), l = (0, b.useRef)(!1);
	(0, b.useEffect)(() => {
		r && (l.current = !0), navigator.mediaSession && e.mode !== "do-nothing" && (r ? navigator.mediaSession.playbackState = "playing" : l.current && (navigator.mediaSession.playbackState = "paused"));
	}, [e.mode, r]), (0, b.useEffect)(() => {
		if (!navigator.mediaSession || e.mode === "do-nothing") return;
		let r = () => {
			t && navigator.mediaSession && navigator.mediaSession.setPositionState({
				duration: t.durationInFrames / t.fps,
				playbackRate: n,
				position: s() / t.fps
			});
		};
		return o.addEventListener("timeupdate", r), () => {
			o.removeEventListener("timeupdate", r);
		};
	}, [
		e.mode,
		o,
		s,
		n,
		t
	]), (0, b.useEffect)(() => {
		if (navigator.mediaSession && e.mode !== "do-nothing") return navigator.mediaSession.setActionHandler("play", () => {
			e.mode === "register-media-session" && a();
		}), navigator.mediaSession.setActionHandler("pause", () => {
			e.mode === "register-media-session" && i();
		}), navigator.mediaSession.setActionHandler("seekto", (n) => {
			e.mode === "register-media-session" && n.seekTime !== void 0 && t && c(Math.round(n.seekTime * t.fps));
		}), navigator.mediaSession.setActionHandler("seekbackward", () => {
			e.mode === "register-media-session" && t && c(Math.max(0, Math.round((s() - 10) * t.fps)));
		}), navigator.mediaSession.setActionHandler("seekforward", () => {
			e.mode === "register-media-session" && t && c(Math.max(t.durationInFrames - 1, Math.round((s() + 10) * t.fps)));
		}), navigator.mediaSession.setActionHandler("previoustrack", () => {
			e.mode === "register-media-session" && c(0);
		}), () => {
			navigator.mediaSession.metadata = null, navigator.mediaSession.setActionHandler("play", null), navigator.mediaSession.setActionHandler("pause", null), navigator.mediaSession.setActionHandler("seekto", null), navigator.mediaSession.setActionHandler("seekbackward", null), navigator.mediaSession.setActionHandler("seekforward", null), navigator.mediaSession.setActionHandler("previoustrack", null);
		};
	}, [
		e.mode,
		s,
		i,
		a,
		c,
		t
	]);
}, bm = ({ time: e, currentFrame: t, playbackSpeed: n, fps: r, actualLastFrame: i, actualFirstFrame: a, framesAdvanced: o, shouldLoop: s }) => {
	let c = (n < 0 ? Math.ceil : Math.floor)(e * n / (1e3 / r)) - o, l = c + t, u = t > i || t < a, d = l > i || l < a, f = !s && d && !u;
	return n > 0 ? d ? {
		nextFrame: a,
		framesToAdvance: c,
		hasEnded: f
	} : {
		nextFrame: l,
		framesToAdvance: c,
		hasEnded: f
	} : d ? {
		nextFrame: i,
		framesToAdvance: c,
		hasEnded: f
	} : {
		nextFrame: l,
		framesToAdvance: c,
		hasEnded: f
	};
}, xm = () => typeof document > "u" ? !1 : document.visibilityState === "hidden", Sm = () => {
	let e = (0, b.useRef)(xm());
	return (0, b.useEffect)(() => {
		let t = () => {
			e.current = xm();
		};
		return document.addEventListener("visibilitychange", t), () => {
			document.removeEventListener("visibilitychange", t);
		};
	}, []), e;
}, Cm = .1, wm = ({ audioContext: e, audioSyncAnchor: t, absoluteTimeInSeconds: n, globalPlaybackRate: r, logLevel: i, force: a }) => {
	let o = e.currentTime - n / r, s = o - t.value, { outputLatency: c } = e, l = c === 0 ? .3 : c, u = e.baseLatency + l;
	return Math.abs(s) < Cm + u && !a || Math.abs(s) < 2 ** -52 ? !1 : (Q.Log.verbose({
		logLevel: i,
		tag: "audio-scheduling"
	}, "Anchor " + (a ? "forcibly " : "") + "changed from %s to %s with shift %s", t.value, o, s), t.value = o, !0);
}, Tm = (e) => {
	if (e === "suspended" || e === "running-to-suspended") return !0;
	if (e === "closed" || e === "interrupted" || e === "running" || e === "suspended-to-running") return !1;
	throw Error(`Unexpected audio context state: ${e}`);
}, Em = ({ loop: e, playbackRate: t, moveToBeginningWhenEnded: n, inFrame: r, outFrame: i, browserMediaControlsBehavior: a, getCurrentFrame: o, muted: s }) => {
	let c = Q.useUnsafeVideoConfig(), l = Q.Timeline.useTimelinePosition(), u = Q.usePlaying(), { pause: d, emitter: f, isPlaying: p } = vm(), m = Q.Timeline.useTimelineSetFrameWithoutSeek(), h = (0, b.useContext)(Q.SharedAudioContext), { setPlayerMuted: g } = (0, b.useContext)(Q.SetMediaVolumeContext), { isBuffering: _, subscribeBuffering: v } = (0, b.useContext)(Q.SetTimelineContext), y = Q.useLogLevel(), x = Sm(), S = (0, b.useRef)(0);
	ym({
		browserMediaControlsBehavior: a,
		playbackRate: t,
		videoConfig: c
	}), (0, b.useLayoutEffect)(() => {
		h && h.audioContext && c && (s || wm({
			audioContext: h.audioContext,
			audioSyncAnchor: h.audioSyncAnchor,
			absoluteTimeInSeconds: l / c.fps,
			globalPlaybackRate: t,
			logLevel: y,
			force: !1
		}) && h.audioSyncAnchorEmitter.dispatch("changed"));
	}, [
		c,
		l,
		y,
		t,
		h,
		s
	]), (0, b.useLayoutEffect)(() => {
		let e = h?.audioContext;
		if (!e || !c || s) return;
		let n = () => {
			let n = h?.getAudioContextState();
			n && Tm(n) && wm({
				audioContext: e,
				audioSyncAnchor: h.audioSyncAnchor,
				absoluteTimeInSeconds: o() / c.fps,
				globalPlaybackRate: t,
				logLevel: y,
				force: !0
			}) && h.audioSyncAnchorEmitter.dispatch("changed");
		};
		return e?.addEventListener("statechange", n), () => {
			e?.removeEventListener("statechange", n);
		};
	}, [
		c,
		o,
		y,
		s,
		t,
		h
	]), (0, b.useEffect)(() => {
		if (!c) return;
		if (!u) {
			h?.suspend?.();
			return;
		}
		h?._experimentalKeepAudioContextAlive && h.audioContext && !s && wm({
			audioContext: h.audioContext,
			audioSyncAnchor: h.audioSyncAnchor,
			absoluteTimeInSeconds: o() / c.fps,
			globalPlaybackRate: t,
			logLevel: y,
			force: !0
		}) && h.audioSyncAnchorEmitter.dispatch("changed");
		let a = !1, l = !1, b = null, S = performance.now(), C = 0, w = () => {
			b !== null && (b.type === "raf" ? cancelAnimationFrame(b.id) : clearTimeout(b.id));
		}, T = () => {
			a = !0, w();
		}, E = () => {
			if (a) return;
			if (!p()) {
				h?.suspend?.();
				return;
			}
			!s && !l && !_() && h?.resume?.();
			let u = performance.now() - S, g = i ?? c.durationInFrames - 1, v = r ?? 0, { nextFrame: y, framesToAdvance: b, hasEnded: x } = bm({
				time: u,
				currentFrame: o(),
				playbackSpeed: t,
				fps: c.fps,
				actualFirstFrame: v,
				actualLastFrame: g,
				framesAdvanced: C,
				shouldLoop: e
			});
			if (C += b, y !== o() && (!x || n) && !_() && m((e) => ({
				...e,
				[c.id]: y
			})), x) {
				T(), d(), f.dispatchEnded();
				return;
			}
			D();
		}, D = () => {
			if (a) return;
			let e = l ? null : h?.getIsResumingAudioContext?.() ?? null;
			if (e !== null && !s) {
				e.then((e) => {
					a || (e === "failed" && (l = !0, h?.suspend(), g(!0)), S = performance.now(), C = 0, D());
				});
				return;
			}
			if (_()) {
				!s && !l && h?.suspend?.();
				let e = v((t) => {
					t.buffering || (e(), !s && !l && h?._experimentalKeepAudioContextAlive && h.resume(), S = performance.now(), C = 0, D());
				});
				return;
			}
			if (x.current) {
				b = {
					type: "timeout",
					id: setTimeout(E, 1e3 / c.fps)
				};
				return;
			}
			b = {
				type: "raf",
				id: requestAnimationFrame(E)
			};
		};
		D();
		let O = () => {
			document.visibilityState !== "visible" && (w(), E());
		};
		return window.addEventListener("visibilitychange", O), () => {
			window.removeEventListener("visibilitychange", O), T();
		};
	}, [
		c,
		e,
		d,
		u,
		m,
		f,
		t,
		r,
		i,
		n,
		x,
		o,
		_,
		p,
		h,
		g,
		v,
		y,
		s
	]), (0, b.useEffect)(() => {
		let e = performance.now(), t = e - S.current;
		if (t >= 250) {
			f.dispatchTimeUpdate({ frame: l }), S.current = e;
			return;
		}
		let n = setTimeout(() => {
			f.dispatchTimeUpdate({ frame: l }), S.current = performance.now();
		}, 250 - t);
		return () => clearTimeout(n);
	}, [f, l]), (0, b.useEffect)(() => {
		f.dispatchFrameUpdate({ frame: l });
	}, [f, l]);
}, Dm = [], Om = (e) => e ? "current" in e ? e.current : e : null, km = (e, t) => {
	let [n, r] = (0, b.useState)(() => {
		let t = Om(e);
		if (!t) return null;
		let n = t.getClientRects();
		return n[0] ? {
			width: n[0].width,
			height: n[0].height,
			left: n[0].x,
			top: n[0].y,
			windowSize: {
				height: window.innerHeight,
				width: window.innerWidth
			}
		} : null;
	}), i = (0, b.useMemo)(() => typeof ResizeObserver > "u" ? null : new ResizeObserver((e) => {
		let { contentRect: n, target: i } = e[0], a = i.getClientRects();
		if (!a?.[0]) {
			r(null);
			return;
		}
		let o = n.width === 0 ? 1 : a[0].width / n.width, s = n.height === 0 ? 1 : a[0].height / n.height, c = t.shouldApplyCssTransforms || o === 0 ? a[0].width : a[0].width * (1 / o), l = t.shouldApplyCssTransforms || s === 0 ? a[0].height : a[0].height * (1 / s);
		r((e) => e && e.width === c && e.height === l && e.left === a[0].x && e.top === a[0].y && e.windowSize.height === window.innerHeight && e.windowSize.width === window.innerWidth ? e : {
			width: c,
			height: l,
			left: a[0].x,
			top: a[0].y,
			windowSize: {
				height: window.innerHeight,
				width: window.innerWidth
			}
		});
	}), [t.shouldApplyCssTransforms]), a = (0, b.useCallback)(() => {
		let t = Om(e);
		if (!t) return;
		let n = t.getClientRects();
		if (!n[0]) {
			r(null);
			return;
		}
		r((e) => e && e.width === n[0].width && e.height === n[0].height && e.left === n[0].x && e.top === n[0].y && e.windowSize.height === window.innerHeight && e.windowSize.width === window.innerWidth ? e : {
			width: n[0].width,
			height: n[0].height,
			left: n[0].x,
			top: n[0].y,
			windowSize: {
				height: window.innerHeight,
				width: window.innerWidth
			}
		});
	}, [e]);
	return (0, b.useEffect)(() => {
		a();
	}, [a]), (0, b.useEffect)(() => {
		if (!i) return;
		let t = Om(e);
		return t && i.observe(t), () => {
			t && i.unobserve(t);
		};
	}, [i, e]), (0, b.useEffect)(() => {
		if (t.triggerOnWindowResize) return window.addEventListener("resize", a), () => {
			window.removeEventListener("resize", a);
		};
	}, [t.triggerOnWindowResize, a]), (0, b.useEffect)(() => (Dm.push(a), () => {
		Dm = Dm.filter((e) => e !== a);
	}), [a]), (0, b.useMemo)(() => n ? {
		...n,
		refresh: a
	} : null, [n, a]);
}, Am = (e) => e ?? "__remotion-player", jm = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flex: 1,
	height: "100%",
	width: "100%"
}, Mm = class extends b.Component {
	state = { hasError: null };
	static getDerivedStateFromError(e) {
		return { hasError: e };
	}
	componentDidCatch(e) {
		this.props.onError(e);
	}
	render() {
		return this.state.hasError ? /* @__PURE__ */ (0, S.jsx)("div", {
			style: jm,
			children: this.props.errorFallback({ error: this.state.hasError })
		}) : this.props.children;
	}
}, Nm = async () => {
	if (typeof window > "u" || window.crypto === void 0 || window.crypto.subtle === void 0) return null;
	try {
		let e = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(window.location.hostname));
		return Array.from(new Uint8Array(e)).map((e) => e.toString(16).padStart(2, "0")).join("");
	} catch {
		return null;
	}
}, Pm = {
	backgroundColor: "red",
	position: "absolute",
	padding: 12,
	fontFamily: "Arial"
}, Fm = [
	"28d262b44cc61fa750f1686b16ad0604dabfe193fbc263eec05c89b7ad4c2cd6",
	"4db1b0a94be33165dfefcb3ba03d04c7a2666dd27c496d3dc9fa41858e94925e",
	"fbc48530bbf245da790f63675e84e06bab38c3b114fab07eb350025119922bdc",
	"7baf10a8932757b1b3a22b3fce10a048747ac2f8eaf638603487e3705b07eb83",
	"8a6c21a598d8c667272b5207c051b85997bf5b45d5fb712378be3f27cd72c6a6",
	"a2f7aaac9c50a9255e7fc376110c4e0bfe153722dc66ed3c5d3bf2a135f65518"
], Im = !1, Lm = () => {
	let [e, t] = b.useState(!1);
	return (0, b.useEffect)(() => {
		Im || (Im = !0, Nm().then((e) => {
			e && Fm.includes(e) && t(!0);
		}).catch(() => {}));
	}, []), (0, b.useEffect)(() => {
		if (!e) return;
		let t = () => {
			if (!document.querySelector(".warning-banner")) {
				let e = document.createElement("div");
				e.className = "warning-banner", Object.assign(e.style, Pm, {
					zIndex: "9999",
					cssText: `${Pm.cssText} !important;`
				}), e.innerHTML = "\n	        <a href=\"https://github.com/remotion-dev/remotion/pull/4589\" style=\"color: white;\">\n	          Remotion Unlicensed – Contact hi@remotion.dev\n	        </a>\n	      ", document.body.appendChild(e);
			}
		}, n = new MutationObserver(() => t());
		return n.observe(document.body, {
			childList: !0,
			subtree: !0
		}), () => {
			n.disconnect();
		};
	}, [e]), e ? /* @__PURE__ */ (0, S.jsx)("div", {
		style: Pm,
		className: "warning-banner",
		children: /* @__PURE__ */ (0, S.jsx)("a", {
			style: { color: "white" },
			href: "https://github.com/remotion-dev/remotion/pull/4589",
			children: "Remotion Unlicensed – Contact hi@remotion.dev"
		})
	}) : null;
}, Rm = ({ playing: e, buffering: t }) => e && t ? /* @__PURE__ */ (0, S.jsx)(rm, { type: "player" }) : e ? /* @__PURE__ */ (0, S.jsx)(Yp, {}) : /* @__PURE__ */ (0, S.jsx)(Jp, {}), zm = 12, Bm = 5, Vm = ({ volume: e, isVertical: t, onBlur: n, inputRef: r, setVolume: i }) => {
	let a = (0, b.useMemo)(() => {
		let e = {
			paddingLeft: 5,
			height: Kp,
			width: Um,
			display: "inline-flex",
			alignItems: "center"
		};
		return t ? {
			...e,
			position: "absolute",
			transform: `rotate(-90deg) translateX(${Um / 2 + Kp / 2}px)`
		} : { ...e };
	}, [t]), o = b.useId === void 0 ? "volume-slider" : b.useId(), [s] = (0, b.useState)(() => `__remotion-volume-slider-${nc(o)}`.replace(".", "")), c = (0, b.useCallback)((e) => {
		i(parseFloat(e.target.value));
	}, [i]), l = (0, b.useMemo)(() => {
		let n = {
			WebkitAppearance: "none",
			backgroundColor: "rgba(255, 255, 255, 0.5)",
			borderRadius: Bm / 2,
			cursor: "pointer",
			height: Bm,
			width: Um,
			backgroundImage: `linear-gradient(
				to right,
				white ${e * 100}%, rgba(255, 255, 255, 0) ${e * 100}%
			)`
		};
		return t ? {
			...n,
			bottom: Kp + Um / 2
		} : n;
	}, [t, e]), u = `
	.${s}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${zm / 2}px;
		box-shadow: 0 0 2px black;
		height: ${zm}px;
		width: ${zm}px;
	}

	.${s}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${zm / 2}px;
		box-shadow: 0 0 2px black;
		height: ${zm}px;
		width: ${zm}px;
	}
`;
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		style: a,
		children: [/* @__PURE__ */ (0, S.jsx)("style", { dangerouslySetInnerHTML: { __html: u } }), /* @__PURE__ */ (0, S.jsx)("input", {
			ref: r,
			"aria-label": "Change volume",
			className: s,
			max: 1,
			min: 0,
			onBlur: n,
			onChange: c,
			step: .01,
			type: "range",
			value: e,
			style: l
		})]
	});
}, Hm = (e) => /* @__PURE__ */ (0, S.jsx)(Vm, { ...e }), Um = 100, Wm = ({ displayVerticalVolumeSlider: e, renderMuteButton: t, renderVolumeSlider: n }) => {
	let [r, i] = Q.usePlayerMutedState(), [a, o] = Q.useMediaVolumeState(), [s, c] = (0, b.useState)(!1), l = (0, b.useRef)(null), u = (0, b.useRef)(null), d = _m(l, !1), f = (0, b.useCallback)(() => {
		setTimeout(() => {
			u.current && document.activeElement !== u.current && c(!1);
		}, 10);
	}, []), p = a === 0, m = (0, b.useCallback)(() => {
		if (p) {
			o(1), i(!1);
			return;
		}
		i((e) => !e);
	}, [
		p,
		i,
		o
	]), h = (0, b.useMemo)(() => ({
		display: "inline-flex",
		background: "none",
		border: "none",
		justifyContent: "center",
		alignItems: "center",
		touchAction: "none",
		...e && { position: "relative" }
	}), [e]), g = (0, b.useMemo)(() => ({
		display: "inline",
		width: Kp,
		height: Kp,
		cursor: "pointer",
		appearance: "none",
		background: "none",
		border: "none",
		padding: 0
	}), []), _ = (0, b.useCallback)(({ muted: e, volume: t }) => {
		let n = e || t === 0;
		return /* @__PURE__ */ (0, S.jsx)("button", {
			"aria-label": n ? "Unmute sound" : "Mute sound",
			title: n ? "Unmute sound" : "Mute sound",
			onClick: m,
			onBlur: f,
			onFocus: () => c(!0),
			style: g,
			type: "button",
			children: n ? /* @__PURE__ */ (0, S.jsx)(Zp, {}) : /* @__PURE__ */ (0, S.jsx)(Qp, {})
		});
	}, [
		f,
		m,
		g
	]), v = (0, b.useMemo)(() => t ? t({
		muted: r,
		volume: a
	}) : _({
		muted: r,
		volume: a
	}), [
		r,
		a,
		_,
		t
	]), y = (0, b.useMemo)(() => (s || d) && !r && !Q.isIosSafari() ? (n ?? Hm)({
		isVertical: e,
		volume: a,
		onBlur: () => c(!1),
		inputRef: u,
		setVolume: o
	}) : null, [
		e,
		s,
		d,
		r,
		a,
		n,
		o
	]);
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		ref: l,
		style: h,
		children: [v, y]
	});
};
function Gm(e) {
	let [t, n] = (0, b.useState)(e), r = (0, b.useRef)(null);
	return (0, b.useEffect)(() => {
		let e = (e) => {
			r.current && !r.current.contains(e.target) && n(!1);
		};
		return document.addEventListener("pointerup", e, !0), () => {
			document.removeEventListener("pointerup", e, !0);
		};
	}, []), {
		ref: r,
		isComponentVisible: t,
		setIsComponentVisible: n
	};
}
var Km = 35, qm = 70, Jm = {
	height: 30,
	paddingRight: 15,
	paddingLeft: 12,
	display: "flex",
	flexDirection: "row",
	alignItems: "center"
}, Ym = {
	width: 22,
	display: "flex",
	alignItems: "center"
}, Xm = {
	width: 14,
	height: 14,
	color: "black"
}, Zm = () => /* @__PURE__ */ (0, S.jsx)("svg", {
	viewBox: "0 0 512 512",
	style: Xm,
	children: /* @__PURE__ */ (0, S.jsx)("path", {
		fill: "currentColor",
		d: "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
	})
}), Qm = (e) => {
	let t = e.toString();
	return t.includes(".") ? t : t + ".0";
}, $m = ({ rate: e, onSelect: t, selectedRate: n, keyboardSelectedRate: r }) => {
	let i = (0, b.useCallback)((n) => {
		n.stopPropagation(), n.preventDefault(), t(e);
	}, [t, e]), [a, o] = (0, b.useState)(!1), s = (0, b.useCallback)(() => {
		o(!0);
	}, []), c = (0, b.useCallback)(() => {
		o(!1);
	}, []), l = r === e, u = (0, b.useMemo)(() => ({
		...Jm,
		backgroundColor: a || l ? "#eee" : "transparent"
	}), [a, l]);
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		onPointerEnter: s,
		onPointerLeave: c,
		tabIndex: 0,
		style: u,
		onClick: i,
		children: [
			/* @__PURE__ */ (0, S.jsx)("div", {
				style: Ym,
				children: e === n ? /* @__PURE__ */ (0, S.jsx)(Zm, {}) : null
			}),
			Qm(e),
			"x"
		]
	}, e);
}, eh = ({ setIsComponentVisible: e, playbackRates: t, canvasSize: n }) => {
	let { setPlaybackRate: r, playbackRate: i } = Q.usePlaybackRate(), [a, o] = (0, b.useState)(i);
	(0, b.useEffect)(() => {
		let n = (n) => {
			if (n.preventDefault(), n.key === "ArrowUp") {
				let e = t.findIndex((e) => e === a);
				if (e === 0) return;
				o(e === -1 ? t[0] : t[e - 1]);
			} else if (n.key === "ArrowDown") {
				let e = t.findIndex((e) => e === a);
				if (e === t.length - 1) return;
				o(e === -1 ? t[t.length - 1] : t[e + 1]);
			} else n.key === "Enter" && (r(a), e(!1));
		};
		return window.addEventListener("keydown", n), () => {
			window.removeEventListener("keydown", n);
		};
	}, [
		t,
		a,
		r,
		e
	]);
	let s = (0, b.useCallback)((t) => {
		r(t), e(!1);
	}, [e, r]), c = (0, b.useMemo)(() => ({
		position: "absolute",
		right: 0,
		width: 125,
		maxHeight: n.height - qm - Km,
		bottom: 35,
		background: "#fff",
		borderRadius: 4,
		overflow: "auto",
		color: "black",
		textAlign: "left"
	}), [n.height]);
	return /* @__PURE__ */ (0, S.jsx)("div", {
		style: c,
		children: t.map((e) => /* @__PURE__ */ (0, S.jsx)($m, {
			selectedRate: i,
			onSelect: s,
			rate: e,
			keyboardSelectedRate: a
		}, e))
	});
}, th = {
	fontSize: 13,
	fontWeight: "bold",
	color: "white",
	border: "2px solid white",
	borderRadius: 20,
	paddingLeft: 8,
	paddingRight: 8,
	paddingTop: 2,
	paddingBottom: 2
}, nh = {
	appearance: "none",
	backgroundColor: "transparent",
	border: "none",
	cursor: "pointer",
	paddingLeft: 0,
	paddingRight: 0,
	paddingTop: 6,
	paddingBottom: 6,
	height: 37,
	display: "inline-flex",
	marginBottom: 0,
	marginTop: 0,
	alignItems: "center"
}, rh = {
	...nh,
	position: "relative"
}, ih = ({ playbackRates: e, canvasSize: t }) => {
	let { ref: n, isComponentVisible: r, setIsComponentVisible: i } = Gm(!1), { playbackRate: a } = Q.usePlaybackRate(), o = (0, b.useCallback)((e) => {
		e.stopPropagation(), e.preventDefault(), i((e) => !e);
	}, [i]);
	return /* @__PURE__ */ (0, S.jsx)("div", {
		ref: n,
		children: /* @__PURE__ */ (0, S.jsxs)("button", {
			type: "button",
			"aria-label": "Change playback rate",
			style: rh,
			onClick: o,
			children: [/* @__PURE__ */ (0, S.jsxs)("div", {
				style: th,
				children: [a, "x"]
			}), r && /* @__PURE__ */ (0, S.jsx)(eh, {
				canvasSize: t,
				playbackRates: e,
				setIsComponentVisible: i
			})]
		})
	});
}, ah = (e, t, n) => Math.round(la(e, [0, n], [0, t - 1], {
	extrapolateLeft: "clamp",
	extrapolateRight: "clamp"
})), oh = 5, sh = 12, ch = 4, lh = {
	userSelect: "none",
	WebkitUserSelect: "none",
	paddingTop: ch,
	paddingBottom: ch,
	boxSizing: "border-box",
	cursor: "pointer",
	position: "relative",
	touchAction: "none"
}, uh = {
	height: oh,
	backgroundColor: "rgba(255, 255, 255, 0.25)",
	width: "100%",
	borderRadius: oh / 2
}, dh = (e) => {
	let t = e;
	for (; t.parentElement;) t = t.parentElement;
	return t;
}, fh = ({ durationInFrames: e, onSeekEnd: t, onSeekStart: n, inFrame: r, outFrame: i }) => {
	let a = (0, b.useRef)(null), o = _m(a, !1), s = km(a, {
		triggerOnWindowResize: !0,
		shouldApplyCssTransforms: !0
	}), { seek: c, play: l, pause: u, isPlaying: d } = vm(), f = Q.Timeline.useTimelinePosition(), [p, m] = (0, b.useState)({ dragging: !1 }), h = s?.width ?? 0, g = (0, b.useCallback)((t) => {
		if (t.button !== 0) return;
		let r = a.current?.getBoundingClientRect().left, i = ah(t.clientX - r, e, h), o = d();
		u(), c(i), m({
			dragging: !0,
			wasPlaying: o
		}), n();
	}, [
		e,
		h,
		d,
		u,
		c,
		n
	]), _ = (0, b.useCallback)((t) => {
		if (!s) throw Error("Player has no size");
		if (!p.dragging) return;
		let n = a.current?.getBoundingClientRect().left, r = ah(t.clientX - n, e, s.width);
		c(r);
	}, [
		p.dragging,
		e,
		c,
		s
	]), v = (0, b.useCallback)(() => {
		m({ dragging: !1 }), p.dragging && (p.wasPlaying ? l() : u(), t());
	}, [
		p,
		t,
		u,
		l
	]);
	(0, b.useEffect)(() => {
		if (!p.dragging) return;
		let e = dh(a.current);
		return e.addEventListener("pointermove", _), e.addEventListener("pointerup", v), () => {
			e.removeEventListener("pointermove", _), e.removeEventListener("pointerup", v);
		};
	}, [
		p.dragging,
		_,
		v
	]);
	let y = (0, b.useMemo)(() => ({
		height: sh,
		width: sh,
		borderRadius: sh / 2,
		position: "absolute",
		top: ch - sh / 2 + 5 / 2,
		backgroundColor: "white",
		left: Math.max(0, f / Math.max(1, e - 1) * h - sh / 2),
		boxShadow: "0 0 2px black",
		opacity: Number(o || p.dragging)
	}), [
		o,
		p.dragging,
		e,
		f,
		h
	]), x = (0, b.useMemo)(() => ({
		height: oh,
		backgroundColor: "rgba(255, 255, 255, 1)",
		width: (f - (r ?? 0)) / (e - 1) * h,
		marginLeft: (r ?? 0) / (e - 1) * h,
		borderRadius: oh / 2
	}), [
		e,
		f,
		r,
		h
	]), C = (0, b.useMemo)(() => ({
		height: oh,
		backgroundColor: "rgba(255, 255, 255, 0.25)",
		width: ((i ?? e - 1) - (r ?? 0)) / (e - 1) * 100 + "%",
		marginLeft: (r ?? 0) / (e - 1) * 100 + "%",
		borderRadius: oh / 2,
		position: "absolute"
	}), [
		e,
		r,
		i
	]);
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		ref: a,
		onPointerDown: g,
		style: lh,
		children: [/* @__PURE__ */ (0, S.jsxs)("div", {
			style: uh,
			children: [/* @__PURE__ */ (0, S.jsx)("div", { style: C }), /* @__PURE__ */ (0, S.jsx)("div", { style: x })]
		}), /* @__PURE__ */ (0, S.jsx)("div", { style: y })]
	});
}, ph = (e) => {
	let t = Math.floor(e / 60), n = Math.floor(e - t * 60);
	return `${String(t)}:${String(n).padStart(2, "0")}`;
}, mh = ({ durationInFrames: e, maxTimeLabelWidth: t, fps: n }) => {
	let r = Q.Timeline.useTimelinePosition(), i = (0, b.useMemo)(() => ({
		color: "white",
		fontFamily: "sans-serif",
		fontSize: 14,
		maxWidth: t === null ? void 0 : t,
		overflow: "hidden",
		textOverflow: "ellipsis"
	}), [t]), a = r === e - 1 ? r + 1 : r;
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		style: i,
		children: [
			ph(a / n),
			" / ",
			ph(e / n)
		]
	});
}, hh = 10, gh = 12, _h = ({ allowFullscreen: e, playerWidth: t }) => (0, b.useMemo)(() => {
	let n = Kp, r = Kp, i = e ? qp : 0, a = r + n + i + gh * 2 + hh * 2, o = t - a, s = Math.max(o, 0), c = s - Um, l = t < (c < Um ? s : c) + a + Um;
	return {
		maxTimeLabelWidth: s === 0 ? null : s,
		displayVerticalVolumeSlider: l
	};
}, [e, t]), vh = [
	0,
	.013,
	.049,
	.104,
	.175,
	.259,
	.352,
	.45,
	.55,
	.648,
	.741,
	.825,
	.896,
	.951,
	.987
], yh = [
	0,
	8.1,
	15.5,
	22.5,
	29,
	35.3,
	41.2,
	47.1,
	52.9,
	58.8,
	64.7,
	71,
	77.5,
	84.5,
	91.9
], bh = 1 / .7, xh = {
	boxSizing: "border-box",
	position: "absolute",
	bottom: 0,
	width: "100%",
	paddingTop: 40,
	paddingBottom: 10,
	backgroundImage: `linear-gradient(to bottom,${vh.map((e, t) => `hsla(0, 0%, 0%, ${e}) ${yh[t] * bh}%`).join(", ")}, hsl(0, 0%, 0%) 100%)`,
	backgroundSize: "auto 145px",
	display: "flex",
	paddingRight: gh,
	paddingLeft: gh,
	flexDirection: "column",
	transition: "opacity 0.3s"
}, Sh = {
	display: "flex",
	flexDirection: "row",
	width: "100%",
	alignItems: "center",
	justifyContent: "center",
	userSelect: "none",
	WebkitUserSelect: "none"
}, Ch = {
	display: "flex",
	flexDirection: "row",
	userSelect: "none",
	WebkitUserSelect: "none",
	alignItems: "center"
}, wh = { width: 12 }, Th = { height: 8 }, Eh = { flex: 1 }, Dh = {}, Oh = ({ durationInFrames: e, isFullscreen: t, fps: n, showVolumeControls: r, onFullscreenButtonClick: i, allowFullscreen: a, onExitFullscreenButtonClick: o, spaceKeyToPlayOrPause: s, onSeekEnd: c, onSeekStart: l, inFrame: u, outFrame: d, initiallyShowControls: f, canvasSize: p, renderPlayPauseButton: m, renderFullscreenButton: h, alwaysShowControls: g, showPlaybackRateControl: _, containerRef: v, buffering: y, hideControlsWhenPointerDoesntMove: x, onPointerDown: C, onDoubleClick: w, renderMuteButton: T, renderVolumeSlider: E, playing: D, toggle: O, renderCustomControls: k }) => {
	let A = (0, b.useRef)(null), [j, M] = (0, b.useState)(!1), N = _m(v, x), { maxTimeLabelWidth: P, displayVerticalVolumeSlider: F } = _h({
		allowFullscreen: a,
		playerWidth: p?.width ?? 0
	}), [I, L] = (0, b.useState)(() => {
		if (typeof f == "boolean") return f;
		if (typeof f == "number") {
			if (f % 1 != 0) throw Error("initiallyShowControls must be an integer or a boolean");
			if (Number.isNaN(f)) throw Error("initiallyShowControls must not be NaN");
			if (!Number.isFinite(f)) throw Error("initiallyShowControls must be finite");
			if (f <= 0) throw Error("initiallyShowControls must be a positive integer");
			return f;
		}
		throw TypeError("initiallyShowControls must be a number or a boolean");
	}), ee = (0, b.useMemo)(() => {
		let e = N || !D || I || g;
		return {
			...xh,
			opacity: Number(e)
		};
	}, [
		N,
		I,
		D,
		g
	]);
	(0, b.useEffect)(() => {
		A.current && s && A.current.focus({ preventScroll: !0 });
	}, [D, s]), (0, b.useEffect)(() => {
		M((typeof document < "u" && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) ?? !1);
	}, []), (0, b.useEffect)(() => {
		if (I === !1) return;
		let e = setTimeout(() => {
			L(!1);
		}, I === !0 ? 2e3 : I);
		return () => {
			clearInterval(e);
		};
	}, [I]);
	let te = (0, b.useMemo)(() => {
		if (_ === !0) return [
			.5,
			.8,
			1,
			1.2,
			1.5,
			1.8,
			2,
			2.5,
			3
		];
		if (Array.isArray(_)) {
			for (let e of _) {
				if (typeof e != "number") throw Error("Every item in showPlaybackRateControl must be a number");
				if (e <= 0) throw Error("Every item in showPlaybackRateControl must be positive");
			}
			return _;
		}
		return null;
	}, [_]), ne = k ? k() : null, R = (0, b.useRef)(null), re = (0, b.useRef)(null), z = (0, b.useCallback)((e) => {
		(e.target === R.current || e.target === re.current) && C?.(e);
	}, [C]), ie = (0, b.useCallback)((e) => {
		(e.target === R.current || e.target === re.current) && w?.(e);
	}, [w]);
	return /* @__PURE__ */ (0, S.jsxs)("div", {
		ref: R,
		style: ee,
		onPointerDown: z,
		onDoubleClick: ie,
		children: [
			/* @__PURE__ */ (0, S.jsxs)("div", {
				ref: re,
				style: Sh,
				children: [
					/* @__PURE__ */ (0, S.jsxs)("div", {
						style: Ch,
						children: [
							/* @__PURE__ */ (0, S.jsx)("button", {
								ref: A,
								type: "button",
								style: nh,
								onClick: O,
								"aria-label": D ? "Pause video" : "Play video",
								title: D ? "Pause video" : "Play video",
								children: m === null ? /* @__PURE__ */ (0, S.jsx)(Rm, {
									buffering: y,
									playing: D
								}) : m({
									playing: D,
									isBuffering: y
								}) ?? /* @__PURE__ */ (0, S.jsx)(Rm, {
									buffering: y,
									playing: D
								})
							}),
							r ? /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [/* @__PURE__ */ (0, S.jsx)("div", { style: wh }), /* @__PURE__ */ (0, S.jsx)(Wm, {
								renderMuteButton: T,
								renderVolumeSlider: E,
								displayVerticalVolumeSlider: F
							})] }) : null,
							/* @__PURE__ */ (0, S.jsx)("div", { style: wh }),
							/* @__PURE__ */ (0, S.jsx)(mh, {
								durationInFrames: e,
								fps: n,
								maxTimeLabelWidth: P
							}),
							/* @__PURE__ */ (0, S.jsx)("div", { style: wh })
						]
					}),
					/* @__PURE__ */ (0, S.jsx)("div", { style: Eh }),
					ne,
					ne && te && p ? /* @__PURE__ */ (0, S.jsx)("div", { style: wh }) : null,
					te && p && /* @__PURE__ */ (0, S.jsx)(ih, {
						canvasSize: p,
						playbackRates: te
					}),
					te && j && a ? /* @__PURE__ */ (0, S.jsx)("div", { style: wh }) : null,
					/* @__PURE__ */ (0, S.jsx)("div", {
						style: Dh,
						children: j && a ? /* @__PURE__ */ (0, S.jsx)("button", {
							type: "button",
							"aria-label": t ? "Exit fullscreen" : "Enter Fullscreen",
							title: t ? "Exit fullscreen" : "Enter Fullscreen",
							style: nh,
							onClick: t ? o : i,
							children: h === null ? /* @__PURE__ */ (0, S.jsx)(Xp, { isFullscreen: t }) : h({ isFullscreen: t })
						}) : null
					})
				]
			}),
			/* @__PURE__ */ (0, S.jsx)("div", { style: Th }),
			/* @__PURE__ */ (0, S.jsx)(fh, {
				onSeekEnd: c,
				onSeekStart: l,
				durationInFrames: e,
				inFrame: u,
				outFrame: d
			})
		]
	});
}, kh = typeof document > "u", Ah = (e) => {
	let t = !1;
	return {
		promise: new Promise((n, r) => {
			e.then((e) => {
				if (t) {
					r({
						isCanceled: t,
						value: e
					});
					return;
				}
				n(e);
			}).catch((e) => {
				r({
					isCanceled: t,
					error: e
				});
			});
		}),
		cancel: () => {
			t = !0;
		}
	};
}, jh = (e) => new Promise((t) => setTimeout(t, e)), Mh = () => {
	let e = (0, b.useRef)([]), t = (0, b.useCallback)((t) => {
		e.current = [...e.current, t];
	}, []), n = (0, b.useCallback)((t) => {
		e.current = e.current.filter((e) => e !== t);
	}, []), r = (0, b.useCallback)(() => e.current.map((e) => e.cancel()), []);
	return (0, b.useMemo)(() => ({
		appendPendingPromise: t,
		removePendingPromise: n,
		clearPendingPromises: r
	}), [
		t,
		r,
		n
	]);
}, Nh = (e, t, n) => {
	let r = Mh(), i = (0, b.useCallback)(async (t) => {
		if (t instanceof PointerEvent ? t.pointerType === "touch" : t.nativeEvent.pointerType === "touch") {
			e(t);
			return;
		}
		r.clearPendingPromises();
		let n = Ah(jh(200));
		r.appendPendingPromise(n);
		try {
			await n.promise, r.removePendingPromise(n), e(t);
		} catch (e) {
			let t = e;
			if (r.removePendingPromise(n), !t.isCanceled) throw t.error;
		}
	}, [r, e]), a = (0, b.useCallback)(() => {
		document.addEventListener("pointerup", (e) => {
			i(e);
		}, { once: !0 });
	}, [i]), o = (0, b.useCallback)(() => {
		r.clearPendingPromises(), t();
	}, [r, t]);
	return (0, b.useMemo)(() => n ? {
		handlePointerDown: a,
		handleDoubleClick: o
	} : {
		handlePointerDown: e,
		handleDoubleClick: () => {}
	}, [
		n,
		o,
		a,
		e
	]);
}, Ph = "19.3.0".split(".")[0];
if (Ph === "0") throw Error(`Version ${Ph} of "react" is not supported by Remotion`);
var Fh = parseInt(Ph, 10) >= 18, Ih = (0, b.forwardRef)(({ controls: e, style: t, loop: n, autoPlay: r, allowFullscreen: i, inputProps: a, clickToPlay: o, showVolumeControls: s, doubleClickToFullscreen: c, spaceKeyToPlayOrPause: l, errorFallback: u, playbackRate: d, renderLoading: f, renderPoster: p, className: m, moveToBeginningWhenEnded: h, showPosterWhenUnplayed: g, showPosterWhenEnded: _, showPosterWhenPaused: v, showPosterWhenBuffering: y, showPosterWhenBufferingAndPaused: x, inFrame: C, outFrame: w, initiallyShowControls: T, renderFullscreen: E, renderPlayPauseButton: D, renderMuteButton: O, renderVolumeSlider: k, renderCustomControls: A, alwaysShowControls: j, showPlaybackRateControl: M, posterFillMode: N, bufferStateDelayInMilliseconds: P, hideControlsWhenPointerDoesntMove: F, overflowVisible: I, browserMediaControlsBehavior: L, overrideInternalClassName: ee, noSuspense: te }, ne) => {
	let R = Q.useUnsafeVideoConfig(), re = Q.useVideo(), z = (0, b.useRef)(null), ie = km(z, {
		triggerOnWindowResize: !1,
		shouldApplyCssTransforms: !1
	}), [ae, oe] = (0, b.useState)(!1), [se, ce] = (0, b.useState)(r), [le, ue] = (0, b.useState)(() => !1), [B, V] = (0, b.useState)(!1), [de, fe] = (0, b.useState)(!1), pe = (0, b.useMemo)(() => typeof document > "u" ? !1 : !!(document.fullscreenEnabled || document.webkitFullscreenEnabled), []), H = vm(), U = Q.usePlaying(), W = Q.Timeline.useTimelinePosition(), me = (0, b.useCallback)((e) => {
		H.isPlaying() || (fe(!0), H.play(e));
	}, [H]), { playerMuted: he, mediaVolume: ge } = (0, b.useContext)(Q.MediaVolumeContext), _e = (0, b.useContext)(lm);
	(0, b.useEffect)(() => {
		H.emitter.dispatchVolumeChange(ge);
	}, [H.emitter, ge]);
	let ve = he || ge === 0;
	(0, b.useEffect)(() => {
		H.emitter.dispatchMuteChange({ isMuted: ve });
	}, [H.emitter, ve]), Em({
		loop: n,
		playbackRate: d,
		moveToBeginningWhenEnded: h,
		inFrame: C,
		outFrame: w,
		getCurrentFrame: H.getCurrentFrame,
		browserMediaControlsBehavior: L,
		muted: ve
	}), (0, b.useEffect)(() => {
		ae && !U && (oe(!1), me());
	}, [
		ae,
		me,
		U
	]), (0, b.useEffect)(() => {
		let { current: e } = z;
		if (!e) return;
		let t = () => {
			let t = document.fullscreenElement === e || document.webkitFullscreenElement === e;
			ue(t);
		};
		return document.addEventListener("fullscreenchange", t), document.addEventListener("webkitfullscreenchange", t), () => {
			document.removeEventListener("fullscreenchange", t), document.removeEventListener("webkitfullscreenchange", t);
		};
	}, []);
	let ye = (0, b.useCallback)((e) => {
		H.isPlaying() ? H.pause() : me(e);
	}, [me, H]), be = (0, b.useCallback)(() => {
		if (!i) throw Error("allowFullscreen is false");
		if (!pe) throw Error("Browser doesnt support fullscreen");
		if (!z.current) throw Error("No player ref found");
		z.current.webkitRequestFullScreen ? z.current.webkitRequestFullScreen() : z.current.requestFullscreen();
	}, [i, pe]), xe = (0, b.useCallback)(() => {
		document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.exitFullscreen();
	}, []);
	(0, b.useEffect)(() => {
		let { current: e } = z;
		if (!e) return;
		let t = () => {
			let e = document.webkitFullscreenElement ?? document.fullscreenElement;
			e && e === z.current ? H.emitter.dispatchFullscreenChange({ isFullscreen: !0 }) : H.emitter.dispatchFullscreenChange({ isFullscreen: !1 });
		};
		return e.addEventListener("webkitfullscreenchange", t), e.addEventListener("fullscreenchange", t), () => {
			e.removeEventListener("webkitfullscreenchange", t), e.removeEventListener("fullscreenchange", t);
		};
	}, [H.emitter]);
	let Se = R?.durationInFrames ?? 1, Ce = (0, b.useMemo)(() => !R || !ie ? null : am({
		canvasSize: ie,
		compositionHeight: R.height,
		compositionWidth: R.width,
		previewSize: "auto"
	}), [ie, R]), we = Ce?.scale ?? 1, G = (0, b.useRef)(!1);
	(0, b.useEffect)(() => {
		if (!G.current) {
			G.current = !0;
			return;
		}
		H.emitter.dispatchScaleChange(we);
	}, [H.emitter, we]);
	let { setMediaVolume: Te, setPlayerMuted: Ee } = (0, b.useContext)(Q.SetMediaVolumeContext), [De, Oe] = (0, b.useState)(!1);
	(0, b.useEffect)(() => {
		let e = null, t = !1, n = () => {
			t = !1, requestAnimationFrame(() => {
				P === 0 ? Oe(!0) : e = setTimeout(() => {
					t || Oe(!0);
				}, P);
			});
		}, r = () => {
			requestAnimationFrame(() => {
				t = !0, Oe(!1), e && clearTimeout(e);
			});
		};
		return H.emitter.addEventListener("waiting", n), H.emitter.addEventListener("resume", r), () => {
			H.emitter.removeEventListener("waiting", n), H.emitter.removeEventListener("resume", r), Oe(!1), e && clearTimeout(e), t = !0;
		};
	}, [P, H.emitter]), (0, b.useImperativeHandle)(ne, () => {
		let e = {
			play: me,
			pause: () => {
				oe(!1), H.pause();
			},
			toggle: ye,
			getContainerNode: () => z.current,
			getCurrentFrame: H.getCurrentFrame,
			isPlaying: H.isPlaying,
			seekTo: (e) => {
				let t = Se - 1, r = Math.max(0, Math.min(t, e));
				H.isPlaying() && (oe(r !== t || n), H.pause()), r === t && !n && H.emitter.dispatchEnded(), H.seek(r);
			},
			isFullscreen: () => {
				let { current: e } = z;
				return e ? document.fullscreenElement === e || document.webkitFullscreenElement === e : !1;
			},
			requestFullscreen: be,
			exitFullscreen: xe,
			getVolume: () => he ? 0 : ge,
			setVolume: (e) => {
				if (typeof e != "number") throw TypeError(`setVolume() takes a number, got value of type ${typeof e}`);
				if (isNaN(e)) throw TypeError("setVolume() got a number that is NaN. Volume must be between 0 and 1.");
				if (e < 0 || e > 1) throw TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${e}`);
				Te(e);
			},
			isMuted: () => ve,
			mute: () => {
				Ee(!0);
			},
			unmute: () => {
				Ee(!1);
			},
			getScale: () => we,
			pauseAndReturnToPlayStart: () => {
				H.pauseAndReturnToPlayStart();
			}
		};
		return Object.assign(H.emitter, e);
	}, [
		Se,
		xe,
		n,
		he,
		ve,
		ge,
		H,
		me,
		be,
		Ee,
		Te,
		ye,
		we
	]);
	let ke = re ? re.component : null, Ae = (0, b.useMemo)(() => om({
		canvasSize: ie,
		config: R,
		style: t,
		overflowVisible: I,
		layout: Ce
	}), [
		ie,
		R,
		Ce,
		I,
		t
	]), je = (0, b.useMemo)(() => cm({
		config: R,
		layout: Ce,
		scale: we,
		overflowVisible: I
	}), [
		R,
		Ce,
		I,
		we
	]), Me = (0, b.useMemo)(() => sm({
		config: R,
		layout: Ce,
		scale: we,
		overflowVisible: I
	}), [
		R,
		Ce,
		I,
		we
	]), Ne = H.pause, Pe = H.emitter.dispatchError, Fe = (0, b.useCallback)((e) => {
		Ne(), Pe(e);
	}, [Pe, Ne]), Ie = (0, b.useCallback)((e) => {
		e.stopPropagation(), be();
	}, [be]), Le = (0, b.useCallback)((e) => {
		e.stopPropagation(), xe();
	}, [xe]), Re = (0, b.useCallback)((e) => {
		(e instanceof MouseEvent ? e.button === 2 : e.nativeEvent.button) || ye(e);
	}, [ye]), ze = (0, b.useCallback)(() => {
		V(!0);
	}, []), Be = (0, b.useCallback)(() => {
		V(!1);
	}, []), { handlePointerDown: Ve, handleDoubleClick: He } = Nh(Re, (0, b.useCallback)(() => {
		le ? xe() : be();
	}, [
		xe,
		le,
		be
	]), c && i && pe);
	(0, b.useEffect)(() => {
		se && (fe(!0), H.playAsAutoPlay(), ce(!1));
	}, [H, se]);
	let Ue = (0, b.useMemo)(() => f ? f({
		height: Ae.height,
		width: Ae.width,
		isBuffering: De
	}) : null, [
		Ae.height,
		Ae.width,
		f,
		De
	]), We = (0, b.useMemo)(() => ({
		type: "scale",
		scale: we
	}), [we]);
	if (!R) return null;
	let Ge = p ? p({
		height: N === "player-size" ? Ae.height : R.height,
		width: N === "player-size" ? Ae.width : R.width,
		isBuffering: De
	}) : null;
	if (Ge === void 0) throw TypeError("renderPoster() must return a React element, but undefined was returned");
	let Ke = Ge && [
		v && !U && !B,
		_ && W === Se - 1 && !U,
		g && !de && !U,
		y && De && U,
		x && De && !U
	].some(Boolean), { left: qe, top: Je, width: Ye, height: Xe, ...Ze } = je, Qe = /* @__PURE__ */ (0, S.jsxs)(S.Fragment, { children: [
		/* @__PURE__ */ (0, S.jsxs)("div", {
			style: je,
			onPointerDown: o ? Ve : void 0,
			onDoubleClick: c ? He : void 0,
			children: [
				/* @__PURE__ */ (0, S.jsxs)("div", {
					style: Me,
					className: Am(ee),
					children: [ke ? /* @__PURE__ */ (0, S.jsx)(Mm, {
						onError: Fe,
						errorFallback: u,
						children: /* @__PURE__ */ (0, S.jsx)(Q.CurrentScaleContext.Provider, {
							value: We,
							children: /* @__PURE__ */ (0, S.jsx)(lm.Provider, {
								value: null,
								children: /* @__PURE__ */ (0, S.jsx)(ke, {
									...re?.props ?? {},
									...a ?? {}
								})
							})
						})
					}) : null, Ke && N === "composition-size" ? /* @__PURE__ */ (0, S.jsx)("div", {
						style: {
							...Ze,
							width: R.width,
							height: R.height
						},
						onPointerDown: o ? Ve : void 0,
						onDoubleClick: c ? He : void 0,
						children: Ge
					}) : null]
				}),
				/* @__PURE__ */ (0, S.jsx)(Lm, {}),
				_e
			]
		}),
		Ke && N === "player-size" ? /* @__PURE__ */ (0, S.jsx)("div", {
			style: je,
			onPointerDown: o ? Ve : void 0,
			onDoubleClick: c ? He : void 0,
			children: Ge
		}) : null,
		e ? /* @__PURE__ */ (0, S.jsx)(Oh, {
			fps: R.fps,
			playing: U,
			toggle: ye,
			durationInFrames: R.durationInFrames,
			containerRef: z,
			onFullscreenButtonClick: Ie,
			isFullscreen: le,
			allowFullscreen: i,
			showVolumeControls: s,
			onExitFullscreenButtonClick: Le,
			spaceKeyToPlayOrPause: l,
			onSeekEnd: Be,
			onSeekStart: ze,
			inFrame: C,
			outFrame: w,
			initiallyShowControls: T,
			canvasSize: ie,
			renderFullscreenButton: E,
			renderPlayPauseButton: D,
			alwaysShowControls: j,
			showPlaybackRateControl: M,
			buffering: De,
			hideControlsWhenPointerDoesntMove: F,
			onDoubleClick: c ? He : void 0,
			onPointerDown: o ? Ve : void 0,
			renderMuteButton: O,
			renderVolumeSlider: k,
			renderCustomControls: A
		}) : null
	] });
	return te || kh && !Fh ? /* @__PURE__ */ (0, S.jsx)("div", {
		ref: z,
		style: Ae,
		className: m,
		children: Qe
	}) : /* @__PURE__ */ (0, S.jsx)("div", {
		ref: z,
		style: Ae,
		className: m,
		children: /* @__PURE__ */ (0, S.jsx)(b.Suspense, {
			fallback: Ue,
			children: Qe
		})
	});
}), Lh = "remotion.volumePreference", Rh = (e, t, n) => {
	if (typeof window < "u") try {
		window.localStorage.setItem(n ?? Lh, String(e));
	} catch (e) {
		Q.Log.error({
			logLevel: t,
			tag: null
		}, "Could not persist volume", e);
	}
}, zh = (e) => {
	if (typeof window > "u") return 1;
	try {
		let t = window.localStorage.getItem(e ?? Lh);
		return t ? Number(t) : 1;
	} catch {
		return 1;
	}
}, Bh = "player-comp", Vh = ({ children: e, timelineContext: t, playbackRateContext: n, fps: r, compositionHeight: i, compositionWidth: a, durationInFrames: o, component: s, numberOfSharedAudioTags: c, initiallyMuted: l, logLevel: u, audioLatencyHint: d, sampleRate: f, volumePersistenceKey: p, initialVolume: m, inputProps: h, audioEnabled: g, _experimentalKeepAudioContextAlive: _ }) => {
	let v = m === void 0, y = (0, b.useMemo)(() => ({
		compositions: [{
			component: s,
			durationInFrames: o,
			height: i,
			width: a,
			fps: r,
			id: Bh,
			order: null,
			folderName: null,
			parentFolderName: null,
			schema: null,
			calculateMetadata: null,
			stack: null
		}],
		folders: [],
		currentAssetMetadata: null,
		currentCompositionMetadata: {
			defaultCodec: null,
			defaultOutName: null,
			defaultPixelFormat: null,
			defaultProResProfile: null,
			defaultSampleRate: null,
			defaultVideoImageFormat: null,
			durationInFrames: o,
			fps: r,
			height: i,
			width: a,
			props: h
		},
		canvasContent: {
			type: "composition",
			compositionId: "player-comp"
		}
	}), [
		s,
		o,
		i,
		a,
		r,
		h
	]), [x, C] = (0, b.useState)(() => l), [w, T] = (0, b.useState)(() => v ? zh(p ?? null) : m), E = (0, b.useMemo)(() => ({
		playerMuted: x,
		mediaVolume: w
	}), [x, w]), D = (0, b.useRef)(!1), O = D.current || g && !x && w > 0;
	D.current = O;
	let k = (0, b.useCallback)((e) => {
		T(e), v && Rh(e, u, p ?? null);
	}, [
		v,
		u,
		p
	]), A = (0, b.useMemo)(() => ({
		setPlayerMuted: C,
		setMediaVolume: k
	}), [k]), j = (0, b.useMemo)(() => ({
		logLevel: u,
		mountTime: Date.now()
	}), [u]), M = (0, b.useMemo)(() => ({
		isPlayer: !0,
		isRendering: !1,
		isStudio: !1,
		isClientSideRendering: !1,
		isReadOnlyStudio: !1
	}), []);
	return /* @__PURE__ */ (0, S.jsx)(Q.RemotionEnvironmentContext.Provider, {
		value: M,
		children: /* @__PURE__ */ (0, S.jsx)(Q.LogLevelContext.Provider, {
			value: j,
			children: /* @__PURE__ */ (0, S.jsx)(Q.CanUseRemotionHooksProvider, { children: /* @__PURE__ */ (0, S.jsx)(Q.AbsoluteTimeContext.Provider, {
				value: t,
				children: /* @__PURE__ */ (0, S.jsx)(Q.PlaybackRateContext.Provider, {
					value: n,
					children: /* @__PURE__ */ (0, S.jsx)(Q.TimelineContext.Provider, {
						value: t,
						children: /* @__PURE__ */ (0, S.jsx)(Q.CompositionManager.Provider, {
							value: y,
							children: /* @__PURE__ */ (0, S.jsx)(Q.PrefetchProvider, { children: /* @__PURE__ */ (0, S.jsx)(Q.DurationsContextProvider, { children: /* @__PURE__ */ (0, S.jsx)(Q.MediaVolumeContext.Provider, {
								value: E,
								children: /* @__PURE__ */ (0, S.jsx)(Q.SetMediaVolumeContext.Provider, {
									value: A,
									children: /* @__PURE__ */ (0, S.jsx)(Q.BufferingProvider, { children: /* @__PURE__ */ (0, S.jsx)(Q.SharedAudioContextProvider, {
										audioLatencyHint: d,
										audioEnabled: O,
										previewSampleRate: f,
										_experimentalKeepAudioContextAlive: _,
										children: /* @__PURE__ */ (0, S.jsx)(Q.SharedAudioTagsContextProvider, {
											numberOfAudioTags: c,
											children: e
										})
									}) })
								})
							}) }) })
						})
					})
				})
			}) })
		})
	});
}, Hh = !1, Uh = (e, t) => {
	e || Hh || (Hh = !0, Q.Log.warn({
		logLevel: t,
		tag: null
	}, "Note: Some companies are required to obtain a license to use Remotion. See: https://remotion.dev/license\nPass the `acknowledgeRemotionLicense` prop to `<Player />` function to make this message disappear."));
}, Wh = (e, t) => {
	if (e == null) return e ?? null;
	if (typeof e != "number") throw TypeError(`"${t}" must be a number, but is ${JSON.stringify(e)}`);
	if (Number.isNaN(e)) throw TypeError(`"${t}" must not be NaN, but is ${JSON.stringify(e)}`);
	if (!Number.isFinite(e)) throw TypeError(`"${t}" must be finite, but is ${JSON.stringify(e)}`);
	if (e % 1 != 0) throw TypeError(`"${t}" must be an integer, but is ${JSON.stringify(e)}`);
	return e;
}, Gh = ({ inFrame: e, durationInFrames: t, outFrame: n }) => {
	let r = Wh(e, "inFrame"), i = Wh(n, "outFrame");
	if (r !== null || i !== null) {
		if (r !== null && r > t - 1) throw Error("inFrame must be less than (durationInFrames - 1), but is " + r);
		if (i !== null && i > t - 1) throw Error("outFrame must be less than (durationInFrames - 1), but is " + i);
		if (r !== null && r < 0) throw Error("inFrame must be greater than 0, but is " + r);
		if (i !== null && i <= 0) throw Error(`outFrame must be greater than 0, but is ${i}. If you want to render a single frame, use <Thumbnail /> instead.`);
		if (i !== null && r !== null && i <= r) throw Error("outFrame must be greater than inFrame, but is " + i + " <= " + r);
	}
}, Kh = ({ initialFrame: e, durationInFrames: t }) => {
	if (typeof t != "number") throw Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(t)}`);
	if (e !== void 0) {
		if (typeof e != "number") throw Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(e)}`);
		if (Number.isNaN(e)) throw Error("`initialFrame` must be a number, but is NaN");
		if (!Number.isFinite(e)) throw Error("`initialFrame` must be a number, but is Infinity");
		if (e % 1 != 0) throw Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(e)}`);
		if (e > t - 1) throw Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(e)}`);
	}
}, qh = (e) => {
	if (e !== void 0) {
		if (e > 10) throw Error(`The highest possible playback rate is 10. You passed: ${e}`);
		if (e < -10) throw Error(`The lowest possible playback rate is -10. You passed: ${e}`);
		if (e === 0) throw Error("A playback rate of 0 is not supported.");
	}
}, Jh = Gp.validateFps, Yh = Gp.validateDimension, Xh = Gp.validateDurationInFrames, Zh = Gp.validateDefaultAndInputProps, Qh = (e) => "component" in e ? e.component : null, $h = ({ onTimelineSequenceChange: e }) => {
	let t = Q.useSequenceManagerSequences();
	return (0, b.useEffect)(() => {
		e(t);
	}, [e, t]), null;
}, eg = (0, b.forwardRef)(({ durationInFrames: e, compositionHeight: t, compositionWidth: n, fps: r, inputProps: i, style: a, controls: o = !1, loop: s = !1, autoPlay: c = !1, showVolumeControls: l = !0, allowFullscreen: u = !0, clickToPlay: d, doubleClickToFullscreen: f = !1, spaceKeyToPlayOrPause: p = !0, moveToBeginningWhenEnded: m = !0, numberOfSharedAudioTags: h = Gp.ENABLE_V5_BREAKING_CHANGES ? 0 : 5, errorFallback: g = () => "⚠️", playbackRate: _ = 1, renderLoading: v, className: y, showPosterWhenUnplayed: x, showPosterWhenEnded: C, showPosterWhenPaused: w, showPosterWhenBuffering: T, showPosterWhenBufferingAndPaused: E, initialFrame: D, renderPoster: O, inFrame: k, outFrame: A, initiallyShowControls: j, renderFullscreenButton: M, renderPlayPauseButton: N, renderVolumeSlider: P, renderCustomControls: F, alwaysShowControls: I = !1, initiallyMuted: L = !1, showPlaybackRateControl: ee = !1, posterFillMode: te = "player-size", bufferStateDelayInMilliseconds: ne, hideControlsWhenPointerDoesntMove: R = !0, overflowVisible: re = !1, renderMuteButton: z, browserMediaControlsBehavior: ie, overrideInternalClassName: ae, logLevel: oe = "info", noSuspense: se, acknowledgeRemotionLicense: ce, audioLatencyHint: le = "playback", sampleRate: ue = 48e3, volumePersistenceKey: B, initialVolume: V, _experimentalKeepAudioContextAlive: de = !1, ...fe }, pe) => {
	typeof window < "u" && (window.remotion_isPlayer = !0);
	let H = b.useContext(gm);
	if (fe.defaultProps !== void 0) throw Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");
	let U = Qh(fe);
	if (U?.type === tn) throw TypeError("'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.");
	if (U === tn) throw TypeError("'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.");
	(0, b.useState)(() => Uh(!!ce, oe));
	let W = Q.useLazyComponent({
		compProps: fe,
		componentName: "Player",
		noSuspense: !!se
	});
	Kh({
		initialFrame: D,
		durationInFrames: e
	});
	let [me, he] = (0, b.useState)(() => ({ [Bh]: D ?? 0 })), ge = Q.useTimelineSeek(he), _e = (0, b.useRef)(me);
	_e.current = me;
	let ve = (0, b.useRef)(null), ye = (0, b.useRef)([]), be = (0, b.useMemo)(() => Q.createRuntimeValueStore({ playing: !1 }), []), xe = (0, b.useMemo)(() => Q.createRuntimeValueStore({ buffering: !1 }), []), Se = (0, b.useCallback)(() => be.store.getSnapshot().playing, [be]), Ce = (0, b.useCallback)(() => xe.store.getSnapshot().buffering, [xe]), [we, G] = (0, b.useState)(_);
	if (typeof t != "number") throw TypeError(`'compositionHeight' must be a number but got '${typeof t}' instead`);
	if (typeof n != "number") throw TypeError(`'compositionWidth' must be a number but got '${typeof n}' instead`);
	if (Yh(t, "compositionHeight", "of the <Player /> component"), Yh(n, "compositionWidth", "of the <Player /> component"), Xh(e, {
		component: "of the <Player/> component",
		allowFloats: !1
	}), Jh(r, "as a prop of the <Player/> component", !1), Zh(i, "inputProps", null), Gh({
		durationInFrames: e,
		inFrame: k,
		outFrame: A
	}), typeof o != "boolean" && o !== void 0) throw TypeError(`'controls' must be a boolean or undefined but got '${typeof o}' instead`);
	if (typeof c != "boolean" && c !== void 0) throw TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof c}' instead`);
	if (typeof s != "boolean" && s !== void 0) throw TypeError(`'loop' must be a boolean or undefined but got '${typeof s}' instead`);
	if (typeof f != "boolean" && f !== void 0) throw TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof f}' instead`);
	if (typeof l != "boolean" && l !== void 0) throw TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof l}' instead`);
	if (typeof u != "boolean" && u !== void 0) throw TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof u}' instead`);
	if (typeof d != "boolean" && d !== void 0) throw TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof d}' instead`);
	if (typeof p != "boolean" && p !== void 0) throw TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof p}' instead`);
	if (typeof ue != "number" || !Number.isFinite(ue) || Number.isNaN(ue) || ue <= 0 || ue % 1 != 0) throw TypeError(`'sampleRate' must be a positive integer but got '${ue}' instead`);
	if (V !== void 0 && typeof V != "number") throw TypeError(`'initialVolume' must be a number or undefined but got '${typeof V}' instead`);
	if (typeof V == "number" && (!Number.isFinite(V) || Number.isNaN(V) || V < 0 || V > 1)) throw TypeError(`'initialVolume' must be between 0 and 1 but got '${V}' instead`);
	if (typeof h != "number" || h % 1 != 0 || !Number.isFinite(h) || Number.isNaN(h) || h < 0) throw TypeError(`'numberOfSharedAudioTags' must be an integer but got '${h}' instead`);
	qh(we), (0, b.useEffect)(() => {
		G(_);
	}, [_]), (0, b.useImperativeHandle)(pe, () => ve.current, []), (0, b.useState)(() => {
		Q.playbackLogging({
			logLevel: oe,
			message: `[player] Mounting <Player>. User agent = ${typeof navigator > "u" ? "server" : navigator.userAgent}`,
			tag: "player",
			mountTime: Date.now()
		});
	});
	let Te = (0, b.useMemo)(() => ({
		frame: me,
		isPlaying: Se,
		isInsideFreeze: !1,
		audioAndVideoTags: ye
	}), [me, Se]), Ee = (0, b.useMemo)(() => ({
		playbackRate: we,
		setPlaybackRate: G
	}), [we]), De = (0, b.useMemo)(() => ({
		setFrameWithoutSeek: he,
		seek: ge,
		setPlaying: (e) => {
			let t = be.store.getSnapshot().playing, n = typeof e == "function" ? e(t) : e;
			t !== n && be.setSnapshot({ playing: n });
		},
		setBuffering: (e) => {
			Ce() !== e && xe.setSnapshot({ buffering: e });
		},
		subscribePlaying: be.store.subscribe,
		subscribeBuffering: xe.store.subscribe,
		isPlaying: Se,
		isBuffering: Ce,
		frameRef: _e,
		audioAndVideoTags: ye
	}), [
		xe,
		ge,
		he,
		_e,
		be,
		Ce,
		Se
	]);
	typeof window < "u" && (0, b.useLayoutEffect)(() => {
		Q.CSSUtils.injectCSS(Q.CSSUtils.makeDefaultPreviewCSS(`.${Am(ae)}`, "#fff"));
	}, [ae]);
	let Oe = (0, b.useMemo)(() => i ?? {}, [i]), ke = (0, b.useMemo)(() => ie ?? { mode: "prevent-media-session" }, [ie]), Ae = /* @__PURE__ */ (0, S.jsx)(Q.IsPlayerContextProvider, { children: /* @__PURE__ */ (0, S.jsx)(Q.SetTimelineContext.Provider, {
		value: De,
		children: /* @__PURE__ */ (0, S.jsx)(Vh, {
			timelineContext: Te,
			playbackRateContext: Ee,
			component: W,
			compositionHeight: t,
			compositionWidth: n,
			durationInFrames: e,
			fps: r,
			numberOfSharedAudioTags: h,
			initiallyMuted: L,
			logLevel: oe,
			audioLatencyHint: le,
			sampleRate: ue,
			_experimentalKeepAudioContextAlive: de,
			volumePersistenceKey: B,
			initialVolume: V,
			inputProps: Oe,
			audioEnabled: !0,
			children: /* @__PURE__ */ (0, S.jsx)(hm, {
				currentPlaybackRate: we,
				children: /* @__PURE__ */ (0, S.jsx)(Ih, {
					ref: ve,
					posterFillMode: te,
					renderLoading: v,
					autoPlay: !!c,
					loop: !!s,
					controls: !!o,
					errorFallback: g,
					style: a,
					inputProps: Oe,
					allowFullscreen: !!u,
					moveToBeginningWhenEnded: !!m,
					clickToPlay: typeof d == "boolean" ? d : !!o,
					showVolumeControls: !!l,
					doubleClickToFullscreen: !!f,
					spaceKeyToPlayOrPause: !!p,
					playbackRate: we,
					className: y ?? void 0,
					showPosterWhenUnplayed: !!x,
					showPosterWhenEnded: !!C,
					showPosterWhenPaused: !!w,
					showPosterWhenBuffering: !!T,
					showPosterWhenBufferingAndPaused: !!E,
					renderPoster: O,
					inFrame: k ?? null,
					outFrame: A ?? null,
					initiallyShowControls: j ?? !0,
					renderFullscreen: M ?? null,
					renderPlayPauseButton: N ?? null,
					renderMuteButton: z ?? null,
					renderVolumeSlider: P ?? null,
					renderCustomControls: F ?? null,
					alwaysShowControls: I,
					showPlaybackRateControl: ee,
					bufferStateDelayInMilliseconds: ne ?? 300,
					hideControlsWhenPointerDoesntMove: R,
					overflowVisible: re,
					browserMediaControlsBehavior: ke,
					overrideInternalClassName: ae ?? void 0,
					noSuspense: !!se
				})
			})
		})
	}) });
	return H ? /* @__PURE__ */ (0, S.jsx)(Q.SequenceRegistrationContext.Provider, {
		value: !0,
		children: /* @__PURE__ */ (0, S.jsxs)(Q.SequenceManagerProvider, { children: [/* @__PURE__ */ (0, S.jsx)($h, { onTimelineSequenceChange: H }), Ae] })
	}) : Ae;
}), tg = () => {
	let e = (0, b.useContext)(dm);
	if (!e) throw TypeError("Expected Player event emitter context");
	return (0, b.useMemo)(() => ({ emitter: e }), [e]);
}, ng = "19.3.0".split(".")[0];
if (ng === "0") throw Error(`Version ${ng} of "react" is not supported by Remotion`);
var rg = parseInt(ng, 10) >= 18, ig = (0, b.forwardRef)(({ style: e, inputProps: t, errorFallback: n, renderLoading: r, className: i, overflowVisible: a, noSuspense: o, overrideInternalClassName: s }, c) => {
	let l = Q.useUnsafeVideoConfig(), u = Q.useVideo(), d = (0, b.useRef)(null), f = km(d, {
		triggerOnWindowResize: !1,
		shouldApplyCssTransforms: !1
	}), p = (0, b.useMemo)(() => !l || !f ? null : am({
		canvasSize: f,
		compositionHeight: l.height,
		compositionWidth: l.width,
		previewSize: "auto"
	}), [f, l]), m = p?.scale ?? 1, h = tg();
	mm(h.emitter), (0, b.useImperativeHandle)(c, () => Object.assign(h.emitter, {
		getContainerNode: () => d.current,
		getScale: () => m
	}), [m, h.emitter]);
	let g = u ? u.component : null, _ = (0, b.useMemo)(() => om({
		config: l,
		style: e,
		canvasSize: f,
		overflowVisible: a,
		layout: p
	}), [
		f,
		l,
		p,
		a,
		e
	]), v = (0, b.useMemo)(() => cm({
		config: l,
		layout: p,
		scale: m,
		overflowVisible: a
	}), [
		l,
		p,
		a,
		m
	]), y = (0, b.useMemo)(() => sm({
		config: l,
		layout: p,
		scale: m,
		overflowVisible: a
	}), [
		l,
		p,
		a,
		m
	]), x = (0, b.useCallback)((e) => {
		h.emitter.dispatchError(e);
	}, [h.emitter]), C = (0, b.useMemo)(() => r ? r({
		height: _.height,
		width: _.width,
		isBuffering: !1
	}) : null, [
		_.height,
		_.width,
		r
	]), w = (0, b.useMemo)(() => ({
		type: "scale",
		scale: m
	}), [m]);
	if (!l) return null;
	let T = /* @__PURE__ */ (0, S.jsx)("div", {
		style: v,
		children: /* @__PURE__ */ (0, S.jsx)("div", {
			style: y,
			className: Am(s),
			children: g ? /* @__PURE__ */ (0, S.jsx)(Mm, {
				onError: x,
				errorFallback: n,
				children: /* @__PURE__ */ (0, S.jsx)(Q.CurrentScaleContext.Provider, {
					value: w,
					children: /* @__PURE__ */ (0, S.jsx)(g, {
						...u?.props ?? {},
						...t ?? {}
					})
				})
			}) : null
		})
	});
	return o || kh && !rg ? /* @__PURE__ */ (0, S.jsx)("div", {
		ref: d,
		style: _,
		className: i,
		children: T
	}) : /* @__PURE__ */ (0, S.jsx)("div", {
		ref: d,
		style: _,
		className: i,
		children: /* @__PURE__ */ (0, S.jsx)(b.Suspense, {
			fallback: C,
			children: T
		})
	});
});
(0, b.forwardRef)(({ frameToDisplay: e, style: t, inputProps: n, compositionHeight: r, compositionWidth: i, durationInFrames: a, fps: o, className: s, errorFallback: c = () => "⚠️", renderLoading: l, overflowVisible: u = !1, overrideInternalClassName: d, logLevel: f = "info", noSuspense: p, ...m }, h) => {
	typeof window < "u" && (0, b.useLayoutEffect)(() => {
		window.remotion_isPlayer = !0;
	}, []);
	let g = (0, b.useRef)(null), _ = (0, b.useRef)([]), v = (0, b.useMemo)(() => Q.createRuntimeValueStore({ buffering: !1 }), []), y = (0, b.useMemo)(() => ({
		isPlaying: () => !1,
		isInsideFreeze: !1,
		frame: { [Bh]: e },
		audioAndVideoTags: _
	}), [e]), x = (0, b.useMemo)(() => ({
		playbackRate: 1,
		setPlaybackRate: () => {
			throw Error("thumbnail");
		}
	}), []), C = (0, b.useRef)(y.frame);
	C.current = y.frame;
	let w = (0, b.useMemo)(() => ({
		setFrameWithoutSeek: () => {},
		seek: null,
		setPlaying: () => {},
		setBuffering: (e) => {
			v.store.getSnapshot().buffering !== e && v.setSnapshot({ buffering: e });
		},
		subscribePlaying: () => () => {},
		subscribeBuffering: v.store.subscribe,
		isPlaying: () => !1,
		isBuffering: () => v.store.getSnapshot().buffering,
		frameRef: C,
		audioAndVideoTags: _
	}), [v]);
	(0, b.useImperativeHandle)(h, () => g.current, []);
	let T = Q.useLazyComponent({
		compProps: m,
		componentName: "Thumbnail",
		noSuspense: !!p
	}), [E] = (0, b.useState)(() => new pm()), D = (0, b.useMemo)(() => n ?? {}, [n]);
	return /* @__PURE__ */ (0, S.jsx)(Q.IsPlayerContextProvider, { children: /* @__PURE__ */ (0, S.jsx)(Q.SetTimelineContext.Provider, {
		value: w,
		children: /* @__PURE__ */ (0, S.jsx)(Vh, {
			timelineContext: y,
			playbackRateContext: x,
			component: T,
			compositionHeight: r,
			compositionWidth: i,
			durationInFrames: a,
			fps: o,
			numberOfSharedAudioTags: 0,
			initiallyMuted: !0,
			logLevel: f,
			audioLatencyHint: "playback",
			sampleRate: 48e3,
			inputProps: D,
			audioEnabled: !1,
			_experimentalKeepAudioContextAlive: !1,
			children: /* @__PURE__ */ (0, S.jsx)(dm.Provider, {
				value: E,
				children: /* @__PURE__ */ (0, S.jsx)(ig, {
					ref: g,
					className: s,
					errorFallback: c,
					inputProps: D,
					renderLoading: l,
					style: t,
					overflowVisible: u,
					overrideInternalClassName: d,
					noSuspense: !!p
				})
			})
		})
	}) });
});
//#endregion
//#region player.jsx
function ag({ scene: e, colors: t }) {
	let n = (0, b.useRef)(null), r = Nn(), { width: i, height: a } = Pn();
	return (0, b.useLayoutEffect)(() => window.StudioIntro.draw(n.current, e, r, i, a, t), [
		e,
		r,
		i,
		a,
		t
	]), /* @__PURE__ */ (0, S.jsx)("canvas", {
		ref: n,
		"aria-hidden": "true",
		style: {
			width: "100%",
			height: "100%",
			display: "block"
		}
	});
}
var og = class extends b.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	componentDidCatch() {
		this.props.onError();
	}
	render() {
		return this.state.failed ? null : this.props.children;
	}
};
function sg(e, { scene: t, colors: n, portrait: r, onReady: i, onFrame: a, onPlay: o, onPause: s, onEnd: c, onError: l }) {
	let u = (0, y.createRoot)(e), d = null, f = !1, p = {
		frameupdate: (e) => a(e.detail.frame),
		play: o,
		pause: s,
		ended: c,
		error: l
	};
	function m(e) {
		if (d) for (let [e, t] of Object.entries(p)) d.removeEventListener(e, t);
		if (d = e, d) {
			for (let [e, t] of Object.entries(p)) d.addEventListener(e, t);
			i();
		}
	}
	return u.render(/* @__PURE__ */ (0, S.jsx)(og, {
		onError: l,
		children: /* @__PURE__ */ (0, S.jsx)(eg, {
			ref: m,
			component: ag,
			inputProps: {
				scene: t,
				colors: n
			},
			durationInFrames: 540,
			fps: 30,
			compositionWidth: r ? 1080 : 1920,
			compositionHeight: r ? 1350 : 1080,
			style: {
				width: "100%",
				height: "100%"
			},
			controls: !1,
			autoPlay: !1,
			loop: !1,
			initiallyMuted: !0,
			moveToBeginningWhenEnded: !1
		})
	})), {
		play() {
			f || d?.play();
		},
		pause() {
			d?.pause();
		},
		seek(e) {
			f || d?.seekTo(e);
		},
		frame() {
			return d?.getCurrentFrame() ?? 0;
		},
		dispose() {
			f || (f = !0, d?.pause(), u.unmount(), d = null);
		}
	};
}
//#endregion
export { sg as mount };
