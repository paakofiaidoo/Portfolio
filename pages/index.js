import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Browser from "./components/Application";

const Home = () => {
  return (
    <Layout>
      <Browser>
        <Intro />
      </Browser>
    </Layout>
  );
};

export default Home;
