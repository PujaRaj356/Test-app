import { useState } from "react";

export default function Queries() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer("");

    const res = await fetch("/api/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    if (data.answer) setAnswer(data.answer);
    else setAnswer("Error: " + data.error);

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h2>❓ Ask About TrafficPulse</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question..."
        style={{ width: "100%", padding: "10px", fontSize: "16px", marginTop: 12 }}
      />
      <button onClick={handleAsk} style={{ marginTop: 12 }} disabled={loading}>
        {loading ? "Loading..." : "Ask"}
      </button>
      {answer && (
        <div style={{ marginTop: 20, padding: 12, backgroundColor: "#f0f0f0" }}>
          <strong>Answer:</strong> {answer}
        </div>
      )}
    </div>
  );
}
