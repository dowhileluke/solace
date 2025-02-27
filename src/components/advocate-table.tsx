import { Advocate } from '@/types'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

type AdvocateTableProps = {
	list: Advocate[];
}

export function AdvocateTable({ list }: AdvocateTableProps) {
	return (
		<div>
			{list.map(advocate => (
				<AdvocateRow key={advocate.phoneNumber} advocate={advocate} />
			))}
		</div>
	)
}

type AdvocateRowProps = {
	advocate: Advocate;
}

function AdvocateRow({ advocate }: AdvocateRowProps) {
	return (
		<Disclosure as="div" className="bg-white border-b first:border-t first:rounded-t-lg last:rounded-b-lg border-brand">
			<DisclosureButton as="div" className="text-xl cursor-pointer p-4 flex justify-between">
				<div>
					{advocate.firstName} {advocate.lastName}, {advocate.degree}
				</div>
				<div>{advocate.city}</div>
			</DisclosureButton>
			<DisclosurePanel as="div" className="px-4">
				<hr className="border-brand-50" />
				<div className="py-4">
					<div className="flex gap-8">
						<div>Telephone: <code className="text-monospace">{advocate.phoneNumber}</code></div>
						<div>Years of Experience: <code>{advocate.yearsOfExperience}</code></div>
					</div>
					<br />
					<div className="flex flex-wrap gap-2">
						{advocate.specialties.map(s => (
							<div key={s} className="bg-brand-50 rounded-md px-2">
								{s}
							</div>
						))}
					</div>
				</div>
			</DisclosurePanel>
		</Disclosure>
	)
}
