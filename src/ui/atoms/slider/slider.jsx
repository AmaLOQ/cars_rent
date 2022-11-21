import React from 'react';
import Box from '@mui/material/Box';
import { Slider } from '@mui/material';

export default function RangeSlider() {
  return (
    <Box width={300}>
      <Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto"/>
    </Box>
  );
}