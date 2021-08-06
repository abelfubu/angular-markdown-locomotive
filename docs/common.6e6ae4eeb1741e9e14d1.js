'use strict';
(self.webpackChunkmarkdown = self.webpackChunkmarkdown || []).push([
  [592],
  {
    2468: (_, a, e) => {
      e.d(a, { D: () => t });
      var s = e(2340),
        u = e(7716),
        i = e(1841);
      let t = (() => {
        class r {
          constructor(o) {
            (this.http = o),
              (this.repoFiles$ = this.http.get(`${s.N.assetsUrl}/data/posts.json`)),
              (this.repos$ = this.http.get(s.N.githubUrl));
          }
        }
        return (
          (r.ɵfac = function (o) {
            return new (o || r)(u.LFG(i.eN));
          }),
          (r.ɵprov = u.Yz7({ token: r, factory: r.ɵfac, providedIn: 'root' })),
          r
        );
      })();
    },
    4503: (_, a, e) => {
      e.d(a, { R: () => u, G: () => i });
      var s = e(7716);
      let u = (() => {
          class t {
            transform(n, o = 50) {
              return n ? (n.length > o ? `${n.substring(0, o)}...` : n) : '';
            }
          }
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵpipe = s.Yjl({ name: 'substring', type: t, pure: !0 })),
            t
          );
        })(),
        i = (() => {
          class t {}
          return (
            (t.ɵfac = function (n) {
              return new (n || t)();
            }),
            (t.ɵmod = s.oAB({ type: t })),
            (t.ɵinj = s.cJS({})),
            t
          );
        })();
    },
  },
]);
