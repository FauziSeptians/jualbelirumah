import dataPerumahan from '../data/dataPerumahanDummy.json'
import { useQuery } from 'react-query'
import { toGenerateRandomNumber } from '../utils/toGenerateRandomNumber'
import { useMemo } from 'react'

export function useDataPerumahanRecomendationPopular() {
	const { data, isLoading, isError } = useQuery(
		'dataRecomendation',
		() => dataPerumahan,
		{
			cacheTime: 60000, // Contoh: cache berlaku selama 60 detik
		}
	)

	const randomNumber = useMemo(
		() => toGenerateRandomNumber(4, 0, dataPerumahan.additionalData.length - 1),
		[]
	)

	const dataFilter = useMemo(() => {
		if (!data) return []
		return randomNumber.map((item) => data.additionalData[item])
	}, [data, randomNumber])

	console.log(dataFilter)

	return {
		data: dataFilter,
		isLoading: isLoading,
		isError: isError,
	}
}
