import { PaginatorPageChangeEvent } from "primereact/paginator";
import { useState } from "react";
import CharactersGrid from "../components/CharactersGrid";
import Pagination from "../components/Pagination";
import useCharacters from "../hooks/useCharacters";
import SearchBar from "../components/SearchBar";

export interface CharacterQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
}

const CharactersPage = () => {
  const [characterQuery, setCharacterQuery] = useState<CharacterQuery>({
    pageNumber: 1,
    pageSize: 8,
  });

  const { data, isLoading, error } = useCharacters(characterQuery);

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

  if (error)
    return (
      <h3 className="text-2xl text-orange-700 text-center">{error.message}</h3>
    );

  return (
    <>
      <div className="flex flex-grow-1 flex-column">
        <h1 className="text-center text-green-500 text-3xl">
          Historical Characters
        </h1>
        <SearchBar
          className="mb-4 align-self-center"
          placeholder="Search by name..."
          onSearch={handleSearch}
          disabled={isLoading}
        />
        {data?.results && data.results.length > 0 ? (
          <CharactersGrid loading={isLoading} characters={data.results} />
        ) : (
          <div className="flex align-items-center justify-content-center flex-grow-1">
            <p className="text-2xl text-purple-500">
              No characters were found 😢
            </p>
          </div>
        )}
      </div>
      {data?.results && data.results.length > 0 && (
        <div className="flex justify-content-center my-4">
          <Pagination
            characterQuery={characterQuery}
            onPageChange={handlePageChange}
            itemsCount={data.count}
          />
        </div>
      )}
    </>
  );
};

export default CharactersPage;
