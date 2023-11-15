import {} from 'react'
import { useController } from 'react-hook-form'
import './radio.css'

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value
  })
  return (
    <label className="rounded-full cursor-pointer custom-radio">
      <input checked={props.checked} className="hidden" type="radio" value={props.value} {...field} {...props} />
      <div className="w-full h-full bg-white rounded-full"></div>
    </label>
  )
}

export default RadioHook
