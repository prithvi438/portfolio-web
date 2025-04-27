import React from 'react'
import TalksCard from '../Components/TalksCard'

const TalksPage = () => {
  return (
    <div style={{margin: '40px'}}>
      <p style={{fontSize: '35px'}}>Talks</p>
      <p style={{fontSize: '15px'}}>List of Talks and Seminars delivered.</p>

<div style={{display: 'flex', flexWrap: 'wrap'}}>


      <TalksCard
      talkHeading={'Panel Discussion on “AI: The Dual Edge of Innovation”, World Salon'}
      talkDate={'11 July 2024'}
      talkYear={'2024'}
      />
      <TalksCard
      talkHeading={'Panel Discussion on “AI: The Dual Edge of Innovation”, World Salon'}
      talkDate={'11 July 2024'}
      talkYear={'2024'}
      />
      <TalksCard
      talkHeading={'Panel Discussion on “AI: The Dual Edge of Innovation”, World Salon'}
      talkDate={'11 July 2024'}
      talkYear={'2024'}
      />
      <TalksCard
      talkHeading={'Panel Discussion on “AI: The Dual Edge of Innovation”, World Salon'}
      talkDate={'11 July 2024'}
      talkYear={'2024'}
      />
</div>
    </div>
  )
}

export default TalksPage
