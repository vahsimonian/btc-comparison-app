import { useEffect, useState } from 'react'
import AmountInput from './AmountInput'
import ResultRow from './ResultRow'
import axios from 'axios'

function App() {
  const [amount, setAmount] = useState('100')
  const [cachedResults, setCachedResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  console.log(cachedResults)

  useEffect(() => {
    axios
      .get('https://62tfa75d3v.us.aircode.run/cachedValues')
      .then((res) => setCachedResults(res.data))
  }, [])

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
      {isLoading && (
        <>
          <ResultRow loading={true} />
          <ResultRow loading={true} />
          <ResultRow loading={true} />
          <ResultRow loading={true} />
        </>
      )}
    </main>
  )
}

export default App
