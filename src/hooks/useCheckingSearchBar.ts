import { useEffect, useState } from "react";

const ShowSearchBar = ["/", "/Property"];

export function useCheckingSearchBar(path: string) {
  const [show, setShow] = useState(false);

  console.log(path);

  useEffect(() => {
    const status = ShowSearchBar.includes(path);

    setShow(status);
  }, [path]);

  console.log(show);

  return {
    show: show,
  };
}
