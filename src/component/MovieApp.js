import React, { useState, useEffect } from "react";
import axios from "axios";
import Poster from './Poster';
import './MovieApp.css';
import {useHistory} from 'react-router-dom';
import {DropdownButton, Dropdown, Card, CardDeck} from 'react-bootstrap';

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [selectGenres,  setSelectGenres] = useState([]);
  const history = useHistory();

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

  const handleWatchList = () => {
    history.push("watchlist");
  }

  // Select genre
  const handleGenre = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const findGenreURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=${event.target.value}`;
    axios.get(findGenreURL).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }


  // On page load, show popular movies 
  useEffect(() => {
    const titleURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    axios.get(titleURL).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
    });
  }, []);

  // Genre dropdown list
  useEffect(() => {
    const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    axios.get(genreURL).then((res) => {
      console.log(res.data.genres);
      setSelectGenres(res.data.genres);
    })
  },[]);

  return (
    <div className="searchbar">
      <h1>Movies</h1>
      <form>
        <input
          type="text"
          placeholder="Search movies..."
          value={inputVal}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Search</button>
        < br/>
          <DropdownButton id="search-genre" title="Search Genre">
            <Dropdown.ItemText>List of Genres</Dropdown.ItemText>
            {
              selectGenres.map((genre) => {
                return (
                  <Dropdown.Item key={genre.id} value={genre.id} onClick={handleGenre} as="button">{genre.name}</Dropdown.Item>
                )
              })
            }
          </DropdownButton>
        < br/>
        <button onClick={handleWatchList}>My Watchlist</button>
      </form>
      <div className="row">
        <div className="container">
      {/* <div className="grid"> */}
      {movies.map((movie) => {
        if (movie.poster_path !== null) {
          return (
            <div className="cardcol" style={{width: "350px", height: "350px", margin: "40px"}}>
  <Card className="carddetail" style={{"margin-bottom": "10px!important"  }}>
    <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
    <Card.Body style={{padding: "10px"}}>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    </Card>
    </div>
        

//  <Poster    
//             key={movie.id}
//             height= {"300px"}
//             width= {"200px"}
//             movieid={movie.id}
//             rating={movie.vote_average}
//             srcvalue={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
//             movietitle={movie.title}/>
          );
        }
      })}
      </div>
    </div>
    </div>
  );
};

export default MovieApp;
