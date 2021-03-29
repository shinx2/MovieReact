import React, { useState, useEffect } from "react";
import axios from "axios";
import Poster from "./Poster";
import "./MovieApp.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown, Navbar, Form, FormControl, Button, Dropdown, Card } from "react-bootstrap";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const MovieApp = (props) => {
  const [movies, setMovies] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [selectGenres, setSelectGenres] = useState([]);


  const handleChange = (event) => {
    setInputVal(event.target.value);
  };


  // On movie search submit, call api from inputval
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputVal);
    const titleURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${inputVal}&page=1&include_adult=false`;
    axios.get(titleURL).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  };

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

  // On page load, show popular movies
  useEffect(() => {
    const titleURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    axios.get(titleURL).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, []);

  // Call genre api
  useEffect(() => {
    const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
    axios.get(genreURL).then((res) => {
      console.log(res.data.genres);
      setSelectGenres(res.data.genres);
    });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Movie</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="watchlist">My Watchlist</Nav.Link>
          <NavDropdown title="Genres" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
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
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search movies..."
            className="mr-sm-2"
            value={inputVal}
            onChange={handleChange}
          />
          <Button variant="outline-info" onClick={handleSubmit}>
            Search
          </Button>
        </Form>
      </Navbar>
      <br/>
      <div className = "container"> 
      {movies.map((movie) => {
                if (movie.poster_path !== null) {
                    return ( 
                      <div className = "wholecard" >
                        <Card style = {{ width: '18rem' }}>
                        <Card.Img variant = "top" src = {`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}/> 
                        <Card.Body>
                        <Card.Title> {movie.title} </Card.Title> 
                        <Card.Text>
                        </Card.Text> 
                        </Card.Body> 
                        </Card> 
                        </div>
                    );
                }
            })
        } 
        </div> 
        </>
);
};
export default MovieApp;
        

//  <Poster    
//             key={movie.id}
//             height= {"300px"}
//             width= {"200px"}
//             movieid={movie.id}
//             rating={movie.vote_average}
//             srcvalue={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
//             movietitle={movie.title}/>