import "./App.css";
import { Layout } from "antd";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyExp from "./components/MyExp";
import TopRepo from "./components/TopRepo";
import Footer from "./components/Footer";

function App() {
  return (
    <Layout>
      <Header />
      <Introduction />
      <AboutMe />
      <MyExp />
      <TopRepo />
      <Footer />
    </Layout>
  );
}

export default App;
