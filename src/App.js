import React, {Component} from 'react';
import Header from './components/Header';
import NewCite from "./components/NewCite";
import ListCite from './components/ListCite';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			cite:[]
		 }
	}
	createNewCite=(data)=>{
		const cite=[...this.state.cite,data];
		console.log("this is property his a children at father",data);
		this.setState({
			cite
		})
	}
	
	componentDidMount(){
		const citeLS=localStorage.getItem("cite");
		if(citeLS){
			this.setState({
				cite:JSON.parse(citeLS)
			})
		}
	}
	componentDidUpdate(){
		localStorage.setItem("cite",JSON.stringify(this.state.cite))
	}
	
	
	deleteCite=(id)=>{
		const citeActualy=[...this.state.cite]
		const cite=citeActualy.filter(cite=>cite.id!==id)
		
		this.setState({
			cite
		})

	}
	render() { 
		return (
      <div>
        <Header title={"aplicacion de turnos"} />
        <NewCite createNewCite={this.createNewCite}/>
		<ListCite 
		cite={this.state.cite}
		deleteCite={this.deleteCite}
		/>
      </div>
    );
	}
}

export default App;
