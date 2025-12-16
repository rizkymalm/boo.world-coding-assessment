import React, { useState } from "react";
import HomeSidebar from "./HomeSidebar";
import HomeSidebarCollapse from "./HomeSidebarCollapse";
import HomeProfile from "./HomeProfile";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const [toggleSidebar, setToggleSidebar] = useState<string>("collapse");
  const handleSidebarToggle = () => {
    setToggleSidebar((prevState) =>
      prevState === "collapse" ? "expand" : "collapse"
    );
  };
  return (
    <div className="relative flex min-h-screen max-w-full overflow-hidden">
      <HomeProfile toggle={handleSidebarToggle} />
      <div
        className={`border-outset fixed top-15 inset-y-0 left-0 z-999 m-auto transition-all duration-300  ${
          toggleSidebar === "expand" ? "w-65" : "w-20"
        } `}
      >
        {toggleSidebar === "expand" ? <HomeSidebar /> : <HomeSidebarCollapse />}
      </div>
      <div
        className={`relative z-1 ${
          toggleSidebar === "expand" ? "ml-65" : "ml-20"
        } mt-15 min-h-screen flex-1 overflow-auto transition-all duration-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
