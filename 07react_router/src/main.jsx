import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

const router = createBrowserRouter([ //createBrowserRouter takes argument as array
  {
    path: '/',  //---- this '/' is saying that when main url(eg. www.github.com) and (NO github.com/about or /contact ..etc) is present, main.jsx render specified element
    element: <Layout/>,
    children: [   //It also takes array & Children of path:'/' means --- github.com/about or github.com/contact , /login..etc
      {
        path: '',
        element:<Home></Home>  
      },
      {
         path:'about',
         element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>   
    {/* We need to tell main.jsx RouterProvider takes props as router  */}
  </React.StrictMode>,
)
