import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Character } from "./useCharacters";
import axios from "axios";
import { CACHE_KEY_CHARACTERS } from "../utils/constants";

interface AddCharacterContext {
  previousCharacters: Character[];
}

const useAddCharacter = (
  onAddSuccess: () => void,
  onAddFailure: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<
    Omit<Character, "id">,
    Error,
    Omit<Character, "id">,
    AddCharacterContext
  >({
    mutationFn: (character: Omit<Character, "id">) =>
      axios
        .post<Omit<Character, "id">>(
          "http://localhost:3001/characters",
          character
        )
        .then((res) => res.data),
    onMutate: async (newCharacter) => {
      // Cancelar cualquier actualización en curso para evitar conflictos
      await queryClient.cancelQueries({ queryKey: CACHE_KEY_CHARACTERS });

      // Guardar el snapshot anterior de los datos
      const previousCharacters =
        queryClient.getQueryData<Character[]>(CACHE_KEY_CHARACTERS) || [];

      // Optimistamente actualizar la caché
      queryClient.setQueryData<Character[]>(
        CACHE_KEY_CHARACTERS,
        (old = []) => [
          ...old,
          { id: Date.now(), ...newCharacter }, // Usar un ID temporal
        ]
      );

      // Retornar el snapshot para revertirlo en caso de error
      return { previousCharacters };
    },
    onSuccess: (savedCharacter, newCharacter) => {
      onAddSuccess();

      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_CHARACTERS,
      });
    },
    onError: (error, newCharacter, context) => {
      // Revertir la actualización optimista usando el snapshot anterior
      queryClient.setQueryData<Character[]>(
        CACHE_KEY_CHARACTERS,
        context?.previousCharacters
      );

      onAddFailure();
    },
  });
};

export default useAddCharacter;
