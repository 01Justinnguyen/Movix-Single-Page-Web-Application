import {} from 'react'
import './label.css'

const Label = ({ name, children, className }) => {
  return (
    <div className="label">
      <label className={`block mb-3 text-[18px] text-white ${className}`} htmlFor={name}>
        {children}
      </label>
    </div>
  )
}

export default Label
