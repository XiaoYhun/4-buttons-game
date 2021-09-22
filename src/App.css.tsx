import styled, { createGlobalStyle, css } from "styled-components";
import ResetButton from "./components/ResetButton";
import { ColorButtonSt } from "./components/ColorButton";

export const GlobalStyle = createGlobalStyle`
  button{
    color:white;
    font-size:15px;
    font-weight: 600;
    outline: none;
	  border: none;
    cursor:pointer;
    transition: ease all 0.2s;
  }
  button:hover{
    transform: scale(0.97);
  }
`;

export const BlueButtonSt = styled(ColorButtonSt)`
  background-color: #1800ee;
  align-self: flex-start;
`;
export const GreenButtonSt = styled(ColorButtonSt)`
  background-color: #009b00;
`;
export const YellowButtonSt = styled(ColorButtonSt)`
  background-color: #d6b80b;
`;
export const ResetButtonSt = styled(ResetButton)`
  border-radius: 5px;
  color: #4d4d4d;
  width: 80px;
  height: 40px;
  position: absolute;
  right: 20px;
`;

export const AppSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
`;

export const RelativeWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
export const ButtonsWrapper = styled.div`
  flex-shrink: 0;
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
`;
