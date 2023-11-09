//Module imports
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
//Import Context and Components
import { LinkDataType } from "@/types";
import { normalizeUrl } from "@/utils/utils";

type LinkProps = {
  data: LinkDataType;
};

export default function Link({ data: { imageUrl, text, url } }: LinkProps) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        maxWidth: 550,
        border: "2px solid #BF6336",
      }}
    >
      <CardActionArea
        href={normalizeUrl(url)}
        target="_blank"
        sx={{ display: "flex", flexGrow: 1 }}
      >
        <CardMedia
          component="img"
          sx={{ height: 100, width: 100 }}
          src={imageUrl}
          title="Link Image"
        ></CardMedia>
        <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
          <Typography variant="h3">{text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
