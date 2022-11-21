import * as React from 'react';
import TextField from '@mui/material/TextField';
import  LocalizationProvider  from '@mui/x-date-pickers/LocalizationProvider';
import  AdapterDayjs  from '@mui/x-date-pickers/AdapterDayjs';
import  DesktopDatePicker  from '@mui/x-date-pickers/DesktopDatePicker';

export default function Calendar() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Date"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
  );
}