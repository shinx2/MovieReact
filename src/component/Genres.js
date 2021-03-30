import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavDropdown, Dropdown } from "react-bootstrap";
import { MovieContext } from "../context/MovieContext";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const Genres = () => {
  //CONTEXT MOVIELIST
  const { setMovies } = useContext(MovieContext);

  const [selectGenres, setSelectGenres] = useState([]);

  // Select genre
  const handleGenre = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const findGenreURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${event.target.value}`;
    axios.get(findGenreURL).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  };

  // Call genre api
  useEffect(() => {
    const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    axios.get(genreURL).then((res) => {
      console.log(res.data.genres);
      setSelectGenres(res.data.genres);
    });
  }, []);

  return (
    <NavDropdown title="Genres" id="basic-nav-dropdown">
      <NavDropdown.Item href=""></NavDropdown.Item>
      {selectGenres.map((genre) => {
        return (
          <Dropdown.Item
            key={genre.id}
            value={genre.id}
            onClick={handleGenre}
            as="button"
          >
            {genre.name}
          </Dropdown.Item>
        );
      })}
      <NavDropdown.Divider />
    </NavDropdown>
  );
};

export default Genres;
