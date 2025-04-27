import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const AppNavbar = () => {
    // const navigate = useNavigate();
    const [colorMode, setColorMode] = useState('LIGHT');
    const navLinkStyle = {textDecoration: 'none', color: 'grey', margin: '12px' }
    const titleNavLinkStyle = {textDecoration: 'none', margin: '12px', fontSize: '20px', color: 'black' }

    useEffect(() => {
        const mode = localStorage.getItem('colorMode');
        setColorMode(mode || 'LIGHT');
    }, []);

    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <NavLink to={"/"} style={titleNavLinkStyle}>My Portfolio</NavLink>
          <Nav className="me-auto">
            


            {/* <Nav.Link href="/publication">Publication</Nav.Link>
            <Nav.Link href="/project">Project</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/teaching">Teachings</Nav.Link>
            <Nav.Link href="#pricing">Talks</Nav.Link> */}

            <NavLink to={"/publication"} style={navLinkStyle}>Publications</NavLink>
            <NavLink to={"/project"} style={navLinkStyle}>Project</NavLink>
            <NavLink to={"/news"} style={navLinkStyle}>Articles</NavLink>
            <NavLink to={"/teaching"} style={navLinkStyle}>Teachings</NavLink>
            <NavLink to={"/talks"} style={navLinkStyle}>Talks</NavLink>

          </Nav>
        </Container>
      </Navbar>
    );
};

export default AppNavbar;
