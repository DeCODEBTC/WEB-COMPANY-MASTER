import React from 'react'
import { IInputProps } from '../../defaulSettings'
import SpanError from '../../atoms/SpanError'
import ContainerInput from '../../atoms/ContainerInput'

interface ICheckboxProps extends IInputProps {
  label: any
  defaultValue?: boolean
}
const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const { label, name, placeholder, formReferenceData, defaultValue, ...rest } = props
  const { formState, register } = formReferenceData
  const { errors } = formState
  return (
    <ContainerInput hasError={errors[name]?.message}>
      <label className="form-checkbox input-sm" htmlFor={`input-${name}`}>
        <input
          {...register(name)}
          {...rest}
          className="form-input"
          type="Checkbox"
          defaultChecked={defaultValue}
          id={`input-${name}`}
          placeholder={label}
        />
        <i className="form-icon" /> {label}
      </label>
      <SpanError error={errors[name]?.message} />
    </ContainerInput>
  )
}

export default Checkbox
