import React, { FC, useEffect } from "react";
import { Space, Typography, Form, Input, Button, Checkbox } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.scss";

const { Title } = Typography;

const USERNAME_KEY = "USERNAME";
const PASSWORD_KEY = "PASSWORD";

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(PASSWORD_KEY, password);
}

function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(PASSWORD_KEY);
}

function getUserInfoFromStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  };
}

const Login: FC = () => {
  // const navigate = useNavigate();

  //第三方hooks
  const [form] = Form.useForm();
  //不传依赖时是在组件渲染完成的时候执行
  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({ username, password });
  }, []);

  const onFinish = (values: any) => {
    const { username, password, remember } = values || {};
    if (remember) {
      rememberUser(username, password);
    } else {
      deleteUserFromStorage();
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={3}>
            <UserAddOutlined />
          </Title>
          <Title level={3}>用户登录</Title>;
        </Space>
      </div>
      <div>
        <Form
          form={form}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名",
              },
              {
                type: "string",
                min: 5,
                max: 20,
                message: "字符长度在 5-20 之间",
              },
              {
                pattern: /^\w+$/,
                message: "只能是字母数字下划线",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 6, span: 16 }}
          >
            <Checkbox checked>记住我</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to="/register">注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
