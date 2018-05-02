"use strict";
exports.__esModule = true;
/**
 * Converted to string only
 * No uppercase
 * No hyphen nor underscore
 * No accent
 * No punctuation
 * No spaces around
 */
function cleanString(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/-/g, ' ')
        .replace(/_/g, ' ')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, "") // remove accents
        .replace(/!/g, '')
        .replace(/\?/g, '')
        .trim();
}
exports.cleanString = cleanString;
exports.stringsMatch = function (str1, str2) { return cleanString(str1) === cleanString(str2); };
exports.stringIncludes = function (str1, str2) { return cleanString(str1).includes(cleanString(str2)); };
