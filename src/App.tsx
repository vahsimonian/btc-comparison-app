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

const defaultAmount = '100'

function App() {
  const [amount, setAmount] = useState(defaultAmount)
  const [prevAmount, setPrevAmount] = useState(defaultAmount)
  const [cachedResults, setCachedResults] = useState<CachedResults[]>([])
  const [offerResults, setOfferResults] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://62tfa75d3v.us.aircode.run/cachedValues').then((res) => {
      setCachedResults(res.data)
      setIsLoading(false)
    })
  }, [])

  useDebouncedEffect(() => {
    if(amount !== prevAmount) {
      axios
      .get(`https://62tfa75d3v.us.aircode.run/providers?amount=${amount}`)
      .then(res => {
        setIsLoading(true)
        setOfferResults(res.data)
        setPrevAmount(amount)
      })
    }
  }, 300,[amount])

  const sortedResults:CachedResults = Object.keys(offerResults).map((provider) => ({
    return {provider, bts:offerResults[provider]}
  }))
  const showCached = amount === prevAmount

  return (
    <main className='max-w-4xl mx-auto px-4 py-8'>
      {amount}
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
       {!loading && !showCached && (

       )}
      </div>
    </main>
  )
}

export default App
