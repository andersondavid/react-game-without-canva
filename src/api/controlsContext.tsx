import React, { ReactNode, createContext, useContext, useState } from "react";

export interface Buttons {
  UP: Boolean;
  DOWN: Boolean;
  LEFT: Boolean;
  RIGHT: Boolean;
  ATTACK: Boolean;
}

interface Props {
  children: ReactNode;
}

export interface ControlsContextType {
  gameInput: Buttons;
  handleInput: (button: Buttons) => void;
}

const inititalInput: Buttons = {
  ATTACK: false,
  DOWN: false,
  LEFT: false,
  RIGHT: false,
  UP: false,
};

const MyControlContext = createContext<ControlsContextType>({
  gameInput: inititalInput,
  handleInput: () => {},
});

export const ControlsContextProvider: React.FC<Props> = ({ children }) => {
  const [gameInput, setGameInput] = useState<Buttons>(inititalInput);

  const handleInput = (buttons: Buttons) => {
    requestAnimationFrame(() => setGameInput(buttons));
  };

  return (
    <MyControlContext.Provider value={{ handleInput, gameInput }}>
      {children}
    </MyControlContext.Provider>
  );
};

export const ControlContext = () => useContext(MyControlContext);
