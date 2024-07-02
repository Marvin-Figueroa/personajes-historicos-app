import { useState } from "react";
import CharactersGrid from "./components/CharactersGrid";
import NavBar from "./components/NavBar";
import { PaginatorPageChangeEvent } from "primereact/paginator";
import Pagination from "./components/Pagination";
import useCharacters from "./hooks/useCharacters";

export interface CharacterQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
}

function App() {
  const [characterQuery, setCharacterQuery] = useState<CharacterQuery>({
    pageNumber: 1,
    pageSize: 8,
  });

  const { data, loading } = useCharacters(characterQuery);

  const handlePageChange = (event: PaginatorPageChangeEvent) => {
    setCharacterQuery({
      ...characterQuery,
      pageNumber: event.page + 1,
      pageSize: event.rows,
    });
  };

  return (
    <>
      <NavBar />
      <CharactersGrid loading={loading} characters={data.results} />
      <Pagination
        characterQuery={characterQuery}
        onPageChange={handlePageChange}
        itemsCount={data.count}
      />
    </>
  );
}

export default App;
