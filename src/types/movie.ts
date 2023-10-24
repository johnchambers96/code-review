type Movie = {
  title: string;
  year: number;
  genre: string;
  director: string;
  actors: string[];
  rating: number;
};

type DetailedMovie = {
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
