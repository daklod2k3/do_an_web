(function(w, d) {
    zaraz.debug = (a = "") = > {
        document.cookie = `zarazDebug = $ {
            a
        };
        path = /`;location.reload()};window.zaraz._al=function(a,e,n){w.zaraz.listeners.push({item:a,type:e,callback:n});a.addEventListener(e,n)};zaraz.preview=(a="")=>{document.cookie=`zarazPreview=${a}; path=/`;
        location.reload()
    };
    zaraz.i = function(e) {
        const n = d.createElement("div");
        n.innerHTML = unescape(e);
        const t = n.querySelectorAll("script");
        for (let e = 0; e < t.length; e++) {
            const n = d.createElement("script");
            t[e].innerHTML && (n.innerHTML = t[e].innerHTML);
            for (const r of t[e].attributes) n.setAttribute(r.name, r.value);
            d.head.appendChild(n);
            t[e].remove()
        }
        d.body.appendChild(n)
    };
    zaraz.f = async
    function(e, a) {
        const n = {
            credentials: "include",
            keepalive: !0,
            mode: "no-cors"
        };
        if (a) {
            n.method = "POST";
            n.body = new URLSearchParams(a);
            n.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        return await fetch(e, n)
    };
    ! function(e, r, t, n, a, d) {
        function f(e, r) {
            d ? n(e, r || 32) : a.push(e, r)
        }

        function i(e, t, n, a) {
            return t && r.getElementById(t) || (a = r.createElement(e || "SCRIPT"), t && (a.id = t), n && (a.onload = n), r.head.appendChild(a)), a || {}
        }
        d = /p/.test(r.readyState), e.addEventListener("on" + t in e ? t : "load", (function() {
            for (d = 1; a[0];) f(a.shift(), a.shift())
        })), f._ = i, e.defer = f, e.deferscript = function(e, r, t, n) {
            f((function() {
                i("", r, n).src = e
            }), t)
        }
    }(this, d, "pageshow", setTimeout, []);
    defer((function() {
        for (; zaraz.deferred.length;) zaraz.deferred.pop()();
        Object.defineProperty(zaraz.deferred, "push", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(...e) {
                let r = Array.prototype.push.apply(this, e);
                for (; zaraz.deferred.length;) zaraz.deferred.pop()();
                return r
            }
        })
    }), 5500);
    addEventListener("visibilitychange", (function() {
        for (; zaraz.deferred.length;) zaraz.deferred.pop()()
    }));
    zaraz.pageVariables = {};
    zaraz._p = a = > {
        if (a) {
            a.e && new Function(a.e)();
            if (a.f)
                for (const e of a.f) fetch(e[0], e[1])
        }
    };
    zaraz.track = function(a, e, t) {
        const r = {
            name: a,
            data: {}
        };
        for (const a of[localStorage, sessionStorage]) Object.keys(a || {}).filter((a = > a.startsWith("_zaraz_"))).forEach((e = > {
            try {
                r.data[e.slice(7)] = JSON.parse(a.getItem(e))
            } catch {
                r.data[e.slice(7)] = a.getItem(e)
            }
        }));
        Object.keys(zaraz.pageVariables).forEach((a = > r.data[a] = JSON.parse(zaraz.pageVariables[a])));
        //
        r.data = {...r.data, ...e
        };
        r.zarazData = zarazData;
        fetch("/cdn-cgi/zaraz/t", {
            credentials: "include",
            keepalive: !0,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(r)
        }).
        catch ((() = > {
            console.warn("Large event payload sent to Cloudflare Zaraz, cannot assure deliverability.");
            return fetch("/cdn-cgi/zaraz/t", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(r)
            })
        })).then((function(a) {
            zarazData._let = (new Date).getTime();
            return 200 === a.status && a.json()
        })).then((function(a) {
            zaraz._p(a);
            "function" == typeof t && t()
        }))
    };
    zaraz.set = function(a, e, t) {
        e = JSON.stringify(e);
        prefixedKey = "_zaraz_" + a;
        sessionStorage.removeItem(prefixedKey);
        localStorage.removeItem(prefixedKey);
        delete zaraz.pageVariables[a];
        t && "session" == t.scope ? sessionStorage.setItem(prefixedKey, e) : t && "page" == t.scope ? zaraz.pageVariables[a] = e : localStorage.setItem(prefixedKey, e);
        zaraz.__watchVar = {
            key: a,
            value: e
        }
    };
    for (const {
            m: a,
            a: e
        }
        of zarazData.q.filter((({
            m: a
        }) = > ["debug", "set"].includes(a)))) zaraz[a](...e);
    for (const {
            m: a,
            a: e
        }
        of zaraz.q) zaraz[a](...e);
    delete zaraz.q;
    delete zarazData.q;
    zaraz.fulfilTrigger = function(a, r, z, g) {
        zaraz.__zarazTriggerMap || (zaraz.__zarazTriggerMap = {});
        zaraz.__zarazTriggerMap[a] || (zaraz.__zarazTriggerMap[a] = "");
        zaraz.__zarazTriggerMap[a] += "*" + r + "*";
        zaraz.track("__zarazEmpty", {...z, __zarazClientTriggers: zaraz.__zarazTriggerMap[a]
        }, g)
    };
    window.dataLayer = w.dataLayer || [];
    zaraz._processDataLayer = a = > {
        if (a.event) {
            if (zarazData.dataLayerIgnore && zarazData.dataLayerIgnore.includes(a.event)) return;
            let e = {};
            for (let r of dataLayer.slice(0, dataLayer.indexOf(a) + 1)) e = {...e, ...r
            };
            delete e.event;
            a.event.startsWith("gtm.") || zaraz.track(a.event, e)
        }
    };
    Object.defineProperty(w.dataLayer, "push", {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: function(...a) {
            let e = Array.prototype.push.apply(this, a);
            zaraz._processDataLayer(a[0]);
            return e
        }
    });
    dataLayer.forEach((a = > zaraz._processDataLayer(a)));
    zaraz._cts = () = > {
        zaraz._timeouts ? .forEach((a = > clearTimeout(a)));
        zaraz._timeouts = []
    };
    zaraz._rl = function() {
        w.zaraz.listeners ? .forEach((a = > a.item.removeEventListener(a.type, a.callback)));
        window.zaraz.listeners = []
    };
    history.pushState = function() {
        try {
            zaraz._rl();
            zaraz._cts && zaraz._cts()
        } finally {
            History.prototype.pushState.apply(history, arguments);
            setTimeout((() = > {
                zarazData.l = d.location.href;
                zarazData.t = d.title;
                zaraz.pageVariables = {};
                zaraz.track("__zarazSPA")
            }), 100)
        }
    };
    history.replaceState = function() {
        try {
            zaraz._rl();
            zaraz._cts && zaraz._cts()
        } finally {
            History.prototype.replaceState.apply(history, arguments);
            setTimeout((() = > {
                zarazData.l = d.location.href;
                zarazData.t = d.title;
                zaraz.pageVariables = {};
                zaraz.track("__zarazSPA")
            }), 100)
        }
    };
    zaraz._p({
        "e": ["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document);"]
    })
})(window, document);