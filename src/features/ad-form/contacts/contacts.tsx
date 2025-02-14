import { useFormContext, Controller } from "react-hook-form";
import { FormBox } from "../../../components/ui/form-box/form-box";
import { Input } from "../../../components/ui/input/input";
import { Stack } from "../../../components/ui/stack/stack";
import { ConnectionType, Form } from "../../../lib/utils/ad-form-scheme";
import { Select } from "../../../components/ui/select/select";

export const Contacts = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Form>();
  return (
    <Stack gap="24px">
      <Controller
        control={control}
        name="phone"
        render={({ field }) => {
          return (
            <FormBox
              label="Телефон"
              description="Чтобы ваши номера не попали в базы мошенников, мы показываем вместо них подменные, а звонки переводим вам. Эту защиту нельзя отключить."
              error={errors?.phone?.message}
              bottomAddon={<a>Подробнее</a>}
            >
              <Input placeholder="8 ___ ___ - __ - __ *" {...field} />
            </FormBox>
          );
        }}
      />
      <Controller
        control={control}
        name="connectionType"
        render={({ field: { value, onChange } }) => {
          return (
            <FormBox
              label="Способ связи"
              error={errors?.connectionType?.message}
            >
              <Select
                options={[
                  {
                    label: "Звонки и сообщения",
                    value: ConnectionType.All,
                  },
                  {
                    label: "Сообщения",
                    value: ConnectionType.Messages,
                  },
                  {
                    label: "Звонки",
                    value: ConnectionType.Calls,
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
