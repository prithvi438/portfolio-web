import React from 'react'

const ProjectCard = () => {
  return (
    <div style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', margin: '20px', padding: '20px', borderRadius: '12px', width: '390px', height: '450px'}}>
        <div style={{marginBottom: '30px'}}>
        <img src="https://murarimandal.github.io/assets/img/serblogo-480.webp" alt="My Image" className="image" height={"160px"}/>
        </div>
      <p style={{fontSize: '24px', color: '#ADD8E6', fontWeight: 'bold'}}>SERB Startup Research Grants</p>
      <p style={{fontSize: '16px', color: 'grey'}}>SERB Funded Project [JAN-2024-Present]</p>
      <p style={{fontSize: '14px', color: 'grey'}}>Science and Engineering Research Board</p>
    </div>
  )
}

export default ProjectCard
