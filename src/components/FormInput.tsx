import {ChangeEvent} from "react";
import {useFormContext} from "./useFormContext.ts";

interface FormInputProps {
  type: string;
  name?: string;
  value?: string | number;
  required?: boolean;
  placeHolder?: string;
}

export const FormInput = ({type, name, value, required, placeHolder}: FormInputProps) => {
  const {initialValues, handleChange} = useFormContext();

  if (!value) {
    value = name?.split(".").reduce((obj, key) => obj?.[key], initialValues);
  }
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.name === "age" ? +event.target.value : event.target.value;

    if (handleChange) {
      handleChange(name, value);
    }
  };

  const getLabelValue: { [key: string]: string } = {
    "email": "Email:",
    "age": "Age:",
    "name": "Name:",
    "phone.ext": "Ext:",
    "phone.number": "Number:"
  };
  const defaultLabelName = "Label:";

  return (
    <div className="form-group">
      {name &&
          <label htmlFor={name}>{getLabelValue[name] || defaultLabelName}</label>
      }
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChangeInput}
        required={required}
        placeholder={placeHolder}
      />
    </div>
  );
};
