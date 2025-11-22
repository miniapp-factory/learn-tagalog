"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Card = {
  front: string;
  back: string;
};

const cards: Card[] = [
  { front: "👋", back: "Kamusta" },
  { front: "Good morning", back: "Magandang umaga" },
  { front: "Salamat", back: "Thank you" },
  { front: "Saan", back: "Where" },
  { front: "Bakit", back: "Why" },
];

export default function QuizCard() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  const [lives, setLives] = useState(3);
  const [correct, setCorrect] = useState(false);

  const current = cards[index];

  const handleSubmit = () => {
    const isCorrect = answer.trim().toLowerCase() === current.back.toLowerCase();
    setCorrect(isCorrect);
    setFlipped(true);
    if (isCorrect) {
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cards.length);
        setFlipped(false);
        setAnswer("");
        setCorrect(false);
      }, 1000);
    } else {
      setLives((prev) => Math.max(prev - 1, 0));
      setTimeout(() => {
        setFlipped(false);
        setAnswer("");
      }, 1000);
    }
  };

  const cardClass = `relative w-48 h-48 rounded-xl shadow-lg flex items-center justify-center cursor-pointer transition-transform duration-700 ${
    flipped ? "rotate-y-180" : ""
  } ${correct ? "border-4 border-green-500" : ""}`;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className={cardClass} onClick={() => setFlipped((prev) => !prev)}>
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-5xl font-bold">
          {current.front}
        </div>
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-5xl font-bold rotate-y-180">
          {current.back}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Your answer"
          className="border rounded px-2 py-1"
        />
        <Button onClick={handleSubmit}>Check</Button>
      </div>
      <div>Lives: {lives}</div>
    </div>
  );
}
