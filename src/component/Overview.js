import React, { useEffect, useState } from "react";
import axios from "axios";
import Poster from "./Poster";
import Reviews from "./Reviews";
import WatchList from "./WatchList";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const Overview = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieID, setMovieID] = useState("");
  const [watchlist, setWatchlist] = useState(() => {
    const item = localStorage.getItem("watchList");
    return item ? JSON.parse(item) : [];
  });

  const handleOnClick = () => {
    let isMovieExist = false;
    // Check if movieID exist in localstorage list
    JSON.parse(localStorage.getItem("watchList")).map((movie) => {
      if (movie.movieID.toString() === movieDetails.id.toString()) {
        isMovieExist = true;
      }
    });

    if (isMovieExist) {
      // do nothing
    } else {
      setWatchlist((oldArray) => [
        ...oldArray,
        {
          movieTitle: movieDetails.title,
          movieID: movieDetails.id,
          movieURL: movieDetails.poster_path,
          ratings: movieDetails.vote_average
        },
      ]);
    }
  };

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchlist));
  }, [watchlist]);

  useEffect(() => {
    setMovieID(localStorage.getItem("movieID"));
  }, []);

  useEffect(() => {
    if (movieID !== "") {
      const movieURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`;
      axios.get(movieURL).then((res) => {
        console.log(res.data);
        setMovieDetails(res.data);
      });
    }
  }, [movieID]);

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <h3>Summary: {movieDetails.overview}</h3>
      <h3>Release Date: {movieDetails.release_date}</h3>
      <h3>Rating: {movieDetails.vote_average}</h3>
      <button onClick={handleOnClick}>Add to watchlist</button>

      {movieDetails.poster_path !== undefined && (
        <Poster
          height={"500px"}
          width={"370px"}
          movieid={movieDetails.id}
          rating={movieDetails.vote_average}
          srcvalue={`http://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`}
          movietitle={movieDetails.title}
        />
      )}

      <Reviews movieid={movieDetails.id} />
    </div>
  );
};

export default Overview;
