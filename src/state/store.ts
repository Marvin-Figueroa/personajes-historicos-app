import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CharacterQuery {
  name?: string;
  pageNumber: number;
  pageSize: number;
}

interface CharactersAppStore {
  characterQuery: CharacterQuery;
  setPageNumber: (pageNumber: number) => void;
  setPageSize: (pageSize: number) => void;
  setCharacterName: (name: string) => void;
  isCharacterFormDirty: boolean;
  setIsCharacterFormDirty: (isDirty: boolean) => void;
}

const useCharactersAppStore = create<CharactersAppStore>((set) => ({
  characterQuery: {
    pageNumber: 1,
    pageSize: 8,
  },
  isCharacterFormDirty: false,
  setIsCharacterFormDirty: (isDirty: boolean) =>
    set({ isCharacterFormDirty: isDirty }),
  setCharacterName: (name: string) =>
    set(() => ({
      characterQuery: {
        name,
        pageNumber: 1,
        pageSize: 8,
      },
    })),
  setPageNumber: (pageNumber: number) =>
    set((store) => ({
      characterQuery: { ...store.characterQuery, pageNumber },
    })),
  setPageSize: (pageSize: number) =>
    set((store) => ({ characterQuery: { ...store.characterQuery, pageSize } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("CharactersAppStore", useCharactersAppStore);

export default useCharactersAppStore;
