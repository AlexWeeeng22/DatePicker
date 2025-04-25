// components/datePicker.tsx
// entrance components
import React from "react";
import DateRangePicker from "./dateRangePicker";

export default function DatePicker() {
  return (
    <div style={{ padding: '1rem' }}>
      {/* <h2 style={{ marginBottom: '8px' }}>Please Select Date：</h2> */}
      <DateRangePicker />
    </div>
  );
}