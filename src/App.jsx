import React from "react";
import UserProvider from "./UserProvider";
import Profile from "./Profile";

function App(){
  return (
    <UserProvider>
      <h2>
        UserContext Demo
      </h2>
      <Profile />
    </UserProvider>
  );
}

export default App;