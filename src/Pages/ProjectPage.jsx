import React from 'react'
import ProjectSection from '../Components/ProjectSection'

const ProjectPage = () => {
  return (
    <div>
      <p style={{ fontSize: '34px', margin: '40px 20px 0px 40px' }}>Projects</p>
      <p style={{ fontSize: '18px', color: 'gray',margin: '0px 40px' }}>Funded Projects</p>

      <ProjectSection/>
    </div>
  )
}

export default ProjectPage
