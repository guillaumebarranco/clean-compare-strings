type StringOrNumber = string | number;

/**
 * Converted to string only
 * No uppercase
 * No hyphen nor underscore
 * No accent
 * No punctuation
 * No spaces around
 */
export function cleanString(text: StringOrNumber): string {
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

export const stringsMatch = (str1: StringOrNumber, str2: StringOrNumber) => cleanString(str1) === cleanString(str2);
export const stringIncludes = (str1: StringOrNumber, str2: StringOrNumber) => cleanString(str1).includes(cleanString(str2));
