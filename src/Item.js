import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class Item extends Component {
  constructor(){
    super();
    this.state = {
      product: {
        name: "",
        releaseDate: "",
        retail: "",
        risk: "",
        imageURL: "",
        lowestAsk: "",
        highestBid: ""
      }
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/stylecode`, {
      params:{
        stylecode: this.props.stylecode
      }
    })
      .then(res => {
        var data = res.data;
        this.setState({ product: data });
      })
  }
  render(){
    return (
          <div id = "day">
            <div id = "shoe" >
                <h4>{this.state.product.releaseDate}</h4>
                <img id= "pic" src={this.state.product.imageURL} alt={this.state.product.name}/>
                <h4>{this.state.product.name}</h4>
            </div>
          </div>
    );
  }
}

export default Item;
