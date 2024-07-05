import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_CHARACTERS } from "../utils/constants";
import characterService from "../services/characterService";

const useCharacter = (id: number | string) =>
  useQuery({
    queryKey: [...CACHE_KEY_CHARACTERS, id],
    queryFn: () => characterService.getById(id),
  });

  export default useCharacter;
