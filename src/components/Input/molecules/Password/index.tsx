import React, { useState } from "react";
import { IInputProps } from "../../defaulSettings";
import SpanError from "../../atoms/SpanError";
import ContainerInput from "../../atoms/ContainerInput";

interface IPasswordProps<T> extends IInputProps<T> {}
type TTypesOfField = "password" | "string";

const Password = <T,>(props: IPasswordProps<T>): React.ReactElement<T> => {
  const [type] = useState<TTypesOfField>("password");
  const { label, name, placeholder, formReferenceData, ...rest } = props;
  const { formState, register } = formReferenceData;
  const { errors } = formState;

  return (
    <ContainerInput hasError={errors[name]?.message}>
      <label className="form-label" htmlFor={`input-${name}`}>
        {label}
      </label>
      <input
        {...register(name)}
        {...rest}
        className="form-input"
        type={type}
        id={`input-${name}`}
        placeholder={placeholder || label}
      />
      <SpanError error={errors[name]?.message} />
    </ContainerInput>
  );
};

export default Password;
