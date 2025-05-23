"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In a real application, you would send the form data to your backend
    console.log("Form submitted:", formState)

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  if (isSubmitted) {
    return (
      <div className="border border-primary p-8 text-center bg-card">
        <h3 className="text-xl font-bold mb-4">Thank You!</h3>
        <p className="text-card-foreground">Your message has been received. We'll get back to you soon.</p>
        <Button className="mt-4 bg-primary hover:bg-primary/90" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border border-primary/20 p-6 bg-card">
      <div>
        <label htmlFor="name" className="block mb-2 font-medium text-card-foreground">
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className="w-full font-mono border-input focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-card-foreground">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full font-mono border-input focus:border-primary focus:ring-primary"
        />
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-medium text-card-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full font-mono border-input focus:border-primary focus:ring-primary"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90"
      >
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
