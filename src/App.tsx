import { useState } from 'react'
import AmountInput from './AmountInput'
import ResultRow from './ResultRow'

function App() {
  const [amount, setAmount] = useState('100')
  console.log(amount)
  return (
    <main className='max-w-4xl mx-auto px-4 py-8'>
      <h1 className='uppercase text-6xl text-center font-semibold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from-30%'>
        Find the cheapest BitCoin
      </h1>
      <div className='flex justify-center mt-8'>
        <AmountInput
          placeholder={'amount'}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <ResultRow />
      <ResultRow />
      <ResultRow />
      <ResultRow loading={true} />
    </main>
  )
}

export default App
