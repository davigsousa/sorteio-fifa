export interface Team {
  name: string;
  league: string;
  image: string;
  overall: number;
}

export interface TeamJSON {
  id: number;
  name: string;
  league: string;
  attack: number;
  midfield: number;
  defense: number;
  overall: number;
  is_national_team: boolean;
}
