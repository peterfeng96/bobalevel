//ALL THREE SECTIONS: TITLE, LINK, AND REVIEW
"use client";
//Module imports
import { useRef } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  TextField,
  Grid,
  IconButton,
} from "@mui/material";
import {
  KeyboardDoubleArrowUp,
  KeyboardDoubleArrowDown,
  Delete,
} from "@mui/icons-material";
//Import Context and Components
import ImageUpload from "./ImageUpload";
import { TitleDataType, LinkDataType, ReviewDataType } from "@/types";

//PROPS
type TitleSectionProps = {
  id: string;
  handleClick: (id: string, direction: string) => void;
  changeData: (e: any, id: string, textField: string) => void;
  deletePost: (id: string) => void;
  data: TitleDataType;
};
type LinkSectionProps = {
  id: string;
  handleClick: (id: string, direction: string) => void;
  changeData: (e: any, id: string, textField: string) => void;
  deletePost: (id: string) => void;
  uploadImage: (id: string, imageUrl: string) => void;
  data: LinkDataType;
};
type ReviewSectionProps = {
  id: string;
  handleClick: (id: string, direction: string) => void;
  changeData: (e: any, id: string, textField: string) => void;
  deletePost: (id: string) => void;
  uploadImage: (id: string, imageUrl: string) => void;
  data: ReviewDataType;
};

export function TitleSection({
  id,
  handleClick,
  changeData,
  deletePost,
  data,
}: TitleSectionProps) {
  const ref = useRef();
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: 120,
        border: 1,
        borderColor: "secondary.main",
        borderRadius: 2,
        gap: "1vw",
        padding: 2,
      }}
    >
      <ButtonGroup orientation="vertical" variant="text">
        <Button onClick={() => handleClick(id, "up")}>
          <KeyboardDoubleArrowUp />
        </Button>
        <Button onClick={() => handleClick(id, "down")}>
          <KeyboardDoubleArrowDown />
        </Button>
      </ButtonGroup>
      <Box display="flex" flexDirection="column" gap="1vw" flexGrow={1}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h3">Title</Typography>
          <IconButton aria-label="delete" onClick={() => deletePost(id)}>
            <Delete color="primary" />
          </IconButton>
        </Box>
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          label="Title Text"
          defaultValue={data.title}
          onChange={(e) => changeData(e, id, "title")}
        ></TextField>
      </Box>
    </Box>
  );
}
export function LinkSection({
  id,
  handleClick,
  changeData,
  deletePost,
  uploadImage,
  data,
}: LinkSectionProps) {
  const ref = useRef();

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: 240,
        border: 1,
        borderColor: "secondary.main",
        borderRadius: 2,
        gap: "1vw",
        padding: 2,
      }}
    >
      <ButtonGroup orientation="vertical" variant="text">
        <Button onClick={() => handleClick(id, "up")}>
          <KeyboardDoubleArrowUp />
        </Button>
        <Button onClick={() => handleClick(id, "down")}>
          <KeyboardDoubleArrowDown />
        </Button>
      </ButtonGroup>
      <Box display="flex" flexDirection="column" gap="1vw" flexGrow={1}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h3">Link</Typography>
          <IconButton aria-label="delete" onClick={() => deletePost(id)}>
            <Delete color="primary" />
          </IconButton>
        </Box>
        <Box
          display="flex"
          gap="1vw"
          flexGrow={1}
          alignItems="flex-end"
          height="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            height="100%"
          >
            <ImageUpload
              id={id}
              imageUrl={data.imageUrl}
              uploadImage={uploadImage}
            />
          </Box>
          <Grid container spacing={1} height={96}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                size="small"
                label="Link Text"
                defaultValue={data.text}
                onChange={(e) => changeData(e, id, "text")}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                size="small"
                label="Link Url"
                defaultValue={data.url}
                onChange={(e) => changeData(e, id, "url")}
              ></TextField>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
export function ReviewSection({
  id,
  handleClick,
  changeData,
  deletePost,
  uploadImage,
  data,
}: ReviewSectionProps) {
  const ref = useRef();
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: 400,
        border: 1,
        borderColor: "secondary.main",
        borderRadius: 2,
        gap: "1vw",
        padding: 2,
      }}
    >
      <ButtonGroup orientation="vertical" variant="text">
        <Button onClick={() => handleClick(id, "up")}>
          <KeyboardDoubleArrowUp />
        </Button>
        <Button onClick={() => handleClick(id, "down")}>
          <KeyboardDoubleArrowDown />
        </Button>
      </ButtonGroup>

      <Box display="flex" flexDirection="column" gap="1vh">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h3">Review</Typography>
          <IconButton aria-label="delete" onClick={() => deletePost(id)}>
            <Delete color="primary" />
          </IconButton>
        </Box>
        <Box display="flex" gap="1vw">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <ImageUpload
              id={id}
              imageUrl={data.imageUrl}
              uploadImage={uploadImage}
            />
          </Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                size="small"
                label="Boba Store"
                defaultValue={data.store}
                onChange={(e) => changeData(e, id, "store")}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                size="small"
                label="Location"
                defaultValue={data.location}
                onChange={(e) => changeData(e, id, "location")}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                fullWidth
                size="small"
                label="Drink Name"
                defaultValue={data.drink}
                onChange={(e) => changeData(e, id, "drink")}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Toppings"
                defaultValue={data.toppings}
                onChange={(e) => changeData(e, id, "toppings")}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Sugar Level"
                defaultValue={data.sugar}
                onChange={(e) => changeData(e, id, "sugar")}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Ice Level"
                defaultValue={data.ice}
                onChange={(e) => changeData(e, id, "ice")}
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                size="small"
                label="Rating"
                defaultValue={data.rating}
                onChange={(e) => changeData(e, id, "rating")}
              ></TextField>
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={12} sm={12}>
          <TextField
            fullWidth
            size="small"
            multiline
            rows={3}
            label="Review"
            sx={{ marginRight: "24px" }}
            defaultValue={data.review}
            onChange={(e) => changeData(e, id, "review")}
          ></TextField>
        </Grid>
      </Box>
    </Box>
  );
}
