import React, { useState } from 'react'

const Button = ({ onClick = () => {}, className = '', isLoading = false, children }) => {
  const child = !!isLoading ? 'Loading...' : children
  return (
    <div>
      <button onClick={onClick} className={`p-4 border-none bg-orange min-w-[200px] rounded-lg ${className}`}>
        {child}
      </button>
    </div>
  )
}

export default Button
