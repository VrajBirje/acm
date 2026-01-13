export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    // Validate email
    if (!email || !email.includes("@")) {
      return Response.json({ error: "Valid email is required" }, { status: 400 })
    }

    // In a real app, you would save this to a database or email service
    console.log("Newsletter subscription:", { email })

    // Mock success response
    return Response.json(
      {
        success: true,
        message: "Successfully subscribed to our newsletter!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing newsletter subscription:", error)
    return Response.json({ error: "Failed to subscribe" }, { status: 500 })
  }
}
