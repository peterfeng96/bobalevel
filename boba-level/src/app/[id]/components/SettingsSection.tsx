//Module imports
import TikTok from "@/app/admin/components/TikTok";
import { Email, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Box, Avatar, Typography, Button, SvgIcon, Stack } from "@mui/material";
//Import Context and Components
import { SettingsType } from "@/types";
import { normalizeUrl } from "@/utils/utils";

type SettingsSectionProps = {
  settings: SettingsType;
};

export default function SettingsSection({
  settings: {
    profilePicture,
    displayName,
    description,
    instagram,
    tiktok,
    youtube,
    twitter,
    email,
  },
}: SettingsSectionProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3vh",
      }}
    >
      <Avatar sx={{ width: 200, height: 200 }} src={profilePicture} />
      <Typography variant="h2">{displayName}</Typography>
      <Typography variant="h4">{description}</Typography>
      <Stack direction="row">
        <Button
          href={normalizeUrl(instagram)}
          target="_blank"
          color="secondary"
        >
          <Instagram />
        </Button>
        <Button href={normalizeUrl(youtube)} target="_blank" color="secondary">
          <YouTube />
        </Button>
        <Button href={normalizeUrl(tiktok)} target="_blank" color="secondary">
          <SvgIcon viewBox="0 0 256 256">
            <TikTok />
          </SvgIcon>
        </Button>
        <Button href={normalizeUrl(twitter)} target="_blank" color="secondary">
          <Twitter />
        </Button>
        <Button href={`mailto:${email}`} target="_blank" color="secondary">
          <Email />
        </Button>
      </Stack>
    </Box>
  );
}
