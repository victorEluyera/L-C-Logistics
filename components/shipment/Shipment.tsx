import { Typography } from "antd";
import React from "react";
import { GoBack } from "../donate/Donate";
import { HomePageCards } from "../home/Home";

function Shipment() {
  return (
    <div>
      <GoBack title={"Select Category"} />
      <HomePageCards
        topic={"Ship Now"}
        description={"Book a shipment now! So easy to do"}
      />
      <HomePageCards
        topic={"Track a shipment"}
        description={"Book a shipment now! So easy to do"}
      />

      <div className="text-center mt-15">
        <Typography.Text>
          Get amazing discounts when you refer a friend{" "}
          <span style={{ color: "#5DDDB2" }}>Refer Now!</span>
        </Typography.Text>
      </div>
    </div>
  );
}

export default Shipment;
