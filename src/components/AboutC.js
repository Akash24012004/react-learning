import React from "react";
import DummyObject from "../utils/mock_data";
class AboutC extends React.Component{
    constructor(props){
           super(props)
       this.state={
        count:DummyObject
       } 
       console.log("child constructor is called")   
    }
    componentDidMount(){
      const ApiData=async ()=>{ 
        const Data=await fetch("https://jsonplaceholder.typicode.com/users")
        const response=await Data.json()
        console.log(response)
        this.setState((prevstate,props)=>{
         return  {count:response}
      })
       }
       ApiData()
    }
   
    render(){
        console.log("child render called")
       const {author,age}=this.props;
        return(<div id="card-border">
             {this.state.count.map((elem) => {
               return  (<div className="Content" key={elem.id}>
                          <h1>{elem.name}</h1>
                             </div>);
        })}
          
        </div>
    )
    }
}
export default AboutC;