import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import useMovieState from "../../states/movieState";
import { Movie } from "../../types/MovieTypes";
import { useRouter } from "next/router";
import InputField from "../../components/InputField";
import { useNotificationState } from "../../states/notificationState";

const CreateMovie: NextPage = () => {
  const { createMovie, movies } = useMovieState((state) => state);
  const { createNotification } = useNotificationState((state) => state);
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const [newMovie, setNewMovie] = useState<Movie>({
    id: movies.length + 1,
    title: "",
    director: "",
    distributor: "",
    imdb_rating: 0,
    imdb_votes: 0,
  });

  // If for some reason app starts from this page - go to homepage to load list
  useEffect(() => {
    if (movies.length === 0) {
      router.push("/");
    }
  }, [movies]);

  // Simple input validation error messages
  const validate = () => {
    if (!newMovie.title) {
      setError("Movie name can't be blank!");
      return false;
    } else if (newMovie.director.length <= 2) {
      setError("Director's name must contain atleast 2 characters!");
      return false;
    } else if (newMovie.distributor.length <= 2) {
      setError("Distributor's name must contain atleast 2 characters!");
      return false;
    } else if (isNaN(newMovie.imdb_rating)) {
      setError("Rating must be a valid number!");
      return false;
    } else if (isNaN(newMovie.imdb_votes)) {
      setError("Votes must be a valid number!");
      return false;
    } else {
      return true;
    }
  };

  // On Submit validate and update movie list
  function handleSubmit(event: any) {
    event.preventDefault();
    const isValid = validate();
    const movie: Movie = newMovie;
    if (isValid) {
      createMovie(movie);
      createNotification();
      router.push("/");
    }
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
          />

          <InputField
            type="text"
            placeholder="Enter a diretor's name"
            label="Movie Director:"
            name="director"
            onChange={(e) =>
              setNewMovie({ ...newMovie, director: e.target.value })
            }
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
            type="text"
            placeholder="Enter the movie's rating (optional)"
            label="Movie Rating:"
            name="rating"
            onChange={(e) =>
              setNewMovie({ ...newMovie, imdb_rating: e.target.value })
            }
          />

          <InputField
            type="text"
            placeholder="Enter the number of votes (optional)"
            label="Rating Votes:"
            name="votes"
            onChange={(e) =>
              setNewMovie({ ...newMovie, imdb_votes: e.target.value })
            }
          />

          <section className="buttons">
            <button
              className="btn-back"
              type="button"
              onClick={() => router.push("/")}
            >
              Go Back
            </button>
            <button className="btn-submit" type="submit">
              Save Movie
            </button>
          </section>
        </form>
      </div>

      {error && <div id="InputError">{error}</div>}
    </div>
  );
};

export default CreateMovie;
