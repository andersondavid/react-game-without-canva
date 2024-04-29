import React, { ReactNode, createContext, useContext, useState } from "react";

interface BulletContextType {
  bulletsList: BulletPosition[];
  setbulletsList: (bulletsList: BulletPosition[]) => void;
  removeBullet: (bulletId: string) => void;
}
export interface BulletPosition {
  positionX: number;
  positionY: number;
  bulletId: string;
}

const BulletContext = createContext<BulletContextType>({
  bulletsList: [],
  setbulletsList: () => {},
  removeBullet: () => {},
});

interface Props {
  children: ReactNode;
}

export const BulletContextProvider: React.FC<Props> = ({ children }) => {
  const [bulletsList, setbulletsList] = useState<BulletPosition[]>([]);

  const removeBullet = (bulletId: string) => {
    let newArrBullets = bulletsList.filter(
      (bullet) => bullet.bulletId !== bulletId
    );
    setbulletsList(newArrBullets);
  };

  return (
    <BulletContext.Provider
      value={{ bulletsList, setbulletsList, removeBullet }}
    >
      {children}
    </BulletContext.Provider>
  );
};

export const useBulletContext = () => useContext(BulletContext);
