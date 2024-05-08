import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../services/question";
import { useRequest } from "ahooks";

export function useLoadQuestionData() {
  const { id = "" } = useParams();
  async function load() {
    const data = await getQuestionService(id);
    return data;
  }

  const { loading, data, error } = useRequest(load);
  // const [questionData, setQuestionData] = useState({});
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fn(id: string) {
  //     const res = await getQuestionService(id);
  //     setQuestionData(res);
  //     setLoading(false);
  //   }
  //   fn(id);
  // }, []);

  return { loading, data , error };
}
