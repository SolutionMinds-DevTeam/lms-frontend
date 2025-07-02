import React from 'react'
import { Button, Form, FormGroup, Input, Label } from '../components/ui/Form'
import { ColContainer, Container, LayoutContainer } from '../components/ui/Container'
import { Image, imgFile } from '../components/ui/Image'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <ColContainer>
   {/* ------ Header section ------ */}
        <header className='flex justify-between items-center px-[5%] py-3 bg-[#2c2c2c] border border-red-500 rounded-xl h-14 mt-2'>
          <div className="flex gap-2 items-center">
            <Image src={imgFile.logo}
              alt="LMS Logo"
              w='w-12'
              h='h-auto'
            />
            <h1 className='text-white text-2xl font-bold text-center'>YT-Learning</h1>
          </div>
        </header>

        <Container>
            <LayoutContainer
            className='lg:mt-10 mt-[100px]'
              classNameLeft='items-center'
              classNameRight='items-center'
              
              leftChild={
                
                <ColContainer className='px-8 py-6 !w-[500px] bg-[#2c2c2c] gap-3 '>
                    <h2 className='text-center text-white font-light text-[30px]'>Sign in</h2>
                    <Button
                        onClick={''}
                        type='button'
                        className='!border border-gray-400 flex gap-3 items-center justify-center text-gray-400'
                    >
                      <Image src={imgFile.google} w='w-6'/>
                      Continue with Google
                    </Button>

                    <Form onSubmit={() => alert('form Submitted')} className='mt-4'>
                        <FormGroup>
                            <Label htmlFor={'email'} className='text-[#ccc] !px-1'>Email</Label>
                            <Input type='text' placeholder={'Enter Your Name'} className='text-gray-100 bg-transparent border-0 !border-b !border-gray-500 rounded-[5px]'/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'password'} className='text-[#ccc] !px-1'>Password</Label>
                            <Input type='password' placeholder={'Enter your password'} className='text-gray-100 bg-transparent border-0 !border-b !border-gray-500 rounded-[5px]'/>
                        </FormGroup>
                        <Button
                            onClick={''}
                            type='button'
                            className='bg-red-500 p-2 font-bold text-white'
                        >Login
                        </Button>

                        <FormGroup className='justify-center items-center gap-2'>
                            <Link to='/' className='text-sm text-blue-400'>Forgot password</Link>
                            <h1 className='text-sm text-gray-300'>Create new account? <Link to='/signup' className='text-blue-400'>Signup</Link></h1>
                        </FormGroup>
                    </Form>

                    
                </ColContainer> 

              }
              rightChild={
                <Image src={imgFile.loginImg} className='w-[600px] h-[500px] object-cover lg:block hidden' />
              }

            />

            
        </Container>


    
    </ColContainer>
    
  )
}

export default Login