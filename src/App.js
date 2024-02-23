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
    Title: "Art mania",
    Year: "1985",
    about:
      "An art mania is a platform for artists to showcase their creativity and skills in drawings,image and video editing, engaging in a friendly yet competitive environment to gain recognition and possibly win awards for their artistic achievements.",
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
    form: "https://forms.gle/xePiRN7KhSEsiz1a9",
  },
  {
    imdbID: "tt6",
    Title: "Tool Hunt",
    about:
      "Tool Hunt is a challenging game where participants must swiftly identify various tools presented within a specified time frame. Sharpen your knowledge and test your tool recognition skills in this engaging and fast-paced competition!",
    Poster:
      "https://t3.ftcdn.net/jpg/06/90/79/04/240_F_690790406_hQAydhaoJE2ROC0Z8pKBGQiXPSZQvsGd.jpg",
    dates: "5th,6th",
    timings: "2:00 PM - 4:00 PM",
    accommodation: "",
    incharge1: "Jayanth",
    incharge2: "",
    mobile1: "9550457006",
    mobile2: "",
    email1: "",
    email2: "",
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
  {
    imdbID: "tt3",
    Title: "CADATHON",
    about:
      "cadathon is a competitive event where participants in the field of computer adied design(CAD) collaborate to solve design challenges within a specified time frame. it typically involves creating 3D models using the software CATIA V5, and judges evaluate the enters based on  innovation, ",
    Year: "2010",
    Poster:
      "https://t3.ftcdn.net/jpg/04/83/18/68/240_F_483186822_Ak9c9Lrb1lY7kRhWA7MqSnRRYhXVONEG.jpg",
    dates: "5th,6th",
    timings: "2:00 PM - 4:00 PM",
    accommodation: "",
    incharge1: "Jayanth",
    incharge2: "",
    mobile1: "9550457006",
    mobile2: "",
    email1: "",
    email2: "",
  },
  {
    imdbID: "tt6",
    Title: "PPT/Paper Presentation",
    Year: "1985",
    about:
      "In a presentation competition, people take turns showing and talking about any interesting  topics using slides or speeches. It's like a friendly show-and-tell to share ideas and communication skills.",
    Poster:
      "https://t3.ftcdn.net/jpg/01/71/67/84/240_F_171678425_xtWfZTmft4HUGJvtUyvldBL4KT7PCXT0.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
  {
    imdbID: "tt6",
    Title: "Start-up ideas",
    Year: "1985",
    about:
      "Engage in our Startup Ideas Competition, a platform for visionaries to pitch groundbreaking concepts.Unleash your entrepreneurial spirit, presenting innovative solutions with the potential to transform industries..",
    Poster:
      "https://as2.ftcdn.net/v2/jpg/02/38/40/55/1000_F_238405533_yyX4K55OmH2LiM7LQ01ITn6kl0b6J6K8.jpg",
  },
  {
    imdbID: "tt6",
    Title: "Project Expo",
    Year: "1985",
    about:
      "Elevate your ideas in our Project Presentation Competition, where innovation takes the spotlight.Showcase your creativity, problem-solving, and communication skills to a panel of esteemed judges.",
    Poster:
      "https://t4.ftcdn.net/jpg/06/63/16/53/240_F_663165377_z6TSXi9l92PVmJiO1AzMqJJNaOUhSnfb.jpg",
  },
];

const workShops = [
  {
    imdbID: "tt6",
    Title: "3D-Printing &it`s types",
    Year: "1985",
    about:
      "Join our 3D Printing Workshop to explore the fascinating world of additive manufacturing technologies.Learn hands-on skills in designing, slicing, and operating 3D printers to bring your ideas to life.Gain insights into the limitless possibilities of 3D printing",
    Poster:
      "https://t3.ftcdn.net/jpg/03/20/63/80/240_F_320638073_wNfI2qIbu9FIi9Pk6dyHmgV7rqE4ebKQ.jpg",
  },
  {
    imdbID: "tt6",
    Title: "Advance Matrials(Mechanical)&it`s Applications",
    Year: "1985",
    about:
      "Immerse yourself in our Mechanical Advanced Materials Workshop, where cutting-edge materials and techniques are explored.Learn how to harness the latest advancements in materials science.",
    Poster:
      "https://t3.ftcdn.net/jpg/07/14/32/30/240_F_714323074_3tzYTMfraqKmzykOR3zl4ECNPN8axT9B.jpg",
  },
];
const registrationForm = "https://forms.gle/xePiRN7KhSEsiz1a9";
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
                <h1 className="head">Competitions</h1>
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
                <h1 className="head">Workshops</h1>
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
            <button onClick={handleClick}>Know More</button>

            <button>
              <a href={registrationForm} className="links">
                Register
              </a>
            </button>
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
          <button>
            <a href={registrationForm} className="links">
              Register
            </a>
          </button>
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

            <button>
              <a href={registrationForm} className="links">
                Register
              </a>
            </button>
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
          <button>
            <a href={registrationForm} className="links">
              Register
            </a>
          </button>
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
