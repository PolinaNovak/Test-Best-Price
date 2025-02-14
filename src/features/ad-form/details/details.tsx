import { Controller, useFormContext } from "react-hook-form";
import { Form } from "../../../lib/utils/ad-form-scheme";
import { Textarea } from "../../../components/ui/textarea/textarea";
import { FormBox } from "../../../components/ui/form-box/form-box";
import { Input } from "../../../components/ui/input/input";
import { Photos } from "../photos/photos";
import { Stack } from "../../../components/ui/stack/stack";

export const Details = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Form>();

  return (
    <Stack gap={"24px"}>
      <Controller
        control={control}
        name="description"
        render={({ field }) => {
          return (
            <FormBox
              label="Описание объявления"
              description="Не указывайте в описании телефон и e-mail — для этого есть отдельные поля"
              error={errors?.description?.message}
            >
              <Textarea
                placeholder="Телефон*"
                {...field}
                style={{ height: "160px" }}
              />
            </FormBox>
          );
        }}
      />

      <Photos />

      <Controller
        control={control}
        name="price"
        render={({ field }) => {
          return (
            <FormBox label="Цена" error={errors?.price?.message}>
              <Input placeholder="₽ *" {...field} />
            </FormBox>
          );
        }}
      />

      <Controller
        control={control}
        name="video"
        render={({ field }) => {
          return (
            <FormBox label="Видео" error={errors?.video?.message}>
              <Input placeholder="Ссылка на видео" {...field} />
            </FormBox>
          );
        }}
      />
    </Stack>
  );
};
