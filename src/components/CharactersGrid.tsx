import { DataView } from "primereact/dataview";
import CharacterCard from "./CharacterCard";
import CharacterCardSkeleton from "./CharacterCardSkeleton";
import useDeleteCharacter from "../hooks/useDeleteCharacter";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Character } from "../services/characterService";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface Props {
  characters: Character[];
  loading: boolean;
}

const CharactersGrid = ({ characters, loading }: Props) => {
  const toast = useRef<Toast>(null);

  const deleteCharacter = useDeleteCharacter(
    () => {
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Character deleted successfully!",
      });
    },
    () => {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail:
          deleteCharacter.error?.message ||
          "The character could not be deleted!",
      });
    }
  );

  const confirmDeletion = (id: number) => {
    confirmDialog({
      message:
        "Are you sure you want to delete it? This action cannot be undone!!!",
      header: "Delete Confirmation",
      icon: "pi pi-exclamation-triangle",
      defaultFocus: "reject",
      accept: () => deleteCharacter.mutate(id),
    });
  };

  const characterTemplate = (character: Character) => (
    <div
      className="col-12 sm:col-6 md:col-4 lg:col-3 xxl:col-2 p-4"
      key={character.id}
    >
      <CharacterCard
        onDelete={(id) => {
          confirmDeletion(id);
        }}
        character={character}
      />
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
      <Toast ref={toast} />
      {loading ? (
        <DataView
          value={skeletons}
          itemTemplate={skeletonTemplate}
          layout="grid"
        />
      ) : (
        <DataView
          children={<ConfirmDialog />} // avoid double rendering of the confirmation dialog
          value={characters}
          itemTemplate={characterTemplate}
          layout="grid"
        />
      )}
    </>
  );
};

export default CharactersGrid;
