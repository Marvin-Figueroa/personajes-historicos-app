import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/apiClient";
import { CACHE_KEY_CHARACTERS } from "../utils/constants";
import characterService, { Character } from "../services/characterService";
import useCharactersAppStore from "../state/store";

const useCharacters = () => {
  const characterQuery = useCharactersAppStore((s) => s.characterQuery);

  return useQuery<FetchResponse<Character>, Error>({
    queryKey: [...CACHE_KEY_CHARACTERS, characterQuery],
    queryFn: () =>
      characterService.getAll({
        params: {
          name_like: characterQuery.name,
          _page: characterQuery.pageNumber,
          _limit: characterQuery.pageSize,
        },
      }),
  });
};

export default useCharacters;
