import React, { useEffect, useState } from "react";
import axios from "axios";

const apiKey = `${process.env.REACT_APP_API_KEY}`;

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (props.movieid !== undefined) {
      const reviewURL = `https://api.themoviedb.org/3/movie/${props.movieid}/reviews?api_key=${apiKey}&language=en-US&page=1`;
      axios.get(reviewURL).then((res) => {
        console.log(res.data.results);
        setReviews(res.data.results);
      });
    }
  }, [props.movieid]);

  return (
    <div>
      {reviews.map((review) => {
        return (
          <div key={review.id}>
            <h3>{review.author}</h3>
            {/* <img src= {`http://image.tmdb.org/t/p/w185/${review.author_details.avatar_path}`} alt={review.author_details.username} style={height=30, width= 30}/> */}
            <h4>{review.content}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
