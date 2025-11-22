import { description, title } from "@/lib/metadata";
import { generateMetadata } from "@/lib/farcaster-embed";
import QuizCard from "@/components/quiz-card";

export { generateMetadata };

export default function Home() {
  return (
    <main className="flex flex-col gap-6 place-items-center place-content-center px-4 grow">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <QuizCard />
    </main>
  );
}
