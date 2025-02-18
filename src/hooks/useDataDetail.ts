import dataPerumahan  from "../data/dataPerumahanDummy.json";

export function useDataDetail(Id: number) {
  const DataDetail = dataPerumahan.additionalData.filter(
    (item) => item.Id == Id,
  );

  return {
    DataDetail: DataDetail[0],
  };
}
