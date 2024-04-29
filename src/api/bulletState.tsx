import { BulletInstance, UpdateBullet } from "./bulletContext";


type BulletState = (
  bulletId: string,
  bulletY: number | null,
  bulletsList: BulletInstance[],
  setbulletsList: React.Dispatch<React.SetStateAction<BulletInstance[]>>,
  killEnemy?: number | undefined,
) => void


export const bulletState: BulletState = (
  bulletId,
  bulletY,
  bulletsList,
  setbulletsList,
  killEnemy,
) => {
  if (bulletY !== null && killEnemy == undefined) {
    let newArrBullets = bulletsList.map((bullet) => {
      if (bullet.bulletId === bulletId) {
        bullet.positionY = bulletY;
      }
      return bullet;
    });
    setbulletsList(newArrBullets);
  } else if (killEnemy != undefined) {
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