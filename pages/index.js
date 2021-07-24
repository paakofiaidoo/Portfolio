import Layout from "./components/Layout";
import Intro from "./components/Intro";
import Browser from "./components/Browser";

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
