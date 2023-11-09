"use client";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { login } from "@/utils/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  return (
    <main
      id="login"
      style={{
        display: "flex",
        height: "100vh",
        // backgroundColor: "#1B2430",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        padding={2}
        gap={6}
      >
        <Box display="flex" alignItems="flex-end">
          <Image src="/boba.png" alt="icon" width={80} height={80} />
          <Typography variant="h1" color="textSecondary">
            BobaLevel
          </Typography>
        </Box>
        <Container>
          <Typography variant="h2">Sign in</Typography>
        </Container>
        <Box>
          <Container
            sx={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}
          >
            <Typography variant="h3" align="right">
              bobalevel.com/
            </Typography>
            <TextField
              label="Username"
              variant="standard"
              fullWidth
              onChange={(e) => setUsername(e.target.value)}
            />
          </Container>
          <Container>
            <TextField
              label="Password"
              variant="standard"
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />
          </Container>
        </Box>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {error.length ? <Typography color="red">{error}</Typography> : null}
          <Button
            fullWidth
            variant="contained"
            onClick={async () => {
              let res = await login(username, password);
              if (res.status == 200) router.push("/admin");
              else {
                const json = await res.json();
                setError(json.error);
              }
            }}
          >
            Sign in
          </Button>
          <Typography component="a" href="/signup">
            Sign Up Here
          </Typography>
        </Container>
      </Box>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia component="img" src="/sample1.png"></CardMedia>
      </Card>
    </main>
  );
}
