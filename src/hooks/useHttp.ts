import { useEffect, useState } from "react";
import { Ipostcard } from "../utils/interfaces";

export const useHttp = (
  url: string
): { data: Ipostcard[] | undefined; err: boolean } => {
  const [data, setData] = useState<Ipostcard[]>();
  const [err, setErr] = useState<boolean>(false);
  useEffect(() => {
    async function get() {
      try {
        const data = await fetch(url);
        const result = await data.json();
        setData(result);
      } catch (error) {
        setErr(true);
      }
    }
    get();
  }, []);
  return {
    data,
    err,
  };
};
