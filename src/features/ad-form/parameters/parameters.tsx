import { Controller, useFormContext } from "react-hook-form";
import { Form, State, TypeAd } from "../../../lib/utils/ad-form-scheme";
import { FormBox } from "../../../components/ui/form-box/form-box";
import { Input } from "../../../components/ui/input/input";
import { ButtonGroup } from "../../../components/button-group/button-group";
import { Stack } from "../../../components/ui/stack/stack";
import { Select } from "../../../components/ui/select/select";
import styles from "./parameters.module.css";
export const Parameters = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Form>();
  return (
    <Stack gap={"24px"}>
      <Controller
        control={control}
        name="title"
        render={({ field }) => {
          return (
            <FormBox
              label="Название объявления"
              description="Например, «iPhone 6S Plus серый космос 32 гб» или «Фотоаппарат Canon 700D Kit 18-55»"
              error={errors?.title?.message}
            >
              <Input placeholder="Название *" {...field} />
            </FormBox>
          );
        }}
      />
      <Controller
        control={control}
        name="state"
        render={({ field: { value, onChange } }) => {
          return (
            <FormBox
              label="Состояние"
              error={errors?.state?.message}
              bottomAddon={<a>Какую вещь можно считать новой</a>}
            >
              <ButtonGroup
                values={[
                  {
                    label: "Новое",
                    value: State.New,
                  },
                  {
                    label: "Б/У",
                    value: State.Used,
                  },
                ]}
                value={value}
                onChange={onChange}
              />
            </FormBox>
          );
        }}
      />

      <Controller
        control={control}
        name="type"
        render={({ field: { value, onChange } }) => {
          return (
            <FormBox label="Вид объявления" error={errors?.type?.message}>
              <div className={styles.desktop}>
                <ButtonGroup
                  values={[
                    {
                      label: "Покупал для себя",
                      value: TypeAd.Myself,
                    },
                    {
                      label: "Покупал для перепродажи",
                      value: TypeAd.Resail,
                    },
                  ]}
                  value={value}
                  onChange={onChange}
                />
              </div>
              <div className={styles.mobile}>
                <Select
                  options={[
                    {
                      label: "Покупал для себя",
                      value: TypeAd.Myself,
                    },
                    {
                      label: "Покупал для перепродажи",
                      value: TypeAd.Resail,
                    },
                  ]}
                  value={value}
                  onChange={onChange}
                />
              </div>
            </FormBox>
          );
        }}
      />
    </Stack>
  );
};
