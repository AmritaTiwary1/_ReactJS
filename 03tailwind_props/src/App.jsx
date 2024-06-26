import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card' 

function App() {
 let myobj={
  username:"dev",
  age:21
 }
 let arr=[1,2,3]
  return (
    <>
   <h1 className='bg-blue-400 m-45'>Tailwind Test</h1>
<Card channel="Amrita" btnText="TEXT WRITTEN BY ME" ></Card>  {/*values which we pass here will be shown as props in card.jsx  */}

{/* <Card channel="Amrita" myArr=[1,2,3] ></Card>  ERROR :here is error {myArr=[1,2,3]} [plugin:vite:react-babel] C:\Users\Aman\Desktop\ReactJS\03tailwind_props\src\App.jsx: JSX value should be either an expression or a quoted JSX text. <Card channel="Amrita" myArr=[1,2,3] ></Card> (13:29) */}

 <Card myarr={arr}></Card>  {/*WE CAN PASS ARRAY AS VARIABLE */}

 <Card channel="DEV" someObj={{name:"dev"}} ></Card> {/* NO ERROR */}

 {/* <Card channel="Amrita" obj={name:"dev"} ></Card> ERROR: [plugin:vite:react-babel] C:\Users\Aman\Desktop\ReactJS\03tailwind_props\src\App.jsx: Unexpected token, expected "}" (17:33) */}

{/* <Card channel="Amrita" someObj=myobj ></Card>   ERROR */}

<Card channel="RADHA" someObj={myobj}></Card> {/*WORKING FINE , MEANS WE CAN PASS OBJ AS VARIABLE */}

    </>
  )
} 

export default App
