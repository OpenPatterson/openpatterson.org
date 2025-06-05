"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface BlogSearchProps {
  initialQuery?: string
}

export function BlogSearch({ initialQuery = "" }: BlogSearchProps) {
  const [query, setQuery] = useState(initialQuery)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (query.trim()) {
      startTransition(() => {
        router.push(`/blog/search?q=${encodeURIComponent(query.trim())}`)
      })
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Search</h2>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="font-mono border-input bg-background focus:border-primary focus:ring-primary"
        />
        <Button type="submit" disabled={isPending} className="px-3 bg-primary hover:bg-primary/90">
          <Search className="h-4 w-4" />
          <span className="sr-only">Search</span>
        </Button>
      </form>
    </div>
  )
}
