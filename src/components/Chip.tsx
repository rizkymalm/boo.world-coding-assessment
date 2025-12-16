interface ChipProps {
  size?: "small" | "medium" | "large";
  label: string;
}

const Chip = ({ size, label }: ChipProps) => {
  return (
    <div
      className={`rounded-full shadow-custom-gray hover:shadow-custom-light py-1 px-4 text-sm font-medium cursor-pointer hover:scale-105 transition-all duration-300 items-center flex justify-center`}
    >
      {label}
    </div>
  );
};

export default Chip;
