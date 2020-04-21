import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    NavbarText
} from 'reactstrap';



function Header({loggedIn, setLoggedIn, setCreateModal}) {

    function logUserOut() {
        localStorage.removeItem("token")
        setLoggedIn(false)
    }

    function loadSignIn() {
        setCreateModal(false)
    }

    const logIn = <NavbarText><Link to="/"  onClick={loadSignIn}>Log In</Link></NavbarText>;
    const logOut = <NavbarText><Link to="/" onClick={logUserOut}>Log Out</Link></NavbarText>;

    return (
        <div className="header">
            <Navbar color="light" light expand="md">
                <Link className="navbar-brand" to="/">Job Tracker</Link>
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/companies">Target Companies Applications</Link>
                    <Link className="nav-link" to="/materials">Job Search Materials</Link>
                    <Link className="nav-link" to="/network">Networking Contacts</Link>
                    <Link className="nav-link" to="/resources">Resources</Link>
                </Nav>
                {loggedIn ? logOut : logIn}
            </Navbar>
        </div>
    );
}

export default Header;
