import React, { useState } from "react";
import type { FC } from "react";
const Demo: FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: "coco",
    age: 20,
    height: 188,
  });
  
  function changeAge() {
    setUserInfo({
      ...userInfo,
      age: 21,
    });
  }

  const [list,setList] = useState(['x','y'])
  function changeArray() {
    setList([...list,'z'])
  }

  return (
    <div>
      <h2>state 不可变数据</h2>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>修改年龄</button>
      <div>{JSON.stringify(list)}</div>
      <button onClick={changeArray}>修改数组</button>
      
    </div>
  );
};
export default Demo;
