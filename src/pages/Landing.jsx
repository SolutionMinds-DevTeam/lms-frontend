import '../assets/css/public.css'
import { Image, imgFile } from '../components/Image'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate=useNavigate();
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

      <main className='main-content'>
        <div className="content">

          <h1>Learn Better, Learn Smarter</h1>
          <p>Get Organized with YouTube Learning</p>
          <Button
            onClick={() => navigate('/auth')}
            Children={'Get Started'}
            type="button"
            className="get-started-button"
          ></Button>
        </div>
        <div className="content-image">
          <Image src={imgFile.heroimg}
          alt="Learning Images"
          className="hero-image"
        />
        </div>
      </main>

    </div>
  )
}
export default Landing