import { Button, Form, Input, Space, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./Login.module.scss";

const { Text, Title } = Typography;
const { Item } = Form;

function Login() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className="d-flex justify-space-between">
        <Title className={styles.login_head}> Login </Title>
      </div>
      <div className={styles.form}>
        <LoginForm />
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

export const LoginForm = () => {
  return (
    <div className={styles.form}>
      <Form autoComplete="off">
        <Item>
          <Text className={styles.labels}>Email Address </Text>

          <Input
            bordered={false}
            placeholder="johndoe@larrymail.com"
            className={styles.input}
          />
        </Item>

        <Item>
          <Text className={styles.labels}>Password</Text>
          <Input
            bordered={false}
            placeholder="Please enter at least 8 digits"
            className={styles.input}
          />
        </Item>

        <Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className={styles.Button}
          >
            Login
          </Button>
        </Item>
      </Form>
    </div>
  );
};
