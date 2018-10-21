import React, { Component } from 'react'
import logo from './logo.svg'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import fb from './assets/facebook.png'
import insta from './assets/instagram.png'
import twit from './assets/twitter.png'
import pin from './assets/pinterest.png'

import Item from './Item.js'
import Product from './Product.js'
import FrontPage from './FrontPage.js'
class App extends Component{
  constructor(){
    super();
    this.stylecodes = [
    "AA3832-001",
    "AA3832-700",
    "163862C",
    "AQ1090-004",
    "B07400",
    "AJ4585-101",
    "EE9614",
    "EE7582",
    "EE7581",
    "AQ88330-100",
    "302370-021",
    "BV1207-900",
    "BV1207-903",
    "B75941",
    "BY9733",
    "442960-106",
    "BB9173",
    "943806-104/943807-104",
    "902290-700",
    "414571-004",
    "AJ5997-345",
    "555088-403",
    "BY2673",
    "384664-006"];

  }
  render(){
    return(
      <HashRouter>
      <div>
      <div>
      <NavLink to="/main">
        <div class = "page-header" >
            <h1>Shoe Conn</h1>
            <h6>Click here</h6>
        </div>
      </NavLink>
          <div>
            <Route path= "/main" component= {FrontPage}/>
            {this.stylecodes.map(function(style){
                return <Route path= {"/" + style}
                component={ () => <Product stylecode = {style} /> }/>
            })}
            </div>
        </div>
        <div id = "footer">
        <h3 id="a">Follow us on Social Media!</h3>
        <div class="row">
            <div class="col-md-3">
                <h3>
                    <a href="#">
                        <img src={fb}/>
                    </a>
                </h3>
            </div>
            <div class="col-md-3">
                <h3>
                    <a href="#">
                        <img src={insta}/>
                    </a>
                </h3>
            </div>
            <div class="col-md-3">
                <h3>
                    <a href="#">
                        <img src={twit}/>
                    </a>

                </h3>
            </div>
            <div class="col-md-3">
                <h3>
                    <a href="#">
                        <img src={pin}/>
                    </a>
                </h3>
            </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h6>©2018 Big Red Hacks</h6>
          </div>
        </div>
        </div>
        </div>
        </HashRouter>
    )
  }
}

export default App;
