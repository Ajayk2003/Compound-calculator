import React from 'react'

export default function SliderInput(props) {
  const {title, value, setValue} = props;
  return (
    <div className='flex flex-col gap-4 pb-8'>
      <h3>{title} ({value})</h3>
      <input type='range' value={value} min="1" max="100" onChange={(e) => {
        setValue(e.target.value);
      }}/>
    </div>
  )
}
