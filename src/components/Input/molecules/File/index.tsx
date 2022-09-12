import React from "react";
import { IInputProps } from "../../defaulSettings";
import SpanError from "../../atoms/SpanError";
import Label from "../../atoms/Label";
import ContainerInput from "../../atoms/ContainerInput";
import { ContainerFile } from "./styles";
import { FieldValues } from "react-hook-form";

interface IFileProps<T = any> extends IInputProps<T> {}

const File = <T,>(props: IFileProps<T>): React.ReactElement<T> => {
  const { label, name, placeholder, formReferenceData, ...rest } = props;
  const { formState, register } = formReferenceData;
  const { errors } = formState;

  return (
    <ContainerInput hasError={errors[name]?.message}>
      <Label label={label} />
      <ContainerFile htmlFor={`input-${name}`}>
        <div className="button-change-file bg-primary">
          Browse and upload a file
        </div>
        <input
          {...register(name)}
          {...rest}
          type="file"
          id={`input-${name}`}
          placeholder={placeholder || label}
        />
      </ContainerFile>
      <SpanError error={errors[name]?.message} />
    </ContainerInput>
  );
};

export default File;
