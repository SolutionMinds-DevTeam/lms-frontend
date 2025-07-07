import '../assets/css/public.css'
import { Image, imgFile } from '../components/ui/Image'
import { Button } from '../components/ui/Form'
import { Link, useNavigate } from 'react-router-dom';
import { ColContainer, Container, LayoutContainer } from '../components/ui/Container';
import { Confirm, Alert, Success } from '../components/ui/Popup';
import { useState } from 'react';

function Landing() {
  const navigate = useNavigate();

  const [isPopup, setIsPopup] = useState(false);

  const handleSave = () => {
    alert("Saving...");
  };

  return (
    <>
      {isPopup ? <Confirm message={'Are you sure you want!'} onConfirm={handleSave} setIsPopup={setIsPopup} /> : null}

      <div className='size-full flex flex-col'>
        {/* ------ Header section ------ */}
        <header className='flex justify-between items-center px-[5%] py-3 bg-[#2c2c2c] border border-red-500 rounded-xl h-14 mt-2'>
          <div className="flex gap-2 items-center">
            <Link to="/">
              <Image src={imgFile.logo}
                alt="LMS Logo"
                w='w-12'
                h='h-auto'
              />
            </Link>
            <h1 className='text-white text-2xl font-bold text-center'>YT-Learning</h1>
          </div>
        </header>

        {/* ------ main section ------ */}
        <main className='flex flex-col gap-2'>

          {/* ------ section-1 ----- */}
          <Container className='px-[5%] lg:h-[calc(100vh-60px)]  text-white  bg-[#1e1e1e] '>
            <LayoutContainer
              className='justify-center items-center'
              classNameLeft='items-center'
              classNameRight='items-center'

              leftChild={
                <ColContainer className='items-start pt-[100px] pb-[30px] lg:py-0'>
                  <h1 className='text-[60px] lg:text-[96px] font-bold leading-[1.1] mb-4'>Learn Better, Learn Smarter</h1>
                  <p className='text-[1.2rem] font-medium text-white mb-4'>Get Organized with YouTube Learning</p>
                  <Button
                    onClick={() => navigate('/login')}

                    type="button"
                    className="text-xl bg-red-500 text-white border-0 rounded-lg font-medium w-40 py-2 px-4 hover:bg-[#c43838]"
                  >Get start</Button>
                </ColContainer>
              }
              rightChild={
                <Image src={imgFile.heroimg}
                  alt="Learning Images"
                  w=':w-auto'
                  h='h-[300px] lg:h-[500px]'
                  className='border border-white rounded-xl object-cover'
                />
              }

            />
          </Container>

          {/* ------ section-2 ----- */}
          <ColContainer className="py-[90px] lg:py-[40px] px-[5%] items-center relative overflow-hidden" >
            <div className='absolute top-0 lg:left-5 w-[98%] h-[95%] lg:border-2 border-red-600 lg:rotate-[-2deg] bg-[#2c2c2c] mt-7'></div>
            <LayoutContainer

              className='justify-center items-center z-50'
              classNameLeft='items-center'
              classNameRight='items-center'

              leftChild={
                <h1 className='text-[55px] lg:text-[62px] font-bold text-white w-full lg:w-[70%] leading-[1.2]'>
                  <span className='text-red-600'>YouTube</span> is a giant free content library
                </h1>
              }

              rightChild={
                <Image src={imgFile.ytimg}
                  alt="Learning Images"
                  w='w-[700px]'
                  h='auto'
                />
              }

            />

            <LayoutContainer
              className='justify-center items-center z-50'
              classNameLeft='items-center'
              classNameRight='items-center'

              leftChild={
                <Image src={imgFile.men}
                  alt="Learning Images"
                  w='w-=auto'
                  h='h-[400px]'
                />
              }
              rightChild={
                <h1 className='text-[40px] text-center lg:text-left lg:text-[50px] font-bold text-white w-full lg:w-[90%] leading-[1.2]'>
                  <span className='text-red-600'>BUT</span>... it doesn't help you plan your learning,track your progress, or stay organized.
                </h1>
              }
            />
          </ColContainer>

          {/* ------ section-3 ----- */}
          <Container className='py-[60px] px-[5%]'>
            <LayoutContainer
              className='justify-center items-center z-50 text-white mt-10'
              classNameLeft='items-cente'
              classNameRight='items-center'

              leftChild={
                <Image src={imgFile.slidfive}
                  alt="Learning Images"
                  w='w-[550px]'
                  h='auto'
                />
              }

              rightChild={
                <ColContainer>
                  <Container className='items-center justify-center lg:justify-start'>
                    <Image src={imgFile.speacker} w='w-[50px]' h='auto' />
                    <h1 className='text-[50px] font-bold'>Don’t <span className='text-red-500'>worry</span></h1>
                  </Container>
                  <p className='font-medium text-xl lg:text-left text-center'>
                    <span className='text-yellow-400'>Our Team</span> sees a huge opportunity to transform YouTube’s vast library of free content into a powerful, well-structured educational platform that’s accessible to everyone. By organizing videos into curated learning paths, adding context, and integrating interactive tools, we aim to bridge the gap between casual viewing and real, impactful education for learners around the world.
                  </p>
                </ColContainer>

              }
            />
          </Container>




          {/* ------ section-4 ----- */}
          <Container className="py-[60px] px-[5%]">
            <LayoutContainer

              className='justify-center items-center z-50 text-white mt-10'
              classNameLeft='items-cente p-2 lg:order-1 order-2 '
              classNameRight='items-center lg:order-2 lg:mt-0 mt-[200px]'

              leftChild={
                <ColContainer>
                  <h1 className='text-[56px] mb-[20px]'>What <span className='text-red-500' >features</span> it have?</h1>

                  <div className="mb-5 flex gap-4">
                    <i className="fa-solid fa-book-open-reader text-3xl text-[#fff700] mt-3"></i>
                    <div className="leading-[1.6] text-[20px]">
                      Smart Help with <span className="text-[#ffc107] font-bold">AI - Summaries.</span><br />
                      Get short, easy summaries of any video or playlist using smart AI
                    </div>
                  </div>

                  <div className="mb-5 flex gap-4">
                    <i className="fas fa-list-alt text-3xl text-[#fff700] mt-3"></i>
                    <div className="leading-[1.6] text-[20px]">
                      Smart Help with <span className="text-[#ffc107] font-bold">AI - Quizzes</span>.<br />
                      Automatically create quizzes (like multiple-choice questions) based on what you've learned. Test yourself and see what you remember.
                    </div>
                  </div>

                  <div className="mb-5 flex gap-4">
                    <i className="fas fa-tasks text-3xl text-[#fff700] mt-3"></i>
                    <div className="leading-[1.6] text-[20px]">
                      Your <span class="text-[#ffc107] font-bold">To-Do List</span> for Learning. Students can quickly make, manage, and decide what's most important for their study tasks.
                    </div>
                  </div>
                </ColContainer>
              }
              rightChild={
                <>
                  <Image
                    src={imgFile.slidfour}
                    w='w-[600px]'
                    h='auto'
                    className='hidden lg:block'
                  />

                  <Image
                    src={imgFile.slid4Phone}
                    w='w-[600px]'
                    h='auto'
                    className='lg:hidden lg:relative absolute mb-[90px]'
                  />
                </>
              }

            />
          </Container>

        </main>

        <footer className="bg-[#2c2c2c] text-center overflow-hidden p-28">
          <ColContainer className='justify-center items-center'>
            <div className='flex gap-4'>
              <Link to='.'><i className="fab fa-facebook-f text-white transition-colors hover:text-red-500 text-xl"></i></Link>
              <Link to='.'><i className="fab fa-twitter text-white transition-colors hover:text-red-500 text-xl"></i></Link>
              <Link to='.'><i className="fab fa-linkedin-in text-white transition-colors hover:text-red-500 text-xl"></i></Link>
              <Link to='.'><i className="fab fa-instagram text-white transition-colors hover:text-red-500 text-xl"></i></Link>
            </div>

            <ul className="my-5 flex text-white gap-4 text-xl">
              <Link to='.' className='transition-colors hover:text-red-500'>Home</Link>
              <Link to='.' className='transition-colors hover:text-red-500'>About</Link>
              <Link to='.' className='transition-colors hover:text-red-500'>Services</Link>
              <Link to='.' className='transition-colors hover:text-red-500'>Team</Link>
              <Link to='.' className='transition-colors hover:text-red-500'>Contact</Link>
            </ul>

            <p className="text-gray-400 text-sm">
              ©2025 YT-Learning | All Rights Reserved
            </p>
          </ColContainer>
        </footer>

      </div>
    </>

  )
}
export default Landing