import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
 import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()

    return (
        <div className="justify-content-center header">

            <Navbar  fixed="top" className="header" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h3 style={{ color: "darkblue", fontWeight: "900", fontFamily: "inherit" }}>TREVELIY</h3></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#offers">Offers</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#exoticPlaces">ExoticPlaces</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About US</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact">Contact US</Nav.Link>
                            <Nav.Link as={HashLink} to="/userdetails">Manage Booking</Nav.Link>

                            {user.email && <div><img style={{ width: "30px", height: "30px", borderRadius: "50%" }} src={user?.photoURL} alt="" /> <span>{user.displayName}</span> </div>}
                            {
                                user.email ?
                                    <button onClick={logOut} className="ms-4 custom-btn-header">log out</button>
                                    :
                                    <Nav.Link as={HashLink} to="/login"><span className="custom-btn-header my-2" style={{ textDecoration: "none" }}>Login</span></Nav.Link>}
                            <Nav.Link as={HashLink} to="/registration">Registration</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;