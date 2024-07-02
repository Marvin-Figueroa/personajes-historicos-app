import { CharacterQuery } from "../App";
import useData from "./useData";

export interface Character {
  id: number;
  name: string;
  birthDate: string;
  deathDate: string;
  nationality: string;
  biography: string;
  imageUrl: string;
}

const useCharacters = (characterQuery: CharacterQuery) =>
  useData<Character>(
    "/characters",
    {
      params: {
        name_like: characterQuery.name,
        _page: characterQuery.pageNumber,
      },
    },
    [characterQuery]
  );

export default useCharacters;
