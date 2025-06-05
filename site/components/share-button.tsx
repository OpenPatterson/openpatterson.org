'use client'

import { Share2 } from "lucide-react"
import { useState } from "react"

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleShare}
      className="p-2 hover:bg-primary/10 rounded-full text-primary relative"
      aria-label="Copy link to clipboard"
    >
      <Share2 className="h-4 w-4" />
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
          Copied!
        </span>
      )}
    </button>
  )
} 