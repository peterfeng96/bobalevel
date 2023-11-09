"use client";
//Module imports
import { useState, useEffect, useContext, useRef } from "react";
import { Container, Avatar, TextField, Box, Button } from "@mui/material";
import { Email, Instagram, YouTube, Twitter } from "@mui/icons-material";
import SvgIcon from "@mui/material/SvgIcon";
import TikTok from "../components/TikTok";
//Import Context and Components
import { UserContext } from "../context/UserContextProvider";
import Preview from "../components/Preview";
import { SettingsType } from "@/types";
import { updateUserData, handleImageUpload } from "@/utils/utils";

export default function Settings() {
  const [settings, setSettings] = useState<SettingsType>({
    profilePicture: "",
    displayName: "",
    description: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    twitter: "",
    email: "",
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const userData = useContext(UserContext);

  useEffect(() => {
    setSettings(userData.settings);
  }, [userData]);

  const inputClick = (): void => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleSettingsChange = (setting: string, text: string) => {
    setSettings((prevSettings: any) => {
      const copySettings = { ...prevSettings };
      copySettings[setting] = text;
      return copySettings;
    });
  };

  return (
    <main>
      <Box id="settings" display="flex" flexDirection="column" gap="4vh">
        <Container
          sx={{
            display: "flex",
            gap: "2vw",
            alignItems: "flex-end",
            marginLeft: 0,
          }}
        >
          <Avatar
            sx={{ width: 64, height: 64 }}
            src={settings.profilePicture}
            onClick={inputClick}
          >
            <input
              ref={inputRef}
              hidden
              type="file"
              onChange={async (e) => {
                const imageUrl: string | undefined = await handleImageUpload(
                  e,
                  userData.id
                );
                if (imageUrl) {
                  handleSettingsChange("profilePicture", imageUrl);
                }
              }}
              accept="image/*"
            />
          </Avatar>
          <TextField
            label="Display Name"
            variant="standard"
            fullWidth
            value={settings.displayName}
            onChange={(e) =>
              handleSettingsChange("displayName", e.target.value)
            }
          />
          <Button
            variant="contained"
            onClick={() =>
              updateUserData(userData.id, settings, userData.posts)
            }
          >
            Save Changes
          </Button>
        </Container>
        <Container>
          <TextField
            label="Tell your followers a little about yourself."
            placeholder="Make it fun!"
            variant="outlined"
            fullWidth
            value={settings.description}
            multiline
            rows={3}
            onChange={(e) =>
              handleSettingsChange("description", e.target.value)
            }
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
            value={settings.instagram}
            onChange={(e) => handleSettingsChange("instagram", e.target.value)}
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
            value={settings.tiktok}
            onChange={(e) => handleSettingsChange("tiktok", e.target.value)}
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
            value={settings.youtube}
            onChange={(e) => handleSettingsChange("youtube", e.target.value)}
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
            value={settings.twitter}
            onChange={(e) => handleSettingsChange("twitter", e.target.value)}
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
            value={settings.email}
            onChange={(e) => handleSettingsChange("email", e.target.value)}
          ></TextField>
        </Container>
      </Box>
      <Box id="preview">
        <Preview />
      </Box>
    </main>
  );
}
