"use client";
import NavBar from "./components/NavBar";
import Preview from "./components/Preview";
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
        <Preview />
        {children}
      </UserContextProvider>
    </>
  );
}
