import { MockedDetailedMovieResponse } from "@/mocks/detailed-movies";
import { DetailedMovie } from "@/types/movie";
import { NextRequest, NextResponse } from "next/server";

type Data = {
  movies: DetailedMovie[];
};

export default function handler(req: NextRequest, res: NextResponse<Data>) {
  const {
    query: { id },
  } = req;

  const selectedMovie = MockedDetailedMovieResponse.find(
    (movie) => movie.id === parseInt(id)
  );

  if (!selectedMovie) {
    res.status(404).json({ message: "Movie not found" });
  } else {
    res.status(200).json(selectedMovie);
  }
}
