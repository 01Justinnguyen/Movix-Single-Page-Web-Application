import React from 'react'
import { useController } from 'react-hook-form'
import './field.css'

const Field = ({ children }) => {
  return <div className="mb-10 text-left Field">{children}</div>
}

export default Field
