import { useEffect, useState } from "react";
import { Question } from "@/types/question";
import QuestionCard from "@/components/QuestionCard";
import HomeLayout from "@/components/layouts/HomeLayout";
import { CardBasic } from "@/components/cards";
import Chip from "@/components/Chip";

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
        <div className="container relative min-h-screen w-full items-center justify-center py-8 px-2">
          <div className="fixed w-75">
            <CardBasic title="Universes" className="w-full">
              <div className="w-full py-4">
                <ul>
                  <li className="flex justify-between items-center">
                    <Chip label="#Music" />
                    <p className="text-text-xs text-textDarkTertiary">
                      26M souls
                    </p>
                  </li>
                </ul>
              </div>
            </CardBasic>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}
