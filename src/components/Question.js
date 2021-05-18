import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'


class Question extends Component{

state ={
    isanswer:0
}
    handleSubmit = (e)=>{
        e.preventDefault()

        if(this.props.isanswer === 1){
            this.setState(()=>({
                isanswer:1
               }))

        }else{
            this.setState(()=>({
                isanswer:2
               }))
        }

    
    
     
        }



    render(){
        const {question, user, id}=this.props
        const{author, optionOne,optionTwo} = question

        if(this.state.isanswer === 1){

            return <Redirect to={`/questionsAnswered/${id}`} />

        }else if (this.state.isanswer === 2){

            return <Redirect to={`/questionsResults/${id}`} />

        }
        return (
            <div className ='card'>
                <img className='cardavatar'src={user.avatarURL} alt="avat" />
                <p id='title2'>{author} Askes:</p>
                <div className="container">
                        <p>Would You Rather ....</p>
                        <p className='cardtext'>{optionOne.text}</p>
                         <p>OR</p>
                         <p className='cardtext'>{optionTwo.text}</p>
                        <button type="submit" onClick={this.handleSubmit}>View Question</button>
                </div>

            </div>
        )
    }
}


function mapStateToProps ({authedUser,users ,questions}, { id, isanswer }) {
    const question = questions[id];
    const user = users[question.author]
 
  
    return {
        authedUser,
        question,
        user,
        isanswer,
  }
}
export default connect(mapStateToProps)(Question);