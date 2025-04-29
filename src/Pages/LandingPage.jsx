import React, { useEffect } from 'react'
import AppNavbar from '../Components/AppNavbar'
import IntroSection from '../Components/IntroSection'
import AppFooter from '../Components/AppFooter'
import ResearchInterest from '../Components/ResearchInterest'
import NewsSection from '../Components/NewsSection'
import PublicationSection from '../Components/PublicationSection'
import useTrackVisits from '../hooks/useTrackVisits.js'


export const LandingPage = () => {
  useTrackVisits();

  return (
    <div style={{width: '100vw'}}>
{/* <AppNavbar/> */}

<IntroSection/>
<ResearchInterest/>
<NewsSection/>
<PublicationSection/>
{/* <AppFooter/> */}
    </div>
  )
}
