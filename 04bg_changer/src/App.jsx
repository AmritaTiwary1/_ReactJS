import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}} >      {/* here, color is variable of useState bt we dont use bracket, bcoz we already used bracket in {backgroundColor:color} , these are rules , WE should keep this in our mind*/} 
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      
      {/* <button onClick={setColor('red')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "red"}}>RED</button>     */}
      {/* In onclick, whether directly fn is written or reference can be passed without argument i.e(setColor) but when we pass setColor('..'), then setColor fn is called and its previous value get returned , if we want to set it as setColor('green'), it will not work  */}
      
      <button onClick={ ()=> setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "blue"}}>blue</button>    
{/* here, in onclick, we have written a fn first, then inside it, we are calling setColor fn , it will work perfectly fine unlike previous btn */}

      <button onClick={ ()=> setColor('yellow')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "yellow"}}>yellow</button>    
      
      <button onClick={ ()=> setColor('black')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "black"}}>black</button>
     
      <button onClick={ ()=> setColor('red')} className='outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor: "red"}}>red</button>    
  </div>
  </div>
  </div>  
    </>
  )
}

export default App
