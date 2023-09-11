import Input from './Input'
import { InputProps } from './Input'

function AmountInput(props: InputProps) {
  return (
    <div className='flex items-center bg-blue-950 border border-white/10 rounded-lg overflow-hidden mb-4'>
      <Input
        placeholder={props.placeholder}
        className='border-0 w-24 pl-4 text-2xl'
        value={props.value}
        onChange={props.onChange}
      />
      <span className='text-white/50 px-4'>USD</span>
    </div>
  )
}

export default AmountInput
