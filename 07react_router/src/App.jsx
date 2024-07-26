// //IT IS OF NO USE HERE ,MAIN.JSX WILL NOT USE APP.JSX IN THIS PROJECT, I DIDNT DELETE IT JUST TO UNDERSTAND HOW main.jsx will render content without APP>JSX

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Home from './components/Home/Home'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

/* 
 return (
    <>
<Header></Header>  
<Home></Home>
<Footer></Footer>
</>
)         ----------------> This return statement will give error bcoz , header,footer,home had used reacr-dom-router btt we didnt inform App.jsx about router
*/

// thats why we will not use App.jsx here 
}


export default App
