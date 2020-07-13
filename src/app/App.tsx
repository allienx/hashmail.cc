import React from 'react'
import { Button, Center, HStack, IconButton, Text } from '@chakra-ui/core'
import { CopyIcon } from 'components/CopyIcon'

function App() {
  return (
    <Center h="100vh" flexDir="column">
      <Text fontFamily="monospace" fontSize="6xl" fontWeight="600">
        hashmail.cc
      </Text>
      <HStack my="8">
        <Button mr="2" colorScheme="teal">
          Generate
        </Button>
        <IconButton
          ml="2"
          colorScheme="teal"
          variant="outline"
          icon={<CopyIcon />}
          aria-label="Copy to clipboard"
          title="Copy to clipboard"
        />
      </HStack>
    </Center>
  )
}

export default App
