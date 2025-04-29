import React from 'react';

const CourseTaughtCard = (props) => {
  return (
    <div style={{
      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '890px',
      boxSizing: 'border-box'
    }}>
      <h6 style={{ marginBottom: '28px', fontSize: '20px', color: 'gray' }}>{props.college}</h6>
      <h6>{props.role}</h6>
      <h6>From {props.start} to {props.end}</h6>

      <ul style={{ paddingLeft: '20px' }}>
        {
          props.cousesTaught.map((course, index) => (
            <li key={index}>{course}</li>
          ))
        }
      </ul>
    </div>
  );
};

export default CourseTaughtCard;