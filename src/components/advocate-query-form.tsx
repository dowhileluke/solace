"use client"

import { YOE_RANGES } from '@/const'
import { AdvocateQuery } from '@/types'
import { ChangeEvent, SyntheticEvent, useState } from 'react'

type AdvocateQueryFormProps = {
	onSubmit: (query: AdvocateQuery) => void;
}

const yoeOptions = YOE_RANGES.map((range, i) => (
	<option key={i} value={i}>{range.label}</option>
))

export function AdvocateQueryForm({ onSubmit }: AdvocateQueryFormProps) {
	const [textQuery, setTextQuery] = useState('')
	const [yoeIndex, setYoeIndex] = useState(0)

	function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
		setTextQuery(e.target.value)
	}

	function handleYoeChange(e: ChangeEvent<HTMLSelectElement>) {
		setYoeIndex(Number(e.target.value))
	}

	function handleSubmit(e: SyntheticEvent) {
		e.preventDefault()

		const { minYoe, maxYoe } = YOE_RANGES[yoeIndex]
		const query: AdvocateQuery = { textQuery, minYoe, maxYoe, }

		onSubmit(query)
	}

	return (
		<form onSubmit={handleSubmit}>
			<input value={textQuery} onChange={handleTextChange} />
			<select value={yoeIndex} onChange={handleYoeChange}>
				{yoeOptions}
			</select>
			<button type="submit">Search</button>
		</form>
	)
}
