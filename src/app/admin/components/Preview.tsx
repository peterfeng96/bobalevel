"use client";
//Module imports
import { useState } from "react";
import {
  Alert,
  Box,
  Container,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import Fade from "@mui/material/Fade";
import Image from "next/image";
//Import Context and Components
import { useUserContext } from "../context/UserContextProvider";
import SettingsSection from "@/app/[id]/components/SettingsSection";
import PostsSection from "@/app/[id]/components/PostsSection";

export default function Preview() {
  const [alert, setAlert] = useState<boolean>(false);
  const userData = useUserContext();

  const handleOpen = () => {
    setAlert(true);
  };

  const handleClose = () => {
    setAlert(false);
  };
  return (
    <Box>
      {userData ? (
        <Container
          maxWidth="sm"
          style={{ display: "flex", flexDirection: "column", gap: 40 }}
        >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography variant="h3" align="center">
              https://boba-level.com/{userData.id}
            </Typography>
            <IconButton
              aria-label="copy"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://boba-level.com/${userData.id}`
                );
                handleOpen();
              }}
            >
              <ContentCopy color="primary" />
            </IconButton>
          </Box>
          <SettingsSection settings={userData.settings} />
          <PostsSection posts={userData.posts} />
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              gap: "1vw",
              textDecoration: "none",
            }}
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
          </Box>
          <Snackbar
            open={alert}
            autoHideDuration={1000}
            onClose={handleClose}
            TransitionComponent={Fade}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Copied to clipboard
            </Alert>
          </Snackbar>
        </Container>
      ) : null}
    </Box>
  );
}
