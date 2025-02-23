import dataPerumahan from '../data/dataPerumahanDummy.json'
import { useQuery } from 'react-query'
import { toGenerateRandomNumber } from '../utils/toGenerateRandomNumber'
import { useMemo } from 'react'

function filterDataRumah(filter: string, data: any, randomNumber: any) {
  if (filter === "Recomended") {
    return randomNumber.map((item: any) => data.additionalData[item]);
  }
  return data.additionalData?.sort((a: any, b: any) => b.Price - a.Price);
}

export function useDataPerumahanRecomendationPopular({
  filter = "Recomended"
}: { filter: string }) {
  const { data, isLoading, isError } = useQuery(
    ['dataRecomendation', filter], 
    () => dataPerumahan,
  )

  const randomNumber = useMemo(
    () => toGenerateRandomNumber(4, 0, dataPerumahan.additionalData.length - 1),
    [filter]  
  )

  const dataFilter = useMemo(() => {
    if (!data) return []
    return filterDataRumah(filter, data, randomNumber);
  }, [data, randomNumber, filter]) 

  return {
    data: dataFilter ?? [],
    isLoading,
    isError,
  }
}