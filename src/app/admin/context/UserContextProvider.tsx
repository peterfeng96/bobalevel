"use client";
//Module imports
import { createContext, useState, useEffect, Context } from "react";
import { useRouter } from "next/navigation";
//Import Components
import { DefaultContextType, UserDataType } from "@/types";
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

export const UserContext: Context<DefaultContextType> =
  createContext(defaultContext);

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userData, setUserData] = useState(defaultContext);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const res: Response = await getAdmin();
        if (res.status !== 200) router.push("/login");
        else {
          const data = await res.json();
          setUserData(data);
        }
      } catch (e) {
        router.push("/login");
      }
    })();
  }, []);
  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
}
