"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "./button"

export default function CopyButton({
  inviteUrl,
}: {
  inviteUrl: string
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(inviteUrl)

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <Button
      type="button"
      size="icon"
      variant="outline"
      onClick={handleCopy}
      className="relative"
    >
      <Copy
        className={`absolute h-4 w-4 transition-all duration-300 ${
          copied
            ? "scale-75 opacity-0"
            : "scale-100 opacity-100"
        }`}
      />

      <Check
        className={`absolute h-4 w-4 transition-all duration-300 ${
          copied
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0"
        }`}
      />
    </Button>
  )
}