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
    if (!question.trim()) return
    setLoading(true)
    setAnswer(null)
    setError(null)

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
      maxWidth: 500,
      margin: '40px auto',
      borderRadius: 20,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
      backgroundColor: '#f5f7fa',
      display: 'flex',
      flexDirection: 'column',
      height: '90vh',
    },
    header: {
      backgroundColor: '#7b4df1',
      color: 'white',
      padding: '20px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    chatWindow: {
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    bubbleBot: {
      backgroundColor: '#e5e5ea',
      padding: '12px 16px',
      borderRadius: '16px',
      maxWidth: '80%',
      alignSelf: 'flex-start',
    },
    bubbleUser: {
      backgroundColor: '#7b4df1',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '16px',
      maxWidth: '80%',
      alignSelf: 'flex-end',
    },
    inputSection: {
      display: 'flex',
      padding: '16px',
      borderTop: '1px solid #ccc',
    },
    input: {
      flex: 1,
      padding: '10px',
      borderRadius: 20,
      border: '1px solid #ccc',
      fontSize: 16,
      marginRight: 10,
    },
    button: {
      backgroundColor: '#7b4df1',
      color: 'white',
      border: 'none',
      borderRadius: 20,
      padding: '10px 16px',
      cursor: 'pointer',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>My AI Chatbot</div>

      <div style={styles.chatWindow}>
        <div style={styles.bubbleBot}>
          Hello! Welcome to the AI Chat. How can I help you today?
        </div>

        {question && (
          <div style={styles.bubbleUser}>{question}</div>
        )}

        {answer && (
          <div style={styles.bubbleBot}>{answer}</div>
        )}

        {error && (
          <div style={{ ...styles.bubbleBot, color: 'red' }}>{error}</div>
        )}
      </div>

      <div style={styles.inputSection}>
        <input
          type="text"
          style={styles.input}
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button style={styles.button} onClick={handleSubmit} disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  )
}
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
    if (!question.trim()) return
    setLoading(true)
    setAnswer(null)
    setError(null)

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
      maxWidth: 500,
      margin: '40px auto',
      borderRadius: 20,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      fontFamily: 'sans-serif',
      backgroundColor: '#f5f7fa',
      display: 'flex',
      flexDirection: 'column',
      height: '90vh',
    },
    header: {
      backgroundColor: '#7b4df1',
      color: 'white',
      padding: '20px',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    chatWindow: {
      flex: 1,
      padding: '20px',
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    bubbleBot: {
      backgroundColor: '#e5e5ea',
      padding: '12px 16px',
      borderRadius: '16px',
      maxWidth: '80%',
      alignSelf: 'flex-start',
    },
    bubbleUser: {
      backgroundColor: '#7b4df1',
      color: 'white',
      padding: '12px 16px',
      borderRadius: '16px',
      maxWidth: '80%',
      alignSelf: 'flex-end',
    },
    inputSection: {
      display: 'flex',
      padding: '16px',
      borderTop: '1px solid #ccc',
    },
    input: {
      flex: 1,
      padding: '10px',
      borderRadius: 20,
      border: '1px solid #ccc',
      fontSize: 16,
      marginRight: 10,
    },
    button: {
      backgroundColor: '#7b4df1',
      color: 'white',
      border: 'none',
      borderRadius: 20,
      padding: '10px 16px',
      cursor: 'pointer',
    },
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>My AI Chatbot</div>

      <div style={styles.chatWindow}>
        <div style={styles.bubbleBot}>
          Hello! Welcome to the AI Chat. How can I help you today?
        </div>

        {question && (
          <div style={styles.bubbleUser}>{question}</div>
        )}

        {answer && (
          <div style={styles.bubbleBot}>{answer}</div>
        )}

        {error && (
          <div style={{ ...styles.bubbleBot, color: 'red' }}>{error}</div>
        )}
      </div>

      <div style={styles.inputSection}>
        <input
          type="text"
          style={styles.input}
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button style={styles.button} onClick={handleSubmit} disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </div>
    </div>
  )
}
