import * as React from 'react';
import { StyledControlledSwitcher } from './simple-switcher-style';


export const ControlledSwitcher = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <StyledControlledSwitcher
      checked={checked}
      onChange={handleChange}
	  size="medium"
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}