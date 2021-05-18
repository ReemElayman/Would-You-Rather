import React ,{Component} from 'react'

import {connect} from 'react-redux'
import Nav from './Nav'
import {handleAnswerQuestion} from '../actions/shared'
import { Redirect } from 'react-router'


class QuestionAsked extends Component{

    state= {
        selectedValue:'',
        toResult : false
    }

    handleChange=(e)=>{
      
        this.setState(()=>({
            selectedValue:e.target.value
          
           }))
           

    }

    handleSubmit = (e)=>{
        e.preventDefault()

     
       const {dispatch, id} = this.props
       dispatch(handleAnswerQuestion(id,this.state.selectedValue))
       .then(()=>{
        this.setState(()=>({
    
            toResult: true,
           }))
           
       })

        }


    
    render(){
        const {question, id,users} =this.props
         
 

        if(!question){
            return <Redirect to ={'/NotFound'}  exact/>
        }

        const askinguser = users[question.author]
    
        if (this.state.toResult=== true) {
            return <Redirect to ={`/questionsResults/${id}`}  exact/>

          }

        return (
            <div>
            <Nav/>
            <div className="container">

                <img className='useravatar'src={askinguser.avatarURL} alt="avat" />
                <p id='title2'>{askinguser.id} Askes:</p>
                <form >
                    <div className="container">
                        <label id='title1'>Would You Rather ....</label> <br/><br/>
                        <input type="radio"  name='options'id="optionA" value="optionOne" onChange={this.handleChange}/>
                        <label className='options2'> {question.optionOne.text}</label><br/><br></br>

                        <input type="radio"  name='options' id="optionB" value="optionTwo"onChange={this.handleChange}/>
                        <label className='options2'> {question.optionTwo.text}</label><br/><br></br> 
                        <button type="submit" onClick={this.handleSubmit}>Submit Answer</button>
                    
                    </div>

                </form>
           
            </div>
            </div>
        )
    }
}
function mapStateToProps ({ users,authedUser,questions },props) {
    const { id } = props.match.params
    const question = questions[id]
   
    return{
        question,
    
        users,
        id,


    }
 
  }
  
  export default connect(mapStateToProps)(QuestionAsked) 