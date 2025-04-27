import React from 'react'
import PublicationCard from '../Components/PublicationCard'
import publications from '../data/publication.json'


const PublicationPage = () => {
  return (
    <div>
      <p style={{ fontSize: '34px', margin: '40px' }}>Publications</p>
      <p style={{ fontSize: '16px', margin: '40px' }}>All publications listed here</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          publications.map((value) => (
            <PublicationCard
              title={value.title}
              authors={value.authors}
              year={value.year}
              type={value.type}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PublicationPage
