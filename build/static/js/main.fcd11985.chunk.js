(this.webpackJsonpaviasales = this.webpackJsonpaviasales || []).push([
    [0],
    {
        51: function(e, t, n) {
            e.exports = n.p + "static/media/logo.1bff4043.svg";
        },
        54: function(e, t, n) {
            e.exports = n(69);
        },
        68: function(e, t, n) {},
        69: function(e, t, n) {
            "use strict";
            n.r(t);
            var r,
                a,
                c = n(0),
                i = n.n(c),
                u = n(30),
                o = n.n(u),
                s = n(15),
                l = n(18),
                f = n(17),
                d = n(41),
                p = n(32),
                h = n(53),
                b = n(11),
                m = n(23),
                v = n(21),
                x = n(24),
                g = n(9);
            !(function(e) {
                (e[(e.isNotLoadedSearchId = 0)] = "isNotLoadedSearchId"),
                    (e[(e.isLoadedSearchId = 1)] = "isLoadedSearchId"),
                    (e[(e.isLoadedTickets = 2)] = "isLoadedTickets"),
                    (e[(e.isErrorServer = 3)] = "isErrorServer");
            })(r || (r = {})),
                (function(e) {
                    (e[(e.price = 0)] = "price"), (e[(e.time = 1)] = "time");
                })(a || (a = {}));
            var O = {
                    searchId: "",
                    status: r.isNotLoadedSearchId,
                    sort: a.price,
                    filterNumberStops: Object(g.c)([]),
                    limit: 5
                },
                j = (function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(m.a)(this, Object(v.a)(t).apply(this, arguments));
                    }
                    return Object(x.a)(t, e), t;
                })(Object(g.b)(O)),
                E = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new j(),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "LOAD_SEARCH_ID":
                            return e;
                        case "LOAD_SEARCH_ID_SUCCESS":
                            return e.set("searchId", t.id).set("status", r.isLoadedSearchId);
                        case "SET_STATUS":
                            return e.set("status", t.status);
                        case "SET_FILTER_NUMBER_STOPS":
                            return e.set("filterNumberStops", t.value);
                        case "SET_SORT":
                            return e.set("sort", t.value);
                        default:
                            return e;
                    }
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(g.a)([]),
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case "LOAD_TICKETS":
                            return e;
                        case "ADD_TICKETS":
                            return (
                                t.tickets.forEach(function(t) {
                                    e = e.push(t);
                                }),
                                e
                            );
                        default:
                            return e;
                    }
                },
                k = function(e) {
                    return Object(s.c)({ router: Object(p.b)(e), search: E, tickets: w });
                },
                S = n(12),
                y = n.n(S),
                T = n(44),
                _ = n(10),
                I = function(e) {
                    return { type: "LOAD_SEARCH_ID_SUCCESS", id: e };
                },
                L = function(e) {
                    return { type: "SET_STATUS", status: e };
                },
                A = y.a.mark(z),
                D = y.a.mark(C);
            function z(e) {
                var t;
                return y.a.wrap(
                    function(n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(_.b)(e.container.ApiSearch.loadSearchId);
                                case 3:
                                    return (t = n.sent), (n.next = 6), Object(_.c)(I(t));
                                case 6:
                                    n.next = 13;
                                    break;
                                case 8:
                                    return (
                                        (n.prev = 8),
                                        (n.t0 = n.catch(0)),
                                        (n.next = 12),
                                        Object(_.c)(L(r.isErrorServer))
                                    );
                                case 12:
                                    console.error(n.t0);
                                case 13:
                                case "end":
                                    return n.stop();
                            }
                    },
                    A,
                    null,
                    [[0, 8]]
                );
            }
            function C(e) {
                return y.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(_.d)("LOAD_SEARCH_ID", z, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, D);
            }
            var N = function(e) {
                    return { type: "LOAD_TICKETS", searchId: e };
                },
                R = y.a.mark(H),
                F = y.a.mark(U);
            function H(e, t) {
                var n;
                return y.a.wrap(
                    function(a) {
                        for (;;)
                            switch ((a.prev = a.next)) {
                                case 0:
                                    return (
                                        (a.prev = 0),
                                        (a.next = 3),
                                        Object(_.b)(e.container.ApiTicket.loadTickets, t.searchId)
                                    );
                                case 3:
                                    return (
                                        (n = a.sent),
                                        (a.next = 6),
                                        Object(_.c)({ type: "ADD_TICKETS", tickets: n.tickets })
                                    );
                                case 6:
                                    if (!n.stop) {
                                        a.next = 11;
                                        break;
                                    }
                                    return (a.next = 9), Object(_.c)(L(r.isLoadedTickets));
                                case 9:
                                    a.next = 13;
                                    break;
                                case 11:
                                    return (a.next = 13), Object(_.c)(N(t.searchId));
                                case 13:
                                    a.next = 25;
                                    break;
                                case 15:
                                    if (((a.prev = 15), (a.t0 = a.catch(0)), 500 !== a.t0.status)) {
                                        a.next = 22;
                                        break;
                                    }
                                    return (a.next = 20), Object(_.c)(N(t.searchId));
                                case 20:
                                    a.next = 25;
                                    break;
                                case 22:
                                    return (a.next = 24), Object(_.c)(L(r.isErrorServer));
                                case 24:
                                    console.error(a.t0);
                                case 25:
                                case "end":
                                    return a.stop();
                            }
                    },
                    R,
                    null,
                    [[0, 15]]
                );
            }
            function U(e) {
                return y.a.wrap(function(t) {
                    for (;;)
                        switch ((t.prev = t.next)) {
                            case 0:
                                return (t.next = 2), Object(_.d)("LOAD_TICKETS", H, e);
                            case 2:
                            case "end":
                                return t.stop();
                        }
                }, F);
            }
            var K = n(45),
                B = n.n(K),
                M = n(20),
                P = { origin: "", destination: "", date: "", stops: Object(g.a)([]), duration: 0 },
                q = (function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(m.a)(this, Object(v.a)(t).apply(this, arguments));
                    }
                    return Object(x.a)(t, e), t;
                })(Object(g.b)(P)),
                J = { from: new q(), to: new q() },
                W = (function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(m.a)(this, Object(v.a)(t).apply(this, arguments));
                    }
                    return Object(x.a)(t, e), t;
                })(Object(g.b)(J)),
                X = { price: 0, carrier: "", segments: new W() },
                $ = function(e) {
                    return e.sort(function(e, t) {
                        return e.price < t.price ? -1 : e.price > t.price ? 1 : 0;
                    });
                },
                G = (function(e) {
                    function t() {
                        return Object(b.a)(this, t), Object(m.a)(this, Object(v.a)(t).apply(this, arguments));
                    }
                    return Object(x.a)(t, e), t;
                })(Object(g.b)(X)),
                V = new B.a(),
                Q = V;
            V.service("Http", function e() {
                var t = this;
                Object(b.a)(this, e),
                    (this.get = function(e, n) {
                        return t.request("GET", e, n);
                    }),
                    (this.request = function(e, t) {
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return fetch("https://front-test.beta.aviasales.ru/" + t, { method: e }).then(function(e) {
                            if (e.ok) return e.json();
                            throw e;
                        });
                    });
            }),
                V.service(
                    "ApiSearch",
                    function e(t) {
                        var n = this;
                        Object(b.a)(this, e),
                            (this.http = t),
                            (this.url = "search"),
                            (this.loadSearchId = function() {
                                return n.http.get(n.url).then(function(e) {
                                    return e.searchId;
                                });
                            });
                    },
                    "Http"
                ),
                V.service(
                    "ApiTicket",
                    function e(t) {
                        var n = this;
                        Object(b.a)(this, e),
                            (this.http = t),
                            (this.url = "tickets"),
                            (this.loadTickets = function(e) {
                                return n.http.get(n.url + "?searchId=" + e).then(function(e) {
                                    return {
                                        tickets: e.tickets.map(function(e) {
                                            return (function(e) {
                                                return new G(
                                                    Object(M.a)({}, e, {
                                                        segments: new W({
                                                            from: new q(
                                                                Object(M.a)({}, e.segments[0], {
                                                                    stops: Object(g.a)(e.segments[0].stops)
                                                                })
                                                            ),
                                                            to: new q(
                                                                Object(M.a)({}, e.segments[1], {
                                                                    stops: Object(g.a)(e.segments[1].stops)
                                                                })
                                                            )
                                                        })
                                                    })
                                                );
                                            })(e);
                                        }),
                                        stop: e.stop
                                    };
                                });
                            });
                    },
                    "Http"
                );
            Boolean(
                "localhost" === window.location.hostname ||
                    "[::1]" === window.location.hostname ||
                    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
            );
            var Y = n(26),
                Z = n(3),
                ee = n(4);
            function te(e) {
                return Object(l.e)(function(t) {
                    return e(t);
                });
            }
            var ne = n(13),
                re = function(e) {
                    return e.search;
                },
                ae = Object(ne.a)(re, function(e) {
                    return e.searchId;
                }),
                ce = Object(ne.a)(re, function(e) {
                    return e.status;
                }),
                ie = Object(ne.a)(re, function(e) {
                    return e.sort;
                }),
                ue = Object(ne.a)(re, function(e) {
                    return e.filterNumberStops;
                }),
                oe = function(e) {
                    return e.tickets;
                },
                se = function(e) {
                    switch (e.search.sort) {
                        case a.time:
                            return Object(M.a)({}, e, {
                                tickets:
                                    ((t = e.tickets),
                                    t.sort(function(e, t) {
                                        var n = e.segments.from.duration + e.segments.to.duration,
                                            r = t.segments.from.duration + t.segments.to.duration;
                                        return n < r ? -1 : n > r ? 1 : 0;
                                    }))
                            });
                        case a.price:
                            return Object(M.a)({}, e, { tickets: $(e.tickets) });
                        default:
                            return e;
                    }
                    var t;
                },
                le =
                    (Object(ne.a)(se, oe),
                    function(e) {
                        return 0 === e.search.filterNumberStops.size
                            ? e
                            : Object(M.a)({}, e, {
                                  tickets:
                                      ((t = e.tickets),
                                      (n = e.search.filterNumberStops),
                                      t.filter(function(e) {
                                          return [e.segments.from.stops.size, e.segments.to.stops.size].every(function(
                                              e
                                          ) {
                                              return n.has(e);
                                          });
                                      }))
                              });
                        var t, n;
                    }),
                fe = (Object(ne.a)(le, oe), Object(ne.a)(le, se)),
                de =
                    (Object(ne.a)(fe, oe),
                    Object(ne.a)(fe, function(e) {
                        return 0 === e.search.limit
                            ? e
                            : Object(M.a)({}, e, { tickets: ((t = e.tickets), (n = e.search.limit), t.slice(0, n)) });
                        var t, n;
                    })),
                pe = Object(ne.a)(de, oe),
                he = n(49);
            function be() {
                var e = Object(Z.a)([
                    "\n    animation: rotate 2s linear infinite;\n    color: #2196f3;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"
                ]);
                return (
                    (be = function() {
                        return e;
                    }),
                    e
                );
            }
            function me() {
                var e = Object(Z.a)([
                    "\n    padding: 20px 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #4a4a4a;\n"
                ]);
                return (
                    (me = function() {
                        return e;
                    }),
                    e
                );
            }
            function ve(e) {
                return i.a.createElement(xe, null, i.a.createElement(ge, { size: "28" }), " ", e.text);
            }
            var xe = ee.a.div(me()),
                ge = Object(ee.a)(he.a)(be()),
                Oe = n(50);
            function je() {
                var e = Object(Z.a)(["\n    color: red;\n"]);
                return (
                    (je = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ee() {
                var e = Object(Z.a)([
                    "\n    padding: 20px 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #4a4a4a;\n"
                ]);
                return (
                    (Ee = function() {
                        return e;
                    }),
                    e
                );
            }
            function we(e) {
                return i.a.createElement(ke, null, i.a.createElement(Se, { size: "28" }), " ", e.text);
            }
            var ke = ee.a.div(Ee()),
                Se = Object(ee.a)(Oe.a)(je());
            function ye() {
                return Object(l.d)();
            }
            function Te() {
                var e = ye();
                return (
                    Object(c.useEffect)(function() {
                        e({ type: "LOAD_SEARCH_ID" });
                    }, []),
                    i.a.createElement(i.a.Fragment, null)
                );
            }
            function _e() {
                var e = ye(),
                    t = te(ae);
                return (
                    Object(c.useEffect)(function() {
                        e(N(t));
                    }, []),
                    i.a.createElement(i.a.Fragment, null)
                );
            }
            var Ie = n(51),
                Le = n.n(Ie);
            function Ae() {
                var e = Object(Z.a)([
                    "\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    position: relative;\n    width: ",
                    "px;\n    height: ",
                    "px;\n    border-radius: ",
                    'px;\n    box-shadow: 0 1px 11px rgba(55, 104, 142, 0.3);\n\n    &:after {\n        content: "";\n        position: absolute;\n        z-index: -1;\n        width: 44px;\n        height: 44px;\n        border-radius: 22px;\n        box-shadow: 0 8px 11px rgba(55, 104, 142, 0.25);\n    }\n'
                ]);
                return (
                    (Ae = function() {
                        return e;
                    }),
                    e
                );
            }
            function De() {
                var e = Object(Z.a)([
                    "\n    display: block;\n    width: ",
                    "px;\n    height: ",
                    "px;\n    border-radius: ",
                    "px;\n    background-color: #2196f3;\n"
                ]);
                return (
                    (De = function() {
                        return e;
                    }),
                    e
                );
            }
            function ze() {
                return i.a.createElement(Ne, null, i.a.createElement(Ce, { src: Le.a, alt: "logo" }));
            }
            var Ce = ee.a.img(De(), 60, 60, 30),
                Ne = ee.a.div(Ae(), 60, 60, 30),
                Re = n(52);
            function Fe() {
                var e = Object(Z.a)([
                    "\n    color: #2196f3;\n    height: 0;\n    width: 18px;\n    position: absolute;\n    left: 21px;\n    top: 10px;\n\n    ",
                    ":checked + ",
                    " > & {\n        height: 18px;\n    }\n"
                ]);
                return (
                    (Fe = function() {
                        return e;
                    }),
                    e
                );
            }
            function He() {
                var e = Object(Z.a)([
                    '\n    position: relative;\n    display: flex;\n    width: 100%;\n    padding: 10px 20px;\n    font-size: 13px;\n    line-height: 20px;\n\n    &:hover {\n        cursor: pointer;\n        background: #f1fcff;\n    }\n\n    &:before {\n        content: "";\n        height: 20px;\n        width: 20px;\n        margin-right: 10px;\n        border: 1px solid #9abbce;\n        border-radius: 2px;\n    }\n\n    ',
                    ":checked + &:before {\n        border: 1px solid #2196f3;\n    }\n"
                ]);
                return (
                    (He = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ue() {
                var e = Object(Z.a)([
                    "\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n"
                ]);
                return (
                    (Ue = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ke(e) {
                return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(Be, {
                        type: "checkbox",
                        value: e.value,
                        onChange: function(t) {
                            return e.handleChange(t.target.value, t.target.checked);
                        },
                        checked: e.checked,
                        id: e.id
                    }),
                    i.a.createElement(Me, { htmlFor: e.id }, i.a.createElement(Pe, { size: "18" }), e.text)
                );
            }
            var Be = ee.a.input(Ue()),
                Me = ee.a.label(He(), Be),
                Pe = Object(ee.a)(Re.a)(Fe(), Be, Me);
            function qe() {
                var e = Object(Z.a)([
                    "\n    padding: 10px 20px;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 12px;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n    color: #4a4a4a;\n"
                ]);
                return (
                    (qe = function() {
                        return e;
                    }),
                    e
                );
            }
            function Je() {
                var e = ye(),
                    t = te(ue),
                    n = function(n, r) {
                        (t = "reset" === n ? t.clear() : r ? t.add(Number(n)) : t.remove(Number(n))),
                            e(
                                (function(e) {
                                    return { type: "SET_FILTER_NUMBER_STOPS", value: e };
                                })(t)
                            );
                    };
                return i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                        Xe,
                        null,
                        "\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"
                    ),
                    We.map(function(e) {
                        return i.a.createElement(Ke, {
                            value: e.value,
                            text: e.label,
                            checked: "number" === typeof e.value ? t.has(e.value) : 0 === t.size,
                            handleChange: n,
                            id: "filterNumberStops-" + e.value,
                            key: e.value
                        });
                    })
                );
            }
            var We = [
                    { value: "reset", label: "\u0412\u0441\u0435" },
                    { value: 0, label: "\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a" },
                    { value: 1, label: "1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430" },
                    { value: 2, label: "2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438" },
                    { value: 3, label: "3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438" }
                ],
                Xe = ee.a.div(qe());
            function $e() {
                var e = Object(Z.a)([
                    "\n    padding: 10px 0;\n    background: #ffffff;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n"
                ]);
                return (
                    ($e = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ge() {
                return i.a.createElement(Ve, null, i.a.createElement(Je, null));
            }
            var Ve = ee.a.div($e());
            function Qe() {
                var e = Object(Z.a)([
                    "\n    display: flex;\n    flex-grow: 1;\n    margin: 0;\n    justify-content: center;\n    align-items: center;\n    background-color: #ffffff;\n    border: 1px solid #dfe5ec;\n    font-style: normal;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 20px;\n    color: #4a4a4a;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n\n    ",
                    ":checked + & {\n        background-color: #2196f3;\n        border: 1px solid #2196f3;\n        color: #ffffff;\n    }\n\n    &:nth-child(2) {\n        border-top-left-radius: 5px;\n        border-bottom-left-radius: 5px;\n    }\n\n    &:last-child {\n        border-top-right-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n"
                ]);
                return (
                    (Qe = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ye() {
                var e = Object(Z.a)([
                    "\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n"
                ]);
                return (
                    (Ye = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ze() {
                var e = Object(Z.a)(["\n    display: flex;\n    height: 50px;\n"]);
                return (
                    (Ze = function() {
                        return e;
                    }),
                    e
                );
            }
            function et() {
                var e = ye(),
                    t = te(ie);
                return i.a.createElement(
                    nt,
                    null,
                    tt.map(function(n) {
                        return i.a.createElement(
                            i.a.Fragment,
                            { key: n.value },
                            i.a.createElement(rt, {
                                value: n.value,
                                type: "radio",
                                checked: n.value === t,
                                onChange: function(t) {
                                    return (
                                        (n = t.target.value),
                                        void e(
                                            (function(e) {
                                                return { type: "SET_SORT", value: e };
                                            })(Number(n))
                                        )
                                    );
                                    var n;
                                },
                                id: "sort-" + n.value
                            }),
                            i.a.createElement(at, { htmlFor: "sort-" + n.value }, n.label)
                        );
                    })
                );
            }
            var tt = [
                    {
                        value: a.price,
                        label: "\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"
                    },
                    {
                        value: a.time,
                        label: "\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"
                    }
                ],
                nt = ee.a.div(Ze()),
                rt = ee.a.input(Ye()),
                at = ee.a.label(Qe(), rt);
            function ct() {
                var e = Object(Z.a)([
                    "\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 21px;\n    color: #4a4a4a;\n    letter-spacing: 0.5px;\n"
                ]);
                return (
                    (ct = function() {
                        return e;
                    }),
                    e
                );
            }
            function it() {
                var e = Object(Z.a)([
                    "\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 18px;\n    color: #a0b0b9;\n    letter-spacing: 0.5px;\n    text-transform: uppercase;\n"
                ]);
                return (
                    (it = function() {
                        return e;
                    }),
                    e
                );
            }
            function ut() {
                var e = Object(Z.a)(["\n    width: 140px;\n"]);
                return (
                    (ut = function() {
                        return e;
                    }),
                    e
                );
            }
            function ot() {
                var e = Object(Z.a)(["\n    width: 140px;\n"]);
                return (
                    (ot = function() {
                        return e;
                    }),
                    e
                );
            }
            function st() {
                var e = Object(Z.a)(["\n    width: 140px;\n"]);
                return (
                    (st = function() {
                        return e;
                    }),
                    e
                );
            }
            function lt() {
                var e = Object(Z.a)([
                    "\n    display: flex;\n    justify-content: space-between;\n\n    &:not(:first-child) {\n        padding-top: 10px;\n    }\n"
                ]);
                return (
                    (lt = function() {
                        return e;
                    }),
                    e
                );
            }
            function ft(e) {
                return i.a.createElement(
                    ht,
                    null,
                    i.a.createElement(
                        bt,
                        null,
                        i.a.createElement(xt, null, e.segment.origin, " - ", e.segment.destination),
                        i.a.createElement(gt, null, pt(e.segment.date, e.segment.duration))
                    ),
                    i.a.createElement(
                        mt,
                        null,
                        i.a.createElement(xt, null, "\u0412 \u043f\u0443\u0442\u0438"),
                        i.a.createElement(gt, null, dt(e.segment.duration))
                    ),
                    i.a.createElement(
                        vt,
                        null,
                        i.a.createElement(
                            xt,
                            null,
                            0 === e.segment.stops.size
                                ? "\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"
                                : 1 === e.segment.stops.size
                                ? "1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"
                                : e.segment.stops.size + " \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"
                        ),
                        i.a.createElement(gt, null, e.segment.stops.join(", "))
                    )
                );
            }
            var dt = function(e) {
                    return Math.floor(e / 60).toString() + "\u0447 " + (e % 60) + "\u043c";
                },
                pt = function(e, t) {
                    var n = new Date(e),
                        r = new Date(n.getTime() + 60 * t * 1e3);
                    return n.toTimeString().slice(0, 5) + " - " + r.toTimeString().slice(0, 5);
                },
                ht = ee.a.div(lt()),
                bt = ee.a.div(st()),
                mt = ee.a.div(ot()),
                vt = ee.a.div(ut()),
                xt = ee.a.div(it()),
                gt = ee.a.div(ct());
            function Ot() {
                var e = Object(Z.a)(["\n    width: 110px;\n    height: 36px;\n"]);
                return (
                    (Ot = function() {
                        return e;
                    }),
                    e
                );
            }
            function jt() {
                var e = Object(Z.a)([
                    "\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 24px;\n    color: #2196f3;\n"
                ]);
                return (
                    (jt = function() {
                        return e;
                    }),
                    e
                );
            }
            function Et() {
                var e = Object(Z.a)([""]);
                return (
                    (Et = function() {
                        return e;
                    }),
                    e
                );
            }
            function wt() {
                var e = Object(Z.a)([
                    "\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-right: 30px;\n    padding-bottom: 20px;\n"
                ]);
                return (
                    (wt = function() {
                        return e;
                    }),
                    e
                );
            }
            function kt() {
                var e = Object(Z.a)([
                    "\n    margin: 20px 0;\n    padding: 20px;\n    background: #ffffff;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n"
                ]);
                return (
                    (kt = function() {
                        return e;
                    }),
                    e
                );
            }
            function St(e) {
                return i.a.createElement(
                    Tt,
                    null,
                    i.a.createElement(
                        _t,
                        null,
                        i.a.createElement(Lt, null, yt(e.ticket.price), " \u0420"),
                        i.a.createElement(
                            At,
                            null,
                            i.a.createElement("img", {
                                src: "//pics.avs.io/110/36/" + e.ticket.carrier + ".png",
                                alt: e.ticket.carrier
                            })
                        )
                    ),
                    i.a.createElement(
                        It,
                        null,
                        i.a.createElement(ft, { segment: e.ticket.segments.from }),
                        i.a.createElement(ft, { segment: e.ticket.segments.to })
                    )
                );
            }
            var yt = function(e) {
                    return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
                },
                Tt = ee.a.div(kt()),
                _t = ee.a.div(wt()),
                It = ee.a.div(Et()),
                Lt = ee.a.div(jt()),
                At = ee.a.div(Ot());
            function Dt() {
                var e = te(pe);
                return i.a.createElement(
                    i.a.Fragment,
                    null,
                    e.map(function(e, t) {
                        return i.a.createElement(St, { ticket: e, key: t });
                    })
                );
            }
            function zt() {
                var e = Object(Z.a)(["\n    width: 100%;\n"]);
                return (
                    (zt = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ct() {
                var e = Object(Z.a)(["\n    width: 232px;\n    min-width: 232px;\n    margin-right: 20px;\n"]);
                return (
                    (Ct = function() {
                        return e;
                    }),
                    e
                );
            }
            function Nt() {
                var e = Object(Z.a)(["\n    display: flex;\n    width: 100%;\n"]);
                return (
                    (Nt = function() {
                        return e;
                    }),
                    e
                );
            }
            function Rt() {
                var e = Object(Z.a)(["\n    display: flex;\n    justify-content: center;\n    padding: 50px 0;\n"]);
                return (
                    (Rt = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ft() {
                var e = Object(Z.a)(["\n    width: 754px;\n"]);
                return (
                    (Ft = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ht() {
                var e = Object(Z.a)(["\n    display: flex;\n    justify-content: center;\n"]);
                return (
                    (Ht = function() {
                        return e;
                    }),
                    e
                );
            }
            function Ut() {
                var e = te(ce);
                return i.a.createElement(
                    Kt,
                    null,
                    i.a.createElement(
                        Bt,
                        null,
                        i.a.createElement(Mt, null, i.a.createElement(ze, null)),
                        i.a.createElement(
                            Pt,
                            null,
                            i.a.createElement(qt, null, i.a.createElement(Ge, null)),
                            i.a.createElement(
                                Jt,
                                null,
                                i.a.createElement(et, null),
                                e === r.isNotLoadedSearchId && i.a.createElement(Te, null),
                                e === r.isLoadedSearchId && i.a.createElement(_e, null),
                                e !== r.isLoadedTickets &&
                                    e !== r.isErrorServer &&
                                    i.a.createElement(ve, {
                                        text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."
                                    }),
                                e === r.isLoadedTickets && i.a.createElement(Dt, null),
                                e === r.isErrorServer &&
                                    i.a.createElement(we, {
                                        text:
                                            "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"
                                    })
                            )
                        )
                    )
                );
            }
            var Kt = ee.a.div(Ht()),
                Bt = ee.a.div(Ft()),
                Mt = ee.a.div(Rt()),
                Pt = ee.a.div(Nt()),
                qt = ee.a.div(Ct()),
                Jt = ee.a.div(zt()),
                Wt = function() {
                    return i.a.createElement(
                        Y.c,
                        null,
                        i.a.createElement(Y.a, { exact: !0, path: "/", component: Ut })
                    );
                };
            n(67), n(68);
            n.d(t, "history", function() {
                return $t;
            });
            var Xt,
                $t = Object(f.a)(),
                Gt = Object(h.a)(),
                Vt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || s.d,
                Qt = Object(s.e)(k($t), Vt(Object(s.a)(Gt, Object(d.a)($t))));
            Gt.run(
                ((Xt = Q),
                y.a.mark(function e() {
                    return y.a.wrap(function(e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(T.a)([C(Xt), U(Xt)]);
                                case 2:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }))
            ),
                o.a.render(
                    i.a.createElement(
                        l.a,
                        { store: Qt },
                        i.a.createElement(p.a, { history: $t }, i.a.createElement(Wt, null))
                    ),
                    document.getElementById("root")
                ),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready.then(function(e) {
                        e.unregister();
                    });
        }
    },
    [[54, 1, 2]]
]);
//# sourceMappingURL=main.fcd11985.chunk.js.map
