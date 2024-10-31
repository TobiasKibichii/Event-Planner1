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
      <InfoText />
      <InfoText />

      <div class="relative p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
  <h3 class="text-xl font-bold text-gray-800 mb-2">Exclusive Offer Just for You!</h3>
  <p class="text-gray-600 mb-4">Get the latest in comfort and style. Don’t miss out on our limited-time discounts on premium products.</p>

  <a href="#" class="inline-block px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 font-semibold text-center">Shop Now</a>

  <span class="absolute top-4 right-4 bg-yellow-400 text-gray-800 font-semibold px-2 py-1 rounded text-xs">Sponsored</span>
</div>

    </div>
  );
};
