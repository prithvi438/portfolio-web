import React from 'react'

const TalksCard = (props) => {
  return (
    <div style={{boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', margin: '20px', padding: '20px', borderRadius: '12px', width: '490px'}}>
        <h6 style={{marginBottom: '28px', fontSize: '20px'}}>{props.talkHeading}</h6>
      <p style={{textAlign: 'justify', fontSize: '26px'}}>
      {props.talkYear}
      </p>
      <ul>
        <li>Click here to see linkedin</li>
        <li>Click here to see talk link</li>
      </ul>
      <p style={{textAlign: 'right', fontSize: '14px'}}>{props.talkDate}</p>
    </div>
  )
}

export default TalksCard
