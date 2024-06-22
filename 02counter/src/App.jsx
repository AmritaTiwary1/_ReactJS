


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
 <br />
 <br />
 <button onClick={remove} >REMOVE BUTTON {counter}</button>
 </>
 )
}

export default App
