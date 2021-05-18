import React, { Component } from 'react'
import {connect} from 'react-redux'
import {handleAddQuestion} from '../actions/shared'
import Nav from './Nav'
import { Redirect } from 'react-router-dom'


class NewQuestion extends Component{


    state = {
        optionOne: '',
        optionTwo:'',
        toHome: false,

    }

    handleChangeoptionOne = (e)=>{
        const optionOne = e.target.value
  
        this.setState(()=>({
          optionOne
        }))
    }

    handleChangeoptionTwo = (e)=>{
        const optionTwo = e.target.value
  
        this.setState(()=>({
          optionTwo
        }))
    }
  
    handleSubmit = (e)=>{
      e.preventDefault()
      
       const { optionOne, optionTwo } = this.state
       const {dispatch} = this.props

       dispatch(handleAddQuestion(optionOne,optionTwo))
       .then(()=>{
        this.setState(()=>({
            optionOne:'',
            optionTwo:'',
            toHome: true,
           }))
           
       })
  
      
  
       //dispatch(handleAddTweet(text,id))
  
       console.log('Option One: ', optionOne)
       console.log('option Two: ', optionTwo)

  
   
      }
   
    render(){

        const{optionOne,optionTwo,toHome} = this.state

        if (toHome === true) {
            return <Redirect to='/' />
          }
        return (

                <div>
                    <Nav/>
               
                 <div className="container">
                
                <h1 className="newquestion">Create New Question</h1>
                <form onSubmit={this.handleSubmit}>
                  

                    <div className="container">
                        <label id='title1'>Would You Rather ....</label>
                         <input  className="options" type="text" placeholder="Option One" value={optionOne} onChange={this.handleChangeoptionOne}/> 
                         <label>OR</label>
                         <input className="options" type="text" placeholder="Option Two"  value={optionTwo} onChange= {this.handleChangeoptionTwo}/>   
                        <button type="submit" disabled={optionOne === '' || optionTwo=== ''}>Submit</button>
                    
                    </div>

                </form>
           
            </div>
            </div>
        )
    }
}


export default connect()(NewQuestion);
