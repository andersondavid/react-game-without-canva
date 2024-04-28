import React, { useEffect, useRef } from "react";
import styles from "@/styles/Home.module.css";

export default function Enemy({ id }: any) {
  const enemyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (enemyRef.current) {
      var posicao = enemyRef.current.getBoundingClientRect();
      console.log("Top:", posicao.top);
      console.log("Left:", posicao.left);
      console.log("Bottom:", posicao.bottom);
      console.log("Right:", posicao.right);
      console.log("Width:", posicao.width);
      console.log("Height:", posicao.height);


    }
  }, []);

  return <div ref={enemyRef} className={styles.enemyContainer}>{id}</div>;
}
