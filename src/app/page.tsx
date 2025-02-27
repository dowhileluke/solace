"use client";

import { useMemo, useState } from 'react'
import { useAdvocates } from '../hooks/use-advocates'
import { AdvocateQueryForm } from '@/components/advocate-query-form'
import { AdvocateQuery } from '@/types'
import { toRankedAdvocates } from '../functions/to-ranked-advocates'
import { AdvocateTable } from '@/components/advocate-table'

const emptyQuery: AdvocateQuery = {
  textQuery: '',
  minYoe: null,
  maxYoe: null,
}

export default function Home() {
  const { data: advocateList, isLoading, isError } = useAdvocates()
  const [query, setQuery] = useState(emptyQuery)
  const rankedAdvocates = useMemo(
    () => toRankedAdvocates(advocateList ?? [], query),
    [advocateList, query]
  )

  return (
    <main className="mx-auto max-w-5xl">
      <h1 className="text-4xl">Solace Advocates</h1>
      <br />
      <AdvocateQueryForm onSubmit={setQuery} />
      <br />
      <div>{isLoading ? 'Pending' : rankedAdvocates.length} result(s)</div>
      <br />
      <AdvocateTable list={rankedAdvocates} />
    </main>
  );
}
