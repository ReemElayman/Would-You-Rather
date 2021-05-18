import React,{Component} from 'react'
import UserCard from './UserCard'
import Nav from './Nav'
import {connect} from 'react-redux'

class Leaderboard extends Component{

    render(){
        console.log(this.props.usersIds)
       
        return (
            <div>
                <Nav/>
                <ul>
                   {this.props.users.map((user)=>(
                        <UserCard key= {user.id} id ={user.id}/>
                   ))}
                </ul>
            </div>
        )
    }


}

function mapStateToProps ({ users  }) {
 
    

   const users_new= Object.values(users).map(user=> ({ ...user, userScore: Object.keys(user.answers).length + Object.keys(user.questions).length}))
  console.log('users_new',users_new )
   
  return {
    users: Object.values(users_new).sort((a, b) => b.userScore - a.userScore)
  }
 

    
    
  }
  
  export default connect(mapStateToProps)(Leaderboard) 