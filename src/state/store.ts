import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CharactersAppStore {
  isFormDirty: boolean;
  setIsFormDirty: (isDirty: boolean) => void;
}

const useCharactersAppStore = create<CharactersAppStore>((set) => ({
  isFormDirty: false,
  setIsFormDirty: (isDirty: boolean) => set({ isFormDirty: isDirty }),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("CharactersAppStore", useCharactersAppStore);

export default useCharactersAppStore;
