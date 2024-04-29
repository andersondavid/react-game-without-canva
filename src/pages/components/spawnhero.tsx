import React from "react";
import Hero from "./Hero";
import styles from "./styles/SpawnHero.module.css";

export default function SpawnHero() {
  return (
    <div className={styles.spawnhero}>
      <Hero />
    </div>
  );
}
