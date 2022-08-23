import { Avatar, Drawer, Typography } from "antd";
import { useRouter } from "next/router";
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
  let greet;
  if (new Date().getHours() < 12) {
    greet = "Good Morning ";
  }
  if (new Date().getHours() < 16) {
    greet = "Good Afternoon ";
  }
  if (new Date().getHours() > 16) {
    greet = "Good Evening ";
  }
  return (
    <div>
      {greet && <HomePageTops greet={greet} />}
      <HomePageDown />
      <NavBar />
    </div>
  );
}

export default HomePages;

interface HomePageTopsProps {
  greet: string;
}

export const HomePageTops = (props: HomePageTopsProps) => {
  const { greet } = props;
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
              <Text className={styles.greeting}>{greet}</Text>
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
          route={`/wallets`}
        />
        <HomePageCards
          icon={<BsCartPlusFill size={70} />}
          topic={"Shipment"}
          description={"Book a shipment now! So easy to do"}
          route={`/shipment`}
        />
        <HomePageCards
          icon={<BsLockFill size={70} />}
          topic={"Tracking"}
          description={"Track the location of your goods"}
          route={`/tracking`}
        />
        <HomePageCards
          icon={<FaEnvelopeOpenText size={70} />}
          topic={"Donate"}
          description={"Edit and update your profile"}
          route={`/donate`}
        />
        <HomePageCards
          icon={<BsFillTelephoneFill size={70} />}
          topic={"Contact Us"}
          description={"Speak or chat with a customer agent"}
          route={`/contact`}
        />
      </div>
    </div>
  );
};

interface Props {
  icon?: any;
  topic: string;
  description: string;
  route: string;
}

export const HomePageCards = (props: Props) => {
  const { icon, topic, description, route } = props;
  const router = useRouter();
  return (
    <div className={styles.card} onClick={() => router.push(route)}>
      <div className="d-flex justify-space-between">
        <div className="d-flex my-2">
          {icon && <div className={styles.card_icon}>{icon}</div>}
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
