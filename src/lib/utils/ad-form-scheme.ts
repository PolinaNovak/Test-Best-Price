import { z } from "zod";

export enum State {
  New = "new",
  Used = "used",
}

export enum TypeAd {
  Myself = "myself",
  Resail = "resail",
}

export enum ConnectionType {
  All = "all",
  Messages = "messages",
  Calls = "calls",
}

export const formSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Обязательное поле" })
    .refine(
      (value) => {
        const hasLetters = /[a-zA-Zа-яА-Я]/.test(value);
        const isNotOnlyDigits = !/^\d+$/.test(value);
        const isNotAlphanumeric = !/^[a-zA-Zа-яА-Я\d]+$/.test(value);

        return (
          hasLetters && isNotOnlyDigits && (!isNotAlphanumeric || hasLetters)
        );
      },
      {
        message:
          "Название должно содержать слова из букв и не должно состоять только из цифр или артикулов",
      }
    ),
  state: z
    .enum([State.New, State.Used])
    .nullable()
    .superRefine((value, ctx) => {
      if (!value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Обязательное поле",
        });
      }
    }),
  type: z
    .enum([TypeAd.Myself, TypeAd.Resail])
    .nullable()
    .superRefine((value, ctx) => {
      if (!value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Обязательное поле",
        });
      }
    }),
  description: z.string().nonempty({ message: "Обязательное поле" }),
  price: z
    .string()
    .nonempty({ message: "Обязательное поле" })
    .refine((value) => /^\d+$/.test(value), {
      message: "Цена должна содержать только цифры",
    }),

  photos: z
    .array(
      z.object({
        name: z.string(),
        src: z.string(),
      })
    )
    .min(1, { message: "Загрузите фото" })
    .max(10, { message: "Можно загрузить не более 10 фото" }),
  video: z
    .string()
    .nullable()
    .refine(
      (value) => {
        if (!value) return true;
        return (
          value.startsWith("http") && value.includes("/") && value.includes(".")
        );
      },
      {
        message: "Ссылка должна начинаться на 'http', содержать '/' и '.'",
      }
    ),
  city: z
    .string()
    .nullable()
    .superRefine((value, ctx) => {
      if (!value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Обязательное поле",
        });
      }
    }),
  phone: z
    .string()
    .nonempty({ message: "Обязательное поле" })
    .refine((value) => /^\d+$/.test(value), {
      message: "Телефон должен содержать только цифры",
    }),

  connectionType: z
    .enum([ConnectionType.All, ConnectionType.Messages, ConnectionType.Calls])
    .nullable()
    .superRefine((value, ctx) => {
      if (!value) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Обязательное поле",
        });
      }
    }),
});

export type Form = z.infer<typeof formSchema>;

// export const adFormSchema = z.object({
//   title: z
//     .string()
//     .min(1, "Название не может быть пустым")
//     .regex(
//       /^[a-zA-Zа-яА-ЯёЁ]+.*$/,
//       "Название должно содержать хотя бы одно слово из букв"
//     )
//     .regex(/^(?![0-9]+)/, "Название не должно начинаться с цифр"),

//   type: z.enum(["Продаю свое", "Товар приобретен на продажу"], {
//     errorMap: () => ({ message: "Выберите вид объявления" }),
//   }),

//   description: z.string().min(1, "Описание не может быть пустым"),

//   price: z
//     .string()
//     .regex(/^\d+$/, "Цена должна содержать только цифры")
//     .transform(Number)
//     .refine((num) => num > 0, "Цена должна быть положительным числом"),

//   photos: z
//     .array(z.string().url("Некорректная ссылка на фото"))
//     .min(1, "Добавьте хотя бы одну фотографию")
//     .max(10, "Можно добавить максимум 10 фотографий"),

//   video: z
//     .string()
//     .optional()
//     .refine(
//       (val) => !val || val.startsWith("http"),
//       "Ссылка должна начинаться с 'http'"
//     )
//     .refine(
//       (val) => !val || val.includes("/"),
//       "Ссылка должна содержать символ '/'"
//     )
//     .refine(
//       (val) => !val || val.includes("."),
//       "Ссылка должна содержать символ '.'"
//     ),

//   city: z.enum(
//     ["Москва", "Санкт-Петербург", "Екатеринбург", "Казань", "Краснодар"],
//     {
//       errorMap: () => ({ message: "Выберите город из списка" }),
//     }
//   ),

//   phone: z
//     .string()
//     .min(1, "Телефон не может быть пустым")
//     .regex(/^\d+$/, "Телефон должен содержать только цифры"),
// });
