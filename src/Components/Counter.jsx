import React from 'react'
import { useState } from 'react'

const Counter = () => {
 
 const [count, setCount] = useState(0);

 const handleMinusCount = function(){
  setCount((currentStep)=> currentStep - 1)
 }

 const handlePlusCount = function(){
  setCount((currentStep)=> currentStep + 1)
 }

  return (
    <div className='flex items-center gap-3'>

      <button className='px-2 font-bold border border-solid border-black text-3xl'
      onClick={handleMinusCount}
      >
        -
      </button>

      <div className='font-bold text-2xl'>Count: {count}</div>

      <button className='px-2 font-bold border border-solid border-black text-3xl'
      onClick={handlePlusCount}
      >
        +
      </button>

    </div>
  )
}

export default Counter