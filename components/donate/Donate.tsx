import { Typography } from "antd";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./Donate.module.scss";

const { Title, Text } = Typography;

function Donate() {
  return (
    <div>
      <div className={styles.go_back}>
        <BsArrowLeft className={styles.arrow} />
        <Title level={4} className={styles.head}>
          Donate
        </Title>
      </div>
      <div className="pa-5">
        <div className="text-center">
          <Title level={5}>Make a Donation</Title>
          <Text>
            Many people complain of expensive logistics services, so we made up
            this feature to help lessen our service cost. For enquiries about
            the openess and transparency of this feature, mail us at
            olanrewajuadek@gmail.com
          </Text>
        </div>
        <div>
          <Title level={5}>To Donate:</Title>
          <Text>
            In Fiat currency: Kindly make bank transfers to - GTBank -
            0422771015 - Adekunle Olanrewaju James
            <br />
            <br />
            In Cryptocurrency: BTC - bc27fdsejgshyjk,jfdsfghjkjuhyrsdfghjg{" "}
            <br /> ETH - Ox23fgsedrftgyhukljrdesxdcfghjkmnhv
          </Text>
        </div>
        <Title level={5} className="text-center mt-7">
          Thank You!
        </Title>
      </div>
    </div>
  );
}

export default Donate;
