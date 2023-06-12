import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { replace } from "../store/AuthSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <nav className="navbar navbar-dark bg-success px-4">
      <h1 className="navbar-brand mb-0">My Books</h1>
      <button
        className="btn btn-success"
        type="submit"
        onClick={() => dispatch(replace())}
      >
        {isLoggedIn ? "Log out" : "Login"}
      </button>
    </nav>
  );
};

export default Header;
