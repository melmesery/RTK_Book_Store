import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Addform from "./AddForm.jsx";
import BookContainer from "./Book/BookContainer.jsx"; 

const Library = () => {
  return (
    <Container>
      <Addform />
      <BookContainer />
    </Container>
  );
};

export default Library;
