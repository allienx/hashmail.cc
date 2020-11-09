import React from 'react'
import { NUM_RANDOM_EMAILS } from 'config/constants'
import { generateRandomHashes } from 'util/generateRandomHashes'

type RandomHash = {
  id: string
  hash: string
  shortHash: string
}

export default function useRandomHashes() {
  const [hashes, setHashes] = React.useState<RandomHash[]>([])

  React.useEffect(() => {
    async function generateHashes() {
      const randomHashes = await generateRandomHashes({
        count: NUM_RANDOM_EMAILS,
      })

      setHashes(
        randomHashes.map((hashId) => {
          const { id, hash } = hashId
          const shortHash = hash.slice(0, 6)

          return { id, hash, shortHash }
        }),
      )
    }

    generateHashes()
  }, [])

  return {
    hashes,
  }
}
