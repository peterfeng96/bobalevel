"use client";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContextProvider";
import SvgIcon from "@mui/material/SvgIcon";
import { Email, Instagram, YouTube, Twitter } from "@mui/icons-material";
import TikTok from "../components/TikTok";
import {
  Container,
  Avatar,
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";

export default function Settings() {
  const [displayName, setDisplayName] = useState("");
  const user = useContext(UserContext);

  return (
    <main>
      <Box display="flex" flexDirection="column" gap="4vh" maxWidth="60vw">
        <Container
          sx={{
            display: "flex",
            gap: "2vw",
            alignItems: "flex-end",
            marginLeft: 0,
          }}
        >
          <Avatar sx={{ width: 64, height: 64 }} />
          <TextField
            id="standard-basic"
            label="Display Name"
            placeholder={displayName}
            variant="standard"
            fullWidth
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <Button variant="contained">Save Changes</Button>
        </Container>
        <Container>
          <TextField
            label="Tell your fans a little about yourself."
            placeholder="Make it fun!"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
          ></TextField>
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "2vw",
            alignItems: "flex-end",
            marginLeft: 0,
          }}
        >
          <Instagram color="secondary" />
          <TextField
            label="Add Your Instagram"
            variant="standard"
            fullWidth
          ></TextField>
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "2vw",
            alignItems: "flex-end",
            marginLeft: 0,
          }}
        >
          <SvgIcon color="secondary" viewBox="0 0 256 256">
            <TikTok />
          </SvgIcon>
          <TextField
            label="Add Your TikTok"
            variant="standard"
            fullWidth
          ></TextField>
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "2vw",
            alignItems: "flex-end",
            marginLeft: 0,
          }}
        >
          <YouTube color="secondary" />
          <TextField
            label="Add Your YouTube"
            variant="standard"
            fullWidth
          ></TextField>
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "2vw",
            alignItems: "flex-end",
            marginLeft: 0,
          }}
        >
          <Twitter color="secondary" />
          <TextField
            label="Add Your Twitter"
            variant="standard"
            fullWidth
          ></TextField>
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "2vw",
            alignItems: "flex-end",
            marginLeft: 0,
          }}
        >
          <Email color="secondary" />
          <TextField
            label="Add Your E-mail Contact"
            variant="standard"
            fullWidth
          ></TextField>
        </Container>
      </Box>
    </main>
  );
}
