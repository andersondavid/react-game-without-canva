import React, { useRef } from "react";
import Bullet from "./bullet";
import styles from "./styles/Bullet.module.css";
import { BulletContext } from "@/api/bulletContext";


export default function SpawnBullets() {
  const spawnBulletsRef = useRef<HTMLDivElement>(null);
  const { bulletsList } = BulletContext();


  return (
    <div className={styles.spawnBullet} ref={spawnBulletsRef}>
      {bulletsList.map((bullet, index) => (
        <Bullet
          bulletId={bullet.bulletId}
          positionX={bullet.positionX}
          key={bullet.bulletId}
        />
      ))}
    </div>
  );
}
