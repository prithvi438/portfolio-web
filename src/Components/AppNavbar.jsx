import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
    const [colorMode, setColorMode] = useState('LIGHT');

    useEffect(() => {
        const mode = localStorage.getItem('colorMode');
        setColorMode(mode || 'LIGHT');
    }, []);

    const navLinkStyle = ({ isActive }) => ({
        textDecoration: 'none',
        margin: '12px',
        color: isActive ? 'black' : 'grey',  // black when active, grey when not
        fontWeight: isActive ? 'bold' : 'normal',
        borderBottom: isActive ? '2px solid black' : 'none',  // optional underline
    });

    const titleNavLinkStyle = { 
        textDecoration: 'none', 
        margin: '12px', 
        fontSize: '20px', 
        color: 'black' 
    };

    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <NavLink to="/" style={titleNavLinkStyle}>My Portfolio</NavLink>
                <Nav className="me-auto">
                    <NavLink to="/publication" style={navLinkStyle}>Publications</NavLink>
                    <NavLink to="/project" style={navLinkStyle}>Project</NavLink>
                    <NavLink to="/news" style={navLinkStyle}>Articles</NavLink>
                    <NavLink to="/teaching" style={navLinkStyle}>Teachings</NavLink>
                    <NavLink to="/research-interests" style={navLinkStyle}>Research Interests</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;