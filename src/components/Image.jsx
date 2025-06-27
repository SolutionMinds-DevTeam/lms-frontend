import React from 'react'
import lmsimage from '../assets/images/lms.jpeg'
import logo from '../assets/images/logo-img.png'
import heroimg from '../assets/images/hero-img.png'
import firstimg from '../assets/images/main-img.jpg'
import ytimg from '../assets/images/yt-thumimg.png' 
import men from '../assets/images/men-img.png' 
import slidfour from '../assets/images/slid4_img.png'
import slidfive from '../assets/images/slid5_img.png'

function Image({ src, alt='img', className = "", style = {} }) {
    const baseClass = "image-style-component";

    return (
        <img
            src={src}
            alt={alt}
            className={`${baseClass} ${className}`}
            style={{objectFit: "cover", ...style }}
        />
    )
}

const imgFile = {
    lmsimage: lmsimage,
    logo:logo,
    heroimg: heroimg,
    firstimg: firstimg,
    ytimg: ytimg,
    men: men,
    slidfour: slidfour,
    slidfive: slidfive
}

export { Image, imgFile }