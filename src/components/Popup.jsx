import React from 'react'
import { ColContainer, Container } from './Container'
import { Image } from './Image'
import { Button } from './Form'

const Popup = ({message,onConfirm,setIsPopup}) => {
    
    const onCancel=()=>{
       setIsPopup(false)
    };
    return (
        <Container className='popup-container'>
            <ColContainer>
                <Container>
                    <h3>{message}</h3>
                </Container>
                <Container>
                    <Button onClick={onConfirm} >Yes</Button>
                    <Button onClick={onCancel}>NO</Button>
                </Container>
            </ColContainer>
        </Container>
    )
}

export default Popup