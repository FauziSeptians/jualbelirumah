import { useState } from "react";
import { dataPerumahan } from "../data/dummy/dataPerumahanDummy";

export function useDataExplore() {
  const [dataExplore] = useState(dataPerumahan);
  return { dataExplore };
}
