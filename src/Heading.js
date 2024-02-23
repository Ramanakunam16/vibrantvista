import { Slides } from "./Slides";
import { Drop } from "./Drop";
import logo from "./logo.PNG";

export function Heading() {
  return (
    <>
      <Drop />
      <Slides />
      <img src={logo} alt={"logo"} className="logopic" />
      <div className="logo">
        <h2>VibrantVista`24 </h2>
        <h2>VibrantVista`24 </h2>
      </div>
    </>
  );
}
