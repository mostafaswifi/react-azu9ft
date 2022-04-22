import React from 'react';

let Footer = ({handler,Data}) => {
  return (
  <div onClick={handler}>Footer
  <input type="text" id="name" onChange={(e)=>handler(e)}  vlaue={Data.name}/>
  <input type="text" id="age" onChange={(e)=>handler(e)} vlaue={Data.age} />

  </div>
  
  )
};

export default Footer;
