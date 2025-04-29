import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useVisitStats from '../hooks/useVisitStats';

const AppNavbar = () => {
    const [colorMode, setColorMode] = useState('LIGHT');
    const { stats, loading } = useVisitStats();

    useEffect(() => {
        const mode = localStorage.getItem('colorMode');
        setColorMode(mode || 'LIGHT');
    }, []);

    const navLinkStyle = ({ isActive }) => ({
        textDecoration: 'none',
        margin: '12px',
        color: isActive ? 'black' : 'grey',
        fontWeight: isActive ? 'bold' : 'normal',
        borderBottom: isActive ? '2px solid black' : 'none',
    });

    const titleNavLinkStyle = {
        textDecoration: 'none',
        margin: '12px',
        fontSize: '20px',
        color: 'black',
    };

    return (
        <Navbar bg="light" expand="md" className="py-3">
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" style={titleNavLinkStyle}>
                    Sharmila S P
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/publication" style={navLinkStyle}>Publications</NavLink>
                        <NavLink to="/news" style={navLinkStyle}>Articles</NavLink>
                        <NavLink to="/teaching" style={navLinkStyle}>Teachings</NavLink>
                        <NavLink to="/research-interests" style={navLinkStyle}>Research Interests</NavLink>
                        <NavLink to="/project" style={navLinkStyle}>Project</NavLink>
                    </Nav>
                    <div className="d-flex flex-column flex-md-row align-items-center gap-3 mt-3 mt-md-0">
                        <p className="mb-0">
                            <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'grey' }}>
                                {loading ? '...' : stats.totalVisitors}
                            </span> Visitors
                        </p>
                        <p className="mb-0 me-md-4">
                            <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'grey' }}>
                                {loading ? '...' : stats.totalVisits}
                            </span> Visits
                        </p>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;