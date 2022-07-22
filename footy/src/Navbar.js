import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    // <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto nav- nav navbar-nav ms-auto" >
    //         <Nav.Link as={Link} to= {"/home"}>Home</Nav.Link>
    //         <Nav.Link as={Link} to= {"/about"}>About</Nav.Link>
    //         <Nav.Link as={Link} to= {"/courses"}>Courses</Nav.Link>
    //         <Nav.Link as={Link} to= {"/amenities"}>Amenities</Nav.Link>
    //         <Nav.Link as={Link} to= {"/videoDrills"}>Video Drills</Nav.Link>
    //         <Nav.Link as={Link} to= {"/contact"}>Contact</Nav.Link>
    //         <Nav.Link as={Link} to= {"/joinUs"}>JoinUs</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <section id="home">
    <div className="container-fluid">

      <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
        {/* <a className="navbar-brand" href=""><img src="images/logo.png" width="120" height="120" alt=""/></a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#toggler1" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggler1">
          <ul className="navbar-nav nav nav-tabs ms-auto">
            <li className = "nav-item">
              <Nav.Link as={Link} to= {"/home"}>Home</Nav.Link>
            </li>
            <li className = "nav-item">
              <Nav.Link as={Link} to= {"/courses"}>Courses</Nav.Link>
            </li>
            <li className = "nav-item">
            <Nav.Link as={Link} to= {"/amenities"}>Amenities</Nav.Link>
            </li>
            <li className = "nav-item">
            <Nav.Link as={Link} to= {"/videoDrills"}>Video Drills</Nav.Link>
            </li>
            <li className = "nav-item">
            <Nav.Link as={Link} to= {"/joinUs"}>JoinUs</Nav.Link>
            </li>
            <li className = "nav-item">
            <Nav.Link as={Link} to= {"/FAQS"}>FAQS</Nav.Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  );
}

export default NavBar;