var e = function() {
	"use strict";

	function r(e, r) {
		postMessage({
			action: xt,
			cbn: r,
			result: e
		})
	}

	function t(e) {
		var r = [];
		return r[e - 1] = void 0, r
	}

	function o(e, r) {
		return i(e[0] + r[0], e[1] + r[1])
	}

	function n(e, r) {
		return u(~~Math.max(Math.min(e[1] / Ot, 2147483647), -2147483648) & ~~Math.max(Math.min(r[1] / Ot, 2147483647), -2147483648), c(e) & c(r))
	}

	function s(e, r) {
		var t, o;
		return e[0] == r[0] && e[1] == r[1] ? 0 : (t = 0 > e[1], o = 0 > r[1], t && !o ? -1 : !t && o ? 1 : h(e, r)[1] < 0 ? -1 : 1)
	}

	function i(e, r) {
		var t, o;
		for (r %= 0x10000000000000000, e %= 0x10000000000000000, t = r % Ot, o = Math.floor(e / Ot) * Ot, r = r - t + o, e = e - o + t; 0 > e;) e += Ot, r -= Ot;
		for (; e > 4294967295;) e -= Ot, r += Ot;
		for (r %= 0x10000000000000000; r > 0x7fffffff00000000;) r -= 0x10000000000000000;
		for (; - 0x8000000000000000 > r;) r += 0x10000000000000000;
		return [e, r]
	}

	function _(e, r) {
		return e[0] == r[0] && e[1] == r[1]
	}

	function a(e) {
		return e >= 0 ? [e, 0] : [e + Ot, -Ot]
	}

	function c(e) {
		return e[0] >= 2147483648 ? ~~Math.max(Math.min(e[0] - Ot, 2147483647), -2147483648) : ~~Math.max(Math.min(e[0], 2147483647), -2147483648)
	}

	function u(e, r) {
		var t, o;
		return t = e * Ot, o = r, 0 > r && (o += Ot), [o, t]
	}

	function f(e) {
		return 30 >= e ? 1 << e : f(30) * f(e - 30)
	}

	function m(e, r) {
		var t, o, n, s;
		if (r &= 63, _(e, Ht)) return r ? Gt : e;
		if (0 > e[1]) throw Error("Neg");
		return s = f(r), o = e[1] * s % 0x10000000000000000, n = e[0] * s, t = n - n % Ot, o += t, n -= t, o >= 0x8000000000000000 && (o -= 0x10000000000000000), [n, o]
	}

	function d(e, r) {
		var t;
		return r &= 63, t = f(r), i(Math.floor(e[0] / t), e[1] / t)
	}

	function p(e, r) {
		var t;
		return r &= 63, t = d(e, r), 0 > e[1] && (t = o(t, m([2, 0], 63 - r))), t
	}

	function h(e, r) {
		return i(e[0] - r[0], e[1] - r[1])
	}

	function P(e, r) {
		return e.Mc = r, e.Lc = 0, e.Wb = r.length, e
	}

	function l(e) {
		return e.Lc >= e.Wb ? -1 : 255 & e.Mc[e.Lc++]
	}

	function v(e, r, t, o) {
		return e.Lc >= e.Wb ? -1 : (o = Math.min(o, e.Wb - e.Lc), M(e.Mc, e.Lc, r, t, o), e.Lc += o, o)
	}

	function B(e) {
		return e.Mc = t(32), e.Wb = 0, e
	}

	function S(e) {
		var r = e.Mc;
		return r.length = e.Wb, r
	}

	function g(e, r) {
		e.Mc[e.Wb++] = r << 24 >> 24
	}

	function k(e, r, t, o) {
		M(r, t, e.Mc, e.Wb, o), e.Wb += o
	}

	function R(e, r, t, o, n) {
		var s;
		for (s = r; t > s; ++s) o[n++] = e.charCodeAt(s)
	}

	function M(e, r, t, o, n) {
		for (var s = 0; n > s; ++s) t[o + s] = e[r + s]
	}

	function D(e, r) {
		Ar(r, 1 << e.s), r.n = e.f, Hr(r, e.m), r.eb = 0, r.fb = 3, r.Y = 2, r.y = 3
	}

	function b(r, t, o, n, i) {
		var _, a;
		if (s(n, At) < 0) throw Error("invalid length " + n);
		for (r.Ub = n, _ = Dr({}), D(i, _), _.Gc = void 0 === e.disableEndMark, Gr(_, o), a = 0; 64 > a; a += 8) g(o, 255 & c(d(n, a)));
		r.yb = (_.W = 0, _.oc = t, _.qc = 0, Mr(_), _.c.Bb = o, Fr(_), Lr(_), br(_), _.$.qb = _.n + 1 - 2, Qr(_.$, 1 << _.Y), _.i.qb = _.n + 1 - 2, Qr(_.i, 1 << _.Y), void(_.g = Gt), X({}, _))
	}

	function L(e, r, t) {
		return e.vb = B({}), b(e, P({}, r), e.vb, a(r.length), t), e
	}

	function w(e, r, t) {
		var o, n, s, i, _ = "",
			c = [];
		for (n = 0; 5 > n; ++n) {
			if (s = l(r), -1 == s) throw Error("truncated input");
			c[n] = s << 24 >> 24
		}
		if (o = ir({}), !ar(o, c)) throw Error("corrupted input");
		for (n = 0; 64 > n; n += 8) {
			if (s = l(r), -1 == s) throw Error("truncated input");
			s = s.toString(16), 1 == s.length && (s = "0" + s), _ = s + "" + _
		}
		/^0+$|^f+$/i.test(_) ? e.Ub = At : (i = parseInt(_, 16), e.Ub = i > 4294967295 ? At : a(i)), e.yb = nr(o, r, t, e.Ub)
	}

	function E(e, r) {
		return e.vb = B({}), w(e, P({}, r), e.vb), e
	}

	function y(e, r, o, n) {
		var s;
		e.xc = r, e.$b = o, s = r + o + n, (null == e.d || e.Lb != s) && (e.d = null, e.Lb = s, e.d = t(e.Lb)), e.H = e.Lb - o
	}

	function C(e, r) {
		return e.d[e.f + e.o + r]
	}

	function z(e, r, t, o) {
		var n, s;
		for (e.U && e.o + r + o > e.h && (o = e.h - (e.o + r)), ++t, s = e.f + e.o + r, n = 0; o > n && e.d[s + n] == e.d[s + n - t]; ++n);
		return n
	}

	function F(e) {
		return e.h - e.o
	}

	function I(e) {
		var r, t, o;
		for (o = e.f + e.o - e.xc, o > 0 && --o, t = e.f + e.h - o, r = 0; t > r; ++r) e.d[r] = e.d[o + r];
		e.f -= o
	}

	function x(e) {
		var r;
		++e.o, e.o > e.Ab && (r = e.f + e.o, r > e.H && I(e), N(e))
	}

	function N(e) {
		var r, t, o;
		if (!e.U)
			for (;;) {
				if (o = -e.f + e.Lb - e.h, !o) return;
				if (r = v(e.dc, e.d, e.f + e.h, o), -1 == r) return e.Ab = e.h, t = e.f + e.Ab, t > e.H && (e.Ab = e.H - e.f), void(e.U = 1);
				e.h += r, e.h >= e.o + e.$b && (e.Ab = e.h - e.$b)
			}
	}

	function O(e, r) {
		e.f += r, e.Ab -= r, e.o -= r, e.h -= r
	}

	function A(e, r, o, n, s) {
		var i, _, a;
		1073741567 > r && (e.Fc = 16 + (n >> 1), a = ~~((r + o + n + s) / 2) + 256, y(e, r + o, n + s, a), e.rb = n, i = r + 1, e.p != i && (e.L = t(2 * (e.p = i))), _ = 65536, e.pb && (_ = r - 1, _ |= _ >> 1, _ |= _ >> 2, _ |= _ >> 4, _ |= _ >> 8, _ >>= 1, _ |= 65535, _ > 16777216 && (_ >>= 1), e.Ec = _, ++_, _ += e.R), _ != e.lc && (e.tb = t(e.lc = _)))
	}

	function H(e, r) {
		var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v, B, S, g, k;
		if (e.h >= e.o + e.rb) h = e.rb;
		else if (h = e.h - e.o, e.zb > h) return W(e), 0;
		for (v = 0, P = e.o > e.p ? e.o - e.p : 0, o = e.f + e.o, l = 1, c = 0, u = 0, e.pb ? (k = Tt[255 & e.d[o]] ^ 255 & e.d[o + 1], c = 1023 & k, k ^= (255 & e.d[o + 2]) << 8, u = 65535 & k, f = (k ^ Tt[255 & e.d[o + 3]] << 5) & e.Ec) : f = 255 & e.d[o] ^ (255 & e.d[o + 1]) << 8, n = e.tb[e.R + f] || 0, e.pb && (s = e.tb[c] || 0, i = e.tb[1024 + u] || 0, e.tb[c] = e.o, e.tb[1024 + u] = e.o, s > P && e.d[e.f + s] == e.d[o] && (r[v++] = l = 2, r[v++] = e.o - s - 1), i > P && e.d[e.f + i] == e.d[o] && (i == s && (v -= 2), r[v++] = l = 3, r[v++] = e.o - i - 1, s = i), 0 != v && s == n && (v -= 2, l = 1)), e.tb[e.R + f] = e.o, S = (e.j << 1) + 1, g = e.j << 1, d = p = e.w, 0 != e.w && n > P && e.d[e.f + n + e.w] != e.d[o + e.w] && (r[v++] = l = e.w, r[v++] = e.o - n - 1), t = e.Fc;;) {
			if (P >= n || 0 == t--) {
				e.L[S] = e.L[g] = 0;
				break
			}
			if (a = e.o - n, _ = (e.j >= a ? e.j - a : e.j - a + e.p) << 1, B = e.f + n, m = p > d ? d : p, e.d[B + m] == e.d[o + m]) {
				for (; ++m != h && e.d[B + m] == e.d[o + m];);
				if (m > l && (r[v++] = l = m, r[v++] = a - 1, m == h)) {
					e.L[g] = e.L[_], e.L[S] = e.L[_ + 1];
					break
				}
			}(255 & e.d[o + m]) > (255 & e.d[B + m]) ? (e.L[g] = n, g = _ + 1, n = e.L[g], p = m) : (e.L[S] = n, S = _, n = e.L[S], d = m)
		}
		return W(e), v
	}

	function G(e) {
		e.f = 0, e.o = 0, e.h = 0, e.U = 0, N(e), e.j = 0, O(e, -1)
	}

	function W(e) {
		var r;
		++e.j >= e.p && (e.j = 0), x(e), 1073741823 == e.o && (r = e.o - e.p, T(e.L, 2 * e.p, r), T(e.tb, e.lc, r), O(e, r))
	}

	function T(e, r, t) {
		var o, n;
		for (o = 0; r > o; ++o) n = e[o] || 0, t >= n ? n = 0 : n -= t, e[o] = n
	}

	function Z(e, r) {
		e.pb = r > 2, e.pb ? (e.w = 0, e.zb = 4, e.R = 66560) : (e.w = 2, e.zb = 3, e.R = 0)
	}

	function Y(e, r) {
		var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v;
		do {
			if (e.h >= e.o + e.rb) d = e.rb;
			else if (d = e.h - e.o, e.zb > d) {
				W(e);
				continue
			}
			for (p = e.o > e.p ? e.o - e.p : 0, o = e.f + e.o, e.pb ? (v = Tt[255 & e.d[o]] ^ 255 & e.d[o + 1], _ = 1023 & v, e.tb[_] = e.o, v ^= (255 & e.d[o + 2]) << 8, a = 65535 & v, e.tb[1024 + a] = e.o, c = (v ^ Tt[255 & e.d[o + 3]] << 5) & e.Ec) : c = 255 & e.d[o] ^ (255 & e.d[o + 1]) << 8, n = e.tb[e.R + c], e.tb[e.R + c] = e.o, P = (e.j << 1) + 1, l = e.j << 1, f = m = e.w, t = e.Fc;;) {
				if (p >= n || 0 == t--) {
					e.L[P] = e.L[l] = 0;
					break
				}
				if (i = e.o - n, s = (e.j >= i ? e.j - i : e.j - i + e.p) << 1, h = e.f + n, u = m > f ? f : m, e.d[h + u] == e.d[o + u]) {
					for (; ++u != d && e.d[h + u] == e.d[o + u];);
					if (u == d) {
						e.L[l] = e.L[s], e.L[P] = e.L[s + 1];
						break
					}
				}(255 & e.d[o + u]) > (255 & e.d[h + u]) ? (e.L[l] = n, l = s + 1, n = e.L[l], m = u) : (e.L[P] = n, P = s, n = e.L[P], f = u)
			}
			W(e)
		} while (0 != --r)
	}

	function V(e, r, t) {
		var o = e.o - r - 1;
		for (0 > o && (o += e.M); 0 != t; --t) o >= e.M && (o = 0), e.Mb[e.o++] = e.Mb[o++], e.o >= e.M && $(e)
	}

	function j(e, r) {
		(null == e.Mb || e.M != r) && (e.Mb = t(r)), e.M = r, e.o = 0, e.h = 0
	}

	function $(e) {
		var r = e.o - e.h;
		r && (k(e.dc, e.Mb, e.h, r), e.o >= e.M && (e.o = 0), e.h = e.o)
	}

	function K(e, r) {
		var t = e.o - r - 1;
		return 0 > t && (t += e.M), e.Mb[t]
	}

	function q(e, r) {
		e.Mb[e.o++] = r, e.o >= e.M && $(e)
	}

	function J(e) {
		$(e), e.dc = null
	}

	function Q(e) {
		return e -= 2, 4 > e ? e : 3
	}

	function U(e) {
		return 4 > e ? 0 : 10 > e ? e - 3 : e - 6
	}

	function X(e, r) {
		return e.db = r, e.Z = null, e.yc = 1, e
	}

	function er(e, r) {
		return e.Z = r, e.db = null, e.yc = 1, e
	}

	function rr(e) {
		if (!e.yc) throw Error("bad state");
		return e.db ? or(e) : tr(e), e.yc
	}

	function tr(e) {
		var r = sr(e.Z);
		if (-1 == r) throw Error("corrupted input");
		e.Ob = At, e.Pc = e.Z.g, (r || s(e.Z.Nc, Gt) >= 0 && s(e.Z.g, e.Z.Nc) >= 0) && ($(e.Z.B), J(e.Z.B), e.Z.e.Bb = null, e.yc = 0)
	}

	function or(e) {
		Rr(e.db, e.db.Yb, e.db.uc, e.db.Kc), e.Ob = e.db.Yb[0], e.db.Kc[0] && (Or(e.db), e.yc = 0)
	}

	function nr(e, r, t, o) {
		return e.e.Bb = r, J(e.B), e.B.dc = t, _r(e), e.V = 0, e.ib = 0, e.Jc = 0, e.Ic = 0, e.Qc = 0, e.Nc = o, e.g = Gt, e.ic = 0, er({}, e)
	}

	function sr(e) {
		var r, t, n, i, _, u;
		if (u = c(e.g) & e.Dc, vt(e.e, e.Gb, (e.V << 4) + u)) {
			if (vt(e.e, e.Vb, e.V)) n = 0, vt(e.e, e.Ib, e.V) ? (vt(e.e, e.Db, e.V) ? (vt(e.e, e.Eb, e.V) ? (t = e.Qc, e.Qc = e.Ic) : t = e.Ic, e.Ic = e.Jc) : t = e.Jc, e.Jc = e.ib, e.ib = t) : vt(e.e, e.ub, (e.V << 4) + u) || (e.V = 7 > e.V ? 9 : 11, n = 1), n || (n = mr(e.sb, e.e, u) + 2, e.V = 7 > e.V ? 8 : 11);
			else if (e.Qc = e.Ic, e.Ic = e.Jc, e.Jc = e.ib, n = 2 + mr(e.Sb, e.e, u), e.V = 7 > e.V ? 7 : 10, _ = at(e.lb[Q(n)], e.e), _ >= 4) {
				if (i = (_ >> 1) - 1, e.ib = (2 | 1 & _) << i, 14 > _) e.ib += ut(e.kc, e.ib - _ - 1, e.e, i);
				else if (e.ib += Bt(e.e, i - 4) << 4, e.ib += ct(e.Hb, e.e), 0 > e.ib) return -1 == e.ib ? 1 : -1
			} else e.ib = _;
			if (s(a(e.ib), e.g) >= 0 || e.ib >= e.mb) return -1;
			V(e.B, e.ib, n), e.g = o(e.g, a(n)), e.ic = K(e.B, 0)
		} else r = Pr(e.gb, c(e.g), e.ic), e.ic = 7 > e.V ? vr(r, e.e) : Br(r, e.e, K(e.B, e.ib)), q(e.B, e.ic), e.V = U(e.V), e.g = o(e.g, Wt);
		return 0
	}

	function ir(e) {
		e.B = {}, e.e = {}, e.Gb = t(192), e.Vb = t(12), e.Ib = t(12), e.Db = t(12), e.Eb = t(12), e.ub = t(192), e.lb = t(4), e.kc = t(114), e.Hb = _t({}, 4), e.Sb = dr({}), e.sb = dr({}), e.gb = {};
		for (var r = 0; 4 > r; ++r) e.lb[r] = _t({}, 6);
		return e
	}

	function _r(e) {
		e.B.h = 0, e.B.o = 0, gt(e.Gb), gt(e.ub), gt(e.Vb), gt(e.Ib), gt(e.Db), gt(e.Eb), gt(e.kc), lr(e.gb);
		for (var r = 0; 4 > r; ++r) gt(e.lb[r].G);
		pr(e.Sb), pr(e.sb), gt(e.Hb.G), St(e.e)
	}

	function ar(e, r) {
		var t, o, n, s, i, _, a;
		if (5 > r.length) return 0;
		for (a = 255 & r[0], n = a % 9, _ = ~~(a / 9), s = _ % 5, i = ~~(_ / 5), t = 0, o = 0; 4 > o; ++o) t += (255 & r[1 + o]) << 8 * o;
		return t > 99999999 || !ur(e, n, s, i) ? 0 : cr(e, t)
	}

	function cr(e, r) {
		return 0 > r ? 0 : (e.Pb != r && (e.Pb = r, e.mb = Math.max(e.Pb, 1), j(e.B, Math.max(e.mb, 4096))), 1)
	}

	function ur(e, r, t, o) {
		if (r > 8 || t > 4 || o > 4) return 0;
		hr(e.gb, t, r);
		var n = 1 << o;
		return fr(e.Sb, n), fr(e.sb, n), e.Dc = n - 1, 1
	}

	function fr(e, r) {
		for (; r > e.O; ++e.O) e.jc[e.O] = _t({}, 3), e.ec[e.O] = _t({}, 3)
	}

	function mr(e, r, t) {
		if (!vt(r, e.wc, 0)) return at(e.jc[t], r);
		var o = 8;
		return o += vt(r, e.wc, 1) ? 8 + at(e.tc, r) : at(e.ec[t], r)
	}

	function dr(e) {
		return e.wc = t(2), e.jc = t(16), e.ec = t(16), e.tc = _t({}, 8), e.O = 0, e
	}

	function pr(e) {
		gt(e.wc);
		for (var r = 0; e.O > r; ++r) gt(e.jc[r].G), gt(e.ec[r].G);
		gt(e.tc.G)
	}

	function hr(e, r, o) {
		var n, s;
		if (null == e.S || e.v != o || e.I != r)
			for (e.I = r, e.rc = (1 << r) - 1, e.v = o, s = 1 << e.v + e.I, e.S = t(s), n = 0; s > n; ++n) e.S[n] = Sr({})
	}

	function Pr(e, r, t) {
		return e.S[((r & e.rc) << e.v) + ((255 & t) >>> 8 - e.v)]
	}

	function lr(e) {
		var r, t;
		for (t = 1 << e.v + e.I, r = 0; t > r; ++r) gt(e.S[r].Jb)
	}

	function vr(e, r) {
		var t = 1;
		do t = t << 1 | vt(r, e.Jb, t); while (256 > t);
		return t << 24 >> 24
	}

	function Br(e, r, t) {
		var o, n, s = 1;
		do
			if (n = t >> 7 & 1, t <<= 1, o = vt(r, e.Jb, (1 + n << 8) + s), s = s << 1 | o, n != o) {
				for (; 256 > s;) s = s << 1 | vt(r, e.Jb, s);
				break
			} while (256 > s);
		return s << 24 >> 24
	}

	function Sr(e) {
		return e.Jb = t(768), e
	}

	function gr(e, r) {
		var t, o, n, s;
		e.jb = r, n = e.a[r].r, o = e.a[r].k;
		do e.a[r].t && (st(e.a[n]), e.a[n].r = n - 1, e.a[r].zc && (e.a[n - 1].t = 0, e.a[n - 1].r = e.a[r].r2, e.a[n - 1].k = e.a[r].k2)), s = n, t = o, o = e.a[s].k, n = e.a[s].r, e.a[s].k = t, e.a[s].r = r, r = s; while (r > 0);
		return e.nb = e.a[0].k, e.q = e.a[0].r
	}

	function kr(e) {
		e.l = 0, e.J = 0;
		for (var r = 0; 4 > r; ++r) e.u[r] = 0
	}

	function Rr(e, r, t, n) {
		var i, u, f, m, d, p, P, l, v, B, S, g, k, R, M;
		if (r[0] = Gt, t[0] = Gt, n[0] = 1, e.oc && (e.b.dc = e.oc, G(e.b), e.W = 1, e.oc = null), !e.qc) {
			if (e.qc = 1, R = e.g, _(e.g, Gt)) {
				if (!F(e.b)) return void wr(e, c(e.g));
				xr(e), k = c(e.g) & e.y, kt(e.c, e.C, (e.l << 4) + k, 0), e.l = U(e.l), f = C(e.b, -e.s), rt(Xr(e.A, c(e.g), e.J), e.c, f), e.J = f, --e.s, e.g = o(e.g, Wt)
			}
			if (!F(e.b)) return void wr(e, c(e.g));
			for (;;) {
				if (P = Er(e, c(e.g)), B = e.nb, k = c(e.g) & e.y, u = (e.l << 4) + k, 1 == P && -1 == B) kt(e.c, e.C, u, 0), f = C(e.b, -e.s), M = Xr(e.A, c(e.g), e.J), 7 > e.l ? rt(M, e.c, f) : (v = C(e.b, -e.u[0] - 1 - e.s), tt(M, e.c, v, f)), e.J = f, e.l = U(e.l);
				else {
					if (kt(e.c, e.C, u, 1), 4 > B) {
						if (kt(e.c, e.bb, e.l, 1), B ? (kt(e.c, e.hb, e.l, 1), 1 == B ? kt(e.c, e.Tb, e.l, 0) : (kt(e.c, e.Tb, e.l, 1), kt(e.c, e.vc, e.l, B - 2))) : (kt(e.c, e.hb, e.l, 0), 1 == P ? kt(e.c, e._, u, 0) : kt(e.c, e._, u, 1)), 1 == P ? e.l = 7 > e.l ? 9 : 11 : (Kr(e.i, e.c, P - 2, k), e.l = 7 > e.l ? 8 : 11), m = e.u[B], 0 != B) {
							for (p = B; p >= 1; --p) e.u[p] = e.u[p - 1];
							e.u[0] = m
						}
					} else {
						for (kt(e.c, e.bb, e.l, 0), e.l = 7 > e.l ? 7 : 10, Kr(e.$, e.c, P - 2, k), B -= 4, g = Tr(B), l = Q(P), mt(e.K[l], e.c, g), g >= 4 && (d = (g >> 1) - 1, i = (2 | 1 & g) << d, S = B - i, 14 > g ? Pt(e.Rb, i - g - 1, e.c, d, S) : (Rt(e.c, S >> 4, d - 4), pt(e.T, e.c, 15 & S), ++e.Qb)), m = B, p = 3; p >= 1; --p) e.u[p] = e.u[p - 1];
						e.u[0] = m, ++e.Nb
					}
					e.J = C(e.b, P - 1 - e.s)
				}
				if (e.s -= P, e.g = o(e.g, a(P)), !e.s) {
					if (e.Nb >= 128 && Lr(e), e.Qb >= 16 && br(e), r[0] = e.g, t[0] = Mt(e.c), !F(e.b)) return void wr(e, c(e.g));
					if (s(h(e.g, R), [4096, 0]) >= 0) return e.qc = 0, void(n[0] = 0)
				}
			}
		}
	}

	function Mr(e) {
		var r, t;
		e.b || (r = {}, t = 4, e.X || (t = 2), Z(r, t), e.b = r), Ur(e.A, e.eb, e.fb), (e.ab != e.wb || e.Fb != e.n) && (A(e.b, e.ab, 4096, e.n, 274), e.wb = e.ab, e.Fb = e.n)
	}

	function Dr(e) {
		var r;
		for (e.u = t(4), e.a = [], e.c = {}, e.C = t(192), e.bb = t(12), e.hb = t(12), e.Tb = t(12), e.vc = t(12), e._ = t(192), e.K = [], e.Rb = t(114), e.T = ft({}, 4), e.$ = qr({}), e.i = qr({}), e.A = {}, e.m = [], e.P = [], e.kb = [], e.mc = t(16), e.x = t(4), e.N = t(4), e.Yb = [Gt], e.uc = [Gt], e.Kc = [0], e.fc = t(5), e.Bc = t(128), e.xb = 0, e.X = 1, e.D = 0, e.Fb = -1, e.nb = 0, r = 0; 4096 > r; ++r) e.a[r] = {};
		for (r = 0; 4 > r; ++r) e.K[r] = ft({}, 6);
		return e
	}

	function br(e) {
		for (var r = 0; 16 > r; ++r) e.mc[r] = ht(e.T, r);
		e.Qb = 0
	}

	function Lr(e) {
		var r, t, o, n, s, i, _, a;
		for (n = 4; 128 > n; ++n) i = Tr(n), o = (i >> 1) - 1, r = (2 | 1 & i) << o, e.Bc[n] = lt(e.Rb, r - i - 1, o, n - r);
		for (s = 0; 4 > s; ++s) {
			for (t = e.K[s], _ = s << 6, i = 0; e._b > i; ++i) e.P[_ + i] = dt(t, i);
			for (i = 14; e._b > i; ++i) e.P[_ + i] += (i >> 1) - 1 - 4 << 6;
			for (a = 128 * s, n = 0; 4 > n; ++n) e.kb[a + n] = e.P[_ + n];
			for (; 128 > n; ++n) e.kb[a + n] = e.P[_ + Tr(n)] + e.Bc[n]
		}
		e.Nb = 0
	}

	function wr(e, r) {
		Nr(e), Wr(e, r & e.y);
		for (var t = 0; 5 > t; ++t) bt(e.c)
	}

	function Er(e, r) {
		var t, o, n, s, i, _, a, c, u, f, m, d, p, h, P, l, v, B, S, g, k, R, M, D, b, L, w, E, y, I, x, N, O, A, H, G, W, T, Z, Y, V, j, $, K, q, J, Q, X, er, rr;
		if (e.jb != e.q) return p = e.a[e.q].r - e.q, e.nb = e.a[e.q].k, e.q = e.a[e.q].r, p;
		if (e.q = e.jb = 0, e.Q ? (d = e.xb, e.Q = 0) : d = xr(e), w = e.D, b = F(e.b) + 1, 2 > b) return e.nb = -1, 1;
		for (b > 273 && (b = 273), Y = 0, u = 0; 4 > u; ++u) e.x[u] = e.u[u], e.N[u] = z(e.b, -1, e.x[u], 273), e.N[u] > e.N[Y] && (Y = u);
		if (e.N[Y] >= e.n) return e.nb = Y, p = e.N[Y], Ir(e, p - 1), p;
		if (d >= e.n) return e.nb = e.m[w - 1] + 4, Ir(e, d - 1), d;
		if (a = C(e.b, -1), v = C(e.b, -e.u[0] - 1 - 1), 2 > d && a != v && 2 > e.N[Y]) return e.nb = -1, 1;
		if (e.a[0].Hc = e.l, A = r & e.y, e.a[1].z = Yt[e.C[(e.l << 4) + A] >>> 2] + nt(Xr(e.A, r, e.J), e.l >= 7, v, a), st(e.a[1]), B = Yt[2048 - e.C[(e.l << 4) + A] >>> 2], Z = B + Yt[2048 - e.bb[e.l] >>> 2], v == a && (V = Z + zr(e, e.l, A), e.a[1].z > V && (e.a[1].z = V, it(e.a[1]))), m = d >= e.N[Y] ? d : e.N[Y], 2 > m) return e.nb = e.a[1].k, 1;
		e.a[1].r = 0, e.a[0].cc = e.x[0], e.a[0].bc = e.x[1], e.a[0].ac = e.x[2], e.a[0].sc = e.x[3], f = m;
		do e.a[f--].z = 268435455; while (f >= 2);
		for (u = 0; 4 > u; ++u)
			if (T = e.N[u], !(2 > T)) {
				G = Z + Cr(e, u, e.l, A);
				do s = G + Jr(e.i, T - 2, A), x = e.a[T], x.z > s && (x.z = s, x.r = 0, x.k = u, x.t = 0); while (--T >= 2)
			} if (D = B + Yt[e.bb[e.l] >>> 2], f = e.N[0] >= 2 ? e.N[0] + 1 : 2, d >= f) {
			for (E = 0; f > e.m[E];) E += 2;
			for (; c = e.m[E + 1], s = D + yr(e, c, f, A), x = e.a[f], x.z > s && (x.z = s, x.r = 0, x.k = c + 4, x.t = 0), f != e.m[E] || (E += 2, E != w); ++f);
		}
		for (t = 0;;) {
			if (++t, t == m) return gr(e, t);
			if (S = xr(e), w = e.D, S >= e.n) return e.xb = S, e.Q = 1, gr(e, t);
			if (++r, O = e.a[t].r, e.a[t].t ? (--O, e.a[t].zc ? ($ = e.a[e.a[t].r2].Hc, $ = 4 > e.a[t].k2 ? 7 > $ ? 8 : 11 : 7 > $ ? 7 : 10) : $ = e.a[O].Hc, $ = U($)) : $ = e.a[O].Hc, O == t - 1 ? $ = e.a[t].k ? U($) : 7 > $ ? 9 : 11 : (e.a[t].t && e.a[t].zc ? (O = e.a[t].r2, N = e.a[t].k2, $ = 7 > $ ? 8 : 11) : (N = e.a[t].k, $ = 4 > N ? 7 > $ ? 8 : 11 : 7 > $ ? 7 : 10), I = e.a[O], 4 > N ? N ? 1 == N ? (e.x[0] = I.bc, e.x[1] = I.cc, e.x[2] = I.ac, e.x[3] = I.sc) : 2 == N ? (e.x[0] = I.ac, e.x[1] = I.cc, e.x[2] = I.bc, e.x[3] = I.sc) : (e.x[0] = I.sc, e.x[1] = I.cc, e.x[2] = I.bc, e.x[3] = I.ac) : (e.x[0] = I.cc, e.x[1] = I.bc, e.x[2] = I.ac, e.x[3] = I.sc) : (e.x[0] = N - 4, e.x[1] = I.cc, e.x[2] = I.bc, e.x[3] = I.ac)), e.a[t].Hc = $, e.a[t].cc = e.x[0], e.a[t].bc = e.x[1], e.a[t].ac = e.x[2], e.a[t].sc = e.x[3], _ = e.a[t].z, a = C(e.b, -1), v = C(e.b, -e.x[0] - 1 - 1), A = r & e.y, o = _ + Yt[e.C[($ << 4) + A] >>> 2] + nt(Xr(e.A, r, C(e.b, -2)), $ >= 7, v, a), R = e.a[t + 1], g = 0, R.z > o && (R.z = o, R.r = t, R.k = -1, R.t = 0, g = 1), B = _ + Yt[2048 - e.C[($ << 4) + A] >>> 2], Z = B + Yt[2048 - e.bb[$] >>> 2], v != a || t > R.r && !R.k || (V = Z + (Yt[e.hb[$] >>> 2] + Yt[e._[($ << 4) + A] >>> 2]), R.z >= V && (R.z = V, R.r = t, R.k = 0, R.t = 0, g = 1)), L = F(e.b) + 1, L = L > 4095 - t ? 4095 - t : L, b = L, !(2 > b)) {
				if (b > e.n && (b = e.n), !g && v != a && (q = Math.min(L - 1, e.n), P = z(e.b, 0, e.x[0], q), P >= 2)) {
					for (K = U($), H = r + 1 & e.y, M = o + Yt[2048 - e.C[(K << 4) + H] >>> 2] + Yt[2048 - e.bb[K] >>> 2], y = t + 1 + P; y > m;) e.a[++m].z = 268435455;
					s = M + (J = Jr(e.i, P - 2, H), J + Cr(e, 0, K, H)), x = e.a[y], x.z > s && (x.z = s, x.r = t + 1, x.k = 0, x.t = 1, x.zc = 0)
				}
				for (j = 2, W = 0; 4 > W; ++W)
					if (h = z(e.b, -1, e.x[W], b), !(2 > h)) {
						l = h;
						do {
							for (; t + h > m;) e.a[++m].z = 268435455;
							s = Z + (Q = Jr(e.i, h - 2, A), Q + Cr(e, W, $, A)), x = e.a[t + h], x.z > s && (x.z = s, x.r = t, x.k = W, x.t = 0)
						} while (--h >= 2);
						if (h = l, W || (j = h + 1), L > h && (q = Math.min(L - 1 - h, e.n), P = z(e.b, h, e.x[W], q), P >= 2)) {
							for (K = 7 > $ ? 8 : 11, H = r + h & e.y, n = Z + (X = Jr(e.i, h - 2, A), X + Cr(e, W, $, A)) + Yt[e.C[(K << 4) + H] >>> 2] + nt(Xr(e.A, r + h, C(e.b, h - 1 - 1)), 1, C(e.b, h - 1 - (e.x[W] + 1)), C(e.b, h - 1)), K = U(K), H = r + h + 1 & e.y, k = n + Yt[2048 - e.C[(K << 4) + H] >>> 2], M = k + Yt[2048 - e.bb[K] >>> 2], y = h + 1 + P; t + y > m;) e.a[++m].z = 268435455;
							s = M + (er = Jr(e.i, P - 2, H), er + Cr(e, 0, K, H)), x = e.a[t + y], x.z > s && (x.z = s, x.r = t + h + 1, x.k = 0, x.t = 1, x.zc = 1, x.r2 = t, x.k2 = W)
						}
					} if (S > b) {
					for (S = b, w = 0; S > e.m[w]; w += 2);
					e.m[w] = S, w += 2
				}
				if (S >= j) {
					for (D = B + Yt[e.bb[$] >>> 2]; t + S > m;) e.a[++m].z = 268435455;
					for (E = 0; j > e.m[E];) E += 2;
					for (h = j;; ++h)
						if (i = e.m[E + 1], s = D + yr(e, i, h, A), x = e.a[t + h], x.z > s && (x.z = s, x.r = t, x.k = i + 4, x.t = 0), h == e.m[E]) {
							if (L > h && (q = Math.min(L - 1 - h, e.n), P = z(e.b, h, i, q), P >= 2)) {
								for (K = 7 > $ ? 7 : 10, H = r + h & e.y, n = s + Yt[e.C[(K << 4) + H] >>> 2] + nt(Xr(e.A, r + h, C(e.b, h - 1 - 1)), 1, C(e.b, h - (i + 1) - 1), C(e.b, h - 1)), K = U(K), H = r + h + 1 & e.y, k = n + Yt[2048 - e.C[(K << 4) + H] >>> 2], M = k + Yt[2048 - e.bb[K] >>> 2], y = h + 1 + P; t + y > m;) e.a[++m].z = 268435455;
								s = M + (rr = Jr(e.i, P - 2, H), rr + Cr(e, 0, K, H)), x = e.a[t + y], x.z > s && (x.z = s, x.r = t + h + 1, x.k = 0, x.t = 1, x.zc = 1, x.r2 = t, x.k2 = i + 4)
							}
							if (E += 2, E == w) break
						}
				}
			}
		}
	}

	function yr(e, r, t, o) {
		var n, s = Q(t);
		return n = 128 > r ? e.kb[128 * s + r] : e.P[(s << 6) + Zr(r)] + e.mc[15 & r], n + Jr(e.$, t - 2, o)
	}

	function Cr(e, r, t, o) {
		var n;
		return r ? (n = Yt[2048 - e.hb[t] >>> 2], 1 == r ? n += Yt[e.Tb[t] >>> 2] : (n += Yt[2048 - e.Tb[t] >>> 2], n += Lt(e.vc[t], r - 2))) : (n = Yt[e.hb[t] >>> 2], n += Yt[2048 - e._[(t << 4) + o] >>> 2]), n
	}

	function zr(e, r, t) {
		return Yt[e.hb[r] >>> 2] + Yt[e._[(r << 4) + t] >>> 2]
	}

	function Fr(e) {
		kr(e), Dt(e.c), gt(e.C), gt(e._), gt(e.bb), gt(e.hb), gt(e.Tb), gt(e.vc), gt(e.Rb), et(e.A);
		for (var r = 0; 4 > r; ++r) gt(e.K[r].G);
		jr(e.$, 1 << e.Y), jr(e.i, 1 << e.Y), gt(e.T.G), e.Q = 0, e.jb = 0, e.q = 0, e.s = 0
	}

	function Ir(e, r) {
		r > 0 && (Y(e.b, r), e.s += r)
	}

	function xr(e) {
		var r = 0;
		return e.D = H(e.b, e.m), e.D > 0 && (r = e.m[e.D - 2], r == e.n && (r += z(e.b, r - 1, e.m[e.D - 1], 273 - r))), ++e.s, r
	}

	function Nr(e) {
		e.b && e.W && (e.b.dc = null, e.W = 0)
	}

	function Or(e) {
		Nr(e), e.c.Bb = null
	}

	function Ar(e, r) {
		e.ab = r;
		for (var t = 0; r > 1 << t; ++t);
		e._b = 2 * t
	}

	function Hr(e, r) {
		var t = e.X;
		e.X = r, e.b && t != e.X && (e.wb = -1, e.b = null)
	}

	function Gr(e, r) {
		e.fc[0] = 9 * (5 * e.Y + e.eb) + e.fb << 24 >> 24;
		for (var t = 0; 4 > t; ++t) e.fc[1 + t] = e.ab >> 8 * t << 24 >> 24;
		k(r, e.fc, 0, 5)
	}

	function Wr(e, r) {
		if (e.Gc) {
			kt(e.c, e.C, (e.l << 4) + r, 1), kt(e.c, e.bb, e.l, 0), e.l = 7 > e.l ? 7 : 10, Kr(e.$, e.c, 0, r);
			var t = Q(2);
			mt(e.K[t], e.c, 63), Rt(e.c, 67108863, 26), pt(e.T, e.c, 15)
		}
	}

	function Tr(e) {
		return 2048 > e ? Zt[e] : 2097152 > e ? Zt[e >> 10] + 20 : Zt[e >> 20] + 40
	}

	function Zr(e) {
		return 131072 > e ? Zt[e >> 6] + 12 : 134217728 > e ? Zt[e >> 16] + 32 : Zt[e >> 26] + 52
	}

	function Yr(e, r, t, o) {
		8 > t ? (kt(r, e.cb, 0, 0), mt(e.Zb[o], r, t)) : (t -= 8, kt(r, e.cb, 0, 1), 8 > t ? (kt(r, e.cb, 1, 0), mt(e.Xb[o], r, t)) : (kt(r, e.cb, 1, 1), mt(e.hc, r, t - 8)))
	}

	function Vr(e) {
		e.cb = t(2), e.Zb = t(16), e.Xb = t(16), e.hc = ft({}, 8);
		for (var r = 0; 16 > r; ++r) e.Zb[r] = ft({}, 3), e.Xb[r] = ft({}, 3);
		return e
	}

	function jr(e, r) {
		gt(e.cb);
		for (var t = 0; r > t; ++t) gt(e.Zb[t].G), gt(e.Xb[t].G);
		gt(e.hc.G)
	}

	function $r(e, r, t, o, n) {
		var s, i, _, a, c;
		for (s = Yt[e.cb[0] >>> 2], i = Yt[2048 - e.cb[0] >>> 2], _ = i + Yt[e.cb[1] >>> 2], a = i + Yt[2048 - e.cb[1] >>> 2], c = 0, c = 0; 8 > c; ++c) {
			if (c >= t) return;
			o[n + c] = s + dt(e.Zb[r], c)
		}
		for (; 16 > c; ++c) {
			if (c >= t) return;
			o[n + c] = _ + dt(e.Xb[r], c - 8)
		}
		for (; t > c; ++c) o[n + c] = a + dt(e.hc, c - 8 - 8)
	}

	function Kr(e, r, t, o) {
		Yr(e, r, t, o), 0 == --e.nc[o] && ($r(e, o, e.qb, e.Cc, 272 * o), e.nc[o] = e.qb)
	}

	function qr(e) {
		return Vr(e), e.Cc = [], e.nc = [], e
	}

	function Jr(e, r, t) {
		return e.Cc[272 * t + r]
	}

	function Qr(e, r) {
		for (var t = 0; r > t; ++t) $r(e, t, e.qb, e.Cc, 272 * t), e.nc[t] = e.qb
	}

	function Ur(e, r, o) {
		var n, s;
		if (null == e.S || e.v != o || e.I != r)
			for (e.I = r, e.rc = (1 << r) - 1, e.v = o, s = 1 << e.v + e.I, e.S = t(s), n = 0; s > n; ++n) e.S[n] = ot({})
	}

	function Xr(e, r, t) {
		return e.S[((r & e.rc) << e.v) + ((255 & t) >>> 8 - e.v)]
	}

	function et(e) {
		var r, t = 1 << e.v + e.I;
		for (r = 0; t > r; ++r) gt(e.S[r].ob)
	}

	function rt(e, r, t) {
		var o, n, s = 1;
		for (n = 7; n >= 0; --n) o = t >> n & 1, kt(r, e.ob, s, o), s = s << 1 | o
	}

	function tt(e, r, t, o) {
		var n, s, i, _, a = 1,
			c = 1;
		for (s = 7; s >= 0; --s) n = o >> s & 1, _ = c, a && (i = t >> s & 1, _ += 1 + i << 8, a = i == n), kt(r, e.ob, _, n), c = c << 1 | n
	}

	function ot(e) {
		return e.ob = t(768), e
	}

	function nt(e, r, t, o) {
		var n, s, i = 1,
			_ = 7,
			a = 0;
		if (r)
			for (; _ >= 0; --_)
				if (s = t >> _ & 1, n = o >> _ & 1, a += Lt(e.ob[(1 + s << 8) + i], n), i = i << 1 | n, s != n) {
					--_;
					break
				} for (; _ >= 0; --_) n = o >> _ & 1, a += Lt(e.ob[i], n), i = i << 1 | n;
		return a
	}

	function st(e) {
		e.k = -1, e.t = 0
	}

	function it(e) {
		e.k = 0, e.t = 0
	}

	function _t(e, r) {
		return e.F = r, e.G = t(1 << r), e
	}

	function at(e, r) {
		var t, o = 1;
		for (t = e.F; 0 != t; --t) o = (o << 1) + vt(r, e.G, o);
		return o - (1 << e.F)
	}

	function ct(e, r) {
		var t, o, n = 1,
			s = 0;
		for (o = 0; e.F > o; ++o) t = vt(r, e.G, n), n <<= 1, n += t, s |= t << o;
		return s
	}

	function ut(e, r, t, o) {
		var n, s, i = 1,
			_ = 0;
		for (s = 0; o > s; ++s) n = vt(t, e, r + i), i <<= 1, i += n, _ |= n << s;
		return _
	}

	function ft(e, r) {
		return e.F = r, e.G = t(1 << r), e
	}

	function mt(e, r, t) {
		var o, n, s = 1;
		for (n = e.F; 0 != n;) --n, o = t >>> n & 1, kt(r, e.G, s, o), s = s << 1 | o
	}

	function dt(e, r) {
		var t, o, n = 1,
			s = 0;
		for (o = e.F; 0 != o;) --o, t = r >>> o & 1, s += Lt(e.G[n], t), n = (n << 1) + t;
		return s
	}

	function pt(e, r, t) {
		var o, n, s = 1;
		for (n = 0; e.F > n; ++n) o = 1 & t, kt(r, e.G, s, o), s = s << 1 | o, t >>= 1
	}

	function ht(e, r) {
		var t, o, n = 1,
			s = 0;
		for (o = e.F; 0 != o; --o) t = 1 & r, r >>>= 1, s += Lt(e.G[n], t), n = n << 1 | t;
		return s
	}

	function Pt(e, r, t, o, n) {
		var s, i, _ = 1;
		for (i = 0; o > i; ++i) s = 1 & n, kt(t, e, r + _, s), _ = _ << 1 | s, n >>= 1
	}

	function lt(e, r, t, o) {
		var n, s, i = 1,
			_ = 0;
		for (s = t; 0 != s; --s) n = 1 & o, o >>>= 1, _ += Yt[(2047 & (e[r + i] - n ^ -n)) >>> 2], i = i << 1 | n;
		return _
	}

	function vt(e, r, t) {
		var o, n = r[t];
		return o = (e.E >>> 11) * n, (-2147483648 ^ o) > (-2147483648 ^ e.Cb) ? (e.E = o, r[t] = n + (2048 - n >>> 5) << 16 >> 16, -16777216 & e.E || (e.Cb = e.Cb << 8 | l(e.Bb), e.E <<= 8), 0) : (e.E -= o, e.Cb -= o, r[t] = n - (n >>> 5) << 16 >> 16, -16777216 & e.E || (e.Cb = e.Cb << 8 | l(e.Bb), e.E <<= 8), 1)
	}

	function Bt(e, r) {
		var t, o, n = 0;
		for (t = r; 0 != t; --t) e.E >>>= 1, o = e.Cb - e.E >>> 31, e.Cb -= e.E & o - 1, n = n << 1 | 1 - o, -16777216 & e.E || (e.Cb = e.Cb << 8 | l(e.Bb), e.E <<= 8);
		return n
	}

	function St(e) {
		e.Cb = 0, e.E = -1;
		for (var r = 0; 5 > r; ++r) e.Cb = e.Cb << 8 | l(e.Bb)
	}

	function gt(e) {
		for (var r = e.length - 1; r >= 0; --r) e[r] = 1024
	}

	function kt(e, r, t, s) {
		var i, _ = r[t];
		i = (e.E >>> 11) * _, s ? (e.Ac = o(e.Ac, n(a(i), [4294967295, 0])), e.E -= i, r[t] = _ - (_ >>> 5) << 16 >> 16) : (e.E = i, r[t] = _ + (2048 - _ >>> 5) << 16 >> 16), -16777216 & e.E || (e.E <<= 8, bt(e))
	}

	function Rt(e, r, t) {
		for (var n = t - 1; n >= 0; --n) e.E >>>= 1, 1 == (r >>> n & 1) && (e.Ac = o(e.Ac, a(e.E))), -16777216 & e.E || (e.E <<= 8, bt(e))
	}

	function Mt(e) {
		return o(o(a(e.Kb), e.pc), [4, 0])
	}

	function Dt(e) {
		e.pc = Gt, e.Ac = Gt, e.E = -1, e.Kb = 1, e.Oc = 0
	}

	function bt(e) {
		var r, t = c(p(e.Ac, 32));
		if (0 != t || s(e.Ac, [4278190080, 0]) < 0) {
			e.pc = o(e.pc, a(e.Kb)), r = e.Oc;
			do g(e.Bb, r + t), r = 255; while (0 != --e.Kb);
			e.Oc = c(e.Ac) >>> 24
		}++e.Kb, e.Ac = m(n(e.Ac, [16777215, 0]), 8)
	}

	function Lt(e, r) {
		return Yt[(2047 & (e - r ^ -r)) >>> 2]
	}

	function wt(e) {
		for (var r, t, o, n = 0, s = 0, i = e.length, _ = [], a = []; i > n; ++n, ++s) {
			if (r = 255 & e[n], 128 & r)
				if (192 == (224 & r)) {
					if (n + 1 >= i) return e;
					if (t = 255 & e[++n], 128 != (192 & t)) return e;
					a[s] = (31 & r) << 6 | 63 & t
				} else {
					if (224 != (240 & r)) return e;
					if (n + 2 >= i) return e;
					if (t = 255 & e[++n], 128 != (192 & t)) return e;
					if (o = 255 & e[++n], 128 != (192 & o)) return e;
					a[s] = (15 & r) << 12 | (63 & t) << 6 | 63 & o
				}
			else {
				if (!r) return e;
				a[s] = r
			}
			16383 == s && (_.push(String.fromCharCode.apply(String, a)), s = -1)
		}
		return s > 0 && (a.length = s, _.push(String.fromCharCode.apply(String, a))), _.join("")
	}

	function Et(e) {
		var r, t, o, n = [],
			s = 0,
			i = e.length;
		if ("object" == typeof e) return e;
		for (R(e, 0, i, n, 0), o = 0; i > o; ++o) r = n[o], r >= 1 && 127 >= r ? ++s : s += !r || r >= 128 && 2047 >= r ? 2 : 3;
		for (t = [], s = 0, o = 0; i > o; ++o) r = n[o], r >= 1 && 127 >= r ? t[s++] = r << 24 >> 24 : !r || r >= 128 && 2047 >= r ? (t[s++] = (192 | r >> 6 & 31) << 24 >> 24, t[s++] = (128 | 63 & r) << 24 >> 24) : (t[s++] = (224 | r >> 12 & 15) << 24 >> 24, t[s++] = (128 | r >> 6 & 63) << 24 >> 24, t[s++] = (128 | 63 & r) << 24 >> 24);
		return t
	}

	function yt(e) {
		return e[1] + e[0]
	}

	function Ct(e, t, o, n) {
		function s() {
			try {
				for (var e, r = (new Date).getTime(); rr(a.c.yb);)
					if (i = yt(a.c.yb.Ob) / yt(a.c.Ub), (new Date).getTime() - r > 200) return n(i), Nt(s, 0), 0;
				n(1), e = S(a.c.vb), Nt(o.bind(null, e), 0)
			} catch (t) {
				o(null, t)
			}
		}
		var i, _, a = {},
			c = void 0 === o && void 0 === n;
		if ("function" != typeof o && (_ = o, o = n = 0), n = n || function(e) {
			return void 0 !== _ ? r(e, _) : void 0
		}, o = o || function(e, r) {
			return void 0 !== _ ? postMessage({
				action: Ft,
				cbn: _,
				result: e,
				error: r
			}) : void 0
		}, c) {
			for (a.c = L({}, Et(e), Vt(t)); rr(a.c.yb););
			return S(a.c.vb)
		}
		try {
			a.c = L({}, Et(e), Vt(t)), n(0)
		} catch (u) {
			return o(null, u)
		}
		Nt(s, 0)
	}

	function zt(t, o, n) {
		function s() {
			try {
				for (var r, t = 0, _ = (new Date).getTime(); rr(u.d.yb);)
					if (++t % 1e3 == 0 && (new Date).getTime() - _ > 200) return a && (i = yt(u.d.yb.Z.g) / c, n(i)), Nt(s, 0), 0;
				n(1), r = void 0 === e.decodeBinary ? wt(S(u.d.vb)) : S(u.d.vb), Nt(o.bind(null, r), 0)
			} catch (f) {
				o(null, f)
			}
		}
		var i, _, a, c, u = {},
			f = void 0 === o && void 0 === n;
		if ("function" != typeof o && (_ = o, o = n = 0), n = n || function(e) {
			return void 0 !== _ ? r(a ? e : -1, _) : void 0
		}, o = o || function(e, r) {
			return void 0 !== _ ? postMessage({
				action: It,
				cbn: _,
				result: e,
				error: r
			}) : void 0
		}, f) {
			for (u.d = E({}, t); rr(u.d.yb););
			return void 0 === e.decodeBinary ? wt(S(u.d.vb)) : S(u.d.vb)
		}
		try {
			u.d = E({}, t), c = yt(u.d.Ub), a = c > -1, n(0)
		} catch (m) {
			return o(null, m)
		}
		Nt(s, 0)
	}
	var Ft = 1,
		It = 2,
		xt = 3,
		Nt = "function" == typeof setImmediate ? setImmediate : setTimeout,
		Ot = 4294967296,
		At = [4294967295, -Ot],
		Ht = [0, -0x8000000000000000],
		Gt = [0, 0],
		Wt = [1, 0],
		Tt = function() {
			var e, r, t, o = [];
			for (e = 0; 256 > e; ++e) {
				for (t = e, r = 0; 8 > r; ++r) 0 != (1 & t) ? t = t >>> 1 ^ -306674912 : t >>>= 1;
				o[e] = t
			}
			return o
		}(),
		Zt = function() {
			var e, r, t, o = 2,
				n = [0, 1];
			for (t = 2; 22 > t; ++t)
				for (r = 1 << (t >> 1) - 1, e = 0; r > e; ++e, ++o) n[o] = t << 24 >> 24;
			return n
		}(),
		Yt = function() {
			var e, r, t, o, n = [];
			for (r = 8; r >= 0; --r)
				for (o = 1 << 9 - r - 1, e = 1 << 9 - r, t = o; e > t; ++t) n[t] = (r << 6) + (e - t << 6 >>> 9 - r - 1);
			return n
		}(),
		Vt = function() {
			var e = [{
				s: 16,
				f: 64,
				m: 0
			}, {
				s: 20,
				f: 64,
				m: 0
			}, {
				s: 19,
				f: 64,
				m: 1
			}, {
				s: 20,
				f: 64,
				m: 1
			}, {
				s: 21,
				f: 128,
				m: 1
			}, {
				s: 22,
				f: 128,
				m: 1
			}, {
				s: 23,
				f: 128,
				m: 1
			}, {
				s: 24,
				f: 255,
				m: 1
			}, {
				s: 25,
				f: 255,
				m: 1
			}];
			return function(r) {
				return e[r - 1] || e[6]
			}
		}();
	return "undefined" == typeof onmessage || "undefined" != typeof window && void 0 !== window.document || ! function() {
		onmessage = function(r) {
			r && r.gc && (r.gc.action == It ? e.decompress(r.gc.gc, r.gc.cbn) : r.gc.action == Ft && e.compress(r.gc.gc, r.gc.Rc, r.gc.cbn))
		}
	}(), {
		compress: Ct,
		decompress: zt
	}
}();
this.LZMA = this.LZMA_WORKER = e;
