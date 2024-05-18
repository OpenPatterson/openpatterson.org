import { EmailTemplate } from '../../../components/email-template.tsx'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, message, businessType } =
      await request.json()

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
      })
    }

    if (
      (!email || typeof email !== 'string') &&
      (!phone || typeof phone !== 'string')
    ) {
      return new Response(
        JSON.stringify({ error: 'Valid email or phone is required' }),
        { status: 400 },
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'Open Patterson <no-reply@openpatterson.org>',
      to: ['carlos@openpatterson.org'],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({
        name,
        email,
        company,
        phone,
        message,
        businessType,
      }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
