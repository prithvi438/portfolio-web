import React from 'react'

const NewsCard = (props) => {
  return (
    <div style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', margin: '20px', padding: '20px', borderRadius: '12px', width: '390px'}}>
        <h6 style={{marginBottom: '28px', fontSize: '20px'}}>{props.newsHeading}</h6>
      <p style={{textAlign: 'justify'}}>
      {props.newsContent}
      </p>
      <p style={{textAlign: 'right', fontSize: '14px'}}>{props.newsDate}</p>
    </div>
  )
}

export default NewsCard
