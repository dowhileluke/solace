"use client"

import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'

const client = new QueryClient()

export function QueryClientWrapper({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	)
}
