import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { GoBack } from "../donate/Donate";

function ForgetPassword() {
  return (
    <div>
      <GoBack title="Forgot Password?" />
      <div>
        <Typography.Text>
          Please enter below your registered email address and you will receive
          a reset password which you may later change
        </Typography.Text>
        <Form>
          <Input />
          <Button>Send</Button>
        </Form>
      </div>
    </div>
  );
}

export default ForgetPassword;
