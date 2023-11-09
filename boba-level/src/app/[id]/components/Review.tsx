//Module imports
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
//Import Context and Components
import { ReviewDataType } from "@/types";

type ReviewProps = {
  data: ReviewDataType;
};

export default function Review({
  data: {
    imageUrl,
    store,
    location,
    drink,
    toppings,
    sugar,
    ice,
    rating,
    review,
  },
}: ReviewProps) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 550,
        border: "2px solid #BF6336",
      }}
    >
      <Box className="review" sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ height: 200, width: 200 }}
          src={imageUrl}
          title="Review Image"
        ></CardMedia>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={8} sm={8}>
              <Typography variant="h2">{store}</Typography>
              <Typography variant="h4">{location}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="h2" align="right">
                {rating}/10
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}></Grid>
            <Grid item xs={12} sm={12}></Grid>

            <Grid item xs={4} sm={4}>
              <Typography variant="h4">Drink:</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography variant="h4">{drink}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="h4">Toppings:</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography variant="h4">{toppings}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="h4">Sugar Level:</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography variant="h4">{sugar}</Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="h4">Ice Level:</Typography>
            </Grid>
            <Grid item xs={8} sm={8}>
              <Typography variant="h4">{ice}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Box>
      <CardContent>
        <Typography variant="h4">{review}</Typography>
      </CardContent>
    </Card>
  );
}
