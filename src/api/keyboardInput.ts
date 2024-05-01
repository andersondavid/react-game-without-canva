import { useEffect, useState } from "react";
import { Buttons } from "./controlsContext";

function useKeyboardInput() {
  const [isKeyPressed, setIsKeyPressed] = useState<Buttons>({
    UP: false,
    LEFT: false,
    DOWN: false,
    RIGHT: false,
    ATTACK: false,
  });

  useEffect(() => {
    const selectKey = (event: KeyboardEvent, type: string) => {
      if (event.key == "ArrowUp") {
        event.preventDefault();
        if (type == "pressed") {
          setIsKeyPressed({ ...isKeyPressed, UP: true });
        } else if (type == "released") {
          setIsKeyPressed({ ...isKeyPressed, UP: false });
        }
      }
      if (event.key == "ArrowDown") {
        event.preventDefault();
        if (type == "pressed") {
          setIsKeyPressed({ ...isKeyPressed, DOWN: true });
        } else if (type == "released") {
          setIsKeyPressed({ ...isKeyPressed, DOWN: false });
        }
      }
      if (event.key == "ArrowLeft") {
        event.preventDefault();
        if (type == "pressed") {
          setIsKeyPressed({ ...isKeyPressed, LEFT: true });
        } else if (type == "released") {
          setIsKeyPressed({ ...isKeyPressed, LEFT: false });
        }
      }
      if (event.key == "ArrowRight") {
        event.preventDefault();
        if (type == "pressed") {
          setIsKeyPressed({ ...isKeyPressed, RIGHT: true });
        } else if (type == "released") {
          setIsKeyPressed({ ...isKeyPressed, RIGHT: false });
        }
      }
      if (event.key == " ") {
        event.preventDefault();
        if (type == "pressed") {
          setIsKeyPressed({ ...isKeyPressed, ATTACK: true });
        } else if (type == "released") {
          setIsKeyPressed({ ...isKeyPressed, ATTACK: false });
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      selectKey(event, "pressed");
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      selectKey(event, "released");
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  return isKeyPressed;
}

export default useKeyboardInput;
