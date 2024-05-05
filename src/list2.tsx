import React, { FC, useState, useEffect } from "react";
import { useImmer } from "use-immer";
import "./list1.css";
import QuestionCard from "./components/questionCard";

const List2: FC = () => {
  useEffect(() => {
    console.log("加载ajax");
    return () => {
      console.log("xiaohui")
    }
   }, []);
  // 数组是依赖

  const [questionList, setQuestionList] = useImmer([
    { id: "q1", title: "问卷1", isPublished: true },
    { id: "q2", title: "问卷2", isPublished: false },
    { id: "q3", title: "问卷3", isPublished: false },
    { id: "q4", title: "问卷4", isPublished: false },
  ]);

  // useEffect(() => {
  //   console.log("questionList changed");
  // }, [questionList]);

  function add() {
    const r = Math.random().toString().slice(-3);
    setQuestionList(
      (draft) => {
        draft.push({
          id: "q" + r,
          title: "问卷" + r,
          isPublished: false,
        });
      }
      // questionList.concat({
      //   id: "q" + r,
      //   title: "问卷" + r,
      //   isPublished: false,
      // })
    );
  }
  function deleteQuestion(id: string) {
    setQuestionList(
      (draft) => {
        const index = draft.findIndex((q) => q.id === id);
        draft.splice(index, 1);
      }
      // questionList.filter((q) => {
      //   if (q.id === id) return false;
      //   else return true;
      // })
    );
  }

  function publishQuestion(id: string) {
    setQuestionList(
      (draft) => {
        const q = draft.find((item) => item.id === id);
        if (q) q.isPublished = true;
      }
      // questionList.map((q) => {
      //   if (q.id !== id) return q;
      //   else return { ...q, isPublished: true };
      // })
    );
  }

  return (
    <div>
      <h1>问卷列表页2</h1>
      <div>
        {questionList.map((question) => {
          const { id, title, isPublished } = question;
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={deleteQuestion}
              publishQuestion={publishQuestion}
            ></QuestionCard>
          );
        })}
        <div>
          <button onClick={add}>新增问卷</button>
        </div>
      </div>
    </div>
  );
};

export default List2;
