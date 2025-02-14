import { useState } from "react";
import { adFormSchema } from "../utils/ad-form-scheme";
import { z } from "zod";
import { IForm } from "../types/form";

export interface useFormRes {
  formData: IForm;
  changeFormData: (setting: string, value: string) => void;
  validateForm: (event: React.FormEvent) => void;
}
export const useForm = (): useFormRes => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    price: "",
    photos: [],
    video: "",
    city: "",
    phone: "",
  });

  const changeFormData = (setting: string, value: string) => {
    setFormData((prev) => ({ ...prev, [setting]: value }));
  };

  const validateForm = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const parsedData = adFormSchema.parse(formData);
      alert(`Объявление успешно создано и отправлено на модерацию`);
    } catch (error) {
      if (error instanceof z.ZodError) {
        alert("Пожалуйста, исправьте следующие ошибки:");
        error.errors.forEach((err) =>
          alert(`${err.path.join(".")}: ${err.message}`)
        );
      }
    }
  };

  return { formData, changeFormData, validateForm };
};
