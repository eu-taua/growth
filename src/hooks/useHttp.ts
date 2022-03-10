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
        const data = await fetch(url, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        });
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
