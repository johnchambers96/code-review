import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  movieList: any;
};

export default function HomePage({ movieList }: HomeProps) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieList.movies);
  }, []);

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Movie list</h1>
      <span>{JSON.stringify(movies)}</span>
      {movies?.map((movie, index) => (
        <a key={`${index}`} href={`/movie/${movie.id}`}>
          <span>{movie.title}</span>
        </a>
      ))}
    </main>
  );
}

export const getStaticProps = async () => {
  const data = await fetch("http://localhost:3000/api/movies");
  const movieList = await data.json();
  return {
    props: {
      movieList,
    },
  };
};
