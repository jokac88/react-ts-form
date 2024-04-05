import {useContext} from "react";
import {FormContext, FormProps} from "./Form.tsx";

export const useFormContext = () => useContext(FormContext) as FormProps;