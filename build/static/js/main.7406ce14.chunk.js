(this.webpackJsonpmarket = this.webpackJsonpmarket || []).push([
    [0],
    {
        108: function (e, n, t) {},
        109: function (e, n, t) {
            "use strict";
            t.r(n),
                t.d(n, "history", function () {
                    return rr;
                });
            var r,
                c,
                a = t(1),
                i = t(0),
                o = t.n(i),
                u = t(33),
                s = t.n(u),
                d = t(23),
                b = t(24),
                j = t(17),
                f = t(58),
                p = t(39),
                l = t(75),
                O = t(21),
                h = t(29),
                x = t(28),
                v = t(22);
            !(function (e) {
                (e[(e.notLoaded = 0)] = "notLoaded"),
                    (e[(e.loaded = 1)] = "loaded"),
                    (e[(e.errorServer = 2)] = "errorServer");
            })(r || (r = {})),
                (function (e) {
                    (e[(e.notSaved = 0)] = "notSaved"),
                        (e[(e.save = 1)] = "save"),
                        (e[(e.saved = 2)] = "saved"),
                        (e[(e.errorServer = 3)] = "errorServer");
                })(c || (c = {}));
            var m = {
                    statusLoadingProduct: r.notLoaded,
                    statusLoadingProducts: r.notLoaded,
                    statusLoadingParameters: r.notLoaded,
                    statusSavingProduct: c.notSaved,
                    searchWord: "",
                },
                g = (function (e) {
                    Object(h.a)(t, e);
                    var n = Object(x.a)(t);
                    function t() {
                        return Object(O.a)(this, t), n.apply(this, arguments);
                    }
                    return t;
                })(Object(v.b)(m)),
                y = "UPDATE_STATUS_LOADING_PRODUCT",
                w = "UPDATE_STATUS_LOADING_PRODUCTS",
                S = "UPDATE_STATUS_LOADING_PARAMETERS",
                P = "UPDATE_STATUS_SAVING_PRODUCT",
                _ = "UPDATE_SEARCH_WORD",
                A = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new g(),
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case y:
                            return e.set("statusLoadingProduct", n.status);
                        case w:
                            return e.set("statusLoadingProducts", n.status);
                        case S:
                            return e.set("statusLoadingParameters", n.status);
                        case P:
                            return e.set("statusSavingProduct", n.status);
                        case _:
                            return e.set("searchWord", n.searchWord.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"));
                        default:
                            return e;
                    }
                },
                k = "ADD_PARAMETERS",
                E = "LOAD_PARAMETERS",
                T = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(v.a)(),
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case E:
                            return e;
                        case k:
                            return (
                                n.parameters.forEach(function (n) {
                                    e = e.set(n.key, n);
                                }),
                                e
                            );
                        default:
                            return e;
                    }
                },
                D = "ADD_PRODUCTS",
                C = "LOAD_PRODUCTS",
                R = "LOAD_PRODUCT_BY_ID",
                U = "CREATE_PRODUCT",
                L = "CREATE_PRODUCT_SUCCESS",
                z = "UPDATE_PRODUCT",
                G = "UPDATE_PRODUCT_SUCCESS",
                N = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object(v.a)(),
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (n.type) {
                        case C:
                            return e;
                        case D:
                            return (
                                n.products.forEach(function (n) {
                                    e.has(n.id) || (e = e.set(n.id, n));
                                }),
                                e
                            );
                        case L:
                        case G:
                            return e.set(n.product.id, n.product);
                        default:
                            return e;
                    }
                },
                F = function (e) {
                    return Object(d.c)({ router: Object(p.b)(e), main: A, parameters: T, products: N });
                },
                I = t(12),
                q = t.n(I),
                J = t(60),
                M = t(8),
                W = function (e) {
                    return { type: k, parameters: e };
                },
                H = function (e) {
                    return { type: y, status: e };
                },
                B = function (e) {
                    return { type: w, status: e };
                },
                V = function (e) {
                    return { type: P, status: e };
                },
                X = q.a.mark(Y),
                $ = q.a.mark(K);
            function Y(e, n) {
                var t;
                return q.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(M.b)(e.container.ApiParameter.loadAll);
                                case 3:
                                    return (t = n.sent), (n.next = 6), Object(M.c)(W(t));
                                case 6:
                                    return (n.next = 8), Object(M.c)(((c = r.loaded), { type: S, status: c }));
                                case 8:
                                    n.next = 13;
                                    break;
                                case 10:
                                    (n.prev = 10), (n.t0 = n.catch(0)), console.error(n.t0);
                                case 13:
                                case "end":
                                    return n.stop();
                            }
                        var c;
                    },
                    X,
                    null,
                    [[0, 10]]
                );
            }
            function K(e) {
                return q.a.wrap(function (n) {
                    for (;;)
                        switch ((n.prev = n.next)) {
                            case 0:
                                return (n.next = 2), Object(M.d)(E, Y, e);
                            case 2:
                            case "end":
                                return n.stop();
                        }
                }, $);
            }
            var Q = function (e) {
                    return { type: D, products: e };
                },
                Z = function (e) {
                    return { type: L, product: e };
                },
                ee = function (e) {
                    return { type: G, product: e };
                },
                ne = q.a.mark(ie),
                te = q.a.mark(oe),
                re = q.a.mark(ue),
                ce = q.a.mark(se),
                ae = q.a.mark(de);
            function ie(e, n) {
                var t;
                return q.a.wrap(
                    function (n) {
                        for (;;)
                            switch ((n.prev = n.next)) {
                                case 0:
                                    return (n.prev = 0), (n.next = 3), Object(M.b)(e.container.ApiProduct.loadAll);
                                case 3:
                                    return (t = n.sent), (n.next = 6), Object(M.c)(Q(t));
                                case 6:
                                    return (n.next = 8), Object(M.c)(B(r.loaded));
                                case 8:
                                    n.next = 15;
                                    break;
                                case 10:
                                    return (
                                        (n.prev = 10),
                                        (n.t0 = n.catch(0)),
                                        console.error(n.t0),
                                        (n.next = 15),
                                        Object(M.c)(B(r.errorServer))
                                    );
                                case 15:
                                case "end":
                                    return n.stop();
                            }
                    },
                    ne,
                    null,
                    [[0, 10]]
                );
            }
            function oe(e, n) {
                var t;
                return q.a.wrap(
                    function (r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        Object(M.b)(e.container.ApiProduct.create, n.product)
                                    );
                                case 3:
                                    return (t = r.sent), (r.next = 6), Object(M.c)(Z(t));
                                case 6:
                                    return (r.next = 8), Object(M.c)(V(c.saved));
                                case 8:
                                    r.next = 15;
                                    break;
                                case 10:
                                    return (
                                        (r.prev = 10),
                                        (r.t0 = r.catch(0)),
                                        console.error(r.t0),
                                        (r.next = 15),
                                        Object(M.c)(V(c.errorServer))
                                    );
                                case 15:
                                case "end":
                                    return r.stop();
                            }
                    },
                    te,
                    null,
                    [[0, 10]]
                );
            }
            function ue(e, n) {
                var t;
                return q.a.wrap(
                    function (c) {
                        for (;;)
                            switch ((c.prev = c.next)) {
                                case 0:
                                    return (c.prev = 0), (c.next = 3), Object(M.b)(e.container.ApiProduct.read, n.id);
                                case 3:
                                    return (t = c.sent), (c.next = 6), Object(M.c)(Q([t]));
                                case 6:
                                    return (c.next = 8), Object(M.c)(H(r.loaded));
                                case 8:
                                    c.next = 15;
                                    break;
                                case 10:
                                    return (
                                        (c.prev = 10),
                                        (c.t0 = c.catch(0)),
                                        console.error(c.t0),
                                        (c.next = 15),
                                        Object(M.c)(H(r.errorServer))
                                    );
                                case 15:
                                case "end":
                                    return c.stop();
                            }
                    },
                    re,
                    null,
                    [[0, 10]]
                );
            }
            function se(e, n) {
                var t;
                return q.a.wrap(
                    function (r) {
                        for (;;)
                            switch ((r.prev = r.next)) {
                                case 0:
                                    return (
                                        (r.prev = 0),
                                        (r.next = 3),
                                        Object(M.b)(e.container.ApiProduct.update, n.id, n.product)
                                    );
                                case 3:
                                    return (t = r.sent), (r.next = 6), Object(M.c)(ee(t));
                                case 6:
                                    return (r.next = 8), Object(M.c)(V(c.saved));
                                case 8:
                                    r.next = 15;
                                    break;
                                case 10:
                                    return (
                                        (r.prev = 10),
                                        (r.t0 = r.catch(0)),
                                        console.error(r.t0),
                                        (r.next = 15),
                                        Object(M.c)(V(c.errorServer))
                                    );
                                case 15:
                                case "end":
                                    return r.stop();
                            }
                    },
                    ce,
                    null,
                    [[0, 10]]
                );
            }
            function de(e) {
                return q.a.wrap(function (n) {
                    for (;;)
                        switch ((n.prev = n.next)) {
                            case 0:
                                return (n.next = 2), Object(M.d)(C, ie, e);
                            case 2:
                                return (n.next = 4), Object(M.d)(R, ue, e);
                            case 4:
                                return (n.next = 6), Object(M.d)(U, oe, e);
                            case 6:
                                return (n.next = 8), Object(M.d)(z, se, e);
                            case 8:
                            case "end":
                                return n.stop();
                        }
                }, ae);
            }
            var be = t(61),
                je = t(35),
                fe = t.n(je),
                pe = t(10),
                le = t(62),
                Oe = t.n(le);
            !(function (e) {
                var n = new Oe.a(e, { delayResponse: 1e3 }),
                    t = [
                        {
                            id: "7df78ad8902c6313",
                            name: "Apple iPhone SE 2 2020",
                            description:
                                "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Apple iPhone SE \u0432\u044b\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u0438\u0441\u0442\u0441\u043a\u0438\u043c \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435\u043c \u0438 \u043c\u043e\u0449\u043d\u044b\u043c\u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430\u043c\u0438. \u041c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u043e\u0440\u043f\u0443\u0441 \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d \u043e\u0442 \u043f\u044b\u043b\u0438 \u0438 \u0432\u043e\u0434\u044b, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u0435\u043d \u0432\u044b\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u043f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u0434 \u0432\u043e\u0434\u0443. \u041d\u0430 4.7-\u0434\u044e\u0439\u043c\u043e\u0432\u043e\u043c \u0434\u0438\u0441\u043f\u043b\u0435\u0435 IPS \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0434\u0435\u0442\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441 \u0441\u043e\u0447\u043d\u044b\u043c\u0438 \u0438 \u0440\u0435\u0430\u043b\u0438\u0441\u0442\u0438\u0447\u043d\u044b\u043c\u0438 \u0446\u0432\u0435\u0442\u0430\u043c\u0438.",
                            parameters: { manufacturer: "Apple", model: "iPhone SE 2", price: "42749" },
                        },
                        {
                            id: "5879b0f65a56a454",
                            name: "SAMSUNG Galaxy S20",
                            description:
                                "\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d Samsung \u0432 \u0441\u0432\u0435\u0442\u043b\u043e-\u0441\u0435\u0440\u0435\u0431\u0440\u0438\u0441\u0442\u043e\u043c \u043a\u043e\u0440\u043f\u0443\u0441\u0435 \u0438\u0437 \u0441\u0442\u0435\u043a\u043b\u0430 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0441\u044f \u043e\u0447\u0435\u043d\u044c \u044d\u0444\u0444\u0435\u043a\u0442\u043d\u043e. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u043e\u0434\u0435\u043b\u044c \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u043b\u0430 \u0432 \u0441\u0435\u0431\u0435 \u0442\u0430\u043a\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0435\u0439 \u0432\u0441\u0435\u0440\u044c\u0435\u0437 \u043a\u043e\u043d\u043a\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0444\u043e\u0442\u043e- \u0438 \u0432\u0438\u0434\u0435\u043e\u043a\u0430\u043c\u0435\u0440\u0430\u043c\u0438. \u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043a\u0430\u043c\u0435\u0440\u0430 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 3 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 30-\u043a\u0440\u0430\u0442\u043d\u044b\u043c \u0437\u0443\u043c\u043e\u043c \u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u0430 \u0434\u0435\u043b\u0430\u0442\u044c \u0444\u043e\u0442\u043e \u0441 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u0434\u043e 64+12+12 \u041c\u043f.",
                            parameters: { manufacturer: "SAMSUNG", model: "Galaxy S20", price: "56499" },
                        },
                    ];
                n.onGet("/api/products/").reply(200, t),
                    n.onPut("/api/products/").reply(function (e) {
                        var r = Object(pe.a)(Object(pe.a)({}, JSON.parse(e.data)), {}, { id: Date.now().toString() });
                        return (
                            t.push(r),
                            n.onPost("/api/products/" + r.id).reply(function (e) {
                                return [200, JSON.parse(e.data)];
                            }),
                            [200, r]
                        );
                    }),
                    t.forEach(function (e) {
                        n.onGet("/api/products/" + e.id).reply(200, e);
                    }),
                    t.forEach(function (e) {
                        n.onPost("/api/products/" + e.id).reply(function (e) {
                            return [200, JSON.parse(e.data)];
                        });
                    }),
                    n.onGet("/api/parameters/").reply(200, [
                        {
                            key: "manufacturer",
                            name: "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c",
                            description: "",
                            prefix: "",
                            suffix: "",
                        },
                        {
                            key: "model",
                            name: "\u041c\u043e\u0434\u0435\u043b\u044c",
                            description: "",
                            prefix: "",
                            suffix: "",
                        },
                        {
                            key: "price",
                            name: "\u0426\u0435\u043d\u0430",
                            description: "",
                            prefix: "",
                            suffix: "\u0440.",
                        },
                    ]);
            })(fe.a);
            var he = (function (e) {
                    Object(h.a)(t, e);
                    var n = Object(x.a)(t);
                    function t() {
                        return Object(O.a)(this, t), n.apply(this, arguments);
                    }
                    return t;
                })(Object(v.b)({ key: "", name: "", description: "", prefix: "", suffix: "" })),
                xe = t(74),
                ve = (function (e) {
                    Object(h.a)(t, e);
                    var n = Object(x.a)(t);
                    function t() {
                        return Object(O.a)(this, t), n.apply(this, arguments);
                    }
                    return t;
                })(Object(v.b)({ id: "", name: "", description: "", parameters: {} })),
                me = new be.a(),
                ge = me;
            me.service("Http", function e() {
                var n = this;
                Object(O.a)(this, e),
                    (this.get = function (e, t) {
                        return n.request("GET", e, t);
                    }),
                    (this.post = function (e, t) {
                        return n.request("POST", e, t);
                    }),
                    (this.put = function (e, t) {
                        return n.request("PUT", e, t);
                    }),
                    (this.delete = function (e, t) {
                        return n.request("DELETE", e, t);
                    }),
                    (this.request = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "GET",
                            n = arguments.length > 1 ? arguments[1] : void 0,
                            t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return fe()({ method: e, url: "/api" + n, data: t }).then(function (e) {
                            return e.data;
                        });
                    });
            }),
                me.service(
                    "ApiParameter",
                    function e(n) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/parameters";
                        Object(O.a)(this, e),
                            (this.http = n),
                            (this.url = r),
                            (this.loadAll = function () {
                                return t.http.get(t.url + "/").then(function (e) {
                                    return e.map(function (e) {
                                        return new he(e);
                                    });
                                });
                            });
                    },
                    "Http"
                ),
                me.service(
                    "ApiProduct",
                    function e(n) {
                        var t = this,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/products";
                        Object(O.a)(this, e),
                            (this.http = n),
                            (this.url = r),
                            (this.loadAll = function () {
                                return t.http.get(t.url + "/").then(function (e) {
                                    return e.map(function (e) {
                                        return new ve(e);
                                    });
                                });
                            }),
                            (this.create = function (e) {
                                return t.http.put(t.url + "/", e.toJSON()).then(function (e) {
                                    return new ve(e);
                                });
                            }),
                            (this.read = function (e) {
                                return t.http.get(t.url + "/" + e).then(function (e) {
                                    return new ve(e);
                                });
                            }),
                            (this.update = function (e, n) {
                                return t.http.post(t.url + "/" + e, n.toJSON()).then(function (e) {
                                    return new ve(e);
                                });
                            });
                    },
                    "Http"
                );
            var ye = t(4),
                we = t(3),
                Se = t(9);
            function Pe() {
                return Object(b.d)();
            }
            function _e(e, n) {
                return Object(b.e)(function (t) {
                    return e(t, n);
                });
            }
            var Ae = t(27),
                ke = function (e) {
                    return e.main;
                },
                Ee = Object(Ae.a)(ke, function (e) {
                    return e.statusLoadingProduct;
                }),
                Te = Object(Ae.a)(ke, function (e) {
                    return e.statusLoadingProducts;
                }),
                De = Object(Ae.a)(ke, function (e) {
                    return e.statusLoadingParameters;
                }),
                Ce = Object(Ae.a)(ke, function (e) {
                    return e.statusSavingProduct;
                }),
                Re = function (e) {
                    return e.parameters;
                },
                Ue = function (e) {
                    return e.products;
                },
                Le = Object(Ae.a)(
                    Ue,
                    function (e, n) {
                        return n;
                    },
                    function (e, n) {
                        return e.find(function (e) {
                            return e.id === n;
                        });
                    }
                ),
                ze = Object(Ae.a)(function (e) {
                    return 0 === e.main.searchWord.length
                        ? e
                        : Object(pe.a)(
                              Object(pe.a)({}, e),
                              {},
                              {
                                  products:
                                      ((n = e.products),
                                      (t = e.main.searchWord),
                                      n.filter(function (e) {
                                          var n = new RegExp(t, "i");
                                          return (
                                              -1 !==
                                              []
                                                  .concat(Object(xe.a)(Object.values(e.parameters)), [
                                                      e.name,
                                                      e.description,
                                                  ])
                                                  .join("|")
                                                  .search(n)
                                          );
                                      })),
                              }
                          );
                    var n, t;
                }, Ue),
                Ge = t(68),
                Ne = t(37);
            function Fe() {
                var e = Object(ye.a)(["\n    color: #ff0000;\n"]);
                return (
                    (Fe = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ie() {
                var e = Object(ye.a)([
                    "\n    animation: rotate 2s linear infinite;\n    color: #2196f3;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n",
                ]);
                return (
                    (Ie = function () {
                        return e;
                    }),
                    e
                );
            }
            function qe() {
                var e = Object(ye.a)([
                    "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50% 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #4a4a4a;\n",
                ]);
                return (
                    (qe = function () {
                        return e;
                    }),
                    e
                );
            }
            function Je(e) {
                return Object(a.jsxs)(Me, {
                    children: [
                        "preload" === e.type &&
                            Object(a.jsxs)(a.Fragment, { children: [Object(a.jsx)(We, { size: "28" }), " ", e.text] }),
                        "warning" === e.type &&
                            Object(a.jsxs)(a.Fragment, { children: [Object(a.jsx)(He, { size: "28" }), " ", e.text] }),
                    ],
                });
            }
            var Me = we.b.div(qe()),
                We = Object(we.b)(Ne.a)(Ie()),
                He = Object(we.b)(Ge.a)(Fe());
            function Be() {
                var e = Pe();
                return (
                    Object(i.useEffect)(function () {
                        e({ type: E });
                    }, []),
                    Object(a.jsx)(Je, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..." })
                );
            }
            function Ve() {
                var e = Pe();
                return (
                    Object(i.useEffect)(function () {
                        e({ type: C });
                    }, []),
                    Object(a.jsx)(Je, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..." })
                );
            }
            function Xe() {
                var e = Object(ye.a)([
                    "\n    font-weight: 600;\n    font-size: 1.5em;\n    line-height: 2em;\n    color: ",
                    ";\n",
                ]);
                return (
                    (Xe = function () {
                        return e;
                    }),
                    e
                );
            }
            function $e(e) {
                return Object(a.jsx)(Ye, { children: e.children });
            }
            var Ye = we.b.h1(Xe(), function (e) {
                return e.theme.color_title;
            });
            function Ke() {
                var e = Object(ye.a)([
                    "\n    font-weight: 600;\n    font-size: 1.2em;\n    line-height: 2em;\n    color: ",
                    ";\n",
                ]);
                return (
                    (Ke = function () {
                        return e;
                    }),
                    e
                );
            }
            function Qe(e) {
                return Object(a.jsx)(Ze, { children: e.children });
            }
            var Ze = we.b.h1(Ke(), function (e) {
                return e.theme.color_title;
            });
            function en() {
                var e = Object(ye.a)([
                    "\n    display: flex;\n    justify-content: space-between;\n    margin: 15px 0;\n\n    @media (max-width: ",
                    "px) {\n        flex-flow: column;\n    }\n",
                ]);
                return (
                    (en = function () {
                        return e;
                    }),
                    e
                );
            }
            function nn(e) {
                return Object(a.jsx)(tn, { children: e.children });
            }
            var tn = we.b.div(en(), function (e) {
                    return e.theme.media_mobile;
                }),
                rn = t(42);
            function cn() {
                var e = Object(ye.a)([
                    "\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",
                    ";\n    border: 1px solid ",
                    ";\n    border-radius: 2px;\n    padding: 0.5em 1em;\n    text-decoration: none;\n    line-height: 2em;\n    color: #fff;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #359eef;\n    }\n",
                ]);
                return (
                    (cn = function () {
                        return e;
                    }),
                    e
                );
            }
            function an(e) {
                return Object(a.jsx)(on, Object(pe.a)(Object(pe.a)({}, e), {}, { children: e.children }));
            }
            var on = Object(we.b)(rn.a)(
                cn(),
                function (e) {
                    return e.theme.color_main;
                },
                function (e) {
                    return e.theme.color_main;
                }
            );
            function un() {
                var e = Object(ye.a)([
                    "\n    display: block;\n    width: 100%;\n    border: 1px solid #9abbce;\n    border-radius: 2px;\n    line-height: 3em;\n    height: 3em;\n    padding: 0 1em;\n    box-sizing: border-box;\n\n    &:hover,\n    &:focus {\n        border: 1px solid ",
                    ";\n    }\n",
                ]);
                return (
                    (un = function () {
                        return e;
                    }),
                    e
                );
            }
            function sn(e) {
                return Object(a.jsx)(dn, Object(pe.a)({}, e));
            }
            var dn = we.b.input(un(), function (e) {
                return e.theme.color_main;
            });
            function bn() {
                var e = Object(ye.a)(["\n    flex-grow: 1;\n"]);
                return (
                    (bn = function () {
                        return e;
                    }),
                    e
                );
            }
            function jn() {
                var e = Object(ye.a)([
                    "\n    flex-grow: 0;\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 1.2em;\n    line-height: 2em;\n    padding-right: 0.5em;\n    color: ",
                    ";\n",
                ]);
                return (
                    (jn = function () {
                        return e;
                    }),
                    e
                );
            }
            function fn() {
                var e = Object(ye.a)(["\n    display: flex;\n    margin: 15px 0;\n"]);
                return (
                    (fn = function () {
                        return e;
                    }),
                    e
                );
            }
            function pn(e) {
                return Object(a.jsxs)(ln, {
                    children: [
                        Object(a.jsx)(On, { children: "\u041f\u043e\u0438\u0441\u043a:" }),
                        Object(a.jsx)(hn, {
                            onChange: function (n) {
                                return e.handleChangeSearch(n.target.value);
                            },
                            placeholder:
                                "\u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443: apple, \u0444\u043e\u0442\u043e, 42",
                        }),
                    ],
                });
            }
            var ln = we.b.div(fn()),
                On = we.b.div(jn(), function (e) {
                    return e.theme.color_main;
                }),
                hn = Object(we.b)(sn)(bn());
            function xn() {
                var e = Object(ye.a)(["\n    line-height: 2em;\n"]);
                return (
                    (xn = function () {
                        return e;
                    }),
                    e
                );
            }
            function vn() {
                var e = Object(ye.a)([
                    "\n    flex-basis: 50%;\n    padding-right: 5px;\n    font-weight: 600;\n    color: #a0b0b9;\n    line-height: 2em;\n",
                ]);
                return (
                    (vn = function () {
                        return e;
                    }),
                    e
                );
            }
            function mn() {
                var e = Object(ye.a)(["\n    display: flex;\n    width: 100%;\n"]);
                return (
                    (mn = function () {
                        return e;
                    }),
                    e
                );
            }
            function gn() {
                var e = Object(ye.a)([""]);
                return (
                    (gn = function () {
                        return e;
                    }),
                    e
                );
            }
            function yn(e) {
                var n = function (n) {
                    return e.libraryParameters.find(function (e) {
                        return e.key === n;
                    });
                };
                return Object(a.jsx)(wn, {
                    children: Object.entries(e.productParameters).map(function (e) {
                        var t, r;
                        return Object(a.jsxs)(
                            Sn,
                            {
                                children: [
                                    Object(a.jsx)(Pn, {
                                        children: (null === (t = n(e[0])) || void 0 === t ? void 0 : t.name) + ":",
                                    }),
                                    Object(a.jsxs)(_n, {
                                        children: [
                                            e[1],
                                            " ",
                                            null === (r = n(e[0])) || void 0 === r ? void 0 : r.suffix,
                                        ],
                                    }),
                                ],
                            },
                            e[0]
                        );
                    }),
                });
            }
            var wn = we.b.div(gn()),
                Sn = we.b.div(mn()),
                Pn = we.b.div(vn()),
                _n = we.b.div(xn()),
                An = t(69);
            function kn() {
                var e = Object(ye.a)(["\n    flex-basis: 40%;\n"]);
                return (
                    (kn = function () {
                        return e;
                    }),
                    e
                );
            }
            function En() {
                var e = Object(ye.a)(["\n    color: #353535;\n    line-height: 1.5em;\n"]);
                return (
                    (En = function () {
                        return e;
                    }),
                    e
                );
            }
            function Tn() {
                var e = Object(ye.a)([""]);
                return (
                    (Tn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Dn() {
                var e = Object(ye.a)(["\n    flex-basis: 60%;\n    padding-right: 30px;\n"]);
                return (
                    (Dn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Cn() {
                var e = Object(ye.a)([
                    "\n    display: flex;\n\n    @media (max-width: ",
                    "px) {\n        flex-direction: column-reverse;\n    }\n",
                ]);
                return (
                    (Cn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Rn() {
                var e = Object(ye.a)(["\n    padding-right: 3px;\n"]);
                return (
                    (Rn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Un() {
                var e = Object(ye.a)([""]);
                return (
                    (Un = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ln() {
                var e = Object(ye.a)([""]);
                return (
                    (Ln = function () {
                        return e;
                    }),
                    e
                );
            }
            function zn() {
                var e = Object(ye.a)([
                    "\n    margin: 20px 0;\n    padding: 20px;\n    background: #ffffff;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n",
                ]);
                return (
                    (zn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Gn(e) {
                var n = _e(Re);
                return Object(a.jsxs)(Nn, {
                    children: [
                        Object(a.jsx)(Fn, {
                            children: Object(a.jsxs)(nn, {
                                children: [
                                    Object(a.jsx)(In, { children: e.product.name }),
                                    Object(a.jsxs)(an, {
                                        to: "/products/" + e.product.id,
                                        children: [
                                            Object(a.jsx)(qn, { size: "16" }),
                                            "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440",
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        Object(a.jsxs)(Jn, {
                            children: [
                                Object(a.jsxs)(Mn, {
                                    children: [
                                        Object(a.jsx)(Wn, {
                                            children: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
                                        }),
                                        Object(a.jsx)(Hn, { children: e.product.description }),
                                    ],
                                }),
                                Object(a.jsxs)(Bn, {
                                    children: [
                                        Object(a.jsx)(Wn, {
                                            children: "\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",
                                        }),
                                        Object(a.jsx)(yn, {
                                            productParameters: e.product.parameters,
                                            libraryParameters: n,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
            var Nn = we.b.div(zn()),
                Fn = we.b.div(Ln()),
                In = Object(we.b)($e)(Un()),
                qn = Object(we.b)(An.a)(Rn()),
                Jn = we.b.div(Cn(), function (e) {
                    return e.theme.media_tablet;
                }),
                Mn = we.b.div(Dn()),
                Wn = Object(we.b)(Qe)(Tn()),
                Hn = we.b.article(En()),
                Bn = we.b.div(kn());
            function Vn() {
                var e = Object(ye.a)([
                    "\n    max-width: 935px;\n    margin: 0 auto;\n    font-size: 16px;\n    background-color: #fafafa;\n",
                ]);
                return (
                    (Vn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Xn(e) {
                return Object(a.jsx)($n, {
                    children: e.products.valueSeq().map(function (e) {
                        return Object(a.jsx)(Gn, { product: e }, e.id);
                    }),
                });
            }
            var $n = we.b.div(Vn()),
                Yn = t(38);
            function Kn() {
                var e = Object(ye.a)([""]);
                return (
                    (Kn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Qn() {
                var e = Pe(),
                    n = _e(Te),
                    t = _e(De),
                    c = _e(ze);
                return t !== r.loaded
                    ? Object(a.jsxs)(a.Fragment, {
                          children: [
                              t === r.notLoaded && Object(a.jsx)(Be, {}),
                              t === r.errorServer &&
                                  Object(a.jsx)(Je, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                          ],
                      })
                    : Object(a.jsxs)(Zn, {
                          children: [
                              n === r.notLoaded && Object(a.jsx)(Ve, {}),
                              n === r.errorServer &&
                                  Object(a.jsx)(Je, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                              n === r.loaded &&
                                  Object(a.jsxs)(a.Fragment, {
                                      children: [
                                          Object(a.jsxs)(nn, {
                                              children: [
                                                  Object(a.jsx)($e, {
                                                      children:
                                                          "\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432",
                                                  }),
                                                  Object(a.jsxs)(an, {
                                                      to: "/products/create",
                                                      children: [
                                                          Object(a.jsx)(Yn.a, { size: "20" }),
                                                          "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440",
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          Object(a.jsx)(pn, {
                                              handleChangeSearch: function (n) {
                                                  e(
                                                      (function (e) {
                                                          return { type: _, searchWord: e };
                                                      })(n)
                                                  );
                                              },
                                          }),
                                          c.size > 0
                                              ? Object(a.jsx)(Xn, { products: c })
                                              : Object(a.jsx)(Qe, {
                                                    children:
                                                        "\u0422\u043e\u0432\u0430\u0440 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",
                                                }),
                                      ],
                                  }),
                          ],
                      });
            }
            var Zn = we.b.div(Kn());
            function et(e) {
                var n = Pe();
                return (
                    Object(i.useEffect)(function () {
                        var t;
                        n(((t = e.idProduct), { type: R, id: t }));
                    }, []),
                    Object(a.jsx)(Je, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..." })
                );
            }
            var nt = t(30),
                tt = t(46);
            function rt() {
                var e = Object(ye.a)([
                    "\n    display: block;\n    width: 100%;\n    border: 1px solid #9abbce;\n    border-radius: 2px;\n    line-height: 1.5em;\n    padding: 1em;\n    box-sizing: border-box;\n\n    &:hover,\n    &:focus {\n        border: 1px solid ",
                    ";\n    }\n",
                ]);
                return (
                    (rt = function () {
                        return e;
                    }),
                    e
                );
            }
            var ct = we.b.textarea(rt(), function (e) {
                return e.theme.color_main;
            });
            function at() {
                var e = Object(ye.a)([
                    "\n    display: block;\n    width: 100%;\n    border: 1px solid #9abbce;\n    border-radius: 2px;\n    line-height: 3em;\n    height: 3em;\n    padding: 0 1em;\n    box-sizing: border-box;\n\n    &:hover,\n    &:focus {\n        border: 1px solid ",
                    ";\n    }\n",
                ]);
                return (
                    (at = function () {
                        return e;
                    }),
                    e
                );
            }
            function it(e) {
                return Object(a.jsx)(
                    ot,
                    Object(pe.a)(Object(pe.a)({}, e), {}, { ref: e.innerRef, children: e.children })
                );
            }
            var ot = we.b.select(at(), function (e) {
                return e.theme.color_main;
            });
            function ut() {
                var e = Object(ye.a)([
                    "\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",
                    ";\n    border: 1px solid ",
                    ";\n    border-radius: 2px;\n    color: #fff;\n    height: 3em;\n    padding: 0 1em;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #359eef;\n    }\n",
                ]);
                return (
                    (ut = function () {
                        return e;
                    }),
                    e
                );
            }
            function st(e) {
                return Object(a.jsx)(dt, Object(pe.a)(Object(pe.a)({}, e), {}, { children: e.children }));
            }
            var dt = we.b.button(
                    ut(),
                    function (e) {
                        return e.theme.color_main;
                    },
                    function (e) {
                        return e.theme.color_main;
                    }
                ),
                bt = t(70),
                jt = t(71),
                ft = t(72),
                pt = t(73);
            function lt() {
                var e = Object(ye.a)([
                    "\n    animation: rotate 2s linear infinite;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n",
                ]);
                return (
                    (lt = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ot() {
                var e = Object(ye.a)([""]);
                return (
                    (Ot = function () {
                        return e;
                    }),
                    e
                );
            }
            function ht() {
                var e = Object(ye.a)([""]);
                return (
                    (ht = function () {
                        return e;
                    }),
                    e
                );
            }
            function xt() {
                var e = Object(ye.a)(["\n    @media (max-width: ", "px) {\n        display: none;\n    }\n"]);
                return (
                    (xt = function () {
                        return e;
                    }),
                    e
                );
            }
            function vt() {
                var e = Object(ye.a)(["\n    @media (max-width: ", "px) {\n        display: none;\n    }\n"]);
                return (
                    (vt = function () {
                        return e;
                    }),
                    e
                );
            }
            function mt() {
                var e = Object(ye.a)([
                    "\n    background-color: #c41732;\n    border: 1px solid #ac0020;\n\n    &:hover {\n        background-color: #d22540;\n    }\n\n    @media (max-width: ",
                    "px) {\n        width: 30px;\n    }\n",
                ]);
                return (
                    (mt = function () {
                        return e;
                    }),
                    e
                );
            }
            function gt() {
                var e = Object(ye.a)([
                    "\n    flex-basis: 14%;\n\n    @media (max-width: ",
                    "px) {\n        flex-basis: 18%;\n    }\n",
                ]);
                return (
                    (gt = function () {
                        return e;
                    }),
                    e
                );
            }
            function yt() {
                var e = Object(ye.a)([
                    "\n    flex-basis: 48%;\n    @media (max-width: ",
                    "px) {\n        flex-basis: 78%;\n    }\n",
                ]);
                return (
                    (yt = function () {
                        return e;
                    }),
                    e
                );
            }
            function wt() {
                var e = Object(ye.a)([
                    "\n    flex-basis: 14%;\n    white-space: nowrap;\n    min-width: 150px;\n\n    @media (max-width: ",
                    "px) {\n        flex-basis: 100%;\n    }\n",
                ]);
                return (
                    (wt = function () {
                        return e;
                    }),
                    e
                );
            }
            function St() {
                var e = Object(ye.a)([
                    "\n    display: flex;\n    padding-bottom: 5px;\n    flex-wrap: wrap;\n    width: 100%;\n    justify-content: space-between;\n",
                ]);
                return (
                    (St = function () {
                        return e;
                    }),
                    e
                );
            }
            function Pt() {
                var e = Object(ye.a)([""]);
                return (
                    (Pt = function () {
                        return e;
                    }),
                    e
                );
            }
            function _t() {
                var e = Object(ye.a)(["\n    height: 200px;\n"]);
                return (
                    (_t = function () {
                        return e;
                    }),
                    e
                );
            }
            function At() {
                var e = Object(ye.a)([""]);
                return (
                    (At = function () {
                        return e;
                    }),
                    e
                );
            }
            function kt() {
                var e = Object(ye.a)(["\n    padding-bottom: 5px;\n"]);
                return (
                    (kt = function () {
                        return e;
                    }),
                    e
                );
            }
            function Et() {
                var e = Object(ye.a)([
                    "\n    padding-right: 5px;\n    font-weight: 600;\n    color: #a0b0b9;\n    line-height: 3em;\n",
                ]);
                return (
                    (Et = function () {
                        return e;
                    }),
                    e
                );
            }
            function Tt() {
                var e = Object(ye.a)(["\n    padding-bottom: 10px;\n"]);
                return (
                    (Tt = function () {
                        return e;
                    }),
                    e
                );
            }
            function Dt(e) {
                var n = Pe(),
                    t = _e(Re),
                    r = Object(i.useState)(e.product),
                    o = Object(tt.a)(r, 2),
                    u = o[0],
                    s = o[1],
                    d = Object(i.useState)(!0),
                    b = Object(tt.a)(d, 2),
                    j = b[0],
                    f = b[1],
                    p = Object(i.useRef)(null),
                    l = _e(Ce),
                    O = t.filter(function (e) {
                        return !(e.key in u.parameters);
                    }),
                    h = function (e, n) {
                        f(!0), s(u.set(e, n));
                    };
                return Object(a.jsxs)(a.Fragment, {
                    children: [
                        Object(a.jsxs)(nn, {
                            children: [
                                Object(a.jsx)($e, {
                                    children:
                                        "create" === e.typeForm
                                            ? "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"
                                            : "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",
                                }),
                                Object(a.jsxs)(an, {
                                    to: "/products",
                                    children: [
                                        Object(a.jsx)(bt.a, { size: "20" }),
                                        "\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432",
                                    ],
                                }),
                            ],
                        }),
                        Object(a.jsxs)(Ct, {
                            children: [
                                Object(a.jsx)(Qe, {
                                    children:
                                        "\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",
                                }),
                                Object(a.jsxs)(Ut, {
                                    children: [
                                        Object(a.jsx)(Rt, {
                                            children: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",
                                        }),
                                        Object(a.jsx)(Lt, {
                                            value: u.name,
                                            onChange: function (e) {
                                                return h("name", e.target.value);
                                            },
                                        }),
                                    ],
                                }),
                                Object(a.jsxs)(Ut, {
                                    children: [
                                        Object(a.jsx)(Rt, {
                                            children: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",
                                        }),
                                        Object(a.jsx)(zt, {
                                            value: u.description,
                                            onChange: function (e) {
                                                return h("description", e.target.value);
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(a.jsxs)(Ct, {
                            children: [
                                Object(a.jsx)(Qe, {
                                    children:
                                        "\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",
                                }),
                                Object(a.jsxs)(Gt, {
                                    children: [
                                        Object.entries(u.parameters).map(function (e) {
                                            var n, r;
                                            return Object(a.jsxs)(
                                                Nt,
                                                {
                                                    children: [
                                                        Object(a.jsx)(Ft, {
                                                            children:
                                                                (null ===
                                                                    ((r = e[0]),
                                                                    (n = t.find(function (e) {
                                                                        return e.key === r;
                                                                    }))) || void 0 === n
                                                                    ? void 0
                                                                    : n.name) + ":",
                                                        }),
                                                        Object(a.jsx)(It, {
                                                            children: Object(a.jsx)(sn, {
                                                                value: e[1],
                                                                onChange: function (n) {
                                                                    return (function (e, n) {
                                                                        f(!0),
                                                                            s(
                                                                                u.set(
                                                                                    "parameters",
                                                                                    Object(pe.a)(
                                                                                        Object(pe.a)({}, u.parameters),
                                                                                        {},
                                                                                        Object(nt.a)({}, e, n)
                                                                                    )
                                                                                )
                                                                            );
                                                                    })(e[0], n.target.value);
                                                                },
                                                            }),
                                                        }),
                                                        Object(a.jsxs)(Jt, {
                                                            onClick: function () {
                                                                return (function (e) {
                                                                    f(!0),
                                                                        Reflect.deleteProperty(u.parameters, e),
                                                                        s(
                                                                            u.set(
                                                                                "parameters",
                                                                                Object(pe.a)({}, u.parameters)
                                                                            )
                                                                        );
                                                                })(e[0]);
                                                            },
                                                            children: [
                                                                Object(a.jsx)(jt.a, { size: "20" }),
                                                                Object(a.jsx)(Mt, {
                                                                    children:
                                                                        "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                },
                                                e[0]
                                            );
                                        }),
                                        O.size > 0 &&
                                            Object(a.jsxs)(Nt, {
                                                children: [
                                                    Object(a.jsx)(Ft, {
                                                        children:
                                                            "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440:",
                                                    }),
                                                    Object(a.jsx)(It, {
                                                        children: Object(a.jsx)(it, {
                                                            innerRef: p,
                                                            children: O.valueSeq().map(function (e) {
                                                                return Object(a.jsx)(
                                                                    "option",
                                                                    { value: e.key, children: e.name },
                                                                    e.key
                                                                );
                                                            }),
                                                        }),
                                                    }),
                                                    Object(a.jsxs)(Ht, {
                                                        onClick: function () {
                                                            p.current &&
                                                                (f(!0),
                                                                s(
                                                                    u.set(
                                                                        "parameters",
                                                                        Object(pe.a)(
                                                                            Object(pe.a)({}, u.parameters),
                                                                            {},
                                                                            Object(nt.a)({}, p.current.value, "")
                                                                        )
                                                                    )
                                                                ));
                                                        },
                                                        children: [
                                                            Object(a.jsx)(Yn.a, { size: "20" }),
                                                            Object(a.jsx)(Wt, {
                                                                children:
                                                                    "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        Object(a.jsx)(Ct, {
                            children: Object(a.jsxs)(Bt, {
                                onClick: function () {
                                    n(V(c.save)),
                                        f(!1),
                                        n(
                                            "create" === e.typeForm
                                                ? (function (e) {
                                                      return { type: U, product: e };
                                                  })(u)
                                                : (function (e, n) {
                                                      return { type: z, id: e, product: n };
                                                  })(u.id, u)
                                        );
                                },
                                children: [
                                    (l === c.notSaved || j) && Object(a.jsx)(ft.a, { size: "20" }),
                                    l === c.save && !j && Object(a.jsx)(Vt, { size: "20" }),
                                    l === c.saved && !j && Object(a.jsx)(pt.a, { size: "20" }),
                                    l === c.errorServer &&
                                        !j &&
                                        "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430! \u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c ",
                                    "create" === e.typeForm
                                        ? "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440"
                                        : "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0442\u043e\u0432\u0430\u0440",
                                ],
                            }),
                        }),
                    ],
                });
            }
            var Ct = we.b.div(Tt()),
                Rt = we.b.div(Et()),
                Ut = we.b.div(kt()),
                Lt = Object(we.b)(sn)(At()),
                zt = Object(we.b)(function (e) {
                    return Object(a.jsx)(ct, Object(pe.a)({}, e));
                })(_t()),
                Gt = we.b.div(Pt()),
                Nt = we.b.div(St()),
                Ft = Object(we.b)(Rt)(wt(), function (e) {
                    return e.theme.media_mobile;
                }),
                It = we.b.div(yt(), function (e) {
                    return e.theme.media_mobile;
                }),
                qt = Object(we.b)(st)(gt(), function (e) {
                    return e.theme.media_mobile;
                }),
                Jt = Object(we.b)(qt)(mt(), function (e) {
                    return e.theme.media_tablet;
                }),
                Mt = we.b.span(vt(), function (e) {
                    return e.theme.media_tablet;
                }),
                Wt = we.b.span(xt(), function (e) {
                    return e.theme.media_tablet;
                }),
                Ht = Object(we.b)(qt)(ht()),
                Bt = Object(we.b)(st)(Ot()),
                Vt = Object(we.b)(Ne.a)(lt());
            function Xt() {
                var e = Object(ye.a)([""]);
                return (
                    (Xt = function () {
                        return e;
                    }),
                    e
                );
            }
            function $t() {
                var e = _e(De),
                    n = _e(Ee),
                    t = Object(Se.g)().idProduct,
                    c = _e(Le, t);
                return e !== r.loaded
                    ? Object(a.jsxs)(a.Fragment, {
                          children: [
                              e === r.notLoaded && Object(a.jsx)(Be, {}),
                              e === r.errorServer &&
                                  Object(a.jsx)(Je, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                          ],
                      })
                    : Object(a.jsxs)(Yt, {
                          children: [
                              !c && n !== r.errorServer && Object(a.jsx)(et, { idProduct: t }),
                              n === r.errorServer &&
                                  Object(a.jsx)(Je, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                              c && Object(a.jsx)(Dt, { product: c, typeForm: "edit" }),
                          ],
                      });
            }
            var Yt = we.b.div(Xt());
            function Kt() {
                var e = new ve(),
                    n = _e(De);
                return n !== r.loaded
                    ? Object(a.jsxs)(a.Fragment, {
                          children: [
                              n === r.notLoaded && Object(a.jsx)(Be, {}),
                              n === r.errorServer &&
                                  Object(a.jsx)(Je, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                          ],
                      })
                    : Object(a.jsx)(Dt, { product: e, typeForm: "create" });
            }
            function Qt() {
                var e = Object(ye.a)([
                    "\n    max-width: 935px;\n    margin: 0 auto;\n    font-size: 16px;\n    background-color: #fafafa;\n    padding: 0 10px;\n",
                ]);
                return (
                    (Qt = function () {
                        return e;
                    }),
                    e
                );
            }
            var Zt,
                er = { media_tablet: 768, media_mobile: 414, color_main: "#2196f3", color_title: "#2196f3" },
                nr = we.b.div(Qt()),
                tr = function () {
                    return Object(a.jsx)(we.a, {
                        theme: er,
                        children: Object(a.jsx)(nr, {
                            children: Object(a.jsxs)(Se.d, {
                                children: [
                                    Object(a.jsx)(Se.b, {
                                        exact: !0,
                                        path: "/",
                                        children: Object(a.jsx)(Se.a, { to: "/products" }),
                                    }),
                                    Object(a.jsx)(Se.b, { exact: !0, path: "/products", component: Qn }),
                                    Object(a.jsx)(Se.b, { exact: !0, path: "/products/create", component: Kt }),
                                    Object(a.jsx)(Se.b, { exact: !0, path: "/products/:idProduct", component: $t }),
                                ],
                            }),
                        }),
                    });
                },
                rr = (t(107), t(108), Object(j.b)()),
                cr = Object(l.a)(),
                ar = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || d.d,
                ir = Object(d.e)(F(rr), ar(Object(d.a)(cr, Object(f.a)(rr))));
            cr.run(
                ((Zt = ge),
                q.a.mark(function e() {
                    return q.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(J.a)([K(Zt), de(Zt)]);
                                case 2:
                                case "end":
                                    return e.stop();
                            }
                    }, e);
                }))
            ),
                s.a.render(
                    Object(a.jsx)(o.a.StrictMode, {
                        children: Object(a.jsx)(b.a, {
                            store: ir,
                            children: Object(a.jsx)(p.a, { history: rr, children: Object(a.jsx)(tr, {}) }),
                        }),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [[109, 1, 2]],
]);
//# sourceMappingURL=main.7406ce14.chunk.js.map
