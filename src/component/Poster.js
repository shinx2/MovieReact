import React from "react";
import "./Poster.css";
import {useHistory} from 'react-router-dom';


const Poster = (props) => {
    const history = useHistory();

    const handleImgClick = () => {
        localStorage.setItem("movieID", props.movieid);
        history.push("overview");
    }

  return (

    
    <div className="moviecard" key={props.movieid} style={{height: props.height, width: props.width}}>
      <img
        height={props.height}
        width={props.width}
        key={props.movieid}
        src={props.srcvalue}
        alt={props.movietitle}
        onClick={handleImgClick}
      ></img>
      <h4>{props.movietitle}</h4>
      <h5>{props.rating}</h5>
    </div>
  );
};

export default Poster;
