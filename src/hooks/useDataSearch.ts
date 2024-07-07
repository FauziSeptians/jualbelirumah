import { useEffect, useState } from 'react'
import { dataPerumahan } from '../data/dummy/dataPerumahanDummy'

export default function useDataSearch(search: string | null) {
	const [data, setData] = useState<any>([])

	useEffect(() => {
		if (search) {
			console.log(search)
			const filteredData = dataPerumahan.additionalData.filter(
				(item) =>
					item.Title.toLowerCase().includes(search!.toLowerCase()) ||
					item.Description.toLowerCase().includes(search!.toLowerCase()) ||
					item.Location.toLowerCase().includes(search!.toLowerCase())
			)
			setData(filteredData)
		} else {
			console.log(search)
			setData(null)
		}

		// Update data directly within useEffect
	}, [search]) // Dependency array: update only when search changes

	console.log(data) // Log data after potential update

	return {
		dataSearch: data,
		datapages: dataPerumahan.pages,
	}
}
