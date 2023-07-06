import PaymentForm from "@/components/PaymentForm/PaymentForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <PaymentForm />
    </main>
  );
}
