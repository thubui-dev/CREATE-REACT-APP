import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Pages from "./components/Pages/Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Resume from "./components/Pages/Resume/Resume";
import ROUTES from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHome, faUser, faIdCard, faEnvelope, faEnvelopeOpen, faPhone, faLocationDot} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faHome, faUser, faIdCard, faEnvelope,faEnvelopeOpen, faPhone, faLocationDot);

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <Radio onChange={handleOnChange} options={gender} value={selectedRadio} />
    // </div>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Routes>
          <Route exact path={ROUTES.home} element={<Home />}></Route>
          <Route exact path={ROUTES.about} element={<About />}></Route>
          <Route exact path={ROUTES.resume} element={<Resume />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
