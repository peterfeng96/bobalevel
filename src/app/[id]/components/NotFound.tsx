import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography>You might be lost</Typography>
    </Box>
  );
}
