import React from "react";

interface ILabelProps {
  label: string;
}
const Label: React.FC<ILabelProps> = ({ label }) => {
  return <label className="form-label">{label}</label>;
};

export default Label;
