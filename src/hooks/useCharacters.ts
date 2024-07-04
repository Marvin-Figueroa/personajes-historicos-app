import { useQuery } from "@tanstack/react-query";
import { CharacterQuery } from "../pages/CharactersPage";
import { FetchResponse } from "../services/apiClient";
import { CACHE_KEY_CHARACTERS } from "../utils/constants";
import characterService, { Character } from "../services/characterService";

const useCharacters = (characterQuery: CharacterQuery) =>
  useQuery<FetchResponse<Character>, Error>({
    queryKey: [...CACHE_KEY_CHARACTERS, characterQuery],
    queryFn: () =>
      characterService.getAll({
        params: {
          name_like: characterQuery.name,
          _page: characterQuery.pageNumber,
          _limit: characterQuery.pageSize,
        },
      }),
    staleTime: 30 * 1000, // 30secs
  });

export default useCharacters;
