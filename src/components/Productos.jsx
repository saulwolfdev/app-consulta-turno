import React, { Component } from 'react';
import Producto from './Producto';
class Productos extends Component {
	constructor(props) {
		super(props);
		this.state={
			productos:[]
		}
	}
	componentDidMount(){
		this.setState({
			productos:[
					{id:1,name:"saul",lastname:"alejos",age:34},
					{id:2,name:"saul1",lastname:"alejos1",age:34},
					{id:3,name:"saul2",lastname:"alejos2",age:34},
					{id:4,name:"saul3",lastname:"alejos3",age:34},
					{id:5,name:"saul4",lastname:"alejos4",age:34},
					{id:6,name:"saul5",lastname:"alejos5",age:34}
			]
		
		})
	}
	render() {
		const {productos}=this.state;
		return (
			<div>
					{productos.map(producto=>(<Producto key={producto.id} producto={producto}/>))}
			</div>
			
		);
	}
}

export default Productos;