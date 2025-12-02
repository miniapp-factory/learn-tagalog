'use client';

import { useState } from "react";

export default function Lesson() {
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState<boolean | null>(null);

  const handleSubmit = () => {
    const isCorrect = answer.trim().toLowerCase() === "kamusta";
    setCorrect(isCorrect);
    if (isCorrect) {
      const stored = localStorage.getItem("streak");
      const newStreak = stored ? parseInt(stored) + 1 : 1;
      localStorage.setItem("streak", newStreak.toString());
    }
  };

  return (
    <div className="bg-white/10 rounded-lg p-6 w-full max-w-md text-white">
      <h2 className="text-xl font-semibold mb-4">Translate “Hello” to Tagalog</h2>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="bg-white/20 rounded p-2 w-full mb-4 text-white placeholder:text-white/70"
        placeholder="Your answer"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 rounded px-4 py-2"
      >
        Submit
      </button>
      {correct !== null && (
        <p className={`mt-4 text-lg ${correct ? "text-green-400" : "text-red-400"}`}>
          {correct ? "Correct!" : "Try again."}
        </p>
      )}
    </div>
  );
}
