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
import Dashboard from '../../assets/images/Dashboard.svg'
import Space from '../../assets/images/Space.svg'
import History from '../../assets/images/History.svg'
import ToDo from '../../assets/images/ToDo.svg'
import Notes from '../../assets/images/Notes.svg'
import Analytics from '../../assets/images/Analytics.svg'
import Arroetoggel from '../../assets/images/Arroetoggel.svg'
import Notification from '../../assets/images/Notification.svg'
import Profile from '../../assets/images/Profile.svg'
import menutoggle from '../../assets/images/menutoggle.svg'
import CancelToggel from '../../assets/images/CancelToggel.svg'



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
    Dashboard: Dashboard,
    Space: Space,
    History: History,
    ToDo: ToDo,
    Notes: Notes,
    Analytics: Analytics,
    Arroetoggel: Arroetoggel,
    Notification: Notification,
    Profile: Profile,
    menutoggle: menutoggle,
    CancelToggel: CancelToggel,

}



const Image = ({src,w='w-8', h='h-8',className=''}) => {
  return (
    <img src={src} className={`${h} ${w} ${className}`.trim()} />
  )
}


export { Image, imgFile }