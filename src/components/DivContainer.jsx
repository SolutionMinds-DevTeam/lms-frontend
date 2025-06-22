import React from 'react'

const DivContainer = ({
    leftChild,
    rightChild,
    classNameHead="",
    classNameLeft="",
    classNameRight=""
 }) => {

    const headeBaseClass="div-container-component";
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

export default DivContainer