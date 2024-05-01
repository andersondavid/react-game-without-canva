"use client";
import Head from "next/head";
//import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import SpawnBullets from "./components/spawnbullets";
import SpawnEnemys from "./components/spawnEnemys";
import SpawnHero from "./components/spawnhero";
import { useEffect } from "react";
import useKeyboardInput from "@/api/keyboardInput";
import { ControlContext } from "@/api/controlsContext";
import { BulletContext } from "@/api/bulletContext";
("./components/spawnBullets");

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { handleInput } = ControlContext();
  const keyPressed = useKeyboardInput();
  const { createBullet, bulletsList } = BulletContext();

  useEffect(() => {
    handleInput(keyPressed);
  });

  const shot = () => {
    createBullet(1000, 0);
  };
  return (
    <>
      <Head>
        <title>Space Game</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} onClick={() => shot()}>
        {bulletsList.length}
        <div className={styles.space}>
          <div className={styles.enemySpace}>
            <SpawnEnemys />
          </div>
          <div className={styles.heroSpace}>
            <SpawnHero />
          </div>
          <SpawnBullets />
        </div>
      </main>
    </>
  );
}
