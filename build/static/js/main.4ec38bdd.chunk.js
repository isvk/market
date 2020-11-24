(this.webpackJsonpmarket = this.webpackJsonpmarket || []).push([
    [0],
    {
        108: function (e, n, t) {},
        109: function (e, n, t) {
            "use strict";
            t.r(n),
                t.d(n, "history", function () {
                    return cr;
                });
            var r,
                c,
                a = t(1),
                i = t(0),
                o = t.n(i),
                u = t(34),
                s = t.n(u),
                d = t(23),
                b = t(24),
                j = t(17),
                f = t(58),
                p = t(30),
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
                ne = t(14),
                te = q.a.mark(oe),
                re = q.a.mark(ue),
                ce = q.a.mark(se),
                ae = q.a.mark(de),
                ie = q.a.mark(be);
            function oe(e) {
                var n;
                return q.a.wrap(
                    function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.prev = 0), (t.next = 3), Object(M.b)(e.container.ApiProduct.loadAll);
                                case 3:
                                    return (n = t.sent), (t.next = 6), Object(M.c)(Q(n));
                                case 6:
                                    return (t.next = 8), Object(M.c)(B(r.loaded));
                                case 8:
                                    t.next = 15;
                                    break;
                                case 10:
                                    return (
                                        (t.prev = 10),
                                        (t.t0 = t.catch(0)),
                                        console.error(t.t0),
                                        (t.next = 15),
                                        Object(M.c)(B(r.errorServer))
                                    );
                                case 15:
                                case "end":
                                    return t.stop();
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
                                    return (r.next = 10), Object(M.c)(Object(ne.d)("/products/" + t.id));
                                case 10:
                                    r.next = 17;
                                    break;
                                case 12:
                                    return (
                                        (r.prev = 12),
                                        (r.t0 = r.catch(0)),
                                        console.error(r.t0),
                                        (r.next = 17),
                                        Object(M.c)(V(c.errorServer))
                                    );
                                case 17:
                                case "end":
                                    return r.stop();
                            }
                    },
                    re,
                    null,
                    [[0, 12]]
                );
            }
            function se(e, n) {
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
                    ce,
                    null,
                    [[0, 10]]
                );
            }
            function de(e, n) {
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
                    ae,
                    null,
                    [[0, 10]]
                );
            }
            function be(e) {
                return q.a.wrap(function (n) {
                    for (;;)
                        switch ((n.prev = n.next)) {
                            case 0:
                                return (n.next = 2), Object(M.d)(C, oe, e);
                            case 2:
                                return (n.next = 4), Object(M.d)(R, se, e);
                            case 4:
                                return (n.next = 6), Object(M.d)(U, ue, e);
                            case 6:
                                return (n.next = 8), Object(M.d)(z, de, e);
                            case 8:
                            case "end":
                                return n.stop();
                        }
                }, ie);
            }
            var je = t(61),
                fe = t(36),
                pe = t.n(fe),
                le = t(10),
                Oe = t(62),
                he = t.n(Oe);
            !(function (e) {
                var n = new he.a(e, { delayResponse: 1e3 }),
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
                        var r = Object(le.a)(Object(le.a)({}, JSON.parse(e.data)), {}, { id: Date.now().toString() });
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
            })(pe.a);
            var xe = (function (e) {
                    Object(h.a)(t, e);
                    var n = Object(x.a)(t);
                    function t() {
                        return Object(O.a)(this, t), n.apply(this, arguments);
                    }
                    return t;
                })(Object(v.b)({ key: "", name: "", description: "", prefix: "", suffix: "" })),
                ve = t(74),
                me = (function (e) {
                    Object(h.a)(t, e);
                    var n = Object(x.a)(t);
                    function t() {
                        return Object(O.a)(this, t), n.apply(this, arguments);
                    }
                    return t;
                })(Object(v.b)({ id: "", name: "", description: "", parameters: {} })),
                ge = new je.a(),
                ye = ge;
            ge.service("Http", function e() {
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
                        return pe()({ method: e, url: "/api" + n, data: t }).then(function (e) {
                            return e.data;
                        });
                    });
            }),
                ge.service(
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
                                        return new xe(e);
                                    });
                                });
                            });
                    },
                    "Http"
                ),
                ge.service(
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
                                        return new me(e);
                                    });
                                });
                            }),
                            (this.create = function (e) {
                                return t.http.put(t.url + "/", e.toJSON()).then(function (e) {
                                    return new me(e);
                                });
                            }),
                            (this.read = function (e) {
                                return t.http.get(t.url + "/" + e).then(function (e) {
                                    return new me(e);
                                });
                            }),
                            (this.update = function (e, n) {
                                return t.http.post(t.url + "/" + e, n.toJSON()).then(function (e) {
                                    return new me(e);
                                });
                            });
                    },
                    "Http"
                );
            var we = t(4),
                Se = t(3),
                Pe = t(9);
            function _e() {
                return Object(b.d)();
            }
            function Ae(e, n) {
                return Object(b.e)(function (t) {
                    return e(t, n);
                });
            }
            var ke = t(27),
                Ee = function (e) {
                    return e.main;
                },
                Te = Object(ke.a)(Ee, function (e) {
                    return e.statusLoadingProduct;
                }),
                De = Object(ke.a)(Ee, function (e) {
                    return e.statusLoadingProducts;
                }),
                Ce = Object(ke.a)(Ee, function (e) {
                    return e.statusLoadingParameters;
                }),
                Re = Object(ke.a)(Ee, function (e) {
                    return e.statusSavingProduct;
                }),
                Ue = function (e) {
                    return e.parameters;
                },
                Le = function (e) {
                    return e.products;
                },
                ze = Object(ke.a)(
                    Le,
                    function (e, n) {
                        return n;
                    },
                    function (e, n) {
                        return e.find(function (e) {
                            return e.id === n;
                        });
                    }
                ),
                Ge = Object(ke.a)(function (e) {
                    return 0 === e.main.searchWord.length
                        ? e
                        : Object(le.a)(
                              Object(le.a)({}, e),
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
                                                  .concat(Object(ve.a)(Object.values(e.parameters)), [
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
                }, Le),
                Ne = t(68),
                Fe = t(38);
            function Ie() {
                var e = Object(we.a)(["\n    color: #ff0000;\n"]);
                return (
                    (Ie = function () {
                        return e;
                    }),
                    e
                );
            }
            function qe() {
                var e = Object(we.a)([
                    "\n    animation: rotate 2s linear infinite;\n    color: #2196f3;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n",
                ]);
                return (
                    (qe = function () {
                        return e;
                    }),
                    e
                );
            }
            function Je() {
                var e = Object(we.a)([
                    "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 50% 0;\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 28px;\n    color: #4a4a4a;\n",
                ]);
                return (
                    (Je = function () {
                        return e;
                    }),
                    e
                );
            }
            function Me(e) {
                return Object(a.jsxs)(We, {
                    children: [
                        "preload" === e.type &&
                            Object(a.jsxs)(a.Fragment, { children: [Object(a.jsx)(He, { size: "28" }), " ", e.text] }),
                        "warning" === e.type &&
                            Object(a.jsxs)(a.Fragment, { children: [Object(a.jsx)(Be, { size: "28" }), " ", e.text] }),
                    ],
                });
            }
            var We = Se.b.div(Je()),
                He = Object(Se.b)(Fe.a)(qe()),
                Be = Object(Se.b)(Ne.a)(Ie());
            function Ve() {
                var e = _e();
                return (
                    Object(i.useEffect)(function () {
                        e({ type: E });
                    }, []),
                    Object(a.jsx)(Me, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..." })
                );
            }
            function Xe() {
                var e = _e();
                return (
                    Object(i.useEffect)(function () {
                        e({ type: C });
                    }, []),
                    Object(a.jsx)(Me, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..." })
                );
            }
            function $e() {
                var e = Object(we.a)([
                    "\n    font-weight: 600;\n    font-size: 1.5em;\n    line-height: 2em;\n    color: ",
                    ";\n",
                ]);
                return (
                    ($e = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ye(e) {
                return Object(a.jsx)(Ke, { children: e.children });
            }
            var Ke = Se.b.h1($e(), function (e) {
                return e.theme.color_title;
            });
            function Qe() {
                var e = Object(we.a)([
                    "\n    font-weight: 600;\n    font-size: 1.2em;\n    line-height: 2em;\n    color: ",
                    ";\n",
                ]);
                return (
                    (Qe = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ze(e) {
                return Object(a.jsx)(en, { children: e.children });
            }
            var en = Se.b.h1(Qe(), function (e) {
                return e.theme.color_title;
            });
            function nn() {
                var e = Object(we.a)([
                    "\n    display: flex;\n    justify-content: space-between;\n    margin: 15px 0;\n\n    @media (max-width: ",
                    "px) {\n        flex-flow: column;\n    }\n",
                ]);
                return (
                    (nn = function () {
                        return e;
                    }),
                    e
                );
            }
            function tn(e) {
                return Object(a.jsx)(rn, { children: e.children });
            }
            var rn = Se.b.div(nn(), function (e) {
                    return e.theme.media_mobile;
                }),
                cn = t(42);
            function an() {
                var e = Object(we.a)([
                    "\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",
                    ";\n    border: 1px solid ",
                    ";\n    border-radius: 2px;\n    padding: 0.5em 1em;\n    text-decoration: none;\n    line-height: 2em;\n    color: #fff;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #359eef;\n    }\n",
                ]);
                return (
                    (an = function () {
                        return e;
                    }),
                    e
                );
            }
            function on(e) {
                return Object(a.jsx)(un, Object(le.a)(Object(le.a)({}, e), {}, { children: e.children }));
            }
            var un = Object(Se.b)(cn.a)(
                an(),
                function (e) {
                    return e.theme.color_main;
                },
                function (e) {
                    return e.theme.color_main;
                }
            );
            function sn() {
                var e = Object(we.a)([
                    "\n    display: block;\n    width: 100%;\n    border: 1px solid #9abbce;\n    border-radius: 2px;\n    line-height: 3em;\n    height: 3em;\n    padding: 0 1em;\n    box-sizing: border-box;\n\n    &:hover,\n    &:focus {\n        border: 1px solid ",
                    ";\n    }\n",
                ]);
                return (
                    (sn = function () {
                        return e;
                    }),
                    e
                );
            }
            function dn(e) {
                return Object(a.jsx)(bn, Object(le.a)({}, e));
            }
            var bn = Se.b.input(sn(), function (e) {
                return e.theme.color_main;
            });
            function jn() {
                var e = Object(we.a)(["\n    flex-grow: 1;\n"]);
                return (
                    (jn = function () {
                        return e;
                    }),
                    e
                );
            }
            function fn() {
                var e = Object(we.a)([
                    "\n    flex-grow: 0;\n    white-space: nowrap;\n    font-weight: 600;\n    font-size: 1.2em;\n    line-height: 2em;\n    padding-right: 0.5em;\n    color: ",
                    ";\n",
                ]);
                return (
                    (fn = function () {
                        return e;
                    }),
                    e
                );
            }
            function pn() {
                var e = Object(we.a)(["\n    display: flex;\n    margin: 15px 0;\n"]);
                return (
                    (pn = function () {
                        return e;
                    }),
                    e
                );
            }
            function ln(e) {
                return Object(a.jsxs)(On, {
                    children: [
                        Object(a.jsx)(hn, { children: "\u041f\u043e\u0438\u0441\u043a:" }),
                        Object(a.jsx)(xn, {
                            onChange: function (n) {
                                return e.handleChangeSearch(n.target.value);
                            },
                            placeholder:
                                "\u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443: apple, \u0444\u043e\u0442\u043e, 42",
                        }),
                    ],
                });
            }
            var On = Se.b.div(pn()),
                hn = Se.b.div(fn(), function (e) {
                    return e.theme.color_main;
                }),
                xn = Object(Se.b)(dn)(jn());
            function vn() {
                var e = Object(we.a)(["\n    line-height: 2em;\n"]);
                return (
                    (vn = function () {
                        return e;
                    }),
                    e
                );
            }
            function mn() {
                var e = Object(we.a)([
                    "\n    flex-basis: 50%;\n    padding-right: 5px;\n    font-weight: 600;\n    color: #a0b0b9;\n    line-height: 2em;\n",
                ]);
                return (
                    (mn = function () {
                        return e;
                    }),
                    e
                );
            }
            function gn() {
                var e = Object(we.a)(["\n    display: flex;\n    width: 100%;\n"]);
                return (
                    (gn = function () {
                        return e;
                    }),
                    e
                );
            }
            function yn() {
                var e = Object(we.a)([""]);
                return (
                    (yn = function () {
                        return e;
                    }),
                    e
                );
            }
            function wn(e) {
                var n = function (n) {
                    return e.libraryParameters.find(function (e) {
                        return e.key === n;
                    });
                };
                return Object(a.jsx)(Sn, {
                    children: Object.entries(e.productParameters).map(function (e) {
                        var t, r;
                        return Object(a.jsxs)(
                            Pn,
                            {
                                children: [
                                    Object(a.jsx)(_n, {
                                        children: (null === (t = n(e[0])) || void 0 === t ? void 0 : t.name) + ":",
                                    }),
                                    Object(a.jsxs)(An, {
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
            var Sn = Se.b.div(yn()),
                Pn = Se.b.div(gn()),
                _n = Se.b.div(mn()),
                An = Se.b.div(vn()),
                kn = t(69);
            function En() {
                var e = Object(we.a)(["\n    flex-basis: 40%;\n"]);
                return (
                    (En = function () {
                        return e;
                    }),
                    e
                );
            }
            function Tn() {
                var e = Object(we.a)(["\n    color: #353535;\n    line-height: 1.5em;\n"]);
                return (
                    (Tn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Dn() {
                var e = Object(we.a)([""]);
                return (
                    (Dn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Cn() {
                var e = Object(we.a)(["\n    flex-basis: 60%;\n    padding-right: 30px;\n"]);
                return (
                    (Cn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Rn() {
                var e = Object(we.a)([
                    "\n    display: flex;\n\n    @media (max-width: ",
                    "px) {\n        flex-direction: column-reverse;\n    }\n",
                ]);
                return (
                    (Rn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Un() {
                var e = Object(we.a)(["\n    padding-right: 3px;\n"]);
                return (
                    (Un = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ln() {
                var e = Object(we.a)([""]);
                return (
                    (Ln = function () {
                        return e;
                    }),
                    e
                );
            }
            function zn() {
                var e = Object(we.a)([""]);
                return (
                    (zn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Gn() {
                var e = Object(we.a)([
                    "\n    margin: 20px 0;\n    padding: 20px;\n    background: #ffffff;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n",
                ]);
                return (
                    (Gn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Nn(e) {
                var n = Ae(Ue);
                return Object(a.jsxs)(Fn, {
                    children: [
                        Object(a.jsx)(In, {
                            children: Object(a.jsxs)(tn, {
                                children: [
                                    Object(a.jsx)(qn, { children: e.product.name }),
                                    Object(a.jsxs)(on, {
                                        to: "/products/" + e.product.id,
                                        children: [
                                            Object(a.jsx)(Jn, { size: "16" }),
                                            "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440",
                                        ],
                                    }),
                                ],
                            }),
                        }),
                        Object(a.jsxs)(Mn, {
                            children: [
                                Object(a.jsxs)(Wn, {
                                    children: [
                                        Object(a.jsx)(Hn, {
                                            children: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
                                        }),
                                        Object(a.jsx)(Bn, { children: e.product.description }),
                                    ],
                                }),
                                Object(a.jsxs)(Vn, {
                                    children: [
                                        Object(a.jsx)(Hn, {
                                            children: "\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",
                                        }),
                                        Object(a.jsx)(wn, {
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
            var Fn = Se.b.div(Gn()),
                In = Se.b.div(zn()),
                qn = Object(Se.b)(Ye)(Ln()),
                Jn = Object(Se.b)(kn.a)(Un()),
                Mn = Se.b.div(Rn(), function (e) {
                    return e.theme.media_tablet;
                }),
                Wn = Se.b.div(Cn()),
                Hn = Object(Se.b)(Ze)(Dn()),
                Bn = Se.b.article(Tn()),
                Vn = Se.b.div(En());
            function Xn() {
                var e = Object(we.a)([
                    "\n    max-width: 935px;\n    margin: 0 auto;\n    font-size: 16px;\n    background-color: #fafafa;\n",
                ]);
                return (
                    (Xn = function () {
                        return e;
                    }),
                    e
                );
            }
            function $n(e) {
                return Object(a.jsx)(Yn, {
                    children: e.products.valueSeq().map(function (e) {
                        return Object(a.jsx)(Nn, { product: e }, e.id);
                    }),
                });
            }
            var Yn = Se.b.div(Xn()),
                Kn = t(39);
            function Qn() {
                var e = Object(we.a)([""]);
                return (
                    (Qn = function () {
                        return e;
                    }),
                    e
                );
            }
            function Zn() {
                var e = _e(),
                    n = Ae(De),
                    t = Ae(Ce),
                    c = Ae(Ge);
                return t !== r.loaded
                    ? Object(a.jsxs)(a.Fragment, {
                          children: [
                              t === r.notLoaded && Object(a.jsx)(Ve, {}),
                              t === r.errorServer &&
                                  Object(a.jsx)(Me, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                          ],
                      })
                    : Object(a.jsxs)(et, {
                          children: [
                              n === r.notLoaded && Object(a.jsx)(Xe, {}),
                              n === r.errorServer &&
                                  Object(a.jsx)(Me, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                              n === r.loaded &&
                                  Object(a.jsxs)(a.Fragment, {
                                      children: [
                                          Object(a.jsxs)(tn, {
                                              children: [
                                                  Object(a.jsx)(Ye, {
                                                      children:
                                                          "\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432",
                                                  }),
                                                  Object(a.jsxs)(on, {
                                                      to: "/products/create",
                                                      children: [
                                                          Object(a.jsx)(Kn.a, { size: "20" }),
                                                          "\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440",
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          Object(a.jsx)(ln, {
                                              handleChangeSearch: function (n) {
                                                  e(
                                                      (function (e) {
                                                          return { type: _, searchWord: e };
                                                      })(n)
                                                  );
                                              },
                                          }),
                                          c.size > 0
                                              ? Object(a.jsx)($n, { products: c })
                                              : Object(a.jsx)(Ze, {
                                                    children:
                                                        "\u0422\u043e\u0432\u0430\u0440 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d",
                                                }),
                                      ],
                                  }),
                          ],
                      });
            }
            var et = Se.b.div(Qn());
            function nt(e) {
                var n = _e();
                return (
                    Object(i.useEffect)(function () {
                        var t;
                        n(((t = e.idProduct), { type: R, id: t }));
                    }, []),
                    Object(a.jsx)(Me, { type: "preload", text: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..." })
                );
            }
            var tt = t(31),
                rt = t(46);
            function ct() {
                var e = Object(we.a)([
                    "\n    display: block;\n    width: 100%;\n    border: 1px solid #9abbce;\n    border-radius: 2px;\n    line-height: 1.5em;\n    padding: 1em;\n    box-sizing: border-box;\n\n    &:hover,\n    &:focus {\n        border: 1px solid ",
                    ";\n    }\n",
                ]);
                return (
                    (ct = function () {
                        return e;
                    }),
                    e
                );
            }
            var at = Se.b.textarea(ct(), function (e) {
                return e.theme.color_main;
            });
            function it() {
                var e = Object(we.a)([
                    "\n    display: block;\n    width: 100%;\n    border: 1px solid #9abbce;\n    border-radius: 2px;\n    line-height: 3em;\n    height: 3em;\n    padding: 0 1em;\n    box-sizing: border-box;\n\n    &:hover,\n    &:focus {\n        border: 1px solid ",
                    ";\n    }\n",
                ]);
                return (
                    (it = function () {
                        return e;
                    }),
                    e
                );
            }
            function ot(e) {
                return Object(a.jsx)(
                    ut,
                    Object(le.a)(Object(le.a)({}, e), {}, { ref: e.innerRef, children: e.children })
                );
            }
            var ut = Se.b.select(it(), function (e) {
                return e.theme.color_main;
            });
            function st() {
                var e = Object(we.a)([
                    "\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",
                    ";\n    border: 1px solid ",
                    ";\n    border-radius: 2px;\n    color: #fff;\n    height: 3em;\n    padding: 0 1em;\n    cursor: pointer;\n\n    &:hover {\n        background-color: #359eef;\n    }\n",
                ]);
                return (
                    (st = function () {
                        return e;
                    }),
                    e
                );
            }
            function dt(e) {
                return Object(a.jsx)(bt, Object(le.a)(Object(le.a)({}, e), {}, { children: e.children }));
            }
            var bt = Se.b.button(
                    st(),
                    function (e) {
                        return e.theme.color_main;
                    },
                    function (e) {
                        return e.theme.color_main;
                    }
                ),
                jt = t(70),
                ft = t(71),
                pt = t(72),
                lt = t(73);
            function Ot() {
                var e = Object(we.a)([
                    "\n    animation: rotate 2s linear infinite;\n\n    @keyframes rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n",
                ]);
                return (
                    (Ot = function () {
                        return e;
                    }),
                    e
                );
            }
            function ht() {
                var e = Object(we.a)([""]);
                return (
                    (ht = function () {
                        return e;
                    }),
                    e
                );
            }
            function xt() {
                var e = Object(we.a)([""]);
                return (
                    (xt = function () {
                        return e;
                    }),
                    e
                );
            }
            function vt() {
                var e = Object(we.a)(["\n    @media (max-width: ", "px) {\n        display: none;\n    }\n"]);
                return (
                    (vt = function () {
                        return e;
                    }),
                    e
                );
            }
            function mt() {
                var e = Object(we.a)(["\n    @media (max-width: ", "px) {\n        display: none;\n    }\n"]);
                return (
                    (mt = function () {
                        return e;
                    }),
                    e
                );
            }
            function gt() {
                var e = Object(we.a)([
                    "\n    background-color: #c41732;\n    border: 1px solid #ac0020;\n\n    &:hover {\n        background-color: #d22540;\n    }\n\n    @media (max-width: ",
                    "px) {\n        width: 30px;\n    }\n",
                ]);
                return (
                    (gt = function () {
                        return e;
                    }),
                    e
                );
            }
            function yt() {
                var e = Object(we.a)([
                    "\n    flex-basis: 14%;\n\n    @media (max-width: ",
                    "px) {\n        flex-basis: 18%;\n    }\n",
                ]);
                return (
                    (yt = function () {
                        return e;
                    }),
                    e
                );
            }
            function wt() {
                var e = Object(we.a)([
                    "\n    flex-basis: 48%;\n    @media (max-width: ",
                    "px) {\n        flex-basis: 78%;\n    }\n",
                ]);
                return (
                    (wt = function () {
                        return e;
                    }),
                    e
                );
            }
            function St() {
                var e = Object(we.a)([
                    "\n    flex-basis: 14%;\n    white-space: nowrap;\n    min-width: 150px;\n\n    @media (max-width: ",
                    "px) {\n        flex-basis: 100%;\n    }\n",
                ]);
                return (
                    (St = function () {
                        return e;
                    }),
                    e
                );
            }
            function Pt() {
                var e = Object(we.a)([
                    "\n    display: flex;\n    padding-bottom: 5px;\n    flex-wrap: wrap;\n    width: 100%;\n    justify-content: space-between;\n",
                ]);
                return (
                    (Pt = function () {
                        return e;
                    }),
                    e
                );
            }
            function _t() {
                var e = Object(we.a)([""]);
                return (
                    (_t = function () {
                        return e;
                    }),
                    e
                );
            }
            function At() {
                var e = Object(we.a)(["\n    height: 200px;\n"]);
                return (
                    (At = function () {
                        return e;
                    }),
                    e
                );
            }
            function kt() {
                var e = Object(we.a)([""]);
                return (
                    (kt = function () {
                        return e;
                    }),
                    e
                );
            }
            function Et() {
                var e = Object(we.a)(["\n    padding-bottom: 5px;\n"]);
                return (
                    (Et = function () {
                        return e;
                    }),
                    e
                );
            }
            function Tt() {
                var e = Object(we.a)([
                    "\n    padding-right: 5px;\n    font-weight: 600;\n    color: #a0b0b9;\n    line-height: 3em;\n",
                ]);
                return (
                    (Tt = function () {
                        return e;
                    }),
                    e
                );
            }
            function Dt() {
                var e = Object(we.a)(["\n    padding-bottom: 10px;\n"]);
                return (
                    (Dt = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ct(e) {
                var n = _e(),
                    t = Ae(Ue),
                    r = Object(i.useState)(e.product),
                    o = Object(rt.a)(r, 2),
                    u = o[0],
                    s = o[1],
                    d = Object(i.useState)(!0),
                    b = Object(rt.a)(d, 2),
                    j = b[0],
                    f = b[1],
                    p = Object(i.useRef)(null),
                    l = Ae(Re),
                    O = t.filter(function (e) {
                        return !(e.key in u.parameters);
                    }),
                    h = function (e, n) {
                        f(!0), s(u.set(e, n));
                    };
                return Object(a.jsxs)(a.Fragment, {
                    children: [
                        Object(a.jsxs)(tn, {
                            children: [
                                Object(a.jsx)(Ye, {
                                    children:
                                        "create" === e.typeForm
                                            ? "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430"
                                            : "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430",
                                }),
                                Object(a.jsxs)(on, {
                                    to: "/products",
                                    children: [
                                        Object(a.jsx)(jt.a, { size: "20" }),
                                        "\u041a \u0441\u043f\u0438\u0441\u043a\u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432",
                                    ],
                                }),
                            ],
                        }),
                        Object(a.jsxs)(Rt, {
                            children: [
                                Object(a.jsx)(Ze, {
                                    children:
                                        "\u0421\u0442\u0430\u0442\u0438\u0447\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",
                                }),
                                Object(a.jsxs)(Lt, {
                                    children: [
                                        Object(a.jsx)(Ut, {
                                            children: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:",
                                        }),
                                        Object(a.jsx)(zt, {
                                            value: u.name,
                                            onChange: function (e) {
                                                return h("name", e.target.value);
                                            },
                                        }),
                                    ],
                                }),
                                Object(a.jsxs)(Lt, {
                                    children: [
                                        Object(a.jsx)(Ut, {
                                            children: "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",
                                        }),
                                        Object(a.jsx)(Gt, {
                                            value: u.description,
                                            onChange: function (e) {
                                                return h("description", e.target.value);
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        Object(a.jsxs)(Rt, {
                            children: [
                                Object(a.jsx)(Ze, {
                                    children:
                                        "\u0414\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",
                                }),
                                Object(a.jsxs)(Nt, {
                                    children: [
                                        Object.entries(u.parameters).map(function (e) {
                                            var n, r;
                                            return Object(a.jsxs)(
                                                Ft,
                                                {
                                                    children: [
                                                        Object(a.jsx)(It, {
                                                            children:
                                                                (null ===
                                                                    ((r = e[0]),
                                                                    (n = t.find(function (e) {
                                                                        return e.key === r;
                                                                    }))) || void 0 === n
                                                                    ? void 0
                                                                    : n.name) + ":",
                                                        }),
                                                        Object(a.jsx)(qt, {
                                                            children: Object(a.jsx)(dn, {
                                                                value: e[1],
                                                                onChange: function (n) {
                                                                    return (function (e, n) {
                                                                        f(!0),
                                                                            s(
                                                                                u.set(
                                                                                    "parameters",
                                                                                    Object(le.a)(
                                                                                        Object(le.a)({}, u.parameters),
                                                                                        {},
                                                                                        Object(tt.a)({}, e, n)
                                                                                    )
                                                                                )
                                                                            );
                                                                    })(e[0], n.target.value);
                                                                },
                                                            }),
                                                        }),
                                                        Object(a.jsxs)(Mt, {
                                                            onClick: function () {
                                                                return (function (e) {
                                                                    f(!0),
                                                                        Reflect.deleteProperty(u.parameters, e),
                                                                        s(
                                                                            u.set(
                                                                                "parameters",
                                                                                Object(le.a)({}, u.parameters)
                                                                            )
                                                                        );
                                                                })(e[0]);
                                                            },
                                                            children: [
                                                                Object(a.jsx)(ft.a, { size: "20" }),
                                                                Object(a.jsx)(Wt, {
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
                                            Object(a.jsxs)(Ft, {
                                                children: [
                                                    Object(a.jsx)(It, {
                                                        children:
                                                            "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440:",
                                                    }),
                                                    Object(a.jsx)(qt, {
                                                        children: Object(a.jsx)(ot, {
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
                                                    Object(a.jsxs)(Bt, {
                                                        onClick: function () {
                                                            p.current &&
                                                                (f(!0),
                                                                s(
                                                                    u.set(
                                                                        "parameters",
                                                                        Object(le.a)(
                                                                            Object(le.a)({}, u.parameters),
                                                                            {},
                                                                            Object(tt.a)({}, p.current.value, "")
                                                                        )
                                                                    )
                                                                ));
                                                        },
                                                        children: [
                                                            Object(a.jsx)(Kn.a, { size: "20" }),
                                                            Object(a.jsx)(Ht, {
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
                        Object(a.jsx)(Rt, {
                            children: Object(a.jsxs)(Vt, {
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
                                    (l === c.notSaved || j) && Object(a.jsx)(pt.a, { size: "20" }),
                                    l === c.save && !j && Object(a.jsx)(Xt, { size: "20" }),
                                    l === c.saved && !j && Object(a.jsx)(lt.a, { size: "20" }),
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
            var Rt = Se.b.div(Dt()),
                Ut = Se.b.div(Tt()),
                Lt = Se.b.div(Et()),
                zt = Object(Se.b)(dn)(kt()),
                Gt = Object(Se.b)(function (e) {
                    return Object(a.jsx)(at, Object(le.a)({}, e));
                })(At()),
                Nt = Se.b.div(_t()),
                Ft = Se.b.div(Pt()),
                It = Object(Se.b)(Ut)(St(), function (e) {
                    return e.theme.media_mobile;
                }),
                qt = Se.b.div(wt(), function (e) {
                    return e.theme.media_mobile;
                }),
                Jt = Object(Se.b)(dt)(yt(), function (e) {
                    return e.theme.media_mobile;
                }),
                Mt = Object(Se.b)(Jt)(gt(), function (e) {
                    return e.theme.media_tablet;
                }),
                Wt = Se.b.span(mt(), function (e) {
                    return e.theme.media_tablet;
                }),
                Ht = Se.b.span(vt(), function (e) {
                    return e.theme.media_tablet;
                }),
                Bt = Object(Se.b)(Jt)(xt()),
                Vt = Object(Se.b)(dt)(ht()),
                Xt = Object(Se.b)(Fe.a)(Ot());
            function $t() {
                var e = Object(we.a)([""]);
                return (
                    ($t = function () {
                        return e;
                    }),
                    e
                );
            }
            function Yt() {
                var e = Ae(Ce),
                    n = Ae(Te),
                    t = Object(Pe.g)().idProduct,
                    c = Ae(ze, t);
                return e !== r.loaded
                    ? Object(a.jsxs)(a.Fragment, {
                          children: [
                              e === r.notLoaded && Object(a.jsx)(Ve, {}),
                              e === r.errorServer &&
                                  Object(a.jsx)(Me, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                          ],
                      })
                    : Object(a.jsxs)(Kt, {
                          children: [
                              !c && n !== r.errorServer && Object(a.jsx)(nt, { idProduct: t }),
                              n === r.errorServer &&
                                  Object(a.jsx)(Me, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                              c && Object(a.jsx)(Ct, { product: c, typeForm: "edit" }),
                          ],
                      });
            }
            var Kt = Se.b.div($t());
            function Qt() {
                var e = new me(),
                    n = Ae(Ce);
                return n !== r.loaded
                    ? Object(a.jsxs)(a.Fragment, {
                          children: [
                              n === r.notLoaded && Object(a.jsx)(Ve, {}),
                              n === r.errorServer &&
                                  Object(a.jsx)(Me, {
                                      type: "warning",
                                      text:
                                          "\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430",
                                  }),
                          ],
                      })
                    : Object(a.jsx)(Ct, { product: e, typeForm: "create" });
            }
            function Zt() {
                var e = Object(we.a)([
                    "\n    max-width: 935px;\n    margin: 0 auto;\n    font-size: 16px;\n    background-color: #fafafa;\n    padding: 0 10px;\n",
                ]);
                return (
                    (Zt = function () {
                        return e;
                    }),
                    e
                );
            }
            var er,
                nr = { media_tablet: 768, media_mobile: 414, color_main: "#2196f3", color_title: "#2196f3" },
                tr = Se.b.div(Zt()),
                rr = function () {
                    return Object(a.jsx)(Se.a, {
                        theme: nr,
                        children: Object(a.jsx)(tr, {
                            children: Object(a.jsxs)(Pe.d, {
                                children: [
                                    Object(a.jsx)(Pe.b, {
                                        exact: !0,
                                        path: "/",
                                        children: Object(a.jsx)(Pe.a, { to: "/products" }),
                                    }),
                                    Object(a.jsx)(Pe.b, { exact: !0, path: "/products", component: Zn }),
                                    Object(a.jsx)(Pe.b, { exact: !0, path: "/products/create", component: Qt }),
                                    Object(a.jsx)(Pe.b, { exact: !0, path: "/products/:idProduct", component: Yt }),
                                ],
                            }),
                        }),
                    });
                },
                cr = (t(107), t(108), Object(j.b)()),
                ar = Object(l.a)(),
                ir = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || d.d,
                or = Object(d.e)(F(cr), ir(Object(d.a)(ar, Object(f.a)(cr))));
            ar.run(
                ((er = ye),
                q.a.mark(function e() {
                    return q.a.wrap(function (e) {
                        for (;;)
                            switch ((e.prev = e.next)) {
                                case 0:
                                    return (e.next = 2), Object(J.a)([K(er), be(er)]);
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
                            store: or,
                            children: Object(a.jsx)(p.a, { history: cr, children: Object(a.jsx)(rr, {}) }),
                        }),
                    }),
                    document.getElementById("root")
                );
        },
    },
    [[109, 1, 2]],
]);
//# sourceMappingURL=main.4ec38bdd.chunk.js.map
