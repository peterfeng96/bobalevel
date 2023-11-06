"use client";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

import { Box, Typography, Avatar, Container } from "@mui/material";

export default function Preview() {
  const user = useContext(UserContext);
  return (
    <Box position="absolute" minHeight="100vh" width="40vw" right={0}>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          gap: "2vw",
          alignItems: "flex-end",
        }}
      >
        <Avatar
          alt="Peter Feng"
          src="/boba.png"
          sx={{ width: 64, height: 64 }}
        />
        <Typography variant="h2">{user}</Typography>
      </Container>
    </Box>
  );
}
