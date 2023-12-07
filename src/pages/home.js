import styles from "./pages.module.scss";
import { PageHeader } from "../components/PageHeader";

export const Home = () => {
  return (
    <div className={styles.content}>
      <PageHeader text={"Dashboard"} />
    </div>
  );
};
