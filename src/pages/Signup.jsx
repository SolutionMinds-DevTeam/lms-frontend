import React from 'react'
import { Button, Form, FormGroup, Input, Label } from '../components/ui/Form'
import { ColContainer, Container, LayoutContainer } from '../components/ui/Container'
import { Image, imgFile } from '../components/ui/Image'
import { Link } from 'react-router-dom'

const Signup = () => {
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
            className='lg:mt-8 mt-[100px]'
              classNameLeft='items-center'
              classNameRight='items-center'
              
              leftChild={
                
                <ColContainer className='px-8 py-8 !w-[500px] bg-[#2c2c2c] gap-3 '>
                    <Form onSubmit={() => alert('form Submitted')} className='mt-1'>
                        <FormGroup>
                            <Label htmlFor={'email'} className='text-[#ccc] !px-1'>Email</Label>
                            <Input type='text' placeholder={'Enter Your Name'} className='text-gray-100 bg-transparent border-0 !border-b !border-gray-500 rounded-[5px]'/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor={'password'} className='text-[#ccc] !px-1'>Password</Label>
                            <Input type='password' placeholder={'Enter your password'} className='text-gray-100 bg-transparent border-0 !border-b !border-gray-500 rounded-[5px]'/>
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor={'password'} className='text-[#ccc] !px-1'>Confirm-Password</Label>
                            <Input type='password' placeholder={'Re-enter your password'} className='text-gray-100 bg-transparent border-0 !border-b !border-gray-500 rounded-[5px]'/>
                        </FormGroup>
                        <Button
                            onClick={''}
                            type='button'
                            className='bg-red-500 p-2 font-bold text-white'
                        >Sign up
                        </Button>

                        <FormGroup className='justify-center items-center'>
                            <h1 className='text-sm text-gray-300'>Already have an account? <Link to='/login' className='text-blue-400'>Login</Link></h1>
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

export default Signup