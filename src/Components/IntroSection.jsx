import React from 'react'
import profileImage from '../assets/sharmila_mam_profile.png'

const IntroSection = () => {
  return (
    <div>
      <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
        <div>

        </div>
        <div style={{
          width: '70%',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          margin: '20px',
          padding: '20px',
          borderRadius: '12px',
        }}>

          <div style={{ display: 'flex' }}>
            <div style={{
              borderRadius: '240px',
              backgroundColor: '#F8F9FA',
              height: '180px',
              width: '180px',
              backgroundImage: `url(${profileImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'circle(70% at center)',
              backgroundRepeat: 'no-repeat'
            }}>

            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px' }}>
              <p style={{ fontSize: '26px', margin: '0' }}>Sharmila S P</p>
              <p style={{ margin: '0', fontSize: '18px' }}>Assistant Professor, Siddaganga Institute of Technology</p>
              <p style={{ margin: '0' }}>Dept. of CSE, Indian Institute of Technology Indore and Dept. of ISE, SIT, Tumakuru
                Verified email at sit.ac.in</p>
              <p style={{ margin: '0', fontSize: '12', fontStyle: 'italic' }}>Tumkur, Karnataka, India - 572103</p>
            </div>
          </div>

          <div>
            <p style={{ textAlign: 'justify', color: 'black', marginTop: '15px' }}>
              I am currently Doctoral Researcher at Indian Institute of Technology, Indore,Madhya Pradesh. Before this I was working as an Assistant Professor
              at Siddaganga Institute of Technology, Tumakuru, Karnataka, since 2007. I have secured prestigious AICTE QIP fellowship for my research at
              IIT Indore. I am currently working with Prof. Aruna Tiwari and Prof. Narendra Chaudhari to address the cybersecurity challenges using
              emerging AI methodologies in the Department of Computer Science at IIT Indore.
            </p>
            {/* <p style={{ textAlign: 'center', color: '#C8CBCE', marginTop: '15px' }}>
              Earlier, I was a Postdoctoral Research Fellow at National University of Singapore (NUS). I worked with Prof. Mohan Kankanhalli and Prof. Jussi Keppo in the School of Computing. Long time back, I graduated in 2011 with a Bachelors in Computer Science from BITS, Pilani.
            </p> */}
          </div>
        </div>

      </div>


    </div>

  )
}

export default IntroSection