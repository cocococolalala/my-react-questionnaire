import React, { FC, useState } from "react";
import { useTitle } from "ahooks";
import { Typography, Empty, Table, Tag, Button, Space, Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import styles from "./Common.module.scss";

const { Title } = Typography;
const {confirm} = Modal
const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: true,
    isStar: true,
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
    isStar: true,
    answerCount: 3,
    createAt: "3月10日 12:46",
  },
];
const Trash: FC = () => {
  useTitle("小心问卷-回收站");

  const [questionList, setQuestionList] = useState(rawQuestionList);

  const tableColumn = [
    {
      title: "标题",
      dataIndex: "title",
    },
    {
      title: "是否发布",
      dataIndex: "isPublished",
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        );
      },
    },
    {
      title: "答卷",
      dataIndex: "answerCount",
    },
    {
      title: "创建时间",
      dataIndex: "createAt",
    },
  ];

  //记录选中的id
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  function del() {
    confirm({
      title:"确认彻底删除该问卷?",
      icon: <ExclamationCircleOutlined/>,
      content:'删除以后不可找回',
      onOk: () => alert(`删除${JSON.stringify(selectedIds)}`)

    })

  }

  const TableElem = (
    <>
    <div style={{marginBottom: '16px'}}>
      <Space>
        <Button type="primary" disabled={selectedIds.length === 0 ? true : false}>恢复</Button>
        <Button danger disabled={selectedIds.length === 0 ? true : false} onClick={del}>彻底删除</Button>
      </Space>
    </div>
    <Table
            dataSource={questionList}
            columns={tableColumn}
            pagination={false}
            rowKey={(q) => q._id}
            rowSelection={{
              type: "checkbox",
              onChange: (selectedRowKeys) => {
                setSelectedIds(selectedRowKeys as string[]);
              },
            }}
          />
    </>
  )

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && TableElem}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Trash;
