import { useMemo } from 'react'
import  dataPerumahan  from '../data/dataPerumahanDummy.json'

function getTop3LowestPrices(products: any) {
	console.log(products)
	// Urutkan produk dari harga terendah ke tertinggi
	const sortedProducts = products.sort((a: any, b: any) => a.Price - b.Price)
	// Ambil 3 harga terendah dari array yang sudah diurutkan
	return sortedProducts.slice(0, 3)
}

// Fungsi untuk mengambil 3 produk dengan harga tertinggi
function getTop3MostExpensiveProducts(products: any) {
	// Urutkan produk dari harga tertinggi ke terendah
	const sortedProducts = products.sort((a: any, b: any) => b.Price - a.Price)
	// Ambil 3 produk pertama dari array yang sudah diurutkan
	return sortedProducts.slice(0, 3)
}

export function useRecomendationByCity(key: string) {
	console.log(key)

	const dataFilter = useMemo(() => {
		if (!dataPerumahan?.additionalData) return []

		return key === 'Cheapest'
			? getTop3LowestPrices(dataPerumahan.additionalData)
			: getTop3MostExpensiveProducts(dataPerumahan.additionalData)
	}, [key])

	console.log(dataFilter)

	return {
		data: dataFilter,
	}
}
