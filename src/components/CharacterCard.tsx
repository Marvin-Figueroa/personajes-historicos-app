import { Card } from "primereact/card";
import { Character } from "../services/characterService";
import { Button } from "primereact/button";
import { getTruncatedText } from "../utils/utilities";

interface Props {
  character: Character;
}
const CharacterCard = ({ character }: Props) => {
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
          src={character.imageUrl}
          alt={character.name}
        />
      }
    >
      {getTruncatedText(character.biography, 80)}
    </Card>
  );
};

export default CharacterCard;
