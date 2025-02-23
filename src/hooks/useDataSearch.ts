import { useEffect, useState } from 'react'
import dataPerumahan  from '../data/dataPerumahanDummy.json'

export default function useDataSearch(search: string | null) {
	const [data, setData] = useState<any>([])

	useEffect(() => {
		if (search) {

			const filteredData = dataPerumahan.additionalData.filter(
				(item) =>
					item.Title.toLowerCase().includes(search!.toLowerCase()) ||
					item.Description.toLowerCase().includes(search!.toLowerCase()) ||
					item.Location.toLowerCase().includes(search!.toLowerCase())
			)
			setData(filteredData)
		} else {

			setData(null)
		}

		// Update data directly within useEffect
	}, [search]) // Dependency array: update only when search changes

	return {
		dataSearch: data,
		datapages: dataPerumahan.pages,
	}
}
