import React from 'react'
import NewsCard from './NewsCard'
import article from '../data/article.json'

const NewsSection = () => {
  return (
    <div style={{ marginLeft: '40px', }}>
      <p style={{ fontSize: '30px' }}>Articles</p>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        {
          article.slice(0, 6).map((value) => (
            <NewsCard
              newsHeading={value.title}
              newsContent={value.publication}
              newsDate={value.authors}
            />
          ))
        }

      </div>
    </div>
  )
}

export default NewsSection
