import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

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

const inititalInput = {
  ATTACK: false,
  DOWN: false,
  LEFT: false,
  RIGHT: false,
  UP: true,
};

const PressButton = createContext<ControlsContextType>({
  gameInput: inititalInput,
  handleInput: () => {},
});


export const ControlsContextProvider: React.FC<Props> = ({ children }) => {
  const [gameInput, setGameInput] = useState<Buttons>(inititalInput);

  const handleInput = (buttons: Buttons) => {
    const str1 = JSON.stringify(gameInput);
    const str2 = JSON.stringify(buttons);
    if(str1 == str2){
      console.log('são diferentes');
    } else {
      console.log('são iquais');
    }
  }

  return (
    <PressButton.Provider value={{ handleInput, gameInput }}>
      {children}
    </PressButton.Provider>
  );
};

export const useControlContext = () => useContext(PressButton);
