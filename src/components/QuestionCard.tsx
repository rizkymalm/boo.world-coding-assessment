import { Question } from "@/types/question"
import OptionCard from "./OptionCard"

export default function QuestionCard({ question }: { question: Question }) {
  return (
    <div className="max-w-xl w-full bg-white rounded-xl shadow p-6 space-y-4">
      <h1 className="text-xl font-bold">{question.title}</h1>
      <p className="text-gray-600">{question.description}</p>

      <div className="space-y-3">
        {question.options.map(opt => (
          <OptionCard key={opt.id} option={opt} />
        ))}
      </div>
    </div>
  )
}
