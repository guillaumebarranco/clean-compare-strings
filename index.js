export function cleanString(text) {
	return text
		.toLowerCase()
	    .replace(/-/g, ' ')
	    .normalize('NFD').replace(/[\u0300-\u036f]/g, "") // remove accents
	    .replace(/!/g, '')
	    .replace(/\?/g, '')
	    .trim();
}

export const stringsMatch = (str1, str2) => clean(str1) === clean(str2);
