import React from 'react'
import copy from 'copy-text-to-clipboard'

const COPY_DURATION_MS = 1250

export function useElementCopy() {
  const elementRef = React.createRef<HTMLDivElement>()
  const [hasCopied, setHasCopied] = React.useState(false)

  const handleCopyClick = () => {
    if (!elementRef.current || hasCopied) {
      return
    }

    const email = elementRef.current.innerText.replace(/\s+/g, '')
    const success = copy(email)

    if (!success) {
      return
    }

    setTimeout(() => {
      setHasCopied(false)
    }, COPY_DURATION_MS)

    setHasCopied(true)
  }

  return {
    elementRef,
    hasCopied,
    handleCopyClick,
  }
}
