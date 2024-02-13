import { Alert, AlertIcon, Box, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
const Cards = ({ handleflips, handleScore }) => {
  const array = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e"];

  const [flips, setFlips] = useState(0);


  const [visibleIndexes, setVisibleIndexes] = useState([]);

  const toast = useToast();

  const handelClick = (el) => {
    handleflips();

    // console.log(array[el],array[visibleIndexes[visibleIndexes.length - 1]]);

    if (array[el] == array[visibleIndexes[visibleIndexes.length - 1]]) {
      setVisibleIndexes((prevIndexes) => [...prevIndexes, el]);
      handleScore("inc");
     
      if(visibleIndexes.length == 9) {
       
       console.log("Game finshed");
    }
    } else if (visibleIndexes.length == 0) {
      setVisibleIndexes((prevIndexes) => [...prevIndexes, el]);
    } else if (
      array[visibleIndexes[visibleIndexes.length - 1]] ===
      array[visibleIndexes[visibleIndexes.length - 2]]
    ) {
      setVisibleIndexes((prevIndexes) => [...prevIndexes, el]);
      
    } else {
      setVisibleIndexes((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes.pop();
        return newIndexes;
      });
      handleScore("dec");
    }
    
  };
  console.log(visibleIndexes);

  // I can show the bellow toast if it's not matched

  const handleNotMatched = () => {
    return toast({
      title: "Not Matched.",
      // description: "We've created your account for you.",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <Grid
        w={"50%"}
        gap={5}
        m={"auto"}
        mt={5}
        templateColumns="repeat(5, 1fr)"
      >
        {array.map((el, i) => {
          return (
            <GridItem
              w={8}
              h={8}
              border={"2px solid black"}
              onClick={() => handelClick(i)}
            >
              {visibleIndexes.includes(i) ? el : null}
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default Cards;
