import clsx from "clsx";
import styles from "./button-group.module.css";
interface ButtonGroupProps<T extends string> {
  values: { label: string; value: string }[];
  value: T | null;
  onChange: (value: T | null) => void;
}

export const ButtonGroup = <T extends string>({
  values,
  value,
  onChange,
}: ButtonGroupProps<T>) => {
  const handleChange = (selectedValue: T) => {
    if (selectedValue !== value) {
      onChange(selectedValue);
      return;
    }
    onChange(null);
  };
  return (
    <div className={styles.root}>
      {values.map(({ value: currentValue, label }) => {
        const isActive = currentValue === value;
        return (
          <button
            type="button"
            className={clsx(styles.button, isActive && styles.activeButton)}
            style={{
              backgroundColor: isActive ? "black" : "white",
            }}
            key={currentValue}
            onClick={(e) => {
              e.preventDefault();
              handleChange(currentValue as T);
            }}
          >
            <span className={styles.label}>{label}</span>
          </button>
        );
      })}
    </div>
  );
};
