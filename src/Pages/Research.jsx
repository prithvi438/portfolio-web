import React from 'react'
import TalksCard from '../Components/TalksCard'

const Research = () => {
  return (
    <div style={{margin: '40px'}}>
      <p style={{fontSize: '35px'}}>Research Interests</p>
      <p style={{fontSize: '15px'}}>Fields for Research Interests</p>

<div style={{display: 'flex', flexWrap: 'wrap'}}>


      <TalksCard
      talkHeading={'Malware analysis and Detection'}
      />
      <TalksCard
      talkHeading={'Reverse Engineering and Penetration Testing'}
      />
      <TalksCard
      talkHeading={'Artificial Intelligence and Deep Learning'}
      />
      <TalksCard
      talkHeading={'AI applications for Cybersecurity'}
      />
      <TalksCard
      talkHeading={'Emerging Techniques for Computing with AI'}
      />
</div>
    </div>
  )
}

export default Research
