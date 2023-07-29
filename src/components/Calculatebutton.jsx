import React from 'react'

export default function Calculatebutton(props) {
  const {evaluate} = props;

  return (
    <div >
      <button className='flex items-center justify-center gap-4 py-4 
      bg-blue-600 hover:bg-blue-500 duration-200 w-full group rounded' onClick={() => evaluate()}>
        <h3>
          Calculate now
        </h3>
        <i className="fa-solid fa-calculator group-hover:animate-spin"></i>
      </button>
    </div>
  )
}
