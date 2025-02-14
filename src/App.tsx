import styles from "./app.module.css";
import { AdForm } from "./features/ad-form/ad-form";
import { FormProvider } from "./lib/providers/form-provider";

function App() {
  return (
    <FormProvider>
      <div className={styles.root}>
        <div className={styles.container}>
          <h1 className={styles.title}>Добавить объявление</h1>
          <AdForm />
        </div>
      </div>
    </FormProvider>
  );
}

export default App;
