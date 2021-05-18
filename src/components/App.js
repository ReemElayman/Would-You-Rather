import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './Login'

import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'

import Leaderboard from './Leaderboard'

import DashBoard from './DashBoard'
import NewQuestion from './NewQuestion'
import QuestionAsked from './QuestionAsked'
import QuestionResult from './QuesttionResult'
import NotFound from './NotFound'



class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
 
  render() {
    return (
      <Router>
      <Fragment>
      
            {this.props.loading === true
              ? null
              : <div>
                  {this.props.signedOut?(<Login/>):(
                  <Switch>
                  <Route path='/' exact component={DashBoard} />
                  <Route path='/leaderboard'  exact component={Leaderboard}/>
                  <Route path='/questionsAnswered/:id'  exact component={QuestionAsked}/>
                  <Route path='/questionsResults/:id'  exact component={QuestionResult}/>
                  <Route path='/new' component={NewQuestion} />
                  <Route path ={'/NotFound'} component={NotFound}/>
                  </Switch>
                  )}
                </div>
              }
        </Fragment>
      </Router>
    )
    }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null,
    signedOut :authedUser=== 'SIGNEDOUT'

  }
}

export default connect(mapStateToProps)(App)
