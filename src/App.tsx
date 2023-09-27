import { useEffect, useState } from 'react'
import AmountInput from './AmountInput'
import ResultRow from './ResultRow'
import axios from 'axios'
import useDebouncedEffect from 'use-debounced-effect'

type CachedResult = {
  provider: string
  btc: string
  _id: string
}

type OfferResults = {[keys: string]: string}

const defaultAmount = '100'

function App() {
  const [amount, setAmount] = useState(defaultAmount)
  const [prevAmount, setPrevAmount] = useState(defaultAmount)
  const [cachedResults, setCachedResults] = useState<CachedResult[]>([])
  const [offerResults, setOfferResults] = useState<OfferResults>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://62tfa75d3v.us.aircode.run/cachedValues').then((res) => {
      setCachedResults(res.data)
      setLoading(false)
    })
  }, [])

  useDebouncedEffect(() => {
    if(amount !== prevAmount) {
      axios
      .get(`https://62tfa75d3v.us.aircode.run/providers?amount=${amount}`)
      .then(res => {
        setLoading(true)
        setOfferResults(res.data)
        setPrevAmount(amount)
      })
    }
  }, 300,[amount])

  const sortedResults:CachedResult = Object.keys(offerResults).map((provider) => ({
    provider,
    btc:offerResults[provider]
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
        {loading && (
          <>
            <ResultRow loading={true} />
            <ResultRow loading={true} />
            <ResultRow loading={true} />
            <ResultRow loading={true} />
          </>
        )}
        {!loading &&
          cachedResults.map((result:CachedResult) => (
            <ResultRow
              key={result._id}
              providerName={result.provider}
              btc={result.btc}
            />
            ))}
       {!loading && !showCached && sortedResults.map((result) => (
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
