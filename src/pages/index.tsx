import { useEffect, useState } from "react";
import { Question } from "@/types/question";
import QuestionCard from "@/components/QuestionCard";
import HomeLayout from "@/components/layouts/HomeLayout";
import { CardBasic } from "@/components/cards";

export default function Home() {
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    fetch("/api/question")
      .then((res) => res.json())
      .then(setQuestion);
  }, []);

  if (!question) return null;

  return (
    <HomeLayout>
      <div className="container mx-auto min-h-screen w-full max-w-full">
        <div className="container relative min-h-screen w-full items-center justify-center p-4">
          <div className="fixed">
            <CardBasic title="Universes">
              <div className="w-full table">
                  
              </div>
            </CardBasic>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
