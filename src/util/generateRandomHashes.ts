import { nanoid } from 'nanoid'
import { DigestAlgorithm, digestMessage } from './digestMessage'

type HashId = {
  id: string
  hash: string
}

type Options = {
  count: number
  algorithm?: DigestAlgorithm
}

export async function generateRandomHashes({
  count,
  algorithm = DigestAlgorithm.sha256,
}: Options): Promise<HashId[]> {
  const hashIds: HashId[] = []

  for (let i = 0; i < count; i++) {
    const hashId = await generateRandomHash(algorithm)

    hashIds.push(hashId)
  }

  return hashIds
}

async function generateRandomHash(
  algorithm: DigestAlgorithm = DigestAlgorithm.sha256,
): Promise<HashId> {
  const id = nanoid()
  const hash = await digestMessage(id, algorithm)

  return { id, hash }
}
