import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/Bullet.module.css";
import { BulletContext } from "@/api/bulletContext";

interface Props {
  bulletId: string;
  positionX: number;
}

export default function Bullet({ bulletId, positionX }: Props) {
  const { bulletsList, updateBullet } = BulletContext();
  const bulletRef = useRef<HTMLDivElement>(null);

  const [posLocalY, setPosLocalY] = useState(0);

  const moverDiv = () => {
    if (bulletRef.current) {
      const finalX = window.innerHeight - bulletRef.current.offsetHeight;
      const speed = 10;

      const bullet = bulletsList.filter(
        (bullet) => bullet.bulletId == bulletId
      );

      if (posLocalY < finalX && !bullet[0].killEnemy) {
        requestAnimationFrame(() => {
          setPosLocalY((prevPostionY) => prevPostionY + speed);
          let bulletY = bulletRef.current?.getBoundingClientRect().y || 0;
          updateBullet(bulletId, bulletY);
        });
      } else {
        updateBullet(bulletId, null);
      }
    }
  };

  useEffect(() => {
    moverDiv();
  });

  return (
    <div
      ref={bulletRef}
      className={styles.bullet}
      style={{
        bottom: posLocalY,
        left: positionX,
      }}
    ></div>
  );
}
