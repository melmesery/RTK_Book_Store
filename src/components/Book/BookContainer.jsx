import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook, getBooks, readBook } from "../../store/BookSlice.js";
import styles from "./Book.module.css";
import BookInfo from "./BookInfo.jsx";
import BooksList from "./BooksList.jsx";

const BookContainer = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error, bookInfo } = useSelector(
    (state) => state.book
  );

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Row className="pb-5">
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 0 }}>
        <BooksList
          isLoading={isLoading}
          books={books}
          error={error}
          deleteBook={deleteBook}
          readBook={readBook}
          dispatch={dispatch}
        />
      </Col>
      <Col
        xs={{ span: 10, offset: 1 }}
        md={{ span: 6, offset: 0 }}
        className={styles.side_line}
      >
        <BookInfo bookInfo={bookInfo} />
      </Col>
    </Row>
  );
};

export default BookContainer;
