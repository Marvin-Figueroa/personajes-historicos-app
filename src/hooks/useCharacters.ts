import { useQuery } from "@tanstack/react-query";
import { CharacterQuery } from "../pages/CharactersPage";
import { FetchResponse } from "../services/apiClient";
import APIClient from "../services/apiClient";
import { CACHE_KEY_CHARACTERS } from "../utils/constants";

const apiClient = new APIClient<Character>("/characters");

export interface Character {
  id: number;
  name: string;
  birthDate: Date;
  deathDate?: Date;
  nationality: string;
  biography: string;
  imageUrl: string;
  occupation: string;
}

const useCharacters = (characterQuery: CharacterQuery) =>
  useQuery<FetchResponse<Character>, Error>({
    queryKey: [...CACHE_KEY_CHARACTERS, characterQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          name_like: characterQuery.name,
          _page: characterQuery.pageNumber,
          _limit: characterQuery.pageSize,
        },
      }),
  });

export default useCharacters;
