import { Avatar, Drawer, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import {
  BsCartPlusFill,
  BsFillTelephoneFill,
  BsFillWalletFill,
  BsLockFill,
} from "react-icons/bs";
import { FaEnvelopeOpenText, FaWallet } from "react-icons/fa";
import { VscBellDot, VscThreeBars } from "react-icons/vsc";
import NavBar from "../navbar/NavBar";
import styles from "./Home.module.scss";

const { Text, Title } = Typography;

function HomePages() {
  return (
    <div>
      <HomePageTops />
      <HomePageDown />
      <NavBar />
    </div>
  );
}

export default HomePages;

export const HomePageTops = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={styles.root}>
      <div>
        <>
          <VscThreeBars
            type="primary"
            onClick={showDrawer}
            className={styles.menu}
          />

          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </>
        <div className="d-flex justify-space-between">
          <div className="d-flex mt-10">
            <Avatar size={80} />
            <div className="d-block">
              <Text className={styles.greeting}>Good Morning</Text>
              <Text className={styles.name}>Vicky</Text>
            </div>
          </div>
          <div className="mt-12">
            <VscBellDot size={60} />
          </div>
        </div>
      </div>
      <div className={styles.wallet}>
        <div>
          <Text className={styles.wallet_text}>Wallet Balance</Text>
          <FaWallet size={40} />
        </div>
        <div>
          <Title level={3} className={styles.price}>
            N45,000,000
          </Title>
        </div>
      </div>
    </div>
  );
};

export const HomePageDown = () => {
  return (
    <div>
      <div className={styles.option_text}>
        <Title level={5} className={styles.text}>
          Get on the go!
        </Title>
      </div>
      <div>
        <HomePageCards
          icon={<BsFillWalletFill size={70} />}
          topic={"Wallet"}
          description={"Fund your wallet in two simple steps"}
        />
        <HomePageCards
          icon={<BsCartPlusFill size={70} />}
          topic={"Shipment"}
          description={"Book a shipment now! So easy to do"}
        />
        <HomePageCards
          icon={<BsLockFill size={70} />}
          topic={"Tracking"}
          description={"Track the location of your goods"}
        />
        <HomePageCards
          icon={<FaEnvelopeOpenText size={70} />}
          topic={"Donate"}
          description={"Edit and update your profile"}
        />
        <HomePageCards
          icon={<BsFillTelephoneFill size={70} />}
          topic={"Contact Us"}
          description={"Speak or chat with a customer agent"}
        />
      </div>
    </div>
  );
};

interface Props {
  icon: any;
  topic: string;
  description: string;
}

export const HomePageCards = (props: Props) => {
  const { icon, topic, description } = props;
  return (
    <div className={styles.card}>
      <div className="d-flex justify-space-between">
        <div className="d-flex my-2">
          <div className={styles.card_icon}>{icon}</div>
          <div className="d-flex-column ml-10">
            <Text className={styles.card_topic}>{topic}</Text>
            <Text className={styles.card_desc}>{description}</Text>
          </div>
        </div>
        <div className="mt-5">
          <AiOutlineRight size={50} style={{ color: "#5dddb2" }} />
        </div>
      </div>
    </div>
  );
};
