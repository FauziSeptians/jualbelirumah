import { useEffect, useState } from "react";
import { dataPerumahanRecomendation } from "../data/dummy/dataPerumahanDummy";
import { CardTypes } from "../types/CardTypes";

export function useDataPerumahanRecomendation() {
  const [dataRecomendation, setDataRecomendation] = useState<CardTypes>(
    dataPerumahanRecomendation
  );

  useEffect(() => {
    setDataRecomendation(dataPerumahanRecomendation);
  }, []);

  console.log(dataRecomendation);

  return { dataRecomendation };
}
