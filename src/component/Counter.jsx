import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //     value:this.props.Counters.value,
    //     imageUrl:"https://i.picsum.photos/200",
    //     tag:["tag1","tag2","tag3"]
    //  }
     styles={
         fontSize: 20,
         fontWeight:'bold'
     }

    //  constructor(){
    //      super();
    //      console.log("constructor",this);
    //      this.handleIncrement=this.handleIncrement.bind(this);
    //  }

    //  handleIncrement=()=>{
    //     console.log("hiii Clicked!",this.state.value);
    //      this.setState({value:this.state.value+1});
    // }
     
   


    render() { 
        console.log("props:",this.props.Counters)
        return <div>
                    {/* <image src={this.state.imageUrl} alt="image is loading"></image>
                    <span>{this.state.imageUrl}</span> */}
                    {/* <span style={this.styles} className="badge badge-primary m-4">{this.formatCount()}</span>
                    <button style={{fontSize:30}}type="button" className="btn btn-secondary btn-sm">Increament</button> */}
{/* 
                    <ul class="list-group">
                        {this.state.tag.map(tag=><li>{tag}</li>)}
                    </ul> */}
                    
                    {/* {this.props.children} */}
                    <span className={this.getChangeClassName()}>{this.formatCount()}</span>

                    <button type="button" className="btn btn-secondary btn-sm" onClick={()=>this.props.onIncrement(this.props.Counters)}>Increament</button>

                    {/* <button type="button" className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>Increament</button> */}
                    <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.Counters.id)}>Delete</button>
                    <br></br>
                   {/* {this.gatListofTag()} */}
               </div>;
    }


    

 
    gatListofTag(){
        // const {tag}=this.state;
        // tag.map(function(x){
            if(this.state.tag.length>0){
                return  <ul className="list-group">{this.state.tag.map(tag=><li key={tag} className="list-group-item" >{tag}</li>)}</ul>;
            }
            else{
                return <p>No list item available!</p>;
            }
        // })
    }

    getChangeClassName() {
        let chgClass = "badge m-4 badge-";
        // chgClass += (this.state.count === 0) ? "warning" : "primary";
        chgClass += (this.props.Counters.value === 0) ? "warning" : "primary";
        return chgClass;
    }

    formatCount(){
        const {value}=this.props.Counters;
        return value===0?'Zero':value;
    }
}
 
export default Counter;