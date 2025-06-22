import React from 'react'

const Form = ({ onSubmit,children,className=''}) => {
    const baseFormClass='form-container'
    return (
        <form className={`${baseFormClass} ${className}`.trim()} onSubmit={onSubmit}>
          {children}
        </form>
    )
}


const Label = ({ children, htmlFor, className='' }) => {
    const baseLableClass='form-label'

    return(
        <label htmlFor={htmlFor} className={`${baseLableClass} ${className}`.trim()}>
            {children}
        </label>
    )
}

const Input = ({ type = "text", name, value, onChange, placeholder,className='' }) => {
    const baseInputClass='form-input'
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            className={`${baseInputClass} ${className}`.trim()}
            placeholder={placeholder}
        />
    )
}

function Button({
    Children,
    onClick,
    type = "button",
    className = "",
    style = {},
    disabled = false,
    ...props
}) {
    return (
        <button
        type={type}
        onClick={onClick}
        className={className}
        style={style}
        disabled={disabled}
        {...props}
        >{Children}</button>
    )
}

const Select = ({children, value, onChange, className='', style}) =>{
    return (
        <select name="" id="">
            {children}
            
        </select>
    )
} 



export { Label, Input, Form, Button, Select}