import { Icon } from "@iconify/react";
import { sidebarConfig } from "./SidebarConfig";
import { usePathname } from "next/navigation";

const HomeSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="max-h-screen">
      <nav className="custom-scrollbar flex max-h-[80vh] overflow-y-auto">
        <ul className="w-full list-none p-4">
          {sidebarConfig.map((item) =>
            item.type === "menu" ? (
              <li className="relative my-2" key={item.name}>
                <div
                  className={`flex w-full cursor-pointer gap-1 rounded-md p-3 transition-all duration-500 ${
                    pathname === item.pathMatch && "text-accent scale-105"
                  } hover:scale-105 active:scale-99 dark:text-textDarkPrimary dark:hover:text-textDarkPrimary`}
                  role="button"
                  tabIndex={0}
                >
                  <Icon
                    icon={item.icon ? item.icon : ""}
                    width="24"
                    height="24"
                    className="align-middle"
                  />
                  <div className="relative grow text-base font-medium">
                    {item.name}
                  </div>
                </div>
              </li>
            ) : (
              <li className="my-4 px-2 text-sm font-semibold uppercase tracking-wider text-textDarkSecondary dark:text-textDarkSecondary"key={item.name}>
                {item.name}
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default HomeSidebar;
