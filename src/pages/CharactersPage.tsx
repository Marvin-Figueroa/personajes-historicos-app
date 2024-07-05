import CharactersGrid from "../components/CharactersGrid";
import Pagination from "../components/Pagination";
import useCharacters from "../hooks/useCharacters";
import SearchBar from "../components/SearchBar";

const CharactersPage = () => {
  const { data, isLoading } = useCharacters();

  return (
    <>
      <div className="flex flex-grow-1 flex-column">
        <h1 className="text-center text-green-500 text-3xl">
          Historical Characters
        </h1>
        <SearchBar
          className="mb-4 align-self-center"
          placeholder="Search by name..."
          disabled={isLoading}
        />
        {data?.results && data.results.length === 0 ? (
          <div className="flex align-items-center justify-content-center flex-grow-1">
            <p className="text-2xl text-purple-500">
              No characters were found 😢
            </p>
          </div>
        ) : (
          <CharactersGrid
            loading={isLoading}
            characters={data?.results || []}
          />
        )}
      </div>
      {data?.results && data.results.length > 0 && (
        <div className="flex justify-content-center my-4">
          <Pagination itemsCount={data.count} />
        </div>
      )}
    </>
  );
};

export default CharactersPage;
