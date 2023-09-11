import { useState, ChangeEventHandler } from 'react'

type InputProps = {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  className?: string
}

const Input = (props: InputProps) => {
  return (
    <input
      type='text'
      className={'border border-white/20 bg-blue-950 p-2 ' + props.className}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input
