import React from "react";
import styled, { css } from "styled-components";
interface IProps {
  children?: React.ReactNode;
  disabled?: boolean;
  selected?: boolean;
  className?: string;
  onClick?: () => void;
}

export const ColorButtonSt = styled(ColorButton)`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  ${(props) =>
    props.selected &&
    css`
      border: 2px solid #ff2222;
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: #666 !important;
      color: #ccc !important;
    `}
`;

function ColorButton({ children, disabled, selected, className, onClick }: IProps) {
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default ColorButton;
