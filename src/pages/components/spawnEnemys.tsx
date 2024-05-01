import React, { useEffect, useRef, useState } from "react";
import Enemy from "./enemy";
import styles from "./styles/SpawnEnemys.module.css";

export default function SpawnEnemys() {

  const speed = 5

  const enemyZone = useRef<HTMLDivElement>(null);
  const enemySafeArea = useRef<HTMLDivElement>(null);
  const [enemyPosX, setEnemyPosX] = useState<number>(0);
  const [enemySpeed, setEnemySpeed] = useState<number>(speed);

  const moveEnemy = () => {
    const enemyZoneWitdh =
      enemyZone.current?.getBoundingClientRect().width || 0;
    const enemyWidth = enemySafeArea.current?.offsetWidth || 0;

    requestAnimationFrame(() => {
      const isEnemyTouchedRight = enemyPosX + enemyWidth >= enemyZoneWitdh;
      const isEnemyTouchedLeft = enemyPosX <= 0;

      if (isEnemyTouchedRight) {
        setEnemySpeed(-speed);
      } else if (isEnemyTouchedLeft) {
        setEnemySpeed(speed);
      }

      if (enemySafeArea.current) {
        setEnemyPosX((prev) => prev + enemySpeed);
        enemySafeArea.current.style.left = enemyPosX + "px";
      }
    });
  };

  useEffect(() => {
    moveEnemy();
  });

  return (
    <div className={styles.enemyZone} ref={enemyZone}>
      <div className={styles.enemySafeArea} ref={enemySafeArea}>
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
  );
}
