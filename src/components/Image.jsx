import React from 'react'
import lmsimage from '../assets/images/lms.jpeg'
import logo from '../assets/images/logo-img.png'
import heroimg from '../assets/images/hero-img.png'


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
    heroimg: heroimg
}

export { Image, imgFile }