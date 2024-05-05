import React,{useEffect} from "react";
import logo from "./logo.svg";
import List1 from "./list1";
import List2 from "./list2";
import "./index.css";
import Demo1 from "./stateDemo1";
import Demo2 from "./stateDemo2";
import ImmerDemo from './immerDemo'
// import { useTitle } from "./hooks/useTitle";
import { useMouse } from "./hooks/useMouse";
import { useGetInfo } from "./hooks/useGetInfo";
import { useTitle } from "ahooks";

function App() {
 

  useTitle('my page2')//自定义hook
  // const {x,y} = useMouse()
   const {loading, info} = useGetInfo()
 
 
  return (
    <div>
      <p>{loading ? '加载中' : info}</p>
      {/* <p>{x} {y}</p> */}
      {/* <List1></List1> */}
      {/* <List2></List2> */}
      {/* <Demo1></Demo1> */}
      {/* <Demo2></Demo2> */}
      {/* <ImmerDemo></ImmerDemo> */}
    </div>
  );
}

export default App;
