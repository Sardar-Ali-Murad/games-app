import { Card } from '@mui/material'
import React from 'react'
import "./Tenzies.css"
import data from "./data"
import { Sector } from 'recharts'

const Tenzies = () => {
    let [boxes,setBoxes]=React.useState(data)
    let [win,setWin]=React.useState(false)
    let [count,setCount]=React.useState(0)

    function boxHandler(id){
        setBoxes((pre)=>{
            return pre.map((box)=>box.id===id?{...box,seleted:!box.seleted}:box)
        })
    }

    function rollHandler(){
        if(!win){
            setBoxes((pre)=>{
                return pre.map((box)=>box.seleted===false?{...box,value:Math.floor(Math.random()*10)}:box)
            })

            setCount((pre)=>pre+1)
        }
    }

    React.useEffect(()=>{
        let AllSelected=boxes.some((all)=>all.seleted===false)
        let box1=boxes[0].value
        let SameValue=boxes.every((all)=>all.value===box1)
        if(!AllSelected && SameValue){
            setWin(true)
        }
    },[boxes])

    function reset(){
        setBoxes(data)
        setWin(false)
        setCount(0)
    }
  return (
    <div>
       <div className='tenziesMain'>
          <Card className='card'>
              <h1 className='dark'>Tenzies</h1>
              <p className='light'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
              <div className='boxMain'>
                {
                    boxes.map((box)=>{
                        return(
                            <div className={`singleBox ${box.seleted?"singleBoxSelected":""}`} onClick={()=>boxHandler(box?.id)}>
                            <h1 className='dark'>{box.value}</h1>
                        </div>
                            )
                    })
                }
              </div>

            { !win?
               <button className='button dark' onClick={rollHandler}>Roll</button>:
               <div>
                 <button className='button dark' onClick={reset}>You Win / Reset </button>
                 <h1 className='dark'>Congratulations You Won in {count} Counts</h1>
               </div>
            }  
                
          </Card>
       </div>
    </div>
  )
}

export default Tenzies
