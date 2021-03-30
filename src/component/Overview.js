import React, { useEffect, useState } from "react";
import axios from "axios";
// import Poster from "./Poster";
// import Reviews from "./Reviews";
// import WatchList from "./WatchList";
import Trailer from  "./Trailer";
import { Card, Button } from "react-bootstrap";
import './Poster.css';
import Recommendations from "./Recommendations";

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
      <br/>
      <Card className="overviewcard">
    <Card.Img variant="top" src={`http://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}/>
    <Card.Body><h1><b>{movieDetails.title}</b></h1>
      <Card.Text><p>
      <b>Summary:</b> {movieDetails.overview}<br/>
      <b>Release Date:</b> {movieDetails.release_date}<br/>
     <b>Rating:</b> {movieDetails.vote_average}
     </p>
     <Button variant="danger" onClick={handleOnClick}>Add to watchlist</Button>{' '}
     <br/>
    {/* <p> <Reviews movieid={movieDetails.id} /></p> */}
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  </div>
  );
};

export default Overview;
