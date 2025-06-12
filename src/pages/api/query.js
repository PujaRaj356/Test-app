// pages/api/query.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { question } = req.body

  if (!question) {
    return res.status(400).json({ error: 'No question provided' })
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo', // or 'gpt-4' if your API key has access
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant for a traffic management website called TrafficPulse. Answer user queries about features like simulators, congestion predictors, and smart routing.',
          },
          {
            role: 'user',
            content: question,
          },
        ],
      }),
    })

    const data = await response.json()
    const message = data.choices?.[0]?.message?.content?.trim()

    if (!message) throw new Error('No answer received')

    return res.status(200).json({ answer: message })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Error generating answer' })
  }
}
