import React from "react";

interface CardBasicProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string;
}

const CardBasic = ({ children, title, ...props }: CardBasicProps) => {
  return (
    <div
      className={`relative rounded-xl border-2 border-accent/20 bg-white p-4 shadow-custom-light drop-shadow-lg`}
      {...props}
    >
      {title && <h3 className="mb-3 text-xl font-bold ">{title}</h3>}
      {children}
    </div>
  );
};

export default CardBasic;
