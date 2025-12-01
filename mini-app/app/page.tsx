import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";

export { generateMetadata };

export default function Home() {
  // NEVER write anything here, only use this page to import components
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-orange-500 via-yellow-500 to-red-500 text-white">
      {/* Header with hearts, streak, XP */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-1">
          <span className="text-2xl">❤️❤️❤️❤️❤️</span>
          <span className="text-sm">Streak: 7</span>
        </div>
        <div className="text-sm">XP: 1234</div>
      </div>

      {/* Title and description */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-lg mt-2">{description}</p>
      </div>

      {/* Eagle mascot */}
      <div className="flex justify-center">
        <img src="/logo.png" alt="Philippine eagle mascot" className="w-64 h-64 object-contain" />
      </div>

      {/* Lesson container (placeholder) */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <p className="text-xl">Daily lesson will appear here.</p>
        {/* Add lesson components here */}
      </div>

      {/* Share button */}
      <div className="flex justify-center mt-8">
        <Share text={`${title} - ${url}`} />
      </div>
    </main>
  );
}
