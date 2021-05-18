import React,{Component} from 'react'
import Nav from './Nav'
import {connect} from 'react-redux'

import { Redirect } from 'react-router'

class QuestionResult extends Component{

    render(){
        
      const { question,authedUser,users} = this.props

      const optionOneVotes = question.optionOne.votes.length
      const optionTwoVotes = question.optionTwo.votes.length

      const totalvotes= optionOneVotes+optionTwoVotes
      const optionOnePercent= (optionOneVotes / totalvotes)*100
      const optionTwoPercent= (optionTwoVotes / totalvotes)*100

      const optionOneText= question.optionOne.text
      const optionTwoText= question.optionTwo.text

      console.log(optionOneVotes)
      console.log(optionTwoVotes)
      console.log(totalvotes)
      console.log(optionOnePercent)
      console.log(optionTwoPercent)

      //true option one false option two
      const authanswer =question.optionOne.votes.includes(authedUser)
      console.log(authanswer)
       if(!question){
        return <Redirect to ={'/NotFound'}  exact/>
    }

    const askinguser = users[question.author]

    const stylebarone = {
      width: `${optionOnePercent}%`
   
    }

    const stylebartwo= {
      width: `${optionTwoPercent}%`
    }
    

        return (
            <div>
             <Nav/>
             <div className="card">
             <img className='cardavatar'src={askinguser.avatarURL} alt="avat" />
              <h1>{askinguser.name} Asked</h1>
              <h4>Results</h4>
              <div className='container'>
              <div className= 'cardtext'>{optionOneText} 
              {authanswer === true ? <p className='vote'>Your Vote </p> : <p></p>}</div>
              <p> {optionOneVotes} votes out of {totalvotes}</p> 
              <div className="progress">
              <span className="progress-bar" style={stylebarone}>{`${optionOnePercent}%`}</span>
              </div>
              </div>
              <div className='container'>
              <div className= 'cardtext'>
              {authanswer === false ? <div  className='vote'>your vote </div> : <div></div>}
              {optionTwoText}</div>
              <p> {optionTwoVotes} votes out of {totalvotes}</p> 
              <div className="progress">
              <span className="progress-bar" style={stylebartwo}>{`${optionTwoPercent}%`}</span>
              </div>
              </div>
            
             </div>
            </div>
        )
    }


}

function mapStateToProps ({ authedUser,questions ,users},props) {
  const { id } = props.match.params
  const question = questions[id]
 
  return{
      question,
      id,
      authedUser,
      users
  


  }

}

export default connect(mapStateToProps)(QuestionResult) 