import React from "react";
import { ContainerSpanError } from "./styles";

interface ISpanErrorProp {
  error?: any;
}
const SpanError: React.FC<ISpanErrorProp> = ({ error }) => {
  return error ? (
    <ContainerSpanError className="form-input-hint">{error}</ContainerSpanError>
  ) : (
    <></>
  );
};

export default SpanError;
