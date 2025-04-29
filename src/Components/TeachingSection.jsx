import React from 'react';
import CourseTaughtCard from './CourseTaughtCard';
import teaching from '../data/teachings.json';

const TeachingSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        minHeight: '75vh',
      }}
    >
      <div style={{ width: '100%', maxWidth: '1100px' }}>
        <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Teachings</p>
        <p style={{ fontSize: '18px', color: 'gray', marginBottom: '20px' }}>
          Courses taught.
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {teaching.map((value, index) => (
            <div key={index} style={{ flex: '1 1 300px', maxWidth: '500px' }}>
              <CourseTaughtCard
                college={value.institute}
                role={value.role}
                start={value.start}
                end={value.end}
                cousesTaught={value.cousesesTaught}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachingSection;