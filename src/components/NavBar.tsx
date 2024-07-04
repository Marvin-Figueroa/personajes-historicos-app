import { Toolbar } from "primereact/toolbar";
import Logo from "./Logo";
import { Button } from "primereact/button";
import { useLocation, useNavigate } from "react-router-dom";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import useCharactersAppStore from "../state/store";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isFormDirty } = useCharactersAppStore();

  const confirmNavigation = () => {
    confirmDialog({
      message:
        "Are you sure you want to cancel and return to the home page? All changes will be lost.",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      defaultFocus: "reject",
      accept: () => navigate("/"),
    });
  };

  const endContent = (
    <Button
      onClick={() =>
        location.pathname === "/new-character" && isFormDirty
          ? confirmNavigation()
          : navigate(
              location.pathname === "/new-character" ? "/" : "/new-character"
            )
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
