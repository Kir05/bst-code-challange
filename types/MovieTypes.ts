export type Movie = {
  id: number;
  title: string;
  director: string;
  distributor: string;
  imdb_rating?: number | string;
  imdb_votes?: number | string;
};
