import React from 'react'
import '../assets/css/public.css'
import { Image, imgFile } from '../components/Image'
import DivContainer from '../components/DivContainer'
import { Button, Form, Input, Label, Option, Select } from '../components/Form'

const Auth_ui = () => {
  return (
    <div className='landing-page'>
      <header>
        <div className="logo">
          <Image src={imgFile.logo}
            alt="LMS Logo"
            className="logo"
            style={{ height: '40px', width: '40px' }}
          />
          <h1 className='title'>YT-Learning</h1>
        </div>
      </header>

      <DivContainer leftChild={
         <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Form onSubmit={()=>alert('form Submitted')}>
                <div className='form-group'>
                    <Label htmlFor={'name'} className='form-label'>Name</Label>
                    <Input type='text' placeholder={'Enter Your Name'} />
                </div>
                <div className='form-group'>
                    <Label htmlFor={'email'} className='form-label'>Email</Label>
                    <Input type='text' placeholder={'Enter Your Name'} />
                </div>
                <div className='form-group'>
                    <Input type='submit' value={'Save'} />
                </div>
               
               <Select>
                  <Option>Select-Option</Option>
                  <Option>C</Option>
                  <Option >C++</Option>
                  <Option>Python</Option>
               </Select>

               <Select>
                  <Option>Select-Option</Option>
                  <Option>C</Option>
               </Select>
            </Form>
         </div>
      } 

      rightChild={
       <Image src={imgFile.heroimg} className='auth-image' />
      }

      classNameHead='div-container'
      classNameLeft='div-left'
      classNameRight='div-right'
      
      />

            

    </div>
  )
}

export default Auth_ui