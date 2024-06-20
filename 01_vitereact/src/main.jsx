import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h3>This fn is Written inside main.jsx file</h3>
        </div>
    )
}  

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
   <App></App>
    <MyApp></MyApp> </> /* If we write function in this current file and use it in render section, it will work properly
   Question Arises => MyApp is a function , then MyApp() should be written in .render section but <MyApp/> is working properly , why ?? & how ??
   Answer => this file is .jsx , which converts all the code in a bundLe , with the help of bundler , that bundler can be bable ..or something else 
    */
    
    // MyApp()  // ----> if we write this function , then also , Our page give us expected output
 

)
