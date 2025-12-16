import { useState } from "react"
import { Option } from "@/types/question"

export default function OptionCard({ option }: { option: Option }) {
  const [selected, setSelected] = useState(false)

  return (
    <button
      onClick={() => setSelected(true)}
      className={`w-full border rounded-lg p-4 text-left transition
        ${selected ? "border-purple-500 bg-purple-50" : "hover:bg-gray-50"}
      `}
    >
      <div className="flex justify-between">
        <span>{option.text}</span>
        <span className="text-sm text-gray-500">{option.votes}</span>
      </div>
    </button>
  )
}
