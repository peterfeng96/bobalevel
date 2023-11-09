"use client";
import NavBar from "./components/NavBar";
//Import Context and Components
import { UserContextProvider } from "./context/UserContextProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <UserContextProvider>
        <NavBar />
        {children}
      </UserContextProvider>
    </>
  );
}
