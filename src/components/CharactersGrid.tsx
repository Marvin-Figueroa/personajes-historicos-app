import { DataView } from "primereact/dataview";
import { Character } from "../services/characterService";
import CharacterCard from "./CharacterCard";

interface Props {
  characters: Character[];
}

const CharactersGrid = ({ characters }: Props) => {
  const itemTemplate = (character: Character) => (
    <div
      className="col-12 sm:col-6 md:col-4 lg:col-3 xxl:col-2 p-4"
      key={character.id}
    >
      <CharacterCard character={character} />
    </div>
  );

  return (
    <div className="card">
      <DataView value={characters} itemTemplate={itemTemplate} layout="grid" />
    </div>
  );
};

export default CharactersGrid;
