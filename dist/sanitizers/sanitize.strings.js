"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizers = void 0;
exports.prefix = prefix;
exports.suffix = suffix;
exports.insert = insert;
exports.trim = trim;
exports.toLowerCase = toLowerCase;
exports.toUpperCase = toUpperCase;
exports.toCapitalize = toCapitalize;
exports.toCapitalizeWords = toCapitalizeWords;
exports.toSlug = toSlug;
exports.toSnakeCase = toSnakeCase;
exports.toCamelCase = toCamelCase;
exports.replace = replace;
exports.escape = escape;
exports.blacklist = blacklist;
function prefix(param, prefix) {
    return prefix + param;
}
function suffix(param, suffix) {
    return param + suffix;
}
function insert(param, value, index) {
    return param.slice(0, index) + value + param.slice(index);
}
function trim(param) {
    return param.trim();
}
function toLowerCase(param) {
    return param.toLowerCase();
}
function toUpperCase(param) {
    return param.toUpperCase();
}
function toCapitalize(param) {
    return param.charAt(0).toUpperCase() + param.slice(1);
}
function toCapitalizeWords(param) {
    return param.split(' ').map((word) => toCapitalize(word)).join(' ');
}
function toSlug(param) {
    return param.toLowerCase().replace(/ /g, '-');
}
function toSnakeCase(param) {
    return param.toLowerCase().replace(/ /g, '_');
}
function toCamelCase(param) {
    return param.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}
function replace(param, searchValue, replaceValue) {
    const searchValues = Array.isArray(searchValue) ? searchValue : [searchValue];
    let result = param;
    searchValues.forEach((value) => {
        result = result.replace(value, replaceValue);
    });
    return result;
}
function escape(param) {
    return param.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .replace(/\\/g, '&#x5C;')
        .replace(/`/g, '&#96;');
}
function blacklist(param, blacklist) {
    let result = param;
    blacklist.forEach((value) => {
        result = result.replace(value, '');
    });
    return result;
}
exports.sanitizers = {
    prefix: {
        func: prefix,
    },
    suffix: {
        func: suffix,
    },
    insert: {
        func: insert,
    },
    trim: {
        func: trim,
    },
    toLowerCase: {
        func: toLowerCase,
    },
    toUpperCase: {
        func: toUpperCase,
    },
    toCapitalize: {
        func: toCapitalize,
    },
    toCapitalizeWords: {
        func: toCapitalizeWords,
    },
    toSlug: {
        func: toSlug,
    },
    toSnakeCase: {
        func: toSnakeCase,
    },
    toCamelCase: {
        func: toCamelCase,
    },
    replace: {
        func: replace,
    },
    escape: {
        func: escape,
    },
    blacklist: {
        func: blacklist,
    },
};
