import { useEffect, useState } from 'react'
import { useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false) //we are using usestate so that number checkbox will smoothly show/update the password
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState()

  //Whenever we click on checkboxes of number,character,or change the length then passwordGenerator should update the passord according to that,
  // so, here,REACT provide special feature i.e=> useCallback hook ---> useCallback is a React Hook thatlets you cache a fn defintion between re-renders
  // SYNTAX IN REACT_DOCS ---> const cacheFn = useCallback( fn, dependencies) ===== here ,
  // dependencies means on which factor this(passwordGenerator) fn will update itself
  
  //***********************************DOCUMENTATION EXAMPLE *************************************

  /*  import { useCallback } from 'react';
export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]); ----->dependencies are passed in form of array
*/
  
  const passwordGenerator = useCallback( ()=>{
          let pass = ""
          let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          if (numberAllowed) {
            str += "0123456789"
          }
          if (charAllowed) {
            str+="!@#$%^&*-_+=[]{}~"
          }
     for (let i = 1; i <= length; i++) {
      let charPosition = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(charPosition)
     } 
       setPassword(pass)
  },[length,numberAllowed,charAllowed])

  // useEffect Hook --- is a hook that lets you synchronize component with external system 
  // WE use useEffect to run a function whenever some events takes place , to read more ---visit w3 Website ,must read !INTERESTING

//********************************************************************************************** */

// WHAT IF I WRITE THE FUNCTION WITHOUT USING CALLBACK HOOK ---------------------------
// i) comment out old passwordgenerator fn 
// wow ! It is working perfectly fine , sabaash !!! *_*

/*let passwordGenerator =()=>{
  let pass = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if (numberAllowed) {
    str += "0123456789"
  }
  if (charAllowed) {
    str+="!@#$%^&*-_+=[]{}~"
  }
for (let i = 1; i <= length; i++) {
let charPosition = Math.floor(Math.random()*str.length +1)
pass += str.charAt(charPosition)
} 
setPassword(pass)
}
*/

  useEffect(()=> { 
    passwordGenerator()
  },[length , numberAllowed,charAllowed])   //after writing useEffect , without even doing any changes to dependencies ,instead,during loading
  // the DOM ,the useEffect hook is running the passwordGenerator fn 
  //AND now talking about dependencies , so without even loading the page , just by changing the state of
  //NumberAllowed , length and char allowed, it is changing the password value very smoothly
  
  return (   
    <>
 <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 px-4 text-black-500 bg-gray-500'>
  <h1 className='text-center'>Password Generator</h1>
  <div classname='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range" 
      min={6}
      max={20}
      value={length}
      className='cursor-pointer'
     onChange={(e)=>{
           setLength(e.target.value)  }}
   />
<label>Length :{length}</label>
    </div>
    <div className='flex items-center gap-x-1'>
    <input type="checkbox" 
    defaultChecked={numberAllowed}
    id='numberInput'
    onChange={ ()=> {
      setNumberAllowed((prev) => !prev);
    }}
    />
  <label htmlFor="numberAllowed">Number</label>  
    </div>    
  <div className='flex items-center gap-x-1'>
    <input type="checkbox" 
    defaultChecked={charAllowed}
    id='numberInput'
    onChange={ ()=> {
      setCharAllowed((prev) => !prev);
    }}
    />
  <label htmlFor="characterInput">Characters</label>  
    </div>  
  </div>

 </div>
    </>
  )
}

export default App
