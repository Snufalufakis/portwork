import About from "./componets/About";
import Contact from "./componets/Contact";
import Home from "./componets/Home";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./componets/Outlet";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
