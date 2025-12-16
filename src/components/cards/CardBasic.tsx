import React from "react";

interface CardBasicProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string;
}

const CardBasic = ({
  children,
  title,
  className,
  ...props
}: CardBasicProps) => {
  return (
    <div
      className={`relative rounded-2xl border-2 border-none bg-white p-4 shadow-custom-gray ${
        className ?? ""
      }`}
      {...props}
    >
      {title && <h3 className="mb-3 text-xl font-semibold ">{title}</h3>}
      {children}
    </div>
  );
};

export default CardBasic;
