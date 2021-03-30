import React, {useEffect} from 'react';
import axios from 'axios';
import {MovieContext} from '../context/MovieContext';


const youtubeKey = `${process.env.REACT_APP_YOUTUBE_KEY}`;


const Trailer = (props) =>  {

    useEffect(() => {
        const trailerURL = `https://www.googleapis.com/youtube/v3/search?q=${props.movieid}trailer&part=snippet&type=video&pageInfo.resultsPerPage=2&videoEmbeddable=true&key=${youtubeKey}`
        axios.get(trailerURL).then((res) => {
          console.log(res.data.id.videoId);
        //   MovieContext(res.data.id.videoId);
        });
      }, [props.movieID]);

    return (
        <div>
        <iframe
        width="560"
        height="315"
        // src={`https://www.youtube.com/embed/${results}?rel=0`}
        frameborder="0"
        allow="encrypted-media"
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen"
        msallowfullscreen="msallowfullscreen"
        oallowfullscreen="oallowfullscreen"
        webkitallowfullscreen="webkitallowfullscreen"
      ></iframe>
        </div>
    )
}

export default Trailer;
