import { NextPage } from "next";
import React, { useState } from "react";
import useMovieState from "../../state/movieState";
import { Movie } from "../../types/MovieTypes";
import { useRouter } from "next/router";
import InputField from "../../components/InputField";
import { useNotificationState } from "../../state/notificationState";

const CreateMovie: NextPage = () => {
  const { createMovie, movies } = useMovieState((state) => state);
  const { createNotification } = useNotificationState((state) => state);
  const router = useRouter();

  const [newMovie, setNewMovie] = useState<Movie>({
    id: movies.length + 1,
    title: "",
    director: "",
    distributor: "",
    imdb_rating: undefined,
    imdb_votes: undefined,
  });

  function handleSubmit(event: any) {
    event.preventDefault();

    const movie: Movie = newMovie;

    createMovie(movie);
    createNotification();
    router.push("/");
  }

  return (
    <div id="CreateMovie">
      <div className="container">
        <h1>Create Movie</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Enter a movie name"
            label="Movie Title:"
            name="title"
            onChange={(e) =>
              setNewMovie({ ...newMovie, title: e.target.value })
            }
            isRequired={true}
          />

          <InputField
            type="text"
            placeholder="Enter a diretor's name"
            label="Movie Director:"
            name="director"
            onChange={(e) =>
              setNewMovie({ ...newMovie, director: e.target.value })
            }
            isRequired={true}
          />

          <InputField
            type="text"
            placeholder="Enter the distributor's name"
            label="Movie Distributor:"
            name="distributor"
            onChange={(e) =>
              setNewMovie({ ...newMovie, distributor: e.target.value })
            }
          />

          <InputField
            type="number"
            placeholder="Enter the movie's rating"
            label="Movie Rating:"
            name="rating"
            onChange={(e) =>
              setNewMovie({ ...newMovie, imdb_rating: e.target.value })
            }
          />

          <InputField
            type="number"
            placeholder="Enter the number of votes"
            label="Rating Votes:"
            name="votes"
            onChange={(e) =>
              setNewMovie({ ...newMovie, imdb_votes: e.target.value })
            }
          />

          <section className="buttons">
            <button type="button" onClick={() => router.push("/")}>
              Go Back
            </button>
            <button type="submit">Save Movie</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default CreateMovie;
