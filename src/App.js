import { Heading } from "./Heading";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const movies = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt1375668",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088790",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt13756676",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt008879",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt13756676",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt008879",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

// const contents = {};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heading />}></Route>
        <Route path="about-us" element={<About />}></Route>
        <Route path="compitations" element={<MovieList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Movie({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
        </div>
      )}
      {isHovered && (
        <div className="details">
          <p>helofjdkjdsss</p>
          <div className="options">
            <button>Know More</button>
            <button>Register</button>
          </div>
        </div>
      )}
    </li>
  );
}

function MovieList() {
  return (
    <>
      <BackBtn />
      <ul className="list ">
        {movies?.map((movie) => (
          <Movie movie={movie} key={movie.imdbID} />
        ))}
      </ul>
    </>
  );
}

export function WorkShop() {
  return (
    <div className="workshop">
      <p style={{ color: "#fff" }}>
        jbbfhhfvbjndlihfuhfbndksfhgbvfndslkhgbndkjefhbfnvdkshbfndkefhb
      </p>
      <button>Know More</button>
    </div>
  );
}
export function Sports() {
  return (
    <div className="sports">
      <p>jbbfhhfvbjndlihfuhfbndksfhgbvfndslkhgbndkjefhbfnvdkshbfndkefhb</p>
      <button>Know More</button>
    </div>
  );
}
export function Compitations() {
  return (
    <div className="compitations">
      <h1>Compitations</h1>
      <p>
        Vibrant vists often feature a variety of captivating competitions that
        showcase the technical and creative prowess of participants. These
        competitions serve as platforms for engineering students to apply their
        knowledge, hone their skills, and foster a spirit of innovation.
      </p>
      <Link to="/compitations">
        <button>Know More</button>
      </Link>
    </div>
  );
}
function About() {
  {
    return (
      <div className="about-us">
        <h1>About Us</h1>
        <h3>
          {" "}
          About Vibrant Vista - A Festival by Dr. B.R. Ambedkar University
          Srikakulam{" "}
        </h3>
        <p>
          Welcome to Vibrant Vista, an electrifying celebration of innovation
          and creativity presented by Dr. B.R. Ambedkar University Srikakulam!
          Vibrant Vista, hosted by Dr. B.R. Ambedkar University Srikakulam, is a
          dynamic engineering festival that seeks to inspire and propel the
          brightest minds in the world of technology. Our mission is to provide
          a platform where students can unleash their potential, engage in
          collaborative learning, and contribute to the ever-evolving landscape
          of engineering.
        </p>
      </div>
    );
  }
}

function BackBtn() {
  return (
    <Link to="/">
      <div className="back-btn">↩</div>
    </Link>
  );
}
export default App;
