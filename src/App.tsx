import { useEffect, useState } from "react";
import CharactersGrid from "./components/CharactersGrid";
import NavBar from "./components/NavBar";
import characterService, { Character } from "./services/characterService";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = characterService.getAll<Character>();
    request
      .then((res) => setCharacters(res.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));

    return () => cancel();
  }, []);

  return (
    <>
      <NavBar />
      <CharactersGrid characters={characters} />
    </>
  );
}

export default App;
