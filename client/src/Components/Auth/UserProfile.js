import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import View from "./View";

export default function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div>

        <div class="card border-success mb-3" style={{backgroundColor: "gray", maxWidth : "18rem" , margin :"10% auto" , alignItems: "center"}}>
          <div class="card-header bg-transparent border-success">{"Welcome back " + user.name}</div>
          <div class="card-body text-success">
             <img class="card" src={user.picture} alt="Card cap" />
          </div>
          
        </div>
        <View />

      </div>
    )
  );
}
