import { AutoAwesomeMosaic, CollectionsBookmarkOutlined } from '@mui/icons-material'
import React from 'react'
import { useAppContext } from '../context/appContext'

const Questions = () => {
    let {  noOfQuestions,
        category,
        difficulty,questionIndex,
        correctAnswers,
        selectedOption,data,increseIndex,option,increaseCorrect}=useAppContext()

        let [question,setQuestion]=React.useState({})
        let [options,setOptions]=React.useState([])

        React.useEffect(()=>{
            if(data?.length>1 && data!==undefined){
                let Question=data?.find((all,index)=>index===questionIndex)
                setQuestion(Question)
                let Coptions=[...Question?.incorrect_answers,Question?.correct_answer].sort(()=>0.5 - Math.random())
                setOptions(Coptions)
             }
        },[questionIndex,data])

        React.useEffect(()=>{
            if(selectedOption!==""){
                if(selectedOption===question?.correct_answer){
                    increaseCorrect()
                }
                increseIndex()
            }
        },[selectedOption])

  

    console.log(question)
    // console.log(data)
    console.log(options)
  return (
    <div className='div-center-50  q-main' style={{marginTop:"20px"}}>
       <h2 className='actual-qustion'>{question?.question}</h2>
       <h3 className='detail'>Correct Answers: {correctAnswers}/{questionIndex}</h3>
      <div className='c-main'>
        {
            options.map((all)=>{
                return <button className='btn' onClick={()=>option(all)}>{all}</button>
            })
        }
        <button className='next' onClick={()=>increseIndex()}>Next Question</button>
      </div>
    </div>
  )
}

export default Questions
