import Link from "next/link"
import Image from "next/image"
import { MobileMenu } from "@/components/mobile-menu"

export default function NotFound() {

  return (
    <div className="min-h-screen font-mono flex flex-col">

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-8">Page not found</p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>

    </div>
  )
}
