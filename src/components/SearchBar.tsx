import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useRef } from "react";

interface Props {
  placeholder?: string;
  onSearch: (value: string) => void;
  disabled: boolean;
}

const SearchBar = ({ placeholder, onSearch, disabled }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value.trim()) onSearch(ref.current.value.trim());
      }}
    >
      <IconField
        disabled={disabled}
        className="flex-grow"
        iconPosition="left"
        style={{ width: "400px", maxWidth: "600px" }}
      >
        <InputIcon className="pi pi-search" />
        <InputText
          style={{ width: "100%" }}
          placeholder={placeholder ? placeholder : "Search..."}
          ref={ref}
          onChange={(event) => {
            if (event.target.value === "") onSearch("");
          }}
        />
      </IconField>
    </form>
  );
};

export default SearchBar;
