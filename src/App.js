import { Heading } from "./Heading";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { Drop } from "./Drop";

const competitions = [
  {
    imdbID: "tt4",
    Title: "Art Competition",
    Year: "1985",
    about:
      "An art competition is a platform for artists to showcase their creativity and skills, engaging in a friendly yet competitive environment to gain recognition and possibly win awards for their artistic achievements.",
    Poster:
      "https://t4.ftcdn.net/jpg/07/27/13/81/240_F_727138149_6QWtSPTiVDzeLIdFtYPCFg7Btsvzxuex.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt5",
    Title: "Web/App Hackthon",
    Year: "2010",
    about:
      "A web hackathon is a coding event where teams work together in a short time to build and create websites or web applications. It's a fun challenge to showcase programming and problem-solving abilities.",
    Poster:
      "https://t4.ftcdn.net/jpg/02/87/55/79/240_F_287557939_1nPdlpdptbTreAi24RW2kIgh8Ce4y8Aq.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt6",
    Title: "Presentation Work",
    Year: "1985",
    about:
      "In a presentation competition, people take turns showing and talking about interesting topics using slides or speeches. It's like a friendly show-and-tell to share ideas and communication skills.",
    Poster:
      "https://t3.ftcdn.net/jpg/01/71/67/84/240_F_171678425_xtWfZTmft4HUGJvtUyvldBL4KT7PCXT0.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt7",
    Title: "Chess Competition",
    Year: "2010",
    about:
      "In a chess competition, players use strategy and skill to outsmart each other on the chessboard. It's like a mental game of tactics and moves where the goal is to checkmate the opponent's king.",
    Poster:
      "https://t3.ftcdn.net/jpg/00/82/82/16/240_F_82821694_uOTmYkhQxSVfiwGYyr7eJNjcHi3g2pXn.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
];

const workShops = [
  {
    imdbID: "tt1",
    Title: "Web Development",
    about:
      "Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.",
    Year: "2010",
    Poster:
      "https://t4.ftcdn.net/jpg/02/83/46/33/240_F_283463385_mfnrx6RPU3BqObhVuVjYZjeZ5pegE7xq.jpg",
    dates: "5th,6th",
    timings: "2:00 PM - 4:00 PM",
    accommodation: "",
    incharge1: "Ramana",
    incharge2: "Phani",
    mobile1: "7672073206",
    mobile2: "1234567890",
    email1: "ramanakunam16@gmail.com",
    email2: "1234567890",
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt2",
    Title: "App development",
    Year: "1985",
    about:
      "Product & UI/UX Design workshops focus on the principles and processes of creating user-centered digital products. Participants learn design thinking, prototyping, and user interface/user experience (UI/UX) design skills to craft effective and user-friendly solutions.",
    Poster:
      "https://t4.ftcdn.net/jpg/04/04/21/61/240_F_404216128_AzxvFH2p321asyRWiGfH9G7XmqLb8zl8.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
    dates: "5th,6th",
    timings: "2:00 PM - 4:00 PM",
    accommodation: "",
    incharge1: "Ramana",
    incharge2: "Phani",
    mobile1: "7672073206",
    mobile2: "1234567890",
    email1: "ramanakunam16@gmail.com",
    email2: "1234567890",
  },
  {
    imdbID: "tt3",
    Title: "UI/UX Design",
    about:
      "Product & UI/UX Design workshops focus on the principles and processes of creating user-centered digital products. Participants learn design thinking, prototyping, and user interface/user experience (UI/UX) design skills to craft effective and user-friendly solutions.",
    Year: "2010",
    Poster:
      "https://t4.ftcdn.net/jpg/05/67/64/29/240_F_567642900_ybeyHMqPU4wAWeaxIiXEIax5qmlF1rv6.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
];

// const contents = {};

function App() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSlectedId(id) {
    setSelectedId(id);
  }
  return (
    <>
      {/* {slectedId && <MovieDetails selectedId={selectedId} movies={movies} />} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Heading />}></Route>
          <Route path="about-us" element={<About />}></Route>
          <Route
            path="compitations"
            element={
              <>
                <HomeBackBtn />
                <Drop />
                <h1 className="head">Compitation</h1>
                <CompetitionList
                  onSelectedId={handleSlectedId}
                  selectedId={selectedId}
                />
              </>
            }
          ></Route>
          <Route
            path="workshop"
            element={
              <>
                <HomeBackBtn />
                <Drop />
                <WorkShopList
                  onSelectedId={handleSlectedId}
                  selectedId={selectedId}
                />
              </>
            }
          ></Route>
          <Route path="/competition/:id" element={<CompetitionDetails />} />
          <Route path="/workshop/:id" element={<WorkshopDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Competition({ competition, onSelectedId, selectedId }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    onSelectedId(competition.imdbID);
    // console.log(competition);
    navigate(`/competition/${competition.imdbID}`, { state: { competition } }); // Pass competition object as state
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div>
          <img src={competition.Poster} alt={`${competition.Title} poster`} />
          <h3>{competition.Title}</h3>
        </div>
      )}
      {isHovered && (
        <div className="details">
          <p>{competition.about}</p>
          <div className="options">
            <>
              <button onClick={handleClick}>Know More</button>
            </>

            <button>Register</button>
          </div>
        </div>
      )}
    </div>
  );
}

function CompetitionList({ onSelectedId, selectedId }) {
  return (
    <div className="list">
      {competitions?.map((competition) => (
        <div>
          <Competition
            competition={competition}
            key={competition.imdbID}
            onSelectedId={onSelectedId}
            selectedId={selectedId}
          />
          {/* {competition.imdbID === selectedId && <MovieDetails competition={competition} />} */}
        </div>
      ))}
    </div>
  );
}

