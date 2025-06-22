import React, { Children } from 'react'

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

export default Button