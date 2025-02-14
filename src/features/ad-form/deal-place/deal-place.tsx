import { useFormContext, Controller } from "react-hook-form";
import { FormBox } from "../../../components/ui/form-box/form-box";
import { Stack } from "../../../components/ui/stack/stack";
import { Form } from "../../../lib/utils/ad-form-scheme";
import { Select } from "../../../components/ui/select/select";

export const DealPlace = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Form>();
  return (
    <Stack gap="24px">
      <Controller
        control={control}
        name="city"
        render={({ field: { value, onChange } }) => {
          return (
            <FormBox label="Город" error={errors?.city?.message}>
              <Select
                options={[
                  {
                    label: "Москва",
                    value: "moscow",
                  },
                  {
                    label: "Санкт-Петерубург",
                    value: "spb",
                  },
                  {
                    label: "Казань",
                    value: "kasan",
                  },
                  {
                    label: "Екатеринбург",
                    value: "ekb",
                  },
                  {
                    label: "Краснодар",
                    value: "krasnodar",
                  },
                ]}
                value={value}
                onChange={onChange}
              />
            </FormBox>
          );
        }}
      />
    </Stack>
  );
};
