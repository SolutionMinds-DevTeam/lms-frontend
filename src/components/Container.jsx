import React from 'react'

 const Container = ({children,className='',style={}}) => {
  const baseClassName='div-container-component';
  return (
    <div className={`${baseClassName} ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

 const ColContainer = ({children,className='',style={}}) => {
  const baseClassName='div-col-container-component';
  return (
    <div className={`${baseClassName} ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}



const LayoutContainer = ({
    leftChild,
    rightChild,
    classNameHead="",
    classNameLeft="",
    classNameRight=""
 }) => {

    const headeBaseClass="layout-container-component";
    const leftBaseClass="left";
    const rightBaseClass="right";

  return (
    <section className={`${headeBaseClass} ${classNameHead}`.trim()}>
        <div className={`${leftBaseClass} ${classNameLeft}`.trim()}>
            {leftChild}
        </div>
        <div className={`${rightBaseClass} ${classNameRight}`.trim()}>
            {rightChild}
        </div>
    </section>
  )
}

export {Container,LayoutContainer,ColContainer}