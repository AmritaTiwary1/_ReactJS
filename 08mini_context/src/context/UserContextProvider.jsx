import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {    //we can name anything 
 return(
    <>
    {children}
    </>
 )
}

export default UserContextProvider