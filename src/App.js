import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Projects/>
      {/* <Main /> */}
      <Footer className="footer"/>
    </div>
  );
}

export default App;
