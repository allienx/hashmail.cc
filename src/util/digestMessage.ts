// Generates a SHA-256 hash digest as a hex string.
//
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest

export enum DigestAlgorithm {
  sha1 = 'SHA-1',
  sha256 = 'SHA-256',
  sha384 = 'SHA-384',
  sha512 = 'SHA-512',
}

export async function digestMessage(
  message: string,
  algorithm: DigestAlgorithm = DigestAlgorithm.sha256,
): Promise<string> {
  const msgUint8 = new TextEncoder().encode(message) // encode as (utf-8) Uint8Array

  const hashBuffer = await crypto.subtle.digest(algorithm, msgUint8) // hash the message

  const hashArray = Array.from(new Uint8Array(hashBuffer)) // convert buffer to byte array
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('') // convert bytes to hex string

  return hashHex
}
