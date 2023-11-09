"use client";
//Module imports
import { useState, useEffect, useContext } from "react";
import { Container, Button, Box, Snackbar, Fade, Alert } from "@mui/material";
//Import Context and Components
import { UserContext } from "./context/UserContextProvider";
import {
  TitleSection,
  LinkSection,
  ReviewSection,
} from "./components/Sections";
import Preview from "./components/Preview";
import { updateUserData } from "@/utils/utils";

export default function Admin() {
  const [updateAlert, setUpdateAlert] = useState<boolean>(false);
  const [orderedView, setOrderedView] = useState<JSX.Element[]>([]);
  const [orderedViewData, setOrderedViewData] = useState<any[]>([]);
  const userData = useContext(UserContext);

  type Sections = {
    [key: string]: (e: any, fetchedData?: any) => void;
  };
  //HashMap with key of section and value of function to set state based on section
  const sections: Sections = {
    Title: (e: any, fetchedData: any) => {
      const uniqueId = new Date().getTime().toString();
      setOrderedView((prev) => [
        <TitleSection
          key={fetchedData ? fetchedData.id : uniqueId}
          id={fetchedData ? fetchedData.id : uniqueId}
          handleClick={handleClick}
          changeData={changeData}
          deletePost={deletePost}
          data={
            fetchedData
              ? fetchedData.data
              : {
                  title: "",
                }
          }
        />,
        ...prev,
      ]);
      setOrderedViewData((prev) => [
        fetchedData ?? {
          id: uniqueId,
          section: "Title",
          data: {
            title: "",
          },
        },
        ...prev,
      ]);
    },
    Link: (e: any, fetchedData: any) => {
      const uniqueId = new Date().getTime().toString();
      setOrderedView((prev) => [
        <LinkSection
          key={fetchedData ? fetchedData.id : uniqueId}
          id={fetchedData ? fetchedData.id : uniqueId}
          handleClick={handleClick}
          changeData={changeData}
          deletePost={deletePost}
          uploadImage={uploadImage}
          data={
            fetchedData
              ? fetchedData.data
              : {
                  imageUrl: "",
                  text: "",
                  url: "",
                }
          }
        />,
        ...prev,
      ]);
      setOrderedViewData((prev) => [
        fetchedData ?? {
          id: uniqueId,
          section: "Link",
          data: {
            imageUrl: "",
            text: "",
            url: "",
          },
        },
        ...prev,
      ]);
    },
    Review: (e: any, fetchedData: any) => {
      const uniqueId = new Date().getTime().toString();
      setOrderedView((prev) => [
        <ReviewSection
          key={fetchedData ? fetchedData.id : uniqueId}
          id={fetchedData ? fetchedData.id : uniqueId}
          handleClick={handleClick}
          changeData={changeData}
          deletePost={deletePost}
          uploadImage={uploadImage}
          data={
            fetchedData
              ? fetchedData.data
              : {
                  imageUrl: "",
                  store: "",
                  location: "",
                  drink: "",
                  toppings: "",
                  sugar: "",
                  ice: "",
                  rating: "",
                  review: "",
                }
          }
        />,
        ...prev,
      ]);
      setOrderedViewData((prev) => [
        fetchedData ?? {
          id: uniqueId,
          section: "Review",
          data: {
            imageUrl: "",
            store: "",
            location: "",
            drink: "",
            toppings: "",
            sugar: "",
            ice: "",
            rating: "",
            review: "",
          },
        },
        ...prev,
      ]);
    },
  };

  //Update Alert
  const handleUpdateOpen = () => {
    setUpdateAlert(true);
  };

  const handleUpdateClose = () => {
    setUpdateAlert(false);
  };

  //Moving sections up or down
  const handleClick = (id: string, direction: string) => {
    setOrderedView((prevOrderedView) => {
      const copyOrderedView = [...prevOrderedView];
      const index = copyOrderedView.findIndex((ele) => ele.key === id);

      if (direction == "up" && index !== 0) {
        [copyOrderedView[index], copyOrderedView[index - 1]] = [
          copyOrderedView[index - 1],
          copyOrderedView[index],
        ];
      }
      if (direction == "down" && index !== copyOrderedView.length - 1) {
        [copyOrderedView[index], copyOrderedView[index + 1]] = [
          copyOrderedView[index + 1],
          copyOrderedView[index],
        ];
      }
      return copyOrderedView;
    });
    setOrderedViewData((prevOrderedViewData) => {
      const copyOrderedViewData = [...prevOrderedViewData];
      const index = copyOrderedViewData.findIndex((ele) => ele.id === id);
      if (direction == "up" && index !== 0) {
        [copyOrderedViewData[index], copyOrderedViewData[index - 1]] = [
          copyOrderedViewData[index - 1],
          copyOrderedViewData[index],
        ];
      }
      if (direction == "down" && index !== copyOrderedViewData.length - 1) {
        [copyOrderedViewData[index], copyOrderedViewData[index + 1]] = [
          copyOrderedViewData[index + 1],
          copyOrderedViewData[index],
        ];
      }
      return copyOrderedViewData;
    });
  };

  //Update info on a post
  const changeData = (e: any, id: string, textField: string) => {
    setOrderedViewData((prevOrderedViewData) => {
      const copyOrderedViewData = [...prevOrderedViewData];
      const index = copyOrderedViewData.findIndex((ele) => ele.id === id);
      copyOrderedViewData[index].data[textField] = e.target.value;
      return copyOrderedViewData;
    });
  };

  //Deleting a post
  const deletePost = (id: string) => {
    setOrderedView((prevOrderedView) => {
      return prevOrderedView.filter((ele) => ele.key !== id);
    });
    setOrderedViewData((prevOrderedViewData) => {
      return prevOrderedViewData.filter((ele) => ele.id !== id);
    });
  };

  //Updating image after upload
  const uploadImage = (id: string, imageUrl: string) => {
    setOrderedViewData((prevOrderedViewData) => {
      const copyOrderedViewData = [...prevOrderedViewData];
      const index = copyOrderedViewData.findIndex((ele) => ele.id === id);
      copyOrderedViewData[index].data.imageUrl = imageUrl;
      return copyOrderedViewData;
    });
  };

  //Triggered when userData changes (when we finish getting the data from a fetch request)
  //OPTION 1
  //Calls on functions to build the page out
  //OPTION 2 CURRENT
  //Set state with info from userData
  useEffect(() => {
    // for (let i = userData.posts.length - 1; i >= 0; i--) {
    //   sections[userData.posts[i].section](null, userData.posts[i]);
    // }
    //
    setOrderedView(
      userData.posts.map((post: any) => {
        if (post.section == "Title")
          return (
            <TitleSection
              key={post.id}
              id={post.id}
              handleClick={handleClick}
              changeData={changeData}
              deletePost={deletePost}
              data={post.data}
            />
          );
        else if (post.section == "Link")
          return (
            <LinkSection
              key={post.id}
              id={post.id}
              handleClick={handleClick}
              changeData={changeData}
              deletePost={deletePost}
              uploadImage={uploadImage}
              data={post.data}
            />
          );
        else
          return (
            <ReviewSection
              key={post.id}
              id={post.id}
              handleClick={handleClick}
              changeData={changeData}
              deletePost={deletePost}
              uploadImage={uploadImage}
              data={post.data}
            />
          );
      })
    );
    setOrderedViewData(userData.posts);
  }, [userData]);

  return (
    <main>
      <Box
        id="admin"
        display="flex"
        flexDirection="column"
        gap="4vh"
        margin="1vw"
      >
        <Container sx={{ display: "flex", justifyContent: "space-around" }}>
          {Object.keys(sections).map((section) => (
            <Button
              key={section}
              variant="contained"
              onClick={sections[section]}
            >
              Add A {section}
            </Button>
          ))}
          <Button
            variant="contained"
            onClick={() => {
              updateUserData(userData.id, userData.settings, orderedViewData);
              handleUpdateOpen();
            }}
          >
            Update
          </Button>
        </Container>
        {orderedView}
      </Box>
      <Preview />
      <Snackbar
        open={updateAlert}
        autoHideDuration={1000}
        onClose={handleUpdateClose}
        TransitionComponent={Fade}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleUpdateClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Updated Page!
        </Alert>
      </Snackbar>
    </main>
  );
}
