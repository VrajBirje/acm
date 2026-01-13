export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !subject || !message) {
      return Response.json({ error: "All fields are required" }, { status: 400 })
    }

    // In a real app, you would save this to a database or send an email
    console.log("Contact form submission:", { name, email, subject, message })

    // Mock success response
    return Response.json(
      {
        success: true,
        message: "Thank you for contacting us. We'll get back to you soon.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return Response.json({ error: "Failed to process your request" }, { status: 500 })
  }
}
