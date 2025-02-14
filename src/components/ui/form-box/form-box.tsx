import { ReactNode } from "react";
import styles from "./form-box.module.css";

export interface FormBoxProps {
  label?: string;
  children: ReactNode;
  description?: ReactNode;
  error?: string;
  bottomAddon?: ReactNode;
}
export const FormBox = ({
  label,
  children,
  description,
  error,
  bottomAddon,
}: FormBoxProps) => {
  return (
    <div className={styles.root}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.field}>
        {children}
        {description && <div className={styles.description}>{description}</div>}
        {bottomAddon && <div className={styles.bottomAddon}>{bottomAddon}</div>}
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  );
};
