import React,{Component} from 'react'
import Nav from './Nav'

class NotFound extends Component{
    render(){
        return (
            <div>
                <Nav/>
            <div class="notfound">
            <h2>Oops! Page not found.</h2>
            <h1>404</h1>
            <p>We can't find the page you're looking for.</p>
           
            </div>
            </div>

        )
    }
}

export  default NotFound; 