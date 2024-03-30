import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./state/store";
import { increment } from "./state/counter/counterSlice";
import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./data/movies";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const {
    data: movies,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  console.log(isError, "qual erro?");

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  if (isError) {
    return <h1>Deu erro na api!</h1>;
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment(100))}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        {movies?.genres.map((movie) => (
          <h1> {movie.name} </h1>
        ))}
      </div>
    </>
  );
}

export default App;
