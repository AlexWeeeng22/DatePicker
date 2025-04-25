// components/dateRangePicker.tsx
// main component, render all dateCell
import React from "react";

import { useDateRange } from '../hooks/useDateRange';
import { generateMonthDays } from '../utils/date';
import DayCell from './dayCell';
import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  padding: 1rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: fit-content;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;

const NavButton = styled.button`
  font-size: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function DateRangePicker() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);
  const { startDate, endDate, onDateClick, isInRange } = useDateRange();

  const days = generateMonthDays(currentMonth.getFullYear(), currentMonth.getMonth());

  return (
    <Container>
      <Header>
        <NavButton onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
          ←
        </NavButton>
        <span>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <NavButton onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
          →
        </NavButton>
      </Header>
      <Grid>
        {days.map((d) => {
          const selected =
            startDate?.toDateString() === d.toDateString() ||
            endDate?.toDateString() === d.toDateString();
          const disabled = d < new Date(today.toDateString());

          return (
            <DayCell
              key={d.toISOString()}
              date={d}
              isSelected={selected}
              isInRange={isInRange(d)}
              disabled={disabled}
              onClick={() => !disabled && onDateClick(d)}
            />
          );
        })}
      </Grid>
    </Container>
  );
}