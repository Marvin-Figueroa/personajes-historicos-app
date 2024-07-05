import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_CHARACTERS } from "../utils/constants";
import { Character } from "../services/characterService";
import characterService from "../services/characterService";

interface DeleteCharacterContext {
  previousCharacters: Character[];
}

const useDeleteCharacter = (
  onDeleteSuccess: () => void,
  onDeleteFailure: () => void
) => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number, DeleteCharacterContext>({
    mutationFn: characterService.delete,
    onMutate: async (characterId) => {
      // Cancelar cualquier actualización en curso para evitar conflictos
      await queryClient.cancelQueries({ queryKey: CACHE_KEY_CHARACTERS });

      // Guardar el snapshot anterior de los datos
      const previousCharacters =
        queryClient.getQueryData<Character[]>(CACHE_KEY_CHARACTERS) || [];

      // Optimistamente actualizar la caché
      queryClient.setQueryData<Character[]>(CACHE_KEY_CHARACTERS, (old = []) =>
        old.filter((character) => character.id !== characterId)
      );

      // Retornar el snapshot para revertirlo en caso de error
      return { previousCharacters };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CACHE_KEY_CHARACTERS });
      onDeleteSuccess();
    },
    onError: (_error, _characterId, context) => {
      if (!context) return;

      // Revertir la actualización optimista usando el snapshot anterior
      queryClient.setQueryData<Character[]>(
        CACHE_KEY_CHARACTERS,
        context.previousCharacters
      );
      onDeleteFailure();
    },
  });
};

export default useDeleteCharacter;
