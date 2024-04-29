import React, { ReactNode, createContext, useContext, useState } from "react";

interface BulletContextType {
  bulletsList: BulletInstance[];
  setbulletsList: (bulletsList: BulletInstance[]) => void;
  removeBullet: (bulletId: string) => void;
}
export interface BulletInstance {
  positionX: number;
  positionY: number;
  bulletId: string;
  remove?: Boolean;
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
  const [bulletsList, setbulletsList] = useState<BulletInstance[]>([]);

  const removeBullet = (bulletId: string) => {

    setbulletsList((prev) =>
      prev.filter((bullet) => bullet.bulletId !== bulletId)
    );

    
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
