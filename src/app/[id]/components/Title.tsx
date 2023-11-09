//Module imports
import { Box, Typography } from "@mui/material";
//Import Context and Components
import { TitleDataType } from "@/types";

type TitleProps = {
  data: TitleDataType;
};

export default function Title({ data: { title } }: TitleProps) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h2">{title}</Typography>
    </Box>
  );
}
