import React from 'react'

export default function CalculatedAmount(props) {
  const {value, IntiAmount, Numberofyears, Monthlycontribution, reset} = props;
  const amounts = {
    'Compounded Amount' : value,
    'Ordinary Amount' : parseInt(Numberofyears) * parseInt(Monthlycontribution)*12 + parseInt(IntiAmount),
    'Difference' : parseInt(value) - (parseInt(Numberofyears) * parseInt(Monthlycontribution) + parseInt(IntiAmount)),
  }
  return (
    <div className='flex flex-col gap-6 py-10 px-8 border-solid border-transparent rounded bg-blue-700 text-white'>
      {
        Object.keys(amounts).map((amount, amountIndex) => {
          return(
            <div className='flex gap-4'>
              <h3 key={amountIndex}>
                {amount}
              </h3>
              <p>
              ₹ {amounts[amount].toFixed(2)}
              </p>
            </div>
          )
        })
      }
      <button className='bg-blue-400 hover:bg-blue-300 duration-200 
      py-2 text-white border-none rounded'
      onClick={() => reset()}>
        Reset
      </button>

    </div>
  )
}
