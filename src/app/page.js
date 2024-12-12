"use client"

import styles from "./page.module.css";
// lib/fontawesome.js


import HomePage from "./pages/Home/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage/>
    </div>
  );
}
