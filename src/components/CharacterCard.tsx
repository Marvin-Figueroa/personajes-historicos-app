import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { getTruncatedText } from "../utils/utilities";
import fallbackImg from "../assets/placeholder.jpg";
import { useState } from "react";
import { Character } from "../services/characterService";

interface Props {
  character: Character;
  onDelete: (id: number) => void;
}
const CharacterCard = ({ character, onDelete }: Props) => {
  const [imgSrc, setImgSrc] = useState(character.imageUrl);

  return (
    <Card
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#2F2F2F",
      }}
      title={character.name}
      subTitle={character.nationality}
      footer={
        <div className="card flex flex-wrap justify-content-center align-items-center gap-3">
          <Button
            icon="pi pi-search-plus"
            label="Details"
            severity="success"
            aria-label="Details"
          />
          <Button
            icon="pi pi-trash"
            label="Delete"
            severity="danger"
            aria-label="Delete"
            onClick={() => onDelete(character.id)}
          />
        </div>
      }
      header={
        <img
          style={{
            maxHeight: "250px",
            objectFit: "cover",
            objectPosition: "top",
          }}
          src={imgSrc}
          alt={character.name}
          onError={() => setImgSrc(fallbackImg)}
        />
      }
    >
      {getTruncatedText(character.biography, 80)}
    </Card>
  );
};

export default CharacterCard;
