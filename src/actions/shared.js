import {getInitialData, saveQuestion,saveQuestionAnswer} from '../utils/api'
import { receiveQuestions,addQuestion, saveAnswer }from './questions'
import {setAuthUser}  from './authedUser'
import {receiveUsers,addUserQuestion, savAnswerToUser} from './users'

const AUTH_ID = 'SIGNEDOUT'

export  function handleInitialData (){
        return (dispatch)=>{
            return getInitialData()
            .then(({questions,users})=>{
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthUser(AUTH_ID))
              
            })
    
        }
       

    
}

export function handleAddQuestion(optionOneText,optionTwoText){
    return (dispatch, getState)=> {

        const {authedUser} = getState()
        
        console.log('get state ',authedUser)
        return saveQuestion({
            optionOneText, 
            optionTwoText, 
            author:authedUser
        })
        .then((question)=>{

            dispatch(addQuestion(question))
            dispatch(addUserQuestion(authedUser, question.id))

        })
     
    }
}


export function handleAnswerQuestion (qid, option) {
    return (dispatch, getState) => {
        
      const { authedUser } = getState();

      return  saveQuestionAnswer({
        authedUser: authedUser,
        qid,
        answer: option
      })
          .then(() => {
             
              dispatch(saveAnswer( authedUser, qid,option));
              dispatch(savAnswerToUser( authedUser,qid,option))
          })
    }
}