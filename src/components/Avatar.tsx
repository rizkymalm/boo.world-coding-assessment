import React from "react";

interface AvatarProps {
  initial: string;
}

const Avatar = ({ initial }: AvatarProps) => {
  return (
    <div className="w-10 h-10 rounded-full bg-accent text-bgDarkPrimary items-center justify-center flex font-semibold cursor-pointer">
      {initial}
    </div>
  );
};

export default Avatar;
