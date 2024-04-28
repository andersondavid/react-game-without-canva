import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/Bullet.module.css";

export default function Bullet() {
  const bulletRef = useRef<HTMLDivElement>(null);
  const [posicaoY, setPosicaoY] = useState(0);

  const moverDiv = () => {
    const bullet = bulletRef.current;
    if (bullet) {
      const finalX = window.innerHeight - bullet.offsetHeight; 
      const incremento = 5;

      if (posicaoY < finalX) {
        requestAnimationFrame(() => {
          setPosicaoY((prevPosicaoY) => prevPosicaoY + incremento);
        });
      } else {
        bullet.remove()
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
        bottom: posicaoY,
        left: '1000px'
      }}
    ></div>
  );
}
