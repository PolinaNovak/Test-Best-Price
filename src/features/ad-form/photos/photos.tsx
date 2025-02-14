import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Form } from "../../../lib/utils/ad-form-scheme";
import { ImageUploader } from "../../../components/ui/image-uploader/image-uploader";
import { FormBox } from "../../../components/ui/form-box/form-box";
import styles from "./photos.module.css";
export const Photos = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<Form>();
  const { fields, append, remove } = useFieldArray<Form>({
    control,
    name: "photos",
  });

  return (
    <FormBox
      label="Фотографии"
      description={!!fields?.length && `${fields?.length} из 10`}
      error={errors?.photos?.message}
    >
      <div className={styles.root}>
        {fields?.map(({ id }, idx) => {
          return (
            <Controller
              key={id}
              control={control}
              name={`photos.${idx}`}
              render={({ field: { value } }) => {
                return (
                  <ImageUploader
                    value={value}
                    onChange={(value) => !value && remove(idx)}
                  />
                );
              }}
            />
          );
        })}
        {fields?.length < 10 && (
          <ImageUploader
            value={null}
            onChange={(image) => image && append(image)}
          />
        )}
      </div>
    </FormBox>
  );
};
