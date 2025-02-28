import { useQuery } from 'react-query'
import  dataGalleryPict  from "../data/dataGalleryPict.json"

export function useDataGallery() {
	return useQuery('data', () => dataGalleryPict, {
		cacheTime: 60000, // Contoh: cache berlaku selama 60 detik
	})
}
