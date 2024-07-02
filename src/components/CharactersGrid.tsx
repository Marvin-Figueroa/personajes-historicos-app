import { DataView } from "primereact/dataview";
import CharacterCard from "./CharacterCard";
import { Character } from "../hooks/useCharacters";
import CharacterCardSkeleton from "./CharacterCardSkeleton";

interface Props {
  characters: Character[];
  loading: boolean;
}

const CharactersGrid = ({ characters, loading }: Props) => {
  const characterTemplate = (character: Character) => (
    <div
      className="col-12 sm:col-6 md:col-4 lg:col-3 xxl:col-2 p-4"
      key={character.id}
    >
      <CharacterCard character={character} />
    </div>
  );

  const skeletonTemplate = (skeleton: number) => (
    <div
      className="col-12 sm:col-6 md:col-4 lg:col-3 xxl:col-2 p-4"
      key={skeleton}
    >
      <CharacterCardSkeleton />
    </div>
  );

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {loading && (
        <DataView
          value={skeletons}
          itemTemplate={skeletonTemplate}
          layout="grid"
        />
      )}
      <DataView
        value={characters}
        itemTemplate={characterTemplate}
        layout="grid"
      />
    </>
  );
};

export default CharactersGrid;
