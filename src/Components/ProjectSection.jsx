import React from 'react'
import ProjectCard from './ProjectCard'
import { Link, NavLink } from 'react-router-dom';

const ProjectSection = () => {
    return (
        <div style={{ margin: '40px', display: 'flex', height: '70vh' }}>

            <Link to={'/project/details'} style={{textDecoration: 'none'}}>
                <ProjectCard />
            </Link>
            <Link to={'/project/details'} style={{textDecoration: 'none'}}>
                <ProjectCard />
            </Link>


        </div>
    )
}

export default ProjectSection
