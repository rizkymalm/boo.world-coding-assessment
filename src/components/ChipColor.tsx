interface ChipColorProps {
  label: string;
  color: "yellow" | "blue" | "red" | "green" | "purple" | "orange";
  textColor: "black" | "white";
}

const ChipColor = ({ label, color, textColor }: ChipColorProps) => {
  const colorMap: { [key: string]: string } = {
    yellow: "bg-[#FFEB3B]",
    blue: "bg-[#2196F3]",
    red: "bg-[#F44336]",
    green: "bg-[#4CAF50]",
    purple: "bg-[#9C27B0]",
    orange: "bg-[#FF9800]",
  };
  return (
    <div
      className={`rounded-full py-1 px-4 text-sm font-medium cursor-pointer hover:scale-105 transition-all duration-300 items-center flex justify-center ${
        colorMap[color]
      } ${textColor === "black" ? "text-black" : "text-white"}`}
    >
      {label}
    </div>
  );
};

export default ChipColor;
