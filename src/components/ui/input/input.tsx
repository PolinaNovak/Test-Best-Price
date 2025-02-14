import styles from "./input.module.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Input = ({ title, required, type, ...props }: InputProps) => {
  return (
    <div className={styles.root}>
      <input className={styles.input} type={type} {...props} />
    </div>
  );
};
