$(function() {
	var n = $("div.box-box-default"),
		t = $("div.box-box-large");

	n.find("a.btn-remove").click(function() {
		n.remove()
	}), t.find("a.btn-remove").click(function() {
		t.remove()
	})
});


var __hasProp = {}.hasOwnProperty;


! function(n) {
	var t, e, o, r;
	o = this, t = o.jQuery, e = {}, n(o, e, t), void 0 === o.csdn && (o.csdn = e);
	for (r in e) __hasProp.call(e, r) && (o[r] = o.csdn[r] = e[r])
}(function(n, t, e) {
	var o, r, a, c, i;
	if (!(n.CNick instanceof Function && n.cnick instanceof Function && (null != (i = n.csdn) ? i.cnick : void 0) instanceof Function))
		return void 0 === String.prototype.trim && (String.prototype.trim = function() {
				return this.replace(/^\s+|\s+$/g, "")
			}),
			c = {}, r = function(t, e) {
				var o, r;
				return arguments.length > 1 ? (c[t] = e, null != (o = n.localStorage) ? o["cnick_" + t] = +new Date + "," + e : void 0) : null != t ? c[t] || function(n) {
					var t, e, o, r;
					if (null != n) return o = n.split(","), t = o[0], e = o[1], 0 < (r = new Date - new Date(parseInt(t, 10))) && 1728e5 > r ? e : void 0
				}(null != (r = n.localStorage) ? r["cnick_" + t] : void 0) : void 0
			}, t.cnick = a = function(t, o, a) {
				var c, i, l, s, u, f, d, p, h, m;
				for (null == t && (t = "a.user_name"), null == o && (o = n.document), null == a && (a = !1), i = e(t, o).filter(function() {
						return a || null == e(this).data("orig_username")
					}).data("orig_username", ""), u = {}, h = 0, m = i.length; m > h; h++) c = i[h], d = c.innerHTML.trim(), null != (f = r(d)) ? e(c).data("orig_username", d).text(f) : (s = u.hasOwnProperty(d) ? u[d] : u[d] = [], s.push(c));
				for (p = function() {
						var n;
						n = [];
						for (l in u) __hasProp.call(u, l) && n.push(l);
						return n
					}(); p.length > 0;) e.getJSON("https://passport.csdn.net/get/nick?callback=?", {
					users: p.splice(0, 100).join()
				}, function(n) {
					var t, o, a, c, i;
					if (o = n.status, t = n.data, o && t)
						for (a = 0, c = t.length; c > a; a++) i = t[a], d = i.u, l = i.n, "null" === l && (l = d), e(u[d]).data("orig_username", d).text(function(n, t) {
							return l || t
						}), r(d, l)
				})
			}, e(function() {
				return a()
			}), n.CNick = o = function() {
				function n(n) {
					this.selector = n
				}
				return n.prototype.showNickname = function() {
					return a(this.selector)
				}, n
			}()
}), $(function() {
	function n() {
		var n = document.cookie.match(new RegExp("(^| )UserName=([^;]*)(;|$)"));
		return n ? n[2] : ""
	}

	function t(n) {
		var t = "https://my.csdn.net/index.php/follow/check_is_followed/" + encodeURIComponent(n) + "/" + encodeURIComponent(username) + "?jsonpcallback=?";
		$.getJSON(t, {}, function(n) {
			1 == n.succ && 1 == n.info && ($("#btnAttent").addClass("attented").text("已关注").removeClass("btn-red-hollow").addClass("btn-gray-hollow"), $("#fan").text(parseInt($("#fan").text()) + 1))
		}, "json")
	}

	function e(n) {
		var t = n.hasClass("attented");
		t ? r(n) : o(n)
	}

	function o(n) {
		var t = "https://my.csdn.net/index.php/follow/do_follow?jsonpcallback=?";
		$.getJSON(t, {
			username: username
		}, function(t) {
			1 == t.succ ? (n.addClass("attented").text("已关注").removeClass("btn-red-hollow").addClass("btn-gray-hollow attented"), $("#fan").text(parseInt($("#fan").text()) + 1)) : console.error(t.msg)
		})
	}

	function r(n) {
		var t = "https://my.csdn.net/index.php/follow/do_unfollow?jsonpcallback=?";
		$.getJSON(t, {
			username: username
		}, function(t) {
			1 == t.succ ? (n.text("关注").addClass("btn-red-hollow").removeClass("btn-gray-hollow attented"), $("#fan").text(parseInt($("#fan").text()) - 1)) : console.error(t.msg)
		})
	}
	$("#btnAttent").click(function() {
		e($(this))
	}), t(n()), new CNick("#uid").showNickname()
});