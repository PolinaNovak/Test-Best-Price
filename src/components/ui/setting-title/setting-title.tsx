import styles from "./setting-title.module.css";

export const SettingTitle = ({ title }: { title: string }) => {
  return (
    <div className={styles.root}>
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
};
