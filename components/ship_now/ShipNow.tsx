import { Typography } from "antd";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import { FaShuttleVan, FaTruck } from "react-icons/fa";
import { GiDutchBike } from "react-icons/gi";
import { GoBack } from "../donate/Donate";
import { HomePageCards } from "../home/Home";

function ShipNow() {
  return (
    <div>
      <GoBack title={"Select Transportation"} />
      <div>
        <Typography.Text>
          Select the most appropriate Transportation for your luggage, choosing
          an inappropriate Trans may incur penalties
        </Typography.Text>
      </div>
      <HomePageCards
        icon={<GiDutchBike size={70} />}
        topic={"Motor Bike"}
        description={
          "For light weight items such as bags, shoes, documents and small household appliances"
        }
        route={`/`}
      />
      <HomePageCards
        icon={<AiFillCar size={70} />}
        topic={"Car"}
        description={
          "For items of car boot size such as a bag of rice, generator etc"
        }
        route={`/`}
      />
      <HomePageCards
        icon={<FaShuttleVan size={70} />}
        topic={"Mini Van"}
        description={
          "For big and bulky items such as refrigerators, washing machine etc"
        }
        route={`/`}
      />
      <HomePageCards
        icon={<FaTruck size={70} />}
        topic={"Truck"}
        description={
          "Ideal for heavy weight equipments and literally all types of equipment"
        }
        route={`/`}
      />
      <div>
        <Typography.Text>
          Get amazing discounts when you refer a friend Refer Now!
        </Typography.Text>
        <Typography.Text>Have complaints? Contact Us</Typography.Text>
      </div>
    </div>
  );
}

export default ShipNow;
