const whitespace = /\s+/

export function splitTextQuery(s: string) {
	return s.toLocaleLowerCase().trim().split(whitespace)
}
