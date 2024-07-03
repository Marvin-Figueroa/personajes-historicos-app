import { Toolbar } from "primereact/toolbar";
import Logo from "./Logo";
import { Button } from "primereact/button";

const NavBar = () => {
  const endContent = (
    <Button
      icon="pi pi-plus"
      label="Add New"
      severity="success"
      aria-label="Add"
    />
  );

  return (
    <Toolbar
      style={{
        alignItems: "center",
        borderBottom: "1px solid #333",
        padding: "10px",
      }}
      start={Logo}
      end={endContent}
      className="bg-gray-900 shadow-2"
    />
  );
};

export default NavBar;
