export type DetailedMovie = {
  title: string;
  year: number;
  genre: string;
  director: string;
  actors: string[];
  rating: number;
  plot: string;
  awards: {
    oscarNominations: number;
    oscarWins: number;
    otherAwards: string[];
  };
};

export type Movie = Pick<
  DetailedMovie,
  "title" | "year" | "genre" | "director" | "actors" | "rating"
>;
