
// CHANGING THE VARIABLE VALUE THROUGH FUNCTION IS NOT WORKING PROPERLY , WITHOUT USING HOOKS
function App() {
  let counter = 5;
  const add = () => {
    console.log(counter) //this will print +1 value of previous counter in console but counter will not be updated on DOM 
    counter = counter+1 //no change in DOM but +1 is happening in console
  }
  function remove(){
    console.log(counter); ////this will print -1 value of previous counter in console but counter will not be updated on DOM 
    counter--
  }
  return(
 <>
 <h1>Reactjs Deep Dive</h1>
 <h2>Counter Value : {counter}</h2>

 <button onClick={add} >ADD VALUE {counter}</button>
 <h2> After onclick fn's line : {counter}</h2>

 <br />
 <br />
 <button onClick={remove} >REMOVE BUTTON {counter}</button>
 </>
 )
}
export default App
/*

//NOW , USING HOOKS(READ GITHUB REPO ON REACT TO KNOW MORE ABOUT HOOKS)

import { useState } from "react";
//without importing react , it will work properly, bcoz bable will handle all this internally

function App(){
 // let counter = 5; //no need to declare variable, this will be handled through usestate syntax
  
//const [counter,setCounter]=useState(1); //if this is starting with const , then except setCounter fn , no one can change its value , eg=> counter-- ; setCounter(counter) === ERROR
let [counter,setCounter]=useState(1);

  
  const add = () => {
    console.log(counter) 
    setCounter(counter+1)
  }
  function remove(){
    console.log(counter); 
    counter--;
    setCounter(counter)
    
  }
  return(
 <>
 <h1>Reactjs Deep Dive</h1>
 <h2>Counter Value : {counter}</h2>

 <button onClick={add} >ADD VALUE {counter}</button>
 <br />
 <br />
 <button onClick={remove} >REMOVE BUTTON {counter}</button>
 </>
 )
}
export default App 

/*
//HW . write above code in such a way where add cant happen after 10 , and remove cant go down 0

import { useState } from "react";

function App(){
  
  const add = () => {
    console.log(counter) 
    if (counter <10) 
    setCounter(counter+1)
  }
  function remove(){
    console.log(counter); 
    if(counter>0){
    counter--;
    setCounter(counter)
    }
  }
  return(
 <>
 <h1>Reactjs Deep Dive</h1>
 <h2>Counter Value : {counter}</h2>

 <button onClick={add} >ADD VALUE {counter}</button>
 <br />
 <br />
 <button onClick={remove} >REMOVE BUTTON {counter}</button>
 </>
 )
}
export default App */