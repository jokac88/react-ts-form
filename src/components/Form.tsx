import {ReactNode, Dispatch, SetStateAction, createContext, useState, FormEvent} from "react";
import {User} from "../../types.ts";
import '../style.scss';

export interface FormProps {
  initialValues?: User;
  handleChange?: (name?: string, value?: string | number) => void;
  onSubmit: Dispatch<SetStateAction<User | undefined>>;
  children?: ReactNode | undefined;
}

export const FormContext = createContext<FormProps | undefined>({
  onSubmit: () => {
  }
});

export const Form = ({initialValues, onSubmit, children}: FormProps) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name?: string, value?: string | number) => {
    if(name && value !== undefined) {
      setValues((prevValues: any) => {
        if (name.includes('.')) {
          const [parentKey, childKey] = name.split('.');
          return {
            ...prevValues,
            [parentKey]: {
              ...prevValues[parentKey as keyof User['phone']],
              [childKey]: value,
            },
          };
        } else {
          return {
            ...prevValues,
            [name]: value,
          };
        }
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(values);
    alert("Successfully updated user info.");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <FormContext.Provider value={{initialValues: values, onSubmit, handleChange, children}}>
        {children}
      </FormContext.Provider>
    </form>
  );
};
