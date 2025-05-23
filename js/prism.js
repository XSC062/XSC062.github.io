/* PrismJS 1.29.0
https://prismjs.com/download.html#themes=prism-solarizedlight&languages=markup+css+clike+javascript+c+cpp+latex+python+stylus+yaml&plugins=line-highlight+line-numbers+autolinker+autoloader+match-braces+treeview */
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function(e) {
    var n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i
      , t = 0
      , r = {}
      , a = {
        manual: e.Prism && e.Prism.manual,
        disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler,
        util: {
            encode: function e(n) {
                return n instanceof i ? new i(n.type,e(n.content),n.alias) : Array.isArray(n) ? n.map(e) : n.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).slice(8, -1)
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++t
                }),
                e.__id
            },
            clone: function e(n, t) {
                var r, i;
                switch (t = t || {},
                a.util.type(n)) {
                case "Object":
                    if (i = a.util.objId(n),
                    t[i])
                        return t[i];
                    for (var l in r = {},
                    t[i] = r,
                    n)
                        n.hasOwnProperty(l) && (r[l] = e(n[l], t));
                    return r;
                case "Array":
                    return i = a.util.objId(n),
                    t[i] ? t[i] : (r = [],
                    t[i] = r,
                    n.forEach((function(n, a) {
                        r[a] = e(n, t)
                    }
                    )),
                    r);
                default:
                    return n
                }
            },
            getLanguage: function(e) {
                for (; e; ) {
                    var t = n.exec(e.className);
                    if (t)
                        return t[1].toLowerCase();
                    e = e.parentElement
                }
                return "none"
            },
            setLanguage: function(e, t) {
                e.className = e.className.replace(RegExp(n, "gi"), ""),
                e.classList.add("language-" + t)
            },
            currentScript: function() {
                if ("undefined" == typeof document)
                    return null;
                if ("currentScript"in document)
                    return document.currentScript;
                try {
                    throw new Error
                } catch (r) {
                    var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack) || [])[1];
                    if (e) {
                        var n = document.getElementsByTagName("script");
                        for (var t in n)
                            if (n[t].src == e)
                                return n[t]
                    }
                    return null
                }
            },
            isActive: function(e, n, t) {
                for (var r = "no-" + n; e; ) {
                    var a = e.classList;
                    if (a.contains(n))
                        return !0;
                    if (a.contains(r))
                        return !1;
                    e = e.parentElement
                }
                return !!t
            }
        },
        languages: {
            plain: r,
            plaintext: r,
            text: r,
            txt: r,
            extend: function(e, n) {
                var t = a.util.clone(a.languages[e]);
                for (var r in n)
                    t[r] = n[r];
                return t
            },
            insertBefore: function(e, n, t, r) {
                var i = (r = r || a.languages)[e]
                  , l = {};
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        if (o == n)
                            for (var s in t)
                                t.hasOwnProperty(s) && (l[s] = t[s]);
                        t.hasOwnProperty(o) || (l[o] = i[o])
                    }
                var u = r[e];
                return r[e] = l,
                a.languages.DFS(a.languages, (function(n, t) {
                    t === u && n != e && (this[n] = l)
                }
                )),
                l
            },
            DFS: function e(n, t, r, i) {
                i = i || {};
                var l = a.util.objId;
                for (var o in n)
                    if (n.hasOwnProperty(o)) {
                        t.call(n, o, n[o], r || o);
                        var s = n[o]
                          , u = a.util.type(s);
                        "Object" !== u || i[l(s)] ? "Array" !== u || i[l(s)] || (i[l(s)] = !0,
                        e(s, t, o, i)) : (i[l(s)] = !0,
                        e(s, t, null, i))
                    }
            }
        },
        plugins: {},
        highlightAll: function(e, n) {
            a.highlightAllUnder(document, e, n)
        },
        highlightAllUnder: function(e, n, t) {
            var r = {
                callback: t,
                container: e,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            a.hooks.run("before-highlightall", r),
            r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),
            a.hooks.run("before-all-elements-highlight", r);
            for (var i, l = 0; i = r.elements[l++]; )
                a.highlightElement(i, !0 === n, r.callback)
        },
        highlightElement: function(n, t, r) {
            var i = a.util.getLanguage(n)
              , l = a.languages[i];
            a.util.setLanguage(n, i);
            var o = n.parentElement;
            o && "pre" === o.nodeName.toLowerCase() && a.util.setLanguage(o, i);
            var s = {
                element: n,
                language: i,
                grammar: l,
                code: n.textContent
            };
            function u(e) {
                s.highlightedCode = e,
                a.hooks.run("before-insert", s),
                s.element.innerHTML = s.highlightedCode,
                a.hooks.run("after-highlight", s),
                a.hooks.run("complete", s),
                r && r.call(s.element)
            }
            if (a.hooks.run("before-sanity-check", s),
            (o = s.element.parentElement) && "pre" === o.nodeName.toLowerCase() && !o.hasAttribute("tabindex") && o.setAttribute("tabindex", "0"),
            !s.code)
                return a.hooks.run("complete", s),
                void (r && r.call(s.element));
            if (a.hooks.run("before-highlight", s),
            s.grammar)
                if (t && e.Worker) {
                    var c = new Worker(a.filename);
                    c.onmessage = function(e) {
                        u(e.data)
                    }
                    ,
                    c.postMessage(JSON.stringify({
                        language: s.language,
                        code: s.code,
                        immediateClose: !0
                    }))
                } else
                    u(a.highlight(s.code, s.grammar, s.language));
            else
                u(a.util.encode(s.code))
        },
        highlight: function(e, n, t) {
            var r = {
                code: e,
                grammar: n,
                language: t
            };
            if (a.hooks.run("before-tokenize", r),
            !r.grammar)
                throw new Error('The language "' + r.language + '" has no grammar.');
            return r.tokens = a.tokenize(r.code, r.grammar),
            a.hooks.run("after-tokenize", r),
            i.stringify(a.util.encode(r.tokens), r.language)
        },
        tokenize: function(e, n) {
            var t = n.rest;
            if (t) {
                for (var r in t)
                    n[r] = t[r];
                delete n.rest
            }
            var a = new s;
            return u(a, a.head, e),
            o(e, a, n, a.head, 0),
            function(e) {
                for (var n = [], t = e.head.next; t !== e.tail; )
                    n.push(t.value),
                    t = t.next;
                return n
            }(a)
        },
        hooks: {
            all: {},
            add: function(e, n) {
                var t = a.hooks.all;
                t[e] = t[e] || [],
                t[e].push(n)
            },
            run: function(e, n) {
                var t = a.hooks.all[e];
                if (t && t.length)
                    for (var r, i = 0; r = t[i++]; )
                        r(n)
            }
        },
        Token: i
    };
    function i(e, n, t, r) {
        this.type = e,
        this.content = n,
        this.alias = t,
        this.length = 0 | (r || "").length
    }
    function l(e, n, t, r) {
        e.lastIndex = n;
        var a = e.exec(t);
        if (a && r && a[1]) {
            var i = a[1].length;
            a.index += i,
            a[0] = a[0].slice(i)
        }
        return a
    }
    function o(e, n, t, r, s, g) {
        for (var f in t)
            if (t.hasOwnProperty(f) && t[f]) {
                var h = t[f];
                h = Array.isArray(h) ? h : [h];
                for (var d = 0; d < h.length; ++d) {
                    if (g && g.cause == f + "," + d)
                        return;
                    var v = h[d]
                      , p = v.inside
                      , m = !!v.lookbehind
                      , y = !!v.greedy
                      , k = v.alias;
                    if (y && !v.pattern.global) {
                        var x = v.pattern.toString().match(/[imsuy]*$/)[0];
                        v.pattern = RegExp(v.pattern.source, x + "g")
                    }
                    for (var b = v.pattern || v, w = r.next, A = s; w !== n.tail && !(g && A >= g.reach); A += w.value.length,
                    w = w.next) {
                        var E = w.value;
                        if (n.length > e.length)
                            return;
                        if (!(E instanceof i)) {
                            var P, L = 1;
                            if (y) {
                                if (!(P = l(b, A, e, m)) || P.index >= e.length)
                                    break;
                                var S = P.index
                                  , O = P.index + P[0].length
                                  , j = A;
                                for (j += w.value.length; S >= j; )
                                    j += (w = w.next).value.length;
                                if (A = j -= w.value.length,
                                w.value instanceof i)
                                    continue;
                                for (var C = w; C !== n.tail && (j < O || "string" == typeof C.value); C = C.next)
                                    L++,
                                    j += C.value.length;
                                L--,
                                E = e.slice(A, j),
                                P.index -= A
                            } else if (!(P = l(b, 0, E, m)))
                                continue;
                            S = P.index;
                            var N = P[0]
                              , _ = E.slice(0, S)
                              , M = E.slice(S + N.length)
                              , W = A + E.length;
                            g && W > g.reach && (g.reach = W);
                            var z = w.prev;
                            if (_ && (z = u(n, z, _),
                            A += _.length),
                            c(n, z, L),
                            w = u(n, z, new i(f,p ? a.tokenize(N, p) : N,k,N)),
                            M && u(n, w, M),
                            L > 1) {
                                var I = {
                                    cause: f + "," + d,
                                    reach: W
                                };
                                o(e, n, t, w.prev, A, I),
                                g && I.reach > g.reach && (g.reach = I.reach)
                            }
                        }
                    }
                }
            }
    }
    function s() {
        var e = {
            value: null,
            prev: null,
            next: null
        }
          , n = {
            value: null,
            prev: e,
            next: null
        };
        e.next = n,
        this.head = e,
        this.tail = n,
        this.length = 0
    }
    function u(e, n, t) {
        var r = n.next
          , a = {
            value: t,
            prev: n,
            next: r
        };
        return n.next = a,
        r.prev = a,
        e.length++,
        a
    }
    function c(e, n, t) {
        for (var r = n.next, a = 0; a < t && r !== e.tail; a++)
            r = r.next;
        n.next = r,
        r.prev = n,
        e.length -= a
    }
    if (e.Prism = a,
    i.stringify = function e(n, t) {
        if ("string" == typeof n)
            return n;
        if (Array.isArray(n)) {
            var r = "";
            return n.forEach((function(n) {
                r += e(n, t)
            }
            )),
            r
        }
        var i = {
            type: n.type,
            content: e(n.content, t),
            tag: "span",
            classes: ["token", n.type],
            attributes: {},
            language: t
        }
          , l = n.alias;
        l && (Array.isArray(l) ? Array.prototype.push.apply(i.classes, l) : i.classes.push(l)),
        a.hooks.run("wrap", i);
        var o = "";
        for (var s in i.attributes)
            o += " " + s + '="' + (i.attributes[s] || "").replace(/"/g, "&quot;") + '"';
        return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">"
    }
    ,
    !e.document)
        return e.addEventListener ? (a.disableWorkerMessageHandler || e.addEventListener("message", (function(n) {
            var t = JSON.parse(n.data)
              , r = t.language
              , i = t.code
              , l = t.immediateClose;
            e.postMessage(a.highlight(i, a.languages[r], r)),
            l && e.close()
        }
        ), !1),
        a) : a;
    var g = a.util.currentScript();
    function f() {
        a.manual || a.highlightAll()
    }
    if (g && (a.filename = g.src,
    g.hasAttribute("data-manual") && (a.manual = !0)),
    !a.manual) {
        var h = document.readyState;
        "loading" === h || "interactive" === h && g && g.defer ? document.addEventListener("DOMContentLoaded", f) : window.requestAnimationFrame ? window.requestAnimationFrame(f) : window.setTimeout(f, 16)
    }
    return a
}(_self);
"undefined" != typeof module && module.exports && (module.exports = Prism),
"undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
    comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
    },
    prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
    },
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
    },
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
},
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity,
Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup,
Prism.hooks.add("wrap", (function(a) {
    "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"))
}
)),
Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function(a, e) {
        var s = {};
        s["language-" + e] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: !0,
            inside: Prism.languages[e]
        },
        s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var t = {
            "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: s
            }
        };
        t["language-" + e] = {
            pattern: /[\s\S]+/,
            inside: Prism.languages[e]
        };
        var n = {};
        n[a] = {
            pattern: RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g, (function() {
                return a
            }
            )), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: t
        },
        Prism.languages.insertBefore("markup", "cdata", n)
    }
}),
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function(a, e) {
        Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp("(^|[\"'\\s])(?:" + a + ")\\s*=\\s*(?:\"[^\"]*\"|'[^']*'|[^\\s'\">=]+(?=[\\s>]))", "i"),
            lookbehind: !0,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [e, "language-" + e],
                            inside: Prism.languages[e]
                        },
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, /"|'/]
                    }
                }
            }
        })
    }
}),
Prism.languages.html = Prism.languages.markup,
Prism.languages.mathml = Prism.languages.markup,
Prism.languages.svg = Prism.languages.markup,
Prism.languages.xml = Prism.languages.extend("markup", {}),
Prism.languages.ssml = Prism.languages.xml,
Prism.languages.atom = Prism.languages.xml,
Prism.languages.rss = Prism.languages.xml;
!function(s) {
    var e = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: RegExp("@[\\w-](?:[^;{\\s\"']|\\s+(?!\\s)|" + e.source + ")*?(?:;|(?=\\s*\\{))"),
            inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: "selector"
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0
                }
            }
        },
        url: {
            pattern: RegExp("\\burl\\((?:" + e.source + "|(?:[^\\\\\r\n()\"']|\\\\[^])*)\\)", "i"),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: {
                    pattern: RegExp("^" + e.source + "$"),
                    alias: "url"
                }
            }
        },
        selector: {
            pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + e.source + ")*(?=\\s*\\{)"),
            lookbehind: !0
        },
        string: {
            pattern: e,
            greedy: !0
        },
        property: {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0
        },
        punctuation: /[(){};:,]/
    },
    s.languages.css.atrule.inside.rest = s.languages.css;
    var t = s.languages.markup;
    t && (t.tag.addInlined("style", "css"),
    t.tag.addAttribute("style", "css"))
}(Prism);
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0,
        greedy: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
    "class-name": [Prism.languages.clike["class-name"], {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
    }],
    keyword: [{
        pattern: /((?:^|\})\s*)catch\b/,
        lookbehind: !0
    }, {
        pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
    }],
    function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
        pattern: RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),
        lookbehind: !0
    },
    operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
}),
Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: RegExp("((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r\n]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.|\\[(?:[^[\\]\\\\\r\n]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r\n])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r\n,.;:})\\]]|//))"),
        lookbehind: !0,
        greedy: !0,
        inside: {
            "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: Prism.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
        }
    },
    "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
    },
    parameter: [{
        pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }, {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: Prism.languages.javascript
    }],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}),
