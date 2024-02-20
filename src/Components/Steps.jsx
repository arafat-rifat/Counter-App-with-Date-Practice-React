import React from 'react'
import { useState } from 'react'



const Steps = () => {

 const [step, setStep] = useState(0);

 const handleMinusStep = function(){
  if(step > 0) setStep((currentStep)=> currentStep - 1)
 }

 const handlePlusStep = function(){
  if(step < 10) setStep((currentStep)=> currentStep + 1)
 }

  return (
    <div className='flex items-center gap-3'>

      <button className='px-2 font-bold border border-solid border-black text-3xl'
      onClick={handleMinusStep}
      >
        -
      </button>

      <div className='font-bold text-2xl'>Step: {step}</div>

      <button className='px-2 font-bold border border-solid border-black text-3xl'
      onClick={handlePlusStep}
      >
        +
      </button>

    </div>
  )
}

export default Steps