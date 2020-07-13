import React from 'react'
import { generateRandomHashes } from 'util/generateRandomHashes'

type HashDigest = {
  hash: string
  shortHash: string
}

const NUM_RANDOM_EMAILS = 1000

export function useHashGenerator() {
  const domain = 'hashmail.cc'

  const [hashes, setHashes] = React.useState<HashDigest[]>([])

  React.useEffect(() => {
    async function generateHashes() {
      const randomHashes = await generateRandomHashes({
        count: NUM_RANDOM_EMAILS,
      })

      setHashes(
        randomHashes.map((hash) => {
          const shortHash = hash.slice(0, 6)

          return {
            hash,
            shortHash,
          }
        }),
      )
    }

    generateHashes()
  }, [])

  return {
    domain,
    hashes,
  }
}
