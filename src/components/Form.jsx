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
    children,
    onClick,
    type = "button",
    className = "",
    style = {},
    disabled = false,
    ...props
}) {

    const baseClassName='form-button';
    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseClassName} ${className}`.trim()}
            style={style}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

const Select = ({children, value, onChange, className='', style}) =>{
    const baseClassName='form-select';
    return (
        <select 
            value={value}
            onChange={onChange}
            className={`${baseClassName} ${className}`.trim()}
            style={style}
           >
            {children}
        </select>
    )
} 

const Option = ({children,disabled='',selected='', value,style}) =>{
    return (
        <option 
            selected={selected}
            disabled={disabled}
            value={value}
            style={style}
           >
            {children}
        </option>
    )
} 



export { Label, Input, Form, Button, Select, Option}