import React from 'react'
import { Box, Center } from '@chakra-ui/core'
import GitHubIcon from 'components/Icons/GitHubIcon'
import EmailGenerator from 'components/EmailGenerator'
import { EMAIL_DOMAIN } from 'config/constants'

export default function App() {
  return (
    <>
      <Center h="100vh" flexDir="column">
        <EmailGenerator domain={EMAIL_DOMAIN} />
      </Center>

      <Box pos="absolute" bottom="5" left="50%">
        <Box
          as="a"
          d="block"
          href="https://github.com/allienx/hashmail.cc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            boxSize="2em"
            color="#d1d5da"
            _hover={{ color: '#6a737d' }}
          />
        </Box>
      </Box>
    </>
  )
}
