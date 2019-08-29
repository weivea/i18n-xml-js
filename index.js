"use strict";
exports.__esModule = true;
var I18nJs = /** @class */ (function () {
    /**
     *
     * @param langs 语言资源对象
     * @param localLang 本地语言名
     */
    function I18nJs(langs, localLang) {
        if (langs === void 0) { langs = {}; }
        this.langs = langs;
        this.local = {};
        this.localLang = '';
        if (localLang) {
            this.setLocal(localLang);
        }
    }
    I18nJs.setPluralization = function (localLang, plural) {
        if (typeof plural === 'function') {
            plural = {
                cardinal: plural
            };
        }
        I18nJs.pluralization[localLang] = plural.cardinal;
        I18nJs.pluralization[localLang].__proto__ = plural;
    };
    // 基本数字
    I18nJs.prototype.cardinal = function (langs, count1) {
        var langType = this.pluralization.cardinal(count1);
        var langsTmp = langs.cardinal || langs;
        var lang = langsTmp[langType];
        return this._getLang(lang, count1);
    };
    // 序数
    I18nJs.prototype.ordinal = function (langs, count1) {
        var langType = this.pluralization.ordinal(count1);
        var langsTmp = langs.ordinal || langs;
        var lang = langsTmp[langType];
        return this._getLang(lang, count1);
    };
    // 区间
    I18nJs.prototype.range = function (langs, count1, count2) {
        var langType = this.pluralization.range(count1);
        var langsTmp = langs.range || langs;
        var lang = langsTmp[langType];
        return this._getLang(lang, count1, count2);
    };
    I18nJs.prototype._getLang = function (lang, a, b) {
        var i = 0;
        var args = arguments;
        var re = lang.replace(/\{\{[^}]+\}\}/g, function (a) {
            i++;
            return args[i];
        });
        return re;
    };
    // 设置本地语
    I18nJs.prototype.setLocal = function (localLang) {
        this.localLang = localLang;
        this.local = this.langs[localLang] || {};
        this.pluralization = I18nJs.pluralization[localLang];
    };
    I18nJs.pluralization = {};
    return I18nJs;
}());
exports.I18nJs = I18nJs;
// 默认的中文复数判断
I18nJs.setPluralization('zh', {
    cardinal: function (count) {
        return 'other';
    },
    ordinal: function (count) {
        return 'other';
    },
    range: function (count) {
        return 'other';
    }
});
// 默认的英文复数判断
I18nJs.setPluralization('en', {
    cardinal: function (count) {
        if (count == 1) {
            return 'one';
        }
        return 'other';
    },
    ordinal: function (n) {
        if (n % 10 == 1 && n % 100 != 11) {
            return 'one';
        }
        if (n % 10 == 2 && n % 100 != 12) {
            return 'two';
        }
        if (n % 10 == 3 && n % 100 != 13) {
            return 'few';
        }
        return 'other';
    },
    range: function (count) {
        return 'other';
    }
});
