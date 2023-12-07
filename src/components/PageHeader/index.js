import styles from "./PageHeader.module.scss";
export const PageHeader = ({ text }) => {
  return <h1 className={styles.pageHeader}>{text}</h1>;
};
