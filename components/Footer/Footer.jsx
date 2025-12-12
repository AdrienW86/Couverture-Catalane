import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.title}>
          <Image 
            src="/logo2.png"
            alt="Logo"
            width={220}
            height={220}
          />          
          <p className={styles.p}> Travaux de couverture professionnel</p>          
        </div>
        <ul className={styles.ul}>
          <Link href="/couverture" className={styles.li}>Couverture</Link>
          <Link href="/zinguerie" className={styles.li}>Zinguerie</Link>
          <Link href="/nettoyage" className={styles.li}>Nettoyage</Link>
          <Link href="/reparations" className={styles.li}>Réparations</Link>
          <Link href="/fuites" className={styles.li}>Fuites</Link>
          <Link href="/charpente" className={styles.li}>Charpente</Link>
        </ul>
      </section>
      <section className={styles.mentions}>
        <Link className={styles.link} href="/mentions-legales"> Mentions Légales </Link>
        <Link className={styles.link} href="/conditions-generales"> Conditions Générales </Link>
        <Link className={styles.link} href="/confidentialite">Politique de Confidentialité </Link>
      </section>
      <Link 
        className={styles.credits2} 
        href="https://code-v.fr" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Réalisé par <span className={styles.span}>  Codev </span> 
      </Link>
      <p className={styles.credits}> © {new Date().getFullYear()} Couverture Catalane  <br></br>- Tous droits réservés -</p>     
    </footer>
  )
}