import { Icon } from "@iconify/react";
import React from "react";
import { TextField } from "../forms";
import Avatar from "../Avatar";

interface HomeProfileProps {
  toggle?: () => void;
}

const HomeProfile = ({ toggle }: HomeProfileProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 py-2 px-6 z-9999 bg-white">
      <div className="flex gap-4 items-center">
        <Icon
          icon={"mdi:hamburger-menu"}
          width="32"
          height="32"
          className="cursor-pointer"
          onClick={toggle}
        />
        <p className="font-budokan text-3xl font-bold hover:scale-105 active:scale-99 duration-500">
          Boo
        </p>
        <div className="flex-6">
          <TextField
            placeholder="Search..."
            contentBefore={<Icon icon="mdi:magnify" width="20" height="20" />}
            fullWidth
          />
        </div>
        <div className="flex flex-2 gap-4 items-center justify-end">
          <Icon
            icon={"mingcute:notification-line"}
            width="36"
            height="36"
            className="cursor-pointer hover:scale-105 transition-all duration-300"
          />
          <div className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
            <Icon
              icon={"fluent-emoji-flat:coin"}
              width="36"
              height="36"
              className="cursor-pointer"
            />
            <h2 className="text-lg font-semibold">1200</h2>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Avatar initial="RM" />
            <h2 className="text-lg font-semibold">Rizki Malem</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
