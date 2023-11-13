import {} from 'react'
import { useController } from 'react-hook-form'
import './radio.css'
const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name
  })
  return (
    <label className="rounded-full cursor-pointer custom-radio">
      <input className="hidden " type="radio" {...field} />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  )
}

export default RadioHook
