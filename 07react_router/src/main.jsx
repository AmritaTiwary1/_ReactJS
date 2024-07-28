import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import GithubHome from './components/Github/GithubHome.jsx'
import GithubAbout from './components/Github/GithubAbout.jsx'

/* //**********************  ONE WAY OF WRITING ROUTER   ************************************

const router = createBrowserRouter([ //createBrowserRouter takes argument as array
  {
    path: '/',  //---- this '/' is saying that when main url(eg. www.github.com) and (NO github.com/about or /contact ..etc) is present, main.jsx render specified element
    element: <Layout/>,
    children: [ 
   
      //On the website , Layout element will render ,now, if someone type github.com/about then layout('s oulet) will decide , on which section "about element" will render
    //  All below stated paths's element will be displayed in place of outlet of layout.jsx , The Outlet component is used to render the next potentially matching child route. <Outlet /> doesn't take any props and can be rendered anywhere within a route's component tree                
    //It takes array & Children of path:'/' means --- github.com/about or github.com/contact , /login..etc
    //Every path should be defined inside createBrowserRouter() , ie.[ <Navbar to="/anyPath"> ], Here path inside "to" attribute have to be defined in this---> ReactProvider props={route} ie. createBrowserRouter() 's children part
    
    {
        path: '',
        element:<Home></Home>       //when url- github.com , it means path:''
      },
      //if we comment out the above object(home page info), then webpage (layout.jsx) will show only header&footer in the web, bcoz the outlet would not be replaced by <home/> 
      //but no error will occur unlike about
      
     
      {
         path:'about',
         element:<About></About>
      },
      //if we comment out the above object(about page info), then webpage (layout.jsx) will show only error-----Unexpected Application Error!404 Not Found
      
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  }
])
// We need to tell about routes(www.google.com , google.com/about , google.com/contact, google.com/login) in main.jsx ,RouterProvider takes props as router
//NOTE : <ReactProvider router={anyNameCanBeWrittenHere} ></RouterProvider>


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>   
   
   </React.StrictMode>, 
)
*/

//Another & common way of routing ------------------ to understand below code, first read all comments & code written above 

const any_Var_name = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>

           <Route path='' element={<Home/>}></Route>
           <Route path='about' element={<About/>}></Route>
           <Route path='contact' element={<Contact/>}></Route>
           <Route path='user/:userid' element={<User/>}></Route>       {/* Here, the things which will be wrtten after user/: is important , bcoz it stores info of every user eg. my github account have diiferent info , other user have different info          */}
           <Route path='github' element={<Github/>}>
                  <Route path='githubhome' element={<GithubHome/>}></Route>
                  <Route path='githubabout' element={<GithubAbout/>}></Route>

           </Route>
</Route>
  )  
   

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={any_Var_name} ></RouterProvider>
  </React.StrictMode>
)



