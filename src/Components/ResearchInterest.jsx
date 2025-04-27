import React from 'react';

import { FaCircleNodes } from "react-icons/fa6";
import { BsDiagram3Fill } from "react-icons/bs";
import { RiRobot3Fill } from "react-icons/ri";
import { DiJoomla } from "react-icons/di";
import { FaDatabase } from "react-icons/fa6";
import { RiSecurePaymentFill } from "react-icons/ri";

const ResearchInterest = () => {

    const cardBoxDesign = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20px', margin: '60px 20px 60px 20px' };
    const cardIconDesign = { margin: '0', fontSize: '30px', color: '#A7C7E7' }
    const cardTextDesign = { margin: '10px', fontSize: '20px', color: 'grey' }


    return (
        <div style={{ margin: '40px' }}>
            <p style={{ fontSize: '30px' }}>Research Interests</p>
            <div style={{ display: 'flex' }}>

                <div style={cardBoxDesign}>
                    <FaCircleNodes style={cardIconDesign} />
                    <p style={cardTextDesign}>Malware analysis and Detection</p>
                </div>


                <div style={cardBoxDesign}>
                    <BsDiagram3Fill style={cardIconDesign} />
                    <p style={cardTextDesign}>Reverse Engineering and Penetration Testing</p>
                </div>


                <div style={cardBoxDesign}>
                    <RiRobot3Fill style={cardIconDesign} />
                    <p style={cardTextDesign}>Artificial Intelligence and Deep Learning</p>
                </div>

{/* 
                <div style={cardBoxDesign}>
                    <DiJoomla style={cardIconDesign} />
                    <p style={cardTextDesign}>Machine Learning</p>
                </div>
                <div style={cardBoxDesign}>
                    <FaDatabase style={cardIconDesign} />
                    <p style={cardTextDesign}>Data Valuation</p>
                </div>
                <div style={cardBoxDesign}>
                    <RiSecurePaymentFill style={cardIconDesign} />
                    <p style={cardTextDesign}>Privacy and Security in AI</p>
                </div> */}


            </div>
        </div>
    )
}

export default ResearchInterest
