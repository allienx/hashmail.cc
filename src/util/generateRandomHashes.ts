import { DigestAlgorithm } from './digestMessage'
import { generateRandomHash } from './generateRandomHash'

type Options = {
  count?: number
  algorithm?: DigestAlgorithm
}

export async function generateRandomHashes(
  options: Options = {},
): Promise<string[]> {
  const { count, algorithm } = {
    count: 1000,
    algorithm: DigestAlgorithm.sha256,
    ...options,
  }

  const hashes: string[] = []

  for (let i = 0; i < count; i++) {
    const hash = await generateRandomHash(algorithm)

    hashes.push(hash)
  }

  return hashes
}
