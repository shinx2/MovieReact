// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Recommendations = (props) => {
// const [recomm, setRecomm] = useState([]);

//     const apiKey = `${process.env.REACT_APP_API_KEY}`;

//     useEffect(() => {
//       if (props.movieid !== undefined) {
//         const recommURL = `https://api.themoviedb.org/3/movie/${props.movieid}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
//         axios.get(recommURL).then((res) => {
//           console.log(res.data.id);
//           setRecomm(res.data.id);
//         });
//       }}, [props.movieid]);

// return (
// <div>
//   <h3>Recommendations:</h3>
//   <h4>{recomm.id}</h4>
//   <img src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>

// </div>
// )

// }

// export default Recommendations;

