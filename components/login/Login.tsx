import { Alert, Button, Form, Input, Space, Typography } from "antd";
import Link from "next/link";
import React from "react";
import { TloginPayload } from "../signup/query";
import styles from "./Login.module.scss";

const { Text, Title } = Typography;
const { Item } = Form;

interface Props {
  handleSubmit: (value: TloginPayload) => void;
  errorMessage: boolean;
  isLoading: boolean;
}

function Login(props: Props) {
  const { handleSubmit, isLoading, errorMessage } = props;
  return (
    <div className={styles.container}>
      <div className="d-flex justify-space-between">
        <Title className={styles.login_head}> Login </Title>
      </div>
      <div className={styles.form}>
        <LoginForm
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      </div>
      <div className="text-center ">
        <Link href="/#">
          <a className="d-block my-10">Forgot Password?</a>
        </Link>

        <Space>
          <Text>Don’t have an account? </Text>
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </Space>
      </div>
    </div>
  );
}

export default Login;

interface LoginProps {
  handleSubmit: (value: TloginPayload) => void;
  errorMessage: boolean;
  isLoading: boolean;
}

export const LoginForm = (props: LoginProps) => {
  const { handleSubmit, errorMessage, isLoading } = props;
  const [form] = Form.useForm();

  const onSubmit = () => {
    const value = form.getFieldsValue();
    handleSubmit(value);
  };

  return (
    <div className={styles.form}>
      {errorMessage && <Alert message="Invalid Credentials" type="warning" />}
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          name={"email"}
          label={<Text className={styles.labels}>Email Address </Text>}
        >
          <Input
            bordered={false}
            placeholder="johndoe@larrymail.com"
            className={styles.input}
          />
        </Form.Item>

        <Form.Item
          name={"passwords"}
          label={<Text className={styles.labels}>Password</Text>}
        >
          <Input
            bordered={false}
            placeholder="Please enter at least 8 digits"
            className={styles.input}
          />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          block
          className={styles.Button}
          loading={isLoading}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
