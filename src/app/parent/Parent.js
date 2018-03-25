import React, { Component } from 'react';
import './Parent.css';
import Child from '../child/Child';


class Parent extends Component {
  constructor(){
    super();  
    this.state = {
      records: {
        no:123,
        name:"venkat",      
      }
    }; 
  }
  updateRecord(){
    var data={
      no:1,
      name:"raju",
    };
    this.setState({ records: data });
  }

  render() {
    return (      
      <div> 
         <h1>parent </h1> 
         <p> {this.state.records.no} </p>
         <p> {this.state.records.name}</p>
         <button onClick={()=> this.updateRecord()} > update data </button>
         <Child cRecords={this.state.records} cUpdate={this.updateRecord.bind(this)}/>
      </div>

   
    );
  }
}
export default Parent;
