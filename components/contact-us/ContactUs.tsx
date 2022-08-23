import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { GoBack } from "../donate/Donate";

const { Text, Title } = Typography;
function ContactUs() {
  return (
    <div>
      <GoBack title={"Contact Us"} />
      <div>
        <Typography.Text>
          Fill out the necessary details below in all honesty and our agent will
          contact you in 24 working hours
        </Typography.Text>
      </div>
      <Form layout="vertical">
        <Form.Item name={"email"} label={<Text>Email Address </Text>}>
          <Input bordered={false} placeholder="johndoe@larrymail.com" />
        </Form.Item>

        <Form.Item name={"passwords"} label={<Text>Password</Text>}>
          <Input
            bordered={false}
            placeholder="Please enter at least 8 digits"
          />
        </Form.Item>
        <Form.Item name={"passwords"} label={<Text>Password</Text>}>
          <Input.TextArea
            bordered={false}
            placeholder="Please enter at least 8 digits"
          />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          send
        </Button>
      </Form>
    </div>
  );
}

export default ContactUs;
