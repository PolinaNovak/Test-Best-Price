import { ReactNode } from "react";
import styles from "./section.module.css";
export interface SectionProps {
  title: string;
  children: ReactNode;
}
export const Section = ({ title, children }: SectionProps) => {
  return (
    <div className={styles.root}>
      <span className={styles.title}>{title}</span>
      {children}
    </div>
  );
};
