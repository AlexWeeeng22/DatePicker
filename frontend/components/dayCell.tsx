// components/dayCell.tsx
// style of each dayCell and logic on click 
import React from "react";
// components/DayCell.tsx
import styled from 'styled-components';

const Cell = styled.button<{
  isSelected: boolean;
  isInRange: boolean;
  disabled?: boolean;
}>`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  background: ${({ isSelected, isInRange }) =>
    isSelected ? '#3b82f6' : isInRange ? '#dbeafe' : 'transparent'};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#111')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  transition: background 0.2s;
  &:hover {
    background: ${({ disabled }) => (disabled ? 'none' : '#e5e7eb')};
  }
`;

interface DayCellProps {
  date: Date;
  isSelected: boolean;
  isInRange: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export default function DayCell({ date, isSelected, isInRange, disabled, onClick }: DayCellProps) {
  return (
    <Cell isSelected={isSelected} isInRange={isInRange} disabled={disabled} onClick={onClick}>
      {date.getDate()}
    </Cell>
  );
}