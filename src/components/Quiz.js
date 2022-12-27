import React from 'react'
import { useAppContext } from '../context/appContext'
import StarterPage from './StarterPage'
import Questions from './Questions'
import Model from './Model'

const Home = () => {
    let {quizStart,model}=useAppContext()
  return (
    <div>
        {
            model && <Model/>
        }
        {!quizStart?
            <StarterPage/>:
            <Questions/>
        }
    </div>
  )
}

export default Home
