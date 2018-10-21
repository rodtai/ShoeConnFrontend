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

class FrontPage extends Component {

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

  render() {
    return (
      <div>
      <h2 id="a">Releases</h2>
      <HashRouter basename = "">
        <div>
          {this.stylecodes.map(function(style, i){
            if(i%3==0)
              return <NavLink id = "clearFloat" to= {"/" + style}><Item stylecode= {style}/></NavLink>
            else {
              return <NavLink to= {"/" + style}><Item stylecode= {style}/></NavLink>
            }
          })}
        </div>
      </HashRouter>
      </div>
    )
  }
}

export default FrontPage;
