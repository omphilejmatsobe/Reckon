import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
      </div>
      <div className={styles.display}>
	<div className={styles.hero-login}>
	</div>
	<div className={styles.hero-images}>
	</div>
      </div>
    </main>
  );
}
