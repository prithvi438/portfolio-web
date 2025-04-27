import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaResearchgate } from "react-icons/fa"; // For ResearchGate icon
import { FaFacebook } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si"; // For Google Scholar icon
import { FaOrcid } from "react-icons/fa"; // For ORCID icon

const AppFooter = () => {
  const iconStyle = { color: 'white', fontSize: '25px', margin: '15px', cursor: 'pointer' };

  return (
    <div style={{ width: '100%', backgroundColor: '#121212', padding: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a href="mailto:sharmila@sit.ac.in" target="_blank" rel="noopener noreferrer">
          <MdEmail style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/s-p-sharmila-8b193b110/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={iconStyle} />
        </a>
        <a href="https://www.researchgate.net/profile/Sharmila-S-P?ev=hdr_xprf" target="_blank" rel="noopener noreferrer">
          <FaResearchgate style={iconStyle} />
        </a>
        <a href="https://scholar.google.co.in/citations?user=OC60OIkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          <SiGooglescholar style={iconStyle} />
        </a>
        <a href="https://orcid.org/0000-0003-0221-6481" target="_blank" rel="noopener noreferrer">
          <FaOrcid style={iconStyle} />
        </a>
        <a href="https://www.facebook.com/share/1A9dfcSpGc/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
          <FaFacebook style={iconStyle} />
        </a>
      </div>

      <p style={{ color: 'white', textAlign: 'center', fontSize: '12px' }}>
        Reach out to us via social media
      </p>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '12px', marginTop: '30px' }}>
        © Copyright 2024 Dr. Sharmila S P. Hosted by GitHub Pages.
      </p>
    </div>
  );
};

export default AppFooter;