import { useRequest } from "ahooks";
import { useSearchParams } from "react-router-dom";
import { getQuestionListService } from "../services/question";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

type OptionType = {
  isStar: boolean
  isDeleted: boolean
}
export function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const {isStar, isDeleted} = opt
  const [seaechParams] = useSearchParams();
  const {loading,data,error} = useRequest(async () => {
    const keyword = seaechParams.get(LIST_SEARCH_PARAM_KEY) || ''
    const data = await getQuestionListService({keyword,isStar,isDeleted})
    return data
  },{
    refreshDeps:[seaechParams]
  })

  return {loading,data,error}
}
