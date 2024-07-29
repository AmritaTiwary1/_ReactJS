import React, { useEffect } from 'react'
import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import GithubHome from './GithubHome'
import { useState } from 'react'

export default function Github() {

     // WE COMMENT OUT BELOW SECTION BCOZ WE WRITE THESE CODE IN ANOTHER FORMAT BY USING useLoaderData hook , see in end of file
/*      const [data,setData] = useState([])
 useEffect(()=>{     //we used useEffect in github component so that whenever webpage load/(someone click on github navigation link)
  //the code inside useEffect run again & again eg-- when we click on github , code inside useEffect runs.If we click on "about" navigation link , and again click github link , then code inside useEffect will run again


    fetch('https://api.github.com/users/AmritaTiwary1')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setData(data)
    }
  )
  },[])

  */

  const data = useLoaderData()  //since,our jsx is using data variable , so we named this variable as data 
 console.log(data)  //all API INFO IN JSON FORMAT

  return (
    <>
    <div className='bg-gray-300 pb-3.5 pt-3 '>

   {/* In the following code , I created two navlinks which will make our url - http://localhost:5173/github/githubabout  &  http://localhost:5173/github/githubhome
   When we click any of them , I specified in the main.jsx section - when path='githubhome' element will be GithubHome.jsx & same for github about
   Now , Here , I used outlet so that whichever link will be clicked by user {GithubHome / githubabout} , outlet will be replaced by that element.
  Note : It is important to specify these two path/element info inside Github route , only after then , our outlet will see -- There are two children-links & Outlet will then decide which element it will render in its place  */}

    <NavLink to='githubhome' className={({isActive})=>
      `px-9 ${isActive?"bg-green-600":"bg-blue-500 "} mx-10 rounded-md`
    } >  
     GitHub Home
  </NavLink>

  <NavLink to='githubabout' className={({isActive})=>
      `px-9 ${isActive?"bg-green-600":"bg-blue-500 "} mx-10 rounded-md`
    }  >
     GitHub About
  </NavLink>

  <Outlet></Outlet>          {/* Here , I used outlet so that whichever link will be clicked by user {GithubHome / githubabout} , outlet will be replaced by that element.  */}

   {/* Using API call to show the followers of github on webpage */}   
   
   {/* WE COMMENT OUT BELOW CODE BCOZ THIS CODE IS USING THE "DATA" VARIABLE & useEffect HOOKS WHICH WE ALREADY COMMENT OUT IN ABOVE SECTION  */} 
  <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl' >Github Followers : {data.followers}
             <img src={data.avatar_url} alt='avatar' width={200} height={200} />

  </div>




  </div>
 </> 
 )
}

//we can even write following code in another file and then , import that file in main.jsx --> github router -->router --> loader 
export const githubInfoLoader = async ()=>{
const response = await fetch('https://api.github.com/users/AmritaTiwary1')
const data = await response.json()
return data
}

//NOTE :
console.log(githubInfoLoader)   //---->async () => {
  //const response = await fetch("https://api.github.com/users/AmritaTiwary1");
  //const data = await response.json();
  //return data;
//}