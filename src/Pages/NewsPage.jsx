import React from 'react'
import NewsCard from '../Components/NewsCard'
import article from '../data/article.json'

const NewsPage = () => {
  return (
    <div>
      <p style={{ fontSize: '34px', margin: '40px' }}>Articles</p>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
      {
          article.map((value) => (
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

export default NewsPage
