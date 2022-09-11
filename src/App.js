import './App.scss';
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
