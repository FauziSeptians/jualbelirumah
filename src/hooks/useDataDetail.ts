import { dataPerumahan } from "../data/dummy/dataPerumahanDummy";

export function useDataDetail(Id: number) {
  const DataDetail = dataPerumahan.additionalData.filter(
    (item) => item.Id == Id,
  );

  return {
    DataDetail: DataDetail[0],
  };
}
