import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../store/BookSlice.js";

const Addform = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      desc: descRef.current.value,
    };
    dispatch(addBook(bookData));
    e.target.reset();
  };

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control mb-2 rounded-0"
              id="title"
              required
              ref={titleRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control mb-2 rounded-0"
              id="price"
              required
              ref={priceRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control mb-2 rounded-0"
              id="Description"
              rows="3"
              required
              ref={descRef}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary rounded-0"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </form>
      </Col>
      <hr className="my-5" />
    </Row>
  );
};

export default Addform;
