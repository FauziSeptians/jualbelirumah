import { useEffect, useState } from "react";

const ShowSearchBar = ["/", "/Property"];

export function useCheckingSearchBar(path: string) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const status = ShowSearchBar.includes(path);

    setShow(status);
  }, [path]);


  return {
    show: show,
  };
}
