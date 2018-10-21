import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './shoe-template.css';

class Product extends Component {
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
    this.mounted = true;

    axios.get(`http://localhost:5000/stylecode`, {
      params:{
        stylecode: this.props.stylecode
      }
    })
      .then(res => {
        if(this.mounted){
          var data = res.data;
          this.setState({ product: data });
        }
      })
  }

  componentWillUnmount(){
    this.mounted = false;
  }
  render() {
    return (
      <div>
      <div class = "image">
          <img id= "imageofshoe" src={this.state.product.imageURL} alt= { this.state.product.name } height="620" width="620" />
      </div>
      <div class = "information">
          <p id= "name">Name: { this.state.product.name } </p>
          <p id= "releasedate">Release Date: { this.state.product.releaseDate } </p>
          <p id= "retail">Retail: ${ this.state.product.retail } </p>
          <p id= "lowesttask"> Lowest Ask: ${ this.state.product.lowestAsk } </p>
          <p id= "highestbid"> Highest Bid: ${ this.state.product.highestBid } </p>
          <p id= "risk">Risk: { this.state.product.risk } Risk</p>
      </div>
      </div>
    );
  }
}

export default Product;
