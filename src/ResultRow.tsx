type ResultRowProps = {
  loading?: boolean
}

function ResultRow({ loading }: ResultRowProps) {
  return (
    <div className='relative border border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2'>
      <div className='flex gap-4'>
        <div>logo</div>
        <div className='grow'>provider name</div>
        <div className='flex gap-2'>
          <span className='text-xl text-purple-200/80'>0.000</span>
          <span className='text-xl text-purple-200/50'>BTC</span>
        </div>
      </div>
      {loading && <div className='bg-red-500 inset-0 absolute' />}
    </div>
  )
}

export default ResultRow
