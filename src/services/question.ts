import axios, { responseDataType } from "./ajax";

type searchOption = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
}

//获取单个问卷信息
export async function getQuestionService(
  id: string
): Promise<responseDataType> {
  const url = `/api/question/${id}`;
  const data = (await axios.get(url)) as responseDataType;
  return data;
}

//创建问卷
export async function createQuestionService(): Promise<responseDataType> {
  const url = "/api/question";
  const data = (await axios.post(url)) as responseDataType;
  return data;
}

//查询问卷列表
export async function getQuestionListService(
  opt: Partial<searchOption>
): Promise<responseDataType> {
  const url = "/api/question";
  const data = (await axios.get(url,{
    params: opt
  })) as responseDataType;
  return data;
}
