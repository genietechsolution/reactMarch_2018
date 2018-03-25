import React, { Component } from 'react';
import './Child.css';


class Child extends Component {
  constructor(props){
    super(props);  
    this.state = {
      products: [],
      pid:'',
      localProduct:[]
    }; 
  }
  componentDidMount(){
    }
 
  

  render() {
    return (      
      <div> 
         <h1> child </h1> 
         <p> {this.props.cRecords.no} </p>
         <p> {this.props.cRecords.name}</p>
         <button onClick={()=> this.props.cUpdate()} > update parent </button>

      </div>
    );
  }
}

export default Child;
