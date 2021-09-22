import React from "react";

interface IProps {
  className?: string;
  onClick?: () => void;
}
function ResetButton({ className, onClick }: IProps) {
  return (
    <button className={className} onClick={onClick}>
      Reset
    </button>
  );
}

export default ResetButton;
