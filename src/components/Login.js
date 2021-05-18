import React, { Component } from 'react'
import img_avatar from '../images/img_avt.png'
import {connect} from 'react-redux'
import {setAuthUser}  from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
class Login extends Component{

    state ={

        selectValue:' ',
        toHome:false

    }

    handleSubmit = (e)=>{
        e.preventDefault()
    
         const {selectValue} =this.state
         const {dispatch} =this.props
        
    
         dispatch(setAuthUser(selectValue))
        
            this.setState(()=>({
                toHome: true,
               }))
       
    
        console.log('The Authed User  is : ',selectValue)
    
        }

         handleChange= (e)=>{
    this.setState({selectValue:e.target.value});
  }

    render(){
        const {usersIds,users} = this.props
        const {toHome }= this.state

        if (toHome === true) {
            return <Redirect to='/' />
          }
      
        return(

		
            <div className="container">
                <h1>Would You Rather ?</h1>
                <h3>Sign In To Play </h3>
                <form onSubmit={this.handleSubmit} >
                    <div className="imgcontainer">
                        <img src={img_avatar} alt="Avatar" className="avatar"/>
                    </div>

                    <div className="container">
                        <select placeholder="Select Username"   value={this.state.selectValue} 
                         onChange={this.handleChange} name="uname" required >
                            <option value=" " disabled  hidden>select username...</option>
                            {usersIds.map((id) => (
                               <option key = {id} value = {id}>{users[id].name}</option>
                         
                            
                            ))}

                            
                            
                           
                         </select>    
                        <button type="submit">Login</button>
                    
                    </div>

                </form>
            </div>
	 

        )
    }
}


function mapStateToProps ({users}) {
   
    return {
        usersIds: Object.keys(users),
        users
   

  }
}
export default connect(mapStateToProps)(Login);