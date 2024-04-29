import React, { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface BulletContextType {
  bulletsList: BulletInstance[];
  createBullet: (posX: number) => void;
  updateBullet: (
    bulletId: string,
    bulletY: number | null,
    killEnemy?: number | null
  ) => void;
}
export interface BulletInstance {
  positionX: number;
  positionY: number;
  bulletId: string;
  killEnemy?: number;
}

const BulletContext = createContext<BulletContextType>({
  bulletsList: [],
  createBullet: () => {},
  updateBullet: () => {},
});

interface Props {
  children: ReactNode;
}

export const BulletContextProvider: React.FC<Props> = ({ children }) => {
  const [bulletsList, setbulletsList] = useState<BulletInstance[]>([]);

  const updateBullet = (
    bulletId: string,
    bulletY: number | null,
    killEnemy?: number | null
  ) => {
    if (bulletY !== null && killEnemy == null) {
      let newArrBullets = bulletsList.map((bullet) => {
        if (bullet.bulletId === bulletId) {
          bullet.positionY = bulletY;
        }
        return bullet;
      });
      setbulletsList(newArrBullets);
    } else if (killEnemy != null) {
      let newArrBullets = bulletsList.map((bullet) => {
        if (bullet.bulletId === bulletId) {
          bullet.killEnemy = killEnemy;
        }
        return bullet;
      });
      setbulletsList(newArrBullets);
    } else {
      setbulletsList((prev) =>
        prev.filter((bullet) => bullet.bulletId !== bulletId)
      );
    }
  };

  const createBullet = (posX: number) => {
    setbulletsList([
      ...bulletsList,
      { bulletId: uuidv4(), positionX: posX, positionY: 0 },
    ]);
  };

  return (
    <BulletContext.Provider value={{ bulletsList, createBullet, updateBullet }}>
      {children}
    </BulletContext.Provider>
  );
};

export const useBulletContext = () => useContext(BulletContext);
