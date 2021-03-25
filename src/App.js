import './App.css';
import Movie from './component/Movie';


function App() {
  const api_key = `${process.env.REACT_APP_API_KEY}`;

  console.log(api_key);

  const genresURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`
  // const searchURL = 'https://api.themoviedb.org/3/search/movie?api_key=925495faa74d82755699bf7791b2fcee&language=en-US&page=1&include_adult=false&query=search'
  
  fetch(genresURL)
    .then(response => response.json())
    .then(json => console.log(json))
    console.log(genresURL);
  
  // fetch(searchURL)
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  //   console.log(searchURL);
    

  return (
    <div className="App">
    <h1>test</h1>

    </div>
  );
}

export default App;
