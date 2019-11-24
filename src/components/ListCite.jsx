import React from 'react';
import Cite from './Cite';
const ListCite = ({cite}) => {
    return (
        <div>
            <h1>lista de citas</h1>
            {cite.map(cite=>(<Cite
            key={cite.id}
            cite={cite}
            />))}
        </div>
    );
}
 
export default ListCite;