import React from 'react'
import PublicationCard from './PublicationCard'
import publications from '../data/publication.json'

const PublicationSection = () => {
    return (
        <div style={{ padding: '20px'}}>
            <p style={{ fontSize: '30px' }}>Selected Publications</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                    publications.slice(0, 4).map((value, index) => (
                        <PublicationCard
                            key={index}
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

export default PublicationSection
