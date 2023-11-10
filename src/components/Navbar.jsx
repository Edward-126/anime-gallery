import "./Navbar.css";
import navLogo from "../images/nav-logo.png";

export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <img src={navLogo} className="nav-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active nav-item-nav1"
                  aria-current="page"
                  href="#"
                >
                  ANIME GALLERY
                </a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex">
              <li className="nav-item">
                <a className="nav-link nav-item-nav" href="#">
                  FLY HIGH
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
