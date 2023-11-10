//PAGE FOR INDIVIDUAL USERS
//Module imports
import { Container, Typography } from "@mui/material";
import { Link } from "@mui/material";
import Image from "next/image";
//Import Context and Components
import NotFound from "./components/NotFound";
import SettingsSection from "./components/SettingsSection";
import PostsSection from "./components/PostsSection";
import { getUserData } from "@/utils/utils";

export default async function Page({ params }: { params: { id: string } }) {
  //Fetching user data from backend
  const userData: any = await getUserData(params.id);

  return (
    <main style={{ margin: "5vh 0" }}>
      {userData ? (
        <Container
          maxWidth="sm"
          style={{ display: "flex", flexDirection: "column", gap: 40 }}
        >
          <SettingsSection settings={userData.settings} />
          <PostsSection posts={userData.posts} />
          <Link
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "1vw",
              textDecoration: "none",
            }}
            href="https://bobalevel.com"
          >
            <Image
              src="/boba.png"
              alt="Boba Icon"
              width={45}
              height={45}
            ></Image>
            <Typography variant="h2" color="textSecondary">
              Boba-Level
            </Typography>
          </Link>
        </Container>
      ) : (
        <NotFound />
      )}
    </main>
  );
}
