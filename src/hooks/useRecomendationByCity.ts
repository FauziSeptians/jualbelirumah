import { useMemo } from 'react'
import  dataPerumahan  from '../data/dataPerumahanDummy.json'

function getTop3LowestPrices(products: any) {
	const sortedProducts = products.sort((a: any, b: any) => a.Price - b.Price)
	return sortedProducts.slice(0, 3)
}

function getTop3MostExpensiveProducts(products: any) {
	const sortedProducts = products.sort((a: any, b: any) => b.Price - a.Price)
	return sortedProducts.slice(0, 3)
}

export function useRecomendationByCity(key: string) {

	const dataFilter = useMemo(() => {
		if (!dataPerumahan?.additionalData) return []

		return key === 'Cheapest'
			? getTop3LowestPrices(dataPerumahan.additionalData)
			: getTop3MostExpensiveProducts(dataPerumahan.additionalData)
	}, [key])

	return {
		data: dataFilter,
	}
}
