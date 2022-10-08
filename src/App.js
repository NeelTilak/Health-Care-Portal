import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";

import { Route, Routes} from "react-router-dom";
import Tools from "./routes/Tools";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/tools" element ={<Tools />} />
        <Route path="/contact" element={<Contact />}  />
      </Routes>
    </>
  );
}

export default App;
