import { useState } from 'react'

export default function QueryPage() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    setLoading(true)
    setAnswer(null)
    setError(null)

    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      })
      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      setAnswer(data.answer)
    } catch (err) {
      console.error(err)
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  const styles = {
    container: {
      maxWidth: 600,
      margin: '50px auto',
      padding: 24,
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: 6,
      border: '1px solid #ccc',
      fontSize: 16,
      marginBottom: 12,
    },
    button: {
      padding: '10px 20px',
      fontSize: 16,
      backgroundColor: '#0070f3',
      color: 'white',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
    },
    response: {
      marginTop: 20,
      whiteSpace: 'pre-wrap',
    },
  }

  return (
    <div style={styles.container}>
      <h2>❓ Ask About TrafficPulse</h2>
      <input
        style={styles.input}
        type="text"
        placeholder="E.g. What does the simulator do?"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button style={styles.button} onClick={handleSubmit} disabled={loading}>
        {loading ? 'Getting answer...' : 'Ask'}
      </button>

      {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
      {answer && <div style={styles.response}><strong>Answer:</strong><br />{answer}</div>}
    </div>
  )
}