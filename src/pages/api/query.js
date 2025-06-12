export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST allowed' });
  }

  const { question } = req.body;

  if (!question) {
    return res.status(400).json({ error: 'Question is required' });
  }

  try {
    const apiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: question }],
        temperature: 0.5,
        max_tokens: 60,
      }),
    });

    const data = await apiRes.json();
    console.log('OpenAI raw response:', data); // <--- See what’s returned

    if (data?.choices?.[0]?.message?.content) {
      res.status(200).json({ answer: data.choices[0].message.content });
    } else {
      res.status(500).json({ error: data.error?.message || 'No response from OpenAI' });
    }
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}
