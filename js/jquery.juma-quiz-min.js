!function(a) {
    "use strict";

    function b(b, c) {
        this.element = b,
        this.options = a.extend({}, s, c),
        g = this.options,
        this._defaults = s,
        this._name = r,
        this.init()
    }

    function c() {
        a(p).before('<div class="juma-progress"><span></span></div>'),
        q = a(p).outerWidth(),
        m = ".juma-progress",
        o = a(m + "> span"),
        a(m).css("width", q)
    }

    function d(b) {
        g.nextAuto || a(p).after('<button type="submit" title="Show next question" class="juma-forward">Next</button>'),
        i = a(".juma-forward"),
        i.attr("disabled", "disabled"),
        a(b).hasClass("active") || a(b + ":first-child").addClass("active")
    }

    function e() {
        j = a(h + "> ul li"),
        j.on("click keydown", function(b) {
            (1 == b.which || 13 == b.which) && (j.removeClass("juma-choice"),
            j.attr("aria-checked", !1),
            i.attr("disabled", "disabled"),
            k = a(h).index(a(".active")) + 1,
            i.removeAttr("disabled"),
            a(this).addClass("juma-choice"),
            a(this).attr("aria-checked", !0),
            g.nextAuto && f()
            )
        }),
        g.nextAuto || i.click(function() {
            f()
        })
    }

    function f() {
        if (t[k] = a(".juma-choice").data("points"),
        u += t[k],
        k = a(h + ".active"),
        k.is(":last-child"))
            for (a(m + " > span").css("width", q),
            a(p).hide(),
            i.hide(),
            l = a(".juma-score li").length,
            v; l > v; v += 1) {
                var b = a(".juma-score li")[v];
                if (u <= a(b).data("points"))
                    return a(b).show(),
                    void (g.showFinalScore && a(".juma-final-score").text(u))
            }
        else
            a(h).removeClass("active"),
            k.next("li").addClass("active"),
            i.attr("disabled", "disabled"),
            g.progress && (o.css("width", q / a(h).length),
            n = parseInt(o.css("width"), 10),
            a(m + " > span").css("width", n * a(h).index(a(".active")) + "px"))
    }

    var g, h, i, j, k, l, m, n, o, p, q, r = "jumaQuiz", s = {
        container: "juma-quiz",
        progress: !0,
        nextAuto: !1,
        showFinalScore: !1
    }, t = [], u = 0, v = 0;

    b.prototype = {
        init: function() {
            p = "#" + g.container,
            h = p + " > li",
            g.progress && c(),
            d(h),
            e()
        }
    },

    a.fn[r] = function(c) {
        return this.each(function() {
            a.data(this, "plugin_" + r) || a.data(this, "plugin_" + r, new b(this, c))
        })
    }
}(jQuery);
