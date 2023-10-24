// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MockedMovieResponse } from "@/mocks/movies";
import { Movie } from "@/types/movie";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  movies: Movie[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    movies: MockedMovieResponse,
  });
}
