import React from "react";

interface ISuccessButtonProps {
  loadSubmit?: boolean;
  title: string;
  type?: "button" | "submit" | "reset";
  onClick: ([key]: any) => any;
  btnSize?: "btn-lg" | "btn-sm";
}
const SuccessButton: React.FC<ISuccessButtonProps> = ({
  loadSubmit,
  onClick,
  title,
  type,
  btnSize,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={
        loadSubmit
          ? `btn btn-success ${btnSize} loading`
          : `btn btn-success ${btnSize}`
      }
      type={type}
      {...rest}>
      {title}
    </button>
  );
};

export default SuccessButton;
