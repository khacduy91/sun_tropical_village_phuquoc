import Layout from "../components/Layout/Layout";
import AboutKemBeach from "../components/HomePage/AboutKemBeach";
import BillComment from "../components/HomePage/BillComment";
import Utilities from "../components/HomePage/Utilities";
import Slider from "../components/HomePage/Slider";
import Project from "../components/HomePage/Project";
import Design from "../components/HomePage/Design";
import Sungroup from "../components/HomePage/Sungroup";
import Form from "../components/HomePage/Form";

export default function Home() {
  return (
    <Layout>
      <Slider />
      <AboutKemBeach />
      <BillComment />
      <Project />
      <Utilities />
      <Design />
      <Sungroup />
      <Form />
    </Layout>
  );
}
