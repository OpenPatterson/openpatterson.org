import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Valid email is required' }),
        {
          status: 400,
        },
      )
    }

    const { data, error } = await resend.contacts.create({
      email: email,
      unsubscribed: false,
      audienceId: 'a79e8099-3cfe-4776-945f-1df2ad824daf',
    })
    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    console.timeLog(email, "Signed up")
    return Response.json(data)
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
    })
  }
}
