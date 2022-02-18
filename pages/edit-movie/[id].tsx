import { NextPage } from "next";
import React, { useMemo, useState } from "react";
import useMovieState from "../../states/movieState";
import { Movie } from "../../types/MovieTypes";
import { useRouter } from "next/router";
import InputField from "../../components/InputField";
import { useNotificationState } from "../../states/notificationState";

// fix later
// eslint-disable-next-line react/prop-types
const EditMovie: NextPage<{ currentId: number }> = ({ currentId }) => {
  const { editMovie, movies } = useMovieState((state) => state);
  const { editNotification } = useNotificationState((state) => state);
  const [edit, setEdit] = useState<Movie>({
    id: currentId,
    title: "",
    director: "",
    distributor: "",
    imdb_rating: 0,
    imdb_votes: 0,
  });
  const router = useRouter();

  const [error, setError] = useState<string>("");

  const validate = () => {
    if (!edit.title) {
      setError("Movie name can't be blank!");
      return false;
    } else if (edit.director.length <= 2) {
      setError("Director's name must contain atleast 2 characters!");
      return false;
    } else if (edit.distributor.length <= 2) {
      setError("Distributor's name must contain atleast 2 characters!");
      return false;
    } else if (isNaN(edit.imdb_rating)) {
      setError("Rating must be a valid number!");
      return false;
    } else if (isNaN(edit.imdb_votes)) {
      setError("Votes must be a valid number!");
      return false;
    } else {
      return true;
    }
  };

  useMemo(() => {
    movies.filter((el) => {
      if (currentId == el.id) {
        setEdit({
          id: currentId,
          title: el.title,
          director: el.director,
          distributor: el.distributor,
          imdb_rating: el.imdb_rating,
          imdb_votes: el.imdb_votes,
        });
      }
    });
  }, [currentId, movies]);

  function handleSubmit(event: any) {
    event.preventDefault();
    const isValid = validate();
    const movie: Movie = edit;

    if (isValid) {
      editMovie(movie);
      editNotification();
      router.push("/");
    }
  }

  return (
    <div id="EditMovie">
      <div className="container">
        <h1>Edit Movie</h1>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Enter a movie name"
            label="Movie Title:"
            name="title"
            value={edit.title}
            onChange={(e) => setEdit({ ...edit, title: e.target.value })}
          />

          <InputField
            type="text"
            placeholder="Enter a diretor's name"
            label="Movie Director:"
            name="director"
            value={edit.director}
            onChange={(e) => setEdit({ ...edit, director: e.target.value })}
          />

          <InputField
            type="text"
            placeholder="Enter the distributor's name"
            label="Movie Distributor:"
            name="distributor"
            value={edit.distributor}
            onChange={(e) => setEdit({ ...edit, distributor: e.target.value })}
          />

          <InputField
            type="number"
            placeholder="Enter the movie's rating"
            label="Movie Rating:"
            name="rating"
            value={edit.imdb_rating}
            onChange={(e) => setEdit({ ...edit, imdb_rating: e.target.value })}
          />

          <InputField
            type="number"
            placeholder="Enter the number of votes"
            label="Rating Votes:"
            name="votes"
            value={edit.imdb_votes}
            onChange={(e) => setEdit({ ...edit, imdb_votes: e.target.value })}
          />

          <section className="buttons">
            <button type="button" onClick={() => router.push("/")}>
              Go Back
            </button>
            <button type="submit">Update Movie</button>
          </section>
        </form>
      </div>
      {error && <div id="InputError">{error}</div>}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      currentId: context.query.id,
    },
  };
}

export default EditMovie;
