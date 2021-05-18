import React,{Component} from 'react'
import {connect} from 'react-redux'


class UserCard extends Component{
    

    render (){
        const { user}= this.props
        console.log('usercard : ',this.props)
      
        const answerdNum = Object.keys(user.answers).length
        const createdNum = Object.keys(user.questions).length
        const score = answerdNum+createdNum
        
        
        return (
     
        <div className="card">
            <img className='cardavatar'src={user.avatarURL} alt="avat" />
            <h1>{user.name}</h1>
            <p className='cardtext'>Answerd Questions : {answerdNum}</p>
            <p className='cardtext'> Created Questions : {createdNum}</p>
            <div className="flex-container">

            <div className="flex-child score">
                score
            </div>
            
            <div className="flex-child circle">

                <div className="cardcircle">{score}</div>
                
            </div>
            
            </div>
          
            
        </div>
        )
    }
}


function mapStateToProps ({ questions, users  },{id}) {

    const user = users[id]
    return {
     
      questions,
      user,
      questionsIds: Object.keys(questions)
     
    
    }
  }
  
  export default connect(mapStateToProps)(UserCard) 