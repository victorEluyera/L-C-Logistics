import { Typography } from "antd";
import type { NextPage } from "next";

const { Title, Text } = Typography;
const Home: NextPage = () => {
  return (
    <div className="text-center">
      <Title>Larry and Comrade</Title>
      <Title level={4}>This pages is coming soon....</Title>
    </div>
  );
};

export default Home;
