import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CHARACTERS } from "../utils/constants";
import characterService, { Character } from "../services/characterService";

interface AddCharacterContext {
  previousCharacters: Character[];
}

const useAddCharacter = (
  onAddSuccess: () => void,
  onAddFailure: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<Character, Error, Character, AddCharacterContext>({
    mutationFn: characterService.create,
    onMutate: async (newCharacter) => {
      // Cancelar cualquier actualización en curso para evitar conflictos
      await queryClient.cancelQueries({ queryKey: CACHE_KEY_CHARACTERS });

      // Guardar el snapshot anterior de los datos
      const previousCharacters =
        queryClient.getQueryData<Character[]>(CACHE_KEY_CHARACTERS) || [];

      // Optimistamente actualizar la caché
      queryClient.setQueryData<Character[]>(
        CACHE_KEY_CHARACTERS,
        (old = []) => [...old, newCharacter]
      );

      // Retornar el snapshot para revertirlo en caso de error
      return { previousCharacters };
    },
    onSuccess: (_savedCharacter, _newCharacter) => {
      onAddSuccess();

      queryClient.invalidateQueries({
        queryKey: CACHE_KEY_CHARACTERS,
      });
    },
    onError: (_error, _newCharacter, context) => {
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
