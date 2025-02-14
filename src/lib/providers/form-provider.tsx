import { createContext, useContext } from "react";
import { useForm, useFormRes } from "../hooks/useForm";

const FormContext = createContext<useFormRes | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) throw new Error("Context creation Error");

  return context;
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const { formData, changeFormData, validateForm } = useForm();
  return (
    <FormContext.Provider value={{ formData, changeFormData, validateForm }}>
      {children}
    </FormContext.Provider>
  );
};
