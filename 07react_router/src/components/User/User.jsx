import React from 'react'
import { useParams } from 'react-router-dom'


export default function User() {
  
 // const userid = useParams()  //if we write userid instead of {userid} , then error occur -Unexpected Application Error!  Objects are not valid as a React child (found: object with keys {userid}). If you meant to render a collection of children, use an array instead.
  
  const {userid} = useParams() //NO error , when {userid} is written , since userid is not a normal varibale

    return (
    <div className='bg-gray-900 text-white py-32' >User : {userid}</div>  //here , it is important to use the same variable name {userid} bcoz in main.jsx , we used userid in <Route path='user/:userid' element={<User/>}></Route> & to use userid variable in user.jsx , we need to import useParams
// whatever we write in URL after - http://localhost:5173/user/ , the same value of userid will be the value of userid wriiten in User.jsx 
//eg -- http://localhost:5173/user/hbjb , then when <outlet/> takes <User/> in its place , body section will show - User:hbjb
//eg/ http://localhost:5173/user/r68768 , then User : r68768 in body section
)
}
