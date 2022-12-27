import React from 'react'
import { useAppContext } from '../context/appContext'

const Model = () => {
    let {reset,correctAnswers,noOfQuestions}=useAppContext()
  return (
    <div className='model-main'>
    <div className='div-perfect-center m-main'>
      <h2>Hey The Quiz is Came to an End</h2>
      <p>You Have answered {correctAnswers} correct answers from {noOfQuestions}  of the total questions</p>
      <button className='btn' onClick={()=>reset()}>Start Again</button>
    </div>
    </div>
  )
}

export default Model
