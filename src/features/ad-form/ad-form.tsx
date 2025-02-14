import styles from "./ad-form.module.css";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Form, formSchema } from "../../lib/utils/ad-form-scheme";
import { zodResolver } from "@hookform/resolvers/zod";

import { Section } from "../../components/ui/section/section";
import { Parameters } from "./parameters/parameters";
import { Details } from "./details/details";
import { Stack } from "../../components/ui/stack/stack";
import { Contacts } from "./contacts/contacts";
import { DealPlace } from "./deal-place/deal-place";
import { FormBox } from "../../components/ui/form-box/form-box";

export const AdForm = () => {
  const formMethods = useForm<Form>({
    mode: "onSubmit",

    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      state: null,
      type: null,
      description: "",
      price: "",
      photos: [],
      video: "",
      city: null,
      phone: "",
      connectionType: null,
    },
  });

  const {
    watch,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  console.log(watch());

  const onSubmit: SubmitHandler<Form> = (formValues) => {
    alert("Объявление успешно создано и отправлено на модерацию");
    return formValues;
  };

  return (
    <div className={styles.root}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormProvider {...formMethods}>
          <Stack gap="32px">
            <Section title="Параметры">
              <Parameters />
            </Section>
            <Section title="Подробности">
              <Details />
            </Section>
            <Section title="Место сделки">
              <DealPlace />
            </Section>
            <Section title="Контакты">
              <Contacts />
            </Section>
            <FormBox description="Вы публикуете объявление и данные в нём, чтобы их мог посмотреть кто угодно в интернете. Вы также соглашаетесь с правилами.">
              <div className={styles.submit}>
                <button type="submit" className={styles.first}>
                  Разместить
                </button>
                <button className={styles.second}>Сохранить и выйти</button>
              </div>
            </FormBox>
          </Stack>
        </FormProvider>
      </form>
    </div>
  );
};
