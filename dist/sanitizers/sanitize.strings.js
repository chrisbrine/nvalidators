"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizers = void 0;
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
    trim: {
        func: trim,
        sanitizer: true,
    },
    toLowerCase: {
        func: toLowerCase,
        sanitizer: true,
    },
    toUpperCase: {
        func: toUpperCase,
        sanitizer: true,
    },
    toCapitalize: {
        func: toCapitalize,
        sanitizer: true,
    },
    toCapitalizeWords: {
        func: toCapitalizeWords,
        sanitizer: true,
    },
    toSlug: {
        func: toSlug,
        sanitizer: true,
    },
    toSnakeCase: {
        func: toSnakeCase,
        sanitizer: true,
    },
    toCamelCase: {
        func: toCamelCase,
        sanitizer: true,
    },
    replace: {
        func: replace,
        sanitizer: true,
        args: true,
        requiredArg: true,
    },
    escape: {
        func: escape,
        sanitizer: true,
    },
    blacklist: {
        func: blacklist,
        sanitizer: true,
        args: true,
        requiredArg: true,
    },
};
