import { COPY_CLIPBOARD_SUCCESS_FLASH_MS } from 'config/constants'
import copy from 'copy-text-to-clipboard'
import React from 'react'

export function useCopyInnerText() {
  const ref = React.createRef<HTMLElement>()
  const [hasCopied, setHasCopied] = React.useState(false)

  const handleCopyClick = () => {
    if (!ref.current || hasCopied) {
      return
    }

    const text = ref.current.innerText.replace(/\s+/g, '')
    const success = copy(text)

    if (!success) {
      return
    }

    setTimeout(() => {
      setHasCopied(false)
    }, COPY_CLIPBOARD_SUCCESS_FLASH_MS)

    setHasCopied(true)
  }

  return {
    ref,
    hasCopied,
    handleCopyClick,
  }
}
