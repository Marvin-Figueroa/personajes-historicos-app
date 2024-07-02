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

  const handleSearch = (search: string) => {
    setCharacterQuery({
      ...characterQuery,
      name: search,
      pageNumber: 1,
      pageSize: 8,
    });
  };

  return (
    <div className="flex flex-column min-h-screen">
      <NavBar onSearch={handleSearch} disabled={loading} />
      <div className="flex flex-grow-1 flex-column">
        {data.results?.length > 0 ? (
          <CharactersGrid loading={loading} characters={data.results} />
        ) : (
          <div className="flex align-items-center justify-content-center flex-grow-1">
            <p className="text-2xl text-purple-500">
              No characters were found 😢
            </p>
          </div>
        )}
      </div>
      {data.results?.length > 0 && (
        <div className="flex justify-content-center my-4">
          <Pagination
            characterQuery={characterQuery}
            onPageChange={handlePageChange}
            itemsCount={data.count}
          />
        </div>
      )}
    </div>
  );
}

export default App;
