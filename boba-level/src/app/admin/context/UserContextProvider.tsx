"use client";
import { createContext, useEffect } from "react";

export const UserContext = createContext("User Data");

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //FETCH USER DATA FROM API
  //REPLACE VALUE WITH RETURN USER DATA
  return (
    <UserContext.Provider value="Peter Feng">{children}</UserContext.Provider>
  );
}
