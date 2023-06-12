import React from "react";
import Spinner from "../../UI/Spinner.jsx";

const BooksList = ({
  isLoading,
  books,
  error,
  deleteBook,
  readBook,
  dispatch,
}) => {
  const myBooks =
    books && books.length > 0
      ? books.map((book, index) => {
          return (
            <ul className="list-group" key={index}>
              <li className="list-group-item d-flex justify-content-between align-items-center mb-3 rounded-0">
                {book?.title}
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-primary rounded-0"
                    onClick={() => dispatch(readBook(book._id))}
                  >
                    Read
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger rounded-0"
                    onClick={() => dispatch(deleteBook(book._id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          );
        })
      : "There are no books available!";

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? (
        <Spinner />
      ) : myBooks ? (
        myBooks
      ) : (
        <div className="alert alert-danger rounded-0">{error}</div>
      )}
    </div>
  );
};

export default BooksList;
