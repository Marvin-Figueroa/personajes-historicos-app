import { Toolbar } from "primereact/toolbar";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Button } from "primereact/button";

interface Props {
  onSearch: (value: string) => void;
  disabled: boolean;
}

const NavBar = ({ onSearch, disabled }: Props) => {
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
      style={{ alignItems: "center", borderBottom: "1px solid #333" }}
      start={Logo}
      center={
        <SearchBar
          placeholder="Search by name..."
          onSearch={onSearch}
          disabled={disabled}
        />
      }
      end={endContent}
      className="bg-gray-900 shadow-2"
    />
  );
};

export default NavBar;
