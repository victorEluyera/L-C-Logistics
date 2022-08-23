import { Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { GoBack } from "../donate/Donate";
import styles from "./Wallet.module.scss";

function Wallet() {
  return (
    <div>
      <GoBack title={"My Wallet"} />
      <div className="d-flex justify-space-between pa-5">
        <Avatar size={50} />
        <div>
          <Typography.Text className={styles.balance}>
            Wallet Balance
          </Typography.Text>
          <Typography.Text className={styles.price}>N250,000</Typography.Text>
        </div>
      </div>
      <div className="pb-3">
        <Typography.Text className={styles.topic}>
          Wallet Funding Options
        </Typography.Text>
      </div>
      {/* <HomePageCards
        topic={"Deposit Via Card"}
        description={"Fund your wallet using MasterrCard or Visa"}
        route={""}
      />
      <HomePageCards
        topic={"Deposit Via Crypto"}
        description={"Connect using TrustWallet or MetaMask"}
      /> */}
    </div>
  );
}

export default Wallet;
