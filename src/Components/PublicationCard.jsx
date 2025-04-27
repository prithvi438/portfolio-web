import React from 'react'
import Button from 'react-bootstrap/Button';

const PublicationCard = (props) => {
    return (
        <div style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px', margin: '20px', padding: '20px', borderRadius: '12px', width: '590px' }}>
            <h6 style={{ marginBottom: '28px', fontSize: '20px' }}>{props.title}</h6>
            <h6 style={{ marginBottom: '8px', fontSize: '14px' }}>Type : {props.type}</h6>
            <p style={{ textAlign: 'justify' }}>{props.authors}</p>
            <p style={{ textAlign: 'right', fontSize: '14px' }}>{props.year}</p>

        <div style={{display: 'flex', justifyContent: 'space-between', width: '70%'}}>
        {/* <Button variant="outline-primary" size='sm'>ICML-2023</Button>
        <Button variant="outline-secondary" size='sm'>Core A*</Button>
        <Button variant="outline-warning" size='sm'>Source Code</Button>
        <Button variant="outline-secondary" size='sm'>ABS</Button>
        <Button variant="outline-success" size='sm'>Pdf</Button> */}
        </div>
        </div>
    )
}

export default PublicationCard
