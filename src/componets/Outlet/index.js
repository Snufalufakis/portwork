import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/index";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Outlet />
        <br />
      </div>
    </div>
  );
};

export default Layout;
