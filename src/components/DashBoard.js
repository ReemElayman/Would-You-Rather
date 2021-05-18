import React ,{Component} from 'react'
import Question from './Question'
//import QuestionAsked from './QuestionAsked'
import {connect} from 'react-redux'
import Nav from './Nav'

class DashBoard extends Component{

    state = {
       
        questionsarr:[],
        isanswer:0,
        active1:true,
        active2:false,
    }

    componentDidMount(){
        
        const {questions,authedUser}= this.props;
        const questionsarr= this.props.questionsIds.filter((id)=>( !(questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))))
        this.setState({questionsarr:questionsarr, isanswer:1})
      }


    handleUnAnswer=(e)=>{
       
        const {questions,authedUser}= this.props;
        console.log(e.target.value)
        if(e.target.value === 'u') {
            const questionsarr= this.props.questionsIds.filter((id)=>( !(questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))))
            this.setState({questionsarr:questionsarr, isanswer:1 , active1:true, active2:false})

        }else{
            const {questions,authedUser}= this.props;
            console.log('authedUser : ',authedUser)
            const questionsarr= this.props.questionsIds.filter((id)=>( (questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))) )
            console.log('else : ' , questionsarr)
            this.setState({questionsarr:questionsarr, isanswer:2, active1:false, active2:true})

        }
    
      
        
       
    }
    render (){
       
      

        return (
            <div>
                <Nav/>
            <div className="container">
           
             <div id="reem" >
        <ul>
          <li><button className={this.state.active1 === true ? 'active' : ''}  value = 'u' onClick={this.handleUnAnswer}>Unanswered Questions</button></li>
          <li ><button  className={this.state.active2 === true ? 'active' : ''} value = 'a' onClick={this.handleUnAnswer}>Answered Questions</button></li>
          
        </ul>
        </div>
            <ul>
            {this.state.questionsarr.map((id) => (
            <li key={id}>
              <Question id ={id} isanswer={this.state.isanswer}/>
            </li>
          ))}
                   
            </ul>
            </div>
            </div>
        )
    }
}


function mapStateToProps ({ questions, authedUser }) {
    return {
      authedUser,
      questions,
      questionsIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    
    }
  }
  
  export default connect(mapStateToProps)(DashBoard) 