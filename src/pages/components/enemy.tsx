import React, { useEffect, useRef } from "react";
import styles from "./styles/Enemy.module.css";
import { useBulletContext } from "@/api/bulletContext";

export default function Enemy({ id }: any) {
  const enemyRef = useRef<HTMLDivElement>(null);
  const { bulletsList, updateBullet } = useBulletContext();

  useEffect(() => {
    if (enemyRef.current) {
      let enemyPosition = enemyRef.current.getBoundingClientRect();
      bulletsList.map((bullets) => {
        if (
          bullets.positionX > enemyPosition.left &&
          bullets.positionX < enemyPosition.right &&
          bullets.positionY > enemyPosition.top &&
          bullets.positionY < enemyPosition.bottom
        ) {
          enemyRef.current?.remove();
          updateBullet(bullets.bulletId, 0, id);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bulletsList]);

  return (
    <div className={styles.enemyContainer}>
      <div ref={enemyRef} className={styles.enemy}></div>
    </div>
  );
}
