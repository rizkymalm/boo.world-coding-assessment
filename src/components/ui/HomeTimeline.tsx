import React, { useEffect, useState } from "react";
import { CardBasic } from "../cards";
import { Icon } from "@iconify/react";
import Chip from "../Chip";
import { Question } from "@/types/question";

const HomeTimeline = () => {
  const [question, setQuestion] = useState<Question>();

  useEffect(() => {
    fetch("/api/question-of-the-day")
      .then((res) => res.json())
      .then(setQuestion);
  }, []);

  if (!question) return null;
  return (
    <div className="flex gap-4 flex-col">
      <div className="flex">
        <button
          type="button"
          className="cursor-pointer shadow-custom-gray p-2 rounded-full bg-white"
        >
          <Icon icon="fluent:ios-arrow-24-filled" width="20" height="20" />
        </button>
        <div className="flex-1 justify-center text-center items-center">
          <div className="w-40 m-auto">
            <Chip label="#questions" />
          </div>
        </div>
      </div>
      <CardBasic title="Question of the Day" className="w-full my-4">
        <div className="w-full flex gap-4 justify-between">
          <div>
            <h2 className="text-xl">{question.question}</h2>
            <div className="w-full flex gap-4 mt-4">
              <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:text-accent">
                <Icon
                  icon="arcticons:i-love-hue-too"
                  className="text-text-dark- tertiary mr-1 text-text-secondary hover:text-accent"
                  width={24}
                  height={24}
                />
                162
              </div>
              <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:text-accent">
                <Icon
                  icon="solar:ghost-linear"
                  className="text-text-dark- tertiary mr-1 text-text-secondary hover:text-accent"
                  width={24}
                  height={24}
                />
                162
              </div>
              <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:text-accent">
                <Icon
                  icon="tabler:share-3"
                  className="text-text-dark- tertiary mr-1 text-text-secondary hover:text-accent"
                  width={24}
                  height={24}
                />
                2
              </div>
            </div>
          </div>
          <p className="text-text-secondary text-text-sm">12/16/2025</p>
        </div>
      </CardBasic>
      <CardBasic title="Question of the Day" className="w-full">

      </CardBasic>
    </div>
  );
};

export default HomeTimeline;
