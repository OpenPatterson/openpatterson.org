"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, ChevronDown } from "lucide-react"

interface LanguageSwitcherProps {
  isMobile?: boolean
}

export function LanguageSwitcher({ isMobile = false }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("English")
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // This is just a placeholder with no actual functionality
  const handleLanguageSelect = (lang: string) => {
    setCurrentLanguage(lang)
    setIsOpen(false)
    console.log(`Selected language: ${lang} (no actual functionality implemented)`)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 ${
          isMobile
            ? "p-2 text-sm"
            : "px-3 py-2 border border-gray-200 rounded-md hover:border-primary transition-colors"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-4 w-4" />
        <span className={isMobile ? "sr-only" : ""}>{currentLanguage}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div
          className={`absolute z-50 mt-1 ${
            isMobile ? "right-0" : "left-0"
          } bg-background border border-input rounded-md shadow-lg py-1 w-32`}
        >
          <button
            onClick={() => handleLanguageSelect("English")}
            className={`block w-full text-left px-4 py-2 text-sm ${
              currentLanguage === "English"
                ? "bg-primary/10 text-primary"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageSelect("Español")}
            className={`block w-full text-left px-4 py-2 text-sm text-foreground ${
              currentLanguage === "Español"
                ? "bg-primary/10 text-primary"
                : "hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            Español
          </button>
        </div>
      )}
    </div>
  )
}
