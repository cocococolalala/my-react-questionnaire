import React, { FC, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Typography } from "antd";
import styles from "./Home.module.scss";

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const navigate = useNavigate();
  // function clickHandler() {
  //   navigate({
  //     pathname: '/login',
  //     search: 'b=10'

  //   })
  // }
  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已累计创建问卷 100 份, 发布问卷 90 份, 收到答卷 980 份
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => navigate("/manage/list")}>
            开始使用
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
