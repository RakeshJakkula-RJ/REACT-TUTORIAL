import { Box, Center, Container } from '@chakra-ui/react';
import React from 'react'
import {  WarningIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { Grid, GridItem } from '@chakra-ui/react'


const App = () => {
  return (
    <>
        {/* <Box>Hello...</Box> */}
      <Center bg='tomato' h='100px' color='white'>
           Rakesh RJ
      </Center>
    <Container maxW="100%" p={2}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore eveniet, repellendus nam accusantium itaque fugit cumque repudiandae, harum placeat fugiat alias provident debitis iste, quidem quas dicta atque aspernatur quasi.
    </Container>
    <WarningTwoIcon w={8} h={8} color="red.500" />

     <Grid templateColumns='repeat(5, 1fr)' gap={6}>
           <GridItem w='100%' h='10' bg='blue.500' />
           <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>

    </>
  )
}

export default App;