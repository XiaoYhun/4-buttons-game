import React, { useState, useEffect } from "react";
import {
  GlobalStyle,
  AppSt,
  BlueButtonSt,
  GreenButtonSt,
  YellowButtonSt,
  ResetButtonSt,
  ButtonsWrapper,
  RelativeWrapper,
} from "./App.css";
import { getCurrentState, updateNewState, resetState } from "./api";

interface IResponse {
  currentState: string;
  yellowVisited: boolean;
}

function App() {
  const [state, setState] = useState<string>("blue");
  const [yellowVisited, setYellowVisited] = useState<boolean>(false);
  useEffect(() => {
    // Get current state on init
    getCurrentState().then(({ currentState, yellowVisited }: IResponse) => {
      setState(currentState);
      setYellowVisited(yellowVisited);
    });
  }, []);

  const changeState = (newState: string) => {
    updateNewState(newState)
      .then((res: IResponse) => {
        setState(res.currentState);
        setYellowVisited(res.yellowVisited);
      })
      .catch((err) => console.log(err.message));
  };

  const resetStates = () => {
    resetState()
      .then((res: IResponse) => {
        setState(res.currentState);
        setYellowVisited(res.yellowVisited);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <AppSt>
      <RelativeWrapper>
        <ButtonsWrapper>
          <GreenButtonSt
            onClick={() => changeState("green")}
            selected={state === "green"}
            disabled={state === "yellow"}
          >
            Green
          </GreenButtonSt>
          <BlueButtonSt onClick={() => changeState("blue")} selected={state === "blue"}>
            Blue
          </BlueButtonSt>
          <YellowButtonSt
            onClick={() => changeState("yellow")}
            selected={state === "yellow"}
            disabled={state !== "yellow" && (state === "green" || yellowVisited)}
          >
            Yellow
          </YellowButtonSt>
        </ButtonsWrapper>
        <ResetButtonSt onClick={() => resetStates()} />
      </RelativeWrapper>

      <GlobalStyle />
    </AppSt>
  );
}

export default App;
