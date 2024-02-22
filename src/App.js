import { Heading } from "./Heading";
// import webdev from "./webdev.png";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

const movies = [
  {
    imdbID: "tt1375666",
    Title: "Web Development",
    about:
      "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.",
    Year: "2010",
    Poster:
      "https://t4.ftcdn.net/jpg/02/83/46/33/240_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "App development",
    Year: "1985",
    Poster:
      "https://t4.ftcdn.net/jpg/04/04/21/61/240_F_404216128_AzxvFH2p321asyRWiGfH9G7XmqLb8zl8.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt1375668",
    Title: "UI/UX Design",
    about:
      "Product & UI/UX Design workshops focus on the principles and processes of creating user-centered digital products. Participants learn design thinking, prototyping, and user interface/user experience (UI/UX) design skills to craft effective and user-friendly solutions.",
    Year: "2010",
    Poster:
      "https://stock.adobe.com/images/toolkit-ui-ux-scene-creator-concept/485914714",
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
    Title: "Web Development",
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
          <p>{movie.about}</p>
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

function MovieDetails() {
  return (
    <div>
      <div>
        {" "}
        <h2>About</h2>
        <p></p>
      </div>
      <div>
        {" "}
        <h2>Schedule</h2>
        <p></p>
      </div>
      <div>
        {" "}
        <h2>incentives</h2>
        <p></p>
      </div>
      <div>
        {" "}
        <h2>Accomodation</h2>
        <p></p>
      </div>
      <div>
        {" "}
        <h2>Contact</h2>
        <p></p>
      </div>
    </div>
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
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <h3>
        {" "}
        About Vibrant Vista - A Festival by Dr. B.R. Ambedkar University
        Srikakulam{" "}
      </h3>
      <p>
        Welcome to Vibrant Vista, an electrifying celebration of innovation and
        creativity presented by Dr. B.R. Ambedkar University Srikakulam! Vibrant
        Vista, hosted by Dr. B.R. Ambedkar University Srikakulam, is a dynamic
        engineering festival that seeks to inspire and propel the brightest
        minds in the world of technology. Our mission is to provide a platform
        where students can unleash their potential, engage in collaborative
        learning, and contribute to the ever-evolving landscape of engineering.
      </p>
    </div>
  );
}

function BackBtn() {
  return (
    <Link to="/">
      <div className="back-btn">↩</div>
    </Link>
  );
}

export default App;
