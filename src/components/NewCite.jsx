import React, { Component } from 'react';
import uuid from "uuid";

const stateInitial = {
  cite: {
    user: "",
    pet: "",
    date: "",
    time: "",
    description: ""
  },
  error: false
};
class NewCite extends Component {
    constructor(props) {
        super(props);
        this.state = {...stateInitial}
    }
    handleChange=(e)=>{
      e.preventDefault()
      this.setState({
        cite:{
        ...this.state.cite,
        [e.target.name]:e.target.value
        }
      })
      // console.log("OK",[e.target.name]+":"+e.target.value);
    }
    handleSubmit=(e)=>{
      e.preventDefault()
      const {date,description,user,pet,time}=this.state.cite;
      if(pet===""||user===""||description===""||date===""||time===""){
        this.setState({
          error:true
        });
        return;
      }
      
      const newCite = { ...this.state.cite};
      newCite.id=uuid();
      // this.props.createNewCite(this.state.cite);
       this.props.createNewCite(newCite);
       
       this.setState({
         ...stateInitial
       })
    }
    
   
    render() { 
      const {error}=this.state;
        return (
          <div>
            {error?<h3>todos los campos son obligatorios</h3>:null}
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                value={this.state.cite.user}
                type="text"
                name="user"
                placeholder="user"
              />
              <input
                onChange={this.handleChange}
                value={this.state.cite.pet}
                type="text"
                name="pet"
                placeholder="pet"
              />
              <input
                onChange={this.handleChange}
                value={this.state.cite.date}
                type="date"
                name="date"
                placeholder="date"
              />
              <input
                onChange={this.handleChange}
                value={this.state.cite.time}
                type="time"
                name="time"
                placeholder="time"
              />
              <textarea
                onChange={this.handleChange}
                value={this.state.cite.description}
                name="description"
                placeholder="description"
              ></textarea>
              <input type="submit" />
            </form>
          </div>
        );
    }
}
 
export default NewCite;