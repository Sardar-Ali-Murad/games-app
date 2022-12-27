import React from 'react'
import { useAppContext } from '../context/appContext'
import FormRow from "./FormRow"
import FormRowSelect from './FormRowSelect'
import "./index.css"

const StarterPage = () => {
    let { handleChange,
        handleCheck,noOfQuestions,difficulty,category,start}=useAppContext()

        function handleChanges(e){
            handleChange(e.target.name,e.target.value)
        }
  return (
    <div className='start-main main-div-margins div-center-50'>
      <h1>Quiz Setup</h1>
       <FormRow labelText="No Of Questions" name="noOfQuestions" type="Number" value={noOfQuestions} handleChange={handleChanges}/>
       <FormRowSelect labelText="Category" name="category" value={category} handleChange={handleChanges} list={["sports","history","politics"]}/>
       <FormRowSelect labelText="Difficulty" name="difficulty" value={difficulty} handleChange={handleChanges} list={["easy","medium","hard"]}/>
       <button onClick={start} className="btn">Start</button>
    </div>
  )
}

export default StarterPage
