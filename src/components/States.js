import React, { useState } from 'react';
import City from './City';


function States({name,id,city}){

  const[clicked,setClick] = useState(false);
  function handleClick(){
    setClick((prevState)=>{
      return !prevState;
    });
  }
  return(
    <>
      <li onClick={handleClick} id={id}>{name}</li>
          <ul>
            {!clicked?'':city.map((eachCity,index)=>{
              return <City key={index}  id={'city'+(index+1)} city={eachCity.name} towns={eachCity.towns}/>
            })}
          </ul>
      </>
      
  
        
  )
}

export default States;