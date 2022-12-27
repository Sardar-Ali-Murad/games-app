import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
const Headers = () => {
  return (
    <div className='headers-main'>
         <h4 className='fancy-link'>
            <Link to="/">
               Tenzies 
            </Link>
         </h4>
         <h4 className='fancy-link'>
            <Link to="/quiz">
               Quiz
            </Link>
         </h4>
    </div>
  )
}

export default Headers
