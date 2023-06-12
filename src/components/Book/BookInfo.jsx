import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const BookInfo = ({ bookInfo }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {bookInfo ? (
        <div>
          <Card className="rounded-0 p-2 mb-2">
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0">Title: </p>
              <h4 className="text-primary mb-0">{bookInfo.title}</h4>
            </div>
          </Card>
          <Card className="rounded-0 p-2 mb-2">
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0">Author: </p>
              <h4 className="text-success mb-0">{bookInfo.author}</h4>
            </div>
          </Card>
          <Card className="rounded-0 p-2 mb-2">
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0">Description: </p>
              <h4 className="text-primary mb-0">{bookInfo.desc}</h4>
            </div>
          </Card>
          <Card className="rounded-0 p-2 mb-2">
            <div className="d-flex gap-2 align-items-center">
              <p className="mb-0">Price: </p>
              <h4 className="text-primary mb-0">{bookInfo.price} LE</h4>
            </div>
          </Card>
        </div>
      ) : (
        <div className="alert alert-secondary rounded-0" role="alert">
          There is no book selected yet.
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