Prism.languages.insertBefore("javascript", "string", {
    hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
    },
    "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
            "template-punctuation": {
                pattern: /^`|`$/,
                alias: "string"
            },
            interpolation: {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    },
    "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
    }
}),
Prism.languages.insertBefore("javascript", "operator", {
    "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
    }
}),
Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"),
Prism.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)", "javascript")),
Prism.languages.js = Prism.languages.javascript;
Prism.languages.c = Prism.languages.extend("clike", {
    comment: {
        pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
    },
    string: {
        pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
        greedy: !0
    },
    "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: !0
    },
    "typename":/\b(?:asm|auto|bool|char|class|const|consteval|constexpr|decltype|double|enum|explicit|exturn|float|friend|inline|int|long|mutable|namespace|private|protected|public|register|short|signed|static|struct|template|thread_local|typename|union|unsigned|virtual|void|volatile|wchar_t)\b/,
    "this": /\bthis\b/,
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
    function: /\b[a-z_]\w*(?=\s*(?:\(|\[|\.))/i,
    number: /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
}),
Prism.languages.insertBefore("c", "string", {
    char: {
        pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
        greedy: !0
    }
}),
Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
        lookbehind: !0,
        greedy: !0,
        alias: "property",
        inside: {
            string: [{
                pattern: /^(#\s*include\s*)<[^>]+>/,
                lookbehind: !0
            }, Prism.languages.c.string],
            char: Prism.languages.c.char,
            comment: Prism.languages.c.comment,
            "macro-name": [{
                pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
                lookbehind: !0
            }, {
                pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                lookbehind: !0,
                alias: "function"
            }],
            directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword"
            },
            "directive-hash": /^#/,
            punctuation: /##|\\(?=[\r\n])/,
            expression: {
                pattern: /\S[\s\S]*/,
                inside: Prism.languages.c
            }
        }
    }
}),
Prism.languages.insertBefore("c", "function", {
    constant: /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout|cin|cout)\b/
}),
delete Prism.languages.c.boolean;
!function(e) {
    var t = /\b(?:alignas|alignof|break|case|catch|char16_t|char32_t|char8_t|co_await|co_return|co_yield|compl|concept|const_cast|constinit|continue|default|delete|do|dynamic_cast|else|export|final|for|goto|if|import|int16_t|int32_t|int64_t|int8_t|module|new|noexcept|operator|override|reinterpret_cast|requires|return|sizeof|static_assert|static_cast|switch|throw|try|typedef|typeid|uint16_t|uint32_t|uint64_t|uint8_t|using|while)\b/
      , n = "\\b(?!<keyword>)\\w+(?:\\s*\\.\\s*\\w+)*\\b".replace(/<keyword>/g, (function() {
        return t.source
    }
    ));
    e.languages.cpp = e.languages.extend("c", {
        "class-name": [{
            pattern: RegExp("(\\b(?:class|concept|enum|struct|typename)\\s+)(?!<keyword>)\\w+".replace(/<keyword>/g, (function() {
                return t.source
            }
            ))),
            lookbehind: !0
        }, /\b\w*(?=\s*::\s*\w+\s*)/, /\b\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*)/, /(?<=\s*::)\s*\w+\b(?=\s*(?:<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?)(?!\s*\()/],
        // , /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/, /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i, /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/, /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/], original
        keyword: t,
        number: {
            pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0
        },
        operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
        boolean: /\b(?:false|true|nullptr)\b/
    }),
    e.languages.insertBefore("cpp", "string", {
        module: {
            pattern: RegExp('(\\b(?:import|module)\\s+)(?:"(?:\\\\(?:\r\n|[^])|[^"\\\\\r\n])*"|<[^<>\r\n]*>|' + "<mod-name>(?:\\s*:\\s*<mod-name>)?|:\\s*<mod-name>".replace(/<mod-name>/g, (function() {
                return n
            }
            )) + ")"),
            lookbehind: !0,
            greedy: !0,
            inside: {
                string: /^[<"][\s\S]+/,
                operator: /:/,
                punctuation: /\./
            }
        },
        "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0
        }
    }),
    e.languages.insertBefore("cpp", "keyword", {
        "generic-function": {
            pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
                function: /^\w+/,
                generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: e.languages.cpp
                }
            }
        }
    }),
    e.languages.insertBefore("cpp", "operator", {
        "double-colon": {
            pattern: /::/,
            alias: "punctuation"
        }
    }),
    e.languages.insertBefore("cpp", "class-name", {
        "base-clause": {
            pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: e.languages.extend("cpp", {})
        }
    }),
    e.languages.insertBefore("inside", "double-colon", {
        "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
    }, e.languages.cpp["base-clause"])
}(Prism);
!function(a) {
    var e = /\\(?:[^a-z()[\]]|[a-z*]+)/i
      , n = {
        "equation-command": {
            pattern: e,
            alias: "regex"
        }
    };
    a.languages.latex = {
        comment: /%.*/,
        cdata: {
            pattern: /(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0
        },
        equation: [{
            pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
            inside: n,
            alias: "string"
        }, {
            pattern: /(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
            lookbehind: !0,
            inside: n,
            alias: "string"
        }],
        keyword: {
            pattern: /(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        url: {
            pattern: /(\\url\{)[^}]+(?=\})/,
            lookbehind: !0
        },
        headline: {
            pattern: /(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
            lookbehind: !0,
            alias: "class-name"
        },
        function: {
            pattern: e,
            alias: "selector"
        },
        punctuation: /[[\]{}&]/
    },
    a.languages.tex = a.languages.latex,
    a.languages.context = a.languages.latex
}(Prism);
Prism.languages.python = {
    comment: {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        greedy: !0
    },
    "string-interpolation": {
        pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                    "format-spec": {
                        pattern: /(:)[^:(){}]+(?=\}$)/,
                        lookbehind: !0
                    },
                    "conversion-option": {
                        pattern: /![sra](?=[:}]$)/,
                        alias: "punctuation"
                    },
                    rest: null
                }
            },
            string: /[\s\S]+/
        }
    },
    "triple-quoted-string": {
        pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
        greedy: !0,
        alias: "string"
    },
    string: {
        pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
        greedy: !0
    },
    function: {
        pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
        lookbehind: !0
    },
    "class-name": {
        pattern: /(\bclass\s+)\w+/i,
        lookbehind: !0
    },
    decorator: {
        pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
        lookbehind: !0,
        alias: ["annotation", "punctuation"],
        inside: {
            punctuation: /\./
        }
    },
    keyword: /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    boolean: /\b(?:False|None|True)\b/,
    number: /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest = Prism.languages.python,
