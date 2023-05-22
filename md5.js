T.tha6s1.prototype = {
        t: function(a, b, c, d) {
            var u, t, s, r = this, q = null, p = r.fy, l ,n, o
            if (p == null) {
                r.fy = r.r
                d.a.push(T.e("[0]蓄气", r.r, r.fy, q, q, 1, 1000, 100))
                r.r.ry.i(0, r.fr)
                r.r.j = r.r.j + 1600
            }
            else {
            r.ae(0)
            l = a[0].a
            d.a.push(T.e("[0]使用[炽击「大鹏坠击拳」]", r.r, l, q, q, 1, 1000, 100))
            t = 100 + r.r.cy
            for (s = !1,n = 0; n < 3; ++n) {
                if (r.r.fr > 0 && !r.r.A && l.fr > 0) {
                    d.a.push($.v())
                    if (l.fr > 0 && !l.A && T.bd(t, l.dx + l.cy, c)) {
                        if (s)
                            d.a.push(T.e(O.c("SYdr"), l, r.r, q, q, 0, 1000, 100))
                        else
                            d.a.push(T.e(O.c("vVob"), l, r.r, q, q, 0, 1000, 100))
                        return
                    }
                    o = r.r
                    if (l.aA(l.ak(C.e.Z(T.u(n.r, !0, c)*1.5 / T.cc(l, !1, c)), o, T.a3(), c, d), o, T.a3(), c, d) > 0)
                        s = !0
                    k[d.a.length].b = 300
                    }
                }
}
        },
        ae: function(a) {
            this.fr.C()
        }
}
