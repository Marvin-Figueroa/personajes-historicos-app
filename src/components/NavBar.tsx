import { Toolbar } from "primereact/toolbar";
import Logo from "./Logo";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const confirmNavigation = () => {
    confirmDialog({
      message: "Are you sure you want to cancel and return to the home page?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      defaultFocus: "reject",
      accept: () => navigate("/"),
    });
  };

  const endContent = (
    <Button
      onClick={() =>
        location.pathname === "/new-character"
          ? confirmNavigation()
          : navigate("/new-character")
      }
      icon={
        location.pathname === "/new-character"
          ? "pi pi-arrow-left"
          : "pi pi-plus"
      }
      label={location.pathname === "/new-character" ? "Go Back" : "Add New"}
      severity={location.pathname === "/new-character" ? "danger" : "success"}
      aria-label={location.pathname === "/new-character" ? "Back" : "Add"}
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
      center={<ConfirmDialog />}
      end={endContent}
      className="bg-gray-900 shadow-2"
    />
  );
};

export default NavBar;
