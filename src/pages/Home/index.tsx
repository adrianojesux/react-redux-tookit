import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

import { AppState } from "./../../store";
import { increment, decrement } from "./../../store/slices/counter";

const Home: React.FC = () => {
  const { value } = useSelector((state: AppState) => state.counter);

  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div className="col">
      <div className="row">
        <h1>{value}</h1>
      </div>
      <div className="row">
        <button type="button" className="success" onClick={handleIncrement}>
          +
        </button>
        <button type="button" className="danger" onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

export default Home;
