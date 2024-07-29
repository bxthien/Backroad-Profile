import "./App.css";
import { Layout } from "antd";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MyExp from "./components/MyExp";
import TopRepo from "./components/TopRepo";

const { Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header />
      <Introduction />
      <AboutMe />
      <MyExp />
      <TopRepo />
      <Footer>bye</Footer>
    </Layout>
  );
}

export default App;
