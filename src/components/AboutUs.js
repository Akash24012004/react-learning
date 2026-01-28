import React from "react"
import AboutC from "./AboutC"
class AboutUs extends React.Component{
    constructor(props){
        super(props);
        console.log("parent constructor called");
        this.state={
            year:1
        }
    }
    componentDidMount(){
        console.log("parent did mount called")
    }
    render(){
              console.log("parent render called")
         return (
            <div >
              <h1> we know abuout us after learning complete react.js {this.props.id}</h1>
               <button onClick={()=>{
                this.setState((prevstate,props)=>{
                  return prevstate.year=prevstate.year+1;
                })
               }}>Waste your time</button>
               <AboutC author={"akash" }age={this.state.year}/>
          </div>)
    }
}

export default AboutUs