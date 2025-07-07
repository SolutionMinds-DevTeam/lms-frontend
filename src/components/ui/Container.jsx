import React from 'react'

const Container = ({ children, className = '' }) => {
  return (
    <div className={`w-full flex p-2 flex-wrap ${className}`.trim()}>
      {children}
    </div>
  )
}

const ColContainer = ({ children, className = '' }) => {
  return (
    <div className={`w-full flex flex-col p-2  ${className}`.trim()}>
      {children}
    </div>
  )
}



const LayoutContainer = ({
  leftChild,
  rightChild,
  className= "",
  classNameLeft = "",
  classNameRight = ""
}) => {

  return (
    <section className={`w-full p-2.4 flex lg:flex-row flex-col ${className}`.trim()}>
      <div className={`lg:w-1/2 w-full flex justify-center p-1 ${classNameLeft}`.trim()}>
        {leftChild}
      </div>

      <div className={`lg:w-1/2 w-full flex justify-center p-1 ${classNameRight}`.trim()}>
        {rightChild}
      </div>
    </section>
  )
}

export { Container, LayoutContainer, ColContainer }