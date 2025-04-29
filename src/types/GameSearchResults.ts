import { Game } from "./GameTypes";

export interface GameSearchResults {
    content: Game[];
    page: {
      size: number;
      totalElements: number;
      totalPages: number;
      number: number;
    };
}
  