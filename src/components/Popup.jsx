import React from 'react'
import { ColContainer, Container } from './Container'
import { Button } from './Form'

const Confirm = ({message,onConfirm,setIsPopup}) => {
    
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

const Alert = ({message,setIsPopup}) => {
    
    const onCancel=()=>{
       setIsPopup(false)
    };
    return (
        <Container className='popup-alert'>
           
            <div className='popup-alert-icon'><i class="fa-solid fa-triangle-exclamation"></i></div>
            <h3>{message}</h3>

        </Container>
    )
}

const Sucess = ({message,setIsPopup}) => {
    
    const onCancel=()=>{
       setIsPopup(false)
    };
    return (
        <Container className='popup-sucess'>
           
            <div className='popup-sucess-icon'><i class="fa-solid fa-circle-check"></i></div>
            <h3>{message}</h3>

        </Container>
    )
}




export {Confirm,Alert,Sucess}