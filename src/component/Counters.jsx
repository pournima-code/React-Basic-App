import React, { Component } from 'react';
import Counter from "./Counter";

class Counters extends Component {
    // state = { 
    //     Counters:[
    //         {
    //             id:1,
    //             value:3
    //         }, {
    //             id:2,
    //             value:1
    //         }, {
    //             id:3,
    //             value:2
    //         }, {
    //             id:4,
    //             value:0
    //         }
    //     ]
    //  }
    // handleDeleteFunction=(ComponentId)=>{
    //     console.log("Handler method from parent",ComponentId);
    //     const newComponentArray=this.state.Counters.filter(x=>x.id!==ComponentId);
    //     console.log(newComponentArray);
    //     this.setState({Counters:newComponentArray});
    // }

    // handleReset=()=>{
    //     console.log("ref to reset button");
    //     const newCounterArray2=this.state.Counters.map(x=>x.value=0);
    //     this.setState(newCounterArray2);
    //     console.log(newCounterArray2);
    // }

    // handleIncrementFunction=(incrementedObj)=>{
    //     const realObjClone= [...this.state.Counters];
    //     const index=realObjClone.indexOf(incrementedObj);
    //     console.log(index);
    //     console.log(realObjClone[index]);
    //     realObjClone[index]={...incrementedObj};
    //     console.log("realObjClone[index]__UP:",realObjClone[index]);
    //     realObjClone[index].value++;
    //     console.log("realObjClone[index]__Value__UP:",realObjClone[index]);
    //     console.log(realObjClone);
    //     this.setState({Counters:realObjClone});
    //     // console.log(this.state.Counters);
    // }
    render() {
         //    object destructing
        const { onResetCall,onDeleteCall,onIncrementCall}=this.props;
        console.log("props:",this.props);
        return ( 
       
            <div>
                 <button className="btn btn-primary btn-sm m-3" onClick={onResetCall}>Reset</button>
                {
                    this.props.Counters.map(Counters=>
                        // {
                        //     return Counters.id===1?<Counter key={Counters.id} value={Counters.value} selected={true}/>:<Counter key={Counters.id} value={Counters.value}/>
                        // }   
                        // <Counter key={Counters.id} 
                        // onDelete={this.handleDeleteFunction} 
                        // value={Counters.value} 
                        // id={Counters.id} 
                        // selected={true}/>

                        <Counter key={Counters.id} 
                        onDelete={onDeleteCall} 
                        onIncrement={onIncrementCall}
                        Counters={Counters}
                        selected={true}/>
                    // <Counter key={Counters.id} value={Counters.value}>
                    //     <h4 key={Counters.id+"1"}>#Item no.{Counters.id}</h4>
                    // </Counter>
                    )
                }
            </div>
        );
    }
}
 
export default Counters;