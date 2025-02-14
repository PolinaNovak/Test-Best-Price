import styles from "./textarea.module.css";

export const Textarea = ({
  ...props
}: React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>) => {
  return (
    <div className={styles.root}>
      <textarea {...props} className={styles.textarea} />
    </div>
  );
};
