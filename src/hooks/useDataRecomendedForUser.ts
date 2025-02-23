import dataPerumahan from '../data/dataPerumahanDummy.json'
import { useQuery } from 'react-query'
import { toGenerateRandomNumber } from '../utils/toGenerateRandomNumber'
import { useMemo, useCallback, useState } from 'react'

export function useDataPerumahanRecomendationForUser() {
  const { data, isLoading, isError, refetch } = useQuery(
    'dataRecomendation',
    () => dataPerumahan,
    {
      cacheTime: 60000,
      staleTime: 0, // Memastikan data dianggap stale segera
    }
  )

  // Menggunakan state untuk menyimpan timestamp terakhir refetch
  const [refreshKey, setRefreshKey] = useState(0)

  // Custom refetch yang memperbarui refreshKey
  const handleRefetch = useCallback(async () => {
    await refetch()
    setRefreshKey(prev => prev + 1)
  }, [refetch])

  // Menggunakan refreshKey sebagai dependency
  const randomNumber = useMemo(
    () => toGenerateRandomNumber(3, 0, dataPerumahan.additionalData.length - 1),
    [refreshKey] // Akan generate ulang ketika refreshKey berubah
  )

  const dataFilter = useMemo(() => {
    if (!data) return []
    return randomNumber.map((item) => data.additionalData[item])
  }, [data, randomNumber]) // Tidak perlu memasukkan refetch sebagai dependency

  return {
    data: dataFilter,
    isLoading,
    isError,
    refetch: handleRefetch // Menggunakan custom refetch
  }
}