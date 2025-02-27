import { advocateData } from './db/seed/advocates'

export type Advocate = typeof advocateData[0]

export type AdvocateQuery = {
	textQuery: string;
	minYoe: number | null;
	maxYoe: number | null;
}

export type YoeRange = {
	label: string;
	minYoe: number | null;
	maxYoe: number | null;
}
