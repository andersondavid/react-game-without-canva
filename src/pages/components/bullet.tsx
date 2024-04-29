import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/Bullet.module.css";
import { useBulletContext } from "@/api/bulletContext";

interface Props {
  bulletId: string;
  positionX: number;
}

export default function Bullet({ bulletId, positionX }: Props) {
  const { bulletsList, removeBullet, setbulletsList } = useBulletContext();
  const bulletRef = useRef<HTMLDivElement>(null);

  const [posLocalY, setPosLocalY] = useState(0);

  const moverDiv = () => {
    if (bulletRef.current) {
      const finalX = window.innerHeight - bulletRef.current.offsetHeight;
      const speed = 2;

      if (posLocalY < finalX) {
        requestAnimationFrame(() => {
          setPosLocalY((prevPostionY) => prevPostionY + speed);
          let bulletY = bulletRef.current?.getBoundingClientRect().y || 0;
          updateContext(bulletId, bulletY);
        });
      } else {
        removeBullet(bulletId);
      }
    }
  };

  const updateContext = (bulletId: string, bulletY: number) => {
    let newArrBullets = bulletsList.map((bullet) => {
      if (bulletRef && bullet.bulletId === bulletId) {
        bullet.positionY = bulletY;
      }
      return bullet;
    });

    setbulletsList(newArrBullets);
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
    >
      {bulletsList[0].positionY}
      {"  "}
      {bulletsList[0].positionX}
    </div>
  );
}
