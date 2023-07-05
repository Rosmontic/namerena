    T.thb7s1.prototype = {
	    gb3: function() {
            return 3
        },
        gb4: function() {
            return 3
        },
        t: function(a, b, c, d) {
            var u, s, r = this, q = null, p = r.fy, l ,n, m , o , k=d.a, w ,t,v
            if (p == null) {
                r.fy = r.r
                r.r.ry.i(0, r.fr)
                k.push(T.e("[0]：[华胥惊梦]", r.r, r.fy, q, q, 1, 1000, 100))
				if (this.r.fr < this.r.fx * 0.5)
                    this.r.j = this.r.j + 1024
                else
                    this.r.y2.i(0, this.fx)
            }
            else {
            r.ae(0)
            n = H.a([], [T.aU])
            for (u = 0; u < a.length; ++u){
                n.push(a[u].a)}
			k.push(T.e("[0]：[幽雅地绽放吧，墨染的樱花~]", r.r, r.r, q, q, 0, 1000, 100))
			k.push($.v())
            k.push(T.e("[0]使用[死蝶「华胥的永眠」]", r.r, r.r, q, q, 1, 1000, 100))           
            w = T.u(this.r, !0, c) * 0.72
			if(this.r.fr < this.r.fx * 0.5)
			{
			w = w*1.5
			}
            for (u = 0; u < n.length; ++u) {
            k.push($.v())
		    for(v = 0 ; v < 4 ; v++){
            if (o.fr > 0 ) {
            o.a0(w, !0, this.r, T.a3(), c, d)}
            }                 
            }
            
    }
        },
        ay: function(a, b, c, d) {
            var u = d.a
            u.push($.v())
            u.push(T.ap("[0]被打断了", this.r, this.fy))
            this.ae(0)
        },
        aK: function(a, b, c, d) {
            var u = this.fy
            if (u != null && u.fr > 0)
                return this
            else
                this.ae(0)
            return
        },
        ae: function(a) {
            this.fy = null
            this.fx.C()
            this.fr.C()
        }
    }
