import { nanoid } from 'nanoid'
import { DigestAlgorithm, digestMessage } from './digestMessage'

export function generateRandomHash(
  algorithm: DigestAlgorithm = DigestAlgorithm.sha256,
): Promise<string> {
  const id = nanoid()

  return digestMessage(id, algorithm)
}
