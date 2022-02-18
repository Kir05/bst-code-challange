import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Movie } from "../types/MovieTypes";
import useMovieState from "../state/movieState";
import { useMemo, useState } from "react";
import Notification from "../components/Notification";
import { useNotificationState } from "../state/notificationState";

const Home: NextPage = () => {
  const { movies, getMovies, removeMovie } = useMovieState((state) => state);
  const { isShown, deleteNotification } = useNotificationState(
    (state) => state
  );
  const [count, setCount] = useState(0);
  useMemo(() => {
    if (movies.length === 0) {
      getMovies();
    }
  }, [getMovies, movies.length]);

  return (
    <>
      <div id="Homepage" className="my-10">
        <Head>
          <title>Code Challange</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="container">
          <header className="flex items-center mb-8">
            <h1>Movies ({movies.length})</h1>
            <Link href="/create-movie" passHref>
              <a className="ml-auto text-[20px] py-2 bg-green">Add New Movie</a>
            </Link>
          </header>

          <table className="movies-list">
            <thead>
              <tr>
                <th>Movie Name</th>
                <th>Director</th>
                <th>Distributor</th>
                <th>Imbd Rating</th>
                <th>Imbd Votes</th>
                <th></th>
              </tr>
            </thead>
            {movies && (
              <tbody>
                {movies?.map((movie: Movie) => {
                  return (
                    <tr key={movie.id}>
                      <td>{movie.title}</td>
                      <td>{movie.director}</td>
                      <td>{movie.distributor}</td>
                      <td>{movie.imdb_rating}</td>
                      <td>{movie.imdb_votes}</td>
                      <td className="controls">
                        <Link
                          href={{
                            pathname: "/edit-movie/[id]",
                            query: {
                              id: movie.id,
                            },
                          }}
                        >
                          Edit
                        </Link>

                        <button
                          onClick={() => {
                            removeMovie(movie);
                            deleteNotification();
                            setCount((prev) => prev + 1);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      {isShown && <Notification count={count} />}
    </>
  );
};

export default Home;
