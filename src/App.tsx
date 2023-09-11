import { useState } from 'react'
import Input from './Input'

function App() {
  const [amount, setAmount] = useState('')

  return (
    <main className='max-w-2xl mx-auto px-4 py-8'>
      <h1 className='uppercase text-6xl text-center font-semibold bg-gradient-to-br from-purple-600 to-sky-400 bg-clip-text text-transparent from-30%'>
        Find the cheapest BitCoin
      </h1>
      <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
    </main>
  )
}

export default App
