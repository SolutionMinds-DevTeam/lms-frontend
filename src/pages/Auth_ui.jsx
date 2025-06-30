import React from 'react'
import '../assets/css/public.css'
import { Image, imgFile } from '../components/Image'
import { Button, Form, Input, Label, Option, Select } from '../components/Form'
import { LayoutContainer } from '../components/Container'
import { Link } from 'react-router-dom'

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

      <LayoutContainer leftChild={
        <div className='flex flex-col items-center justify-center w-[470px] bg-[#2c2c2c] rounded-[12px] px-[30px] py-[70px] gap-3'>
          <h2 className='text-[#dfdddd] !font-bold text-[34px]'>Sign in</h2>
          <Button
            onClick={''}
            type='button'
            className='flex items-center justify-center text-[16px] font-medium text-white bg-transparent border border-[#5b6d73] rounded-[8px] cursor-pointer !w-[280px] !px-[20px] !py-[15px]'
          >Continue with Google
          </Button>

          <Login />

          <Link to={'/'} style={{color:'white', textDecoration:'none', padding:'10px 0px'}}>Forgot password</Link>
          <h1 className='text-red-400 border'>rohit</h1>
        </div>  
      }

        rightChild={
          <Image src={imgFile.loginImg} className='w-[600px] h-[500px] object-cover' />
        }

        classNameHead='h-[calc(100vh-60px)] border-0'
        classNameLeft='flex flex-1 items-center justify-end border-0'
        classNameRight='flex flex-1 items-center justify-center border-0'

      />



    </div>
  )
}


const Login = () => {
  return (
    <Form onSubmit={() => alert('form Submitted')}>
      <div className='w-full flex flex-col text-[13px] px-0 py-0'>
        <Label htmlFor={'email'} className='text-[#ccc] px-[10px] py-[5px] text-[16px]'>Email</Label>
        <Input type='text' placeholder={'Enter Your Name'} className='text-[#00bcd4] bg-[#1e1e1e] rounded-[5px] px-[10px] py-[15px]'/>
      </div>
      <div className='w-full flex flex-col text-[13px] px-0 py-0'>
        <Label htmlFor={'password'} className='text-[#ccc] px-[10px] py-[5px] text-[16px]'>Password</Label>
        <Input type='password' placeholder={'Enter your password'} className='text-[#00bcd4] bg-[#1e1e1e] rounded-[5px] px-[10px] py-[15px]'/>
      </div>
      <Button
        onClick={''}
        type='button'
        className='flex items-center justify-center text-[22px] text-white bg-[#FF0000] rounded-[8px] font-[750] !w-full px-[20px] !py-[12px] mt-[15px]'
      >Login
      </Button>
    </Form>
  )
}


const Signup = () => {
  return (
    <Form onSubmit={() => alert('form Submitted')}>
      <div className='form-group'>
        <Label htmlFor={'name'} className='form-label'>Name</Label>
        <Input type='text' placeholder={'Enter Your Name'} />
      </div>
      <div className='form-group'>
        <Label htmlFor={'email'} className='form-label'>Email</Label>
        <Input type='text' placeholder={'Enter Your Name'} />
      </div>
      <div className='form-group'>
        <Label htmlFor={'password'} className='form-label'>Password</Label>
        <Input type='password' placeholder={'Enter your password'} />
      </div>
      <div className='form-group'>
        <Input type='submit' value={'Save'} />
      </div>
    </Form>
  )
}





export { Auth_ui, Login, Signup };