import React from 'react';
import profileImage from '../assets/sharmila_mam_profile.png';

const IntroSection = () => {
  return (
    <div className="w-100 d-flex justify-content-center p-3">
      <div
        style={{
          width: '100%',
          maxWidth: '1100px',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          padding: '20px',
          borderRadius: '12px',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              borderRadius: '240px',
              backgroundColor: '#F8F9FA',
              height: '160px',
              width: '160px',
              backgroundImage: `url(${profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'circle(70% at center)',
              backgroundRepeat: 'no-repeat',
              marginBottom: '20px',
            }}
          ></div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginLeft: '20px',
              maxWidth: '600px',
              textAlign: 'left',
            }}
          >
            <p style={{ fontSize: '24px', margin: '0', fontWeight: 'bold' }}>Sharmila S P</p>
            <p style={{ margin: '0', fontSize: '16px' }}>
              Assistant Professor, Siddaganga Institute of Technology
            </p>
            <p style={{ margin: '0', fontSize: '14px' }}>
              Dept. of CSE, Indian Institute of Technology Indore and Dept. of ISE, SIT, Tumakuru <br />
              <span style={{ color: '#555' }}>Verified email at sit.ac.in</span>
            </p>
            <p style={{ margin: '0', fontSize: '12px', fontStyle: 'italic' }}>
              Tumkur, Karnataka, India - 572103
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p style={{ textAlign: 'justify', color: 'black', fontSize: '15px' }}>
            I am currently a Doctoral Researcher at Indian Institute of Technology, Indore, Madhya Pradesh. Before this, I was working as an Assistant Professor
            at Siddaganga Institute of Technology, Tumakuru, Karnataka, since 2007. I have secured a prestigious AICTE QIP fellowship for my research at
            IIT Indore. I am currently working with Prof. Aruna Tiwari and Prof. Narendra Chaudhari to address cybersecurity challenges using
            emerging AI methodologies in the Department of Computer Science at IIT Indore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;