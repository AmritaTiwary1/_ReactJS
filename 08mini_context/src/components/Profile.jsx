import React,{useContext} from "react";
import UserContext from "../context/UserContext";

export default function Profile() {
    const {user} = useContext(UserContext)

   if (!user) return <div style={{backgroundColor:"red",color:"black"}} >Please Login</div>

   return <div style={{backgroundColor:"green"}} >Welcome {user.username} </div>

}
