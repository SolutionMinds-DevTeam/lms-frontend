import React from 'react'
import lmsimage from '../../assets/images/lms.jpeg'
import logo from '../../assets/images/logo-img.png'
import heroimg from '../../assets/images/hero-img.png'
import firstimg from '../../assets/images/main-img.jpg'
import ytimg from '../../assets/images/yt-thumimg.png' 
import men from '../../assets/images/men-img.png' 
import slidfour from '../../assets/images/slid4_img.png'
import slidfive from '../../assets/images/slid5_img.svg'
import signupImg from '../../assets/images/img1.png'
import loginImg from '../../assets/images/img2.png'
import speacker from '../../assets/images/Speaker.svg'
import slid4Phone from '../../assets/images/slid4Phone.png'
import google from '../../assets/images/Google.svg'


const imgFile = {
    lmsimage: lmsimage,
    logo:logo,
    heroimg: heroimg,
    firstimg: firstimg,
    ytimg: ytimg,
    men: men,
    slidfour: slidfour,
    slidfive: slidfive,
    loginImg: loginImg,
    signupImg: signupImg,
    speacker: speacker,
    slid4Phone: slid4Phone,
    google: google,
}



const Image = ({src,w='w-8', h='h-8',className=''}) => {
  return (
    <img src={src} className={`${h} ${w} ${className}`.trim()} />
  )
}


export { Image, imgFile }