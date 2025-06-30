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
  classNameHead = "",
  classNameLeft = "",
  classNameRight = ""
}) => {

  return (
    <section className={`w-full p-2.4 flex md:flex-row flex-col ${classNameHead}`.trim()}>
      <div className={`md:w-1/2 w-full flex justify-center p-1 !border !border-white-400 ${classNameLeft}`.trim()}>
        {leftChild}
      </div>

      <div className={`md:w-1/2 w-full justify-center p-1 hidden !md:flex ${classNameRight}`.trim()}>
        {rightChild}
      </div>
    </section>
  )
}

export { Container, LayoutContainer, ColContainer }