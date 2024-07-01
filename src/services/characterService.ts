import setup from "./httpService";

export interface Character {
    id: number;
    name: string;
    birthDate: string;
    deathDate: string;
    nationality: string;
    biography: string;
    imageUrl: string;
}

export default setup('/characters');