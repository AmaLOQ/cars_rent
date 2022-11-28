import * as React from 'react';
import RadioBtn from './radio-btn-style';

export const RadioButtons = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
		<RadioBtn
	  	  size="small"
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
      />
  );
}
