import { Icon } from "@iconify/react";
import { sidebarConfig } from "./SidebarConfig";

const HomeSidebarCollapse = () => {
  return (
    <div>
      <div className="flex">
        <ul className="w-full list-none p-4">
          {sidebarConfig.map(
            (item) =>
              item.type === "menu" && (
                <li
                  className={`relative my-2 flex cursor-pointer justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent/20 ${
                    location.pathname === item.pathMatch &&
                    "dark:bg-accent-dark"
                  } dark:text-textDarkPrimary dark:hover:text-textDarkPrimary`}
                  key={item.pathMatch}
                >
                  <div className="flex w-full" role="button" tabIndex={0}>
                    <Icon
                      icon={item.icon ? item.icon : ""}
                      width="28"
                      height="28"
                    />
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomeSidebarCollapse;
