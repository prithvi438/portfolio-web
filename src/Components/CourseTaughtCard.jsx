import React from 'react'

const CourseTaughtCard = (props) => {
  return (
    <div>
      <div style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', margin: '20px', padding: '20px', borderRadius: '12px', width: '890px' }}>
      
      <h6 style={{ marginBottom: '28px', fontSize: '20px', color: 'gray' }}>{props.college}</h6>
      <ul>
        <li>{props.role}</li>
        <li>From {props.start} to {props.end}</li>
        {/* <li>Data Mining and Data Warehousing, Spring ‘24, ‘23</li>
        <li>Object Oriented Programming</li>
        <li>C Programming</li> */}
      </ul>
      </div>
    </div>
  )
}

export default CourseTaughtCard
