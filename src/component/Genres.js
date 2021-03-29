import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {DropdownButton,Dropdown} from 'react-bootstrap';

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const Genres = () => {

  //CONTEXT MOVIELIST
  const [selectGenres,  setSelectGenres] = useState([]);

  const handleGenre = (event) => {
    event.preventDefault();
    console.log(event.target.value);


  }

  useEffect(() => {
    // https://api.themoviedb.org/3/discover/movie?api_key=925495faa74d82755699bf7791b2fcee&language=en-US&sort_by=popularity.desc&include_adult=false&with_genres=28
    const genreURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    axios.get(genreURL).then((res) => {
      console.log(res.data.genres);
      setSelectGenres(res.data.genres);
      
    })

  },[]);

  return (
    <div className="genre">
        <DropdownButton id="search-genre" title="Search Genre">
          <Dropdown.ItemText>List of Genres</Dropdown.ItemText>
          {/* <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item> */}
          {
             selectGenres.map((genre) => {
              return (
                <Dropdown.Item key={genre.id} value={genre.id} onClick={handleGenre} as="button">{genre.name}</Dropdown.Item>
              )
            })
          }
        </DropdownButton>
    </div>


  )
}


export default Genres;