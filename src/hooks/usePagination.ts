import { dataPerumahan } from '../data/dummy/dataPerumahanDummy'

export default function usePagination(page: number) {
	const initialIdx = page * 12
	const lastIdx = initialIdx + 11
	const data = dataPerumahan.additionalData.filter(
		(item, idx) => idx >= initialIdx && idx <= lastIdx && item
	)

	return {
		data: data,
		pages: Math.ceil(dataPerumahan.additionalData.length / 12),
	}
}
