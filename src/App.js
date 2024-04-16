import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurProjects from "./pages/OurProjects/OurProjects";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/about_us'} element={<AboutUs/>}/>
            <Route path={'/projects'} element={<OurProjects/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
