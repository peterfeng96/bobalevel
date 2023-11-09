"use client";
//Module imports
import { useRef, useState, useContext } from "react";
import Image from "next/image";
import { Card, CardMedia, Box } from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
//Import Context and Components
import { UserContext } from "../context/UserContextProvider";
import { handleImageUpload } from "@/utils/utils";

type ImageUploadProps = {
  id: string;
  imageUrl: string;
  uploadImage: (id: string, imageUrl: string) => void;
};

export default function ImageUpload({
  id,
  imageUrl,
  uploadImage,
}: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>(imageUrl);

  const userId: string = useContext(UserContext).id;

  //On Click for the Card. Starts image upload process.
  const inputClick = (): void => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <Box>
      <Card sx={{ width: 160, height: 160 }} onClick={inputClick}>
        <CardMedia
          component="img"
          sx={{ position: "relative", width: 160, height: 160 }}
          src={imageUrl}
          title="Add a Photo"
        />
      </Card>
      <input
        ref={inputRef}
        hidden
        type="file"
        onChange={async (e) => {
          const imageUrl: string | undefined = await handleImageUpload(
            e,
            userId,
            id
          );
          if (imageUrl) {
            uploadImage(id, imageUrl);
            setImage(imageUrl);
          }
        }}
        accept="image/*"
      />
    </Box>
  );
}
