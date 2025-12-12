"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.css";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image 
            src="/logo1.png"
            alt="Logo"
            width={80}
            height={80}
          />
        </Link>
        <button className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav className={styles.navDesktop}>
          <Link href="/">Accueil</Link>
           <Link href="/couverture" className={styles.li}>Couverture</Link>
          <Link href="/zinguerie" className={styles.li}>Zinguerie</Link>
          <Link href="/nettoyage" className={styles.li}>Nettoyage</Link>
          <Link href="/reparations" className={styles.li}>Réparations</Link>
          <Link href="/fuites" className={styles.li}>Fuites</Link>
          <Link href="/charpente" className={styles.li}>Charpente</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className={styles.navMobile}
        >
          <Link href="/" onClick={closeMenu}>Accueil</Link>
          <Link href="/#services" onClick={closeMenu}>Services</Link>
          <Link href="/couverture" onClick={closeMenu}>Couverture</Link>
          <Link href="/zinguerie" onClick={closeMenu}>Zinguerie</Link>
          <Link href="/nettoyage" onClick={closeMenu}>Nettoyage</Link>
          <Link href="/reparations" onClick={closeMenu}>Réparations</Link>
          <Link href="/fuites" onClick={closeMenu}>Fuites</Link>
          <Link href="/charpente" onClick={closeMenu}>Charpente</Link>
          <Link href="/a-propos" onClick={closeMenu}>À propos</Link>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>
        </motion.nav>
      )}
    </header>
  );
}