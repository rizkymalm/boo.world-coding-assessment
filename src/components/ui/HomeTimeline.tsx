import React, { useEffect, useState } from "react";
import { CardBasic } from "../cards";
import { Icon } from "@iconify/react";
import Chip from "../Chip";
import { Question } from "@/types/question";
import Avatar from "../Avatar";
import ChipColor from "../ChipColor";
import { TimelineItem } from "@/types/timeline";
import { TexttAreaField } from "../forms";

const colors: ("yellow" | "blue" | "red" | "green" | "purple" | "orange")[] = [
  "yellow",
  "blue",
  "red",
];

const textColors: ("black" | "white")[] = ["black", "white", "white"];

const HomeTimeline = () => {
  const [question, setQuestion] = useState<Question>();
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);

  useEffect(() => {
    fetch("/api/question-of-the-day")
      .then((res) => res.json())
      .then(setQuestion);

    fetch("/api/timeline")
      .then((res) => res.json())
      .then(setTimeline);
  }, []);

  console.log(timeline);
  if (!question || !timeline) return null;
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
                {question.likes}
              </div>
              <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:text-accent">
                <Icon
                  icon="solar:ghost-linear"
                  className="text-text-dark- tertiary mr-1 text-text-secondary hover:text-accent"
                  width={24}
                  height={24}
                />
                {question.comments}
              </div>
              <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:text-accent">
                <Icon
                  icon="tabler:share-3"
                  className="text-text-dark- tertiary mr-1 text-text-secondary hover:text-accent"
                  width={24}
                  height={24}
                />
                {question.shares}
              </div>
            </div>
          </div>
          <p className="text-text-secondary text-text-sm">12/16/2025</p>
        </div>
      </CardBasic>

      <TexttAreaField />

      {/* timeline */}
      {timeline.map((item) => (
        <CardBasic className="w-full my-2" key={item.id}>
          <div className="w-full flex gap-6 py-2">
            <Avatar initial="AZ" />
            <div className="w-full">
              <p className="text-text-muted mb-2 text-lg">{item.user.name}</p>
              <div className="flex flex-2 gap-2">
                {item.user.badges.map((badge, index) => (
                  <ChipColor
                    label={badge.label}
                    color={colors[index]}
                    textColor={textColors[index]}
                    key={badge.label}
                  />
                ))}
              </div>
            </div>
            <div className="absolute top-4 right-4 cursor-pointer flex items-center justify-center gap-2">
              <p className="text-text-secondary text-sm">15d</p>
              <Icon
                icon="mdi:dots-vertical"
                className="text-text-secondary"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="w-full flex gap-4 justify-between">
            <div>
              <h2 className="text-md">{item.content}</h2>
              <div className="w-full flex gap-4 mt-4">
                <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:text-accent">
                  <Icon
                    icon="arcticons:i-love-hue-too"
                    className="text-text-dark- tertiary mr-1 text-text-secondary hover:text-accent"
                    width={24}
                    height={24}
                  />
                  {item.stats.likes}
                </div>
                <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:text-accent">
                  <Icon
                    icon="solar:ghost-linear"
                    className="text-text-dark- tertiary mr-1 text-text-secondary hover:text-accent"
                    width={24}
                    height={24}
                  />
                  {item.stats.comments}
                </div>
                <div className="flex cursor-pointer hover:scale-105 transition-all duration-300 hover:text-accent">
                  <Icon
                    icon="tabler:share-3"
                    className="text-text-dark- tertiary mr-1 text-text-secondary hover:text-accent"
                    width={24}
                    height={24}
                  />
                  {item.stats.shares}
                </div>
              </div>
            </div>
          </div>
        </CardBasic>
      ))}

      <CardBasic className="w-full">
        <div className="w-full h-32 flex items-center justify-center">
          <p className="text-text-secondary">More posts coming soon...</p>
        </div>
      </CardBasic>
    </div>
  );
};

export default HomeTimeline;
