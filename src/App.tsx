import { useState } from "react";
import CharactersGrid from "./components/CharactersGrid";
import NavBar from "./components/NavBar";

export interface CharacterQuery {
  name: string;
  pageNumber: number;
}

function App() {
  const [characterQuery, setCharacterQuery] = useState<CharacterQuery>({
    name: "",
    pageNumber: 1,
  });

  return (
    <>
      <NavBar />
      <CharactersGrid characterQuery={characterQuery} />
    </>
  );
}

export default App;
