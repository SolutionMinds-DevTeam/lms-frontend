import '../assets/css/public.css'
import { Image, imgFile } from '../components/Image'
import {Button} from '../components/Form'
import { useNavigate } from 'react-router-dom';
import { Container } from '../components/Container';
import {Confirm, Alert, Sucess } from '../components/Popup';
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

      <div className='landing-page' style={{ position: 'relative' }}>
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

        <main className='main-content'>

          <div className="first-slid-content">
            <div className="content">
              <h1>Learn Better, Learn Smarter</h1>
              <p>Get Organized with YouTube Learning</p>
              <Button
                onClick={() => setIsPopup(true)}
                
                type="button"
                className="get-started-button"
              >Get start</Button>
            </div>
            <div className="content-image">
              <Image src={imgFile.heroimg}
                alt="Learning Images"
                className="hero-image"
              />
            </div>
          </div>

          <div className="second-slid-content" >
            <div className="second-content">
              <h1><span>YouTube</span> is a giant free content library</h1>

            </div>
            <div className="second-content-image">
              <Image src={imgFile.ytimg}
                alt="Learning Images"
                className="second-hero-image"
              />
            </div>
          </div>

          <div className="third-slid-content" >
            <div className="third-content-image">
              <Image src={imgFile.men}
                alt="Learning Images"
                className="third-hero-image"
              />
            </div>
            <div className="third-content">
              <h1><span>BUT</span>... it doesn't help you plan your learning,track your progress, or stay organized.</h1>
            </div>
          </div>

          <div className="fourth-slid-content" >
            <div className="fourth-content">
              <h1>Don’t <span>worry</span></h1>
              <p><span>Our Team</span> sees a huge opportunity to transform YouTube’s vast library of free content into a powerful, well-structured educational platform that’s accessible to everyone. By organizing videos into curated learning paths, adding context, and integrating interactive tools, we aim to bridge the gap between casual viewing and real, impactful education for learners around the world.</p>

            </div>
            <div className="fourth-content-image">
              <Image src={imgFile.slidfive}
                alt="Learning Images"
                className="fourth-hero-image"
              />
            </div>
          </div>

          <div className="fifth-slid-content">
            <div class="fifth-content">
              <h1>What <span className='highlight-features' >features</span> it have?</h1>

              <div className="fifth-slid-feature">
                <i class="fa-solid fa-book-open-reader"></i>
                <div className="feature-text">
                  Smart Help with <span className="highlight-yellow">AI - Summaries.</span><br />
                  Get short, easy summaries of any video or playlist using smart AI
                </div>
              </div>

              <div className="fifth-slid-feature">
                <i className="fas fa-list-alt"></i>
                <div className="feature-text">
                  Smart Help with <span className="highlight-yellow">AI - Quizzes</span>.<br />
                  Automatically create quizzes (like multiple-choice questions) based on what you've learned. Test yourself and see what you remember.
                </div>
              </div>

              <div className="fifth-slid-feature">
                <i className="fas fa-tasks"></i>
                <div className="feature-text">
                  Your <span class="highlight-blue">To-Do List</span> for Learning. Students can quickly make, manage, and decide what's most important for their study tasks.
                </div>
              </div>
            </div>

            <div className="fifth-content-image">
              <Image
                src={imgFile.slidfour}
                className='fourth-img'
              />
            </div>
          </div>
        </main>

        <footer className="wave-footer">
          <div className="footer-content">
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>

            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>

            <p className="footer-text">
              ©2025 YT-Learning | All Rights Reserved
            </p>
          </div>
        </footer>

      </div>
    </>

  )
}
export default Landing