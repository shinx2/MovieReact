import React, { useState } from "react";
import "./Poster.css";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Poster = (props) => {
  const history = useHistory();

  
  const [show, setShow] = useState(false);

  const handleImgClick = () => {
    localStorage.setItem("movieID", props.movieid);
    history.push("overview");
  };

  //call trailer api

  return (
    <>
      <div className="wholecard" sytle={{overflowY: "auto"}}>
        <br />
        <Card
          key={props.movieid}
          style={{
            width: props.width,
            maxHeight: props.height,
            marginRight: "10px",
          }}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={props.srcvalue}
              onClick={() => {
                handleImgClick();
              }}
            ></Card.Img>
            <Card.Title>
              <p>{props.movietitle}</p>
            </Card.Title>
            {!props.showRemoveButton && <Card.Text>
              <p>Rating: {props.rating}</p>
            </Card.Text>}
            {props.showRemoveButton && (
             <Button variant="warning" size="sm" value={props.movieid} onClick={props.removeMovieMethod}>Remove</Button>
              )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Poster;
