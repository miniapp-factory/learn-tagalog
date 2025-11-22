"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type Card = {
  front: string;
  back: string;
};

const cards: Card[] = [
  { front: "Good morning", back: "Magandang umaga" },
  { front: "Thank you", back: "Salamat" },
  { front: "Where", back: "Saan" },
  { front: "Why", back: "Bakit" },
];

export default function QuizCard() {
  const [index, setIndex] = useState(0);
  const [showEnglishFront, setShowEnglishFront] = useState(true);
  const [flipped, setFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  const [lives, setLives] = useState(3);
  const [correct, setCorrect] = useState(false);

  const current = cards[index];
  const displayedFront = showEnglishFront ? current.front : current.back;
  const displayedBack = showEnglishFront ? current.back : current.front;

  const handleSubmit = () => {
    const isCorrect = answer.trim().toLowerCase() === displayedBack.toLowerCase();
    setCorrect(isCorrect);
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
      <div className={cardClass} onClick={() => {
        setFlipped(true);
        handleSubmit();
      }}>
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-5xl font-bold">
          {displayedFront}
        </div>
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-5xl font-bold rotate-y-180">
          {displayedBack}
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
      <Button variant="outline" onClick={() => setShowEnglishFront((prev) => !prev)}>Switch Language</Button>
    </div>
  );
}
