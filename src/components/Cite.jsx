import React from 'react'
const Cite = ({cite,deleteCite}) => {
    return (
      <div>
        <ul>
          <li>{cite.user}</li>
          <li>{cite.pet}</li>
          <li>{cite.date}</li>
          <li>{cite.time}</li>
          <li>{cite.description}</li>
          <button onClick={()=>deleteCite(cite.id)} >delete cite</button>
        </ul>
      </div>
    );
}
 
export default Cite;