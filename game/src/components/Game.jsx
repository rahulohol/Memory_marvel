import { Box,Text  } from '@chakra-ui/react'
import React, { useState } from 'react'
import Cards from './Cards'


const Game = () => {

    const [flips, setFlips] = useState(0)
    const handleflips = ()=>{
        setFlips(flips+1)
    }

    const [score, setScore] = useState(0)
   const  handleScore= (type)=>{
          type ==="inc"? setScore(score + 10) : setScore(score - 5)
    }

  return (
    <Box  >
     <Text textAlign={"center"}> Memory Marvel </Text >
     <Box w={"70%"} display={"flex"} justifyContent={"space-evenly"}  m={"auto"} mt={2} >
     <Text textAlign={"center"}> Score: {score}</Text >
     <Text textAlign={"center"}> flips : {flips} </Text >
     <Text textAlign={"center"}> Time : </Text >
   
     </Box>
     <Cards handleflips={handleflips} handleScore={handleScore} />
    </Box>
  )
}

export default Game
