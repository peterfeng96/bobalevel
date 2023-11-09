"use client";
//Module imports
import { createContext, useState, useEffect } from "react";
//Import Components
import { DefaultContextType } from "@/types";
import { getAdmin } from "@/utils/utils";

const defaultContext: DefaultContextType = {
  id: "",
  settings: {
    profilePicture: "",
    displayName: "",
    description: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    twitter: "",
    email: "",
  },
  posts: [],
};

export const UserContext = createContext(defaultContext);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState(defaultContext);
  useEffect(() => {
    (async () => {
      const data = await getAdmin();
      setUserData(data);
    })();
  }, []);
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
