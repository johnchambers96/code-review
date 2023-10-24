import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const d = await fetch(`http://localhost:3000/api/movies/${id}`);
      const j = await d.json();
      setMovie(j);
      setLoading(false);
    };

    id ? fetchData() : null;
  }, [id]);

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <Link href="/">Home</Link>
      {loading && <span>Loading...</span>}
      {!loading && (
        <div>
          <h1>{movie.title}</h1>
          <p>{"Genre: " + movie.genre}</p>
          <p>{"Director: " + movie.director}</p>
          <p>{"Rating: " + movie.rating}</p>
          <p>{"Year: " + movie.year}</p>
          <p>{"Actors: " + movie.actors.join(", ")}</p>
          <p>{"Oscar nominations: " + movie.awards.oscarNominations}</p>
          <p>{"Oscar wins: " + movie.awards.oscarWins}</p>
          <p>{"Other awards: " + movie.awards.otherAwards.join(", ")}</p>
        </div>
      )}
    </main>
  );
}
