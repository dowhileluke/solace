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
		<form onSubmit={handleSubmit} className="flex p-4 gap-4 bg-white border border-brand rounded-lg">
			<input value={textQuery} onChange={handleTextChange} placeholder="Search terms" className="border border-theme rounded-lg p-2" />
			<select value={yoeIndex} onChange={handleYoeChange} className="border border-theme rounded-lg p-2">
				{yoeOptions}
			</select>
			<button type="submit" className="bg-brand text-white rounded-lg py-2 px-4">
				Search
			</button>
		</form>
	)
}
