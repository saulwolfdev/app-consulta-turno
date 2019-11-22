import React from 'react';
const Producto = ({producto}) => {
	console.log("dataaaaaaaaaaaaa",producto)
	
	return ( 
		<div>
			<ul>
				<li>{producto.name}</li>
				<li>{producto.lastname}</li>
				<li>{producto.age}</li>
			</ul>
		</div>

	 );
}
 
export default Producto;