import React, { useEffect, useRef, useState } from "react";
import styles from "./styles/Hero.module.css";
import { ControlContext } from "@/api/controlsContext";
import { BulletContext } from "@/api/bulletContext";

export default function Hero() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(0);
  const { createBullet } = BulletContext();
  const { gameInput } = ControlContext();

  const move = () => {
    const speed = 10;

    if (gameInput.LEFT) {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x - speed,
      }));
    }
    if (gameInput.RIGHT) {
      setPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + speed,
      }));
    }

    if (gameInput.ATTACK) {
      createBullet(position.x, 50);
    }
  };

  const animate = () => {
    move();
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  });

  return <div className={styles.hero} style={{ left: position.x }}></div>;
}
