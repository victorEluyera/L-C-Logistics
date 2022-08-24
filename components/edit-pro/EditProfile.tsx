import { Button, Form, Input, Typography } from "antd";
import React from "react";
import { GoBack } from "../donate/Donate";

const { Text, Title } = Typography;

const { Item } = Form;
function EditProfile() {
  return (
    <div>
      <GoBack title={"Edit Profile"} />
      <div>
        <Text>
          Change the details you wish to alter and click the save button below
        </Text>
      </div>
      <Form layout="vertical">
        <Form.Item name={"firstname"} label={<Text>First Name </Text>}>
          <Input bordered={false} placeholder="John" />
        </Form.Item>

        <Item name={"lastname"} label={<Text>Last Name</Text>}>
          <Input bordered={false} placeholder="Doe" />
        </Item>

        <Item name={"email"} label={<Text>Email Address </Text>}>
          <Input bordered={false} placeholder="johndoe@larrymail.com" />
        </Item>

        <Item name={"phone"} label={<Text>Phone Number </Text>}>
          <Input bordered={false} placeholder="(+234)" />
        </Item>

        <Item name={"passwords"} label={<Text>Password</Text>}>
          <Input
            bordered={false}
            placeholder="Please enter at least 8 digits"
          />
        </Item>
        <Item name="refcode" label={<Text>Invite (Optional) </Text>}>
          <Input
            bordered={false}
            placeholder="Please enter your referral invite code"
          />
        </Item>

        <Item>
          <Button type="primary" htmlType="submit" block>
            SignUp
          </Button>
        </Item>
      </Form>
    </div>
  );
}

export default EditProfile;
