import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import fallbackImage from "/placeholder.jpg";
import CharacterDetailSkeleton from "../components/CharacterDetailSkeleton";
import { useEffect, useState } from "react";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const { data: character, isLoading } = useCharacter(id!);
  const [imgSrc, setImgSrc] = useState(character?.imageUrl);

  useEffect(() => setImgSrc(character?.imageUrl), [character]);

  if (isLoading || !character) return <CharacterDetailSkeleton />;

  return (
    <div className="py-6 md:py-0 px-4 flex flex-column align-items-center md:flex-row md:justify-content-between w-full gap-5">
      <div className=" flex flex-column gap-4 justify-content-between flex-order-1 md:flex-order-0">
        <h1 className="text-4xl text-center md:text-left m-0 text-accent">
          {character?.name}
        </h1>
        <h2 className="text-2xl text-center md:text-left m-0">
          {character?.nationality}
        </h2>
        <p className="m-0">
          <strong className="text-accent">Biography: &nbsp;</strong>{" "}
          {character?.biography}
        </p>
        <p className="m-0">
          <strong className="text-accent">Birth Date:&nbsp;</strong>
          <span>
            {character.birthDate &&
              new Date(character?.birthDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
          </span>
        </p>
        <p className="m-0">
          <strong className="text-accent">Death Date: &nbsp;</strong>
          <span>
            {(character.deathDate &&
              new Date(character?.deathDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })) ||
              "N/A"}
          </span>
        </p>
        <p className="m-0">
          <strong className="text-accent">Occupation:&nbsp;</strong>
          {character?.occupation}
        </p>
      </div>
      <img
        className="h-30rem md:h-20rem flex justify-content-center flex-order-0 md:flex-order-1"
        style={{
          height: "300px",
          width: "300px",
          objectFit: "cover",
          objectPosition: "top",
          borderRadius: "10px",
          border: "1px solid #0ae69c",
        }}
        src={imgSrc}
        alt={character.name}
        onError={() => setImgSrc(fallbackImage)}
      />
    </div>
  );
};

export default CharacterDetailPage;
