import React from 'react'
import { Spinner, Center } from '@chakra-ui/react'

export default function SpinnerComponent() {
  return (
      <Center w="100vh" h="100vh" m="auto" p="auto">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
  )
}
