import React, { FC, useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { Input } from "antd";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

const { Search } = Input;

const ListSearch: FC = () => {
  const [value, setValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || "";
    setValue(curVal);
  }, [searchParams]);
  
  function handleSearch(value: string) {
    //跳转页面
    navigate({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });
  }

  return (
    <Search
      size="large"
      allowClear
      placeholder="请输入关键字"
      onSearch={handleSearch}
      onChange={handleChange}
      value={value}
      style={{ width: "260px" }}
    />
  );
};

export default ListSearch;
