import React,{useState} from 'react';
import Town from './Town';


function City({city,towns,id}){
  
  const[clicked,setClick] = useState(false);

    function handleClick(){
      setClick((prevState)=>{
        return !prevState;
      })}
    

  return(
    <>
    <li onClick={handleClick}  id={id}>{city}</li>
    <ul>
      {!clicked?'':towns.map((eachTown,index)=>{
        return <Town key={index} id={'town'+(index+1)} town={eachTown.name} />
      })}
    </ul>
    </>
    
  )
  }


export default City;