import React from 'react'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

// this html code  is taken from https://www.codingnepalweb.com/2020/04/responsive-menu-bar-in-html-css.html
class Nav extends Component{
  render(){
  return (
    <nav className='nav'>
      <label className="logo">Would You Rather </label>
      <ul>
        <li className= "user">Hello,  {this.props.user.name}</li>
        <li><NavLink to='/' exact activeClassName='active'>DashBoard</NavLink></li>
        <li> <NavLink to='/new' >New Question</NavLink></li>
        <li> <NavLink to='/leaderboard' exact >Leaderboard</NavLink></li>
        <li><a href='/' >logout</a></li>
      </ul>


    </nav>
  )
  }
} 


function mapStateToProps ({  authedUser, users }) {
  const user = users[authedUser]
  return {
    user,
 
  
  }
}

export default connect(mapStateToProps)(Nav) 