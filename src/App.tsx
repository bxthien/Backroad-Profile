import "./App.css";
import { Layout } from "antd";
import Introduction from "./components/Introduction";
import Header from "./components/Header";

const { Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header />
      <Introduction />
      <Footer>bye</Footer>
    </Layout>
  );
}

export default App;
