import Example from "./Example.jsx"

function App() {

  // when injecting variables to html code, declaration shouls be done before return statement
  const username ="Amrita"
  /* NOTES _---- DONT REMOVE COMMENT SIGN 
  INNER WORKING OF COMPONENTS WHERE VARIABLE/PROPS IS PASSED --------

  const innerWorking = React.CreateElement(
  'h4',  //{I} any tag name can be written here
 
  {},     // {II} this is object which contains attributes like href,target,height,width,src etc
 
  'Passing variable(username) to html -- {username}'      // {III} this is text that is to be written inside that tag 
 
  username   // {IV} 4th part is empty here , fourth part is props value , or variable
  )
  
  */
  
  return (
    <>
   <h3>App.jsx fn is exported to main.jsx  </h3>
   <Example></Example>
   <h4>Passing variable(username) to html -- {username}</h4>
   </>
  )
}

// * We cant pass evaluation code i.e --> if(true) username in return section, it will not work
// * Can write outside or above the return section
// *

export default App
