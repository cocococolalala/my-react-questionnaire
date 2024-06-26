import React, { FC } from "react";
import { useTitle } from "ahooks";
import { Spin, Typography } from "antd";
import styles from "./Common.module.scss";
import QuestionCard from "../../components/QuestionCard";
import ListSearch from "../../components/ListSearch";
import { useLoadQuestionListData } from "../../hooks/useLoadQuestionListData";

const { Title } = Typography;

const List: FC = () => {
  useTitle("小星问卷-我的问卷");

  const { data = {}, loading } = useLoadQuestionListData();
  const { list = [], total = 0 } = data;

 

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (<div style={{textAlign: 'center'}}>
          <Spin ></Spin>
        </div>)}
        {!loading && list.length > 0 && list.map((q: any) => {
          const { _id } = q;
          return <QuestionCard key={_id} {...q}></QuestionCard>;
        })}
      </div>
      <div className={styles.footer}>loadMore...上滑加载更多</div>
    </>
  );
};

export default List;
