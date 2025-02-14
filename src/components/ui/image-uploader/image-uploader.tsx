import { ChangeEvent, ComponentRef, useRef } from "react";
import styles from "./image-uploader.module.css";
import { CameraIcon } from "../icons/camera-icon";
import { CloseIcon } from "../icons/close-icon";
export interface ImageUploaderValue {
  name: string;
  src: string;
}
export interface ImageUploaderProps {
  value: ImageUploaderValue | null;
  onChange: (value: ImageUploaderValue | null) => void;
}

export const ImageUploader = ({ value, onChange }: ImageUploaderProps) => {
  const inputRef = useRef<ComponentRef<"input">>(null);
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    console.log(file);

    if (!file) return;
    const src = URL.createObjectURL(file);
    onChange({
      src,
      name: file?.name,
    });
  };

  const handleDelete = () => {
    onChange(null);
  };

  const render = () => {
    if (!value?.src) {
      return (
        <div
          className={styles.uploader}
          onClick={() => inputRef?.current?.click()}
        >
          <div className={styles.icon}>
            <CameraIcon />
          </div>
        </div>
      );
    }

    return (
      <div className={styles.picture}>
        <button className={styles.delete} onClick={() => handleDelete()}>
          <CloseIcon />
        </button>
        <img
          src={value?.src}
          width={"120px"}
          height={"90px"}
          className={styles.image}
        />
      </div>
    );
  };

  return (
    <div className={styles.root}>
      {render()}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleUpload}
        style={{ visibility: "hidden" }}
      />
    </div>
  );
};
