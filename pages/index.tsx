import { Typography } from "antd";
import type { NextPage } from "next";
import HomePages from "../components/home/Home";

const { Title, Text } = Typography;
const Home: NextPage = () => {
  return (
    <div className="text-center">
      <HomePages />
    </div>
  );
};

export default Home;
