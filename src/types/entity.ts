interface Image {
  medium: string;
  original: string;
}

interface Rating {
  average: number;
}

export interface Show {
  id: number;
  image: Record<string, { medium: string; original: string }>;
  name: string;
  rating?: Record<string, { average: number }>;
}

interface Character {
  id: number;
  name: string;
}

interface Person extends Character {
  image: Image;
  url: string;
}

export interface ShowCast {
  character: Character;
  person: Person;
  self: boolean;
  voice: boolean;
}

export interface ShowEpisode {
  image: Image;
  id: number;
  url: string;
  name: string;
}

export interface ShowSeason {
  id: number;
  number: number;
}
