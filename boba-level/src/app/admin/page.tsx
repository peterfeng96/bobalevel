"use client";
import { useState, useEffect } from "react";
import { Container, Button, Box } from "@mui/material";
import {
  TitleSection,
  LinkSection,
  ReviewSection,
} from "./components/Sections";

import { fakeData } from "@/utils/utils";

export default function Admin() {
  const [orderedView, setOrderedView] = useState<JSX.Element[]>([]);
  const [orderedViewData, setOrderedViewData] = useState<any[]>([]);

  type Sections = {
    [key: string]: (e: any, fetchedData?: any) => void;
  };

  const sections: Sections = {
    Title: (e: any, fetchedData: any) => {
      const uniqueId = new Date().getTime();
      setOrderedView((prev) => [
        <TitleSection
          key={fetchedData ? fetchedData.id : uniqueId}
          id={fetchedData ? fetchedData.id : uniqueId}
          handleClick={handleClick}
          changeData={changeData}
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
      const uniqueId = new Date().getTime();
      setOrderedView((prev) => [
        <LinkSection
          key={fetchedData ? fetchedData.id : uniqueId}
          id={fetchedData ? fetchedData.id : uniqueId}
          handleClick={handleClick}
          changeData={changeData}
          data={
            fetchedData
              ? fetchedData.data
              : {
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
            text: "",
            url: "",
          },
        },
        ...prev,
      ]);
    },
    Review: (e: any, fetchedData: any) => {
      const uniqueId = new Date().getTime();
      setOrderedView((prev) => [
        <ReviewSection
          key={fetchedData ? fetchedData.id : uniqueId}
          id={fetchedData ? fetchedData.id : uniqueId}
          handleClick={handleClick}
          changeData={changeData}
          data={
            fetchedData
              ? fetchedData.data
              : {
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

  const handleClick = (id: number, direction: string) => {
    setOrderedView((prevOrderedView) => {
      const copyOrderedView = [...prevOrderedView];
      const index = copyOrderedView.findIndex((ele) => Number(ele.key) === id);

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
      const index = copyOrderedViewData.findIndex(
        (ele) => Number(ele.id) === id
      );
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

  const changeData = (e: any, id: number, textField: string) => {
    setOrderedViewData((prevOrderedViewData) => {
      const copyOrderedViewData = [...prevOrderedViewData];
      const index = copyOrderedViewData.findIndex(
        (ele) => Number(ele.id) === id
      );
      copyOrderedViewData[index].data[textField] = e.target.value;
      return copyOrderedViewData;
    });
  };

  const update = () => {
    console.log(orderedView);
    console.log(orderedViewData);
    // sections.Review(null, {
    //   id: 1,
    //   section: "Review",
    //   data: { location: "Austin" },
    // });
  };

  // useEffect(() => {
  //   const data = fakeData();
  //   for (let i = data.length - 1; i >= 0; i--) {
  //     sections[data[i].section](null, data[i]);
  //   }
  // }, []);

  return (
    <main>
      <Box
        display="flex"
        flexDirection="column"
        gap="4vh"
        maxWidth="60vw"
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
          <Button variant="contained" onClick={update}>
            Update
          </Button>
        </Container>
        {orderedView}
      </Box>
    </main>
  );
}
