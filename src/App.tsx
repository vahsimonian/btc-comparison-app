import { useEffect, useState } from 'react'
import AmountInput from './AmountInput'
import ResultRow from './ResultRow'
import axios from 'axios'
import useDebouncedEffect from 'use-debounced-effect'

type CachedResults = {
  provider: string
  btc: string
  _id: string
}

function App() {
  const [amount, setAmount] = useState('100')
  const [cachedResults, setCachedResults] = useState<CachedResults[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://62tfa75d3v.us.aircode.run/cachedValues').then((res) => {
      setCachedResults(res.data)
      setIsLoading(false)
    })
  }, [])
  
  useEffect(() => {

  },[amount])

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
      <div className='mt-6'>
        {isLoading && (
          <>
            <ResultRow loading={true} />
            <ResultRow loading={true} />
            <ResultRow loading={true} />
            <ResultRow loading={true} />
          </>
        )}
        {!isLoading &&
          cachedResults.map((result) => (
            <ResultRow
              key={result._id}
              providerName={result.provider}
              btc={result.btc}
            />
          ))}
      </div>
    </main>
  )
}

export default App
