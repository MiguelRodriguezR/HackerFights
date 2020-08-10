import React, { useState, useEffect } from "react";
import firebase from "../firebase";

const useAuth = () => {
  const [authUser, setAuthUser] = useState("none");

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        setAuthUser(user);
      } else {
        localStorage.removeItem("notVerified");
        user && !user.emailVerified && localStorage.setItem("notVerified", true);
        setAuthUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return authUser;
};

export default useAuth;