Prism.languages.py = Prism.languages.python;
!function(e) {
    var n = {
        pattern: /(\b\d+)(?:%|[a-z]+)/,
        lookbehind: !0
    }
      , r = {
        pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
        lookbehind: !0
    }
      , t = {
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0
        },
        url: {
            pattern: /\burl\((["']?).*?\1\)/i,
            greedy: !0
        },
        string: {
            pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
            greedy: !0
        },
        interpolation: null,
        func: null,
        important: /\B!(?:important|optional)\b/i,
        keyword: {
            pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
            lookbehind: !0
        },
        hexcode: /#[\da-f]{3,6}/i,
        color: [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
            pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
            inside: {
                unit: n,
                number: r,
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/
            }
        }],
        entity: /\\[\da-f]{1,8}/i,
        unit: n,
        boolean: /\b(?:false|true)\b/,
        operator: [/~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
        number: r,
        punctuation: /[{}()\[\];:,]/
    };
    t.interpolation = {
        pattern: /\{[^\r\n}:]+\}/,
        alias: "variable",
        inside: {
            delimiter: {
                pattern: /^\{|\}$/,
                alias: "punctuation"
            },
            rest: t
        }
    },
    t.func = {
        pattern: /[\w-]+\([^)]*\).*/,
        inside: {
            function: /^[^(]+/,
            rest: t
        }
    },
    e.languages.stylus = {
        "atrule-declaration": {
            pattern: /(^[ \t]*)@.+/m,
            lookbehind: !0,
            inside: {
                atrule: /^@[\w-]+/,
                rest: t
            }
        },
        "variable-declaration": {
            pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
            lookbehind: !0,
            inside: {
                variable: /^\S+/,
                rest: t
            }
        },
        statement: {
            pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
            lookbehind: !0,
            inside: {
                keyword: /^\S+/,
                rest: t
            }
        },
        "property-declaration": {
            pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
            lookbehind: !0,
            inside: {
                property: {
                    pattern: /^[^\s:]+/,
                    inside: {
                        interpolation: t.interpolation
                    }
                },
                rest: t
            }
        },
        selector: {
            pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
            lookbehind: !0,
            inside: {
                interpolation: t.interpolation,
                comment: t.comment,
                punctuation: /[{},]/
            }
        },
        func: t.func,
        string: t.string,
        comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
            greedy: !0
        },
        interpolation: t.interpolation,
        punctuation: /[{}()\[\];:.]/
    }
}(Prism);
!function(e) {
    var n = /[*&][^\s[\]{},]+/
      , r = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/
      , t = "(?:" + r.source + "(?:[ \t]+" + n.source + ")?|" + n.source + "(?:[ \t]+" + r.source + ")?)"
      , a = "(?:[^\\s\\x00-\\x08\\x0e-\\x1f!\"#%&'*,\\-:>?@[\\]`{|}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*".replace(/<PLAIN>/g, (function() {
        return "[^\\s\\x00-\\x08\\x0e-\\x1f,[\\]{}\\x7f-\\x84\\x86-\\x9f\\ud800-\\udfff\\ufffe\\uffff]"
    }
    ))
      , d = "\"(?:[^\"\\\\\r\n]|\\\\.)*\"|'(?:[^'\\\\\r\n]|\\\\.)*'";
    function o(e, n) {
        n = (n || "").replace(/m/g, "") + "m";
        var r = "([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\\]|\\}|(?:[\r\n]\\s*)?#))".replace(/<<prop>>/g, (function() {
            return t
        }
        )).replace(/<<value>>/g, (function() {
            return e
        }
        ));
        return RegExp(r, n)
    }
    e.languages.yaml = {
        scalar: {
            pattern: RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\\S[^\r\n]*(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g, (function() {
                return t
            }
            ))),
            lookbehind: !0,
            alias: "string"
        },
        comment: /#.*/,
        key: {
            pattern: RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\\s*:\\s)".replace(/<<prop>>/g, (function() {
                return t
            }
            )).replace(/<<key>>/g, (function() {
                return "(?:" + a + "|" + d + ")"
            }
            ))),
            lookbehind: !0,
            greedy: !0,
            alias: "atrule"
        },
        directive: {
            pattern: /(^[ \t]*)%.+/m,
            lookbehind: !0,
            alias: "important"
        },
        datetime: {
            pattern: o("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?(?:[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?))?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),
            lookbehind: !0,
            alias: "number"
        },
        boolean: {
            pattern: o("false|true", "i"),
            lookbehind: !0,
            alias: "important"
        },
        null: {
            pattern: o("null|~", "i"),
            lookbehind: !0,
            alias: "important"
        },
        string: {
            pattern: o(d),
            lookbehind: !0,
            greedy: !0
        },
        number: {
            pattern: o("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)", "i"),
            lookbehind: !0
        },
        tag: r,
        important: n,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    },
    e.languages.yml = e.languages.yaml
}(Prism);
!function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = "line-numbers"
          , n = /\n(?!$)/g
          , t = Prism.plugins.lineNumbers = {
            getLine: function(n, t) {
                if ("PRE" === n.tagName && n.classList.contains(e)) {
                    var i = n.querySelector(".line-numbers-rows");
                    if (i) {
                        var r = parseInt(n.getAttribute("data-start"), 10) || 1
                          , s = r + (i.children.length - 1);
                        t < r && (t = r),
                        t > s && (t = s);
                        var l = t - r;
                        return i.children[l]
                    }
                }
            },
            resize: function(e) {
                r([e])
            },
            assumeViewportIndependence: !0
        }
          , i = void 0;
        window.addEventListener("resize", (function() {
            t.assumeViewportIndependence && i === window.innerWidth || (i = window.innerWidth,
            r(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))
        }
        )),
        Prism.hooks.add("complete", (function(t) {
            if (t.code) {
                var i = t.element
                  , s = i.parentNode;
                if (s && /pre/i.test(s.nodeName) && !i.querySelector(".line-numbers-rows") && Prism.util.isActive(i, e)) {
                    i.classList.remove(e),
                    s.classList.add(e);
                    var l, o = t.code.match(n), a = o ? o.length + 1 : 1, u = new Array(a + 1).join("<span></span>");
                    (l = document.createElement("span")).setAttribute("aria-hidden", "true"),
                    l.className = "line-numbers-rows",
                    l.innerHTML = u,
                    s.hasAttribute("data-start") && (s.style.counterReset = "linenumber " + (parseInt(s.getAttribute("data-start"), 10) - 1)),
                    t.element.appendChild(l),
                    r([s]),
                    Prism.hooks.run("line-numbers", t)
                }
            }
        }
        )),
        Prism.hooks.add("line-numbers", (function(e) {
            e.plugins = e.plugins || {},
            e.plugins.lineNumbers = !0
        }
        ))
    }
    function r(e) {
        if (0 != (e = e.filter((function(e) {
            var n, t = (n = e,
            n ? window.getComputedStyle ? getComputedStyle(n) : n.currentStyle || null : null)["white-space"];
            return "pre-wrap" === t || "pre-line" === t
        }
        ))).length) {
            var t = e.map((function(e) {
                var t = e.querySelector("code")
                  , i = e.querySelector(".line-numbers-rows");
                if (t && i) {
                    var r = e.querySelector(".line-numbers-sizer")
                      , s = t.textContent.split(n);
                    r || ((r = document.createElement("span")).className = "line-numbers-sizer",
                    t.appendChild(r)),
                    r.innerHTML = "0",
                    r.style.display = "block";
                    var l = r.getBoundingClientRect().height;
                    return r.innerHTML = "",
                    {
                        element: e,
                        lines: s,
                        lineHeights: [],
                        oneLinerHeight: l,
                        sizer: r
                    }
                }
            }
            )).filter(Boolean);
            t.forEach((function(e) {
                var n = e.sizer
                  , t = e.lines
                  , i = e.lineHeights
                  , r = e.oneLinerHeight;
                i[t.length - 1] = void 0,
                t.forEach((function(e, t) {
                    if (e && e.length > 1) {
                        var s = n.appendChild(document.createElement("span"));
                        s.style.display = "block",
                        s.textContent = e
                    } else
                        i[t] = r
                }
                ))
            }
            )),
            t.forEach((function(e) {
                for (var n = e.sizer, t = e.lineHeights, i = 0, r = 0; r < t.length; r++)
                    void 0 === t[r] && (t[r] = n.children[i++].getBoundingClientRect().height)
            }
            )),
            t.forEach((function(e) {
                var n = e.sizer
                  , t = e.element.querySelector(".line-numbers-rows");
                n.style.display = "none",
                n.innerHTML = "",
                e.lineHeights.forEach((function(e, n) {
                    t.children[n].style.height = e + "px"
                }
                ))
            }
            ))
        }
    }
}();
!function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document && document.querySelector) {
        var e, t = "line-numbers", i = "linkable-line-numbers", n = /\n(?!$)/g, r = !0;
        Prism.plugins.lineHighlight = {
            highlightLines: function(o, u, c) {
                var h = (u = "string" == typeof u ? u : o.getAttribute("data-line") || "").replace(/\s+/g, "").split(",").filter(Boolean)
                  , d = +o.getAttribute("data-line-offset") || 0
                  , f = (function() {
                    if (void 0 === e) {
                        var t = document.createElement("div");
                        t.style.fontSize = "13px",
                        t.style.lineHeight = "1.5",
                        t.style.padding = "0",
                        t.style.border = "0",
                        t.innerHTML = "&nbsp;<br />&nbsp;",
                        document.body.appendChild(t),
                        e = 38 === t.offsetHeight,
                        document.body.removeChild(t)
                    }
                    return e
                }() ? parseInt : parseFloat)(getComputedStyle(o).lineHeight)
                  , p = Prism.util.isActive(o, t)
                  , g = o.querySelector("code")
                  , m = p ? o : g || o
                  , v = []
                  , y = g.textContent.match(n)
                  , b = y ? y.length + 1 : 1
                  , A = g && m != g ? function(e, t) {
                    var i = getComputedStyle(e)
                      , n = getComputedStyle(t);
                    function r(e) {
                        return +e.substr(0, e.length - 2)
                    }
                    return t.offsetTop + r(n.borderTopWidth) + r(n.paddingTop) - r(i.paddingTop)
                }(o, g) : 0;
                h.forEach((function(e) {
                    var t = e.split("-")
                      , i = +t[0]
                      , n = +t[1] || i;
                    if (!((n = Math.min(b + d, n)) < i)) {
                        var r = o.querySelector('.line-highlight[data-range="' + e + '"]') || document.createElement("div");
                        if (v.push((function() {
                            r.setAttribute("aria-hidden", "true"),
                            r.setAttribute("data-range", e),
                            r.className = (c || "") + " line-highlight"
                        }
                        )),
                        p && Prism.plugins.lineNumbers) {
                            var s = Prism.plugins.lineNumbers.getLine(o, i)
                              , l = Prism.plugins.lineNumbers.getLine(o, n);
                            if (s) {
                                var a = s.offsetTop + A + "px";
                                v.push((function() {
                                    r.style.top = a
                                }
                                ))
                            }
                            if (l) {
                                var u = l.offsetTop - s.offsetTop + l.offsetHeight + "px";
                                v.push((function() {
                                    r.style.height = u
                                }
                                ))
                            }
                        } else
                            v.push((function() {
                                r.setAttribute("data-start", String(i)),
                                n > i && r.setAttribute("data-end", String(n)),
                                r.style.top = (i - d - 1) * f + A + "px",
                                r.textContent = new Array(n - i + 2).join(" \n")
                            }
                            ));
                        v.push((function() {
                            r.style.width = o.scrollWidth + "px"
                        }
                        )),
                        v.push((function() {
                            m.appendChild(r)
                        }
                        ))
                    }
                }
                ));
                var P = o.id;
                if (p && Prism.util.isActive(o, i) && P) {
                    l(o, i) || v.push((function() {
                        o.classList.add(i)
                    }
                    ));
                    var E = parseInt(o.getAttribute("data-start") || "1");
                    s(".line-numbers-rows > span", o).forEach((function(e, t) {
                        var i = t + E;
                        e.onclick = function() {
                            var e = P + "." + i;
                            r = !1,
                            location.hash = e,
                            setTimeout((function() {
                                r = !0
                            }
                            ), 1)
                        }
                    }
                    ))
                }
                return function() {
                    v.forEach(a)
                }
            }
        };
        var o = 0;
        Prism.hooks.add("before-sanity-check", (function(e) {
            var t = e.element.parentElement;
            if (u(t)) {
                var i = 0;
                s(".line-highlight", t).forEach((function(e) {
                    i += e.textContent.length,
                    e.parentNode.removeChild(e)
                }
                )),
                i && /^(?: \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i))
            }
        }
        )),
        Prism.hooks.add("complete", (function e(i) {
            var n = i.element.parentElement;
            if (u(n)) {
                clearTimeout(o);
                var r = Prism.plugins.lineNumbers
                  , s = i.plugins && i.plugins.lineNumbers;
                l(n, t) && r && !s ? Prism.hooks.add("line-numbers", e) : (Prism.plugins.lineHighlight.highlightLines(n)(),
                o = setTimeout(c, 1))
            }
        }
        )),
        window.addEventListener("hashchange", c),
        window.addEventListener("resize", (function() {
            s("pre").filter(u).map((function(e) {
                return Prism.plugins.lineHighlight.highlightLines(e)
            }
            )).forEach(a)
        }
        ))
    }
    function s(e, t) {
        return Array.prototype.slice.call((t || document).querySelectorAll(e))
    }
    function l(e, t) {
        return e.classList.contains(t)
    }
    function a(e) {
        e()
    }
    function u(e) {
        return !!(e && /pre/i.test(e.nodeName) && (e.hasAttribute("data-line") || e.id && Prism.util.isActive(e, i)))
    }
    function c() {
        var e = location.hash.slice(1);
        s(".temporary.line-highlight").forEach((function(e) {
            e.parentNode.removeChild(e)
        }
        ));
        var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
        if (t && !document.getElementById(e)) {
            var i = e.slice(0, e.lastIndexOf("."))
              , n = document.getElementById(i);
            n && (n.hasAttribute("data-line") || n.setAttribute("data-line", ""),
            Prism.plugins.lineHighlight.highlightLines(n, t, "temporary ")(),
            r && document.querySelector(".temporary.line-highlight").scrollIntoView())
        }
    }
}();
!function() {
    if ("undefined" != typeof Prism) {
        var i = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&!$'()*,;@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/
          , n = /\b\S+@[\w.]+[a-z]{2}/
          , t = /\[([^\]]+)\]\(([^)]+)\)/
          , e = ["comment", "url", "attr-value", "string"];
        Prism.plugins.autolinker = {
            processGrammar: function(r) {
                r && !r["url-link"] && (Prism.languages.DFS(r, (function(r, a, l) {
                    e.indexOf(l) > -1 && !Array.isArray(a) && (a.pattern || (a = this[r] = {
                        pattern: a
                    }),
                    a.inside = a.inside || {},
                    "comment" == l && (a.inside["md-link"] = t),
                    "attr-value" == l ? Prism.languages.insertBefore("inside", "punctuation", {
                        "url-link": i
                    }, a) : a.inside["url-link"] = i,
                    a.inside["email-link"] = n)
                }
                )),
                r["url-link"] = i,
                r["email-link"] = n)
            }
        },
        Prism.hooks.add("before-highlight", (function(i) {
            Prism.plugins.autolinker.processGrammar(i.grammar)
        }
        )),
        Prism.hooks.add("wrap", (function(i) {
            if (/-link$/.test(i.type)) {
                i.tag = "a";
                var n = i.content;
                if ("email-link" == i.type && 0 != n.indexOf("mailto:"))
                    n = "mailto:" + n;
                else if ("md-link" == i.type) {
                    var e = i.content.match(t);
                    n = e[2],
                    i.content = e[1]
                }
                i.attributes.href = n;
                try {
                    i.content = decodeURIComponent(i.content)
                } catch (i) {}
            }
        }
        ))
    }
}();
!function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = {
            javascript: "clike",
            actionscript: "javascript",
            apex: ["clike", "sql"],
            arduino: "cpp",
            aspnet: ["markup", "csharp"],
            birb: "clike",
            bison: "c",
            c: "clike",
            csharp: "clike",
            cpp: "c",
            cfscript: "clike",
            chaiscript: ["clike", "cpp"],
            cilkc: "c",
            cilkcpp: "cpp",
            coffeescript: "javascript",
            crystal: "ruby",
            "css-extras": "css",
            d: "clike",
            dart: "clike",
            django: "markup-templating",
            ejs: ["javascript", "markup-templating"],
            etlua: ["lua", "markup-templating"],
            erb: ["ruby", "markup-templating"],
            fsharp: "clike",
            "firestore-security-rules": "clike",
            flow: "javascript",
            ftl: "markup-templating",
            gml: "clike",
            glsl: "c",
            go: "clike",
            gradle: "clike",
            groovy: "clike",
            haml: "ruby",
            handlebars: "markup-templating",
            haxe: "clike",
            hlsl: "c",
            idris: "haskell",
            java: "clike",
            javadoc: ["markup", "java", "javadoclike"],
            jolie: "clike",
            jsdoc: ["javascript", "javadoclike", "typescript"],
            "js-extras": "javascript",
            json5: "json",
            jsonp: "json",
            "js-templates": "javascript",
            kotlin: "clike",
            latte: ["clike", "markup-templating", "php"],
            less: "css",
            lilypond: "scheme",
            liquid: "markup-templating",
            markdown: "markup",
            "markup-templating": "markup",
            mongodb: "javascript",
            n4js: "javascript",
            objectivec: "c",
            opencl: "c",
            parser: "markup",
            php: "markup-templating",
            phpdoc: ["php", "javadoclike"],
            "php-extras": "php",
            plsql: "sql",
            processing: "clike",
            protobuf: "clike",
            pug: ["markup", "javascript"],
            purebasic: "clike",
            purescript: "haskell",
            qsharp: "clike",
            qml: "javascript",
            qore: "clike",
            racket: "scheme",
            cshtml: ["markup", "csharp"],
            jsx: ["markup", "javascript"],
            tsx: ["jsx", "typescript"],
            reason: "clike",
            ruby: "clike",
            sass: "css",
            scss: "css",
            scala: "java",
            "shell-session": "bash",
            smarty: "markup-templating",
            solidity: "clike",
            soy: "markup-templating",
            sparql: "turtle",
            sqf: "clike",
            squirrel: "clike",
            stata: ["mata", "java", "python"],
            "t4-cs": ["t4-templating", "csharp"],
            "t4-vb": ["t4-templating", "vbnet"],
            tap: "yaml",
            tt2: ["clike", "markup-templating"],
            textile: "markup",
            twig: "markup-templating",
            typescript: "javascript",
            v: "clike",
            vala: "clike",
            vbnet: "basic",
            velocity: "markup",
            wiki: "markup",
            xeora: "markup",
            "xml-doc": "markup",
            xquery: "markup"
        }
          , a = {
            html: "markup",
            xml: "markup",
            svg: "markup",
            mathml: "markup",
            ssml: "markup",
            atom: "markup",
            rss: "markup",
            js: "javascript",
            g4: "antlr4",
            ino: "arduino",
            "arm-asm": "armasm",
            art: "arturo",
            adoc: "asciidoc",
            avs: "avisynth",
            avdl: "avro-idl",
            gawk: "awk",
            sh: "bash",
            shell: "bash",
            shortcode: "bbcode",
            rbnf: "bnf",
            oscript: "bsl",
            cs: "csharp",
            dotnet: "csharp",
            cfc: "cfscript",
            "cilk-c": "cilkc",
            "cilk-cpp": "cilkcpp",
            cilk: "cilkcpp",
            coffee: "coffeescript",
            conc: "concurnas",
            jinja2: "django",
            "dns-zone": "dns-zone-file",
            dockerfile: "docker",
            gv: "dot",
            eta: "ejs",
            xlsx: "excel-formula",
            xls: "excel-formula",
            gamemakerlanguage: "gml",
            po: "gettext",
            gni: "gn",
            ld: "linker-script",
            "go-mod": "go-module",
            hbs: "handlebars",
            mustache: "handlebars",
            hs: "haskell",
            idr: "idris",
            gitignore: "ignore",
            hgignore: "ignore",
            npmignore: "ignore",
            webmanifest: "json",
            kt: "kotlin",
            kts: "kotlin",
            kum: "kumir",
            tex: "latex",
            context: "latex",
            ly: "lilypond",
            emacs: "lisp",
            elisp: "lisp",
            "emacs-lisp": "lisp",
            md: "markdown",
            moon: "moonscript",
            n4jsd: "n4js",
            nani: "naniscript",
            objc: "objectivec",
            qasm: "openqasm",
            objectpascal: "pascal",
            px: "pcaxis",
            pcode: "peoplecode",
            plantuml: "plant-uml",
            pq: "powerquery",
            mscript: "powerquery",
            pbfasm: "purebasic",
            purs: "purescript",
            py: "python",
            qs: "qsharp",
            rkt: "racket",
            razor: "cshtml",
            rpy: "renpy",
            res: "rescript",
            robot: "robotframework",
            rb: "ruby",
            "sh-session": "shell-session",
            shellsession: "shell-session",
            smlnj: "sml",
            sol: "solidity",
            sln: "solution-file",
            rq: "sparql",
            sclang: "supercollider",
            t4: "t4-cs",
            trickle: "tremor",
            troy: "tremor",
            trig: "turtle",
            ts: "typescript",
            tsconfig: "typoscript",
            uscript: "unrealscript",
            uc: "unrealscript",
            url: "uri",
            vb: "visual-basic",
            vba: "visual-basic",
            webidl: "web-idl",
            mathematica: "wolfram",
            nb: "wolfram",
            wl: "wolfram",
            xeoracube: "xeora",
            yml: "yaml"
        }
          , r = {}
          , s = "components/"
          , i = Prism.util.currentScript();
        if (i) {
            var t = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i
              , c = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i
              , l = i.getAttribute("data-autoloader-path");
            if (null != l)
                s = l.trim().replace(/\/?$/, "/");
            else {
                var p = i.src;
                t.test(p) ? s = p.replace(t, "components/") : c.test(p) && (s = p.replace(c, "$1components/"))
            }
        }
        var n = Prism.plugins.autoloader = {
            languages_path: s,
            use_minified: !0,
            loadLanguages: m
        };
        Prism.hooks.add("complete", (function(e) {
            var a = e.element
              , r = e.language;
            if (a && r && "none" !== r) {
                var s = function(e) {
                    var a = (e.getAttribute("data-dependencies") || "").trim();
                    if (!a) {
                        var r = e.parentElement;
                        r && "pre" === r.tagName.toLowerCase() && (a = (r.getAttribute("data-dependencies") || "").trim())
                    }
                    return a ? a.split(/\s*,\s*/g) : []
                }(a);
                /^diff-./i.test(r) ? (s.push("diff"),
                s.push(r.substr("diff-".length))) : s.push(r),
                s.every(o) || m(s, (function() {
                    Prism.highlightElement(a)
                }
                ))
            }
        }
        ))
    }
    function o(e) {
        if (e.indexOf("!") >= 0)
            return !1;
        if ((e = a[e] || e)in Prism.languages)
            return !0;
        var s = r[e];
        return s && !s.error && !1 === s.loading
    }
    function m(s, i, t) {
        "string" == typeof s && (s = [s]);
        var c = s.length
          , l = 0
          , p = !1;
        function k() {
            p || ++l === c && i && i(s)
        }
        0 !== c ? s.forEach((function(s) {
            !function(s, i, t) {
                var c = s.indexOf("!") >= 0;
                function l() {
                    var e = r[s];
                    e || (e = r[s] = {
                        callbacks: []
                    }),
                    e.callbacks.push({
                        success: i,
                        error: t
                    }),
                    !c && o(s) ? u(s, "success") : !c && e.error ? u(s, "error") : !c && e.loading || (e.loading = !0,
                    e.error = !1,
                    function(e, a, r) {
                        var s = document.createElement("script");
                        s.src = e,
                        s.async = !0,
                        s.onload = function() {
                            document.body.removeChild(s),
                            a && a()
                        }
                        ,
                        s.onerror = function() {
                            document.body.removeChild(s),
                            r && r()
                        }
                        ,
                        document.body.appendChild(s)
                    }(function(e) {
                        return n.languages_path + "prism-" + e + (n.use_minified ? ".min" : "") + ".js"
                    }(s), (function() {
                        e.loading = !1,
                        u(s, "success")
                    }
                    ), (function() {
                        e.loading = !1,
                        e.error = !0,
                        u(s, "error")
                    }
                    )))
                }
                s = s.replace("!", "");
                var p = e[s = a[s] || s];
                p && p.length ? m(p, l, t) : l()
            }(s, k, (function() {
                p || (p = !0,
                t && t(s))
            }
            ))
        }
        )) : i && setTimeout(i, 0)
    }
    function u(e, a) {
        if (r[e]) {
            for (var s = r[e].callbacks, i = 0, t = s.length; i < t; i++) {
                var c = s[i][a];
                c && setTimeout(c, 0)
            }
            s.length = 0
        }
    }
}();
!function() {
    if ("undefined" != typeof Prism && "undefined" != typeof document) {
        var e = {
            "(": ")",
            "[": "]",
            "{": "}"
        }
          , t = {
            "(": "brace-round",
            "[": "brace-square",
            "{": "brace-curly"
        }
          , n = {
            "${": "{"
        }
          , r = 0
          , c = /^(pair-\d+-)(close|open)$/;
        Prism.hooks.add("complete", (function(c) {
            var i = c.element
              , d = i.parentElement;
            if (d && "PRE" == d.tagName) {
                var u = [];
                if (Prism.util.isActive(i, "match-braces") && u.push("(", "[", "{"),
                0 != u.length) {
                    d.__listenerAdded || (d.addEventListener("mousedown", (function() {
                        var e = d.querySelector("code")
                          , t = s("brace-selected");
                        Array.prototype.slice.call(e.querySelectorAll("." + t)).forEach((function(e) {
                            e.classList.remove(t)
                        }
                        ))
                    }
                    )),
                    Object.defineProperty(d, "__listenerAdded", {
                        value: !0
                    }));
                    var f = Array.prototype.slice.call(i.querySelectorAll("span." + s("token") + "." + s("punctuation")))
                      , h = [];
                    u.forEach((function(c) {
                        for (var i = e[c], d = s(t[c]), u = [], p = [], v = 0; v < f.length; v++) {
                            var m = f[v];
                            if (0 == m.childElementCount) {
                                var b = m.textContent;
                                (b = n[b] || b) === c ? (h.push({
                                    index: v,
                                    open: !0,
                                    element: m
                                }),
                                m.classList.add(d),
                                m.classList.add(s("brace-open")),
                                p.push(v)) : b === i && (h.push({
                                    index: v,
                                    open: !1,
                                    element: m
                                }),
                                m.classList.add(d),
                                m.classList.add(s("brace-close")),
                                p.length && u.push([v, p.pop()]))
                            }
                        }
                        u.forEach((function(e) {
                            var t = "pair-" + r++ + "-"
                              , n = f[e[0]]
                              , c = f[e[1]];
                            n.id = t + "open",
                            c.id = t + "close",
                            [n, c].forEach((function(e) {
                                e.addEventListener("mouseenter", a),
                                e.addEventListener("mouseleave", o),
                                e.addEventListener("click", l)
                            }
                            ))
                        }
                        ))
                    }
                    ));
                    var p = 0;
                    h.sort((function(e, t) {
                        return e.index - t.index
                    }
                    )),
                    h.forEach((function(e) {
                        e.open ? (e.element.classList.add(s("brace-level-" + (p % 12 + 1))),
                        p++) : (p = Math.max(0, p - 1),
                        e.element.classList.add(s("brace-level-" + (p % 12 + 1))))
                    }
                    ))
                }
            }
        }
        ))
    }
    function s(e) {
        var t = Prism.plugins.customClass;
        return t ? t.apply(e, "none") : e
    }
    function i(e) {
        var t = c.exec(e.id);
        return document.querySelector("#" + t[1] + ("open" == t[2] ? "close" : "open"))
    }
    function a() {
        Prism.util.isActive(this, "brace-hover", !0) && [this, i(this)].forEach((function(e) {
            e.classList.add(s("brace-hover"))
        }
        ))
    }
    function o() {
        [this, i(this)].forEach((function(e) {
            e.classList.remove(s("brace-hover"))
        }
        ))
    }
    function l() {
        Prism.util.isActive(this, "brace-select", !0) && [this, i(this)].forEach((function(e) {
            e.classList.add(s("brace-selected"))
        }
        ))
    }
}();
"undefined" != typeof Prism && (Prism.languages.treeview = {
    "treeview-part": {
        pattern: /^.+/m,
        inside: {
            "entry-line": [{
                pattern: /\|-- |├── /,
                alias: "line-h"
            }, {
                pattern: /\| {3}|│ {3}/,
                alias: "line-v"
            }, {
                pattern: /`-- |└── /,
                alias: "line-v-last"
            }, {
                pattern: / {4}/,
                alias: "line-v-gap"
            }],
            "entry-name": {
                pattern: /.*\S.*/,
                inside: {
                    operator: / -> /
                }
            }
        }
    }
},
Prism.hooks.add("wrap", (function(e) {
    if ("treeview" === e.language && "entry-name" === e.type) {
        var t = e.classes
          , n = /(^|[^\\])\/\s*$/;
        if (n.test(e.content))
            e.content = e.content.replace(n, "$1"),
            t.push("dir");
        else {
            e.content = e.content.replace(/(^|[^\\])[=*|]\s*$/, "$1");
            for (var a = e.content.toLowerCase().replace(/\s+/g, "").split("."); a.length > 1; )
                a.shift(),
                t.push("ext-" + a.join("-"))
        }
        "." === e.content[0] && t.push("dotfile")
    }
}
)));
