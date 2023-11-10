import "./Hero.css";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div id="hero">
      <Navbar />
      <div className="container">
        <div className="head-content">
          <h1 className="head-main">
            Dive into <span className="main-c">Anime</span> World <br />
            at My Gallery
          </h1>
          <p className="head-sub">Where Frames Speak Louder than Words! </p>

          <a href="#slider">
            <button className="btn btn-primary abc-button">SEE MORE</button>
          </a>
        </div>
      </div>
    </div>
  );
}
