import React from "react";

interface IPrimaryProps {
  loadSubmit?: boolean;
  title: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick: ([key]: any) => any;
  btnSize?: "btn-lg" | "btn-sm";
}
const Primary: React.FC<IPrimaryProps> = ({
  loadSubmit,
  onClick,
  title,
  type,
  btnSize,
  className,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={
        loadSubmit
          ? `btn btn-primary ${btnSize} loading ${className}`
          : `btn btn-primary ${btnSize} ${className}`
      }
      type={type}
      {...rest}>
      {title}
    </button>
  );
};

export default Primary;
