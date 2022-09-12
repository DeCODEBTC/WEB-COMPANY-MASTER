import React from "react";
import { IInputProps } from "../../defaulSettings";
import SpanError from "../../atoms/SpanError";
import Label from "../../atoms/Label";
import ContainerInput from "../../atoms/ContainerInput";

interface ITextAreaProps<T> extends IInputProps<T> {
  type?: React.HTMLInputTypeAttribute;
  rows?: number;
  cols?: number;
  maxLength?: number;
}

const TextArea: React.FC<any> = (props) => {
  const {
    label,
    name,
    placeholder,
    formReferenceData,
    rows,
    cols,
    maxLength,
    ...rest
  } = props;
  const { formState, register } = formReferenceData;
  const { errors } = formState;

  return (
    <ContainerInput hasError={!!errors[name]?.message}>
      <Label label={label} />
      <textarea
        {...register(name)}
        {...rest}
        className="form-input"
        id={`input-${name}`}
        placeholder={placeholder || label}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
      />
      <SpanError error={errors[name]?.message || ""} />
    </ContainerInput>
  );
};

export default TextArea;
