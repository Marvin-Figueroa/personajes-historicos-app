import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

interface Props {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchBar = ({ placeholder, onSearch }: Props) => {
  return (
    <IconField
      className="flex-grow"
      iconPosition="left"
      style={{ width: "400px", maxWidth: "600px" }}
    >
      <InputIcon className="pi pi-search"> </InputIcon>
      <InputText
        style={{ width: "100%" }}
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
      />
    </IconField>
  );
};

export default SearchBar;
