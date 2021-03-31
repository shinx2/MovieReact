import React, {useContext} from "react";
import Poster from "./Poster";
import "./MovieApp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import {MovieContext} from '../context/MovieContext';

const MovieApp = () => {
  
  const {movies} = useContext(MovieContext);

  return (
    <>

      <Container>
        {movies.map((movie) => {
          if (movie.poster_path !== null) {
            return (
              <Poster
                key={movie.id}
                height={"500px"}
                width={"18rem"}
                movieid={movie.id}
                rating={movie.vote_average}
                srcvalue={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                movietitle={movie.title}
                showRemoveButton={false}
              />
            );
          }
        })}
      </Container>
    </>
  );
};
export default MovieApp;
