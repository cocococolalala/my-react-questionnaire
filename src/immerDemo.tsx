import React, { useState, FC } from "react";
import { useImmer } from 'use-immer'

const Demo: FC = () => {
  const [userInfo, setUserInfo] = useImmer({
    name: "coco",
    age: 20,
    height: 188,
  });

 

  function changeAge() {
    // setUserInfo({
    //   ...userInfo,
    //   age: 21,
    // });
    setUserInfo(
      draft => {
        draft.age = 25
      }) 
  } 
  const[list, setList] = useImmer(['x','y'])
  function changeArray() {
    setList(draft => {draft.push('z')})
  }
  return (
    <>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={changeAge}>修改年龄</button>
      <div>{JSON.stringify(list)}</div>
      <button onClick={changeArray}>修改数组</button>
    </>
  );
};

export default Demo;
