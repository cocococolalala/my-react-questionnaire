import { useState, useEffect } from "react";
export function useMouse() {
  //获取鼠标位置 自定义hooks
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mouseMoveHandler = (event: MouseEvent) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  useEffect(() => {
    //监听鼠标的移动
    window.addEventListener("mousemove", mouseMoveHandler);

    //组件销毁时,自己绑定的事件一定要自己解绑DOM事件,否则会发生内存泄漏
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  return { x, y };
}
