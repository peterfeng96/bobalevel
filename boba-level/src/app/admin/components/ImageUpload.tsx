"use client";
import { useRef, useState } from "react";
import { Card, CardMedia, Box } from "@mui/material";
import { AddAPhoto } from "@mui/icons-material";
import { handleImageUpload } from "@/utils/utils";
import Image from "next/image";

export default function ImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>();

  const inputClick = (): void => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <Box>
      <Card sx={{ width: 160, height: 160 }} onClick={inputClick}>
        <CardMedia sx={{ position: "relative", width: 160, height: 160 }}>
          {image ? (
            <Image src={image} alt="Section Image" fill objectFit="contain" />
          ) : (
            <AddAPhoto />
          )}
        </CardMedia>
      </Card>
      <input
        ref={inputRef}
        hidden
        type="file"
        onChange={(e) => setImage(handleImageUpload(e))}
        accept="image/*"
      />
    </Box>
  );
}
