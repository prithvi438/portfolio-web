import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';



const DarkModeSwitch = () => {
    let colorMode = 'DARK';

    useEffect(() => {
        colorMode = localStorage.getItem('colorMode')
    }, [])
    return (
        <div style={{ display: 'flex' }}>
            {/* <p>Switch to {colorMode == 'DARK' ? 'Dark' : 'Light'}</p> */}
            <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Switch to Dark Mode"
                onClick={() => {
                    if(localStorage.getItem('colorMode') == 'DARK'){
                        localStorage.setItem(colorMode, 'LIGHT')
                    } else {
                        localStorage.setItem(colorMode, 'DARK')
                    }
                }}
            />
        </div>
    )
}

export default DarkModeSwitch