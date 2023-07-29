import React, { useState } from 'react'

export default function NumericInput(props) {
  const {title, symbol, value, setValue} = props; 
  return (
    <div className='flex flex-col gap-2'>
      <h3>({title}) ({symbol})</h3>
      <input  className="outline-none focus:outline-none text-white
        text-xs sm:text-sm border border-transparent hover:border-blue-950
        focus:border-blue-800 border-solid bg-slate-950 p-6 rounded"
         value={value} onChange={(e) => {
        setValue(e.target.value)
      }}/>
    </div>
  )
}
