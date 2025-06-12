import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Query.module.css'; // Make sure this CSS file exists

export default function QueryPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const builtInQAs = {
    'What does the simulator do?':
      'The simulator replicates traffic signal behavior to demonstrate congestion and timing patterns at intersections.',
    'What is the purpose of TrafficPulse?':
      'TrafficPulse uses AI to help reduce traffic congestion by analyzing and predicting traffic flow.',
    'How does the congestion predictor work?':
      'It takes inputs like location, date, and time, and uses mock data to show expected congestion levels.',
    'Can I book services through TrafficPulse?':
      'Currently, TrafficPulse focuses on traffic simulation and analysis, not service bookings.',
    'Is this data real-time?':
      'No, the app uses mock data to simulate real-time traffic behavior for educational and demonstration purposes.',
  };

  const handleSubmit = async () => {
    setLoading(true);
    setAnswer(null);
    setError(null);

    if (builtInQAs[question]) {
      setAnswer(builtInQAs[question]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>TrafficPulse Q&A</title>
      </Head>
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>❓ Ask About TrafficPulse</div>

        <div className={styles.chatMessages}>
          <input
            type="text"
            className={styles.chatInput}
            placeholder="E.g. What does the simulator do?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <div className={styles.actionButtons}>
            <button
              className={styles.btnSend}
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Getting answer...' : 'Ask'}
            </button>
          </div>

          {error && <p style={{ color: 'red', marginTop: 12 }}>{error}</p>}
          {answer && (
            <div className={`${styles.message} ${styles.botMessage}`}>
              <strong>Answer:</strong><br />
              {answer}
            </div>
          )}

          <h4 style={{ marginTop: '20px' }}>🔹 Example Questions:</h4>
          <div className={styles.actionButtons}>
            {Object.keys(builtInQAs).map((q) => (
              <button
                key={q}
                onClick={() => setQuestion(q)}
                className={styles.btnUpload}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
