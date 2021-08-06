(self.webpackChunkmarkdown = self.webpackChunkmarkdown || []).push([
  [85],
  {
    5478: function (N) {
      !(function (H) {
        'use strict';
        var s = {
          newline: /^\n+/,
          code: /^( {4}[^\n]+\n*)+/,
          fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
          hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
          heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
          blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
          list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
          html: '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
          def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
          nptable: E,
          table: E,
          lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
          _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
          text: /^[^\n]+/,
        };
        function b(e) {
          (this.tokens = []),
            (this.tokens.links = Object.create(null)),
            (this.options = e || f.defaults),
            (this.rules = s.normal),
            this.options.pedantic
              ? (this.rules = s.pedantic)
              : this.options.gfm && (this.rules = s.gfm);
        }
        (s._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
          (s._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
          (s.def = F(s.def).replace('label', s._label).replace('title', s._title).getRegex()),
          (s.bullet = /(?:[*+-]|\d{1,9}\.)/),
          (s.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
          (s.item = F(s.item, 'gm').replace(/bull/g, s.bullet).getRegex()),
          (s.list = F(s.list)
            .replace(/bull/g, s.bullet)
            .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
            .replace('def', '\\n+(?=' + s.def.source + ')')
            .getRegex()),
          (s._tag =
            'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
          (s._comment = /<!--(?!-?>)[\s\S]*?-->/),
          (s.html = F(s.html, 'i')
            .replace('comment', s._comment)
            .replace('tag', s._tag)
            .replace(
              'attribute',
              / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
            )
            .getRegex()),
          (s.paragraph = F(s._paragraph)
            .replace('hr', s.hr)
            .replace('heading', ' {0,3}#{1,6} +')
            .replace('|lheading', '')
            .replace('blockquote', ' {0,3}>')
            .replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n')
            .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
            .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
            .replace('tag', s._tag)
            .getRegex()),
          (s.blockquote = F(s.blockquote).replace('paragraph', s.paragraph).getRegex()),
          (s.normal = a({}, s)),
          (s.gfm = a({}, s.normal, {
            nptable:
              /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
            table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/,
          })),
          (s.pedantic = a({}, s.normal, {
            html: F(
              '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))',
            )
              .replace('comment', s._comment)
              .replace(
                /tag/g,
                '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
              )
              .getRegex(),
            def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
            fences: E,
            paragraph: F(s.normal._paragraph)
              .replace('hr', s.hr)
              .replace('heading', ' *#{1,6} *[^\n]')
              .replace('lheading', s.lheading)
              .replace('blockquote', ' {0,3}>')
              .replace('|fences', '')
              .replace('|list', '')
              .replace('|html', '')
              .getRegex(),
          })),
          (b.rules = s),
          (b.lex = function (e, t) {
            return new b(t).lex(e);
          }),
          (b.prototype.lex = function (e) {
            return (
              (e = e
                .replace(/\r\n|\r/g, '\n')
                .replace(/\t/g, '    ')
                .replace(/\u00a0/g, ' ')
                .replace(/\u2424/g, '\n')),
              this.token(e, !0)
            );
          }),
          (b.prototype.token = function (e, t) {
            e = e.replace(/^ +$/gm, '');
            for (var r, l, i, C, p, x, k, M, S, g, u, h, w, R, L, D; e; )
              if (
                ((i = this.rules.newline.exec(e)) &&
                  ((e = e.substring(i[0].length)),
                  i[0].length > 1 && this.tokens.push({ type: 'space' })),
                (i = this.rules.code.exec(e)))
              ) {
                var B = this.tokens[this.tokens.length - 1];
                (e = e.substring(i[0].length)),
                  B && 'paragraph' === B.type
                    ? (B.text += '\n' + i[0].trimRight())
                    : ((i = i[0].replace(/^ {4}/gm, '')),
                      this.tokens.push({
                        type: 'code',
                        codeBlockStyle: 'indented',
                        text: this.options.pedantic ? i : d(i, '\n'),
                      }));
              } else if ((i = this.rules.fences.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: 'code',
                    lang: i[2] ? i[2].trim() : i[2],
                    text: i[3] || '',
                  });
              else if ((i = this.rules.heading.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({ type: 'heading', depth: i[1].length, text: i[2] });
              else if (
                (i = this.rules.nptable.exec(e)) &&
                (x = {
                  type: 'table',
                  header: o(i[1].replace(/^ *| *\| *$/g, '')),
                  align: i[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: i[3] ? i[3].replace(/\n$/, '').split('\n') : [],
                }).header.length === x.align.length
              ) {
                for (e = e.substring(i[0].length), u = 0; u < x.align.length; u++)
                  x.align[u] = /^ *-+: *$/.test(x.align[u])
                    ? 'right'
                    : /^ *:-+: *$/.test(x.align[u])
                    ? 'center'
                    : /^ *:-+ *$/.test(x.align[u])
                    ? 'left'
                    : null;
                for (u = 0; u < x.cells.length; u++) x.cells[u] = o(x.cells[u], x.header.length);
                this.tokens.push(x);
              } else if ((i = this.rules.hr.exec(e)))
                (e = e.substring(i[0].length)), this.tokens.push({ type: 'hr' });
              else if ((i = this.rules.blockquote.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({ type: 'blockquote_start' }),
                  (i = i[0].replace(/^ *> ?/gm, '')),
                  this.token(i, t),
                  this.tokens.push({ type: 'blockquote_end' });
              else if ((i = this.rules.list.exec(e))) {
                for (
                  e = e.substring(i[0].length),
                    this.tokens.push(
                      (k = {
                        type: 'list_start',
                        ordered: (R = (C = i[2]).length > 1),
                        start: R ? +C : '',
                        loose: !1,
                      }),
                    ),
                    M = [],
                    r = !1,
                    w = (i = i[0].match(this.rules.item)).length,
                    u = 0;
                  u < w;
                  u++
                )
                  (g = (x = i[u]).length),
                    ~(x = x.replace(/^ *([*+-]|\d+\.) */, '')).indexOf('\n ') &&
                      ((g -= x.length),
                      (x = x.replace(
                        this.options.pedantic ? /^ {1,4}/gm : new RegExp('^ {1,' + g + '}', 'gm'),
                        '',
                      ))),
                    u !== w - 1 &&
                      ((p = s.bullet.exec(i[u + 1])[0]),
                      (C.length > 1
                        ? 1 === p.length
                        : p.length > 1 || (this.options.smartLists && p !== C)) &&
                        ((e = i.slice(u + 1).join('\n') + e), (u = w - 1))),
                    (l = r || /\n\n(?!\s*$)/.test(x)),
                    u !== w - 1 && ((r = '\n' === x.charAt(x.length - 1)), l || (l = r)),
                    l && (k.loose = !0),
                    (D = void 0),
                    (L = /^\[[ xX]\] /.test(x)) &&
                      ((D = ' ' !== x[1]), (x = x.replace(/^\[[ xX]\] +/, ''))),
                    M.push((S = { type: 'list_item_start', task: L, checked: D, loose: l })),
                    this.tokens.push(S),
                    this.token(x, !1),
                    this.tokens.push({ type: 'list_item_end' });
                if (k.loose) for (w = M.length, u = 0; u < w; u++) M[u].loose = !0;
                this.tokens.push({ type: 'list_end' });
              } else if ((i = this.rules.html.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: this.options.sanitize ? 'paragraph' : 'html',
                    pre:
                      !this.options.sanitizer &&
                      ('pre' === i[1] || 'script' === i[1] || 'style' === i[1]),
                    text: this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(i[0])
                        : A(i[0])
                      : i[0],
                  });
              else if (t && (i = this.rules.def.exec(e)))
                (e = e.substring(i[0].length)),
                  i[3] && (i[3] = i[3].substring(1, i[3].length - 1)),
                  (h = i[1].toLowerCase().replace(/\s+/g, ' ')),
                  this.tokens.links[h] || (this.tokens.links[h] = { href: i[2], title: i[3] });
              else if (
                (i = this.rules.table.exec(e)) &&
                (x = {
                  type: 'table',
                  header: o(i[1].replace(/^ *| *\| *$/g, '')),
                  align: i[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                  cells: i[3] ? i[3].replace(/\n$/, '').split('\n') : [],
                }).header.length === x.align.length
              ) {
                for (e = e.substring(i[0].length), u = 0; u < x.align.length; u++)
                  x.align[u] = /^ *-+: *$/.test(x.align[u])
                    ? 'right'
                    : /^ *:-+: *$/.test(x.align[u])
                    ? 'center'
                    : /^ *:-+ *$/.test(x.align[u])
                    ? 'left'
                    : null;
                for (u = 0; u < x.cells.length; u++)
                  x.cells[u] = o(x.cells[u].replace(/^ *\| *| *\| *$/g, ''), x.header.length);
                this.tokens.push(x);
              } else if ((i = this.rules.lheading.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: 'heading',
                    depth: '=' === i[2].charAt(0) ? 1 : 2,
                    text: i[1],
                  });
              else if (t && (i = this.rules.paragraph.exec(e)))
                (e = e.substring(i[0].length)),
                  this.tokens.push({
                    type: 'paragraph',
                    text: '\n' === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1],
                  });
              else if ((i = this.rules.text.exec(e)))
                (e = e.substring(i[0].length)), this.tokens.push({ type: 'text', text: i[0] });
              else if (e) throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
            return this.tokens;
          });
        var v = {
          escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
          autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
          url: E,
          tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
          link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
          reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
          nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
          strong:
            /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
          em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
          code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
          br: /^( {2,}|\\)\n(?!\s*$)/,
          del: E,
          text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/,
        };
        function _(e, t) {
          if (
            ((this.options = t || f.defaults),
            (this.links = e),
            (this.rules = v.normal),
            (this.renderer = this.options.renderer || new y()),
            (this.renderer.options = this.options),
            !this.links)
          )
            throw new Error('Tokens array requires a `links` property.');
          this.options.pedantic
            ? (this.rules = v.pedantic)
            : this.options.gfm && (this.rules = this.options.breaks ? v.breaks : v.gfm);
        }
        function y(e) {
          this.options = e || f.defaults;
        }
        function n() {}
        function $(e) {
          (this.tokens = []),
            (this.token = null),
            (this.options = e || f.defaults),
            (this.options.renderer = this.options.renderer || new y()),
            (this.renderer = this.options.renderer),
            (this.renderer.options = this.options),
            (this.slugger = new O());
        }
        function O() {
          this.seen = {};
        }
        function A(e, t) {
          if (t) {
            if (A.escapeTest.test(e))
              return e.replace(A.escapeReplace, function (r) {
                return A.replacements[r];
              });
          } else if (A.escapeTestNoEncode.test(e))
            return e.replace(A.escapeReplaceNoEncode, function (r) {
              return A.replacements[r];
            });
          return e;
        }
        function P(e) {
          return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (t, r) {
            return 'colon' === (r = r.toLowerCase())
              ? ':'
              : '#' === r.charAt(0)
              ? 'x' === r.charAt(1)
                ? String.fromCharCode(parseInt(r.substring(2), 16))
                : String.fromCharCode(+r.substring(1))
              : '';
          });
        }
        function F(e, t) {
          return (
            (e = e.source || e),
            (t = t || ''),
            {
              replace: function (r, l) {
                return (
                  (l = (l = l.source || l).replace(/(^|[^\[])\^/g, '$1')),
                  (e = e.replace(r, l)),
                  this
                );
              },
              getRegex: function () {
                return new RegExp(e, t);
              },
            }
          );
        }
        function Z(e, t, r) {
          if (e) {
            try {
              var l = decodeURIComponent(P(r))
                .replace(/[^\w:]/g, '')
                .toLowerCase();
            } catch (i) {
              return null;
            }
            if (
              0 === l.indexOf('javascript:') ||
              0 === l.indexOf('vbscript:') ||
              0 === l.indexOf('data:')
            )
              return null;
          }
          t &&
            !T.test(r) &&
            (r = (function (e, t) {
              return (
                z[' ' + e] || (z[' ' + e] = /^[^:]+:\/*[^/]*$/.test(e) ? e + '/' : d(e, '/', !0)),
                (e = z[' ' + e]),
                '//' === t.slice(0, 2)
                  ? e.replace(/:[\s\S]*/, ':') + t
                  : '/' === t.charAt(0)
                  ? e.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + t
                  : e + t
              );
            })(t, r));
          try {
            r = encodeURI(r).replace(/%25/g, '%');
          } catch (i) {
            return null;
          }
          return r;
        }
        (v._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~'),
          (v.em = F(v.em)
            .replace(/punctuation/g, v._punctuation)
            .getRegex()),
          (v._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
          (v._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
          (v._email =
            /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
          (v.autolink = F(v.autolink)
            .replace('scheme', v._scheme)
            .replace('email', v._email)
            .getRegex()),
          (v._attribute =
            /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
          (v.tag = F(v.tag)
            .replace('comment', s._comment)
            .replace('attribute', v._attribute)
            .getRegex()),
          (v._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
          (v._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/),
          (v._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
          (v.link = F(v.link)
            .replace('label', v._label)
            .replace('href', v._href)
            .replace('title', v._title)
            .getRegex()),
          (v.reflink = F(v.reflink).replace('label', v._label).getRegex()),
          (v.normal = a({}, v)),
          (v.pedantic = a({}, v.normal, {
            strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
            em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
            link: F(/^!?\[(label)\]\((.*?)\)/)
              .replace('label', v._label)
              .getRegex(),
            reflink: F(/^!?\[(label)\]\s*\[([^\]]*)\]/)
              .replace('label', v._label)
              .getRegex(),
          })),
          (v.gfm = a({}, v.normal, {
            escape: F(v.escape).replace('])', '~|])').getRegex(),
            _extended_email:
              /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
            url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
            _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
            del: /^~+(?=\S)([\s\S]*?\S)~+/,
            text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
          })),
          (v.gfm.url = F(v.gfm.url, 'i').replace('email', v.gfm._extended_email).getRegex()),
          (v.breaks = a({}, v.gfm, {
            br: F(v.br).replace('{2,}', '*').getRegex(),
            text: F(v.gfm.text)
              .replace('\\b_', '\\b_| {2,}\\n')
              .replace(/\{2,\}/g, '*')
              .getRegex(),
          })),
          (_.rules = v),
          (_.output = function (e, t, r) {
            return new _(t, r).output(e);
          }),
          (_.prototype.output = function (e) {
            for (var r, l, i, C, p, x, t = ''; e; )
              if ((p = this.rules.escape.exec(e))) (e = e.substring(p[0].length)), (t += A(p[1]));
              else if ((p = this.rules.tag.exec(e)))
                !this.inLink && /^<a /i.test(p[0])
                  ? (this.inLink = !0)
                  : this.inLink && /^<\/a>/i.test(p[0]) && (this.inLink = !1),
                  !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(p[0])
                    ? (this.inRawBlock = !0)
                    : this.inRawBlock &&
                      /^<\/(pre|code|kbd|script)(\s|>)/i.test(p[0]) &&
                      (this.inRawBlock = !1),
                  (e = e.substring(p[0].length)),
                  (t += this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(p[0])
                      : A(p[0])
                    : p[0]);
              else if ((p = this.rules.link.exec(e))) {
                var k = m(p[2], '()');
                if (k > -1) {
                  var M = 4 + p[1].length + k;
                  (p[2] = p[2].substring(0, k)), (p[0] = p[0].substring(0, M).trim()), (p[3] = '');
                }
                (e = e.substring(p[0].length)),
                  (this.inLink = !0),
                  (i = p[2]),
                  this.options.pedantic
                    ? (r = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i))
                      ? ((i = r[1]), (C = r[3]))
                      : (C = '')
                    : (C = p[3] ? p[3].slice(1, -1) : ''),
                  (i = i.trim().replace(/^<([\s\S]*)>$/, '$1')),
                  (t += this.outputLink(p, { href: _.escapes(i), title: _.escapes(C) })),
                  (this.inLink = !1);
              } else if ((p = this.rules.reflink.exec(e)) || (p = this.rules.nolink.exec(e))) {
                if (
                  ((e = e.substring(p[0].length)),
                  (r = (p[2] || p[1]).replace(/\s+/g, ' ')),
                  !(r = this.links[r.toLowerCase()]) || !r.href)
                ) {
                  (t += p[0].charAt(0)), (e = p[0].substring(1) + e);
                  continue;
                }
                (this.inLink = !0), (t += this.outputLink(p, r)), (this.inLink = !1);
              } else if ((p = this.rules.strong.exec(e)))
                (e = e.substring(p[0].length)),
                  (t += this.renderer.strong(this.output(p[4] || p[3] || p[2] || p[1])));
              else if ((p = this.rules.em.exec(e)))
                (e = e.substring(p[0].length)),
                  (t += this.renderer.em(
                    this.output(p[6] || p[5] || p[4] || p[3] || p[2] || p[1]),
                  ));
              else if ((p = this.rules.code.exec(e)))
                (e = e.substring(p[0].length)), (t += this.renderer.codespan(A(p[2].trim(), !0)));
              else if ((p = this.rules.br.exec(e)))
                (e = e.substring(p[0].length)), (t += this.renderer.br());
              else if ((p = this.rules.del.exec(e)))
                (e = e.substring(p[0].length)), (t += this.renderer.del(this.output(p[1])));
              else if ((p = this.rules.autolink.exec(e)))
                (e = e.substring(p[0].length)),
                  (i = '@' === p[2] ? 'mailto:' + (l = A(this.mangle(p[1]))) : (l = A(p[1]))),
                  (t += this.renderer.link(i, null, l));
              else if (this.inLink || !(p = this.rules.url.exec(e))) {
                if ((p = this.rules.text.exec(e)))
                  (e = e.substring(p[0].length)),
                    (t += this.renderer.text(
                      this.inRawBlock
                        ? this.options.sanitize
                          ? this.options.sanitizer
                            ? this.options.sanitizer(p[0])
                            : A(p[0])
                          : p[0]
                        : A(this.smartypants(p[0])),
                    ));
                else if (e) throw new Error('Infinite loop on byte: ' + e.charCodeAt(0));
              } else {
                if ('@' === p[2]) i = 'mailto:' + (l = A(p[0]));
                else {
                  do {
                    (x = p[0]), (p[0] = this.rules._backpedal.exec(p[0])[0]);
                  } while (x !== p[0]);
                  (l = A(p[0])), (i = 'www.' === p[1] ? 'http://' + l : l);
                }
                (e = e.substring(p[0].length)), (t += this.renderer.link(i, null, l));
              }
            return t;
          }),
          (_.escapes = function (e) {
            return e && e.replace(_.rules._escapes, '$1');
          }),
          (_.prototype.outputLink = function (e, t) {
            var r = t.href,
              l = t.title ? A(t.title) : null;
            return '!' !== e[0].charAt(0)
              ? this.renderer.link(r, l, this.output(e[1]))
              : this.renderer.image(r, l, A(e[1]));
          }),
          (_.prototype.smartypants = function (e) {
            return this.options.smartypants
              ? e
                  .replace(/---/g, '\u2014')
                  .replace(/--/g, '\u2013')
                  .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
                  .replace(/'/g, '\u2019')
                  .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
                  .replace(/"/g, '\u201d')
                  .replace(/\.{3}/g, '\u2026')
              : e;
          }),
          (_.prototype.mangle = function (e) {
            if (!this.options.mangle) return e;
            for (var i, t = '', r = e.length, l = 0; l < r; l++)
              (i = e.charCodeAt(l)),
                Math.random() > 0.5 && (i = 'x' + i.toString(16)),
                (t += '&#' + i + ';');
            return t;
          }),
          (y.prototype.code = function (e, t, r) {
            var l = (t || '').match(/\S*/)[0];
            if (this.options.highlight) {
              var i = this.options.highlight(e, l);
              null != i && i !== e && ((r = !0), (e = i));
            }
            return l
              ? '<pre><code class="' +
                  this.options.langPrefix +
                  A(l, !0) +
                  '">' +
                  (r ? e : A(e, !0)) +
                  '</code></pre>\n'
              : '<pre><code>' + (r ? e : A(e, !0)) + '</code></pre>';
          }),
          (y.prototype.blockquote = function (e) {
            return '<blockquote>\n' + e + '</blockquote>\n';
          }),
          (y.prototype.html = function (e) {
            return e;
          }),
          (y.prototype.heading = function (e, t, r, l) {
            return this.options.headerIds
              ? '<h' +
                  t +
                  ' id="' +
                  this.options.headerPrefix +
                  l.slug(r) +
                  '">' +
                  e +
                  '</h' +
                  t +
                  '>\n'
              : '<h' + t + '>' + e + '</h' + t + '>\n';
          }),
          (y.prototype.hr = function () {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          }),
          (y.prototype.list = function (e, t, r) {
            var l = t ? 'ol' : 'ul';
            return (
              '<' + l + (t && 1 !== r ? ' start="' + r + '"' : '') + '>\n' + e + '</' + l + '>\n'
            );
          }),
          (y.prototype.listitem = function (e) {
            return '<li>' + e + '</li>\n';
          }),
          (y.prototype.checkbox = function (e) {
            return (
              '<input ' +
              (e ? 'checked="" ' : '') +
              'disabled="" type="checkbox"' +
              (this.options.xhtml ? ' /' : '') +
              '> '
            );
          }),
          (y.prototype.paragraph = function (e) {
            return '<p>' + e + '</p>\n';
          }),
          (y.prototype.table = function (e, t) {
            return (
              t && (t = '<tbody>' + t + '</tbody>'),
              '<table>\n<thead>\n' + e + '</thead>\n' + t + '</table>\n'
            );
          }),
          (y.prototype.tablerow = function (e) {
            return '<tr>\n' + e + '</tr>\n';
          }),
          (y.prototype.tablecell = function (e, t) {
            var r = t.header ? 'th' : 'td';
            return (
              (t.align ? '<' + r + ' align="' + t.align + '">' : '<' + r + '>') +
              e +
              '</' +
              r +
              '>\n'
            );
          }),
          (y.prototype.strong = function (e) {
            return '<strong>' + e + '</strong>';
          }),
          (y.prototype.em = function (e) {
            return '<em>' + e + '</em>';
          }),
          (y.prototype.codespan = function (e) {
            return '<code>' + e + '</code>';
          }),
          (y.prototype.br = function () {
            return this.options.xhtml ? '<br/>' : '<br>';
          }),
          (y.prototype.del = function (e) {
            return '<del>' + e + '</del>';
          }),
          (y.prototype.link = function (e, t, r) {
            if (null === (e = Z(this.options.sanitize, this.options.baseUrl, e))) return r;
            var l = '<a href="' + A(e) + '"';
            return t && (l += ' title="' + t + '"'), l + '>' + r + '</a>';
          }),
          (y.prototype.image = function (e, t, r) {
            if (null === (e = Z(this.options.sanitize, this.options.baseUrl, e))) return r;
            var l = '<img src="' + e + '" alt="' + r + '"';
            return t && (l += ' title="' + t + '"'), l + (this.options.xhtml ? '/>' : '>');
          }),
          (y.prototype.text = function (e) {
            return e;
          }),
          (n.prototype.strong =
            n.prototype.em =
            n.prototype.codespan =
            n.prototype.del =
            n.prototype.text =
              function (e) {
                return e;
              }),
          (n.prototype.link = n.prototype.image =
            function (e, t, r) {
              return '' + r;
            }),
          (n.prototype.br = function () {
            return '';
          }),
          ($.parse = function (e, t) {
            return new $(t).parse(e);
          }),
          ($.prototype.parse = function (e) {
            (this.inline = new _(e.links, this.options)),
              (this.inlineText = new _(e.links, a({}, this.options, { renderer: new n() }))),
              (this.tokens = e.reverse());
            for (var t = ''; this.next(); ) t += this.tok();
            return t;
          }),
          ($.prototype.next = function () {
            return (this.token = this.tokens.pop()), this.token;
          }),
          ($.prototype.peek = function () {
            return this.tokens[this.tokens.length - 1] || 0;
          }),
          ($.prototype.parseText = function () {
            for (var e = this.token.text; 'text' === this.peek().type; )
              e += '\n' + this.next().text;
            return this.inline.output(e);
          }),
          ($.prototype.tok = function () {
            switch (this.token.type) {
              case 'space':
                return '';
              case 'hr':
                return this.renderer.hr();
              case 'heading':
                return this.renderer.heading(
                  this.inline.output(this.token.text),
                  this.token.depth,
                  P(this.inlineText.output(this.token.text)),
                  this.slugger,
                );
              case 'code':
                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
              case 'table':
                var r,
                  l,
                  i,
                  C,
                  e = '',
                  t = '';
                for (i = '', r = 0; r < this.token.header.length; r++)
                  i += this.renderer.tablecell(this.inline.output(this.token.header[r]), {
                    header: !0,
                    align: this.token.align[r],
                  });
                for (e += this.renderer.tablerow(i), r = 0; r < this.token.cells.length; r++) {
                  for (l = this.token.cells[r], i = '', C = 0; C < l.length; C++)
                    i += this.renderer.tablecell(this.inline.output(l[C]), {
                      header: !1,
                      align: this.token.align[C],
                    });
                  t += this.renderer.tablerow(i);
                }
                return this.renderer.table(e, t);
              case 'blockquote_start':
                for (t = ''; 'blockquote_end' !== this.next().type; ) t += this.tok();
                return this.renderer.blockquote(t);
              case 'list_start':
                t = '';
                for (
                  var p = this.token.ordered, x = this.token.start;
                  'list_end' !== this.next().type;

                )
                  t += this.tok();
                return this.renderer.list(t, p, x);
              case 'list_item_start':
                t = '';
                var k = this.token.loose,
                  M = this.token.checked,
                  S = this.token.task;
                for (
                  this.token.task && (t += this.renderer.checkbox(M));
                  'list_item_end' !== this.next().type;

                )
                  t += k || 'text' !== this.token.type ? this.tok() : this.parseText();
                return this.renderer.listitem(t, S, M);
              case 'html':
                return this.renderer.html(this.token.text);
              case 'paragraph':
                return this.renderer.paragraph(this.inline.output(this.token.text));
              case 'text':
                return this.renderer.paragraph(this.parseText());
              default:
                var g = 'Token with "' + this.token.type + '" type was not found.';
                if (!this.options.silent) throw new Error(g);
                console.log(g);
            }
          }),
          (O.prototype.slug = function (e) {
            var t = e
              .toLowerCase()
              .trim()
              .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
              .replace(/\s/g, '-');
            if (this.seen.hasOwnProperty(t)) {
              var r = t;
              do {
                this.seen[r]++, (t = r + '-' + this.seen[r]);
              } while (this.seen.hasOwnProperty(t));
            }
            return (this.seen[t] = 0), t;
          }),
          (A.escapeTest = /[&<>"']/),
          (A.escapeReplace = /[&<>"']/g),
          (A.replacements = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
          }),
          (A.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
          (A.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
        var z = {},
          T = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
        function E() {}
        function a(e) {
          for (var r, l, t = 1; t < arguments.length; t++)
            for (l in (r = arguments[t]))
              Object.prototype.hasOwnProperty.call(r, l) && (e[l] = r[l]);
          return e;
        }
        function o(e, t) {
          var l = e
              .replace(/\|/g, function (C, p, x) {
                for (var k = !1, M = p; --M >= 0 && '\\' === x[M]; ) k = !k;
                return k ? '|' : ' |';
              })
              .split(/ \|/),
            i = 0;
          if (l.length > t) l.splice(t);
          else for (; l.length < t; ) l.push('');
          for (; i < l.length; i++) l[i] = l[i].trim().replace(/\\\|/g, '|');
          return l;
        }
        function d(e, t, r) {
          if (0 === e.length) return '';
          for (var l = 0; l < e.length; ) {
            var i = e.charAt(e.length - l - 1);
            if (i !== t || r) {
              if (i === t || !r) break;
              l++;
            } else l++;
          }
          return e.substr(0, e.length - l);
        }
        function m(e, t) {
          if (-1 === e.indexOf(t[1])) return -1;
          for (var r = 0, l = 0; l < e.length; l++)
            if ('\\' === e[l]) l++;
            else if (e[l] === t[0]) r++;
            else if (e[l] === t[1] && --r < 0) return l;
          return -1;
        }
        function c(e) {
          e &&
            e.sanitize &&
            !e.silent &&
            console.warn(
              'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options',
            );
        }
        function f(e, t, r) {
          if (null == e) throw new Error('marked(): input parameter is undefined or null');
          if ('string' != typeof e)
            throw new Error(
              'marked(): input parameter is of type ' +
                Object.prototype.toString.call(e) +
                ', string expected',
            );
          if (r || 'function' == typeof t) {
            r || ((r = t), (t = null)), c((t = a({}, f.defaults, t || {})));
            var i,
              C,
              l = t.highlight,
              p = 0;
            try {
              i = b.lex(e, t);
            } catch (k) {
              return r(k);
            }
            C = i.length;
            var x = function (k) {
              if (k) return (t.highlight = l), r(k);
              var M;
              try {
                M = $.parse(i, t);
              } catch (S) {
                k = S;
              }
              return (t.highlight = l), k ? r(k) : r(null, M);
            };
            if (!l || l.length < 3 || (delete t.highlight, !C)) return x();
            for (; p < i.length; p++)
              !(function (k) {
                'code' !== k.type
                  ? --C || x()
                  : l(k.text, k.lang, function (M, S) {
                      return M
                        ? x(M)
                        : null == S || S === k.text
                        ? --C || x()
                        : ((k.text = S), (k.escaped = !0), void (--C || x()));
                    });
              })(i[p]);
          } else
            try {
              return t && (t = a({}, f.defaults, t)), c(t), $.parse(b.lex(e, t), t);
            } catch (k) {
              if (
                ((k.message += '\nPlease report this to https://github.com/markedjs/marked.'),
                (t || f.defaults).silent)
              )
                return '<p>An error occurred:</p><pre>' + A(k.message + '', !0) + '</pre>';
              throw k;
            }
        }
        (E.exec = E),
          (f.options = f.setOptions =
            function (e) {
              return a(f.defaults, e), f;
            }),
          (f.getDefaults = function () {
            return {
              baseUrl: null,
              breaks: !1,
              gfm: !0,
              headerIds: !0,
              headerPrefix: '',
              highlight: null,
              langPrefix: 'language-',
              mangle: !0,
              pedantic: !1,
              renderer: new y(),
              sanitize: !1,
              sanitizer: null,
              silent: !1,
              smartLists: !1,
              smartypants: !1,
              xhtml: !1,
            };
          }),
          (f.defaults = f.getDefaults()),
          (f.Parser = $),
          (f.parser = $.parse),
          (f.Renderer = y),
          (f.TextRenderer = n),
          (f.Lexer = b),
          (f.lexer = b.lex),
          (f.InlineLexer = _),
          (f.inlineLexer = _.output),
          (f.Slugger = O),
          (f.parse = f),
          (N.exports = f);
      })(this || ('undefined' != typeof window ? window : global));
    },
    4278: (N) => {
      var s = (function (b) {
        var v = /\blang(?:uage)?-([\w-]+)\b/i,
          _ = 0,
          y = {},
          n = {
            manual: b.Prism && b.Prism.manual,
            disableWorkerMessageHandler: b.Prism && b.Prism.disableWorkerMessageHandler,
            util: {
              encode: function a(o) {
                return o instanceof $
                  ? new $(o.type, a(o.content), o.alias)
                  : Array.isArray(o)
                  ? o.map(a)
                  : o
                      .replace(/&/g, '&amp;')
                      .replace(/</g, '&lt;')
                      .replace(/\u00a0/g, ' ');
              },
              type: function (a) {
                return Object.prototype.toString.call(a).slice(8, -1);
              },
              objId: function (a) {
                return a.__id || Object.defineProperty(a, '__id', { value: ++_ }), a.__id;
              },
              clone: function a(o, d) {
                var m, c;
                switch (((d = d || {}), n.util.type(o))) {
                  case 'Object':
                    if (((c = n.util.objId(o)), d[c])) return d[c];
                    for (var f in ((d[c] = m = {}), o)) o.hasOwnProperty(f) && (m[f] = a(o[f], d));
                    return m;
                  case 'Array':
                    return (
                      (c = n.util.objId(o)),
                      d[c]
                        ? d[c]
                        : ((d[c] = m = []),
                          o.forEach(function (e, t) {
                            m[t] = a(e, d);
                          }),
                          m)
                    );
                  default:
                    return o;
                }
              },
              getLanguage: function (a) {
                for (; a && !v.test(a.className); ) a = a.parentElement;
                return a ? (a.className.match(v) || [, 'none'])[1].toLowerCase() : 'none';
              },
              currentScript: function () {
                if ('undefined' == typeof document) return null;
                if ('currentScript' in document) return document.currentScript;
                try {
                  throw new Error();
                } catch (m) {
                  var a = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(m.stack) || [])[1];
                  if (a) {
                    var o = document.getElementsByTagName('script');
                    for (var d in o) if (o[d].src == a) return o[d];
                  }
                  return null;
                }
              },
              isActive: function (a, o, d) {
                for (var m = 'no-' + o; a; ) {
                  var c = a.classList;
                  if (c.contains(o)) return !0;
                  if (c.contains(m)) return !1;
                  a = a.parentElement;
                }
                return !!d;
              },
            },
            languages: {
              plain: y,
              plaintext: y,
              text: y,
              txt: y,
              extend: function (a, o) {
                var d = n.util.clone(n.languages[a]);
                for (var m in o) d[m] = o[m];
                return d;
              },
              insertBefore: function (a, o, d, m) {
                var c = (m = m || n.languages)[a],
                  f = {};
                for (var e in c)
                  if (c.hasOwnProperty(e)) {
                    if (e == o) for (var t in d) d.hasOwnProperty(t) && (f[t] = d[t]);
                    d.hasOwnProperty(e) || (f[e] = c[e]);
                  }
                var r = m[a];
                return (
                  (m[a] = f),
                  n.languages.DFS(n.languages, function (l, i) {
                    i === r && l != a && (this[l] = f);
                  }),
                  f
                );
              },
              DFS: function a(o, d, m, c) {
                c = c || {};
                var f = n.util.objId;
                for (var e in o)
                  if (o.hasOwnProperty(e)) {
                    d.call(o, e, o[e], m || e);
                    var t = o[e],
                      r = n.util.type(t);
                    'Object' !== r || c[f(t)]
                      ? 'Array' === r && !c[f(t)] && ((c[f(t)] = !0), a(t, d, e, c))
                      : ((c[f(t)] = !0), a(t, d, null, c));
                  }
              },
            },
            plugins: {},
            highlightAll: function (a, o) {
              n.highlightAllUnder(document, a, o);
            },
            highlightAllUnder: function (a, o, d) {
              var m = {
                callback: d,
                container: a,
                selector:
                  'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
              };
              n.hooks.run('before-highlightall', m),
                (m.elements = Array.prototype.slice.apply(
                  m.container.querySelectorAll(m.selector),
                )),
                n.hooks.run('before-all-elements-highlight', m);
              for (var f, c = 0; (f = m.elements[c++]); )
                n.highlightElement(f, !0 === o, m.callback);
            },
            highlightElement: function (a, o, d) {
              var m = n.util.getLanguage(a),
                c = n.languages[m];
              a.className = a.className.replace(v, '').replace(/\s+/g, ' ') + ' language-' + m;
              var f = a.parentElement;
              f &&
                'pre' === f.nodeName.toLowerCase() &&
                (f.className = f.className.replace(v, '').replace(/\s+/g, ' ') + ' language-' + m);
              var t = { element: a, language: m, grammar: c, code: a.textContent };
              function r(i) {
                (t.highlightedCode = i),
                  n.hooks.run('before-insert', t),
                  (t.element.innerHTML = t.highlightedCode),
                  n.hooks.run('after-highlight', t),
                  n.hooks.run('complete', t),
                  d && d.call(t.element);
              }
              if (
                (n.hooks.run('before-sanity-check', t),
                (f = t.element.parentElement) &&
                  'pre' === f.nodeName.toLowerCase() &&
                  !f.hasAttribute('tabindex') &&
                  f.setAttribute('tabindex', '0'),
                !t.code)
              )
                return n.hooks.run('complete', t), void (d && d.call(t.element));
              if ((n.hooks.run('before-highlight', t), t.grammar))
                if (o && b.Worker) {
                  var l = new Worker(n.filename);
                  (l.onmessage = function (i) {
                    r(i.data);
                  }),
                    l.postMessage(
                      JSON.stringify({ language: t.language, code: t.code, immediateClose: !0 }),
                    );
                } else r(n.highlight(t.code, t.grammar, t.language));
              else r(n.util.encode(t.code));
            },
            highlight: function (a, o, d) {
              var m = { code: a, grammar: o, language: d };
              return (
                n.hooks.run('before-tokenize', m),
                (m.tokens = n.tokenize(m.code, m.grammar)),
                n.hooks.run('after-tokenize', m),
                $.stringify(n.util.encode(m.tokens), m.language)
              );
            },
            tokenize: function (a, o) {
              var d = o.rest;
              if (d) {
                for (var m in d) o[m] = d[m];
                delete o.rest;
              }
              var c = new P();
              return (
                F(c, c.head, a),
                A(a, c, o, c.head, 0),
                (function (a) {
                  for (var o = [], d = a.head.next; d !== a.tail; ) o.push(d.value), (d = d.next);
                  return o;
                })(c)
              );
            },
            hooks: {
              all: {},
              add: function (a, o) {
                var d = n.hooks.all;
                (d[a] = d[a] || []), d[a].push(o);
              },
              run: function (a, o) {
                var d = n.hooks.all[a];
                if (d && d.length) for (var c, m = 0; (c = d[m++]); ) c(o);
              },
            },
            Token: $,
          };
        function $(a, o, d, m) {
          (this.type = a),
            (this.content = o),
            (this.alias = d),
            (this.length = 0 | (m || '').length);
        }
        function O(a, o, d, m) {
          a.lastIndex = o;
          var c = a.exec(d);
          if (c && m && c[1]) {
            var f = c[1].length;
            (c.index += f), (c[0] = c[0].slice(f));
          }
          return c;
        }
        function A(a, o, d, m, c, f) {
          for (var e in d)
            if (d.hasOwnProperty(e) && d[e]) {
              var t = d[e];
              t = Array.isArray(t) ? t : [t];
              for (var r = 0; r < t.length; ++r) {
                if (f && f.cause == e + ',' + r) return;
                var l = t[r],
                  i = l.inside,
                  C = !!l.lookbehind,
                  p = !!l.greedy,
                  x = l.alias;
                if (p && !l.pattern.global) {
                  var k = l.pattern.toString().match(/[imsuy]*$/)[0];
                  l.pattern = RegExp(l.pattern.source, k + 'g');
                }
                for (
                  var M = l.pattern || l, S = m.next, g = c;
                  S !== o.tail && !(f && g >= f.reach);
                  g += S.value.length, S = S.next
                ) {
                  var u = S.value;
                  if (o.length > a.length) return;
                  if (!(u instanceof $)) {
                    var w,
                      h = 1;
                    if (p) {
                      if (!(w = O(M, g, a, C))) break;
                      var B = w.index,
                        R = w.index + w[0].length,
                        L = g;
                      for (L += S.value.length; B >= L; ) L += (S = S.next).value.length;
                      if (((g = L -= S.value.length), S.value instanceof $)) continue;
                      for (
                        var D = S;
                        D !== o.tail && (L < R || 'string' == typeof D.value);
                        D = D.next
                      )
                        h++, (L += D.value.length);
                      h--, (u = a.slice(g, L)), (w.index -= g);
                    } else if (!(w = O(M, 0, u, C))) continue;
                    var U = w[0],
                      q = u.slice(0, (B = w.index)),
                      J = u.slice(B + U.length),
                      G = g + u.length;
                    f && G > f.reach && (f.reach = G);
                    var j = S.prev;
                    if (
                      (q && ((j = F(o, j, q)), (g += q.length)),
                      Z(o, j, h),
                      (S = F(o, j, new $(e, i ? n.tokenize(U, i) : U, x, U))),
                      J && F(o, S, J),
                      h > 1)
                    ) {
                      var Y = { cause: e + ',' + r, reach: G };
                      A(a, o, d, S.prev, g, Y), f && Y.reach > f.reach && (f.reach = Y.reach);
                    }
                  }
                }
              }
            }
        }
        function P() {
          var a = { value: null, prev: null, next: null },
            o = { value: null, prev: a, next: null };
          (a.next = o), (this.head = a), (this.tail = o), (this.length = 0);
        }
        function F(a, o, d) {
          var m = o.next,
            c = { value: d, prev: o, next: m };
          return (o.next = c), (m.prev = c), a.length++, c;
        }
        function Z(a, o, d) {
          for (var m = o.next, c = 0; c < d && m !== a.tail; c++) m = m.next;
          (o.next = m), (m.prev = o), (a.length -= c);
        }
        if (
          ((b.Prism = n),
          ($.stringify = function a(o, d) {
            if ('string' == typeof o) return o;
            if (Array.isArray(o)) {
              var m = '';
              return (
                o.forEach(function (r) {
                  m += a(r, d);
                }),
                m
              );
            }
            var c = {
                type: o.type,
                content: a(o.content, d),
                tag: 'span',
                classes: ['token', o.type],
                attributes: {},
                language: d,
              },
              f = o.alias;
            f && (Array.isArray(f) ? Array.prototype.push.apply(c.classes, f) : c.classes.push(f)),
              n.hooks.run('wrap', c);
            var e = '';
            for (var t in c.attributes)
              e += ' ' + t + '="' + (c.attributes[t] || '').replace(/"/g, '&quot;') + '"';
            return (
              '<' +
              c.tag +
              ' class="' +
              c.classes.join(' ') +
              '"' +
              e +
              '>' +
              c.content +
              '</' +
              c.tag +
              '>'
            );
          }),
          !b.document)
        )
          return (
            b.addEventListener &&
              (n.disableWorkerMessageHandler ||
                b.addEventListener(
                  'message',
                  function (a) {
                    var o = JSON.parse(a.data),
                      d = o.language,
                      c = o.immediateClose;
                    b.postMessage(n.highlight(o.code, n.languages[d], d)), c && b.close();
                  },
                  !1,
                )),
            n
          );
        var z = n.util.currentScript();
        function T() {
          n.manual || n.highlightAll();
        }
        if (
          (z && ((n.filename = z.src), z.hasAttribute('data-manual') && (n.manual = !0)), !n.manual)
        ) {
          var E = document.readyState;
          'loading' === E || ('interactive' === E && z && z.defer)
            ? document.addEventListener('DOMContentLoaded', T)
            : window.requestAnimationFrame
            ? window.requestAnimationFrame(T)
            : window.setTimeout(T, 16);
        }
        return n;
      })(
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope
          ? self
          : {},
      );
      N.exports && (N.exports = s),
        'undefined' != typeof global && (global.Prism = s),
        (s.languages.markup = {
          comment: /<!--[\s\S]*?-->/,
          prolog: /<\?[\s\S]+?\?>/,
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              'string': { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              'punctuation': /^<!|>$|[[\]]/,
              'doctype-tag': /^DOCTYPE/,
              'name': /[^\s<>'"]+/,
            },
          },
          cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              'tag': {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              'special-attr': [],
              'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: { punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/] },
              },
              'punctuation': /\/?>/,
              'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } },
            },
          },
          entity: [{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' }, /&#x?[\da-f]{1,8};/i],
        }),
        (s.languages.markup.tag.inside['attr-value'].inside.entity = s.languages.markup.entity),
        (s.languages.markup.doctype.inside['internal-subset'].inside = s.languages.markup),
        s.hooks.add('wrap', function (b) {
          'entity' === b.type && (b.attributes.title = b.content.replace(/&amp;/, '&'));
        }),
        Object.defineProperty(s.languages.markup.tag, 'addInlined', {
          value: function (v, _) {
            var y = {};
            (y['language-' + _] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: s.languages[_],
            }),
              (y.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var n = { 'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: y } };
            n['language-' + _] = { pattern: /[\s\S]+/, inside: s.languages[_] };
            var $ = {};
            ($[v] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return v;
                  },
                ),
                'i',
              ),
              lookbehind: !0,
              greedy: !0,
              inside: n,
            }),
              s.languages.insertBefore('markup', 'cdata', $);
          },
        }),
        Object.defineProperty(s.languages.markup.tag, 'addAttribute', {
          value: function (b, v) {
            s.languages.markup.tag.inside['special-attr'].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  '(?:' +
                  b +
                  ')' +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                'i',
              ),
              lookbehind: !0,
              inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [v, 'language-' + v],
                      inside: s.languages[v],
                    },
                    punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
                  },
                },
              },
            });
          },
        }),
        (s.languages.html = s.languages.markup),
        (s.languages.mathml = s.languages.markup),
        (s.languages.svg = s.languages.markup),
        (s.languages.xml = s.languages.extend('markup', {})),
        (s.languages.ssml = s.languages.xml),
        (s.languages.atom = s.languages.xml),
        (s.languages.rss = s.languages.xml),
        (function (b) {
          var v = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (b.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                'rule': /^@[\w-]+/,
                'selector-function-argument': {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: 'selector',
                },
                'keyword': { pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/, lookbehind: !0 },
              },
            },
            url: {
              pattern: RegExp(
                '\\burl\\((?:' + v.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)',
                'i',
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + v.source + '$'), alias: 'url' },
              },
            },
            selector: {
              pattern: RegExp(
                '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + v.source + ')*(?=\\s*\\{)',
              ),
              lookbehind: !0,
            },
            string: { pattern: v, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
            punctuation: /[(){};:,]/,
          }),
            (b.languages.css.atrule.inside.rest = b.languages.css);
          var _ = b.languages.markup;
          _ && (_.tag.addInlined('style', 'css'), _.tag.addAttribute('style', 'css'));
        })(s),
        (s.languages.clike = {
          'comment': [
            { pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0, greedy: !0 },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          'string': { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 },
          'class-name': {
            pattern:
              /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          'keyword':
            /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          'boolean': /\b(?:true|false)\b/,
          'function': /\b\w+(?=\()/,
          'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          'punctuation': /[{}[\];(),.:]/,
        }),
        (s.languages.javascript = s.languages.extend('clike', {
          'class-name': [
            s.languages.clike['class-name'],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          'keyword': [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          'function':
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          'number':
            /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          'operator':
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (s.languages.javascript['class-name'][0].pattern =
          /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        s.languages.insertBefore('javascript', 'keyword', {
          'regex': {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: 'language-regex',
                inside: s.languages.regex,
              },
              'regex-delimiter': /^\/|\/$/,
              'regex-flags': /^[a-z]+$/,
            },
          },
          'function-variable': {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
          },
          'parameter': [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
            {
              pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: s.languages.javascript,
            },
          ],
          'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        s.languages.insertBefore('javascript', 'string', {
          'hashbang': { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
          'template-string': {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
              'interpolation': {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  'interpolation-punctuation': { pattern: /^\$\{|\}$/, alias: 'punctuation' },
                  'rest': s.languages.javascript,
                },
              },
              'string': /[\s\S]+/,
            },
          },
        }),
        s.languages.markup &&
          (s.languages.markup.tag.addInlined('script', 'javascript'),
          s.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            'javascript',
          )),
        (s.languages.js = s.languages.javascript),
        (function () {
          if (void 0 !== s && 'undefined' != typeof document) {
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
            var y = {
                js: 'javascript',
                py: 'python',
                rb: 'ruby',
                ps1: 'powershell',
                psm1: 'powershell',
                sh: 'bash',
                bat: 'batch',
                h: 'c',
                tex: 'latex',
              },
              n = 'data-src-status',
              $ = 'loading',
              O = 'loaded',
              P = 'pre[data-src]:not([' + n + '="' + O + '"]):not([' + n + '="' + $ + '"])',
              F = /\blang(?:uage)?-([\w-]+)\b/i;
            s.hooks.add('before-highlightall', function (z) {
              z.selector += ', ' + P;
            }),
              s.hooks.add('before-sanity-check', function (z) {
                var T = z.element;
                if (T.matches(P)) {
                  (z.code = ''), T.setAttribute(n, $);
                  var E = T.appendChild(document.createElement('CODE'));
                  E.textContent = 'Loading\u2026';
                  var a = T.getAttribute('data-src'),
                    o = z.language;
                  if ('none' === o) {
                    var d = (/\.(\w+)$/.exec(a) || [, 'none'])[1];
                    o = y[d] || d;
                  }
                  Z(E, o), Z(T, o);
                  var m = s.plugins.autoloader;
                  m && m.loadLanguages(o);
                  var c = new XMLHttpRequest();
                  c.open('GET', a, !0),
                    (c.onreadystatechange = function () {
                      4 == c.readyState &&
                        (c.status < 400 && c.responseText
                          ? (T.setAttribute(n, O),
                            (E.textContent = c.responseText),
                            s.highlightElement(E))
                          : (T.setAttribute(n, 'failed'),
                            (E.textContent =
                              c.status >= 400
                                ? (function (z, T) {
                                    return '\u2716 Error ' + z + ' while fetching file: ' + T;
                                  })(c.status, c.statusText)
                                : '\u2716 Error: File does not exist or is empty')));
                    }),
                    c.send(null);
                }
              }),
              (s.plugins.fileHighlight = {
                highlight: function (T) {
                  for (var o, E = (T || document).querySelectorAll(P), a = 0; (o = E[a++]); )
                    s.highlightElement(o);
                },
              });
            var I = !1;
            s.fileHighlight = function () {
              I ||
                (console.warn(
                  'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.',
                ),
                (I = !0)),
                s.plugins.fileHighlight.highlight.apply(this, arguments);
            };
          }
          function Z(z, T) {
            var E = z.className;
            (E = E.replace(F, ' ') + ' language-' + T),
              (z.className = E.replace(/\s+/g, ' ').trim());
          }
        })();
    },
    9085: (N, H, s) => {
      'use strict';
      s.r(H), s.d(H, { BlogModule: () => S });
      var b = s(8583),
        v = s(483),
        _ = s(3817),
        y = s(4503),
        n = s(7716),
        $ = s(1841),
        O = s(1776),
        A = s(8853),
        F = s(5207),
        Z = s(5894),
        I = s(5478),
        z = s(9075),
        T = s(4278);
      const E = ['*'];
      class a {
        constructor(u, h) {
          (this._http = u),
            (this._domSanitizer = h),
            (this._renderer = new I.Renderer()),
            this.extendRenderer(),
            this.setMarkedOptions({});
        }
        getContent(u) {
          return this._http.get(u, { responseType: 'text' }).pipe(
            (0, F.U)((h) => this.extractData(h)),
            (0, Z.K)(this.handleError),
          );
        }
        get renderer() {
          return this._renderer;
        }
        extractData(u) {
          return u || '';
        }
        setMarkedOptions(u) {
          ((u = Object.assign(
            {
              gfm: !0,
              tables: !0,
              breaks: !1,
              pedantic: !1,
              sanitize: !1,
              smartLists: !0,
              smartypants: !1,
            },
            u,
          )).renderer = this._renderer),
            (0, I.setOptions)(u);
        }
        compile(u, h = !0) {
          return this._domSanitizer.sanitize(h ? n.q3G.HTML : n.q3G.NONE, (0, I.parse)(u).trim());
        }
        handleError(u) {
          return (
            (g = u.message ? u.message : u.toString()),
            (h = (0, A.m)(g)
              ? g
              : function () {
                  return g;
                }),
            new O.y(function (R) {
              return R.error(h());
            })
          );
          var g, h;
        }
        extendRenderer() {
          this._renderer.listitem = function (u) {
            return /^\s*\[[x ]\]\s*/.test(u)
              ? '<li style="list-style: none">' +
                  (u = u
                    .replace(
                      /^\s*\[ \]\s*/,
                      '<input type="checkbox" class="md-checkbox" disabled> ',
                    )
                    .replace(
                      /^\s*\[x\]\s*/,
                      '<input type="checkbox" class="md-checkbox" checked disabled> ',
                    )) +
                  '</li>'
              : '<li>' + u + '</li>';
          };
        }
      }
      (a.ɵfac = function (u) {
        return new (u || a)(n.LFG($.eN), n.LFG(z.H7));
      }),
        (a.ɵprov = n.Yz7({ token: a, factory: a.ɵfac, providedIn: 'root' })),
        (a.ngInjectableDef = (0, n.Yz7)({
          factory: function () {
            return new a((0, n.LFG)($.eN), (0, n.LFG)(z.H7));
          },
          token: a,
          providedIn: 'root',
        }));
      let o = (() => {
          class g {
            constructor(h, w, R) {
              (this._mdService = h),
                (this._el = w),
                (this.platformId = R),
                (this.changeLog = []),
                (this.error = new n.vpe()),
                (this.loaded = new n.vpe()),
                (this.sanitizeHtml = !0);
            }
            set path(h) {
              h && ((this._path = h), this.onPathChange());
            }
            set data(h) {
              h && ((this._data = h), this.onDataChange(h));
            }
            onDataChange(h) {
              (this._el.nativeElement.innerHTML = h
                ? this._mdService.compile(h, this.sanitizeHtml)
                : ''),
                this.highlightContent(!1);
            }
            ngAfterViewInit() {
              this._path ? this.onPathChange() : this._data || this.processRaw();
            }
            processRaw() {
              (this._md = this.prepare(
                (function (g) {
                  const u = document.createElement('textarea');
                  return (u.innerHTML = g), u.value;
                })(this._el.nativeElement.innerHTML),
              )),
                (this._el.nativeElement.innerHTML = this._mdService.compile(
                  this._md,
                  this.sanitizeHtml,
                )),
                this.highlightContent(!1);
            }
            onPathChange() {
              (this._ext = this._path && this._path.split('.').splice(-1).join()),
                this._mdService
                  .getContent(this._path)
                  .pipe((0, Z.K)(this.handleError))
                  .subscribe((h) => {
                    this.loaded.emit(h),
                      (this._md = 'md' !== this._ext ? '```' + this._ext + '\n' + h + '\n```' : h),
                      (this._el.nativeElement.innerHTML = this._mdService.compile(
                        this.prepare(this._md),
                        this.sanitizeHtml,
                      )),
                      this.highlightContent(!1);
                  });
            }
            handleError(h) {
              return this.error.emit(h), console.error('An error occurred', h), h.message || h;
            }
            prepare(h) {
              if (!h) return '';
              if ('md' === this._ext || !this.path) {
                let w = !1;
                return h
                  .split('\n')
                  .map(
                    (R) => (
                      '```' === this.trimLeft(R).substring(0, 3) && (w = !w), w ? R : R.trim()
                    ),
                  )
                  .join('\n');
              }
              return h.replace(/\"/g, "'");
            }
            trimLeft(h) {
              return h.replace(/^\s+|\s+$/g, '');
            }
            highlightContent(h) {
              (0, b.NF)(this.platformId) && (0, T.highlightAll)(h);
            }
          }
          return (
            (g.ɵfac = function (h) {
              return new (h || g)(n.Y36(a), n.Y36(n.SBq), n.Y36(n.Lbi));
            }),
            (g.ɵcmp = n.Xpm({
              type: g,
              selectors: [['markdown'], ['', 'Markdown', ''], ['ngx-md'], ['', 'NgxMd', '']],
              inputs: { sanitizeHtml: 'sanitizeHtml', path: 'path', data: 'data' },
              outputs: { error: 'error', loaded: 'loaded' },
              ngContentSelectors: E,
              decls: 1,
              vars: 0,
              template: function (h, w) {
                1 & h && (n.F$t(), n.Hsn(0));
              },
              styles: [
                '.token.operator[_ngcontent-%COMP%], .token.entity[_ngcontent-%COMP%], .token.url[_ngcontent-%COMP%], .language-css[_ngcontent-%COMP%]   .token.string[_ngcontent-%COMP%], .style[_ngcontent-%COMP%]   .token.string[_ngcontent-%COMP%] {\n        background: none;\n      }\n      .md-checkbox[_ngcontent-%COMP%] {\n        vertical-align: middle;\n        margin: 0 0.2em 0.25em -1.6em;\n        font-size: 16px;\n      }',
              ],
            })),
            g
          );
        })(),
        m = (() => {
          class g {}
          return (
            (g.ɵfac = function (h) {
              return new (h || g)();
            }),
            (g.ɵprov = n.Yz7({ token: g, factory: g.ɵfac })),
            g
          );
        })(),
        c = (() => {
          class g {
            static forRoot() {
              return { ngModule: g, providers: [m] };
            }
          }
          return (
            (g.ɵfac = function (h) {
              return new (h || g)();
            }),
            (g.ɵmod = n.oAB({ type: g })),
            (g.ɵinj = n.cJS({ providers: [a], imports: [[b.ez]] })),
            g
          );
        })();
      var f = s(6214),
        e = s(2468);
      function t(g, u) {
        if (1 & g) {
          const h = n.EpF();
          n.TgZ(0, 'md-card', 2),
            n.TgZ(1, 'h5'),
            n._uU(2),
            n.qZA(),
            n.TgZ(3, 'p'),
            n._uU(4),
            n.ALo(5, 'substring'),
            n.qZA(),
            n.TgZ(6, 'md-button', 3),
            n.NdJ('click', function () {
              const L = n.CHM(h).$implicit;
              return n.oxw(2).navigateToPost(L);
            }),
            n.qZA(),
            n.qZA();
        }
        if (2 & g) {
          const h = u.$implicit;
          n.Q6J('bgImage', h.img),
            n.xp6(2),
            n.Oqu(h.title),
            n.xp6(2),
            n.Oqu(n.xi3(5, 3, h.description, 300));
        }
      }
      function r(g, u) {
        if ((1 & g && (n.TgZ(0, 'main'), n.YNc(1, t, 7, 6, 'md-card', 1), n.qZA()), 2 & g)) {
          const h = u.ngIf;
          n.xp6(1), n.Q6J('ngForOf', h);
        }
      }
      let l = (() => {
        class g {
          constructor(h, w) {
            (this.dataService = h),
              (this.router = w),
              (this.posts$ = this.dataService.repoFiles$.pipe((0, F.U)((R) => R.reverse())));
          }
          navigateToPost(h) {
            this.router.navigate(['/blog', h.id], { state: h });
          }
        }
        return (
          (g.ɵfac = function (h) {
            return new (h || g)(n.Y36(e.D), n.Y36(f.F0));
          }),
          (g.ɵcmp = n.Xpm({
            type: g,
            selectors: [['md-blog']],
            decls: 4,
            vars: 3,
            consts: [
              [4, 'ngIf'],
              [3, 'bgImage', 4, 'ngFor', 'ngForOf'],
              [3, 'bgImage'],
              ['type', 'outline', 'text', 'VER M\xc1S', 3, 'click'],
            ],
            template: function (h, w) {
              1 & h &&
                (n.TgZ(0, 'h1'),
                n._uU(1, 'Blog'),
                n.qZA(),
                n.YNc(2, r, 2, 1, 'main', 0),
                n.ALo(3, 'async')),
                2 & h && (n.xp6(2), n.Q6J('ngIf', n.lcZ(3, 1, w.posts$)));
            },
            directives: [b.O5, b.sg, _.A, v.r],
            pipes: [b.Ov, y.R],
            styles: [
              'main[_ngcontent-%COMP%]{padding:2rem 0}p[_ngcontent-%COMP%]{padding:1rem 0 1.5rem}',
            ],
          })),
          g
        );
      })();
      var i = s(2340),
        C = s(3301);
      function p(g, u) {
        1 & g && n._UZ(0, 'ngx-md', 1), 2 & g && n.Q6J('path', u.ngIf);
      }
      const k = [
        { path: '', component: l },
        {
          path: ':id',
          component: (() => {
            class g {
              constructor(h, w, R) {
                (this.meta = h),
                  (this.title = w),
                  (this.activatedRoute = R),
                  (this.path$ = this.activatedRoute.params.pipe(
                    (0, C.j)('id'),
                    (0, F.U)((L) => `${i.N.assetsUrl}/md/${L}.md`),
                  ));
              }
              ngOnInit() {
                this.title.setTitle(window.history.state.title),
                  this.meta.addTags([
                    { property: 'og:description', content: window.history.state.description },
                    { property: 'og:image', content: window.history.state.img },
                    { property: 'og:title', content: window.history.state.title },
                  ]);
              }
            }
            return (
              (g.ɵfac = function (h) {
                return new (h || g)(n.Y36(z.h_), n.Y36(z.Dx), n.Y36(f.gz));
              }),
              (g.ɵcmp = n.Xpm({
                type: g,
                selectors: [['md-post']],
                decls: 2,
                vars: 3,
                consts: [
                  [3, 'path', 4, 'ngIf'],
                  [3, 'path'],
                ],
                template: function (h, w) {
                  1 & h && (n.YNc(0, p, 1, 1, 'ngx-md', 0), n.ALo(1, 'async')),
                    2 & h && n.Q6J('ngIf', n.lcZ(1, 1, w.path$));
                },
                directives: [b.O5, o],
                pipes: [b.Ov],
                encapsulation: 2,
                changeDetection: 0,
              })),
              g
            );
          })(),
        },
      ];
      let M = (() => {
          class g {}
          return (
            (g.ɵfac = function (h) {
              return new (h || g)();
            }),
            (g.ɵmod = n.oAB({ type: g })),
            (g.ɵinj = n.cJS({ imports: [[f.Bz.forChild(k)], f.Bz] })),
            g
          );
        })(),
        S = (() => {
          class g {}
          return (
            (g.ɵfac = function (h) {
              return new (h || g)();
            }),
            (g.ɵmod = n.oAB({ type: g })),
            (g.ɵinj = n.cJS({ imports: [[b.ez, M, c, _.d, y.G, v.h]] })),
            g
          );
        })();
    },
  },
]);
