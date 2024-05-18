import * as React from 'react'

interface EmailTemplateProps {
  name: string
  email: string
  company: string
  phone: string
  message: string
  businessType: string
}

export const EmailTemplate = ({
  name,
  email,
  company,
  phone,
  message,
  businessType,
}: EmailTemplateProps) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Company:</strong> {company}
    </p>
    <p>
      <strong>Phone:</strong> {phone}
    </p>
    <p>
      <strong>Message:</strong> {message}
    </p>
    <p>
      <strong>Organization Type:</strong> {businessType}
    </p>
  </div>
)
