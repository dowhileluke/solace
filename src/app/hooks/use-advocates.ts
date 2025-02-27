import { Advocate } from '@/types'
import { useQuery } from '@tanstack/react-query'

async function fetchAdvocates() {
	const response = await fetch("/api/advocates")
	const json = await response.json()

	return json.data as Advocate[]
}

export function useAdvocates() {
	return useQuery({ queryKey: ['advocates'], queryFn: fetchAdvocates, })
}
