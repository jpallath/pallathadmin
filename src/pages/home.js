import styles from "./pages.module.scss";
import { PageHeader } from "../components/PageHeader";
import { NewLikeForm } from "../components/NewLikeForm";

export const Home = () => {
  return (
    <div className={styles.content}>
      <PageHeader text={"Dashboard"} />
      <NewLikeForm />
    </div>
  );
};
