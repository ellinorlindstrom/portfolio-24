import "../scss/NavBar.scss"; // Importing navbar-specific styles
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ThemeToggleButton from "./ThemeButton";
import profileimage from "../assets/images/elleamanda.jpeg";

const NavBar: React.FC = () => {
  return (
    <Navbar expand="md" className="navbar">
      <Container fluid className="px-0">
        <div className="image-title">
          <img
            src={profileimage}
            alt="profile image"
            className="profile-image"
          />
          <Navbar.Brand as={NavLink} to="/" className="title">
            <div className="main-title">ELLINOR</div>
            <div className="main-title">LINDSTRÖM</div>
            <div className="subtitle">PORTFOLIO</div>
          </Navbar.Brand>
        </div>
        <div className="d-none d-md-block theme-toggle-container">
          <ThemeToggleButton />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-links">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-nav-link" : "")
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-nav-link" : "")
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-nav-link" : "")
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active-nav-link" : "")
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav>
          <div className="d-md-none d-flex justify-content-center w-100 mt-3">
            <ThemeToggleButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
