// import React from 'react';
import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Counters from './component/Counters';
import NavBar from './component/NavBar';

class App extends Component {
  state = { 
    Counters:[
        {
            id:1,
            value:3
        }, {
            id:2,
            value:1
        }, {
            id:3,
            value:2
        }, {
            id:4,
            value:0
        }
    ]
 }
handleDeleteFunction=(ComponentId)=>{
    console.log("Handler method from parent",ComponentId);
    const newComponentArray=this.state.Counters.filter(x=>x.id!==ComponentId);
    console.log(newComponentArray);
    this.setState({Counters:newComponentArray});
}

handleReset=()=>{
    console.log("ref to reset button");
    const newCounterArray2=this.state.Counters.map(x=>x.value=0);
    this.setState(newCounterArray2);
    console.log(newCounterArray2);
}

handleIncrementFunction=(incrementedObj)=>{
    const realObjClone= [...this.state.Counters];
    const index=realObjClone.indexOf(incrementedObj);
    console.log(index);
    console.log(realObjClone[index]);
    realObjClone[index]={...incrementedObj};
    console.log("realObjClone[index]__UP:",realObjClone[index]);
    realObjClone[index].value++;
    console.log("realObjClone[index]__Value__UP:",realObjClone[index]);
    console.log(realObjClone);
    this.setState({Counters:realObjClone});
}
render() {
  return (
    <React.Fragment>
        <NavBar NavCounters={this.state.Counters.filter(x=>x.value>0).length}/>
          <main className="comtainer">
            <Counters 
              Counters={this.state.Counters}
              onDeleteCall={this.handleDeleteFunction}
              onIncrementCall={this.handleIncrementFunction}
              onResetCall={this.handleReset}/>
          </main>
      
    </React.Fragment>
  );
}
}

export default App;
