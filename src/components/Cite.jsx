import React from 'react'
const Cite = ({cite}) => {
    return (
      <div>
        <ul>
          <li>{cite.user}</li>
          <li>{cite.pet}</li>
          <li>{cite.date}</li>
          <li>{cite.time}</li>
          <li>{cite.description}</li>
        </ul>
      </div>
    );
}
 
export default Cite;