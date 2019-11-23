import React, { Component } from 'react';
class NewCite extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          cite:{
            user:"",
            pet:"",
            date:"",
            time:"",
            description:""
          }
         }
    }
    handleChange=(e)=>{
      e.preventDefault()
      this.setState({
        cite:{
        ...this.state.cite,
        [e.target.name]:e.target.value
        }
      })
      console.log("OK",[e.target.name]+":"+e.target.value);
    }
    render() { 
        return (
          <div>
            <form action="">
              <input
                onChange={this.handleChange}
                value={this.state.cite.user}
                type="text"
                name="user"
              />
              <input
                onChange={this.handleChange}
                value={this.state.cite.pet}
                type="text"
                name="pet"
              />
              <input
                onChange={this.handleChange}
                value={this.state.cite.date}
                type="date"
                name="date"
              />
              <input
                onChange={this.handleChange}
                value={this.state.cite.time}
                type="time"
                name="time"
              />
              <textarea
                onChange={this.handleChange}
                value={this.state.cite.description}
                name="description"
              ></textarea>
              <input type="submit" value="" />
            </form>
          </div>
        );
    }
}
 
export default NewCite;