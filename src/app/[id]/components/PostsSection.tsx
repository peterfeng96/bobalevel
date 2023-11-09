//Module imports
import { Box } from "@mui/material";
//Import Context and Components
import Title from "./Title";
import Link from "./Link";
import Review from "./Review";
import { LinkDataType, PostType, TitleDataType, ReviewDataType } from "@/types";

type PostsSectionProps = {
  posts: PostType[];
};

export default function PostsSection({ posts }: PostsSectionProps) {
  //Creating components based on the type of post
  const listView = posts.map((post: PostType) => {
    switch (post.section) {
      case "Title":
        const titleData = post.data as TitleDataType;
        return <Title key={post.id} data={titleData} />;
      case "Link":
        const linkData = post.data as LinkDataType;
        return <Link key={post.id} data={linkData} />;
      case "Review":
        const reviewData = post.data as ReviewDataType;
        return <Review key={post.id} data={reviewData} />;
    }
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3vh",
      }}
    >
      {listView}
    </Box>
  );
}
