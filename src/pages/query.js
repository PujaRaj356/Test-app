import { useState } from 'react'

export default function QueryPage() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const builtInQAs = {
    'What does the simulator do?': 'The simulator replicates traffic signal behavior to demonstrate congestion and timing patterns at intersections.',
    'What is the purpose of TrafficPulse?': 'TrafficPulse uses AI to help reduce traffic congestion by analyzing and predicting traffic flow.',
    'How does the congestion predictor work?': 'It takes inputs like location, date, and time, and uses mock data to show expected congestion levels.',
    'Can I book services through TrafficPulse?': 'Currently, TrafficPulse focuses on traffic simulation and analysis, not service bookings.',
    'Is this data real-time?': 'No, the app uses mock data to simulate real-time traffic behavior for educational and demonstration purposes.',
  }

  const handleSubmit = async () => {
    setLoading(true)
    setAnswer(null)
    setError(null)

    // Show built-in answer if available
    if (builtInQAs[question]) {
      setAnswer(builtInQAs[question])
      setLoading(false)
      return
    }

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
    exampleBtn: {
      margin: '4px',
      padding: '6px 12px',
      fontSize: 14,
      backgroundColor: '#e0e0e0',
      border: 'none',
      borderRadius: 4,
      cursor: 'pointer',
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

      <h4 style={{ marginTop: 30 }}>🔹 Example Questions:</h4>
      <div>
        {Object.keys(builtInQAs).map((q) => (
          <button
            key={q}
            onClick={() => setQuestion(q)}
            style={styles.exampleBtn}
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  )
}
