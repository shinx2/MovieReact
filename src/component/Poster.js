import React, { useState } from "react";
import "./Poster.css";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Poster = (props) => {
  const history = useHistory();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [show, setShow] = useState(false);

  const handleImgClick = () => {
    localStorage.setItem("movieID", props.movieid);
    history.push("overview");
  };

  //call trailer api

  return (
    <>
      <div className="wholecard">
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
                handleShow();
              }}
            ></Card.Img>
            <Card.Title>
              <p>{props.movietitle}</p>
            </Card.Title>
            <Card.Text>
              <p>Rating: {props.rating}</p>
            </Card.Text>
          </Card.Body>
          {props.showRemoveButton && (
            <Button
              value={props.movieid}
              variant="warning"
              size="sm"
              onClick={props.removeMovieMethod}
            >
              Remove from watchlist
            </Button>
          )}
        </Card>
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              width="420"
              height="315"
              src="https://www.youtube.com/embed/iqys_1pQdpg"
              frameborder="0"
              allowfullscreen
            ></iframe> */}
        {/* <iframe
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${}`}
            frameborder="0"
            allowfullscreen
          ></iframe>  */}
        {/* </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
      </div>
    </>
  );
};

export default Poster;
