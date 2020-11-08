import React from 'react'
import TextLoop from 'react-text-loop'
import { Box, Button, Center, HStack, IconButton, Text } from '@chakra-ui/core'
import { CheckIcon, CopyIcon } from '@chakra-ui/icons'
import GitHubIcon from 'components/Icons/GitHubIcon'
import { useElementCopy } from 'hooks/useElementCopy'
import { useHashGenerator } from 'hooks/useHashGenerator'

const SPIN_DURATION_MS = 1000

export default function App() {
  const { domain, hashes } = useHashGenerator()
  const { elementRef, hasCopied, handleCopyClick } = useElementCopy()

  const [loopInterval, setLoopInterval] = React.useState(0)
  const options = React.useMemo(() => hashes.map((h) => h.shortHash), [hashes])

  // Triggers react-text-loop to "spin" for a set time, then stops.
  const handleGenerateClick = () => {
    setTimeout(() => {
      setLoopInterval(0)
    }, SPIN_DURATION_MS)

    setLoopInterval(50)
  }

  if (options.length === 0) {
    return null
  }

  return (
    <>
      <Center h="100vh" flexDir="column">
        <HStack
          ref={elementRef}
          as="div"
          fontFamily="monospace"
          fontSize={['3xl', '5xl', '6xl']}
          fontWeight="600"
        >
          <TextLoop interval={loopInterval} children={options} />
          <Text as="div">@{domain}</Text>
        </HStack>

        <HStack my="8">
          <Button
            isDisabled={!!loopInterval}
            mr="2"
            colorScheme="teal"
            onClick={handleGenerateClick}
          >
            Generate
          </Button>
          <IconButton
            isDisabled={!!loopInterval}
            ml="2"
            colorScheme="teal"
            variant="outline"
            icon={hasCopied ? <CheckIcon /> : <CopyIcon />}
            onClick={handleCopyClick}
            aria-label="Copy to clipboard"
            title="Copy to clipboard"
          />
        </HStack>
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
