import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Enemy from "./components/enemy";
import { useState } from "react";
import Bullet from "./components/bullet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Game</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.space}>
          <div className={styles.enemySpace}>
            <div className={styles.enemyZone}>
              <Enemy id={1} />
              <Enemy id={2} />
              <Enemy id={3} />
              <Enemy id={4} />
              <Enemy id={5} />
              <Enemy id={6} />
              <Enemy id={7} />
              <Enemy id={8} />
              <Enemy id={9} />
              <Enemy id={10} />
              <Enemy id={11} />
              <Enemy id={12} />
              <Enemy id={13} />
              <Enemy id={14} />
              <Enemy id={15} />
              <Enemy id={16} />
              <Enemy id={17} />
              <Enemy id={18} />
              <Enemy id={19} />
              <Enemy id={20} />
              <Enemy id={21} />
              <Enemy id={22} />
              <Enemy id={23} />
              <Enemy id={24} />
              <Enemy id={25} />
              <Enemy id={26} />
              <Enemy id={27} />
              <Enemy id={28} />
              <Enemy id={29} />
              <Enemy id={30} />
            </div>
          </div>
          <div className={styles.heroSpace}></div>
          <div className={styles.spawnBullet}>
            <Bullet />
          </div>
        </div>
      </main>
    </>
  );
}
