import React from 'react'

//The React Context API is a way for a React app to effectively produce global variables that can be passed around. 
//This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. 
//Context is also touted as an easier, lighter approach to state management using Redux

const UserContext= React.createContext()

export default UserContext;