"use client";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { login } from "@/utils/utils";

export default function Login() {
  return (
    <Box display="flex" height="100vh">
      <Box display="flex" flexDirection="column" flexGrow={1} paddingTop={2}>
        <Box display="flex" alignItems="flex-end">
          <Image src="/boba.png" alt="icon" width={80} height={80} />
          <Typography variant="h1" color="textSecondary">
            Boba-Level
          </Typography>
        </Box>
        <Box>
          Hello
          {/* <Button onClick={login}>XX</Button> */}
        </Box>
      </Box>
      <Box></Box>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia component="img" src="/sample1.png"></CardMedia>
      </Card>
    </Box>
  );
}
