import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/Bullet.module.css";
import { useBulletContext } from "@/api/context";

interface Props {
  bulletId: string;
  positionX: number;
}

export default function Bullet({ bulletId, positionX }: Props) {
  const { bulletsList, setbulletsList, removeBullet } = useBulletContext();
  const bulletRef = useRef<HTMLDivElement>(null);

  const thisBullet = bulletsList.filter(
    (bullet) => bullet.bulletId == bulletId
  );

  const [positionY, setPositionY] = useState(thisBullet[0].positionY);

  const moverDiv = () => {
    const bullet = bulletRef.current;
    if (bullet) {
      const finalX = window.innerHeight - bullet.offsetHeight;
      const speed = 5;

      if (positionY < finalX) {
        requestAnimationFrame(() => {
          setPositionY((prevPostionY) => prevPostionY + speed);
          updateContext();
        });
      } else {
        removeBullet(bulletId);
      }
    }
  };

  const updateContext = () => {
    let newArrBullets = bulletsList.map((bullet) => {
      if (bullet.bulletId === bulletId) {
        bullet.positionY = positionY;
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
        bottom: positionY,
        left: positionX,
      }}
    >
      {bulletsList.length}
    </div>
  );
}
