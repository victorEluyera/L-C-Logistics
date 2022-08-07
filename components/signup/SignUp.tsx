import { Button, Form, Input, Space, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./SignUp.module.scss";

const { Text, Title } = Typography;
const { Item } = Form;

function SignUp() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className="d-flex justify-space-between">
        <Title className={styles.signup_head}> Sign up </Title>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>
      <div className={styles.form}>
        <SignUpForm />
      </div>
      <div className="text-center ">
        <Space className={styles.info}>
          <Text>
            By clicking ‘sign up’, you are agreeing to our{" "}
            <Link href="/#">
              <a className={styles.terms}>terms of service</a>
            </Link>{" "}
            and{" "}
            <Link href="/#">
              <a className={styles.terms}>privacy policy</a>
            </Link>
          </Text>
        </Space>
      </div>
    </div>
  );
}

export default SignUp;

export const SignUpForm = () => {
  return (
    <div className={styles.form}>
      <Form autoComplete="off">
        <Item>
          <Text className={styles.labels}>First Name </Text>

          <Input bordered={false} placeholder="John" className={styles.input} />
        </Item>

        <Item>
          <Text className={styles.labels}>Last Name</Text>

          <Input bordered={false} placeholder="Doe" className={styles.input} />
        </Item>

        <Item>
          <Text className={styles.labels}>Email Address </Text>

          <Input
            bordered={false}
            placeholder="johndoe@larrymail.com"
            className={styles.input}
          />
        </Item>

        <Item>
          <Text className={styles.labels}>Phone Number </Text>

          <Input
            bordered={false}
            placeholder="(+234)"
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
          <Text className={styles.labels}>Invite (Optional) </Text>

          <Input
            bordered={false}
            placeholder="Please enter your referral invite code"
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
            SignUp
          </Button>
        </Item>
      </Form>
    </div>
  );
};
