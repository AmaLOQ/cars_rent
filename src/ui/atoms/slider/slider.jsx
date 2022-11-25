import React from 'react';
import Box from '@mui/material/Box';
import SliderRange from './slider-style';

export default function RangeSlider() {
  return (
    <Box width={300}>
      <SliderRange size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto"/>
    </Box>
  );
}