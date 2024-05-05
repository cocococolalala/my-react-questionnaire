//没有jsx片段 .ts
import { useEffect } from "react";
export function useTitle(title: string) {
  useEffect(()=>{
    document.title = title
  },[])
}