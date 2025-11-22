"use client";

import { useState } from "react";
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

  const current = cards[index];

  const handleFlip = () => setFlipped((prev) => !prev);
  const handleNext = () => {
    setIndex((prev) => (prev + 1) % cards.length);
    setFlipped(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`relative w-48 h-48 rounded-xl shadow-lg flex items-center justify-center cursor-pointer transition-transform duration-700 ${
          flipped ? "rotate-y-180" : ""
        }`}
        onClick={handleFlip}
      >
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-5xl font-bold">
          {current.front}
        </div>
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center text-5xl font-bold rotate-y-180">
          {current.back}
        </div>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}
