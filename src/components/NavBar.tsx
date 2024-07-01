import { Toolbar } from "primereact/toolbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
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
      style={{ alignItems: "center" }}
      start={Logo}
      center={
        <SearchBar
          placeholder="Search by name..."
          onSearch={() => console.log("Searching...")}
        />
      }
      end={endContent}
      className="bg-gray-900 shadow-2"
    />
  );
};

export default NavBar;
