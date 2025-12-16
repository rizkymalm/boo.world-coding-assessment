import { Icon } from "@iconify/react";

const TexttAreaField = () => {
  return (
    <div className="w-full shadow-custom-gray rounded-2xl bg-white focus-within:shadow-custom-light transition-shadow duration-300">
      <textarea
        className="w-full rounded-lg p-4 text-text-dark- primary focus:border-accent focus:outline-none no-scrollbar"
        rows={2}
        placeholder="Comment"
      ></textarea>
      <div className="flex mt-2 gap-2 px-4 relative">
        <button type="button" className="p-2 rounded-lg cursor-pointer">
          <Icon icon="stash:image-open-light" width={28} height={28} />
        </button>
        <button type="button" className="p-2 rounded-lg cursor-pointer">
          <Icon icon="hugeicons:gif-02" width={26} height={26} />
        </button>
        <button
          type="button"
          className="p-2 rounded-lg cursor-pointer absolute right-4"
        >
          <Icon
            icon="majesticons:send"
            width={26}
            height={26}
            className="text-accent"
          />
        </button>
      </div>
    </div>
  );
};

export default TexttAreaField;
