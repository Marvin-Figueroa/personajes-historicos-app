import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-column min-h-screen">
      <NavBar />
      <main className="flex flex-grow-1 flex-column">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
