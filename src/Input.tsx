import { ChangeEventHandler } from 'react'

export type InputProps = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  className?: string
  placeholder?: string
}

const Input = (props: InputProps) => {
  return (
    <input
      placeholder={props.placeholder}
      type='text'
      className={'border border-white/20 bg-blue-950 p-2 ' + props.className}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input
