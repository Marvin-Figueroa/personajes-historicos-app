import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { useRef } from "react";
import useCharactersAppStore from "../state/store";

interface Props {
  placeholder?: string;
  disabled: boolean;
  className: string;
}

const SearchBar = ({ placeholder, disabled, className }: Props) => {
  const setCharacterName = useCharactersAppStore((s) => s.setCharacterName);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current?.value.trim())
          setCharacterName(ref.current.value.trim());
      }}
    >
      <IconField
        disabled={disabled}
        className="w-20rem md:w-30rem"
        iconPosition="left"
      >
        <InputIcon className="pi pi-search" />
        <InputText
          style={{ width: "100%" }}
          placeholder={placeholder ? placeholder : "Search..."}
          ref={ref}
          onChange={(event) => {
            if (event.target.value === "") setCharacterName("");
          }}
        />
      </IconField>
    </form>
  );
};

export default SearchBar;
