import APIClient from "./apiClient";

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

export default new APIClient<Character>("/characters");
