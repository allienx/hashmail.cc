import React from 'react'
import { Button, HStack, IconButton, Text } from '@chakra-ui/core'
import TextLoop from 'react-text-loop'
import { CheckIcon, CopyIcon } from '@chakra-ui/icons'
import {
  FontFamilies,
  TEXT_LOOP_INTERVAL_MS,
  TEXT_SPIN_DURATION_MS,
} from 'config/constants'
import { useCopyInnerText } from 'hooks/useCopyInnerText'
import useRandomHashes from './useRandomHashes'

type Props = {
  domain: string
}

function EmailGenerator({ domain }: Props) {
  const { hashes } = useRandomHashes()
  const { ref, hasCopied, handleCopyClick } = useCopyInnerText()

  const [loopInterval, setLoopInterval] = React.useState(0)
  const options = React.useMemo(() => hashes.map((h) => h.shortHash), [hashes])

  // Triggers react-text-loop to "spin" for a set time, then stops.
  const handleGenerateClick = () => {
    setTimeout(() => {
      setLoopInterval(0)
    }, TEXT_SPIN_DURATION_MS)

    setLoopInterval(TEXT_LOOP_INTERVAL_MS)
  }

  if (options.length === 0) {
    return null
  }

  return (
    <div>
      <HStack
        ref={ref}
        as="div"
        fontFamily={FontFamilies.MONOSPACE}
        fontSize={['3xl', '5xl', '6xl']}
        fontWeight={700}
      >
        <TextLoop interval={loopInterval} children={options} />
        <Text as="div">@{domain}</Text>
      </HStack>

      <HStack my="8" justifyContent="center">
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
    </div>
  )
}

export default EmailGenerator
