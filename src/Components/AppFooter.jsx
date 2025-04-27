import React from 'react';

import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const AppFooter = () => {

    const iconStyle = {color: 'white', fontSize: '25px', margin: '15px', cursor: 'pointer'}
  return (
    <div style={{width: '100%', backgroundColor: '#121212', padding: '20px'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <MdEmail style={iconStyle}/>
      <FaLinkedin style={iconStyle}/>
      <FaGithub style={iconStyle}/>
      <GrInstagram style={iconStyle}/>
      <FaFacebook style={iconStyle}/>
      <BsTwitterX style={iconStyle}/>
      </div>
      <p style={{color: 'white', textAlign: 'center', fontSize: '12px'}}> Reach out to us via social media</p>
      <p style={{color: 'white', textAlign: 'center', fontSize: '12px', marginTop: '30px'}}>© Copyright 2024 Dr. Murari Mandal. Powered by Jekyll with al-folio theme. Hosted by GitHub Pages.</p>
    </div>
  )
}

export default AppFooter
