import React from "react";
import { FieldValues } from "react-hook-form";
import { IInputProps } from "../../defaulSettings";
import SpanError from "../../atoms/SpanError";
import Label from "../../atoms/Label";
import ContainerInput from "../../atoms/ContainerInput";

// type TDetaultData = "semnada" | "comtudo";

// interface IEndereco<T> {
//   nome?: string;
//   numero?: number;
//   cep?: string;
//   data?: T;
// }

// interface IForm<T = TDetaultData> extends IEndereco<T> {
//   id: number;
//   name: string;
// }

// interface IResponseApi {
//   email: string;
//   birthday: Date;
// }

// interface IResponseApi2 {
//   cpf: string;
//   age: number;
// }

// const listApiOutro: IForm[] = [
//   {
//     id: 1,
//     name: "",
//   },
// ];

// const listaApi: IForm<IResponseApi>[] = [
//   {
//     id: 1,
//     name: "asda",
//     data: {
//       birthday: new Date(),
//       email: "teste@gmail.com",
//     },
//   },
// ];
// const listaApi2: IForm<IResponseApi2>[] = [
//   {
//     id: 1,
//     name: "asda",
//     data: {
//       age: 1,
//       cpf: "dasda",
//     },
//   },
// ];

interface ITextProps<T = FieldValues> extends IInputProps<T> {
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  type?: React.HTMLInputTypeAttribute;
}

const Text = <T,>(props: ITextProps<T>): React.ReactElement<T> => {
  const {
    label,
    name,
    type = "text",
    placeholder,
    formReferenceData,
    onBlur,

  } = props;

  const { formState, register } = formReferenceData;
  const { errors } = formState;

  return (
    <ContainerInput hasError={errors[name]?.message}>
      <Label label={label} />
      <input
        {...register(name)}
        className="form-input"
        type={type}
        id={`input-${name}`}
        onBlur={onBlur}
        placeholder={placeholder || label}
      />
      <SpanError error={errors[name]?.message} />
    </ContainerInput>
  );
};

export default Text;
