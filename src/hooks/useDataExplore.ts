import { useMemo } from 'react'
import  dataPerumahan  from '../data/dataPerumahanDummy.json'

export function useDataExplore() {
	const dataExplore = useMemo(() => dataPerumahan, []) // Menyimpan dataPerumahan dalam useMemo

	return { dataExplore }
}
