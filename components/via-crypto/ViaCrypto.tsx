import { Button, Typography } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { GoBack } from "../donate/Donate";
import styles from "./ViaCrypto.module.scss";

function ViaCrypto() {
  return (
    <div>
      <GoBack title={"Via Crypto"} />
      <div>
        <Typography.Title level={5}>Connect Wallet</Typography.Title>
        <Typography.Text>
          Please note that we only support payment in BTC, ETH, & USDT
        </Typography.Text>
      </div>
      <Typography.Text>Select Wallet:</Typography.Text>
      <PageCards topic={"TrustWallet"} />
      <PageCards topic={"MetaMask"} />
      <div>
        <Typography.Text>
          By clicking continue, you agree to our terms of use and policy
          agreement
        </Typography.Text>

        <Button>CONTINUE</Button>
      </div>
    </div>
  );
}

export default ViaCrypto;

interface PageCardsProps {
  topic: string;
}

export const PageCards = (props: PageCardsProps) => {
  const { topic } = props;
  const router = useRouter();
  return (
    <div className={styles.card}>
      <div className="d-flex justify-space-between">
        <div className="d-flex my-2">
          <div className="d-flex-column ml-10">
            <Typography.Text className={styles.card_topic}>
              {topic}
            </Typography.Text>
          </div>
        </div>
        <div className="mt-5">
          <AiOutlineRight size={50} style={{ color: "#5dddb2" }} />
        </div>
      </div>
    </div>
  );
};
