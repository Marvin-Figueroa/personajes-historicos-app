import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { getTruncatedText } from "../utils/utilities";
import fallbackImg from "/placeholder.jpg";
import { useState } from "react";
import { Character } from "../services/characterService";
import { useNavigate } from "react-router-dom";

interface Props {
  character: Character;
  onDelete: (id: number) => void;
}
const CharacterCard = ({ character, onDelete }: Props) => {
  const navigate = useNavigate();
  const [imgSrc, setImgSrc] = useState(character.imageUrl);

  return (
    <Card
      style={{
        borderRadius: "8px",
        overflow: "hidden",
      }}
      title={character.name}
      subTitle={character.nationality}
      footer={
        <div className="card flex justify-content-between align-items-center">
          <Button
            icon="pi pi-search-plus"
            label="Details"
            severity="success"
            aria-label="Details"
            onClick={() => navigate(`/characters/${character.id}`)}
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
