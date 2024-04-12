import { useEffect, useState } from "react";
import { dataPerumahan } from "../data/dummy/dataPerumahanDummy";
import { dataPerumahanType } from "../types/CardTypes";

export default function useDataSearch(search: string | null) {
  const [data, setData] = useState<dataPerumahanType[]>([]);

  useEffect(() => {
    if (search) {
      const filteredData = dataPerumahan.additionalData.filter((item) =>
        item.Title.toLowerCase().includes(search!.toLowerCase())
      );
      setData(filteredData);
    } else {
      setData(dataPerumahan.additionalData);
    }

    // Update data directly within useEffect
  }, [search]); // Dependency array: update only when search changes

  console.log(data); // Log data after potential update

  return {
    dataPerumahan: data,
    pages: dataPerumahan.pages,
  };
}
