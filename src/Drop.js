import { useState } from "react";
import { Link } from "react-router-dom";

export function Drop() {
  const [isDropVisible, setIsDropVisible] = useState(false);
  function handleDrop() {
    setIsDropVisible(!isDropVisible);
  }
  return (
    <>
      <span className="drop" onClick={handleDrop}>
        {isDropVisible ? (
          <span className="close">&times;</span>
        ) : (
          <>
            <div className="menu-btn"></div>
            <div className="menu-btn"></div>
            <div className="menu-btn"></div>
          </>
        )}
      </span>
      {isDropVisible && (
        <div className="drop-content">
          <ul>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/compitations">Compitations</Link>
            </li>
            <li>
              <Link to="/workshop">Workshop</Link>
            </li>

            <li>Guest</li>
            <li>Sponsers</li>
            <li>Reach Us</li>
          </ul>
        </div>
      )}
    </>
  );
}
