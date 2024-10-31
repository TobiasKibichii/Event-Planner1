import { Navbar } from "./Navbar";
import "../index.css";
import { FaFire } from "react-icons/fa";

export const Home = () => {
  function InfoText() {
    return (
      <div className="info-text">
        <h2>
          We are globally available <FaFire className="fire-icon" />{" "}
        </h2>
        <h1>Curated Comforts at Your Fingertips</h1>
        <p>
          {" "}
          We responsible for organizing and coordinating various aspects of
          events, such as{" "}
          <i>
            {" "}
            <b>weddings, conferences, and parties</b>
          </i>
          . They manage logistics, including venue selection, catering, and
          entertainment, ensuring that everything runs smoothly. .{" "}
        </p>
      </div>
    );
  }
  function Ad() {
    return (
      <div className="ad-wrapper">
        <h3><span>Approved</span></h3>
        <h2>Offer Just for You!</h2>
        <p>Don’t miss out on our limited-time discounts on premium products.</p>
        <button>Go Offer!</button>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-display">
        <div className="text">
          <InfoText />
        </div>
        <div className="image">
          <Ad />
        </div>
      </div>


    </div>
  );
};
