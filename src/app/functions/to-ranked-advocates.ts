import { Advocate, AdvocateQuery } from '@/types'
import { splitTextQuery } from './split-text-query'

type AdvocateRanking = {
	advocate: Advocate;
	score: number;
}

function isMatch(source: string, key: string) {
	return source.toLocaleLowerCase().includes(key)
}

export function toRankedAdvocates(advocates: Advocate[], query: AdvocateQuery) {
	const rankings: AdvocateRanking[] = []
	const tokens = splitTextQuery(query.textQuery)
	const minYoe = query.minYoe ?? -Infinity
	const maxYoe = query.maxYoe ?? Infinity
	
	for (const advocate of advocates) {
		if (minYoe <= advocate.yearsOfExperience || advocate.yearsOfExperience <= maxYoe) {
			let score = 0

			for (const t of tokens) {
				if (isMatch(advocate.city, t)) score += 1
				if (isMatch(advocate.degree, t)) score += 1
				if (isMatch(advocate.firstName, t)) score += 1
				if (isMatch(advocate.lastName, t)) score += 1
				if (isMatch(String(advocate.phoneNumber), t)) score += 1

				for (const s of advocate.specialties) {
					if (isMatch(s, t)) score += 1
				}
			}

			if (score > 0 || tokens.length === 0) {
				rankings.push({ advocate, score, })
			}
		}
	}

	return rankings.sort((a, b) => b.score - a.score).map(ranking => ranking.advocate)
}
