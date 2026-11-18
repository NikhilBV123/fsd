import React from "react";
import UserContext from "./UserContext";

function UserProvider ({
    children
}){
    const user ={
        name:"Nikhil",
        role:"Student"
    };
    return(
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    );
}

export default UserProvider;