import React from "react";

interface IContainerInputProps {
  children: React.ReactElement | React.ReactElement[];
  hasError?: any;
}

const ContainerInput: React.FC<IContainerInputProps> = ({
  children,
  hasError,
}) => {
  return (
    <div className={`form-group ${hasError ? "has-error " : ""}`}>
      {children}
    </div>
  );
};


export default ContainerInput;
