import React from "react";
import ContainerInput from "../../atoms/ContainerInput";
import Label from "../../atoms/Label";
import SpanError from "../../atoms/SpanError";
import { IInputProps } from "../../defaulSettings";

// import { Container } from './styles';
export interface IOptionsProps {
  name: string;
  value: string;
}

interface ISelectProps<T> extends IInputProps<T> {
  options: IOptionsProps[];
}

const Select = <T,>(props: ISelectProps<T>): React.ReactElement<T> => {
  const { label, name, placeholder, options, formReferenceData, ...rest } =
    props;
  const { formState, register } = formReferenceData;
  const { errors } = formState;

  return (
    <ContainerInput hasError={errors[name]?.message}>
      <Label label={label} />
      <select {...register(name)} {...rest} className="form-select">
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <SpanError error={errors[name]?.message} />
    </ContainerInput>
  );
};

export default Select;
