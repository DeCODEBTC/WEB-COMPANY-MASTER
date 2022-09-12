import React from "react";
import Icon from "../../layout/Icon";
import { ContainerButton } from "./styles";

interface IOutlineProps {
  loadSubmit?: boolean;
  title: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  btnSize?: "btn-lg" | "btn-sm";
  startIcon?: string;
  endIcon?: string;
}
const Outline: React.FC<IOutlineProps> = ({
  loadSubmit,
  onClick,
  title,
  type,
  btnSize,
  endIcon,
  startIcon,
  ...rest
}) => {
  return (
    <ContainerButton
      onClick={onClick}
      className={loadSubmit ? `btn ${btnSize} loading` : `btn ${btnSize}`}
      type={type || "button"}
      {...rest}>
      {startIcon && <Icon icon={startIcon} />}
      {title}
      {endIcon && <Icon icon={endIcon} />}
    </ContainerButton>
  );
};

export default Outline;
