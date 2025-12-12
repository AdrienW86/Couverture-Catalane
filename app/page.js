import Banner from "@/components/Banner/Banner";
import Services from "@/components/Services/Services";
import styles from "./page.module.css";

export const metadata = {
  title: "Couverture Catalane",
  description: "Votre couvreur professionnel de la toiture à Perpignan",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner />      
        <Services /> 
      </main>      
    </div>
  );
}
