import React, { FC, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { useTitle } from "ahooks";
import { Typography } from "antd";
import styles from "./Common.module.scss";
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";

const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createAt: "3月10日 12:46",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: false,
    isStar: true,
    answerCount: 4,
    createAt: "3月10日 12:46",
  },
  {
    _id: "q3",
    title: "问卷3",
    isPublished: false,
    isStar: false,
    answerCount: 3,
    createAt: "3月10日 12:46",
  },
  {
    _id: "q4",
    title: "问卷4",
    isPublished: false,
    isStar: false,
    answerCount: 6,
    createAt: "3月10日 12:46",
  },
];

const { Title } = Typography;

const List: FC = () => {
  useTitle("小星问卷-我的问卷");

  const [questionList, setQuestionList] = useState(rawQuestionList);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}><ListSearch /></div>
      </div>
      <div className={styles.content}>
        {questionList.map((q) => {
          const { _id } = q;
          return <QuestionCard key={_id} {...q}></QuestionCard>;
        })}
      </div>
      <div className={styles.footer}>loadMore...上滑加载更多</div>
    </>
  );
};

export default List;
