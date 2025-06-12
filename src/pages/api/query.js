export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
        max_tokens: 60, // short snippet
      }),
    });

    const data = await response.json();

    if (data.choices) {
      res.status(200).json({ answer: data.choices[0].message.content });
    } else {
      res.status(500).json({ error: "No response from OpenAI" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
