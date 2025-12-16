import React, { useEffect, useState } from "react";
import { CardBasic } from "../cards";
import { Icon } from "@iconify/react";
import { Question } from "@/types/question";
import { formatDate } from "@/utils/formatDate";

const RelatedPosts = () => {
  const [question, setQuestion] = useState<Question[]>([]);

  useEffect(() => {
    fetch("/api/question")
      .then((res) => res.json())
      .then(setQuestion);
  }, []);

  if (!question) return null;

  return (
    <div className="w-full">
      <h3 className="mb-3 text-xl font-semibold ">Related Post</h3>
      {question.map((item: Question) => (
        <CardBasic
          title="Question of the Day"
          className="w-full my-6"
          key={item.id}
        >
          <div className="w-full flex gap-4 justify-between">
            <div>
              <h2 className="text-xl">{item.question}</h2>
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
            <p className="text-text-secondary text-text-sm">
              {formatDate(item.date)}
            </p>
          </div>
        </CardBasic>
      ))}
    </div>
  );
};

export default RelatedPosts;
