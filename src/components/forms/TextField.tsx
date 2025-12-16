import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  contentBefore?: any;
  contentAfter?: any;
  fullWidth?: boolean;
  error?: boolean;
  helperText?: any;
  align?: "right" | "left" | "center";
}

const TextField = ({
  contentBefore,
  contentAfter,
  fullWidth,
  error,
  helperText,
  align,
  ...props
}: Props) => {
  return (
    <div className={`${fullWidth && "w-full"} my-2`}>
      <span
        className={`inline-flex w-full gap-1 rounded-full border px-2 ${
          error ? "border-error" : "border-transparent"
        } transition-all focus-within:border-b-2 focus-visible:outline-none shadow-custom-gray active:shadow-custom-light`}
      >
        {contentBefore && (
          <span className="m-auto box-border">{contentBefore}</span>
        )}
        <input
          type="text"
          placeholder="Username"
          className={`${
            align === "right"
              ? "text-right"
              : align === "left"
              ? "text-left"
              : align === "center"
              ? "text-center"
              : "text-left"
          } w-full rounded border border-none py-2 focus-visible:outline-none `}
          {...props}
        />
        {contentAfter && (
          <span className="m-auto box-border">{contentAfter}</span>
        )}
      </span>
      {error && (
        <div className="text-left text-text-xs font-medium text-error">
          {helperText}
        </div>
      )}
    </div>
  );
};

export default TextField;
