import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}  

ReactDOM.createRoot(document.getElementById('root')).render(
//   <App></App>
    <MyApp></MyApp>  // If we write function in this file and use it in render section, it will work properly
    // MyApp()  // ----> if we write this function , then also , Our page give us expected output
 

)
