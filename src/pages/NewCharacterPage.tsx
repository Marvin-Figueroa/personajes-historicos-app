import CharacterForm from "../components/CharacterForm";

const NewCharacterPage = () => {
  return (
    <div className="flex flex-column align-items-center flex-grow-1 py-3">
      <h2 className="m-0 text-2xl text-green-400 text-center">
        Register New Character
      </h2>
      <CharacterForm />
    </div>
  );
};

export default NewCharacterPage;
