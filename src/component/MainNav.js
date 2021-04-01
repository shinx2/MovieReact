import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { MovieContext } from "../context/MovieContext";
import Genres from "./Genres.js";
import { useHistory } from "react-router-dom";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const MainNav = () => {
  const { setMovies } = useContext(MovieContext);
  const [inputVal, setInputVal] = useState("");

const history = useHistory();

  const handleChange = (event) => {
    event.preventDefault();
    setInputVal(event.target.value);
  };

  // On movie search submit, call api from inputval
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputVal);
    history.push("/");
    const titleURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputVal}&page=1&include_adult=false`;
    axios.get(titleURL).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  };

  // On page load, show popular movies
  useEffect(() => {
    const titleURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    axios.get(titleURL).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>MovieHub</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="watchlist">My Watchlist</Nav.Link>
          <Genres />
        </Nav>
        <Form inline >
          <FormControl
            type="text"
            placeholder="Search movies..."
            className="mr-sm-2"
            value={inputVal}
            onChange={handleChange}
          />
          <Button variant="outline-info" type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
};

export default MainNav;