function CompetitionDetails({ selectedId }) {
  const location = useLocation();
  console.log(location);
  const competition = location.state?.competition || {};
  console.log(competition);
  return (
    <>
      <CpmpetitionBackBtn />
      <div className="movieDetails">
        <h1>{competition.Title}</h1>
        <div>
          <h2>About</h2>
          <p>{competition.about}</p>
        </div>
        <img src={competition.Poster} alt={"topic img"} />
        <div>
          {" "}
          <h2>Schedule</h2>
          <p>
            <b>Dtaes: </b> {competition.dates}
          </p>
          <p>
            <b>Timings:</b> {competition.timings}
          </p>
        </div>
        <div>
          {" "}
          <h2>Contact</h2>
          <p>{competition.incharge1}--</p>
          <p>📱 {competition.mobile1}</p>
          <p>📧 {competition.email1}</p>
          <p>{competition.incharge2}--</p>
          <p>📱 {competition.mobile2}</p>
          <p>📧 {competition.email2}</p>
        </div>
        <div>
          <button>Register</button>
        </div>
      </div>
    </>
  );
}

function Workshop({ workShop, onSelectedId, selectedId }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    onSelectedId(workShop.imdbID);
    // console.log(competition);
    navigate(`/workshop/${workShop.imdbID}`, { state: { workShop } }); // Pass competition object as state
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered && (
        <div>
          <img src={workShop.Poster} alt={`${workShop.Title} poster`} />
          <h3>{workShop.Title}</h3>
        </div>
      )}
      {isHovered && (
        <div className="details">
          <p>{workShop.about}</p>
          <div className="options">
            <>
              <button onClick={handleClick}>Know More</button>
            </>

            <button>Register</button>
          </div>
        </div>
      )}
    </div>
  );
}
function WorkShopList({ onSelectedId, selectedId }) {
  return (
    <div className="list">
      {workShops?.map((workShop) => (
        <div>
          {" "}
          <Workshop
            workShop={workShop}
            key={workShop.imdbID}
            onSelectedId={onSelectedId}
            selectedId={selectedId}
          />
        </div>
      ))}
    </div>
  );
}

function WorkshopDetails({ selectedId }) {
  const location = useLocation();
  console.log(location);
  const workshop = location.state?.workShop || {};
  console.log(workshop);
  return (
    <>
      <WorkshopBackBtn />
      <div className="movieDetails">
        <h1>{workshop.Title}</h1>
        <div>
          <h2>About</h2>
          <p>{workshop.about}</p>
        </div>
        <img src={workshop.Poster} alt={"topic img"} />
        <div>
          {" "}
          <h2>Schedule</h2>
          <p>
            <b>Dtaes: </b> {workshop.dates}
          </p>
          <p>
            <b>Timings:</b> {workshop.timings}
          </p>
        </div>
        <div>
          {" "}
          <h2>Contact</h2>
          <p>{workshop.incharge1}--</p>
          <p>📱 {workshop.mobile1}</p>
          <p>📧 {workshop.email1}</p>
          <p>{workshop.incharge2}--</p>
          <p>📱 {workshop.mobile2}</p>
          <p>📧 {workshop.email2}</p>
        </div>
        <div>
          <button>Register</button>
        </div>
      </div>
    </>
  );
}
export function WorkShops() {
  return (
    <div className="workshop">
      <h1>Workshops</h1>
      <p style={{ color: "#fff" }}>
        jbbfhhfvbjndlihfuhfbndksfhgbvfndslkhgbndkjefhbfnvdkshbfndkefhb
      </p>
      <Link to="/workshop">
        <button>Know More</button>
      </Link>
    </div>
  );
}

export function Compitations() {
  return (
    <>
      <div className="compitations">
        <h1>Compitations</h1>
        <p>
          Vibrant vists often feature a variety of captivating competitions that
          showcase the technical and creative prowess of participants. These
          competitions serve as platforms for engineering students to apply
          their knowledge, hone their skills, and foster a spirit of innovation.
        </p>
        <Link to="/compitations">
          <button>Know More</button>
        </Link>
      </div>
    </>
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

function HomeBackBtn() {
  return (
    <Link to="/">
      <div className="back-btn">↩</div>
    </Link>
  );
}
function CpmpetitionBackBtn() {
  return (
    <Link to="/compitations">
      <div className="back-btn">↩</div>
    </Link>
  );
}
function WorkshopBackBtn() {
  return (
    <Link to="/workshop">
      <div className="back-btn">↩</div>
    </Link>
  );
}

export default App;
