import * as React from 'react';
import { StyledActiveMenuBtn, StyledMenuActive, StyledMenuItemActive, Arrow } from './menu-active-style';
import { Link } from '@mui/material';

export const PositionedMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledActiveMenuBtn
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<Arrow/>}
      >
        Аренда авто
      </StyledActiveMenuBtn>
      <StyledMenuActive
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <StyledMenuItemActive onClick={handleClose}><Link href="#" underline="none">Аренда авто</Link></StyledMenuItemActive>
        <StyledMenuItemActive onClick={handleClose}><Link href="#" underline="none">Условия</Link></StyledMenuItemActive>
        <StyledMenuItemActive onClick={handleClose}><Link href="#" underline="none">Цены</Link></StyledMenuItemActive>
      </StyledMenuActive>
    </div>
  );
}