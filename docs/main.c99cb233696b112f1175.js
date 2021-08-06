(self.webpackChunkmarkdown = self.webpackChunkmarkdown || []).push([
  [179],
  {
    8255: (_t) => {
      function Oe(k) {
        return Promise.resolve().then(() => {
          var R = new Error("Cannot find module '" + k + "'");
          throw ((R.code = 'MODULE_NOT_FOUND'), R);
        });
      }
      (Oe.keys = () => []), (Oe.resolve = Oe), (Oe.id = 8255), (_t.exports = Oe);
    },
    8583: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, {
        mr: () => Ze,
        Ov: () => Do,
        ez: () => Ji,
        K0: () => ie,
        Do: () => He,
        V_: () => Ve,
        Ye: () => qe,
        S$: () => st,
        sg: () => Tt,
        O5: () => ci,
        b0: () => $e,
        lw: () => oe,
        EM: () => io,
        JF: () => So,
        NF: () => Rs,
        w_: () => ne,
        bD: () => ti,
        q: () => Se,
        Mx: () => le,
        HT: () => he,
      });
      var R = k(7716);
      let _ = null;
      function Se() {
        return _;
      }
      function he(b) {
        _ || (_ = b);
      }
      class ne {}
      const ie = new R.OlP('DocumentToken');
      let oe = (() => {
        class b {
          historyGo(E) {
            throw new Error('Not implemented');
          }
        }
        return (
          (b.ɵfac = function (E) {
            return new (E || b)();
          }),
          (b.ɵprov = (0, R.Yz7)({ factory: we, token: b, providedIn: 'platform' })),
          b
        );
      })();
      function we() {
        return (0, R.LFG)(xe);
      }
      const Ve = new R.OlP('Location Initialized');
      let xe = (() => {
        class b extends oe {
          constructor(E) {
            super(), (this._doc = E), this._init();
          }
          _init() {
            (this.location = window.location), (this._history = window.history);
          }
          getBaseHrefFromDOM() {
            return Se().getBaseHref(this._doc);
          }
          onPopState(E) {
            const P = Se().getGlobalEventTarget(this._doc, 'window');
            return (
              P.addEventListener('popstate', E, !1), () => P.removeEventListener('popstate', E)
            );
          }
          onHashChange(E) {
            const P = Se().getGlobalEventTarget(this._doc, 'window');
            return (
              P.addEventListener('hashchange', E, !1), () => P.removeEventListener('hashchange', E)
            );
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(E) {
            this.location.pathname = E;
          }
          pushState(E, P, V) {
            H() ? this._history.pushState(E, P, V) : (this.location.hash = V);
          }
          replaceState(E, P, V) {
            H() ? this._history.replaceState(E, P, V) : (this.location.hash = V);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          historyGo(E = 0) {
            this._history.go(E);
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (b.ɵfac = function (E) {
            return new (E || b)(R.LFG(ie));
          }),
          (b.ɵprov = (0, R.Yz7)({ factory: Ne, token: b, providedIn: 'platform' })),
          b
        );
      })();
      function H() {
        return !!window.history.pushState;
      }
      function Ne() {
        return new xe((0, R.LFG)(ie));
      }
      function Ee(b, I) {
        if (0 == b.length) return I;
        if (0 == I.length) return b;
        let E = 0;
        return (
          b.endsWith('/') && E++,
          I.startsWith('/') && E++,
          2 == E ? b + I.substring(1) : 1 == E ? b + I : b + '/' + I
        );
      }
      function Me(b) {
        const I = b.match(/#|\?|$/),
          E = (I && I.index) || b.length;
        return b.slice(0, E - ('/' === b[E - 1] ? 1 : 0)) + b.slice(E);
      }
      function Ke(b) {
        return b && '?' !== b[0] ? '?' + b : b;
      }
      let st = (() => {
        class b {
          historyGo(E) {
            throw new Error('Not implemented');
          }
        }
        return (
          (b.ɵfac = function (E) {
            return new (E || b)();
          }),
          (b.ɵprov = (0, R.Yz7)({ factory: Ue, token: b, providedIn: 'root' })),
          b
        );
      })();
      function Ue(b) {
        const I = (0, R.LFG)(ie).location;
        return new $e((0, R.LFG)(oe), (I && I.origin) || '');
      }
      const Ze = new R.OlP('appBaseHref');
      let $e = (() => {
          class b extends st {
            constructor(E, P) {
              if (
                (super(),
                (this._platformLocation = E),
                (this._removeListenerFns = []),
                null == P && (P = this._platformLocation.getBaseHrefFromDOM()),
                null == P)
              )
                throw new Error(
                  'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.',
                );
              this._baseHref = P;
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(E) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(E),
                this._platformLocation.onHashChange(E),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(E) {
              return Ee(this._baseHref, E);
            }
            path(E = !1) {
              const P = this._platformLocation.pathname + Ke(this._platformLocation.search),
                V = this._platformLocation.hash;
              return V && E ? `${P}${V}` : P;
            }
            pushState(E, P, V, pe) {
              const ke = this.prepareExternalUrl(V + Ke(pe));
              this._platformLocation.pushState(E, P, ke);
            }
            replaceState(E, P, V, pe) {
              const ke = this.prepareExternalUrl(V + Ke(pe));
              this._platformLocation.replaceState(E, P, ke);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(E = 0) {
              var P, V;
              null === (V = (P = this._platformLocation).historyGo) || void 0 === V || V.call(P, E);
            }
          }
          return (
            (b.ɵfac = function (E) {
              return new (E || b)(R.LFG(oe), R.LFG(Ze, 8));
            }),
            (b.ɵprov = R.Yz7({ token: b, factory: b.ɵfac })),
            b
          );
        })(),
        He = (() => {
          class b extends st {
            constructor(E, P) {
              super(),
                (this._platformLocation = E),
                (this._baseHref = ''),
                (this._removeListenerFns = []),
                null != P && (this._baseHref = P);
            }
            ngOnDestroy() {
              for (; this._removeListenerFns.length; ) this._removeListenerFns.pop()();
            }
            onPopState(E) {
              this._removeListenerFns.push(
                this._platformLocation.onPopState(E),
                this._platformLocation.onHashChange(E),
              );
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(E = !1) {
              let P = this._platformLocation.hash;
              return null == P && (P = '#'), P.length > 0 ? P.substring(1) : P;
            }
            prepareExternalUrl(E) {
              const P = Ee(this._baseHref, E);
              return P.length > 0 ? '#' + P : P;
            }
            pushState(E, P, V, pe) {
              let ke = this.prepareExternalUrl(V + Ke(pe));
              0 == ke.length && (ke = this._platformLocation.pathname),
                this._platformLocation.pushState(E, P, ke);
            }
            replaceState(E, P, V, pe) {
              let ke = this.prepareExternalUrl(V + Ke(pe));
              0 == ke.length && (ke = this._platformLocation.pathname),
                this._platformLocation.replaceState(E, P, ke);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
            historyGo(E = 0) {
              var P, V;
              null === (V = (P = this._platformLocation).historyGo) || void 0 === V || V.call(P, E);
            }
          }
          return (
            (b.ɵfac = function (E) {
              return new (E || b)(R.LFG(oe), R.LFG(Ze, 8));
            }),
            (b.ɵprov = R.Yz7({ token: b, factory: b.ɵfac })),
            b
          );
        })(),
        qe = (() => {
          class b {
            constructor(E, P) {
              (this._subject = new R.vpe()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = E);
              const V = this._platformStrategy.getBaseHref();
              (this._platformLocation = P),
                (this._baseHref = Me(yt(V))),
                this._platformStrategy.onPopState((pe) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: pe.state,
                    type: pe.type,
                  });
                });
            }
            path(E = !1) {
              return this.normalize(this._platformStrategy.path(E));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(E, P = '') {
              return this.path() == this.normalize(E + Ke(P));
            }
            normalize(E) {
              return b.stripTrailingSlash(
                (function (b, I) {
                  return b && I.startsWith(b) ? I.substring(b.length) : I;
                })(this._baseHref, yt(E)),
              );
            }
            prepareExternalUrl(E) {
              return (
                E && '/' !== E[0] && (E = '/' + E), this._platformStrategy.prepareExternalUrl(E)
              );
            }
            go(E, P = '', V = null) {
              this._platformStrategy.pushState(V, '', E, P),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(E + Ke(P)), V);
            }
            replaceState(E, P = '', V = null) {
              this._platformStrategy.replaceState(V, '', E, P),
                this._notifyUrlChangeListeners(this.prepareExternalUrl(E + Ke(P)), V);
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            historyGo(E = 0) {
              var P, V;
              null === (V = (P = this._platformStrategy).historyGo) || void 0 === V || V.call(P, E);
            }
            onUrlChange(E) {
              this._urlChangeListeners.push(E),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((P) => {
                    this._notifyUrlChangeListeners(P.url, P.state);
                  }));
            }
            _notifyUrlChangeListeners(E = '', P) {
              this._urlChangeListeners.forEach((V) => V(E, P));
            }
            subscribe(E, P, V) {
              return this._subject.subscribe({ next: E, error: P, complete: V });
            }
          }
          return (
            (b.ɵfac = function (E) {
              return new (E || b)(R.LFG(st), R.LFG(oe));
            }),
            (b.normalizeQueryParams = Ke),
            (b.joinWithSlash = Ee),
            (b.stripTrailingSlash = Me),
            (b.ɵprov = (0, R.Yz7)({ factory: ot, token: b, providedIn: 'root' })),
            b
          );
        })();
      function ot() {
        return new qe((0, R.LFG)(st), (0, R.LFG)(oe));
      }
      function yt(b) {
        return b.replace(/\/index.html$/, '');
      }
      var X = (() => (
        ((X = X || {})[(X.Zero = 0)] = 'Zero'),
        (X[(X.One = 1)] = 'One'),
        (X[(X.Two = 2)] = 'Two'),
        (X[(X.Few = 3)] = 'Few'),
        (X[(X.Many = 4)] = 'Many'),
        (X[(X.Other = 5)] = 'Other'),
        X
      ))();
      const Rr = R.kL8;
      class Z {}
      let L = (() => {
        class b extends Z {
          constructor(E) {
            super(), (this.locale = E);
          }
          getPluralCategory(E, P) {
            switch (Rr(P || this.locale)(E)) {
              case X.Zero:
                return 'zero';
              case X.One:
                return 'one';
              case X.Two:
                return 'two';
              case X.Few:
                return 'few';
              case X.Many:
                return 'many';
              default:
                return 'other';
            }
          }
        }
        return (
          (b.ɵfac = function (E) {
            return new (E || b)(R.LFG(R.soG));
          }),
          (b.ɵprov = R.Yz7({ token: b, factory: b.ɵfac })),
          b
        );
      })();
      function le(b, I) {
        I = encodeURIComponent(I);
        for (const E of b.split(';')) {
          const P = E.indexOf('='),
            [V, pe] = -1 == P ? [E, ''] : [E.slice(0, P), E.slice(P + 1)];
          if (V.trim() === I) return decodeURIComponent(pe);
        }
        return null;
      }
      class Ut {
        constructor(I, E, P, V) {
          (this.$implicit = I), (this.ngForOf = E), (this.index = P), (this.count = V);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let Tt = (() => {
        class b {
          constructor(E, P, V) {
            (this._viewContainer = E),
              (this._template = P),
              (this._differs = V),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(E) {
            (this._ngForOf = E), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(E) {
            this._trackByFn = E;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(E) {
            E && (this._template = E);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const E = this._ngForOf;
              if (!this._differ && E)
                try {
                  this._differ = this._differs.find(E).create(this.ngForTrackBy);
                } catch (P) {
                  throw new Error(
                    `Cannot find a differ supporting object '${E}' of type '${(function (b) {
                      return b.name || typeof b;
                    })(E)}'. NgFor only supports binding to Iterables such as Arrays.`,
                  );
                }
            }
            if (this._differ) {
              const E = this._differ.diff(this._ngForOf);
              E && this._applyChanges(E);
            }
          }
          _applyChanges(E) {
            const P = [];
            E.forEachOperation((V, pe, ke) => {
              if (null == V.previousIndex) {
                const lt = this._viewContainer.createEmbeddedView(
                    this._template,
                    new Ut(null, this._ngForOf, -1, -1),
                    null === ke ? void 0 : ke,
                  ),
                  Pt = new Nr(V, lt);
                P.push(Pt);
              } else if (null == ke) this._viewContainer.remove(null === pe ? void 0 : pe);
              else if (null !== pe) {
                const lt = this._viewContainer.get(pe);
                this._viewContainer.move(lt, ke);
                const Pt = new Nr(V, lt);
                P.push(Pt);
              }
            });
            for (let V = 0; V < P.length; V++) this._perViewChange(P[V].view, P[V].record);
            for (let V = 0, pe = this._viewContainer.length; V < pe; V++) {
              const ke = this._viewContainer.get(V);
              (ke.context.index = V), (ke.context.count = pe), (ke.context.ngForOf = this._ngForOf);
            }
            E.forEachIdentityChange((V) => {
              this._viewContainer.get(V.currentIndex).context.$implicit = V.item;
            });
          }
          _perViewChange(E, P) {
            E.context.$implicit = P.item;
          }
          static ngTemplateContextGuard(E, P) {
            return !0;
          }
        }
        return (
          (b.ɵfac = function (E) {
            return new (E || b)(R.Y36(R.s_b), R.Y36(R.Rgc), R.Y36(R.ZZ4));
          }),
          (b.ɵdir = R.lG2({
            type: b,
            selectors: [['', 'ngFor', '', 'ngForOf', '']],
            inputs: {
              ngForOf: 'ngForOf',
              ngForTrackBy: 'ngForTrackBy',
              ngForTemplate: 'ngForTemplate',
            },
          })),
          b
        );
      })();
      class Nr {
        constructor(I, E) {
          (this.record = I), (this.view = E);
        }
      }
      let ci = (() => {
        class b {
          constructor(E, P) {
            (this._viewContainer = E),
              (this._context = new Ms()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = P);
          }
          set ngIf(E) {
            (this._context.$implicit = this._context.ngIf = E), this._updateView();
          }
          set ngIfThen(E) {
            qr('ngIfThen', E),
              (this._thenTemplateRef = E),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(E) {
            qr('ngIfElse', E),
              (this._elseTemplateRef = E),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context,
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context,
                  )));
          }
          static ngTemplateContextGuard(E, P) {
            return !0;
          }
        }
        return (
          (b.ɵfac = function (E) {
            return new (E || b)(R.Y36(R.s_b), R.Y36(R.Rgc));
          }),
          (b.ɵdir = R.lG2({
            type: b,
            selectors: [['', 'ngIf', '']],
            inputs: { ngIf: 'ngIf', ngIfThen: 'ngIfThen', ngIfElse: 'ngIfElse' },
          })),
          b
        );
      })();
      class Ms {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function qr(b, I) {
        if (I && !I.createEmbeddedView)
          throw new Error(`${b} must be a TemplateRef, but received '${(0, R.AaK)(I)}'.`);
      }
      class Xt {
        createSubscription(I, E) {
          return I.subscribe({
            next: E,
            error: (P) => {
              throw P;
            },
          });
        }
        dispose(I) {
          I.unsubscribe();
        }
        onDestroy(I) {
          I.unsubscribe();
        }
      }
      class Qi {
        createSubscription(I, E) {
          return I.then(E, (P) => {
            throw P;
          });
        }
        dispose(I) {}
        onDestroy(I) {}
      }
      const Zi = new Qi(),
        Xo = new Xt();
      let Do = (() => {
          class b {
            constructor(E) {
              (this._ref = E),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null);
            }
            ngOnDestroy() {
              this._subscription && this._dispose();
            }
            transform(E) {
              return this._obj
                ? E !== this._obj
                  ? (this._dispose(), this.transform(E))
                  : this._latestValue
                : (E && this._subscribe(E), this._latestValue);
            }
            _subscribe(E) {
              (this._obj = E),
                (this._strategy = this._selectStrategy(E)),
                (this._subscription = this._strategy.createSubscription(E, (P) =>
                  this._updateLatestValue(E, P),
                ));
            }
            _selectStrategy(E) {
              if ((0, R.QGY)(E)) return Zi;
              if ((0, R.F4k)(E)) return Xo;
              throw (function (b, I) {
                return Error(`InvalidPipeArgument: '${I}' for pipe '${(0, R.AaK)(b)}'`);
              })(b, E);
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(E, P) {
              E === this._obj && ((this._latestValue = P), this._ref.markForCheck());
            }
          }
          return (
            (b.ɵfac = function (E) {
              return new (E || b)(R.Y36(R.sBO, 16));
            }),
            (b.ɵpipe = R.Yjl({ name: 'async', type: b, pure: !1 })),
            b
          );
        })(),
        Ji = (() => {
          class b {}
          return (
            (b.ɵfac = function (E) {
              return new (E || b)();
            }),
            (b.ɵmod = R.oAB({ type: b })),
            (b.ɵinj = R.cJS({ providers: [{ provide: Z, useClass: L }] })),
            b
          );
        })();
      const ti = 'browser';
      function Rs(b) {
        return b === ti;
      }
      let io = (() => {
        class b {}
        return (
          (b.ɵprov = (0, R.Yz7)({
            token: b,
            providedIn: 'root',
            factory: () => new Br((0, R.LFG)(ie), window),
          })),
          b
        );
      })();
      class Br {
        constructor(I, E) {
          (this.document = I), (this.window = E), (this.offset = () => [0, 0]);
        }
        setOffset(I) {
          this.offset = Array.isArray(I) ? () => I : I;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(I) {
          this.supportsScrolling() && this.window.scrollTo(I[0], I[1]);
        }
        scrollToAnchor(I) {
          if (!this.supportsScrolling()) return;
          const E = (function (b, I) {
            const E = b.getElementById(I) || b.getElementsByName(I)[0];
            if (E) return E;
            if (
              'function' == typeof b.createTreeWalker &&
              b.body &&
              (b.body.createShadowRoot || b.body.attachShadow)
            ) {
              const P = b.createTreeWalker(b.body, NodeFilter.SHOW_ELEMENT);
              let V = P.currentNode;
              for (; V; ) {
                const pe = V.shadowRoot;
                if (pe) {
                  const ke = pe.getElementById(I) || pe.querySelector(`[name="${I}"]`);
                  if (ke) return ke;
                }
                V = P.nextNode();
              }
            }
            return null;
          })(this.document, I);
          E && (this.scrollToElement(E), this.attemptFocus(E));
        }
        setHistoryScrollRestoration(I) {
          if (this.supportScrollRestoration()) {
            const E = this.window.history;
            E && E.scrollRestoration && (E.scrollRestoration = I);
          }
        }
        scrollToElement(I) {
          const E = I.getBoundingClientRect(),
            P = E.left + this.window.pageXOffset,
            V = E.top + this.window.pageYOffset,
            pe = this.offset();
          this.window.scrollTo(P - pe[0], V - pe[1]);
        }
        attemptFocus(I) {
          return I.focus(), this.document.activeElement === I;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const I = ni(this.window.history) || ni(Object.getPrototypeOf(this.window.history));
            return !(!I || (!I.writable && !I.set));
          } catch (I) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return !!this.window && !!this.window.scrollTo && 'pageXOffset' in this.window;
          } catch (I) {
            return !1;
          }
        }
      }
      function ni(b) {
        return Object.getOwnPropertyDescriptor(b, 'scrollRestoration');
      }
      class So {}
    },
    1841: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { eN: () => ye, JF: () => Qr });
      var R = k(8583),
        _ = k(7716),
        Se = k(1964),
        fe = k(1776),
        he = k(3766),
        ne = k(4689),
        ie = k(5207);
      class oe {}
      class we {}
      class Ve {
        constructor(Y) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            Y
              ? (this.lazyInit =
                  'string' == typeof Y
                    ? () => {
                        (this.headers = new Map()),
                          Y.split('\n').forEach((Q) => {
                            const We = Q.indexOf(':');
                            if (We > 0) {
                              const be = Q.slice(0, We),
                                rt = be.toLowerCase(),
                                qt = Q.slice(We + 1).trim();
                              this.maybeSetNormalizedName(be, rt),
                                this.headers.has(rt)
                                  ? this.headers.get(rt).push(qt)
                                  : this.headers.set(rt, [qt]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(Y).forEach((Q) => {
                            let We = Y[Q];
                            const be = Q.toLowerCase();
                            'string' == typeof We && (We = [We]),
                              We.length > 0 &&
                                (this.headers.set(be, We), this.maybeSetNormalizedName(Q, be));
                          });
                      })
              : (this.headers = new Map());
        }
        has(Y) {
          return this.init(), this.headers.has(Y.toLowerCase());
        }
        get(Y) {
          this.init();
          const Q = this.headers.get(Y.toLowerCase());
          return Q && Q.length > 0 ? Q[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(Y) {
          return this.init(), this.headers.get(Y.toLowerCase()) || null;
        }
        append(Y, Q) {
          return this.clone({ name: Y, value: Q, op: 'a' });
        }
        set(Y, Q) {
          return this.clone({ name: Y, value: Q, op: 's' });
        }
        delete(Y, Q) {
          return this.clone({ name: Y, value: Q, op: 'd' });
        }
        maybeSetNormalizedName(Y, Q) {
          this.normalizedNames.has(Q) || this.normalizedNames.set(Q, Y);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Ve ? this.copyFrom(this.lazyInit) : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((Y) => this.applyUpdate(Y)), (this.lazyUpdate = null)));
        }
        copyFrom(Y) {
          Y.init(),
            Array.from(Y.headers.keys()).forEach((Q) => {
              this.headers.set(Q, Y.headers.get(Q)),
                this.normalizedNames.set(Q, Y.normalizedNames.get(Q));
            });
        }
        clone(Y) {
          const Q = new Ve();
          return (
            (Q.lazyInit = this.lazyInit && this.lazyInit instanceof Ve ? this.lazyInit : this),
            (Q.lazyUpdate = (this.lazyUpdate || []).concat([Y])),
            Q
          );
        }
        applyUpdate(Y) {
          const Q = Y.name.toLowerCase();
          switch (Y.op) {
            case 'a':
            case 's':
              let We = Y.value;
              if (('string' == typeof We && (We = [We]), 0 === We.length)) return;
              this.maybeSetNormalizedName(Y.name, Q);
              const be = ('a' === Y.op ? this.headers.get(Q) : void 0) || [];
              be.push(...We), this.headers.set(Q, be);
              break;
            case 'd':
              const rt = Y.value;
              if (rt) {
                let qt = this.headers.get(Q);
                if (!qt) return;
                (qt = qt.filter((pt) => -1 === rt.indexOf(pt))),
                  0 === qt.length
                    ? (this.headers.delete(Q), this.normalizedNames.delete(Q))
                    : this.headers.set(Q, qt);
              } else this.headers.delete(Q), this.normalizedNames.delete(Q);
          }
        }
        forEach(Y) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((Q) =>
              Y(this.normalizedNames.get(Q), this.headers.get(Q)),
            );
        }
      }
      class xe {
        encodeKey(Y) {
          return Ne(Y);
        }
        encodeValue(Y) {
          return Ne(Y);
        }
        decodeKey(Y) {
          return decodeURIComponent(Y);
        }
        decodeValue(Y) {
          return decodeURIComponent(Y);
        }
      }
      function Ne(De) {
        return encodeURIComponent(De)
          .replace(/%40/gi, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/gi, '$')
          .replace(/%2C/gi, ',')
          .replace(/%3B/gi, ';')
          .replace(/%2B/gi, '+')
          .replace(/%3D/gi, '=')
          .replace(/%3F/gi, '?')
          .replace(/%2F/gi, '/');
      }
      function Ee(De) {
        return `${De}`;
      }
      class Me {
        constructor(Y = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = Y.encoder || new xe()),
            Y.fromString)
          ) {
            if (Y.fromObject) throw new Error('Cannot specify both fromString and fromObject.');
            this.map = (function (De, Y) {
              const Q = new Map();
              return (
                De.length > 0 &&
                  De.replace(/^\?/, '')
                    .split('&')
                    .forEach((be) => {
                      const rt = be.indexOf('='),
                        [qt, pt] =
                          -1 == rt
                            ? [Y.decodeKey(be), '']
                            : [Y.decodeKey(be.slice(0, rt)), Y.decodeValue(be.slice(rt + 1))],
                        Pe = Q.get(qt) || [];
                      Pe.push(pt), Q.set(qt, Pe);
                    }),
                Q
              );
            })(Y.fromString, this.encoder);
          } else
            Y.fromObject
              ? ((this.map = new Map()),
                Object.keys(Y.fromObject).forEach((Q) => {
                  const We = Y.fromObject[Q];
                  this.map.set(Q, Array.isArray(We) ? We : [We]);
                }))
              : (this.map = null);
        }
        has(Y) {
          return this.init(), this.map.has(Y);
        }
        get(Y) {
          this.init();
          const Q = this.map.get(Y);
          return Q ? Q[0] : null;
        }
        getAll(Y) {
          return this.init(), this.map.get(Y) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(Y, Q) {
          return this.clone({ param: Y, value: Q, op: 'a' });
        }
        appendAll(Y) {
          const Q = [];
          return (
            Object.keys(Y).forEach((We) => {
              const be = Y[We];
              Array.isArray(be)
                ? be.forEach((rt) => {
                    Q.push({ param: We, value: rt, op: 'a' });
                  })
                : Q.push({ param: We, value: be, op: 'a' });
            }),
            this.clone(Q)
          );
        }
        set(Y, Q) {
          return this.clone({ param: Y, value: Q, op: 's' });
        }
        delete(Y, Q) {
          return this.clone({ param: Y, value: Q, op: 'd' });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((Y) => {
                const Q = this.encoder.encodeKey(Y);
                return this.map
                  .get(Y)
                  .map((We) => Q + '=' + this.encoder.encodeValue(We))
                  .join('&');
              })
              .filter((Y) => '' !== Y)
              .join('&')
          );
        }
        clone(Y) {
          const Q = new Me({ encoder: this.encoder });
          return (
            (Q.cloneFrom = this.cloneFrom || this), (Q.updates = (this.updates || []).concat(Y)), Q
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom.keys().forEach((Y) => this.map.set(Y, this.cloneFrom.map.get(Y))),
              this.updates.forEach((Y) => {
                switch (Y.op) {
                  case 'a':
                  case 's':
                    const Q = ('a' === Y.op ? this.map.get(Y.param) : void 0) || [];
                    Q.push(Ee(Y.value)), this.map.set(Y.param, Q);
                    break;
                  case 'd':
                    if (void 0 === Y.value) {
                      this.map.delete(Y.param);
                      break;
                    }
                    {
                      let We = this.map.get(Y.param) || [];
                      const be = We.indexOf(Ee(Y.value));
                      -1 !== be && We.splice(be, 1),
                        We.length > 0 ? this.map.set(Y.param, We) : this.map.delete(Y.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class st {
        constructor() {
          this.map = new Map();
        }
        set(Y, Q) {
          return this.map.set(Y, Q), this;
        }
        get(Y) {
          return this.map.has(Y) || this.map.set(Y, Y.defaultValue()), this.map.get(Y);
        }
        delete(Y) {
          return this.map.delete(Y), this;
        }
        keys() {
          return this.map.keys();
        }
      }
      function Ze(De) {
        return 'undefined' != typeof ArrayBuffer && De instanceof ArrayBuffer;
      }
      function $e(De) {
        return 'undefined' != typeof Blob && De instanceof Blob;
      }
      function He(De) {
        return 'undefined' != typeof FormData && De instanceof FormData;
      }
      class ot {
        constructor(Y, Q, We, be) {
          let rt;
          if (
            ((this.url = Q),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = 'json'),
            (this.method = Y.toUpperCase()),
            (function (De) {
              switch (De) {
                case 'DELETE':
                case 'GET':
                case 'HEAD':
                case 'OPTIONS':
                case 'JSONP':
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || be
              ? ((this.body = void 0 !== We ? We : null), (rt = be))
              : (rt = We),
            rt &&
              ((this.reportProgress = !!rt.reportProgress),
              (this.withCredentials = !!rt.withCredentials),
              rt.responseType && (this.responseType = rt.responseType),
              rt.headers && (this.headers = rt.headers),
              rt.context && (this.context = rt.context),
              rt.params && (this.params = rt.params)),
            this.headers || (this.headers = new Ve()),
            this.context || (this.context = new st()),
            this.params)
          ) {
            const qt = this.params.toString();
            if (0 === qt.length) this.urlWithParams = Q;
            else {
              const pt = Q.indexOf('?');
              this.urlWithParams = Q + (-1 === pt ? '?' : pt < Q.length - 1 ? '&' : '') + qt;
            }
          } else (this.params = new Me()), (this.urlWithParams = Q);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Ze(this.body) ||
              $e(this.body) ||
              He(this.body) ||
              ('undefined' != typeof URLSearchParams && this.body instanceof URLSearchParams) ||
              'string' == typeof this.body
            ? this.body
            : this.body instanceof Me
            ? this.body.toString()
            : 'object' == typeof this.body ||
              'boolean' == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || He(this.body)
            ? null
            : $e(this.body)
            ? this.body.type || null
            : Ze(this.body)
            ? null
            : 'string' == typeof this.body
            ? 'text/plain'
            : this.body instanceof Me
            ? 'application/x-www-form-urlencoded;charset=UTF-8'
            : 'object' == typeof this.body ||
              'number' == typeof this.body ||
              'boolean' == typeof this.body
            ? 'application/json'
            : null;
        }
        clone(Y = {}) {
          var Q;
          const We = Y.method || this.method,
            be = Y.url || this.url,
            rt = Y.responseType || this.responseType,
            qt = void 0 !== Y.body ? Y.body : this.body,
            pt = void 0 !== Y.withCredentials ? Y.withCredentials : this.withCredentials,
            Pe = void 0 !== Y.reportProgress ? Y.reportProgress : this.reportProgress;
          let it = Y.headers || this.headers,
            wn = Y.params || this.params;
          const yr = null !== (Q = Y.context) && void 0 !== Q ? Q : this.context;
          return (
            void 0 !== Y.setHeaders &&
              (it = Object.keys(Y.setHeaders).reduce((Et, Fe) => Et.set(Fe, Y.setHeaders[Fe]), it)),
            Y.setParams &&
              (wn = Object.keys(Y.setParams).reduce((Et, Fe) => Et.set(Fe, Y.setParams[Fe]), wn)),
            new ot(We, be, qt, {
              params: wn,
              headers: it,
              context: yr,
              reportProgress: Pe,
              responseType: rt,
              withCredentials: pt,
            })
          );
        }
      }
      var tt = (() => (
        ((tt = tt || {})[(tt.Sent = 0)] = 'Sent'),
        (tt[(tt.UploadProgress = 1)] = 'UploadProgress'),
        (tt[(tt.ResponseHeader = 2)] = 'ResponseHeader'),
        (tt[(tt.DownloadProgress = 3)] = 'DownloadProgress'),
        (tt[(tt.Response = 4)] = 'Response'),
        (tt[(tt.User = 5)] = 'User'),
        tt
      ))();
      class yt {
        constructor(Y, Q = 200, We = 'OK') {
          (this.headers = Y.headers || new Ve()),
            (this.status = void 0 !== Y.status ? Y.status : Q),
            (this.statusText = Y.statusText || We),
            (this.url = Y.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Ht extends yt {
        constructor(Y = {}) {
          super(Y), (this.type = tt.ResponseHeader);
        }
        clone(Y = {}) {
          return new Ht({
            headers: Y.headers || this.headers,
            status: void 0 !== Y.status ? Y.status : this.status,
            statusText: Y.statusText || this.statusText,
            url: Y.url || this.url || void 0,
          });
        }
      }
      class se extends yt {
        constructor(Y = {}) {
          super(Y), (this.type = tt.Response), (this.body = void 0 !== Y.body ? Y.body : null);
        }
        clone(Y = {}) {
          return new se({
            body: void 0 !== Y.body ? Y.body : this.body,
            headers: Y.headers || this.headers,
            status: void 0 !== Y.status ? Y.status : this.status,
            statusText: Y.statusText || this.statusText,
            url: Y.url || this.url || void 0,
          });
        }
      }
      class X extends yt {
        constructor(Y) {
          super(Y, 0, 'Unknown Error'),
            (this.name = 'HttpErrorResponse'),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${Y.url || '(unknown url)'}`
                : `Http failure response for ${Y.url || '(unknown url)'}: ${Y.status} ${
                    Y.statusText
                  }`),
            (this.error = Y.error || null);
        }
      }
      function ae(De, Y) {
        return {
          body: Y,
          headers: De.headers,
          context: De.context,
          observe: De.observe,
          params: De.params,
          reportProgress: De.reportProgress,
          responseType: De.responseType,
          withCredentials: De.withCredentials,
        };
      }
      let ye = (() => {
        class De {
          constructor(Q) {
            this.handler = Q;
          }
          request(Q, We, be = {}) {
            let rt;
            if (Q instanceof ot) rt = Q;
            else {
              let Pe, it;
              (Pe = be.headers instanceof Ve ? be.headers : new Ve(be.headers)),
                be.params &&
                  (it = be.params instanceof Me ? be.params : new Me({ fromObject: be.params })),
                (rt = new ot(Q, We, void 0 !== be.body ? be.body : null, {
                  headers: Pe,
                  context: be.context,
                  params: it,
                  reportProgress: be.reportProgress,
                  responseType: be.responseType || 'json',
                  withCredentials: be.withCredentials,
                }));
            }
            const qt = (0, Se.of)(rt).pipe((0, he.b)((Pe) => this.handler.handle(Pe)));
            if (Q instanceof ot || 'events' === be.observe) return qt;
            const pt = qt.pipe((0, ne.h)((Pe) => Pe instanceof se));
            switch (be.observe || 'body') {
              case 'body':
                switch (rt.responseType) {
                  case 'arraybuffer':
                    return pt.pipe(
                      (0, ie.U)((Pe) => {
                        if (null !== Pe.body && !(Pe.body instanceof ArrayBuffer))
                          throw new Error('Response is not an ArrayBuffer.');
                        return Pe.body;
                      }),
                    );
                  case 'blob':
                    return pt.pipe(
                      (0, ie.U)((Pe) => {
                        if (null !== Pe.body && !(Pe.body instanceof Blob))
                          throw new Error('Response is not a Blob.');
                        return Pe.body;
                      }),
                    );
                  case 'text':
                    return pt.pipe(
                      (0, ie.U)((Pe) => {
                        if (null !== Pe.body && 'string' != typeof Pe.body)
                          throw new Error('Response is not a string.');
                        return Pe.body;
                      }),
                    );
                  case 'json':
                  default:
                    return pt.pipe((0, ie.U)((Pe) => Pe.body));
                }
              case 'response':
                return pt;
              default:
                throw new Error(`Unreachable: unhandled observe type ${be.observe}}`);
            }
          }
          delete(Q, We = {}) {
            return this.request('DELETE', Q, We);
          }
          get(Q, We = {}) {
            return this.request('GET', Q, We);
          }
          head(Q, We = {}) {
            return this.request('HEAD', Q, We);
          }
          jsonp(Q, We) {
            return this.request('JSONP', Q, {
              params: new Me().append(We, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json',
            });
          }
          options(Q, We = {}) {
            return this.request('OPTIONS', Q, We);
          }
          patch(Q, We, be = {}) {
            return this.request('PATCH', Q, ae(be, We));
          }
          post(Q, We, be = {}) {
            return this.request('POST', Q, ae(be, We));
          }
          put(Q, We, be = {}) {
            return this.request('PUT', Q, ae(be, We));
          }
        }
        return (
          (De.ɵfac = function (Q) {
            return new (Q || De)(_.LFG(oe));
          }),
          (De.ɵprov = _.Yz7({ token: De, factory: De.ɵfac })),
          De
        );
      })();
      class Re {
        constructor(Y, Q) {
          (this.next = Y), (this.interceptor = Q);
        }
        handle(Y) {
          return this.interceptor.intercept(Y, this.next);
        }
      }
      const re = new _.OlP('HTTP_INTERCEPTORS');
      let dt = (() => {
        class De {
          intercept(Q, We) {
            return We.handle(Q);
          }
        }
        return (
          (De.ɵfac = function (Q) {
            return new (Q || De)();
          }),
          (De.ɵprov = _.Yz7({ token: De, factory: De.ɵfac })),
          De
        );
      })();
      const In = /^\)\]\}',?\n/;
      let mr = (() => {
        class De {
          constructor(Q) {
            this.xhrFactory = Q;
          }
          handle(Q) {
            if ('JSONP' === Q.method)
              throw new Error(
                'Attempted to construct Jsonp request without HttpClientJsonpModule installed.',
              );
            return new fe.y((We) => {
              const be = this.xhrFactory.build();
              if (
                (be.open(Q.method, Q.urlWithParams),
                Q.withCredentials && (be.withCredentials = !0),
                Q.headers.forEach((Fe, Gt) => be.setRequestHeader(Fe, Gt.join(','))),
                Q.headers.has('Accept') ||
                  be.setRequestHeader('Accept', 'application/json, text/plain, */*'),
                !Q.headers.has('Content-Type'))
              ) {
                const Fe = Q.detectContentTypeHeader();
                null !== Fe && be.setRequestHeader('Content-Type', Fe);
              }
              if (Q.responseType) {
                const Fe = Q.responseType.toLowerCase();
                be.responseType = 'json' !== Fe ? Fe : 'text';
              }
              const rt = Q.serializeBody();
              let qt = null;
              const pt = () => {
                  if (null !== qt) return qt;
                  const Fe = 1223 === be.status ? 204 : be.status,
                    Gt = be.statusText || 'OK',
                    sr = new Ve(be.getAllResponseHeaders()),
                    $t =
                      (function (De) {
                        return 'responseURL' in De && De.responseURL
                          ? De.responseURL
                          : /^X-Request-URL:/m.test(De.getAllResponseHeaders())
                          ? De.getResponseHeader('X-Request-URL')
                          : null;
                      })(be) || Q.url;
                  return (qt = new Ht({ headers: sr, status: Fe, statusText: Gt, url: $t })), qt;
                },
                Pe = () => {
                  let { headers: Fe, status: Gt, statusText: sr, url: $t } = pt(),
                    bt = null;
                  204 !== Gt && (bt = void 0 === be.response ? be.responseText : be.response),
                    0 === Gt && (Gt = bt ? 200 : 0);
                  let Ot = Gt >= 200 && Gt < 300;
                  if ('json' === Q.responseType && 'string' == typeof bt) {
                    const bn = bt;
                    bt = bt.replace(In, '');
                    try {
                      bt = '' !== bt ? JSON.parse(bt) : null;
                    } catch (or) {
                      (bt = bn), Ot && ((Ot = !1), (bt = { error: or, text: bt }));
                    }
                  }
                  Ot
                    ? (We.next(
                        new se({
                          body: bt,
                          headers: Fe,
                          status: Gt,
                          statusText: sr,
                          url: $t || void 0,
                        }),
                      ),
                      We.complete())
                    : We.error(
                        new X({
                          error: bt,
                          headers: Fe,
                          status: Gt,
                          statusText: sr,
                          url: $t || void 0,
                        }),
                      );
                },
                it = (Fe) => {
                  const { url: Gt } = pt(),
                    sr = new X({
                      error: Fe,
                      status: be.status || 0,
                      statusText: be.statusText || 'Unknown Error',
                      url: Gt || void 0,
                    });
                  We.error(sr);
                };
              let wn = !1;
              const yr = (Fe) => {
                  wn || (We.next(pt()), (wn = !0));
                  let Gt = { type: tt.DownloadProgress, loaded: Fe.loaded };
                  Fe.lengthComputable && (Gt.total = Fe.total),
                    'text' === Q.responseType &&
                      !!be.responseText &&
                      (Gt.partialText = be.responseText),
                    We.next(Gt);
                },
                Et = (Fe) => {
                  let Gt = { type: tt.UploadProgress, loaded: Fe.loaded };
                  Fe.lengthComputable && (Gt.total = Fe.total), We.next(Gt);
                };
              return (
                be.addEventListener('load', Pe),
                be.addEventListener('error', it),
                be.addEventListener('timeout', it),
                be.addEventListener('abort', it),
                Q.reportProgress &&
                  (be.addEventListener('progress', yr),
                  null !== rt && be.upload && be.upload.addEventListener('progress', Et)),
                be.send(rt),
                We.next({ type: tt.Sent }),
                () => {
                  be.removeEventListener('error', it),
                    be.removeEventListener('abort', it),
                    be.removeEventListener('load', Pe),
                    be.removeEventListener('timeout', it),
                    Q.reportProgress &&
                      (be.removeEventListener('progress', yr),
                      null !== rt && be.upload && be.upload.removeEventListener('progress', Et)),
                    be.readyState !== be.DONE && be.abort();
                }
              );
            });
          }
        }
        return (
          (De.ɵfac = function (Q) {
            return new (Q || De)(_.LFG(R.JF));
          }),
          (De.ɵprov = _.Yz7({ token: De, factory: De.ɵfac })),
          De
        );
      })();
      const St = new _.OlP('XSRF_COOKIE_NAME'),
        nn = new _.OlP('XSRF_HEADER_NAME');
      class Er {}
      let Gr = (() => {
          class De {
            constructor(Q, We, be) {
              (this.doc = Q),
                (this.platform = We),
                (this.cookieName = be),
                (this.lastCookieString = ''),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ('server' === this.platform) return null;
              const Q = this.doc.cookie || '';
              return (
                Q !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = (0, R.Mx)(Q, this.cookieName)),
                  (this.lastCookieString = Q)),
                this.lastToken
              );
            }
          }
          return (
            (De.ɵfac = function (Q) {
              return new (Q || De)(_.LFG(R.K0), _.LFG(_.Lbi), _.LFG(St));
            }),
            (De.ɵprov = _.Yz7({ token: De, factory: De.ɵfac })),
            De
          );
        })(),
        Mn = (() => {
          class De {
            constructor(Q, We) {
              (this.tokenService = Q), (this.headerName = We);
            }
            intercept(Q, We) {
              const be = Q.url.toLowerCase();
              if (
                'GET' === Q.method ||
                'HEAD' === Q.method ||
                be.startsWith('http://') ||
                be.startsWith('https://')
              )
                return We.handle(Q);
              const rt = this.tokenService.getToken();
              return (
                null !== rt &&
                  !Q.headers.has(this.headerName) &&
                  (Q = Q.clone({ headers: Q.headers.set(this.headerName, rt) })),
                We.handle(Q)
              );
            }
          }
          return (
            (De.ɵfac = function (Q) {
              return new (Q || De)(_.LFG(Er), _.LFG(nn));
            }),
            (De.ɵprov = _.Yz7({ token: De, factory: De.ɵfac })),
            De
          );
        })(),
        Dr = (() => {
          class De {
            constructor(Q, We) {
              (this.backend = Q), (this.injector = We), (this.chain = null);
            }
            handle(Q) {
              if (null === this.chain) {
                const We = this.injector.get(re, []);
                this.chain = We.reduceRight((be, rt) => new Re(be, rt), this.backend);
              }
              return this.chain.handle(Q);
            }
          }
          return (
            (De.ɵfac = function (Q) {
              return new (Q || De)(_.LFG(we), _.LFG(_.zs3));
            }),
            (De.ɵprov = _.Yz7({ token: De, factory: De.ɵfac })),
            De
          );
        })(),
        Kr = (() => {
          class De {
            static disable() {
              return { ngModule: De, providers: [{ provide: Mn, useClass: dt }] };
            }
            static withOptions(Q = {}) {
              return {
                ngModule: De,
                providers: [
                  Q.cookieName ? { provide: St, useValue: Q.cookieName } : [],
                  Q.headerName ? { provide: nn, useValue: Q.headerName } : [],
                ],
              };
            }
          }
          return (
            (De.ɵfac = function (Q) {
              return new (Q || De)();
            }),
            (De.ɵmod = _.oAB({ type: De })),
            (De.ɵinj = _.cJS({
              providers: [
                Mn,
                { provide: re, useExisting: Mn, multi: !0 },
                { provide: Er, useClass: Gr },
                { provide: St, useValue: 'XSRF-TOKEN' },
                { provide: nn, useValue: 'X-XSRF-TOKEN' },
              ],
            })),
            De
          );
        })(),
        Qr = (() => {
          class De {}
          return (
            (De.ɵfac = function (Q) {
              return new (Q || De)();
            }),
            (De.ɵmod = _.oAB({ type: De })),
            (De.ɵinj = _.cJS({
              providers: [ye, { provide: oe, useClass: Dr }, mr, { provide: we, useExisting: mr }],
              imports: [[Kr.withOptions({ cookieName: 'XSRF-TOKEN', headerName: 'X-XSRF-TOKEN' })]],
            })),
            De
          );
        })();
    },
    7716: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, {
        deG: () => rf,
        tb: () => z_,
        AFp: () => U_,
        ip1: () => Np,
        CZH: () => Yl,
        hGG: () => UT,
        z2F: () => hc,
        sBO: () => AE,
        Sil: () => fc,
        _Vd: () => ka,
        EJc: () => G_,
        SBq: () => Js,
        qLn: () => Yo,
        vpe: () => Xs,
        gxx: () => El,
        tBr: () => zs,
        XFs: () => ft,
        OlP: () => Pn,
        zs3: () => hn,
        ZZ4: () => Od,
        aQg: () => Rd,
        soG: () => $d,
        YKP: () => Rv,
        v3s: () => CT,
        h0i: () => La,
        PXZ: () => pT,
        R0b: () => Ei,
        FiY: () => Li,
        Lbi: () => $_,
        g9A: () => H_,
        Qsj: () => gE,
        FYo: () => Ad,
        JOm: () => ms,
        Tiy: () => lp,
        q3G: () => Nn,
        tp0: () => Ws,
        EAV: () => DT,
        Rgc: () => ec,
        dDg: () => Z_,
        DyG: () => us,
        GfV: () => Dv,
        s_b: () => Fd,
        ifc: () => Pe,
        eFA: () => t0,
        G48: () => aT,
        X6Q: () => Up,
        _c5: () => NT,
        VLi: () => oT,
        c2e: () => W_,
        zSh: () => Hu,
        wAp: () => Dt,
        vHH: () => Me,
        EiD: () => Kc,
        mCW: () => Wo,
        qzn: () => fs,
        JVY: () => ul,
        pB0: () => Vc,
        eBb: () => cl,
        L6k: () => Bc,
        LAX: () => xf,
        cg1: () => Xh,
        Tjo: () => RT,
        kL8: () => Yy,
        yhl: () => Lc,
        dqk: () => Fe,
        sIi: () => Wu,
        CqO: () => zh,
        QGY: () => $h,
        F4k: () => Jm,
        RDi: () => sa,
        AaK: () => oe,
        z3N: () => Vi,
        TTD: () => Ji,
        xp6: () => de,
        uIk: () => Nh,
        Tol: () => wy,
        ekj: () => Qh,
        Suo: () => v_,
        Xpm: () => vr,
        lG2: () => ar,
        Yz7: () => Bt,
        cJS: () => St,
        oAB: () => Si,
        Yjl: () => li,
        Y36: () => Yu,
        _UZ: () => Km,
        qZA: () => Hh,
        TgZ: () => Uh,
        EpF: () => qm,
        Ikx: () => Jh,
        LFG: () => pn,
        $8M: () => qa,
        NdJ: () => Wh,
        CRH: () => __,
        O4$: () => yn,
        oxw: () => ny,
        ALo: () => d_,
        lcZ: () => f_,
        xi3: () => h_,
        Hsn: () => iy,
        F$t: () => ry,
        Q6J: () => Vh,
        iGM: () => m_,
        MAs: () => km,
        Jf7: () => Mu,
        CHM: () => Xl,
        LSH: () => wu,
        kYT: () => Yi,
        Udp: () => Kh,
        YNc: () => Fm,
        W1O: () => E_,
        _uU: () => Iy,
        Oqu: () => qh,
        hij: () => Ed,
        Gf: () => y_,
      });
      var R = k(6889),
        _ = k(8839),
        Se = k(1776),
        fe = k(3763),
        he = k(8047);
      function ne(e) {
        for (let t in e) if (e[t] === ne) return t;
        throw Error('Could not find renamed property on target object.');
      }
      function oe(e) {
        if ('string' == typeof e) return e;
        if (Array.isArray(e)) return '[' + e.map(oe).join(', ') + ']';
        if (null == e) return '' + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return '' + t;
        const n = t.indexOf('\n');
        return -1 === n ? t : t.substring(0, n);
      }
      function we(e, t) {
        return null == e || '' === e
          ? null === t
            ? ''
            : t
          : null == t || '' === t
          ? e
          : e + ' ' + t;
      }
      const Ve = ne({ __forward_ref__: ne });
      function xe(e) {
        return (
          (e.__forward_ref__ = xe),
          (e.toString = function () {
            return oe(this());
          }),
          e
        );
      }
      function H(e) {
        return (function (e) {
          return 'function' == typeof e && e.hasOwnProperty(Ve) && e.__forward_ref__ === xe;
        })(e)
          ? e()
          : e;
      }
      class Me extends Error {
        constructor(t, n) {
          super(
            (function (e, t) {
              return `${e ? `NG0${e}: ` : ''}${t}`;
            })(t, n),
          ),
            (this.code = t);
        }
      }
      function Ue(e) {
        return 'string' == typeof e ? e : null == e ? '' : String(e);
      }
      function Ze(e) {
        return 'function' == typeof e
          ? e.name || e.toString()
          : 'object' == typeof e && null != e && 'function' == typeof e.type
          ? e.type.name || e.type.toString()
          : Ue(e);
      }
      function ot(e, t) {
        const n = t ? ` in ${t}` : '';
        throw new Me('201', `No provider for ${Ze(e)} found${n}`);
      }
      function Xe(e, t) {
        null == e &&
          (function (e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` + (null == r ? '' : ` [Expected=> ${n} ${r} ${t} <=Actual]`),
            );
          })(t, e, null, '!=');
      }
      function Bt(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function St(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function nn(e) {
        return Er(e, Rr) || Er(e, Kr);
      }
      function Er(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Dr(e) {
        return e && (e.hasOwnProperty(Yr) || e.hasOwnProperty(Qr)) ? e[Yr] : null;
      }
      const Rr = ne({ ɵprov: ne }),
        Yr = ne({ ɵinj: ne }),
        Kr = ne({ ngInjectableDef: ne }),
        Qr = ne({ ngInjectorDef: ne });
      var ft = (() => (
        ((ft = ft || {})[(ft.Default = 0)] = 'Default'),
        (ft[(ft.Host = 1)] = 'Host'),
        (ft[(ft.Self = 2)] = 'Self'),
        (ft[(ft.SkipSelf = 4)] = 'SkipSelf'),
        (ft[(ft.Optional = 8)] = 'Optional'),
        ft
      ))();
      let at;
      function Y(e) {
        const t = at;
        return (at = e), t;
      }
      function Q(e, t, n) {
        const r = nn(e);
        return r && 'root' == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & ft.Optional
          ? null
          : void 0 !== t
          ? t
          : void ot(oe(e), 'Injector');
      }
      function be(e) {
        return { toString: e }.toString();
      }
      var rt = (() => (
          ((rt = rt || {})[(rt.OnPush = 0)] = 'OnPush'), (rt[(rt.Default = 1)] = 'Default'), rt
        ))(),
        Pe = (() => (
          ((Pe = Pe || {})[(Pe.Emulated = 0)] = 'Emulated'),
          (Pe[(Pe.None = 2)] = 'None'),
          (Pe[(Pe.ShadowDom = 3)] = 'ShadowDom'),
          Pe
        ))();
      const it = 'undefined' != typeof globalThis && globalThis,
        wn = 'undefined' != typeof window && window,
        yr =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Et = 'undefined' != typeof global && global,
        Fe = it || Et || wn || yr,
        $t = {},
        bt = [],
        Ot = ne({ ɵcmp: ne }),
        bn = ne({ ɵdir: ne }),
        or = ne({ ɵpipe: ne }),
        Sr = ne({ ɵmod: ne }),
        Zr = ne({ ɵloc: ne }),
        Un = ne({ ɵfac: ne }),
        Fn = ne({ __NG_ELEMENT_ID__: ne });
      let Mt = 0;
      function vr(e) {
        return be(() => {
          const n = {},
            r = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: n,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === rt.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || bt,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || Pe.Emulated,
              id: 'c',
              styles: e.styles || bt,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            i = e.directives,
            o = e.features,
            u = e.pipes;
          return (
            (r.id += Mt++),
            (r.inputs = Xn(e.inputs, n)),
            (r.outputs = Xn(e.outputs)),
            o && o.forEach((f) => f(r)),
            (r.directiveDefs = i ? () => ('function' == typeof i ? i() : i).map(kn) : null),
            (r.pipeDefs = u ? () => ('function' == typeof u ? u() : u).map(_r) : null),
            r
          );
        });
      }
      function kn(e) {
        return (
          un(e) ||
          (function (e) {
            return e[bn] || null;
          })(e)
        );
      }
      function _r(e) {
        return (function (e) {
          return e[or] || null;
        })(e);
      }
      const Di = {};
      function Si(e) {
        return be(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || bt,
            declarations: e.declarations || bt,
            imports: e.imports || bt,
            exports: e.exports || bt,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (Di[e.id] = e.type), t;
        });
      }
      function Yi(e, t) {
        return be(() => {
          const n = An(e, !0);
          (n.declarations = t.declarations || bt),
            (n.imports = t.imports || bt),
            (n.exports = t.exports || bt);
        });
      }
      function Xn(e, t) {
        if (null == e) return $t;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let i = e[r],
              o = i;
            Array.isArray(i) && ((o = i[1]), (i = i[0])), (n[i] = r), t && (t[i] = o);
          }
        return n;
      }
      const ar = vr;
      function li(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function un(e) {
        return e[Ot] || null;
      }
      function An(e, t) {
        const n = e[Sr] || null;
        if (!n && !0 === t) throw new Error(`Type ${oe(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Tr(e) {
        return Array.isArray(e) && 'object' == typeof e[1];
      }
      function lr(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function As(e) {
        return 0 != (8 & e.flags);
      }
      function Dn(e) {
        return 2 == (2 & e.flags);
      }
      function ur(e) {
        return 1 == (1 & e.flags);
      }
      function Ln(e) {
        return null !== e.template;
      }
      function cr(e) {
        return 0 != (512 & e[2]);
      }
      function ei(e, t) {
        return e.hasOwnProperty(Un) ? e[Un] : null;
      }
      class no {
        constructor(t, n, r) {
          (this.previousValue = t), (this.currentValue = n), (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function Ji() {
        return ti;
      }
      function ti(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = zn), Lr;
      }
      function Lr() {
        const e = Rs(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === $t) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function zn(e, t, n, r) {
        const i =
            Rs(e) ||
            (function (e, t) {
              return (e[ro] = t);
            })(e, { previous: $t, current: null }),
          o = i.current || (i.current = {}),
          u = i.previous,
          f = this.declaredInputs[n],
          g = u[f];
        (o[f] = new no(g && g.currentValue, t, u === $t)), (e[r] = t);
      }
      Ji.ngInherit = !0;
      const ro = '__ngSimpleChanges__';
      function Rs(e) {
        return e[ro] || null;
      }
      const io = 'http://www.w3.org/2000/svg';
      let ni;
      function sa(e) {
        ni = e;
      }
      function b(e) {
        return !!e.listen;
      }
      const E = {
        createRenderer: (e, t) =>
          void 0 !== ni ? ni : 'undefined' != typeof document ? document : void 0,
      };
      function V(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function lt(e, t) {
        return V(t[e]);
      }
      function Pt(e, t) {
        return V(t[e.index]);
      }
      function tn(e, t) {
        return e.data[t];
      }
      function Ft(e, t) {
        return e[t];
      }
      function It(e, t) {
        const n = t[e];
        return Tr(n) ? n : n[0];
      }
      function Qt(e) {
        return 4 == (4 & e[2]);
      }
      function Bn(e) {
        return 128 == (128 & e[2]);
      }
      function Tn(e, t) {
        return null == t ? null : e[t];
      }
      function Kn(e) {
        e[18] = 0;
      }
      function di(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (; null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5])); )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const wt = { lFrame: ca(null), bindingsEnabled: !0, isInCheckNoChangesMode: !1 };
      function so() {
        return wt.bindingsEnabled;
      }
      function Le() {
        return wt.lFrame.lView;
      }
      function Yt() {
        return wt.lFrame.tView;
      }
      function Xl(e) {
        return (wt.lFrame.contextLView = e), e[8];
      }
      function Hn() {
        let e = eu();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function eu() {
        return wt.lFrame.currentTNode;
      }
      function fi(e, t) {
        const n = wt.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function aa() {
        return wt.lFrame.isParent;
      }
      function Wa() {
        wt.lFrame.isParent = !1;
      }
      function hi() {
        return wt.isInCheckNoChangesMode;
      }
      function Ps(e) {
        wt.isInCheckNoChangesMode = e;
      }
      function Cn() {
        const e = wt.lFrame;
        let t = e.bindingRootIndex;
        return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t;
      }
      function ts() {
        return wt.lFrame.bindingIndex++;
      }
      function Wn(e) {
        const t = wt.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function Ns(e, t) {
        const n = wt.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Io(t);
      }
      function Io(e) {
        wt.lFrame.currentDirectiveIndex = e;
      }
      function Mo() {
        return wt.lFrame.currentQueryIndex;
      }
      function ri(e) {
        wt.lFrame.currentQueryIndex = e;
      }
      function Ya(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function Ka(e, t, n) {
        if (n & ft.SkipSelf) {
          let i = t,
            o = e;
          for (
            ;
            !((i = i.parent),
            null !== i || n & ft.Host || ((i = Ya(o)), null === i || ((o = o[15]), 10 & i.type)));

          );
          if (null === i) return !1;
          (t = i), (e = o);
        }
        const r = (wt.lFrame = ua());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Fs(e) {
        const t = ua(),
          n = e[1];
        (wt.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function ua() {
        const e = wt.lFrame,
          t = null === e ? null : e.child;
        return null === t ? ca(e) : t;
      }
      function ca(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function Ai() {
        const e = wt.lFrame;
        return (wt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e;
      }
      const Qa = Ai;
      function Ao() {
        const e = Ai();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function Qn() {
        return wt.lFrame.selectedIndex;
      }
      function Oi(e) {
        wt.lFrame.selectedIndex = e;
      }
      function Vt() {
        const e = wt.lFrame;
        return tn(e.tView, e.selectedIndex);
      }
      function yn() {
        wt.lFrame.currentNamespace = io;
      }
      function Ri(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const o = e.data[n].type.prototype,
            {
              ngAfterContentInit: u,
              ngAfterContentChecked: f,
              ngAfterViewInit: g,
              ngAfterViewChecked: C,
              ngOnDestroy: T,
            } = o;
          u && (e.contentHooks || (e.contentHooks = [])).push(-n, u),
            f &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, f),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, f)),
            g && (e.viewHooks || (e.viewHooks = [])).push(-n, g),
            C &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, C),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, C)),
            null != T && (e.destroyHooks || (e.destroyHooks = [])).push(n, T);
        }
      }
      function Bs(e, t, n) {
        Ro(e, t, 3, n);
      }
      function Vs(e, t, n, r) {
        (3 & e[2]) === n && Ro(e, t, n, r);
      }
      function Oo(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function Ro(e, t, n, r) {
        const o = null != r ? r : -1,
          u = t.length - 1;
        let f = 0;
        for (let g = void 0 !== r ? 65535 & e[18] : 0; g < u; g++)
          if ('number' == typeof t[g + 1]) {
            if (((f = t[g]), null != r && f >= r)) break;
          } else
            t[g] < 0 && (e[18] += 65536),
              (f < o || -1 == o) && (js(e, n, t, g), (e[18] = (4294901760 & e[18]) + g + 2)),
              g++;
      }
      function js(e, t, n, r) {
        const i = n[r] < 0,
          o = n[r + 1],
          f = e[i ? -n[r] : n[r]];
        if (i) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              o.call(f);
            } finally {
            }
          }
        } else
          try {
            o.call(f);
          } finally {
          }
      }
      class oo {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function lo(e, t, n) {
        const r = b(e);
        let i = 0;
        for (; i < n.length; ) {
          const o = n[i];
          if ('number' == typeof o) {
            if (0 !== o) break;
            i++;
            const u = n[i++],
              f = n[i++],
              g = n[i++];
            r ? e.setAttribute(t, f, g, u) : t.setAttributeNS(u, f, g);
          } else {
            const u = o,
              f = n[++i];
            ko(u)
              ? r && e.setProperty(t, u, f)
              : r
              ? e.setAttribute(t, u, f)
              : t.setAttribute(u, f),
              i++;
          }
        }
        return i;
      }
      function Fo(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function ko(e) {
        return 64 === e.charCodeAt(0);
      }
      function Us(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const i = t[r];
              'number' == typeof i
                ? (n = i)
                : 0 === n || Lo(e, n, i, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function Lo(e, t, n, r, i) {
        let o = 0,
          u = e.length;
        if (-1 === t) u = -1;
        else
          for (; o < e.length; ) {
            const f = e[o++];
            if ('number' == typeof f) {
              if (f === t) {
                u = -1;
                break;
              }
              if (f > t) {
                u = o - 1;
                break;
              }
            }
          }
        for (; o < e.length; ) {
          const f = e[o];
          if ('number' == typeof f) break;
          if (f === n) {
            if (null === r) return void (null !== i && (e[o + 1] = i));
            if (r === e[o + 1]) return void (e[o + 2] = i);
          }
          o++, null !== r && o++, null !== i && o++;
        }
        -1 !== u && (e.splice(u, 0, t), (o = u + 1)),
          e.splice(o++, 0, n),
          null !== r && e.splice(o++, 0, r),
          null !== i && e.splice(o++, 0, i);
      }
      function Pi(e) {
        return -1 !== e;
      }
      function gi(e) {
        return 32767 & e;
      }
      function ss(e, t) {
        let n = (function (e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let mi = !0;
      function os(e) {
        const t = mi;
        return (mi = e), t;
      }
      let w = 0;
      function A(e, t) {
        const n = $(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length), B(r.data, e), B(t, null), B(r.blueprint, null));
        const i = ge(e, t),
          o = e.injectorIndex;
        if (Pi(i)) {
          const u = gi(i),
            f = ss(i, t),
            g = f[1].data;
          for (let C = 0; C < 8; C++) t[o + C] = f[u + C] | g[u + C];
        }
        return (t[o + 8] = i), o;
      }
      function B(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function $(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function ge(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
        let n = 0,
          r = null,
          i = t;
        for (; null !== i; ) {
          const o = i[1],
            u = o.type;
          if (((r = 2 === u ? o.declTNode : 1 === u ? i[6] : null), null === r)) return -1;
          if ((n++, (i = i[15]), -1 !== r.injectorIndex)) return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function et(e, t, n) {
        !(function (e, t, n) {
          let r;
          'string' == typeof n ? (r = n.charCodeAt(0) || 0) : n.hasOwnProperty(Fn) && (r = n[Fn]),
            null == r && (r = n[Fn] = w++);
          const i = 255 & r;
          t.data[e + (i >> 5)] |= 1 << i;
        })(e, t, n);
      }
      function kt(e, t, n) {
        if (n & ft.Optional) return e;
        ot(t, 'NodeInjector');
      }
      function dn(e, t, n, r) {
        if ((n & ft.Optional && void 0 === r && (r = null), 0 == (n & (ft.Self | ft.Host)))) {
          const i = e[9],
            o = Y(void 0);
          try {
            return i ? i.get(t, r, n & ft.Optional) : Q(t, r, n & ft.Optional);
          } finally {
            Y(o);
          }
        }
        return kt(r, t, n);
      }
      function Wt(e, t, n, r = ft.Default, i) {
        if (null !== e) {
          const o = (function (e) {
            if ('string' == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(Fn) ? e[Fn] : void 0;
            return 'number' == typeof t ? (t >= 0 ? 255 & t : Ni) : t;
          })(n);
          if ('function' == typeof o) {
            if (!Ka(t, e, r)) return r & ft.Host ? kt(i, n, r) : dn(t, n, r, i);
            try {
              const u = o(r);
              if (null != u || r & ft.Optional) return u;
              ot(n);
            } finally {
              Qa();
            }
          } else if ('number' == typeof o) {
            let u = null,
              f = $(e, t),
              g = -1,
              C = r & ft.Host ? t[16][6] : null;
            for (
              (-1 === f || r & ft.SkipSelf) &&
              ((g = -1 === f ? ge(e, t) : t[f + 8]),
              -1 !== g && ef(r, !1) ? ((u = t[1]), (f = gi(g)), (t = ss(g, t))) : (f = -1));
              -1 !== f;

            ) {
              const T = t[1];
              if (ha(o, f, T.data)) {
                const O = yi(f, t, n, u, r, C);
                if (O !== ii) return O;
              }
              (g = t[f + 8]),
                -1 !== g && ef(r, t[1].data[f + 8] === C) && ha(o, f, t)
                  ? ((u = T), (f = gi(g)), (t = ss(g, t)))
                  : (f = -1);
            }
          }
        }
        return dn(t, n, r, i);
      }
      const ii = {};
      function Ni() {
        return new uo(Hn(), Le());
      }
      function yi(e, t, n, r, i, o) {
        const u = t[1],
          f = u.data[e + 8],
          T = Fi(
            f,
            u,
            n,
            null == r ? Dn(f) && mi : r != u && 0 != (3 & f.type),
            i & ft.Host && o === f,
          );
        return null !== T ? jr(t, u, T, f) : ii;
      }
      function Fi(e, t, n, r, i) {
        const o = e.providerIndexes,
          u = t.data,
          f = 1048575 & o,
          g = e.directiveStart,
          T = o >> 20,
          F = i ? f + T : e.directiveEnd;
        for (let U = r ? f : f + T; U < F; U++) {
          const K = u[U];
          if ((U < g && n === K) || (U >= g && K.type === n)) return U;
        }
        if (i) {
          const U = u[g];
          if (U && Ln(U) && U.type === n) return g;
        }
        return null;
      }
      function jr(e, t, n, r) {
        let i = e[n];
        const o = t.data;
        if (
          (function (e) {
            return e instanceof oo;
          })(i)
        ) {
          const u = i;
          u.resolving &&
            (function (e, t) {
              throw new Me('200', `Circular dependency in DI detected for ${e}`);
            })(Ze(o[n]));
          const f = os(u.canSeeViewProviders);
          u.resolving = !0;
          const g = u.injectImpl ? Y(u.injectImpl) : null;
          Ka(e, r, ft.Default);
          try {
            (i = e[n] = u.factory(void 0, o, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function (e, t, n) {
                  const { ngOnChanges: r, ngOnInit: i, ngDoCheck: o } = t.type.prototype;
                  if (r) {
                    const u = ti(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, u),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, u);
                  }
                  i && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, i),
                    o &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, o),
                      (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(e, o));
                })(n, o[n], t);
          } finally {
            null !== g && Y(g), os(f), (u.resolving = !1), Qa();
          }
        }
        return i;
      }
      function ha(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function ef(e, t) {
        return !(e & ft.Self || (e & ft.Host && t));
      }
      class uo {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n) {
          return Wt(this._tNode, this._lView, t, void 0, n);
        }
      }
      function qa(e) {
        return (function (e, t) {
          if ('class' === t) return e.classes;
          if ('style' === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let i = 0;
            for (; i < r; ) {
              const o = n[i];
              if (Fo(o)) break;
              if (0 === o) i += 2;
              else if ('number' == typeof o) for (i++; i < r && 'string' == typeof n[i]; ) i++;
              else {
                if (o === t) return n[i + 1];
                i += 2;
              }
            }
          }
          return null;
        })(Hn(), e);
      }
      const br = '__parameters__';
      function co(e, t, n) {
        return be(() => {
          const r = (function (e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const i in r) this[i] = r[i];
              }
            };
          })(t);
          function i(...o) {
            if (this instanceof i) return r.apply(this, o), this;
            const u = new i(...o);
            return (f.annotation = u), f;
            function f(g, C, T) {
              const O = g.hasOwnProperty(br)
                ? g[br]
                : Object.defineProperty(g, br, { value: [] })[br];
              for (; O.length <= T; ) O.push(null);
              return (O[T] = O[T] || []).push(u), g;
            }
          }
          return (
            n && (i.prototype = Object.create(n.prototype)),
            (i.prototype.ngMetadataName = e),
            (i.annotationCls = i),
            i
          );
        });
      }
      class Pn {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ɵprov = void 0),
            'number' == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Bt({
                  token: this,
                  providedIn: n.providedIn || 'root',
                  factory: n.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const rf = new Pn('AnalyzeForEntryComponents'),
        us = Function;
      function si(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r) ? (t === e && (t = e.slice(0, n)), si(r, t)) : t !== e && t.push(r);
        }
        return t;
      }
      function cs(e, t) {
        e.forEach((n) => (Array.isArray(n) ? cs(n, t) : t(n)));
      }
      function go(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function Ur(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function mo(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function Hr(e, t, n) {
        let r = vi(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function (e, t, n, r) {
                let i = e.length;
                if (i == t) e.push(n, r);
                else if (1 === i) e.push(r, e[0]), (e[0] = n);
                else {
                  for (i--, e.push(e[i - 1], e[i]); i > t; ) (e[i] = e[i - 2]), i--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function Ja(e, t) {
        const n = vi(e, t);
        if (n >= 0) return e[1 | n];
      }
      function vi(e, t) {
        return (function (e, t, n) {
          let r = 0,
            i = e.length >> n;
          for (; i !== r; ) {
            const o = r + ((i - r) >> 1),
              u = e[o << n];
            if (t === u) return o << n;
            u > t ? (i = o) : (r = o + 1);
          }
          return ~(i << n);
        })(e, t, 1);
      }
      const va = {},
        cu = '__NG_DI_FLAG__',
        Vo = 'ngTempTokenPath',
        mf = /\n/gm,
        el = '__source',
        du = ne({ provide: String, useValue: ne });
      let Vn;
      function jo(e) {
        const t = Vn;
        return (Vn = e), t;
      }
      function vf(e, t = ft.Default) {
        if (void 0 === Vn) throw new Error('inject() must be called from an injection context');
        return null === Vn ? Q(e, void 0, t) : Vn.get(e, t & ft.Optional ? null : void 0, t);
      }
      function pn(e, t = ft.Default) {
        return (at || vf)(H(e), t);
      }
      function Hs(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = H(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new Error('Arguments array must have arguments.');
            let i,
              o = ft.Default;
            for (let u = 0; u < r.length; u++) {
              const f = r[u],
                g = Uo(f);
              'number' == typeof g ? (-1 === g ? (i = f.token) : (o |= g)) : (i = f);
            }
            t.push(pn(i, o));
          } else t.push(pn(r));
        }
        return t;
      }
      function _a(e, t) {
        return (e[cu] = t), (e.prototype[cu] = t), e;
      }
      function Uo(e) {
        return e[cu];
      }
      function $s(e, t, n, r) {
        const i = e[Vo];
        throw (
          (t[el] && i.unshift(t[el]),
          (e.message = (function (e, t, n, r = null) {
            e = e && '\n' === e.charAt(0) && '\u0275' == e.charAt(1) ? e.substr(2) : e;
            let i = oe(t);
            if (Array.isArray(t)) i = t.map(oe).join(' -> ');
            else if ('object' == typeof t) {
              let o = [];
              for (let u in t)
                if (t.hasOwnProperty(u)) {
                  let f = t[u];
                  o.push(u + ':' + ('string' == typeof f ? JSON.stringify(f) : oe(f)));
                }
              i = `{${o.join(', ')}}`;
            }
            return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${e.replace(mf, '\n  ')}`;
          })('\n' + e.message, i, n, r)),
          (e.ngTokenPath = i),
          (e[Vo] = null),
          e)
        );
      }
      const zs = _a(
          co('Inject', (e) => ({ token: e })),
          -1,
        ),
        Li = _a(co('Optional'), 8),
        Ws = _a(co('SkipSelf'), 4);
      let rl;
      function zo(e) {
        var t;
        return (
          (null ===
            (t = (function () {
              if (void 0 === rl && ((rl = null), Fe.trustedTypes))
                try {
                  rl = Fe.trustedTypes.createPolicy('angular', {
                    createHTML: (e) => e,
                    createScript: (e) => e,
                    createScriptURL: (e) => e,
                  });
                } catch (e) {}
              return rl;
            })()) || void 0 === t
            ? void 0
            : t.createHTML(e)) || e
        );
      }
      class ds {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      class kc extends ds {
        getTypeName() {
          return 'HTML';
        }
      }
      class Df extends ds {
        getTypeName() {
          return 'Style';
        }
      }
      class Sf extends ds {
        getTypeName() {
          return 'Script';
        }
      }
      class Tf extends ds {
        getTypeName() {
          return 'URL';
        }
      }
      class ll extends ds {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      function Vi(e) {
        return e instanceof ds ? e.changingThisBreaksApplicationSecurity : e;
      }
      function fs(e, t) {
        const n = Lc(e);
        if (null != n && n !== t) {
          if ('ResourceURL' === n && 'URL' === t) return !0;
          throw new Error(`Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`);
        }
        return n === t;
      }
      function Lc(e) {
        return (e instanceof ds && e.getTypeName()) || null;
      }
      function ul(e) {
        return new kc(e);
      }
      function Bc(e) {
        return new Df(e);
      }
      function cl(e) {
        return new Sf(e);
      }
      function xf(e) {
        return new Tf(e);
      }
      function Vc(e) {
        return new ll(e);
      }
      class jc {
        constructor(t) {
          this.inertDocumentHelper = t;
        }
        getInertBodyElement(t) {
          t = '<body><remove></remove>' + t;
          try {
            const n = new window.DOMParser().parseFromString(zo(t), 'text/html').body;
            return null === n
              ? this.inertDocumentHelper.getInertBodyElement(t)
              : (n.removeChild(n.firstChild), n);
          } catch (n) {
            return null;
          }
        }
      }
      class _i {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument =
              this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
            null == this.inertDocument.body)
          ) {
            const n = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(n);
            const r = this.inertDocument.createElement('body');
            n.appendChild(r);
          }
        }
        getInertBodyElement(t) {
          const n = this.inertDocument.createElement('template');
          if ('content' in n) return (n.innerHTML = zo(t)), n;
          const r = this.inertDocument.createElement('body');
          return (
            (r.innerHTML = zo(t)), this.defaultDoc.documentMode && this.stripCustomNsAttrs(r), r
          );
        }
        stripCustomNsAttrs(t) {
          const n = t.attributes;
          for (let i = n.length - 1; 0 < i; i--) {
            const u = n.item(i).name;
            ('xmlns:ns1' === u || 0 === u.indexOf('ns1:')) && t.removeAttribute(u);
          }
          let r = t.firstChild;
          for (; r; )
            r.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(r), (r = r.nextSibling);
        }
      }
      const If = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        Af =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Wo(e) {
        return (e = String(e)).match(If) || e.match(Af) ? e : 'unsafe:' + e;
      }
      function qn(e) {
        const t = {};
        for (const n of e.split(',')) t[n] = !0;
        return t;
      }
      function ji(...e) {
        const t = {};
        for (const n of e) for (const r in n) n.hasOwnProperty(r) && (t[r] = !0);
        return t;
      }
      const Hc = qn('area,br,col,hr,img,wbr'),
        $c = qn('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        zc = qn('rp,rt'),
        Ea = ji(
          Hc,
          ji(
            $c,
            qn(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul',
            ),
          ),
          ji(
            zc,
            qn(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video',
            ),
          ),
          ji(zc, $c),
        ),
        yu = qn('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        vu = qn('srcset'),
        Wc = ji(
          yu,
          vu,
          qn(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width',
          ),
          qn(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext',
          ),
        ),
        Gc = qn('script,style,template');
      class Yc {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let n = t.firstChild,
            r = !0;
          for (; n; )
            if (
              (n.nodeType === Node.ELEMENT_NODE
                ? (r = this.startElement(n))
                : n.nodeType === Node.TEXT_NODE
                ? this.chars(n.nodeValue)
                : (this.sanitizedSomething = !0),
              r && n.firstChild)
            )
              n = n.firstChild;
            else
              for (; n; ) {
                n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
                let i = this.checkClobberedElement(n, n.nextSibling);
                if (i) {
                  n = i;
                  break;
                }
                n = this.checkClobberedElement(n, n.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const n = t.nodeName.toLowerCase();
          if (!Ea.hasOwnProperty(n)) return (this.sanitizedSomething = !0), !Gc.hasOwnProperty(n);
          this.buf.push('<'), this.buf.push(n);
          const r = t.attributes;
          for (let i = 0; i < r.length; i++) {
            const o = r.item(i),
              u = o.name,
              f = u.toLowerCase();
            if (!Wc.hasOwnProperty(f)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let g = o.value;
            yu[f] && (g = Wo(g)),
              vu[f] &&
                ((e = g),
                (g = (e = String(e))
                  .split(',')
                  .map((t) => Wo(t.trim()))
                  .join(', '))),
              this.buf.push(' ', u, '="', _u(g), '"');
          }
          var e;
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const n = t.nodeName.toLowerCase();
          Ea.hasOwnProperty(n) &&
            !Hc.hasOwnProperty(n) &&
            (this.buf.push('</'), this.buf.push(n), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(_u(t));
        }
        checkClobberedElement(t, n) {
          if (
            n &&
            (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) ===
              Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(
              `Failed to sanitize html because the element is clobbered: ${t.outerHTML}`,
            );
          return n;
        }
      }
      const Cg = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        Pf = /([^\#-~ |!])/g;
      function _u(e) {
        return e
          .replace(/&/g, '&amp;')
          .replace(Cg, function (t) {
            return (
              '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';'
            );
          })
          .replace(Pf, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let fl;
      function Kc(e, t) {
        let n = null;
        try {
          fl =
            fl ||
            (function (e) {
              const t = new _i(e);
              return (function () {
                try {
                  return !!new window.DOMParser().parseFromString(zo(''), 'text/html');
                } catch (e) {
                  return !1;
                }
              })()
                ? new jc(t)
                : t;
            })(e);
          let r = t ? String(t) : '';
          n = fl.getInertBodyElement(r);
          let i = 5,
            o = r;
          do {
            if (0 === i) throw new Error('Failed to sanitize html because the input is unstable');
            i--, (r = o), (o = n.innerHTML), (n = fl.getInertBodyElement(r));
          } while (r !== o);
          return zo(new Yc().sanitizeChildren(Cu(n) || n));
        } finally {
          if (n) {
            const r = Cu(n) || n;
            for (; r.firstChild; ) r.removeChild(r.firstChild);
          }
        }
      }
      function Cu(e) {
        return 'content' in e &&
          (function (e) {
            return e.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === e.nodeName;
          })(e)
          ? e.content
          : null;
      }
      var Nn = (() => (
        ((Nn = Nn || {})[(Nn.NONE = 0)] = 'NONE'),
        (Nn[(Nn.HTML = 1)] = 'HTML'),
        (Nn[(Nn.STYLE = 2)] = 'STYLE'),
        (Nn[(Nn.SCRIPT = 3)] = 'SCRIPT'),
        (Nn[(Nn.URL = 4)] = 'URL'),
        (Nn[(Nn.RESOURCE_URL = 5)] = 'RESOURCE_URL'),
        Nn
      ))();
      function wu(e) {
        const t = (function () {
          const e = Le();
          return e && e[12];
        })();
        return t ? t.sanitize(Nn.URL, e) || '' : fs(e, 'URL') ? Vi(e) : Wo(Ue(e));
      }
      const hl = '__ngContext__';
      function hr(e, t) {
        e[hl] = t;
      }
      function bu(e) {
        const t = (function (e) {
          return e[hl] || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function Tu(e) {
        return e.ngOriginalError;
      }
      function Wf(e, ...t) {
        e.error(...t);
      }
      class Yo {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t),
            r = this._findContext(t),
            i = ((e = t) && e.ngErrorLogger) || Wf;
          var e;
          i(this._console, 'ERROR', t),
            n && i(this._console, 'ORIGINAL ERROR', n),
            r && i(this._console, 'ERROR CONTEXT', r);
        }
        _findContext(t) {
          return t ? t.ngDebugContext || this._findContext(Tu(t)) : null;
        }
        _findOriginalError(t) {
          let n = t && Tu(t);
          for (; n && Tu(n); ) n = Tu(n);
          return n || null;
        }
      }
      const qf = (() =>
        (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(
          Fe,
        ))();
      function Mu(e) {
        return e.ownerDocument.defaultView;
      }
      function gs(e) {
        return e instanceof Function ? e() : e;
      }
      var ms = (() => (
        ((ms = ms || {})[(ms.Important = 1)] = 'Important'),
        (ms[(ms.DashCase = 2)] = 'DashCase'),
        ms
      ))();
      function nd(e, t) {
        return undefined(e, t);
      }
      function gl(e) {
        const t = e[3];
        return lr(t) ? t[3] : t;
      }
      function rd(e) {
        return Nu(e[13]);
      }
      function vo(e) {
        return Nu(e[4]);
      }
      function Nu(e) {
        for (; null !== e && !lr(e); ) e = e[4];
        return e;
      }
      function Ui(e, t, n, r, i) {
        if (null != r) {
          let o,
            u = !1;
          lr(r) ? (o = r) : Tr(r) && ((u = !0), (r = r[0]));
          const f = V(r);
          0 === e && null !== n
            ? null == i
              ? ld(t, n, f)
              : ys(t, n, f, i || null, !0)
            : 1 === e && null !== n
            ? ys(t, n, f, i || null, !0)
            : 2 === e
            ? (function (e, t, n) {
                const r = Pa(e, t);
                r &&
                  (function (e, t, n, r) {
                    b(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, f, u)
            : 3 === e && t.destroyNode(f),
            null != o &&
              (function (e, t, n, r, i) {
                const o = n[7];
                o !== V(n) && Ui(t, e, r, o, i);
                for (let f = 10; f < n.length; f++) {
                  const g = n[f];
                  vs(g[1], g, e, t, r, o);
                }
              })(t, e, o, n, i);
        }
      }
      function Co(e, t, n) {
        return b(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function Oa(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          i = t[3];
        1024 & t[2] && ((t[2] &= -1025), di(i, -1)), n.splice(r, 1);
      }
      function oi(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const i = r[17];
          null !== i && i !== e && Oa(i, r), t > 0 && (e[n - 1][4] = r[4]);
          const o = Ur(e, 10 + t);
          !(function (e, t) {
            vs(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const u = o[19];
          null !== u && u.detachView(o[1]), (r[3] = null), (r[4] = null), (r[2] &= -129);
        }
        return r;
      }
      function Ko(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          b(n) && n.destroyNode && vs(e, t, n, 3, null, null),
            (function (e) {
              let t = e[13];
              if (!t) return Ra(e[1], e);
              for (; t; ) {
                let n = null;
                if (Tr(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; ) Tr(t) && Ra(t[1], t), (t = t[3]);
                  null === t && (t = e), Tr(t) && Ra(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Ra(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function (e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const i = t[n[r]];
                  if (!(i instanceof oo)) {
                    const o = n[r + 1];
                    if (Array.isArray(o))
                      for (let u = 0; u < o.length; u += 2) {
                        const f = i[o[u]],
                          g = o[u + 1];
                        try {
                          g.call(f);
                        } finally {
                        }
                      }
                    else
                      try {
                        o.call(i);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function (e, t) {
              const n = e.cleanup,
                r = t[7];
              let i = -1;
              if (null !== n)
                for (let o = 0; o < n.length - 1; o += 2)
                  if ('string' == typeof n[o]) {
                    const u = n[o + 1],
                      f = 'function' == typeof u ? u(t) : V(t[u]),
                      g = r[(i = n[o + 2])],
                      C = n[o + 3];
                    'boolean' == typeof C
                      ? f.removeEventListener(n[o], g, C)
                      : C >= 0
                      ? r[(i = C)]()
                      : r[(i = -C)].unsubscribe(),
                      (o += 2);
                  } else {
                    const u = r[(i = n[o + 1])];
                    n[o].call(u);
                  }
              if (null !== r) {
                for (let o = i + 1; o < r.length; o++) r[o]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && b(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && lr(t[3])) {
            n !== t[3] && Oa(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
        }
      }
      function ml(e, t, n) {
        return (function (e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const i = e.data[r.directiveStart].encapsulation;
            if (i === Pe.None || i === Pe.Emulated) return null;
          }
          return Pt(r, n);
        })(e, t.parent, n);
      }
      function ys(e, t, n, r, i) {
        b(e) ? e.insertBefore(t, n, r, i) : t.insertBefore(n, r, i);
      }
      function ld(e, t, n) {
        b(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function ih(e, t, n, r, i) {
        null !== r ? ys(e, t, n, r, i) : ld(e, t, n);
      }
      function Pa(e, t) {
        return b(e) ? e.parentNode(t) : t.parentNode;
      }
      function cd(e, t, n) {
        return dd(e, t, n);
      }
      let dd = function (e, t, n) {
        return 40 & e.type ? Pt(e, n) : null;
      };
      function vl(e, t, n, r) {
        const i = ml(e, r, t),
          o = t[11],
          f = cd(r.parent || t[6], r, t);
        if (null != i)
          if (Array.isArray(n)) for (let g = 0; g < n.length; g++) ih(o, i, n[g], f, !1);
          else ih(o, i, n, f, !1);
      }
      function _l(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return Pt(t, e);
          if (4 & n) return hd(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return _l(e, r);
            {
              const i = e[t.index];
              return lr(i) ? hd(-1, i) : V(i);
            }
          }
          if (32 & n) return nd(t, e)() || V(e[t.index]);
          {
            const r = fd(e, t);
            return null !== r ? (Array.isArray(r) ? r[0] : _l(gl(e[16]), r)) : _l(e, t.next);
          }
        }
        return null;
      }
      function fd(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function hd(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            i = r[1].firstChild;
          if (null !== i) return _l(r, i);
        }
        return t[7];
      }
      function Lu(e, t, n, r, i, o, u) {
        for (; null != n; ) {
          const f = r[n.index],
            g = n.type;
          if ((u && 0 === t && (f && hr(V(f), r), (n.flags |= 4)), 64 != (64 & n.flags)))
            if (8 & g) Lu(e, t, n.child, r, i, o, !1), Ui(t, e, i, f, o);
            else if (32 & g) {
              const C = nd(n, r);
              let T;
              for (; (T = C()); ) Ui(t, e, i, T, o);
              Ui(t, e, i, f, o);
            } else 16 & g ? Bu(e, t, r, n, i, o) : Ui(t, e, i, f, o);
          n = u ? n.projectionNext : n.next;
        }
      }
      function vs(e, t, n, r, i, o) {
        Lu(n, r, e.firstChild, t, i, o, !1);
      }
      function Bu(e, t, n, r, i, o) {
        const u = n[16],
          g = u[6].projection[r.projection];
        if (Array.isArray(g)) for (let C = 0; C < g.length; C++) Ui(t, e, i, g[C], o);
        else Lu(e, t, g, u[3], i, o, !0);
      }
      function gd(e, t, n) {
        b(e) ? e.setAttribute(t, 'style', n) : (t.style.cssText = n);
      }
      function d(e, t, n) {
        b(e)
          ? '' === n
            ? e.removeAttribute(t, 'class')
            : e.setAttribute(t, 'class', n)
          : (t.className = n);
      }
      function s(e, t, n) {
        let r = e.length;
        for (;;) {
          const i = e.indexOf(t, n);
          if (-1 === i) return i;
          if (0 === i || e.charCodeAt(i - 1) <= 32) {
            const o = t.length;
            if (i + o === r || e.charCodeAt(i + o) <= 32) return i;
          }
          n = i + 1;
        }
      }
      const l = 'ng-template';
      function c(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let i = e[r++];
          if (n && 'class' === i) {
            if (((i = e[r]), -1 !== s(i.toLowerCase(), t, 0))) return !0;
          } else if (1 === i) {
            for (; r < e.length && 'string' == typeof (i = e[r++]); )
              if (i.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function h(e) {
        return 4 === e.type && e.value !== l;
      }
      function v(e, t, n) {
        return t === (4 !== e.type || n ? e.value : l);
      }
      function D(e, t, n) {
        let r = 4;
        const i = e.attrs || [],
          o = (function (e) {
            for (let t = 0; t < e.length; t++) if (Fo(e[t])) return t;
            return e.length;
          })(i);
        let u = !1;
        for (let f = 0; f < t.length; f++) {
          const g = t[f];
          if ('number' != typeof g) {
            if (!u)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)), ('' !== g && !v(e, g, n)) || ('' === g && 1 === t.length))
                ) {
                  if (x(r)) return !1;
                  u = !0;
                }
              } else {
                const C = 8 & r ? g : t[++f];
                if (8 & r && null !== e.attrs) {
                  if (!c(e.attrs, C, n)) {
                    if (x(r)) return !1;
                    u = !0;
                  }
                  continue;
                }
                const O = M(8 & r ? 'class' : g, i, h(e), n);
                if (-1 === O) {
                  if (x(r)) return !1;
                  u = !0;
                  continue;
                }
                if ('' !== C) {
                  let F;
                  F = O > o ? '' : i[O + 1].toLowerCase();
                  const U = 8 & r ? F : null;
                  if ((U && -1 !== s(U, C, 0)) || (2 & r && C !== F)) {
                    if (x(r)) return !1;
                    u = !0;
                  }
                }
              }
          } else {
            if (!u && !x(r) && !x(g)) return !1;
            if (u && x(g)) continue;
            (u = !1), (r = g | (1 & r));
          }
        }
        return x(r) || u;
      }
      function x(e) {
        return 0 == (1 & e);
      }
      function M(e, t, n, r) {
        if (null === t) return -1;
        let i = 0;
        if (r || !n) {
          let o = !1;
          for (; i < t.length; ) {
            const u = t[i];
            if (u === e) return i;
            if (3 === u || 6 === u) o = !0;
            else {
              if (1 === u || 2 === u) {
                let f = t[++i];
                for (; 'string' == typeof f; ) f = t[++i];
                continue;
              }
              if (4 === u) break;
              if (0 === u) {
                i += 4;
                continue;
              }
            }
            i += o ? 1 : 2;
          }
          return -1;
        }
        return (function (e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ('number' == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function N(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (D(e, t[r], n)) return !0;
        return !1;
      }
      function te(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let i = 0; i < e.length; i++) if (e[i] !== r[i]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function q(e, t) {
        return e ? ':not(' + t.trim() + ')' : t;
      }
      function _e(e) {
        let t = e[0],
          n = 1,
          r = 2,
          i = '',
          o = !1;
        for (; n < e.length; ) {
          let u = e[n];
          if ('string' == typeof u)
            if (2 & r) {
              const f = e[++n];
              i += '[' + u + (f.length > 0 ? '="' + f + '"' : '') + ']';
            } else 8 & r ? (i += '.' + u) : 4 & r && (i += ' ' + u);
          else '' !== i && !x(u) && ((t += q(o, i)), (i = '')), (r = u), (o = o || !x(r));
          n++;
        }
        return '' !== i && (t += q(o, i)), t;
      }
      const ce = {};
      function de(e) {
        ve(Yt(), Le(), Qn() + e, hi());
      }
      function ve(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const o = e.preOrderCheckHooks;
            null !== o && Bs(t, o, n);
          } else {
            const o = e.preOrderHooks;
            null !== o && Vs(t, o, 0, n);
          }
        Oi(n);
      }
      function Ae(e, t) {
        return (e << 17) | (t << 2);
      }
      function Be(e) {
        return (e >> 17) & 32767;
      }
      function ht(e) {
        return 2 | e;
      }
      function Lt(e) {
        return (131068 & e) >> 2;
      }
      function an(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function vn(e) {
        return 1 | e;
      }
      function Fg(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const i = n[r],
              o = n[r + 1];
            if (-1 !== o) {
              const u = e.data[o];
              ri(i), u.contentQueries(2, t[o], o);
            }
          }
      }
      function ju(e, t, n, r, i, o, u, f, g, C) {
        const T = t.blueprint.slice();
        return (
          (T[0] = i),
          (T[2] = 140 | r),
          Kn(T),
          (T[3] = T[15] = e),
          (T[8] = n),
          (T[10] = u || (e && e[10])),
          (T[11] = f || (e && e[11])),
          (T[12] = g || (e && e[12]) || null),
          (T[9] = C || (e && e[9]) || null),
          (T[6] = o),
          (T[16] = 2 == t.type ? e[16] : T),
          T
        );
      }
      function Cl(e, t, n, r, i) {
        let o = e.data[t];
        if (null === o)
          (o = (function (e, t, n, r, i) {
            const o = eu(),
              u = aa(),
              g = (e.data[t] = (function (e, t, n, r, i, o) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: i,
                  attrs: o,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, u ? o : o && o.parent, n, t, r, i));
            return (
              null === e.firstChild && (e.firstChild = g),
              null !== o &&
                (u
                  ? null == o.child && null !== g.parent && (o.child = g)
                  : null === o.next && (o.next = g)),
              g
            );
          })(e, t, n, r, i)),
            wt.lFrame.inI18n && (o.flags |= 64);
        else if (64 & o.type) {
          (o.type = n), (o.value = r), (o.attrs = i);
          const u = (function () {
            const e = wt.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          o.injectorIndex = null === u ? -1 : u.injectorIndex;
        }
        return fi(o, !0), o;
      }
      function wl(e, t, n, r) {
        if (0 === n) return -1;
        const i = t.length;
        for (let o = 0; o < n; o++) t.push(r), e.blueprint.push(r), e.data.push(null);
        return i;
      }
      function Uu(e, t, n) {
        Fs(t);
        try {
          const r = e.viewQuery;
          null !== r && Dh(1, r, n);
          const i = e.template;
          null !== i && kg(e, t, i, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && Fg(e, t),
            e.staticViewQueries && Dh(2, e.viewQuery, n);
          const o = e.components;
          null !== o &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) dC(e, t[n]);
            })(t, o);
        } catch (r) {
          throw (e.firstCreatePass && ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)), r);
        } finally {
          (t[2] &= -5), Ao();
        }
      }
      function bl(e, t, n, r) {
        const i = t[2];
        if (256 == (256 & i)) return;
        Fs(t);
        const o = hi();
        try {
          Kn(t),
            (function (e) {
              wt.lFrame.bindingIndex = e;
            })(e.bindingStartIndex),
            null !== n && kg(e, t, n, 2, r);
          const u = 3 == (3 & i);
          if (!o)
            if (u) {
              const C = e.preOrderCheckHooks;
              null !== C && Bs(t, C, null);
            } else {
              const C = e.preOrderHooks;
              null !== C && Vs(t, C, 0, null), Oo(t, 0);
            }
          if (
            ((function (e) {
              for (let t = rd(e); null !== t; t = vo(t)) {
                if (!t[2]) continue;
                const n = t[9];
                for (let r = 0; r < n.length; r++) {
                  const i = n[r],
                    o = i[3];
                  0 == (1024 & i[2]) && di(o, 1), (i[2] |= 1024);
                }
              }
            })(t),
            (function (e) {
              for (let t = rd(e); null !== t; t = vo(t))
                for (let n = 10; n < t.length; n++) {
                  const r = t[n],
                    i = r[1];
                  Bn(r) && bl(i, r, i.template, r[8]);
                }
            })(t),
            null !== e.contentQueries && Fg(e, t),
            !o)
          )
            if (u) {
              const C = e.contentCheckHooks;
              null !== C && Bs(t, C);
            } else {
              const C = e.contentHooks;
              null !== C && Vs(t, C, 1), Oo(t, 1);
            }
          !(function (e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const i = n[r];
                  if (i < 0) Oi(~i);
                  else {
                    const o = i,
                      u = n[++r],
                      f = n[++r];
                    Ns(u, o), f(2, t[o]);
                  }
                }
              } finally {
                Oi(-1);
              }
          })(e, t);
          const f = e.components;
          null !== f &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) cC(e, t[n]);
            })(t, f);
          const g = e.viewQuery;
          if ((null !== g && Dh(2, g, r), !o))
            if (u) {
              const C = e.viewCheckHooks;
              null !== C && Bs(t, C);
            } else {
              const C = e.viewHooks;
              null !== C && Vs(t, C, 2), Oo(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            o || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), di(t[3], -1));
        } finally {
          Ao();
        }
      }
      function W0(e, t, n, r) {
        const i = t[10],
          o = !hi(),
          u = Qt(t);
        try {
          o && !u && i.begin && i.begin(), u && Uu(e, t, r), bl(e, t, n, r);
        } finally {
          o && !u && i.end && i.end();
        }
      }
      function kg(e, t, n, r, i) {
        const o = Qn(),
          u = 2 & r;
        try {
          Oi(-1), u && t.length > 20 && ve(e, t, 20, hi()), n(r, i);
        } finally {
          Oi(o);
        }
      }
      function mh(e, t, n) {
        !so() ||
          ((function (e, t, n, r) {
            const i = n.directiveStart,
              o = n.directiveEnd;
            e.firstCreatePass || A(n, t), hr(r, t);
            const u = n.initialInputs;
            for (let f = i; f < o; f++) {
              const g = e.data[f],
                C = Ln(g);
              C && sC(t, n, g);
              const T = jr(t, e, f, n);
              hr(T, t), null !== u && oC(0, f - i, T, g, 0, u), C && (It(n.index, t)[8] = T);
            }
          })(e, t, n, Pt(n, t)),
          128 == (128 & n.flags) &&
            (function (e, t, n) {
              const r = n.directiveStart,
                i = n.directiveEnd,
                u = n.index,
                f = wt.lFrame.currentDirectiveIndex;
              try {
                Oi(u);
                for (let g = r; g < i; g++) {
                  const C = e.data[g],
                    T = t[g];
                  Io(g),
                    (null !== C.hostBindings || 0 !== C.hostVars || null !== C.hostAttrs) &&
                      Wg(C, T);
                }
              } finally {
                Oi(-1), Io(f);
              }
            })(e, t, n));
      }
      function yh(e, t, n = Pt) {
        const r = t.localNames;
        if (null !== r) {
          let i = t.index + 1;
          for (let o = 0; o < r.length; o += 2) {
            const u = r[o + 1],
              f = -1 === u ? n(t, e) : e[u];
            e[i++] = f;
          }
        }
      }
      function Bg(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = md(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts,
            ))
          : t;
      }
      function md(e, t, n, r, i, o, u, f, g, C) {
        const T = 20 + r,
          O = T + i,
          F = (function (e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : ce);
            return n;
          })(T, O),
          U = 'function' == typeof C ? C() : C;
        return (F[1] = {
          type: e,
          blueprint: F,
          template: n,
          queries: null,
          viewQuery: f,
          declTNode: t,
          data: F.slice().fill(null, T),
          bindingStartIndex: T,
          expandoStartIndex: O,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof o ? o() : o,
          pipeRegistry: 'function' == typeof u ? u() : u,
          firstChild: null,
          schemas: g,
          consts: U,
          incompleteFirstPass: !1,
        });
      }
      function Ug(e, t, n, r) {
        const i = qg(t);
        null === n ? i.push(r) : (i.push(n), e.firstCreatePass && Jg(e).push(r, i.length - 1));
      }
      function Hg(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const i = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(t, i) : (n[r] = [t, i]);
          }
        return n;
      }
      function bi(e, t, n, r, i, o, u, f) {
        const g = Pt(t, n);
        let T,
          C = t.inputs;
        !f && null != C && (T = C[r])
          ? (tm(e, n, T, r, i),
            Dn(t) &&
              (function (e, t) {
                const n = It(t, e);
                16 & n[2] || (n[2] |= 64);
              })(n, t.index))
          : 3 & t.type &&
            ((r = (function (e) {
              return 'class' === e
                ? 'className'
                : 'for' === e
                ? 'htmlFor'
                : 'formaction' === e
                ? 'formAction'
                : 'innerHtml' === e
                ? 'innerHTML'
                : 'readonly' === e
                ? 'readOnly'
                : 'tabindex' === e
                ? 'tabIndex'
                : e;
            })(r)),
            (i = null != u ? u(i, t.value || '', r) : i),
            b(o)
              ? o.setProperty(g, r, i)
              : ko(r) || (g.setProperty ? g.setProperty(r, i) : (g[r] = i)));
      }
      function vh(e, t, n, r) {
        let i = !1;
        if (so()) {
          const o = (function (e, t, n) {
              const r = e.directiveRegistry;
              let i = null;
              if (r)
                for (let o = 0; o < r.length; o++) {
                  const u = r[o];
                  N(n, u.selectors, !1) &&
                    (i || (i = []),
                    et(A(n, t), e, u.type),
                    Ln(u) ? (Gg(e, n), i.unshift(u)) : i.push(u));
                }
              return i;
            })(e, t, n),
            u = null === r ? null : { '': -1 };
          if (null !== o) {
            (i = !0), Yg(n, e.data.length, o.length);
            for (let T = 0; T < o.length; T++) {
              const O = o[T];
              O.providersResolver && O.providersResolver(O);
            }
            let f = !1,
              g = !1,
              C = wl(e, t, o.length, null);
            for (let T = 0; T < o.length; T++) {
              const O = o[T];
              (n.mergedAttrs = Us(n.mergedAttrs, O.hostAttrs)),
                Kg(e, n, t, C, O),
                iC(C, O, u),
                null !== O.contentQueries && (n.flags |= 8),
                (null !== O.hostBindings || null !== O.hostAttrs || 0 !== O.hostVars) &&
                  (n.flags |= 128);
              const F = O.type.prototype;
              !f &&
                (F.ngOnChanges || F.ngOnInit || F.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index), (f = !0)),
                !g &&
                  (F.ngOnChanges || F.ngDoCheck) &&
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(n.index), (g = !0)),
                C++;
            }
            !(function (e, t) {
              const r = t.directiveEnd,
                i = e.data,
                o = t.attrs,
                u = [];
              let f = null,
                g = null;
              for (let C = t.directiveStart; C < r; C++) {
                const T = i[C],
                  O = T.inputs,
                  F = null === o || h(t) ? null : aC(O, o);
                u.push(F), (f = Hg(O, C, f)), (g = Hg(T.outputs, C, g));
              }
              null !== f &&
                (f.hasOwnProperty('class') && (t.flags |= 16),
                f.hasOwnProperty('style') && (t.flags |= 32)),
                (t.initialInputs = u),
                (t.inputs = f),
                (t.outputs = g);
            })(e, n);
          }
          u &&
            (function (e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let i = 0; i < t.length; i += 2) {
                  const o = n[t[i + 1]];
                  if (null == o) throw new Me('301', `Export of name '${t[i + 1]}' not found!`);
                  r.push(t[i], o);
                }
              }
            })(n, r, u);
        }
        return (n.mergedAttrs = Us(n.mergedAttrs, n.attrs)), i;
      }
      function zg(e, t, n, r, i, o) {
        const u = o.hostBindings;
        if (u) {
          let f = e.hostBindingOpCodes;
          null === f && (f = e.hostBindingOpCodes = []);
          const g = ~t.index;
          (function (e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ('number' == typeof n && n < 0) return n;
            }
            return 0;
          })(f) != g && f.push(g),
            f.push(r, i, u);
        }
      }
      function Wg(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Gg(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function iC(e, t, n) {
        if (n) {
          if (t.exportAs) for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          Ln(t) && (n[''] = e);
        }
      }
      function Yg(e, t, n) {
        (e.flags |= 1), (e.directiveStart = t), (e.directiveEnd = t + n), (e.providerIndexes = t);
      }
      function Kg(e, t, n, r, i) {
        e.data[r] = i;
        const o = i.factory || (i.factory = ei(i.type)),
          u = new oo(o, Ln(i), null);
        (e.blueprint[r] = u), (n[r] = u), zg(e, t, 0, r, wl(e, n, i.hostVars, ce), i);
      }
      function sC(e, t, n) {
        const r = Pt(t, e),
          i = Bg(n),
          o = e[10],
          u = yd(
            e,
            ju(e, i, null, n.onPush ? 64 : 16, r, t, o, o.createRenderer(r, n), null, null),
          );
        e[t.index] = u;
      }
      function Ks(e, t, n, r, i, o) {
        const u = Pt(e, t);
        !(function (e, t, n, r, i, o, u) {
          if (null == o) b(e) ? e.removeAttribute(t, i, n) : t.removeAttribute(i);
          else {
            const f = null == u ? Ue(o) : u(o, r || '', i);
            b(e)
              ? e.setAttribute(t, i, f, n)
              : n
              ? t.setAttributeNS(n, i, f)
              : t.setAttribute(i, f);
          }
        })(t[11], u, o, e.value, n, r, i);
      }
      function oC(e, t, n, r, i, o) {
        const u = o[t];
        if (null !== u) {
          const f = r.setInput;
          for (let g = 0; g < u.length; ) {
            const C = u[g++],
              T = u[g++],
              O = u[g++];
            null !== f ? r.setInput(n, O, C, T) : (n[T] = O);
          }
        }
      }
      function aC(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const i = t[r];
          if (0 !== i)
            if (5 !== i) {
              if ('number' == typeof i) break;
              e.hasOwnProperty(i) && (null === n && (n = []), n.push(i, e[i], t[r + 1])), (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Qg(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function cC(e, t) {
        const n = It(t, e);
        if (Bn(n)) {
          const r = n[1];
          80 & n[2] ? bl(r, n, r.template, n[8]) : n[5] > 0 && Ch(n);
        }
      }
      function Ch(e) {
        for (let r = rd(e); null !== r; r = vo(r))
          for (let i = 10; i < r.length; i++) {
            const o = r[i];
            if (1024 & o[2]) {
              const u = o[1];
              bl(u, o, u.template, o[8]);
            } else o[5] > 0 && Ch(o);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const i = It(n[r], e);
            Bn(i) && i[5] > 0 && Ch(i);
          }
      }
      function dC(e, t) {
        const n = It(t, e),
          r = n[1];
        (function (e, t) {
          for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
        })(r, n),
          Uu(r, n, n[8]);
      }
      function yd(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function wh(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = gl(e);
          if (cr(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Eh(e, t, n) {
        const r = t[10];
        r.begin && r.begin();
        try {
          bl(e, t, e.template, n);
        } catch (i) {
          throw (em(t, i), i);
        } finally {
          r.end && r.end();
        }
      }
      function Zg(e) {
        !(function (e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = bu(n),
              i = r[1];
            W0(i, r, i.template, n);
          }
        })(e[8]);
      }
      function Dh(e, t, n) {
        ri(0), t(e, n);
      }
      const mC = (() => Promise.resolve(null))();
      function qg(e) {
        return e[7] || (e[7] = []);
      }
      function Jg(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function em(e, t) {
        const n = e[9],
          r = n ? n.get(Yo, null) : null;
        r && r.handleError(t);
      }
      function tm(e, t, n, r, i) {
        for (let o = 0; o < n.length; ) {
          const u = n[o++],
            f = n[o++],
            g = t[u],
            C = e.data[u];
          null !== C.setInput ? C.setInput(g, i, r, f) : (g[f] = i);
        }
      }
      function wo(e, t, n) {
        const r = lt(t, e);
        !(function (e, t, n) {
          b(e) ? e.setValue(t, n) : (t.textContent = n);
        })(e[11], r, n);
      }
      function vd(e, t, n) {
        let r = n ? e.styles : null,
          i = n ? e.classes : null,
          o = 0;
        if (null !== t)
          for (let u = 0; u < t.length; u++) {
            const f = t[u];
            'number' == typeof f
              ? (o = f)
              : 1 == o
              ? (i = we(i, f))
              : 2 == o && (r = we(r, f + ': ' + t[++u] + ';'));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = i) : (e.classesWithoutHost = i);
      }
      const El = new Pn('INJECTOR', -1);
      class nm {
        get(t, n = va) {
          if (n === va) {
            const r = new Error(`NullInjectorError: No provider for ${oe(t)}!`);
            throw ((r.name = 'NullInjectorError'), r);
          }
          return n;
        }
      }
      const Hu = new Pn('Set Injector scope.'),
        $u = {},
        _C = {};
      let Sh;
      function rm() {
        return void 0 === Sh && (Sh = new nm()), Sh;
      }
      function im(e, t = null, n = null, r) {
        return new wC(e, n, t || rm(), r);
      }
      class wC {
        constructor(t, n, r, i = null) {
          (this.parent = r),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const o = [];
          n && cs(n, (f) => this.processProvider(f, t, n)),
            cs([t], (f) => this.processInjectorType(f, [], o)),
            this.records.set(El, Dl(void 0, this));
          const u = this.records.get(Hu);
          (this.scope = null != u ? u.value : null),
            (this.source = i || ('object' == typeof t ? null : oe(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
          }
        }
        get(t, n = va, r = ft.Default) {
          this.assertNotDestroyed();
          const i = jo(this),
            o = Y(void 0);
          try {
            if (!(r & ft.SkipSelf)) {
              let f = this.records.get(t);
              if (void 0 === f) {
                const g =
                  ('function' == typeof (e = t) || ('object' == typeof e && e instanceof Pn)) &&
                  nn(t);
                (f = g && this.injectableDefInScope(g) ? Dl(Th(t), $u) : null),
                  this.records.set(t, f);
              }
              if (null != f) return this.hydrate(t, f);
            }
            return (r & ft.Self ? rm() : this.parent).get(
              t,
              (n = r & ft.Optional && n === va ? null : n),
            );
          } catch (u) {
            if ('NullInjectorError' === u.name) {
              if (((u[Vo] = u[Vo] || []).unshift(oe(t)), i)) throw u;
              return $s(u, t, 'R3InjectorError', this.source);
            }
            throw u;
          } finally {
            Y(o), jo(i);
          }
          var e;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return this.records.forEach((r, i) => t.push(oe(i))), `R3Injector[${t.join(', ')}]`;
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new Error('Injector has already been destroyed.');
        }
        processInjectorType(t, n, r) {
          if (!(t = H(t))) return !1;
          let i = Dr(t);
          const o = (null == i && t.ngModule) || void 0,
            u = void 0 === o ? t : o,
            f = -1 !== r.indexOf(u);
          if ((void 0 !== o && (i = Dr(o)), null == i)) return !1;
          if (null != i.imports && !f) {
            let T;
            r.push(u);
            try {
              cs(i.imports, (O) => {
                this.processInjectorType(O, n, r) && (void 0 === T && (T = []), T.push(O));
              });
            } finally {
            }
            if (void 0 !== T)
              for (let O = 0; O < T.length; O++) {
                const { ngModule: F, providers: U } = T[O];
                cs(U, (K) => this.processProvider(K, F, U || bt));
              }
          }
          this.injectorDefTypes.add(u);
          const g = ei(u) || (() => new u());
          this.records.set(u, Dl(g, $u));
          const C = i.providers;
          if (null != C && !f) {
            const T = t;
            cs(C, (O) => this.processProvider(O, T, C));
          }
          return void 0 !== o && void 0 !== t.providers;
        }
        processProvider(t, n, r) {
          let i = Sl((t = H(t))) ? t : H(t && t.provide);
          const o = om((e = t))
            ? Dl(void 0, e.useValue)
            : Dl(
                (function (e, t, n) {
                  let r;
                  if (Sl(e)) {
                    const i = H(e);
                    return ei(i) || Th(i);
                  }
                  if (om(e)) r = () => H(e.useValue);
                  else if (
                    (function (e) {
                      return !(!e || !e.useFactory);
                    })(e)
                  )
                    r = () => e.useFactory(...Hs(e.deps || []));
                  else if (
                    (function (e) {
                      return !(!e || !e.useExisting);
                    })(e)
                  )
                    r = () => pn(H(e.useExisting));
                  else {
                    const i = H(e && (e.useClass || e.provide));
                    if (
                      !(function (e) {
                        return !!e.deps;
                      })(e)
                    )
                      return ei(i) || Th(i);
                    r = () => new i(...Hs(e.deps));
                  }
                  return r;
                })(e),
                $u,
              );
          var e;
          if (Sl(t) || !0 !== t.multi) this.records.get(i);
          else {
            let u = this.records.get(i);
            u ||
              ((u = Dl(void 0, $u, !0)), (u.factory = () => Hs(u.multi)), this.records.set(i, u)),
              (i = t),
              u.multi.push(t);
          }
          this.records.set(i, o);
        }
        hydrate(t, n) {
          return (
            n.value === $u && ((n.value = _C), (n.value = n.factory())),
            'object' == typeof n.value &&
              n.value &&
              null !== (e = n.value) &&
              'object' == typeof e &&
              'function' == typeof e.ngOnDestroy &&
              this.onDestroy.add(n.value),
            n.value
          );
          var e;
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = H(t.providedIn);
          return 'string' == typeof n
            ? 'any' === n || n === this.scope
            : this.injectorDefTypes.has(n);
        }
      }
      function Th(e) {
        const t = nn(e),
          n = null !== t ? t.factory : ei(e);
        if (null !== n) return n;
        if (e instanceof Pn) throw new Error(`Token ${oe(e)} is missing a \u0275prov definition.`);
        if (e instanceof Function)
          return (function (e) {
            const t = e.length;
            if (t > 0) {
              const r = mo(t, '?');
              throw new Error(`Can't resolve all parameters for ${oe(e)}: (${r.join(', ')}).`);
            }
            const n = (function (e) {
              const t = e && (e[Rr] || e[Kr]);
              if (t) {
                const n = (function (e) {
                  if (e.hasOwnProperty('name')) return e.name;
                  const t = ('' + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? '' : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`,
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Error('unreachable');
      }
      function Dl(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function om(e) {
        return null !== e && 'object' == typeof e && du in e;
      }
      function Sl(e) {
        return 'function' == typeof e;
      }
      const am = function (e, t, n) {
        return (function (e, t = null, n = null, r) {
          const i = im(e, t, n, r);
          return i._resolveInjectorDefTypes(), i;
        })({ name: n }, t, e, n);
      };
      class hn {
        static create(t, n) {
          return Array.isArray(t) ? am(t, n, '') : am(t.providers, t.parent, t.name || '');
        }
      }
      function HC(e, t) {
        Ri(bu(e)[1], Hn());
      }
      (hn.THROW_IF_NOT_FOUND = va),
        (hn.NULL = new nm()),
        (hn.ɵprov = Bt({ token: hn, providedIn: 'any', factory: () => pn(El) })),
        (hn.__NG_ELEMENT_ID__ = -1);
      let _d = null;
      function Tl() {
        if (!_d) {
          const e = Fe.Symbol;
          if (e && e.iterator) _d = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              'entries' !== r &&
                'size' !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (_d = r);
            }
          }
        }
        return _d;
      }
      class ws {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new ws(t);
        }
        static unwrap(t) {
          return ws.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof ws;
        }
      }
      function Wu(e) {
        return !!Ph(e) && (Array.isArray(e) || (!(e instanceof Map) && Tl() in e));
      }
      function Ph(e) {
        return null !== e && ('function' == typeof e || 'object' == typeof e);
      }
      function Qs(e, t, n) {
        return (e[t] = n);
      }
      function Mr(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Nh(e, t, n, r) {
        const i = Le();
        return Mr(i, ts(), t) && (Yt(), Ks(Vt(), i, e, t, n, r)), Nh;
      }
      function Fm(e, t, n, r, i, o, u, f) {
        const g = Le(),
          C = Yt(),
          T = e + 20,
          O = C.firstCreatePass
            ? (function (e, t, n, r, i, o, u, f, g) {
                const C = t.consts,
                  T = Cl(t, e, 4, u || null, Tn(C, f));
                vh(t, n, T, Tn(C, g)), Ri(t, T);
                const O = (T.tViews = md(
                  2,
                  T,
                  r,
                  i,
                  o,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  C,
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, T), (O.queries = t.queries.embeddedTView(T))),
                  T
                );
              })(T, C, g, t, n, r, i, o, u)
            : C.data[T];
        fi(O, !1);
        const F = g[11].createComment('');
        vl(C, g, F, O),
          hr(F, g),
          yd(g, (g[T] = Qg(F, g, F, O))),
          ur(O) && mh(C, g, O),
          null != u && yh(g, O, f);
      }
      function km(e) {
        return Ft(wt.lFrame.contextLView, 20 + e);
      }
      function Yu(e, t = ft.Default) {
        const n = Le();
        return null === n ? pn(e, t) : Wt(Hn(), n, H(e), t);
      }
      function Vh(e, t, n) {
        const r = Le();
        return Mr(r, ts(), t) && bi(Yt(), Vt(), r, e, t, r[11], n, !1), Vh;
      }
      function jh(e, t, n, r, i) {
        const u = i ? 'class' : 'style';
        tm(e, n, t.inputs[u], u, r);
      }
      function Uh(e, t, n, r) {
        const i = Le(),
          o = Yt(),
          u = 20 + e,
          f = i[11],
          g = (i[u] = Co(f, t, wt.lFrame.currentNamespace)),
          C = o.firstCreatePass
            ? (function (e, t, n, r, i, o, u) {
                const f = t.consts,
                  C = Cl(t, e, 2, i, Tn(f, o));
                return (
                  vh(t, n, C, Tn(f, u)),
                  null !== C.attrs && vd(C, C.attrs, !1),
                  null !== C.mergedAttrs && vd(C, C.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, C),
                  C
                );
              })(u, o, i, 0, t, n, r)
            : o.data[u];
        fi(C, !0);
        const T = C.mergedAttrs;
        null !== T && lo(f, g, T);
        const O = C.classes;
        null !== O && d(f, g, O);
        const F = C.styles;
        null !== F && gd(f, g, F),
          64 != (64 & C.flags) && vl(o, i, g, C),
          0 === wt.lFrame.elementDepthCount && hr(g, i),
          wt.lFrame.elementDepthCount++,
          ur(C) &&
            (mh(o, i, C),
            (function (e, t, n) {
              if (As(t)) {
                const i = t.directiveEnd;
                for (let o = t.directiveStart; o < i; o++) {
                  const u = e.data[o];
                  u.contentQueries && u.contentQueries(1, n[o], o);
                }
              }
            })(o, C, i)),
          null !== r && yh(i, C);
      }
      function Hh() {
        let e = Hn();
        aa() ? Wa() : ((e = e.parent), fi(e, !1));
        const t = e;
        wt.lFrame.elementDepthCount--;
        const n = Yt();
        n.firstCreatePass && (Ri(n, e), As(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function (e) {
              return 0 != (16 & e.flags);
            })(t) &&
            jh(n, t, Le(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function (e) {
              return 0 != (32 & e.flags);
            })(t) &&
            jh(n, t, Le(), t.stylesWithoutHost, !1);
      }
      function Km(e, t, n, r) {
        Uh(e, t, n, r), Hh();
      }
      function qm() {
        return Le();
      }
      function $h(e) {
        return !!e && 'function' == typeof e.then;
      }
      function Jm(e) {
        return !!e && 'function' == typeof e.subscribe;
      }
      const zh = Jm;
      function Wh(e, t, n, r) {
        const i = Le(),
          o = Yt(),
          u = Hn();
        return (
          (function (e, t, n, r, i, o, u, f) {
            const g = ur(r),
              T = e.firstCreatePass && Jg(e),
              O = t[8],
              F = qg(t);
            let U = !0;
            if (3 & r.type || f) {
              const ee = Pt(r, t),
                ze = f ? f(ee) : ee,
                Ce = F.length,
                mt = f ? (xt) => f(V(xt[r.index])) : r.index;
              if (b(n)) {
                let xt = null;
                if (
                  (!f &&
                    g &&
                    (xt = (function (e, t, n, r) {
                      const i = e.cleanup;
                      if (null != i)
                        for (let o = 0; o < i.length - 1; o += 2) {
                          const u = i[o];
                          if (u === n && i[o + 1] === r) {
                            const f = t[7],
                              g = i[o + 2];
                            return f.length > g ? f[g] : null;
                          }
                          'string' == typeof u && (o += 2);
                        }
                      return null;
                    })(e, t, i, r.index)),
                  null !== xt)
                )
                  ((xt.__ngLastListenerFn__ || xt).__ngNextListenerFn__ = o),
                    (xt.__ngLastListenerFn__ = o),
                    (U = !1);
                else {
                  o = Gh(r, t, O, o, !1);
                  const Kt = n.listen(ze, i, o);
                  F.push(o, Kt), T && T.push(i, mt, Ce, Ce + 1);
                }
              } else
                (o = Gh(r, t, O, o, !0)),
                  ze.addEventListener(i, o, u),
                  F.push(o),
                  T && T.push(i, mt, Ce, u);
            } else o = Gh(r, t, O, o, !1);
            const K = r.outputs;
            let ue;
            if (U && null !== K && (ue = K[i])) {
              const ee = ue.length;
              if (ee)
                for (let ze = 0; ze < ee; ze += 2) {
                  const ir = t[ue[ze]][ue[ze + 1]].subscribe(o),
                    Gi = F.length;
                  F.push(o, ir), T && T.push(i, r.index, Gi, -(Gi + 1));
                }
            }
          })(o, i, i[11], u, e, t, !!n, r),
          Wh
        );
      }
      function ty(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (i) {
          return em(e, i), !1;
        }
      }
      function Gh(e, t, n, r, i) {
        return function o(u) {
          if (u === Function) return r;
          const f = 2 & e.flags ? It(e.index, t) : t;
          0 == (32 & t[2]) && wh(f);
          let g = ty(t, 0, r, u),
            C = o.__ngNextListenerFn__;
          for (; C; ) (g = ty(t, 0, C, u) && g), (C = C.__ngNextListenerFn__);
          return i && !1 === g && (u.preventDefault(), (u.returnValue = !1)), g;
        };
      }
      function ny(e = 1) {
        return (function (e) {
          return (wt.lFrame.contextLView = (function (e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, wt.lFrame.contextLView))[8];
        })(e);
      }
      function xw(e, t) {
        let n = null;
        const r = (function (e) {
          const t = e.attrs;
          if (null != t) {
            const n = t.indexOf(5);
            if (0 == (1 & n)) return t[n + 1];
          }
          return null;
        })(e);
        for (let i = 0; i < t.length; i++) {
          const o = t[i];
          if ('*' !== o) {
            if (null === r ? N(e, o, !0) : te(r, o)) return i;
          } else n = i;
        }
        return n;
      }
      function ry(e) {
        const t = Le()[16][6];
        if (!t.projection) {
          const r = (t.projection = mo(e ? e.length : 1, null)),
            i = r.slice();
          let o = t.child;
          for (; null !== o; ) {
            const u = e ? xw(o, e) : 0;
            null !== u && (i[u] ? (i[u].projectionNext = o) : (r[u] = o), (i[u] = o)), (o = o.next);
          }
        }
      }
      function iy(e, t = 0, n) {
        const r = Le(),
          i = Yt(),
          o = Cl(i, 20 + e, 16, null, n || null);
        null === o.projection && (o.projection = t),
          Wa(),
          64 != (64 & o.flags) &&
            (function (e, t, n) {
              Bu(t[11], 0, t, n, ml(e, n, t), cd(n.parent || t[6], n, t));
            })(i, r, o);
      }
      function py(e, t, n, r, i) {
        const o = e[n + 1],
          u = null === t;
        let f = r ? Be(o) : Lt(o),
          g = !1;
        for (; 0 !== f && (!1 === g || u); ) {
          const T = e[f + 1];
          Aw(e[f], t) && ((g = !0), (e[f + 1] = r ? vn(T) : ht(T))), (f = r ? Be(T) : Lt(T));
        }
        g && (e[n + 1] = r ? ht(o) : vn(o));
      }
      function Aw(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || 'string' != typeof t) && vi(e, t) >= 0)
        );
      }
      const rr = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function gy(e) {
        return e.substring(rr.key, rr.keyEnd);
      }
      function my(e, t) {
        const n = rr.textEnd;
        return n === t
          ? -1
          : ((t = rr.keyEnd =
              (function (e, t, n) {
                for (; t < n && e.charCodeAt(t) > 32; ) t++;
                return t;
              })(e, (rr.key = t), n)),
            Ll(e, t, n));
      }
      function Ll(e, t, n) {
        for (; t < n && e.charCodeAt(t) <= 32; ) t++;
        return t;
      }
      function Kh(e, t, n) {
        return bs(e, t, n, !1), Kh;
      }
      function Qh(e, t) {
        return bs(e, t, null, !0), Qh;
      }
      function wy(e) {
        !(function (e, t, n, r) {
          const i = Yt(),
            o = Wn(2);
          i.firstUpdatePass && Ey(i, null, o, r);
          const u = Le();
          if (n !== ce && Mr(u, o, n)) {
            const f = i.data[Qn()];
            if (xy(f, r) && !by(i, o)) {
              let g = r ? f.classesWithoutHost : f.stylesWithoutHost;
              null !== g && (n = we(g, n || '')), jh(i, f, u, n, r);
            } else
              !(function (e, t, n, r, i, o, u, f) {
                i === ce && (i = bt);
                let g = 0,
                  C = 0,
                  T = 0 < i.length ? i[0] : null,
                  O = 0 < o.length ? o[0] : null;
                for (; null !== T || null !== O; ) {
                  const F = g < i.length ? i[g + 1] : void 0,
                    U = C < o.length ? o[C + 1] : void 0;
                  let ue,
                    K = null;
                  T === O
                    ? ((g += 2), (C += 2), F !== U && ((K = O), (ue = U)))
                    : null === O || (null !== T && T < O)
                    ? ((g += 2), (K = T))
                    : ((C += 2), (K = O), (ue = U)),
                    null !== K && Sy(e, t, n, r, K, ue, u, f),
                    (T = g < i.length ? i[g] : null),
                    (O = C < o.length ? o[C] : null);
                }
              })(
                i,
                f,
                u,
                u[11],
                u[o + 1],
                (u[o + 1] = (function (e, t, n) {
                  if (null == n || '' === n) return bt;
                  const r = [],
                    i = Vi(n);
                  if (Array.isArray(i)) for (let o = 0; o < i.length; o++) e(r, i[o], !0);
                  else if ('object' == typeof i)
                    for (const o in i) i.hasOwnProperty(o) && e(r, o, i[o]);
                  else 'string' == typeof i && t(r, i);
                  return r;
                })(e, t, n)),
                r,
                o,
              );
          }
        })(Hr, qs, e, !0);
      }
      function qs(e, t) {
        for (
          let n = (function (e) {
            return (
              (function (e) {
                (rr.key = 0),
                  (rr.keyEnd = 0),
                  (rr.value = 0),
                  (rr.valueEnd = 0),
                  (rr.textEnd = e.length);
              })(e),
              my(e, Ll(e, 0, rr.textEnd))
            );
          })(t);
          n >= 0;
          n = my(t, n)
        )
          Hr(e, gy(t), !0);
      }
      function bs(e, t, n, r) {
        const i = Le(),
          o = Yt(),
          u = Wn(2);
        o.firstUpdatePass && Ey(o, e, u, r),
          t !== ce &&
            Mr(i, u, t) &&
            Sy(
              o,
              o.data[Qn()],
              i,
              i[11],
              e,
              (i[u + 1] = (function (e, t) {
                return (
                  null == e ||
                    ('string' == typeof t ? (e += t) : 'object' == typeof e && (e = oe(Vi(e)))),
                  e
                );
              })(t, n)),
              r,
              u,
            );
      }
      function by(e, t) {
        return t >= e.expandoStartIndex;
      }
      function Ey(e, t, n, r) {
        const i = e.data;
        if (null === i[n + 1]) {
          const o = i[Qn()],
            u = by(e, n);
          xy(o, r) && null === t && !u && (t = !1),
            (t = (function (e, t, n, r) {
              const i = (function (e) {
                const t = wt.lFrame.currentDirectiveIndex;
                return -1 === t ? null : e[t];
              })(e);
              let o = r ? t.residualClasses : t.residualStyles;
              if (null === i)
                0 === (r ? t.classBindings : t.styleBindings) &&
                  ((n = Ku((n = Zh(null, e, t, n, r)), t.attrs, r)), (o = null));
              else {
                const u = t.directiveStylingLast;
                if (-1 === u || e[u] !== i)
                  if (((n = Zh(i, e, t, n, r)), null === o)) {
                    let g = (function (e, t, n) {
                      const r = n ? t.classBindings : t.styleBindings;
                      if (0 !== Lt(r)) return e[Be(r)];
                    })(e, t, r);
                    void 0 !== g &&
                      Array.isArray(g) &&
                      ((g = Zh(null, e, t, g[1], r)),
                      (g = Ku(g, t.attrs, r)),
                      (function (e, t, n, r) {
                        e[Be(n ? t.classBindings : t.styleBindings)] = r;
                      })(e, t, r, g));
                  } else
                    o = (function (e, t, n) {
                      let r;
                      const i = t.directiveEnd;
                      for (let o = 1 + t.directiveStylingLast; o < i; o++)
                        r = Ku(r, e[o].hostAttrs, n);
                      return Ku(r, t.attrs, n);
                    })(e, t, r);
              }
              return void 0 !== o && (r ? (t.residualClasses = o) : (t.residualStyles = o)), n;
            })(i, o, t, r)),
            (function (e, t, n, r, i, o) {
              let u = o ? t.classBindings : t.styleBindings,
                f = Be(u),
                g = Lt(u);
              e[r] = n;
              let T,
                C = !1;
              if (Array.isArray(n)) {
                const O = n;
                (T = O[1]), (null === T || vi(O, T) > 0) && (C = !0);
              } else T = n;
              if (i)
                if (0 !== g) {
                  const F = Be(e[f + 1]);
                  (e[r + 1] = Ae(F, f)),
                    0 !== F && (e[F + 1] = an(e[F + 1], r)),
                    (e[f + 1] = (function (e, t) {
                      return (131071 & e) | (t << 17);
                    })(e[f + 1], r));
                } else (e[r + 1] = Ae(f, 0)), 0 !== f && (e[f + 1] = an(e[f + 1], r)), (f = r);
              else (e[r + 1] = Ae(g, 0)), 0 === f ? (f = r) : (e[g + 1] = an(e[g + 1], r)), (g = r);
              C && (e[r + 1] = ht(e[r + 1])),
                py(e, T, r, !0),
                py(e, T, r, !1),
                (function (e, t, n, r, i) {
                  const o = i ? e.residualClasses : e.residualStyles;
                  null != o && 'string' == typeof t && vi(o, t) >= 0 && (n[r + 1] = vn(n[r + 1]));
                })(t, T, e, r, o),
                (u = Ae(f, g)),
                o ? (t.classBindings = u) : (t.styleBindings = u);
            })(i, o, t, n, u, r);
        }
      }
      function Zh(e, t, n, r, i) {
        let o = null;
        const u = n.directiveEnd;
        let f = n.directiveStylingLast;
        for (
          -1 === f ? (f = n.directiveStart) : f++;
          f < u && ((o = t[f]), (r = Ku(r, o.hostAttrs, i)), o !== e);

        )
          f++;
        return null !== e && (n.directiveStylingLast = f), r;
      }
      function Ku(e, t, n) {
        const r = n ? 1 : 2;
        let i = -1;
        if (null !== t)
          for (let o = 0; o < t.length; o++) {
            const u = t[o];
            'number' == typeof u
              ? (i = u)
              : i === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ['', e]), Hr(e, u, !!n || t[++o]));
          }
        return void 0 === e ? null : e;
      }
      function Sy(e, t, n, r, i, o, u, f) {
        if (!(3 & t.type)) return;
        const g = e.data,
          C = g[f + 1];
        bd(
          (function (e) {
            return 1 == (1 & e);
          })(C)
            ? Ty(g, t, n, i, Lt(C), u)
            : void 0,
        ) ||
          (bd(o) ||
            ((function (e) {
              return 2 == (2 & e);
            })(C) &&
              (o = Ty(g, null, n, i, f, u))),
          (function (e, t, n, r, i) {
            const o = b(e);
            if (t)
              i
                ? o
                  ? e.addClass(n, r)
                  : n.classList.add(r)
                : o
                ? e.removeClass(n, r)
                : n.classList.remove(r);
            else {
              let u = -1 === r.indexOf('-') ? void 0 : ms.DashCase;
              if (null == i) o ? e.removeStyle(n, r, u) : n.style.removeProperty(r);
              else {
                const f = 'string' == typeof i && i.endsWith('!important');
                f && ((i = i.slice(0, -10)), (u |= ms.Important)),
                  o ? e.setStyle(n, r, i, u) : n.style.setProperty(r, i, f ? 'important' : '');
              }
            }
          })(r, u, lt(Qn(), n), i, o));
      }
      function Ty(e, t, n, r, i, o) {
        const u = null === t;
        let f;
        for (; i > 0; ) {
          const g = e[i],
            C = Array.isArray(g),
            T = C ? g[1] : g,
            O = null === T;
          let F = n[i + 1];
          F === ce && (F = O ? bt : void 0);
          let U = O ? Ja(F, r) : T === r ? F : void 0;
          if ((C && !bd(U) && (U = Ja(g, r)), bd(U) && ((f = U), u))) return f;
          const K = e[i + 1];
          i = u ? Be(K) : Lt(K);
        }
        if (null !== t) {
          let g = o ? t.residualClasses : t.residualStyles;
          null != g && (f = Ja(g, r));
        }
        return f;
      }
      function bd(e) {
        return void 0 !== e;
      }
      function xy(e, t) {
        return 0 != (e.flags & (t ? 16 : 32));
      }
      function Iy(e, t = '') {
        const n = Le(),
          r = Yt(),
          i = e + 20,
          o = r.firstCreatePass ? Cl(r, i, 1, t, null) : r.data[i],
          u = (n[i] = (function (e, t) {
            return b(e) ? e.createText(t) : e.createTextNode(t);
          })(n[11], t));
        vl(r, n, u, o), fi(o, !1);
      }
      function qh(e) {
        return Ed('', e, ''), qh;
      }
      function Ed(e, t, n) {
        const r = Le(),
          i = (function (e, t, n, r) {
            return Mr(e, ts(), n) ? t + Ue(n) + r : ce;
          })(r, e, t, n);
        return i !== ce && wo(r, Qn(), i), Ed;
      }
      function Jh(e, t, n) {
        const r = Le();
        return Mr(r, ts(), t) && bi(Yt(), Vt(), r, e, t, r[11], n, !0), Jh;
      }
      const Fa = void 0;
      var cb = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Fa],
        [['AM', 'PM'], Fa, Fa],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        ],
        Fa,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        ],
        Fa,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini'],
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Fa, "{1} 'at' {0}", Fa],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        'USD',
        '$',
        'US Dollar',
        {},
        'ltr',
        function (e) {
          const t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      let Bl = {};
      function Xh(e) {
        const t = (function (e) {
          return e.toLowerCase().replace(/_/g, '-');
        })(e);
        let n = Ky(t);
        if (n) return n;
        const r = t.split('-')[0];
        if (((n = Ky(r)), n)) return n;
        if ('en' === r) return cb;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function Yy(e) {
        return Xh(e)[Dt.PluralCase];
      }
      function Ky(e) {
        return (
          e in Bl ||
            (Bl[e] = Fe.ng && Fe.ng.common && Fe.ng.common.locales && Fe.ng.common.locales[e]),
          Bl[e]
        );
      }
      var Dt = (() => (
        ((Dt = Dt || {})[(Dt.LocaleId = 0)] = 'LocaleId'),
        (Dt[(Dt.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
        (Dt[(Dt.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
        (Dt[(Dt.DaysFormat = 3)] = 'DaysFormat'),
        (Dt[(Dt.DaysStandalone = 4)] = 'DaysStandalone'),
        (Dt[(Dt.MonthsFormat = 5)] = 'MonthsFormat'),
        (Dt[(Dt.MonthsStandalone = 6)] = 'MonthsStandalone'),
        (Dt[(Dt.Eras = 7)] = 'Eras'),
        (Dt[(Dt.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
        (Dt[(Dt.WeekendRange = 9)] = 'WeekendRange'),
        (Dt[(Dt.DateFormat = 10)] = 'DateFormat'),
        (Dt[(Dt.TimeFormat = 11)] = 'TimeFormat'),
        (Dt[(Dt.DateTimeFormat = 12)] = 'DateTimeFormat'),
        (Dt[(Dt.NumberSymbols = 13)] = 'NumberSymbols'),
        (Dt[(Dt.NumberFormats = 14)] = 'NumberFormats'),
        (Dt[(Dt.CurrencyCode = 15)] = 'CurrencyCode'),
        (Dt[(Dt.CurrencySymbol = 16)] = 'CurrencySymbol'),
        (Dt[(Dt.CurrencyName = 17)] = 'CurrencyName'),
        (Dt[(Dt.Currencies = 18)] = 'Currencies'),
        (Dt[(Dt.Directionality = 19)] = 'Directionality'),
        (Dt[(Dt.PluralCase = 20)] = 'PluralCase'),
        (Dt[(Dt.ExtraData = 21)] = 'ExtraData'),
        Dt
      ))();
      const Dd = 'en-US';
      let Qy = Dd;
      function ep(e) {
        Xe(e, 'Expected localeId to be defined'),
          'string' == typeof e && (Qy = e.toLowerCase().replace(/_/g, '-'));
      }
      class Cv {}
      const bv = 'ngComponent';
      class dE {
        resolveComponentFactory(t) {
          throw (function (e) {
            const t = Error(
              `No component factory found for ${oe(
                e,
              )}. Did you add it to @NgModule.entryComponents?`,
            );
            return (t[bv] = e), t;
          })(t);
        }
      }
      class ka {}
      function Md(...e) {}
      function jl(e, t) {
        return new Js(Pt(e, t));
      }
      ka.NULL = new dE();
      const pE = function () {
        return jl(Hn(), Le());
      };
      let Js = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = pE), e;
      })();
      function Ev(e) {
        return e instanceof Js ? e.nativeElement : e;
      }
      class Ad {}
      let gE = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => yE()), e;
      })();
      const yE = function () {
        const e = Le(),
          n = It(Hn().index, e);
        return (function (e) {
          return e[11];
        })(Tr(n) ? n : e);
      };
      let lp = (() => {
        class e {}
        return (e.ɵprov = Bt({ token: e, providedIn: 'root', factory: () => null })), e;
      })();
      class Dv {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const Sv = new Dv('12.2.0');
      class Tv {
        constructor() {}
        supports(t) {
          return Wu(t);
        }
        create(t) {
          return new wE(t);
        }
      }
      const CE = (e, t) => t;
      class wE {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || CE);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            i = 0,
            o = null;
          for (; n || r; ) {
            const u = !r || (n && n.currentIndex < Iv(r, i, o)) ? n : r,
              f = Iv(u, i, o),
              g = u.currentIndex;
            if (u === r) i--, (r = r._nextRemoved);
            else if (((n = n._next), null == u.previousIndex)) i++;
            else {
              o || (o = []);
              const C = f - i,
                T = g - i;
              if (C != T) {
                for (let F = 0; F < C; F++) {
                  const U = F < o.length ? o[F] : (o[F] = 0),
                    K = U + F;
                  T <= K && K < C && (o[F] = U + 1);
                }
                o[u.previousIndex] = T - C;
              }
            }
            f !== g && t(u, f, g);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !Wu(t)))
            throw new Error(
              `Error trying to diff '${oe(t)}'. Only arrays and iterables are allowed`,
            );
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let i,
            o,
            u,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let f = 0; f < this.length; f++)
              (o = t[f]),
                (u = this._trackByFn(f, o)),
                null !== n && Object.is(n.trackById, u)
                  ? (r && (n = this._verifyReinsertion(n, o, u, f)),
                    Object.is(n.item, o) || this._addIdentityChange(n, o))
                  : ((n = this._mismatch(n, o, u, f)), (r = !0)),
                (n = n._next);
          } else
            (i = 0),
              (function (e, t) {
                if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[Tl()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (f) => {
                (u = this._trackByFn(i, f)),
                  null !== n && Object.is(n.trackById, u)
                    ? (r && (n = this._verifyReinsertion(n, f, u, i)),
                      Object.is(n.item, f) || this._addIdentityChange(n, f))
                    : ((n = this._mismatch(n, f, u, i)), (r = !0)),
                  (n = n._next),
                  i++;
              }),
              (this.length = i);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null, t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, i) {
          let o;
          return (
            null === t ? (o = this._itTail) : ((o = t._prev), this._remove(t)),
            null !==
            (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, o, i))
              : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(r, i))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, o, i))
              : (t = this._addAfter(new bE(n, r), o, i)),
            t
          );
        }
        _verifyReinsertion(t, n, r, i) {
          let o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(r, null);
          return (
            null !== o
              ? (t = this._reinsertAfter(o, t._prev, i))
              : t.currentIndex != i && ((t.currentIndex = i), this._addToMoves(t, i)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const i = t._prevRemoved,
            o = t._nextRemoved;
          return (
            null === i ? (this._removalsHead = o) : (i._nextRemoved = o),
            null === o ? (this._removalsTail = i) : (o._prevRemoved = i),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return this._unlink(t), this._insertAfter(t, n, r), this._addToMoves(t, r), t;
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const i = null === n ? this._itHead : n._next;
          return (
            (t._next = i),
            (t._prev = n),
            null === i ? (this._itTail = t) : (i._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new xv()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new xv()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class bE {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class EE {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if ((null === n || n <= r.currentIndex) && Object.is(r.trackById, t)) return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class xv {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new EE()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const i = this.map.get(t);
          return i ? i.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Iv(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + t + i;
      }
      class Mv {
        constructor() {}
        supports(t) {
          return t instanceof Map || Ph(t);
        }
        create() {
          return new DE();
        }
      }
      class DE {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || Ph(t)))
              throw new Error(`Error trying to diff '${oe(t)}'. Only maps and objects are allowed`);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, i) => {
              if (n && n.key === i)
                this._maybeAddToChanges(n, r), (this._appendAfter = n), (n = n._next);
              else {
                const o = this._getOrCreateRecordForKey(i, r);
                n = this._insertBeforeOrAppend(n, o);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const i = this._records.get(t);
            this._maybeAddToChanges(i, n);
            const o = i._prev,
              u = i._next;
            return o && (o._next = u), u && (u._prev = o), (i._next = null), (i._prev = null), i;
          }
          const r = new SE(t);
          return this._records.set(t, r), (r.currentValue = n), this._addToAdditions(r), r;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue), (t.currentValue = n), this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map ? t.forEach(n) : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class SE {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Av() {
        return new Od([new Tv()]);
      }
      let Od = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Av()),
              deps: [[e, new Ws(), new Li()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (null != r) return r;
            throw new Error(
              `Cannot find a differ supporting object '${n}' of type '${(function (e) {
                return e.name || typeof e;
              })(n)}'`,
            );
          }
        }
        return (e.ɵprov = Bt({ token: e, providedIn: 'root', factory: Av })), e;
      })();
      function Ov() {
        return new Rd([new Mv()]);
      }
      let Rd = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const i = r.factories.slice();
              n = n.concat(i);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || Ov()),
              deps: [[e, new Ws(), new Li()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (r) return r;
            throw new Error(`Cannot find a differ supporting object '${n}'`);
          }
        }
        return (e.ɵprov = Bt({ token: e, providedIn: 'root', factory: Ov })), e;
      })();
      function Pd(e, t, n, r, i = !1) {
        for (; null !== n; ) {
          const o = t[n.index];
          if ((null !== o && r.push(V(o)), lr(o)))
            for (let f = 10; f < o.length; f++) {
              const g = o[f],
                C = g[1].firstChild;
              null !== C && Pd(g[1], g, C, r);
            }
          const u = n.type;
          if (8 & u) Pd(e, t, n.child, r);
          else if (32 & u) {
            const f = nd(n, t);
            let g;
            for (; (g = f()); ) r.push(g);
          } else if (16 & u) {
            const f = fd(t, n);
            if (Array.isArray(f)) r.push(...f);
            else {
              const g = gl(t[16]);
              Pd(g[1], g, f, r, !0);
            }
          }
          n = i ? n.projectionNext : n.next;
        }
        return r;
      }
      class Xu {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Pd(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (lr(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (oi(t, r), Ur(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          Ko(this._lView[1], this._lView);
        }
        onDestroy(t) {
          Ug(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          wh(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Eh(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (e, t, n) {
            Ps(!0);
            try {
              Eh(e, t, n);
            } finally {
              Ps(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error('This view is already attached directly to the ApplicationRef!');
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var t;
          (this._appRef = null), vs(this._lView[1], (t = this._lView), t[11], 2, null, null);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer)
            throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = t;
        }
      }
      class xE extends Xu {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          Zg(this._view);
        }
        checkNoChanges() {
          !(function (e) {
            Ps(!0);
            try {
              Zg(e);
            } finally {
              Ps(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const ME = function (e) {
        return (function (e, t, n) {
          if (Dn(e) && !n) {
            const r = It(e.index, t);
            return new Xu(r, r);
          }
          return 47 & e.type ? new Xu(t[16], t) : null;
        })(Hn(), Le(), 16 == (16 & e));
      };
      let AE = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = ME), e;
      })();
      const PE = [new Mv()],
        FE = new Od([new Tv()]),
        kE = new Rd(PE),
        BE = function () {
          return Nd(Hn(), Le());
        };
      let ec = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = BE), e;
      })();
      const VE = ec,
        jE = class extends VE {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t) {
            const n = this._declarationTContainer.tViews,
              r = ju(this._declarationLView, n, t, 16, null, n.declTNode, null, null, null, null);
            r[17] = this._declarationLView[this._declarationTContainer.index];
            const o = this._declarationLView[19];
            return null !== o && (r[19] = o.createEmbeddedView(n)), Uu(n, r, t), new Xu(r);
          }
        };
      function Nd(e, t) {
        return 4 & e.type ? new jE(t, e, jl(e, t)) : null;
      }
      class La {}
      class Rv {}
      const $E = function () {
        return Fv(Hn(), Le());
      };
      let Fd = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = $E), e;
      })();
      const WE = Fd,
        Pv = class extends WE {
          constructor(t, n, r) {
            super(), (this._lContainer = t), (this._hostTNode = n), (this._hostLView = r);
          }
          get element() {
            return jl(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new uo(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = ge(this._hostTNode, this._hostLView);
            if (Pi(t)) {
              const n = ss(t, this._hostLView),
                r = gi(t);
              return new uo(n[1].data[r + 8], n);
            }
            return new uo(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = Nv(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            const i = t.createEmbeddedView(n || {});
            return this.insert(i, r), i;
          }
          createComponent(t, n, r, i, o) {
            const u = r || this.parentInjector;
            if (!o && null == t.ngModule && u) {
              const g = u.get(La, null);
              g && (o = g);
            }
            const f = t.create(u, i, void 0, o);
            return this.insert(f.hostView, n), f;
          }
          insert(t, n) {
            const r = t._lView,
              i = r[1];
            if (lr(r[3])) {
              const T = this.indexOf(t);
              if (-1 !== T) this.detach(T);
              else {
                const O = r[3],
                  F = new Pv(O, O[6], O[3]);
                F.detach(F.indexOf(t));
              }
            }
            const o = this._adjustIndex(n),
              u = this._lContainer;
            !(function (e, t, n, r) {
              const i = 10 + r,
                o = n.length;
              r > 0 && (n[i - 1][4] = t),
                r < o - 10 ? ((t[4] = n[i]), go(n, 10 + r, t)) : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const u = t[17];
              null !== u &&
                n !== u &&
                (function (e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0), null === n ? (e[9] = [t]) : n.push(t);
                })(u, t);
              const f = t[19];
              null !== f && f.insertView(e), (t[2] |= 128);
            })(i, r, u, o);
            const f = hd(o, u),
              g = r[11],
              C = Pa(g, u[7]);
            return (
              null !== C &&
                (function (e, t, n, r, i, o) {
                  (r[0] = i), (r[6] = t), vs(e, r, n, 1, i, o);
                })(i, u[6], g, r, C, f),
              t.attachToViewContainerRef(),
              go(up(u), o, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = Nv(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = oi(this._lContainer, n);
            r && (Ur(up(this._lContainer), n), Ko(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = oi(this._lContainer, n);
            return r && null != Ur(up(this._lContainer), n) ? new Xu(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function Nv(e) {
        return e[8];
      }
      function up(e) {
        return e[8] || (e[8] = []);
      }
      function Fv(e, t) {
        let n;
        const r = t[e.index];
        if (lr(r)) n = r;
        else {
          let i;
          if (8 & e.type) i = V(r);
          else {
            const o = t[11];
            i = o.createComment('');
            const u = Pt(e, t);
            ys(
              o,
              Pa(o, u),
              i,
              (function (e, t) {
                return b(e) ? e.nextSibling(t) : t.nextSibling;
              })(o, u),
              !1,
            );
          }
          (t[e.index] = n = Qg(r, t, i, e)), yd(t, n);
        }
        return new Pv(n, e, t);
      }
      const zl = {};
      class t_ extends ka {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = un(t);
          return new r_(n, this.ngModule);
        }
      }
      function n_(e) {
        const t = [];
        for (let n in e) e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      const UD = new Pn('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => qf });
      class r_ extends Cv {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = t.selectors.map(_e).join(',')),
            (this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return n_(this.componentDef.inputs);
        }
        get outputs() {
          return n_(this.componentDef.outputs);
        }
        create(t, n, r, i) {
          const o = (i = i || this.ngModule)
              ? (function (e, t) {
                  return {
                    get: (n, r, i) => {
                      const o = e.get(n, zl, i);
                      return o !== zl || r === zl ? o : t.get(n, r, i);
                    },
                  };
                })(t, i.injector)
              : t,
            u = o.get(Ad, E),
            f = o.get(lp, null),
            g = u.createRenderer(null, this.componentDef),
            C = this.componentDef.selectors[0][0] || 'div',
            T = r
              ? (function (e, t, n) {
                  if (b(e)) return e.selectRootElement(t, n === Pe.ShadowDom);
                  let r = 'string' == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ''), r;
                })(g, r, this.componentDef.encapsulation)
              : Co(
                  u.createRenderer(null, this.componentDef),
                  C,
                  (function (e) {
                    const t = e.toLowerCase();
                    return 'svg' === t
                      ? io
                      : 'math' === t
                      ? 'http://www.w3.org/1998/MathML/'
                      : null;
                  })(C),
                ),
            O = this.componentDef.onPush ? 576 : 528,
            F = (function (e, t) {
              return {
                components: [],
                scheduler: e || qf,
                clean: mC,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            U = md(0, null, null, 1, 0, null, null, null, null, null),
            K = ju(null, U, F, O, null, null, u, g, f, o);
          let ue, ee;
          Fs(K);
          try {
            const ze = (function (e, t, n, r, i, o) {
              const u = n[1];
              n[20] = e;
              const g = Cl(u, 20, 2, '#host', null),
                C = (g.mergedAttrs = t.hostAttrs);
              null !== C &&
                (vd(g, C, !0),
                null !== e &&
                  (lo(i, e, C),
                  null !== g.classes && d(i, e, g.classes),
                  null !== g.styles && gd(i, e, g.styles)));
              const T = r.createRenderer(e, t),
                O = ju(n, Bg(t), null, t.onPush ? 64 : 16, n[20], g, r, T, o || null, null);
              return (
                u.firstCreatePass && (et(A(g, n), u, t.type), Gg(u, g), Yg(g, n.length, 1)),
                yd(n, O),
                (n[20] = O)
              );
            })(T, this.componentDef, K, u, g);
            if (T)
              if (r) lo(g, T, ['ng-version', Sv.full]);
              else {
                const { attrs: Ce, classes: mt } = (function (e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    i = 2;
                  for (; r < e.length; ) {
                    let o = e[r];
                    if ('string' == typeof o)
                      2 === i ? '' !== o && t.push(o, e[++r]) : 8 === i && n.push(o);
                    else {
                      if (!x(i)) break;
                      i = o;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                Ce && lo(g, T, Ce), mt && mt.length > 0 && d(g, T, mt.join(' '));
              }
            if (((ee = tn(U, 20)), void 0 !== n)) {
              const Ce = (ee.projection = []);
              for (let mt = 0; mt < this.ngContentSelectors.length; mt++) {
                const xt = n[mt];
                Ce.push(null != xt ? Array.from(xt) : null);
              }
            }
            (ue = (function (e, t, n, r, i) {
              const o = n[1],
                u = (function (e, t, n) {
                  const r = Hn();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Kg(e, r, t, wl(e, t, 1, null), n));
                  const i = jr(t, e, r.directiveStart, r);
                  hr(i, t);
                  const o = Pt(r, t);
                  return o && hr(o, t), i;
                })(o, n, t);
              if (
                (r.components.push(u), (e[8] = u), i && i.forEach((g) => g(u, t)), t.contentQueries)
              ) {
                const g = Hn();
                t.contentQueries(1, u, g.directiveStart);
              }
              const f = Hn();
              return (
                !o.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (Oi(f.index), zg(n[1], f, 0, f.directiveStart, f.directiveEnd, t), Wg(t, u)),
                u
              );
            })(ze, this.componentDef, K, F, [HC])),
              Uu(U, K, null);
          } finally {
            Ao();
          }
          return new zD(this.componentType, ue, jl(ee, K), K, ee);
        }
      }
      class zD extends class {} {
        constructor(t, n, r, i, o) {
          super(),
            (this.location = r),
            (this._rootLView = i),
            (this._tNode = o),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new xE(i)),
            (this.componentType = t);
        }
        get injector() {
          return new uo(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      const Wl = new Map();
      class YD extends La {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new t_(this));
          const r = An(t),
            i = t[Zr] || null;
          i && ep(i),
            (this._bootstrapComponents = gs(r.bootstrap)),
            (this._r3Injector = im(
              t,
              n,
              [
                { provide: La, useValue: this },
                { provide: ka, useValue: this.componentFactoryResolver },
              ],
              oe(t),
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, n = hn.THROW_IF_NOT_FOUND, r = ft.Default) {
          return t === hn || t === La || t === El ? this : this._r3Injector.get(t, n, r);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class bp extends Rv {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== An(t) &&
              (function (e) {
                const t = new Set();
                !(function n(r) {
                  const i = An(r, !0),
                    o = i.id;
                  null !== o &&
                    ((function (e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          `Duplicate module registered for ${e} - ${oe(t)} vs ${oe(t.name)}`,
                        );
                    })(o, Wl.get(o), r),
                    Wl.set(o, r));
                  const u = gs(i.imports);
                  for (const f of u) t.has(f) || (t.add(f), n(f));
                })(e);
              })(t);
        }
        create(t) {
          return new YD(this.moduleType, t);
        }
      }
      function lc(e, t) {
        const n = e[t];
        return n === ce ? void 0 : n;
      }
      function a_(e, t, n, r, i, o, u) {
        const f = t + n;
        return (function (e, t, n, r) {
          const i = Mr(e, t, n);
          return Mr(e, t + 1, r) || i;
        })(e, f, i, o)
          ? Qs(e, f + 2, u ? r.call(u, i, o) : r(i, o))
          : lc(e, f + 2);
      }
      function d_(e, t) {
        const n = Yt();
        let r;
        const i = e + 20;
        n.firstCreatePass
          ? ((r = (function (e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
              throw new Me('302', `The pipe '${e}' could not be found!`);
            })(t, n.pipeRegistry)),
            (n.data[i] = r),
            r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(i, r.onDestroy))
          : (r = n.data[i]);
        const o = r.factory || (r.factory = ei(r.type)),
          u = Y(Yu);
        try {
          const f = os(!1),
            g = o();
          return (
            os(f),
            (function (e, t, n, r) {
              n >= e.data.length && ((e.data[n] = null), (e.blueprint[n] = null)), (t[n] = r);
            })(n, Le(), i, g),
            g
          );
        } finally {
          Y(u);
        }
      }
      function f_(e, t, n) {
        const r = e + 20,
          i = Le(),
          o = Ft(i, r);
        return cc(
          i,
          uc(i, r)
            ? (function (e, t, n, r, i, o) {
                const u = t + n;
                return Mr(e, u, i) ? Qs(e, u + 1, o ? r.call(o, i) : r(i)) : lc(e, u + 1);
              })(i, Cn(), t, o.transform, n, o)
            : o.transform(n),
        );
      }
      function h_(e, t, n, r) {
        const i = e + 20,
          o = Le(),
          u = Ft(o, i);
        return cc(o, uc(o, i) ? a_(o, Cn(), t, u.transform, n, r, u) : u.transform(n, r));
      }
      function uc(e, t) {
        return e[1].data[t].pure;
      }
      function cc(e, t) {
        return ws.isWrapped(t) && ((t = ws.unwrap(t)), (e[wt.lFrame.bindingIndex] = ce)), t;
      }
      function Ep(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const Xs = class extends R.x {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          var i, o, u;
          let f = t,
            g = n || (() => null),
            C = r;
          if (t && 'object' == typeof t) {
            const O = t;
            (f = null === (i = O.next) || void 0 === i ? void 0 : i.bind(O)),
              (g = null === (o = O.error) || void 0 === o ? void 0 : o.bind(O)),
              (C = null === (u = O.complete) || void 0 === u ? void 0 : u.bind(O));
          }
          this.__isAsync && ((g = Ep(g)), f && (f = Ep(f)), C && (C = Ep(C)));
          const T = super.subscribe({ next: f, error: g, complete: C });
          return t instanceof _.w0 && t.add(T), T;
        }
      };
      function uS() {
        return this._results[Tl()]();
      }
      class jd {
        constructor(t = !1) {
          (this._emitDistinctChangesOnly = t),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const n = Tl(),
            r = jd.prototype;
          r[n] || (r[n] = uS);
        }
        get changes() {
          return this._changes || (this._changes = new Xs());
        }
        get(t) {
          return this._results[t];
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, n) {
          return this._results.reduce(t, n);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t, n) {
          const r = this;
          r.dirty = !1;
          const i = si(t);
          (this._changesDetected = !(function (e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let i = e[r],
                o = t[r];
              if ((n && ((i = n(i)), (o = n(o))), o !== i)) return !1;
            }
            return !0;
          })(r._results, i, n)) &&
            ((r._results = i),
            (r.length = i.length),
            (r.last = i[this.length - 1]),
            (r.first = i[0]));
        }
        notifyOnChanges() {
          this._changes &&
            (this._changesDetected || !this._emitDistinctChangesOnly) &&
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      Symbol;
      class Dp {
        constructor(t) {
          (this.queryList = t), (this.matches = null);
        }
        clone() {
          return new Dp(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class Sp {
        constructor(t = []) {
          this.queries = t;
        }
        createEmbeddedView(t) {
          const n = t.queries;
          if (null !== n) {
            const r = null !== t.contentQueries ? t.contentQueries[0] : n.length,
              i = [];
            for (let o = 0; o < r; o++) {
              const u = n.getByIndex(o);
              i.push(this.queries[u.indexInDeclarationView].clone());
            }
            return new Sp(i);
          }
          return null;
        }
        insertView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        detachView(t) {
          this.dirtyQueriesWithMatches(t);
        }
        dirtyQueriesWithMatches(t) {
          for (let n = 0; n < this.queries.length; n++)
            null !== b_(t, n).matches && this.queries[n].setDirty();
        }
      }
      class p_ {
        constructor(t, n, r = null) {
          (this.predicate = t), (this.flags = n), (this.read = r);
        }
      }
      class Tp {
        constructor(t = []) {
          this.queries = t;
        }
        elementStart(t, n) {
          for (let r = 0; r < this.queries.length; r++) this.queries[r].elementStart(t, n);
        }
        elementEnd(t) {
          for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t);
        }
        embeddedTView(t) {
          let n = null;
          for (let r = 0; r < this.length; r++) {
            const i = null !== n ? n.length : 0,
              o = this.getByIndex(r).embeddedTView(t, i);
            o && ((o.indexInDeclarationView = r), null !== n ? n.push(o) : (n = [o]));
          }
          return null !== n ? new Tp(n) : null;
        }
        template(t, n) {
          for (let r = 0; r < this.queries.length; r++) this.queries[r].template(t, n);
        }
        getByIndex(t) {
          return this.queries[t];
        }
        get length() {
          return this.queries.length;
        }
        track(t) {
          this.queries.push(t);
        }
      }
      class xp {
        constructor(t, n = -1) {
          (this.metadata = t),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = n);
        }
        elementStart(t, n) {
          this.isApplyingToNode(n) && this.matchTNode(t, n);
        }
        elementEnd(t) {
          this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
        }
        template(t, n) {
          this.elementStart(t, n);
        }
        embeddedTView(t, n) {
          return this.isApplyingToNode(t)
            ? ((this.crossesNgTemplate = !0), this.addMatch(-t.index, n), new xp(this.metadata))
            : null;
        }
        isApplyingToNode(t) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const n = this._declarationNodeIndex;
            let r = t.parent;
            for (; null !== r && 8 & r.type && r.index !== n; ) r = r.parent;
            return n === (null !== r ? r.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(t, n) {
          const r = this.metadata.predicate;
          if (Array.isArray(r))
            for (let i = 0; i < r.length; i++) {
              const o = r[i];
              this.matchTNodeWithReadOption(t, n, fS(n, o)),
                this.matchTNodeWithReadOption(t, n, Fi(n, t, o, !1, !1));
            }
          else
            r === ec
              ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1)
              : this.matchTNodeWithReadOption(t, n, Fi(n, t, r, !1, !1));
        }
        matchTNodeWithReadOption(t, n, r) {
          if (null !== r) {
            const i = this.metadata.read;
            if (null !== i)
              if (i === Js || i === Fd || (i === ec && 4 & n.type)) this.addMatch(n.index, -2);
              else {
                const o = Fi(n, t, i, !1, !1);
                null !== o && this.addMatch(n.index, o);
              }
            else this.addMatch(n.index, r);
          }
        }
        addMatch(t, n) {
          null === this.matches ? (this.matches = [t, n]) : this.matches.push(t, n);
        }
      }
      function fS(e, t) {
        const n = e.localNames;
        if (null !== n) for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function pS(e, t, n, r) {
        return -1 === n
          ? (function (e, t) {
              return 11 & e.type ? jl(e, t) : 4 & e.type ? Nd(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function (e, t, n) {
              return n === Js ? jl(t, e) : n === ec ? Nd(t, e) : n === Fd ? Fv(t, e) : void 0;
            })(e, t, r)
          : jr(e, e[1], n, t);
      }
      function g_(e, t, n, r) {
        const i = t[19].queries[r];
        if (null === i.matches) {
          const o = e.data,
            u = n.matches,
            f = [];
          for (let g = 0; g < u.length; g += 2) {
            const C = u[g];
            f.push(C < 0 ? null : pS(t, o[C], u[g + 1], n.metadata.read));
          }
          i.matches = f;
        }
        return i.matches;
      }
      function Ip(e, t, n, r) {
        const i = e.queries.getByIndex(n),
          o = i.matches;
        if (null !== o) {
          const u = g_(e, t, i, n);
          for (let f = 0; f < o.length; f += 2) {
            const g = o[f];
            if (g > 0) r.push(u[f / 2]);
            else {
              const C = o[f + 1],
                T = t[-g];
              for (let O = 10; O < T.length; O++) {
                const F = T[O];
                F[17] === F[3] && Ip(F[1], F, C, r);
              }
              if (null !== T[9]) {
                const O = T[9];
                for (let F = 0; F < O.length; F++) {
                  const U = O[F];
                  Ip(U[1], U, C, r);
                }
              }
            }
          }
        }
        return r;
      }
      function m_(e) {
        const t = Le(),
          n = Yt(),
          r = Mo();
        ri(r + 1);
        const i = b_(n, r);
        if (e.dirty && Qt(t) === (2 == (2 & i.metadata.flags))) {
          if (null === i.matches) e.reset([]);
          else {
            const o = i.crossesNgTemplate ? Ip(n, t, r, []) : g_(n, t, i, r);
            e.reset(o, Ev), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function y_(e, t, n) {
        const r = Yt();
        r.firstCreatePass &&
          (w_(r, new p_(e, t, n), -1), 2 == (2 & t) && (r.staticViewQueries = !0)),
          C_(r, Le(), t);
      }
      function v_(e, t, n, r) {
        const i = Yt();
        if (i.firstCreatePass) {
          const o = Hn();
          w_(i, new p_(t, n, r), o.index),
            (function (e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t);
            })(i, e),
            2 == (2 & n) && (i.staticContentQueries = !0);
        }
        C_(i, Le(), n);
      }
      function __() {
        return (e = Le()), (t = Mo()), e[19].queries[t].queryList;
        var e, t;
      }
      function C_(e, t, n) {
        const r = new jd(4 == (4 & n));
        Ug(e, t, r, r.destroy), null === t[19] && (t[19] = new Sp()), t[19].queries.push(new Dp(r));
      }
      function w_(e, t, n) {
        null === e.queries && (e.queries = new Tp()), e.queries.track(new xp(t, n));
      }
      function b_(e, t) {
        return e.queries.getByIndex(t);
      }
      function E_(e, t) {
        return Nd(e, t);
      }
      const Np = new Pn('Application Initializer');
      let Yl = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Md),
              (this.reject = Md),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, i) => {
                (this.resolve = r), (this.reject = i);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let i = 0; i < this.appInits.length; i++) {
                const o = this.appInits[i]();
                if ($h(o)) n.push(o);
                else if (zh(o)) {
                  const u = new Promise((f, g) => {
                    o.subscribe({ complete: f, error: g });
                  });
                  n.push(u);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((i) => {
                this.reject(i);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(Np, 8));
          }),
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const U_ = new Pn('AppId'),
        zS = {
          provide: U_,
          useFactory: function () {
            return `${Fp()}${Fp()}${Fp()}`;
          },
          deps: [],
        };
      function Fp() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const H_ = new Pn('Platform Initializer'),
        $_ = new Pn('Platform ID'),
        z_ = new Pn('appBootstrapListener');
      let W_ = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const $d = new Pn('LocaleId'),
        G_ = new Pn('DefaultCurrencyCode');
      class GS {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      const kp = function (e) {
          return new bp(e);
        },
        YS = kp,
        KS = function (e) {
          return Promise.resolve(kp(e));
        },
        Y_ = function (e) {
          const t = kp(e),
            r = gs(An(e).declarations).reduce((i, o) => {
              const u = un(o);
              return u && i.push(new r_(u)), i;
            }, []);
          return new GS(t, r);
        },
        QS = Y_,
        ZS = function (e) {
          return Promise.resolve(Y_(e));
        };
      let fc = (() => {
        class e {
          constructor() {
            (this.compileModuleSync = YS),
              (this.compileModuleAsync = KS),
              (this.compileModuleAndAllComponentsSync = QS),
              (this.compileModuleAndAllComponentsAsync = ZS);
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const XS = (() => Promise.resolve(0))();
      function Lp(e) {
        'undefined' == typeof Zone
          ? XS.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', e);
      }
      class Ei {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Xs(!1)),
            (this.onMicrotaskEmpty = new Xs(!1)),
            (this.onStable = new Xs(!1)),
            (this.onError = new Xs(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched();
          const i = this;
          (i._nesting = 0),
            (i._outer = i._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (i._inner = i._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (i._inner = i._inner.fork(Zone.longStackTraceZoneSpec)),
            (i.shouldCoalesceEventChangeDetection = !r && n),
            (i.shouldCoalesceRunChangeDetection = r),
            (i.lastRequestAnimationFrameId = -1),
            (i.nativeRequestAnimationFrame = (function () {
              let e = Fe.requestAnimationFrame,
                t = Fe.cancelAnimationFrame;
              if ('undefined' != typeof Zone && e && t) {
                const n = e[Zone.__symbol__('OriginalDelegate')];
                n && (e = n);
                const r = t[Zone.__symbol__('OriginalDelegate')];
                r && (t = r);
              }
              return { nativeRequestAnimationFrame: e, nativeCancelAnimationFrame: t };
            })().nativeRequestAnimationFrame),
            (function (e) {
              const t = () => {
                !(function (e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(Fe, () => {
                      e.fakeTopEventTask ||
                        (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                          'fakeTopEventTask',
                          () => {
                            (e.lastRequestAnimationFrameId = -1),
                              Vp(e),
                              (e.isCheckStableRunning = !0),
                              Bp(e),
                              (e.isCheckStableRunning = !1);
                          },
                          void 0,
                          () => {},
                          () => {},
                        )),
                        e.fakeTopEventTask.invoke();
                    })),
                    Vp(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: 'angular',
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, i, o, u, f) => {
                  try {
                    return K_(e), n.invokeTask(i, o, u, f);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection && 'eventTask' === o.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      Q_(e);
                  }
                },
                onInvoke: (n, r, i, o, u, f, g) => {
                  try {
                    return K_(e), n.invoke(i, o, u, f, g);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), Q_(e);
                  }
                },
                onHasTask: (n, r, i, o) => {
                  n.hasTask(i, o),
                    r === i &&
                      ('microTask' == o.change
                        ? ((e._hasPendingMicrotasks = o.microTask), Vp(e), Bp(e))
                        : 'macroTask' == o.change && (e.hasPendingMacrotasks = o.macroTask));
                },
                onHandleError: (n, r, i, o) => (
                  n.handleError(i, o), e.runOutsideAngular(() => e.onError.emit(o)), !1
                ),
              });
            })(i);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!Ei.isInAngularZone())
            throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (Ei.isInAngularZone())
            throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, i) {
          const o = this._inner,
            u = o.scheduleEventTask('NgZoneEvent: ' + i, t, tT, Md, Md);
          try {
            return o.runTask(u, n, r);
          } finally {
            o.cancelTask(u);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const tT = {};
      function Bp(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function Vp(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function K_(e) {
        e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function Q_(e) {
        e._nesting--, Bp(e);
      }
      class iT {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Xs()),
            (this.onMicrotaskEmpty = new Xs()),
            (this.onStable = new Xs()),
            (this.onError = new Xs());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, i) {
          return t.apply(n, r);
        }
      }
      let Z_ = (() => {
          class e {
            constructor(n) {
              (this._ngZone = n),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      Ei.assertNotInAngularZone(),
                        Lp(() => {
                          (this._isZoneStable = !0), this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Lp(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) => !r.updateCb || !r.updateCb(n) || (clearTimeout(r.timeoutId), !1),
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, i) {
              let o = -1;
              r &&
                r > 0 &&
                (o = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter((u) => u.timeoutId !== o)),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: o, updateCb: i });
            }
            whenStable(n, r, i) {
              if (i && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?',
                );
              this.addCallback(n, r, i), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(n, r, i) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(pn(Ei));
            }),
            (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        q_ = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), jp.addToWindow(this);
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return jp.findTestabilityInTree(this, n, r);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class sT {
        addToWindow(t) {}
        findTestabilityInTree(t, n, r) {
          return null;
        }
      }
      function oT(e) {
        jp = e;
      }
      let jp = new sT(),
        J_ = !0,
        X_ = !1;
      function Up() {
        return (X_ = !0), J_;
      }
      function aT() {
        if (X_) throw new Error('Cannot enable prod mode after platform setup.');
        J_ = !1;
      }
      let Ts;
      const e0 = new Pn('AllowMultipleToken');
      class pT {
        constructor(t, n) {
          (this.name = t), (this.token = n);
        }
      }
      function t0(e, t, n = []) {
        const r = `Platform: ${t}`,
          i = new Pn(r);
        return (o = []) => {
          let u = n0();
          if (!u || u.injector.get(e0, !1))
            if (e) e(n.concat(o).concat({ provide: i, useValue: !0 }));
            else {
              const f = n
                .concat(o)
                .concat({ provide: i, useValue: !0 }, { provide: Hu, useValue: 'platform' });
              !(function (e) {
                if (Ts && !Ts.destroyed && !Ts.injector.get(e0, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.',
                  );
                Ts = e.get(r0);
                const t = e.get(H_, null);
                t && t.forEach((n) => n());
              })(hn.create({ providers: f, name: r }));
            }
          return (function (e) {
            const t = n0();
            if (!t) throw new Error('No platform exists!');
            if (!t.injector.get(e, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.',
              );
            return t;
          })(i);
        };
      }
      function n0() {
        return Ts && !Ts.destroyed ? Ts : null;
      }
      let r0 = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const f = (function (e, t) {
                let n;
                return (
                  (n =
                    'noop' === e
                      ? new iT()
                      : ('zone.js' === e ? void 0 : e) ||
                        new Ei({
                          enableLongStackTrace: Up(),
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(r ? r.ngZone : void 0, {
                ngZoneEventCoalescing: (r && r.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (r && r.ngZoneRunCoalescing) || !1,
              }),
              g = [{ provide: Ei, useValue: f }];
            return f.run(() => {
              const C = hn.create({ providers: g, parent: this.injector, name: n.moduleType.name }),
                T = n.create(C),
                O = T.injector.get(Yo, null);
              if (!O)
                throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
              return (
                f.runOutsideAngular(() => {
                  const F = f.onError.subscribe({
                    next: (U) => {
                      O.handleError(U);
                    },
                  });
                  T.onDestroy(() => {
                    Hp(this._modules, T), F.unsubscribe();
                  });
                }),
                (function (e, t, n) {
                  try {
                    const r = n();
                    return $h(r)
                      ? r.catch((i) => {
                          throw (t.runOutsideAngular(() => e.handleError(i)), i);
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(O, f, () => {
                  const F = T.injector.get(Yl);
                  return (
                    F.runInitializers(),
                    F.donePromise.then(
                      () => (ep(T.injector.get($d, Dd) || Dd), this._moduleDoBootstrap(T), T),
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const i = i0({}, r);
            return (function (e, t, n) {
              const r = new bp(n);
              return Promise.resolve(r);
            })(0, 0, n).then((o) => this.bootstrapModuleFactory(o, i));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(hc);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((i) => r.bootstrap(i));
            else {
              if (!n.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${oe(
                    n.instance.constructor,
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`,
                );
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach((n) => n.destroy()),
              this._destroyListeners.forEach((n) => n()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(hn));
          }),
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function i0(e, t) {
        return Array.isArray(t) ? t.reduce(i0, e) : Object.assign(Object.assign({}, e), t);
      }
      let hc = (() => {
        class e {
          constructor(n, r, i, o, u) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = i),
              (this._componentFactoryResolver = o),
              (this._initStatus = u),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                },
              }));
            const f = new Se.y((C) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    C.next(this._stable), C.complete();
                  });
              }),
              g = new Se.y((C) => {
                let T;
                this._zone.runOutsideAngular(() => {
                  T = this._zone.onStable.subscribe(() => {
                    Ei.assertNotInAngularZone(),
                      Lp(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), C.next(!0));
                      });
                  });
                });
                const O = this._zone.onUnstable.subscribe(() => {
                  Ei.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        C.next(!1);
                      }));
                });
                return () => {
                  T.unsubscribe(), O.unsubscribe();
                };
              });
            this.isStable = (0, fe.T)(f, g.pipe((0, he.B)()));
          }
          bootstrap(n, r) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.',
              );
            let i;
            (i = n instanceof Cv ? n : this._componentFactoryResolver.resolveComponentFactory(n)),
              this.componentTypes.push(i.componentType);
            const o = (function (e) {
                return e.isBoundToModule;
              })(i)
                ? void 0
                : this._injector.get(La),
              f = i.create(hn.NULL, [], r || i.selector, o),
              g = f.location.nativeElement,
              C = f.injector.get(Z_, null),
              T = C && f.injector.get(q_);
            return (
              C && T && T.registerApplication(g, C),
              f.onDestroy(() => {
                this.detachView(f.hostView),
                  Hp(this.components, f),
                  T && T.unregisterApplication(g);
              }),
              this._loadComponent(f),
              f
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n));
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            Hp(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(z_, [])
                .concat(this._bootstrapListeners)
                .forEach((i) => i(n));
          }
          ngOnDestroy() {
            this._views.slice().forEach((n) => n.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(Ei), pn(hn), pn(Yo), pn(ka), pn(Yl));
          }),
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Hp(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class CT {}
      class bT {}
      const ET = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      let DT = (() => {
        class e {
          constructor(n, r) {
            (this._compiler = n), (this._config = r || ET);
          }
          load(n) {
            return this.loadAndCompile(n);
          }
          loadAndCompile(n) {
            let [r, i] = n.split('#');
            return (
              void 0 === i && (i = 'default'),
              k(8255)(r)
                .then((o) => o[i])
                .then((o) => l0(o, r, i))
                .then((o) => this._compiler.compileModuleAsync(o))
            );
          }
          loadFactory(n) {
            let [r, i] = n.split('#'),
              o = 'NgFactory';
            return (
              void 0 === i && ((i = 'default'), (o = '')),
              k(8255)(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix)
                .then((u) => u[i + o])
                .then((u) => l0(u, r, i))
            );
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(fc), pn(bT, 8));
          }),
          (e.ɵprov = Bt({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function l0(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      const RT = function (e) {
          return null;
        },
        NT = t0(null, 'core', [
          { provide: $_, useValue: 'unknown' },
          { provide: r0, deps: [hn] },
          { provide: q_, deps: [] },
          { provide: W_, deps: [] },
        ]),
        VT = [
          { provide: hc, useClass: hc, deps: [Ei, hn, Yo, ka, Yl] },
          {
            provide: UD,
            deps: [Ei],
            useFactory: function (e) {
              let t = [];
              return (
                e.onStable.subscribe(() => {
                  for (; t.length; ) t.pop()();
                }),
                function (n) {
                  t.push(n);
                }
              );
            },
          },
          { provide: Yl, useClass: Yl, deps: [[new Li(), Np]] },
          { provide: fc, useClass: fc, deps: [] },
          zS,
          {
            provide: Od,
            useFactory: function () {
              return FE;
            },
            deps: [],
          },
          {
            provide: Rd,
            useFactory: function () {
              return kE;
            },
            deps: [],
          },
          {
            provide: $d,
            useFactory: function (e) {
              return ep((e = e || ('undefined' != typeof $localize && $localize.locale) || Dd)), e;
            },
            deps: [[new zs($d), new Li(), new Ws()]],
          },
          { provide: G_, useValue: 'USD' },
        ];
      let UT = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(pn(hc));
          }),
          (e.ɵmod = Si({ type: e })),
          (e.ɵinj = St({ providers: VT })),
          e
        );
      })();
    },
    9075: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { b2: () => Si, H7: () => Ot, h_: () => Xn, Dx: () => un, q6: () => _r });
      var R = k(8583),
        _ = k(7716);
      class Se extends R.w_ {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      }
      class fe extends Se {
        static makeCurrent() {
          (0, R.HT)(new fe());
        }
        onAndCancel(W, L, J) {
          return (
            W.addEventListener(L, J, !1),
            () => {
              W.removeEventListener(L, J, !1);
            }
          );
        }
        dispatchEvent(W, L) {
          W.dispatchEvent(L);
        }
        remove(W) {
          W.parentNode && W.parentNode.removeChild(W);
        }
        createElement(W, L) {
          return (L = L || this.getDefaultDocument()).createElement(W);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(W) {
          return W.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(W) {
          return W instanceof DocumentFragment;
        }
        getGlobalEventTarget(W, L) {
          return 'window' === L ? window : 'document' === L ? W : 'body' === L ? W.body : null;
        }
        getBaseHref(W) {
          const L =
            ((he = he || document.querySelector('base')), he ? he.getAttribute('href') : null);
          return null == L
            ? null
            : (function (Z) {
                (ie = ie || document.createElement('a')), ie.setAttribute('href', Z);
                const W = ie.pathname;
                return '/' === W.charAt(0) ? W : `/${W}`;
              })(L);
        }
        resetBaseElement() {
          he = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(W) {
          return (0, R.Mx)(document.cookie, W);
        }
      }
      let ie,
        he = null;
      const we = new _.OlP('TRANSITION_ID'),
        xe = [
          {
            provide: _.ip1,
            useFactory: function (Z, W, L) {
              return () => {
                L.get(_.CZH).donePromise.then(() => {
                  const J = (0, R.q)();
                  Array.prototype.slice
                    .apply(W.querySelectorAll('style[ng-transition]'))
                    .filter((ct) => ct.getAttribute('ng-transition') === Z)
                    .forEach((ct) => J.remove(ct));
                });
              };
            },
            deps: [we, R.K0, _.zs3],
            multi: !0,
          },
        ];
      class H {
        static init() {
          (0, _.VLi)(new H());
        }
        addToWindow(W) {
          (_.dqk.getAngularTestability = (J, le = !0) => {
            const ct = W.findTestabilityInTree(J, le);
            if (null == ct) throw new Error('Could not find testability for element.');
            return ct;
          }),
            (_.dqk.getAllAngularTestabilities = () => W.getAllTestabilities()),
            (_.dqk.getAllAngularRootElements = () => W.getAllRootElements()),
            _.dqk.frameworkStabilizers || (_.dqk.frameworkStabilizers = []),
            _.dqk.frameworkStabilizers.push((J) => {
              const le = _.dqk.getAllAngularTestabilities();
              let ct = le.length,
                vt = !1;
              const Ut = function (Tt) {
                (vt = vt || Tt), ct--, 0 == ct && J(vt);
              };
              le.forEach(function (Tt) {
                Tt.whenStable(Ut);
              });
            });
        }
        findTestabilityInTree(W, L, J) {
          if (null == L) return null;
          const le = W.getTestability(L);
          return null != le
            ? le
            : J
            ? (0, R.q)().isShadowRoot(L)
              ? this.findTestabilityInTree(W, L.host, !0)
              : this.findTestabilityInTree(W, L.parentElement, !0)
            : null;
        }
      }
      let Ne = (() => {
        class Z {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (Z.ɵfac = function (L) {
            return new (L || Z)();
          }),
          (Z.ɵprov = _.Yz7({ token: Z, factory: Z.ɵfac })),
          Z
        );
      })();
      const ae = new _.OlP('EventManagerPlugins');
      let ye = (() => {
        class Z {
          constructor(L, J) {
            (this._zone = J),
              (this._eventNameToPlugin = new Map()),
              L.forEach((le) => (le.manager = this)),
              (this._plugins = L.slice().reverse());
          }
          addEventListener(L, J, le) {
            return this._findPluginFor(J).addEventListener(L, J, le);
          }
          addGlobalEventListener(L, J, le) {
            return this._findPluginFor(J).addGlobalEventListener(L, J, le);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(L) {
            const J = this._eventNameToPlugin.get(L);
            if (J) return J;
            const le = this._plugins;
            for (let ct = 0; ct < le.length; ct++) {
              const vt = le[ct];
              if (vt.supports(L)) return this._eventNameToPlugin.set(L, vt), vt;
            }
            throw new Error(`No event manager plugin found for event ${L}`);
          }
        }
        return (
          (Z.ɵfac = function (L) {
            return new (L || Z)(_.LFG(ae), _.LFG(_.R0b));
          }),
          (Z.ɵprov = _.Yz7({ token: Z, factory: Z.ɵfac })),
          Z
        );
      })();
      class Re {
        constructor(W) {
          this._doc = W;
        }
        addGlobalEventListener(W, L, J) {
          const le = (0, R.q)().getGlobalEventTarget(this._doc, W);
          if (!le) throw new Error(`Unsupported event target ${le} for event ${L}`);
          return this.addEventListener(le, L, J);
        }
      }
      let re = (() => {
          class Z {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(L) {
              const J = new Set();
              L.forEach((le) => {
                this._stylesSet.has(le) || (this._stylesSet.add(le), J.add(le));
              }),
                this.onStylesAdded(J);
            }
            onStylesAdded(L) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (Z.ɵfac = function (L) {
              return new (L || Z)();
            }),
            (Z.ɵprov = _.Yz7({ token: Z, factory: Z.ɵfac })),
            Z
          );
        })(),
        dt = (() => {
          class Z extends re {
            constructor(L) {
              super(),
                (this._doc = L),
                (this._hostNodes = new Map()),
                this._hostNodes.set(L.head, []);
            }
            _addStylesToHost(L, J, le) {
              L.forEach((ct) => {
                const vt = this._doc.createElement('style');
                (vt.textContent = ct), le.push(J.appendChild(vt));
              });
            }
            addHost(L) {
              const J = [];
              this._addStylesToHost(this._stylesSet, L, J), this._hostNodes.set(L, J);
            }
            removeHost(L) {
              const J = this._hostNodes.get(L);
              J && J.forEach(me), this._hostNodes.delete(L);
            }
            onStylesAdded(L) {
              this._hostNodes.forEach((J, le) => {
                this._addStylesToHost(L, le, J);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((L) => L.forEach(me));
            }
          }
          return (
            (Z.ɵfac = function (L) {
              return new (L || Z)(_.LFG(R.K0));
            }),
            (Z.ɵprov = _.Yz7({ token: Z, factory: Z.ɵfac })),
            Z
          );
        })();
      function me(Z) {
        (0, R.q)().remove(Z);
      }
      const Ge = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        Te = /%COMP%/g;
      function mr(Z, W, L) {
        for (let J = 0; J < W.length; J++) {
          let le = W[J];
          Array.isArray(le) ? mr(Z, le, L) : ((le = le.replace(Te, Z)), L.push(le));
        }
        return L;
      }
      function St(Z) {
        return (W) => {
          if ('__ngUnwrap__' === W) return Z;
          !1 === Z(W) && (W.preventDefault(), (W.returnValue = !1));
        };
      }
      let Er = (() => {
        class Z {
          constructor(L, J, le) {
            (this.eventManager = L),
              (this.sharedStylesHost = J),
              (this.appId = le),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Gr(L));
          }
          createRenderer(L, J) {
            if (!L || !J) return this.defaultRenderer;
            switch (J.encapsulation) {
              case _.ifc.Emulated: {
                let le = this.rendererByCompId.get(J.id);
                return (
                  le ||
                    ((le = new Yr(this.eventManager, this.sharedStylesHost, J, this.appId)),
                    this.rendererByCompId.set(J.id, le)),
                  le.applyToHost(L),
                  le
                );
              }
              case 1:
              case _.ifc.ShadowDom:
                return new Kr(this.eventManager, this.sharedStylesHost, L, J);
              default:
                if (!this.rendererByCompId.has(J.id)) {
                  const le = mr(J.id, J.styles, []);
                  this.sharedStylesHost.addStyles(le),
                    this.rendererByCompId.set(J.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (Z.ɵfac = function (L) {
            return new (L || Z)(_.LFG(ye), _.LFG(dt), _.LFG(_.AFp));
          }),
          (Z.ɵprov = _.Yz7({ token: Z, factory: Z.ɵfac })),
          Z
        );
      })();
      class Gr {
        constructor(W) {
          (this.eventManager = W), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(W, L) {
          return L ? document.createElementNS(Ge[L] || L, W) : document.createElement(W);
        }
        createComment(W) {
          return document.createComment(W);
        }
        createText(W) {
          return document.createTextNode(W);
        }
        appendChild(W, L) {
          W.appendChild(L);
        }
        insertBefore(W, L, J) {
          W && W.insertBefore(L, J);
        }
        removeChild(W, L) {
          W && W.removeChild(L);
        }
        selectRootElement(W, L) {
          let J = 'string' == typeof W ? document.querySelector(W) : W;
          if (!J) throw new Error(`The selector "${W}" did not match any elements`);
          return L || (J.textContent = ''), J;
        }
        parentNode(W) {
          return W.parentNode;
        }
        nextSibling(W) {
          return W.nextSibling;
        }
        setAttribute(W, L, J, le) {
          if (le) {
            L = le + ':' + L;
            const ct = Ge[le];
            ct ? W.setAttributeNS(ct, L, J) : W.setAttribute(L, J);
          } else W.setAttribute(L, J);
        }
        removeAttribute(W, L, J) {
          if (J) {
            const le = Ge[J];
            le ? W.removeAttributeNS(le, L) : W.removeAttribute(`${J}:${L}`);
          } else W.removeAttribute(L);
        }
        addClass(W, L) {
          W.classList.add(L);
        }
        removeClass(W, L) {
          W.classList.remove(L);
        }
        setStyle(W, L, J, le) {
          le & (_.JOm.DashCase | _.JOm.Important)
            ? W.style.setProperty(L, J, le & _.JOm.Important ? 'important' : '')
            : (W.style[L] = J);
        }
        removeStyle(W, L, J) {
          J & _.JOm.DashCase ? W.style.removeProperty(L) : (W.style[L] = '');
        }
        setProperty(W, L, J) {
          W[L] = J;
        }
        setValue(W, L) {
          W.nodeValue = L;
        }
        listen(W, L, J) {
          return 'string' == typeof W
            ? this.eventManager.addGlobalEventListener(W, L, St(J))
            : this.eventManager.addEventListener(W, L, St(J));
        }
      }
      class Yr extends Gr {
        constructor(W, L, J, le) {
          super(W), (this.component = J);
          const ct = mr(le + '-' + J.id, J.styles, []);
          L.addStyles(ct),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(Te, le + '-' + J.id)),
            (this.hostAttr = '_nghost-%COMP%'.replace(Te, le + '-' + J.id));
        }
        applyToHost(W) {
          super.setAttribute(W, this.hostAttr, '');
        }
        createElement(W, L) {
          const J = super.createElement(W, L);
          return super.setAttribute(J, this.contentAttr, ''), J;
        }
      }
      class Kr extends Gr {
        constructor(W, L, J, le) {
          super(W),
            (this.sharedStylesHost = L),
            (this.hostEl = J),
            (this.shadowRoot = J.attachShadow({ mode: 'open' })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const ct = mr(le.id, le.styles, []);
          for (let vt = 0; vt < ct.length; vt++) {
            const Ut = document.createElement('style');
            (Ut.textContent = ct[vt]), this.shadowRoot.appendChild(Ut);
          }
        }
        nodeOrShadowRoot(W) {
          return W === this.hostEl ? this.shadowRoot : W;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(W, L) {
          return super.appendChild(this.nodeOrShadowRoot(W), L);
        }
        insertBefore(W, L, J) {
          return super.insertBefore(this.nodeOrShadowRoot(W), L, J);
        }
        removeChild(W, L) {
          return super.removeChild(this.nodeOrShadowRoot(W), L);
        }
        parentNode(W) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(W)));
        }
      }
      let Qr = (() => {
        class Z extends Re {
          constructor(L) {
            super(L);
          }
          supports(L) {
            return !0;
          }
          addEventListener(L, J, le) {
            return L.addEventListener(J, le, !1), () => this.removeEventListener(L, J, le);
          }
          removeEventListener(L, J, le) {
            return L.removeEventListener(J, le);
          }
        }
        return (
          (Z.ɵfac = function (L) {
            return new (L || Z)(_.LFG(R.K0));
          }),
          (Z.ɵprov = _.Yz7({ token: Z, factory: Z.ɵfac })),
          Z
        );
      })();
      const pt = ['alt', 'control', 'meta', 'shift'],
        it = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          'Del': 'Delete',
          'Esc': 'Escape',
          'Left': 'ArrowLeft',
          'Right': 'ArrowRight',
          'Up': 'ArrowUp',
          'Down': 'ArrowDown',
          'Menu': 'ContextMenu',
          'Scroll': 'ScrollLock',
          'Win': 'OS',
        },
        wn = {
          'A': '1',
          'B': '2',
          'C': '3',
          'D': '4',
          'E': '5',
          'F': '6',
          'G': '7',
          'H': '8',
          'I': '9',
          'J': '*',
          'K': '+',
          'M': '-',
          'N': '.',
          'O': '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        sr = {
          alt: (Z) => Z.altKey,
          control: (Z) => Z.ctrlKey,
          meta: (Z) => Z.metaKey,
          shift: (Z) => Z.shiftKey,
        };
      let $t = (() => {
          class Z extends Re {
            constructor(L) {
              super(L);
            }
            supports(L) {
              return null != Z.parseEventName(L);
            }
            addEventListener(L, J, le) {
              const ct = Z.parseEventName(J),
                vt = Z.eventCallback(ct.fullKey, le, this.manager.getZone());
              return this.manager
                .getZone()
                .runOutsideAngular(() => (0, R.q)().onAndCancel(L, ct.domEventName, vt));
            }
            static parseEventName(L) {
              const J = L.toLowerCase().split('.'),
                le = J.shift();
              if (0 === J.length || ('keydown' !== le && 'keyup' !== le)) return null;
              const ct = Z._normalizeKey(J.pop());
              let vt = '';
              if (
                (pt.forEach((Tt) => {
                  const Nr = J.indexOf(Tt);
                  Nr > -1 && (J.splice(Nr, 1), (vt += Tt + '.'));
                }),
                (vt += ct),
                0 != J.length || 0 === ct.length)
              )
                return null;
              const Ut = {};
              return (Ut.domEventName = le), (Ut.fullKey = vt), Ut;
            }
            static getEventFullKey(L) {
              let J = '',
                le = (function (Z) {
                  let W = Z.key;
                  if (null == W) {
                    if (((W = Z.keyIdentifier), null == W)) return 'Unidentified';
                    W.startsWith('U+') &&
                      ((W = String.fromCharCode(parseInt(W.substring(2), 16))),
                      3 === Z.location && wn.hasOwnProperty(W) && (W = wn[W]));
                  }
                  return it[W] || W;
                })(L);
              return (
                (le = le.toLowerCase()),
                ' ' === le ? (le = 'space') : '.' === le && (le = 'dot'),
                pt.forEach((ct) => {
                  ct != le && sr[ct](L) && (J += ct + '.');
                }),
                (J += le),
                J
              );
            }
            static eventCallback(L, J, le) {
              return (ct) => {
                Z.getEventFullKey(ct) === L && le.runGuarded(() => J(ct));
              };
            }
            static _normalizeKey(L) {
              switch (L) {
                case 'esc':
                  return 'escape';
                default:
                  return L;
              }
            }
          }
          return (
            (Z.ɵfac = function (L) {
              return new (L || Z)(_.LFG(R.K0));
            }),
            (Z.ɵprov = _.Yz7({ token: Z, factory: Z.ɵfac })),
            Z
          );
        })(),
        Ot = (() => {
          class Z {}
          return (
            (Z.ɵfac = function (L) {
              return new (L || Z)();
            }),
            (Z.ɵprov = (0, _.Yz7)({
              factory: function () {
                return (0, _.LFG)(or);
              },
              token: Z,
              providedIn: 'root',
            })),
            Z
          );
        })(),
        or = (() => {
          class Z extends Ot {
            constructor(L) {
              super(), (this._doc = L);
            }
            sanitize(L, J) {
              if (null == J) return null;
              switch (L) {
                case _.q3G.NONE:
                  return J;
                case _.q3G.HTML:
                  return (0, _.qzn)(J, 'HTML')
                    ? (0, _.z3N)(J)
                    : (0, _.EiD)(this._doc, String(J)).toString();
                case _.q3G.STYLE:
                  return (0, _.qzn)(J, 'Style') ? (0, _.z3N)(J) : J;
                case _.q3G.SCRIPT:
                  if ((0, _.qzn)(J, 'Script')) return (0, _.z3N)(J);
                  throw new Error('unsafe value used in a script context');
                case _.q3G.URL:
                  return (
                    (0, _.yhl)(J), (0, _.qzn)(J, 'URL') ? (0, _.z3N)(J) : (0, _.mCW)(String(J))
                  );
                case _.q3G.RESOURCE_URL:
                  if ((0, _.qzn)(J, 'ResourceURL')) return (0, _.z3N)(J);
                  throw new Error(
                    'unsafe value used in a resource URL context (see https://g.co/ng/security#xss)',
                  );
                default:
                  throw new Error(
                    `Unexpected SecurityContext ${L} (see https://g.co/ng/security#xss)`,
                  );
              }
            }
            bypassSecurityTrustHtml(L) {
              return (0, _.JVY)(L);
            }
            bypassSecurityTrustStyle(L) {
              return (0, _.L6k)(L);
            }
            bypassSecurityTrustScript(L) {
              return (0, _.eBb)(L);
            }
            bypassSecurityTrustUrl(L) {
              return (0, _.LAX)(L);
            }
            bypassSecurityTrustResourceUrl(L) {
              return (0, _.pB0)(L);
            }
          }
          return (
            (Z.ɵfac = function (L) {
              return new (L || Z)(_.LFG(R.K0));
            }),
            (Z.ɵprov = (0, _.Yz7)({
              factory: function () {
                return (function (Z) {
                  return new or(Z.get(R.K0));
                })((0, _.LFG)(_.gxx));
              },
              token: Z,
              providedIn: 'root',
            })),
            Z
          );
        })();
      const _r = (0, _.eFA)(_._c5, 'browser', [
          { provide: _.Lbi, useValue: R.bD },
          {
            provide: _.g9A,
            useValue: function () {
              fe.makeCurrent(), H.init();
            },
            multi: !0,
          },
          {
            provide: R.K0,
            useFactory: function () {
              return (0, _.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        Di = [
          [],
          { provide: _.zSh, useValue: 'root' },
          {
            provide: _.qLn,
            useFactory: function () {
              return new _.qLn();
            },
            deps: [],
          },
          { provide: ae, useClass: Qr, multi: !0, deps: [R.K0, _.R0b, _.Lbi] },
          { provide: ae, useClass: $t, multi: !0, deps: [R.K0] },
          [],
          { provide: Er, useClass: Er, deps: [ye, dt, _.AFp] },
          { provide: _.FYo, useExisting: Er },
          { provide: re, useExisting: dt },
          { provide: dt, useClass: dt, deps: [R.K0] },
          { provide: _.dDg, useClass: _.dDg, deps: [_.R0b] },
          { provide: ye, useClass: ye, deps: [ae, _.R0b] },
          { provide: R.JF, useClass: Ne, deps: [] },
          [],
        ];
      let Si = (() => {
        class Z {
          constructor(L) {
            if (L)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.',
              );
          }
          static withServerTransition(L) {
            return {
              ngModule: Z,
              providers: [
                { provide: _.AFp, useValue: L.appId },
                { provide: we, useExisting: _.AFp },
                xe,
              ],
            };
          }
        }
        return (
          (Z.ɵfac = function (L) {
            return new (L || Z)(_.LFG(Z, 12));
          }),
          (Z.ɵmod = _.oAB({ type: Z })),
          (Z.ɵinj = _.cJS({ providers: Di, imports: [R.ez, _.hGG] })),
          Z
        );
      })();
      function Yi() {
        return new Xn((0, _.LFG)(R.K0));
      }
      let Xn = (() => {
        class Z {
          constructor(L) {
            (this._doc = L), (this._dom = (0, R.q)());
          }
          addTag(L, J = !1) {
            return L ? this._getOrCreateElement(L, J) : null;
          }
          addTags(L, J = !1) {
            return L
              ? L.reduce((le, ct) => (ct && le.push(this._getOrCreateElement(ct, J)), le), [])
              : [];
          }
          getTag(L) {
            return (L && this._doc.querySelector(`meta[${L}]`)) || null;
          }
          getTags(L) {
            if (!L) return [];
            const J = this._doc.querySelectorAll(`meta[${L}]`);
            return J ? [].slice.call(J) : [];
          }
          updateTag(L, J) {
            if (!L) return null;
            J = J || this._parseSelector(L);
            const le = this.getTag(J);
            return le ? this._setMetaElementAttributes(L, le) : this._getOrCreateElement(L, !0);
          }
          removeTag(L) {
            this.removeTagElement(this.getTag(L));
          }
          removeTagElement(L) {
            L && this._dom.remove(L);
          }
          _getOrCreateElement(L, J = !1) {
            if (!J) {
              const vt = this._parseSelector(L),
                Ut = this.getTags(vt).filter((Tt) => this._containsAttributes(L, Tt))[0];
              if (void 0 !== Ut) return Ut;
            }
            const le = this._dom.createElement('meta');
            return (
              this._setMetaElementAttributes(L, le),
              this._doc.getElementsByTagName('head')[0].appendChild(le),
              le
            );
          }
          _setMetaElementAttributes(L, J) {
            return (
              Object.keys(L).forEach((le) => J.setAttribute(this._getMetaKeyMap(le), L[le])), J
            );
          }
          _parseSelector(L) {
            const J = L.name ? 'name' : 'property';
            return `${J}="${L[J]}"`;
          }
          _containsAttributes(L, J) {
            return Object.keys(L).every((le) => J.getAttribute(this._getMetaKeyMap(le)) === L[le]);
          }
          _getMetaKeyMap(L) {
            return ar[L] || L;
          }
        }
        return (
          (Z.ɵfac = function (L) {
            return new (L || Z)(_.LFG(R.K0));
          }),
          (Z.ɵprov = (0, _.Yz7)({ factory: Yi, token: Z, providedIn: 'root' })),
          Z
        );
      })();
      const ar = { httpEquiv: 'http-equiv' };
      function li() {
        return new un((0, _.LFG)(R.K0));
      }
      let un = (() => {
        class Z {
          constructor(L) {
            this._doc = L;
          }
          getTitle() {
            return this._doc.title;
          }
          setTitle(L) {
            this._doc.title = L || '';
          }
        }
        return (
          (Z.ɵfac = function (L) {
            return new (L || Z)(_.LFG(R.K0));
          }),
          (Z.ɵprov = (0, _.Yz7)({ factory: li, token: Z, providedIn: 'root' })),
          Z
        );
      })();
      'undefined' != typeof window && window;
    },
    6214: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, {
        gz: () => vt,
        m2: () => jt,
        OD: () => Ct,
        F0: () => yn,
        rH: () => ks,
        Bz: () => su,
        lC: () => Ri,
      });
      var R = k(8583),
        _ = k(7716),
        Se = k(1776),
        fe = k(5929);
      function he(y) {
        return new Se.y(function (m) {
          (0, fe.Xf)(y()).subscribe(m);
        });
      }
      var ne = k(9162),
        ie = k(8839),
        oe = k(4297),
        we = k(5076);
      function Ve() {
        return (0, oe.e)(function (y, m) {
          var p = null;
          y._refCount++;
          var w = new we.Q(m, void 0, void 0, void 0, function () {
            if (!y || y._refCount <= 0 || 0 < --y._refCount) p = null;
            else {
              var S = y._connection,
                A = p;
              (p = null), S && (!A || S === A) && S.unsubscribe(), m.unsubscribe();
            }
          });
          y.subscribe(w), w.closed || (p = y.connect());
        });
      }
      var xe = (function (y) {
          function m(p, w) {
            var S = y.call(this) || this;
            return (
              (S.source = p),
              (S.subjectFactory = w),
              (S._subject = null),
              (S._refCount = 0),
              (S._connection = null),
              (0, oe.A)(p) && (S.lift = p.lift),
              S
            );
          }
          return (
            (0, ne.ZT)(m, y),
            (m.prototype._subscribe = function (p) {
              return this.getSubject().subscribe(p);
            }),
            (m.prototype.getSubject = function () {
              var p = this._subject;
              return (!p || p.isStopped) && (this._subject = this.subjectFactory()), this._subject;
            }),
            (m.prototype._teardown = function () {
              this._refCount = 0;
              var p = this._connection;
              (this._subject = this._connection = null), null == p || p.unsubscribe();
            }),
            (m.prototype.connect = function () {
              var p = this,
                w = this._connection;
              if (!w) {
                w = this._connection = new ie.w0();
                var S = this.getSubject();
                w.add(
                  this.source.subscribe(
                    new we.Q(
                      S,
                      void 0,
                      function () {
                        p._teardown(), S.complete();
                      },
                      function (A) {
                        p._teardown(), S.error(A);
                      },
                      function () {
                        return p._teardown();
                      },
                    ),
                  ),
                ),
                  w.closed && ((this._connection = null), (w = ie.w0.EMPTY));
              }
              return w;
            }),
            (m.prototype.refCount = function () {
              return Ve()(this);
            }),
            m
          );
        })(Se.y),
        H = k(1964),
        Ne = k(5094),
        Ee = k(4544),
        Me = k(1987),
        Ke = k(9044),
        st = k(6149),
        Ue = k(6889);
      function Ze(y, m, p, w, S) {
        return function (A, B) {
          var $ = p,
            ge = m,
            et = 0;
          A.subscribe(
            new we.Q(
              B,
              function (gt) {
                var kt = et++;
                (ge = $ ? y(ge, gt, kt) : (($ = !0), gt)), w && B.next(ge);
              },
              S &&
                function () {
                  $ && B.next(ge), B.complete();
                },
            ),
          );
        };
      }
      function $e(y, m) {
        return (0, oe.e)(Ze(y, m, arguments.length >= 2, !0));
      }
      var He = k(4689);
      function qe(y) {
        return y <= 0
          ? function () {
              return st.E;
            }
          : (0, oe.e)(function (m, p) {
              var w = [];
              m.subscribe(
                new we.Q(
                  p,
                  function (S) {
                    w.push(S), y < w.length && w.shift();
                  },
                  function () {
                    var S, A;
                    try {
                      for (var B = (0, ne.XA)(w), $ = B.next(); !$.done; $ = B.next())
                        p.next($.value);
                    } catch (et) {
                      S = { error: et };
                    } finally {
                      try {
                        $ && !$.done && (A = B.return) && A.call(B);
                      } finally {
                        if (S) throw S.error;
                      }
                    }
                    p.complete();
                  },
                  void 0,
                  function () {
                    w = null;
                  },
                ),
              );
            });
      }
      var ot = k(8405),
        tt = k(9496),
        yt = k(2738),
        X = k(5207),
        ae = k(7540),
        ye = k(4294),
        Re = k(9978),
        re = k(5894),
        dt = k(3766),
        me = k(7920),
        Ge = k(7216),
        Te = k(9922),
        Xe = k(23);
      class nt {
        constructor(m, p) {
          (this.id = m), (this.url = p);
        }
      }
      class Ct extends nt {
        constructor(m, p, w = 'imperative', S = null) {
          super(m, p), (this.navigationTrigger = w), (this.restoredState = S);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class jt extends nt {
        constructor(m, p, w) {
          super(m, p), (this.urlAfterRedirects = w);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class In extends nt {
        constructor(m, p, w) {
          super(m, p), (this.reason = w);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class Bt extends nt {
        constructor(m, p, w) {
          super(m, p), (this.error = w);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class mr extends nt {
        constructor(m, p, w, S) {
          super(m, p), (this.urlAfterRedirects = w), (this.state = S);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class St extends nt {
        constructor(m, p, w, S) {
          super(m, p), (this.urlAfterRedirects = w), (this.state = S);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class nn extends nt {
        constructor(m, p, w, S, A) {
          super(m, p), (this.urlAfterRedirects = w), (this.state = S), (this.shouldActivate = A);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Er extends nt {
        constructor(m, p, w, S) {
          super(m, p), (this.urlAfterRedirects = w), (this.state = S);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Gr extends nt {
        constructor(m, p, w, S) {
          super(m, p), (this.urlAfterRedirects = w), (this.state = S);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Mn {
        constructor(m) {
          this.route = m;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Dr {
        constructor(m) {
          this.route = m;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class Rr {
        constructor(m) {
          this.snapshot = m;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Yr {
        constructor(m) {
          this.snapshot = m;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Kr {
        constructor(m) {
          this.snapshot = m;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class Qr {
        constructor(m) {
          this.snapshot = m;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''
          }')`;
        }
      }
      class ft {
        constructor(m, p, w) {
          (this.routerEvent = m), (this.position = p), (this.anchor = w);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      const at = 'primary';
      class De {
        constructor(m) {
          this.params = m || {};
        }
        has(m) {
          return Object.prototype.hasOwnProperty.call(this.params, m);
        }
        get(m) {
          if (this.has(m)) {
            const p = this.params[m];
            return Array.isArray(p) ? p[0] : p;
          }
          return null;
        }
        getAll(m) {
          if (this.has(m)) {
            const p = this.params[m];
            return Array.isArray(p) ? p : [p];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Y(y) {
        return new De(y);
      }
      const Q = 'ngNavigationCancelingError';
      function We(y) {
        const m = Error('NavigationCancelingError: ' + y);
        return (m[Q] = !0), m;
      }
      function rt(y, m, p) {
        const w = p.path.split('/');
        if (
          w.length > y.length ||
          ('full' === p.pathMatch && (m.hasChildren() || w.length < y.length))
        )
          return null;
        const S = {};
        for (let A = 0; A < w.length; A++) {
          const B = w[A],
            $ = y[A];
          if (B.startsWith(':')) S[B.substring(1)] = $;
          else if (B !== $.path) return null;
        }
        return { consumed: y.slice(0, w.length), posParams: S };
      }
      function pt(y, m) {
        const p = y ? Object.keys(y) : void 0,
          w = m ? Object.keys(m) : void 0;
        if (!p || !w || p.length != w.length) return !1;
        let S;
        for (let A = 0; A < p.length; A++) if (((S = p[A]), !Pe(y[S], m[S]))) return !1;
        return !0;
      }
      function Pe(y, m) {
        if (Array.isArray(y) && Array.isArray(m)) {
          if (y.length !== m.length) return !1;
          const p = [...y].sort(),
            w = [...m].sort();
          return p.every((S, A) => w[A] === S);
        }
        return y === m;
      }
      function it(y) {
        return Array.prototype.concat.apply([], y);
      }
      function wn(y) {
        return y.length > 0 ? y[y.length - 1] : null;
      }
      function Et(y, m) {
        for (const p in y) y.hasOwnProperty(p) && m(y[p], p);
      }
      function Fe(y) {
        return (0, _.CqO)(y) ? y : (0, _.QGY)(y) ? (0, fe.Dp)(Promise.resolve(y)) : (0, H.of)(y);
      }
      const sr = {
          exact: function bn(y, m, p) {
            if (
              !kn(y.segments, m.segments) ||
              !Un(y.segments, m.segments, p) ||
              y.numberOfChildren !== m.numberOfChildren
            )
              return !1;
            for (const w in m.children)
              if (!y.children[w] || !bn(y.children[w], m.children[w], p)) return !1;
            return !0;
          },
          subset: Sr,
        },
        $t = {
          exact: function (y, m) {
            return pt(y, m);
          },
          subset: function (y, m) {
            return (
              Object.keys(m).length <= Object.keys(y).length &&
              Object.keys(m).every((p) => Pe(y[p], m[p]))
            );
          },
          ignored: () => !0,
        };
      function bt(y, m, p) {
        return (
          sr[p.paths](y.root, m.root, p.matrixParams) &&
          $t[p.queryParams](y.queryParams, m.queryParams) &&
          !('exact' === p.fragment && y.fragment !== m.fragment)
        );
      }
      function Sr(y, m, p) {
        return Zr(y, m, m.segments, p);
      }
      function Zr(y, m, p, w) {
        if (y.segments.length > p.length) {
          const S = y.segments.slice(0, p.length);
          return !(!kn(S, p) || m.hasChildren() || !Un(S, p, w));
        }
        if (y.segments.length === p.length) {
          if (!kn(y.segments, p) || !Un(y.segments, p, w)) return !1;
          for (const S in m.children)
            if (!y.children[S] || !Sr(y.children[S], m.children[S], w)) return !1;
          return !0;
        }
        {
          const S = p.slice(0, y.segments.length),
            A = p.slice(y.segments.length);
          return (
            !!(kn(y.segments, S) && Un(y.segments, S, w) && y.children[at]) &&
            Zr(y.children[at], m, A, w)
          );
        }
      }
      function Un(y, m, p) {
        return m.every((w, S) => $t[p](y[S].parameters, w.parameters));
      }
      class Fn {
        constructor(m, p, w) {
          (this.root = m), (this.queryParams = p), (this.fragment = w);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Y(this.queryParams)), this._queryParamMap
          );
        }
        toString() {
          return Yi.serialize(this);
        }
      }
      class Mt {
        constructor(m, p) {
          (this.segments = m),
            (this.children = p),
            (this.parent = null),
            Et(p, (w, S) => (w.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Xn(this);
        }
      }
      class vr {
        constructor(m, p) {
          (this.path = m), (this.parameters = p);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = Y(this.parameters)), this._parameterMap
          );
        }
        toString() {
          return On(this);
        }
      }
      function kn(y, m) {
        return y.length === m.length && y.every((p, w) => p.path === m[w].path);
      }
      class Di {}
      class Si {
        parse(m) {
          const p = new er(m);
          return new Fn(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
        }
        serialize(m) {
          var y;
          return `${`/${ar(m.root, !0)}`}${(function (y) {
            const m = Object.keys(y)
              .map((p) => {
                const w = y[p];
                return Array.isArray(w)
                  ? w.map((S) => `${un(p)}=${un(S)}`).join('&')
                  : `${un(p)}=${un(w)}`;
              })
              .filter((p) => !!p);
            return m.length ? `?${m.join('&')}` : '';
          })(m.queryParams)}${
            'string' == typeof m.fragment ? `#${((y = m.fragment), encodeURI(y))}` : ''
          }`;
        }
      }
      const Yi = new Si();
      function Xn(y) {
        return y.segments.map((m) => On(m)).join('/');
      }
      function ar(y, m) {
        if (!y.hasChildren()) return Xn(y);
        if (m) {
          const p = y.children[at] ? ar(y.children[at], !1) : '',
            w = [];
          return (
            Et(y.children, (S, A) => {
              A !== at && w.push(`${A}:${ar(S, !1)}`);
            }),
            w.length > 0 ? `${p}(${w.join('//')})` : p
          );
        }
        {
          const p = (function (y, m) {
            let p = [];
            return (
              Et(y.children, (w, S) => {
                S === at && (p = p.concat(m(w, S)));
              }),
              Et(y.children, (w, S) => {
                S !== at && (p = p.concat(m(w, S)));
              }),
              p
            );
          })(y, (w, S) => (S === at ? [ar(y.children[at], !1)] : [`${S}:${ar(w, !1)}`]));
          return 1 === Object.keys(y.children).length && null != y.children[at]
            ? `${Xn(y)}/${p[0]}`
            : `${Xn(y)}/(${p.join('//')})`;
        }
      }
      function li(y) {
        return encodeURIComponent(y)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function un(y) {
        return li(y).replace(/%3B/gi, ';');
      }
      function sn(y) {
        return li(y).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function An(y) {
        return decodeURIComponent(y);
      }
      function ui(y) {
        return An(y.replace(/\+/g, '%20'));
      }
      function On(y) {
        return `${sn(y.path)}${(function (y) {
          return Object.keys(y)
            .map((m) => `;${sn(m)}=${sn(y[m])}`)
            .join('');
        })(y.parameters)}`;
      }
      const Jt = /^[^\/()?;=#]+/;
      function cn(y) {
        const m = y.match(Jt);
        return m ? m[0] : '';
      }
      const Pr = /^[^=?&#]+/,
        mn = /^[^?&#]+/;
      class er {
        constructor(m) {
          (this.url = m), (this.remaining = m);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new Mt([], {})
              : new Mt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const m = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(m);
            } while (this.consumeOptional('&'));
          return m;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const m = [];
          for (
            this.peekStartsWith('(') || m.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), m.push(this.parseSegment());
          let p = {};
          this.peekStartsWith('/(') && (this.capture('/'), (p = this.parseParens(!0)));
          let w = {};
          return (
            this.peekStartsWith('(') && (w = this.parseParens(!1)),
            (m.length > 0 || Object.keys(p).length > 0) && (w[at] = new Mt(m, p)),
            w
          );
        }
        parseSegment() {
          const m = cn(this.remaining);
          if ('' === m && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(m), new vr(An(m), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const m = {};
          for (; this.consumeOptional(';'); ) this.parseParam(m);
          return m;
        }
        parseParam(m) {
          const p = cn(this.remaining);
          if (!p) return;
          this.capture(p);
          let w = '';
          if (this.consumeOptional('=')) {
            const S = cn(this.remaining);
            S && ((w = S), this.capture(w));
          }
          m[An(p)] = An(w);
        }
        parseQueryParam(m) {
          const p = (function (y) {
            const m = y.match(Pr);
            return m ? m[0] : '';
          })(this.remaining);
          if (!p) return;
          this.capture(p);
          let w = '';
          if (this.consumeOptional('=')) {
            const B = (function (y) {
              const m = y.match(mn);
              return m ? m[0] : '';
            })(this.remaining);
            B && ((w = B), this.capture(w));
          }
          const S = ui(p),
            A = ui(w);
          if (m.hasOwnProperty(S)) {
            let B = m[S];
            Array.isArray(B) || ((B = [B]), (m[S] = B)), B.push(A);
          } else m[S] = A;
        }
        parseParens(m) {
          const p = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const w = cn(this.remaining),
              S = this.remaining[w.length];
            if ('/' !== S && ')' !== S && ';' !== S)
              throw new Error(`Cannot parse url '${this.url}'`);
            let A;
            w.indexOf(':') > -1
              ? ((A = w.substr(0, w.indexOf(':'))), this.capture(A), this.capture(':'))
              : m && (A = at);
            const B = this.parseChildren();
            (p[A] = 1 === Object.keys(B).length ? B[at] : new Mt([], B)),
              this.consumeOptional('//');
          }
          return p;
        }
        peekStartsWith(m) {
          return this.remaining.startsWith(m);
        }
        consumeOptional(m) {
          return (
            !!this.peekStartsWith(m) && ((this.remaining = this.remaining.substring(m.length)), !0)
          );
        }
        capture(m) {
          if (!this.consumeOptional(m)) throw new Error(`Expected "${m}".`);
        }
      }
      class tr {
        constructor(m) {
          this._root = m;
        }
        get root() {
          return this._root.value;
        }
        parent(m) {
          const p = this.pathFromRoot(m);
          return p.length > 1 ? p[p.length - 2] : null;
        }
        children(m) {
          const p = ut(m, this._root);
          return p ? p.children.map((w) => w.value) : [];
        }
        firstChild(m) {
          const p = ut(m, this._root);
          return p && p.children.length > 0 ? p.children[0].value : null;
        }
        siblings(m) {
          const p = Z(m, this._root);
          return p.length < 2
            ? []
            : p[p.length - 2].children.map((S) => S.value).filter((S) => S !== m);
        }
        pathFromRoot(m) {
          return Z(m, this._root).map((p) => p.value);
        }
      }
      function ut(y, m) {
        if (y === m.value) return m;
        for (const p of m.children) {
          const w = ut(y, p);
          if (w) return w;
        }
        return null;
      }
      function Z(y, m) {
        if (y === m.value) return [m];
        for (const p of m.children) {
          const w = Z(y, p);
          if (w.length) return w.unshift(m), w;
        }
        return [];
      }
      class W {
        constructor(m, p) {
          (this.value = m), (this.children = p);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function L(y) {
        const m = {};
        return y && y.children.forEach((p) => (m[p.value.outlet] = p)), m;
      }
      class J extends tr {
        constructor(m, p) {
          super(m), (this.snapshot = p), ci(this, m);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function le(y, m) {
        const p = (function (y, m) {
            const B = new Nr([], {}, {}, '', {}, at, m, null, y.root, -1, {});
            return new eo('', new W(B, []));
          })(y, m),
          w = new Ne.X([new vr('', {})]),
          S = new Ne.X({}),
          A = new Ne.X({}),
          B = new Ne.X({}),
          $ = new Ne.X(''),
          ge = new vt(w, S, B, $, A, at, m, p.root);
        return (ge.snapshot = p.root), new J(new W(ge, []), p);
      }
      class vt {
        constructor(m, p, w, S, A, B, $, ge) {
          (this.url = m),
            (this.params = p),
            (this.queryParams = w),
            (this.fragment = S),
            (this.data = A),
            (this.outlet = B),
            (this.component = $),
            (this._futureSnapshot = ge);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = this.params.pipe((0, X.U)((m) => Y(m)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe((0, X.U)((m) => Y(m)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Ut(y, m = 'emptyOnly') {
        const p = y.pathFromRoot;
        let w = 0;
        if ('always' !== m)
          for (w = p.length - 1; w >= 1; ) {
            const S = p[w],
              A = p[w - 1];
            if (S.routeConfig && '' === S.routeConfig.path) w--;
            else {
              if (A.component) break;
              w--;
            }
          }
        return (function (y) {
          return y.reduce(
            (m, p) => ({
              params: Object.assign(Object.assign({}, m.params), p.params),
              data: Object.assign(Object.assign({}, m.data), p.data),
              resolve: Object.assign(Object.assign({}, m.resolve), p._resolvedData),
            }),
            { params: {}, data: {}, resolve: {} },
          );
        })(p.slice(w));
      }
      class Nr {
        constructor(m, p, w, S, A, B, $, ge, et, gt, kt) {
          (this.url = m),
            (this.params = p),
            (this.queryParams = w),
            (this.fragment = S),
            (this.data = A),
            (this.outlet = B),
            (this.component = $),
            (this.routeConfig = ge),
            (this._urlSegment = et),
            (this._lastPathIndex = gt),
            (this._resolve = kt);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = Y(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = Y(this.queryParams)), this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url.map((w) => w.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class eo extends tr {
        constructor(m, p) {
          super(p), (this.url = m), ci(this, p);
        }
        toString() {
          return Ms(this._root);
        }
      }
      function ci(y, m) {
        (m.value._routerState = y), m.children.forEach((p) => ci(y, p));
      }
      function Ms(y) {
        const m = y.children.length > 0 ? ` { ${y.children.map(Ms).join(', ')} } ` : '';
        return `${y.value}${m}`;
      }
      function qr(y) {
        if (y.snapshot) {
          const m = y.snapshot,
            p = y._futureSnapshot;
          (y.snapshot = p),
            pt(m.queryParams, p.queryParams) || y.queryParams.next(p.queryParams),
            m.fragment !== p.fragment && y.fragment.next(p.fragment),
            pt(m.params, p.params) || y.params.next(p.params),
            (function (y, m) {
              if (y.length !== m.length) return !1;
              for (let p = 0; p < y.length; ++p) if (!pt(y[p], m[p])) return !1;
              return !0;
            })(m.url, p.url) || y.url.next(p.url),
            pt(m.data, p.data) || y.data.next(p.data);
        } else (y.snapshot = y._futureSnapshot), y.data.next(y._futureSnapshot.data);
      }
      function Fr(y, m) {
        return (
          pt(y.params, m.params) &&
          (function (y, m) {
            return kn(y, m) && y.every((p, w) => pt(p.parameters, m[w].parameters));
          })(y.url, m.url) &&
          !(!y.parent != !m.parent) &&
          (!y.parent || Fr(y.parent, m.parent))
        );
      }
      function En(y, m, p) {
        if (p && y.shouldReuseRoute(m.value, p.value.snapshot)) {
          const w = p.value;
          w._futureSnapshot = m.value;
          const S = (function (y, m, p) {
            return m.children.map((w) => {
              for (const S of p.children)
                if (y.shouldReuseRoute(w.value, S.value.snapshot)) return En(y, w, S);
              return En(y, w);
            });
          })(y, m, p);
          return new W(w, S);
        }
        {
          if (y.shouldAttach(m.value)) {
            const A = y.retrieve(m.value);
            if (null !== A) {
              const B = A.route;
              return Ki(m, B), B;
            }
          }
          const w = (function (y) {
              return new vt(
                new Ne.X(y.url),
                new Ne.X(y.params),
                new Ne.X(y.queryParams),
                new Ne.X(y.fragment),
                new Ne.X(y.data),
                y.outlet,
                y.component,
                y,
              );
            })(m.value),
            S = m.children.map((A) => En(y, A));
          return new W(w, S);
        }
      }
      function Ki(y, m) {
        if (y.value.routeConfig !== m.value.routeConfig)
          throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
        if (y.children.length !== m.children.length)
          throw new Error(
            'Cannot reattach ActivatedRouteSnapshot with a different number of children',
          );
        m.value._futureSnapshot = y.value;
        for (let p = 0; p < y.children.length; ++p) Ki(y.children[p], m.children[p]);
      }
      function Dn(y) {
        return 'object' == typeof y && null != y && !y.outlets && !y.segmentPath;
      }
      function ur(y) {
        return 'object' == typeof y && null != y && y.outlets;
      }
      function Ln(y, m, p, w, S) {
        let A = {};
        return (
          w &&
            Et(w, (B, $) => {
              A[$] = Array.isArray(B) ? B.map((ge) => `${ge}`) : `${B}`;
            }),
          new Fn(p.root === y ? m : cr(p.root, y, m), A, S)
        );
      }
      function cr(y, m, p) {
        const w = {};
        return (
          Et(y.children, (S, A) => {
            w[A] = S === m ? p : cr(S, m, p);
          }),
          new Mt(y.segments, w)
        );
      }
      class Xt {
        constructor(m, p, w) {
          if (
            ((this.isAbsolute = m),
            (this.numberOfDoubleDots = p),
            (this.commands = w),
            m && w.length > 0 && Dn(w[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const S = w.find(ur);
          if (S && S !== wn(w)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Zi {
        constructor(m, p, w) {
          (this.segmentGroup = m), (this.processChildren = p), (this.index = w);
        }
      }
      function Jr(y, m, p) {
        if ((y || (y = new Mt([], {})), 0 === y.segments.length && y.hasChildren()))
          return to(y, m, p);
        const w = (function (y, m, p) {
            let w = 0,
              S = m;
            const A = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; S < y.segments.length; ) {
              if (w >= p.length) return A;
              const B = y.segments[S],
                $ = p[w];
              if (ur($)) break;
              const ge = `${$}`,
                et = w < p.length - 1 ? p[w + 1] : null;
              if (S > 0 && void 0 === ge) break;
              if (ge && et && 'object' == typeof et && void 0 === et.outlets) {
                if (!zt(ge, et, B)) return A;
                w += 2;
              } else {
                if (!zt(ge, {}, B)) return A;
                w++;
              }
              S++;
            }
            return { match: !0, pathIndex: S, commandIndex: w };
          })(y, m, p),
          S = p.slice(w.commandIndex);
        if (w.match && w.pathIndex < y.segments.length) {
          const A = new Mt(y.segments.slice(0, w.pathIndex), {});
          return (A.children[at] = new Mt(y.segments.slice(w.pathIndex), y.children)), to(A, 0, S);
        }
        return w.match && 0 === S.length
          ? new Mt(y.segments, {})
          : w.match && !y.hasChildren()
          ? qi(y, m, p)
          : w.match
          ? to(y, 0, S)
          : qi(y, m, p);
      }
      function to(y, m, p) {
        if (0 === p.length) return new Mt(y.segments, {});
        {
          const w = (function (y) {
              return ur(y[0]) ? y[0].outlets : { [at]: y };
            })(p),
            S = {};
          return (
            Et(w, (A, B) => {
              'string' == typeof A && (A = [A]), null !== A && (S[B] = Jr(y.children[B], m, A));
            }),
            Et(y.children, (A, B) => {
              void 0 === w[B] && (S[B] = A);
            }),
            new Mt(y.segments, S)
          );
        }
      }
      function qi(y, m, p) {
        const w = y.segments.slice(0, m);
        let S = 0;
        for (; S < p.length; ) {
          const A = p[S];
          if (ur(A)) {
            const ge = Cr(A.outlets);
            return new Mt(w, ge);
          }
          if (0 === S && Dn(p[0])) {
            w.push(new vr(y.segments[m].path, Ti(p[0]))), S++;
            continue;
          }
          const B = ur(A) ? A.outlets[at] : `${A}`,
            $ = S < p.length - 1 ? p[S + 1] : null;
          B && $ && Dn($) ? (w.push(new vr(B, Ti($))), (S += 2)) : (w.push(new vr(B, {})), S++);
        }
        return new Mt(w, {});
      }
      function Cr(y) {
        const m = {};
        return (
          Et(y, (p, w) => {
            'string' == typeof p && (p = [p]), null !== p && (m[w] = qi(new Mt([], {}), 0, p));
          }),
          m
        );
      }
      function Ti(y) {
        const m = {};
        return Et(y, (p, w) => (m[w] = `${p}`)), m;
      }
      function zt(y, m, p) {
        return y == p.path && pt(m, p.parameters);
      }
      class $a {
        constructor(m, p, w, S) {
          (this.routeReuseStrategy = m),
            (this.futureState = p),
            (this.currState = w),
            (this.forwardEvent = S);
        }
        activate(m) {
          const p = this.futureState._root,
            w = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(p, w, m),
            qr(this.futureState.root),
            this.activateChildRoutes(p, w, m);
        }
        deactivateChildRoutes(m, p, w) {
          const S = L(p);
          m.children.forEach((A) => {
            const B = A.value.outlet;
            this.deactivateRoutes(A, S[B], w), delete S[B];
          }),
            Et(S, (A, B) => {
              this.deactivateRouteAndItsChildren(A, w);
            });
        }
        deactivateRoutes(m, p, w) {
          const S = m.value,
            A = p ? p.value : null;
          if (S === A)
            if (S.component) {
              const B = w.getContext(S.outlet);
              B && this.deactivateChildRoutes(m, p, B.children);
            } else this.deactivateChildRoutes(m, p, w);
          else A && this.deactivateRouteAndItsChildren(p, w);
        }
        deactivateRouteAndItsChildren(m, p) {
          this.routeReuseStrategy.shouldDetach(m.value.snapshot)
            ? this.detachAndStoreRouteSubtree(m, p)
            : this.deactivateRouteAndOutlet(m, p);
        }
        detachAndStoreRouteSubtree(m, p) {
          const w = p.getContext(m.value.outlet);
          if (w && w.outlet) {
            const S = w.outlet.detach(),
              A = w.children.onOutletDeactivated();
            this.routeReuseStrategy.store(m.value.snapshot, {
              componentRef: S,
              route: m,
              contexts: A,
            });
          }
        }
        deactivateRouteAndOutlet(m, p) {
          const w = p.getContext(m.value.outlet),
            S = w && m.value.component ? w.children : p,
            A = L(m);
          for (const B of Object.keys(A)) this.deactivateRouteAndItsChildren(A[B], S);
          w &&
            w.outlet &&
            (w.outlet.deactivate(),
            w.children.onOutletDeactivated(),
            (w.attachRef = null),
            (w.resolver = null),
            (w.route = null));
        }
        activateChildRoutes(m, p, w) {
          const S = L(p);
          m.children.forEach((A) => {
            this.activateRoutes(A, S[A.value.outlet], w),
              this.forwardEvent(new Qr(A.value.snapshot));
          }),
            m.children.length && this.forwardEvent(new Yr(m.value.snapshot));
        }
        activateRoutes(m, p, w) {
          const S = m.value,
            A = p ? p.value : null;
          if ((qr(S), S === A))
            if (S.component) {
              const B = w.getOrCreateContext(S.outlet);
              this.activateChildRoutes(m, p, B.children);
            } else this.activateChildRoutes(m, p, w);
          else if (S.component) {
            const B = w.getOrCreateContext(S.outlet);
            if (this.routeReuseStrategy.shouldAttach(S.snapshot)) {
              const $ = this.routeReuseStrategy.retrieve(S.snapshot);
              this.routeReuseStrategy.store(S.snapshot, null),
                B.children.onOutletReAttached($.contexts),
                (B.attachRef = $.componentRef),
                (B.route = $.route.value),
                B.outlet && B.outlet.attach($.componentRef, $.route.value),
                na($.route);
            } else {
              const $ = (function (y) {
                  for (let m = y.parent; m; m = m.parent) {
                    const p = m.routeConfig;
                    if (p && p._loadedConfig) return p._loadedConfig;
                    if (p && p.component) return null;
                  }
                  return null;
                })(S.snapshot),
                ge = $ ? $.module.componentFactoryResolver : null;
              (B.attachRef = null),
                (B.route = S),
                (B.resolver = ge),
                B.outlet && B.outlet.activateWith(S, ge),
                this.activateChildRoutes(m, null, B.children);
            }
          } else this.activateChildRoutes(m, null, w);
        }
      }
      function na(y) {
        qr(y.value), y.children.forEach(na);
      }
      class Os {
        constructor(m, p) {
          (this.routes = m), (this.module = p);
        }
      }
      function wr(y) {
        return 'function' == typeof y;
      }
      function nr(y) {
        return y instanceof Fn;
      }
      const ti = Symbol('INITIAL_VALUE');
      function Lr() {
        return (0, ae.w)((y) =>
          (0, Ee.a)(y.map((m) => m.pipe((0, ye.q)(1), (0, Re.O)(ti)))).pipe(
            $e((m, p) => {
              let w = !1;
              return p.reduce(
                (S, A, B) =>
                  S !== ti
                    ? S
                    : (A === ti && (w = !0),
                      w || (!1 !== A && B !== p.length - 1 && !nr(A)) ? S : A),
                m,
              );
            }, ti),
            (0, He.h)((m) => m !== ti),
            (0, X.U)((m) => (nr(m) ? m : !0 === m)),
            (0, ye.q)(1),
          ),
        );
      }
      let zn = (() => {
        class y {}
        return (
          (y.ɵfac = function (p) {
            return new (p || y)();
          }),
          (y.ɵcmp = _.Xpm({
            type: y,
            selectors: [['ng-component']],
            decls: 1,
            vars: 0,
            template: function (p, w) {
              1 & p && _._UZ(0, 'router-outlet');
            },
            directives: function () {
              return [Ri];
            },
            encapsulation: 2,
          })),
          y
        );
      })();
      function ro(y, m = '') {
        for (let p = 0; p < y.length; p++) {
          const w = y[p];
          Rs(w, za(m, w));
        }
      }
      function Rs(y, m) {
        y.children && ro(y.children, m);
      }
      function za(y, m) {
        return m
          ? y || m.path
            ? y && !m.path
              ? `${y}/`
              : !y && m.path
              ? m.path
              : `${y}/${m.path}`
            : ''
          : y;
      }
      function Xi(y) {
        const m = y.children && y.children.map(Xi),
          p = m ? Object.assign(Object.assign({}, y), { children: m }) : Object.assign({}, y);
        return (
          !p.component &&
            (m || p.loadChildren) &&
            p.outlet &&
            p.outlet !== at &&
            (p.component = zn),
          p
        );
      }
      function Rn(y) {
        return y.outlet || at;
      }
      function dr(y, m) {
        const p = y.filter((w) => Rn(w) === m);
        return p.push(...y.filter((w) => Rn(w) !== m)), p;
      }
      const io = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {},
      };
      function Br(y, m, p) {
        var w;
        if ('' === m.path)
          return 'full' === m.pathMatch && (y.hasChildren() || p.length > 0)
            ? Object.assign({}, io)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {},
              };
        const A = (m.matcher || rt)(p, y, m);
        if (!A) return Object.assign({}, io);
        const B = {};
        Et(A.posParams, (ge, et) => {
          B[et] = ge.path;
        });
        const $ =
          A.consumed.length > 0
            ? Object.assign(Object.assign({}, B), A.consumed[A.consumed.length - 1].parameters)
            : B;
        return {
          matched: !0,
          consumedSegments: A.consumed,
          lastChild: A.consumed.length,
          parameters: $,
          positionalParamSegments: null !== (w = A.posParams) && void 0 !== w ? w : {},
        };
      }
      function ni(y, m, p, w, S = 'corrected') {
        if (
          p.length > 0 &&
          (function (y, m, p) {
            return p.some((w) => I(y, m, w) && Rn(w) !== at);
          })(y, p, w)
        ) {
          const B = new Mt(
            m,
            (function (y, m, p, w) {
              const S = {};
              (S[at] = w), (w._sourceSegment = y), (w._segmentIndexShift = m.length);
              for (const A of p)
                if ('' === A.path && Rn(A) !== at) {
                  const B = new Mt([], {});
                  (B._sourceSegment = y), (B._segmentIndexShift = m.length), (S[Rn(A)] = B);
                }
              return S;
            })(y, m, w, new Mt(p, y.children)),
          );
          return (
            (B._sourceSegment = y),
            (B._segmentIndexShift = m.length),
            { segmentGroup: B, slicedSegments: [] }
          );
        }
        if (
          0 === p.length &&
          (function (y, m, p) {
            return p.some((w) => I(y, m, w));
          })(y, p, w)
        ) {
          const B = new Mt(
            y.segments,
            (function (y, m, p, w, S, A) {
              const B = {};
              for (const $ of w)
                if (I(y, p, $) && !S[Rn($)]) {
                  const ge = new Mt([], {});
                  (ge._sourceSegment = y),
                    (ge._segmentIndexShift = 'legacy' === A ? y.segments.length : m.length),
                    (B[Rn($)] = ge);
                }
              return Object.assign(Object.assign({}, S), B);
            })(y, m, p, w, y.children, S),
          );
          return (
            (B._sourceSegment = y),
            (B._segmentIndexShift = m.length),
            { segmentGroup: B, slicedSegments: p }
          );
        }
        const A = new Mt(y.segments, y.children);
        return (
          (A._sourceSegment = y),
          (A._segmentIndexShift = m.length),
          { segmentGroup: A, slicedSegments: p }
        );
      }
      function I(y, m, p) {
        return (!(y.hasChildren() || m.length > 0) || 'full' !== p.pathMatch) && '' === p.path;
      }
      function E(y, m, p, w) {
        return (
          !!(Rn(y) === w || (w !== at && I(m, p, y))) && ('**' === y.path || Br(m, y, p).matched)
        );
      }
      function P(y, m, p) {
        return 0 === m.length && !y.children[p];
      }
      class V {
        constructor(m) {
          this.segmentGroup = m || null;
        }
      }
      class pe {
        constructor(m) {
          this.urlTree = m;
        }
      }
      function ke(y) {
        return new Se.y((m) => m.error(new V(y)));
      }
      function lt(y) {
        return new Se.y((m) => m.error(new pe(y)));
      }
      function Pt(y) {
        return new Se.y((m) =>
          m.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${y}'`)),
        );
      }
      class Ft {
        constructor(m, p, w, S, A) {
          (this.configLoader = p),
            (this.urlSerializer = w),
            (this.urlTree = S),
            (this.config = A),
            (this.allowRedirects = !0),
            (this.ngModule = m.get(_.h0i));
        }
        apply() {
          const m = ni(this.urlTree.root, [], [], this.config).segmentGroup,
            p = new Mt(m.segments, m.children);
          return this.expandSegmentGroup(this.ngModule, this.config, p, at)
            .pipe(
              (0, X.U)((A) =>
                this.createUrlTree(Qt(A), this.urlTree.queryParams, this.urlTree.fragment),
              ),
            )
            .pipe(
              (0, re.K)((A) => {
                if (A instanceof pe) return (this.allowRedirects = !1), this.match(A.urlTree);
                throw A instanceof V ? this.noMatchError(A) : A;
              }),
            );
        }
        match(m) {
          return this.expandSegmentGroup(this.ngModule, this.config, m.root, at)
            .pipe((0, X.U)((S) => this.createUrlTree(Qt(S), m.queryParams, m.fragment)))
            .pipe(
              (0, re.K)((S) => {
                throw S instanceof V ? this.noMatchError(S) : S;
              }),
            );
        }
        noMatchError(m) {
          return new Error(`Cannot match any routes. URL Segment: '${m.segmentGroup}'`);
        }
        createUrlTree(m, p, w) {
          const S = m.segments.length > 0 ? new Mt([], { [at]: m }) : m;
          return new Fn(S, p, w);
        }
        expandSegmentGroup(m, p, w, S) {
          return 0 === w.segments.length && w.hasChildren()
            ? this.expandChildren(m, p, w).pipe((0, X.U)((A) => new Mt([], A)))
            : this.expandSegment(m, w, p, w.segments, S, !0);
        }
        expandChildren(m, p, w) {
          const S = [];
          for (const A of Object.keys(w.children)) 'primary' === A ? S.unshift(A) : S.push(A);
          return (0, fe.Dp)(S).pipe(
            (0, dt.b)((A) => {
              const B = w.children[A],
                $ = dr(p, A);
              return this.expandSegmentGroup(m, $, B, A).pipe(
                (0, X.U)((ge) => ({ segment: ge, outlet: A })),
              );
            }),
            $e((A, B) => ((A[B.outlet] = B.segment), A), {}),
            (function (y, m) {
              var p = arguments.length >= 2;
              return function (w) {
                return w.pipe(
                  y
                    ? (0, He.h)(function (S, A) {
                        return y(S, A, w);
                      })
                    : yt.y,
                  qe(1),
                  p
                    ? (0, tt.d)(m)
                    : (0, ot.T)(function () {
                        return new Me.K();
                      }),
                );
              };
            })(),
          );
        }
        expandSegment(m, p, w, S, A, B) {
          return (0, fe.Dp)(w).pipe(
            (0, dt.b)(($) =>
              this.expandSegmentAgainstRoute(m, p, w, $, S, A, B).pipe(
                (0, re.K)((et) => {
                  if (et instanceof V) return (0, H.of)(null);
                  throw et;
                }),
              ),
            ),
            (0, me.P)(($) => !!$),
            (0, re.K)(($, ge) => {
              if ($ instanceof Me.K || 'EmptyError' === $.name) {
                if (P(p, S, A)) return (0, H.of)(new Mt([], {}));
                throw new V(p);
              }
              throw $;
            }),
          );
        }
        expandSegmentAgainstRoute(m, p, w, S, A, B, $) {
          return E(S, p, A, B)
            ? void 0 === S.redirectTo
              ? this.matchSegmentAgainstRoute(m, p, S, A, B)
              : $ && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(m, p, w, S, A, B)
              : ke(p)
            : ke(p);
        }
        expandSegmentAgainstRouteUsingRedirect(m, p, w, S, A, B) {
          return '**' === S.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(m, w, S, B)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(m, p, w, S, A, B);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(m, p, w, S) {
          const A = this.applyRedirectCommands([], w.redirectTo, {});
          return w.redirectTo.startsWith('/')
            ? lt(A)
            : this.lineralizeSegments(w, A).pipe(
                (0, Ge.z)((B) => {
                  const $ = new Mt(B, {});
                  return this.expandSegment(m, $, p, B, S, !1);
                }),
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(m, p, w, S, A, B) {
          const {
            matched: $,
            consumedSegments: ge,
            lastChild: et,
            positionalParamSegments: gt,
          } = Br(p, S, A);
          if (!$) return ke(p);
          const kt = this.applyRedirectCommands(ge, S.redirectTo, gt);
          return S.redirectTo.startsWith('/')
            ? lt(kt)
            : this.lineralizeSegments(S, kt).pipe(
                (0, Ge.z)((dn) => this.expandSegment(m, p, w, dn.concat(A.slice(et)), B, !1)),
              );
        }
        matchSegmentAgainstRoute(m, p, w, S, A) {
          if ('**' === w.path)
            return w.loadChildren
              ? (w._loadedConfig
                  ? (0, H.of)(w._loadedConfig)
                  : this.configLoader.load(m.injector, w)
                ).pipe((0, X.U)((dn) => ((w._loadedConfig = dn), new Mt(S, {}))))
              : (0, H.of)(new Mt(S, {}));
          const { matched: B, consumedSegments: $, lastChild: ge } = Br(p, w, S);
          if (!B) return ke(p);
          const et = S.slice(ge);
          return this.getChildConfig(m, w, S).pipe(
            (0, Ge.z)((kt) => {
              const dn = kt.module,
                Wt = kt.routes,
                { segmentGroup: ii, slicedSegments: Ni } = ni(p, $, et, Wt),
                yi = new Mt(ii.segments, ii.children);
              if (0 === Ni.length && yi.hasChildren())
                return this.expandChildren(dn, Wt, yi).pipe((0, X.U)((ha) => new Mt($, ha)));
              if (0 === Wt.length && 0 === Ni.length) return (0, H.of)(new Mt($, {}));
              const Fi = Rn(w) === A;
              return this.expandSegment(dn, yi, Wt, Ni, Fi ? at : A, !0).pipe(
                (0, X.U)((as) => new Mt($.concat(as.segments), as.children)),
              );
            }),
          );
        }
        getChildConfig(m, p, w) {
          return p.children
            ? (0, H.of)(new Os(p.children, m))
            : p.loadChildren
            ? void 0 !== p._loadedConfig
              ? (0, H.of)(p._loadedConfig)
              : this.runCanLoadGuards(m.injector, p, w).pipe(
                  (0, Ge.z)((S) => {
                    return S
                      ? this.configLoader
                          .load(m.injector, p)
                          .pipe((0, X.U)((A) => ((p._loadedConfig = A), A)))
                      : ((y = p),
                        new Se.y((m) =>
                          m.error(
                            We(
                              `Cannot load children because the guard of the route "path: '${y.path}'" returned false`,
                            ),
                          ),
                        ));
                    var y;
                  }),
                )
            : (0, H.of)(new Os([], m));
        }
        runCanLoadGuards(m, p, w) {
          const S = p.canLoad;
          if (!S || 0 === S.length) return (0, H.of)(!0);
          const A = S.map((B) => {
            const $ = m.get(B);
            let ge;
            if ((y = $) && wr(y.canLoad)) ge = $.canLoad(p, w);
            else {
              if (!wr($)) throw new Error('Invalid CanLoad guard');
              ge = $(p, w);
            }
            var y;
            return Fe(ge);
          });
          return (0, H.of)(A).pipe(
            Lr(),
            (0, Te.b)((B) => {
              if (!nr(B)) return;
              const $ = We(`Redirecting to "${this.urlSerializer.serialize(B)}"`);
              throw (($.url = B), $);
            }),
            (0, X.U)((B) => !0 === B),
          );
        }
        lineralizeSegments(m, p) {
          let w = [],
            S = p.root;
          for (;;) {
            if (((w = w.concat(S.segments)), 0 === S.numberOfChildren)) return (0, H.of)(w);
            if (S.numberOfChildren > 1 || !S.children[at]) return Pt(m.redirectTo);
            S = S.children[at];
          }
        }
        applyRedirectCommands(m, p, w) {
          return this.applyRedirectCreatreUrlTree(p, this.urlSerializer.parse(p), m, w);
        }
        applyRedirectCreatreUrlTree(m, p, w, S) {
          const A = this.createSegmentGroup(m, p.root, w, S);
          return new Fn(
            A,
            this.createQueryParams(p.queryParams, this.urlTree.queryParams),
            p.fragment,
          );
        }
        createQueryParams(m, p) {
          const w = {};
          return (
            Et(m, (S, A) => {
              if ('string' == typeof S && S.startsWith(':')) {
                const $ = S.substring(1);
                w[A] = p[$];
              } else w[A] = S;
            }),
            w
          );
        }
        createSegmentGroup(m, p, w, S) {
          const A = this.createSegments(m, p.segments, w, S);
          let B = {};
          return (
            Et(p.children, ($, ge) => {
              B[ge] = this.createSegmentGroup(m, $, w, S);
            }),
            new Mt(A, B)
          );
        }
        createSegments(m, p, w, S) {
          return p.map((A) =>
            A.path.startsWith(':') ? this.findPosParam(m, A, S) : this.findOrReturn(A, w),
          );
        }
        findPosParam(m, p, w) {
          const S = w[p.path.substring(1)];
          if (!S) throw new Error(`Cannot redirect to '${m}'. Cannot find '${p.path}'.`);
          return S;
        }
        findOrReturn(m, p) {
          let w = 0;
          for (const S of p) {
            if (S.path === m.path) return p.splice(w), S;
            w++;
          }
          return m;
        }
      }
      function Qt(y) {
        const m = {};
        for (const w of Object.keys(y.children)) {
          const A = Qt(y.children[w]);
          (A.segments.length > 0 || A.hasChildren()) && (m[w] = A);
        }
        return (function (y) {
          if (1 === y.numberOfChildren && y.children[at]) {
            const m = y.children[at];
            return new Mt(y.segments.concat(m.segments), m.children);
          }
          return y;
        })(new Mt(y.segments, m));
      }
      class xi {
        constructor(m) {
          (this.path = m), (this.route = this.path[this.path.length - 1]);
        }
      }
      class Tn {
        constructor(m, p) {
          (this.component = m), (this.route = p);
        }
      }
      function Kn(y, m, p) {
        const w = y._root;
        return es(w, m ? m._root : null, p, [w.value]);
      }
      function wt(y, m, p) {
        const w = (function (y) {
          if (!y) return null;
          for (let m = y.parent; m; m = m.parent) {
            const p = m.routeConfig;
            if (p && p._loadedConfig) return p._loadedConfig;
          }
          return null;
        })(m);
        return (w ? w.module.injector : p).get(y);
      }
      function es(y, m, p, w, S = { canDeactivateChecks: [], canActivateChecks: [] }) {
        const A = L(m);
        return (
          y.children.forEach((B) => {
            (function (y, m, p, w, S = { canDeactivateChecks: [], canActivateChecks: [] }) {
              const A = y.value,
                B = m ? m.value : null,
                $ = p ? p.getContext(y.value.outlet) : null;
              if (B && A.routeConfig === B.routeConfig) {
                const ge = (function (y, m, p) {
                  if ('function' == typeof p) return p(y, m);
                  switch (p) {
                    case 'pathParamsChange':
                      return !kn(y.url, m.url);
                    case 'pathParamsOrQueryParamsChange':
                      return !kn(y.url, m.url) || !pt(y.queryParams, m.queryParams);
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !Fr(y, m) || !pt(y.queryParams, m.queryParams);
                    case 'paramsChange':
                    default:
                      return !Fr(y, m);
                  }
                })(B, A, A.routeConfig.runGuardsAndResolvers);
                ge
                  ? S.canActivateChecks.push(new xi(w))
                  : ((A.data = B.data), (A._resolvedData = B._resolvedData)),
                  es(y, m, A.component ? ($ ? $.children : null) : p, w, S),
                  ge &&
                    $ &&
                    $.outlet &&
                    $.outlet.isActivated &&
                    S.canDeactivateChecks.push(new Tn($.outlet.component, B));
              } else
                B && so(m, $, S),
                  S.canActivateChecks.push(new xi(w)),
                  es(y, null, A.component ? ($ ? $.children : null) : p, w, S);
            })(B, A[B.value.outlet], p, w.concat([B.value]), S),
              delete A[B.value.outlet];
          }),
          Et(A, (B, $) => so(B, p.getContext($), S)),
          S
        );
      }
      function so(y, m, p) {
        const w = L(y),
          S = y.value;
        Et(w, (A, B) => {
          so(A, S.component ? (m ? m.children.getContext(B) : null) : m, p);
        }),
          p.canDeactivateChecks.push(
            new Tn(
              S.component && m && m.outlet && m.outlet.isActivated ? m.outlet.component : null,
              S,
            ),
          );
      }
      class fi {}
      function aa(y) {
        return new Se.y((m) => m.error(y));
      }
      class tu {
        constructor(m, p, w, S, A, B) {
          (this.rootComponentType = m),
            (this.config = p),
            (this.urlTree = w),
            (this.url = S),
            (this.paramsInheritanceStrategy = A),
            (this.relativeLinkResolution = B);
        }
        recognize() {
          const m = ni(
              this.urlTree.root,
              [],
              [],
              this.config.filter((B) => void 0 === B.redirectTo),
              this.relativeLinkResolution,
            ).segmentGroup,
            p = this.processSegmentGroup(this.config, m, at);
          if (null === p) return null;
          const w = new Nr(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              at,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {},
            ),
            S = new W(w, p),
            A = new eo(this.url, S);
          return this.inheritParamsAndData(A._root), A;
        }
        inheritParamsAndData(m) {
          const p = m.value,
            w = Ut(p, this.paramsInheritanceStrategy);
          (p.params = Object.freeze(w.params)),
            (p.data = Object.freeze(w.data)),
            m.children.forEach((S) => this.inheritParamsAndData(S));
        }
        processSegmentGroup(m, p, w) {
          return 0 === p.segments.length && p.hasChildren()
            ? this.processChildren(m, p)
            : this.processSegment(m, p, p.segments, w);
        }
        processChildren(m, p) {
          const w = [];
          for (const A of Object.keys(p.children)) {
            const B = p.children[A],
              $ = dr(m, A),
              ge = this.processSegmentGroup($, B, A);
            if (null === ge) return null;
            w.push(...ge);
          }
          const S = Cn(w);
          return (
            S.sort((m, p) =>
              m.value.outlet === at
                ? -1
                : p.value.outlet === at
                ? 1
                : m.value.outlet.localeCompare(p.value.outlet),
            ),
            S
          );
        }
        processSegment(m, p, w, S) {
          for (const A of m) {
            const B = this.processSegmentAgainstRoute(A, p, w, S);
            if (null !== B) return B;
          }
          return P(p, w, S) ? [] : null;
        }
        processSegmentAgainstRoute(m, p, w, S) {
          if (m.redirectTo || !E(m, p, w, S)) return null;
          let A,
            B = [],
            $ = [];
          if ('**' === m.path) {
            const Wt = w.length > 0 ? wn(w).parameters : {};
            A = new Nr(
              w,
              Wt,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Wn(m),
              Rn(m),
              m.component,
              m,
              xo(p),
              ts(p) + w.length,
              Mi(m),
            );
          } else {
            const Wt = Br(p, m, w);
            if (!Wt.matched) return null;
            (B = Wt.consumedSegments),
              ($ = w.slice(Wt.lastChild)),
              (A = new Nr(
                B,
                Wt.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                Wn(m),
                Rn(m),
                m.component,
                m,
                xo(p),
                ts(p) + B.length,
                Mi(m),
              ));
          }
          const ge = (y = m).children ? y.children : y.loadChildren ? y._loadedConfig.routes : [],
            { segmentGroup: et, slicedSegments: gt } = ni(
              p,
              B,
              $,
              ge.filter((Wt) => void 0 === Wt.redirectTo),
              this.relativeLinkResolution,
            );
          var y;
          if (0 === gt.length && et.hasChildren()) {
            const Wt = this.processChildren(ge, et);
            return null === Wt ? null : [new W(A, Wt)];
          }
          if (0 === ge.length && 0 === gt.length) return [new W(A, [])];
          const kt = Rn(m) === S,
            dn = this.processSegment(ge, et, gt, kt ? at : S);
          return null === dn ? null : [new W(A, dn)];
        }
      }
      function Ps(y) {
        const m = y.value.routeConfig;
        return m && '' === m.path && void 0 === m.redirectTo;
      }
      function Cn(y) {
        const m = [],
          p = new Set();
        for (const w of y) {
          if (!Ps(w)) {
            m.push(w);
            continue;
          }
          const S = m.find((A) => w.value.routeConfig === A.value.routeConfig);
          void 0 !== S ? (S.children.push(...w.children), p.add(S)) : m.push(w);
        }
        for (const w of p) {
          const S = Cn(w.children);
          m.push(new W(w.value, S));
        }
        return m.filter((w) => !p.has(w));
      }
      function xo(y) {
        let m = y;
        for (; m._sourceSegment; ) m = m._sourceSegment;
        return m;
      }
      function ts(y) {
        let m = y,
          p = m._segmentIndexShift ? m._segmentIndexShift : 0;
        for (; m._sourceSegment; )
          (m = m._sourceSegment), (p += m._segmentIndexShift ? m._segmentIndexShift : 0);
        return p - 1;
      }
      function Wn(y) {
        return y.data || {};
      }
      function Mi(y) {
        return y.resolve || {};
      }
      function Mo(y) {
        return (0, ae.w)((m) => {
          const p = y(m);
          return p ? (0, fe.Dp)(p).pipe((0, X.U)(() => m)) : (0, H.of)(m);
        });
      }
      class Ka extends class {
        shouldDetach(m) {
          return !1;
        }
        store(m, p) {}
        shouldAttach(m) {
          return !1;
        }
        retrieve(m) {
          return null;
        }
        shouldReuseRoute(m, p) {
          return m.routeConfig === p.routeConfig;
        }
      } {}
      const Fs = new _.OlP('ROUTES');
      class ua {
        constructor(m, p, w, S) {
          (this.loader = m),
            (this.compiler = p),
            (this.onLoadStartListener = w),
            (this.onLoadEndListener = S);
        }
        load(m, p) {
          if (p._loader$) return p._loader$;
          this.onLoadStartListener && this.onLoadStartListener(p);
          const S = this.loadModuleFactory(p.loadChildren).pipe(
            (0, X.U)((A) => {
              this.onLoadEndListener && this.onLoadEndListener(p);
              const B = A.create(m);
              return new Os(it(B.injector.get(Fs, void 0, _.XFs.Self | _.XFs.Optional)).map(Xi), B);
            }),
            (0, re.K)((A) => {
              throw ((p._loader$ = void 0), A);
            }),
          );
          return (p._loader$ = new xe(S, () => new Ue.x()).pipe(Ve())), p._loader$;
        }
        loadModuleFactory(m) {
          return 'string' == typeof m
            ? (0, fe.Dp)(this.loader.load(m))
            : Fe(m()).pipe(
                (0, Ge.z)((p) =>
                  p instanceof _.YKP
                    ? (0, H.of)(p)
                    : (0, fe.Dp)(this.compiler.compileModuleAsync(p)),
                ),
              );
        }
      }
      class ca {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Ai()),
            (this.attachRef = null);
        }
      }
      class Ai {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(m, p) {
          const w = this.getOrCreateContext(m);
          (w.outlet = p), this.contexts.set(m, w);
        }
        onChildOutletDestroyed(m) {
          const p = this.getContext(m);
          p && (p.outlet = null);
        }
        onOutletDeactivated() {
          const m = this.contexts;
          return (this.contexts = new Map()), m;
        }
        onOutletReAttached(m) {
          this.contexts = m;
        }
        getOrCreateContext(m) {
          let p = this.getContext(m);
          return p || ((p = new ca()), this.contexts.set(m, p)), p;
        }
        getContext(m) {
          return this.contexts.get(m) || null;
        }
      }
      class Ao {
        shouldProcessUrl(m) {
          return !0;
        }
        extract(m) {
          return m;
        }
        merge(m, p) {
          return m;
        }
      }
      function nu(y) {
        throw y;
      }
      function ru(y, m, p) {
        return m.parse('/');
      }
      function Qn(y, m) {
        return (0, H.of)(null);
      }
      const Oi = {
          paths: 'exact',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'exact',
        },
        Vt = {
          paths: 'subset',
          fragment: 'ignored',
          matrixParams: 'ignored',
          queryParams: 'subset',
        };
      let yn = (() => {
          class y {
            constructor(p, w, S, A, B, $, ge, et) {
              (this.rootComponentType = p),
                (this.urlSerializer = w),
                (this.rootContexts = S),
                (this.location = A),
                (this.config = et),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.disposed = !1),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.currentPageId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new Ue.x()),
                (this.errorHandler = nu),
                (this.malformedUriErrorHandler = ru),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = { beforePreactivation: Qn, afterPreactivation: Qn }),
                (this.urlHandlingStrategy = new Ao()),
                (this.routeReuseStrategy = new Ka()),
                (this.onSameUrlNavigation = 'ignore'),
                (this.paramsInheritanceStrategy = 'emptyOnly'),
                (this.urlUpdateStrategy = 'deferred'),
                (this.relativeLinkResolution = 'corrected'),
                (this.canceledNavigationResolution = 'replace'),
                (this.ngModule = B.get(_.h0i)),
                (this.console = B.get(_.c2e));
              const dn = B.get(_.R0b);
              (this.isNgZoneEnabled = dn instanceof _.R0b && _.R0b.isInAngularZone()),
                this.resetConfig(et),
                (this.currentUrlTree = new Fn(new Mt([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new ua(
                  $,
                  ge,
                  (Wt) => this.triggerEvent(new Mn(Wt)),
                  (Wt) => this.triggerEvent(new Dr(Wt)),
                )),
                (this.routerState = le(this.currentUrlTree, this.rootComponentType)),
                (this.transitions = new Ne.X({
                  id: 0,
                  targetPageId: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: 'imperative',
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            get browserPageId() {
              var p;
              return null === (p = this.location.getState()) || void 0 === p
                ? void 0
                : p.ɵrouterPageId;
            }
            setupNavigations(p) {
              const w = this.events;
              return p.pipe(
                (0, He.h)((S) => 0 !== S.id),
                (0, X.U)((S) =>
                  Object.assign(Object.assign({}, S), {
                    extractedUrl: this.urlHandlingStrategy.extract(S.rawUrl),
                  }),
                ),
                (0, ae.w)((S) => {
                  let A = !1,
                    B = !1;
                  return (0, H.of)(S).pipe(
                    (0, Te.b)(($) => {
                      this.currentNavigation = {
                        id: $.id,
                        initialUrl: $.currentRawUrl,
                        extractedUrl: $.extractedUrl,
                        trigger: $.source,
                        extras: $.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), {
                              previousNavigation: null,
                            })
                          : null,
                      };
                    }),
                    (0, ae.w)(($) => {
                      const ge =
                        !this.navigated ||
                        $.extractedUrl.toString() !== this.browserUrlTree.toString();
                      if (
                        ('reload' === this.onSameUrlNavigation || ge) &&
                        this.urlHandlingStrategy.shouldProcessUrl($.rawUrl)
                      )
                        return (0, H.of)($).pipe(
                          (0, ae.w)((gt) => {
                            const kt = this.transitions.getValue();
                            return (
                              w.next(
                                new Ct(
                                  gt.id,
                                  this.serializeUrl(gt.extractedUrl),
                                  gt.source,
                                  gt.restoredState,
                                ),
                              ),
                              kt !== this.transitions.getValue() ? st.E : Promise.resolve(gt)
                            );
                          }),
                          (function (y, m, p, w) {
                            return (0, ae.w)((S) =>
                              (function (y, m, p, w, S) {
                                return new Ft(y, m, p, w, S).apply();
                              })(y, m, p, S.extractedUrl, w).pipe(
                                (0, X.U)((A) =>
                                  Object.assign(Object.assign({}, S), { urlAfterRedirects: A }),
                                ),
                              ),
                            );
                          })(
                            this.ngModule.injector,
                            this.configLoader,
                            this.urlSerializer,
                            this.config,
                          ),
                          (0, Te.b)((gt) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: gt.urlAfterRedirects },
                            );
                          }),
                          (function (y, m, p, w, S) {
                            return (0, Ge.z)((A) =>
                              (function (y, m, p, w, S = 'emptyOnly', A = 'legacy') {
                                try {
                                  const B = new tu(y, m, p, w, S, A).recognize();
                                  return null === B ? aa(new fi()) : (0, H.of)(B);
                                } catch (B) {
                                  return aa(B);
                                }
                              })(y, m, A.urlAfterRedirects, p(A.urlAfterRedirects), w, S).pipe(
                                (0, X.U)((B) =>
                                  Object.assign(Object.assign({}, A), { targetSnapshot: B }),
                                ),
                              ),
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (gt) => this.serializeUrl(gt),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution,
                          ),
                          (0, Te.b)((gt) => {
                            'eager' === this.urlUpdateStrategy &&
                              (gt.extras.skipLocationChange ||
                                this.setBrowserUrl(gt.urlAfterRedirects, gt),
                              (this.browserUrlTree = gt.urlAfterRedirects));
                            const kt = new mr(
                              gt.id,
                              this.serializeUrl(gt.extractedUrl),
                              this.serializeUrl(gt.urlAfterRedirects),
                              gt.targetSnapshot,
                            );
                            w.next(kt);
                          }),
                        );
                      if (
                        ge &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                      ) {
                        const {
                            id: kt,
                            extractedUrl: dn,
                            source: Wt,
                            restoredState: ii,
                            extras: Ni,
                          } = $,
                          yi = new Ct(kt, this.serializeUrl(dn), Wt, ii);
                        w.next(yi);
                        const Fi = le(dn, this.rootComponentType).snapshot;
                        return (0, H.of)(
                          Object.assign(Object.assign({}, $), {
                            targetSnapshot: Fi,
                            urlAfterRedirects: dn,
                            extras: Object.assign(Object.assign({}, Ni), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          }),
                        );
                      }
                      return (
                        (this.rawUrlTree = $.rawUrl),
                        (this.browserUrlTree = $.urlAfterRedirects),
                        $.resolve(null),
                        st.E
                      );
                    }),
                    Mo(($) => {
                      const {
                        targetSnapshot: ge,
                        id: et,
                        extractedUrl: gt,
                        rawUrl: kt,
                        extras: { skipLocationChange: dn, replaceUrl: Wt },
                      } = $;
                      return this.hooks.beforePreactivation(ge, {
                        navigationId: et,
                        appliedUrlTree: gt,
                        rawUrlTree: kt,
                        skipLocationChange: !!dn,
                        replaceUrl: !!Wt,
                      });
                    }),
                    (0, Te.b)(($) => {
                      const ge = new St(
                        $.id,
                        this.serializeUrl($.extractedUrl),
                        this.serializeUrl($.urlAfterRedirects),
                        $.targetSnapshot,
                      );
                      this.triggerEvent(ge);
                    }),
                    (0, X.U)(($) =>
                      Object.assign(Object.assign({}, $), {
                        guards: Kn($.targetSnapshot, $.currentSnapshot, this.rootContexts),
                      }),
                    ),
                    (function (y, m) {
                      return (0, Ge.z)((p) => {
                        const {
                          targetSnapshot: w,
                          currentSnapshot: S,
                          guards: { canActivateChecks: A, canDeactivateChecks: B },
                        } = p;
                        return 0 === B.length && 0 === A.length
                          ? (0, H.of)(Object.assign(Object.assign({}, p), { guardsResult: !0 }))
                          : (function (y, m, p, w) {
                              return (0, fe.Dp)(y).pipe(
                                (0, Ge.z)((S) =>
                                  (function (y, m, p, w, S) {
                                    const A =
                                      m && m.routeConfig ? m.routeConfig.canDeactivate : null;
                                    if (!A || 0 === A.length) return (0, H.of)(!0);
                                    const B = A.map(($) => {
                                      const ge = wt($, m, S);
                                      let et;
                                      if (
                                        (function (y) {
                                          return y && wr(y.canDeactivate);
                                        })(ge)
                                      )
                                        et = Fe(ge.canDeactivate(y, m, p, w));
                                      else {
                                        if (!wr(ge)) throw new Error('Invalid CanDeactivate guard');
                                        et = Fe(ge(y, m, p, w));
                                      }
                                      return et.pipe((0, me.P)());
                                    });
                                    return (0, H.of)(B).pipe(Lr());
                                  })(S.component, S.route, p, m, w),
                                ),
                                (0, me.P)((S) => !0 !== S, !0),
                              );
                            })(B, w, S, y).pipe(
                              (0, Ge.z)(($) =>
                                $ &&
                                (function (y) {
                                  return 'boolean' == typeof y;
                                })($)
                                  ? (function (y, m, p, w) {
                                      return (0, fe.Dp)(m).pipe(
                                        (0, dt.b)((S) =>
                                          (0, Ke.z)(
                                            (function (y, m) {
                                              return null !== y && m && m(new Rr(y)), (0, H.of)(!0);
                                            })(S.route.parent, w),
                                            (function (y, m) {
                                              return null !== y && m && m(new Kr(y)), (0, H.of)(!0);
                                            })(S.route, w),
                                            (function (y, m, p) {
                                              const w = m[m.length - 1],
                                                A = m
                                                  .slice(0, m.length - 1)
                                                  .reverse()
                                                  .map((B) =>
                                                    (function (y) {
                                                      const m = y.routeConfig
                                                        ? y.routeConfig.canActivateChild
                                                        : null;
                                                      return m && 0 !== m.length
                                                        ? { node: y, guards: m }
                                                        : null;
                                                    })(B),
                                                  )
                                                  .filter((B) => null !== B)
                                                  .map((B) =>
                                                    he(() => {
                                                      const $ = B.guards.map((ge) => {
                                                        const et = wt(ge, B.node, p);
                                                        let gt;
                                                        if (
                                                          (function (y) {
                                                            return y && wr(y.canActivateChild);
                                                          })(et)
                                                        )
                                                          gt = Fe(et.canActivateChild(w, y));
                                                        else {
                                                          if (!wr(et))
                                                            throw new Error(
                                                              'Invalid CanActivateChild guard',
                                                            );
                                                          gt = Fe(et(w, y));
                                                        }
                                                        return gt.pipe((0, me.P)());
                                                      });
                                                      return (0, H.of)($).pipe(Lr());
                                                    }),
                                                  );
                                              return (0, H.of)(A).pipe(Lr());
                                            })(y, S.path, p),
                                            (function (y, m, p) {
                                              const w = m.routeConfig
                                                ? m.routeConfig.canActivate
                                                : null;
                                              if (!w || 0 === w.length) return (0, H.of)(!0);
                                              const S = w.map((A) =>
                                                he(() => {
                                                  const B = wt(A, m, p);
                                                  let $;
                                                  if (
                                                    (function (y) {
                                                      return y && wr(y.canActivate);
                                                    })(B)
                                                  )
                                                    $ = Fe(B.canActivate(m, y));
                                                  else {
                                                    if (!wr(B))
                                                      throw new Error('Invalid CanActivate guard');
                                                    $ = Fe(B(m, y));
                                                  }
                                                  return $.pipe((0, me.P)());
                                                }),
                                              );
                                              return (0, H.of)(S).pipe(Lr());
                                            })(y, S.route, p),
                                          ),
                                        ),
                                        (0, me.P)((S) => !0 !== S, !0),
                                      );
                                    })(w, A, y, m)
                                  : (0, H.of)($),
                              ),
                              (0, X.U)(($) =>
                                Object.assign(Object.assign({}, p), { guardsResult: $ }),
                              ),
                            );
                      });
                    })(this.ngModule.injector, ($) => this.triggerEvent($)),
                    (0, Te.b)(($) => {
                      if (nr($.guardsResult)) {
                        const et = We(`Redirecting to "${this.serializeUrl($.guardsResult)}"`);
                        throw ((et.url = $.guardsResult), et);
                      }
                      const ge = new nn(
                        $.id,
                        this.serializeUrl($.extractedUrl),
                        this.serializeUrl($.urlAfterRedirects),
                        $.targetSnapshot,
                        !!$.guardsResult,
                      );
                      this.triggerEvent(ge);
                    }),
                    (0, He.h)(
                      ($) =>
                        !!$.guardsResult ||
                        (this.restoreHistory($), this.cancelNavigationTransition($, ''), !1),
                    ),
                    Mo(($) => {
                      if ($.guards.canActivateChecks.length)
                        return (0, H.of)($).pipe(
                          (0, Te.b)((ge) => {
                            const et = new Er(
                              ge.id,
                              this.serializeUrl(ge.extractedUrl),
                              this.serializeUrl(ge.urlAfterRedirects),
                              ge.targetSnapshot,
                            );
                            this.triggerEvent(et);
                          }),
                          (0, ae.w)((ge) => {
                            let et = !1;
                            return (0, H.of)(ge).pipe(
                              (function (y, m) {
                                return (0, Ge.z)((p) => {
                                  const {
                                    targetSnapshot: w,
                                    guards: { canActivateChecks: S },
                                  } = p;
                                  if (!S.length) return (0, H.of)(p);
                                  let A = 0;
                                  return (0, fe.Dp)(S).pipe(
                                    (0, dt.b)((B) =>
                                      (function (y, m, p, w) {
                                        return (function (y, m, p, w) {
                                          const S = Object.keys(y);
                                          if (0 === S.length) return (0, H.of)({});
                                          const A = {};
                                          return (0, fe.Dp)(S).pipe(
                                            (0, Ge.z)((B) =>
                                              (function (y, m, p, w) {
                                                const S = wt(y, m, w);
                                                return Fe(S.resolve ? S.resolve(m, p) : S(m, p));
                                              })(y[B], m, p, w).pipe(
                                                (0, Te.b)(($) => {
                                                  A[B] = $;
                                                }),
                                              ),
                                            ),
                                            qe(1),
                                            (0, Ge.z)(() =>
                                              Object.keys(A).length === S.length
                                                ? (0, H.of)(A)
                                                : st.E,
                                            ),
                                          );
                                        })(y._resolve, y, m, w).pipe(
                                          (0, X.U)(
                                            (A) => (
                                              (y._resolvedData = A),
                                              (y.data = Object.assign(
                                                Object.assign({}, y.data),
                                                Ut(y, p).resolve,
                                              )),
                                              null
                                            ),
                                          ),
                                        );
                                      })(B.route, w, y, m),
                                    ),
                                    (0, Te.b)(() => A++),
                                    qe(1),
                                    (0, Ge.z)((B) => (A === S.length ? (0, H.of)(p) : st.E)),
                                  );
                                });
                              })(this.paramsInheritanceStrategy, this.ngModule.injector),
                              (0, Te.b)({
                                next: () => (et = !0),
                                complete: () => {
                                  et ||
                                    (this.restoreHistory(ge),
                                    this.cancelNavigationTransition(
                                      ge,
                                      "At least one route resolver didn't emit any value.",
                                    ));
                                },
                              }),
                            );
                          }),
                          (0, Te.b)((ge) => {
                            const et = new Gr(
                              ge.id,
                              this.serializeUrl(ge.extractedUrl),
                              this.serializeUrl(ge.urlAfterRedirects),
                              ge.targetSnapshot,
                            );
                            this.triggerEvent(et);
                          }),
                        );
                    }),
                    Mo(($) => {
                      const {
                        targetSnapshot: ge,
                        id: et,
                        extractedUrl: gt,
                        rawUrl: kt,
                        extras: { skipLocationChange: dn, replaceUrl: Wt },
                      } = $;
                      return this.hooks.afterPreactivation(ge, {
                        navigationId: et,
                        appliedUrlTree: gt,
                        rawUrlTree: kt,
                        skipLocationChange: !!dn,
                        replaceUrl: !!Wt,
                      });
                    }),
                    (0, X.U)(($) => {
                      const ge = (function (y, m, p) {
                        const w = En(y, m._root, p ? p._root : void 0);
                        return new J(w, m);
                      })(this.routeReuseStrategy, $.targetSnapshot, $.currentRouterState);
                      return Object.assign(Object.assign({}, $), { targetRouterState: ge });
                    }),
                    (0, Te.b)(($) => {
                      (this.currentUrlTree = $.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          $.rawUrl,
                        )),
                        (this.routerState = $.targetRouterState),
                        'deferred' === this.urlUpdateStrategy &&
                          ($.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, $),
                          (this.browserUrlTree = $.urlAfterRedirects));
                    }),
                    ((y, m, p) =>
                      (0, X.U)(
                        (w) => (
                          new $a(m, w.targetRouterState, w.currentRouterState, p).activate(y), w
                        ),
                      ))(this.rootContexts, this.routeReuseStrategy, ($) => this.triggerEvent($)),
                    (0, Te.b)({
                      next() {
                        A = !0;
                      },
                      complete() {
                        A = !0;
                      },
                    }),
                    (function (y) {
                      return (0, oe.e)(function (m, p) {
                        try {
                          m.subscribe(p);
                        } finally {
                          p.add(y);
                        }
                      });
                    })(() => {
                      if (!A && !B) {
                        const $ = `Navigation ID ${S.id} is not equal to the current navigation id ${this.navigationId}`;
                        'replace' === this.canceledNavigationResolution
                          ? (this.restoreHistory(S), this.cancelNavigationTransition(S, $))
                          : this.cancelNavigationTransition(S, $);
                      }
                      this.currentNavigation = null;
                    }),
                    (0, re.K)(($) => {
                      if (
                        ((B = !0),
                        (function (y) {
                          return y && y[Q];
                        })($))
                      ) {
                        const ge = nr($.url);
                        ge || ((this.navigated = !0), this.restoreHistory(S, !0));
                        const et = new In(S.id, this.serializeUrl(S.extractedUrl), $.message);
                        w.next(et),
                          ge
                            ? setTimeout(() => {
                                const gt = this.urlHandlingStrategy.merge($.url, this.rawUrlTree);
                                this.scheduleNavigation(
                                  gt,
                                  'imperative',
                                  null,
                                  {
                                    skipLocationChange: S.extras.skipLocationChange,
                                    replaceUrl: 'eager' === this.urlUpdateStrategy,
                                  },
                                  { resolve: S.resolve, reject: S.reject, promise: S.promise },
                                );
                              }, 0)
                            : S.resolve(!1);
                      } else {
                        this.restoreHistory(S, !0);
                        const ge = new Bt(S.id, this.serializeUrl(S.extractedUrl), $);
                        w.next(ge);
                        try {
                          S.resolve(this.errorHandler($));
                        } catch (et) {
                          S.reject(et);
                        }
                      }
                      return st.E;
                    }),
                  );
                }),
              );
            }
            resetRootComponentType(p) {
              (this.rootComponentType = p),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const p = this.transitions.value;
              return (p.urlAfterRedirects = this.browserUrlTree), p;
            }
            setTransition(p) {
              this.transitions.next(Object.assign(Object.assign({}, this.getTransition()), p));
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((p) => {
                  const w = this.extractLocationChangeInfoFromEvent(p);
                  this.shouldScheduleNavigation(this.lastLocationChangeInfo, w) &&
                    setTimeout(() => {
                      const { source: S, state: A, urlTree: B } = w,
                        $ = { replaceUrl: !0 };
                      if (A) {
                        const ge = Object.assign({}, A);
                        delete ge.navigationId,
                          delete ge.ɵrouterPageId,
                          0 !== Object.keys(ge).length && ($.state = ge);
                      }
                      this.scheduleNavigation(B, S, A, $);
                    }, 0),
                    (this.lastLocationChangeInfo = w);
                }));
            }
            extractLocationChangeInfoFromEvent(p) {
              var w;
              return {
                source: 'popstate' === p.type ? 'popstate' : 'hashchange',
                urlTree: this.parseUrl(p.url),
                state: (null === (w = p.state) || void 0 === w ? void 0 : w.navigationId)
                  ? p.state
                  : null,
                transitionId: this.getTransition().id,
              };
            }
            shouldScheduleNavigation(p, w) {
              if (!p) return !0;
              const S = w.urlTree.toString() === p.urlTree.toString();
              return (
                w.transitionId !== p.transitionId ||
                !S ||
                !(
                  ('hashchange' === w.source && 'popstate' === p.source) ||
                  ('popstate' === w.source && 'hashchange' === p.source)
                )
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(p) {
              this.events.next(p);
            }
            resetConfig(p) {
              ro(p), (this.config = p.map(Xi)), (this.navigated = !1), (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.transitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(), (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(p, w = {}) {
              const {
                  relativeTo: S,
                  queryParams: A,
                  fragment: B,
                  queryParamsHandling: $,
                  preserveFragment: ge,
                } = w,
                et = S || this.routerState.root,
                gt = ge ? this.currentUrlTree.fragment : B;
              let kt = null;
              switch ($) {
                case 'merge':
                  kt = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), A);
                  break;
                case 'preserve':
                  kt = this.currentUrlTree.queryParams;
                  break;
                default:
                  kt = A || null;
              }
              return (
                null !== kt && (kt = this.removeEmptyProps(kt)),
                (function (y, m, p, w, S) {
                  if (0 === p.length) return Ln(m.root, m.root, m, w, S);
                  const A = (function (y) {
                    if ('string' == typeof y[0] && 1 === y.length && '/' === y[0])
                      return new Xt(!0, 0, y);
                    let m = 0,
                      p = !1;
                    const w = y.reduce((S, A, B) => {
                      if ('object' == typeof A && null != A) {
                        if (A.outlets) {
                          const $ = {};
                          return (
                            Et(A.outlets, (ge, et) => {
                              $[et] = 'string' == typeof ge ? ge.split('/') : ge;
                            }),
                            [...S, { outlets: $ }]
                          );
                        }
                        if (A.segmentPath) return [...S, A.segmentPath];
                      }
                      return 'string' != typeof A
                        ? [...S, A]
                        : 0 === B
                        ? (A.split('/').forEach(($, ge) => {
                            (0 == ge && '.' === $) ||
                              (0 == ge && '' === $
                                ? (p = !0)
                                : '..' === $
                                ? m++
                                : '' != $ && S.push($));
                          }),
                          S)
                        : [...S, A];
                    }, []);
                    return new Xt(p, m, w);
                  })(p);
                  if (A.toRoot()) return Ln(m.root, new Mt([], {}), m, w, S);
                  const B = (function (y, m, p) {
                      if (y.isAbsolute) return new Zi(m.root, !0, 0);
                      if (-1 === p.snapshot._lastPathIndex) {
                        const A = p.snapshot._urlSegment;
                        return new Zi(A, A === m.root, 0);
                      }
                      const w = Dn(y.commands[0]) ? 0 : 1;
                      return (function (y, m, p) {
                        let w = y,
                          S = m,
                          A = p;
                        for (; A > S; ) {
                          if (((A -= S), (w = w.parent), !w))
                            throw new Error("Invalid number of '../'");
                          S = w.segments.length;
                        }
                        return new Zi(w, !1, S - A);
                      })(
                        p.snapshot._urlSegment,
                        p.snapshot._lastPathIndex + w,
                        y.numberOfDoubleDots,
                      );
                    })(A, m, y),
                    $ = B.processChildren
                      ? to(B.segmentGroup, B.index, A.commands)
                      : Jr(B.segmentGroup, B.index, A.commands);
                  return Ln(B.segmentGroup, $, m, w, S);
                })(et, this.currentUrlTree, p, kt, null != gt ? gt : null)
              );
            }
            navigateByUrl(p, w = { skipLocationChange: !1 }) {
              const S = nr(p) ? p : this.parseUrl(p),
                A = this.urlHandlingStrategy.merge(S, this.rawUrlTree);
              return this.scheduleNavigation(A, 'imperative', null, w);
            }
            navigate(p, w = { skipLocationChange: !1 }) {
              return (
                (function (y) {
                  for (let m = 0; m < y.length; m++) {
                    const p = y[m];
                    if (null == p)
                      throw new Error(`The requested path contains ${p} segment at index ${m}`);
                  }
                })(p),
                this.navigateByUrl(this.createUrlTree(p, w), w)
              );
            }
            serializeUrl(p) {
              return this.urlSerializer.serialize(p);
            }
            parseUrl(p) {
              let w;
              try {
                w = this.urlSerializer.parse(p);
              } catch (S) {
                w = this.malformedUriErrorHandler(S, this.urlSerializer, p);
              }
              return w;
            }
            isActive(p, w) {
              let S;
              if (
                ((S = !0 === w ? Object.assign({}, Oi) : !1 === w ? Object.assign({}, Vt) : w),
                nr(p))
              )
                return bt(this.currentUrlTree, p, S);
              const A = this.parseUrl(p);
              return bt(this.currentUrlTree, A, S);
            }
            removeEmptyProps(p) {
              return Object.keys(p).reduce((w, S) => {
                const A = p[S];
                return null != A && (w[S] = A), w;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (p) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = p.id),
                    (this.currentPageId = p.targetPageId),
                    this.events.next(
                      new jt(
                        p.id,
                        this.serializeUrl(p.extractedUrl),
                        this.serializeUrl(this.currentUrlTree),
                      ),
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    p.resolve(!0);
                },
                (p) => {
                  this.console.warn('Unhandled Navigation Error: ');
                },
              );
            }
            scheduleNavigation(p, w, S, A, B) {
              var $, ge;
              if (this.disposed) return Promise.resolve(!1);
              const et = this.getTransition(),
                gt = 'imperative' !== w && 'imperative' === (null == et ? void 0 : et.source),
                Wt =
                  (this.lastSuccessfulId === et.id || this.currentNavigation
                    ? et.rawUrl
                    : et.urlAfterRedirects
                  ).toString() === p.toString();
              if (gt && Wt) return Promise.resolve(!0);
              let ii, Ni, yi;
              B
                ? ((ii = B.resolve), (Ni = B.reject), (yi = B.promise))
                : (yi = new Promise((as, ha) => {
                    (ii = as), (Ni = ha);
                  }));
              const Fi = ++this.navigationId;
              let jr;
              return (
                'computed' === this.canceledNavigationResolution
                  ? (0 === this.currentPageId && (S = this.location.getState()),
                    (jr =
                      S && S.ɵrouterPageId
                        ? S.ɵrouterPageId
                        : A.replaceUrl || A.skipLocationChange
                        ? null !== ($ = this.browserPageId) && void 0 !== $
                          ? $
                          : 0
                        : (null !== (ge = this.browserPageId) && void 0 !== ge ? ge : 0) + 1))
                  : (jr = 0),
                this.setTransition({
                  id: Fi,
                  targetPageId: jr,
                  source: w,
                  restoredState: S,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: p,
                  extras: A,
                  resolve: ii,
                  reject: Ni,
                  promise: yi,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                yi.catch((as) => Promise.reject(as))
              );
            }
            setBrowserUrl(p, w) {
              const S = this.urlSerializer.serialize(p),
                A = Object.assign(
                  Object.assign({}, w.extras.state),
                  this.generateNgRouterState(w.id, w.targetPageId),
                );
              this.location.isCurrentPathEqualTo(S) || w.extras.replaceUrl
                ? this.location.replaceState(S, '', A)
                : this.location.go(S, '', A);
            }
            restoreHistory(p, w = !1) {
              var S, A;
              if ('computed' === this.canceledNavigationResolution) {
                const B = this.currentPageId - p.targetPageId;
                ('popstate' !== p.source &&
                  'eager' !== this.urlUpdateStrategy &&
                  this.currentUrlTree !==
                    (null === (S = this.currentNavigation) || void 0 === S
                      ? void 0
                      : S.finalUrl)) ||
                0 === B
                  ? this.currentUrlTree ===
                      (null === (A = this.currentNavigation) || void 0 === A
                        ? void 0
                        : A.finalUrl) &&
                    0 === B &&
                    (this.resetState(p),
                    (this.browserUrlTree = p.currentUrlTree),
                    this.resetUrlToCurrentUrlTree())
                  : this.location.historyGo(B);
              } else
                'replace' === this.canceledNavigationResolution &&
                  (w && this.resetState(p), this.resetUrlToCurrentUrlTree());
            }
            resetState(p) {
              (this.routerState = p.currentRouterState),
                (this.currentUrlTree = p.currentUrlTree),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, p.rawUrl));
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
              );
            }
            cancelNavigationTransition(p, w) {
              const S = new In(p.id, this.serializeUrl(p.extractedUrl), w);
              this.triggerEvent(S), p.resolve(!1);
            }
            generateNgRouterState(p, w) {
              return 'computed' === this.canceledNavigationResolution
                ? { navigationId: p, ɵrouterPageId: w }
                : { navigationId: p };
            }
          }
          return (
            (y.ɵfac = function (p) {
              return new (p || y)(
                _.LFG(_.DyG),
                _.LFG(Di),
                _.LFG(Ai),
                _.LFG(R.Ye),
                _.LFG(_.zs3),
                _.LFG(_.v3s),
                _.LFG(_.Sil),
                _.LFG(void 0),
              );
            }),
            (y.ɵprov = _.Yz7({ token: y, factory: y.ɵfac })),
            y
          );
        })(),
        ks = (() => {
          class y {
            constructor(p, w, S, A, B) {
              (this.router = p),
                (this.route = w),
                (this.commands = []),
                (this.onChanges = new Ue.x()),
                null == S && A.setAttribute(B.nativeElement, 'tabindex', '0');
            }
            ngOnChanges(p) {
              this.onChanges.next(this);
            }
            set routerLink(p) {
              this.commands = null != p ? (Array.isArray(p) ? p : [p]) : [];
            }
            onClick() {
              const p = {
                skipLocationChange: rs(this.skipLocationChange),
                replaceUrl: rs(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, p), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: rs(this.preserveFragment),
              });
            }
          }
          return (
            (y.ɵfac = function (p) {
              return new (p || y)(
                _.Y36(yn),
                _.Y36(vt),
                _.$8M('tabindex'),
                _.Y36(_.Qsj),
                _.Y36(_.SBq),
              );
            }),
            (y.ɵdir = _.lG2({
              type: y,
              selectors: [['', 'routerLink', '', 5, 'a', 5, 'area']],
              hostBindings: function (p, w) {
                1 & p &&
                  _.NdJ('click', function () {
                    return w.onClick();
                  });
              },
              inputs: {
                routerLink: 'routerLink',
                queryParams: 'queryParams',
                fragment: 'fragment',
                queryParamsHandling: 'queryParamsHandling',
                preserveFragment: 'preserveFragment',
                skipLocationChange: 'skipLocationChange',
                replaceUrl: 'replaceUrl',
                state: 'state',
                relativeTo: 'relativeTo',
              },
              features: [_.TTD],
            })),
            y
          );
        })();
      function rs(y) {
        return '' === y || !!y;
      }
      let Ri = (() => {
        class y {
          constructor(p, w, S, A, B) {
            (this.parentContexts = p),
              (this.location = w),
              (this.resolver = S),
              (this.changeDetector = B),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new _.vpe()),
              (this.deactivateEvents = new _.vpe()),
              (this.name = A || at),
              p.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const p = this.parentContexts.getContext(this.name);
              p &&
                p.route &&
                (p.attachRef
                  ? this.attach(p.attachRef, p.route)
                  : this.activateWith(p.route, p.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error('Outlet is not activated');
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
          }
          detach() {
            if (!this.activated) throw new Error('Outlet is not activated');
            this.location.detach();
            const p = this.activated;
            return (this.activated = null), (this._activatedRoute = null), p;
          }
          attach(p, w) {
            (this.activated = p), (this._activatedRoute = w), this.location.insert(p.hostView);
          }
          deactivate() {
            if (this.activated) {
              const p = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(p);
            }
          }
          activateWith(p, w) {
            if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
            this._activatedRoute = p;
            const B = (w = w || this.resolver).resolveComponentFactory(
                p._futureSnapshot.routeConfig.component,
              ),
              $ = this.parentContexts.getOrCreateContext(this.name).children,
              ge = new Bs(p, $, this.location.injector);
            (this.activated = this.location.createComponent(B, this.location.length, ge)),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (y.ɵfac = function (p) {
            return new (p || y)(_.Y36(Ai), _.Y36(_.s_b), _.Y36(_._Vd), _.$8M('name'), _.Y36(_.sBO));
          }),
          (y.ɵdir = _.lG2({
            type: y,
            selectors: [['router-outlet']],
            outputs: { activateEvents: 'activate', deactivateEvents: 'deactivate' },
            exportAs: ['outlet'],
          })),
          y
        );
      })();
      class Bs {
        constructor(m, p, w) {
          (this.route = m), (this.childContexts = p), (this.parent = w);
        }
        get(m, p) {
          return m === vt ? this.route : m === Ai ? this.childContexts : this.parent.get(m, p);
        }
      }
      class Vs {}
      class Ro {
        preload(m, p) {
          return (0, H.of)(null);
        }
      }
      let js = (() => {
          class y {
            constructor(p, w, S, A, B) {
              (this.router = p),
                (this.injector = A),
                (this.preloadingStrategy = B),
                (this.loader = new ua(
                  w,
                  S,
                  (et) => p.triggerEvent(new Mn(et)),
                  (et) => p.triggerEvent(new Dr(et)),
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  (0, He.h)((p) => p instanceof jt),
                  (0, dt.b)(() => this.preload()),
                )
                .subscribe(() => {});
            }
            preload() {
              const p = this.injector.get(_.h0i);
              return this.processRoutes(p, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(p, w) {
              const S = [];
              for (const A of w)
                if (A.loadChildren && !A.canLoad && A._loadedConfig) {
                  const B = A._loadedConfig;
                  S.push(this.processRoutes(B.module, B.routes));
                } else
                  A.loadChildren && !A.canLoad
                    ? S.push(this.preloadConfig(p, A))
                    : A.children && S.push(this.processRoutes(p, A.children));
              return (0, fe.Dp)(S).pipe(
                (0, Xe.J)(),
                (0, X.U)((A) => {}),
              );
            }
            preloadConfig(p, w) {
              return this.preloadingStrategy.preload(w, () =>
                (w._loadedConfig
                  ? (0, H.of)(w._loadedConfig)
                  : this.loader.load(p.injector, w)
                ).pipe(
                  (0, Ge.z)((A) => ((w._loadedConfig = A), this.processRoutes(A.module, A.routes))),
                ),
              );
            }
          }
          return (
            (y.ɵfac = function (p) {
              return new (p || y)(_.LFG(yn), _.LFG(_.v3s), _.LFG(_.Sil), _.LFG(_.zs3), _.LFG(Vs));
            }),
            (y.ɵprov = _.Yz7({ token: y, factory: y.ɵfac })),
            y
          );
        })(),
        Gn = (() => {
          class y {
            constructor(p, w, S = {}) {
              (this.router = p),
                (this.viewportScroller = w),
                (this.options = S),
                (this.lastId = 0),
                (this.lastSource = 'imperative'),
                (this.restoredId = 0),
                (this.store = {}),
                (S.scrollPositionRestoration = S.scrollPositionRestoration || 'disabled'),
                (S.anchorScrolling = S.anchorScrolling || 'disabled');
            }
            init() {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((p) => {
                p instanceof Ct
                  ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                    (this.lastSource = p.navigationTrigger),
                    (this.restoredId = p.restoredState ? p.restoredState.navigationId : 0))
                  : p instanceof jt &&
                    ((this.lastId = p.id),
                    this.scheduleScrollEvent(
                      p,
                      this.router.parseUrl(p.urlAfterRedirects).fragment,
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((p) => {
                p instanceof ft &&
                  (p.position
                    ? 'top' === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(p.position)
                    : p.anchor && 'enabled' === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(p.anchor)
                    : 'disabled' !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(p, w) {
              this.router.triggerEvent(
                new ft(p, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, w),
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (y.ɵfac = function (p) {
              return new (p || y)(_.LFG(yn), _.LFG(R.EM), _.LFG(void 0));
            }),
            (y.ɵprov = _.Yz7({ token: y, factory: y.ɵfac })),
            y
          );
        })();
      const fr = new _.OlP('ROUTER_CONFIGURATION'),
        is = new _.OlP('ROUTER_FORROOT_GUARD'),
        Po = [
          R.Ye,
          { provide: Di, useClass: Si },
          {
            provide: yn,
            useFactory: function (y, m, p, w, S, A, B, $ = {}, ge, et) {
              const gt = new yn(null, y, m, p, w, S, A, it(B));
              return (
                ge && (gt.urlHandlingStrategy = ge),
                et && (gt.routeReuseStrategy = et),
                (function (y, m) {
                  y.errorHandler && (m.errorHandler = y.errorHandler),
                    y.malformedUriErrorHandler &&
                      (m.malformedUriErrorHandler = y.malformedUriErrorHandler),
                    y.onSameUrlNavigation && (m.onSameUrlNavigation = y.onSameUrlNavigation),
                    y.paramsInheritanceStrategy &&
                      (m.paramsInheritanceStrategy = y.paramsInheritanceStrategy),
                    y.relativeLinkResolution &&
                      (m.relativeLinkResolution = y.relativeLinkResolution),
                    y.urlUpdateStrategy && (m.urlUpdateStrategy = y.urlUpdateStrategy);
                })($, gt),
                $.enableTracing &&
                  gt.events.subscribe((kt) => {
                    var dn, Wt;
                    null === (dn = console.group) ||
                      void 0 === dn ||
                      dn.call(console, `Router Event: ${kt.constructor.name}`),
                      console.log(kt.toString()),
                      console.log(kt),
                      null === (Wt = console.groupEnd) || void 0 === Wt || Wt.call(console);
                  }),
                gt
              );
            },
            deps: [
              Di,
              Ai,
              R.Ye,
              _.zs3,
              _.v3s,
              _.Sil,
              Fs,
              fr,
              [class {}, new _.FiY()],
              [class {}, new _.FiY()],
            ],
          },
          Ai,
          {
            provide: vt,
            useFactory: function (y) {
              return y.routerState.root;
            },
            deps: [yn],
          },
          { provide: _.v3s, useClass: _.EAV },
          js,
          Ro,
          class {
            preload(m, p) {
              return p().pipe((0, re.K)(() => (0, H.of)(null)));
            }
          },
          { provide: fr, useValue: { enableTracing: !1 } },
        ];
      function iu() {
        return new _.PXZ('Router', yn);
      }
      let su = (() => {
        class y {
          constructor(p, w) {}
          static forRoot(p, w) {
            return {
              ngModule: y,
              providers: [
                Po,
                Fo(p),
                { provide: is, useFactory: lo, deps: [[yn, new _.FiY(), new _.tp0()]] },
                { provide: fr, useValue: w || {} },
                { provide: R.S$, useFactory: No, deps: [R.lw, [new _.tBr(R.mr), new _.FiY()], fr] },
                { provide: Gn, useFactory: da, deps: [yn, R.EM, fr] },
                { provide: Vs, useExisting: w && w.preloadingStrategy ? w.preloadingStrategy : Ro },
                { provide: _.PXZ, multi: !0, useFactory: iu },
                [
                  Pi,
                  { provide: _.ip1, multi: !0, useFactory: gi, deps: [Pi] },
                  { provide: ss, useFactory: fa, deps: [Pi] },
                  { provide: _.tb, multi: !0, useExisting: ss },
                ],
              ],
            };
          }
          static forChild(p) {
            return { ngModule: y, providers: [Fo(p)] };
          }
        }
        return (
          (y.ɵfac = function (p) {
            return new (p || y)(_.LFG(is, 8), _.LFG(yn, 8));
          }),
          (y.ɵmod = _.oAB({ type: y })),
          (y.ɵinj = _.cJS({})),
          y
        );
      })();
      function da(y, m, p) {
        return p.scrollOffset && m.setOffset(p.scrollOffset), new Gn(y, m, p);
      }
      function No(y, m, p = {}) {
        return p.useHash ? new R.Do(y, m) : new R.b0(y, m);
      }
      function lo(y) {
        return 'guarded';
      }
      function Fo(y) {
        return [
          { provide: _.deG, multi: !0, useValue: y },
          { provide: Fs, multi: !0, useValue: y },
        ];
      }
      let Pi = (() => {
        class y {
          constructor(p) {
            (this.injector = p),
              (this.initNavigation = !1),
              (this.destroyed = !1),
              (this.resultOfPreactivationDone = new Ue.x());
          }
          appInitializer() {
            return this.injector.get(R.V_, Promise.resolve(null)).then(() => {
              if (this.destroyed) return Promise.resolve(!0);
              let w = null;
              const S = new Promise(($) => (w = $)),
                A = this.injector.get(yn),
                B = this.injector.get(fr);
              return (
                'disabled' === B.initialNavigation
                  ? (A.setUpLocationChangeListener(), w(!0))
                  : 'enabled' === B.initialNavigation || 'enabledBlocking' === B.initialNavigation
                  ? ((A.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? (0, H.of)(null)
                        : ((this.initNavigation = !0), w(!0), this.resultOfPreactivationDone)),
                    A.initialNavigation())
                  : w(!0),
                S
              );
            });
          }
          bootstrapListener(p) {
            const w = this.injector.get(fr),
              S = this.injector.get(js),
              A = this.injector.get(Gn),
              B = this.injector.get(yn),
              $ = this.injector.get(_.z2F);
            p === $.components[0] &&
              (('enabledNonBlocking' === w.initialNavigation || void 0 === w.initialNavigation) &&
                B.initialNavigation(),
              S.setUpPreloading(),
              A.init(),
              B.resetRootComponentType($.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
          ngOnDestroy() {
            this.destroyed = !0;
          }
        }
        return (
          (y.ɵfac = function (p) {
            return new (p || y)(_.LFG(_.zs3));
          }),
          (y.ɵprov = _.Yz7({ token: y, factory: y.ɵfac })),
          y
        );
      })();
      function gi(y) {
        return y.appInitializer.bind(y);
      }
      function fa(y) {
        return y.bootstrapListener.bind(y);
      }
      const ss = new _.OlP('Router Initializer');
    },
    5094: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { X: () => Se });
      var R = k(9162),
        Se = (function (fe) {
          function he(ne) {
            var ie = fe.call(this) || this;
            return (ie._value = ne), ie;
          }
          return (
            (0, R.ZT)(he, fe),
            Object.defineProperty(he.prototype, 'value', {
              get: function () {
                return this.getValue();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (he.prototype._subscribe = function (ne) {
              var ie = fe.prototype._subscribe.call(this, ne);
              return !ie.closed && ne.next(this._value), ie;
            }),
            (he.prototype.getValue = function () {
              var we = this._value;
              if (this.hasError) throw this.thrownError;
              return this._throwIfClosed(), we;
            }),
            (he.prototype.next = function (ne) {
              fe.prototype.next.call(this, (this._value = ne));
            }),
            he
          );
        })(k(6889).x);
    },
    1776: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { y: () => Ve });
      var R = k(2049),
        _ = k(8839),
        Se = k(8794),
        fe = k(2738);
      function ne(Ee) {
        return 0 === Ee.length
          ? fe.y
          : 1 === Ee.length
          ? Ee[0]
          : function (Ke) {
              return Ee.reduce(function (st, Ue) {
                return Ue(st);
              }, Ke);
            };
      }
      var ie = k(6806),
        oe = k(8853),
        we = k(4112),
        Ve = (function () {
          function Ee(Me) {
            Me && (this._subscribe = Me);
          }
          return (
            (Ee.prototype.lift = function (Me) {
              var Ke = new Ee();
              return (Ke.source = this), (Ke.operator = Me), Ke;
            }),
            (Ee.prototype.subscribe = function (Me, Ke, st) {
              var Ue = this,
                Ze = (function (Ee) {
                  return (
                    (Ee && Ee instanceof R.Lv) ||
                    ((function (Ee) {
                      return (
                        Ee && (0, oe.m)(Ee.next) && (0, oe.m)(Ee.error) && (0, oe.m)(Ee.complete)
                      );
                    })(Ee) &&
                      (0, _.Nn)(Ee))
                  );
                })(Me)
                  ? Me
                  : new R.Hp(Me, Ke, st);
              return (
                (0, we.x)(function () {
                  var He = Ue.operator,
                    qe = Ue.source;
                  Ze.add(He ? He.call(Ze, qe) : qe ? Ue._subscribe(Ze) : Ue._trySubscribe(Ze));
                }),
                Ze
              );
            }),
            (Ee.prototype._trySubscribe = function (Me) {
              try {
                return this._subscribe(Me);
              } catch (Ke) {
                Me.error(Ke);
              }
            }),
            (Ee.prototype.forEach = function (Me, Ke) {
              var st = this;
              return new (Ke = xe(Ke))(function (Ue, Ze) {
                var $e;
                $e = st.subscribe(
                  function (He) {
                    try {
                      Me(He);
                    } catch (qe) {
                      Ze(qe), null == $e || $e.unsubscribe();
                    }
                  },
                  Ze,
                  Ue,
                );
              });
            }),
            (Ee.prototype._subscribe = function (Me) {
              var Ke;
              return null === (Ke = this.source) || void 0 === Ke ? void 0 : Ke.subscribe(Me);
            }),
            (Ee.prototype[Se.L] = function () {
              return this;
            }),
            (Ee.prototype.pipe = function () {
              for (var Me = [], Ke = 0; Ke < arguments.length; Ke++) Me[Ke] = arguments[Ke];
              return ne(Me)(this);
            }),
            (Ee.prototype.toPromise = function (Me) {
              var Ke = this;
              return new (Me = xe(Me))(function (st, Ue) {
                var Ze;
                Ke.subscribe(
                  function ($e) {
                    return (Ze = $e);
                  },
                  function ($e) {
                    return Ue($e);
                  },
                  function () {
                    return st(Ze);
                  },
                );
              });
            }),
            (Ee.create = function (Me) {
              return new Ee(Me);
            }),
            Ee
          );
        })();
      function xe(Ee) {
        var Me;
        return null !== (Me = null != Ee ? Ee : ie.v.Promise) && void 0 !== Me ? Me : Promise;
      }
    },
    6889: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { x: () => oe });
      var R = k(9162),
        _ = k(1776),
        Se = k(8839),
        he = (0, k(3864).d)(function (Ve) {
          return function () {
            Ve(this),
              (this.name = 'ObjectUnsubscribedError'),
              (this.message = 'object unsubscribed');
          };
        }),
        ne = k(5850),
        ie = k(4112),
        oe = (function (Ve) {
          function xe() {
            var H = Ve.call(this) || this;
            return (
              (H.closed = !1),
              (H.observers = []),
              (H.isStopped = !1),
              (H.hasError = !1),
              (H.thrownError = null),
              H
            );
          }
          return (
            (0, R.ZT)(xe, Ve),
            (xe.prototype.lift = function (H) {
              var Ne = new we(this, this);
              return (Ne.operator = H), Ne;
            }),
            (xe.prototype._throwIfClosed = function () {
              if (this.closed) throw new he();
            }),
            (xe.prototype.next = function (H) {
              var Ne = this;
              (0, ie.x)(function () {
                var Ee, Me;
                if ((Ne._throwIfClosed(), !Ne.isStopped)) {
                  var Ke = Ne.observers.slice();
                  try {
                    for (var st = (0, R.XA)(Ke), Ue = st.next(); !Ue.done; Ue = st.next())
                      Ue.value.next(H);
                  } catch ($e) {
                    Ee = { error: $e };
                  } finally {
                    try {
                      Ue && !Ue.done && (Me = st.return) && Me.call(st);
                    } finally {
                      if (Ee) throw Ee.error;
                    }
                  }
                }
              });
            }),
            (xe.prototype.error = function (H) {
              var Ne = this;
              (0, ie.x)(function () {
                if ((Ne._throwIfClosed(), !Ne.isStopped)) {
                  (Ne.hasError = Ne.isStopped = !0), (Ne.thrownError = H);
                  for (var Ee = Ne.observers; Ee.length; ) Ee.shift().error(H);
                }
              });
            }),
            (xe.prototype.complete = function () {
              var H = this;
              (0, ie.x)(function () {
                if ((H._throwIfClosed(), !H.isStopped)) {
                  H.isStopped = !0;
                  for (var Ne = H.observers; Ne.length; ) Ne.shift().complete();
                }
              });
            }),
            (xe.prototype.unsubscribe = function () {
              (this.isStopped = this.closed = !0), (this.observers = null);
            }),
            Object.defineProperty(xe.prototype, 'observed', {
              get: function () {
                var H;
                return (null === (H = this.observers) || void 0 === H ? void 0 : H.length) > 0;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (xe.prototype._trySubscribe = function (H) {
              return this._throwIfClosed(), Ve.prototype._trySubscribe.call(this, H);
            }),
            (xe.prototype._subscribe = function (H) {
              return (
                this._throwIfClosed(), this._checkFinalizedStatuses(H), this._innerSubscribe(H)
              );
            }),
            (xe.prototype._innerSubscribe = function (H) {
              var Ke = this.observers;
              return this.hasError || this.isStopped
                ? Se.Lc
                : (Ke.push(H),
                  new Se.w0(function () {
                    return (0, ne.P)(Ke, H);
                  }));
            }),
            (xe.prototype._checkFinalizedStatuses = function (H) {
              var Ke = this.isStopped;
              this.hasError ? H.error(this.thrownError) : Ke && H.complete();
            }),
            (xe.prototype.asObservable = function () {
              var H = new _.y();
              return (H.source = this), H;
            }),
            (xe.create = function (H, Ne) {
              return new we(H, Ne);
            }),
            xe
          );
        })(_.y),
        we = (function (Ve) {
          function xe(H, Ne) {
            var Ee = Ve.call(this) || this;
            return (Ee.destination = H), (Ee.source = Ne), Ee;
          }
          return (
            (0, R.ZT)(xe, Ve),
            (xe.prototype.next = function (H) {
              var Ne, Ee;
              null ===
                (Ee = null === (Ne = this.destination) || void 0 === Ne ? void 0 : Ne.next) ||
                void 0 === Ee ||
                Ee.call(Ne, H);
            }),
            (xe.prototype.error = function (H) {
              var Ne, Ee;
              null ===
                (Ee = null === (Ne = this.destination) || void 0 === Ne ? void 0 : Ne.error) ||
                void 0 === Ee ||
                Ee.call(Ne, H);
            }),
            (xe.prototype.complete = function () {
              var H, Ne;
              null ===
                (Ne = null === (H = this.destination) || void 0 === H ? void 0 : H.complete) ||
                void 0 === Ne ||
                Ne.call(H);
            }),
            (xe.prototype._subscribe = function (H) {
              var Ne, Ee;
              return null !==
                (Ee = null === (Ne = this.source) || void 0 === Ne ? void 0 : Ne.subscribe(H)) &&
                void 0 !== Ee
                ? Ee
                : Se.Lc;
            }),
            xe
          );
        })(oe);
    },
    2049: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { Hp: () => Ee, Lv: () => Ne });
      var R = k(9162),
        _ = k(8853),
        Se = k(8839),
        fe = k(6806),
        he = k(8550),
        ne = k(6186),
        ie = Ve('C', void 0, void 0);
      function Ve(Ze, $e, He) {
        return { kind: Ze, value: $e, error: He };
      }
      var xe = k(9385),
        H = k(4112),
        Ne = (function (Ze) {
          function $e(He) {
            var qe = Ze.call(this) || this;
            return (
              (qe.isStopped = !1),
              He ? ((qe.destination = He), (0, Se.Nn)(He) && He.add(qe)) : (qe.destination = Ue),
              qe
            );
          }
          return (
            (0, R.ZT)($e, Ze),
            ($e.create = function (He, qe, ot) {
              return new Ee(He, qe, ot);
            }),
            ($e.prototype.next = function (He) {
              this.isStopped
                ? st(
                    (function (Ze) {
                      return Ve('N', Ze, void 0);
                    })(He),
                    this,
                  )
                : this._next(He);
            }),
            ($e.prototype.error = function (He) {
              this.isStopped
                ? st(
                    (function (Ze) {
                      return Ve('E', void 0, Ze);
                    })(He),
                    this,
                  )
                : ((this.isStopped = !0), this._error(He));
            }),
            ($e.prototype.complete = function () {
              this.isStopped ? st(ie, this) : ((this.isStopped = !0), this._complete());
            }),
            ($e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                Ze.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            ($e.prototype._next = function (He) {
              this.destination.next(He);
            }),
            ($e.prototype._error = function (He) {
              try {
                this.destination.error(He);
              } finally {
                this.unsubscribe();
              }
            }),
            ($e.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            $e
          );
        })(Se.w0),
        Ee = (function (Ze) {
          function $e(He, qe, ot) {
            var yt,
              tt = Ze.call(this) || this;
            if ((0, _.m)(He)) yt = He;
            else if (He) {
              var Ht;
              (yt = He.next),
                (qe = He.error),
                (ot = He.complete),
                tt && fe.v.useDeprecatedNextContext
                  ? ((Ht = Object.create(He)).unsubscribe = function () {
                      return tt.unsubscribe();
                    })
                  : (Ht = He),
                (yt = null == yt ? void 0 : yt.bind(Ht)),
                (qe = null == qe ? void 0 : qe.bind(Ht)),
                (ot = null == ot ? void 0 : ot.bind(Ht));
            }
            return (
              (tt.destination = {
                next: yt ? Me(yt) : ne.Z,
                error: Me(null != qe ? qe : Ke),
                complete: ot ? Me(ot) : ne.Z,
              }),
              tt
            );
          }
          return (0, R.ZT)($e, Ze), $e;
        })(Ne);
      function Me(Ze, $e) {
        return function () {
          for (var He = [], qe = 0; qe < arguments.length; qe++) He[qe] = arguments[qe];
          try {
            Ze.apply(void 0, (0, R.ev)([], (0, R.CR)(He)));
          } catch (ot) {
            fe.v.useDeprecatedSynchronousErrorHandling ? (0, H.O)(ot) : (0, he.h)(ot);
          }
        };
      }
      function Ke(Ze) {
        throw Ze;
      }
      function st(Ze, $e) {
        var He = fe.v.onStoppedNotification;
        He &&
          xe.z.setTimeout(function () {
            return He(Ze, $e);
          });
      }
      var Ue = { closed: !0, next: ne.Z, error: Ke, complete: ne.Z };
    },
    8839: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { Lc: () => ie, w0: () => ne, Nn: () => oe });
      var R = k(9162),
        _ = k(8853),
        fe = (0, k(3864).d)(function (Ve) {
          return function (H) {
            Ve(this),
              (this.message = H
                ? H.length +
                  ' errors occurred during unsubscription:\n' +
                  H.map(function (Ne, Ee) {
                    return Ee + 1 + ') ' + Ne.toString();
                  }).join('\n  ')
                : ''),
              (this.name = 'UnsubscriptionError'),
              (this.errors = H);
          };
        }),
        he = k(5850),
        ne = (function () {
          function Ve(xe) {
            (this.initialTeardown = xe),
              (this.closed = !1),
              (this._parentage = null),
              (this._teardowns = null);
          }
          return (
            (Ve.prototype.unsubscribe = function () {
              var xe, H, Ne, Ee, Me;
              if (!this.closed) {
                this.closed = !0;
                var Ke = this._parentage;
                if (Ke)
                  if (((this._parentage = null), Array.isArray(Ke)))
                    try {
                      for (var st = (0, R.XA)(Ke), Ue = st.next(); !Ue.done; Ue = st.next())
                        Ue.value.remove(this);
                    } catch (yt) {
                      xe = { error: yt };
                    } finally {
                      try {
                        Ue && !Ue.done && (H = st.return) && H.call(st);
                      } finally {
                        if (xe) throw xe.error;
                      }
                    }
                  else Ke.remove(this);
                var $e = this.initialTeardown;
                if ((0, _.m)($e))
                  try {
                    $e();
                  } catch (yt) {
                    Me = yt instanceof fe ? yt.errors : [yt];
                  }
                var He = this._teardowns;
                if (He) {
                  this._teardowns = null;
                  try {
                    for (var qe = (0, R.XA)(He), ot = qe.next(); !ot.done; ot = qe.next()) {
                      var tt = ot.value;
                      try {
                        we(tt);
                      } catch (yt) {
                        (Me = null != Me ? Me : []),
                          yt instanceof fe
                            ? (Me = (0, R.ev)((0, R.ev)([], (0, R.CR)(Me)), (0, R.CR)(yt.errors)))
                            : Me.push(yt);
                      }
                    }
                  } catch (yt) {
                    Ne = { error: yt };
                  } finally {
                    try {
                      ot && !ot.done && (Ee = qe.return) && Ee.call(qe);
                    } finally {
                      if (Ne) throw Ne.error;
                    }
                  }
                }
                if (Me) throw new fe(Me);
              }
            }),
            (Ve.prototype.add = function (xe) {
              var H;
              if (xe && xe !== this)
                if (this.closed) we(xe);
                else {
                  if (xe instanceof Ve) {
                    if (xe.closed || xe._hasParent(this)) return;
                    xe._addParent(this);
                  }
                  (this._teardowns = null !== (H = this._teardowns) && void 0 !== H ? H : []).push(
                    xe,
                  );
                }
            }),
            (Ve.prototype._hasParent = function (xe) {
              var H = this._parentage;
              return H === xe || (Array.isArray(H) && H.includes(xe));
            }),
            (Ve.prototype._addParent = function (xe) {
              var H = this._parentage;
              this._parentage = Array.isArray(H) ? (H.push(xe), H) : H ? [H, xe] : xe;
            }),
            (Ve.prototype._removeParent = function (xe) {
              var H = this._parentage;
              H === xe ? (this._parentage = null) : Array.isArray(H) && (0, he.P)(H, xe);
            }),
            (Ve.prototype.remove = function (xe) {
              var H = this._teardowns;
              H && (0, he.P)(H, xe), xe instanceof Ve && xe._removeParent(this);
            }),
            (Ve.EMPTY = (((xe = new Ve()).closed = !0), xe)),
            Ve
          );
          var xe;
        })(),
        ie = ne.EMPTY;
      function oe(Ve) {
        return (
          Ve instanceof ne ||
          (Ve &&
            'closed' in Ve &&
            (0, _.m)(Ve.remove) &&
            (0, _.m)(Ve.add) &&
            (0, _.m)(Ve.unsubscribe))
        );
      }
      function we(Ve) {
        (0, _.m)(Ve) ? Ve() : Ve.unsubscribe();
      }
    },
    6806: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { v: () => R });
      var R = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    4544: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { a: () => Ue });
      var R = k(1776),
        _ = Array.isArray,
        Se = Object.getPrototypeOf,
        fe = Object.prototype,
        he = Object.keys;
      function ne(He) {
        if (1 === He.length) {
          var qe = He[0];
          if (_(qe)) return { args: qe, keys: null };
          if (
            (function (He) {
              return He && 'object' == typeof He && Se(He) === fe;
            })(qe)
          ) {
            var ot = he(qe);
            return {
              args: ot.map(function (tt) {
                return qe[tt];
              }),
              keys: ot,
            };
          }
        }
        return { args: He, keys: null };
      }
      var oe = k(5929),
        we = k(2738),
        Ve = k(9162),
        xe = k(5207),
        H = Array.isArray;
      function Ee(He) {
        return (0, xe.U)(function (qe) {
          return (function (He, qe) {
            return H(qe) ? He.apply(void 0, (0, Ve.ev)([], (0, Ve.CR)(qe))) : He(qe);
          })(He, qe);
        });
      }
      var Me = k(9528);
      function Ke(He, qe) {
        return He.reduce(function (ot, tt, yt) {
          return (ot[tt] = qe[yt]), ot;
        }, {});
      }
      var st = k(5076);
      function Ue() {
        for (var He = [], qe = 0; qe < arguments.length; qe++) He[qe] = arguments[qe];
        var ot = (0, Me.yG)(He),
          tt = (0, Me.jO)(He),
          yt = ne(He),
          Ht = yt.args,
          se = yt.keys;
        if (0 === Ht.length) return (0, oe.Dp)([], ot);
        var X = new R.y(
          Ze(
            Ht,
            ot,
            se
              ? function (ae) {
                  return Ke(se, ae);
                }
              : we.y,
          ),
        );
        return tt ? X.pipe(Ee(tt)) : X;
      }
      function Ze(He, qe, ot) {
        return (
          void 0 === ot && (ot = we.y),
          function (tt) {
            $e(
              qe,
              function () {
                for (
                  var yt = He.length,
                    Ht = new Array(yt),
                    se = yt,
                    X = yt,
                    ae = function (Re) {
                      $e(
                        qe,
                        function () {
                          var re = (0, oe.Dp)(He[Re], qe),
                            dt = !1;
                          re.subscribe(
                            new st.Q(
                              tt,
                              function (me) {
                                (Ht[Re] = me), dt || ((dt = !0), X--), X || tt.next(ot(Ht.slice()));
                              },
                              function () {
                                --se || tt.complete();
                              },
                            ),
                          );
                        },
                        tt,
                      );
                    },
                    ye = 0;
                  ye < yt;
                  ye++
                )
                  ae(ye);
              },
              tt,
            );
          }
        );
      }
      function $e(He, qe, ot) {
        He ? ot.add(He.schedule(qe)) : qe();
      }
    },
    9044: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { z: () => he });
      var R = k(23);
      function _() {
        return (0, R.J)(1);
      }
      var Se = k(5994),
        fe = k(9528);
      function he() {
        for (var ne = [], ie = 0; ie < arguments.length; ie++) ne[ie] = arguments[ie];
        return _()((0, Se.h)(ne, (0, fe.yG)(ne)));
      }
    },
    6149: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { E: () => _ });
      var _ = new (k(1776).y)(function (he) {
        return he.complete();
      });
    },
    5929: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { Dp: () => yt, OO: () => X, Xf: () => Ht });
      var R = k(9162),
        _ = function (me) {
          return me && 'number' == typeof me.length && 'function' != typeof me;
        },
        Se = k(8853);
      function fe(me) {
        return (0, Se.m)(null == me ? void 0 : me.then);
      }
      var he = k(8794),
        ne = k(1776),
        ie = k(8839),
        Ve = k(2504),
        H = 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      function Me(me, Ge) {
        if (!me) throw new Error('Iterable cannot be null');
        return new ne.y(function (Te) {
          var Xe = new ie.w0();
          return (
            Xe.add(
              Ge.schedule(function () {
                var nt = me[Symbol.asyncIterator]();
                Xe.add(
                  Ge.schedule(function () {
                    var Ct = this;
                    nt.next().then(function (jt) {
                      jt.done ? Te.complete() : (Te.next(jt.value), Ct.schedule());
                    });
                  }),
                );
              }),
            ),
            Xe
          );
        });
      }
      function Ke(me) {
        return (0, Se.m)(me[he.L]);
      }
      function st(me) {
        return (0, Se.m)(null == me ? void 0 : me[H]);
      }
      function Ue(me) {
        return Symbol.asyncIterator && (0, Se.m)(null == me ? void 0 : me[Symbol.asyncIterator]);
      }
      function Ze(me) {
        return new TypeError(
          'You provided ' +
            (null !== me && 'object' == typeof me ? 'an invalid object' : "'" + me + "'") +
            ' where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.',
        );
      }
      function $e(me) {
        return (0, R.FC)(this, arguments, function () {
          var Te, Xe, nt;
          return (0, R.Jh)(this, function (jt) {
            switch (jt.label) {
              case 0:
                (Te = me.getReader()), (jt.label = 1);
              case 1:
                jt.trys.push([1, , 9, 10]), (jt.label = 2);
              case 2:
                return [4, (0, R.qq)(Te.read())];
              case 3:
                return (Xe = jt.sent()), (nt = Xe.value), Xe.done ? [4, (0, R.qq)(void 0)] : [3, 5];
              case 4:
                return [2, jt.sent()];
              case 5:
                return [4, (0, R.qq)(nt)];
              case 6:
                return [4, jt.sent()];
              case 7:
                return jt.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return Te.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function He(me) {
        return (0, Se.m)(null == me ? void 0 : me.getReader);
      }
      var tt = k(8550);
      function yt(me, Ge) {
        return Ge
          ? (function (me, Ge) {
              if (null != me) {
                if (Ke(me))
                  return (function (me, Ge) {
                    return new ne.y(function (Te) {
                      var Xe = new ie.w0();
                      return (
                        Xe.add(
                          Ge.schedule(function () {
                            var nt = me[he.L]();
                            Xe.add(
                              nt.subscribe({
                                next: function (Ct) {
                                  Xe.add(
                                    Ge.schedule(function () {
                                      return Te.next(Ct);
                                    }),
                                  );
                                },
                                error: function (Ct) {
                                  Xe.add(
                                    Ge.schedule(function () {
                                      return Te.error(Ct);
                                    }),
                                  );
                                },
                                complete: function () {
                                  Xe.add(
                                    Ge.schedule(function () {
                                      return Te.complete();
                                    }),
                                  );
                                },
                              }),
                            );
                          }),
                        ),
                        Xe
                      );
                    });
                  })(me, Ge);
                if (_(me)) return (0, Ve.r)(me, Ge);
                if (fe(me))
                  return (function (me, Ge) {
                    return new ne.y(function (Te) {
                      return Ge.schedule(function () {
                        return me.then(
                          function (Xe) {
                            Te.add(
                              Ge.schedule(function () {
                                Te.next(Xe),
                                  Te.add(
                                    Ge.schedule(function () {
                                      return Te.complete();
                                    }),
                                  );
                              }),
                            );
                          },
                          function (Xe) {
                            Te.add(
                              Ge.schedule(function () {
                                return Te.error(Xe);
                              }),
                            );
                          },
                        );
                      });
                    });
                  })(me, Ge);
                if (Ue(me)) return Me(me, Ge);
                if (st(me))
                  return (function (me, Ge) {
                    return new ne.y(function (Te) {
                      var Xe;
                      return (
                        Te.add(
                          Ge.schedule(function () {
                            (Xe = me[H]()),
                              (function (me, Ge, Te, Xe) {
                                void 0 === Xe && (Xe = 0);
                                var nt = Ge.schedule(function () {
                                  try {
                                    Te.call(this);
                                  } catch (Ct) {
                                    me.error(Ct);
                                  }
                                }, Xe);
                                me.add(nt);
                              })(Te, Ge, function () {
                                var nt = Xe.next(),
                                  Ct = nt.value;
                                nt.done ? Te.complete() : (Te.next(Ct), this.schedule());
                              });
                          }),
                        ),
                        function () {
                          return (0, Se.m)(null == Xe ? void 0 : Xe.return) && Xe.return();
                        }
                      );
                    });
                  })(me, Ge);
                if (He(me))
                  return (function (me, Ge) {
                    return Me($e(me), Ge);
                  })(me, Ge);
              }
              throw Ze(me);
            })(me, Ge)
          : Ht(me);
      }
      function Ht(me) {
        if (me instanceof ne.y) return me;
        if (null != me) {
          if (Ke(me))
            return (function (me) {
              return new ne.y(function (Ge) {
                var Te = me[he.L]();
                if ((0, Se.m)(Te.subscribe)) return Te.subscribe(Ge);
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable',
                );
              });
            })(me);
          if (_(me)) return X(me);
          if (fe(me))
            return (function (me) {
              return new ne.y(function (Ge) {
                me.then(
                  function (Te) {
                    Ge.closed || (Ge.next(Te), Ge.complete());
                  },
                  function (Te) {
                    return Ge.error(Te);
                  },
                ).then(null, tt.h);
              });
            })(me);
          if (Ue(me)) return Re(me);
          if (st(me))
            return (function (me) {
              return new ne.y(function (Ge) {
                var Te, Xe;
                try {
                  for (var nt = (0, R.XA)(me), Ct = nt.next(); !Ct.done; Ct = nt.next())
                    if ((Ge.next(Ct.value), Ge.closed)) return;
                } catch (In) {
                  Te = { error: In };
                } finally {
                  try {
                    Ct && !Ct.done && (Xe = nt.return) && Xe.call(nt);
                  } finally {
                    if (Te) throw Te.error;
                  }
                }
                Ge.complete();
              });
            })(me);
          if (He(me))
            return (function (me) {
              return Re($e(me));
            })(me);
        }
        throw Ze(me);
      }
      function X(me) {
        return new ne.y(function (Ge) {
          for (var Te = 0; Te < me.length && !Ge.closed; Te++) Ge.next(me[Te]);
          Ge.complete();
        });
      }
      function Re(me) {
        return new ne.y(function (Ge) {
          (function (me, Ge) {
            var Te, Xe, nt, Ct;
            return (0, R.mG)(this, void 0, void 0, function () {
              var In;
              return (0, R.Jh)(this, function (Bt) {
                switch (Bt.label) {
                  case 0:
                    Bt.trys.push([0, 5, 6, 11]), (Te = (0, R.KL)(me)), (Bt.label = 1);
                  case 1:
                    return [4, Te.next()];
                  case 2:
                    if ((Xe = Bt.sent()).done) return [3, 4];
                    if ((Ge.next(Xe.value), Ge.closed)) return [2];
                    Bt.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return (In = Bt.sent()), (nt = { error: In }), [3, 11];
                  case 6:
                    return (
                      Bt.trys.push([6, , 9, 10]),
                      Xe && !Xe.done && (Ct = Te.return) ? [4, Ct.call(Te)] : [3, 8]
                    );
                  case 7:
                    Bt.sent(), (Bt.label = 8);
                  case 8:
                    return [3, 10];
                  case 9:
                    if (nt) throw nt.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return Ge.complete(), [2];
                }
              });
            });
          })(me, Ge).catch(function (Te) {
            return Ge.error(Te);
          });
        });
      }
    },
    5994: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { h: () => Se });
      var R = k(2504),
        _ = k(5929);
      function Se(fe, he) {
        return he ? (0, R.r)(fe, he) : (0, _.OO)(fe);
      }
    },
    3763: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { T: () => ne });
      var R = k(23),
        _ = k(5994),
        Se = k(5929),
        fe = k(6149),
        he = k(9528);
      function ne() {
        for (var ie = [], oe = 0; oe < arguments.length; oe++) ie[oe] = arguments[oe];
        var we = (0, he.yG)(ie),
          Ve = (0, he._6)(ie, 1 / 0),
          xe = ie;
        return xe.length
          ? 1 === xe.length
            ? (0, Se.Xf)(xe[0])
            : (0, R.J)(Ve)((0, _.h)(xe, we))
          : fe.E;
      }
    },
    1964: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { of: () => fe });
      var R = k(5994),
        _ = k(2504),
        Se = k(9528);
      function fe() {
        for (var he = [], ne = 0; ne < arguments.length; ne++) he[ne] = arguments[ne];
        var ie = (0, Se.yG)(he);
        return ie ? (0, _.r)(he, ie) : (0, R.h)(he);
      }
    },
    5076: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { Q: () => Se });
      var R = k(9162),
        Se = (function (fe) {
          function he(ne, ie, oe, we, Ve) {
            var xe = fe.call(this, ne) || this;
            return (
              (xe.onFinalize = Ve),
              (xe._next = ie
                ? function (H) {
                    try {
                      ie(H);
                    } catch (Ne) {
                      ne.error(Ne);
                    }
                  }
                : fe.prototype._next),
              (xe._error = we
                ? function (H) {
                    try {
                      we(H);
                    } catch (Ne) {
                      ne.error(Ne);
                    } finally {
                      this.unsubscribe();
                    }
                  }
                : fe.prototype._error),
              (xe._complete = oe
                ? function () {
                    try {
                      oe();
                    } catch (H) {
                      ne.error(H);
                    } finally {
                      this.unsubscribe();
                    }
                  }
                : fe.prototype._complete),
              xe
            );
          }
          return (
            (0, R.ZT)(he, fe),
            (he.prototype.unsubscribe = function () {
              var ne,
                ie = this.closed;
              fe.prototype.unsubscribe.call(this),
                !ie && (null === (ne = this.onFinalize) || void 0 === ne || ne.call(this));
            }),
            he
          );
        })(k(2049).Lv);
    },
    5894: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { K: () => fe });
      var R = k(5929),
        _ = k(5076),
        Se = k(4297);
      function fe(he) {
        return (0, Se.e)(function (ne, ie) {
          var Ve,
            oe = null,
            we = !1;
          (oe = ne.subscribe(
            new _.Q(ie, void 0, void 0, function (xe) {
              (Ve = (0, R.Xf)(he(xe, fe(he)(ne)))),
                oe ? (oe.unsubscribe(), (oe = null), Ve.subscribe(ie)) : (we = !0);
            }),
          )),
            we && (oe.unsubscribe(), (oe = null), Ve.subscribe(ie));
        });
      }
    },
    3766: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { b: () => Se });
      var R = k(7216),
        _ = k(8853);
      function Se(fe, he) {
        return (0, _.m)(he) ? (0, R.z)(fe, he, 1) : (0, R.z)(fe, 1);
      }
    },
    9496: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { d: () => Se });
      var R = k(4297),
        _ = k(5076);
      function Se(fe) {
        return (0, R.e)(function (he, ne) {
          var ie = !1;
          he.subscribe(
            new _.Q(
              ne,
              function (oe) {
                (ie = !0), ne.next(oe);
              },
              function () {
                ie || ne.next(fe), ne.complete();
              },
            ),
          );
        });
      }
    },
    4689: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { h: () => Se });
      var R = k(4297),
        _ = k(5076);
      function Se(fe, he) {
        return (0, R.e)(function (ne, ie) {
          var oe = 0;
          ne.subscribe(
            new _.Q(ie, function (we) {
              return fe.call(he, we, oe++) && ie.next(we);
            }),
          );
        });
      }
    },
    7920: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { P: () => ie });
      var R = k(1987),
        _ = k(4689),
        Se = k(4294),
        fe = k(9496),
        he = k(8405),
        ne = k(2738);
      function ie(oe, we) {
        var Ve = arguments.length >= 2;
        return function (xe) {
          return xe.pipe(
            oe
              ? (0, _.h)(function (H, Ne) {
                  return oe(H, Ne, xe);
                })
              : ne.y,
            (0, Se.q)(1),
            Ve
              ? (0, fe.d)(we)
              : (0, he.T)(function () {
                  return new R.K();
                }),
          );
        };
      }
    },
    5207: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { U: () => Se });
      var R = k(4297),
        _ = k(5076);
      function Se(fe, he) {
        return (0, R.e)(function (ne, ie) {
          var oe = 0;
          ne.subscribe(
            new _.Q(ie, function (we) {
              ie.next(fe.call(he, we, oe++));
            }),
          );
        });
      }
    },
    23: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { J: () => Se });
      var R = k(7216),
        _ = k(2738);
      function Se(fe) {
        return void 0 === fe && (fe = 1 / 0), (0, R.z)(_.y, fe);
      }
    },
    7216: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { z: () => ie });
      var R = k(5207),
        _ = k(5929),
        Se = k(4297),
        fe = k(5076),
        ne = k(8853);
      function ie(oe, we, Ve) {
        return (
          void 0 === Ve && (Ve = 1 / 0),
          (0, ne.m)(we)
            ? ie(function (xe, H) {
                return (0, R.U)(function (Ne, Ee) {
                  return we(xe, Ne, H, Ee);
                })((0, _.Xf)(oe(xe, H)));
              }, Ve)
            : ('number' == typeof we && (Ve = we),
              (0, Se.e)(function (xe, H) {
                return (function (oe, we, Ve, xe, H, Ne, Ee, Me) {
                  var Ke = [],
                    st = 0,
                    Ue = 0,
                    Ze = !1,
                    $e = function () {
                      Ze && !Ke.length && !st && we.complete();
                    },
                    He = function (ot) {
                      return st < xe ? qe(ot) : Ke.push(ot);
                    },
                    qe = function (ot) {
                      st++;
                      var tt = !1;
                      (0, _.Xf)(Ve(ot, Ue++)).subscribe(
                        new fe.Q(
                          we,
                          function (yt) {
                            we.next(yt);
                          },
                          function () {
                            tt = !0;
                          },
                          void 0,
                          function () {
                            if (tt)
                              try {
                                st--;
                                for (; Ke.length && st < xe; )
                                  (Ht = void 0), (Ht = Ke.shift()), qe(Ht);
                                $e();
                              } catch (Ht) {
                                we.error(Ht);
                              }
                            var Ht;
                          },
                        ),
                      );
                    };
                  return (
                    oe.subscribe(
                      new fe.Q(we, He, function () {
                        (Ze = !0), $e();
                      }),
                    ),
                    function () {}
                  );
                })(xe, H, oe, Ve);
              }))
        );
      }
    },
    3301: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { j: () => _ });
      var R = k(5207);
      function _() {
        for (var Se = [], fe = 0; fe < arguments.length; fe++) Se[fe] = arguments[fe];
        var he = Se.length;
        if (0 === he) throw new Error('list of properties cannot be empty.');
        return (0, R.U)(function (ne) {
          for (var ie = ne, oe = 0; oe < he; oe++) {
            var we = null == ie ? void 0 : ie[Se[oe]];
            if (void 0 === we) return;
            ie = we;
          }
          return ie;
        });
      }
    },
    8047: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { B: () => ie });
      var R = k(9162),
        _ = k(5929),
        Se = k(4294),
        fe = k(6889),
        he = k(2049),
        ne = k(4297);
      function ie(we) {
        void 0 === we && (we = {});
        var Ve = we.connector,
          xe =
            void 0 === Ve
              ? function () {
                  return new fe.x();
                }
              : Ve,
          H = we.resetOnError,
          Ne = void 0 === H || H,
          Ee = we.resetOnComplete,
          Me = void 0 === Ee || Ee,
          Ke = we.resetOnRefCountZero,
          st = void 0 === Ke || Ke;
        return function (Ue) {
          var Ze = null,
            $e = null,
            He = null,
            qe = 0,
            ot = !1,
            tt = !1,
            yt = function () {
              null == $e || $e.unsubscribe(), ($e = null);
            },
            Ht = function () {
              yt(), (Ze = He = null), (ot = tt = !1);
            },
            se = function () {
              var X = Ze;
              Ht(), null == X || X.unsubscribe();
            };
          return (0, ne.e)(function (X, ae) {
            qe++, !tt && !ot && yt();
            var ye = (He = null != He ? He : xe());
            ae.add(function () {
              0 == --qe && !tt && !ot && ($e = oe(se, st));
            }),
              ye.subscribe(ae),
              Ze ||
                ((Ze = new he.Hp({
                  next: function (Re) {
                    return ye.next(Re);
                  },
                  error: function (Re) {
                    (tt = !0), yt(), ($e = oe(Ht, Ne, Re)), ye.error(Re);
                  },
                  complete: function () {
                    (ot = !0), yt(), ($e = oe(Ht, Me)), ye.complete();
                  },
                })),
                (0, _.Dp)(X).subscribe(Ze));
          })(Ue);
        };
      }
      function oe(we, Ve) {
        for (var xe = [], H = 2; H < arguments.length; H++) xe[H - 2] = arguments[H];
        return !0 === Ve
          ? (we(), null)
          : !1 === Ve
          ? null
          : Ve.apply(void 0, (0, R.ev)([], (0, R.CR)(xe)))
              .pipe((0, Se.q)(1))
              .subscribe(function () {
                return we();
              });
      }
    },
    9978: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { O: () => fe });
      var R = k(9044),
        _ = k(9528),
        Se = k(4297);
      function fe() {
        for (var he = [], ne = 0; ne < arguments.length; ne++) he[ne] = arguments[ne];
        var ie = (0, _.yG)(he);
        return (0, Se.e)(function (oe, we) {
          (ie ? (0, R.z)(he, oe, ie) : (0, R.z)(he, oe)).subscribe(we);
        });
      }
    },
    7540: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { w: () => fe });
      var R = k(5929),
        _ = k(4297),
        Se = k(5076);
      function fe(he, ne) {
        return (0, _.e)(function (ie, oe) {
          var we = null,
            Ve = 0,
            xe = !1,
            H = function () {
              return xe && !we && oe.complete();
            };
          ie.subscribe(
            new Se.Q(
              oe,
              function (Ne) {
                null == we || we.unsubscribe();
                var Ee = 0,
                  Me = Ve++;
                (0, R.Xf)(he(Ne, Me)).subscribe(
                  (we = new Se.Q(
                    oe,
                    function (Ke) {
                      return oe.next(ne ? ne(Ne, Ke, Me, Ee++) : Ke);
                    },
                    function () {
                      (we = null), H();
                    },
                  )),
                );
              },
              function () {
                (xe = !0), H();
              },
            ),
          );
        });
      }
    },
    4294: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { q: () => fe });
      var R = k(6149),
        _ = k(4297),
        Se = k(5076);
      function fe(he) {
        return he <= 0
          ? function () {
              return R.E;
            }
          : (0, _.e)(function (ne, ie) {
              var oe = 0;
              ne.subscribe(
                new Se.Q(ie, function (we) {
                  ++oe <= he && (ie.next(we), he <= oe && ie.complete());
                }),
              );
            });
      }
    },
    9922: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { b: () => he });
      var R = k(8853),
        _ = k(4297),
        Se = k(5076),
        fe = k(2738);
      function he(ne, ie, oe) {
        var we = (0, R.m)(ne) || ie || oe ? { next: ne, error: ie, complete: oe } : ne;
        return we
          ? (0, _.e)(function (Ve, xe) {
              var H;
              null === (H = we.subscribe) || void 0 === H || H.call(we);
              var Ne = !0;
              Ve.subscribe(
                new Se.Q(
                  xe,
                  function (Ee) {
                    var Me;
                    null === (Me = we.next) || void 0 === Me || Me.call(we, Ee), xe.next(Ee);
                  },
                  function () {
                    var Ee;
                    (Ne = !1),
                      null === (Ee = we.complete) || void 0 === Ee || Ee.call(we),
                      xe.complete();
                  },
                  function (Ee) {
                    var Me;
                    (Ne = !1),
                      null === (Me = we.error) || void 0 === Me || Me.call(we, Ee),
                      xe.error(Ee);
                  },
                  function () {
                    var Ee, Me;
                    Ne && (null === (Ee = we.unsubscribe) || void 0 === Ee || Ee.call(we)),
                      null === (Me = we.finalize) || void 0 === Me || Me.call(we);
                  },
                ),
              );
            })
          : fe.y;
      }
    },
    8405: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { T: () => fe });
      var R = k(1987),
        _ = k(4297),
        Se = k(5076);
      function fe(ne) {
        return (
          void 0 === ne && (ne = he),
          (0, _.e)(function (ie, oe) {
            var we = !1;
            ie.subscribe(
              new Se.Q(
                oe,
                function (Ve) {
                  (we = !0), oe.next(Ve);
                },
                function () {
                  return we ? oe.complete() : oe.error(ne());
                },
              ),
            );
          })
        );
      }
      function he() {
        return new R.K();
      }
    },
    2504: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { r: () => _ });
      var R = k(1776);
      function _(Se, fe) {
        return new R.y(function (he) {
          var ne = 0;
          return fe.schedule(function () {
            ne === Se.length ? he.complete() : (he.next(Se[ne++]), he.closed || this.schedule());
          });
        });
      }
    },
    9385: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { z: () => _ });
      var R = k(9162),
        _ = {
          setTimeout: function () {
            for (var Se = [], fe = 0; fe < arguments.length; fe++) Se[fe] = arguments[fe];
            var he = _.delegate;
            return ((null == he ? void 0 : he.setTimeout) || setTimeout).apply(
              void 0,
              (0, R.ev)([], (0, R.CR)(Se)),
            );
          },
          clearTimeout: function (Se) {
            var fe = _.delegate;
            return ((null == fe ? void 0 : fe.clearTimeout) || clearTimeout)(Se);
          },
          delegate: void 0,
        };
    },
    8794: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { L: () => R });
      var R = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    1987: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { K: () => _ });
      var _ = (0, k(3864).d)(function (Se) {
        return function () {
          Se(this), (this.name = 'EmptyError'), (this.message = 'no elements in sequence');
        };
      });
    },
    9528: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { _6: () => ne, jO: () => fe, yG: () => he });
      var R = k(8853);
      function Se(ie) {
        return ie[ie.length - 1];
      }
      function fe(ie) {
        return (0, R.m)(Se(ie)) ? ie.pop() : void 0;
      }
      function he(ie) {
        return (function (ie) {
          return ie && (0, R.m)(ie.schedule);
        })(Se(ie))
          ? ie.pop()
          : void 0;
      }
      function ne(ie, oe) {
        return 'number' == typeof Se(ie) ? ie.pop() : oe;
      }
    },
    5850: (_t, Oe, k) => {
      'use strict';
      function R(_, Se) {
        if (_) {
          var fe = _.indexOf(Se);
          0 <= fe && _.splice(fe, 1);
        }
      }
      k.d(Oe, { P: () => R });
    },
    3864: (_t, Oe, k) => {
      'use strict';
      function R(_) {
        var fe = _(function (he) {
          Error.call(he), (he.stack = new Error().stack);
        });
        return (fe.prototype = Object.create(Error.prototype)), (fe.prototype.constructor = fe), fe;
      }
      k.d(Oe, { d: () => R });
    },
    4112: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { x: () => Se, O: () => fe });
      var R = k(6806),
        _ = null;
      function Se(he) {
        if (R.v.useDeprecatedSynchronousErrorHandling) {
          var ne = !_;
          if ((ne && (_ = { errorThrown: !1, error: null }), he(), ne)) {
            var ie = _;
            if (((_ = null), ie.errorThrown)) throw ie.error;
          }
        } else he();
      }
      function fe(he) {
        R.v.useDeprecatedSynchronousErrorHandling && _ && ((_.errorThrown = !0), (_.error = he));
      }
    },
    2738: (_t, Oe, k) => {
      'use strict';
      function R(_) {
        return _;
      }
      k.d(Oe, { y: () => R });
    },
    8853: (_t, Oe, k) => {
      'use strict';
      function R(_) {
        return 'function' == typeof _;
      }
      k.d(Oe, { m: () => R });
    },
    4297: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { A: () => _, e: () => Se });
      var R = k(8853);
      function _(fe) {
        return (0, R.m)(null == fe ? void 0 : fe.lift);
      }
      function Se(fe) {
        return function (he) {
          if (_(he))
            return he.lift(function (ne) {
              try {
                return fe(ne, this);
              } catch (ie) {
                this.error(ie);
              }
            });
          throw new TypeError('Unable to lift unknown Observable type');
        };
      }
    },
    6186: (_t, Oe, k) => {
      'use strict';
      function R() {}
      k.d(Oe, { Z: () => R });
    },
    8550: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { h: () => Se });
      var R = k(6806),
        _ = k(9385);
      function Se(fe) {
        _.z.setTimeout(function () {
          var he = R.v.onUnhandledError;
          if (!he) throw fe;
          he(fe);
        });
      }
    },
    483: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { r: () => he, h: () => ne });
      var R = k(8583),
        _ = k(7716);
      function Se(ie, oe) {
        if (
          (1 & ie && (_.TgZ(0, 'a', 2), _.TgZ(1, 'button'), _._uU(2), _.qZA(), _.qZA()), 2 & ie)
        ) {
          const we = _.oxw();
          _.Q6J('href', we.href, _.LSH), _.xp6(2), _.Oqu(we.text);
        }
      }
      function fe(ie, oe) {
        if ((1 & ie && (_.TgZ(0, 'button'), _._uU(1), _.qZA()), 2 & ie)) {
          const we = _.oxw();
          _.xp6(1), _.Oqu(we.text);
        }
      }
      let he = (() => {
          class ie {
            constructor() {
              (this.type = 'primary'), (this.text = '');
            }
            get className() {
              return this.type;
            }
          }
          return (
            (ie.ɵfac = function (we) {
              return new (we || ie)();
            }),
            (ie.ɵcmp = _.Xpm({
              type: ie,
              selectors: [['md-button']],
              hostVars: 2,
              hostBindings: function (we, Ve) {
                2 & we && _.Tol(Ve.className);
              },
              inputs: { type: 'type', href: 'href', text: 'text' },
              decls: 2,
              vars: 2,
              consts: [
                [3, 'href', 4, 'ngIf'],
                [4, 'ngIf'],
                [3, 'href'],
              ],
              template: function (we, Ve) {
                1 & we && (_.YNc(0, Se, 3, 2, 'a', 0), _.YNc(1, fe, 2, 1, 'button', 1)),
                  2 & we && (_.Q6J('ngIf', Ve.href), _.xp6(1), _.Q6J('ngIf', !Ve.href));
              },
              directives: [R.O5],
              encapsulation: 2,
            })),
            ie
          );
        })(),
        ne = (() => {
          class ie {}
          return (
            (ie.ɵfac = function (we) {
              return new (we || ie)();
            }),
            (ie.ɵmod = _.oAB({ type: ie })),
            (ie.ɵinj = _.cJS({ imports: [[R.ez]] })),
            ie
          );
        })();
    },
    3817: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { A: () => Se, d: () => fe });
      var R = k(7716);
      const _ = ['*'];
      let Se = (() => {
          class he {
            constructor() {
              this.bgImage = '';
            }
            get image() {
              return `url(${this.bgImage})`;
            }
          }
          return (
            (he.ɵfac = function (ie) {
              return new (ie || he)();
            }),
            (he.ɵcmp = R.Xpm({
              type: he,
              selectors: [['md-card']],
              hostVars: 2,
              hostBindings: function (ie, oe) {
                2 & ie && R.Udp('background-image', oe.image);
              },
              inputs: { bgImage: 'bgImage' },
              ngContentSelectors: _,
              decls: 1,
              vars: 0,
              template: function (ie, oe) {
                1 & ie && (R.F$t(), R.Hsn(0));
              },
              styles: [
                '[_nghost-%COMP%]{background-color:var(--primary-dark);background-position:center;background-size:cover;border-radius:var(--radius-sm);box-shadow:0 0 11px #0005;display:block;background-blend-mode:overlay;padding:1.5rem}',
              ],
            })),
            he
          );
        })(),
        fe = (() => {
          class he {}
          return (
            (he.ɵfac = function (ie) {
              return new (ie || he)();
            }),
            (he.ɵmod = R.oAB({ type: he })),
            (he.ɵinj = R.cJS({})),
            he
          );
        })();
    },
    2340: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, { N: () => R });
      const R = {
        production: !0,
        assetsUrl:
          'https://raw.githubusercontent.com/abelfubu/angular-markdown-locomotive/main/src/assets',
        githubUrl: 'https://api.github.com/users/abelfubu/repos?sort=updated&per_page=21',
      };
    },
    2901: (_t, Oe, k) => {
      'use strict';
      var R = k(9075),
        _ = k(7716),
        Se = k(1841),
        fe = k(483),
        he = k(3817);
      const ne = ['*'];
      let ie = (() => {
          class d {
            constructor() {
              (this.maxWidth = 1100), (this.width = this.maxWidth + 'px');
            }
          }
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵcmp = _.Xpm({
              type: d,
              selectors: [['md-container']],
              hostVars: 2,
              hostBindings: function (a, l) {
                2 & a && _.Udp('max-width', l.width);
              },
              inputs: { maxWidth: 'maxWidth' },
              ngContentSelectors: ne,
              decls: 1,
              vars: 0,
              template: function (a, l) {
                1 & a && (_.F$t(), _.Hsn(0));
              },
              styles: [
                '[_nghost-%COMP%]{display:block;margin:auto;padding:2rem 4rem}@media (max-width: 64em){[_nghost-%COMP%]{padding:2rem}}@media (max-width: 40em){[_nghost-%COMP%]{padding:1rem}}',
              ],
            })),
            d
          );
        })(),
        oe = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵmod = _.oAB({ type: d })),
            (d.ɵinj = _.cJS({})),
            d
          );
        })();
      const Ve = (d, s, a) => (1 - a) * d + a * s;
      function Ee(d) {
        if (void 0 === d)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d;
      }
      function Me(d, s) {
        (d.prototype = Object.create(s.prototype)),
          (d.prototype.constructor = d),
          (d.__proto__ = s);
      }
      var Ue,
        St,
        nn,
        Er,
        Gr,
        Rr,
        We,
        Ln,
        qi,
        x,
        M,
        N,
        z,
        G,
        j,
        d,
        s,
        a,
        l,
        c,
        h,
        v,
        D,
        te,
        Ke = { autoSleep: 120, force3D: 'auto', nullTargetWarn: 1, units: { lineHeight: '' } },
        st = { duration: 0.5, overwrite: !1, delay: 0 },
        Ze = 1e8,
        $e = 1e-8,
        He = 2 * Math.PI,
        qe = He / 4,
        ot = 0,
        tt = Math.sqrt,
        yt = Math.cos,
        Ht = Math.sin,
        se = function (s) {
          return 'string' == typeof s;
        },
        X = function (s) {
          return 'function' == typeof s;
        },
        ae = function (s) {
          return 'number' == typeof s;
        },
        ye = function (s) {
          return void 0 === s;
        },
        Re = function (s) {
          return 'object' == typeof s;
        },
        re = function (s) {
          return !1 !== s;
        },
        dt = function () {
          return 'undefined' != typeof window;
        },
        me = function (s) {
          return X(s) || se(s);
        },
        Ge = ('function' == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
        Te = Array.isArray,
        Xe = /(?:-?\.?\d|\.)+/gi,
        nt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Ct = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        jt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        In = /[+-]=-?[.\d]+/,
        Bt = /[^,'"\[\]\s]+/gi,
        mr = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        Mn = {},
        Dr = {},
        Yr = function (s) {
          return (Dr = Sr(s, Mn)) && Kn;
        },
        Kr = function (s, a) {
          return console.warn(
            'Invalid property',
            s,
            'set to',
            a,
            'Missing plugin? gsap.registerPlugin()',
          );
        },
        Qr = function (s, a) {
          return !a && console.warn(s);
        },
        ft = function (s, a) {
          return (s && (Mn[s] = a) && Dr && (Dr[s] = a)) || Mn;
        },
        at = function () {
          return 0;
        },
        De = {},
        Y = [],
        Q = {},
        be = {},
        rt = {},
        qt = 30,
        pt = [],
        Pe = '',
        it = function (s) {
          var l,
            c,
            a = s[0];
          if ((Re(a) || X(a) || (s = [s]), !(l = (a._gsap || {}).harness))) {
            for (c = pt.length; c-- && !pt[c].targetTest(a); );
            l = pt[c];
          }
          for (c = s.length; c--; )
            (s[c] && (s[c]._gsap || (s[c]._gsap = new ti(s[c], l)))) || s.splice(c, 1);
          return s;
        },
        wn = function (s) {
          return s._gsap || it(le(s))[0]._gsap;
        },
        yr = function (s, a, l) {
          return (l = s[a]) && X(l) ? s[a]() : (ye(l) && s.getAttribute && s.getAttribute(a)) || l;
        },
        Et = function (s, a) {
          return (s = s.split(',')).forEach(a) || s;
        },
        Fe = function (s) {
          return Math.round(1e5 * s) / 1e5 || 0;
        },
        Gt = function (s, a) {
          for (var l = a.length, c = 0; s.indexOf(a[c]) < 0 && ++c < l; );
          return c < l;
        },
        sr = function () {
          var l,
            c,
            s = Y.length,
            a = Y.slice(0);
          for (Q = {}, Y.length = 0, l = 0; l < s; l++)
            (c = a[l]) && c._lazy && (c.render(c._lazy[0], c._lazy[1], !0)._lazy = 0);
        },
        $t = function (s, a, l, c) {
          Y.length && sr(), s.render(a, l, c), Y.length && sr();
        },
        bt = function (s) {
          var a = parseFloat(s);
          return (a || 0 === a) && (s + '').match(Bt).length < 2 ? a : se(s) ? s.trim() : s;
        },
        Ot = function (s) {
          return s;
        },
        bn = function (s, a) {
          for (var l in a) l in s || (s[l] = a[l]);
          return s;
        },
        or = function (s, a) {
          for (var l in a) l in s || 'duration' === l || 'ease' === l || (s[l] = a[l]);
        },
        Sr = function (s, a) {
          for (var l in a) s[l] = a[l];
          return s;
        },
        Zr = function d(s, a) {
          for (var l in a)
            '__proto__' !== l &&
              'constructor' !== l &&
              'prototype' !== l &&
              (s[l] = Re(a[l]) ? d(s[l] || (s[l] = {}), a[l]) : a[l]);
          return s;
        },
        Un = function (s, a) {
          var c,
            l = {};
          for (c in s) c in a || (l[c] = s[c]);
          return l;
        },
        Fn = function (s) {
          var a = s.parent || St,
            l = s.keyframes ? or : bn;
          if (re(s.inherit)) for (; a; ) l(s, a.vars.defaults), (a = a.parent || a._dp);
          return s;
        },
        ai = function (s, a, l, c) {
          void 0 === l && (l = '_first'), void 0 === c && (c = '_last');
          var h = a._prev,
            v = a._next;
          h ? (h._next = v) : s[l] === a && (s[l] = v),
            v ? (v._prev = h) : s[c] === a && (s[c] = h),
            (a._next = a._prev = a.parent = null);
        },
        kn = function (s, a) {
          s.parent && (!a || s.parent.autoRemoveChildren) && s.parent.remove(s), (s._act = 0);
        },
        _r = function (s, a) {
          if (s && (!a || a._end > s._dur || a._start < 0))
            for (var l = s; l; ) (l._dirty = 1), (l = l.parent);
          return s;
        },
        Di = function (s) {
          for (var a = s.parent; a && a.parent; ) (a._dirty = 1), a.totalDuration(), (a = a.parent);
          return s;
        },
        Si = function d(s) {
          return !s || (s._ts && d(s.parent));
        },
        Yi = function (s) {
          return s._repeat ? Xn(s._tTime, (s = s.duration() + s._rDelay)) * s : 0;
        },
        Xn = function (s, a) {
          var l = Math.floor((s /= a));
          return s && l === s ? l - 1 : l;
        },
        ar = function (s, a) {
          return (s - a._start) * a._ts + (a._ts >= 0 ? 0 : a._dirty ? a.totalDuration() : a._tDur);
        },
        li = function (s) {
          return (s._end = Fe(s._start + (s._tDur / Math.abs(s._ts || s._rts || $e) || 0)));
        },
        un = function (s, a) {
          var l = s._dp;
          return (
            l &&
              l.smoothChildTiming &&
              s._ts &&
              ((s._start = Fe(
                l._time -
                  (s._ts > 0 ? a / s._ts : ((s._dirty ? s.totalDuration() : s._tDur) - a) / -s._ts),
              )),
              li(s),
              l._dirty || _r(l, s)),
            s
          );
        },
        gn = function (s, a) {
          var l;
          if (
            ((a._time || (a._initted && !a._dur)) &&
              ((l = ar(s.rawTime(), a)),
              (!a._dur || tr(0, a.totalDuration(), l) - a._tTime > $e) && a.render(l, !0)),
            _r(s, a)._dp && s._initted && s._time >= s._dur && s._ts)
          ) {
            if (s._dur < s.duration())
              for (l = s; l._dp; ) l.rawTime() >= 0 && l.totalTime(l._tTime), (l = l._dp);
            s._zTime = -$e;
          }
        },
        sn = function (s, a, l, c) {
          return (
            a.parent && kn(a),
            (a._start = Fe((ae(l) ? l : l || s !== St ? mn(s, l, a) : s._time) + a._delay)),
            (a._end = Fe(a._start + (a.totalDuration() / Math.abs(a.timeScale()) || 0))),
            (function (s, a, l, c, h) {
              void 0 === l && (l = '_first'), void 0 === c && (c = '_last');
              var D,
                v = s[c];
              if (h) for (D = a[h]; v && v[h] > D; ) v = v._prev;
              v ? ((a._next = v._next), (v._next = a)) : ((a._next = s[l]), (s[l] = a)),
                a._next ? (a._next._prev = a) : (s[c] = a),
                (a._prev = v),
                (a.parent = a._dp = s);
            })(s, a, '_first', '_last', s._sort ? '_start' : 0),
            Je(a) || (s._recent = a),
            c || gn(s, a),
            s
          );
        },
        An = function (s, a) {
          return (Mn.ScrollTrigger || Kr('scrollTrigger', a)) && Mn.ScrollTrigger.create(a, s);
        },
        ui = function (s, a, l, c) {
          return (
            dr(s, a),
            s._initted
              ? !l &&
                s._pt &&
                ((s._dur && !1 !== s.vars.lazy) || (!s._dur && s.vars.lazy)) &&
                We !== Cr.frame
                ? (Y.push(s), (s._lazy = [a, c]), 1)
                : void 0
              : 1
          );
        },
        On = function d(s) {
          var a = s.parent;
          return a && a._ts && a._initted && !a._lock && (a.rawTime() < 0 || d(a));
        },
        Je = function (s) {
          var a = s.data;
          return 'isFromStart' === a || 'isStart' === a;
        },
        cn = function (s, a, l, c) {
          var h = s._repeat,
            v = Fe(a) || 0,
            D = s._tTime / s._tDur;
          return (
            D && !c && (s._time *= v / s._dur),
            (s._dur = v),
            (s._tDur = h ? (h < 0 ? 1e10 : Fe(v * (h + 1) + s._rDelay * h)) : v),
            D && !c ? un(s, (s._tTime = s._tDur * D)) : s.parent && li(s),
            l || _r(s.parent, s),
            s
          );
        },
        Pr = function (s) {
          return s instanceof zn ? _r(s) : cn(s, s._dur);
        },
        _n = { _start: 0, endTime: at, totalDuration: at },
        mn = function d(s, a, l) {
          var D,
            x,
            M,
            c = s.labels,
            h = s._recent || _n,
            v = s.duration() >= Ze ? h.endTime(!1) : s._dur;
          return se(a) && (isNaN(a) || a in c)
            ? ((x = a.charAt(0)),
              (M = '%' === a.substr(-1)),
              (D = a.indexOf('=')),
              '<' === x || '>' === x
                ? (D >= 0 && (a = a.replace(/=/, '')),
                  ('<' === x ? h._start : h.endTime(h._repeat >= 0)) +
                    (parseFloat(a.substr(1)) || 0) *
                      (M ? (D < 0 ? h : l).totalDuration() / 100 : 1))
                : D < 0
                ? (a in c || (c[a] = v), c[a])
                : ((x = parseFloat(a.charAt(D - 1) + a.substr(D + 1))),
                  M && l && (x = (x / 100) * (Te(l) ? l[0] : l).totalDuration()),
                  D > 1 ? d(s, a.substr(0, D - 1), l) + x : v + x))
            : null == a
            ? v
            : +a;
        },
        en = function (s, a, l) {
          var D,
            x,
            c = ae(a[1]),
            h = (c ? 2 : 1) + (s < 2 ? 0 : 1),
            v = a[h];
          if ((c && (v.duration = a[1]), (v.parent = l), s)) {
            for (D = v, x = l; x && !('immediateRender' in D); )
              (D = x.vars.defaults || {}), (x = re(x.vars.inherit) && x.parent);
            (v.immediateRender = re(D.immediateRender)),
              s < 2 ? (v.runBackwards = 1) : (v.startAt = a[h - 1]);
          }
          return new Sn(a[0], v, a[h + 1]);
        },
        er = function (s, a) {
          return s || 0 === s ? a(s) : a;
        },
        tr = function (s, a, l) {
          return l < s ? s : l > a ? a : l;
        },
        ut = function (s) {
          if ('string' != typeof s) return '';
          var a = mr.exec(s);
          return a ? s.substr(a.index + a[0].length) : '';
        },
        W = [].slice,
        L = function (s, a) {
          return (
            s &&
            Re(s) &&
            'length' in s &&
            ((!a && !s.length) || (s.length - 1 in s && Re(s[0]))) &&
            !s.nodeType &&
            s !== nn
          );
        },
        le = function (s, a, l) {
          return !se(s) || l || (!Er && Ti())
            ? Te(s)
              ? (function (s, a, l) {
                  return (
                    void 0 === l && (l = []),
                    s.forEach(function (c) {
                      var h;
                      return (se(c) && !a) || L(c, 1) ? (h = l).push.apply(h, le(c)) : l.push(c);
                    }) || l
                  );
                })(s, l)
              : L(s)
              ? W.call(s, 0)
              : s
              ? [s]
              : []
            : W.call((a || Gr).querySelectorAll(s), 0);
        },
        vt = function (s) {
          return s.sort(function () {
            return 0.5 - Math.random();
          });
        },
        Ut = function (s) {
          if (X(s)) return s;
          var a = Re(s) ? s : { each: s },
            l = nr(a.ease),
            c = a.from || 0,
            h = parseFloat(a.base) || 0,
            v = {},
            D = c > 0 && c < 1,
            x = isNaN(c) || D,
            M = a.axis,
            N = c,
            z = c;
          return (
            se(c)
              ? (N = z = { center: 0.5, edges: 0.5, end: 1 }[c] || 0)
              : !D && x && ((N = c[0]), (z = c[1])),
            function (G, j, te) {
              var Ie,
                Ye,
                ce,
                de,
                ve,
                Ae,
                Be,
                Qe,
                je,
                q = (te || a).length,
                _e = v[q];
              if (!_e) {
                if (!(je = 'auto' === a.grid ? 0 : (a.grid || [1, Ze])[1])) {
                  for (Be = -Ze; Be < (Be = te[je++].getBoundingClientRect().left) && je < q; );
                  je--;
                }
                for (
                  _e = v[q] = [],
                    Ie = x ? Math.min(je, q) * N - 0.5 : c % je,
                    Ye = x ? (q * z) / je - 0.5 : (c / je) | 0,
                    Be = 0,
                    Qe = Ze,
                    Ae = 0;
                  Ae < q;
                  Ae++
                )
                  (ce = (Ae % je) - Ie),
                    (de = Ye - ((Ae / je) | 0)),
                    (_e[Ae] = ve = M ? Math.abs('y' === M ? de : ce) : tt(ce * ce + de * de)),
                    ve > Be && (Be = ve),
                    ve < Qe && (Qe = ve);
                'random' === c && vt(_e),
                  (_e.max = Be - Qe),
                  (_e.min = Qe),
                  (_e.v = q =
                    (parseFloat(a.amount) ||
                      parseFloat(a.each) *
                        (je > q ? q - 1 : M ? ('y' === M ? q / je : je) : Math.max(je, q / je)) ||
                      0) * ('edges' === c ? -1 : 1)),
                  (_e.b = q < 0 ? h - q : h),
                  (_e.u = ut(a.amount || a.each) || 0),
                  (l = l && q < 0 ? wr(l) : l);
              }
              return (q = (_e[G] - _e.min) / _e.max || 0), Fe(_e.b + (l ? l(q) : q) * _e.v) + _e.u;
            }
          );
        },
        Tt = function (s) {
          var a = s < 1 ? Math.pow(10, (s + '').length - 2) : 1;
          return function (l) {
            var c = Math.round(parseFloat(l) / s) * s * a;
            return (c - (c % 1)) / a + (ae(l) ? 0 : ut(l));
          };
        },
        Nr = function (s, a) {
          var c,
            h,
            l = Te(s);
          return (
            !l &&
              Re(s) &&
              ((c = l = s.radius || Ze),
              s.values ? ((s = le(s.values)), (h = !ae(s[0])) && (c *= c)) : (s = Tt(s.increment))),
            er(
              a,
              l
                ? X(s)
                  ? function (v) {
                      return (h = s(v)), Math.abs(h - v) <= c ? h : v;
                    }
                  : function (v) {
                      for (
                        var G,
                          j,
                          D = parseFloat(h ? v.x : v),
                          x = parseFloat(h ? v.y : 0),
                          M = Ze,
                          N = 0,
                          z = s.length;
                        z--;

                      )
                        (G = h ? (G = s[z].x - D) * G + (j = s[z].y - x) * j : Math.abs(s[z] - D)) <
                          M && ((M = G), (N = z));
                      return (N = !c || M <= c ? s[N] : v), h || N === v || ae(v) ? N : N + ut(v);
                    }
                : Tt(s),
            )
          );
        },
        eo = function (s, a, l, c) {
          return er(Te(s) ? !a : !0 === l ? !!(l = 0) : !c, function () {
            return Te(s)
              ? s[~~(Math.random() * s.length)]
              : (l = l || 1e-5) &&
                  (c = l < 1 ? Math.pow(10, (l + '').length - 2) : 1) &&
                  Math.floor(
                    Math.round((s - l / 2 + Math.random() * (a - s + 0.99 * l)) / l) * l * c,
                  ) / c;
          });
        },
        Fr = function (s, a, l) {
          return er(l, function (c) {
            return s[~~a(c)];
          });
        },
        Ki = function (s) {
          for (var c, h, v, D, a = 0, l = ''; ~(c = s.indexOf('random(', a)); )
            (v = s.indexOf(')', c)),
              (D = '[' === s.charAt(c + 7)),
              (h = s.substr(c + 7, v - c - 7).match(D ? Bt : Xe)),
              (l += s.substr(a, c - a) + eo(D ? h : +h[0], D ? 0 : +h[1], +h[2] || 1e-5)),
              (a = v + 1);
          return l + s.substr(a, s.length - a);
        },
        Tr = function (s, a, l, c, h) {
          var v = a - s,
            D = c - l;
          return er(h, function (x) {
            return l + (((x - s) / v) * D || 0);
          });
        },
        As = function (s, a, l) {
          var v,
            D,
            x,
            c = s.labels,
            h = Ze;
          for (v in c)
            (D = c[v] - a) < 0 == !!l && D && h > (D = Math.abs(D)) && ((x = v), (h = D));
          return x;
        },
        Dn = function (s, a, l) {
          var v,
            D,
            c = s.vars,
            h = c[a];
          if (h)
            return (
              (v = c[a + 'Params']),
              (D = c.callbackScope || s),
              l && Y.length && sr(),
              v ? h.apply(D, v) : h.call(D)
            );
        },
        ur = function (s) {
          return (
            kn(s),
            s.scrollTrigger && s.scrollTrigger.kill(!1),
            s.progress() < 1 && Dn(s, 'onInterrupt'),
            s
          );
        },
        cr = function (s) {
          var a = (s = (!s.name && s.default) || s).name,
            l = X(s),
            c =
              a && !l && s.init
                ? function () {
                    this._props = [];
                  }
                : s,
            h = { init: at, render: lt, add: Rs, kill: on, modifier: Pt, rawVars: 0 },
            v = { targetTest: 0, get: 0, getSetter: P, aliases: {}, register: 0 };
          if ((Ti(), s !== c)) {
            if (be[a]) return;
            bn(c, bn(Un(s, h), v)),
              Sr(c.prototype, Sr(h, Un(s, v))),
              (be[(c.prop = a)] = c),
              s.targetTest && (pt.push(c), (De[a] = 1)),
              (a = ('css' === a ? 'CSS' : a.charAt(0).toUpperCase() + a.substr(1)) + 'Plugin');
          }
          ft(a, c), s.register && s.register(Kn, c, It);
        },
        Xt = 255,
        Qi = {
          aqua: [0, Xt, Xt],
          lime: [0, Xt, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, Xt],
          navy: [0, 0, 128],
          white: [Xt, Xt, Xt],
          olive: [128, 128, 0],
          yellow: [Xt, Xt, 0],
          orange: [Xt, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [Xt, 0, 0],
          pink: [Xt, 192, 203],
          cyan: [0, Xt, Xt],
          transparent: [Xt, Xt, Xt, 0],
        },
        Zi = function (s, a, l) {
          return (
            ((6 * (s = s < 0 ? s + 1 : s > 1 ? s - 1 : s) < 1
              ? a + (l - a) * s * 6
              : s < 0.5
              ? l
              : 3 * s < 2
              ? a + (l - a) * (2 / 3 - s) * 6
              : a) *
              Xt +
              0.5) |
            0
          );
        },
        Xo = function (s, a, l) {
          var h,
            v,
            D,
            x,
            M,
            N,
            z,
            G,
            j,
            te,
            c = s ? (ae(s) ? [s >> 16, (s >> 8) & Xt, s & Xt] : 0) : Qi.black;
          if (!c) {
            if ((',' === s.substr(-1) && (s = s.substr(0, s.length - 1)), Qi[s])) c = Qi[s];
            else if ('#' === s.charAt(0)) {
              if (
                (s.length < 6 &&
                  ((h = s.charAt(1)),
                  (v = s.charAt(2)),
                  (D = s.charAt(3)),
                  (s =
                    '#' +
                    h +
                    h +
                    v +
                    v +
                    D +
                    D +
                    (5 === s.length ? s.charAt(4) + s.charAt(4) : ''))),
                9 === s.length)
              )
                return [
                  (c = parseInt(s.substr(1, 6), 16)) >> 16,
                  (c >> 8) & Xt,
                  c & Xt,
                  parseInt(s.substr(7), 16) / 255,
                ];
              c = [(s = parseInt(s.substr(1), 16)) >> 16, (s >> 8) & Xt, s & Xt];
            } else if ('hsl' === s.substr(0, 3))
              if (((c = te = s.match(Xe)), a)) {
                if (~s.indexOf('=')) return (c = s.match(nt)), l && c.length < 4 && (c[3] = 1), c;
              } else
                (x = (+c[0] % 360) / 360),
                  (M = +c[1] / 100),
                  (h = 2 * (N = +c[2] / 100) - (v = N <= 0.5 ? N * (M + 1) : N + M - N * M)),
                  c.length > 3 && (c[3] *= 1),
                  (c[0] = Zi(x + 1 / 3, h, v)),
                  (c[1] = Zi(x, h, v)),
                  (c[2] = Zi(x - 1 / 3, h, v));
            else c = s.match(Xe) || Qi.transparent;
            c = c.map(Number);
          }
          return (
            a &&
              !te &&
              ((h = c[0] / Xt),
              (v = c[1] / Xt),
              (D = c[2] / Xt),
              (N = ((z = Math.max(h, v, D)) + (G = Math.min(h, v, D))) / 2),
              z === G
                ? (x = M = 0)
                : ((j = z - G),
                  (M = N > 0.5 ? j / (2 - z - G) : j / (z + G)),
                  (x =
                    z === h
                      ? (v - D) / j + (v < D ? 6 : 0)
                      : z === v
                      ? (D - h) / j + 2
                      : (h - v) / j + 4),
                  (x *= 60)),
              (c[0] = ~~(x + 0.5)),
              (c[1] = ~~(100 * M + 0.5)),
              (c[2] = ~~(100 * N + 0.5))),
            l && c.length < 4 && (c[3] = 1),
            c
          );
        },
        Do = function (s) {
          var a = [],
            l = [],
            c = -1;
          return (
            s.split(Jr).forEach(function (h) {
              var v = h.match(Ct) || [];
              a.push.apply(a, v), l.push((c += v.length + 1));
            }),
            (a.c = l),
            a
          );
        },
        ea = function (s, a, l) {
          var x,
            M,
            N,
            z,
            c = '',
            h = (s + c).match(Jr),
            v = a ? 'hsla(' : 'rgba(',
            D = 0;
          if (!h) return s;
          if (
            ((h = h.map(function (G) {
              return (
                (G = Xo(G, a, 1)) &&
                v + (a ? G[0] + ',' + G[1] + '%,' + G[2] + '%,' + G[3] : G.join(',')) + ')'
              );
            })),
            l && ((N = Do(s)), (x = l.c).join(c) !== N.c.join(c)))
          )
            for (z = (M = s.replace(Jr, '1').split(Ct)).length - 1; D < z; D++)
              c +=
                M[D] +
                (~x.indexOf(D)
                  ? h.shift() || v + '0,0,0,0)'
                  : (N.length ? N : h.length ? h : l).shift());
          if (!M) for (z = (M = s.split(Jr)).length - 1; D < z; D++) c += M[D] + h[D];
          return c + M[z];
        },
        Jr = (function () {
          var s,
            d = '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b';
          for (s in Qi) d += '|' + s + '\\b';
          return new RegExp(d + ')', 'gi');
        })(),
        to = /hsl[a]?\(/,
        ta = function (s) {
          var l,
            a = s.join(' ');
          if (((Jr.lastIndex = 0), Jr.test(a)))
            return (l = to.test(a)), (s[1] = ea(s[1], l)), (s[0] = ea(s[0], l, Do(s[1]))), !0;
        },
        Cr =
          ((d = Date.now),
          (s = 500),
          (a = 33),
          (l = d()),
          (c = l),
          (v = h = 1e3 / 240),
          (te = function q(_e) {
            var ce,
              de,
              ve,
              Ae,
              Ie = d() - c,
              Ye = !0 === _e;
            if (
              (Ie > s && (l += Ie - a),
              ((ce = (ve = (c += Ie) - l) - v) > 0 || Ye) &&
                ((Ae = ++z.frame),
                (G = ve - 1e3 * z.time),
                (z.time = ve /= 1e3),
                (v += ce + (ce >= h ? 4 : h - ce)),
                (de = 1)),
              Ye || (x = M(q)),
              de)
            )
              for (j = 0; j < D.length; j++) D[j](ve, G, Ae, _e);
          }),
          (z = {
            time: 0,
            frame: 0,
            tick: function () {
              te(!0);
            },
            deltaRatio: function (_e) {
              return G / (1e3 / (_e || 60));
            },
            wake: function () {
              Rr &&
                (!Er &&
                  dt() &&
                  ((nn = Er = window),
                  (Gr = nn.document || {}),
                  (Mn.gsap = Kn),
                  (nn.gsapVersions || (nn.gsapVersions = [])).push(Kn.version),
                  Yr(Dr || nn.GreenSockGlobals || (!nn.gsap && nn) || {}),
                  (N = nn.requestAnimationFrame)),
                x && z.sleep(),
                (M =
                  N ||
                  function (_e) {
                    return setTimeout(_e, (v - 1e3 * z.time + 1) | 0);
                  }),
                (qi = 1),
                te(2));
            },
            sleep: function () {
              (N ? nn.cancelAnimationFrame : clearTimeout)(x), (qi = 0), (M = at);
            },
            lagSmoothing: function (_e, Ie) {
              (s = _e || 1 / $e), (a = Math.min(Ie, s, 0));
            },
            fps: function (_e) {
              v = 1e3 * z.time + (h = 1e3 / (_e || 240));
            },
            add: function (_e) {
              D.indexOf(_e) < 0 && D.push(_e), Ti();
            },
            remove: function (_e) {
              var Ie;
              ~(Ie = D.indexOf(_e)) && D.splice(Ie, 1) && j >= Ie && j--;
            },
            _listeners: (D = []),
          })),
        Ti = function () {
          return !qi && Cr.wake();
        },
        zt = {},
        Ha = /^[\d.\-M][\d.\-,\s]/,
        $a = /["']/g,
        na = function (s) {
          for (
            var D,
              x,
              M,
              a = {},
              l = s.substr(1, s.length - 3).split(':'),
              c = l[0],
              h = 1,
              v = l.length;
            h < v;
            h++
          )
            (x = l[h]),
              (D = h !== v - 1 ? x.lastIndexOf(',') : x.length),
              (M = x.substr(0, D)),
              (a[c] = isNaN(M) ? M.replace($a, '').trim() : +M),
              (c = x.substr(D + 1).trim());
          return a;
        },
        wr = function (s) {
          return function (a) {
            return 1 - s(1 - a);
          };
        },
        ia = function d(s, a) {
          for (var c, l = s._first; l; )
            l instanceof zn
              ? d(l, a)
              : l.vars.yoyoEase &&
                (!l._yoyo || !l._repeat) &&
                l._yoyo !== a &&
                (l.timeline
                  ? d(l.timeline, a)
                  : ((c = l._ease), (l._ease = l._yEase), (l._yEase = c), (l._yoyo = a))),
              (l = l._next);
        },
        nr = function (s, a) {
          return (
            (s &&
              (X(s)
                ? s
                : zt[s] ||
                  (function (s) {
                    var a = (s + '').split('('),
                      l = zt[a[0]];
                    return l && a.length > 1 && l.config
                      ? l.config.apply(
                          null,
                          ~s.indexOf('{')
                            ? [na(a[1])]
                            : (function (s) {
                                var a = s.indexOf('(') + 1,
                                  l = s.indexOf(')'),
                                  c = s.indexOf('(', a);
                                return s.substring(a, ~c && c < l ? s.indexOf(')', l + 1) : l);
                              })(s)
                                .split(',')
                                .map(bt),
                        )
                      : zt._CE && Ha.test(s)
                      ? zt._CE('', s)
                      : l;
                  })(s))) ||
            a
          );
        },
        Xr = function (s, a, l, c) {
          void 0 === l &&
            (l = function (x) {
              return 1 - a(1 - x);
            }),
            void 0 === c &&
              (c = function (x) {
                return x < 0.5 ? a(2 * x) / 2 : 1 - a(2 * (1 - x)) / 2;
              });
          var v,
            h = { easeIn: a, easeOut: l, easeInOut: c };
          return (
            Et(s, function (D) {
              for (var x in ((zt[D] = Mn[D] = h), (zt[(v = D.toLowerCase())] = l), h))
                zt[v + ('easeIn' === x ? '.in' : 'easeOut' === x ? '.out' : '.inOut')] = zt[
                  D + '.' + x
                ] = h[x];
            }),
            h
          );
        },
        ei = function (s) {
          return function (a) {
            return a < 0.5 ? (1 - s(1 - 2 * a)) / 2 : 0.5 + s(2 * (a - 0.5)) / 2;
          };
        },
        no = function d(s, a, l) {
          var c = a >= 1 ? a : 1,
            h = (l || (s ? 0.3 : 0.45)) / (a < 1 ? a : 1),
            v = (h / He) * (Math.asin(1 / c) || 0),
            D = function (N) {
              return 1 === N ? 1 : c * Math.pow(2, -10 * N) * Ht((N - v) * h) + 1;
            },
            x =
              'out' === s
                ? D
                : 'in' === s
                ? function (M) {
                    return 1 - D(1 - M);
                  }
                : ei(D);
          return (
            (h = He / h),
            (x.config = function (M, N) {
              return d(s, M, N);
            }),
            x
          );
        },
        Ji = function d(s, a) {
          void 0 === a && (a = 1.70158);
          var l = function (v) {
              return v ? --v * v * ((a + 1) * v + a) + 1 : 0;
            },
            c =
              'out' === s
                ? l
                : 'in' === s
                ? function (h) {
                    return 1 - l(1 - h);
                  }
                : ei(l);
          return (
            (c.config = function (h) {
              return d(s, h);
            }),
            c
          );
        };
      Et('Linear,Quad,Cubic,Quart,Quint,Strong', function (d, s) {
        var a = s < 5 ? s + 1 : s;
        Xr(
          d + ',Power' + (a - 1),
          s
            ? function (l) {
                return Math.pow(l, a);
              }
            : function (l) {
                return l;
              },
          function (l) {
            return 1 - Math.pow(1 - l, a);
          },
          function (l) {
            return l < 0.5 ? Math.pow(2 * l, a) / 2 : 1 - Math.pow(2 * (1 - l), a) / 2;
          },
        );
      }),
        (zt.Linear.easeNone = zt.none = zt.Linear.easeIn),
        Xr('Elastic', no('in'), no('out'), no()),
        (function (d, s) {
          var h = function (D) {
            return D < 0.36363636363636365
              ? d * D * D
              : D < 0.7272727272727273
              ? d * Math.pow(D - 1.5 / s, 2) + 0.75
              : D < 0.9090909090909092
              ? d * (D -= 2.25 / s) * D + 0.9375
              : d * Math.pow(D - 2.625 / s, 2) + 0.984375;
          };
          Xr(
            'Bounce',
            function (v) {
              return 1 - h(1 - v);
            },
            h,
          );
        })(7.5625, 2.75),
        Xr('Expo', function (d) {
          return d ? Math.pow(2, 10 * (d - 1)) : 0;
        }),
        Xr('Circ', function (d) {
          return -(tt(1 - d * d) - 1);
        }),
        Xr('Sine', function (d) {
          return 1 === d ? 1 : 1 - yt(d * qe);
        }),
        Xr('Back', Ji('in'), Ji('out'), Ji()),
        (zt.SteppedEase =
          zt.steps =
          Mn.SteppedEase =
            {
              config: function (s, a) {
                void 0 === s && (s = 1);
                var l = 1 / s,
                  c = s + (a ? 0 : 1),
                  h = a ? 1 : 0;
                return function (D) {
                  return (((c * tr(0, 0.99999999, D)) | 0) + h) * l;
                };
              },
            }),
        (st.ease = zt['quad.out']),
        Et('onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt', function (d) {
          return (Pe += d + ',' + d + 'Params,');
        });
      var ti = function (s, a) {
          (this.id = ot++),
            (s._gsap = this),
            (this.target = s),
            (this.harness = a),
            (this.get = a ? a.get : yr),
            (this.set = a ? a.getSetter : P);
        },
        Lr = (function () {
          function d(a) {
            (this.vars = a),
              (this._delay = +a.delay || 0),
              (this._repeat = a.repeat === 1 / 0 ? -2 : a.repeat || 0) &&
                ((this._rDelay = a.repeatDelay || 0), (this._yoyo = !!a.yoyo || !!a.yoyoEase)),
              (this._ts = 1),
              cn(this, +a.duration, 1, 1),
              (this.data = a.data),
              qi || Cr.wake();
          }
          var s = d.prototype;
          return (
            (s.delay = function (l) {
              return l || 0 === l
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + l - this._delay),
                  (this._delay = l),
                  this)
                : this._delay;
            }),
            (s.duration = function (l) {
              return arguments.length
                ? this.totalDuration(this._repeat > 0 ? l + (l + this._rDelay) * this._repeat : l)
                : this.totalDuration() && this._dur;
            }),
            (s.totalDuration = function (l) {
              return arguments.length
                ? ((this._dirty = 0),
                  cn(
                    this,
                    this._repeat < 0 ? l : (l - this._repeat * this._rDelay) / (this._repeat + 1),
                  ))
                : this._tDur;
            }),
            (s.totalTime = function (l, c) {
              if ((Ti(), !arguments.length)) return this._tTime;
              var h = this._dp;
              if (h && h.smoothChildTiming && this._ts) {
                for (un(this, l), !h._dp || h.parent || gn(h, this); h.parent; )
                  h.parent._time !==
                    h._start +
                      (h._ts >= 0 ? h._tTime / h._ts : (h.totalDuration() - h._tTime) / -h._ts) &&
                    h.totalTime(h._tTime, !0),
                    (h = h.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && l < this._tDur) ||
                    (this._ts < 0 && l > 0) ||
                    (!this._tDur && !l)) &&
                  sn(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== l ||
                  (!this._dur && !c) ||
                  (this._initted && Math.abs(this._zTime) === $e) ||
                  (!l && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = l), $t(this, l, c)),
                this
              );
            }),
            (s.time = function (l, c) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), l + Yi(this)) % this._dur || (l ? this._dur : 0),
                    c,
                  )
                : this._time;
            }),
            (s.totalProgress = function (l, c) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * l, c)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (s.progress = function (l, c) {
              return arguments.length
                ? this.totalTime(
                    this.duration() * (!this._yoyo || 1 & this.iteration() ? l : 1 - l) + Yi(this),
                    c,
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (s.iteration = function (l, c) {
              var h = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (l - 1) * h, c)
                : this._repeat
                ? Xn(this._tTime, h) + 1
                : 1;
            }),
            (s.timeScale = function (l) {
              if (!arguments.length) return this._rts === -$e ? 0 : this._rts;
              if (this._rts === l) return this;
              var c = this.parent && this._ts ? ar(this.parent._time, this) : this._tTime;
              return (
                (this._rts = +l || 0),
                (this._ts = this._ps || l === -$e ? 0 : this._rts),
                Di(this.totalTime(tr(-this._delay, this._tDur, c), !0))
              );
            }),
            (s.paused = function (l) {
              return arguments.length
                ? (this._ps !== l &&
                    ((this._ps = l),
                    l
                      ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Ti(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= $e) &&
                            Math.abs(this._zTime) !== $e,
                        ))),
                  this)
                : this._ps;
            }),
            (s.startTime = function (l) {
              if (arguments.length) {
                this._start = l;
                var c = this.parent || this._dp;
                return c && (c._sort || !this.parent) && sn(c, this, l - this._delay), this;
              }
              return this._start;
            }),
            (s.endTime = function (l) {
              return (
                this._start + (re(l) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
              );
            }),
            (s.rawTime = function (l) {
              var c = this.parent || this._dp;
              return c
                ? l && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? ar(c.rawTime(l), this)
                  : this._tTime
                : this._tTime;
            }),
            (s.globalTime = function (l) {
              for (var c = this, h = arguments.length ? l : c.rawTime(); c; )
                (h = c._start + h / (c._ts || 1)), (c = c._dp);
              return h;
            }),
            (s.repeat = function (l) {
              return arguments.length
                ? ((this._repeat = l === 1 / 0 ? -2 : l), Pr(this))
                : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
            }),
            (s.repeatDelay = function (l) {
              return arguments.length ? ((this._rDelay = l), Pr(this)) : this._rDelay;
            }),
            (s.yoyo = function (l) {
              return arguments.length ? ((this._yoyo = l), this) : this._yoyo;
            }),
            (s.seek = function (l, c) {
              return this.totalTime(mn(this, l), re(c));
            }),
            (s.restart = function (l, c) {
              return this.play().totalTime(l ? -this._delay : 0, re(c));
            }),
            (s.play = function (l, c) {
              return null != l && this.seek(l, c), this.reversed(!1).paused(!1);
            }),
            (s.reverse = function (l, c) {
              return (
                null != l && this.seek(l || this.totalDuration(), c), this.reversed(!0).paused(!1)
              );
            }),
            (s.pause = function (l, c) {
              return null != l && this.seek(l, c), this.paused(!0);
            }),
            (s.resume = function () {
              return this.paused(!1);
            }),
            (s.reversed = function (l) {
              return arguments.length
                ? (!!l !== this.reversed() && this.timeScale(-this._rts || (l ? -$e : 0)), this)
                : this._rts < 0;
            }),
            (s.invalidate = function () {
              return (this._initted = this._act = 0), (this._zTime = -$e), this;
            }),
            (s.isActive = function () {
              var h,
                l = this.parent || this._dp,
                c = this._start;
              return !(
                l &&
                !(
                  this._ts &&
                  this._initted &&
                  l.isActive() &&
                  (h = l.rawTime(!0)) >= c &&
                  h < this.endTime(!0) - $e
                )
              );
            }),
            (s.eventCallback = function (l, c, h) {
              var v = this.vars;
              return arguments.length > 1
                ? (c
                    ? ((v[l] = c),
                      h && (v[l + 'Params'] = h),
                      'onUpdate' === l && (this._onUpdate = c))
                    : delete v[l],
                  this)
                : v[l];
            }),
            (s.then = function (l) {
              var c = this;
              return new Promise(function (h) {
                var v = X(l) ? l : Ot,
                  D = function () {
                    var M = c.then;
                    (c.then = null),
                      X(v) && (v = v(c)) && (v.then || v === c) && (c.then = M),
                      h(v),
                      (c.then = M);
                  };
                (c._initted && 1 === c.totalProgress() && c._ts >= 0) || (!c._tTime && c._ts < 0)
                  ? D()
                  : (c._prom = D);
              });
            }),
            (s.kill = function () {
              ur(this);
            }),
            d
          );
        })();
      bn(Lr.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -$e,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      });
      var zn = (function (d) {
        function s(l, c) {
          var h;
          return (
            void 0 === l && (l = {}),
            ((h = d.call(this, l) || this).labels = {}),
            (h.smoothChildTiming = !!l.smoothChildTiming),
            (h.autoRemoveChildren = !!l.autoRemoveChildren),
            (h._sort = re(l.sortChildren)),
            St && sn(l.parent || St, Ee(h), c),
            l.reversed && h.reverse(),
            l.paused && h.paused(!0),
            l.scrollTrigger && An(Ee(h), l.scrollTrigger),
            h
          );
        }
        Me(s, d);
        var a = s.prototype;
        return (
          (a.to = function (c, h, v) {
            return en(0, arguments, this), this;
          }),
          (a.from = function (c, h, v) {
            return en(1, arguments, this), this;
          }),
          (a.fromTo = function (c, h, v, D) {
            return en(2, arguments, this), this;
          }),
          (a.set = function (c, h, v) {
            return (
              (h.duration = 0),
              (h.parent = this),
              Fn(h).repeatDelay || (h.repeat = 0),
              (h.immediateRender = !!h.immediateRender),
              new Sn(c, h, mn(this, v), 1),
              this
            );
          }),
          (a.call = function (c, h, v) {
            return sn(this, Sn.delayedCall(0, c, h), v);
          }),
          (a.staggerTo = function (c, h, v, D, x, M, N) {
            return (
              (v.duration = h),
              (v.stagger = v.stagger || D),
              (v.onComplete = M),
              (v.onCompleteParams = N),
              (v.parent = this),
              new Sn(c, v, mn(this, x)),
              this
            );
          }),
          (a.staggerFrom = function (c, h, v, D, x, M, N) {
            return (
              (v.runBackwards = 1),
              (Fn(v).immediateRender = re(v.immediateRender)),
              this.staggerTo(c, h, v, D, x, M, N)
            );
          }),
          (a.staggerFromTo = function (c, h, v, D, x, M, N, z) {
            return (
              (D.startAt = v),
              (Fn(D).immediateRender = re(D.immediateRender)),
              this.staggerTo(c, h, D, x, M, N, z)
            );
          }),
          (a.render = function (c, h, v) {
            var G,
              j,
              te,
              q,
              _e,
              Ie,
              Ye,
              ce,
              de,
              ve,
              Ae,
              Be,
              D = this._time,
              x = this._dirty ? this.totalDuration() : this._tDur,
              M = this._dur,
              N = this !== St && c > x - $e && c >= 0 ? x : c < $e ? 0 : c,
              z = this._zTime < 0 != c < 0 && (this._initted || !M);
            if (N !== this._tTime || v || z) {
              if (
                (D !== this._time && M && ((N += this._time - D), (c += this._time - D)),
                (G = N),
                (de = this._start),
                (Ie = !(ce = this._ts)),
                z && (M || (D = this._zTime), (c || !h) && (this._zTime = c)),
                this._repeat)
              ) {
                if (((Ae = this._yoyo), (_e = M + this._rDelay), this._repeat < -1 && c < 0))
                  return this.totalTime(100 * _e + c, h, v);
                if (
                  ((G = Fe(N % _e)),
                  N === x
                    ? ((q = this._repeat), (G = M))
                    : ((q = ~~(N / _e)) && q === N / _e && ((G = M), q--), G > M && (G = M)),
                  (ve = Xn(this._tTime, _e)),
                  !D && this._tTime && ve !== q && (ve = q),
                  Ae && 1 & q && ((G = M - G), (Be = 1)),
                  q !== ve && !this._lock)
                ) {
                  var Qe = Ae && 1 & ve,
                    je = Qe === (Ae && 1 & q);
                  if (
                    (q < ve && (Qe = !Qe),
                    (D = Qe ? 0 : M),
                    (this._lock = 1),
                    (this.render(D || (Be ? 0 : Fe(q * _e)), h, !M)._lock = 0),
                    (this._tTime = N),
                    !h && this.parent && Dn(this, 'onRepeat'),
                    this.vars.repeatRefresh && !Be && (this.invalidate()._lock = 1),
                    (D && D !== this._time) ||
                      Ie !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this;
                  if (
                    ((M = this._dur),
                    (x = this._tDur),
                    je &&
                      ((this._lock = 2),
                      this.render((D = Qe ? M : -1e-4), !0),
                      this.vars.repeatRefresh && !Be && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !Ie)
                  )
                    return this;
                  ia(this, Be);
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  (Ye = (function (s, a, l) {
                    var c;
                    if (l > a)
                      for (c = s._first; c && c._start <= l; ) {
                        if (!c._dur && 'isPause' === c.data && c._start > a) return c;
                        c = c._next;
                      }
                    else
                      for (c = s._last; c && c._start >= l; ) {
                        if (!c._dur && 'isPause' === c.data && c._start < a) return c;
                        c = c._prev;
                      }
                  })(this, Fe(D), Fe(G))) &&
                  (N -= G - (G = Ye._start)),
                (this._tTime = N),
                (this._time = G),
                (this._act = !ce),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = c),
                  (D = 0)),
                !D && G && !h && (Dn(this, 'onStart'), this._tTime !== N))
              )
                return this;
              if (G >= D && c >= 0)
                for (j = this._first; j; ) {
                  if (((te = j._next), (j._act || G >= j._start) && j._ts && Ye !== j)) {
                    if (j.parent !== this) return this.render(c, h, v);
                    if (
                      (j.render(
                        j._ts > 0
                          ? (G - j._start) * j._ts
                          : (j._dirty ? j.totalDuration() : j._tDur) + (G - j._start) * j._ts,
                        h,
                        v,
                      ),
                      G !== this._time || (!this._ts && !Ie))
                    ) {
                      (Ye = 0), te && (N += this._zTime = -$e);
                      break;
                    }
                  }
                  j = te;
                }
              else {
                j = this._last;
                for (var ht = c < 0 ? c : G; j; ) {
                  if (((te = j._prev), (j._act || ht <= j._end) && j._ts && Ye !== j)) {
                    if (j.parent !== this) return this.render(c, h, v);
                    if (
                      (j.render(
                        j._ts > 0
                          ? (ht - j._start) * j._ts
                          : (j._dirty ? j.totalDuration() : j._tDur) + (ht - j._start) * j._ts,
                        h,
                        v,
                      ),
                      G !== this._time || (!this._ts && !Ie))
                    ) {
                      (Ye = 0), te && (N += this._zTime = ht ? -$e : $e);
                      break;
                    }
                  }
                  j = te;
                }
              }
              if (
                Ye &&
                !h &&
                (this.pause(), (Ye.render(G >= D ? 0 : -$e)._zTime = G >= D ? 1 : -1), this._ts)
              )
                return (this._start = de), li(this), this.render(c, h, v);
              this._onUpdate && !h && Dn(this, 'onUpdate', !0),
                ((N === x && x >= this.totalDuration()) || (!N && D)) &&
                  (de === this._start || Math.abs(ce) !== Math.abs(this._ts)) &&
                  (this._lock ||
                    ((c || !M) &&
                      ((N === x && this._ts > 0) || (!N && this._ts < 0)) &&
                      kn(this, 1),
                    !h &&
                      (!(c < 0) || D) &&
                      (N || D || !x) &&
                      (Dn(this, N === x && c >= 0 ? 'onComplete' : 'onReverseComplete', !0),
                      this._prom && !(N < x && this.timeScale() > 0) && this._prom())));
            }
            return this;
          }),
          (a.add = function (c, h) {
            var v = this;
            if ((ae(h) || (h = mn(this, h, c)), !(c instanceof Lr))) {
              if (Te(c))
                return (
                  c.forEach(function (D) {
                    return v.add(D, h);
                  }),
                  this
                );
              if (se(c)) return this.addLabel(c, h);
              if (!X(c)) return this;
              c = Sn.delayedCall(0, c);
            }
            return this !== c ? sn(this, c, h) : this;
          }),
          (a.getChildren = function (c, h, v, D) {
            void 0 === c && (c = !0),
              void 0 === h && (h = !0),
              void 0 === v && (v = !0),
              void 0 === D && (D = -Ze);
            for (var x = [], M = this._first; M; )
              M._start >= D &&
                (M instanceof Sn
                  ? h && x.push(M)
                  : (v && x.push(M), c && x.push.apply(x, M.getChildren(!0, h, v)))),
                (M = M._next);
            return x;
          }),
          (a.getById = function (c) {
            for (var h = this.getChildren(1, 1, 1), v = h.length; v--; )
              if (h[v].vars.id === c) return h[v];
          }),
          (a.remove = function (c) {
            return se(c)
              ? this.removeLabel(c)
              : X(c)
              ? this.killTweensOf(c)
              : (ai(this, c), c === this._recent && (this._recent = this._last), _r(this));
          }),
          (a.totalTime = function (c, h) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = Fe(
                    Cr.time -
                      (this._ts > 0 ? c / this._ts : (this.totalDuration() - c) / -this._ts),
                  )),
                d.prototype.totalTime.call(this, c, h),
                (this._forcing = 0),
                this)
              : this._tTime;
          }),
          (a.addLabel = function (c, h) {
            return (this.labels[c] = mn(this, h)), this;
          }),
          (a.removeLabel = function (c) {
            return delete this.labels[c], this;
          }),
          (a.addPause = function (c, h, v) {
            var D = Sn.delayedCall(0, h || at, v);
            return (D.data = 'isPause'), (this._hasPause = 1), sn(this, D, mn(this, c));
          }),
          (a.removePause = function (c) {
            var h = this._first;
            for (c = mn(this, c); h; )
              h._start === c && 'isPause' === h.data && kn(h), (h = h._next);
          }),
          (a.killTweensOf = function (c, h, v) {
            for (var D = this.getTweensOf(c, v), x = D.length; x--; )
              Rn !== D[x] && D[x].kill(c, h);
            return this;
          }),
          (a.getTweensOf = function (c, h) {
            for (var N, v = [], D = le(c), x = this._first, M = ae(h); x; )
              x instanceof Sn
                ? Gt(x._targets, D) &&
                  (M
                    ? (!Rn || (x._initted && x._ts)) &&
                      x.globalTime(0) <= h &&
                      x.globalTime(x.totalDuration()) > h
                    : !h || x.isActive()) &&
                  v.push(x)
                : (N = x.getTweensOf(D, h)).length && v.push.apply(v, N),
                (x = x._next);
            return v;
          }),
          (a.tweenTo = function (c, h) {
            h = h || {};
            var j,
              v = this,
              D = mn(v, c),
              M = h.startAt,
              N = h.onStart,
              z = h.onStartParams,
              G = h.immediateRender,
              te = Sn.to(
                v,
                bn(
                  {
                    ease: h.ease || 'none',
                    lazy: !1,
                    immediateRender: !1,
                    time: D,
                    overwrite: 'auto',
                    duration:
                      h.duration ||
                      Math.abs((D - (M && 'time' in M ? M.time : v._time)) / v.timeScale()) ||
                      $e,
                    onStart: function () {
                      if ((v.pause(), !j)) {
                        var _e =
                          h.duration ||
                          Math.abs((D - (M && 'time' in M ? M.time : v._time)) / v.timeScale());
                        te._dur !== _e && cn(te, _e, 0, 1).render(te._time, !0, !0), (j = 1);
                      }
                      N && N.apply(te, z || []);
                    },
                  },
                  h,
                ),
              );
            return G ? te.render(0) : te;
          }),
          (a.tweenFromTo = function (c, h, v) {
            return this.tweenTo(h, bn({ startAt: { time: mn(this, c) } }, v));
          }),
          (a.recent = function () {
            return this._recent;
          }),
          (a.nextLabel = function (c) {
            return void 0 === c && (c = this._time), As(this, mn(this, c));
          }),
          (a.previousLabel = function (c) {
            return void 0 === c && (c = this._time), As(this, mn(this, c), 1);
          }),
          (a.currentLabel = function (c) {
            return arguments.length ? this.seek(c, !0) : this.previousLabel(this._time + $e);
          }),
          (a.shiftChildren = function (c, h, v) {
            void 0 === v && (v = 0);
            for (var M, D = this._first, x = this.labels; D; )
              D._start >= v && ((D._start += c), (D._end += c)), (D = D._next);
            if (h) for (M in x) x[M] >= v && (x[M] += c);
            return _r(this);
          }),
          (a.invalidate = function () {
            var c = this._first;
            for (this._lock = 0; c; ) c.invalidate(), (c = c._next);
            return d.prototype.invalidate.call(this);
          }),
          (a.clear = function (c) {
            void 0 === c && (c = !0);
            for (var v, h = this._first; h; ) (v = h._next), this.remove(h), (h = v);
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              c && (this.labels = {}),
              _r(this)
            );
          }),
          (a.totalDuration = function (c) {
            var M,
              N,
              z,
              h = 0,
              v = this,
              D = v._last,
              x = Ze;
            if (arguments.length)
              return v.timeScale(
                (v._repeat < 0 ? v.duration() : v.totalDuration()) / (v.reversed() ? -c : c),
              );
            if (v._dirty) {
              for (z = v.parent; D; )
                (M = D._prev),
                  D._dirty && D.totalDuration(),
                  (N = D._start) > x && v._sort && D._ts && !v._lock
                    ? ((v._lock = 1), (sn(v, D, N - D._delay, 1)._lock = 0))
                    : (x = N),
                  N < 0 &&
                    D._ts &&
                    ((h -= N),
                    ((!z && !v._dp) || (z && z.smoothChildTiming)) &&
                      ((v._start += N / v._ts), (v._time -= N), (v._tTime -= N)),
                    v.shiftChildren(-N, !1, -1 / 0),
                    (x = 0)),
                  D._end > h && D._ts && (h = D._end),
                  (D = M);
              cn(v, v === St && v._time > h ? v._time : h, 1, 1), (v._dirty = 0);
            }
            return v._tDur;
          }),
          (s.updateRoot = function (c) {
            if ((St._ts && ($t(St, ar(c, St)), (We = Cr.frame)), Cr.frame >= qt)) {
              qt += Ke.autoSleep || 120;
              var h = St._first;
              if ((!h || !h._ts) && Ke.autoSleep && Cr._listeners.length < 2) {
                for (; h && !h._ts; ) h = h._next;
                h || Cr.sleep();
              }
            }
          }),
          s
        );
      })(Lr);
      bn(zn.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
      var Rn,
        ro = function (s, a, l, c, h, v, D) {
          var z,
            G,
            j,
            te,
            q,
            _e,
            Ie,
            Ye,
            x = new It(this._pt, s, a, 0, 1, ke, null, h),
            M = 0,
            N = 0;
          for (
            x.b = l,
              x.e = c,
              l += '',
              (Ie = ~(c += '').indexOf('random(')) && (c = Ki(c)),
              v && (v((Ye = [l, c]), s, a), (l = Ye[0]), (c = Ye[1])),
              G = l.match(jt) || [];
            (z = jt.exec(c));

          )
            (te = z[0]),
              (q = c.substring(M, z.index)),
              j ? (j = (j + 1) % 5) : 'rgba(' === q.substr(-5) && (j = 1),
              te !== G[N++] &&
                ((_e = parseFloat(G[N - 1]) || 0),
                (x._pt = {
                  _next: x._pt,
                  p: q || 1 === N ? q : ',',
                  s: _e,
                  c:
                    '=' === te.charAt(1)
                      ? parseFloat(te.substr(2)) * ('-' === te.charAt(0) ? -1 : 1)
                      : parseFloat(te) - _e,
                  m: j && j < 4 ? Math.round : 0,
                }),
                (M = jt.lastIndex));
          return (
            (x.c = M < c.length ? c.substring(M, c.length) : ''),
            (x.fp = D),
            (In.test(c) || Ie) && (x.e = 0),
            (this._pt = x),
            x
          );
        },
        Rs = function (s, a, l, c, h, v, D, x, M) {
          X(c) && (c = c(h || 0, s, v));
          var j,
            N = s[a],
            z =
              'get' !== l
                ? l
                : X(N)
                ? M
                  ? s[a.indexOf('set') || !X(s['get' + a.substr(3)]) ? a : 'get' + a.substr(3)](M)
                  : s[a]()
                : N,
            G = X(N) ? (M ? I : b) : So;
          if (
            (se(c) &&
              (~c.indexOf('random(') && (c = Ki(c)),
              '=' === c.charAt(1) &&
                ((j =
                  parseFloat(z) +
                  parseFloat(c.substr(2)) * ('-' === c.charAt(0) ? -1 : 1) +
                  (ut(z) || 0)) ||
                  0 === j) &&
                (c = j)),
            z !== c)
          )
            return isNaN(z * c) || '' === c
              ? (!N && !(a in s) && Kr(a, c), ro.call(this, s, a, z, c, G, x || Ke.stringFilter, M))
              : ((j = new It(
                  this._pt,
                  s,
                  a,
                  +z || 0,
                  c - (z || 0),
                  'boolean' == typeof N ? pe : V,
                  0,
                  G,
                )),
                M && (j.fp = M),
                D && j.modifier(D, this, s),
                (this._pt = j));
        },
        Xi = function (s, a, l, c, h, v) {
          var D, x, M, N;
          if (
            be[s] &&
            !1 !==
              (D = new be[s]()).init(
                h,
                D.rawVars
                  ? a[s]
                  : (function (s, a, l, c, h) {
                      if (
                        (X(s) && (s = Br(s, h, a, l, c)),
                        !Re(s) || (s.style && s.nodeType) || Te(s) || Ge(s))
                      )
                        return se(s) ? Br(s, h, a, l, c) : s;
                      var D,
                        v = {};
                      for (D in s) v[D] = Br(s[D], h, a, l, c);
                      return v;
                    })(a[s], c, h, v, l),
                l,
                c,
                v,
              ) &&
            ((l._pt = x = new It(l._pt, h, s, 0, 1, D.render, D, 0, D.priority)), l !== Ln)
          )
            for (M = l._ptLookup[l._targets.indexOf(h)], N = D._props.length; N--; )
              M[D._props[N]] = x;
          return D;
        },
        dr = function d(s, a) {
          var Ae,
            Be,
            Qe,
            je,
            ht,
            Lt,
            an,
            xn,
            vn,
            Yn,
            rn,
            Zt,
            Jn,
            l = s.vars,
            c = l.ease,
            h = l.startAt,
            v = l.immediateRender,
            D = l.lazy,
            x = l.onUpdate,
            M = l.onUpdateParams,
            N = l.callbackScope,
            z = l.runBackwards,
            G = l.yoyoEase,
            te = l.autoRevert,
            q = s._dur,
            _e = s._startAt,
            Ie = s._targets,
            Ye = s.parent,
            ce = Ye && 'nested' === Ye.data ? Ye.parent._targets : Ie,
            de = 'auto' === s._overwrite && !Ue,
            ve = s.timeline;
          if (
            (ve && (!l.keyframes || !c) && (c = 'none'),
            (s._ease = nr(c, st.ease)),
            (s._yEase = G ? wr(nr(!0 === G ? c : G, st.ease)) : 0),
            G && s._yoyo && !s._repeat && ((G = s._yEase), (s._yEase = s._ease), (s._ease = G)),
            (s._from = !ve && !!l.runBackwards),
            !ve)
          ) {
            if (
              ((Zt = (xn = Ie[0] ? wn(Ie[0]).harness : 0) && l[xn.prop]),
              (Ae = Un(l, De)),
              _e && _e.render(-1, !0).kill(),
              h)
            )
              if (
                (kn(
                  (s._startAt = Sn.set(
                    Ie,
                    bn(
                      {
                        data: 'isStart',
                        overwrite: !1,
                        parent: Ye,
                        immediateRender: !0,
                        lazy: re(D),
                        startAt: null,
                        delay: 0,
                        onUpdate: x,
                        onUpdateParams: M,
                        callbackScope: N,
                        stagger: 0,
                      },
                      h,
                    ),
                  )),
                ),
                a < 0 && !v && !te && s._startAt.render(-1, !0),
                v)
              ) {
                if ((a > 0 && !te && (s._startAt = 0), q && a <= 0))
                  return void (a && (s._zTime = a));
              } else !1 === te && (s._startAt = 0);
            else if (z && q)
              if (_e) !te && (s._startAt = 0);
              else if (
                (a && (v = !1),
                (Qe = bn(
                  {
                    overwrite: !1,
                    data: 'isFromStart',
                    lazy: v && re(D),
                    immediateRender: v,
                    stagger: 0,
                    parent: Ye,
                  },
                  Ae,
                )),
                Zt && (Qe[xn.prop] = Zt),
                kn((s._startAt = Sn.set(Ie, Qe))),
                a < 0 && s._startAt.render(-1, !0),
                v)
              ) {
                if (!a) return;
              } else d(s._startAt, $e);
            for (s._pt = 0, D = (q && re(D)) || (D && !q), Be = 0; Be < Ie.length; Be++) {
              if (
                ((an = (ht = Ie[Be])._gsap || it(Ie)[Be]._gsap),
                (s._ptLookup[Be] = Yn = {}),
                Q[an.id] && Y.length && sr(),
                (rn = ce === Ie ? Be : ce.indexOf(ht)),
                xn &&
                  !1 !== (vn = new xn()).init(ht, Zt || Ae, s, rn, ce) &&
                  ((s._pt = je = new It(s._pt, ht, vn.name, 0, 1, vn.render, vn, 0, vn.priority)),
                  vn._props.forEach(function (Ir) {
                    Yn[Ir] = je;
                  }),
                  vn.priority && (Lt = 1)),
                !xn || Zt)
              )
                for (Qe in Ae)
                  be[Qe] && (vn = Xi(Qe, Ae, s, rn, ht, ce))
                    ? vn.priority && (Lt = 1)
                    : (Yn[Qe] = je = Rs.call(s, ht, Qe, 'get', Ae[Qe], rn, ce, 0, l.stringFilter));
              s._op && s._op[Be] && s.kill(ht, s._op[Be]),
                de &&
                  s._pt &&
                  ((Rn = s), St.killTweensOf(ht, Yn, s.globalTime(0)), (Jn = !s.parent), (Rn = 0)),
                s._pt && D && (Q[an.id] = 1);
            }
            Lt && Ft(s), s._onInit && s._onInit(s);
          }
          (s._onUpdate = x), (s._initted = (!s._op || s._pt) && !Jn);
        },
        Br = function (s, a, l, c, h) {
          return X(s) ? s.call(a, l, c, h) : se(s) && ~s.indexOf('random(') ? Ki(s) : s;
        },
        ni = Pe + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',
        sa = (ni + ',id,stagger,delay,duration,paused,scrollTrigger').split(','),
        Sn = (function (d) {
          function s(l, c, h, v) {
            var D;
            'number' == typeof c && ((h.duration = c), (c = h), (h = null));
            var de,
              ve,
              Ae,
              Be,
              Qe,
              je,
              ht,
              Lt,
              x = (D = d.call(this, v ? c : Fn(c)) || this).vars,
              M = x.duration,
              N = x.delay,
              z = x.immediateRender,
              G = x.stagger,
              j = x.overwrite,
              te = x.keyframes,
              q = x.defaults,
              _e = x.scrollTrigger,
              Ie = x.yoyoEase,
              Ye = c.parent || St,
              ce = (Te(l) || Ge(l) ? ae(l[0]) : 'length' in c) ? [l] : le(l);
            if (
              ((D._targets = ce.length
                ? it(ce)
                : Qr(
                    'GSAP target ' + l + ' not found. https://greensock.com',
                    !Ke.nullTargetWarn,
                  ) || []),
              (D._ptLookup = []),
              (D._overwrite = j),
              te || G || me(M) || me(N))
            ) {
              if (
                ((c = D.vars),
                (de = D.timeline = new zn({ data: 'nested', defaults: q || {} })).kill(),
                (de.parent = de._dp = Ee(D)),
                (de._start = 0),
                te)
              )
                bn(de.vars.defaults, { ease: 'none' }),
                  G
                    ? ce.forEach(function (an, xn) {
                        return te.forEach(function (vn, Yn) {
                          return de.to(an, vn, Yn ? '>' : xn * G);
                        });
                      })
                    : te.forEach(function (an) {
                        return de.to(ce, an, '>');
                      });
              else {
                if (((Be = ce.length), (ht = G ? Ut(G) : at), Re(G)))
                  for (Qe in G) ~ni.indexOf(Qe) && (Lt || (Lt = {}), (Lt[Qe] = G[Qe]));
                for (ve = 0; ve < Be; ve++) {
                  for (Qe in ((Ae = {}), c)) sa.indexOf(Qe) < 0 && (Ae[Qe] = c[Qe]);
                  (Ae.stagger = 0),
                    Ie && (Ae.yoyoEase = Ie),
                    Lt && Sr(Ae, Lt),
                    (je = ce[ve]),
                    (Ae.duration = +Br(M, Ee(D), ve, je, ce)),
                    (Ae.delay = (+Br(N, Ee(D), ve, je, ce) || 0) - D._delay),
                    !G &&
                      1 === Be &&
                      Ae.delay &&
                      ((D._delay = N = Ae.delay), (D._start += N), (Ae.delay = 0)),
                    de.to(je, Ae, ht(ve, je, ce));
                }
                de.duration() ? (M = N = 0) : (D.timeline = 0);
              }
              M || D.duration((M = de.duration()));
            } else D.timeline = 0;
            return (
              !0 === j && !Ue && ((Rn = Ee(D)), St.killTweensOf(ce), (Rn = 0)),
              sn(Ye, Ee(D), h),
              c.reversed && D.reverse(),
              c.paused && D.paused(!0),
              (z ||
                (!M &&
                  !te &&
                  D._start === Fe(Ye._time) &&
                  re(z) &&
                  Si(Ee(D)) &&
                  'nested' !== Ye.data)) &&
                ((D._tTime = -$e), D.render(Math.max(0, -N))),
              _e && An(Ee(D), _e),
              D
            );
          }
          Me(s, d);
          var a = s.prototype;
          return (
            (a.render = function (c, h, v) {
              var z,
                G,
                j,
                te,
                q,
                _e,
                Ie,
                Ye,
                ce,
                D = this._time,
                x = this._tDur,
                M = this._dur,
                N = c > x - $e && c >= 0 ? x : c < $e ? 0 : c;
              if (M) {
                if (
                  N !== this._tTime ||
                  !c ||
                  v ||
                  (!this._initted && this._tTime) ||
                  (this._startAt && this._zTime < 0 != c < 0)
                ) {
                  if (((z = N), (Ye = this.timeline), this._repeat)) {
                    if (((te = M + this._rDelay), this._repeat < -1 && c < 0))
                      return this.totalTime(100 * te + c, h, v);
                    if (
                      ((z = Fe(N % te)),
                      N === x
                        ? ((j = this._repeat), (z = M))
                        : ((j = ~~(N / te)) && j === N / te && ((z = M), j--), z > M && (z = M)),
                      (_e = this._yoyo && 1 & j) && ((ce = this._yEase), (z = M - z)),
                      (q = Xn(this._tTime, te)),
                      z === D && !v && this._initted)
                    )
                      return this;
                    j !== q &&
                      (Ye && this._yEase && ia(Ye, _e),
                      this.vars.repeatRefresh &&
                        !_e &&
                        !this._lock &&
                        ((this._lock = v = 1),
                        (this.render(Fe(te * j), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (ui(this, c < 0 ? c : z, v, h)) return (this._tTime = 0), this;
                    if (M !== this._dur) return this.render(c, h, v);
                  }
                  if (
                    ((this._tTime = N),
                    (this._time = z),
                    !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                    (this.ratio = Ie = (ce || this._ease)(z / M)),
                    this._from && (this.ratio = Ie = 1 - Ie),
                    z && !D && !h && Dn(this, 'onStart'),
                    z && !D && !h && (Dn(this, 'onStart'), this._tTime !== N))
                  )
                    return this;
                  for (G = this._pt; G; ) G.r(Ie, G.d), (G = G._next);
                  (Ye && Ye.render(c < 0 ? c : !z && _e ? -$e : Ye._dur * Ie, h, v)) ||
                    (this._startAt && (this._zTime = c)),
                    this._onUpdate &&
                      !h &&
                      (c < 0 && this._startAt && this._startAt.render(c, !0, v),
                      Dn(this, 'onUpdate')),
                    this._repeat &&
                      j !== q &&
                      this.vars.onRepeat &&
                      !h &&
                      this.parent &&
                      Dn(this, 'onRepeat'),
                    (N === this._tDur || !N) &&
                      this._tTime === N &&
                      (c < 0 && this._startAt && !this._onUpdate && this._startAt.render(c, !0, !0),
                      (c || !M) &&
                        ((N === this._tDur && this._ts > 0) || (!N && this._ts < 0)) &&
                        kn(this, 1),
                      !h &&
                        (!(c < 0) || D) &&
                        (N || D) &&
                        (Dn(this, N === x ? 'onComplete' : 'onReverseComplete', !0),
                        this._prom && !(N < x && this.timeScale() > 0) && this._prom()));
                }
              } else
                !(function (s, a, l, c) {
                  var M,
                    N,
                    z,
                    h = s.ratio,
                    v =
                      a < 0 ||
                      (!a &&
                        ((!s._start && On(s) && (s._initted || !Je(s))) ||
                          ((s._ts < 0 || s._dp._ts < 0) && !Je(s))))
                        ? 0
                        : 1,
                    D = s._rDelay,
                    x = 0;
                  if (
                    (D &&
                      s._repeat &&
                      ((x = tr(0, s._tDur, a)),
                      (N = Xn(x, D)),
                      (z = Xn(s._tTime, D)),
                      s._yoyo && 1 & N && (v = 1 - v),
                      N !== z &&
                        ((h = 1 - v), s.vars.repeatRefresh && s._initted && s.invalidate())),
                    v !== h || c || s._zTime === $e || (!a && s._zTime))
                  ) {
                    if (!s._initted && ui(s, a, c, l)) return;
                    for (
                      z = s._zTime,
                        s._zTime = a || (l ? $e : 0),
                        l || (l = a && !z),
                        s.ratio = v,
                        s._from && (v = 1 - v),
                        s._time = 0,
                        s._tTime = x,
                        M = s._pt;
                      M;

                    )
                      M.r(v, M.d), (M = M._next);
                    s._startAt && a < 0 && s._startAt.render(a, !0, !0),
                      s._onUpdate && !l && Dn(s, 'onUpdate'),
                      x && s._repeat && !l && s.parent && Dn(s, 'onRepeat'),
                      (a >= s._tDur || a < 0) &&
                        s.ratio === v &&
                        (v && kn(s, 1),
                        l ||
                          (Dn(s, v ? 'onComplete' : 'onReverseComplete', !0),
                          s._prom && s._prom()));
                  } else s._zTime || (s._zTime = a);
                })(this, c, h, v);
              return this;
            }),
            (a.targets = function () {
              return this._targets;
            }),
            (a.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._lazy =
                  this.ratio =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                d.prototype.invalidate.call(this)
              );
            }),
            (a.kill = function (c, h) {
              if ((void 0 === h && (h = 'all'), !(c || (h && 'all' !== h))))
                return (this._lazy = this._pt = 0), this.parent ? ur(this) : this;
              if (this.timeline) {
                var v = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(c, h, Rn && !0 !== Rn.vars.overwrite)._first ||
                    ur(this),
                  this.parent &&
                    v !== this.timeline.totalDuration() &&
                    cn(this, (this._dur * this.timeline._tDur) / v, 0, 1),
                  this
                );
              }
              var z,
                G,
                j,
                te,
                q,
                _e,
                Ie,
                D = this._targets,
                x = c ? le(c) : D,
                M = this._ptLookup,
                N = this._pt;
              if (
                (!h || 'all' === h) &&
                (function (s, a) {
                  for (var l = s.length, c = l === a.length; c && l-- && s[l] === a[l]; );
                  return l < 0;
                })(D, x)
              )
                return 'all' === h && (this._pt = 0), ur(this);
              for (
                z = this._op = this._op || [],
                  'all' !== h &&
                    (se(h) &&
                      ((q = {}),
                      Et(h, function (Ye) {
                        return (q[Ye] = 1);
                      }),
                      (h = q)),
                    (h = (function (s, a) {
                      var h,
                        v,
                        D,
                        x,
                        l = s[0] ? wn(s[0]).harness : 0,
                        c = l && l.aliases;
                      if (!c) return a;
                      for (v in ((h = Sr({}, a)), c))
                        if ((v in h)) for (D = (x = c[v].split(',')).length; D--; ) h[x[D]] = h[v];
                      return h;
                    })(D, h))),
                  Ie = D.length;
                Ie--;

              )
                if (~x.indexOf(D[Ie]))
                  for (q in ((G = M[Ie]),
                  'all' === h
                    ? ((z[Ie] = h), (te = G), (j = {}))
                    : ((j = z[Ie] = z[Ie] || {}), (te = h)),
                  te))
                    (_e = G && G[q]) &&
                      ((!('kill' in _e.d) || !0 === _e.d.kill(q)) && ai(this, _e, '_pt'),
                      delete G[q]),
                      'all' !== j && (j[q] = 1);
              return this._initted && !this._pt && N && ur(this), this;
            }),
            (s.to = function (c, h) {
              return new s(c, h, arguments[2]);
            }),
            (s.from = function (c, h) {
              return en(1, arguments);
            }),
            (s.delayedCall = function (c, h, v, D) {
              return new s(h, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: c,
                onComplete: h,
                onReverseComplete: h,
                onCompleteParams: v,
                onReverseCompleteParams: v,
                callbackScope: D,
              });
            }),
            (s.fromTo = function (c, h, v) {
              return en(2, arguments);
            }),
            (s.set = function (c, h) {
              return (h.duration = 0), h.repeatDelay || (h.repeat = 0), new s(c, h);
            }),
            (s.killTweensOf = function (c, h, v) {
              return St.killTweensOf(c, h, v);
            }),
            s
          );
        })(Lr);
      bn(Sn.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
        Et('staggerTo,staggerFrom,staggerFromTo', function (d) {
          Sn[d] = function () {
            var s = new zn(),
              a = W.call(arguments, 0);
            return a.splice('staggerFromTo' === d ? 5 : 4, 0, 0), s[d].apply(s, a);
          };
        });
      var So = function (s, a, l) {
          return (s[a] = l);
        },
        b = function (s, a, l) {
          return s[a](l);
        },
        I = function (s, a, l, c) {
          return s[a](c.fp, l);
        },
        E = function (s, a, l) {
          return s.setAttribute(a, l);
        },
        P = function (s, a) {
          return X(s[a]) ? b : ye(s[a]) && s.setAttribute ? E : So;
        },
        V = function (s, a) {
          return a.set(a.t, a.p, Math.round(1e6 * (a.s + a.c * s)) / 1e6, a);
        },
        pe = function (s, a) {
          return a.set(a.t, a.p, !!(a.s + a.c * s), a);
        },
        ke = function (s, a) {
          var l = a._pt,
            c = '';
          if (!s && a.b) c = a.b;
          else if (1 === s && a.e) c = a.e;
          else {
            for (; l; )
              (c = l.p + (l.m ? l.m(l.s + l.c * s) : Math.round(1e4 * (l.s + l.c * s)) / 1e4) + c),
                (l = l._next);
            c += a.c;
          }
          a.set(a.t, a.p, c, a);
        },
        lt = function (s, a) {
          for (var l = a._pt; l; ) l.r(s, l.d), (l = l._next);
        },
        Pt = function (s, a, l, c) {
          for (var v, h = this._pt; h; ) (v = h._next), h.p === c && h.modifier(s, a, l), (h = v);
        },
        on = function (s) {
          for (var l, c, a = this._pt; a; )
            (c = a._next),
              (a.p === s && !a.op) || a.op === s ? ai(this, a, '_pt') : a.dep || (l = 1),
              (a = c);
          return !l;
        },
        tn = function (s, a, l, c) {
          c.mSet(s, a, c.m.call(c.tween, l, c.mt), c);
        },
        Ft = function (s) {
          for (var l, c, h, v, a = s._pt; a; ) {
            for (l = a._next, c = h; c && c.pr > a.pr; ) c = c._next;
            (a._prev = c ? c._prev : v) ? (a._prev._next = a) : (h = a),
              (a._next = c) ? (c._prev = a) : (v = a),
              (a = l);
          }
          s._pt = h;
        },
        It = (function () {
          function d(a, l, c, h, v, D, x, M, N) {
            (this.t = l),
              (this.s = h),
              (this.c = v),
              (this.p = c),
              (this.r = D || V),
              (this.d = x || this),
              (this.set = M || So),
              (this.pr = N || 0),
              (this._next = a),
              a && (a._prev = this);
          }
          return (
            (d.prototype.modifier = function (l, c, h) {
              (this.mSet = this.mSet || this.set),
                (this.set = tn),
                (this.m = l),
                (this.mt = h),
                (this.tween = c);
            }),
            d
          );
        })();
      Et(
        Pe +
          'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
        function (d) {
          return (De[d] = 1);
        },
      ),
        (Mn.TweenMax = Mn.TweenLite = Sn),
        (Mn.TimelineLite = Mn.TimelineMax = zn),
        (St = new zn({
          sortChildren: !1,
          defaults: st,
          autoRemoveChildren: !0,
          id: 'root',
          smoothChildTiming: !0,
        })),
        (Ke.stringFilter = ta);
      var Qt = {
        registerPlugin: function () {
          for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++) a[l] = arguments[l];
          a.forEach(function (c) {
            return cr(c);
          });
        },
        timeline: function (s) {
          return new zn(s);
        },
        getTweensOf: function (s, a) {
          return St.getTweensOf(s, a);
        },
        getProperty: function (s, a, l, c) {
          se(s) && (s = le(s)[0]);
          var h = wn(s || {}).get,
            v = l ? Ot : bt;
          return (
            'native' === l && (l = ''),
            s &&
              (a
                ? v(((be[a] && be[a].get) || h)(s, a, l, c))
                : function (D, x, M) {
                    return v(((be[D] && be[D].get) || h)(s, D, x, M));
                  })
          );
        },
        quickSetter: function (s, a, l) {
          if ((s = le(s)).length > 1) {
            var c = s.map(function (N) {
                return Kn.quickSetter(N, a, l);
              }),
              h = c.length;
            return function (N) {
              for (var z = h; z--; ) c[z](N);
            };
          }
          var v = be[a],
            D = wn((s = s[0] || {})),
            x = (D.harness && (D.harness.aliases || {})[a]) || a,
            M = v
              ? function (N) {
                  var z = new v();
                  (Ln._pt = 0),
                    z.init(s, l ? N + l : N, Ln, 0, [s]),
                    z.render(1, z),
                    Ln._pt && lt(1, Ln);
                }
              : D.set(s, x);
          return v
            ? M
            : function (N) {
                return M(s, x, l ? N + l : N, D, 1);
              };
        },
        isTweening: function (s) {
          return St.getTweensOf(s, !0).length > 0;
        },
        defaults: function (s) {
          return s && s.ease && (s.ease = nr(s.ease, st.ease)), Zr(st, s || {});
        },
        config: function (s) {
          return Zr(Ke, s || {});
        },
        registerEffect: function (s) {
          var a = s.name,
            l = s.effect,
            h = s.defaults,
            v = s.extendTimeline;
          (s.plugins || '').split(',').forEach(function (D) {
            return D && !be[D] && !Mn[D] && Qr(a + ' effect requires ' + D + ' plugin.');
          }),
            (rt[a] = function (D, x, M) {
              return l(le(D), bn(x || {}, h), M);
            }),
            v &&
              (zn.prototype[a] = function (D, x, M) {
                return this.add(rt[a](D, Re(x) ? x : (M = x) && {}, this), M);
              });
        },
        registerEase: function (s, a) {
          zt[s] = nr(a);
        },
        parseEase: function (s, a) {
          return arguments.length ? nr(s, a) : zt;
        },
        getById: function (s) {
          return St.getById(s);
        },
        exportRoot: function (s, a) {
          void 0 === s && (s = {});
          var c,
            h,
            l = new zn(s);
          for (
            l.smoothChildTiming = re(s.smoothChildTiming),
              St.remove(l),
              l._dp = 0,
              l._time = l._tTime = St._time,
              c = St._first;
            c;

          )
            (h = c._next),
              (a || !(!c._dur && c instanceof Sn && c.vars.onComplete === c._targets[0])) &&
                sn(l, c, c._start - c._delay),
              (c = h);
          return sn(St, l, 0), l;
        },
        utils: {
          wrap: function d(s, a, l) {
            var c = a - s;
            return Te(s)
              ? Fr(s, d(0, s.length), a)
              : er(l, function (h) {
                  return ((c + ((h - s) % c)) % c) + s;
                });
          },
          wrapYoyo: function d(s, a, l) {
            var c = a - s,
              h = 2 * c;
            return Te(s)
              ? Fr(s, d(0, s.length - 1), a)
              : er(l, function (v) {
                  return s + ((v = (h + ((v - s) % h)) % h || 0) > c ? h - v : v);
                });
          },
          distribute: Ut,
          random: eo,
          snap: Nr,
          normalize: function (s, a, l) {
            return Tr(s, a, 0, 1, l);
          },
          getUnit: ut,
          clamp: function (s, a, l) {
            return er(l, function (c) {
              return tr(s, a, c);
            });
          },
          splitColor: Xo,
          toArray: le,
          selector: function (s) {
            return (
              (s = le(s)[0] || Qr('Invalid scope') || {}),
              function (a) {
                var l = s.current || s.nativeElement || s;
                return le(
                  a,
                  l.querySelectorAll
                    ? l
                    : l === s
                    ? Qr('Invalid scope') || Gr.createElement('div')
                    : s,
                );
              }
            );
          },
          mapRange: Tr,
          pipe: function () {
            for (var s = arguments.length, a = new Array(s), l = 0; l < s; l++) a[l] = arguments[l];
            return function (c) {
              return a.reduce(function (h, v) {
                return v(h);
              }, c);
            };
          },
          unitize: function (s, a) {
            return function (l) {
              return s(parseFloat(l)) + (a || ut(l));
            };
          },
          interpolate: function d(s, a, l, c) {
            var h = isNaN(s + a)
              ? 0
              : function (j) {
                  return (1 - j) * s + j * a;
                };
            if (!h) {
              var x,
                M,
                N,
                z,
                G,
                v = se(s),
                D = {};
              if ((!0 === l && (c = 1) && (l = null), v)) (s = { p: s }), (a = { p: a });
              else if (Te(s) && !Te(a)) {
                for (N = [], G = (z = s.length) - 2, M = 1; M < z; M++) N.push(d(s[M - 1], s[M]));
                z--,
                  (h = function (te) {
                    te *= z;
                    var q = Math.min(G, ~~te);
                    return N[q](te - q);
                  }),
                  (l = a);
              } else c || (s = Sr(Te(s) ? [] : {}, s));
              if (!N) {
                for (x in a) Rs.call(D, s, x, 'get', a[x]);
                h = function (te) {
                  return lt(te, D) || (v ? s.p : s);
                };
              }
            }
            return er(l, h);
          },
          shuffle: vt,
        },
        install: Yr,
        effects: rt,
        ticker: Cr,
        updateRoot: zn.updateRoot,
        plugins: be,
        globalTimeline: St,
        core: {
          PropTween: It,
          globals: ft,
          Tween: Sn,
          Timeline: zn,
          Animation: Lr,
          getCache: wn,
          _removeLinkedListItem: ai,
          suppressOverwrites: function (s) {
            return (Ue = s);
          },
        },
      };
      Et('to,from,fromTo,delayedCall,set,killTweensOf', function (d) {
        return (Qt[d] = Sn[d]);
      }),
        Cr.add(zn.updateRoot),
        (Ln = Qt.to({}, { duration: 0 }));
      var Bn = function (s, a) {
          for (var l = s._pt; l && l.p !== a && l.op !== a && l.fp !== a; ) l = l._next;
          return l;
        },
        Tn = function (s, a) {
          return {
            name: s,
            rawVars: 1,
            init: function (c, h, v) {
              v._onInit = function (D) {
                var x, M;
                if (
                  (se(h) &&
                    ((x = {}),
                    Et(h, function (N) {
                      return (x[N] = 1);
                    }),
                    (h = x)),
                  a)
                ) {
                  for (M in ((x = {}), h)) x[M] = a(h[M]);
                  h = x;
                }
                !(function (s, a) {
                  var c,
                    h,
                    v,
                    l = s._targets;
                  for (c in a)
                    for (h = l.length; h--; )
                      (v = s._ptLookup[h][c]) &&
                        (v = v.d) &&
                        (v._pt && (v = Bn(v, c)), v && v.modifier && v.modifier(a[c], s, l[h], c));
                })(D, h);
              };
            },
          };
        },
        Kn =
          Qt.registerPlugin(
            {
              name: 'attr',
              init: function (s, a, l, c, h) {
                var v, D;
                for (v in a)
                  (D = this.add(
                    s,
                    'setAttribute',
                    (s.getAttribute(v) || 0) + '',
                    a[v],
                    c,
                    h,
                    0,
                    0,
                    v,
                  )) && (D.op = v),
                    this._props.push(v);
              },
            },
            {
              name: 'endArray',
              init: function (s, a) {
                for (var l = a.length; l--; ) this.add(s, l, s[l] || 0, a[l]);
              },
            },
            Tn('roundProps', Tt),
            Tn('modifiers'),
            Tn('snap', Nr),
          ) || Qt;
      (Sn.version = zn.version = Kn.version = '3.7.0'), (Rr = 1), dt() && Ti();
      var tu,
        Ii,
        hi,
        Ps,
        Cn,
        xo,
        Za,
        Wn = {},
        Mi = 180 / Math.PI,
        ns = Math.PI / 180,
        Ns = Math.atan2,
        Ga = 1e8,
        Io = /([A-Z])/g,
        la = /(?:left|right|width|margin|padding|x)/i,
        Mo = /[\s,\(]\S/,
        ri = { autoAlpha: 'opacity,visibility', scale: 'scaleX,scaleY', alpha: 'opacity' },
        Ya = function (s, a) {
          return a.set(a.t, a.p, Math.round(1e4 * (a.s + a.c * s)) / 1e4 + a.u, a);
        },
        Ka = function (s, a) {
          return a.set(a.t, a.p, 1 === s ? a.e : Math.round(1e4 * (a.s + a.c * s)) / 1e4 + a.u, a);
        },
        Fs = function (s, a) {
          return a.set(a.t, a.p, s ? Math.round(1e4 * (a.s + a.c * s)) / 1e4 + a.u : a.b, a);
        },
        ua = function (s, a) {
          var l = a.s + a.c * s;
          a.set(a.t, a.p, ~~(l + (l < 0 ? -0.5 : 0.5)) + a.u, a);
        },
        ca = function (s, a) {
          return a.set(a.t, a.p, s ? a.e : a.b, a);
        },
        Ai = function (s, a) {
          return a.set(a.t, a.p, 1 !== s ? a.b : a.e, a);
        },
        Qa = function (s, a, l) {
          return (s.style[a] = l);
        },
        Ao = function (s, a, l) {
          return s.style.setProperty(a, l);
        },
        nu = function (s, a, l) {
          return (s._gsap[a] = l);
        },
        ru = function (s, a, l) {
          return (s._gsap.scaleX = s._gsap.scaleY = l);
        },
        Qn = function (s, a, l, c, h) {
          var v = s._gsap;
          (v.scaleX = v.scaleY = l), v.renderTransform(h, v);
        },
        Oi = function (s, a, l, c, h) {
          var v = s._gsap;
          (v[a] = l), v.renderTransform(h, v);
        },
        Vt = 'transform',
        yn = Vt + 'Origin',
        ks = function (s, a) {
          var l = Ii.createElementNS
            ? Ii.createElementNS((a || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'), s)
            : Ii.createElement(s);
          return l.style ? l : Ii.createElement(s);
        },
        Vr = function d(s, a, l) {
          var c = getComputedStyle(s);
          return (
            c[a] ||
            c.getPropertyValue(a.replace(Io, '-$1').toLowerCase()) ||
            c.getPropertyValue(a) ||
            (!l && d(s, Ls(a) || a, 1)) ||
            ''
          );
        },
        rs = 'O,Moz,ms,Ms,Webkit'.split(','),
        Ls = function (s, a, l) {
          var h = (a || Cn).style,
            v = 5;
          if (s in h && !l) return s;
          for (s = s.charAt(0).toUpperCase() + s.substr(1); v-- && !(rs[v] + s in h); );
          return v < 0 ? null : (3 === v ? 'ms' : v >= 0 ? rs[v] : '') + s;
        },
        Ri = function () {
          'undefined' != typeof window &&
            window.document &&
            ((tu = window),
            (hi = (Ii = tu.document).documentElement),
            (Cn = ks('div') || { style: {} }),
            ks('div'),
            (Vt = Ls(Vt)),
            (yn = Vt + 'Origin'),
            (Cn.style.cssText = 'border-width:0;line-height:0;position:absolute;padding:0'),
            (Za = !!Ls('perspective')),
            (Ps = 1));
        },
        Bs = function d(s) {
          var v,
            a = ks(
              'svg',
              (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
                'http://www.w3.org/2000/svg',
            ),
            l = this.parentNode,
            c = this.nextSibling,
            h = this.style.cssText;
          if ((hi.appendChild(a), a.appendChild(this), (this.style.display = 'block'), s))
            try {
              (v = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = d);
            } catch (D) {}
          else this._gsapBBox && (v = this._gsapBBox());
          return (
            l && (c ? l.insertBefore(this, c) : l.appendChild(this)),
            hi.removeChild(a),
            (this.style.cssText = h),
            v
          );
        },
        Vs = function (s, a) {
          for (var l = a.length; l--; ) if (s.hasAttribute(a[l])) return s.getAttribute(a[l]);
        },
        Oo = function (s) {
          var a;
          try {
            a = s.getBBox();
          } catch (l) {
            a = Bs.call(s, !0);
          }
          return (
            (a && (a.width || a.height)) || s.getBBox === Bs || (a = Bs.call(s, !0)),
            !a || a.width || a.x || a.y
              ? a
              : {
                  x: +Vs(s, ['x', 'cx', 'x1']) || 0,
                  y: +Vs(s, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Ro = function (s) {
          return !(!s.getCTM || (s.parentNode && !s.ownerSVGElement) || !Oo(s));
        },
        js = function (s, a) {
          if (a) {
            var l = s.style;
            a in Wn && a !== yn && (a = Vt),
              l.removeProperty
                ? (('ms' === a.substr(0, 2) || 'webkit' === a.substr(0, 6)) && (a = '-' + a),
                  l.removeProperty(a.replace(Io, '-$1').toLowerCase()))
                : l.removeAttribute(a);
          }
        },
        Gn = function (s, a, l, c, h, v) {
          var D = new It(s._pt, a, l, 0, 1, v ? Ai : ca);
          return (s._pt = D), (D.b = c), (D.e = h), s._props.push(l), D;
        },
        oo = { deg: 1, rad: 1, turn: 1 },
        fr = function d(s, a, l, c) {
          var te,
            q,
            _e,
            Ie,
            h = parseFloat(l) || 0,
            v = (l + '').trim().substr((h + '').length) || 'px',
            D = Cn.style,
            x = la.test(a),
            M = 'svg' === s.tagName.toLowerCase(),
            N = (M ? 'client' : 'offset') + (x ? 'Width' : 'Height'),
            z = 100,
            G = 'px' === c,
            j = '%' === c;
          return c === v || !h || oo[c] || oo[v]
            ? h
            : ('px' !== v && !G && (h = d(s, a, l, 'px')),
              (Ie = s.getCTM && Ro(s)),
              (!j && '%' !== v) || (!Wn[a] && !~a.indexOf('adius'))
                ? ((D[x ? 'width' : 'height'] = z + (G ? v : c)),
                  (q =
                    ~a.indexOf('adius') || ('em' === c && s.appendChild && !M) ? s : s.parentNode),
                  Ie && (q = (s.ownerSVGElement || {}).parentNode),
                  (!q || q === Ii || !q.appendChild) && (q = Ii.body),
                  (_e = q._gsap) && j && _e.width && x && _e.time === Cr.time
                    ? Fe((h / _e.width) * z)
                    : ((j || '%' === v) && (D.position = Vr(s, 'position')),
                      q === s && (D.position = 'static'),
                      q.appendChild(Cn),
                      (te = Cn[N]),
                      q.removeChild(Cn),
                      (D.position = 'absolute'),
                      x && j && (((_e = wn(q)).time = Cr.time), (_e.width = q[N])),
                      Fe(G ? (te * h) / z : te && h ? (z / te) * h : 0)))
                : ((te = Ie ? s.getBBox()[x ? 'width' : 'height'] : s[N]),
                  Fe(j ? (h / te) * z : (h / 100) * te)));
        },
        is = function (s, a, l, c) {
          var h;
          return (
            Ps || Ri(),
            a in ri && 'transform' !== a && ~(a = ri[a]).indexOf(',') && (a = a.split(',')[0]),
            Wn[a] && 'transform' !== a
              ? ((h = Pi(s, c)),
                (h =
                  'transformOrigin' !== a
                    ? h[a]
                    : h.svg
                    ? h.origin
                    : gi(Vr(s, yn)) + ' ' + h.zOrigin + 'px'))
              : (!(h = s.style[a]) || 'auto' === h || c || ~(h + '').indexOf('calc(')) &&
                (h =
                  (da[a] && da[a](s, a, l)) || Vr(s, a) || yr(s, a) || ('opacity' === a ? 1 : 0)),
            l && !~(h + '').trim().indexOf(' ') ? fr(s, a, h, l) + l : h
          );
        },
        ao = function (s, a, l, c) {
          if (!l || 'none' === l) {
            var h = Ls(a, s, 1),
              v = h && Vr(s, h, 1);
            v && v !== l
              ? ((a = h), (l = v))
              : 'borderColor' === a && (l = Vr(s, 'borderTopColor'));
          }
          var N,
            z,
            G,
            j,
            te,
            q,
            _e,
            Ie,
            Ye,
            ce,
            de,
            ve,
            D = new It(this._pt, s.style, a, 0, 1, ke),
            x = 0,
            M = 0;
          if (
            ((D.b = l),
            (D.e = c),
            (l += ''),
            'auto' == (c += '') && ((s.style[a] = c), (c = Vr(s, a) || c), (s.style[a] = l)),
            ta((N = [l, c])),
            (c = N[1]),
            (G = (l = N[0]).match(Ct) || []),
            (c.match(Ct) || []).length)
          ) {
            for (; (z = Ct.exec(c)); )
              (_e = z[0]),
                (Ye = c.substring(x, z.index)),
                te
                  ? (te = (te + 1) % 5)
                  : ('rgba(' === Ye.substr(-5) || 'hsla(' === Ye.substr(-5)) && (te = 1),
                _e !== (q = G[M++] || '') &&
                  ((j = parseFloat(q) || 0),
                  (de = q.substr((j + '').length)),
                  (ve = '=' === _e.charAt(1) ? +(_e.charAt(0) + '1') : 0) && (_e = _e.substr(2)),
                  (Ie = parseFloat(_e)),
                  (ce = _e.substr((Ie + '').length)),
                  (x = Ct.lastIndex - ce.length),
                  ce ||
                    ((ce = ce || Ke.units[a] || de), x === c.length && ((c += ce), (D.e += ce))),
                  de !== ce && (j = fr(s, a, q, ce) || 0),
                  (D._pt = {
                    _next: D._pt,
                    p: Ye || 1 === M ? Ye : ',',
                    s: j,
                    c: ve ? ve * Ie : Ie - j,
                    m: (te && te < 4) || 'zIndex' === a ? Math.round : 0,
                  }));
            D.c = x < c.length ? c.substring(x, c.length) : '';
          } else D.r = 'display' === a && 'none' === c ? Ai : ca;
          return In.test(c) && (D.e = 0), (this._pt = D), D;
        },
        Po = { top: '0%', bottom: '100%', left: '0%', right: '100%', center: '50%' },
        iu = function (s) {
          var a = s.split(' '),
            l = a[0],
            c = a[1] || '50%';
          return (
            ('top' === l || 'bottom' === l || 'left' === c || 'right' === c) &&
              ((s = l), (l = c), (c = s)),
            (a[0] = Po[l] || l),
            (a[1] = Po[c] || c),
            a.join(' ')
          );
        },
        su = function (s, a) {
          if (a.tween && a.tween._time === a.tween._dur) {
            var D,
              x,
              M,
              l = a.t,
              h = a.u,
              v = l._gsap;
            if ('all' === h || !0 === h) (l.style.cssText = ''), (x = 1);
            else
              for (M = (h = h.split(',')).length; --M > -1; )
                Wn[(D = h[M])] && ((x = 1), (D = 'transformOrigin' === D ? yn : Vt)), js(l, D);
            x &&
              (js(l, Vt),
              v && (v.svg && l.removeAttribute('transform'), Pi(l, 1), (v.uncache = 1)));
          }
        },
        da = {
          clearProps: function (s, a, l, c, h) {
            if ('isFromStart' !== h.data) {
              var v = (s._pt = new It(s._pt, a, l, 0, 0, su));
              return (v.u = c), (v.pr = -10), (v.tween = h), s._props.push(l), 1;
            }
          },
        },
        No = [1, 0, 0, 1, 0, 0],
        lo = {},
        Fo = function (s) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === s || 'none' === s || !s;
        },
        ko = function (s) {
          var a = Vr(s, Vt);
          return Fo(a) ? No : a.substr(7).match(nt).map(Fe);
        },
        Us = function (s, a) {
          var v,
            D,
            x,
            M,
            l = s._gsap || wn(s),
            c = s.style,
            h = ko(s);
          return l.svg && s.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (h = [
                (x = s.transform.baseVal.consolidate().matrix).a,
                x.b,
                x.c,
                x.d,
                x.e,
                x.f,
              ]).join(',')
              ? No
              : h
            : (h === No &&
                !s.offsetParent &&
                s !== hi &&
                !l.svg &&
                ((x = c.display),
                (c.display = 'block'),
                (!(v = s.parentNode) || !s.offsetParent) &&
                  ((M = 1), (D = s.nextSibling), hi.appendChild(s)),
                (h = ko(s)),
                x ? (c.display = x) : js(s, 'display'),
                M && (D ? v.insertBefore(s, D) : v ? v.appendChild(s) : hi.removeChild(s))),
              a && h.length > 6 ? [h[0], h[1], h[4], h[5], h[12], h[13]] : h);
        },
        Lo = function (s, a, l, c, h, v) {
          var Ae,
            Be,
            je,
            D = s._gsap,
            x = h || Us(s, !0),
            M = D.xOrigin || 0,
            N = D.yOrigin || 0,
            z = D.xOffset || 0,
            G = D.yOffset || 0,
            j = x[0],
            te = x[1],
            q = x[2],
            _e = x[3],
            Ie = x[4],
            Ye = x[5],
            ce = a.split(' '),
            de = parseFloat(ce[0]) || 0,
            ve = parseFloat(ce[1]) || 0;
          l
            ? x !== No &&
              (Be = j * _e - te * q) &&
              ((je = de * (-te / Be) + ve * (j / Be) - (j * Ye - te * Ie) / Be),
              (de = de * (_e / Be) + ve * (-q / Be) + (q * Ye - _e * Ie) / Be),
              (ve = je))
            : ((de = (Ae = Oo(s)).x + (~ce[0].indexOf('%') ? (de / 100) * Ae.width : de)),
              (ve = Ae.y + (~(ce[1] || ce[0]).indexOf('%') ? (ve / 100) * Ae.height : ve))),
            c || (!1 !== c && D.smooth)
              ? ((D.xOffset = z + ((Ie = de - M) * j + (Ye = ve - N) * q) - Ie),
                (D.yOffset = G + (Ie * te + Ye * _e) - Ye))
              : (D.xOffset = D.yOffset = 0),
            (D.xOrigin = de),
            (D.yOrigin = ve),
            (D.smooth = !!c),
            (D.origin = a),
            (D.originIsAbsolute = !!l),
            (s.style[yn] = '0px 0px'),
            v &&
              (Gn(v, D, 'xOrigin', M, de),
              Gn(v, D, 'yOrigin', N, ve),
              Gn(v, D, 'xOffset', z, D.xOffset),
              Gn(v, D, 'yOffset', G, D.yOffset)),
            s.setAttribute('data-svg-origin', de + ' ' + ve);
        },
        Pi = function (s, a) {
          var l = s._gsap || new ti(s);
          if ('x' in l && !a && !l.uncache) return l;
          var M,
            N,
            z,
            G,
            j,
            te,
            q,
            _e,
            Ie,
            Ye,
            ce,
            de,
            ve,
            Ae,
            Be,
            Qe,
            je,
            ht,
            Lt,
            an,
            xn,
            vn,
            Yn,
            rn,
            Zt,
            Jn,
            Ir,
            wi,
            Hi,
            Vu,
            _s,
            Ys,
            c = s.style,
            h = l.scaleX < 0,
            v = 'px',
            D = 'deg',
            x = Vr(s, yn) || '0';
          return (
            (M = N = z = te = q = _e = Ie = Ye = ce = 0),
            (G = j = 1),
            (l.svg = !(!s.getCTM || !Ro(s))),
            (Ae = Us(s, l.svg)),
            l.svg &&
              ((rn = (!l.uncache || '0px 0px' === x) && !a && s.getAttribute('data-svg-origin')),
              Lo(s, rn || x, !!rn || l.originIsAbsolute, !1 !== l.smooth, Ae)),
            (de = l.xOrigin || 0),
            (ve = l.yOrigin || 0),
            Ae !== No &&
              ((ht = Ae[0]),
              (Lt = Ae[1]),
              (an = Ae[2]),
              (xn = Ae[3]),
              (M = vn = Ae[4]),
              (N = Yn = Ae[5]),
              6 === Ae.length
                ? ((G = Math.sqrt(ht * ht + Lt * Lt)),
                  (j = Math.sqrt(xn * xn + an * an)),
                  (te = ht || Lt ? Ns(Lt, ht) * Mi : 0),
                  (Ie = an || xn ? Ns(an, xn) * Mi + te : 0) && (j *= Math.abs(Math.cos(Ie * ns))),
                  l.svg && ((M -= de - (de * ht + ve * an)), (N -= ve - (de * Lt + ve * xn))))
                : ((Vu = Ae[7]),
                  (Ir = Ae[8]),
                  (wi = Ae[9]),
                  (_s = Ae[11]),
                  (M = Ae[12]),
                  (N = Ae[13]),
                  (z = Ae[14]),
                  (q = (Be = Ns((Ys = Ae[6]), (Hi = Ae[10]))) * Mi),
                  Be &&
                    ((rn = vn * (Qe = Math.cos(-Be)) + Ir * (je = Math.sin(-Be))),
                    (Zt = Yn * Qe + wi * je),
                    (Jn = Ys * Qe + Hi * je),
                    (Ir = vn * -je + Ir * Qe),
                    (wi = Yn * -je + wi * Qe),
                    (Hi = Ys * -je + Hi * Qe),
                    (_s = Vu * -je + _s * Qe),
                    (vn = rn),
                    (Yn = Zt),
                    (Ys = Jn)),
                  (_e = (Be = Ns(-an, Hi)) * Mi),
                  Be &&
                    ((Qe = Math.cos(-Be)),
                    (_s = xn * (je = Math.sin(-Be)) + _s * Qe),
                    (ht = rn = ht * Qe - Ir * je),
                    (Lt = Zt = Lt * Qe - wi * je),
                    (an = Jn = an * Qe - Hi * je)),
                  (te = (Be = Ns(Lt, ht)) * Mi),
                  Be &&
                    ((rn = ht * (Qe = Math.cos(Be)) + Lt * (je = Math.sin(Be))),
                    (Zt = vn * Qe + Yn * je),
                    (Lt = Lt * Qe - ht * je),
                    (Yn = Yn * Qe - vn * je),
                    (ht = rn),
                    (vn = Zt)),
                  q && Math.abs(q) + Math.abs(te) > 359.9 && ((q = te = 0), (_e = 180 - _e)),
                  (G = Fe(Math.sqrt(ht * ht + Lt * Lt + an * an))),
                  (j = Fe(Math.sqrt(Yn * Yn + Ys * Ys))),
                  (Be = Ns(vn, Yn)),
                  (Ie = Math.abs(Be) > 2e-4 ? Be * Mi : 0),
                  (ce = _s ? 1 / (_s < 0 ? -_s : _s) : 0)),
              l.svg &&
                ((rn = s.getAttribute('transform')),
                (l.forceCSS = s.setAttribute('transform', '') || !Fo(Vr(s, Vt))),
                rn && s.setAttribute('transform', rn))),
            Math.abs(Ie) > 90 &&
              Math.abs(Ie) < 270 &&
              (h
                ? ((G *= -1), (Ie += te <= 0 ? 180 : -180), (te += te <= 0 ? 180 : -180))
                : ((j *= -1), (Ie += Ie <= 0 ? 180 : -180))),
            (l.x =
              M -
              ((l.xPercent =
                M && (l.xPercent || (Math.round(s.offsetWidth / 2) === Math.round(-M) ? -50 : 0)))
                ? (s.offsetWidth * l.xPercent) / 100
                : 0) +
              v),
            (l.y =
              N -
              ((l.yPercent =
                N && (l.yPercent || (Math.round(s.offsetHeight / 2) === Math.round(-N) ? -50 : 0)))
                ? (s.offsetHeight * l.yPercent) / 100
                : 0) +
              v),
            (l.z = z + v),
            (l.scaleX = Fe(G)),
            (l.scaleY = Fe(j)),
            (l.rotation = Fe(te) + D),
            (l.rotationX = Fe(q) + D),
            (l.rotationY = Fe(_e) + D),
            (l.skewX = Ie + D),
            (l.skewY = Ye + D),
            (l.transformPerspective = ce + v),
            (l.zOrigin = parseFloat(x.split(' ')[2]) || 0) && (c[yn] = gi(x)),
            (l.xOffset = l.yOffset = 0),
            (l.force3D = Ke.force3D),
            (l.renderTransform = l.svg ? p : Za ? m : ss),
            (l.uncache = 0),
            l
          );
        },
        gi = function (s) {
          return (s = s.split(' '))[0] + ' ' + s[1];
        },
        fa = function (s, a, l) {
          var c = ut(a);
          return Fe(parseFloat(a) + parseFloat(fr(s, 'x', l + 'px', c))) + c;
        },
        ss = function (s, a) {
          (a.z = '0px'), (a.rotationY = a.rotationX = '0deg'), (a.force3D = 0), m(s, a);
        },
        mi = '0deg',
        os = '0px',
        y = ') ',
        m = function (s, a) {
          var l = a || this,
            c = l.xPercent,
            h = l.yPercent,
            v = l.x,
            D = l.y,
            x = l.z,
            M = l.rotation,
            N = l.rotationY,
            z = l.rotationX,
            G = l.skewX,
            j = l.skewY,
            te = l.scaleX,
            q = l.scaleY,
            _e = l.transformPerspective,
            Ie = l.force3D,
            Ye = l.target,
            ce = l.zOrigin,
            de = '',
            ve = ('auto' === Ie && s && 1 !== s) || !0 === Ie;
          if (ce && (z !== mi || N !== mi)) {
            var je,
              Ae = parseFloat(N) * ns,
              Be = Math.sin(Ae),
              Qe = Math.cos(Ae);
            (Ae = parseFloat(z) * ns),
              (je = Math.cos(Ae)),
              (v = fa(Ye, v, Be * je * -ce)),
              (D = fa(Ye, D, -Math.sin(Ae) * -ce)),
              (x = fa(Ye, x, Qe * je * -ce + ce));
          }
          _e !== os && (de += 'perspective(' + _e + y),
            (c || h) && (de += 'translate(' + c + '%, ' + h + '%) '),
            (ve || v !== os || D !== os || x !== os) &&
              (de +=
                x !== os || ve
                  ? 'translate3d(' + v + ', ' + D + ', ' + x + ') '
                  : 'translate(' + v + ', ' + D + y),
            M !== mi && (de += 'rotate(' + M + y),
            N !== mi && (de += 'rotateY(' + N + y),
            z !== mi && (de += 'rotateX(' + z + y),
            (G !== mi || j !== mi) && (de += 'skew(' + G + ', ' + j + y),
            (1 !== te || 1 !== q) && (de += 'scale(' + te + ', ' + q + y),
            (Ye.style[Vt] = de || 'translate(0, 0)');
        },
        p = function (s, a) {
          var ve,
            Ae,
            Be,
            Qe,
            je,
            l = a || this,
            c = l.xPercent,
            h = l.yPercent,
            v = l.x,
            D = l.y,
            x = l.rotation,
            M = l.skewX,
            N = l.skewY,
            z = l.scaleX,
            G = l.scaleY,
            j = l.target,
            te = l.xOrigin,
            q = l.yOrigin,
            _e = l.xOffset,
            Ie = l.yOffset,
            Ye = l.forceCSS,
            ce = parseFloat(v),
            de = parseFloat(D);
          (x = parseFloat(x)),
            (M = parseFloat(M)),
            (N = parseFloat(N)) && ((M += N = parseFloat(N)), (x += N)),
            x || M
              ? ((x *= ns),
                (M *= ns),
                (ve = Math.cos(x) * z),
                (Ae = Math.sin(x) * z),
                (Be = Math.sin(x - M) * -G),
                (Qe = Math.cos(x - M) * G),
                M &&
                  ((N *= ns),
                  (je = Math.tan(M - N)),
                  (Be *= je = Math.sqrt(1 + je * je)),
                  (Qe *= je),
                  N && ((je = Math.tan(N)), (ve *= je = Math.sqrt(1 + je * je)), (Ae *= je))),
                (ve = Fe(ve)),
                (Ae = Fe(Ae)),
                (Be = Fe(Be)),
                (Qe = Fe(Qe)))
              : ((ve = z), (Qe = G), (Ae = Be = 0)),
            ((ce && !~(v + '').indexOf('px')) || (de && !~(D + '').indexOf('px'))) &&
              ((ce = fr(j, 'x', v, 'px')), (de = fr(j, 'y', D, 'px'))),
            (te || q || _e || Ie) &&
              ((ce = Fe(ce + te - (te * ve + q * Be) + _e)),
              (de = Fe(de + q - (te * Ae + q * Qe) + Ie))),
            (c || h) &&
              ((je = j.getBBox()),
              (ce = Fe(ce + (c / 100) * je.width)),
              (de = Fe(de + (h / 100) * je.height))),
            j.setAttribute(
              'transform',
              (je = 'matrix(' + ve + ',' + Ae + ',' + Be + ',' + Qe + ',' + ce + ',' + de + ')'),
            ),
            Ye && (j.style[Vt] = je);
        },
        w = function (s, a, l, c, h, v) {
          var G,
            j,
            D = 360,
            x = se(h),
            M = parseFloat(h) * (x && ~h.indexOf('rad') ? Mi : 1),
            N = v ? M * v : M - c,
            z = c + N + 'deg';
          return (
            x &&
              ('short' === (G = h.split('_')[1]) && (N %= D) != N % 180 && (N += N < 0 ? D : -D),
              'cw' === G && N < 0
                ? (N = ((N + D * Ga) % D) - ~~(N / D) * D)
                : 'ccw' === G && N > 0 && (N = ((N - D * Ga) % D) - ~~(N / D) * D)),
            (s._pt = j = new It(s._pt, a, l, c, N, Ka)),
            (j.e = z),
            (j.u = 'deg'),
            s._props.push(l),
            j
          );
        },
        S = function (s, a) {
          for (var l in a) s[l] = a[l];
          return s;
        },
        A = function (s, a, l) {
          var D,
            x,
            M,
            N,
            z,
            G,
            te,
            c = S({}, l._gsap),
            v = l.style;
          for (x in (c.svg
            ? ((M = l.getAttribute('transform')),
              l.setAttribute('transform', ''),
              (v[Vt] = a),
              (D = Pi(l, 1)),
              js(l, Vt),
              l.setAttribute('transform', M))
            : ((M = getComputedStyle(l)[Vt]), (v[Vt] = a), (D = Pi(l, 1)), (v[Vt] = M)),
          Wn))
            (M = c[x]) !== (N = D[x]) &&
              'perspective,force3D,transformOrigin,svgOrigin'.indexOf(x) < 0 &&
              ((z = ut(M) !== (te = ut(N)) ? fr(l, x, M, te) : parseFloat(M)),
              (G = parseFloat(N)),
              (s._pt = new It(s._pt, D, x, z, G - z, Ya)),
              (s._pt.u = te || 0),
              s._props.push(x));
          S(D, c);
        };
      Et('padding,margin,Width,Radius', function (d, s) {
        var a = 'Top',
          l = 'Right',
          c = 'Bottom',
          h = 'Left',
          v = (s < 3 ? [a, l, c, h] : [a + h, a + l, c + l, c + h]).map(function (D) {
            return s < 2 ? d + D : 'border' + D + d;
          });
        da[s > 1 ? 'border' + d : d] = function (D, x, M, N, z) {
          var G, j;
          if (arguments.length < 4)
            return (
              (G = v.map(function (te) {
                return is(D, te, M);
              })),
              5 === (j = G.join(' ')).split(G[0]).length ? G[0] : j
            );
          (G = (N + '').split(' ')),
            (j = {}),
            v.forEach(function (te, q) {
              return (j[te] = G[q] = G[q] || G[((q - 1) / 2) | 0]);
            }),
            D.init(x, j, z);
        };
      });
      var B = {
        name: 'css',
        register: Ri,
        targetTest: function (s) {
          return s.style && s.nodeType;
        },
        init: function (s, a, l, c, h) {
          var M,
            N,
            z,
            G,
            j,
            te,
            q,
            _e,
            Ie,
            Ye,
            ce,
            de,
            ve,
            Ae,
            Be,
            v = this._props,
            D = s.style,
            x = l.vars.startAt;
          for (q in (Ps || Ri(), a))
            if ('autoRound' !== q && ((N = a[q]), !be[q] || !Xi(q, a, l, c, s, h)))
              if (
                ((te = da[q]),
                'function' == (j = typeof N) && (j = typeof (N = N.call(l, c, s, h))),
                'string' === j && ~N.indexOf('random(') && (N = Ki(N)),
                te)
              )
                te(this, s, q, N, l) && (Be = 1);
              else if ('--' === q.substr(0, 2))
                (M = (getComputedStyle(s).getPropertyValue(q) + '').trim()),
                  (N += ''),
                  (Jr.lastIndex = 0),
                  Jr.test(M) || ((_e = ut(M)), (Ie = ut(N))),
                  Ie ? _e !== Ie && (M = fr(s, q, M, Ie) + Ie) : _e && (N += _e),
                  this.add(D, 'setProperty', M, N, c, h, 0, 0, q),
                  v.push(q);
              else if ('undefined' !== j) {
                if (
                  (x && q in x
                    ? ((M = 'function' == typeof x[q] ? x[q].call(l, c, s, h) : x[q]),
                      q in Ke.units && !ut(M) && (M += Ke.units[q]),
                      '=' === (M + '').charAt(1) && (M = is(s, q)))
                    : (M = is(s, q)),
                  (G = parseFloat(M)),
                  (Ye = 'string' === j && '=' === N.charAt(1) ? +(N.charAt(0) + '1') : 0) &&
                    (N = N.substr(2)),
                  (z = parseFloat(N)),
                  q in ri &&
                    ('autoAlpha' === q &&
                      (1 === G && 'hidden' === is(s, 'visibility') && z && (G = 0),
                      Gn(
                        this,
                        D,
                        'visibility',
                        G ? 'inherit' : 'hidden',
                        z ? 'inherit' : 'hidden',
                        !z,
                      )),
                    'scale' !== q &&
                      'transform' !== q &&
                      ~(q = ri[q]).indexOf(',') &&
                      (q = q.split(',')[0])),
                  (ce = q in Wn))
                )
                  if (
                    (de ||
                      (((ve = s._gsap).renderTransform && !a.parseTransform) ||
                        Pi(s, a.parseTransform),
                      (Ae = !1 !== a.smoothOrigin && ve.smooth),
                      ((de = this._pt =
                        new It(this._pt, D, Vt, 0, 1, ve.renderTransform, ve, 0, -1)).dep = 1)),
                    'scale' === q)
                  )
                    (this._pt = new It(
                      this._pt,
                      ve,
                      'scaleY',
                      ve.scaleY,
                      (Ye ? Ye * z : z - ve.scaleY) || 0,
                    )),
                      v.push('scaleY', q),
                      (q += 'X');
                  else {
                    if ('transformOrigin' === q) {
                      (N = iu(N)),
                        ve.svg
                          ? Lo(s, N, 0, Ae, 0, this)
                          : ((Ie = parseFloat(N.split(' ')[2]) || 0) !== ve.zOrigin &&
                              Gn(this, ve, 'zOrigin', ve.zOrigin, Ie),
                            Gn(this, D, q, gi(M), gi(N)));
                      continue;
                    }
                    if ('svgOrigin' === q) {
                      Lo(s, N, 1, Ae, 0, this);
                      continue;
                    }
                    if (q in lo) {
                      w(this, ve, q, G, N, Ye);
                      continue;
                    }
                    if ('smoothOrigin' === q) {
                      Gn(this, ve, 'smooth', ve.smooth, N);
                      continue;
                    }
                    if ('force3D' === q) {
                      ve[q] = N;
                      continue;
                    }
                    if ('transform' === q) {
                      A(this, N, s);
                      continue;
                    }
                  }
                else q in D || (q = Ls(q) || q);
                if (ce || ((z || 0 === z) && (G || 0 === G) && !Mo.test(N) && q in D))
                  z || (z = 0),
                    (_e = (M + '').substr((G + '').length)) !==
                      (Ie = ut(N) || (q in Ke.units ? Ke.units[q] : _e)) && (G = fr(s, q, M, Ie)),
                    (this._pt = new It(
                      this._pt,
                      ce ? ve : D,
                      q,
                      G,
                      Ye ? Ye * z : z - G,
                      ce || ('px' !== Ie && 'zIndex' !== q) || !1 === a.autoRound ? Ya : ua,
                    )),
                    (this._pt.u = Ie || 0),
                    _e !== Ie && ((this._pt.b = M), (this._pt.r = Fs));
                else if (q in D) ao.call(this, s, q, M, N);
                else {
                  if (!(q in s)) {
                    Kr(q, N);
                    continue;
                  }
                  this.add(s, q, M || s[q], N, c, h);
                }
                v.push(q);
              }
          Be && Ft(this);
        },
        get: is,
        aliases: ri,
        getSetter: function (s, a, l) {
          var c = ri[a];
          return (
            c && c.indexOf(',') < 0 && (a = c),
            a in Wn && a !== yn && (s._gsap.x || is(s, 'x'))
              ? l && xo === l
                ? 'scale' === a
                  ? ru
                  : nu
                : (xo = l || {}) && ('scale' === a ? Qn : Oi)
              : s.style && !ye(s.style[a])
              ? Qa
              : ~a.indexOf('-')
              ? Ao
              : P(s, a)
          );
        },
        core: { _removeProperty: js, _getMatrix: Us },
      };
      (Kn.utils.checkPrefix = Ls),
        (function (d, s, a, l) {
          var c = Et(
            d +
              ',' +
              s +
              ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
            function (h) {
              Wn[h] = 1;
            },
          );
          Et(s, function (h) {
            (Ke.units[h] = 'deg'), (lo[h] = 1);
          }),
            (ri[c[13]] = d + ',' + s),
            Et(
              '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
              function (h) {
                var v = h.split(':');
                ri[v[1]] = c[v[0]];
              },
            );
        })(
          'x,y,z,scale,scaleX,scaleY,xPercent,yPercent',
          'rotation,rotationX,rotationY,skewX,skewY',
        ),
        Et(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (d) {
            Ke.units[d] = 'px';
          },
        ),
        Kn.registerPlugin(B);
      var $ = Kn.registerPlugin(B) || Kn;
      const et = ['cursorInner'],
        gt = ['feTurbulence'],
        kt = ['svg'],
        dn = ['*'];
      let Wt = (() => {
          class d {
            constructor(a) {
              (this.renderer = a),
                (this.radius = 40),
                (this.color = 'var(--accent-alpha)'),
                (this.hoverElements = []),
                (this.mouse = { x: 0, y: 0 }),
                (this.filterId = '#filter-1'),
                (this.primitiveValues = { turbulence: 0 }),
                (this.renderedStyles = {
                  tx: { previous: 0, current: 0, amt: 0.2 },
                  ty: { previous: 0, current: 0, amt: 0.2 },
                  radius: { previous: this.radius, current: this.radius, amt: 0.5 },
                }),
                (this.listeners = []),
                (this.onMouseMoveEv = () => {
                  (this.renderedStyles.tx.previous = this.mouse.x - this.bounds.width / 2),
                    (this.renderedStyles.ty.previous = this.mouse.y - this.bounds.height / 2),
                    $.to(this.svg.nativeElement, {
                      duration: 0.9,
                      ease: 'Power3.easeOut',
                      opacity: 1,
                    }),
                    requestAnimationFrame(() => this.render());
                });
            }
            onMouseMove(a) {
              this.mouse = ((d) => {
                let s = 0,
                  a = 0;
                return (
                  d.pageX || d.pageY
                    ? ((s = d.pageX), (a = d.pageY))
                    : ((s = d.clientX + document.body.scrollLeft),
                      (a = d.clientY + document.body.scrollTop)),
                  { x: s, y: a }
                );
              })(a);
            }
            ngAfterContentInit() {
              this.createTimeline(),
                (this.bounds = this.svg.nativeElement.getBoundingClientRect()),
                this.onMouseMoveEv();
            }
            addHoverListeners(a) {
              a.forEach(({ nativeElement: l }) => {
                const c = this.renderer.listen(l, 'mouseenter', () => this.enter()),
                  h = this.renderer.listen(l, 'mouseleave', () => this.leave());
                this.listeners = [...this.listeners, c, h];
              });
            }
            addHoverElements(a) {
              (this.hoverElements = [...this.hoverElements, ...a]), this.addHoverListeners(a);
            }
            removeHoverElements(a) {
              a.forEach((l) => this.hoverElements.splice(this.hoverElements.indexOf(l), 1)),
                this.listeners.forEach((l) => l()),
                this.addHoverListeners(this.hoverElements);
            }
            render() {
              (this.renderedStyles.tx.current = this.mouse.x - this.bounds.width / 2),
                (this.renderedStyles.ty.current = this.mouse.y - this.bounds.height / 2);
              for (const v in this.renderedStyles)
                this.renderedStyles[v].previous = Ve(
                  this.renderedStyles[v].previous,
                  this.renderedStyles[v].current,
                  this.renderedStyles[v].amt,
                );
              this.renderer.setStyle(
                this.svg.nativeElement,
                'transform',
                `translateX(${this.renderedStyles.tx.previous}px) translateY(${this.renderedStyles.ty.previous}px)`,
              ),
                this.renderer.setAttribute(
                  this.cursorInner.nativeElement,
                  'r',
                  String(this.renderedStyles.radius.current),
                ),
                requestAnimationFrame(() => this.render());
            }
            createTimeline() {
              this.tl = $.timeline({
                paused: !0,
                onStart: () => {
                  this.renderer.setStyle(
                    this.cursorInner.nativeElement,
                    'filter',
                    `url(${this.filterId}`,
                  );
                },
                onUpdate: () =>
                  this.renderer.setAttribute(
                    this.feTurbulence.nativeElement,
                    'baseFrequency',
                    String(this.primitiveValues.turbulence),
                  ),
                onComplete: () => {
                  this.renderer.setStyle(this.cursorInner.nativeElement, 'filter', 'none');
                },
              }).to(this.primitiveValues, {
                duration: 0.4,
                startAt: { turbulence: 0.09 },
                turbulence: 0,
              });
            }
            enter() {
              (this.renderedStyles.radius.current = 1.2 * this.radius), this.tl.restart();
            }
            leave() {
              (this.renderedStyles.radius.current = this.radius), this.tl.progress(1).kill();
            }
            ngOnDestroy() {
              this.listeners.forEach((a) => a());
            }
          }
          return (
            (d.ɵfac = function (a) {
              return new (a || d)(_.Y36(_.Qsj));
            }),
            (d.ɵcmp = _.Xpm({
              type: d,
              selectors: [['md-cursor']],
              viewQuery: function (a, l) {
                if ((1 & a && (_.Gf(et, 7), _.Gf(gt, 7), _.Gf(kt, 7)), 2 & a)) {
                  let c;
                  _.iGM((c = _.CRH())) && (l.cursorInner = c.first),
                    _.iGM((c = _.CRH())) && (l.feTurbulence = c.first),
                    _.iGM((c = _.CRH())) && (l.svg = c.first);
                }
              },
              hostBindings: function (a, l) {
                1 & a &&
                  _.NdJ(
                    'mousemove',
                    function (h) {
                      return l.onMouseMove(h);
                    },
                    !1,
                    _.Jf7,
                  );
              },
              inputs: { radius: 'radius', color: 'color' },
              ngContentSelectors: dn,
              decls: 11,
              vars: 2,
              consts: [
                ['width', '220', 'height', '220', 'viewBox', '0 0 220 220', 1, 'cursor'],
                ['svg', ''],
                [
                  'id',
                  'filter-1',
                  'x',
                  '-50%',
                  'y',
                  '-50%',
                  'width',
                  '200%',
                  'height',
                  '200%',
                  'filterUnits',
                  'objectBoundingBox',
                ],
                ['type', 'fractalNoise', 'baseFrequency', '0', 'numOctaves', '1', 'result', 'warp'],
                ['feTurbulence', ''],
                ['dx', '-30', 'result', 'warpOffset'],
                [
                  'xChannelSelector',
                  'R',
                  'yChannelSelector',
                  'G',
                  'scale',
                  '30',
                  'in',
                  'SourceGraphic',
                  'in2',
                  'warpOffset',
                ],
                ['cx', '110', 'cy', '110', 'r', '60', 1, 'cursor-inner'],
                ['cursorInner', ''],
              ],
              template: function (a, l) {
                1 & a &&
                  (_.F$t(),
                  _.Hsn(0),
                  _.O4$(),
                  _.TgZ(1, 'svg', 0, 1),
                  _.TgZ(3, 'defs'),
                  _.TgZ(4, 'filter', 2),
                  _._UZ(5, 'feTurbulence', 3, 4),
                  _._UZ(7, 'feOffset', 5),
                  _._UZ(8, 'feDisplacementMap', 6),
                  _.qZA(),
                  _.qZA(),
                  _._UZ(9, 'circle', 7, 8),
                  _.qZA()),
                  2 & a && (_.xp6(9), _.Udp('stroke', l.color));
              },
              styles: [
                'svg[_ngcontent-%COMP%]{opacity:.3}.cursor[_ngcontent-%COMP%]{display:none}@media (any-pointer: fine){.cursor[_ngcontent-%COMP%]{display:block;left:0;opacity:0;pointer-events:none;position:fixed;top:0}.cursor-inner[_ngcontent-%COMP%]{fill:transparent;mix-blend-mode:lighten;stroke-width:1px}}',
              ],
            })),
            d
          );
        })(),
        ii = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵmod = _.oAB({ type: d })),
            (d.ɵinj = _.cJS({})),
            d
          );
        })();
      function jr(d) {
        return Array.isArray(d) ? d : [d];
      }
      var uo = k(6889),
        tf = k(4544),
        ou = k(9044),
        qa = k(1776),
        ls = k(4294),
        br = k(4689),
        ki = k(9162),
        co = (function (d) {
          function s(a, l) {
            return d.call(this) || this;
          }
          return (
            (0, ki.ZT)(s, d),
            (s.prototype.schedule = function (a, l) {
              return void 0 === l && (l = 0), this;
            }),
            s
          );
        })(k(8839).w0),
        lu = {
          setInterval: function () {
            for (var d = [], s = 0; s < arguments.length; s++) d[s] = arguments[s];
            var a = lu.delegate;
            return ((null == a ? void 0 : a.setInterval) || setInterval).apply(
              void 0,
              (0, ki.ev)([], (0, ki.CR)(d)),
            );
          },
          clearInterval: function (d) {
            var s = lu.delegate;
            return ((null == s ? void 0 : s.clearInterval) || clearInterval)(d);
          },
          delegate: void 0,
        },
        lg = k(5850),
        nf = (function (d) {
          function s(a, l) {
            var c = d.call(this, a, l) || this;
            return (c.scheduler = a), (c.work = l), (c.pending = !1), c;
          }
          return (
            (0, ki.ZT)(s, d),
            (s.prototype.schedule = function (a, l) {
              if ((void 0 === l && (l = 0), this.closed)) return this;
              this.state = a;
              var c = this.id,
                h = this.scheduler;
              return (
                null != c && (this.id = this.recycleAsyncId(h, c, l)),
                (this.pending = !0),
                (this.delay = l),
                (this.id = this.id || this.requestAsyncId(h, this.id, l)),
                this
              );
            }),
            (s.prototype.requestAsyncId = function (a, l, c) {
              return void 0 === c && (c = 0), lu.setInterval(a.flush.bind(a, this), c);
            }),
            (s.prototype.recycleAsyncId = function (a, l, c) {
              if ((void 0 === c && (c = 0), null != c && this.delay === c && !1 === this.pending))
                return l;
              lu.clearInterval(l);
            }),
            (s.prototype.execute = function (a, l) {
              if (this.closed) return new Error('executing a cancelled action');
              this.pending = !1;
              var c = this._execute(a, l);
              if (c) return c;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (s.prototype._execute = function (a, l) {
              var h,
                c = !1;
              try {
                this.work(a);
              } catch (v) {
                (c = !0), (h = (!!v && v) || new Error(v));
              }
              if (c) return this.unsubscribe(), h;
            }),
            (s.prototype.unsubscribe = function () {
              if (!this.closed) {
                var l = this.id,
                  c = this.scheduler,
                  h = c.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, lg.P)(h, this),
                  null != l && (this.id = this.recycleAsyncId(c, l, null)),
                  (this.delay = null),
                  d.prototype.unsubscribe.call(this);
              }
            }),
            s
          );
        })(co),
        Ec = {
          now: function () {
            return (Ec.delegate || Date).now();
          },
          delegate: void 0,
        },
        Dc = (function () {
          function d(s, a) {
            void 0 === a && (a = d.now), (this.schedulerActionCtor = s), (this.now = a);
          }
          return (
            (d.prototype.schedule = function (s, a, l) {
              return void 0 === a && (a = 0), new this.schedulerActionCtor(this, s).schedule(l, a);
            }),
            (d.now = Ec.now),
            d
          );
        })(),
        rf = new ((function (d) {
          function s(a, l) {
            void 0 === l && (l = Dc.now);
            var c = d.call(this, a, l) || this;
            return (c.actions = []), (c._active = !1), (c._scheduled = void 0), c;
          }
          return (
            (0, ki.ZT)(s, d),
            (s.prototype.flush = function (a) {
              var l = this.actions;
              if (this._active) l.push(a);
              else {
                var c;
                this._active = !0;
                do {
                  if ((c = a.execute(a.state, a.delay))) break;
                } while ((a = l.shift()));
                if (((this._active = !1), c)) {
                  for (; (a = l.shift()); ) a.unsubscribe();
                  throw c;
                }
              }
            }),
            s
          );
        })(Dc))(nf),
        Sc = k(4297),
        Tc = k(5076),
        fo = k(5207),
        cg = k(9978),
        dg = k(5929),
        of = k(6186);
      function fg(d) {
        return (0, Sc.e)(function (s, a) {
          (0, dg.Xf)(d).subscribe(
            new Tc.Q(
              a,
              function () {
                return a.complete();
              },
              of.Z,
            ),
          ),
            !a.closed && s.subscribe(a);
        });
      }
      var ho = k(8583);
      let po;
      try {
        po = 'undefined' != typeof Intl && Intl.v8BreakIterator;
      } catch (d) {
        po = !1;
      }
      let af = (() => {
          class d {
            constructor(a) {
              (this._platformId = a),
                (this.isBrowser = this._platformId
                  ? (0, ho.NF)(this._platformId)
                  : 'object' == typeof document && !!document),
                (this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent)),
                (this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent)),
                (this.BLINK =
                  this.isBrowser &&
                  !(!window.chrome && !po) &&
                  'undefined' != typeof CSS &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.WEBKIT =
                  this.isBrowser &&
                  /AppleWebKit/i.test(navigator.userAgent) &&
                  !this.BLINK &&
                  !this.EDGE &&
                  !this.TRIDENT),
                (this.IOS =
                  this.isBrowser &&
                  /iPad|iPhone|iPod/.test(navigator.userAgent) &&
                  !('MSStream' in window)),
                (this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent)),
                (this.ANDROID =
                  this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT),
                (this.SAFARI =
                  this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT);
            }
          }
          return (
            (d.ɵfac = function (a) {
              return new (a || d)(_.LFG(_.Lbi));
            }),
            (d.ɵprov = _.Yz7({
              factory: function () {
                return new d(_.LFG(_.Lbi));
              },
              token: d,
              providedIn: 'root',
            })),
            d
          );
        })(),
        Hr = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵmod = _.oAB({ type: d })),
            (d.ɵinj = _.cJS({})),
            d
          );
        })();
      const Ja = new Set();
      let vi,
        df = (() => {
          class d {
            constructor(a) {
              (this._platform = a),
                (this._matchMedia =
                  this._platform.isBrowser && window.matchMedia
                    ? window.matchMedia.bind(window)
                    : ff);
            }
            matchMedia(a) {
              return (
                this._platform.WEBKIT &&
                  (function (d) {
                    if (!Ja.has(d))
                      try {
                        vi ||
                          ((vi = document.createElement('style')),
                          vi.setAttribute('type', 'text/css'),
                          document.head.appendChild(vi)),
                          vi.sheet &&
                            (vi.sheet.insertRule(`@media ${d} {.fx-query-test{ }}`, 0), Ja.add(d));
                      } catch (s) {
                        console.error(s);
                      }
                  })(a),
                this._matchMedia(a)
              );
            }
          }
          return (
            (d.ɵfac = function (a) {
              return new (a || d)(_.LFG(af));
            }),
            (d.ɵprov = _.Yz7({
              factory: function () {
                return new d(_.LFG(af));
              },
              token: d,
              providedIn: 'root',
            })),
            d
          );
        })();
      function ff(d) {
        return {
          matches: 'all' === d || '' === d,
          media: d,
          addListener: () => {},
          removeListener: () => {},
        };
      }
      let hf = (() => {
        class d {
          constructor(a, l) {
            (this._mediaMatcher = a),
              (this._zone = l),
              (this._queries = new Map()),
              (this._destroySubject = new uo.x());
          }
          ngOnDestroy() {
            this._destroySubject.next(), this._destroySubject.complete();
          }
          isMatched(a) {
            return Ic(jr(a)).some((c) => this._registerQuery(c).mql.matches);
          }
          observe(a) {
            const c = Ic(jr(a)).map((v) => this._registerQuery(v).observable);
            let h = (0, tf.a)(c);
            return (
              (h = (0, ou.z)(
                h.pipe((0, ls.q)(1)),
                h.pipe(
                  (0, br.h)(function (s, a) {
                    return 1 <= a;
                  }),
                  (function (d, s) {
                    return (
                      void 0 === s && (s = rf),
                      (0, Sc.e)(function (a, l) {
                        var c = null,
                          h = null,
                          v = null,
                          D = function () {
                            if (c) {
                              c.unsubscribe(), (c = null);
                              var M = h;
                              (h = null), l.next(M);
                            }
                          };
                        function x() {
                          var M = v + 0,
                            N = s.now();
                          if (N < M) return (c = this.schedule(void 0, M - N)), void l.add(c);
                          D();
                        }
                        a.subscribe(
                          new Tc.Q(
                            l,
                            function (M) {
                              (h = M), (v = s.now()), c || ((c = s.schedule(x, 0)), l.add(c));
                            },
                            function () {
                              D(), l.complete();
                            },
                            void 0,
                            function () {
                              h = c = null;
                            },
                          ),
                        );
                      })
                    );
                  })(),
                ),
              )),
              h.pipe(
                (0, fo.U)((v) => {
                  const D = { matches: !1, breakpoints: {} };
                  return (
                    v.forEach(({ matches: x, query: M }) => {
                      (D.matches = D.matches || x), (D.breakpoints[M] = x);
                    }),
                    D
                  );
                }),
              )
            );
          }
          _registerQuery(a) {
            if (this._queries.has(a)) return this._queries.get(a);
            const l = this._mediaMatcher.matchMedia(a),
              h = {
                observable: new qa.y((v) => {
                  const D = (x) => this._zone.run(() => v.next(x));
                  return (
                    l.addListener(D),
                    () => {
                      l.removeListener(D);
                    }
                  );
                }).pipe(
                  (0, cg.O)(l),
                  (0, fo.U)(({ matches: v }) => ({ query: a, matches: v })),
                  fg(this._destroySubject),
                ),
                mql: l,
              };
            return this._queries.set(a, h), h;
          }
        }
        return (
          (d.ɵfac = function (a) {
            return new (a || d)(_.LFG(df), _.LFG(_.R0b));
          }),
          (d.ɵprov = _.Yz7({
            factory: function () {
              return new d(_.LFG(df), _.LFG(_.R0b));
            },
            token: d,
            providedIn: 'root',
          })),
          d
        );
      })();
      function Ic(d) {
        return d
          .map((s) => s.split(','))
          .reduce((s, a) => s.concat(a))
          .map((s) => s.trim());
      }
      const gf = ['*'];
      let ma = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵcmp = _.Xpm({
              type: d,
              selectors: [['md-logo']],
              ngContentSelectors: gf,
              decls: 5,
              vars: 0,
              consts: [
                [
                  'width',
                  '33',
                  'height',
                  '32',
                  'viewBox',
                  '0 0 33 32',
                  'fill',
                  'none',
                  'xmlns',
                  'http://www.w3.org/2000/svg',
                ],
                [
                  'd',
                  'M32.7197 13.3643C33.2906 16.4421 32.9645 19.3839 31.9678 22H28.2084C31.5001 15.4457 28.5709 6.88131 20.88 4.17463C16.4924 2.63051 11.6032 3.51352 8.0542 6.49107C3.17958 10.5808 2.33016 17.0123 4.8038 22H2.93073H1.05766C0.719088 21.1077 0.4576 20.1792 0.280247 19.2231C-2.00492 6.90196 10.0833 -3.23985 22.0391 0.967799C27.5877 2.92059 31.6592 7.6461 32.7197 13.3643Z',
                  'fill',
                  'white',
                ],
                [
                  'd',
                  'M10.8337 31.0323C7.07157 29.7363 3.97429 27.2187 2 24H6.28239C7.72546 25.6636 9.65077 27.0106 12.0176 27.8259C16.4992 29.3698 21.4932 28.4869 25.1183 25.5098C25.6953 25.036 26.2169 24.5308 26.6846 24H31C27.1091 30.2943 18.9416 33.8255 10.8337 31.0323Z',
                  'fill',
                  'var(--primary)',
                ],
                [
                  'd',
                  'M9.79743 21.7242L16.5998 10.0902L23.274 21.7983L9.79743 21.7242Z',
                  'fill',
                  'var(--primary)',
                ],
              ],
              template: function (a, l) {
                1 & a &&
                  (_.F$t(),
                  _.O4$(),
                  _.TgZ(0, 'svg', 0),
                  _._UZ(1, 'path', 1),
                  _._UZ(2, 'path', 2),
                  _._UZ(3, 'path', 3),
                  _.qZA(),
                  _.Hsn(4));
              },
              styles: [
                '[_nghost-%COMP%]{align-items:center;display:flex;font-family:"Oleo Script",cursive;font-size:1.5rem}svg[_ngcontent-%COMP%]{margin-right:.5rem}',
              ],
            })),
            d
          );
        })(),
        ya = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵmod = _.oAB({ type: d })),
            (d.ɵinj = _.cJS({})),
            d
          );
        })();
      const Xa = ['hover'];
      function hg(d, s) {
        if (1 & d) {
          const a = _.EpF();
          _.TgZ(0, 'i', 3),
            _.NdJ('click', function () {
              return _.CHM(a), _.oxw(2).toggleHidden();
            }),
            _.qZA();
        }
      }
      function va(d, s) {
        if (1 & d) {
          const a = _.EpF();
          _.TgZ(0, 'md-container'),
            _.TgZ(1, 'md-logo'),
            _._uU(2, 'abelfubu'),
            _.qZA(),
            _.TgZ(3, 'nav', 1),
            _.NdJ('click', function () {
              return _.CHM(a), _.oxw().toggleHidden();
            }),
            _.TgZ(4, 'ul'),
            _.Hsn(5),
            _.qZA(),
            _.qZA(),
            _.YNc(6, hg, 1, 0, 'i', 2),
            _.qZA();
        }
        if (2 & d) {
          const a = s.ngIf,
            l = _.oxw();
          _.xp6(3),
            _.ekj('mobile', a.matches)('hidden', a.matches && l.hidden),
            _.xp6(3),
            _.Q6J('ngIf', a.matches);
        }
      }
      const cu = ['*'];
      let Vo = (() => {
          class d {
            constructor(a, l) {
              (this.host = a),
                (this.observer = l),
                (this.isMatched$ = this.observer.observe('(max-width: 599.98px)')),
                (this.hidden = !0);
            }
            ngAfterContentInit() {
              this.host.addHoverElements(this.lis);
            }
            toggleHidden() {
              this.hidden = !this.hidden;
            }
          }
          return (
            (d.ɵfac = function (a) {
              return new (a || d)(_.Y36(Wt), _.Y36(hf));
            }),
            (d.ɵcmp = _.Xpm({
              type: d,
              selectors: [['md-header']],
              contentQueries: function (a, l, c) {
                if ((1 & a && _.Suo(c, Xa, 4), 2 & a)) {
                  let h;
                  _.iGM((h = _.CRH())) && (l.lis = h);
                }
              },
              ngContentSelectors: cu,
              decls: 2,
              vars: 3,
              consts: [
                [4, 'ngIf'],
                [3, 'click'],
                ['class', 'fas fa-bars', 3, 'click', 4, 'ngIf'],
                [1, 'fas', 'fa-bars', 3, 'click'],
              ],
              template: function (a, l) {
                1 & a && (_.F$t(), _.YNc(0, va, 7, 5, 'md-container', 0), _.ALo(1, 'async')),
                  2 & a && _.Q6J('ngIf', _.lcZ(1, 1, l.isMatched$));
              },
              directives: [ho.O5, ie, ma],
              pipes: [ho.Ov],
              styles: [
                '@charset "UTF-8";@font-face{font-family:"Hand";src:url(DK.5e250198ea7b4519ff62.ttf)}@font-face{font-family:"Fira";src:url(Fira.6b9962fb8abe11686753.ttf)}[_nghost-%COMP%]{background-color:var(--dark);box-shadow:0 1px 6px 1px #23232350;font-family:"Inconsolata",monospace;height:4.5rem}md-container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}nav.mobile[_ngcontent-%COMP%]{background-color:var(--dark);display:grid;font-size:3rem;inset:0;justify-content:center;opacity:1;padding-top:40vh;position:fixed;transform:translate(0);transition:transform .5s ease,opacity .5s ease;z-index:1}nav.mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column}nav.mobile[_ngcontent-%COMP%]  li, nav.mobile[_ngcontent-%COMP%]  span{padding:2rem 0}nav.mobile[_ngcontent-%COMP%]:before{content:"\\f00d";cursor:pointer;font-family:"Font Awesome 5 Free";font-weight:900;inset:6.25rem 0 0 0;margin:auto;position:absolute;width:1rem}ul[_ngcontent-%COMP%]{align-items:center;counter-reset:css-counter 0;display:flex;list-style:none}ul[_ngcontent-%COMP%]  li{counter-increment:css-counter 1;cursor:pointer;margin-left:1rem}ul[_ngcontent-%COMP%]  li:hover{text-decoration:underline}ul[_ngcontent-%COMP%]  li:before{color:var(--primary);content:"0" counter(css-counter) "."}nav.mobile.hidden[_ngcontent-%COMP%]{opacity:0;transform:translate(100%)}.fa-bars[_ngcontent-%COMP%]{cursor:pointer}',
              ],
            })),
            d
          );
        })(),
        Mc = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵmod = _.oAB({ type: d })),
            (d.ɵinj = _.cJS({ imports: [[ho.ez, ya, oe, Hr]] })),
            d
          );
        })();
      const mf = ['hover'];
      let yf = (() => {
          class d {
            constructor(a) {
              this.host = a;
            }
            ngAfterViewInit() {
              this.host.addHoverElements(this.hoverEls);
            }
            ngOnDestroy() {
              this.host.removeHoverElements(this.hoverEls);
            }
          }
          return (
            (d.ɵfac = function (a) {
              return new (a || d)(_.Y36(Wt));
            }),
            (d.ɵcmp = _.Xpm({
              type: d,
              selectors: [['md-social']],
              viewQuery: function (a, l) {
                if ((1 & a && _.Gf(mf, 5), 2 & a)) {
                  let c;
                  _.iGM((c = _.CRH())) && (l.hoverEls = c);
                }
              },
              decls: 18,
              vars: 0,
              consts: [
                [1, 'left'],
                ['href', 'https://www.linkedin.com/in/abelfubu/', 'target', '_blank'],
                ['hover', ''],
                [1, 'fab', 'fa-linkedin'],
                ['href', 'https://twitter.com/abelfubu', 'target', '_blank'],
                [1, 'fab', 'fa-twitter-square'],
                ['href', 'https://github.com/abelfubu', 'target', '_blank'],
                [1, 'fab', 'fa-github-square'],
                [1, 'right'],
                ['href', '', 'target', '_blank'],
              ],
              template: function (a, l) {
                1 & a &&
                  (_.TgZ(0, 'div', 0),
                  _.TgZ(1, 'ul'),
                  _.TgZ(2, 'li'),
                  _.TgZ(3, 'a', 1, 2),
                  _._UZ(5, 'i', 3),
                  _.qZA(),
                  _.qZA(),
                  _.TgZ(6, 'li'),
                  _.TgZ(7, 'a', 4, 2),
                  _._UZ(9, 'i', 5),
                  _.qZA(),
                  _.qZA(),
                  _.TgZ(10, 'li'),
                  _.TgZ(11, 'a', 6, 2),
                  _._UZ(13, 'i', 7),
                  _.qZA(),
                  _.qZA(),
                  _.qZA(),
                  _.qZA(),
                  _.TgZ(14, 'div', 8),
                  _.TgZ(15, 'a', 9, 2),
                  _._uU(17, 'abelfubu@gmail.com'),
                  _.qZA(),
                  _.qZA());
              },
              styles: [
                '@media (max-width: 64em){[_nghost-%COMP%]{align-items:center;display:flex;justify-content:space-between;padding:0 1rem}}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{align-items:center;bottom:1rem;position:fixed}@media (max-width: 64em){.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{position:static}}.left[_ngcontent-%COMP%]{font-size:1.5rem;left:1rem}.left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}@media (max-width: 64em){.left[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}}.left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin:.5rem 0}@media (max-width: 64em){.left[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-right:.5rem}}.right[_ngcontent-%COMP%]{right:1rem}.right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{writing-mode:vertical-lr}@media (max-width: 64em){.right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{writing-mode:horizontal-tb}}',
              ],
            })),
            d
          );
        })(),
        el = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵmod = _.oAB({ type: d })),
            (d.ɵinj = _.cJS({})),
            d
          );
        })();
      const pg = [Mc, ya, oe, fe.h, el, ii, he.d];
      let du = (() => {
        class d {}
        return (
          (d.ɵfac = function (a) {
            return new (a || d)();
          }),
          (d.ɵmod = _.oAB({ type: d })),
          (d.ɵinj = _.cJS({ imports: [[...pg], Mc, ya, oe, fe.h, el, ii, he.d] })),
          d
        );
      })();
      var Vn = k(6214);
      const jo = [
        {
          path: 'home',
          loadChildren: () =>
            Promise.all([k.e(592), k.e(848)])
              .then(k.bind(k, 3848))
              .then((d) => d.HomeModule),
        },
        {
          path: 'blog',
          loadChildren: () =>
            Promise.all([k.e(592), k.e(85)])
              .then(k.bind(k, 9085))
              .then((d) => d.BlogModule),
        },
        { path: '**', redirectTo: 'home' },
      ];
      let vf = (() => {
        class d {}
        return (
          (d.ɵfac = function (a) {
            return new (a || d)();
          }),
          (d.ɵmod = _.oAB({ type: d })),
          (d.ɵinj = _.cJS({ imports: [[Vn.Bz.forRoot(jo, { useHash: !0 })], Vn.Bz] })),
          d
        );
      })();
      var hu,
        pn = [],
        Hs = 'ResizeObserver loop completed with undelivered notifications.',
        Uo = (() => (
          (function (d) {
            (d.BORDER_BOX = 'border-box'),
              (d.CONTENT_BOX = 'content-box'),
              (d.DEVICE_PIXEL_CONTENT_BOX = 'device-pixel-content-box');
          })(Uo || (Uo = {})),
          Uo
        ))(),
        $s = function (d) {
          return Object.freeze(d);
        },
        Oc = function (s, a) {
          (this.inlineSize = s), (this.blockSize = a), $s(this);
        },
        _f = (function () {
          function d(s, a, l, c) {
            return (
              (this.x = s),
              (this.y = a),
              (this.width = l),
              (this.height = c),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              $s(this)
            );
          }
          return (
            (d.prototype.toJSON = function () {
              var s = this;
              return {
                x: s.x,
                y: s.y,
                top: s.top,
                right: s.right,
                bottom: s.bottom,
                left: s.left,
                width: s.width,
                height: s.height,
              };
            }),
            (d.fromRect = function (s) {
              return new d(s.x, s.y, s.width, s.height);
            }),
            d
          );
        })(),
        zs = function (d) {
          return d instanceof SVGElement && 'getBBox' in d;
        },
        Li = function (d) {
          if (zs(d)) {
            var s = d.getBBox();
            return !s.width && !s.height;
          }
          return !(d.offsetWidth || d.offsetHeight || d.getClientRects().length);
        },
        Ca = function (d) {
          var s, a;
          if (d instanceof Element) return !0;
          var l =
            null === (a = null === (s = d) || void 0 === s ? void 0 : s.ownerDocument) ||
            void 0 === a
              ? void 0
              : a.defaultView;
          return !!(l && d instanceof l.Element);
        },
        wa = 'undefined' != typeof window ? window : {},
        ba = new WeakMap(),
        tl = /auto|scroll/,
        nl = /^tb|vertical/,
        Rc = /msie|trident/i.test(wa.navigator && wa.navigator.userAgent),
        Bi = function (d) {
          return parseFloat(d || '0');
        },
        Ho = function (d, s, a) {
          return (
            void 0 === d && (d = 0),
            void 0 === s && (s = 0),
            void 0 === a && (a = !1),
            new Oc((a ? s : d) || 0, (a ? d : s) || 0)
          );
        },
        yo = $s({
          devicePixelContentBoxSize: Ho(),
          borderBoxSize: Ho(),
          contentBoxSize: Ho(),
          contentRect: new _f(0, 0, 0, 0),
        }),
        $o = function (d, s) {
          if ((void 0 === s && (s = !1), ba.has(d) && !s)) return ba.get(d);
          if (Li(d)) return ba.set(d, yo), yo;
          var a = getComputedStyle(d),
            l = zs(d) && d.ownerSVGElement && d.getBBox(),
            c = !Rc && 'border-box' === a.boxSizing,
            h = nl.test(a.writingMode || ''),
            v = !l && tl.test(a.overflowY || ''),
            D = !l && tl.test(a.overflowX || ''),
            x = l ? 0 : Bi(a.paddingTop),
            M = l ? 0 : Bi(a.paddingRight),
            N = l ? 0 : Bi(a.paddingBottom),
            z = l ? 0 : Bi(a.paddingLeft),
            G = l ? 0 : Bi(a.borderTopWidth),
            j = l ? 0 : Bi(a.borderRightWidth),
            te = l ? 0 : Bi(a.borderBottomWidth),
            _e = z + M,
            Ie = x + N,
            Ye = (l ? 0 : Bi(a.borderLeftWidth)) + j,
            ce = G + te,
            de = D ? d.offsetHeight - ce - d.clientHeight : 0,
            ve = v ? d.offsetWidth - Ye - d.clientWidth : 0,
            Ae = c ? _e + Ye : 0,
            Be = c ? Ie + ce : 0,
            Qe = l ? l.width : Bi(a.width) - Ae - ve,
            je = l ? l.height : Bi(a.height) - Be - de,
            ht = Qe + _e + ve + Ye,
            Lt = je + Ie + de + ce,
            an = $s({
              devicePixelContentBoxSize: Ho(
                Math.round(Qe * devicePixelRatio),
                Math.round(je * devicePixelRatio),
                h,
              ),
              borderBoxSize: Ho(ht, Lt, h),
              contentBoxSize: Ho(Qe, je, h),
              contentRect: new _f(z, x, Qe, je),
            });
          return ba.set(d, an), an;
        },
        Pc = function (d, s, a) {
          var l = $o(d, a),
            c = l.borderBoxSize,
            h = l.contentBoxSize,
            v = l.devicePixelContentBoxSize;
          switch (s) {
            case Uo.DEVICE_PIXEL_CONTENT_BOX:
              return v;
            case Uo.BORDER_BOX:
              return c;
            default:
              return h;
          }
        },
        mg = function (s) {
          var a = $o(s);
          (this.target = s),
            (this.contentRect = a.contentRect),
            (this.borderBoxSize = $s([a.borderBoxSize])),
            (this.contentBoxSize = $s([a.contentBoxSize])),
            (this.devicePixelContentBoxSize = $s([a.devicePixelContentBoxSize]));
        },
        fu = function (d) {
          if (Li(d)) return 1 / 0;
          for (var s = 0, a = d.parentNode; a; ) (s += 1), (a = a.parentNode);
          return s;
        },
        Cf = function () {
          var d = 1 / 0,
            s = [];
          pn.forEach(function (v) {
            if (0 !== v.activeTargets.length) {
              var D = [];
              v.activeTargets.forEach(function (M) {
                var N = new mg(M.target),
                  z = fu(M.target);
                D.push(N), (M.lastReportedSize = Pc(M.target, M.observedBox)), z < d && (d = z);
              }),
                s.push(function () {
                  v.callback.call(v.observer, D, v.observer);
                }),
                v.activeTargets.splice(0, v.activeTargets.length);
            }
          });
          for (var a = 0, l = s; a < l.length; a++) (0, l[a])();
          return d;
        },
        wf = function (d) {
          pn.forEach(function (a) {
            a.activeTargets.splice(0, a.activeTargets.length),
              a.skippedTargets.splice(0, a.skippedTargets.length),
              a.observationTargets.forEach(function (c) {
                c.isActive() &&
                  (fu(c.target) > d ? a.activeTargets.push(c) : a.skippedTargets.push(c));
              });
          });
        },
        Nc = [],
        il = 0,
        sl = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        ol = [
          'resize',
          'load',
          'transitionend',
          'animationend',
          'animationstart',
          'animationiteration',
          'keyup',
          'keydown',
          'mouseup',
          'mousedown',
          'mouseover',
          'mouseout',
          'blur',
          'focus',
        ],
        gu = function (d) {
          return void 0 === d && (d = 0), Date.now() + d;
        },
        al = !1,
        ds = new ((function () {
          function d() {
            var s = this;
            (this.stopped = !0),
              (this.listener = function () {
                return s.schedule();
              });
          }
          return (
            (d.prototype.run = function (s) {
              var a = this;
              if ((void 0 === s && (s = 250), !al)) {
                al = !0;
                var l = gu(s);
                !(function (d) {
                  !(function (d) {
                    if (!hu) {
                      var s = 0,
                        a = document.createTextNode('');
                      new MutationObserver(function () {
                        return Nc.splice(0).forEach(function (d) {
                          return d();
                        });
                      }).observe(a, { characterData: !0 }),
                        (hu = function () {
                          a.textContent = '' + (s ? s-- : s++);
                        });
                    }
                    Nc.push(d), hu();
                  })(function () {
                    requestAnimationFrame(d);
                  });
                })(function () {
                  var c = !1;
                  try {
                    c = (function () {
                      var d = 0;
                      for (
                        wf(d);
                        pn.some(function (d) {
                          return d.activeTargets.length > 0;
                        });

                      )
                        (d = Cf()), wf(d);
                      return (
                        pn.some(function (d) {
                          return d.skippedTargets.length > 0;
                        }) &&
                          (function () {
                            var d;
                            'function' == typeof ErrorEvent
                              ? (d = new ErrorEvent('error', { message: Hs }))
                              : ((d = document.createEvent('Event')).initEvent('error', !1, !1),
                                (d.message = Hs)),
                              window.dispatchEvent(d);
                          })(),
                        d > 0
                      );
                    })();
                  } finally {
                    if (((al = !1), (s = l - gu()), !il)) return;
                    c ? a.run(1e3) : s > 0 ? a.run(s) : a.start();
                  }
                });
              }
            }),
            (d.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (d.prototype.observe = function () {
              var s = this,
                a = function () {
                  return s.observer && s.observer.observe(document.body, sl);
                };
              document.body ? a() : wa.addEventListener('DOMContentLoaded', a);
            }),
            (d.prototype.start = function () {
              var s = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                ol.forEach(function (a) {
                  return wa.addEventListener(a, s.listener, !0);
                }));
            }),
            (d.prototype.stop = function () {
              var s = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                ol.forEach(function (a) {
                  return wa.removeEventListener(a, s.listener, !0);
                }),
                (this.stopped = !0));
            }),
            d
          );
        })())(),
        kc = function (d) {
          !il && d > 0 && ds.start(), !(il += d) && ds.stop();
        },
        Sf = (function () {
          function d(s, a) {
            (this.target = s),
              (this.observedBox = a || Uo.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (d.prototype.isActive = function () {
              var s = Pc(this.target, this.observedBox, !0);
              return (
                (function (d) {
                  return (
                    !zs(d) &&
                    !(function (d) {
                      switch (d.tagName) {
                        case 'INPUT':
                          if ('image' !== d.type) break;
                        case 'VIDEO':
                        case 'AUDIO':
                        case 'EMBED':
                        case 'OBJECT':
                        case 'CANVAS':
                        case 'IFRAME':
                        case 'IMG':
                          return !0;
                      }
                      return !1;
                    })(d) &&
                    'inline' === getComputedStyle(d).display
                  );
                })(this.target) && (this.lastReportedSize = s),
                this.lastReportedSize.inlineSize !== s.inlineSize ||
                  this.lastReportedSize.blockSize !== s.blockSize
              );
            }),
            d
          );
        })(),
        Tf = function (s, a) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = s),
            (this.callback = a);
        },
        ll = new WeakMap(),
        Vi = function (d, s) {
          for (var a = 0; a < d.length; a += 1) if (d[a].target === s) return a;
          return -1;
        },
        fs = (function () {
          function d() {}
          return (
            (d.connect = function (s, a) {
              var l = new Tf(s, a);
              ll.set(s, l);
            }),
            (d.observe = function (s, a, l) {
              var c = ll.get(s),
                h = 0 === c.observationTargets.length;
              Vi(c.observationTargets, a) < 0 &&
                (h && pn.push(c),
                c.observationTargets.push(new Sf(a, l && l.box)),
                kc(1),
                ds.schedule());
            }),
            (d.unobserve = function (s, a) {
              var l = ll.get(s),
                c = Vi(l.observationTargets, a);
              c >= 0 &&
                (1 === l.observationTargets.length && pn.splice(pn.indexOf(l), 1),
                l.observationTargets.splice(c, 1),
                kc(-1));
            }),
            (d.disconnect = function (s) {
              var a = this,
                l = ll.get(s);
              l.observationTargets.slice().forEach(function (c) {
                return a.unobserve(s, c.target);
              }),
                l.activeTargets.splice(0, l.activeTargets.length);
            }),
            d
          );
        })(),
        Lc = (function () {
          function d(s) {
            if (0 === arguments.length)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if ('function' != typeof s)
              throw new TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
              );
            fs.connect(this, s);
          }
          return (
            (d.prototype.observe = function (s, a) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!Ca(s))
                throw new TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              fs.observe(this, s, a);
            }),
            (d.prototype.unobserve = function (s) {
              if (0 === arguments.length)
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!Ca(s))
                throw new TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              fs.unobserve(this, s);
            }),
            (d.prototype.disconnect = function () {
              fs.disconnect(this);
            }),
            (d.toString = function () {
              return 'function ResizeObserver () { [polyfill code] }';
            }),
            d
          );
        })();
      function ul(d, s) {
        if (!(d instanceof s)) throw new TypeError('Cannot call a class as a function');
      }
      function Bc(d, s) {
        for (var a = 0; a < s.length; a++) {
          var l = s[a];
          (l.enumerable = l.enumerable || !1),
            (l.configurable = !0),
            'value' in l && (l.writable = !0),
            Object.defineProperty(d, l.key, l);
        }
      }
      function cl(d, s, a) {
        return s && Bc(d.prototype, s), a && Bc(d, a), d;
      }
      function xf(d, s, a) {
        return (
          s in d
            ? Object.defineProperty(d, s, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (d[s] = a),
          d
        );
      }
      function Vc(d, s) {
        var a = Object.keys(d);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(d);
          s &&
            (l = l.filter(function (c) {
              return Object.getOwnPropertyDescriptor(d, c).enumerable;
            })),
            a.push.apply(a, l);
        }
        return a;
      }
      function dl(d) {
        for (var s = 1; s < arguments.length; s++) {
          var a = null != arguments[s] ? arguments[s] : {};
          s % 2
            ? Vc(Object(a), !0).forEach(function (l) {
                xf(d, l, a[l]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(a))
            : Vc(Object(a)).forEach(function (l) {
                Object.defineProperty(d, l, Object.getOwnPropertyDescriptor(a, l));
              });
        }
        return d;
      }
      function jc(d, s) {
        if ('function' != typeof s && null !== s)
          throw new TypeError('Super expression must either be null or a function');
        (d.prototype = Object.create(s && s.prototype, {
          constructor: { value: d, writable: !0, configurable: !0 },
        })),
          s && mu(d, s);
      }
      function _i(d) {
        return (_i = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (a) {
              return a.__proto__ || Object.getPrototypeOf(a);
            })(d);
      }
      function mu(d, s) {
        return (mu =
          Object.setPrototypeOf ||
          function (l, c) {
            return (l.__proto__ = c), l;
          })(d, s);
      }
      function Mf(d) {
        if (void 0 === d)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return d;
      }
      function Af(d, s) {
        return !s || ('object' != typeof s && 'function' != typeof s) ? Mf(d) : s;
      }
      function Wo(d) {
        var s = (function () {
          if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
            return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
          } catch (d) {
            return !1;
          }
        })();
        return function () {
          var c,
            l = _i(d);
          if (s) {
            var h = _i(this).constructor;
            c = Reflect.construct(l, arguments, h);
          } else c = l.apply(this, arguments);
          return Af(this, c);
        };
      }
      function qn(d, s, a) {
        return (qn =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (c, h, v) {
                var D = (function (d, s) {
                  for (; !Object.prototype.hasOwnProperty.call(d, s) && null !== (d = _i(d)); );
                  return d;
                })(c, h);
                if (D) {
                  var x = Object.getOwnPropertyDescriptor(D, h);
                  return x.get ? x.get.call(v) : x.value;
                }
              })(d, s, a || d);
      }
      function ji(d, s) {
        return (
          (function (d) {
            if (Array.isArray(d)) return d;
          })(d) ||
          (function (d, s) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(d)) {
              var a = [],
                l = !0,
                c = !1,
                h = void 0;
              try {
                for (
                  var D, v = d[Symbol.iterator]();
                  !(l = (D = v.next()).done) && (a.push(D.value), !s || a.length !== s);
                  l = !0
                );
              } catch (x) {
                (c = !0), (h = x);
              } finally {
                try {
                  !l && null != v.return && v.return();
                } finally {
                  if (c) throw h;
                }
              }
              return a;
            }
          })(d, s) ||
          Of(d, s) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function Hc(d) {
        return (
          (function (d) {
            if (Array.isArray(d)) return Ea(d);
          })(d) ||
          (function (d) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(d)) return Array.from(d);
          })(d) ||
          Of(d) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function Of(d, s) {
        if (d) {
          if ('string' == typeof d) return Ea(d, s);
          var a = Object.prototype.toString.call(d).slice(8, -1);
          if (
            ('Object' === a && d.constructor && (a = d.constructor.name),
            'Map' === a || 'Set' === a)
          )
            return Array.from(d);
          if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
            return Ea(d, s);
        }
      }
      function Ea(d, s) {
        (null == s || s > d.length) && (s = d.length);
        for (var a = 0, l = new Array(s); a < s; a++) l[a] = d[a];
        return l;
      }
      var Da = {
          el: document,
          name: 'scroll',
          offset: [0, 0],
          repeat: !1,
          smooth: !1,
          initPosition: { x: 0, y: 0 },
          direction: 'vertical',
          gestureDirection: 'vertical',
          reloadOnContextChange: !1,
          lerp: 0.1,
          class: 'is-inview',
          scrollbarContainer: !1,
          scrollbarClass: 'c-scrollbar',
          scrollingClass: 'has-scroll-scrolling',
          draggingClass: 'has-scroll-dragging',
          smoothClass: 'has-scroll-smooth',
          initClass: 'has-scroll-init',
          getSpeed: !1,
          getDirection: !1,
          scrollFromAnywhere: !1,
          multiplier: 1,
          firefoxMultiplier: 50,
          touchMultiplier: 2,
          resetNativeScroll: !0,
          tablet: {
            smooth: !1,
            direction: 'vertical',
            gestureDirection: 'vertical',
            breakpoint: 1024,
          },
          smartphone: { smooth: !1, direction: 'vertical', gestureDirection: 'vertical' },
        },
        Rf = (function () {
          function d() {
            var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            ul(this, d),
              Object.assign(this, Da, s),
              (this.smartphone = Da.smartphone),
              s.smartphone && Object.assign(this.smartphone, s.smartphone),
              (this.tablet = Da.tablet),
              s.tablet && Object.assign(this.tablet, s.tablet),
              (this.namespace = 'locomotive'),
              (this.html = document.documentElement),
              (this.windowHeight = window.innerHeight),
              (this.windowWidth = window.innerWidth),
              (this.windowMiddle = { x: this.windowWidth / 2, y: this.windowHeight / 2 }),
              (this.els = {}),
              (this.currentElements = {}),
              (this.listeners = {}),
              (this.hasScrollTicking = !1),
              (this.hasCallEventSet = !1),
              (this.checkScroll = this.checkScroll.bind(this)),
              (this.checkResize = this.checkResize.bind(this)),
              (this.checkEvent = this.checkEvent.bind(this)),
              (this.instance = {
                scroll: { x: 0, y: 0 },
                limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
                currentElements: this.currentElements,
              }),
              (this.context = this.isMobile
                ? this.isTablet
                  ? 'tablet'
                  : 'smartphone'
                : 'desktop'),
              this.isMobile && (this.direction = this[this.context].direction),
              (this.directionAxis = 'horizontal' === this.direction ? 'x' : 'y'),
              this.getDirection && (this.instance.direction = null),
              this.getDirection && (this.instance.speed = 0),
              this.html.classList.add(this.initClass),
              window.addEventListener('resize', this.checkResize, !1);
          }
          return (
            cl(d, [
              {
                key: 'init',
                value: function () {
                  this.initEvents();
                },
              },
              {
                key: 'checkScroll',
                value: function () {
                  this.dispatchScroll();
                },
              },
              {
                key: 'checkResize',
                value: function () {
                  var a = this;
                  this.resizeTick ||
                    ((this.resizeTick = !0),
                    requestAnimationFrame(function () {
                      a.resize(), (a.resizeTick = !1);
                    }));
                },
              },
              { key: 'resize', value: function () {} },
              {
                key: 'checkContext',
                value: function () {
                  if (this.reloadOnContextChange) {
                    (this.isMobile =
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent,
                      ) ||
                      ('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1) ||
                      this.windowWidth < this.tablet.breakpoint),
                      (this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint);
                    var a = this.context;
                    (this.context = this.isMobile
                      ? this.isTablet
                        ? 'tablet'
                        : 'smartphone'
                      : 'desktop'),
                      a != this.context &&
                        ('desktop' == a ? this.smooth : this[a].smooth) !=
                          ('desktop' == this.context ? this.smooth : this[this.context].smooth) &&
                        window.location.reload();
                  }
                },
              },
              {
                key: 'initEvents',
                value: function () {
                  var a = this;
                  (this.scrollToEls = this.el.querySelectorAll('[data-'.concat(this.name, '-to]'))),
                    (this.setScrollTo = this.setScrollTo.bind(this)),
                    this.scrollToEls.forEach(function (l) {
                      l.addEventListener('click', a.setScrollTo, !1);
                    });
                },
              },
              {
                key: 'setScrollTo',
                value: function (a) {
                  a.preventDefault(),
                    this.scrollTo(
                      a.currentTarget.getAttribute('data-'.concat(this.name, '-href')) ||
                        a.currentTarget.getAttribute('href'),
                      {
                        offset: a.currentTarget.getAttribute('data-'.concat(this.name, '-offset')),
                      },
                    );
                },
              },
              { key: 'addElements', value: function () {} },
              {
                key: 'detectElements',
                value: function (a) {
                  var l = this,
                    c = this.instance.scroll.y,
                    h = c + this.windowHeight,
                    v = this.instance.scroll.x,
                    D = v + this.windowWidth;
                  Object.entries(this.els).forEach(function (x) {
                    var M = ji(x, 2),
                      N = M[0],
                      z = M[1];
                    z &&
                      (!z.inView || a) &&
                      ('horizontal' === l.direction
                        ? D >= z.left && v < z.right && l.setInView(z, N)
                        : h >= z.top && c < z.bottom && l.setInView(z, N)),
                      z &&
                        z.inView &&
                        ('horizontal' === l.direction
                          ? ((z.progress =
                              (l.instance.scroll.x - (z.left - l.windowWidth)) /
                              (z.right - z.left + l.windowWidth)),
                            (D < z.left || v > z.right) && l.setOutOfView(z, N))
                          : ((z.progress =
                              (l.instance.scroll.y - (z.top - l.windowHeight)) /
                              (z.bottom - z.top + l.windowHeight)),
                            (h < z.top || c > z.bottom) && l.setOutOfView(z, N)));
                  }),
                    (this.hasScrollTicking = !1);
                },
              },
              {
                key: 'setInView',
                value: function (a, l) {
                  (this.els[l].inView = !0),
                    a.el.classList.add(a.class),
                    (this.currentElements[l] = a),
                    a.call &&
                      this.hasCallEventSet &&
                      (this.dispatchCall(a, 'enter'), a.repeat || (this.els[l].call = !1));
                },
              },
              {
                key: 'setOutOfView',
                value: function (a, l) {
                  var c = this;
                  (this.els[l].inView = !1),
                    Object.keys(this.currentElements).forEach(function (h) {
                      h === l && delete c.currentElements[h];
                    }),
                    a.call && this.hasCallEventSet && this.dispatchCall(a, 'exit'),
                    a.repeat && a.el.classList.remove(a.class);
                },
              },
              {
                key: 'dispatchCall',
                value: function (a, l) {
                  (this.callWay = l),
                    (this.callValue = a.call.split(',').map(function (h) {
                      return h.trim();
                    })),
                    (this.callObj = a),
                    1 == this.callValue.length && (this.callValue = this.callValue[0]);
                  var c = new Event(this.namespace + 'call');
                  this.el.dispatchEvent(c);
                },
              },
              {
                key: 'dispatchScroll',
                value: function () {
                  var a = new Event(this.namespace + 'scroll');
                  this.el.dispatchEvent(a);
                },
              },
              {
                key: 'setEvents',
                value: function (a, l) {
                  this.listeners[a] || (this.listeners[a] = []);
                  var c = this.listeners[a];
                  c.push(l),
                    1 === c.length &&
                      this.el.addEventListener(this.namespace + a, this.checkEvent, !1),
                    'call' === a && ((this.hasCallEventSet = !0), this.detectElements(!0));
                },
              },
              {
                key: 'unsetEvents',
                value: function (a, l) {
                  if (this.listeners[a]) {
                    var c = this.listeners[a],
                      h = c.indexOf(l);
                    h < 0 ||
                      (c.splice(h, 1),
                      0 === c.index &&
                        this.el.removeEventListener(this.namespace + a, this.checkEvent, !1));
                  }
                },
              },
              {
                key: 'checkEvent',
                value: function (a) {
                  var l = this,
                    c = a.type.replace(this.namespace, ''),
                    h = this.listeners[c];
                  !h ||
                    0 === h.length ||
                    h.forEach(function (v) {
                      switch (c) {
                        case 'scroll':
                          return v(l.instance);
                        case 'call':
                          return v(l.callValue, l.callWay, l.callObj);
                        default:
                          return v();
                      }
                    });
                },
              },
              { key: 'startScroll', value: function () {} },
              { key: 'stopScroll', value: function () {} },
              {
                key: 'setScroll',
                value: function (a, l) {
                  this.instance.scroll = { x: 0, y: 0 };
                },
              },
              {
                key: 'destroy',
                value: function () {
                  var a = this;
                  window.removeEventListener('resize', this.checkResize, !1),
                    Object.keys(this.listeners).forEach(function (l) {
                      a.el.removeEventListener(a.namespace + l, a.checkEvent, !1);
                    }),
                    (this.listeners = {}),
                    this.scrollToEls.forEach(function (l) {
                      l.removeEventListener('click', a.setScrollTo, !1);
                    }),
                    this.html.classList.remove(this.initClass);
                },
              },
            ]),
            d
          );
        })(),
        Wc =
          'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
            ? self
            : {};
      function Gc(d, s) {
        return d((s = { exports: {} }), s.exports), s.exports;
      }
      var Yc = Gc(function (d, s) {
          d.exports = {
            polyfill: function () {
              var l = window,
                c = document;
              if (
                !('scrollBehavior' in c.documentElement.style) ||
                !0 === l.__forceSmoothScrollPolyfill__
              ) {
                var de,
                  h = l.HTMLElement || l.Element,
                  D = {
                    scroll: l.scroll || l.scrollTo,
                    scrollBy: l.scrollBy,
                    elementScroll: h.prototype.scroll || z,
                    scrollIntoView: h.prototype.scrollIntoView,
                  },
                  x =
                    l.performance && l.performance.now
                      ? l.performance.now.bind(l.performance)
                      : Date.now,
                  N =
                    ((de = l.navigator.userAgent),
                    new RegExp(['MSIE ', 'Trident/', 'Edge/'].join('|')).test(de) ? 1 : 0);
                (l.scroll = l.scrollTo =
                  function () {
                    if (void 0 !== arguments[0]) {
                      if (!0 === j(arguments[0]))
                        return void D.scroll.call(
                          l,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : 'object' != typeof arguments[0]
                            ? arguments[0]
                            : l.scrollX || l.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : l.scrollY || l.pageYOffset,
                        );
                      ce.call(
                        l,
                        c.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : l.scrollX || l.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : l.scrollY || l.pageYOffset,
                      );
                    }
                  }),
                  (l.scrollBy = function () {
                    if (void 0 !== arguments[0]) {
                      if (j(arguments[0]))
                        return void D.scrollBy.call(
                          l,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : 'object' != typeof arguments[0]
                            ? arguments[0]
                            : 0,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        );
                      ce.call(
                        l,
                        c.body,
                        ~~arguments[0].left + (l.scrollX || l.pageXOffset),
                        ~~arguments[0].top + (l.scrollY || l.pageYOffset),
                      );
                    }
                  }),
                  (h.prototype.scroll = h.prototype.scrollTo =
                    function () {
                      if (void 0 !== arguments[0]) {
                        if (!0 === j(arguments[0])) {
                          if ('number' == typeof arguments[0] && void 0 === arguments[1])
                            throw new SyntaxError('Value could not be converted');
                          return void D.elementScroll.call(
                            this,
                            void 0 !== arguments[0].left
                              ? ~~arguments[0].left
                              : 'object' != typeof arguments[0]
                              ? ~~arguments[0]
                              : this.scrollLeft,
                            void 0 !== arguments[0].top
                              ? ~~arguments[0].top
                              : void 0 !== arguments[1]
                              ? ~~arguments[1]
                              : this.scrollTop,
                          );
                        }
                        var de = arguments[0].left,
                          ve = arguments[0].top;
                        ce.call(
                          this,
                          this,
                          void 0 === de ? this.scrollLeft : ~~de,
                          void 0 === ve ? this.scrollTop : ~~ve,
                        );
                      }
                    }),
                  (h.prototype.scrollBy = function () {
                    if (void 0 !== arguments[0]) {
                      if (!0 === j(arguments[0]))
                        return void D.elementScroll.call(
                          this,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left + this.scrollLeft
                            : ~~arguments[0] + this.scrollLeft,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top + this.scrollTop
                            : ~~arguments[1] + this.scrollTop,
                        );
                      this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      });
                    }
                  }),
                  (h.prototype.scrollIntoView = function () {
                    if (!0 !== j(arguments[0])) {
                      var de = Ie(this),
                        ve = de.getBoundingClientRect(),
                        Ae = this.getBoundingClientRect();
                      de !== c.body
                        ? (ce.call(
                            this,
                            de,
                            de.scrollLeft + Ae.left - ve.left,
                            de.scrollTop + Ae.top - ve.top,
                          ),
                          'fixed' !== l.getComputedStyle(de).position &&
                            l.scrollBy({ left: ve.left, top: ve.top, behavior: 'smooth' }))
                        : l.scrollBy({ left: Ae.left, top: Ae.top, behavior: 'smooth' });
                    } else D.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
                  });
              }
              function z(de, ve) {
                (this.scrollLeft = de), (this.scrollTop = ve);
              }
              function j(de) {
                if (
                  null === de ||
                  'object' != typeof de ||
                  void 0 === de.behavior ||
                  'auto' === de.behavior ||
                  'instant' === de.behavior
                )
                  return !0;
                if ('object' == typeof de && 'smooth' === de.behavior) return !1;
                throw new TypeError(
                  'behavior member of ScrollOptions ' +
                    de.behavior +
                    ' is not a valid value for enumeration ScrollBehavior.',
                );
              }
              function te(de, ve) {
                return 'Y' === ve
                  ? de.clientHeight + N < de.scrollHeight
                  : 'X' === ve
                  ? de.clientWidth + N < de.scrollWidth
                  : void 0;
              }
              function q(de, ve) {
                var Ae = l.getComputedStyle(de, null)['overflow' + ve];
                return 'auto' === Ae || 'scroll' === Ae;
              }
              function _e(de) {
                var ve = te(de, 'Y') && q(de, 'Y'),
                  Ae = te(de, 'X') && q(de, 'X');
                return ve || Ae;
              }
              function Ie(de) {
                for (; de !== c.body && !1 === _e(de); ) de = de.parentNode || de.host;
                return de;
              }
              function Ye(de) {
                var Ae,
                  Be,
                  Qe,
                  je = (x() - de.startTime) / 468;
                (Ae = (function (de) {
                  return 0.5 * (1 - Math.cos(Math.PI * de));
                })((je = je > 1 ? 1 : je))),
                  de.method.call(
                    de.scrollable,
                    (Be = de.startX + (de.x - de.startX) * Ae),
                    (Qe = de.startY + (de.y - de.startY) * Ae),
                  ),
                  (Be !== de.x || Qe !== de.y) && l.requestAnimationFrame(Ye.bind(l, de));
              }
              function ce(de, ve, Ae) {
                var Be,
                  Qe,
                  je,
                  ht,
                  Lt = x();
                de === c.body
                  ? ((Be = l),
                    (Qe = l.scrollX || l.pageXOffset),
                    (je = l.scrollY || l.pageYOffset),
                    (ht = D.scroll))
                  : ((Be = de), (Qe = de.scrollLeft), (je = de.scrollTop), (ht = z)),
                  Ye({
                    scrollable: Be,
                    method: ht,
                    startTime: Lt,
                    startX: Qe,
                    startY: je,
                    x: ve,
                    y: Ae,
                  });
              }
            },
          };
        }),
        Pf = (function (d) {
          jc(a, d);
          var s = Wo(a);
          function a() {
            var l,
              c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (
              ul(this, a),
              (l = s.call(this, c)).resetNativeScroll &&
                (history.scrollRestoration && (history.scrollRestoration = 'manual'),
                window.scrollTo(0, 0)),
              window.addEventListener('scroll', l.checkScroll, !1),
              void 0 === window.smoothscrollPolyfill &&
                ((window.smoothscrollPolyfill = Yc), window.smoothscrollPolyfill.polyfill()),
              l
            );
          }
          return (
            cl(a, [
              {
                key: 'init',
                value: function () {
                  (this.instance.scroll.y = window.pageYOffset),
                    this.addElements(),
                    this.detectElements(),
                    qn(_i(a.prototype), 'init', this).call(this);
                },
              },
              {
                key: 'checkScroll',
                value: function () {
                  var c = this;
                  qn(_i(a.prototype), 'checkScroll', this).call(this),
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                    (this.instance.scroll.y = window.pageYOffset),
                    Object.entries(this.els).length &&
                      (this.hasScrollTicking ||
                        (requestAnimationFrame(function () {
                          c.detectElements();
                        }),
                        (this.hasScrollTicking = !0)));
                },
              },
              {
                key: 'addDirection',
                value: function () {
                  window.pageYOffset > this.instance.scroll.y
                    ? 'down' !== this.instance.direction && (this.instance.direction = 'down')
                    : window.pageYOffset < this.instance.scroll.y &&
                      'up' !== this.instance.direction &&
                      (this.instance.direction = 'up');
                },
              },
              {
                key: 'addSpeed',
                value: function () {
                  this.instance.speed =
                    window.pageYOffset != this.instance.scroll.y
                      ? (window.pageYOffset - this.instance.scroll.y) /
                        Math.max(1, Date.now() - this.speedTs)
                      : 0;
                },
              },
              {
                key: 'resize',
                value: function () {
                  Object.entries(this.els).length &&
                    ((this.windowHeight = window.innerHeight), this.updateElements());
                },
              },
              {
                key: 'addElements',
                value: function () {
                  var c = this;
                  (this.els = {}),
                    this.el.querySelectorAll('[data-' + this.name + ']').forEach(function (v, D) {
                      v.getBoundingClientRect();
                      var z,
                        G,
                        Ie,
                        M = v.dataset[c.name + 'Class'] || c.class,
                        N =
                          'string' == typeof v.dataset[c.name + 'Id']
                            ? v.dataset[c.name + 'Id']
                            : D,
                        j =
                          'string' == typeof v.dataset[c.name + 'Offset']
                            ? v.dataset[c.name + 'Offset'].split(',')
                            : c.offset,
                        te = v.dataset[c.name + 'Repeat'],
                        q = v.dataset[c.name + 'Call'],
                        _e = v.dataset[c.name + 'Target'],
                        Ye = (Ie =
                          void 0 !== _e
                            ? document.querySelector(''.concat(_e))
                            : v).getBoundingClientRect(),
                        ce = (z = Ye.top + c.instance.scroll.y) + Ie.offsetHeight,
                        de = (G = Ye.left + c.instance.scroll.x) + Ie.offsetWidth;
                      te = 'false' != te && (null != te || c.repeat);
                      var ve = c.getRelativeOffset(j);
                      (c.els[N] = {
                        el: v,
                        targetEl: Ie,
                        id: N,
                        class: M,
                        top: (z += ve[0]),
                        bottom: (ce -= ve[1]),
                        left: G,
                        right: de,
                        offset: j,
                        progress: 0,
                        repeat: te,
                        inView: !1,
                        call: q,
                      }),
                        v.classList.contains(M) && c.setInView(c.els[N], N);
                    });
                },
              },
              {
                key: 'updateElements',
                value: function () {
                  var c = this;
                  Object.entries(this.els).forEach(function (h) {
                    var v = ji(h, 2),
                      D = v[0],
                      x = v[1],
                      M = x.targetEl.getBoundingClientRect().top + c.instance.scroll.y,
                      N = M + x.targetEl.offsetHeight,
                      z = c.getRelativeOffset(x.offset);
                    (c.els[D].top = M + z[0]), (c.els[D].bottom = N - z[1]);
                  }),
                    (this.hasScrollTicking = !1);
                },
              },
              {
                key: 'getRelativeOffset',
                value: function (c) {
                  var h = [0, 0];
                  if (c)
                    for (var v = 0; v < c.length; v++)
                      h[v] =
                        'string' == typeof c[v]
                          ? c[v].includes('%')
                            ? parseInt((c[v].replace('%', '') * this.windowHeight) / 100)
                            : parseInt(c[v])
                          : c[v];
                  return h;
                },
              },
              {
                key: 'scrollTo',
                value: function (c) {
                  var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    v = parseInt(h.offset) || 0,
                    D = !!h.callback && h.callback;
                  if ('string' == typeof c) {
                    if ('top' === c) c = this.html;
                    else if ('bottom' === c) c = this.html.offsetHeight - window.innerHeight;
                    else if (!(c = document.querySelector(c))) return;
                  } else if ('number' == typeof c) c = parseInt(c);
                  else if (!c || !c.tagName)
                    return void console.warn('`target` parameter is not valid');
                  v =
                    'number' != typeof c
                      ? c.getBoundingClientRect().top + v + this.instance.scroll.y
                      : c + v;
                  var x = function () {
                    return parseInt(window.pageYOffset) === parseInt(v);
                  };
                  if (D) {
                    if (x()) return void D();
                    var M = function N() {
                      x() && (window.removeEventListener('scroll', N), D());
                    };
                    window.addEventListener('scroll', M);
                  }
                  window.scrollTo({ top: v, behavior: 'smooth' });
                },
              },
              {
                key: 'update',
                value: function () {
                  this.addElements(), this.detectElements();
                },
              },
              {
                key: 'destroy',
                value: function () {
                  qn(_i(a.prototype), 'destroy', this).call(this),
                    window.removeEventListener('scroll', this.checkScroll, !1);
                },
              },
            ]),
            a
          );
        })(Rf),
        _u = Object.getOwnPropertySymbols,
        fl = Object.prototype.hasOwnProperty,
        Kc = Object.prototype.propertyIsEnumerable;
      function Cu(d) {
        if (null == d) throw new TypeError('Object.assign cannot be called with null or undefined');
        return Object(d);
      }
      var Nn = (function () {
        try {
          if (!Object.assign) return !1;
          var d = new String('abc');
          if (((d[5] = 'de'), '5' === Object.getOwnPropertyNames(d)[0])) return !1;
          for (var s = {}, a = 0; a < 10; a++) s['_' + String.fromCharCode(a)] = a;
          if (
            '0123456789' !==
            Object.getOwnPropertyNames(s)
              .map(function (h) {
                return s[h];
              })
              .join('')
          )
            return !1;
          var c = {};
          return (
            'abcdefghijklmnopqrst'.split('').forEach(function (h) {
              c[h] = h;
            }),
            'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, c)).join('')
          );
        } catch (h) {
          return !1;
        }
      })()
        ? Object.assign
        : function (d, s) {
            for (var a, c, l = Cu(d), h = 1; h < arguments.length; h++) {
              for (var v in (a = Object(arguments[h]))) fl.call(a, v) && (l[v] = a[v]);
              if (_u) {
                c = _u(a);
                for (var D = 0; D < c.length; D++) Kc.call(a, c[D]) && (l[c[D]] = a[c[D]]);
              }
            }
            return l;
          };
      function Qc() {}
      Qc.prototype = {
        on: function (d, s, a) {
          var l = this.e || (this.e = {});
          return (l[d] || (l[d] = [])).push({ fn: s, ctx: a }), this;
        },
        once: function (d, s, a) {
          var l = this;
          function c() {
            l.off(d, c), s.apply(a, arguments);
          }
          return (c._ = s), this.on(d, c, a);
        },
        emit: function (d) {
          for (
            var s = [].slice.call(arguments, 1),
              a = ((this.e || (this.e = {}))[d] || []).slice(),
              l = 0,
              c = a.length;
            l < c;
            l++
          )
            a[l].fn.apply(a[l].ctx, s);
          return this;
        },
        off: function (d, s) {
          var a = this.e || (this.e = {}),
            l = a[d],
            c = [];
          if (l && s)
            for (var h = 0, v = l.length; h < v; h++)
              l[h].fn !== s && l[h].fn._ !== s && c.push(l[h]);
          return c.length ? (a[d] = c) : delete a[d], this;
        },
      };
      var Ff = Qc,
        wu = Gc(function (d, s) {
          (function () {
            (null !== s ? s : this).Lethargy = (function () {
              function l(c, h, v, D) {
                (this.stability = null != c ? Math.abs(c) : 8),
                  (this.sensitivity = null != h ? 1 + Math.abs(h) : 100),
                  (this.tolerance = null != v ? 1 + Math.abs(v) : 1.1),
                  (this.delay = null != D ? D : 150),
                  (this.lastUpDeltas = function () {
                    var x, M, N;
                    for (
                      N = [], x = 1, M = 2 * this.stability;
                      1 <= M ? x <= M : x >= M;
                      1 <= M ? x++ : x--
                    )
                      N.push(null);
                    return N;
                  }.call(this)),
                  (this.lastDownDeltas = function () {
                    var x, M, N;
                    for (
                      N = [], x = 1, M = 2 * this.stability;
                      1 <= M ? x <= M : x >= M;
                      1 <= M ? x++ : x--
                    )
                      N.push(null);
                    return N;
                  }.call(this)),
                  (this.deltasTimestamp = function () {
                    var x, M, N;
                    for (
                      N = [], x = 1, M = 2 * this.stability;
                      1 <= M ? x <= M : x >= M;
                      1 <= M ? x++ : x--
                    )
                      N.push(null);
                    return N;
                  }.call(this));
              }
              return (
                (l.prototype.check = function (c) {
                  var h;
                  return (
                    null != (c = c.originalEvent || c).wheelDelta
                      ? (h = c.wheelDelta)
                      : null != c.deltaY
                      ? (h = -40 * c.deltaY)
                      : (null != c.detail || 0 === c.detail) && (h = -40 * c.detail),
                    this.deltasTimestamp.push(Date.now()),
                    this.deltasTimestamp.shift(),
                    h > 0
                      ? (this.lastUpDeltas.push(h), this.lastUpDeltas.shift(), this.isInertia(1))
                      : (this.lastDownDeltas.push(h),
                        this.lastDownDeltas.shift(),
                        this.isInertia(-1))
                  );
                }),
                (l.prototype.isInertia = function (c) {
                  var h, v, D, x, z;
                  return null === (h = -1 === c ? this.lastDownDeltas : this.lastUpDeltas)[0]
                    ? c
                    : !(
                        this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() &&
                        h[0] === h[2 * this.stability - 1]
                      ) &&
                        ((D = h.slice(0, this.stability)),
                        (v = h.slice(this.stability, 2 * this.stability)),
                        (z = D.reduce(function (G, j) {
                          return G + j;
                        })),
                        (x =
                          v.reduce(function (G, j) {
                            return G + j;
                          }) / v.length),
                        Math.abs(z / D.length) < Math.abs(x * this.tolerance) &&
                          this.sensitivity < Math.abs(x) &&
                          c);
                }),
                (l.prototype.showLastUpDeltas = function () {
                  return this.lastUpDeltas;
                }),
                (l.prototype.showLastDownDeltas = function () {
                  return this.lastDownDeltas;
                }),
                l
              );
            })();
          }.call(Wc));
        }),
        xr_hasWheelEvent = 'onwheel' in document,
        xr_hasMouseWheelEvent = 'onmousewheel' in document,
        xr_hasTouch =
          'ontouchstart' in window ||
          window.TouchEvent ||
          (window.DocumentTouch && document instanceof DocumentTouch),
        xr_hasTouchWin = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        xr_hasPointer = !!window.navigator.msPointerEnabled,
        xr_hasKeyDown = 'onkeydown' in document,
        xr_isFirefox = navigator.userAgent.indexOf('Firefox') > -1,
        kf = Object.prototype.toString,
        Lf = Object.prototype.hasOwnProperty;
      function Vf(d, s) {
        return function () {
          return d.apply(s, arguments);
        };
      }
      var jf = wu.Lethargy,
        Go = 'virtualscroll',
        wg = fn;
      function fn(d) {
        (function (d) {
          if (!d) return console.warn('bindAll requires at least one argument.');
          var s = Array.prototype.slice.call(arguments, 1);
          if (0 === s.length)
            for (var a in d)
              Lf.call(d, a) &&
                'function' == typeof d[a] &&
                '[object Function]' == kf.call(d[a]) &&
                s.push(a);
          for (var l = 0; l < s.length; l++) {
            var c = s[l];
            d[c] = Vf(d[c], d);
          }
        })(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown'),
          (this.el = window),
          d && d.el && ((this.el = d.el), delete d.el),
          (this.options = Nn(
            {
              mouseMultiplier: 1,
              touchMultiplier: 2,
              firefoxMultiplier: 15,
              keyStep: 120,
              preventTouch: !1,
              unpreventTouchClass: 'vs-touchmove-allowed',
              limitInertia: !1,
              useKeyboard: !0,
              useTouch: !0,
            },
            d,
          )),
          this.options.limitInertia && (this._lethargy = new jf()),
          (this._emitter = new Ff()),
          (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
          (this.touchStartX = null),
          (this.touchStartY = null),
          (this.bodyTouchAction = null),
          void 0 !== this.options.passive &&
            (this.listenerOptions = { passive: this.options.passive });
      }
      function Sa(d, s, a) {
        return (1 - a) * d + a * s;
      }
      function $r(d) {
        var s = {};
        if (window.getComputedStyle) {
          var a = getComputedStyle(d),
            l = a.transform || a.webkitTransform || a.mozTransform,
            c = l.match(/^matrix3d\((.+)\)$/);
          return (
            c
              ? ((s.x = c ? parseFloat(c[1].split(', ')[12]) : 0),
                (s.y = c ? parseFloat(c[1].split(', ')[13]) : 0))
              : ((c = l.match(/^matrix\((.+)\)$/)),
                (s.x = c ? parseFloat(c[1].split(', ')[4]) : 0),
                (s.y = c ? parseFloat(c[1].split(', ')[5]) : 0)),
            s
          );
        }
      }
      function hl(d) {
        for (var s = []; d && d !== document; d = d.parentNode) s.push(d);
        return s;
      }
      (fn.prototype._notify = function (d) {
        var s = this._event;
        (s.x += s.deltaX),
          (s.y += s.deltaY),
          this._emitter.emit(Go, {
            x: s.x,
            y: s.y,
            deltaX: s.deltaX,
            deltaY: s.deltaY,
            originalEvent: d,
          });
      }),
        (fn.prototype._onWheel = function (d) {
          var s = this.options;
          if (!this._lethargy || !1 !== this._lethargy.check(d)) {
            var a = this._event;
            (a.deltaX = d.wheelDeltaX || -1 * d.deltaX),
              (a.deltaY = d.wheelDeltaY || -1 * d.deltaY),
              xr_isFirefox &&
                1 == d.deltaMode &&
                ((a.deltaX *= s.firefoxMultiplier), (a.deltaY *= s.firefoxMultiplier)),
              (a.deltaX *= s.mouseMultiplier),
              (a.deltaY *= s.mouseMultiplier),
              this._notify(d);
          }
        }),
        (fn.prototype._onMouseWheel = function (d) {
          if (!this.options.limitInertia || !1 !== this._lethargy.check(d)) {
            var s = this._event;
            (s.deltaX = d.wheelDeltaX ? d.wheelDeltaX : 0),
              (s.deltaY = d.wheelDeltaY ? d.wheelDeltaY : d.wheelDelta),
              this._notify(d);
          }
        }),
        (fn.prototype._onTouchStart = function (d) {
          var s = d.targetTouches ? d.targetTouches[0] : d;
          (this.touchStartX = s.pageX), (this.touchStartY = s.pageY);
        }),
        (fn.prototype._onTouchMove = function (d) {
          var s = this.options;
          s.preventTouch &&
            !d.target.classList.contains(s.unpreventTouchClass) &&
            d.preventDefault();
          var a = this._event,
            l = d.targetTouches ? d.targetTouches[0] : d;
          (a.deltaX = (l.pageX - this.touchStartX) * s.touchMultiplier),
            (a.deltaY = (l.pageY - this.touchStartY) * s.touchMultiplier),
            (this.touchStartX = l.pageX),
            (this.touchStartY = l.pageY),
            this._notify(d);
        }),
        (fn.prototype._onKeyDown = function (d) {
          var s = this._event;
          s.deltaX = s.deltaY = 0;
          var a = window.innerHeight - 40;
          switch (d.keyCode) {
            case 37:
            case 38:
              s.deltaY = this.options.keyStep;
              break;
            case 39:
            case 40:
              s.deltaY = -this.options.keyStep;
              break;
            case d.shiftKey:
              s.deltaY = a;
              break;
            case 32:
              s.deltaY = -a;
              break;
            default:
              return;
          }
          this._notify(d);
        }),
        (fn.prototype._bind = function () {
          xr_hasWheelEvent &&
            this.el.addEventListener('wheel', this._onWheel, this.listenerOptions),
            xr_hasMouseWheelEvent &&
              this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions),
            xr_hasTouch &&
              this.options.useTouch &&
              (this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions),
              this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions)),
            xr_hasPointer &&
              xr_hasTouchWin &&
              ((this.bodyTouchAction = document.body.style.msTouchAction),
              (document.body.style.msTouchAction = 'none'),
              this.el.addEventListener('MSPointerDown', this._onTouchStart, !0),
              this.el.addEventListener('MSPointerMove', this._onTouchMove, !0)),
            xr_hasKeyDown &&
              this.options.useKeyboard &&
              document.addEventListener('keydown', this._onKeyDown);
        }),
        (fn.prototype._unbind = function () {
          xr_hasWheelEvent && this.el.removeEventListener('wheel', this._onWheel),
            xr_hasMouseWheelEvent && this.el.removeEventListener('mousewheel', this._onMouseWheel),
            xr_hasTouch &&
              (this.el.removeEventListener('touchstart', this._onTouchStart),
              this.el.removeEventListener('touchmove', this._onTouchMove)),
            xr_hasPointer &&
              xr_hasTouchWin &&
              ((document.body.style.msTouchAction = this.bodyTouchAction),
              this.el.removeEventListener('MSPointerDown', this._onTouchStart, !0),
              this.el.removeEventListener('MSPointerMove', this._onTouchMove, !0)),
            xr_hasKeyDown &&
              this.options.useKeyboard &&
              document.removeEventListener('keydown', this._onKeyDown);
        }),
        (fn.prototype.on = function (d, s) {
          this._emitter.on(Go, d, s);
          var a = this._emitter.e;
          a && a[Go] && 1 === a[Go].length && this._bind();
        }),
        (fn.prototype.off = function (d, s) {
          this._emitter.off(Go, d, s);
          var a = this._emitter.e;
          (!a[Go] || a[Go].length <= 0) && this._unbind();
        }),
        (fn.prototype.reset = function () {
          var d = this._event;
          (d.x = 0), (d.y = 0);
        }),
        (fn.prototype.destroy = function () {
          this._emitter.off(), this._unbind();
        });
      var Hf = 'function' == typeof Float32Array;
      function Eu(d, s) {
        return 1 - 3 * s + 3 * d;
      }
      function Zc(d, s) {
        return 3 * s - 6 * d;
      }
      function Du(d) {
        return 3 * d;
      }
      function pl(d, s, a) {
        return ((Eu(s, a) * d + Zc(s, a)) * d + Du(s)) * d;
      }
      function qc(d, s, a) {
        return 3 * Eu(s, a) * d * d + 2 * Zc(s, a) * d + Du(s);
      }
      function Su(d) {
        return d;
      }
      var Xc = function (s, a, l, c) {
          if (!(0 <= s && s <= 1 && 0 <= l && l <= 1))
            throw new Error('bezier x values must be in [0, 1] range');
          if (s === a && l === c) return Su;
          for (var h = Hf ? new Float32Array(11) : new Array(11), v = 0; v < 11; ++v)
            h[v] = pl(0.1 * v, s, l);
          return function (M) {
            return 0 === M
              ? 0
              : 1 === M
              ? 1
              : pl(
                  (function (x) {
                    for (var M = 0, N = 1; 10 !== N && h[N] <= x; ++N) M += 0.1;
                    --N;
                    var j = M + ((x - h[N]) / (h[N + 1] - h[N])) * 0.1,
                      te = qc(j, s, l);
                    return te >= 0.001
                      ? (function (d, s, a, l) {
                          for (var c = 0; c < 4; ++c) {
                            var h = qc(s, a, l);
                            if (0 === h) return s;
                            s -= (pl(s, a, l) - d) / h;
                          }
                          return s;
                        })(x, j, s, l)
                      : 0 === te
                      ? j
                      : (function (d, s, a, l, c) {
                          var h,
                            v,
                            D = 0;
                          do {
                            (h = pl((v = s + (a - s) / 2), l, c) - d) > 0 ? (a = v) : (s = v);
                          } while (Math.abs(h) > 1e-7 && ++D < 10);
                          return v;
                        })(x, M, M + 0.1, s, l);
                  })(M),
                  a,
                  c,
                );
          };
        },
        bg = (function (d) {
          jc(a, d);
          var s = Wo(a);
          function a() {
            var l,
              c = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return (
              ul(this, a),
              history.scrollRestoration && (history.scrollRestoration = 'manual'),
              window.scrollTo(0, 0),
              (l = s.call(this, c)).inertia && (l.lerp = 0.1 * l.inertia),
              (l.isScrolling = !1),
              (l.isDraggingScrollbar = !1),
              (l.isTicking = !1),
              (l.hasScrollTicking = !1),
              (l.parallaxElements = {}),
              (l.stop = !1),
              (l.scrollbarContainer = c.scrollbarContainer),
              (l.checkKey = l.checkKey.bind(Mf(l))),
              window.addEventListener('keydown', l.checkKey, !1),
              l
            );
          }
          return (
            cl(a, [
              {
                key: 'init',
                value: function () {
                  var c = this;
                  this.html.classList.add(this.smoothClass),
                    this.html.setAttribute('data-'.concat(this.name, '-direction'), this.direction),
                    (this.instance = dl(
                      {
                        delta: { x: this.initPosition.x, y: this.initPosition.y },
                        scroll: { x: this.initPosition.x, y: this.initPosition.y },
                      },
                      this.instance,
                    )),
                    (this.vs = new wg({
                      el: this.scrollFromAnywhere ? document : this.el,
                      mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
                      firefoxMultiplier: this.firefoxMultiplier,
                      touchMultiplier: this.touchMultiplier,
                      useKeyboard: !1,
                      passive: !0,
                    })),
                    this.vs.on(function (h) {
                      c.stop ||
                        c.isDraggingScrollbar ||
                        requestAnimationFrame(function () {
                          c.updateDelta(h), c.isScrolling || c.startScrolling();
                        });
                    }),
                    this.setScrollLimit(),
                    this.initScrollBar(),
                    this.addSections(),
                    this.addElements(),
                    this.checkScroll(!0),
                    this.transformElements(!0, !0),
                    qn(_i(a.prototype), 'init', this).call(this);
                },
              },
              {
                key: 'setScrollLimit',
                value: function () {
                  if (
                    ((this.instance.limit.y = this.el.offsetHeight - this.windowHeight),
                    'horizontal' === this.direction)
                  ) {
                    for (var c = 0, h = this.el.children, v = 0; v < h.length; v++)
                      c += h[v].offsetWidth;
                    this.instance.limit.x = c - this.windowWidth;
                  }
                },
              },
              {
                key: 'startScrolling',
                value: function () {
                  (this.startScrollTs = Date.now()),
                    (this.isScrolling = !0),
                    this.checkScroll(),
                    this.html.classList.add(this.scrollingClass);
                },
              },
              {
                key: 'stopScrolling',
                value: function () {
                  cancelAnimationFrame(this.checkScrollRaf),
                    this.scrollToRaf &&
                      (cancelAnimationFrame(this.scrollToRaf), (this.scrollToRaf = null)),
                    (this.isScrolling = !1),
                    (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                    this.html.classList.remove(this.scrollingClass);
                },
              },
              {
                key: 'checkKey',
                value: function (c) {
                  var h = this;
                  if (this.stop)
                    9 == c.keyCode &&
                      requestAnimationFrame(function () {
                        (h.html.scrollTop = 0),
                          (document.body.scrollTop = 0),
                          (h.html.scrollLeft = 0),
                          (document.body.scrollLeft = 0);
                      });
                  else {
                    switch (c.keyCode) {
                      case 9:
                        requestAnimationFrame(function () {
                          (h.html.scrollTop = 0),
                            (document.body.scrollTop = 0),
                            (h.html.scrollLeft = 0),
                            (document.body.scrollLeft = 0),
                            h.scrollTo(document.activeElement, { offset: -window.innerHeight / 2 });
                        });
                        break;
                      case 38:
                        this.instance.delta[this.directionAxis] -= 240;
                        break;
                      case 40:
                        this.instance.delta[this.directionAxis] += 240;
                        break;
                      case 33:
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                        break;
                      case 34:
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                        break;
                      case 36:
                        this.instance.delta[this.directionAxis] -=
                          this.instance.limit[this.directionAxis];
                        break;
                      case 35:
                        this.instance.delta[this.directionAxis] +=
                          this.instance.limit[this.directionAxis];
                        break;
                      case 32:
                        !(document.activeElement instanceof HTMLInputElement) &&
                          !(document.activeElement instanceof HTMLTextAreaElement) &&
                          (c.shiftKey
                            ? (this.instance.delta[this.directionAxis] -= window.innerHeight)
                            : (this.instance.delta[this.directionAxis] += window.innerHeight));
                        break;
                      default:
                        return;
                    }
                    this.instance.delta[this.directionAxis] < 0 &&
                      (this.instance.delta[this.directionAxis] = 0),
                      this.instance.delta[this.directionAxis] >
                        this.instance.limit[this.directionAxis] &&
                        (this.instance.delta[this.directionAxis] =
                          this.instance.limit[this.directionAxis]),
                      this.stopScrolling(),
                      (this.isScrolling = !0),
                      this.checkScroll(),
                      this.html.classList.add(this.scrollingClass);
                  }
                },
              },
              {
                key: 'checkScroll',
                value: function () {
                  var c = this,
                    h = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                  if (h || this.isScrolling || this.isDraggingScrollbar) {
                    this.hasScrollTicking ||
                      ((this.checkScrollRaf = requestAnimationFrame(function () {
                        return c.checkScroll();
                      })),
                      (this.hasScrollTicking = !0)),
                      this.updateScroll();
                    var v = Math.abs(
                        this.instance.delta[this.directionAxis] -
                          this.instance.scroll[this.directionAxis],
                      ),
                      D = Date.now() - this.startScrollTs;
                    if (
                      (!this.animatingScroll &&
                        D > 100 &&
                        ((v < 0.5 && 0 != this.instance.delta[this.directionAxis]) ||
                          (v < 0.5 && 0 == this.instance.delta[this.directionAxis])) &&
                        this.stopScrolling(),
                      Object.entries(this.sections).forEach(function (M) {
                        var G = ji(M, 2)[1];
                        G.persistent ||
                        (c.instance.scroll[c.directionAxis] > G.offset[c.directionAxis] &&
                          c.instance.scroll[c.directionAxis] < G.limit[c.directionAxis])
                          ? ('horizontal' === c.direction
                              ? c.transform(G.el, -c.instance.scroll[c.directionAxis], 0)
                              : c.transform(G.el, 0, -c.instance.scroll[c.directionAxis]),
                            G.inView ||
                              ((G.inView = !0),
                              (G.el.style.opacity = 1),
                              (G.el.style.pointerEvents = 'all'),
                              G.el.setAttribute('data-'.concat(c.name, '-section-inview'), '')))
                          : ((G.inView || h) &&
                              ((G.inView = !1),
                              (G.el.style.opacity = 0),
                              (G.el.style.pointerEvents = 'none'),
                              G.el.removeAttribute('data-'.concat(c.name, '-section-inview'))),
                            c.transform(G.el, 0, 0));
                      }),
                      this.getDirection && this.addDirection(),
                      this.getSpeed && (this.addSpeed(), (this.speedTs = Date.now())),
                      this.detectElements(),
                      this.transformElements(),
                      this.hasScrollbar)
                    ) {
                      var x =
                        (this.instance.scroll[this.directionAxis] /
                          this.instance.limit[this.directionAxis]) *
                        this.scrollBarLimit[this.directionAxis];
                      'horizontal' === this.direction
                        ? this.transform(this.scrollbarThumb, x, 0)
                        : this.transform(this.scrollbarThumb, 0, x);
                    }
                    qn(_i(a.prototype), 'checkScroll', this).call(this),
                      (this.hasScrollTicking = !1);
                  }
                },
              },
              {
                key: 'resize',
                value: function () {
                  (this.windowHeight = window.innerHeight),
                    (this.windowWidth = window.innerWidth),
                    this.checkContext(),
                    (this.windowMiddle = { x: this.windowWidth / 2, y: this.windowHeight / 2 }),
                    this.update();
                },
              },
              {
                key: 'updateDelta',
                value: function (c) {
                  var v =
                    this[this.context] && this[this.context].gestureDirection
                      ? this[this.context].gestureDirection
                      : this.gestureDirection;
                  (this.instance.delta[this.directionAxis] -=
                    ('both' === v
                      ? c.deltaX + c.deltaY
                      : 'vertical' === v
                      ? c.deltaY
                      : 'horizontal' === v
                      ? c.deltaX
                      : c.deltaY) * this.multiplier),
                    this.instance.delta[this.directionAxis] < 0 &&
                      (this.instance.delta[this.directionAxis] = 0),
                    this.instance.delta[this.directionAxis] >
                      this.instance.limit[this.directionAxis] &&
                      (this.instance.delta[this.directionAxis] =
                        this.instance.limit[this.directionAxis]);
                },
              },
              {
                key: 'updateScroll',
                value: function (c) {
                  this.isScrolling || this.isDraggingScrollbar
                    ? (this.instance.scroll[this.directionAxis] = Sa(
                        this.instance.scroll[this.directionAxis],
                        this.instance.delta[this.directionAxis],
                        this.lerp,
                      ))
                    : this.setScroll(
                        this.instance.scroll[this.directionAxis],
                        this.instance.scroll[this.directionAxis] >
                          this.instance.limit[this.directionAxis]
                          ? this.instance.limit[this.directionAxis]
                          : this.instance.scroll.y < 0
                          ? 0
                          : this.instance.delta[this.directionAxis],
                      );
                },
              },
              {
                key: 'addDirection',
                value: function () {
                  this.instance.delta.y > this.instance.scroll.y
                    ? 'down' !== this.instance.direction && (this.instance.direction = 'down')
                    : this.instance.delta.y < this.instance.scroll.y &&
                      'up' !== this.instance.direction &&
                      (this.instance.direction = 'up'),
                    this.instance.delta.x > this.instance.scroll.x
                      ? 'right' !== this.instance.direction && (this.instance.direction = 'right')
                      : this.instance.delta.x < this.instance.scroll.x &&
                        'left' !== this.instance.direction &&
                        (this.instance.direction = 'left');
                },
              },
              {
                key: 'addSpeed',
                value: function () {
                  this.instance.speed =
                    this.instance.delta[this.directionAxis] !=
                    this.instance.scroll[this.directionAxis]
                      ? (this.instance.delta[this.directionAxis] -
                          this.instance.scroll[this.directionAxis]) /
                        Math.max(1, Date.now() - this.speedTs)
                      : 0;
                },
              },
              {
                key: 'initScrollBar',
                value: function () {
                  if (
                    ((this.scrollbar = document.createElement('span')),
                    (this.scrollbarThumb = document.createElement('span')),
                    this.scrollbar.classList.add(''.concat(this.scrollbarClass)),
                    this.scrollbarThumb.classList.add(''.concat(this.scrollbarClass, '_thumb')),
                    this.scrollbar.append(this.scrollbarThumb),
                    this.scrollbarContainer
                      ? this.scrollbarContainer.append(this.scrollbar)
                      : document.body.append(this.scrollbar),
                    (this.getScrollBar = this.getScrollBar.bind(this)),
                    (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                    (this.moveScrollBar = this.moveScrollBar.bind(this)),
                    this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar),
                    window.addEventListener('mouseup', this.releaseScrollBar),
                    window.addEventListener('mousemove', this.moveScrollBar),
                    (this.hasScrollbar = !1),
                    'horizontal' == this.direction)
                  ) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                  } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                  (this.hasScrollbar = !0),
                    (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                    (this.scrollbarHeight = this.scrollbarBCR.height),
                    (this.scrollbarWidth = this.scrollbarBCR.width),
                    'horizontal' === this.direction
                      ? (this.scrollbarThumb.style.width = ''.concat(
                          (this.scrollbarWidth * this.scrollbarWidth) /
                            (this.instance.limit.x + this.scrollbarWidth),
                          'px',
                        ))
                      : (this.scrollbarThumb.style.height = ''.concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit.y + this.scrollbarHeight),
                          'px',
                        )),
                    (this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
                    (this.scrollBarLimit = {
                      x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                      y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                    });
                },
              },
              {
                key: 'reinitScrollBar',
                value: function () {
                  if (((this.hasScrollbar = !1), 'horizontal' == this.direction)) {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                  } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                  (this.hasScrollbar = !0),
                    (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                    (this.scrollbarHeight = this.scrollbarBCR.height),
                    (this.scrollbarWidth = this.scrollbarBCR.width),
                    'horizontal' === this.direction
                      ? (this.scrollbarThumb.style.width = ''.concat(
                          (this.scrollbarWidth * this.scrollbarWidth) /
                            (this.instance.limit.x + this.scrollbarWidth),
                          'px',
                        ))
                      : (this.scrollbarThumb.style.height = ''.concat(
                          (this.scrollbarHeight * this.scrollbarHeight) /
                            (this.instance.limit.y + this.scrollbarHeight),
                          'px',
                        )),
                    (this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect()),
                    (this.scrollBarLimit = {
                      x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                      y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                    });
                },
              },
              {
                key: 'destroyScrollBar',
                value: function () {
                  this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar),
                    window.removeEventListener('mouseup', this.releaseScrollBar),
                    window.removeEventListener('mousemove', this.moveScrollBar),
                    this.scrollbar.remove();
                },
              },
              {
                key: 'getScrollBar',
                value: function (c) {
                  (this.isDraggingScrollbar = !0),
                    this.checkScroll(),
                    this.html.classList.remove(this.scrollingClass),
                    this.html.classList.add(this.draggingClass);
                },
              },
              {
                key: 'releaseScrollBar',
                value: function (c) {
                  (this.isDraggingScrollbar = !1),
                    this.html.classList.add(this.scrollingClass),
                    this.html.classList.remove(this.draggingClass);
                },
              },
              {
                key: 'moveScrollBar',
                value: function (c) {
                  var h = this;
                  this.isDraggingScrollbar &&
                    requestAnimationFrame(function () {
                      var v =
                          (((100 * (c.clientX - h.scrollbarBCR.left)) / h.scrollbarWidth) *
                            h.instance.limit.x) /
                          100,
                        D =
                          (((100 * (c.clientY - h.scrollbarBCR.top)) / h.scrollbarHeight) *
                            h.instance.limit.y) /
                          100;
                      D > 0 && D < h.instance.limit.y && (h.instance.delta.y = D),
                        v > 0 && v < h.instance.limit.x && (h.instance.delta.x = v);
                    });
                },
              },
              {
                key: 'addElements',
                value: function () {
                  var c = this;
                  (this.els = {}),
                    (this.parallaxElements = {}),
                    this.el
                      .querySelectorAll('[data-'.concat(this.name, ']'))
                      .forEach(function (v, D) {
                        var G,
                          j,
                          Be,
                          x = hl(v),
                          M = Object.entries(c.sections)
                            .map(function (Ir) {
                              return ji(Ir, 2)[1];
                            })
                            .find(function (Ir) {
                              return x.includes(Ir.el);
                            }),
                          N = v.dataset[c.name + 'Class'] || c.class,
                          z =
                            'string' == typeof v.dataset[c.name + 'Id']
                              ? v.dataset[c.name + 'Id']
                              : 'el' + D,
                          te = v.dataset[c.name + 'Repeat'],
                          q = v.dataset[c.name + 'Call'],
                          _e = v.dataset[c.name + 'Position'],
                          Ie = v.dataset[c.name + 'Delay'],
                          Ye = v.dataset[c.name + 'Direction'],
                          ce = 'string' == typeof v.dataset[c.name + 'Sticky'],
                          de =
                            !!v.dataset[c.name + 'Speed'] &&
                            parseFloat(v.dataset[c.name + 'Speed']) / 10,
                          ve =
                            'string' == typeof v.dataset[c.name + 'Offset']
                              ? v.dataset[c.name + 'Offset'].split(',')
                              : c.offset,
                          Ae = v.dataset[c.name + 'Target'],
                          Qe = (Be =
                            void 0 !== Ae
                              ? document.querySelector(''.concat(Ae))
                              : v).getBoundingClientRect();
                        null === M || M.inView
                          ? ((G = Qe.top + c.instance.scroll.y - $r(Be).y),
                            (j = Qe.left + c.instance.scroll.x - $r(Be).x))
                          : ((G = Qe.top - $r(M.el).y - $r(Be).y),
                            (j = Qe.left - $r(M.el).x - $r(Be).x));
                        var je = G + Be.offsetHeight,
                          ht = j + Be.offsetWidth,
                          Lt = { x: (ht - j) / 2 + j, y: (je - G) / 2 + G };
                        if (ce) {
                          var an = v.getBoundingClientRect(),
                            xn = an.top,
                            vn = an.left,
                            Yn = { x: vn - j, y: xn - G };
                          (G += window.innerHeight),
                            (j += window.innerWidth),
                            (Lt = {
                              x:
                                ((ht = vn + Be.offsetWidth - v.offsetWidth - Yn[c.directionAxis]) -
                                  j) /
                                  2 +
                                j,
                              y:
                                ((je =
                                  xn + Be.offsetHeight - v.offsetHeight - Yn[c.directionAxis]) -
                                  G) /
                                  2 +
                                G,
                            });
                        }
                        te = 'false' != te && (null != te || c.repeat);
                        var rn = [0, 0];
                        if (ve)
                          if ('horizontal' === c.direction) {
                            for (var Zt = 0; Zt < ve.length; Zt++)
                              rn[Zt] =
                                'string' == typeof ve[Zt]
                                  ? ve[Zt].includes('%')
                                    ? parseInt((ve[Zt].replace('%', '') * c.windowWidth) / 100)
                                    : parseInt(ve[Zt])
                                  : ve[Zt];
                            (j += rn[0]), (ht -= rn[1]);
                          } else {
                            for (Zt = 0; Zt < ve.length; Zt++)
                              rn[Zt] =
                                'string' == typeof ve[Zt]
                                  ? ve[Zt].includes('%')
                                    ? parseInt((ve[Zt].replace('%', '') * c.windowHeight) / 100)
                                    : parseInt(ve[Zt])
                                  : ve[Zt];
                            (G += rn[0]), (je -= rn[1]);
                          }
                        var Jn = {
                          el: v,
                          id: z,
                          class: N,
                          section: M,
                          top: G,
                          middle: Lt,
                          bottom: je,
                          left: j,
                          right: ht,
                          offset: ve,
                          progress: 0,
                          repeat: te,
                          inView: !1,
                          call: q,
                          speed: de,
                          delay: Ie,
                          position: _e,
                          target: Be,
                          direction: Ye,
                          sticky: ce,
                        };
                        (c.els[z] = Jn),
                          v.classList.contains(N) && c.setInView(c.els[z], z),
                          (!1 !== de || ce) && (c.parallaxElements[z] = Jn);
                      });
                },
              },
              {
                key: 'addSections',
                value: function () {
                  var c = this;
                  this.sections = {};
                  var h = this.el.querySelectorAll('[data-'.concat(this.name, '-section]'));
                  0 === h.length && (h = [this.el]),
                    h.forEach(function (v, D) {
                      var x =
                          'string' == typeof v.dataset[c.name + 'Id']
                            ? v.dataset[c.name + 'Id']
                            : 'section' + D,
                        M = v.getBoundingClientRect(),
                        N = {
                          x: M.left - 1.5 * window.innerWidth - $r(v).x,
                          y: M.top - 1.5 * window.innerHeight - $r(v).y,
                        },
                        z = {
                          x: N.x + M.width + 2 * window.innerWidth,
                          y: N.y + M.height + 2 * window.innerHeight,
                        },
                        G = 'string' == typeof v.dataset[c.name + 'Persistent'];
                      v.setAttribute('data-scroll-section-id', x),
                        (c.sections[x] = {
                          el: v,
                          offset: N,
                          limit: z,
                          inView: !1,
                          persistent: G,
                          id: x,
                        });
                    });
                },
              },
              {
                key: 'transform',
                value: function (c, h, v, D) {
                  var x;
                  if (D) {
                    var M = $r(c),
                      N = Sa(M.x, h, D),
                      z = Sa(M.y, v, D);
                    x = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,'
                      .concat(N, ',')
                      .concat(z, ',0,1)');
                  } else
                    x = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,'
                      .concat(h, ',')
                      .concat(v, ',0,1)');
                  (c.style.webkitTransform = x), (c.style.msTransform = x), (c.style.transform = x);
                },
              },
              {
                key: 'transformElements',
                value: function (c) {
                  var h = this,
                    v = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    D = this.instance.scroll.x + this.windowWidth,
                    x = this.instance.scroll.y + this.windowHeight,
                    M = {
                      x: this.instance.scroll.x + this.windowMiddle.x,
                      y: this.instance.scroll.y + this.windowMiddle.y,
                    };
                  Object.entries(this.parallaxElements).forEach(function (N) {
                    var j = ji(N, 2)[1],
                      te = !1;
                    if ((c && (te = 0), j.inView || v))
                      switch (j.position) {
                        case 'top':
                          te = h.instance.scroll[h.directionAxis] * -j.speed;
                          break;
                        case 'elementTop':
                          te = (x - j.top) * -j.speed;
                          break;
                        case 'bottom':
                          te = (h.instance.limit[h.directionAxis] - x + h.windowHeight) * j.speed;
                          break;
                        case 'left':
                          te = h.instance.scroll[h.directionAxis] * -j.speed;
                          break;
                        case 'elementLeft':
                          te = (D - j.left) * -j.speed;
                          break;
                        case 'right':
                          te = (h.instance.limit[h.directionAxis] - D + h.windowHeight) * j.speed;
                          break;
                        default:
                          te = (M[h.directionAxis] - j.middle[h.directionAxis]) * -j.speed;
                      }
                    j.sticky &&
                      (te = j.inView
                        ? 'horizontal' === h.direction
                          ? h.instance.scroll.x - j.left + window.innerWidth
                          : h.instance.scroll.y - j.top + window.innerHeight
                        : 'horizontal' === h.direction
                        ? h.instance.scroll.x < j.left - window.innerWidth &&
                          h.instance.scroll.x < j.left - window.innerWidth / 2
                          ? 0
                          : h.instance.scroll.x > j.right &&
                            h.instance.scroll.x > j.right + 100 &&
                            j.right - j.left + window.innerWidth
                        : h.instance.scroll.y < j.top - window.innerHeight &&
                          h.instance.scroll.y < j.top - window.innerHeight / 2
                        ? 0
                        : h.instance.scroll.y > j.bottom &&
                          h.instance.scroll.y > j.bottom + 100 &&
                          j.bottom - j.top + window.innerHeight),
                      !1 !== te &&
                        ('horizontal' === j.direction ||
                        ('horizontal' === h.direction && 'vertical' !== j.direction)
                          ? h.transform(j.el, te, 0, !c && j.delay)
                          : h.transform(j.el, 0, te, !c && j.delay));
                  });
                },
              },
              {
                key: 'scrollTo',
                value: function (c) {
                  var h = this,
                    v = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    D = parseInt(v.offset) || 0,
                    x = isNaN(parseInt(v.duration)) ? 1e3 : parseInt(v.duration),
                    M = v.easing || [0.25, 0, 0.35, 1],
                    N = !!v.disableLerp,
                    z = !!v.callback && v.callback;
                  if (((M = Xc.apply(void 0, Hc(M))), 'string' == typeof c)) {
                    if ('top' === c) c = 0;
                    else if ('bottom' === c) c = this.instance.limit.y;
                    else if ('left' === c) c = 0;
                    else if ('right' === c) c = this.instance.limit.x;
                    else if (!(c = document.querySelector(c))) return;
                  } else if ('number' == typeof c) c = parseInt(c);
                  else if (!c || !c.tagName)
                    return void console.warn('`target` parameter is not valid');
                  if ('number' != typeof c) {
                    var G = hl(c).includes(this.el);
                    if (!G) return;
                    var j = c.getBoundingClientRect(),
                      te = j.top,
                      q = j.left,
                      _e = hl(c),
                      Ie = _e.find(function (je) {
                        return Object.entries(h.sections)
                          .map(function (ht) {
                            return ji(ht, 2)[1];
                          })
                          .find(function (ht) {
                            return ht.el == je;
                          });
                      }),
                      Ye = 0;
                    (Ye = Ie
                      ? $r(Ie)[this.directionAxis]
                      : -this.instance.scroll[this.directionAxis]),
                      (D = 'horizontal' === this.direction ? q + D - Ye : te + D - Ye);
                  } else D = c + D;
                  var ce = parseFloat(this.instance.delta[this.directionAxis]),
                    de = Math.max(0, Math.min(D, this.instance.limit[this.directionAxis])),
                    ve = de - ce,
                    Ae = function (ht) {
                      N
                        ? 'horizontal' === h.direction
                          ? h.setScroll(ce + ve * ht, h.instance.delta.y)
                          : h.setScroll(h.instance.delta.x, ce + ve * ht)
                        : (h.instance.delta[h.directionAxis] = ce + ve * ht);
                    };
                  (this.animatingScroll = !0), this.stopScrolling(), this.startScrolling();
                  var Be = Date.now(),
                    Qe = function je() {
                      var ht = (Date.now() - Be) / x;
                      ht > 1
                        ? (Ae(1), (h.animatingScroll = !1), 0 == x && h.update(), z && z())
                        : ((h.scrollToRaf = requestAnimationFrame(je)), Ae(M(ht)));
                    };
                  Qe();
                },
              },
              {
                key: 'update',
                value: function () {
                  this.setScrollLimit(),
                    this.addSections(),
                    this.addElements(),
                    this.detectElements(),
                    this.updateScroll(),
                    this.transformElements(!0),
                    this.reinitScrollBar(),
                    this.checkScroll(!0);
                },
              },
              {
                key: 'startScroll',
                value: function () {
                  this.stop = !1;
                },
              },
              {
                key: 'stopScroll',
                value: function () {
                  this.stop = !0;
                },
              },
              {
                key: 'setScroll',
                value: function (c, h) {
                  this.instance = dl(
                    dl({}, this.instance),
                    {},
                    { scroll: { x: c, y: h }, delta: { x: c, y: h }, speed: 0 },
                  );
                },
              },
              {
                key: 'destroy',
                value: function () {
                  qn(_i(a.prototype), 'destroy', this).call(this),
                    this.stopScrolling(),
                    this.html.classList.remove(this.smoothClass),
                    this.vs.destroy(),
                    this.destroyScrollBar(),
                    window.removeEventListener('keydown', this.checkKey, !1);
                },
              },
            ]),
            a
          );
        })(Rf);
      const zf = (function () {
          function d() {
            var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            ul(this, d),
              (this.options = s),
              Object.assign(this, Da, s),
              (this.smartphone = Da.smartphone),
              s.smartphone && Object.assign(this.smartphone, s.smartphone),
              (this.tablet = Da.tablet),
              s.tablet && Object.assign(this.tablet, s.tablet),
              !this.smooth &&
                'horizontal' == this.direction &&
                console.warn(
                  '\u{1f6a8} `smooth:false` & `horizontal` direction are not yet compatible',
                ),
              !this.tablet.smooth &&
                'horizontal' == this.tablet.direction &&
                console.warn(
                  '\u{1f6a8} `smooth:false` & `horizontal` direction are not yet compatible (tablet)',
                ),
              !this.smartphone.smooth &&
                'horizontal' == this.smartphone.direction &&
                console.warn(
                  '\u{1f6a8} `smooth:false` & `horizontal` direction are not yet compatible (smartphone)',
                ),
              this.init();
          }
          return (
            cl(d, [
              {
                key: 'init',
                value: function () {
                  if (
                    ((this.options.isMobile =
                      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent,
                      ) ||
                      ('MacIntel' === navigator.platform && navigator.maxTouchPoints > 1) ||
                      window.innerWidth < this.tablet.breakpoint),
                    (this.options.isTablet =
                      this.options.isMobile && window.innerWidth >= this.tablet.breakpoint),
                    (this.scroll =
                      (this.smooth && !this.options.isMobile) ||
                      (this.tablet.smooth && this.options.isTablet) ||
                      (this.smartphone.smooth && this.options.isMobile && !this.options.isTablet)
                        ? new bg(this.options)
                        : new Pf(this.options)),
                    this.scroll.init(),
                    window.location.hash)
                  ) {
                    var a = window.location.hash.slice(1, window.location.hash.length),
                      l = document.getElementById(a);
                    l && this.scroll.scrollTo(l);
                  }
                },
              },
              {
                key: 'update',
                value: function () {
                  this.scroll.update();
                },
              },
              {
                key: 'start',
                value: function () {
                  this.scroll.startScroll();
                },
              },
              {
                key: 'stop',
                value: function () {
                  this.scroll.stopScroll();
                },
              },
              {
                key: 'scrollTo',
                value: function (a, l) {
                  this.scroll.scrollTo(a, l);
                },
              },
              {
                key: 'setScroll',
                value: function (a, l) {
                  this.scroll.setScroll(a, l);
                },
              },
              {
                key: 'on',
                value: function (a, l) {
                  this.scroll.setEvents(a, l);
                },
              },
              {
                key: 'off',
                value: function (a, l) {
                  this.scroll.unsetEvents(a, l);
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.scroll.destroy();
                },
              },
            ]),
            d
          );
        })(),
        Wf = ['el'];
      function Yo(d, s) {
        if (1 & d) {
          const a = _.EpF();
          _.TgZ(0, 'span', 7),
            _.NdJ('click', function () {
              return _.CHM(a), _.oxw().toggleDarkMode();
            }),
            _.qZA();
        }
      }
      function Gf(d, s) {
        if (1 & d) {
          const a = _.EpF();
          _.TgZ(0, 'span', 8),
            _.NdJ('click', function () {
              return _.CHM(a), _.oxw().toggleDarkMode();
            }),
            _.qZA();
        }
      }
      let Yf = (() => {
        class d {
          constructor() {
            (this.isDarkMode = !0), (this.url = 'assets/md/a.md');
          }
          ngOnInit() {
            this.scroll = new zf({
              el: this.el.nativeElement,
              smooth: !0,
              scrollFromAnywhere: !0,
              resetNativeScroll: !1,
            });
          }
          ngAfterViewInit() {
            new Lc((l) => l.forEach(() => this.scroll && this.scroll.update())).observe(
              this.el.nativeElement,
            );
          }
          toggleDarkMode() {
            this.isDarkMode = !this.isDarkMode;
          }
        }
        return (
          (d.ɵfac = function (a) {
            return new (a || d)();
          }),
          (d.ɵcmp = _.Xpm({
            type: d,
            selectors: [['md-root']],
            viewQuery: function (a, l) {
              if ((1 & a && _.Gf(Wf, 7), 2 & a)) {
                let c;
                _.iGM((c = _.CRH())) && (l.el = c.first);
              }
            },
            hostVars: 2,
            hostBindings: function (a, l) {
              2 & a && _.ekj('dark-mode', l.isDarkMode);
            },
            decls: 18,
            vars: 2,
            consts: [
              ['data-scroll-container', ''],
              ['el', ''],
              ['routerLink', 'home'],
              ['hover', ''],
              ['routerLink', 'blog'],
              ['class', 'far fa-sun', 3, 'click', 4, 'ngIf', 'ngIfElse'],
              ['moon', ''],
              [1, 'far', 'fa-sun', 3, 'click'],
              [1, 'far', 'fa-moon', 3, 'click'],
            ],
            template: function (a, l) {
              if (
                (1 & a &&
                  (_.TgZ(0, 'md-cursor'),
                  _.TgZ(1, 'section', 0, 1),
                  _.TgZ(3, 'md-header'),
                  _.TgZ(4, 'li', 2, 3),
                  _._uU(6, 'Home'),
                  _.qZA(),
                  _.TgZ(7, 'li', 4, 3),
                  _._uU(9, 'Blog'),
                  _.qZA(),
                  _.TgZ(10, 'div', null, 3),
                  _.YNc(12, Yo, 1, 0, 'span', 5),
                  _.YNc(13, Gf, 1, 0, 'ng-template', null, 6, _.W1O),
                  _.qZA(),
                  _.qZA(),
                  _.TgZ(15, 'md-container'),
                  _._UZ(16, 'router-outlet'),
                  _.qZA(),
                  _.qZA(),
                  _._UZ(17, 'md-social'),
                  _.qZA()),
                2 & a)
              ) {
                const c = _.MAs(14);
                _.xp6(12), _.Q6J('ngIf', l.isDarkMode)('ngIfElse', c);
              }
            },
            directives: [Wt, Vo, Vn.rH, ho.O5, ie, Vn.lC, yf],
            styles: [
              '[_nghost-%COMP%]{background-blend-mode:screen;background-color:var(--dark);background-image:url(https://images.unsplash.com/photo-1524439210809-5b21a2e18582?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80);background-position:center center;background-repeat:no-repeat;background-size:cover;color:var(--contrast);display:block;min-height:100vh}.dark-mode[_nghost-%COMP%]{background-blend-mode:multiply}main[_ngcontent-%COMP%]{padding:2rem 8vw}span[_ngcontent-%COMP%]{animation:fade-in .5s ease;color:var(--primary);cursor:pointer;margin-left:1rem}@keyframes fade-in{0%{transform:scale(0)}to{transform:scale(1)}}',
            ],
          })),
          d
        );
      })();
      function Gs(d, s, a, l) {
        return new (a || (a = Promise))(function (h, v) {
          function D(N) {
            try {
              M(l.next(N));
            } catch (z) {
              v(z);
            }
          }
          function x(N) {
            try {
              M(l.throw(N));
            } catch (z) {
              v(z);
            }
          }
          function M(N) {
            N.done
              ? h(N.value)
              : (function (h) {
                  return h instanceof a
                    ? h
                    : new a(function (v) {
                        v(h);
                      });
                })(N.value).then(D, x);
          }
          M((l = l.apply(d, s || [])).next());
        });
      }
      var Ru = k(5094),
        Pu = new qa.y(of.Z),
        vo = k(1964),
        Nu = (function (d) {
          function s(a, l, c) {
            void 0 === a && (a = 1 / 0), void 0 === l && (l = 1 / 0), void 0 === c && (c = Ec);
            var h = d.call(this) || this;
            return (
              (h._bufferSize = a),
              (h._windowTime = l),
              (h._timestampProvider = c),
              (h._buffer = []),
              (h._infiniteTimeWindow = !0),
              (h._infiniteTimeWindow = l === 1 / 0),
              (h._bufferSize = Math.max(1, a)),
              (h._windowTime = Math.max(1, l)),
              h
            );
          }
          return (
            (0, ki.ZT)(s, d),
            (s.prototype.next = function (a) {
              var l = this,
                h = l._buffer,
                v = l._infiniteTimeWindow,
                D = l._timestampProvider,
                x = l._windowTime;
              l.isStopped || (h.push(a), !v && h.push(D.now() + x)),
                this._trimBuffer(),
                d.prototype.next.call(this, a);
            }),
            (s.prototype._subscribe = function (a) {
              this._throwIfClosed(), this._trimBuffer();
              for (
                var l = this._innerSubscribe(a),
                  h = this._infiniteTimeWindow,
                  D = this._buffer.slice(),
                  x = 0;
                x < D.length && !a.closed;
                x += h ? 1 : 2
              )
                a.next(D[x]);
              return this._checkFinalizedStatuses(a), l;
            }),
            (s.prototype._trimBuffer = function () {
              var a = this,
                l = a._bufferSize,
                c = a._timestampProvider,
                h = a._buffer,
                v = a._infiniteTimeWindow,
                D = (v ? 1 : 2) * l;
              if ((l < 1 / 0 && D < h.length && h.splice(0, h.length - D), !v)) {
                for (var x = c.now(), M = 0, N = 1; N < h.length && h[N] <= x; N += 2) M = N;
                M && h.splice(0, M + 1);
              }
            }),
            s
          );
        })(uo.x),
        Ui = (k(3763), k(7540)),
        _o = k(9922),
        id = k(7920),
        th = k(8047);
      var sd = k(3301),
        od = k(5894);
      const Aa = {
          useTransferState: !0,
          alwaysMonitor: !1,
          manualIdle: !1,
          baseURIForScullyContent: 'http://localhost:1668',
        },
        Oa = new _.OlP('scullyLibConfig', { factory: () => Aa }),
        oi = (d) => (
          d.includes('#') && (d = d.split('#')[0]),
          d.includes('?') && (d = d.split('?')[0]),
          d.endsWith('/') ? d.slice(0, -1) : d
        );
      function Ko(d, s = 'json') {
        return new Promise((a, l) => {
          const c = new XMLHttpRequest();
          (c.responseType = s),
            c.addEventListener('load', (h) => {
              if (200 !== c.status) return l(c);
              a(c.response);
            }),
            c.addEventListener('error', (...h) => l(h)),
            c.open('get', d, !0),
            c.send();
        });
      }
      const Ra = () => window && 'running' === window.ScullyIO,
        Fu = () => window && 'generated' === window.ScullyIO;
      function ad(d, s) {
        return d.endsWith('/') && s.startsWith('/')
          ? `${d}${s.substr(1)}`
          : d.endsWith('/') || s.startsWith('/')
          ? `${d}${s}`
          : `${d}/${s}`;
      }
      const ml = 'ScullyIO-transfer-state',
        yl = '/** ___SCULLY_STATE_START___ */',
        ys = '/** ___SCULLY_STATE_END___ */';
      let ud = (() => {
        class d {
          constructor(a, l) {
            (this.document = a),
              (this.router = l),
              (this.inlineOnly = !1),
              (this.currentBaseUrl = '//'),
              (this.stateBS = new Ru.X({})),
              (this.state$ = this.stateBS.pipe((0, br.h)((c) => void 0 !== c))),
              (this.nextUrl = this.router.events.pipe(
                (0, br.h)((c) => c instanceof Vn.OD),
                (0, Ui.w)((c) =>
                  oi(this.initialUrl) === oi(c.url)
                    ? ((this.initialUrl = '__done__with__Initial__navigation__'), Pu)
                    : (0, vo.of)(c),
                ),
                (0, _o.b)(() => this.stateBS.next(void 0)),
                (0, Ui.w)((c) =>
                  this.router.events.pipe(
                    (0, br.h)((h) => h instanceof Vn.m2 && h.url === c.url),
                    (0, id.P)(),
                  ),
                ),
                (0, fo.U)((c) => oi(c.urlAfterRedirects || c.url)),
                (function (d, s, a) {
                  var l,
                    c,
                    h,
                    v = !1;
                  return (
                    d && 'object' == typeof d
                      ? ((h = null !== (l = d.bufferSize) && void 0 !== l ? l : 1 / 0),
                        (s = null !== (c = d.windowTime) && void 0 !== c ? c : 1 / 0),
                        (v = !!d.refCount),
                        (a = d.scheduler))
                      : (h = null != d ? d : 1 / 0),
                    (0, th.B)({
                      connector: function () {
                        return new Nu(h, s, a);
                      },
                      resetOnError: !0,
                      resetOnComplete: !1,
                      resetOnRefCountZero: v,
                    })
                  );
                })(1),
              ));
          }
          startMonitoring() {
            window &&
              window['ScullyIO-injected'] &&
              window['ScullyIO-injected'].inlineStateOnly &&
              (this.inlineOnly = !0),
              this.setupEnvForTransferState(),
              this.setupStartNavMonitoring();
          }
          setupEnvForTransferState() {
            if (Ra()) {
              this.injectScript();
              const a = window['ScullyIO-exposed'] || {};
              a.transferState &&
                (this.stateBS.next(a.transferState), this.saveState(a.transferState));
            } else
              Fu() &&
                ((this.initialUrl = window.location.pathname || '__no_NO_no__'),
                (this.initialUrl =
                  '/' !== this.initialUrl && this.initialUrl.endsWith('/')
                    ? this.initialUrl.slice(0, -1)
                    : this.initialUrl),
                this.stateBS.next((window && window[ml]) || {}));
          }
          injectScript() {
            (this.script = this.document.createElement('script')),
              this.script.setAttribute('id', ml);
            let a = document.body.lastChild;
            for (; 'SCRIPT' === a.previousSibling.nodeName; ) a = a.previousSibling;
            document.body.insertBefore(this.script, a);
          }
          getState(a) {
            return this.fetchTransferState(), this.state$.pipe((0, sd.j)(a));
          }
          stateHasKey(a) {
            return this.stateBS.value && this.stateBS.value.hasOwnProperty(a);
          }
          stateKeyHasValue(a) {
            return (
              this.stateBS.value &&
              this.stateBS.value.hasOwnProperty(a) &&
              null != this.stateBS.value[a]
            );
          }
          setState(a, l) {
            const c = Object.assign(Object.assign({}, this.stateBS.value), { [a]: l });
            this.stateBS.next(c), this.saveState(c);
          }
          saveState(a) {
            Ra() &&
              (this.script.textContent = `{window['${ml}']=_u(\`${yl}${(function (d) {
                const s = {
                  "'": '_~q~',
                  '$': '_~o~',
                  '`': '_~b~',
                  '/': '_~s~',
                  '<': '_~l~',
                  '>': '_~g~',
                };
                return d.replace(/[\$`'<>\/]/g, (a) => s[a]).replace(/\\\"/g, '_~d~');
              })(
                JSON.stringify(a),
              )}${ys}\`);function _u(t){t=t.split('${yl}')[1].split('${ys}')[0];const u={'_~b~': "\`",'_~q~': "'",'_~o~': '$','_~s~': '/','_~l~': '<','_~g~': '>'};return JSON.parse(t.replace(/_~d~/g,'\\\\"').replace(/_~[^]~/g, (s) => u[s]).replace(/\\n/g,'\\\\n').replace(/\\t/g,'\\\\t').replace(/\\r/g,'\\\\r'));}}`);
          }
          setupStartNavMonitoring() {
            !Fu() || this.nextUrl.subscribe();
          }
          useScullyTransferState(a, l) {
            return Fu() ? this.getState(a) : l.pipe((0, _o.b)((c) => this.setState(a, c)));
          }
          fetchTransferState() {
            return Gs(this, void 0, void 0, function* () {
              const a = (h) => h.split('/').filter((v) => '' !== v.trim())[0];
              yield new Promise((h) => setTimeout(h, 0));
              const l = yield this.nextUrl.pipe((0, ls.q)(1)).toPromise(),
                c = a(l);
              this.currentBaseUrl !== c &&
                ((this.currentBaseUrl = c),
                this.nextUrl
                  .pipe(
                    (function (d, s) {
                      return (
                        void 0 === s && (s = !1),
                        (0, Sc.e)(function (a, l) {
                          a.subscribe(
                            new Tc.Q(l, function (h) {
                              var v = d(h);
                              (v || s) && l.next(h), !v && l.complete();
                            }),
                          );
                        })
                      );
                    })((h) => a(h) === this.currentBaseUrl),
                    (0, Ui.w)((h) =>
                      this.inlineOnly ? this.readFromIndex(h) : this.readFromJson(h),
                    ),
                    (0, od.K)(
                      (h) => (
                        console.warn('Error while loading of parsing Scully state:', h),
                        (0, vo.of)({})
                      ),
                    ),
                    (0, _o.b)((h) => {
                      this.stateBS.next(h);
                    }),
                  )
                  .subscribe({
                    complete: () => {
                      this.currentBaseUrl = '//';
                    },
                  }));
            });
          }
          readFromJson(a) {
            return Ko(Pa(ad(a, '/data.json')));
          }
          readFromIndex(a) {
            return Ko(Pa(ad(a, '/index.html')), 'text').then((l) => {
              const c = l.split(yl)[1].split(ys)[0];
              return JSON.parse(
                (function (d) {
                  const s = {
                    '_~q~': "'",
                    '_~b~': '`',
                    '_~o~': '$',
                    '_~s~': '/',
                    '_~l~': '<',
                    '_~g~': '>',
                  };
                  return d
                    .replace(/_~d~/g, '\\"')
                    .replace(/_~[^]~/g, (a) => s[a])
                    .replace(/\n/g, '\\n')
                    .replace(/\r/g, '\\r');
                })(c),
              );
            });
          }
        }
        return (
          (d.ɵfac = function (a) {
            return new (a || d)(_.LFG(ho.K0), _.LFG(Vn.F0));
          }),
          (d.ɵprov = (0, _.Yz7)({
            factory: function () {
              return new d((0, _.LFG)(ho.K0), (0, _.LFG)(Vn.F0));
            },
            token: d,
            providedIn: 'root',
          })),
          d
        );
      })();
      function Pa(d) {
        return d.startsWith('/') ? d.slice(1) : d;
      }
      let dd = (() => {
          class d {
            constructor(a, l, c, h) {
              (this.zone = a),
                (this.router = l),
                (this.initialUrl =
                  (function (d) {
                    return d.endsWith('/') ? d.slice(0, -1) : d;
                  })(window && window.location && window.location.pathname) || ''),
                (this.imState = new Ru.X({ idle: !1, timeOut: 5e3 })),
                (this.idle$ = this.imState.pipe((0, sd.j)('idle'))),
                (this.initApp = new Event('AngularInitialized', { bubbles: !0, cancelable: !1 })),
                (this.appReady = new Event('AngularReady', { bubbles: !0, cancelable: !1 })),
                (this.appTimeout = new Event('AngularTimeout', { bubbles: !0, cancelable: !1 })),
                (this.scullyLibConfig = Object.assign({}, Aa, c));
              const D = !!(window['ScullyIO-exposed'] || {}).manualIdle;
              !this.scullyLibConfig.manualIdle &&
                window &&
                (this.scullyLibConfig.alwaysMonitor || Ra()) &&
                (window.dispatchEvent(this.initApp),
                this.router.events
                  .pipe(
                    (0, br.h)((x) => x instanceof Vn.m2 && void 0 !== x.urlAfterRedirects),
                    (0, br.h)((x) => !D || x.urlAfterRedirects !== this.initialUrl),
                    (0, _o.b)(() => this.zoneIdleCheck()),
                  )
                  .subscribe()),
                this.scullyLibConfig.manualIdle && window.dispatchEvent(this.initApp),
                this.scullyLibConfig.useTransferState && h.startMonitoring();
            }
            fireManualMyAppReadyEvent() {
              return Gs(this, void 0, void 0, function* () {
                return window.dispatchEvent(this.appReady);
              });
            }
            init() {
              return Gs(this, void 0, void 0, function* () {
                return this.idle$.pipe((0, ls.q)(1)).toPromise();
              });
            }
            zoneIdleCheck() {
              return Gs(this, void 0, void 0, function* () {
                if (void 0 === Zone) return this.simpleTimeout();
                const a = Zone.current.get('TaskTrackingZone');
                if (void 0 === a) return this.simpleTimeout();
                this.imState.value.idle && (yield this.setState('idle', !1)),
                  this.zone.runOutsideAngular(() => {
                    let l,
                      c = 0;
                    const h = Date.now(),
                      v = () => {
                        clearTimeout(l),
                          Date.now() - h > 3e4
                            ? window.dispatchEvent(this.appTimeout)
                            : (a.macroTasks.length > 0 &&
                                void 0 !==
                                  a.macroTasks.find((D) => D.source.includes('XMLHttpRequest'))) ||
                              c < 1
                            ? (l = setTimeout(() => {
                                (c += 1), v();
                              }, 50))
                            : this.zone.run(() => {
                                setTimeout(() => {
                                  window.dispatchEvent(this.appReady), this.setState('idle', !0);
                                }, 250);
                              });
                      };
                    v();
                  });
              });
            }
            simpleTimeout() {
              return Gs(this, void 0, void 0, function* () {
                console.warn('Scully is using timeouts, add the needed polyfills instead!'),
                  yield new Promise((a) => setTimeout(a, this.imState.value.timeOut)),
                  window.dispatchEvent(this.appReady);
              });
            }
            setPupeteerTimeoutValue(a) {
              this.imState.next(
                Object.assign(Object.assign({}, this.imState.value), { timeOut: a }),
              );
            }
            setState(a, l) {
              this.imState.next(Object.assign(Object.assign({}, this.imState.value), { [a]: l }));
            }
          }
          return (
            (d.ɵfac = function (a) {
              return new (a || d)(_.LFG(_.R0b), _.LFG(Vn.F0), _.LFG(Oa), _.LFG(ud));
            }),
            (d.ɵprov = (0, _.Yz7)({
              factory: function () {
                return new d((0, _.LFG)(_.R0b), (0, _.LFG)(Vn.F0), (0, _.LFG)(Oa), (0, _.LFG)(ud));
              },
              token: d,
              providedIn: 'root',
            })),
            d
          );
        })(),
        Bu = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵmod = _.oAB({ type: d })),
            (d.ɵinj = _.cJS({})),
            d
          );
        })(),
        lh = (() => {
          class d {
            constructor(a) {
              this.idle = a;
            }
            static forRoot(a = Aa) {
              return (
                (a = Object.assign({}, Aa, a)),
                { ngModule: d, providers: [{ provide: Oa, useValue: a }] }
              );
            }
          }
          return (
            (d.ɵfac = function (a) {
              return new (a || d)(_.LFG(dd));
            }),
            (d.ɵmod = _.oAB({ type: d })),
            (d.ɵinj = _.cJS({ imports: [[Bu], Bu] })),
            d
          );
        })(),
        uh = (() => {
          class d {}
          return (
            (d.ɵfac = function (a) {
              return new (a || d)();
            }),
            (d.ɵmod = _.oAB({ type: d, bootstrap: [Yf] })),
            (d.ɵinj = _.cJS({ imports: [[du, R.b2, vf, Se.JF, lh]] })),
            d
          );
        })();
      k(2340).N.production && (0, _.G48)(),
        R.q6()
          .bootstrapModule(uh)
          .catch((d) => console.error(d));
    },
    9162: (_t, Oe, k) => {
      'use strict';
      k.d(Oe, {
        ZT: () => _,
        mG: () => oe,
        Jh: () => we,
        XA: () => H,
        CR: () => Ne,
        ev: () => Ke,
        qq: () => st,
        FC: () => Ue,
        KL: () => $e,
      });
      var R = function (se, X) {
        return (R =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (ae, ye) {
              ae.__proto__ = ye;
            }) ||
          function (ae, ye) {
            for (var Re in ye) Object.prototype.hasOwnProperty.call(ye, Re) && (ae[Re] = ye[Re]);
          })(se, X);
      };
      function _(se, X) {
        if ('function' != typeof X && null !== X)
          throw new TypeError('Class extends value ' + String(X) + ' is not a constructor or null');
        function ae() {
          this.constructor = se;
        }
        R(se, X),
          (se.prototype = null === X ? Object.create(X) : ((ae.prototype = X.prototype), new ae()));
      }
      function oe(se, X, ae, ye) {
        return new (ae || (ae = Promise))(function (re, dt) {
          function me(Xe) {
            try {
              Te(ye.next(Xe));
            } catch (nt) {
              dt(nt);
            }
          }
          function Ge(Xe) {
            try {
              Te(ye.throw(Xe));
            } catch (nt) {
              dt(nt);
            }
          }
          function Te(Xe) {
            Xe.done
              ? re(Xe.value)
              : (function (re) {
                  return re instanceof ae
                    ? re
                    : new ae(function (dt) {
                        dt(re);
                      });
                })(Xe.value).then(me, Ge);
          }
          Te((ye = ye.apply(se, X || [])).next());
        });
      }
      function we(se, X) {
        var ye,
          Re,
          re,
          dt,
          ae = {
            label: 0,
            sent: function () {
              if (1 & re[0]) throw re[1];
              return re[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (dt = { next: me(0), throw: me(1), return: me(2) }),
          'function' == typeof Symbol &&
            (dt[Symbol.iterator] = function () {
              return this;
            }),
          dt
        );
        function me(Te) {
          return function (Xe) {
            return (function (Te) {
              if (ye) throw new TypeError('Generator is already executing.');
              for (; ae; )
                try {
                  if (
                    ((ye = 1),
                    Re &&
                      (re =
                        2 & Te[0]
                          ? Re.return
                          : Te[0]
                          ? Re.throw || ((re = Re.return) && re.call(Re), 0)
                          : Re.next) &&
                      !(re = re.call(Re, Te[1])).done)
                  )
                    return re;
                  switch (((Re = 0), re && (Te = [2 & Te[0], re.value]), Te[0])) {
                    case 0:
                    case 1:
                      re = Te;
                      break;
                    case 4:
                      return ae.label++, { value: Te[1], done: !1 };
                    case 5:
                      ae.label++, (Re = Te[1]), (Te = [0]);
                      continue;
                    case 7:
                      (Te = ae.ops.pop()), ae.trys.pop();
                      continue;
                    default:
                      if (
                        !(re = (re = ae.trys).length > 0 && re[re.length - 1]) &&
                        (6 === Te[0] || 2 === Te[0])
                      ) {
                        ae = 0;
                        continue;
                      }
                      if (3 === Te[0] && (!re || (Te[1] > re[0] && Te[1] < re[3]))) {
                        ae.label = Te[1];
                        break;
                      }
                      if (6 === Te[0] && ae.label < re[1]) {
                        (ae.label = re[1]), (re = Te);
                        break;
                      }
                      if (re && ae.label < re[2]) {
                        (ae.label = re[2]), ae.ops.push(Te);
                        break;
                      }
                      re[2] && ae.ops.pop(), ae.trys.pop();
                      continue;
                  }
                  Te = X.call(se, ae);
                } catch (Xe) {
                  (Te = [6, Xe]), (Re = 0);
                } finally {
                  ye = re = 0;
                }
              if (5 & Te[0]) throw Te[1];
              return { value: Te[0] ? Te[1] : void 0, done: !0 };
            })([Te, Xe]);
          };
        }
      }
      function H(se) {
        var X = 'function' == typeof Symbol && Symbol.iterator,
          ae = X && se[X],
          ye = 0;
        if (ae) return ae.call(se);
        if (se && 'number' == typeof se.length)
          return {
            next: function () {
              return se && ye >= se.length && (se = void 0), { value: se && se[ye++], done: !se };
            },
          };
        throw new TypeError(X ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function Ne(se, X) {
        var ae = 'function' == typeof Symbol && se[Symbol.iterator];
        if (!ae) return se;
        var Re,
          dt,
          ye = ae.call(se),
          re = [];
        try {
          for (; (void 0 === X || X-- > 0) && !(Re = ye.next()).done; ) re.push(Re.value);
        } catch (me) {
          dt = { error: me };
        } finally {
          try {
            Re && !Re.done && (ae = ye.return) && ae.call(ye);
          } finally {
            if (dt) throw dt.error;
          }
        }
        return re;
      }
      function Ke(se, X) {
        for (var ae = 0, ye = X.length, Re = se.length; ae < ye; ae++, Re++) se[Re] = X[ae];
        return se;
      }
      function st(se) {
        return this instanceof st ? ((this.v = se), this) : new st(se);
      }
      function Ue(se, X, ae) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var Re,
          ye = ae.apply(se, X || []),
          re = [];
        return (
          (Re = {}),
          dt('next'),
          dt('throw'),
          dt('return'),
          (Re[Symbol.asyncIterator] = function () {
            return this;
          }),
          Re
        );
        function dt(Ct) {
          ye[Ct] &&
            (Re[Ct] = function (jt) {
              return new Promise(function (In, Bt) {
                re.push([Ct, jt, In, Bt]) > 1 || me(Ct, jt);
              });
            });
        }
        function me(Ct, jt) {
          try {
            !(function (Ct) {
              Ct.value instanceof st ? Promise.resolve(Ct.value.v).then(Te, Xe) : nt(re[0][2], Ct);
            })(ye[Ct](jt));
          } catch (In) {
            nt(re[0][3], In);
          }
        }
        function Te(Ct) {
          me('next', Ct);
        }
        function Xe(Ct) {
          me('throw', Ct);
        }
        function nt(Ct, jt) {
          Ct(jt), re.shift(), re.length && me(re[0][0], re[0][1]);
        }
      }
      function $e(se) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var ae,
          X = se[Symbol.asyncIterator];
        return X
          ? X.call(se)
          : ((se = H(se)),
            (ae = {}),
            ye('next'),
            ye('throw'),
            ye('return'),
            (ae[Symbol.asyncIterator] = function () {
              return this;
            }),
            ae);
        function ye(re) {
          ae[re] =
            se[re] &&
            function (dt) {
              return new Promise(function (me, Ge) {
                !(function (re, dt, me, Ge) {
                  Promise.resolve(Ge).then(function (Te) {
                    re({ value: Te, done: me });
                  }, dt);
                })(me, Ge, (dt = se[re](dt)).done, dt.value);
              });
            };
        }
      }
    },
  },
  (_t) => {
    _t((_t.s = 2901));
  },
]);
