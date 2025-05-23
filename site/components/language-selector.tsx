"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/i18n/context"
import { ChevronDown, Globe } from "lucide-react"

export function LanguageSelector({ isMobile = false }: { isMobile?: boolean }) {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (lang: "en" | "es") => {
    setLanguage(lang)
    setIsOpen(false)
  }

  const languages = {
    en: "English",
    es: "Español",
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center gap-1 ${
          isMobile
            ? "p-2 text-sm"
            : "px-3 py-2 border border-gray-200 rounded-md hover:border-primary transition-colors"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className={isMobile ? "sr-only" : ""}>{languages[language]}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 mt-1 ${
            isMobile ? "right-0" : "left-0"
          } bg-white border border-gray-200 rounded-md shadow-lg py-1 w-32`}
        >
          <button
            onClick={() => selectLanguage("en")}
            className={`block w-full text-left px-4 py-2 text-sm ${
              language === "en" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
            }`}
          >
            English
          </button>
          <button
            onClick={() => selectLanguage("es")}
            className={`block w-full text-left px-4 py-2 text-sm ${
              language === "es" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
            }`}
          >
            Español
          </button>
        </div>
      )}
    </div>
  )
}
