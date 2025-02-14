import { ChangeEvent } from "react";
import { ArrowDownIcon } from "../icons/arrow-down-icon";
import styles from "./select.module.css";

export interface SelectProps<T extends string> {
  options: { label: string; value: T }[];
  value: T | null;
  onChange: (value: T | null) => void;
}

export const Select = <T extends string>({
  onChange,
  value,
  options,
}: SelectProps<T>) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target);

    const newValue = (e.target.value as T) || null;

    onChange(newValue);
  };
  return (
    <div className={styles.root}>
      <select
        value={value || undefined}
        onChange={handleChange}
        className={styles.root}
      >
        <option value={undefined} selected hidden />
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      <div className={styles.icon}>
        <ArrowDownIcon />
      </div>
    </div>
  );
};
