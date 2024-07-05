import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-column min-h-screen">
      <NavBar />
      <main className="flex flex-grow-1 flex-column justify-content-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
