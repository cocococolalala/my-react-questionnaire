import React, { FC, useEffect } from "react";
import "./questionCard.css";

//ts自定义类型
type PropsType = {
  id: string;
  title: string;
  isPublished: boolean;
  deleteQuestion: (id: string) => void;
  publishQuestion: (id: string) => void;
};

const questionCard: FC<PropsType> = (props) => {
  const { id, title, isPublished, deleteQuestion, publishQuestion } = props;

  function edit(id: string) {
    publishQuestion(id);
  }

  function del(id: string) {
    deleteQuestion(id);
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(() => {
  //   console.log("questionCard Mounted");
  //   return () => {
  //     console.log("questionCard Unmounted", id);
  //   };
  // }, []);

  return (
    <div key={id} className="item">
      <strong>{title}</strong>
      &nbsp;
      {isPublished ? (
        <span style={{ color: "green" }}>已发布</span>
      ) : (
        <span style={{ color: "red" }}>未发布</span>
      )}
      <button
        onClick={() => {
          edit(id);
        }}
      >
        编辑问卷
      </button>
      <button
        onClick={() => {
          del(id);
        }}
      >
        删除问卷
      </button>
    </div>
  );
};

export default questionCard;
