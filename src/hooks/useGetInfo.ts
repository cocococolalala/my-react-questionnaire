import { useEffect, useState } from "react";

function getInfo(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Date.now().toString());
    }, 1500);
  });
}

export function useGetInfo() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState("");

  useEffect(() => {
       getInfo().then( info => {
        setLoading(false)
        setInfo(info)
       })
  }, []);

  return {loading,info}
}
