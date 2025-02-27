"use client";

import { useMemo, useState } from 'react'
import { useAdvocates } from './hooks/use-advocates'
import { AdvocateQueryForm } from '@/components/advocate-query-form'
import { AdvocateQuery } from '@/types'
import { toRankedAdvocates } from './functions/to-ranked-advocates'

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
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <br />
      <br />
      <AdvocateQueryForm onSubmit={setQuery} />
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {rankedAdvocates.map((advocate) => {
            return (
              <tr key={advocate.phoneNumber}>
                <td>{advocate.firstName}</td>
                <td>{advocate.lastName}</td>
                <td>{advocate.city}</td>
                <td>{advocate.degree}</td>
                <td>
                  {advocate.specialties.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </td>
                <td>{advocate.yearsOfExperience}</td>
                <td>{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
