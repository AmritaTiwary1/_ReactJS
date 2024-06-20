// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//     return(
//         <div>
//             <h3>This fn is Written inside main.jsx file</h3>
//         </div>
//     )
// }  

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <>
//    <App></App>
//     <MyApp></MyApp> </> 
//     /* If we write function in this current file and use it in render section, it will work properly
//    Question Arises => MyApp is a function , then MyApp() should be written in .render section but <MyApp/> is working properly , why ?? & how ??
//    Answer => this file is .jsx , which converts all the code in a bundLe , with the help of bundler , that bundler can be bable ..or something else 
//     */
    
//     // MyApp()  // ----> if we write this function , then also , Our page give us expected output
 

// )


// ---------------------------------Passing object(intead of component) to .render section ------------------------------
//******************************And understanding the rendering process by trial  */
import React from 'react'
import ReactDOM from 'react-dom/client'

//WILL GIVE ERROR BUT WHY ????  In react file structure , the innerworking is just like this -----
const reactElement = {
    type : 'a',
    props :{
        href: 'https://google.com',
        target: '_blank'
    },
  children : 'click me to visit google'
}
//WILL GIVE ERROR , BUT WHY ???  may be , <reactElement><reactElement/> is not working , so we will first capitalise first letter of it , may be , then it will work 
const ReactElement = {
  type : 'a',
  props :{
      href: 'https://google.com',
      target: '_blank'
  },
children : 'click me to visit google'
}

// when .render fn renders any components, or object, it divides it into four parts  
// And dividing the fn done with the help with the help of react.createElement fn
const ValueWithoutkey = React.createElement(
 
  'a', //{I} any tag name can be written here
 
 {   // {II} this is object which contains attributes like href,target,height,width,src etc
      href: 'https://google.com',
      target: '_blank'
  },

 'click me to visit google'  // {III} this is text that is to be written inside that tag 
// {IV} 4th part is empty here , fourth part is props value
)

const DirectlyHTMLCode = (<a href='https://google.com' target='_blank'> click here</a>)

ReactDOM.createRoot(document.getElementById('root')).render(
//  <reactElement></reactElement>  //--- no output , error in console
//  <ReactElement></ReactElement>  //--- no output , error in console

// DirectlyHTMLCode  //----> working correctly

ValueWithoutkey //----> working correctly
)
