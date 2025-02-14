import clsx from "clsx";
import { LinkStates } from "../../../lib/constants/help-constants";
import styles from "./help.module.css";

interface HelpProps {
  text: string;
  isLink?: LinkStates;
}
export const Help = ({ text, isLink = LinkStates.NotLink }: HelpProps) => {
  return (
    <div className={styles.root}>
      {isLink === LinkStates.IsLink ? (
        <a href="/" className={clsx(styles.text, styles.decorated)}>
          {text}
        </a>
      ) : (
        <span className={styles.text}>{text}</span>
      )}
    </div>
  );
};
