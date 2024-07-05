import { Image } from "primereact/image";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import fallbackImage from "../assets/placeholder.jpg";
import CharacterDetailSkeleton from "../components/CharacterDetailSkeleton";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const { data: character, isLoading } = useCharacter(id!);

  if (isLoading) return <CharacterDetailSkeleton />;

  return (
    <div className="px-4 flex flex-column md:flex-row md:justify-content-between w-full gap-5">
      <div className=" flex flex-column justify-content-between flex-order-1 md:flex-order-0">
        <h1 className="text-4xl m-0 text-green-600">{character?.name}</h1>
        <h2 className="text-2xl m-0 text-green-300">
          {character?.nationality}
        </h2>
        <p className="m-0">
          <strong>Biography: </strong> {character?.biography}
        </p>
        <p className="m-0">
          <strong>Birth Date: </strong>
          <span>{character?.birthDate.toString()}</span>
        </p>
        <p className="m-0">
          <strong>Death Date: </strong>
          <span> {character?.deathDate?.toString() || "N/A"}</span>
        </p>
        <p className="m-0">
          <strong>Occupation:</strong> {character?.occupation}
        </p>
      </div>
      <Image
        height="400px"
        width="300px"
        className="flex justify-content-center flex-order-0 md:flex-order-1"
        src={character?.imageUrl || fallbackImage}
        alt={character?.name}
      />
    </div>
  );
};

export default CharacterDetailPage;
